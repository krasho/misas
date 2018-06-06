import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default {
  namespaced: true,
  state: {
    churchWasCreated: false,
    churchesList: [],
    church: {}
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
    },

    setChurch (state, church) {
      state.church = church
    },

    removeChurch (state, church) {
      let index = state.churchesList.indexOf(church.id)
      state.churchesList.splice(index, 1)
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

    updateChurch (context, church) {
      axios.put(`api/churches/${church.id}`, {
        'church': {
          'name': church.name,
          'address': church.address,
          'phone': church.phone,
          'priest': church.priest,
          'photo': church.photo,
          'email': church.email
        }
      })
        .then((response) => {
          context.commit('setChurches', church)
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
    },

    loadChurchByID (context, church) {
      axios.get('api/churches/' + church.id)
        .then((response) => {
          context.commit('setChurch', response.data)
        })
        .catch((error) => {
          return error
        })
    },

    deleteChurchByID (context, church) {
      axios.delete(`api/churches/${church.id}`)
        .then((response) => {
          context.commit('removeChurch', church)
        })
        .catch((error) => {
          return error
        })
    }
  }
}
