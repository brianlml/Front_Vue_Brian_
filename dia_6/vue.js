new Vue({
    el:"#app",
    data:{
        frutas:[
            {nombre:"Uva", cantidad: 2},
            {nombre:"Limon", cantidad: 12},
            {nombre:"Pera", cantidad: 7},
            {nombre:"Sandia", cantidad:23}
           

            
        ]
       
        
    },
    methods: {
        total(){
            auxiliar = 0 ;
            for(l of this.frutas){
                 auxiliar = auxiliar + l.cantidad;

            }
            return auxiliar
        },
        agregarFruta(){
            if (this.nuevaFruta) {
             
                this.frutas.push(
                    {
 
                        nombre: this.nuevaFruta,
                        cantidad:0
                    }
                )        
            }
            else {
             alert("No esta ingresando una Fruta!!!!!!!!!!!!")
            }
            
            this.nuevaFruta= "";
        },
        borrarFruta(index){
            this.frutas.splice(index, 1)
        },
        cambiarColor(l){
            if (l.cantidad <=5) {
                
                return 'badge1'
            }
            if (l.cantidad >=6) {
                return 'badge2'
            }
            
            
        }
    }
        
    





})