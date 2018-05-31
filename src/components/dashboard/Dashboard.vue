<template>
    <div class="dashboard-page">
        <b-breadcrumb :items="items"/>

        <div class="configurations-container">
            <div class="configuration">
                <div class="configuration-item">
                        <div class="configuration-item__title">
                            <p>Catálogos</p>
                        </div>

                        <div class="configuration-item__links">
                            <ul class="links">
                            <li><router-link :to="{ name: 'churches'}">Churches</router-link></li>
                            </ul>
                        </div>

                        <div class="configuration-item__footer">
                            <p>#general</p>
                        </div>
                </div>
            </div>            
        </div>    
    </div>
</template>

<script>
export default{
  data () {
    return {
      items: [
        {
          text: 'Inicio',
          to: {name: 'home'}
        },
        {
          text: 'Dashboard',
          href: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.configurations-container {
    background-color: #fff;
    min-height: 100vh;

    .configuration{    
        display: flex;    
        align-items: top;
    

        &-item{
            border: 1px solid;
            border-color: #e5e5e5;
            display: flex;
            flex-direction: column;
            height: 253px;
            margin-right: 1rem;
            margin-top: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 1rem;  
            width: 250px;
            

            &__title {
                border-bottom: 1px solid #e5e5e5;                 
                font-size: 1.2rem;
                font-weight: bold;
                

                p {
                    color: var(--purple-color);
                    margin-bottom: 0;
                }
            }

            &__links {                
                flex: 1;
                margin-top: 0.5rem;

                .links {
                    list-style: none;
                    padding: 0;

                    a {
                        color: #000;
    
                        &:hover{
                            color: var(--purple-color);
                        }
                    }
                        
                }
            }

            &__footer{
                color: #000;
                font-size: 0.8rem;
            }

            &:hover{
                border-color: var(--purple-color);
            }
                
        }
    }    
}
</style>
