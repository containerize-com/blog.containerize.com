---
title: "Comenzando con un generador de formulario HTML | Formbuilder" 
seoTitle: "Comenzando con un generador de formulario HTML | Formbuilder" 
description: "FormBuilder es un generador de formulario HTML gratuito y multilingüe con interfaz de usuario de arrastrar y soltar. Siga este tutorial para aprender a configurarlo en localhost." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "El editor de formulario de código abierto alimentado por JavaScript con múltiples configuraciones, plantillas de formulario configurables y controles personalizados. Aprendamos a configurar FormBuilder." 
url: /es/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## El editor de formulario de código abierto alimentado por JavaScript con múltiples configuraciones, plantillas de formulario configurables y controles personalizados. Aprendamos a configurar FormBuilder.

{{< figure align=center src="images/formbuilder.png" alt="Generador de formulario HTML">}}


## **Descripción general** 
Recientemente publicamos algunos artículos sobre temas como [Cómo configurar Bootstrap Form Creator Form.io en Localhost][1] y [Top 5 Builders Online Form Builders en el año 2020][2]. La primera publicación de blog es un artículo de tutorial que demuestra el proceso de configuración y las características de un constructor de formulario Bootstrap [Form.io][3]. El segundo artículo habla sobre los constructores de formularios de código abierto ampliamente utilizados. En el momento actual, la interacción bidireccional es lo más importante entre los proveedores de servicios y los consumidores de servicios. Las organizaciones tienden a recibir comentarios consistentes sobre sus servicios y luego formulan estrategias comerciales futuras. Sin embargo, los formularios son para recopilar y almacenar información de los clientes. Las empresas producen una serie de formularios para recopilar datos sobre varias operaciones en curso y hay muchos tipos de formularios, algunos de ellos son páginas únicas y algunas de ellas son formularios de varias páginas. Algunas empresas tienen formularios integrados en su portal en línea o algunas de ellas usan correos electrónicos u otros tipos de medio para exponer sus formularios para la recopilación de datos.
Por lo tanto, hay muchos formularios de código abierto y software de gestión de datos disponible con ricas capacidades de constructor de formulario. En este artículo, exploraremos el generador de formulario HTML gratuito **[FormBuilder][4]** cubriendo los siguientes puntos.
* **[¿Qué es FormBuilder?][5]** 
* [ **¿Cómo configurar?** ][6]
* [ **¿Cómo crear formularios usando FormBuilder?** ][7]
* **[Conclusión][8]** 

## ¿Qué es FormBuilder? {#what}

[FormBuilder][4] es un diseñador de formulario de código abierto que permite a los usuarios crear formularios interactivos. Es seguro, extensible y viene con capacidades de autohostación. Este generador de formulario HTML es multilingüe y ofrece soporte para múltiples idiomas. Hay una interfaz de usuario fácil de usar donde los usuarios pueden arrastrar y soltar elementos de formulario para formular la plantilla de formulario requerida. Además, proporciona controles ricos y plantillas de formularios configurables. Además, los usuarios pueden crear múltiples pestañas en la interfaz de usuario para crear formularios de múltiples páginas. Sobre todo, los usuarios pueden tender a este constructor de formularios gratuitos mediante el desarrollo de sus complementos. Tiene toda la documentación disponible con respecto al desarrollo y la implementación. Está escrito en Node.js y todo el código fuente está disponible en [GitHub][9].
Aquí están los mejores momentos de los mejores aspectos de la forma.
  * i18n integrado
  * Formularios de múltiples páginas
  * Extensible
  * Soporte para marcos populares de JavaScript Front End
  * Arrastre y suelta ui

## ¿Como instalar? {#setup}

Esta sección del tutorial de formulario de formulario le mostrará cómo configurar FormBuilder en la máquina local.
Antes de ir más allá, asegúrese de haber instalado los siguientes requisitos previos.
  * Node.js> = 10.9.0
  * NPM
  * Git
