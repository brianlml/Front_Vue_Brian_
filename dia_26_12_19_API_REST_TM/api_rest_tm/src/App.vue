<template>
  <v-app>
    <v-content>
      <Lista/>
      <div id="nav">
     <router-link to="/Motos">Motos</router-link>
     <router-view/>
     </div>
    </v-content>
  </v-app>
</template>

<script>
import Lista from './components/Lista.vue'
//import Form from './components/Form.vue'

export default {
  name: 'App',

  components: {
    Lista, //Form
  },

  data: () => ({
    //
  }),
};
</script>
