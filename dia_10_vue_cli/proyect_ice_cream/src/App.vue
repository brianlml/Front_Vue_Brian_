<template>
  <div id="app" class="m-0">
   <Navbar/>
   <Body/>
   <Body2/>
   <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Body from '@/components/Body.vue'
import Body2 from '@/components/Body2.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Body,
    Body2,
    Footer
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
