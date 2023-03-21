---
title: "Cómo asegurar Nginx con Vamos en cifrado en Ubuntu 20.04" 
seoTitle: "Cómo asegurar Nginx con Vamos en cifrado en Ubuntu 20.04" 
description: "Cómo configurar, cifrar y asegurar NGINX con Let's Cifrar en Ubuntu. Cifrar al cliente para generar certificados para configurar automáticamente NGINX." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Los sitios web incluyen cifrado SSL/TLS para su dominio para atraer visitantes. Este artículo explica el uso de la utilidad CERTBOT para obtener certificados TLS/SSL para NGINX." 
url: /es/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

## Los sitios web incluyen cifrado SSL/TLS para su dominio para atraer visitantes. Este artículo explica el uso de la utilidad CERTBOT para obtener certificados TLS/SSL para NGINX.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Asegure nginx con vamos en cifrado en ubuntu">}}


## **Descripción general**
Cualquier sitio web que busque atraer a los visitantes debe incluir el cifrado TLS/SSL para su dominio. Los certificados gratuitos de SSL aseguran una conexión segura entre su servidor web como para cifrar y asegurar los navegadores Nginx y de aplicaciones. Let's CiCrypt es una autoridad de certificado gratuita, automatizada y abierta que le permite configurar dicha protección para Nginx SSL LetsenCrypt. Vamos a encriptar los certificados SSL gratuitos en todos los principales navegadores y válidos para los próximos 90 días desde la fecha de emisión.
Esta publicación de blog explica una forma más simple de cifrar y asegurar Nginx ejecutando el servidor web en Ubuntu 20.04 / 18.04 obteniendo certificados NGINX HTTPS LetsEnsenSptypt utilizando la utilidad Nginx CertBot y configurar sus certificados para renovarlo automáticamente. Comiencemos y configuremos las configuraciones de LetsEnsenSpt Ubuntu Nginx.
  * Dependencias y requisitos previos
  * Instalación de CertBot Utity
  * Confirmando la configuración de Nginx
  * Permitir https a través del firewall
  * Obtener un certificado SSL
  * Conclusión

## Lo primero es lo primero: dependencias y requisitos previos   {#Preequisites}
Para seguir este artículo, necesitará las siguientes dependencias y requisitos previos para instalar las utilidades de Letsencrypt Ubuntu Nginx:
  * Un usuario no raíz o raíz habilitado para SUDO en máquinas locales/remotas.
  * Un sistema que ejecuta Ubuntu 20.04 o Ubuntu 18.04
  * Acceso a una terminal de línea de comando
  * Privilegios de sudo o raíz en máquinas locales/remotas
  * Nginx instalado y configurado
  * Un nombre de dominio registrado que señala a la IP pública
  * Un bloque de servidor configurado para ese nombre de dominio
  * El firewall está configurado para aceptar conexiones en los puertos 80 y 443.

## Paso 1-Instalación de CERTBOT   {#Paso-1 -—- Instalación-CERTBOT}
El primer paso para asegurar NGINX y cifrar NGINX con Let's CiCrypt es instalar Nginx CERTBOT TOTALMENTE FORMACIÓN Y FÁCIL de usar para obtener y renovar los certificados SSL de Let’s CiCrypt en su servidor. Para hacerlo, comience abriendo un terminal en Ubuntu y actualizando el repositorio local. Escriba y e ingrese si se le solicita.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Ahora verifiquemos algunas de las configuraciones de configuración segura de NGINX.

## Paso 2-Confirmación de la configuración de Nginx   {#Paso-2 --—- Confirmación de Nginx-39-S-Configuración}
Como se explica en la sección Dependencias y requisitos previos, ya debe tener un dominio registrado y CERTBOT debe poder encontrar el bloque Nginx del servidor correcto para ese dominio para configurar automáticamente SSL. Como ejemplo, esta publicación de blog utiliza el Blog de dominio.containerize.com y el bloque de servidor para su dominio en /etc/nginx/sites-available/blog.containerize.com con la directiva server_name ya establecida correctamente.
Para confirmar, abra el archivo de configuración para su dominio usando Nano o su editor de texto favorito:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Encuentre la línea de directiva Server_Name existente en el archivo /etc/nginx/sites-available/blog.containerize.com. Debe tener un aspecto como este:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Ahora verifique la sintaxis de sus archivos de configuración NGINX y vuelva a cargar el servidor Nginx para cargar la nueva configuración de configuración:
```
sudo nginx -t
sudo systemctl reload nginx

```
CertBot Utility ahora puede encontrar la directiva correcta de bloque de servidor NGINX para asegurar NGINX y actualizarla automáticamente. En el siguiente paso, actualicemos el firewall para permitir el tráfico HTTPS.

