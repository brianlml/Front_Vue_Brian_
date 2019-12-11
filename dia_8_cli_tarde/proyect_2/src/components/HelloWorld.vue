<template>
  <div class="hello">
    <h1>{{mensaje}}</h1>
    <button class="btn btn-success">Botoncito</button>

      <div >
                    <div>
                        <button class="btn btn-success" v-on:click="aux =!aux">Listar</button>
                        
                        <button class="btn btn-success" v-on:click ="aux1 =!aux1" >Terror</button>
                        <button class="btn btn-success" v-on:click ="aux2 =!aux2" >Accion</button>
                        <button class="btn btn-success" v-on:click ="aux3 =!aux3">Infantil</button>
                    </div>
            
                <div v-if="aux" >
                    <ul >
                      <div class='container1'>
                        <li v-for="(l,index) in lista_peliculas" :key="index">
                          <h1 v-bind:class="{fondotitulo:activo_titulo}">{{l.titulo}}</h1>
                          <img v-bind:src="l.portada">
                          <h4>{{l.descripcion}}</h4>
                          <h4>{{l.tipo}}</h4>
                          <h4>{{l.año}}</h4>
                      
                    
                        </li>
                        </div>
                    </ul>
                </div>
              <div  v-if="aux1">
                      <ul >
                          <div class='container1'> 
                              <li v-for="l in lista_peliculas" v-if="l.tipo == 'Terror'" :key="index">
                              <h1>{{l.titulo}}</h1><br>
                              <img v-bind:src="l.portada">
                              <h4>{{l.descripcion}}</h4><br>
                              <h4>{{l.tipo}}</h4><br>
                              <h4>{{l.año}}</h4><br>
                            </li> 
                          </div>    
                              
                              
                              
                      </ul>
              </div>
              <div v-if="aux2">
                      <ul >   
                          <div class='container1'>
                              <li v-for="(l, index) in lista_peliculas" v-if="l.tipo =='Accion'" :key="index">
                              <h1>{{l.titulo}}</h1><br>
                              <img v-bind:src="l.portada">
                              <h4>{{l.descripcion}}</h4><br>
                              <h4>{{l.tipo}}</h4><br>
                              <h4>{{l.año}}</h4><br>
                              </li>
                              
                          </div>    
                              
                              
                      </ul>
              </div>
                  <div v-if="aux3">
                          <ul >
                              <div class='container'>
                                  <li v-for="l in lista_peliculas" v-if="l.tipo == 'Infantil'" :key="index">
                                    <h1>{{l.titulo}}</h1><br>
                                    <img v-bind:src="l.portada">
                                    <h4>{{l.descripcion}}</h4><br>
                                    <h4>{{l.tipo}}</h4><br>
                                    <h4>{{l.año}}</h4><br>
                                  </li>
                                </div>    
                          
                                  
                          </ul>
                  </div>
      </div>  
    
  </div>

</template>

