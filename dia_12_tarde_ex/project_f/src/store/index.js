import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    
    frutas:[
      {nombre:"Uva", cantidad: 2},
      {nombre:"Limon", cantidad: 12},
      {nombre:"Pera", cantidad: 7},
      {nombre:"Sandia", cantidad:23}
      
  ]
    

  },

  mutations: {
    
    agregarFruta (state, nuevaFruta) {
     
          state.frutas.push(
              {
                  nombre: nuevaFruta,
                  cantidad:0
              }
          )        
      nuevaFruta = "";
  },
  borrarFruta(state, index){
    state.frutas.splice(index, 1)
  }
},
  actions: {
  },
  modules: {
  }



})
