---
title: "Cómo implementar el almacenamiento en caché del navegador con la configuración de Nginx" 
seoTitle: "Cómo implementar el almacenamiento en caché del navegador con la configuración de Nginx" 
description: "Cuanto más rápido se carga un sitio web, más probable es que se quede un visitante. En este tutorial, implementaremos el almacenamiento en caché del navegador con la configuración de Nginx." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Cuanto más rápido se carga un sitio web, más probable es que se quede un visitante. Este artículo lo guía sobre cómo implementar el almacenamiento en caché del navegador con configuraciones NGINX." 
url: /es/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## Cuanto más rápido se carga un sitio web, más probable es que se quede un visitante. Este artículo lo guía sobre cómo implementar el almacenamiento en caché del navegador con configuraciones NGINX.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Cómo implementar el almacenamiento en caché de Browsr con la configuración de Nginx">}}

En nuestra serie tutorial de Nginx, hemos cubierto [cómo usar Nginx como equilibrador de carga][1], [Configurar Nginx como proxy inverso][2], [Use múltiples versiones PHP con Nginx][3] y [Convertir reescritura Htaccess Reglas para reescribir las directivas de reescritura][4]. En el artículo de hoy, estamos cubriendo un tema muy importante que ayuda a las empresas a mejorar la experiencia de sus usuarios al aprovechar el almacenamiento en caché del navegador. En este tutorial, lo guiaremos sobre cómo implementar el almacenamiento en caché del navegador con la configuración de Nginx utilizando el módulo de encabezado de Nginx. ¡Empecemos!
  *** [Palancamiento del almacenamiento en caché del navegador][5] **
  *[** Módulo de encabezado Nginx **][6]
  *)
  *[** Apalancamiento del almacenamiento en caché del navegador con configuración Nginx **][8]
  *[** Conclusión **][9]

## Apalancamiento del caché del navegador {#Browser-Caching}
Cuanto más rápido se carga un sitio web, más probable es que un visitante permanezca en el sitio web. Los sitios web con muchas imágenes y contenido interactivo se cargan en segundo plano, hace que el sitio web abran una tarea compleja. Consiste en solicitar muchos archivos diferentes del servidor uno por uno. Minimizar la cantidad de estas solicitudes es una forma de acelerar su sitio web.
Un método para mejorar el rendimiento del sitio web es _leveraging Browser Caching_. El almacenamiento en caché del navegador juega un papel muy importante en el mecanismo de caché para aumentar la velocidad de la página. Los archivos estáticos como CSS, JS, JPEG, PNG, etc. que se utilizan para el sitio web se pueden guardar en la computadora del visitante para el acceso futuro. Cada vez que el visitante encuentra una nueva página en su sitio web, se puede acceder a los archivos anteriores desde la computadora del visitante en lugar de su servidor provisto, lo que aumentará enormemente la velocidad de carga de la página.

## Módulo de encabezado de Nginx {#Header-Module}
El módulo _ngx \ _http \ _headers_module_ permite agregar los campos de encabezado "_EXIRES_" y "_cache-Control_", y campos arbitrarios, a un encabezado de respuesta. Podemos usar el módulo de encabezado para establecer estos encabezados HTTP. El módulo de encabezado es un módulo nginx central, lo que significa que no es necesario instalarlo por separado para usarse.
La configuración de ejemplo se ve así:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## E-Tag e If-None-Match {#etage}
Supongamos que tenemos algunos archivos de prueba con diferentes extensiones, por ejemplo, test.html, test.jpg, test.css y test.js. Por defecto, todos los archivos tendrán el mismo comportamiento de almacenamiento en caché predeterminado. Para verificar los encabezados de respuesta de un archivo utilizando el siguiente comando para solicitar un archivo de nuestro servidor Nginx local y muestra los encabezados de respuesta:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
En la segunda línea de la última a la última, encontrará el encabezado _etag_, que contiene un identificador único para esta revisión particular del archivo solicitado. Si ejecuta el último comando _curl_ repetidamente, encontrará exactamente el mismo valor de ETAG.
Al usar un navegador web, el valor _etag_ se almacena y se envía de regreso al servidor con el encabezado de solicitud _if-none-match_ cuando el usuario actualiza la página o el mismo archivo es requerido por el navegador por cualquier motivo.
Podemos simular esto en la línea de comando con el siguiente comando.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Tenga en cuenta el identificador único, debe coincidir con el valor de respuesta que obtuvimos de nuestra llamada _curl_ anterior. La respuesta será diferente esta vez:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Esta vez, Nginx responderá con ** 304 no modificado **. No volverá a enviar el archivo a través de la red; En su lugar, le dirá al navegador que puede reutilizar el archivo que ya ha descargado localmente. Esto es útil ya que reduce el tráfico de red. Pero el navegador todavía tiene que hacer una llamada HTTP para obtener una respuesta del servidor, que todavía lleva algún tiempo.

## Apalancamiento del caché del navegador con configuración Nginx {#Nginx-Configuration}
En nuestro ejemplo anterior, explicamos cómo la etiqueta E y If-None-Match lo ayudan a reducir el tráfico de red. Pero el problema con `Etag` es que el navegador siempre envía una solicitud al servidor preguntando si puede reutilizar su archivo en caché. Y esto todavía lleva tiempo hacer la solicitud y recibir la respuesta.
Ahora, con la ayuda del módulo de encabezado de Nginx, haremos que el navegador almacene en caché algunos archivos localmente sin preguntar explícitamente al servidor.
Agregue las siguientes 3 líneas en su archivo de configuración de Nginx para almacenar en caché el contenido estático en Nginx
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
La primera línea instruye a Nginx que cachee contenido en el navegador del cliente durante 30 días (30D). Después de este período, cualquier solicitud nueva del usuario dará como resultado una realidación y actualización de caché desde el navegador del cliente.
Puede colocar las líneas anteriores en _location_, _server_ o _http_ bloques.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Cuando los coloca en el bloque de ubicación, solo el contenido servido por esa ubicación será almacenado en caché. En el caso anterior, solo las solicitudes a / static / serán almacenadas en caché.
Si desea almacenar en caché los tipos de archivos específicos, puede hacerlo utilizando el bloque de ubicación.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
En el ejemplo anterior, estamos almacenando en caché de varios tipos de archivos, como JS, JPG, CSS, etc.
Del mismo modo, puede colocar la configuración de caché en el bloque _server_ antes de cualquier bloque de ubicación. En este caso, todas las respuestas de este servidor se almacenarán en caché. O puede colocarlo en el bloque _http_, en este caso, todas las solicitudes de servidor compatibles con el archivo de configuración de Nginx se almacenarán en caché.

## conclusión {#conclusion}
El módulo de encabezados de Nginx se puede usar para agregar cualquier encabezado arbitrario a la respuesta, pero configurar correctamente los encabezados de control de caché es una de sus aplicaciones más útiles. Le ayuda a mejorar el rendimiento del sitio web, especialmente para los usuarios en redes con mayor latencia, como las redes de operadores móviles. En este tutorial, aprendimos a aprovechar el almacenamiento en caché del navegador con la configuración de Nginx. Espero que esto lo ayude a mejorar la experiencia de su usuario en su sitio web.

## Explorar
  * [Cómo instalar múltiples versiones de PHP con Nginx en Ubuntu][3]
  * [Cómo configurar y configurar Nginx como proxy inverso][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
