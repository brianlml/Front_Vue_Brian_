<template>
  <div id="app">
      <component-a/>
      <component-b/>
  </div>
</template>

<script>
import componentA from './components/A.vue'
import componentB from './components/B.vue'

export default {
  name: 'app',
  components: {
    componentA,
    componentB
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
