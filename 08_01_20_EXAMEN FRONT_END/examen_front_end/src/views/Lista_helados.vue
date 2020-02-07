<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr v-for="(h, index) in items_helados" :key="index">
                  <th scope="row">{{h.id}}</th>
                  <td>{{h.nombre}}</td>
                  <td>{{h.precio}}</td>
                  

                  <div> 
                     <td><button class="btn-danger" v-on:click="deleteList(index)">Delete</button></td>
                     <td><button class="btn-success">Update</button></td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-form @submit="postList" v-if="show">
              <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.nombre"
                  type="text"
                  required
                  placeholder="Enter nombre"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Precio:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.precio"
                  type="text"
                  required
                  placeholder="Enter precio"
                ></b-form-input>
              </b-form-group>

              

              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        nombre: "",
        precio: "",
        
      },
      show: true,
      items_helados: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios
        .get("http://localhost:3000/helados")
        .then(response => {
          console.log(response.data);
          this.items_helados = response.data;
          console.log(this.items_helados);
        })
        .catch(error => {
          console.log(error);
        });
    },
    postList() {
      axios
        .post("http://localhost:3000/helados", {
          nombre: this.form.nombre,
          precio: this.form.precio,
          
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
      this.form.nombre = "",
      this.form.precio = "";
      
    },
    deleteList (index){
     let id = index + 1;
      axios.delete("http://localhost:3000/helados/"+id)
      .then (response => console.log(response.data))
      .catch (error => console.log(error))
    }
  }
};
</script>

<style>
</style>