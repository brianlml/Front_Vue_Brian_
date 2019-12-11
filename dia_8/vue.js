const vm = new Vue({
    el:"#app",
    data:{
        mensaje:""

    },
    methods: {
        inverso(){
            return this.mensaje = this.mensaje.split('').reverse().join('')
        },
        destruir(){
            vm.$destroy()
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
       
        
    },
    created() {
        console.log("created");
        return this.mensaje ="hola desde create"
    },
    beforeMount() {
        console.log("beforeMount");
        return this.mensaje ="hola desde mount"
        
    },
    mounted() {
        console.log("mounted");
        return this.mensaje ="hola desde mounted"
        
    },
    beforeUpdate() {
        console.log("beforeUpdate");
        
    },
    updated() {
        console.log("update");
        
    },
    beforeDestroy() {
        console.log("beforeDestroy");
        
    },
    destroyed() {
        console.log("destroyed");
        
    }
   
})