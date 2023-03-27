---
title: "Configurar XAMPP y PhPMyadmin como localhost en Windows" 
seoTitle: "Configurar XAMPP y PhPMyadmin como localhost en Windows" 
description: "Configurar XAMPP y PhPMyadmin como localhost en Windows. Cree su propio entorno de prueba local gratuito y de código abierto para probar y crear aplicaciones web." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Configurar un entorno de desarrollo con la pila de soluciones de servidor web de código web gratuito (XAMPP) y el software de administración de bases de datos (PhPMyAdmin)" 
url: /es/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Configuración de un entorno de desarrollo con la pila de soluciones de servidor web de código web gratuito (XAMPP) y el software de administración de bases de datos (PHPMYAdmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="XAMPP y PHPMYADMIN COMO LOCALHOST">}}

XAMPP y PHPMYAdmin como localhost proporciona un servidor local para que los desarrolladores prueben y creen aplicaciones web. XAMPP es un servidor local que se instala en computadoras/computadoras portátiles personales. Proporciona un entorno local para crear, ejecutar y probar aplicaciones PHP antes de implementarlas en servidores en vivo.
Cubriremos las siguientes secciones en esta publicación de blog:
  * [Descripción][1]
  * [Instalación de XAMPP][2]
  * [Panel de PhpMyadmin][3]
  * [Pensamientos finales][4]

## Descripción: {#description}

XAMPP es la pila de soluciones de servidor web de código web gratuito y de código abierto. Contiene Apache, MySQL, Mariadb, PHP y Perl. XAMPP está disponible para sistemas operativos de Windows. Es extremadamente fácil de instalar y usar. Por eso es el entorno de desarrollo de PHP más popular. XAMPP y PHPMYAdmin como localhost proporciona un entorno completo para el desarrollo y las pruebas de aplicaciones web.
Los alfabetos en XAMPP representan:
* **x** -multiplataforma (admite múltiples sistemas operativos que incluyen Linux, Windows y Mac OS)
* **a** - Apache HTTP Server
* **m** - mariadb (base de datos)
* **P** - PHP
* **P** - Perl

## Instalación de XAMPP {#xampp}

  * Descargue XAMPP de [aquí][5].

{{< figure align=center src="images/xampp1.png" alt="XAMPP como localhost">}}

  * Instale el archivo ejecutable.
  * Luego haga clic en "Siguiente".
  * Elija los componentes que desea instalar.

{{< figure align=center src="images/xampp2.png" alt="XAMPP como localhost Paso 2">}}

  * Para la mayoría de las aplicaciones web solo necesita _apache_, _mysql_, _php_ y _phpmyadmin_.
  * Seleccione el directorio de instalación donde desea instalar XAMPP.
  * Se le mostrará una alerta de seguridad de Windows. Debe verificar la siguiente opción: "_PRIVATE REDS, como mi hogar o red de trabajo" _.
  * Finalmente, haga clic en "Finalizar" para completar la instalación.

{{< figure align=center src="images/xampp4.png" alt="XAMPP como localhost Paso 3">}}

  * Después de la instalación exitosa, abra el panel de control XAMPP.
  * Iniciar servicios "Apache" y "MySQL".

{{< figure align=center src="images/xampp5.png" alt="XAMPP como localhost Paso 4">}}


## Phpmyadmin Panel de control: {#phpmyadmin}

Para acceder al tablero PhPMyAdmin, haga clic en el botón "Admin" junto al servicio MySQL. También puede acceder a PhPMyadmin visitando http: // localhost/phpmyadmin desde su navegador. Aquí puede crear bases de datos. Siga estos pasos para crear una nueva base de datos.
  * Desde el panel de control, haga clic en la pestaña "Bases de datos".

{{< figure align=center src="images/db1.png" alt="PhpMyadmin en el Paso 1 de Localhost">}}

  * Ingrese el nombre de la base de datos y haga clic en el botón "Crear". Esto simplemente creará una nueva base de datos vacía.

{{< figure align=center src="images/db2.png" alt="Phpmyadmin en el local Paso 2">}}

  * A continuación, puede crear tablas seleccionando la base de datos recién creada.
  * Ingrese el nombre de la tabla en "Crear tabla".

{{< figure align=center src="images/db3-1024x234.png" alt="PhpMyadmin en el Paso 3 de Localhost">}}

  * Seleccione el número de columnas.
  * Luego haga clic en el botón "Go".
  * Después de eso, debe llenar el formulario en la página siguiente para finalizar la creación de la tabla.

{{< figure align=center src="images/db4-1024x564.png" alt="Phpmyadmin en el local Paso 4">}}


## Pensamientos finales: {#final}

La instalación de XAMPP es simple y directa. No lleva más de 15 minutos al servidor de configuración XAMPP. Una vez que está instalado, los desarrolladores pueden construir y probar sus aplicaciones web basadas en PHP incluso sin conexión a Internet. En lugar de probar proyectos directamente en un servidor web en vivo, es simple y ahorra tiempo para probarlos localmente. Es una gran plataforma para principiantes aprender, probar y pulir sus habilidades PHP, Perl y base de datos.

## Explorar:
[Pila de solución de servidor web de código web abierto para desarrolladores de PHP y Perl][6]
[Las mejores opciones de pila de soluciones de servidor web de código abierto][7]



[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
