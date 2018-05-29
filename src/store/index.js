import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    authenticated: false
  },
  mutations: {
    loginSuccess (state) {
      state.authenticated = true
    }
  },
  getters: {
    isAutheticated (state) {
      return state.authenticated
    }
  },
  actions: {
    login (context, payload) {
      axios.post('http://localhost:3000/login', {
        'user': {
          'email': payload.email,
          'password': payload.password
        }
      })
        .then((response) => {
          console.log(response.headers)
        })
    }
  }
})
