---
title: "Comenzando con el desarrollo de juegos usando superpoderes" 
seoTitle: "Comenzando con el desarrollo de juegos usando superpoderes" 
description: "SuperPowers es un fabricante de juegos 3D de código abierto con colaboración en tiempo real. Este tutorial se trata de comenzar con el desarrollo de juegos usando superpoderes." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "El comportamiento y el movimiento de los objetos del juego están controlados por animaciones. En este tutorial de desarrollo del juego, aprenderemos a animar a los personajes del juego." 
url: /es/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## El comportamiento y el movimiento de los objetos del juego están controlados por animaciones. En este tutorial de desarrollo del juego, aprenderemos a animar a los personajes del juego.

{{< figure align=center src="images/super.png" alt="Comenzando con el desarrollo de juegos">}}


## **Descripción general**
En nuestra serie tutorial de desarrollo de juegos de código abierto, hemos publicado publicaciones de blog sobre algunos temas populares como [Tutorial de desarrollo de juegos | Movimiento del jugador en GDEVelovel][1], [Tutorial de desarrollo de juegos HTML5 para programadores de videojuegos][2], [cómo la industria del juego global aprovechando el software de código abierto][3] y [tutorial de GDEVelovelop para principiantes para comenzar el desarrollo del juego][4 ] Este artículo de tutorial trata sobre el desarrollo del juego utilizando código abierto gratuito [superpoderes][5] cubriendo los siguientes puntos.
  *** [Tipos de animaciones de juego][6] **
  *** [¿Cómo crear sprites?][7] **
  *** [trabajando con escenas][8] **
  *** [Lanzamiento del juego en localhost][9] **
  *** [Conclusión][10] **
Hay muchos software de desarrollo de juegos de código abierto para principiantes disponibles que vienen con capacidades de autohostación. Sin embargo, [superpoderes][5] es un software de creación de juegos 2D y 3D multiplataforma. Proporciona bibliotecas incorporadas y ejemplos de juegos que facilitan el desarrollo de juegos para los desarrolladores de juegos. Esta aplicación de diseño de juego gratuita está escrita en TypeScript y toda la documentación está disponible en [Github][11] con respecto al desarrollo y la implementación. En esta publicación de blog, exploraremos superpoderes con respecto a su uso.

## Tipos de animaciones de juego {#Types}
Las animaciones son una parte vital de los videojuegos. Los personajes en los juegos deben responder a las acciones del usuario, la animación debe ser suave y abrupta. Se trata de administrar múltiples marcos y animadores refine esos cuadros para producir efectos en movimiento. Además, hay animaciones 2D y 3D donde los objetos parecen moverse a través del espacio tridimensional. Los desarrolladores de juegos y los diseñadores gráficos crean modelos 3D. Las animaciones dependen de la naturaleza del juego y los tipos más comunes son las siguientes.
** Walk Animation: ** Walk Animation trata sobre la creación de un proceso de caminar en el que los personajes animan cada paso y dan ilustraciones para caminar.
** Animación inactiva: ** Este es un tipo de animación muy importante en el que el personaje no hace nada porque el usuario no presiona ningún controlador.
** Run Animation **: Run Animation es parte de cada juego en el que el objeto del juego realiza el ciclo de ejecución. Este tipo es el tipo más común y requiere más atención del desarrollador.
** Fighting Animation **: En los juegos de lucha, los personajes de múltiples juegos luchan entre sí.
** Jump Animation **: Este tipo de animación requiere mejores habilidades y experiencia. El personaje comprime y libera el cuerpo para realizar la ilustración de salto.

## ¿Cómo crear sprites? {#sprites}
Esta sección de la guía de creación de juegos permite a los usuarios crear proyectos y comenzar a crear sprites para el juego. Los sprites no son imágenes o gráficos no estáticos que no solo se usan en los juegos sino también parte del diseño web. Estos normalmente se dibujan sobre un fondo que se está actualizando constantemente.
Antes de continuar, asegúrese de haber configurado superpoderes en su máquina. Puedes seguir este enlace [Tutorial de desarrollo de juegos HTML5 para programadores de videojuegos][2] para configurar esta plataforma de creación de juegos gratuito.
Primero, abra la aplicación al navegador y creemos un nuevo proyecto vacío. como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Comenzando con el desarrollo de juegos">}}

