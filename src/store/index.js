import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ChurchModule from '@/store/modules/churches'
import MassModule from '@/store/modules/masses'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

Vue.use(Vuex)

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
export default new Vuex.Store({
  modules: {
    churches: ChurchModule,
    masses: MassModule
  },
  state: {
    pending: null,
    isLoggedIn: !!localStorage.getItem('token')
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
    }
  },
  getters: {
    isAutheticated (state) {
      return state.isLoggedIn
    }
  },
  actions: {
    login (context, payload) {
      context.commit(LOGIN) // show spinner
      axios.post('/oauth/token', {
        'email': payload.email,
        'password': payload.password,
        'grant_type': 'password'
      })
        .then((response) => {
          context.commit(LOGIN_SUCCESS)
          localStorage.setItem('token', response.data.access_token)
        })
    },

    logout (context) {
      axios.post('/oauth/revoke')
        .then((response) => {
          localStorage.setItem('token', '')
          context.commit(LOGOUT)
        })
    }
  }
})
