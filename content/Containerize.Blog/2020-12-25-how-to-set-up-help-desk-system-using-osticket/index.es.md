---
title: "Cómo configurar el software de mesa de ayuda en línea usando Osticket" 
seoTitle: "Cómo configurar el software de mesa de ayuda en línea usando Osticket" 
description: "Administre todas sus solicitudes de soporte en un lugar utilizando la mesa de ayuda de Osticket. Convierta las consultas creadas por correo electrónico, teléfono y formularios en boletos basados ​​en la web." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Administre todas sus solicitudes de soporte en un lugar usando Osticket. Convierta las consultas creadas por correo electrónico, teléfono y formularios en boletos simples basados ​​en la web." 
url: /es/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Administre todas sus solicitudes de soporte en un lugar usando Osticket. Convierta las consultas creadas por correo electrónico, teléfono y formularios en boletos simples basados ​​en la web.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Cómo configurar el software de mesa de ayuda en línea usando Osticket">}}

Osticket es una solución de software de mesa de ayuda en línea de código abierto. Osticket HelpDesk es una alternativa gratuita a los sistemas de atención al cliente de alto costo y complejos. Es simple, liviano, confiable, basado en la web y fácil de configurar y usar. La mejor parte es que es completamente gratis. Cubriremos las siguientes secciones en este tutorial:
  * [¿Qué es Osticket?][1]
  * [Pros y contras de Osticket][2]
  * [¿Cómo configurar Osticket?][3]
  * [Conclusión][4]

## ¿Qué es Osticket?   {#osticket}
Osticket proporciona un panel de control fácil de usar y un componente de informes en tiempo real. Los usuarios pueden iniciar sesión y crear los boletos en algunos pasos sencillos. Pueden crear boletos a través de su sitio web, correo electrónico o teléfono. Los boletos entrantes se guardarán y asignarán a los agentes. Los agentes recibirán notificaciones por correo electrónico y responderán a las consultas para ayudar a resolver sus problemas. Los clientes y agentes pueden discutir detalles y progresos en la sección de comentarios. Los clientes pueden realizar un seguimiento de sus solicitudes y progresos a través del portal de clientes incorporado proporcionado por este software de mesa de ayuda en línea.

## pros y contras de Osticket   {#Pros}

## ## Pros
  * Osticket es extremadamente fácil de usar tanto para los usuarios finales como para los agentes de soporte.
  * Bundido con características ricas, Osticket tiene todo lo que necesitas sin ser demasiado complicado.
  * Osticket es un software de administración de boletos de código abierto y completamente gratuito.
  * Es liviano, seguro, confiable y fácil de instalar software de administración de la mesa de ayuda.
  * Es flexible ejecutarse en todos los servidores web populares, incluidos Apache, Nginx, Lighttpd e IIS, etc.

## ## Contras
  * Osticket no proporciona detalles de análisis de boletos y estadísticas como otros sistemas de mesa de ayuda pagas.
  * Su interfaz de usuario es muy simple y básica en comparación con otros sistemas de soporte.

## ¿Cómo instalar Osticket?   {#cómo}
Siga estos pasos para instalar Osticket con Nginx en Ubuntu 18.04 LTS.
  * Cree un nuevo directorio para Osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Descargue la última configuración de Osticket usando los siguientes comandos.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Después de eso, cree un archivo de configuración a partir del archivo de muestra utilizando estos comandos.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Luego cambie la propiedad del directorio web de Osticket al usuario y grupo de "Data www".
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Después de eso, cree un nuevo archivo de configuración de host virtual.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Luego pegue el código de configuración en él.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * Cambie el nombre del servidor según su nombre de dominio. Guarda el archivo y cierra.
  * Ahora enlace este archivo de host virtual a la carpeta habilitada para sitios usando el siguiente comando
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Probar cualquier error de configuración utilizando el siguiente comando
```
nginx -t
```
  * Ahora reinicie el servicio Nginx usando el siguiente comando
```
sudo systemctl restart nginx

```
  * Ahora ingrese su nombre de dominio en cualquier navegador web para iniciar el asistente de instalación como se muestra en la siguiente figura

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Cómo configurar el software de mesa de ayuda en línea usando Osticket">}}

  * Habilite las extensiones requeridas de php.ini y haga clic en "Continuar".
  *Complete toda la información requerida y haga clic en el botón "**Instalar ahora"** .

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Cómo configurar el software de mesa de ayuda en línea usando Osticket">}}

  * En la configuración de la base de datos, ingrese dbname, nombre de usuario y contraseña.
  * Finalmente, haga clic en el botón "Instalar ahora"
  * Después de completar la instalación, mostrará la página con el mensaje de éxito.
  * A continuación, cambie el permiso de OST-Config.php para eliminar el acceso de escritura ejecutando el siguiente comando:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## conclusión   {#conclusion}
Osticket es el más adecuado para empresas con bajo presupuesto o aquellas que desean un sistema de mesa de ayuda simple y no complejo. Es simple, liviano, confiable, de código abierto y software de mesa de ayuda en línea totalmente gratuito. Lo que hace de Osticket una gran alternativa a los sistemas de atención al cliente de mayor costo. Para obtener más información sobre las funciones y la guía de instalación de Osticket, consulte el siguiente tutorial.

## Explorar
[Software de mesa de ayuda de TI y de código abierto y gratuito][5]
[Sistema popular de asistencia basada en boletos gratuitos y atención al cliente][6]
[Una guía para principiantes para desarrollar el complemento de Osticket][7]
[Cómo implementar la tenencia múltiple en Osticket][8]
[Automatizar el sistema de tickets usando WordPress y Osticket][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
