<template>
    <div>
        <h1>Hola u</h1>
        <router-link to="{name: 'u', params: {id:u.id}}"> {{$route.params.id}}</router-link>
        <br>
        <router-link to="/Userslist">Volver a la USERSLIST</router-link>
        <router-view/>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
computed:{
...mapState(['userslist']),
...mapGetters(['getUserslist'])
},
}
</script>

<style>

</style>