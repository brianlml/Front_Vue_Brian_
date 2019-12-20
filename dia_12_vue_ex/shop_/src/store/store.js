import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    
    state:{
        mensaje: "Hola desde la Tienda...",
        contador: 0,
        lista_tareas:[{
            nombre: 'Estudiar Vue.JS',
            estado: true
        },
        {
            nombre: 'Jugar',
            estado: false
        },
        {
            nombre: 'Estudiar CSS',
            estado: true
        },
        {
            nombre: 'Jugar',
            estado: false
        },
        {
            nombre: 'Jugar',
            estado: false
        }
        

    ]
    },
    getters:{
        tareasTerminadas(state){
            return state.lista_tareas.filter(t => t.estado == true)
            
        },
        cantidadTareas(state){
            return state.lista_tareas.length
        },
        /*buscar (state)  {
            function (valor){
                return state.lista_tareas.filter(function (t) {
                    return t.nombre == valor
                })
            }
        },*/
        buscar: (state) => (valor) => {
                  return state.lista_tareas.filter( t => t.nombre == valor )

        }

    },
    mutations:{//syncrono
        incrementar (state){
            return state.contador ++
        }
    },
    actions:{//asyncrono
        aumentar (context){
            return context.commit('incrementar')
        }

    }

})