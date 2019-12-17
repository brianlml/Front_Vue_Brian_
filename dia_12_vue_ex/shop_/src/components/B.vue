<template>
  <div class=" container bg-info">
        <h1 class="text-success">Component B</h1>
        <h1>{{mensaje}}</h1>
        <h1>{{contador}}</h1>


  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
computed:{
         ...mapState(['mensaje','contador'])
        }
}
</script>

<style>

</style>