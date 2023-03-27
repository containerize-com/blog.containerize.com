---
title: "Tutorial de configuración para Lemp Stack en Ubuntu 18.04" 
seoTitle: "Tutorial de configuración para Lemp Stack en Ubuntu 18.04" 
description: "La pila LEMP es una pila de software que se utiliza para desarrollar e implementar aplicaciones web. Aprenda a instalar Nginx, MySQL y PHP en Ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Install & amp; Configure la pila LEMP para desarrollar e implementar aplicaciones web. Esta guía lo ayudará a instalar Nginx, MySQL y PHP en Ubuntu 18.04." 
url: /es/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Instale y configure la pila LEMP para desarrollar e implementar aplicaciones web. Esta guía lo ayudará a instalar Nginx, MySQL y PHP en Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="Instale la pila Lemp en Ubuntu">}}


## Descripción general {#Prerequisites}

En esta guía, instalaremos Nginx, MySQL y PHP (LEMP Stack) para el desarrollo y la implementación de aplicaciones web. También configuraremos una aplicación PHP de servidor web para servidor en Ubuntu Server 18.04. Cubriremos las siguientes secciones en este tutorial.
* [  **Prerrequisitos**  ][1]
* [  **¿Qué es la pila Lemp?**  ][2]
* [  **Instalación Lemp**  ][3]
* [  **Conclusión**  ][4]

## Requisitos previos {#Requisitos previos}

Antes de instalar software, debe cumplir con los siguientes requisitos.
  * Servidor con sistema operativo Ubuntu
* Usuario no raíz con  **sudo**  privilegios

## ¿Qué es Lemp Stack? {#What}

 **Lemp Stack** es una colección de software que puede usarse para ejecutar aplicaciones web basadas en PHP. LEMP significa Linux, Nginx, MySQL y PHP. La pila Lemp es una variante de la pila de lámparas. Tanto LAMP como LEMP son pilas de software populares para desarrollar e implementar aplicaciones web. Hay una diferencia entre estas dos pilas de software. LAMP utiliza el servidor web Apache, mientras que el servidor LEMP utiliza el servidor web NGINX.

## Instalación de LEMP {#Installation}

En esta sección, nos centraremos en cómo instalar Nginx, MySQL y PHP en Ubuntu 18.04. En primer lugar, necesitamos actualizar los paquetes de servidor ejecutando el siguiente comando.
```
$ sudo apt update
```

### Instalación del servidor web NGINX
* Ejecute el comando a continuación a  **Instale Nginx en Ubuntu**  .
```
$ sudo apt install nginx
```
  * Una vez que haya terminado con la instalación de NGINX, abra su navegador web y escriba la dirección IP de su servidor. Le mostrará la página de bienvenida predeterminada del servidor web NGINX.

{{< figure align=center src="images/nginx-home-1.png" alt="Página predeterminada del servidor web nginx">}}


### Instalación de MySQL
Ahora, debe instalar el servidor de base de datos MySQL para la administración de los datos de su aplicación.
* Ejecute el comando a continuación a  **Instale mysql en Ubuntu**  .
```
$ sudo apt install mysql-server
```
  * Para asegurar la instalación de MySQL, ejecute el siguiente comando.
```
$ sudo mysql_secure_installation
```
* Se le preguntará que desea habilitar  **Validar el complemento de contraseña**  o no. Es mejor no habilitarlo, escriba N y presione Entrar para avanzar en el siguiente paso.
  * A continuación, le hará un par de preguntas como se muestra a continuación. Debe responder a todas las preguntas.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Ahora, MySQL Server está en funcionamiento. Puede probarlo con el siguiente comando. Ingrese su contraseña de cuenta root de Ubuntu, no la MySQL en caso de que le solicite una contraseña.
```
$ sudo mysql
```
  * Ingrese el comando a continuación para salir de MySQL.
```
mysql> exit
```

