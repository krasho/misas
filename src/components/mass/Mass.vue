<template>   
    <div class="masses-page">
        <b-breadcrumb :items="items"/>
        <h2 class="d-flex justify-content-center">Fecha: {{getDate()}}</h2>
        <div class="masses">
            <div class="mass card mb-3" v-for="mass in massesListByDate" :key="mass.hour">
                <div class="card-body">
                    <h5 class="card-title">{{mass.hour}}:00 - {{mass.hour + 1}}:00 Hrs</h5>
                    <hr>
                    <div v-if="mass.masses.length !== 0">
                      <b-list-group flush>
                        <b-list-group-item v-for="church in mass.masses" :key="church.church_name">
                            {{church.church_name}}
                        </b-list-group-item>  
                      </b-list-group>  
                    </div>                        

                    <h6 v-else>
                        Ninguna Iglesia tiene misa a esta hora
                    </h6>
                </div>                
            </div>            
        </div>    
    </div>
</template>


<script>
import { mapState } from 'vuex'
export default{
  data () {
    return {
      items: [
        {
          text: 'Inicio',
          to: {name: 'home'}
        },
        {
          text: 'Misas',
          href: '#'
        }
      ]
    }
  },

  computed: {
    ...mapState(
      'masses', ['massesListByDate']
    )
  },

  mounted () {
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate()

    this.$store.dispatch('masses/loadMassesByDate', {
      'year': year,
      'month': month,
      'day': day
    })
  },

  methods: {
    getDate () {
      let today = new Date()
      let year = today.getFullYear()
      let month = today.getMonth() + 1
      let day = today.getDate()

      return day + '/' + month + '/' + year
    }
  }
}
</script>

<style lang="scss">
.masses-page {    
    .mass {        
      box-shadow: 0 1px 8px 0 rgba(0,0,0,0.08);

      .card-title {
        color: #A48FA0;
        font-size: 1.5rem
      }
      
    }
}
</style>

