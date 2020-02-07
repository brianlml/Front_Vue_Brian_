<template>
  <div>

     
        <ul v-for="(u, i) in userslist" :key="i">
            <li>
                {{u.name}}
                 <h1><router-link :to="{name: 'u', params: {id:u.id}}">Ver User {{u.name}}</router-link></h1>
            </li>
          
      </ul>
       
      <router-view/>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
computed:{
...mapState(['userslist']),
...mapGetters(['getUserslist'])
},

}
</script>

<style>

</style>