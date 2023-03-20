---
title: "Cómo configurar Bootstrap Form Creator Form.io en localhost" 
seoTitle: "Cómo configurar Bootstrap Form Creator Form.io en localhost" 
description: "Realice este artículo y aprenda cómo configurar Formio en Localhost. Este creador de formulario Bootstrap es gratuito, extensible y ofrece integraciones de terceros." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "Cree formularios específicos de tareas y personalizables utilizando un generador de formulario HTML de arrastrar y soltar. Formio es autohospedado, impulsado por API, proporciona formularios y gestión de datos." 
url: /es/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## Crear formularios específicos de tareas y personalizables utilizando un creador de formulario HTML de arrastrar y soltar. Formio es autohospedado, impulsado por API, proporciona formularios y gestión de datos.

{{< figure align=center src="images/formio-1.png" alt="Bootstrap Form Creator">}}


## **Descripción general**
En las necesidades comerciales de rápido crecimiento, hay muchas operaciones que pertenecen directamente al comercio público y el compromiso. Este compromiso podría ser físico o virtual. A veces se trata de proporcionar servicios y a veces se trata de recopilar datos o comentarios. Por otro lado, las organizaciones empresariales tienden a recopilar los datos del cliente sobre sus productos y servicios. Por lo tanto, la cantidad de datos depende del alcance de la audiencia relevante. A continuación, la gestión de datos es otra tarea crítica y exige una atención inmensa.
Sin embargo, los sectores corporativos utilizan formularios en línea para satisfacer las necesidades relacionadas con la recopilación de datos. Hay muchos sitios web que pueden contener muchos formularios, como el formulario de contacto, el formulario de quejas, el formulario de comentarios de los clientes, el formulario de admisión y más. Ahora, se convierte en una molestia construir, administrar estos formularios y los datos de envío. Aquí viene [Form.io][1]. Form.io es un creador de formulario de bootstrap de código abierto que proporciona capacidades de construcción de formularios y gestión de datos. En el pasado reciente, publicamos un artículo que cubrió los constructores de formularios en línea de código abierto en el año 2020][2]. En esta publicación de blog, exploraremos este creador de formulario de arranque junto con su proceso de configuración en Localhost cubriendo los siguientes puntos.
  *** [¿Qué es Form.io?fontefniEnmmandimming***
  *** [Cómo configurar Form.io en localhost?][4] **
  *** [¿Cómo funciona Form.io?][5] **
  *** [Conclusión][6] **

## ¿Qué es Form.io? {#qué}
Form.io es un constructor de formulario de código abierto gratuito. Es un software autohostado, multilingüe y multiinquilino. Este ** creador de formulario HTML ** ofrece permisos basados ​​en roles para usuarios y formularios. Form.io proporciona autenticación OAuth y permite a los usuarios iniciar sesión utilizando proveedores de identidad populares como Google y Facebook. Además, este constructor de formularios HTML se basa en la arquitectura sin servidor, y los usuarios pueden generar e integrar formularios en las otras aplicaciones simplemente colocando una sola línea de código. En lo que respecta a la interfaz de usuario, ofrece una interfaz de usuario lógica con funciones de arrastrar y soltar. Hay varios elementos HTML en un lado que los usuarios pueden arrastrar y soltar para construir el formulario necesario. Los usuarios pueden inyectar JavaScript personalizado para una funcionalidad mejorada. Además, los usuarios pueden modificar el aspecto y la sensación de la forma utilizando CSS. Hay disposiciones para controlar la presentación y el acceso de los formularios. Sin embargo, este fabricante de formularios HTML gratuito está escrito en JavaScript y todo el código fuente está disponible en [GitHub][7].
Form.io proporciona una amplia gama de características. Las características clave se enumeran a continuación.
  * Envío del formulario de correo electrónico
  * Gestión de datos
  * Proveedores de OAuth
  * Formas integrables
  * Diseño amigable

## ¿Cómo configurar Form.io en localhost? {#localhost}
En esta sección del ** Tutorial de constructor de formulario **, veremos cómo configurar Form.io en Localhost. Es fácil de configurar, ya que proporciona documentación integral con respecto a la implementación y el desarrollo.
Antes de ir más allá, asegúrese de haber instalado los siguientes requisitos previos.
  * Git
  * NodeJs
  * MongoDB
Una vez que se instalen los requisitos previos anteriores, abra el terminal Ejecute los siguientes comandos:
```
mkdir formio<br>cd formio
```
Ahora, ejecute el siguiente comando para clonar el código fuente de esta aplicación:
```
git clone https://github.com/formio/formio.git
```
Tras un clon exitoso, ejecute los siguientes comandos para instalar las dependencias:
```
cd formio <br>npm install
```
Después de eso, ejecute la aplicación con el siguiente comando:
```
npm start 
```
Este comando mostrará la siguiente salida con algunas indicaciones del usuario:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Tutorial de constructor de formularios">}}

Puede acceder a la aplicación en el navegador en la siguiente dirección.
```
http://localhost:3001 
```
Abrirá la página de inicio de sesión. Puede iniciar sesión con las credenciales que ingresó durante el proceso de instalación.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Bootstrap Form Creator">}}


## ¿Cómo funciona Form.io? {#trabajar}
Este segmento describe el mecanismo de trabajo de [Form.io][1]. Todo el ecosistema de este diseñador de formularios se basa en componentes y amigables para el desarrollador. Es extensible y proporciona una interfaz RESTful para aplicaciones de terceros. Entonces, veamos cómo crear formularios en este generador de formulario ** **.
Después de iniciar sesión, aterrizará en la siguiente página.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="arrastrar y soltar el formulario de formulario HTML">}}

