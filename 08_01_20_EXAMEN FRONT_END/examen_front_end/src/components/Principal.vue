<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/productos">Productos</b-nav-item>
            <b-nav-item to="/lista_helados">CRUD</b-nav-item>
            <b-nav-item to="/helado">Helados</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>