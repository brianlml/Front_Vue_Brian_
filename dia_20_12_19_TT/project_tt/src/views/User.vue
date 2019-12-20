<template>
  <div>
    <h1>Haciendo rutas Dinamicas :P</h1>
    <h2>El ID de tu equipo es: {{ $route.params.eqID }}</h2>
    <button @click="irRuta()">CLICK</button>
  </div>
</template>

<script>
export default {
  watch: {
    '$route' (from, to) {
      alert (to.params.eqID)
    }
  },
  
  
  created(){
    {
    alert (this.$route.params.eqID)
  }
  },
  methods: {
    irRuta () {
    this.$router.push('/')
    }
  }
}
</script>

<style>

</style>