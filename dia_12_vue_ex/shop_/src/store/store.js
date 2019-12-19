import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    
    state:{
        mensaje: "Hola desde la Tienda...",
        contador: 0,
        lista_tareas:[{
            nombre: 'Estudiar Vue.JS',
            estado: false
        },
        {
            nombre: 'Estudiar Vuex',
            estado: false
        },
        {
            nombre: 'Estudiar CSS',
            estado: true
        }

    ]
    },
    getters:{
        tareasTerminadas(state){
            return state.lista_tareas.filter(t => t.estado == true)
            
        },
        cantidadTareas(state){
            return state.lista_tareas.length
        }

    }





})