<template>
    <div class="churches-page">
        <b-breadcrumb :items="items"/>
        <b-card-group deck>
                <b-card title="La Guadalupana"
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Img"
                        img-top>
                    <p class="card-text">
                        Dirección: Calle Madero s/n
                    </p>
                    <p class="card-text">
                        Párroco: Jesús
                    </p>                    
                    <div slot="footer">
                        <small class="text-muted">Contacto: 983 000 0000</small>
                    </div>
                </b-card>
                <b-card title="Sagrado Corazón"
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Img"
                        img-top>
                    <p class="card-text">
                        Dirección: Conocida
                    </p>
                    <p class="card-text">
                        Párroco: Santiago
                    </p>                    
                    <div slot="footer">
                        <small class="text-muted">Contacto: 983 000 0000</small>
                    </div>
                </b-card>
                <b-card title="San Judas"
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Img"
                        img-top>
                    <p class="card-text">
                        Dirección: Conocida
                    </p>
                    <p class="card-text">
                        Párroco: Raúl
                    </p>                    
                    <div slot="footer">
                        <small class="text-muted">Contacto: 983 000 0000</small>
                    </div>
                </b-card>
        </b-card-group>
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
          text: 'Iglesias',
          href: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/_functions.scss';
@import 'node_modules/bootstrap/scss/_variables.scss';
@import 'node_modules/bootstrap/scss/mixins/_breakpoints.scss';

.churches-page {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;     

    @include media-breakpoint-down(sm) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }    
}
</style>
