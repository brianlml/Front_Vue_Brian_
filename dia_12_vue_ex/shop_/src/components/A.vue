<template>
  <div class=" container bg-success">
        <h1 class="text-danger">Component A</h1>
        <h1>{{mensaje}}</h1>
        <h1>{{contador}}</h1>
        <component-c/>
  </div>
</template>

<script>
import ComponentC from './C.vue'
import {mapState} from 'vuex'
export default {
    components:{
        ComponentC
    },
    computed:{
       ...mapState(['mensaje','contador'])
    }
}
</script>

<style>

</style>