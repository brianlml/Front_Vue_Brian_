<template>
  <div class="bg-light">
      <p>Nombre: {{mensaje}} Apellido: {{apellido}} Edad: {{edad}}</p>
       
      <br>
      <br>
      
       <button @click="$emit('cad', cadena )">Botoncito</button>
       <ul  >
           <li v-for="(l, index ) in mensaje1" :key="index" > 
               <h1>{{l.titulo}}</h1>
               <br>
               <img :src="l.portada"/>
               <br>
               
               <br>
               
               
               
           </li>
       </ul>
  </div>
</template>

<script>
export default {
    
    props: 
        ['mensaje','apellido','edad','mensaje1','coches'],
        data() {
            return {
            cadena:'componente hijo',
            lista_coches: [
                            {
                            modelo: "Mustang",
                            año:2012
                            },
                            {
                            modelo: "Camaro",
                            año:2011
                            },
                            {
                            modelo: "Challenge",
                            año:2010
                            },
                            {
                            modelo: "Audi",
                            año:2019
                            }
                            , {
                            modelo: "BMW",
                            año:2018
                            }
                        ]
            }
        },
        mounted() {
            this.$emit('cad', this.cadena)
            this.$emit('coche', this.lista_coches)
        },
    
}
</script>

<style>

</style>