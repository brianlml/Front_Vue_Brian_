import Vue from 'vue'
import Vuex, { mapState } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...mapState(['lista_telefonos']),
    
    lista_telefonos: [{
      imagen:"http://celularesbolivia.com/img/products/Huawei-P20.jpg",
      nombre: 'Huawei',
      marca:"Huawei P20",
      descripcion:"Camara fotografica de 12MP, Pantalla de 1080x2244 pixels, 5.8, Procesador Octa-core 4x2.4GHz",
      precio: 3650
    },
    {
      imagen:"http://celularesbolivia.com/img/products/samsung-galaxy-s9.jpg",
      nombre: 'Samsung',
      marca:"Samsung Galaxy Ss9",
      descripcion:"Camara foografica de 12MP. Pantalla de 1440x2960 pixels. Procesador Octa-core",
      precio:5380
    },
    {
      imagen:"http://celularesbolivia.com/img/products/huawei-mate10.jpg",
      nombre: 'Huawei',
      marca:"Huawei Mate 10",
      descripcion:"Camara fotografica de 12MP+20MP. Pantalla de 1440x2560 pixel,5.9. Procesador Octa-core 4x2GHz",
      precio:3450
    },
    {
      imagen:"http://celularesbolivia.com/img/products/Sony-Xperia-E5.jpg",
      nombre:"Sony",
      marca:"Sony Xperia E5",
      descripcion:"Es un buen celular",
      precio:"Bs. 1280"
    },
    {
      imagen:"http://celularesbolivia.com/img/products/Apple-iPhone-6-6s.jpg",
      nombre: 'Apple',
      marca:"Apple iPhone 6S",
      descripcion:"Un excelente celular",
      precio:6399
    },
    {
      imagen:"http://celularesbolivia.com/img/products/Motorola-Moto-G5-Plus.jpg",
      nombre: 'Motorola',
      marca:"Motorola Moto G5 Plus",
      descripcion:"Cuenta con chasis metalico, Pantalla full HD",
      precio:1870
    }],
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    ordenarporPrecio(state){
      return state.lista_telefonos.slice().sort((a, b) => b.precio - a.precio)
    },
    ordenarporMarca(state){
      return state.lista_telefonos.slice().sort((a, b) => b.nombre - a.nombre)
    }

  }
})
