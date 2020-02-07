<template>
  <div>
      <h1>Lista de Helados</h1>
      <div>
           <div class='container mt-3'>
                <input  v-bind:class="'input-group'" v-model= "nuevoHelado" type="text" placeholder="Ingrese un Helado..." v-on:keyup.enter="agregarHelado(nuevoHelado)">
                <button   v-on:click="agregarHelado(nuevoHelado)" class='btn btn-dark'>Agregar</button>
        </div>
      </div>
    <div class="container mt-3">
      <b-container class="bv-example-row">
        <b-row v-for="(h, i) in helados" :key="i">
          <b-col><h5>{{h.nombre}}</h5></b-col>
          <b-col><h6>{{h.descripcion}}</h6></b-col>
          <b-col><h6>{{h.precio}}</h6></b-col>
          <b-col><img style="width:60px;" v-bind:src="h.imagen" /></b-col>
          <button  class='btn btn-dark' v-on:click="borrarHelado(i)">Borrar</button>
        </b-row>
      </b-container>
    </div>
    
    
    
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
    data () {
        return {
            nuevoHelado : ""
        }
    },

  computed: {
    ...mapState(["helados","nuevoHelado","i"])
  },
  methods: {
    ...mapMutations(['agregarHelado','borrarHelado']),
    }
};
</script>

<style>
</style>