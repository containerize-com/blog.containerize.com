---
title: "Cómo optimizar su sitio web utilizando la compresión de GZIP en Nginx" 
seoTitle: "Cómo optimizar su sitio web utilizando la compresión de GZIP en Nginx" 
description: "En este artículo, discutiremos un método para optimizar las velocidades de transferencia de su sitio web reduciendo los tamaños de archivo a través de la compresión de GZIP en Nginx." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Este tutorial lo guía sobre cómo optimizar el rendimiento de su sitio web y hacerlo rápido reduciendo los tamaños de archivo utilizando la compresión de GZIP en NGINX." 
url: /es/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Este tutorial lo guía sobre cómo optimizar el rendimiento de su sitio web y hacerlo rápido reduciendo los tamaños de archivo utilizando la compresión GZIP en Nginx.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Cómo habilitar la compresión de GZIP en Nginx">}}

Este artículo continúa de nuestra serie de tutoriales sobre Nginx. Hasta ahora hemos cubierto cómo usar Nginx como equilibrador de carga, cómo usar Nginx como proxy inverso. Y ahora este tutorial cubre otra pregunta exigente "Cómo optimizar su sitio web utilizando la compresión GZIP en Nginx". En este tutorial, le guiaremos paso a paso sobre cómo habilitar la compresión de GZIP en Nginx. ¡Entonces empecemos!
  * [Optimización del sitio web con compresión][1]
  * [¿Qué es la compresión de GZIP?][2]
  * [¿Cómo funciona la compresión GZIP?][3]
  * [Habilite la compresión de GZIP en Nginx][4]
  * [Verifique la compresión de GZIP][5]
  * [Conclusión][6]

## Optimización del sitio web con compresión {#optimize}
El rendimiento de un sitio web depende de una serie de factores. Uno de los factores que depende parcialmente es el tamaño de todos los archivos que el navegador de un usuario debe descargar desde su servidor. Reducir o comprimir el tamaño de esos archivos transmitidos puede hacer que su sitio web se cargue más rápido para el usuario. También puede reducir la factura de su sitio web en caso de que paga el uso de ancho de banda en conexiones medidas. Por lo tanto, la compresión puede desempeñar un papel muy vital en la optimización de su sitio web.
Como Google y otros motores de búsqueda están considerando la experiencia de usuario de un sitio web (UX), un factor crítico en sus algoritmos de clasificación. Se ha vuelto más importante mejorar y optimizar su sitio web para las calificaciones superiores. Entre los factores más importantes a los que prestar atención son, la velocidad de la página y los tiempos de carga. Y, la forma más rápida y fácil de mejorar la velocidad y el rendimiento de su sitio web es habilitar la compresión de GZIP en su sitio web.

## ¿Qué es la compresión de GZIP? {#what-gzip}
GZIP es un formato de archivo ** y aplicación de software ** utilizada para compresión y descompresión de archivos. Los servidores web u otro software usan la compresión de GZIP para comprimir archivos de datos antes de que se envíen a los navegadores de los usuarios. Esto reduce el tiempo de descarga del archivo que hace que su sitio web sea más rápido. Todos los navegadores modernos admiten la compresión GZIP.
También es importante tener en cuenta que la compresión de GZIP debe estar habilitada en su servidor web antes de que pueda habilitar la compresión de archivos y carpetas. En breve, veremos cómo habilitar la compresión de GZIP en Nginx.

## ¿Cómo funciona la compresión GZIP? {#how-gzip}
GZIP, el método de compresión más popular, es utilizado por servidores web y navegadores para comprimir y descomprimir contenido a medida que se transmite a través de Internet. Se usa principalmente en el código y los archivos de texto, GZIP puede reducir el tamaño de JavaScript, CSS y archivos HTML en hasta un 90%.
Por defecto, la compresión GZIP no comprime imágenes o videos. Es por eso que la mayoría de las herramientas de prueba de velocidad del sitio web como Google PageSpeed ​​Insights recomiendan encarecidamente habilitar la compresión de GZIP.
Cuando un servidor web recibe una solicitud para una página web, el servidor web verifica el encabezado de la solicitud para verificar si el navegador admite GZIP. Si es así, el servidor genera el marcado para la página antes de aplicar GZIP. GZIP convierte el marcado HTML en datos comprimidos que luego se entregan al usuario final. Cuando el usuario final recibe los datos comprimidos, su navegador lo descomprime.

## Habilitar compresión GZIP en Nginx {#enable-gzip}
Para cambiar la configuración de Nginx GZIP, abra el archivo de configuración NGINX principal en "_VI_" o su editor de texto favorito:
```
sudo vi /etc/nginx/nginx.conf
```
Encuentre la sección de configuración _gzip_, que se ve así:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Como puede ver, GZIP está habilitado de forma predeterminada con _GZIP ON; _ pero hay otras configuraciones comentadas de GZIP.
Podemos habilitar la configuración _gzip_types_ para habilitar la compresión en los tipos de archivos que queremos comprimir. Por ejemplo
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Ahora reinicie Nginx para tomar nuevas configuraciones vigentes.

## Verifique la compresión GZIP {#verify}
Ahora que hemos habilitado la compresión GZIP, verifiquemos.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
La respuesta permanecerá igual ya que la compresión ya se ha habilitado para ese tipo de archivo:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## conclusión {#conclusion}
En este artículo hemos aprendido que puede usar el módulo Nginx GZIP para acelerar las transferencias de archivos. Le mostramos paso a paso cómo habilitar la compresión de GZIP en Nginx usando el módulo GZIP. La documentación oficial para [GZIP Module][7] enumera otras directivas de configuración que puede ver. Espero que este tutorial lo ayude a optimizar el rendimiento y la velocidad de su sitio web.

## Explorar
  * [Cómo instalar múltiples versiones PHP con Nginx en Ubuntu][8]
  * [Cómo configurar y configurar Nginx como proxy inverso][9]

  
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