Aterrizará en el espacio del proyecto después de crear el nuevo proyecto vacío. Hay opciones de menú en el panel lateral izquierdo. Entonces, haga clic en el botón "+" para abrir el cuadro de diálogo de activos. Seleccione la opción Sprite y presione Crear.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Guía de creación de juegos">}}

Ahora, suba la imagen en la que agregaremos comportamiento. Puede hacerlo haciendo clic en el botón colocado en la esquina superior derecha. Este panel trata sobre la configuración del objeto.
A continuación, puede establecer el tamaño de la cuadrícula según su elección. Hay dos porciones del lienzo. La parte superior muestra la hoja completa donde la parte inferior muestra la parte seleccionada en la que estamos destinados a aplicar la animación. Puede hacerlo presionando el botón "Configuración" en el panel lateral derecho como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="tutorial de desarrollo de juegos">}}

Después de eso, creemos animaciones. Podemos hacerlo haciendo clic en el botón "Nuevo" en la pestaña Animación. Puedes ver la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="Software de desarrollo de juegos para principiantes">}}


## trabajando con escenas {#scenes}
En esta sección, agregaremos una escena a nuestro juego. Para eso, nuevamente abra el cuadro de diálogo de activos y seleccione "escena" y presione el botón Crear. Ahora cree un actor haciendo clic en el botón Estrella disponible en la esquina superior derecha como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="Cómo hacer un juego de cero para principiantes">}}

Después de eso, cree un nuevo componente haciendo clic en el botón "Nuevo componente" colocado en el panel lateral de la derecha. Seleccione "Sprite Renderer" y presione Crear. Luego, arrastre el sprite creado desde el panel lateral izquierdo y deje caer debajo de la sección Renderizador de sprite. Además, cree otro actor llamado "cámara" y, de la misma manera, cree un nuevo componente llamado cámara.
Puede cambiar el modo de cámara, así que cámbielo al modo "ortográfico" como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="Comenzando con el desarrollo del juego,">}}

En la esquina inferior izquierda, navegue a la opción Configuración y ábrala. Bajo las secciones "Sprite" y "Mapa de mosaico", inserte 16 contra "Píxel por unidad". Luego, en el "Modo de cámara predeterminado", seleccione 2D en la sección "Escena". Además, debajo de la sección "Mapa de mosaico", ancho predeterminado 36, altura predeterminada 28 y el tamaño de la cuadrícula establecido de mosaico 16. No hay necesidad de guardarla, sino que todo está en autosave.

## lanzando el juego en localhost {#local}
Entonces, estamos cerca de lanzar la animación de superpoderes de nuestro primer juego. Sin embargo, nuevamente vaya a la pestaña Configuración y arrastre la escena desde el panel lateral izquierdo y suelte contra la "escena de inicio" como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="Cómo hacer un juego de cero para principiantes">}}

Ahora, haga clic en "Player" y debajo del componente "Renderizador de Sprite", seleccione Animación contra el atributo "Animación". Finalmente, inicie la aplicación haciendo clic en el botón colocado en la esquina superior izquierda. La nueva pestaña mostrará los objetos móviles en la pantalla.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Comenzando con el desarrollo de juegos">}}


## conclusión {#conclusion}
Este es el final del tutorial en el que aprendimos a hacer un juego de cero para principiantes. Por lo tanto, comenzar con el desarrollo del juego se vuelve fácil cuando hay documentación detallada del software de desarrollo de juegos disponible. Finalmente, [** Contenerize.com **][12] está en un proceso consistente de escribir artículos sobre temas y productos de código abierto. Por lo tanto, manténgase en contacto con esta categoría [Software de desarrollo de juegos][13] para actualizaciones regulares.

## Explorar
  * [GDEVROVED][14]
  * [Godot][15]
  * [Superpoderes][5]
  * [Cocos Creator][16]
  * [Panda3d][17]
  * [PlayCanvas][18]

  
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
