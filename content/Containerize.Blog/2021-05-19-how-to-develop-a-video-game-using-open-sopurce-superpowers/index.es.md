---
title: "Cómo desarrollar un videojuego usando superpoderes de Sopurce abierto" 
seoTitle: "Cómo desarrollar un videojuego usando superpoderes de Sopurce abierto" 
description: "¿Cómo desarrollar un videojuego? SuperPowers es un desarrollo de juegos HTML5 de código abierto. Es una plataforma cruzada y permite a los usuarios construir juegos animados 2D y 3D." 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "Software gratuito de diseño de videojuegos para el desarrollo de videojuegos con un modo fuera de línea. Auto-anfitrión, crea 2d & amp animado; Juegos 3D con efectos de sonido y fuentes." 
url: /es/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## Software gratuito de diseño de videojuegos para el desarrollo de videojuegos con un modo fuera de línea. Aelucía, crea juegos animados 2D y 3D con efectos de sonido y fuentes.

{{< figure align=center src="images/superpowers.png" alt="Cómo desarrollar un videojuego">}}


## Descripción general
En el pasado, algunos artículos se publicaron en la categoría [Software de desarrollo de juegos][1] que incluye cómo la industria global del juego aprovechando el software de código abierto y el tutorial de GDEVelop para principiantes para comenzar el desarrollo de juegos. El desarrollo de videojuegos está mucho más extendido en todo el mundo con la creciente demanda de juegos entretenidos. Sin embargo, implica la idea, el desarrollo del diseño, las pruebas continuas, los lanzamientos y la retroalimentación. En otras palabras, involucra a diseñadores, arquitectos de software, programadores, probadores y recursos de soporte. Además, hay muchos tipos de juegos como juegos de acción, juegos de rompecabezas, juegos de carreras, juegos cognitivos y algunos más.
Por lo tanto, es muy necesaria una buena guía de desarrollo de juegos para comenzar a comenzar con cualquier constructor de juegos 3D. La comunidad de código abierto ha desarrollado muchos software de desarrollo de juegos que ofrecen características y utilidades de nivel empresarial para desarrollar juegos 3D y 2D. Este tutorial de desarrollo de juegos HTML5 explorará cómo desarrollar un videojuego utilizando el software gratuito de desarrollo de videojuegos ** Superpoderes ** cubriendo los siguientes puntos.
  *** [¿Qué son los superpoderes][2] **
  *** [¿Cómo configurar en localhost?][3] **
  *** [Panel de control de superpoderes?][4] **
  *** [Conclusión][5] **

## ¿Qué son superpoderes {#intro}
[SuperPowers][6] es un software de código abierto para el desarrollo de videojuegos. Es flexible, robusto y extensible. Sin embargo, ofrece soporte para animaciones, modelos 3D y una amplia gama de ejemplos de juegos. Además, también viene con una versión fuera de línea donde los usuarios pueden construir juegos sin ninguna conectividad a Internet. Publicar cualquier proyecto es increíblemente fácil y todo lo que sucede con un solo clic. Hay un tablero intuitivo para los usuarios donde los usuarios pueden navegar a través de varios elementos fácilmente. Sobre todo, hay un error en vivo que informa que muestra el error al desarrollador para evitar cualquier ambigüedad o error. SuperPowers es fácil de configurar y requiere requisitos fáciles de alojar en los servidores aún más, este constructor de juegos 3D está escrito en TypeScript y viene con toda la documentación con respecto al desarrollo y la implementación. Por lo tanto, todo el código fuente está disponible en [GitHub][7].
SuperPowers ofrece los siguientes puntos clave:
  * Informes de error en vivo
  * Multilingüe
  * Multiplataforma
  * Fuentes ricos y efectos de sonido
  * Autohostado

## ¿Cómo configurar en localhost? {#configuración}
Si todavía te preguntas cómo desarrollar un videojuego, en esta parte del artículo aprenderemos a configurar superpoderes en localhost. En esta sección, esta ** Guía de desarrollo de juegos ** explicará el proceso de configuración del entorno de desarrollo de juegos.
En primer lugar, asegúrese de haber instalado los siguientes requisitos previos antes de comenzar el desarrollo de videojuegos:
  * Git
  * NPM
  * Node.js
