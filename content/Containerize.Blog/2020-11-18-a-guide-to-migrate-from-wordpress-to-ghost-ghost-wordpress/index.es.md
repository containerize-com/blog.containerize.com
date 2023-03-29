---
title: "Una guía para migrar de WordPress a Ghost | WordPress Ghost" 
seoTitle: "Una guía para migrar de WordPress a Ghost | WordPress Ghost" 
description: "Este tutorial trata sobre cómo migrar de WordPress a Ghost. Aprenderemos cómo migrar sus publicaciones y páginas al fantasma del sitio web existente de WordPress." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost y WordPress son dos plataformas de publicación de contenido de código abierto líderes. En este tutorial, aprenderemos cómo migrar contenido de WordPress a Ghost." 
url: /es/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost y WordPress son dos plataformas de publicación de contenido de código abierto líderes. En este tutorial, aprenderemos cómo migrar contenido de WordPress a Ghost.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Migra de WordPress a Ghost">}}


## Descripción general
En el pasado, publicamos muchos artículos sobre temas como [impulsar sus clientes potenciales con la integración gratuita de WordPress CivicRM][1], [Cómo integrar el foro del discurso con WordPress][2] y muchos más. Ghost es una plataforma emergente de blogs de código abierto. Es un Node.js CMS para la publicación de contenido y viene con una interfaz simple y limpia que hace que sea fácil de usar. Es una plataforma maravillosa para principiantes, ya que se centra en Markdown en lugar de la edición de Wysiwyg. La potencia y la velocidad del nodo.js hacen que el fantasma sea muy rápido. Debido a la simplicidad de la plataforma, muchos usuarios están cambiando de otras plataformas. Dado que WordPress es la plataforma número uno para la administración de contenido.
Por lo tanto, más usuarios **migran de WordPress a Ghost** . Hay mucho contenido que incluye archivos multimedia, comentarios, publicaciones, etc. Hay complementos disponibles que lo ayudan a migrar contenido de WordPress a Ghost. El principal beneficio de adoptar Ghost es que se centra en la optimización de motores de búsqueda. En este tutorial de WordPress Ghost, pasaremos por todos los pasos de migración utilizando el complemento oficial de exportación de WordPress.
* **[una introducción de Briedf de WordPress][3]** 
* **[¿Qué es el fantasma?][4]** 
* **[requisitos][5]** 
* **[Exportar contenido de wrodPress usando complemento][6]** 
* **[Importar contenido al fantasma][7]** 
* **[Conclusión][8]** 

## **Una introducción Briedf de WordPress** {#wp}

[WordPress][9] es una plataforma de blogs de código abierto líder que ha impulsado una gran cantidad de sitios web. Este software de blogs gratuito es autohospedado, multilingüe y proporciona soporte para muchos idiomas. Además, la comunidad de desarrollo de WordPress es muy vibrante y ha desarrollado un grupo gigantesco de complementos útiles que están disponibles fácilmente. Estos complementos abordan casi todos los casos de uso del sitio web de su negocio. Además, está escrito en PHP y viene con documentación integral con respecto al desarrollo y la implementación. Todo el código fuente está disponible en GitHub. Además, esta plataforma de blogs es altamente extensible, configurable y proporciona integraciones con aplicaciones de terceros. Hay un tablero muy lógico y fácil de entender donde los usuarios pueden arrastrar y soltar elementos para modificar el aspecto de sus sitios web.

## **¿Qué es Ghost?** {#ghost}

[Ghost][10] es otra popular plataforma de blogs de código abierto. Esta es una de las plataformas de publicación de contenido más utilizadas que son altamente adoptadas por desarrolladores y propietarios de sitios. Además, Ghost es muy amigable con SEO y viene con temas incorporados, formularios, boletines por correo electrónico y suscripciones. Este software de blogs gratuito está escrito en JavaScript y toda la documentación está disponible con respecto al desarrollo y la implementación.

## Requisitos {#requirements}

En la sección del tutorial de WordPress Ghost, veremos los requisitos necesarios para migrar de WordPress a Ghost. Con el complemento oficial de exportación de WordPress, puede migrar fácilmente su contenido de WordPress a Ghost. En este tutorial, lo guiaremos sobre cómo exportar su contenido de WordPress a un sitio fantasma. Por lo tanto, debe tener una instalación en funcionamiento de WordPress y WordPress **Complemento de exportación** Instalado.

