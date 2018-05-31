<template>
  <div class="churches-page">
      <b-breadcrumb :items="items"/>
      <form-data actionToExecute="insert"></form-data>
  </div>    
</template>

<script>
import FormData from '@/components/church/FormData'
export default{
  components: {
    'form-data': FormData
  },
  data () {
    return {
      items: [
        {
          text: 'Inicio',
          to: {name: 'home'}
        },
        {
          text: 'Iglesias',
          to: {name: 'churches'}
        },
        {
          text: 'Nuevo',
          to: '#'
        }
      ]
    }
  }
}
</script>
    
