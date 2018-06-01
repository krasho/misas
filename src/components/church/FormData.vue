<template>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-data">
    <b-form @submit.prevent="onSubmit">
      <b-card header="Ingresa los datos">        
              <b-form-group id="namelabel"
                              label="Nombre:"
                              label-for="Name">
                  <b-form-input id="name"
                              type="text"
                              v-model="form.name"                            
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
                              v-model="form.email"                            
                              placeholder="Ingresa el email">
                  </b-form-input>
              </b-form-group>        


              <b-form-group id="direction"
                              label="Dirección:"
                              label-for="direction">
                  <b-form-input id="direccion"
                              type="text"
                              v-model="form.address"                            
                              placeholder="Ingresa la dirección">
                  </b-form-input>
              </b-form-group>        

              <b-form-group id="priest"
                              label="Sacerdote:"
                              label-for="priest">
                  <b-form-input id="priest"
                              type="text"
                              v-model="form.priest"                            
                              placeholder="Ingresa el nombre del sacerdote">
                  </b-form-input>
              </b-form-group>        

              <b-form-group id="phone"
                              label="Teléfono:"
                              label-for="phone">
                  <b-form-input id="phone"
                              type="text"
                              v-model="form.phone"                            
                              placeholder="Ingresa el teléfono">
                  </b-form-input>
              </b-form-group>        

              <b-form-group id="photo"
                              label="Foto:"
                              label-for="photo">

                  <b-form-file v-model="form.file" class="mt-3"></b-form-file>
                  <div class="mt-3">Selected file: {{form.file && form.file.name}}</div>
                  
              </b-form-group>                                
      </b-card>                

      <b-button type="submit" class="btn btn-primary btn-save">Guardar</b-button>                                    
    </b-form>
  </div>    
</template>

<script>
export default{
  props: [
    'idSelected',
    'actionToExecute'
  ],
  data () {
    return {
      form: {
        name: null,
        email: null,
        address: null,
        priest: null,
        phone: null,
        file: null
      }
    }
  },
  mounted () {
    if (this.idSelected) {
      // traer los datos del ID seleccionado
    }
  },
  methods: {
    resetFields () {
      this.form.name = ''
      this.form.email = ''
      this.form.address = ''
      this.form.priest = ''
      this.form.phone = ''
    },

    insert () {
      this.$store.dispatch('insertChurch', {
        'name': this.form.name,
        'email': this.form.email,
        'address': this.form.address,
        'priest': this.form.priest,
        'phone': this.form.phone
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
      this.$store.dispatch('updateChurch', {
        'name': this.form.name,
        'email': this.form.email,
        'address': this.form.address,
        'priest': this.form.priest,
        'phone': this.form.phone,
        'id': this.form.id
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
    
}
</style>


