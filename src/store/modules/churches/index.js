import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default {
  namespaced: true,
  state: {
    churchWasCreated: false,
    churchesList: []
  },
  mutations: {
    createdChurch (state, newChurch) {
      state.churchWasCreated = true
    },

    setChurches (state, churches) {
      state.churchesList = churches
    },

    getChurches (state) {
      return state.churchesList
    }

  },
  actions: {
    insertChurch (context, newChurch) {
      axios.post('api/churches', {
        'church': {
          'name': newChurch.name,
          'address': newChurch.address,
          'phone': newChurch.phone,
          'priest': newChurch.priest,
          'photo': newChurch.photo,
          'email': newChurch.email
        }
      })
        .then((response) => {
          context.commit('createdChurch', newChurch)
        })
        .catch((error) => {
          return error
        })
    },

    loadChurches (context) {
      axios.get('api/churches')
        .then((response) => {
          context.commit('setChurches', response.data)
        })
        .catch((error) => {
          return error
        })
    }
  }
}
