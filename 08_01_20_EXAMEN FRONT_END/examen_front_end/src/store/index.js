import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    helados:[
      {id: 1, nombre:"TRAMONTANA", descripcion:"Con galletitas crocantes de chocolate y dulce de leche tradicional", precio: 80, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 2, nombre:"GRANIZADO", descripcion:"Crema con trocitos de chocolate semiamargo", precio: 70, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 3, nombre:"MANTECOL", descripcion:"Con trocitos de mantecol", precio: 60, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 4, nombre:"VAINILLA", descripcion:"Con Vainilla de Madagascar", precio: 50, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 5, nombre:"AMERICANA", descripcion:"Receta clasica de crema chantilly", precio: 40, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 6, nombre:"BANANA SPLIT", descripcion:"Con dulce de leche tradicional y trocitos de chocolate", precio: 70, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 7, nombre:"TIRAMISU", descripcion:"Con vainillas, cafe y cacao amargo", precio: 60, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 8, nombre:"SAMBAYON", descripcion:"Receta original con vino Marsala", precio: 40, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 9, nombre:"SAMBAYON ITALIANO", descripcion:"Con nueces tostadas y pasas de uva", precio: 30, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 10, nombre:"MENTA GRANIZADA", descripcion:"Con trocitos de chocolate semiamargo", precio: 80, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 11, nombre:"COCO CON DULCE DE LECHE", descripcion:"Con coco y dulce de leche tradicional", precio: 20, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
      {id: 12, nombre:"MASCARPONE", descripcion:"Crema de mascarpone con coulis de frambuesas", precio: 80, imagen:"https://freddo.com.ar/wp-content/uploads/2014/07/social_5.jpg"},
  ]
  },
  getters:{
    getHeladosList(){
      return this.state.helados;
     
    }

  },
  mutations: {
    agregarHelado (state, nuevoHelado) {
     
      state.helados.push(
          {
              nombre: nuevoHelado
              
          }
      )        
  nuevoHelado = "";
},
borrarHelado(state, i){
state.helados.splice(i, 1)
}
  },
  actions: {
  },
  modules: {
  }
})