<script>
export default {
  data(){
    return {
      mensaje: "Hello World!!!",
      activo_titulo:true,
      aux:false,
      aux1:false,
      aux2:false,
      aux3:false,
      lista_peliculas:[{
        titulo:"It capítulo dos",
        descripcion:"Luego de 27 años de su primer encuentro con el aterrador Pennywise, los integrantes del Club de los Perdedores ya son adultos y viven lejos de su pueblo, hasta que una devastadora llamada los hace volver.",
        tipo:"Terror",
        año: 2019,
        portada: "https://www.cinecalidad.is/wp-content/uploads/2019/12/it-capitulo-2-4k.jpg"
    },
    {
        titulo:"Boda sangrienta ",
        descripcion:"La noche de bodas de la novia da un siniestro giro cuando la familia de su flamante esposo la invita a participar de una tradición familiar que se convierte en un mortal juego de supervivencia.",
        tipo:"Suspenso",
        año:2019,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2019/11/boda-sangrienta.jpg"

    },
    {
        titulo:"Cómo entrenar a tu dragón 2",
        descripcion:"Cinco años luego de que Hipo y Desdentao lograran la paz entre los dragones y los vikingos, ahora descubren una caverna de hielo que es hogar de cientos de dragones salvajes y el misterioso Jinete de Dragones. Los dos amigos se verán envueltos en una batalla para proteger la paz.",
        tipo:"Infantil",
        año:2014,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2014/10/como-entrenar-a-tu-dragon-2.jpg"

    },
    {
        titulo:"Ted 2",
        descripcion:"Meses después del divorcio de John, la pareja de recién casados Ted y Tami-Lynn están teniendo problemas y deciden tener un bebé. Pero para poder ser padres Ted debe demostrar que es una persona, con todos los derechos correspondientes, en una corte judicial.",
        tipo:"Comedia",
        año:2015,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2015/11/ted-2.jpg"

    },
    {
        titulo:"El pasajero",
        descripcion:"El ex oficial de policía Michael MacCauley ahora es un agente de seguros y hace años toma el mismo tren de regreso a su casa. Pero las cosas dan un giro inesperado y se ve envuelto en una conspiración criminal.",
        tipo:"Accion",
        año:2018,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2018/04/el-pasajero.jpg"

    },
    {
        titulo:"47 Ronin: La Leyenda del Samurai",
        descripcion:"Una de las leyendas más antiguas de Japón. Después que un caudillo traicionero mate a su señor y los destierre, 47 samuráis juran vengarse y recobrar su honor. No tienen más remedio que pedir ayuda a Kai, un mestizo rechazado, para adentrarse en un mundo lleno de criaturas y terrores sin nombre.",
        tipo:"Accion",
        año:2013,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2014/04/la-leyenda-del-samurai-47-ronin.jpg"

    },
    {
        titulo:"Ralph, el demoledor",
        descripcion:"El protagonista de un juego que siempre ha sido el malo está decidido a probar que puede ser un buen tipo. Ralph sueña con ser tan querido como Felix, el héroe del videojuego. El problema es que a nadie le gustan los malos, sino los héroes, así que cuando llega un nuevo juego con un personaje malo, el sargento Calhoun, Ralph lo ve como la oportunidad para convertirse en un héroe. Así pues, Ralph se mete en el juego con el plan de ganar medallas de todo, accidentalmente liberando a un enemigo mortal que amenaza a todos los juegos.",
        tipo:"Infantil",
        año:2012,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2013/03/ralph-el-demoledor.jpg"

    },
    {
        titulo:"El bosque siniestro",
        descripcion:"Sara es una mujer que está buscando a su hermana gemela que está desaparecida desde que fue al bosque Aokigahara, más conocido como el bosque de los suicidios, en la base del Monte Fuji en Japón. Ella se adentrará en el bosque y confrontará un terror sobrenatural.",
        tipo:"Terror",
        año:2016,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2016/04/el-bosque-siniestro.jpg"

    },
    {
        titulo:"Iron Man",
        descripcion:"Cuando el multimillonario genio inventor Tony Stark se ve forzado a construir un traje blindado luego de un incidente que amenaza su vida, y gracias al cual logra sobrevivir, decide usar su tecnología para luchar contra el mal.",
        tipo:"Accion",
        año:2008,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2010/04/iron-man-2008.jpg"

    },
    {
        titulo:"Mi villano favorito 2 ",
        descripcion:"Gru, junto con sus minions, se está ajustando a la vida de familia y queriendo empezar un negocio de mermelada. Mientras tanto, un laboratorio secreto es robado, y la Liga Anti-Villanos necesita ayuda y reclutan a Gru para la investigación. Junto a la excéntrica agente Lucy, Gru sospecha que el responsable es el supervillano supuestamente muerto 'El Macho'.",
        tipo:"Infantil",
        año:2013,
        portada:"https://www.cinecalidad.is/wp-content/uploads/2013/11/mi-villano-favorito-2.jpg"

    }]
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container1{
          
          background-color:lightseagreen;
          display: grid;
          grid-template-columns: auto auto auto;
      
      }
      
      
.fondotitulo {
          background-color: magenta;
      }
      
      
</style>