## Contenido de exportación de WordPress {#export}

En primer lugar, tendrá que instalar el complemento. Siga los siguientes pasos para instalar el complemento
* Haga clic en **complementos** desde el menú de la barra lateral
* Haga clic en **Agregue nuevo**y use el campo de búsqueda en la esquina superior derecha para buscar**exportación de fantasmas** 
* **Instalar**y **Activar** El complemento de "**Ghost Foundation** "

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Instale y active el complemento Ghost para WordPress">}}

* Una vez que se activa el complemento, navegue a **Herramientas** desde el menú lateral
* Haga clic en **Exportar a Ghost** con el menú de la barra lateral.
  * Se le proporcionará una guía sobre cómo preparar su contenido de WordPress para Ghost.
  * Dado que Ghost usa etiquetas en lugar de categorías, por lo que el complemento lo ayudará a convertir las categorías en etiquetas.
{{_LINE_37_}}
{{_LINE_38_}}
    Los siguientes pasos cambiarán permanentemente la estructura de contenido de su sitio de WordPress. Si no está seguro de hacer este cambio, utilice la herramienta de exportación estándar de WordPress en Herramientas> Exportar para crear una copia de seguridad completa de todo su contenido.
{{_LINE_40_}}
{{_LINE_41_}}
* Navegue a **import** en el menú de la barra lateral
* Haga clic en **Ejecutar el importador**Bajo el**Convertidor de taxonomía** Artículo de importación.
  * Use las casillas de verificación para seleccionar las categorías que desea importar a sus etiquetas y, por lo tanto, a su sitio fantasma.
* Luego haga clic en **Convertir categorías en etiquetas** .
* Navegue de nuevo a **Exportar a Ghost**dentro de**Herramientas** En el menú de la barra lateral.
* Haga clic en el botón **Descargar el archivo Ghost** . Habrá descargado un archivo zip que contiene todo su contenido.

## Importar contenido en fantasma {#import}

En esta sección del tutorial de WordPress Ghost, implementaremos los pasos para importar el contenido en Ghost.
* Inicie sesión en Ghost Admin y navegue a **Labs** Vista.
* Haga clic en el botón **Elija archivo**dentro de la opción**Importar contenido** y seleccione su archivo zip exportado
* Haga clic en **Importar** . Todo su contenido se importará a su sitio de fantasmas.
En este momento, Ghost no tiene ningún sistema de comentarios incorporado. La alternativa más popular es Disqus.

## Conclusión {#conclusion}

Esto nos lleva al final de esta publicación de blog. En este tutorial de WordPress Ghost, aprendimos a preparar su contenido de WordPress listo para la migración a Ghost. Utilizamos el complemento oficial de migración de fantasmas de la Fundación Ghost para realizar migraciones. Además, esta publicación de blog seguramente lo ayudará si está buscando migrar de WordPress a Ghost, ya que hemos cubierto todos los pasos necesarios. Además, hay muchas plataformas de publicación de contenido de código abierto y artículos tutoriales mencionados en la sección "Explorar" a continuación. Sin embargo, ambas plataformas de blogs de código abierto son el software principal que ofrece características de nivel empresarial para satisfacer las necesidades de sus sitios web de negocios.
Finalmente, [Contenerize.com][11] ha estado escribiendo nuevas publicaciones de blog sobre software de código abierto. Por lo tanto, manténgase conectado con [esta][12] plataforma para actualizaciones regulares.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [WordPress][9]
  * [Jekyll][13]
  * [Discurso][14]
  * [Ghost][10]
  * [Cómo dockerizar WordPress con Docker Compose][15]
  * [Cómo habilitar la compresión de GZIP en WordPress para una mejor PagSpeed ​​y SEO][16]
  * [Aumente sus clientes potenciales con la integración gratuita de WordPress CivicRM][1]
  * [Automatizar el sistema de tickets usando WordPress y Osticket][17]
  * [Cómo integrar el foro del discurso con WordPress][2]
  * [Aumente el tráfico de búsqueda de sitios web siguiendo los 7 mejores blogs de SEO][18]
  * [Cómo construir su sitio web con WordPress y Gatsby][19]



[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
