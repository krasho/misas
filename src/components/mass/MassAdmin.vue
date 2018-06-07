<template>
  <div class="page-admin-mass">
      <b-breadcrumb :items="items"/>
      <h2>Iglesia: {{churchName}}</h2>
      <div class="days">
          <div class="day">
              <span class="day-name">
                  Domingo
              </span>              
          </div>
          <div class="day">Lunes</div>
          <div class="day">Martes</div>
          <div class="day">Miércoles</div>
          <div class="day">Jueves</div>
          <div class="day">Viernes</div>
          <div class="day">Sábado</div>
      </div>
      
      <b-form @submit.prevent="onSubmit">
        <div class="hours" v-for="i in 17" :key="i">
            <div class="hour" v-for="j in 7" :key="j">
                
                <b-form-checkbox :id="`${j}_${i+6}`" 
                                :name="`${j}_${i+6}`"   
                                :value="`${j}_${i+6}`"
                                v-model= "selectedCheckboxes">
                    
                    {{i+6}}:00 - {{i+7}}:00
                </b-form-checkbox>             
            </div>
        </div>

      <div class="actions">
        <div class="action">
           <b-button type="submit" class="btn btn-primary btn-save">Guardar</b-button>                                    
        </div>
      </div>      
      </b-form>
  </div>    
</template>
}}
<script>
import axios from 'axios'
axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default {
  props: [
    'id'
  ],
  data () {
    return {
      items: [
        {
          text: 'Inicio',
          to: { name: 'home' }
        },
        {
          text: 'Iglesias',
          to: { name: 'churches' }
        },
        {
          text: 'Misas',
          href: '#'
        }
      ],

      selectedCheckboxes: [],
      churchName: null
    }
  },

  mounted () {
    axios.get(`api/masses/bychurch/${this.id}`)
      .then((response) => {
        this.churchName = response.data.church_name

        if (response.data.masses[0]) {
          this.selectedCheckboxes = response.data.masses[0].schedule.split(',')
        }
      })
      .catch((error) => {
        console.log(error)
        this.$notify({
          group: 'messages',
          title: 'Error',
          text: 'Hubo un error mientras se cargaba la información',
          type: 'error'
        })
      })
  },

  created () {
    this.$store.dispatch('masses/loadMasses', {
      'church_id': this.id
    })
  },

  methods: {
    onSubmit () {
      this.$store.dispatch('masses/insertMasses', {
        'church_id': this.id,
        'schedule': this.selectedCheckboxes.join()
      }).then(newChurch => {
        this.$notify({
          group: 'messages',
          title: 'Registro Guardado!!!',
          text: 'Misas guardadas',
          type: 'success'
        })
      })
    },

    onUpdateMassesList (value) {
      console.log(value)
    }

  }
}
</script>

<style lang="scss">
.page-admin-mass {
    margin-bottom: 1rem;
    margin-top: 1rem;
    .days {
        background-color: var(--header_background_color);
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        
        .day {
            color: #fff;
            padding: 1rem;
            text-align: center;            
        }
    }

    .hours {
        display: grid;
        grid-template-columns: repeat(7, 1fr); 

        .hour {
          border: 1px solid rgba(0, 0, 0, 0.125);  
          padding: 0.5rem;
        }       
    }

    .actions {
        margin-top: 1rem;
    }
}
</style>

