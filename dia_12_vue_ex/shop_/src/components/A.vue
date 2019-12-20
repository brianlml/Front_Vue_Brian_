<template>
  <div class=" container bg-success">
        <h1 class="text-danger">Component A</h1>
        <h1>{{mensaje}}</h1>
        <h1>{{contador}}</h1>
        <ul v-for="(t, index) in tareas" :key="index">
          <li >
              {{t.nombre}}
              
          </li>
          
        </ul>

        <h1>{{cantidad}}</h1>
        <button @click= "aumentar">Incrementar</button>
        
        <p>{{buscar('Jugar')}}</p>

        
        <component-c/>
  </div>
</template>

<script>
import ComponentC from './C.vue'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    components:{
        ComponentC
    },
    computed:{
       ...mapState(['mensaje','contador']),
       ...mapGetters(['cantidadTareas','buscar']),
       tareas(){
         return this.$store.getters.tareasTerminadas
       },
       cantidad(){
         return this.$store.getters.cantidadTareas
       }
    },
    methods:{
      ...mapMutations(['incrementar']),
      //...mapGetters(['cantidadTareas','buscar'])
      ...mapActions(['aumentar'])
      //aumentar () {
        //return this.$store.dispatch('aumentar')
      //}
    }
}
</script>

<style>

</style>