---
title: "Cómo configurar Nginx con pasajero en el servidor de producción de AWS" 
seoTitle: "Cómo configurar Nginx con pasajero en el servidor de producción de AWS" 
description: "Esta publicación de blog describe los pasos para la instalación de Nginx con pasajero a través del sistema operativo Ubuntu 20.04 LTS siguiendo el método APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "Esta publicación de blog describe los pasos para la instalación de Nginx con pasajero a través del sistema operativo Ubuntu 20.04 LTS siguiendo el método APT." 
url: /es/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## Esta publicación de blog describe los pasos para la instalación de Nginx con pasajero a través del sistema operativo Ubuntu 20.04 LTS siguiendo el método APT.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Configurar Nginx con pasajero en el servidor de producción de AWS">}}


## **Descripción general**:
Debe instalar y configurar ** nginx con pasajero en la producción de AWS ** servidor antes de implementar su aplicación en el servidor de producción.
** Pasajero Phusion de código abierto ** proporciona una gran cantidad de opciones de personalización y características. Pasajero Algunas características se utilizan para mejorar las características de rendimiento de la aplicación. Parte de la influencia de personalización de la aplicación o el comportamiento de manejo de la conexión, etc. Dos opciones de configuración para pasajeros deben configurarse en Nginx, nombrados como pasajeros \ _Enabled y pasajeros \ _root. Este proceso de instalación configurará ambas opciones automáticamente.
En este artículo de blog, vamos a cubrir algunos de los pasos de configuración esenciales para la instalación del servidor de aplicaciones web en el sistema operativo Ubuntu siguiendo ** Método APT **. Podrá implementar y administrar aplicaciones web escritas en Node.js, Python y Ruby después de leer y seguir la siguiente guía.
  *** ¿Qué es Nginx y pasajero? **
  *** Instale paquetes de Nginx y pasajeros **
  *** Habilitar el módulo Nginx de pasajero y reiniciar Nginx **
  *** Validar instalaciones **
  *** Actualizaciones de sistema y pasajeros **
  *** Los mejores servidores web de código abierto **
  * **Conclusión**

## 1. ¿Qué es Nginx y pasajero? {#step-4: -update-regularly}
** [¿Qué es el servidor Nginx?][1] ** Nginx es un software de servidor web gratuito y de código abierto para servir como un proxy inverso, equilibrador de carga HTTP, transmisión de medios, caché HTTP y proxy de correo electrónico para IMAP, POP3 y Smtp. Es altamente escalable, diseñado para el máximo rendimiento y estabilidad. Nginx es un servidor web asincrónico, no tumbado y basado en eventos de alto rendimiento que permite el procesamiento de múltiples solicitudes de clientes al mismo tiempo. Fue escrito por Igor Sysoev, publicado en 2004 bajo los términos de la licencia BSD de 2 cláusulas. ** Nginx funciona 2.5 veces más rápido ** que Apache y consumió menos memoria según una prueba de referencia.
** [¿Qué es el pasajero?][2] ** Phusion Passenger también conocido como Mod \ _Rails y Mod \ _rack, es un servidor web gratuito y un servidor de aplicaciones web de código abierto. Está diseñado para ser rápido, robusto, rico en funciones y liviano que se integra con Apache y Nginx. También mejora la seguridad, la confiabilidad y la escalabilidad para las aplicaciones. Permite a los administradores obtener información sobre las operaciones de aplicaciones web, el rendimiento del servidor. El servidor de aplicaciones de pasajeros se ejecuta y administra automáticamente sus aplicaciones web fácilmente. También puede ** servir múltiples aplicaciones ** al mismo tiempo ser multi-inquilino y independiente. Puede manejar solicitudes HTTP, administra procesos y recursos, y permite tareas de administración, monitoreo y diagnóstico de problemas. Phusion Passenger es un servidor de aplicaciones gratuito con soporte para implementar y administrar meteoritos, Ruby on Rails Nginx Passenger, JavaScript, Python y Node.js Aplicaciones.

