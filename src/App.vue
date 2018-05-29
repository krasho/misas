<template>
  <div id="app">
    <header-html></header-html>
    <main>      
      <router-view></router-view>
    </main>
    <footer-html></footer-html>    
  </div>
</template>

<script>
import HeaderHtml from '@/components/Header'
import FooterHtml from '@/components/Footer'
export default {
  components: {
    'header-html': HeaderHtml,
    'footer-html': FooterHtml
  },
  name: 'app'
}
</script>

<style lang="scss">
:root {
  --header_background_color: #978780;
  --footer_background_color: #665261;
  --link_color : #fff;
}

body {
  color: #2c3e50;
  font-family: 'Arimo', Helvetica, Arial, sans-serif;  
  margin: 0;  
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
}

a {
  color: var(--link_color) !important;
  padding-bottom: 0.5rem;
  text-decoration: none !important;

  &:hover{
     color: var(--link_color) !important;
     text-decoration: none !important;
  }
}
</style>
