---
title: "Tutorial de desarrollo de juegos | Movimiento del jugador en GDegelop" 
seoTitle: "Tutorial de desarrollo de juegos | Movimiento del jugador en GDegelop" 
description: "Siga este tutorial de desarrollo del juego para conocer las funciones básicas del juego. GDEVROVEL es un software de creación de juegos gratuito para construir y publicar juegos." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Mover objetos en la pantalla es una parte crucial de cualquier juego. En esta guía de desarrollo del juego, aprenderemos cómo controlar y mover objetos de juego en GDEVOLEVE." 
url: /es/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Mover objetos en la pantalla es una parte crucial de cualquier juego. En esta guía de desarrollo del juego, aprenderemos cómo controlar y mover objetos de juego en GDEVOLEVE.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Tutorial de desarrollo de juegos">}}


## **Descripción general** 
La comunidad de código abierto está emergiendo con el paso de cada minuto. Hay juegos multiplataforma, juegos móviles y juegos de escritorio. Varios tipos de juegos incluyen juegos de acción, juegos de aventura, juegos de rol, juegos deportivos, juegos de rompecabezas, juegos de simulación y muchos más. Por lo tanto, todos estos tipos de juegos diferentes han dado un inmenso impulso al tráfico, ya que los usuarios de todos los grupos de edad tienden a jugar estos juegos.
Además, la pandemia ha traído un cambio masivo en el estilo de vida de las personas que viven en todo el mundo. La gente ahora tiene más tiempo. Todas las actividades fuera de línea se han vuelto en línea. Por lo tanto, tienden a optar por el software en línea para realizar tareas profesionales y videojuegos en caso de entretenimiento. Debido a todas estas razones, esta industria ha ganado sostenibilidad y el apoyo de los usuarios y desarrolladores. En el pasado reciente, escribimos sobre temas como [Tutorial de desarrollo de juegos HTML5 para programadores de videojuegos][1], [cómo la industria del juego global aprovecha el software de código abierto][2] y [tutorial de GDEVelovelop para principiantes para comenzar el desarrollo del juego][3]. En este tutorial de desarrollo del juego, cubriremos los siguientes puntos.
* **[Características de exploración de GDegelop][4]** 
* **[trabajando en un juego][5]** 
* **[Conclusión][6]** 

## Características de exploración de GDEVelovel {#features}

[GDEVROVED][7] es una plataforma de construcción de juegos de código abierto. Es altamente extensible y ofrece una interfaz lógica donde los usuarios pueden navegar fácilmente. Este software libre está escrito en C ++, TypeScript y JavaScript. Además, hay una documentación integral disponible con respecto al desarrollo y la implementación. Todo el código fuente está disponible en GitHub. Además, hay muchas características que hacen que este software sea prominente. Veamos algunas de las características clave.
**Crossplatform** : Esta plataforma de creación de juegos es multiplataforma y se puede implementar en casi todos los sistemas operativos populares como macOS, Linux y Windows.
**Opciones de exportación** : GDEVOLEVED Permite a los usuarios exportar juegos desarrollados con solo un clic para Android, iOS y Web. Los propietarios de juegos pueden mostrar anuncios de video en sus juegos y puede ser posible con el apoyo de ADMOB.
**Objetos de juego ricos** : Este fabricante de juegos de código abierto proporciona una amplia gama de objetos de juego, como sprites con animaciones, explosiones de fuego y otros efectos con la ayuda de los emisores de partículas. El texto formateado, los videos integrados y el dibujo de formas personalizadas están disponibles para traer efectos llamativos a los juegos.
**Comportamientos versátiles** : En este artículo básico de desarrollo de juegos, le mostraremos cómo podemos agregar diferentes comportamientos a los objetos del juego. Hay múltiples comportamientos disponibles que están listos para usar y los usuarios pueden desarrollarse más según los requisitos. Todo sucede en cuestión de unos pocos clics del mouse.
**Interfaz avanzada** : En este tutorial de diseño del juego, veremos la interfaz de usuario de este motor de juego 3D. Los usuarios pueden arrastrar y soltar varios elementos y objetos del juego.

