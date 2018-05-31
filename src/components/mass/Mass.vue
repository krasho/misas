<template>   
    <div class="masses-page">
        <b-breadcrumb :items="items"/>
        <div class="masses">
            <div class="mass card mb-3">
                <div class="card-body">
                    <h5 class="card-title">9:00 - 10:00 Hrs</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Iglesia la Guadalupana</h6>                    
                    <hr>
                    <p class="card-text">Dirección: Calle Madero No.  </p>
                    <p class="card-text">Sacerdote: Jesús </p>                
                </div>                
            </div>

            <div class="mass card mb-3">
                <div class="card-body">
                    <h5 class="card-title">10:00 - 11:00 Hrs</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Iglesia la Guadalupana</h6>                    
                    <hr>
                    <p class="card-text">Dirección: Calle Madero No.  </p>
                    <p class="card-text">Sacerdote: Jesús </p>                
                </div>                
            </div>

            <div class="mass card mb-3">
                <div class="card-body">
                    <h5 class="card-title">12:00 - 13:00 Hrs</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Iglesia la Guadalupana</h6>                    
                    <hr>
                    <p class="card-text">Dirección: Calle Madero No.  </p>
                    <p class="card-text">Sacerdote: Jesús </p>                
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
          text: 'Misas',
          href: '#'
        }
      ]
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

