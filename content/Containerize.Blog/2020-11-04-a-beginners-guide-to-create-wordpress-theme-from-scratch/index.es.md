---
title: "Una guía para principiantes para crear un tema de WordPress desde cero" 
seoTitle: "Una guía para principiantes para crear un tema de WordPress desde cero" 
description: "Aprenda a crear un tema de WordPress desde cero sin dolor. En este tutorial hemos explicado el proceso en sencillos pasos." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Paso 5: archivo styles.css" 
url: /es/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Una guía para principiantes para crear un tema de WordPress desde cero">}}

Cómo crear el tema de WordPress es una de las principales consultas en la búsqueda de Google. Crear un tema de WordPress puede ser simple si conoce HTML, CSS y JavaScript básicos. Sin embargo, si eres nuevo en WordPress, entonces este tutorial es para ti. Todo lo que tienes que hacer es seguir los pasos mencionados. Entonces, leamos esta guía y aprendamos cómo crear un tema de WordPress desde cero.
  * [Requisitos][1]
  * [Guía paso a paso][2]


### Requisitos {#requirements}

Primero y lo más importante que debe hacer es instalar WordPress. WordPress es conocido por su facilidad de instalación. Es un proceso simple y se puede hacer fácilmente siguiendo la [Guía][3].


### Cómo crear el tema de WordPress; Guía paso por paso {#guide}

Para el tema de WordPress, todo se hará en el directorio  **wp_content** solamente. Simplemente haga una nueva subcarpeta de tema en la carpeta  **WP_CONTENT → TEMSES.**  Supongamos que lo nombra **"CustomTheme"**  .
La segunda cosa es decidir el diseño del tema. Aquí, el tutorial muestra el diseño básico que consta de  **encabezado, área principal, pie de página, barra lateral**  .
Básicamente, WordPress solo necesita 2 archivos, es decir, style.css e index.php. Pero, para este diseño, necesita  **5 archivos**  , como sigue;
*  **Header.php -**  Contiene el código para la sección del encabezado del tema.
*  **Index.php -**  Contiene el código para el área principal y especificará dónde se incluirán los otros archivos. Este es el archivo principal del tema.
*  **Sidebar.php -**  Contiene la información sobre la barra lateral.
*  **Fuente.php -**  Maneja la sección de pies de página.
*  **style.css -**  Responsable del estilo de su tema.
*  **bootstrap.css -**  No se requiere código CSS separado; altamente receptivo.
*  **Bootstrap.js -**  Proporciona su propia JS para la barra de navegación o pestañas, etc.
 **Bootstrap.js** y **bootstrap.css** debe descargarse del paquete Bootstrap y copiarse en la carpeta **Tema** .
Aquí están los pasos a seguir hasta el tema de configuración

### Paso 1: Archivo Header.Php
Coloque el siguiente código en el archivo Header.php.
```
<html>
<head>
<title>Custom Theme</title>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery-ui.min.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/bootstrap.js'; ?>">
</script>
<link  href="<?php echo get_stylesheet_directory_uri().'/css/bootstrap.css'; ?>">
<link  href="<?php bloginfo('stylesheet_url'); ?>">
</head>

<body>

<div id="ttr_header" class="jumbotron">
<h1>HEADER</h1>
</div>
<div class="container">
```
Este archivo de encabezado.php contiene el código para la parte del encabezado en la que está vinculado el archivo JS y el estilo. Muestra el encabezado de la página.

### Paso 2: archivo index.php
Coloque el siguiente código en el archivo principal index.php
```
<?php get_header(); ?>
<div id="ttr_main" class="row">
<div id="ttr_content" class="col-lg-8 col-sm-8 col-md-8 col-xs-12">

<div class="row">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
<h1><?php the_title(); ?></h1>
<h4>Posted on <?php the_time('F jS, Y') ?></h4>
<p><?php the_content(__('(more...)')); ?></p>
</div>
<?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
</div>
</div>
<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
```
El código anterior muestra el contenido principal de la publicación, la barra lateral y el pie de página.

### Paso 3: archivo de barra lateral.php
Agregue el siguiente código en la barra lateral.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
En el código anterior, las funciones internas de WordPress se llaman para mostrar diferentes categorías, archivos de publicaciones.

### Paso 4: archivo de footer.php
Agregue las líneas de código a continuación al archivo Footer.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Paso 5: archivo styles.css
Agregue las siguientes líneas al archivo style.css
```
body
{
text-align: left;
}
#ttr_sidebar
{
border-left: 1px solid black;
}
#ttr_footer
{
width: 100%;
border-top: 1px #a2a2a2 solid;
text-align: center;
}
.title
{
font-size: 11pt;
font-family: verdana;
font-weight: bold;
}
```
Después de seguir todos los pasos anteriores, tendrá un tema básico de WordPress de trabajo. Puede modificarlo aún más para que sea más hermoso y adecuado para sus requisitos.

### Conclusión
En este tutorial hemos explicado cómo crear un tema de WordPress en pasos simples y sencillos. Después de leer y seguir los pasos, crear un tema de WordPress no es una tarea más difícil ahora. Pero, obviamente, este tutorial se adhiere a una configuración muy básica y para mejorar la parte superior, tendrá que aprender más sobre HTML, CSS, JS y PHP.



 [1]: #requirements
 [2]: #guide
 [3]: https://products.containerize.com/blogging/wordpress
