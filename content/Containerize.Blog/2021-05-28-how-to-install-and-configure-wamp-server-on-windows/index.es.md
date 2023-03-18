---
title: "Cómo instalar y configurar el servidor WAMP en Windows" 
seoTitle: "Cómo instalar y configurar el servidor WAMP en Windows" 
description: "Instale WampServer en Windows y comience rápidamente a desarrollar aplicaciones web basadas en PHP. Wamp Server está disponible para Windows 32 y 64 bits." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Configurar un entorno de desarrollo web para crear aplicaciones web con Apache2, PHP y MySQL. Este artículo le ayuda a instalar WAMP Server en Windows." 
url: /es/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Configurar un entorno de desarrollo web para crear aplicaciones web con Apache2, PHP y MySQL. Este artículo le ayuda a instalar WAMP Server en Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Servidor">}}

Cada desarrollador debe tener el software requerido instalado en su computadora antes de escribir el programa. En los primeros días, los desarrolladores tuvieron que instalar cada software por separado y luego configurarlos para trabajar juntos. ** WampServer ** y otro software de pila de soluciones web ahora están disponibles, lo que incluye todo el software necesario en un solo paquete. Solo necesita instalar un paquete para poner en funcionamiento su entorno de desarrollo.
En esta publicación de blog, cubriremos las siguientes secciones.
  *[** ¿Qué es Wampserver? **] [1]
  *[** Instalación de WAMP **] [2]
  *[** Configuración de WAMP **] [3]
  *[** Acceda a phpmyadmin **] [4]

## ¿Qué es Wampserver? {#Qué}
WampServer es una pila de solución gratuita para configurar el entorno de desarrollo web para aplicaciones basadas en PHP. WAMP significa (W - Windows, A - Apache, M - MySQL y P - PHP). Además, también viene con PhPMyadmin y Administrador para la gestión de la base de datos. WAMP es una de las herramientas populares y puede configurarlo rápidamente. Además, puede configurar el servidor WAMP desde el panel de control. Proporciona un entorno de desarrollo web completo para crear y probar aplicaciones. WampServer consta de varios componentes que puede seleccionar durante la instalación de acuerdo con sus necesidades. WampServer viene con múltiples versiones de PHP. Puede cambiar fácilmente la versión PHP según los requisitos de su proyecto. Además, puede cambiar DBMS (sistema de administración de bases de datos) desde el panel de control de WampServer.