## Paso 3-Permitir https a través del firewall   {#step-3 -—- permitiendo https-through-the-firewall}
Como se recomienda en este artículo, los requisitos previos, deberá ajustar la configuración para permitir el tráfico HTTPS. Para asegurarse de que su firewall esté habilitado y activo, ejecute el siguiente comando:
```
sudo ufw status

```
La salida debe indicarle que UFW está activo y le dará una lista de reglas establecidas. Solo muestra que el tráfico HTTP está permitido al servidor web. Para permitir el tráfico cifrado, puede agregar el perfil Nginx HTTPS o usar Nginx completo y eliminar la regla Nginx HTTP existente. Permitir el tráfico NGINX HTTPS escribiendo el comando:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Verifique la regla HTTPS que permita el tráfico HTTPS mediante el comando de estado UFW:
```
sudo ufw status

```
A continuación, ejecutemos CertBot y obtengamos nuestros certificados.

## Paso 4-Obtener un certificado SSL   {#Paso-4 -—- Obtener-AN-SSL-Certificate}
El complemento del NGINX para CERTBOT se encargará de reconfigurar a NGINX y recarga su configuración cuando sea necesario. Por lo tanto, solo usted necesita generar certificados con el complemento NGINX ejecutando el siguiente comando:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Si esta es la primera vez que ejecuta CertBot Utility, CertBot le pide que configure su configuración HTTPS. Se le pedirá que ingrese una dirección de correo electrónico y acepte los términos de servicio. Después de presionar Enter, la configuración se actualizará y Nginx se volverá a cargar para recoger la nueva configuración. Finalmente, CertBot se mostrará con un mensaje que le indica que se generó un certificado con éxito y dónde se almacenan sus certificados.
Sus certificados se descargan, instalan y se cargan con configuraciones de Certificado Nginx SSL LetsEnsenCrypt. Intente recargar su sitio web usando https: // y observe el indicador de seguridad de su navegador. Debe indicar que el sitio está correctamente asegurado, generalmente con un icono de bloqueo. Si prueba su servidor utilizando la prueba del servidor SSL Labs, obtendrá una calificación A para NGINX y LetsEnsencrypt.
Terminemos probando el proceso de renovación.

## Paso 5-Verificación de CertBot Auto-Renowal   {#Step-5 -—- Verificación de certbot-autos-renovación}
Dado que los certificados en cifrado caducan cada noventa (90) días y Nginx SSL Letsencrypt alientan a los usuarios que configuran y el trabajo automático de renovación cron. Primero, abra el archivo de configuración de CRONTAB para el usuario actual:
```
sudo crontab -e
```
Agregue un trabajo cron que ejecute el comando CERTBOT, CERTBOT Renew Nginx renova el certificado si detecta el certificado caducará dentro de los 30 días. Programe que funcione diariamente en un tiempo específico, por ejemplo, 05:00 a.m.
```
sudo certbot renew --dry-run

```
El trabajo de Cron también debe incluir el atributo –quiet, como en el comando anterior. Esto instruye a Nginx Renew SSL Certificado que no incluya ninguna salida después de realizar la tarea. Habilitar la renovación de certificado automático. Una vez que agregó el trabajo cron, guarde los cambios y salga del archivo.

## conclusión   {#conclusion}
En este artículo, aprendimos cómo instalar Nginx Certificado de Letsencrypt SSL. Descargamos certificados SSL para su dominio y configuramos NGINX para usar estos certificados. Además, debe haber habilitado CERTBOT para renovar los certificados automáticamente para SSL Nginx LetsEnsenCrypt. En nuestros próximos tutoriales, discutiremos sobre temas más interesantes sobre cómo asegurar un servidor web con tecnología de seguridad estándar que permita la comunicación cifrada entre un navegador web y un servidor web.
_Un puede unirse a nosotros en [Twitter][1], [LinkedIn][2] y nuestra página [Facebook][3]. ¿Qué protocolo criptográfico utiliza para proporcionar seguridad de comunicaciones a través de una red de computadoras? Si tiene alguna pregunta, por favor_ [póngase en contacto][4].

## Explorar
Puede encontrar los siguientes enlaces relevantes para monitorear el rendimiento del servidor y garantizar su confiabilidad y seguridad:
  * [Cómo configurar Apache como un proxy inverso para Ubuntu/Debian][5]
  * [Cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu][6]
  * [Configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian][7]
  * [Configurar nginx con pasajero en el servidor de producción de AWS][8]
  * [Cómo instalar y configurar OwnCloud con Apache en Ubuntu][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
