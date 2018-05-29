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
  --header_background_color: #618590;
  --footer_background_color: #665261;
  --link_color : #fff;
  --link_breadcrumbs_color: #5C4A70;
  --btn-primary-color: #AA88A0;
  --btn-primary-color-hover: #a590a2;
}

body {
  color: #2c3e50;
  font-family: 'Muli', Helvetica, Arial, sans-serif;  
  margin: 0;  

  a {
    color: var(--link_color);
    padding-bottom: 0.5rem;
    text-decoration: none;

    &:hover{
      color: var(--link_color);
      text-decoration: none;
    }
  }

  .btn-primary {    
    background-color: var(--btn-primary-color);
    border-color: var(--btn-primary-color);

    &:hover {
       background-color: var(--btn-primary-color-hover);
       border-color: var(--btn-primary-color-hover);
    }
  }

  .btn-link {
    color: var(--btn-primary-color);

    &:hover {
      color: var(--btn-primary-color-hover);
    }
  }

  
  
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
  justify-content: space-between;

  .breadcrumb {
    background-color: initial;

    a {
      color: var(--link_breadcrumbs_color);
    }
  }
}

</style>
