new Vue ({
    el: "#app",
    data:{
       
        lista_tareas:[  {
            tareas: "Tarea Ejemplo",
            estado:false
        }],
        
        
        
       
        
        
    },
    methods:{
       agregarTarea(){
           if (this.agregar_tareas) {
            
               this.lista_tareas.push(
                   {

                       tareas: this.agregar_tareas,
                       estado:false
                   }
               )        
           }
           else {
            alert("No esta ingresando tarea!!!!!!!!!!!!")
           }
           
           this.agregar_tareas= "";
       },

       borrarTarea(index){
           this.lista_tareas.splice(index, 1)
       }
       
       
    }
        
    

})