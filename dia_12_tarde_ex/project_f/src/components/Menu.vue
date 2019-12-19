<template>
  <div>
        <div class='container mt-3'>
                <input  v-bind:class="'input-group'" v-model= "nuevaFruta" type="text" placeholder="Ingrese una fruta..." v-on:keyup.enter="agregarFruta(nuevaFruta)">
                <button   v-on:click="agregarFruta(nuevaFruta)" class='btn btn-dark'>Agregar</button>
        </div>
                <div class='container mt-3'>
                          <ul v-for="(l,index)  in frutas" class='list-group' :key="index">
                                  <div v-bind:class="'container mt-3'">
                                      <li class="'list-group-item d-flex justify-content-between align-items-center'">
                                                {{l.nombre}}
                                                <span v-bind:class="'badge badge-pill'">{{l.cantidad}}</span>

                                              <div v-bind:class="'d-flex flex-row bg-secondary'"> 
                                                      <button  class='btn btn-dark' v-on:click="l.cantidad++">Add</button>
                                                      <button  class='btn btn-dark' v-on:click="l.cantidad--">-</button>
                                                      <button  class='btn btn-dark' v-on:click="borrarFruta(index)">Borrar</button>
                                              </div>
                                      </li>         
                                  </div>    
                          </ul>
                </div>
           
            
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {

    data () {
      return {
        nuevaFruta : ""
        
        }  
    },
    computed: {
      ...mapState(['frutas','nuevaFruta','index']),
    },
    methods: {
    ...mapMutations(['agregarFruta','borrarFruta']),
    }

    
  
  

}
</script>

<style>

</style>