<template>
  <div id="app">
    <component-padre/>
  </div>
</template>

<script>
import componentPadre from './components/Padre.vue'

export default {
  name: 'app',
  components: {
    componentPadre
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
