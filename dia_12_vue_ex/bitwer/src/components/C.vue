<template>
  <div>
        <div id="Cuerpo_2">
                <div class="bg-info pt-5 pr-5 pb-5 pl-5"> 
                    <p>Los equipos celulares y tablets se entregan en caja sellada, nuevos y libres de fábrica para cualquier operador de Bolivia o del mundo. Contamos con marcas reconocidas como Samsung, Sony, Huawei, HTC, Apple, Motorola, LG y muchas otras.</p>
                </div>
                                            <div class="contenedor">
                                                    <div class="row" v-for="(t, index) of ordenarporPrecio" :key="index">
                                                        <div class="col-lg-4">
                                                            <div class="card" style="width: 18rem;">
                                                                <img v-bind:src="t.imagen" class="card-img-top" alt="...">
                                                                    <div class="card-body">
                                                                            <h5 class="card-title">{{t.marca}}</h5>
                                                                            <p class="card-text">{{t.descripcion}}</p>
                                                                            <p class="alert alert-danger">{{t.precio}}</p>
                                                                            <a href="#" class="btn btn-primary">Agrega a tu carro</a>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                                    <div class="container">
                                                        <img src="http://celularesbolivia.com/img/customer-logos.png" alt=""/>
                                                    </div>  
        </div>            
                        
 
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapState(['lista_telefonos']),
        ...mapGetters(['ordenarporPrecio','ordenarporMarca'])
        
    
    
    }
}
</script>

<style>
.contenedor{
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>