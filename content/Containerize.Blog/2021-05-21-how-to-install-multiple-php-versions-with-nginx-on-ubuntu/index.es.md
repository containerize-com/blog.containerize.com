---
title: "Cómo instalar múltiples versiones de PHP con Nginx en Ubuntu" 
seoTitle: "Cómo instalar múltiples versiones de PHP con Nginx en Ubuntu" 
description: "El artículo explica cómo instalar múltiples versiones de PHP con Nginx en Ubuntu. Pasaremos por instrucciones paso a paso sobre cómo instalar PHP con NGINX." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Si está buscando usar múltiples versiones de PHP con Nginx, en este artículo lo guiaremos paso a paso sobre cómo instalar PHP con Nginx en Ubuntu." 
url: /es/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP con versiones de PHP múltiples Nginx">}}


## Si está buscando usar múltiples versiones de PHP con Nginx, entonces en este artículo le guiaremos paso a paso sobre cómo instalar PHP con Nginx en Ubuntu.
Este artículo continúa de nuestra serie sobre tutoriales sobre Nginx. Hasta ahora hemos cubierto cómo usar Nginx como equilibrador de carga, cómo usar Nginx como proxy inverso. Y ahora este tutorial cubre otra pregunta exigente "Cómo usar múltiples versiones de PHP con Nginx". En este tutorial, le guiaremos paso a paso sobre cómo instalar PHP en Ubuntu, cómo configurar PHP con NGINX y, finalmente, cómo puede instalar múltiples versiones de PHP con NGINX. ¡Entonces empecemos!
  * [Instalar nginx][1]
  * [Instale múltiples versiones de PHP][2]
  * [Crear múltiples sitios web con PHP][3]
  * [Configure Nginx para ejecutar diferentes versiones para sitios web][4]
  * [Conclusión][5]

## instalar nginx {#nginx}
Nginx (pronunciado como "Engine-X") es un servidor web de código abierto que a menudo se usa como proxy inverso o caché HTTP. Está disponible para Linux gratis.
Para instalar NGINX, use el siguiente comando:
```
sudo apt update
sudo apt install nginx
```
Después de que se realice la instalación, puede abrir "http: // localhost" en su navegador y tendrá toda la configuración.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Instale PHP con Nginx">}}


## Instale múltiples versiones PHP {#PHP}
** PHP ** (acrónimo recursivo para ** PHP: preprocesador de hipertexto **) es un lenguaje de secuencias de comandos de uso general de código abierto que es ampliamente utilizado y más adecuado para desarrollar sitios web y aplicaciones basadas en la web. Es un lenguaje de secuencias de comandos del lado del servidor que se puede integrar en HTML.
Actualmente, hay tres versiones compatibles de ** php **, es decir, ** php 5.6 **, ** 7.0, ** y ** 8.0 **. Significado ** Php 5.3 **, ** 5.4, ** y ** 5.5 ** Han alcanzado el final de la vida; Ya no son compatibles con actualizaciones de seguridad. Entonces, primero instale PHP 7.0 y PHP 7.2 con PHP-FPM.
En realidad, antes de movernos con la instalación, primero subraye que lo que es PHP-FPM. ** PHP-FPM ** (un acrónimo de ** Fastcgi Process Manager **) es una implementación alternativa de PHP (procesador hipertexto) enormemente popular. PHP-FPM incluye numerosas características que pueden resultar beneficiosas para los sitios web que reciben tráfico en grandes volúmenes con frecuencia.
Para instalar PHP 7.0 y 7.2 primero, deberá agregar el repositorio de PHP a su servidor para instalar múltiples versiones de PHP. Puede agregar el repositorio PHP de OnDrej con el siguiente comando:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Una vez que el repositorio esté actualizado, instale PHP 7.0, PHP 7.2 y PHP-FPM con el siguiente comando:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Una vez que se haya completado la instalación, verifique el estado de PHP-FPM con el siguiente comando:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Crear múltiples sitios web con PHP {#Web}
La página predeterminada se coloca en/var/www/html/ubicación. Puede colocar sus páginas estáticas aquí, o usar el host virtual y colocarlo en otra ubicación
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
A continuación, cree un archivo de muestra index.php para el sitio1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Ahora cree un archivo de muestra index.php para el sitio2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Luego, cambie la propiedad de ambos sitios web a datos www:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## configure nginx {#configure}
A continuación, deberá crear un archivo de host Virtual Nginx para Domain Site1.Containerize.com que usa PHP 7.0. Y otro para Site2.Containerize.com que usa PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Agregue las siguientes líneas:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Ahora cree el segundo archivo para sitio2.containerize.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Luego, habilite ambos archivos de host virtuales con el siguiente comando:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Finalmente, reinicie el servicio NGINX y PHP-FPM para aplicar todos los cambios de configuración:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## conclusión {#conclusion}
En este tutorial exploramos cómo múltiples versiones de PHP en Ubuntu. Aprendimos a instalar Nginx. Luego exploramos cómo configurar dos sitios web diferentes en Nginx. Y finalmente aprendimos a configurar dos sitios web diferentes con diferentes versiones de PHP con Nginx. Espero que el tutorial te haya ayudado.

## Explorar
  * [Cómo configurar y configurar Nginx como proxy inverso][6]
  * [Cómo usar Nginx como equilibrador de carga para su aplicación][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
