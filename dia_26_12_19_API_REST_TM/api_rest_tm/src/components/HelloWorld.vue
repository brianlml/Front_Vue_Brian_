<template>
  <v-container>
        <h1>--- Container >>></h1>
        <v-btn @click="getUsers"> getUsers</v-btn>
       <v-list v-for="(u, index) in usuarios" :key="index">NOMBRE: {{u.name}} <br> USUARIO: {{u.username}} <br> EMAIL: {{u.email}}</v-list>
      <v-btn @click="getUsersID"> getUsers by ID</v-btn>
      <v-list v-for="(value,key, index) in usuario1" :key="index">{{index}}--{{key}}--{{value}}</v-list>
      
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',

  data: () => ({
      usuarios:[],
      usuario1: {}
    
  }),
  methods:{
    getUsers(){
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then ((respuesta) => {
          console.log(respuesta.data)
          this.usuarios = respuesta.data
          console.log(this.usuarios)
          
        })
        .catch((error)=>{
          console.log(error)
        })
      },
       getUsersID(){
         let id= '3'
      axios.get('https://jsonplaceholder.typicode.com/users'+'/'+id)
        .then ((respuesta) => {
          console.log(respuesta.data)
          this.usuario1 = respuesta.data
          console.log(this.usuario1)
          
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    
  }
};
</script>
