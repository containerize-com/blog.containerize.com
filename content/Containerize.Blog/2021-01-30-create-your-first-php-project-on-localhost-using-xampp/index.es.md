---
title: "Cree su primer proyecto PHP en localhost usando XAMPP '" 
seoTitle: "Cree su primer proyecto PHP en localhost usando XAMPP" 
description: "Configurar el entorno de desarrollo web utilizando el servidor web de código abierto y abierto XAMPP. Cree y pruebe sus proyectos de PHP en Localhost siguiendo algunos sencillos pasos." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Configurar el entorno de desarrollo web utilizando el servidor XAMPP de código abierto y abierto. Aprenda, cree y pruebe sus proyectos de PHP en Localhost siguiendo algunos sencillos pasos." 
url: /es/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Configurar el entorno de desarrollo web utilizando el servidor XAMPP de código abierto y abierto. Aprenda, cree y pruebe sus proyectos de PHP en Localhost siguiendo algunos sencillos pasos.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Cree su primer proyecto PHP con el servidor web de código abierto de XAMPP">}}

XAMPP es un servidor web de código abierto que proporciona un entorno local para crear, ejecutar y probar un proyecto PHP antes de implementarlo en servidores en vivo. Proporciona un servidor local para que los desarrolladores prueben y creen aplicaciones web. Cubriremos las siguientes secciones en esta publicación de blog:
  * [Requisitos] [2]
  * [Qué es XAMPP] [3]
  * [Crear script php] [4]
  * [Ejecutar y probar el script PHP] [5]
  * [Conclusión] [6]

## Requisitos {#Requirements}
  * Instalación de XAMPP
  * Aplicación del editor de código
  * Conocimiento básico de PHP
  * Conocimiento básico de HTML y JavaScript

## ¿Qué es XAMPP? {#XAMPP}
XAMPP es una pila de solución de servidor web de código abierto. Contiene Apache, MySQL, Mariadb, PHP y Perl. Es extremadamente fácil de instalar y usar. Por eso es el entorno de desarrollo de PHP más popular. El servidor XAMPP proporciona un entorno completo para el desarrollo de aplicaciones web de PHP. Si aún no tiene la instalación de trabajo de XAMPP, siga esta guía para instalar XAMPP:
[Configurar XAMPP y PhPMyAdmin como localhost en Windows] [7]

## Crear script php {#php}
  * Suponiendo que ya ha instalado XAMPP siguiendo el tutorial anterior, ahora creemos un script PHP simple y lo pruebemos en XAMPP.
  * Primero abra su editor. Si no tiene un editor de programación, simplemente abra el bloc de notas.
  * Ingrese el siguiente código
```
<?php
echo "This is my first PHP project";
?>
```
  * Haga clic en "Archivo" en la esquina superior derecha.
  * Presione el botón "Guardar como".
  * Ingrese el nombre con extensión ".php".
  *Para la opción "Guardar como tipo", seleccione la opción "Todos los archivos (\*. \*)".
  * Y finalmente presione el botón "Guardar".

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Cree su primer proyecto PHP con el servidor web de código abierto de XAMPP">}}


## Ejecutar y probar el script PHP {#test}
  * Copie este script PHP en la carpeta HTDOCS dentro de su instalación de XAMPP. La mayoría de la carpeta htdocs reside aquí: c: \ xampp \ htdocs
  * Abre tu navegador.
  * Vaya a localhost/my \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Cree su primer proyecto PHP con el servidor web de código abierto de XAMPP">}}

¡Felicidades! Acabas de crear tu primer proyecto PHP.

## conclusión {#conclusion}
Crear el primer proyecto web siempre es muy emocionante para un principiante. Se siente genial cuando diseñas tu primer script dinámico, lo ejecutas y lo ves trabajando en tu navegador. Espero que esta guía simple lo haya ayudado a crear y ejecutar su primer proyecto PHP con el servidor web de código abierto XAMPP.

## Explorar
Para obtener más información sobre XAMPP y PHPMYAdmin, consulte las siguientes guías:
[Configurar XAMPP y PhPMyAdmin como localhost en Windows] [7]
[Pila de solución de servidor web gratuito para desarrolladores de PHP y Perl] [1]
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
