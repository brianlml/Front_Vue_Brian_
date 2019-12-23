<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" >
      <b-navbar-brand ><img style="height:40px;" src="https://www.icnorte.com/images/logo.png" alt=""></b-navbar-brand>

        
        
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">HOME</b-nav-item>
          <b-nav-item to="/Nosotros" >NOSOTROS</b-nav-item>
          <b-nav-item to="/Servicios" >SERVICIOS</b-nav-item>
          <b-nav-item-dropdown text="CLUB IC NORTE" >
            <b-dropdown-item to="/Club">CLUB</b-dropdown-item> 
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="LOCALES">
            <b-dropdown-item href="#">GALERIA COMERCIAL</b-dropdown-item>
            <b-dropdown-item href="#">PATIO DE COMIDAS</b-dropdown-item>
            <b-dropdown-item href="#">AREA DE SERVICIO</b-dropdown-item>
          
          </b-nav-item-dropdown>
        </b-navbar-nav>

        
      </b-collapse>
    </b-navbar>
  </div>

</template>
<script>
export default {

};
</script>

<style>
</style>