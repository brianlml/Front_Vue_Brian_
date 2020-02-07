<template>
<div>
    <h1>Consumiendo API tareas con MONGO DB</h1>
    <div  v-if="edi">
      <h3  >Editando Tareas</h3>
      <form  @submit.prevent="act2(task)">
      <input type="text" placeholder="Nombre" v-model="task.nombre">
      <input type="text" placeholder="Descripcion" v-model="task.descripcion">
      <button type="submit" class="btn-warning">Edit Tarea</button>
      <button type="submit" @click="edi = false">Cancelar</button>
      </form>
    </div>
    <div v-else>
      <h3>Agregando Tareas</h3>
      <form  @submit.prevent="addTareas()">
      <input type="text" placeholder="Nombre" v-model="task.nombre">
      <input type="text" placeholder="Descripcion" v-model="task.descripcion">
      <button type="submit" class="btn-success">ADD TAREA</button>
      </form>
    </div>
    <ul class="list-group" v-for="(item, index) in tareas" :key="index">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {{item.nombre}}--{{item._id}}--{{item.estado}}
    <span class="badge badge-primary badge-pill">{{item.descripcion}}</span>
    <button class="btn-danger" @click="deleteTareas(item._id)">Eliminar</button>
    <button class="btn-warning" @click="act1(item._id)">Editar Tarea</button>

  </li>
</ul>
</div>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      tareas: [],
      task: {
        nombre: '',
        descripcion: ''
      },
      edi: false
    }
  },
  async created () {
    this.obtenerTareas()
  },
  methods: {
    async obtenerTareas () {
      try {
        const res = await axios.get('http://localhost:3000/api/tarea')
        this.tareas = res.data
      } catch (error) {
        console.log(error)
      }
    },
    async addTareas () {
      try {
        const res = await axios.post('http://localhost:3000/api/nueva-tarea', this.task)
        this.tareas = [...this.tareas, res.data]
        this.task.nombre = ''
        this.task.descripcion = ''
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTareas (id) {
      try {
        const res = await axios.delete(`http://localhost:3000/api/tarea/${id}`)
        const index = this.tareas.findIndex(item => item._id === res.data._id)
        this.tareas.splice(index, 1)
      } catch (error) {
        console.log(error)
      }
    },
    async act1 (id) {
      this.edi = true
      try {
        const res = await axios.get(`http://localhost:3000/api/tarea/${id}`)
        this.task = res.data
      } catch (error) {
      }
    },
    async act2 (item) {
      try {
        const res = await axios.put(`http://localhost:3000/api/tarea/${item._id}`, item)
        const index = this.tareas.findIndex(t => t._id === res.data._id)
        this.tareas[index].nombre = res.data.nombre
        this.tareas[index].descripcion = res.data.descripcion
        this.task = {
          nombre: '',
          descripcion: ''
        }
      } catch (error) {
      }
      this.edi = false
    }
  }
}
</script>
