import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default {
  namespaced: true,
  state: {
    massesList: []
  },

  mutations: {
    setMasses (state, massesList) {
      let masses = massesList[0].schedule.split(',')
      state.massesList = masses
    },

    setMass (state, mass) {
      console.log(mass)
      // state.massesList = mass
    },

    getMasses (state) {
      return state.massesList
    }
  },

  actions: {
    insertMasses (context, newMasses) {
      axios.post('api/masses', {
        'Mass': {
          'church_id': newMasses.church_id,
          'schedule': newMasses.schedule
        }
      })
        .then((response) => {
          // context.commit('createdChurch', newMasses)
        })
        .catch((error) => {
          return error
        })
    },

    loadMasses (context, Mass) {
      axios.get(`api/masses/bychurch/${Mass.church_id}`)
        .then((response) => {
          context.commit('setMasses', response.data)
        })
        .catch((error) => {
          return error
        })
    }
  }
}