Los requisitos mencionados anteriormente son fáciles y muy conocidos, por lo que no será una tarea difícil para los principiantes. Una vez que se instalen los requisitos anteriores, abra el terminal y ejecute el siguiente comando para clonar el código fuente:
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
Después de un clon exitoso, ingrese al directorio descargado ejecutando el siguiente comando:
```
cd superpowers/core
```
Ahora, ejecute el siguiente comando para clonar el sistema de juegos SuperPowers:
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
Después de eso, ejecute el siguiente comando para hacer la compilación:
```
npm run build
```
Tras una compilación exitosa, inicie el servidor ejecutando el siguiente comando:
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="Tutorial de desarrollo de juegos HTML5">}}

Ahora abra el navegador y acceda a la aplicación en el siguiente enlace:
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## Panel de superpoderes? {#características}
Al presionar la URL anterior, verá la siguiente página de inicio. Hay opciones para modificar o crear un nuevo proyecto de juego de plataformas vacío o 2D.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="Desarrollo de videojuegos">}}

Avanzando sobre la cuestión de cómo desarrollar un videojuego, verá la siguiente pantalla después de crear un juego de plataformas 2D. Puede ver las opciones en el lado izquierdo de la ventana, como crear escenas, configurar el mosaico, el mapa del juego y el jugador. Hay una opción de codificación en vivo donde puede codificar el comportamiento del usuario.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="desarrollo de videojuegos">}}

Además, hay una barra de configuración en el lado izquierdo donde puede establecer las animaciones, representar, cargar o descargar la imagen. En el lado izquierdo, hay una opción para agregar más activos a su proyecto como se muestra en la imagen a continuación. Incluye un modelo de modelo 3D cúbico, opción Fint si desea modificar la fuente. Además, los usuarios pueden agregar más escenas, scripts, sombreadores y sprites. Además, este constructor de juegos 3D de código abierto también te permite agregar varios efectos de sonido a los juegos para atraer a los jugadores con los mejores efectos de sonido posibles del juego. Por último, pero no menos importante, también le permite agregar conjuntos de mapas y mosaicos.

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="diseño de videojuegos">}}

Del mismo modo, después de pasar por este artículo de juego, puede explorarlo aún más y utilizar todas las características. Además, podrás entender cómo seguir adelante usando el constructor de videojuegos de superpoderes. Hay soporte en línea disponible para este software de desarrollo de juegos.

## ** Conclusión ** {#Conclusion}
Esto pone fin a esta guía de desarrollo de juegos HTML5. Con suerte, esta publicación de blog te ayudará si estás interesado en comenzar el desarrollo de videojuegos. Hemos explorado lo que es superpoderes, cómo desarrollar un videojuego, que es un constructor de juegos 3D de código abierto y también hemos pasado por su procedimiento de instalación en localhost. Hay muchas aplicaciones de diseño de videojuegos ** ** que permiten a los usuarios construir juegos desde cero. Los programadores de videojuegos utilizan principios esenciales de diseño de juegos para construir juegos de alta calidad. Aprenderá más sobre cómo construir juegos 2D y 3D en nuestros próximos artículos en [Blog.Containerize.com][8]. Hay otros constructores de juegos 3D de código abierto y artículos relevantes mencionados en la sección "Explorar" a continuación.
Finalmente, Contenerize.com escribe continuamente publicaciones de blog sobre otros productos y temas de código abierto. Por lo tanto, manténgase en contacto con la categoría [Desarrollo de videojuegos][9][][10] para actualizaciones regulares. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook][11], [LinkedIn][12] y [Twitter][13].

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [][14][GDEVROVED][14]
  * [][14][Godot][15]
  * [][14][Superpoderes][6]
  * [][14][Cocos Creator][16]
  * [][14][panda3d][17]
  *** [comenzando con el desarrollo de juegos usando superpoderes][18] **
  *** [Tutorial de desarrollo del juego | Movimiento del jugador en GDegelop][19] **
  *[** Cómo hacer un juego de cero usando GDEVOLED de código abierto **][20]
  *** [Cómo la industria del juego global aprovechando el software de código abierto][21] **
  *** [Tutorial GDEVROVEL para principiantes para comenzar el desarrollo del juego][22] **
  *[** Top 5 Software de desarrollo de juegos gratuitos en el año 2021 **][23]

  
[1]: https://blog.containerize.com/category/game-development-software/
[2]: #intro
[3]: #setup
[4]: #features
[5]: #Conclusion
[6]: https://products.containerize.com/game-development-software/superpowers/
[7]: https://github.com/superpowers/superpowers-core
[8]: https://blog.containerize.com/
[9]: https://products.containerize.com/game-development-software/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
