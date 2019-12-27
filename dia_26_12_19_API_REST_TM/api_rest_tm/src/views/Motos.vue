<template>
  <div>
      <h1>Motos con Axios y JsonServer</h1>
       <input type="text" v-model="marcaMoto" v-on:keyup.enter="postMotos()">
      <ul>
          <li v-for="(m) in motos" :key="m.id"> 
                Marca: {{m.marca}} --- Modelo: {{m.year}}
               
                <input type="text" v-model="marcaMoto1" v-on:keyup.enter="putMotos(m.id)">
                <input type="text" v-model="marcaMoto2" v-on:keyup.enter="putMotos(m.id)">
                 <v-btn  @click="putMotos(m.id)">Click!</v-btn>
               
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
const url = 'http://localhost:3000/motos'
export default {
    data (){
        return {
            motos:[],
            marcaMoto: '',
            marcaMoto1:'',
            marcaMoto2:''
        }
    },
    
    async created(){
         try {
            const res = await axios.get(url)
            this.motos = res.data
             }
         catch (e){
            console.error(e)
                  }
        },
    methods:{
       async postMotos() {
           try{
        const res = await axios.post(url, {
            
            "marca": this.marcaMoto,
            
          })  
          this.motos = [...this.motos, res.data]
          this.marcaMoto=''
       }
       catch (e){
           console.error(e)

       }
        
    },
    putMotos(id){
      //let id = "7"
      axios.put( "http://localhost:3000/motos/"+id,{
          "marca":this.marcaMoto1,
           "year":this.marcaMoto2
        
      })
      .then (response=> console.log(response.data))
      .catch(error => console.log(error))
      this.marcaMoto1=''
      this.marcaMoto2=''
    }
    }    
}
</script>

<style>

</style>