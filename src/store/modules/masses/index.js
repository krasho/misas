import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default {
  namespaced: true,
  state: {
    massesList: [],
    massesListByDate: []
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
    },

    setMassesListByDate (state, massesList) {
      state.massesListByDate = massesList
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
    },

    loadMassesByDate (context, date) {
      axios.get(`api/masses/bydate/${date.year}/${date.month}/${date.day}`)
        .then((response) => {
          context.commit('setMassesListByDate', response.data)
        })
        .catch((error) => {
          return error
        })
    }
  }
}
