new Vue ({
    el: "#app",
    data:{
        agregar_tareas:'',
        lista_tareas:[],
        activo:false
        
       
        
        
    },
    methods:{
       agregarTarea(agregar_tareas){
           this.lista_tareas.push(agregar_tareas)
       },
       borrarTarea(index){
           this.lista_tareas.splice(index, 1 )
       }
       
       
    }
        
    

})