<template>
   <div>
        <b-card-footer>
            <div class="footer-information">
                <div>
                    Contacto: {{churchPhone}}
                </div>

                <div class="action">                            
                    <i 
                        @click="onShowChurchActions"
                        class="fas fa-ellipsis-v church-button-actions"></i>                            
                </div>
            </div>                    
        </b-card-footer>                       
        <div class="church-actions" 
             v-show="showChurchActions === true"
             @mouseleave="onShowChurchActions">
            <ul>
                <li>
                    <router-link class="church-actions__link" :to="{name: 'edit-church', params: {id: idSelected}}">
                        Editar
                    </router-link>
                </li>
                <li>
                    <router-link class="church-actions__link" to="#">
                        Agregar Misas
                    </router-link>
                </li>                        
                <li>
                    <router-link class="church-actions__link" to="#" @click.native="deleteChurch(idSelected)">
                        Borrar
                    </router-link>
                </li>                                                
            </ul>
        </div>             
   </div>

</template>

<script>
export default {
  props: [
    'churchPhone',
    'idSelected'
  ],

  data () {
    return {
      showChurchActions: false
    }
  },

  methods: {
    onShowChurchActions (value) {
      this.showChurchActions = !this.showChurchActions
    },

    deleteChurch (idToDelete) {
      console.log(idToDelete)
      this.$store.dispatch('churches/deleteChurchByID', {
        'id': idToDelete
      })
    }
  }
}
</script>


