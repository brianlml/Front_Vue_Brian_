<template>
  <div>

     
        <ul v-for="(h, index) in helados" :key="index">
            <li>
                {{h}}
                 <h1><router-link :to="{name: 'helado', params: {id:helado.id}}">Ver User {{h.nombre}}</router-link></h1>
            </li>
          
      </ul>
       
      <router-view/>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
computed:{
...mapState(['helados']),
...mapGetters(['getHeladosList'])
},

}
</script>

<style>

</style>