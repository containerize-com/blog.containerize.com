---
title: "Cómo convertir las reglas de reescritura de htaccess a las directivas de reescritura de Nginx" 
seoTitle: "Cómo convertir las reglas de reescritura de htaccess a las directivas de reescritura de Nginx" 
description: "Nginx no admite las reglas de reescritura .htaccess, por lo que los desarrolladores deben convertir esas reglas para reescribir las directivas de Nginx. Aprendamos a realizar esta conversión." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "NGINX no admite las reglas de reescritura de Htaccess, y los desarrolladores requieren convertir esas reglas para reescribir las directivas de Nginx. Aprendamos a hacer esta conversión." 
url: /es/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## Nginx no admite las reglas de reescritura de Htaccess, y los desarrolladores requieren convertir esas reglas para reescribir las directivas de Nginx. Aprendamos a hacer esta conversión.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Convertir .htaccess reescribe reglas a las directivas nginx">}}

En nuestro último tutorial, aprendimos [cómo instalar múltiples versiones de PHP con Nginx en Ubuntu][1]. Apache es uno de los servidores web más populares, pero últimamente, Nginx se ha establecido como un competidor de Apache. Pero Nginx no es compatible con las reglas de reescritura de htaccess. Entonces, en este artículo, aprenderemos cómo convertir las reglas de reescritura de htaccess para reescribir las directivas de Nginx. ¡Empecemos!
  ***[Reglas de reescritura de Nginx][2]** 
  *[**. Htaccess Reescritas Reglas **][3]
  *[**Convert .htaccess Reescribir reglas a las directivas de reescritura nginx** ][4]
  *[**Conclusión** ][5]

## Reglas de reescritura nginx   {#nginx}
Reescribir las reglas cambian parte o la totalidad de la URL en una solicitud de cliente, generalmente para informar a los clientes que el recurso que solicitan ahora reside en una ubicación diferente o para controlar el flujo de procesamiento dentro de Nginx. Por ejemplo, para reenviar solicitudes a un servidor de aplicaciones cuando el contenido debe generarse dinámicamente. La directiva Try_Files a menudo se usa para este propósito.
Las dos directivas para la reescritura de Nginx de propósito general son _return_ y _rewrite_, y la directiva _try_files es una forma útil de dirigir las solicitudes a los servidores de aplicaciones.
La Directiva de retorno es la más simple de las dos directivas de propósito general. Adjunta la devolución en un servidor o contexto de ubicación.
Por ejemplo, aquí hay un ejemplo muy simple que redirige a los clientes a un nuevo nombre de dominio utilizando la directiva _return_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Pero, ¿qué pasa si necesita realizar distinciones complicadas entre las URL, capturar elementos en la URL original o cambiar o agregar elementos en el camino? Puede usar la directiva _rewrite_ en tales casos.
Aquí hay una regla de reescritura de Nginx Nginx que usa la Directiva de Reescritura. Coincide con las URL que comienzan con las cadenas /canciones y luego incluye el /o /o /audio /directorio /directorio en algún lugar más tarde en la ruta. Reemplaza esos elementos con / mp3 / y agrega la extensión de archivo apropiada, .mp3 o .ra. Las variables de $ 1 y $ 2 capturan los elementos de ruta que no están cambiando. Como ejemplo,/descargar/cdn-west/media/file1 se convierte en/download/cdn-west/mp3/file1.mp3. Si hay una extensión en el nombre de archivo (como .flv), la expresión la elimina y la reemplaza con .mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess Reglas de reescritura   {#apache}
El archivo .htaccess controla varias formas en que se puede acceder, bloquear y redirigirse a un sitio web. Hace esto usando una serie de una o más reglas de reescritura .htaccess. Estas reescrituras se ejecutan por el módulo Mod_rewrite de Apache.
Mod_rewrite proporciona una forma de modificar las solicitudes de URL entrantes, dinámicamente, basadas en reglas de expresión regulares. Esto le permite asignar cualquier URL en su estructura de URL interna de cualquier manera que desee. Esto también se usa para limpiar sus URL externos y luego asignarlas en URL internas de aspecto feo.
Por ejemplo, siguiendo la regla de reescritura .htaccess redrige una URL no www a una URL www.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## Convert .htaccess Reescribir las reglas a las directivas de reescritura nginx   {#convert}
Como mostramos en nuestro ejemplo anterior para redirigir una URL no WWW a una URL WWW, convierta la misma regla de reescritura .htaccess en la Directiva de reescritura de Nginx.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Así que aquí creamos dos bloques _server_ separados, uno para _yourdomain.com_ y el otro para _www.yourdomain.com_. Y en el bloque _server_ para _yourdomain.com_ utilizamos la directiva _return_ para redirigir URL no www a www url.
La misma redirección que realizamos con la Directiva de retorno, también se puede hacer con la Directiva de Reescritura, pero no se recomienda.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
En aras de más claridad, convierta las reglas de WordPress Htaccess en la directiva Nginx try_files.
[WordPress.org distribuye][6] Un archivo básico predeterminado **. Htaccess ** con el siguiente. Reglas de reescritura de htaccess que habilitan enlaces permanentes:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
Aquí está la directiva convertida de nginx try_files
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## conclusión   {#conclusion}
En este tutorial, exploramos las reglas de reescritura .htaccess de Apache y cómo podemos convertir esas reglas de reescritura. Además, exploramos diferentes directivas NGINX que pueden usarse para reescribir URL. También dimos reglas de reescritura de ejemplo para NGINX y Apache. Espero que el tutorial te sea útil.

## Explorar
  * [Cómo instalar múltiples versiones de PHP con Nginx en Ubuntu][1]
  * [Cómo configurar y configurar Nginx como proxy inverso][7]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