### Instalando PHP
Cubriremos la instalación de PHP-FPM para el procesamiento de PHP. PHP-FPM significa FastCGI Process Manager. Nginx Web Server no tiene ninguna funcionalidad incorporada para el procesamiento de PHP, por lo que usaremos PHP-FPM para ello. Además, instalaremos PHP-MYSQL para comunicar PHP con el MySQL para la gestión de datos.
* Ejecute el comando a continuación a  **Instale PHP en Ubuntu**  .
```
$ sudo apt install php-fpm php-mysql
```
  * Ahora, ha terminado con la instalación de PHP y todo el software requerido de LEMP Stack para ejecutar la aplicación web.
  * En este paso, crearemos un archivo de configuración de Nginx para indicarle a NGINX que use el procesador PHP para contenido dinámico. Ejecute el comando a continuación para crear el archivo de configuración Nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Copie el código en el archivo de configuración Nginx y guárdelo.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * Echemos un vistazo a estas directivas y bloque de ubicación, para que pueda tener información básica.
*  **Escuchar**  : Puede definir el puerto para Nginx. Use el puerto 80 para HTTP y 443 para los protocolos HTTPS.
*  **Root**  : Defina el directorio raíz para su proyecto. Nginx lo usará para servir al sitio web o la aplicación web.
*  **Index**  : Defina el orden en que se deben servir los archivos. Cuando se llama al archivo de índice, NGINX entregará el archivo index.php.
*  **server_name**  : Definir el nombre de dominio o la IP pública de su servidor.
*  **Ubicación /** : Este bloque de ubicación tiene **Try_block**  Directiva y coincide con el URI solicitado. Nginx devuelve el error 404, si no encuentra el archivo solicitado.
*  **Ubicación ~ .php $**  : Este bloque de ubicación maneja el procesamiento de PHP.
*  **Ubicación ~ /.ht** : Nginx no procesa  **. Htaccess**  Archivo y esta ubicación los bloqueos se ocupan de él. Nginx no sirve archivo .htaccess definiendo **Denegar todo**  Directiva.
  * Cree SymLink para el archivo de configuración NGINX recientemente creado para habilitarlo.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Ejecute el siguiente comando para probar el archivo de configuración Nginx para errores de sintaxis.
```
$ sudo nginx -t
```
  * Reiniciar el servidor web Nginx.
```
$ sudo systemctl restart nginx
```

### Prueba PHP
  * Para garantizar que NGINX sirva correctamente las páginas PHP, crearemos un archivo PHP para probar las configuraciones.
  * Crear archivo info.php en el directorio raíz del servidor web NGINX ejecutando el siguiente comando.
```
$ sudo nano /var/www/html/info.php
```
  * Agregue el siguiente código en él y guarde el archivo.
```
<?php
phpinfo();
```
  * Abra su navegador web y escriba el nombre de dominio o la IP pública del servidor seguido del nombre del archivo PHP como http: // Server \ _ip \ _or_domain/info.php. Verá la página de abajo.

{{< figure align=center src="images/info-php.png" alt="Página de información de php">}}


## Conclusión {#Conclusión}

En este tutorial, discutimos sobre cómo instalar y configurar la pila  **lemp**  . Como puede ver, la configuración de los componentes de la pila de software es realmente fácil. Además, puede comenzar a crear y servir aplicaciones web en minutos.
Finalmente, [  **Contenerize.com** ][5] se encuentra en un proceso consistente de escribir publicaciones de blog sobre otros productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [ **PISTA DE SOLUCIÓN DEL SERVICIO WEB**  ][6] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
* [  **La mejor pila de soluciones de servidor web de código web de código abierto**  ][7]
*  **[Herramientas forenses digitales de código abierto más popular][8]**  
*  **[Software de cola de mensajes de código abierto (MQ) en 2021][9]**  
*  **[Mejor software de almacenamiento en la nube de código abierto y compartir archivos][10]**  
* [  **Cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu**  ][11]
* [  **Cómo instalar múltiples versiones de PHP con Nginx en Ubuntu**  ][12]
* [  **Top 5 Licencias de código abierto aprobadas por OSI más populares de 2021**  ][13]



 [1]: #Prerequisites
 [2]: #What
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
 [9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
 [10]: https://products.containerize.com/backup-and-sync/
 [11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
