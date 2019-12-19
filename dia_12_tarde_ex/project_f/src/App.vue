<template>
  <div id="app">
                <Menu/>
                <Portada/>
                <Cuerpo/>
                <Footer/>
  </div>
</template>

<script>

import Menu from './components/Menu'
import Portada from './components/Portada'
import Cuerpo from './components/Cuerpo'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Menu, Portada, Cuerpo, Footer
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
