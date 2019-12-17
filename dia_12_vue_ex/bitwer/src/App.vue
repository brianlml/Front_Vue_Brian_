<template>
  <div id="app" >
    <component-a/>
    <component-b/>
    <component-c/>
  </div>
</template>

<script>
import ComponentA from './components/A.vue'
import ComponentB from './components/B.vue'
import ComponentC from './components/C.vue'


export default {
  name: 'app',
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  }
}
</script>

<style>

</style>
