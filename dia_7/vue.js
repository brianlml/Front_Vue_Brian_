var app = new Vue({
    el:"#app",
    data:{
        pantalla:'',
        resultado:0,
        operador:'',
        numero1:0,
        numero2:0,
    },
    methods: {
        mostrar(valor) {
            this.pantalla = this.pantalla + valor;
            //document.getElementById('lcd').value = pantalla;
        },
        obtenerOperador(operacion){
            this.numero1 = this.pantalla;
            this.operador = operacion;
            //document.getElementById('lcd').value = '';
            this.pantalla = '';
        },
        calcular(){
            this.numero2 = this.pantalla;
            switch (this.operador) {
                case 'suma':
                    this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
                    this.pantalla = this.resultado;
                    break;
                case 'resta':
                    this.resultado =this.numero1 - this.numero2;
                    this.pantalla = this.resultado;
					break;
				case 'multiplicacion':
                    this.multiplicacion();
					break;
				case 'division':
                    this.division();
					break;
            }
        },

        borrarPantalla(){
            this.pantalla = '';
            this.numero2 = 0;
            this.numero1 = 0;
            this.resultado = 0;
            this.operador = '';
            this.pantalla = '';
        },
        sumar(){
            this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
            this.pantalla = this.resultado;
        },
        restar(){
            this.resultado = parseInt(this.numero1) - parseInt(this.numero2);
            this.pantalla= this.resultado;
		},
		multiplicacion(){
			this.resultado= this.numero1 * this.numero2;
			this.pantalla= this.resultado;
		},
		division(valor){
			if  (this.numero2 == 0) {
				alert("NO EXISTE DIVISION POR CERO");
			}else{
				this.resultado = this.numero1 / this.numero2;
				this.pantalla = this.resultado;
			}	
		}
}

})