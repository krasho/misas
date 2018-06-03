<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-data">
    <b-form @submit.prevent="onSubmit" enctype="multipart/form-data"> 
      <b-card header="Ingresa los datos">        
              <b-form-group id="namelabel"
                              label="Nombre:"
                              label-for="Name">
                  <b-form-input id="name"
                              type="text"
                              v-model="church.name"                            
                              v-validate="'required'"
                              data-vv-name="name"
                              placeholder="Ingresa el nombre">
                  </b-form-input>
                  <span class="error-notification" v-if="errors.has('name')">{{ errors.first('name') }}</span>
              </b-form-group>        

              <b-form-group id="email"
                              label="Email:"
                              label-for="email">
                  <b-form-input id="email"
                              type="email"
                              v-model="church.email"                            
                              placeholder="Ingresa el email">
                  </b-form-input>
              </b-form-group>        


              <b-form-group id="direction"
                              label="Dirección:"
                              label-for="direction">
                  <b-form-input id="direccion"
                              type="text"
                              v-model="church.address"                            
                              placeholder="Ingresa la dirección">
                  </b-form-input>
              </b-form-group>        

              <b-form-group id="priest"
                              label="Sacerdote:"
                              label-for="priest">
                  <b-form-input id="priest"
                              type="text"
                              v-model="church.priest"                            
                              placeholder="Ingresa el nombre del sacerdote">
                  </b-form-input>
              </b-form-group>        

              <b-form-group id="phone"
                              label="Teléfono:"
                              label-for="phone">
                  <b-form-input id="phone"
                              type="text"
                              v-model="church.phone"                            
                              placeholder="Ingresa el teléfono">
                  </b-form-input>
              </b-form-group>        

              <b-form-group id="photo"
                              label="Foto:"
                              label-for="photo">

              <b-form-file v-model="church.file" class="mt-3" @change="onFileChanged"></b-form-file>
              <div class="mt-3">Selected file: {{church.file && church.file.name}}</div>
                  
              </b-form-group>                                
      </b-card>                

      <div class="actions">
        <div class="action">
           <b-button type="submit" class="btn btn-primary btn-save">Guardar</b-button>                                    
        </div>

        <div class="action">
           <b-button @click="deleteChurch(church.id)" type="button" class="btn btn-danger btn-delete">Borrar</b-button>                                    
        </div>

      </div>
      
    </b-form>
  </div>    
</template>

<script>
import { mapState } from 'vuex'
export default{
  props: [
    'idSelected',
    'actionToExecute'
  ],

  computed: {
    ...mapState(
      'churches', ['church']
    )
  },

  data () {
    return {
      'selectedFile': null
    }
  },

  created () {
    if (this.idSelected) {
      this.$store.dispatch('churches/loadChurchByID', {'id': this.idSelected})
    }
  },
  watch: {
    // 'id': this.$store.dispatch('churches/loadChurchByID', {'id': this.id})
  },
  methods: {
    resetFields () {
      this.church.name = ''
      this.church.email = ''
      this.church.address = ''
      this.church.priest = ''
      this.church.phone = ''
    },

    uploadFile () {
      const formData = new FormData()
      formData.append('file', this.selectedFile, this.selectedFile.name)
      return formData
    },

    insert () {
      this.$store.dispatch('insertChurch', {
        'name': this.church.name,
        'email': this.church.email,
        'address': this.church.address,
        'priest': this.church.priest,
        'phone': this.church.phone,
        'file': this.uploadFile()
      }).then(newChurch => {
        this.$notify({
          group: 'messages',
          title: 'Registro Guardado!!!',
          text: 'Iglesia guardada',
          type: 'success'
        })
        this.resetFields()
      })
    },

    update () {
      this.$store.dispatch('churches/updateChurch', {
        'name': this.church.name,
        'email': this.church.email,
        'address': this.church.address,
        'priest': this.church.priest,
        'phone': this.church.phone,
        'file': this.uploadFile(),
        'id': this.idSelected
      }).then(church => {
        this.$notify({
          group: 'messages',
          title: 'Registro Guardado!!!',
          text: 'Iglesia guardada',
          type: 'success'
        })

        this.resetFields()
      })
    },

    onSubmit () {
      this.$validator.validateAll().then(res => {
        if (res) {
          if (this.actionToExecute === 'insert') {
            this.insert()
          } else {
            this.update()
            this.$router.push({name: 'churches'})
          }
        } else {
          this.$notify({
            group: 'messages',
            title: 'Error',
            text: 'Fix the errors',
            type: 'error'
          })
        }
      })
    },

    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
    },

    deleteChurch (idToDelete) {
      this.$store.dispatch('churches/deleteChurchByID', {
        'id': idToDelete
      })

      this.$router.push({name: 'churches'})
    }
  }
}
</script>

<style lang="scss">
.form-data {
    padding-left: 0;

   .btn-save {
     margin-top: 1rem;
     margin-bottom: 1rem;
   }
   
   .actions {
     display: flex;

     .btn-delete {
       margin-bottom: 1rem;
       margin-top: 1rem;
       margin-left: 1rem;
     }
   }
}
</style>


