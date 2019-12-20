<template>
  <div class="container">
        <h1 class="text-info">Component C</h1>
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