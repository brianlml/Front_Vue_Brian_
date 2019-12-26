import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userslist: [
      {id: 1, name: 'Brian',rol:'admin'},{id: 2, name: 'Luis',rol:'user'},{id: 3, name: 'Martin',rol:'user'}
    ]
  },
  getters:{
    getUserslist(){ 
      return this.state.userslist;
     
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
