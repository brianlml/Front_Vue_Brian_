import Vue from 'vue'
import Vuex, {mapState} from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    telefonos: [{
      imagen:"http://celularesbolivia.com/img/products/Huawei-P20.jpg",
      marca:"Huawei P20",
      descripcion:"Camara fotografica de 12MP, Pantalla de 1080x2244 pixels, 5.8, Procesador Octa-core 4x2.4GHz",
      precio: "bs. 3650"
    },
    {
      imagen:"http://celularesbolivia.com/img/products/samsung-galaxy-s9.jpg",
      marca:"Samsung Galaxy Ss9",
      descripcion:"Camara foografica de 12MP. Pantalla de 1440x2960 pixels. Procesador Octa-core",
      precio:"Bs. 5380"
    },
    {
      imagen:"http://celularesbolivia.com/img/products/huawei-mate10.jpg",
      marca:"Huawei Mate 10",
      descripcion:"Camara fotografica de 12MP+20MP. Pantalla de 1440x2560 pixel,5.9. Procesador Octa-core 4x2GHz",
      precio:"Bs. 3450"
    },
    {
      imagen:"http://celularesbolivia.com/img/products/Sony-Xperia-E5.jpg",
      marca:"Sony Xperia E5",
      descripcion:"Es un buen celular",
      precio:"Bs. 1280"
    },
    {
      imagen:"http://celularesbolivia.com/img/products/Apple-iPhone-6-6s.jpg",
      marca:"Apple iPhone 6S",
      descripcion:"Un excelente celular",
      precio:"Bs. 6399"
    },
    {
      imagen:"http://celularesbolivia.com/img/products/Motorola-Moto-G5-Plus.jpg",
      marca:"Motorola Moto G5 Plus",
      descripcion:"Cuenta con chasis metalico, Pantalla full HD",
      precio:"Bs. 1870"
    }],
    ...mapState(['telefonos']),

  },
  mutations: {
    contar (state){
      state.count += 1

    }
  },
  actions: {
  },
  modules: {
  }
})
