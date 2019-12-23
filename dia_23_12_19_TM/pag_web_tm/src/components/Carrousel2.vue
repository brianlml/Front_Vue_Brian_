<template>
  <div  class=" container bg-light pt-5 pb-5">
     <b-container class="bv-example-row">
  <b-row>
    <b-col>
        <img src="@/assets/img1.png" alt="">
    </b-col>
    <b-col>
        <img src="@/assets/img2.png" alt="">
    </b-col>
    <b-col>
        <img src="@/assets/img3.png" alt="">

    </b-col>
  </b-row>
</b-container>
  </div>
</template>
<style >
   
</style>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