## 2. Instale paquetes Nginx y pasajeros: {#Paso-1: -install-Passenger-Packages}
Ahora es el momento de instalar Passenger y Nginx. Podrá implementar fácilmente uno de los servidores web populares que sigue a esta guía. A continuación, los comandos enumerados instalarán Passenger y Nginx a través del repositorio APT de Phusion. Si ya había instalado a Nginx, estos comandos actualizarán Nginx a la versión de Phusion con el pasajero compilado en:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Habilite el módulo Nginx de pasajero y reinicie nginx: {#step-2: -ENable-the-passenger-nginx-module-and-restaart-nginx}
Editar /etc/nginx/nginx.conf y uncomment incluyen /etc/nginx/passenger.conf ;. Por ejemplo, puede ver esto:
```
# include /etc/nginx/passenger.conf;
```
Eliminar los personajes "#", como este:
```
include /etc/nginx/passenger.conf;
```
Si no ve una versión comentada de incluir /etc/nginx/passenger.conf; Dentro de nginx.conf, entonces debe insertarlo usted mismo. Insérvelo en /etc/nginx/nginx.conf dentro del bloque HTTP.
http {
    incluir /etc/nginx/passenger.conf;
    ...
}
Cuando haya terminado con este paso, ** reinicie nginx **:
```
$ sudo service nginx restart
```

## 4. Instalaciones de validación: {#Paso-3: -Calk-Installation}
Después de la instalación, valida la instalación en el terminal ejecutando el comando `sudo/usr/bin/passenger-config validate-install ':
```
sudo /usr/bin/passenger-config validate-install
```
Todos los cheques deben pasar. Si alguno de los cheques no pasa, siga las sugerencias en la pantalla.
Finalmente, verifique si NGINX ha iniciado los procesos del núcleo del pasajero. Ejecute `sudo/usr/sbin/pasajero-memoria-estats`. Debería ver procesos Nginx y procesos de pasajeros. Por ejemplo, como a continuación:
```
sudo /usr/sbin/passenger-memory-stats
```
Si no ve ningún proceso NGINX o procesos de pasajeros, entonces probablemente tenga algún tipo de problema de instalación o problema de configuración. Consulte la [Guía de solución de problemas][3].

## 5. Actualizaciones del sistema y del pasajero: {#Step-4: -update-regularly}
Las actualizaciones de Nginx, las actualizaciones de pasajeros y las actualizaciones del sistema se entregan a través del ** Administrador de paquetes APT ** regularmente. Debe ejecutar el siguiente comando regularmente para mantenerlos actualizados:
actualización de sudo apt-get
actualización de sudo apt-get
No necesita reiniciar la web o la aplicación después de una actualización, y tampoco necesita modificar ningún archivo de configuración después de una actualización. Todo eso se cuida automáticamente para usted por APT.

## 6. ** Los mejores servidores web de código abierto **: {#step-4: -update-regularly}
** ¿Qué es un servidor web de código abierto? ** Un software de servidor web de código abierto es un software de dominio público diseñado para entregar páginas web en Internet World Wide Web. Básicamente, TI procesa solicitudes a través del protocolo de red HTTP para distribuir información en la World Wide Web.
Más del 80% de las aplicaciones y sitios web web funcionan con servidores web de código abierto. Aquí he enumerado algunos de ** Los servidores web de código abierto más populares ** y puede implementar fácilmente uno de estos servidores web populares usted mismo.
  *** APOCHE HTTP SERVER **
  *** Servidor web de Lighttpd **
  *** OpenLiTespeed Web Servidor **
  *** Servidor web Apache Tomcat **
  *** Servidor web Caddy **

## [][4] Conclusión: {#Next-Step}
Felicitaciones, ha instalado y configurado con éxito NGINX con Passenger en ** AWS Production Server ** para su aplicación web. Eche un vistazo a las diversas guías en la [Biblioteca de pasajeros][5] para dominar completamente el servidor de aplicaciones de pasajeros. Puede estar particularmente interesado en la guía [Automatización de implementación][6] de su aplicación Ruby a través de ** Capistrano **, que le enseña cómo implementar automáticamente actualizaciones de aplicaciones futuras sin tanto trabajo manual. Ahora está listo para implementar su aplicación web en las instancias de producción de AWS.
_ ¿Qué servidor web gratuito y de código abierto de aplicaciones web servidor_ prefieren ** desarrollo web o alojamiento ** necesidades_?. ¿Tiene alguna pregunta sobre el servidor web gratuito y el servidor de aplicaciones web de código web abierto?, Por favor_ [Póngase en contacto][7].

## Explorar
Puede encontrar las siguientes publicaciones de blog relevantes:
  * [Cómo configurar Apache como un proxy inverso para Ubuntu/Debian][8]
  * [Instalar y asegurar phpMyadmin con Nginx en Ubuntu][9]
  * [Configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian][10]
  * [Asegurar y cifrar nginx con vamos a cifrar en Ubuntu 20.04][11]
  * [Cómo instalar y configurar OwnCloud con Apache en Ubuntu][12]

  
[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