Ahora, haga clic en el botón "Nuevo formulario" y cree el primer formulario. Se mostrará la siguiente página. Puede ver que hay un panel en el lado izquierdo que contiene el elemento HTML para los formularios. Contiene las cuatro secciones como "componentes básicos", "componentes especiales" y más.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="creador de formulario HTML">}}

Puede establecer el nombre del formulario junto con otros atributos. Ahora, si elige un elemento de formulario del lado izquierdo y lo deja caer en el medio, verá el siguiente cuadro de diálogo.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Bootstrap Form Creator">}}

Puede ver que le permite modificar el tema del formulario, la validación y otras modificaciones. Una vez que construya su formulario, presione el botón "Crear" y aterrizará en el formulario generado.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="arrastrar y soltar el formulario de formulario HTML">}}

El formulario generado viene con varias opciones donde puede editar el formulario y ver los datos enviados. En la pestaña "Acciones de formulario", puede establecer los ganchos de envío previos o posteriores al formulario, como correo electrónico, webhook y más. Sobre todo, cada formulario generado viene con una API y los usuarios pueden acceder a ella pasando la ID de formulario.

## conclusión {#conclusion}
Este es el final de este tutorial de constructor de formularios. Espero que haya aprendido sobre este creador de formulario de arranque con respecto a sus características, implementación y uso. Además, hay muchos constructores de forma de código abierto que proporcionan una amplia gama de características. Sin embargo, es muy importante elegir el mejor producto que satisfaga las necesidades de su negocio. Por lo tanto, en esta publicación de blog, observamos que Form.io proporciona personalizaciones con respecto a la funcionalidad, el diseño y el estilo. Le permite generar formularios multipropósito que puede alojar en sus sitios web en vivo. De hecho, puede recopilar datos de manera bien organizada en su propia base de datos o en cualquier otra opción de almacenamiento.
Finalmente, [** Contenerize.com **][8] está en un proceso consistente de escribir artículos sobre temas y productos de código abierto. Por lo tanto, manténgase en contacto con esta categoría [Forma][9] para actualizaciones regulares.

## Explorar
  *** [Form.io][1] **
  *** [Orbeon][10] **
  *** [ohmyform][11] **
  *** [Webiny][12] **
  *** [Formtools][13] **
  *** [FormBuilder][14] **
  *** [Formas de Alpaca][15] **
  *[** Automatice las operaciones comerciales utilizando software de código abierto y de código abierto **][16]
  *[** Top 5 Constructores de formulario en línea de código abierto en el año 2020 **][2]

  
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