## Trabajando en un juego {#working}

Esta sección del Tutorial de Desarrollo del Juego elabora el desarrollo básico del juego con GDEVOLEVE. Antes de ir más allá, asegúrese de haber instalado GDEVelop localmente en su máquina.
Puede visitar este tutorial [Tutorial GDEVelovelop para principiantes para comenzar el desarrollo del juego][3] para obtener el conocimiento de configurar este editor de juegos en Localhost.
Ahora, abra el editor y cree un nuevo proyecto. En este tutorial, crearemos una carpeta en Google Drive para guardar archivos de juego. Ahora haga clic en "Crear un nuevo proyecto", abrirá un nuevo cuadro de diálogo, seleccione la opción "Juego vacío" para comenzar a construir un nuevo juego.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Tutorial de desarrollo de juegos">}}

En la barra de menú del proyecto lateral izquierdo, haga clic en "Guardar como" para guardar el juego.
En primer lugar, agregemos una escena. Para eso, haga clic en la opción "Escenas" y cambie el nombre, por ejemplo, "Primera escena" en esta tutorial que se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" plataforma de construcción de juegos">}}

Después de crear la escena, ábrala y agregue un objeto. Para agregar un objeto, haga clic en "Agregar un nuevo objeto" que aparece en el panel lateral derecho. Eventualmente, abrirá un nuevo cuadro de diálogo que contiene diferentes activos. Sin embargo, seleccionemos el objeto "Red Ship" golpeó "Agregar al juego" y cerrar el cuadro de diálogo.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Guía de desarrollo de juegos">}}

A continuación, verá un objeto que aparece en el panel lateral izquierdo. Arrastelo a la pantalla principal y presione el botón que aparece en la esquina superior izquierda para iniciar el juego. Por lo tanto, abrirá el juego en una nueva ventana como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Tutorial de desarrollo de juegos">}}

Hasta ahora, no puedes jugar con este objeto ya que no hay comportamiento agregado. Entonces, agregemos un comportamiento a este objeto. Para eso, haga clic en el objeto de envío y presione "Editar objeto". Abrirá un nuevo cuadro de diálogo, navegará hasta la pestaña Comportamientos, seleccionará "Movimiento de arriba hacia abajo" y presione "Aplicar". Ahora, presente la vista previa del juego y verá que puede mover el objeto de barco en la pantalla usando las teclas de flecha de su teclado. Ahora, notará que el objeto del barco sale de la pantalla. Por lo tanto, para resolver este problema, editemos el objeto y navegemos a los comportamientos. Haga clic en "Agregar un comportamiento al objeto". Ahora, navegue a "Buscar nuevos comportamientos" y busque el comportamiento de "permanecer en la pantalla" en la barra de búsqueda como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Desarrollo">}}

A continuación, seleccione e instálelo en el proyecto, y presione Aplicar. Una cosa más es ajustar el punto central del objeto. Entonces, vayamos nuevamente a las propiedades del objeto y "editar puntos" que aparecen en la parte inferior. Aterrizarás en la siguiente pantalla.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="Tutorial de diseño de juegos">}}

Entonces, arrastre la marca que aparece en la esquina superior izquierda al centro del objeto, luego cierre y aplique. Ahora, si relanzas el juego, verás los cambios.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Tutorial de desarrollo de juegos">}}


## Conclusión {#Conclusión}

Este es el final de este tutorial de desarrollo del juego. Con suerte, esta publicación de blog sería útil para los desarrolladores de juegos. Este tutorial le permitió trabajar con los objetos del juego y agregar comportamientos. En el futuro, Contenerize.com publicará publicaciones de blog y artículos de tutoriales sobre un software de diseño de videojuegos de código abierto. Por lo tanto, manténgase conectado con esta categoría [Software de desarrollo de juegos][8] en [Contenerize.com][9] para actualizaciones regulares.

## Explorar
  * [GDEVROVED][7]
  * [Godot][10]
  * [Superpoderes][11]
  * [Cocos Creator][12]
  * [Panda3d][13]



[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/es/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
