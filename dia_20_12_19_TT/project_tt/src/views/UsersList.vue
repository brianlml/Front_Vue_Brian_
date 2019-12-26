<template>
  <div>

     
        <ul v-for="(u, index) in userslist" :key="index">
            <li>
                {{u.name}}
                 <h1><router-link :to="{name: 'u', params: {id:u.id}}">Ver User </router-link></h1>
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