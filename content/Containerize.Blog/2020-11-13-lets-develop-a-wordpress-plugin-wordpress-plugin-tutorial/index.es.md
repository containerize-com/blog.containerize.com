---
title: "Desarrollemos un complemento de WordPress | Tutorial de complementos de WordPress" 
seoTitle: "Desarrollemos un complemento de WordPress | Tutorial de complementos de WordPress" 
description: "¿Interesado en el desarrollo de complementos de WordPress? Siga este tutorial de complementos de WordPress que describe los pasos completos para crear un complemento básico de WordPress." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "WordPress Plugin es un módulo que activa en su sitio web para proporcionar una serie de características o elementos. Estos complementos están optimizados por SEO y ofrecen automatización." 
url: /es/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## El complemento de WordPress es un módulo que activa en su sitio web para proporcionar una serie de características o elementos. Estos complementos están optimizados por SEO y ofrecen automatización.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="Tutorial de complementos de WordPress">}}


## Descripción general
WordPress es una plataforma de blogging de código abierto de nivel empresarial. Un complemento **WordPress**  es un conjunto de código independiente que mejora y extiende la funcionalidad de WordPress. Al usar cualquier combinación de PHP, HTML, CSS, JavaScript/JQuery. Un complemento puede agregar nuevas funciones a cualquier parte de su sitio web.
La funcionalidad que puede agregar a su sitio web depende de lo que se haya creado cada complemento específico para hacer. Se puede desarrollar un complemento de WordPress para hacer cualquier cosa. Desde una pequeña tarea hasta una aplicación completa que realiza una serie de operaciones y tiene sus propias interfaces. Los complementos son diferentes de su tema y trabajan de forma independiente, utilizando ganchos, filtros, códigos cortos, widgets y código personalizado para realizar su funcionalidad.
En este tutorial de complementos de WordPress, aprenderemos cómo crear nuestro primer complemento de WordPress. La razón más importante para crear un complemento es que le permite separar su propio código del código central de WordPress.
  ***[requisitos][1]** 
  ***[Conceptos básicos del desarrollo del complemento][2]** 
  ***[¿Cómo crear complemento WP?][3]** 
  ***[Conclusión][4]** 

## Requisitos   {#Requirements}
  * Última versión de WordPress
  * Comprensión de PHP / MySQL
  * Comprensión de HTML / CSS y JavaScript

## conceptos básicos del desarrollo de complementos   {#Basics}
Tomemos un momento para hablar sobre algunos aspectos clave del desarrollo de complementos. Una comprensión sólida de cómo funcionan estos conceptos lo ayudará a desarrollar una funcionalidad fácil de usar y mantenible.

## # Acciones
**Los ganchos de acción  **son una herramienta muy útil en **  WordPress  ****  complemento  **y se utilizan para realizar funciones (**  acciones** ) en lugares específicos de un tema o complemento. WordPress tiene docenas de acciones definidas a lo largo de su funcionalidad central, cada acción que consiste en un nombre único. Para más detalles [leer][5].

## # Filtros
Un filtro de WordPress es un gancho que acepta una variable (o una serie de variables) y las devuelve después de haber sido modificado. Estos filtros a menudo se usan para que tenga una forma de manipular la información predeterminada. Para más detalles [leer][6].

## # Códigos cortos
Los códigos cortos son macros que se pueden usar para realizar interacciones dinámicas con el contenido. es decir, crear una galería a partir de imágenes adjuntas a la publicación o hacer un video. Como resultado, son una forma valiosa de mantener el contenido limpio y semántico al tiempo que permite a los usuarios finales cierta capacidad de alterar programáticamente la presentación de su contenido. Para más detalles [leer][7].

## # widgets
Los widgets son importantes porque le dan otro medio para ejecutar el código de su complemento al tiempo que proporciona una interfaz fácil de usar. Dado que la mayoría de los temas admitirán una o más barras laterales; Agregar sus propios widgets le dará acceso rápido para mostrar su información dentro del tema.

## **¿Cómo crear el complemento WP?** {#Create}
En esta sección del tutorial de complementos de WordPress, todo lo que necesita hacer es crear una carpeta y luego crear un solo archivo con una línea de contenido. Navegue a la carpeta **WP-Content/Plugins  **y cree una nueva carpeta llamada **  MyTestPlugin **. Dentro de esta nueva carpeta, cree un archivo llamado  **mytestplugin.php**  . Abra el archivo en un editor de texto y pegue la siguiente información en él:
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
Ahora, puede entrar en el back -end para activar su complemento. Eso es todo, aunque este complemento no hace nada. Pero, es un complemento activo y funcional. La mejor práctica al desarrollar un complemento es separar perfectamente su código en archivos y carpetas apropiados.
Para demostrar, agregemos funcionalidad a nuestro complemento de prueba que rastree la popularidad de nuestros artículos almacenando cuántas veces se ha visto cada publicación.

## # Almacenamiento de vistas de la página
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
Hasta ahora, todo bien en este tutorial de complementos de WordPress. Pero esta función nunca se llama, por lo que en realidad no se usará. Aquí es donde entran los ganchos. Podrías entrar en los archivos de tu tema y llamar a la función manualmente desde allí. Pero entonces perderías esa funcionalidad si alguna vez cambiaste el tema, derrotando así a todo el propósito. Un gancho, llamado **wp_head **, que se ejecuta justo antes de que la etiqueta esté presente en la mayoría de los temas, por lo que podemos establecer nuestra función para ejecutar siempre que  **wp_head**   se ejecute, como así:
```
add_action("wp_head", "add_page_views");
```

## # mostrando las vistas de la página
Ahora crearemos otra función que devuelve las vistas de la página que ya almacenamos en la función anterior. Echemos un vistazo al código:
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
Hasta ahora, acabamos de recuperar el recuento de vistas. Ahora, vamos a mostrarlo. Es posible que esté pensando que debe ser complejo. Pero, es muy simple como esto:
```
echo get_page_views() . “view(s)”
```

## conclusión   {#conclusion}
Este es el final de este tutorial de complemento de WordPress. Siguiendo este artículo y utilizando solo un puñado de funciones, hemos creado un complemento básico para rastrear nuestras publicaciones más populares. Podemos mejorarlo mucho, pero el propósito era hacerte sentir cómodo con lo básico. Además, al aprender algunos patrones de desarrollo de WordPress (complementos, ganchos, etc.), también está obteniendo habilidades que también le servirán en entornos que no son de WordPress. Hay muchas otras publicaciones de blog relacionadas con plataformas de blogs de código abierto y CMS de código abierto. que puede encontrar en la sección de exploración a continuación. Esta publicación de blog realmente puede ayudarlo si está buscando implementar una plataforma de blogs de código abierto para su negocio.
Finalmente, [Contenerize.com][8] está escribiendo artículos sobre otros productos de código abierto. Por lo tanto, manténgase en contacto con las categorías [Blogging][9] y [Software de inteligencia empresarial][10] para noticias y actualizaciones periódicas

## Explorar
  * [Cómo instalar Matomo para WordPress | Tutorial de WordPress][11]
  * [Aumente sus clientes potenciales con la integración gratuita de WordPress CivicRM][12]
  * [Cómo instalar complemento en WordPress | Foro de vainilla][13]
  * [Joomla vs Drupal | Comparación de CMS en 2021][14]
  * [Cosas para revisar antes de optar el software de código abierto en 2021][15]

  
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
