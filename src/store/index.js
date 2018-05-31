import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ChurchModule from '@/store/modules/churches'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:3000'
export default new Vuex.Store({
  modules: {
    churches: ChurchModule
  },
  state: {
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
    }
  }
})
