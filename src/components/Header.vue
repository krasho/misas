<template>
    <header id="section-header" class="header">
        <div class="row-fixed">
            <div class="container-fluid">
                <div class="row">
                    <nav id="navigation" class="navigation">
                        <a class="toggle  close-menu" href="#">X</a>
                        <ul class="options d-flex justify-content-between">
                            <li class="option">
                                <router-link :to="{name: 'home'}">INICIO</router-link>
                            </li>

                            <li class="option">
                                <router-link :to="{name: 'mass'}">MISAS</router-link>
                            </li>

                            <li class="option">
                                <router-link :to="{name: 'churches'}">IGLESIAS</router-link>
                            </li>

                            <li class="option login" v-if="this.$store.getters.isAutheticated !== true">
                                <router-link :to="{name: 'login'}">Login</router-link>
                            </li>

                            <li class="option login" v-else>
                                <router-link to="#">Logout</router-link>
                            </li>
                        </ul> 


                    </nav>

                    <div class="mobile-options-container ">
                        <div class="mobile-options d-flex justify-content-between">
                            <div class="mobile-options__title">Misas</div>
                            <div class="mobile-options__hamburguer_button">
                                <a class="toggle open" href="#navigation">Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default{
}
</script>


<style lang="scss"> 
@import 'node_modules/bootstrap/scss/_functions.scss';
@import 'node_modules/bootstrap/scss/_variables.scss';
@import 'node_modules/bootstrap/scss/mixins/_breakpoints.scss';


.header {
    background-color: var(--header_background_color);
    color: #fff;
    grid-area: header;

    .container-fluid {
        font-size: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 1200px; 
        
        .navigation {
            width: 100%;

            @include media-breakpoint-down(sm) {
                background-color: #AA88A0;
                position: fixed;
                top: 0;
                bottom: 0;
                width: 100%;
                transition: transform .3s ease-out;
                transform: translateX(-150%);                
            }

            &:target { /* cuando el nav tiene el foco*/
            transform: translateX(0);
            }
            
            

            .options {
                list-style-type: none;
                position: relative;
                padding: 0;
                margin: 0;
                width: 100%;

                @include media-breakpoint-down(sm) {
                    flex-wrap: wrap;
                    margin-left: 1rem;
                    margin-top: 1rem;

                }
                
            
                .option {
                    margin-right: 10px;
                    padding: 2rem;

                    @include media-breakpoint-down(sm) {
                        padding: 0.5rem;
                        width: 100%
                    }


                    a {
                        &:hover {
                            border-bottom: 1px solid var(--footer_background_color);
                        }

                    }

                    &:nth-child(1) {
                        padding-left: 0px;
                    }                    
                }
                
                .login {
                    padding-right: 0px;
                    text-align: right;
                    width: 40%;
                    

                }
            }  

            .close-menu {
                display: none;
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 3rem;
                height: 3rem;
                font-size: 2rem;
                text-align: center;
                text-decoration: none;
                border-radius: 50%;
                background-color: #665261;                

                @include media-breakpoint-down(sm) {
                    display: flex;
                    justify-content: center;
                    align-items: center;                    
                }
                
            }

        }
        
        .mobile-options-container {
            display: none;
            width: 100%;

            @include media-breakpoint-down(sm) {
                display: block;
            }

            .mobile-options {
                width: 100%;

                &__title{
                    margin-left: 1rem;
                    padding-bottom: 1rem;
                    padding-top: 1rem;
                    
                }

                &__hamburguer_button {
                    margin-right: 1rem;
                    padding-bottom: 1rem;
                    padding-top: 1rem;
                    
                }

            }
            
        }
    }
}
</style>
