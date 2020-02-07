<template>
    <div>
        <h1>PRUEBAAA</h1>
        <router-link to="{name: 'helado, params: {id:helado.id}}"> {{$route.params.id}}</router-link>
        <br>
        <router-link to="/helado">Volver a la LISTAHELADOS</router-link>
        <router-view/>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
computed:{
...mapState(['helados']),
...mapGetters(['getHeladosList'])
},
}
</script>

<style>

</style>