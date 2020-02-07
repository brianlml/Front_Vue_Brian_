<template>
  <v-container>
   
    <v-btn @click="getUsers">getUsers</v-btn>
    <v-list v-for="(u, index) in usuarios" :key="index">
      NOMBRE: {{u.name}}
      <br />
      USUARIO: {{u.username}}
      <br />
      EMAIL: {{u.email}}
    </v-list>
    <v-btn @click="getUsersID">getUsers by ID</v-btn>
    <v-list v-for="(value,key, index) in usuario1" :key="index">{{index}}--{{key}}--{{value}}</v-list>
    <v-btn @click="postUsers">postUsers</v-btn>
    <v-btn @click="putUsers">putUsers</v-btn>
    <v-btn @click="deleteUser">deleteUser</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",

  data: () => ({
    usuarios: [],
    usuario1: {}
  }),
  methods: {
    getUsers() {
      axios
        .get("http://localhost:3000/users")
        .then(respuesta => {
          console.log(respuesta.data);
          this.usuarios = respuesta.data;
          console.log(this.usuarios);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getUsersID() {
      let id = "3";
      axios
        .get("https://jsonplaceholder.typicode.com/users" + "/" + id)
        .then(respuesta => {
          console.log(respuesta.data);
          this.usuario1 = respuesta.data;
          console.log(this.usuario1);
        })
        .catch(error => {
          console.log(error);
        });
    },
    postUsers() {
      axios
        .post("http://localhost:3000/users", {

          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
            geo: {
              lat: "24.8918",
              lng: "21.8984"
            }
          },
          phone: "210.067.6132",
          website: "elvis.io",
          company: {
            name: "Johns Group",
            catchPhrase: "Configurable multimedia task-force",
            bs: "generate enterprise e-tailers"
          }
        })
        .then(respuesta => console.log(respuesta.data))
        .catch(error => console.log(error));
    },
    putUsers(){
      let id = "7"
      axios.put( "http://localhost:3000/users/"+id,{
              id: 7,
                name: "Kurtis Gutierrez",
                username: "Gutierrez_ggg",
                email: "Telly.Hoeger@billy.biz",
                address: {
                  street: "Rex Trail",
                  suite: "Suite 280",
                  city: "Howemouth",
                  zipcode: "58804-1099",
                  geo: {
                    lat: "24.8918",
                    lng: "21.8984"
                  }
                },
                phone: "210.067.6132",
                website: "elvis.io",
                company: {
                  name: "Johns Group",
                  catchPhrase: "Configurable multimedia task-force",
                  bs: "generate enterprise e-tailers"
                }
        
      })
      .then (response=> console.log(response.data))
      .catch(error => console.log(error))
    },
    deleteUser(){
      let id = "5"
      axios.delete("http://localhost:3000/users/"+id)
      .then (response => console.log(response.data))
      .catch (error => console.log(error))
    }
  }
};
</script>
