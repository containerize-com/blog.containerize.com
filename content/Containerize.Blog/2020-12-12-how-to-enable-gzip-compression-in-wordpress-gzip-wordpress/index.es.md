---
title: "Cómo habilitar la compresión de GZIP en WordPress | Gzip WordPress" 
seoTitle: "Cómo habilitar la compresión de GZIP en WordPress | Gzip WordPress" 
description: "¿Desea habilitar la compresión de GZIP en WordPress para acelerar su sitio web? En esta publicación de blog, aprenderemos cómo habilitar la compresión en WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "La velocidad de la página y los tiempos de carga son los factores clave para una mejor clasificación en los motores de búsqueda. La compresión de GZIP puede hacer que suceda y proporcionar una ventaja competitiva." 
url: /es/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## La velocidad de la página y los tiempos de carga son los factores clave para una mejor clasificación en los motores de búsqueda. La compresión de GZIP puede hacer que suceda y proporcionar una ventaja competitiva.

{{< figure align=center src="images/Asset-1.png" alt="Habilitar la compresión de GZIP">}}


## Descripción general
Como Google y otros motores de búsqueda están considerando la experiencia de usuario de un sitio web (UX), un factor crítico en sus algoritmos de clasificación. Se ha vuelto más importante mejorar y optimizar su sitio web para las calificaciones superiores. Entre los factores más importantes a los que prestar atención son, la velocidad de la página y los tiempos de carga. Y, la forma más rápida y fácil de mejorar la velocidad y el rendimiento del sitio es permitir la compresión de GZIP en su sitio web. Existe la posibilidad de que su host web permita automáticamente la compresión GZIP para usted. Si no, debes realizar esta tarea crucial tú mismo.
En este artículo, le mostraremos exactamente cómo habilitar fácilmente la compresión de GZIP en WordPress. ¡Empecemos!
  *[**¿Qué es la compresión de Gzip** ?][1]
  *[**¿Cómo funciona la compresión GZIP?** ][2]
  ***[¿Cómo verificar si la compresión GZIP está habilitada?][3]** 
  ***[Habilitar compresión de GZIP en WordPress][4]** 
  ***[Conclusión][5]** 

## ¿Qué es la compresión de GZIP?   {#qué}
GZIP es un formato de archivo **y una aplicación de software**  utilizada para compresión y descompresión de archivos. Los servidores web u otro software usan la compresión de GZIP para comprimir archivos de datos antes de que se envíen a los navegadores de los usuarios. Esto reduce el tiempo de descarga del archivo que hace que su sitio web sea más rápido. Todos los navegadores modernos admiten la compresión GZIP.
También es importante tener en cuenta que la compresión de GZIP debe estar habilitada en su servidor web antes de que pueda habilitar la compresión de archivos y carpetas. En breve, veremos cómo verificar si su servidor web tiene habilitado GZIP.

## ¿Cómo funciona la compresión GZIP?   {#trabajar}
GZIP, el método de compresión más popular, es utilizado por servidores web y navegadores para comprimir y descomprimir contenido a medida que se transmite a través de Internet. Se usa principalmente en el código y los archivos de texto, GZIP puede reducir el tamaño de JavaScript, CSS y archivos HTML en hasta un 90%. Por defecto, la compresión GZIP no comprime imágenes o videos. Para eso, deberá optimizar las imágenes para la web en su sitio de WordPress. Es por eso que la mayoría de las herramientas de prueba de velocidad del sitio web como Google PageSpeed ​​Insights recomiendan encarecidamente habilitar la compresión de GZIP.
Cuando un servidor web recibe una solicitud para una página web, el servidor web verifica el encabezado de la solicitud para verificar si el navegador admite GZIP. Si es así, el servidor genera el marcado para la página antes de aplicar GZIP. GZIP convierte el marcado HTML en datos comprimidos que luego se entregan al usuario final. Cuando el usuario final recibe los datos comprimidos, su navegador lo descomprime.

