---
title: "Guía de desarrollo de plantillas de Joomla para los principiantes" 
seoTitle: "Guía de desarrollo de plantillas de Joomla para los principiantes" 
description: "Aprenda el desarrollo de la plantilla de Joomla, cómo configurar diseños receptivos para varios casos de uso. Conjunto de archivos que definen la capa de diseño de un sitio web comercial." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Cree plantillas de Joomla altamente profesionales y personalizables que ofrezcan un montón de características como esquemas de color multilingües, SEO / usuarios y ricos." 
url: /es/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Cree plantillas de Joomla altamente profesionales y personalizables que ofrecen un montón de características como esquemas de color multilingües, SEO / usuarios y ricos. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Desarrollo de plantillas de Joomla">}}


## Descripción general
Un sitio web comercial bien diseñado juega un papel vital para traer y retener a los visitantes dándoles facilidad de navegación. **JOOMLA PRESENTADO COMPLETO** Facilita a sus usuarios con una serie de diseños receptivos y desarrollo de plantillas de Joomla que controlan la estética de un sitio web comercial.
Durante la fase de desarrollo, la colocación de elementos de diseño es muy crítico para obtener:
  * Consistencia
  * Navegación fácil
  * Simplicidad
  * Compatibilidad móvil
  * Leyabilidad
Aquí viene las plantillas **Joomla** . Este software de código abierto proporciona la provisión para desarrollar o usar diseños receptivos predefinidos para todas las páginas web en lugar de escribir código para cada página por separado.
En esta publicación de blog, aprenderemos las siguientes cosas sobre cómo crear y configurar una plantilla fácil de usar**en Joomla.
* [ **¿Qué son los diseños de Joomla?** ][2]
* [ **¿Cómo crear una plantilla de respuesta simple en Joomla?** ][3]
* [ **¿Cómo instalar una plantilla de Joomla?** ][4]
* [ **Conclusión** ][5]

## ¿Cuáles son los diseños de Joomla? {#what}

Joomla proporciona plantillas para la parte delantera, así como para la parte trasera. Viene con muchas plantillas preparadas y ofrece a los desarrolladores a construir **Temas de arranque de recepción gratuitos** según sus casos de uso. Hay dos tipos de plantillas en Joomla.
**Plantillas front-end:**  Relacionado con el usuario que enfrenta parte de un sitio web comercial.
**Plantillas de fondo:**  Estas plantillas están vinculadas a la lógica comercial de un sitio.

## ¿Cómo crear una plantilla de respuesta simple en Joomla? {#how}

En esta sección, cubriremos los pasos de este tutorial de plantilla de Joomla.
Antes de saltar a esta sección, asegúrese de comprender lo siguiente:
  * Html
  * CSS
  * JavaScript
  * PHP
Entonces, crear plantillas personalizadas en Joomla nunca ha sido tan dura y compleja. Sin embargo, comencemos a crear nuestra primera plantilla de Joomla.

## **Configuración de estructura del directorio** 
En primer lugar, cree una carpeta llamada " **mytemplate**" dentro de la carpeta "**plantillas** ".
Cree los siguientes archivos dentro de la carpeta " **mytemplate** ":
* **index.php** : Este es el archivo central que contiene el código HTML y PHP para las páginas de plantilla completa.
* **Templatedetails.xml** : Este archivo contiene los meta datos de la plantilla y es obligatorio por ser notado por Joomla.
Ahora, cree tres carpetas dentro de la carpeta " **mytemplate** " con los siguientes nombres:
* **JS** : Esta carpeta contendrá todos los archivos JavaScript necesarios para la plantilla
* **CSS** : Todos los archivos CSS para el estilo entrarán en esta carpeta
* **Imágenes** : Las imágenes utilizadas por la plantilla residirán en esta carpeta
Cree un archivo CSS llamado " **Template.css**" dentro de la carpeta "**CSS** ".
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
Eventualmente, así es como se verá la estructura del directorio.

## Vamos a poner algún código
Pon este código en el archivo **Templatedetails.xml** .
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Como se mencionó anteriormente, este archivo contiene los metadatos sobre los diseños receptivos que se define entre las etiquetas de marcado. Sin embargo, puede cambiar la información general, como el nombre, el autor y la descripción.
Este archivo también contiene información sobre los otros archivos y carpetas que utilizan la plantilla.
Ahora, abra el archivo **index.php** y comience a poner el siguiente código:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Este archivo comenzará con esta línea que evita que otros lean su código PHP.
```
<!DOCTYPE html>
```
Esto es para que BROWSER sepa sobre el tipo de documento.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
Los documentos HTML comienzan con esta línea y el atributo **xmlns** indica el espacio de nombres XML para el documento.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
Primera línea después de que la etiqueta le dice a Joomla que ponga información de encabezado como información de metadatos y título de página.
Hay un enlace a la hoja de estilo externo en la segunda línea y la tercera línea vincula el archivo JavaScript externo.
El resto de los archivos habilita el bootstrap en la plantilla.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
La sección del cuerpo comienza después de que la sección del cabezal contiene todos los datos que se reflejarán en la plantilla para que el usuario vea y navegue.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Esta declaración se llama declaración JDOC que se utiliza para instruir a Joomla que agregue un módulo llamado "Posición-7". Hay varias declaraciones JDOC que con frecuencia se usan en el desarrollo de la plantilla **Joomla** .
Este es el archivo final **index.php** completa con todo el código requerido para una plantilla básica de Joomla.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Todo está en su lugar para una plantilla muy básica. Ahora, es hora de instalarlo en el servidor Joomla y ver cómo continúa.

## ¿Cómo instalar la plantilla de Joomla? {#install}

El proceso de instalación de la plantilla de Joomla es bastante recto y fácil. Hay los siguientes pasos para instalar:
Vaya a "Extensiones -> Administrar -> Instalar

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Imagen de configuración de Joomla de instalación">}}

Aquí puede ver su plantilla de Joomla recientemente desarrollada en la lista como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Lista de plantillas de Joomla">}}

Ahora, seleccione la plantilla, presione "Instalar" y aparecerá un mensaje de éxito sobre la instalación exitosa.
Después de instalar la plantilla, puede acceder y modificar los archivos de plantilla dentro del panel de control de Joomla y obtener una vista previa de los cambios de la opción "Vista previa de plantilla".

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

¡Ahora, puede ver su primera plantilla de Joomla en el navegador!

## Conclusión {#Conclusión}

Una plantilla buena y receptiva es la base para el modelado general del sitio. **Los diseños receptivos** en Joomla son multifuncionales y pueden usarse para varios proyectos. Desde escribir código hasta el desarrollo de la plantilla de Joomla se vuelve muy simple con la ayuda de un tablero de administración intuitivo. Joomla proporciona un control completo sobre el desarrollo de la plantilla para cumplir con los deseos del usuario.
Como **El software CMS** La categoría está en mejoras consistentes y se agregarán más tutoriales sobre otros sistemas de gestión de contenido a la lista, manténgase en contacto con la sección [Sistema de gestión de contenido][6] para actualizaciones regulares.

## Páginas de productos relevantes
Puede encontrar los siguientes enlaces relevantes:
  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Concrete5][11]
  * [Grav][12]
  * [Craft][13]
  * [Contao][14]
  * [Hornilla][15]
  * [Refinería CMS][16]
  * [Locomotivecms][17]



[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
