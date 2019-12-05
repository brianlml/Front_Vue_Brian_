new Vue ({
    el: "#app",
    data:{
        titulo:"Directiva v-model",
        mensaje:"Hola a todos!!!",
        frutas:[],
        seleccionado:'',
        numeros:[1,2,3,4,5,5,6,7,3,24,45]
    },
    methods: {
        saludar() {
            return 'Hola desde el methods'
        },

        esPar() {
            numeros = this.numeros;
            numeros_pares = [];
            for (let index = 0; index < this.numeros.length; index++) 
                {
                    if (this.numeros[index] % 2 == 0)
                        {
                        
                        numeros_pares.push(this.numeros[index]);
                        }
                }
            return numeros_pares
        }
        /* esPrimo() {
            numeros = this.numeros;
            numeros_pares = [];
            contador = 0;
                for (let index = 1; index < this.numeros.length; index++) 
                    {
                        if (this.numeros[index] % index == 0)
                            {
                            contador++;
                            }                
                    }
                    
            }
        */
    }

})