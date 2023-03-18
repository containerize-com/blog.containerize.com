---
title: "Cómo hacer un juego de cero usando GDEVelop de código abierto" 
seoTitle: "Cómo hacer un juego de cero usando GDEVelop de código abierto" 
description: "¿Cómo hacer un juego desde cero? GDEVROVEL ofrece una interfaz de usuario lógica llena de muchos componentes y comportamientos para construir videojuegos para web, escritorio, iOS y Android." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "Este tutorial de desarrollo del juego explica los conceptos básicos de construir un juego de carreras de camiones. Puede instalarlo o usar su aplicación en línea para crear un videojuego emocionante." 
url: /es/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Este tutorial de desarrollo del juego explica los conceptos básicos de construir un juego de carreras de camiones. Puede instalarlo o usar su aplicación en línea para crear un videojuego emocionante.

{{< figure align=center src="images/gdevelop-game.png" alt="Cómo hacer un juego de cero">}}


## **Descripción general**
En el pasado, publicamos muchas publicaciones de blog sobre software de desarrollo de juegos gratuito de código abierto como [Top 5 Software de desarrollo de juegos gratuitos en el año 2021] [1], [comenzando con el desarrollo de juegos usando superpoderes] [2], [Juego Tutorial de desarrollo | Movimiento del jugador en GDEVelovel] [3], [Tutorial de desarrollo de juegos HTML5 para programadores de videojuegos] [4], [cómo la industria del juego global aprovechando el software de código abierto] [5] y [tutorial de GDEVelovelop para principiantes para comenzar el desarrollo del juego] [6 ] Los últimos avances en la era de Internet han traído nuevas tendencias en la industria de los videojuegos. Una plataforma de construcción de juegos de código abierto proporciona un ecosistema completo para desarrollar juegos de forma independiente y los desarrolladores maduran esa plataforma según las necesidades. En esta publicación de blog, aprenderemos cómo hacer un juego de cero usando [GDEVOLED] [7] cubriendo los siguientes puntos.
  *** [¿Por qué deberíamos usar GDegelop?] [8] **
  *** [Configuración del proyecto] [9] **
  *** [¿Cómo preparar fondo y objeto?] [10] **
  *** [Agregar behviors al objeto] [11] **
  *** [ejecutando el juego] [12] **
  *** [Conclusión] [13] **

## ¿Por qué deberíamos usar GDEVelovelop? {#por qué}
[GDEVROVED] [7] es un software de juego de código abierto. Viene con capacidades de autohospitalización y es de la naturaleza multiplataforma. Puede descargarlo e instalarlo, o puede usar su versión en línea para jugar con ella. Los usuarios no necesitan obtener ningún conocimiento de programación para usar este constructor de juegos. Sobre todo, ofrece una interfaz de usuario de arrastrar y soltar que se le ocurre comportamientos, plantillas y objetos de juego preconstruidos. Este software de desarrollo de juegos gratuito es altamente configurable y ofrece integraciones con bibliotecas de terceros. Para obtener más información sobre esta herramienta gratuita, puede verificar este enlace para aprender más sobre sus características y el proceso de configuración.

## Configuración del proyecto {#setting}
En esta sección, crearemos nuestro proyecto para construir un juego de carreras de camiones con algunas funcionalidades básicas. Siga este [enlace] [6] si desea configurar su máquina local o puede usar la versión en línea yendo a este [enlace] [14].
Por lo tanto, encontrará la siguiente pantalla una vez que haga clic en "Crear un nuevo proyecto" y luego haga clic en "Juego vacío".

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Cómo hacer un juego de cero">}}

Puede ver la barra de menú en el lado izquierdo de la ventana. Ahora, haga clic en las "Escenas" y luego haga doble clic en el botón "Haga clic para agregar una escena". Después de eso, aterrizarás en la pantalla del juego donde puedes crear objetos de juego, fondos y comportamientos. Avanzando, haga clic en "Agregar un nuevo objeto" colocado en el panel lateral derecho y verá la siguiente ventana.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Tutorial de GDEVROVEL">}}


## ¿Cómo preparar fondo y objeto? {#preparar}
En la barra de búsqueda, busque el objeto del camión y haga doble clic y presione "Agregar al juego" una vez que llegue a los resultados. Repita este paso para las dos ruedas y un objeto de plataforma. Ahora, haga clic derecho en el objeto Greenfloor y edite.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="tutorial de desarrollo de juegos">}}


