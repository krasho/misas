import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default {
  namespaced: true,
  state: {
    massesList: []
  },

  mutations: {
  },

  actions: {
    insertMasses (context, newMasses) {
      console.log(newMasses)
      axios.post('api/churches', {
        'masses': {
          'cuhrch': newMasses.church_id,
          'schedule': newMasses.schedule
        }
      })
        .then((response) => {
          // context.commit('createdChurch', newMasses)
        })
        .catch((error) => {
          return error
        })
    }
  }
}