Después de instalar los requisitos previos, ejecute el siguiente comando para clonar el código fuente de esta aplicación:
```
git clone https://github.com/kevinchappell/formBuilder
```
A continuación, ejecute los siguientes comandos para instalar las dependencias:
```
cd form-builder<br>npm install 
```
Después de eso, puede iniciar la aplicación ejecutando el siguiente comando:
```
npm start
```
Finalmente, el comando anterior abrirá la aplicación en el navegador en la siguiente dirección:
```
http://localhost:8080/
```

## ¿Cómo crear formularios usando FormBuilder? {#how}

En esta sección, exploraremos las características de este generador de formularios HTML y aprenderemos cómo podemos crear formularios.
La siguiente interfaz de usuario aparecerá una vez que inicie el servidor.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="Generador de formulario HTML">}}

Avanzando, puede ver la barra de menú en el lado derecho. Contiene los elementos de formulario como botones, casillas de verificación, campos de texto, campos de datos, encabezado, párrafo y más. Sin embargo, puede arrastrar estos elementos y caer en el área media (Droppable) de la pantalla. En la esquina superior izquierda, hay una opción para habilitar la versión Bootstrap de la aplicación. En la esquina superior izquierda, hay un menú desplegable donde los usuarios pueden seleccionar cualquier idioma disponible.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="editor de formulario">}}

A continuación, podemos arrastrar y soltar cualquier elemento de formulario en el área droppable. Además, podemos editar las configuraciones de cualquier elemento como se muestra en la imagen de arriba. Hay una opción para crear una copia del elemento existente. Podemos cambiar la colocación de los elementos entre nosotros.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="Generador de formulario HTML">}}

Una vez que haya terminado con el edificio del formulario, puede representar el formulario presionando el botón "Render" colocado en el medio superior. Además, hay varias opciones de formulario donde los usuarios pueden generar el HTML detrás de los formularios. También existen otras opciones, como el formulario de usuario de carga, mostrar datos del usuario, representar el formulario de usuario y borrar el formulario de usuario. Junto con estas características, hay muchas acciones de formulario disponibles, como "GetFieldTypes" que devuelven los tipos de campo registrados para el formulario. Del mismo modo, hay muchas otras acciones, como mostrar datos, obtener XML, establecer datos, alternar editar y algunas más. Sin embargo, hay muchas otras cosas que puedes consultar tú mismo. Como es de código abierto, puede modificarlo según sus requisitos.

## Conclusión {#Conclusión}

Este es el final de la publicación del blog. Esperamos que este tutorial realmente lo ayude si está buscando implementar un generador de formulario HTML de código abierto. Este artículo ha cubierto muchos aspectos de FormBuilder para que pueda tomar fácilmente una decisión teniendo en cuenta las necesidades de su negocio. Estos constructores de formulario de código abierto gratuitos son rentables y ahorran tiempo. Estas herramientas gratuitas no solo proporcionan capacidades de construcción de formularios, sino que también proporcionan formularios y gestión de datos. Puede configurar los formularios con aplicaciones web de terceros. Además, elimina la molestia de crear diferentes formularios para diferentes aplicaciones comerciales, sino que los propietarios de negocios pueden hacer cualquier tipo de forma utilizando estos constructores de formularios de código abierto. Además, hay complementos disponibles para estos editores de formularios que los desarrolladores pueden modificar según los requisitos. Por lo tanto, es hora de automatizar tales tareas repetitivas empleando un buen generador de formulario HTML gratuito.
Finalmente, [Contenerize.com][10] está escribiendo artículos sobre otros productos de código abierto. Por lo tanto, manténgase en contacto con la categoría [Formularios][11] para noticias y actualizaciones regulares.

## Explorar
* **[Form.io][3]** 
* **[Orbeon][12]** 
* **[ohmyform][13]** 
* **[Webiny][14]** 
* **[Formtools][15]** 
* **[FormBuilder][4]** 
* **[Formas de Alpaca][16]** 
* [ **Cómo configurar Bootstrap Form Creator Form.io en localhost** ][1]
* [ **Automatizar operaciones comerciales utilizando software de código abierto y de código abierto** ][17]
* [ **Top 5 Constructores de formulario en línea de código abierto en el año 2020** ][2]



[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