## Agregar behviors al objeto {#Add}
A continuación, arrastre y suelte el PLAZO GREEN a la pantalla del juego y ajuste su altura y ancho de acuerdo con su deseo. Arrastre el objeto del camión y deje caerlo en la pantalla del juego y luego los objetos de la rueda. Avanzando, haga clic con el botón derecho en el cuerpo del camión y presione "Editar objeto Truckbody", haga clic en los comportamientos, haga clic en "Agregar un comportamiento al objeto" y haga clic en "Física Motor 2.0" y verá la siguiente ventana.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Cómo hacer un juego de cero">}}

En esta ventana, puede modificar las configuraciones como densidad, ancho y altura. Ahora, repita el mismo proceso para el objeto Greenfloor, pero mantenga el tipo "estático" y presione el botón "Aplicar". Nuevamente, edite el objeto de CamionBody, presione "Puntos de edición", presione "Puntos EDD" y luego inserte el nombre de su rueda delantera (es decir, FW en este tutorial). Se creará un punto en el objeto, simplemente arrastre ese punto a la ubicación de la rueda. Repita este proceso para la rueda trasera también y realice el X e Y a 0 como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="tutorial de desarrollo de juegos">}}

Después de eso, edite ambos objetos de la rueda y ajuste sus puntos. Además, nuevamente vaya a la opción Editar ruedas, presione la pestaña "Comportamiento", seleccione "Física Motor 2.0" y establezca los valores de tipo, radio y densidad como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="software de diseño de juegos">}}

Ahora, haga clic en la pestaña "Nueva escena", presione "Agregar nuevos eventos", presione "Agregar condición", busque "al comienzo de la escena" y presione "OK". Luego, presione la búsqueda de "Agregar acción" para "Camera Center X Posición" y establezca las siguientes configuraciones.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="Software de desarrollo de juegos gratis">}}

Ahora, copie la acción pero asegúrese de que la acción copiada esté configurada en "Y". Agregue otra acción llamada "Cambiar zoom de cámara", configúrela en 0.4 y arrastre esta acción a la parte superior. Agregue otra acción, busque el "Agregar una junta de rueda" y configure las configuraciones para ambas ruedas como se muestra a continuación.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Guía de desarrollo de juegos">}}

Después de eso, agregue una nueva condición, busque "llave presionada" y configúrela a la izquierda. Ahora, agregue la acción, seleccione la primera rueda, busque la velocidad lineal x ", signo de modificación para" restar "y establezca el valor 50. Repita este paso para la tecla correcta, pero asegúrese de que el signo de modificación se agregue como se muestra a continuación.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="tutorial de desarrollo de juegos">}}


## ejecutando el juego {#run}
Una vez que se completan todos los pasos. Es hora de ejecutar el juego presionando el botón colocado en la esquina superior izquierda. Lanzará el juego a la nueva ventana.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Cómo hacer un juego de cero">}}


## conclusión {#conclusion}
Este es el final de esta publicación de blog y seguramente has llegado a saber cómo hacer un juego de cero. Sin embargo, hay muchos software gratuito de diseño de juegos ** disponible en el mercado, ya que esta industria está ganando popularidad y demanda. Hay varias razones detrás de esto, como el software de código abierto, son escalables, configurables, rentables y fáciles de mantener. Además, la demanda de constructores de juegos multiplataforma está aumentando a medida que los desarrolladores les resulta cómodo construir un juego que se ejecute en todas las plataformas populares como Android, iOS, Web y Desktop. Por otro lado, el advenimiento de la pandemia ha cambiado la vida de las personas y ahora prefieren permanecer en el interior. Entonces, la gente tiende a jugar videojuegos en su tiempo libre.
Finalmente, [Contenerize.com] [15] está listo para mejorar su base tutorial con algunos tutoriales de desarrollo de juegos más interesantes **. Manténgase conectado con esta categoría [Software de desarrollo de juegos] [16] para actualizaciones regulares.

## Explorar
  *** [GDEVROVED] [7] **
  *** [GODOT] [17] **
  *** [Superpoderes] [18] **
  *** [Cocos Creator] [19] **
  *** [Panda3d] [20] **
  *** [PlayCanvas] [21] **
  *** [comenzando con el desarrollo de juegos usando superpoderes] [2] **
  *** [Tutorial de desarrollo del juego | Movimiento del jugador en GDegelop] [3] **
  *** [Tutorial de desarrollo de juegos HTML5 para programadores de videojuegos] [4] **
  *** [Cómo la industria del juego global aprovechando el software de código abierto] [5] **
  *** [Tutorial GDEVROVEL para principiantes para comenzar el desarrollo del juego] [6] **
  *[** Top 5 Software de desarrollo de juegos gratuitos en el año 2021 **] [1]
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
