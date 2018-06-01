<template>
    <div class="churches-page">
        <b-breadcrumb :items="items"/>
        <div class="actions">
            <div class="action">
                <router-link class="btn btn-primary" :to="{name: 'create-church'}">Nueva Iglesia</router-link>
            </div>            
        </div>
        <b-card-group deck>
            <b-card no-body v-for="church in churchesList" :key="church.id">
                
                <b-img-lazy lazy :src="church.photo | validatePhoto" alt="Img" class="card-img-top" />

                <b-card-body>
                    <h4>{{church.name}}</h4>    
                    <p class="card-text">
                        Dirección: {{church.address}}
                    </p>
                    <p class="card-text">
                        Párroco: {{church.priest}}
                    </p>                    
                    <div slot="footer">
                        <small class="text-muted">Contacto: {{church.phone}}</small>
                    </div>                    
                </b-card-body>     
                <b-card-footer>
                    <div class="footer-information">
                        <div>
                            Contacto: {{church.phone}}
                        </div>

                        <div class="action">
                            <router-link to="#" class="btn btn-primary">
                                Editar
                            </router-link>
                            
                        </div>
                    </div>
                </b-card-footer>                       
            </b-card>            
        </b-card-group>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('churches/loadChurches')
  },
  data () {
    return {
      items: [
        {
          text: 'Inicio',
          to: { name: 'home' }
        },
        {
          text: 'Iglesias',
          href: '#'
        }
      ]
    }
  },
  computed: {
    ...mapState(
      'churches', ['churchesList']
    )
  },

  filters: {
    validatePhoto (value) {
      if (!value) {
        return 'https://picsum.photos/300/300/?image=41'
      }

      return value
    }
  }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/_functions.scss";
@import "node_modules/bootstrap/scss/_variables.scss";
@import "node_modules/bootstrap/scss/mixins/_breakpoints.scss";

.churches-page {
  .actions {
    margin-bottom: 1rem;
  }
  
  .card-deck {
    justify-content: space-between;

    .card {
        flex: initial;
        margin-bottom: 1rem;
        
        .footer-information {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }    
  }
}
</style>
