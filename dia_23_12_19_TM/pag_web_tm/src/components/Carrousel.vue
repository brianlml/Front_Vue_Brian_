<template>

  <div class=" container bg-success w-50">
    
                <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="4000"
                    img-width="500 "
                    img-height="500 "
                    controls
                    indicators
                    background="#ababab"
                    
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                    >
                    <b-carousel-slide caption="LUNES ROJOS" img-src="https://www.icnorte.com/images/slider/LUN.jpg"></b-carousel-slide>
                    
                    <b-carousel-slide  caption="MARTES VERDES" img-src="https://www.icnorte.com/images/slider/MAR.jpg"></b-carousel-slide>
                
                    <b-carousel-slide caption="MIERCOLES BLANCOS" img-src="https://www.icnorte.com/images/slider/MIE.jpg"></b-carousel-slide>

                    <b-carousel-slide caption="JUEVES TINTOS" img-src="https://www.icnorte.com/images/slider/JUE.jpg"></b-carousel-slide>
                        
                    <b-carousel-slide caption="VIE SAB DOM AMARILLOS" img-src="https://www.icnorte.com/images/slider/VIE.jpg"></b-carousel-slide>
                </b-carousel>
            
    
   
  </div>
  
</template>

<script>

export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },

  },
  components:{
     
  }
 

}
</script>