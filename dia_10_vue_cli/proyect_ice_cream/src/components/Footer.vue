<template>
  <div class="m-0">
      <div class="bg-dark">
          <div >
                <div class="container pt-4 pb-4">
                    <div class="row">
                        <div class="col-sm">
                                <ul class="nav flex-column ">
                                <li class="nav-item">
                                    <a class="nav-link active text-light" href="#">LA CARTA</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">LA EMPRESA</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">SUCURSALES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">FRANQUICIAS</a>
                                </li>
                                
                                </ul>
                        </div>
                        <div class="col-sm">
                                    <ul class="nav flex-column ">
                                    <li class="nav-item">
                                        <a class="nav-link active text-light" href="#">CERTIFICADO DE CALIDAD</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-light" href="#">NEWSROOM</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-light" href="#">SABORES DE HELADO</a>
                                    </li>
                                                        
                                    </ul>
                        </div>
                        <div class="col-sm">
                                    <img src="http://www.emporiolarosa.cl/wp-content/uploads/2019/04/logo_rappi.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="col-sm">
                            <img src="data:image/png;base64,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" class="d-block w-100" alt="...">
                        </div>
                        <div class="col-sm">
                        One of three columns
                        </div>
                    </div>
                </div>


          </div>
          <footer class="bg-secondary pt-4 pb-4">
              <strong class="text-light">EMPORIO LA ROSA TODOS LOS DERECHOS RESERVADOS</strong>
          </footer>
       
      </div>

  </div>
</template>

<script>
export default {
name:'Footer'
}
</script>

<style>

</style>