## Instalación de Wamp {#Installation}
Siga la siguiente guía paso a paso para instalar WAMP servidor en Windows.
  *** Descargar Wampserver ** del sitio web oficial

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *Elija un ** Wampserver 32 bits ** o ** Wampserver 64 bits ** Versión del instalador según su sistema operativo.
  *Localice el archivo ** Wamp Descargar ** y hacer doble clic en él para ejecutar el proceso de instalación.
  * Seleccione el idioma y luego presione el botón OK.
  * Elija la casilla de verificación I Acco la Acuerdo y luego haga clic en el botón Siguiente.
  * Lea la información importante sobre la instalación de Wampserver y haga clic en el botón Siguiente para continuar.
  * Seleccione una carpeta donde desee instalar el servidor WAMP y haga clic en el botón Siguiente.
  * Debe seleccionar los componentes que desea instalar como se muestra en la siguiente captura de pantalla. Puede seleccionar todas las versiones PHP y cambiar durante el desarrollo. Además, puede instalar MySQL y MariadB.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Seleccione el acceso directo para WampServer y haga clic en el botón Siguiente.
  * Haga clic en el botón Instalar para instalar WampServer.
  * Ahora, seleccione el navegador predeterminado y el editor de texto predeterminado para el servidor WAMP.
  * Su instalación está completa. Haga clic en el botón Finalizar para salir del Asistente de instalación del servidor WAMP.
  * Abra su navegador y escriba localhost para acceder a él. Verá a continuación.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Configuración de WAMP {#Configuration}
Ahora, buscaremos pocas configuraciones que lo ayuden durante el desarrollo y las pruebas de las aplicaciones web. Ahora puede comenzar el WampServer haciendo doble clic en el icono de Wampserver de acceso directo en su escritorio.
  *** Servicios **-Puede ver las opciones para comenzar, detener y reiniciar todos los servicios haciendo clic izquierdo en el icono de WampServer.
  *** Cambiar la base de datos **-Haga clic derecho en el icono WAMP para abrir el cuadro de diálogo Herramientas. Seleccione Herramientas y haga clic en "Invertir DBMS mariadb MySQL". Wamp Server se reiniciará automáticamente y puede ver la base de datos predeterminada abriendo localhost en su navegador.
  *** Cambiar versión de PHP **-Haga clic derecho en el icono WAMP para abrir el cuadro de diálogo Herramientas. Seleccione Herramientas y cambie la versión PHP CLI y haga clic en la versión PHP que desee.
  *** Host virtual **: puede agregar fácilmente un host virtual a través de la interfaz web de WampServer. Abra localhost en su navegador y haga clic en "Agregar un host virtual" en la sección Herramientas. Ingrese "Nombre del host virtual como dev.example.com" e ingrese la ruta absoluta del proyecto. Haga clic en el botón "Iniciar la creación de VirtualHost". Reinicie el servidor Apache para cargar el host virtual recién creado.
  *** Cambiar el puerto de Apache ** - De manera predeterminada, el servidor web Apache se ejecuta en el puerto 80. Si desea usar un puerto diferente para Apache, puede hacerlo desde el panel de control de Wampserver. Haga clic derecho en el icono WAMP para abrir el cuadro de diálogo Herramientas. Seleccione Herramientas y haga clic en "Use un puerto que no sea 80". Ingrese un nuevo número de puerto en el cuadro de diálogo y haga clic en el botón Aceptar.
  *** Cambie el puerto DBMS ** - Por defecto, el servidor de la base de datos se ejecuta en el puerto 3306. Si desea usar un puerto diferente para el servidor de la base de datos, puede hacerlo desde el panel de control de WampServer. Haga clic derecho en el icono WAMP para abrir el cuadro de diálogo Herramientas. Seleccione Herramientas y haga clic en "Use un puerto que no sea 3306". Ingrese el nuevo número de puerto en el cuadro de diálogo y haga clic en el botón Aceptar.
  *** Registros vacíos ** - WamServer proporciona funcionalidad para borrar los registros del panel de control. Puede vaciar registros, como el registro de errores de PHP, el registro de errores de Apache, el registro de acceso de Apache, el registro MySQL y el registro de Mariadb. Incluso puedes borrar todos los registros a la vez. Haga clic derecho en el icono WAMP para abrir el cuadro de diálogo Herramientas. Seleccione Herramientas y seleccione registros vacíos, encontrará todas las opciones para eliminar registros.
  *** Cambiar lenguaje ** - Puede un idioma para el panel de control de Wampserver. Haga clic derecho en el icono WAMP para abrir el cuadro de diálogo Herramientas. Seleccione el idioma y haga clic en el idioma requerido. Verá el panel de control en el idioma recién seleccionado.

## Acceso phpmyadmin {#phpmyadmin}
Puede acceder a ** phpMyadmin ** para la gestión de sus bases de datos abriendo localhost en su navegador y luego haga clic en el enlace PhPMyAdmin en la página de bienvenida de Wampserver. Además, puede acceder a él visitando http: // URL localhost/phpmyadmin.

## Conclusión
Hemos discutido el Wampserver y cubrimos la guía completa paso a paso para ** Instalar WampServer ** IT en Windows. Puede instalar y configurar fácilmente ** WampServer ** siguiendo este tutorial y comenzar a codificar de inmediato. Puede visitar los enlaces en la sección Explore para obtener más opciones en el software de pila de soluciones.
Finalmente, [** Contenerize.com **] [5] se encuentra en un proceso consistente de escribir publicaciones de blog sobre otros productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [** PISTA DE SOLUCIÓN DEL SERVICIO WEB **] [6] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  *[** Las mejores opciones de pila de solución de servidor web de código web de código abierto **] [7]
  *[** Configurar XAMPP y PHPMYAdmin como localhost en Windows **] [8]
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
