<template>
   <footer class="footer-container">
       <div class="d-flex justify-content-center footer-container__description">
           Chetumal, Q.Roo - 2018
       </div>
   </footer>
    
</template>


<script>
export default{
}
</script>

<style lang="scss">
.footer-container {        
    background-color: var(--footer_background_color);
    color: #fff;
    grid-area: footer;
    &__description {        
        padding: 2rem;
    }
}
</style>

