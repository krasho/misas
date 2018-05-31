import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  namespace: true,

  actions: {
    insertChurch (context, payload) {
      console.log('entre al insert')
      axios.post('/churches/create', {
        'church': {
          'name': payload.name,
          'address': payload.address,
          'phone': payload.phone,
          'priest': payload.priest,
          'photo': payload.photo,
          'email': payload.email
        }
      })
        .then((response) => {
          return true
        })
        .catch((error) => {
          return error
        })
    }
  }
}
