<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col> ONNN
          <div>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Description</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(l, index) in items" :key="index">
                  <th scope="row">{{l.id}}</th>
                  <td>{{l.title}}</td>
                  <td>{{l.author}}</td>
                  <td>{{l.description}}</td>

                  <div> 
                     <td><button class="btn-danger" v-on:click="deleteTarea">Delete</button></td>
                     <td><button class="btn-success">Update</button></td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
        <b-col> OFFF
          <div>
            <b-form @submit="postList" v-if="show">
              <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.title"
                  type="text"
                  required
                  placeholder="Enter title"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Author:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.author"
                  type="text"
                  required
                  placeholder="Enter author"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Description:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.description"
                  type="text"
                  required
                  placeholder="Enter description"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>

            <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{form}}</pre>
            </b-card>
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
        title: "",
        author: "",
        description: ""
      },
      show: true,
      items: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios
        .get("http://localhost:3000/tareas")
        .then(response => {
          console.log(response.data);
          this.items = response.data;
          console.log(this.items);
        })
        .catch(error => {
          console.log(error);
        });
    },
    postList() {
      axios
        .post("http://localhost:3000/tareas", {
          title: this.form.title,
          author: this.form.author,
          description: this.form.description
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
      this.title = "";
      this.author = "";
      this.description = "";
    }
  }
};
</script>

<style>
</style>