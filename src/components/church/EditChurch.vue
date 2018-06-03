<template>
  <div class="churches-page">
      <b-breadcrumb :items="items"/>
      <form-data actionToExecute="update" :idSelected="id"></form-data>
  </div>    
    
</template>

<script>
import FormData from '@/components/church/FormData'
export default{
  components: {
    'form-data': FormData
  },
  props: [
    'id'
  ],
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
          text: 'Edit',
          to: '#'
        }
      ]
    }
  },
  mounted () {
  }
}
</script>
