<template>
    <div class="churches-page">
        <b-breadcrumb :items="items"/>
        <div class="actions">
            <div class="action" v-show="this.$store.getters.isAutheticated">
                <router-link class="btn btn-primary" :to="{name: 'create-church'}">Nueva Iglesia</router-link>
            </div>            
        </div>
        <b-card-group deck>
            <b-card no-body v-for="church in churchesList" :key="church.id">                
               <!-- <b-img-lazy lazy :src="church.photo | validatePhoto" alt="Img" class="card-img-top" />-->

                <b-card-body>
                    <h4>{{church.name}}</h4>    
                    <hr>
                    <p class="card-text">
                        Dirección: {{church.address}}
                    </p>
                    <p class="card-text">
                        Párroco: {{church.priest}}
                    </p>                    
                </b-card-body>
                <church-actions :churchPhone="church.phone" :idSelected="church.id"></church-actions>                           
            </b-card>            
        </b-card-group>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ChurchActions from '@/components/church/ChurchActions'
export default {
  components: {
    'church-actions': ChurchActions
  },

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
      ],
      showChurchActions: null
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
    .card {
        flex: initial;
        margin-bottom: 1rem;
        position: relative;
        width: 300px;        
        
        .footer-information {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;

            .church-button-actions {
                &:hover {
                  cursor: pointer;                    
                }
            }
        }

        .church-actions {
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.125);   
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 1rem;            
            position: absolute;
            left: 0;         
            width: 300px;
            z-index: 100;

            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .church-actions__link {
                color: var(--link_breadcrumbs_color);

                &:hover {
                  color: var(--header_background_color);
                }
            }

        }
    }    
  }
}
</style>
