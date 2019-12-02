//document.getElementById("a").innerHTML = "hola brian";
new Vue ({
    el: '#app',
    data: {
        mensaje: 'Hola desde Vue.Js',
        numero: [1,2,3,4,5,6,7,8,9,10],
        condicion: true,
        persona: {
            nombre:"Brian", 
            ci: "15729249", 
            profesion:"Desarrollador", 
            edad:22
                 },
        dias: ["lunes","martes","miercoles", "jueves", "viernes", "sabado", "domingo"],
        hola:true,
        contador: 0,
        arreglo:[{text:"algo",titulo:"tituloprueba"},{text:"algo"},{otrotext3:"algodiferente"}],
        personas: [{nombre:"Brian",ci: "15729249",edad:12,estado:true},
                  {nombre:"Luis",ci: "15729249",edad:23,estado:false},
                  {nombre:"Martin",ci: "15729249",edad:42,estado:true}]



      }

})