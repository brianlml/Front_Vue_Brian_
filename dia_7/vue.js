new Vue({
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
            pantalla = pantalla + valor;
            document.getElementById('lcd').value = pantalla;
        },
        obtenerOperador(operacion){
            numero1 = document.getElementById('lcd').value;
            operador = operacion;
            document.getElementById('lcd').value = '';
            pantalla = '';
        },


        mostrar(valor) {
            pantalla = pantalla + valor;
            document.getElementById('lcd').value = pantalla;
        },
        obtenerOperador(operacion){
            numero1 = document.getElementById('lcd').value;
            operador = operacion;
            document.getElementById('lcd').value = '';
            pantalla = '';
        },
        calcular(){
            numero2 = document.getElementById('lcd').value;
            switch (operador) {
                case 'suma':
                    resultado = parseInt(numero1) + parseInt(numero2);
                    document.getElementById('lcd').value = resultado;
                    break;
                case 'resta':
                    resultado =numero1 - numero2;
                    document.getElementById('lcd').value = resultado;
					break;
				case 'multiplicacion':
					multiplicacion();
					break;
				case 'division':
					division();
					
            }
        },

        borrarPantalla(){
            document.getElementById('lcd').value = '';
            numero2 = 0;
            numero1 = 0;
            resultado = 0;
            operador = '';
            pantalla = '';
        },
        sumar(){
            resultado = parseInt(numero1) + parseInt(numero2);
            document.getElementById('lcd').value = resultado;
        },
        restar(){
            resultado = parseInt(numero1) - parseInt(numero2);
            document.getElementById('lcd').value = resultado;
		},
		multiplicacion(){
			resultado=numero1 * numero2;
			document.getElementById(`lcd`).value = resultado;
		},
		division(valor){
			if (numero2 == 0) {
				alert("NO EXISTE DIVISION POR CERO");
			}else{
				resultado=numero1 / numero2;
				document.getElementById(`lcd`).value = resultado;
			}	
		}
}

})