## **¿Cómo verificar si la compresión GZIP está habilitada?**    {#verify}
Su host web puede habilitar la compresión en WordPress de forma predeterminada. Sin embargo, este no siempre es el caso. Puede determinar para ver si ya tiene compresión GZIP habilitada utilizando DevTools de Chrome.
Abra su sitio en un navegador Chrome, luego haga clic derecho en cualquier lugar de la página y seleccione **Inspeccionar  **a **  Abra las herramientas de desarrollador** .
Luego, navegue a la pestaña **Red  **y haga clic en la URL principal del sitio web desde la sección "Nombre". Seleccione la pestaña **  encabezados  **y luego desplácese hacia abajo para encontrar la sección **  encabezados de respuesta** :

{{< figure align=center src="images/gzip-determine.gif" alt="Verificar la codificación de contenido">}}

Allí, verá si la compresión GZIP está habilitada o no.

## Habilitar compresión GZIP en WordPress   {#Enable}
Si ha determinado que **WordPress GZIP Compression aún no está habilitado** , existen múltiples métodos que puede usar para ejecutarlo. La forma más fácil es usar algunos complementos de WordPress como [WP Rocket][6], [WP Super Cache][7] o [W3 Cache total][8]. Sin embargo, puede hacerlo manualmente a nivel del servidor, ya sea mediante el archivo .htaccess o actualizando su configuración Nginx.

## # editando el archivo .htaccess
Una de las formas más comunes de habilitar la compresión de WordPress GZIP es **editar su archivo _.htaccess_** . Sin embargo, esto implica el riesgo de romper algo. Este es un archivo de servidor sensible, y un movimiento incorrecto podría causar muchos problemas.
Para reducir el riesgo, asegúrese de guardar una copia del archivo original **antes de realizar cualquier cambio. El archivo _.htaccess_ debe estar en la carpeta raíz  **de su sitio web**  . Después de abrir _.htaccess_, agregue el siguiente código debajo de las secciones marcadas por las etiquetas `# Begin WordPress` y`# End WordPress`
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
**Guarde el archivo**  y cárguelo al servidor de su sitio. Cuando haya terminado, verifique si el GZIP está habilitado utilizando DevTools de Chrome como se explicó anteriormente.

## habilite la compresión de GZIP en nginx
Para **habilitar compresión **, incluir la directiva  **gzip **  con el parámetro ON.  **gzip **  on; Por defecto,  **Nginx**   comprime las respuestas solo con texto de tipo MIME/HTML. Para comprimir las respuestas con otros tipos de MIME, incluya la directiva GZIP_TYPES y enumere los tipos adicionales.
Puede habilitar la compresión de GZIP en WordPress **Abriendo su archivo _nginx.conf_**  y agregando el siguiente código:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## conclusión   {#conclusion}
Este es el final de este tutorial GZIP WordPress. Hay muchas formas de optimizar su sitio web para la velocidad y el rendimiento. En este tutorial GZIP WordPress, hemos pasado por lo que es la compresión de GZIP, la importancia de la compresión de GZIP y sus pasos de instalación. Además, hay muchos enlaces relevantes mencionados en la sección "Explorar" a continuación.
Finalmente, [Contenerize.com][9] está escribiendo artículos sobre otros productos de código abierto. Por lo tanto, manténgase en contacto con la categoría [Blogging][10] para noticias y actualizaciones regulares.

## Explorar
  * [Matomo][11]
  * [Plausible][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Cómo dockerizar WordPress con Docker Compose][15]
  * [Cómo las herramientas de análisis de negocios gratuitos ayudan a su negocio][16]
  * [Top 5 Herramientas de inteligencia empresarial de código abierto de 2021][17]
  * [Cómo instalar complemento en WordPress | Foro de vainilla][18]
  * [Aumente sus clientes potenciales con integración gratuita de WordPress CivicRM][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
