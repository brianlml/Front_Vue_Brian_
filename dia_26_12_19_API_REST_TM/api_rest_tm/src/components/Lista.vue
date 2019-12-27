<template>
  <div>
    <v-row align="center">
      <v-card class="mx-auto" max-width="400" tile>
        <v-list
          :disabled="disabled"
          :dense="dense"
          :two-line="twoLine"
          :three-line="threeLine"
          :shaped="shaped"
          :flat="flat"
          :subheader="subheader"
          :inactive="inactive"
          :sub-group="subGroup"
          :nav="nav"
          :avatar="avatar"
          :rounded="rounded"
        >
        <v-btn @click="getItems()">BUTTON</v-btn>
          <v-subheader>Lista</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(i, index) in items" :key="index">
              <v-list-item-avatar v-if="avatar">
                <v-img :src="i.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="i.title"></v-list-item-title>
                <v-list-item-subtitle v-if="twoLine || threeLine" v-html="i.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    item: 5,
    disabled: false,
    dense: false,
    twoLine: false,
    threeLine: false,
    shaped: false,
    flat: false,
    subheader: false,
    inactive: false,
    subGroup: false,
    nav: false,
    avatar: true,
    rounded: false,
    items:[]
    
  }),
  methods:{
      getItems() {
      axios.get("http://localhost:3000/items")
        .then(respuesta => {
          console.log(respuesta.data);
          this.items = respuesta.data;
          console.log(this.items);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>