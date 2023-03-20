---
title: "Cómo configurar Apache como un proxy inverso para Ubuntu/Debian" 
seoTitle: "Cómo configurar Apache como un proxy inverso para Ubuntu/Debian" 
description: "La configuración de proxy inversa de Apache, paso a paso, le permite ejecutar uno o más servidores de back -end detrás de un servidor proxy con mod_proxy en Ubuntu/Debian Linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxy le permite ejecutar uno o más servidores de fondo detrás de un servidor proxy. Aquí le mostramos cómo configurar Apache Reverse Proxy en el sistema Ubuntu/Debian." 
url: /es/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxy le permite ejecutar uno o más servidores de fondo detrás de un servidor proxy. Aquí le mostramos cómo configurar Apache Reverse Proxy en el sistema Ubuntu/Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Instale y configure Apache Reverse Proxy">}}


## **Descripción general**
Apache Reverse Proxy permite que todo el tráfico y lo reenvíe ejecutar uno o más servidores o contenedores de backend detrás de un servidor proxy, sin exponerlos públicamente. El servidor web de back-end puede ser otro servidor HTTP de código abierto como Nginx. APOCHE2 HTTP Server es uno de los servidores web de código abierto más popular que se utiliza hoy.
Hay muchas razones para instalar y configurar un servidor proxy. Por ejemplo, el proxy inverso puede ayudarlo a agregar seguridad, para el equilibrio de carga, restringir el acceso a ciertas ubicaciones para evitar ataques y muchos más. Este artículo explica cómo instalar y configurar la configuración de proxy inversa de Apache paso a paso para el servidor HTTPS en Ubuntu/Debian:
  * Instalación de apache2
  * Configurar apache2
  * Habilitar sus módulos proxy
  * Habilitar el SSL
  * Reiniciar apache2
  * Conclusión

## Paso 1: instalar apache2
Instalar apache2 es muy simple y fácil de ejecutar. Para hacer instalaciones, ejecute los comandos a continuación simplemente:
actualización de sudo apt-get
sudo apt-get install apache2
{{_LINE_25_}}
Después de instalar APACHE2 en su sistema, use los siguientes comandos SystemCTL en Debian Linux o Ubuntu Linux Version Ubuntu para detener, iniciar, habilitar y reiniciar APACHE2 para reiniciar siempre cuando el servidor se inicie.
sudo systemctl detener apache2.service
sudo systemctl iniciar apache2.service
sudo systemCTL habilita apache2.service
sudo systemctl reiniciar apache2.service
{{_LINE_31_}}
Puede ver el estado del servidor web utilizando el siguiente comando:
sudo systemctl status apache2.service
{{_LINE_34_}}
Para verificar la configuración de Apache2, abra su navegador y navegue al nombre de host del servidor o la dirección IP de su sistema y debería ver la página de prueba predeterminada de Apache2 como se muestra a continuación. Cuando ves eso, entonces Apache2 funciona como se esperaba. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Instale y configure Apache Reverse Proxy Proxy para Ubuntu">}}


## Paso 2: Configurar apache2 como proxy inverso
Apache2 está instalado y listo para usar con éxito. Ahora puede configurar Apache2 para funcionar como un proxy reverso de apache2 Ubuntu. La función ** proxyPass ** y ** proxyPassReverse ** ** de apache2 módulo ** proporciona un proxy inverso. Para usar ** proxyPass ** y ** proxyPassReverse **, primero debe saber que dónde desea dirigir el tráfico del sitio.
El servidor proxy inverso APOCHE2 escuchará todo el tráfico en el puerto HTTP predeterminado, que es el puerto 80 en una configuración simple. El servidor de back-end que aloja el contenido del sitio web escuchará en un puerto personalizado y es muy probable que sea el puerto 8080.
En este artículo del blog, configuraremos Apache2 para escuchar en el puerto 80 y luego dirigir el tráfico al servidor de back-end que escucha en el puerto 8080. Ejecute el siguiente comando para crear un archivo proxy virtualhost llamado apache2proxy.conf.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Luego agregue el siguiente bloque de códigos en el archivo apache2proxy.conf y luego guárdelo.
{{_LINE_43_}}
        Servername Ejemplo.com
        Serveralias www.example.com
        Serveradmin webmaster@example.com
        ErrorLog $ {apache_log_dir} /error.log
        CustomLog $ {apache_log_dir} /access.log combinado
        ProxyRequests Off
{{_LINE_50_}}
          Ordenar negar, permitir
          Permitir de todos
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        ProxyPassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Ordenar permitir, negar
          Permitir de todos
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
El archivo apache2proxy.conf contiene el nombre de su servidor, así como el proxy_pass, donde el tráfico se dirigirá cuando el servidor proxy http reciba.

## Paso 3: habilitar apache2 proxy
El servidor web APACHE2 ahora está instalado y configurado correctamente. Apache tiene muchos módulos bundlados disponibles inclinados con él. Estos módulos no están habilitados en la instalación fresca de Apache2. Primero deberemos habilitar los módulos que necesitamos para habilitar el módulo apache mod_proxy requerido y varios de sus módulos complementarios para admitir diferentes protocolos de red. Ejecute los comandos enumerados a continuación para habilitar sus módulos proxy HTTP.
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
Ahora habilite el sitio VirtualHost y reinicie Apache2 para habilitar la configuración de los módulos APOCHE2.
sudo a2ensite apache2proxy.conf
sudo systemctl reiniciar apache2.service
Inicie un navegador web de su elección y navegue al nombre de host de su servidor como Ejemplo.com. Ahora se presentará a su servidor Apache2 en el puerto predeterminado, es decir, 8080.

## Paso 4: Habilite el SSL {#Block-07B86D83-DCA0-4924-B991-206719C342EB}
Si desea habilitar el módulo Apache Reverse Proxy SSL, ejecute el comando a continuación para habilitar Apache Reverse Proxy https proxy pase:
sudo a2enmod ssl
Esto proporcionará Apache Reverse Proxy HTTP seguro al soporte HTTPS para los servidores de backend.

## Paso 5: Reiniciar Apache2 {#Block-836BB4FF-17ad-4317-8ECB-153104BD28A7}
Para realizar estos cambios en efecto, reinicie Apache ejecutando el siguiente comando:
sudo systemctl reiniciar apache2.service
¡Felicidades! Ha instalado y configurado con éxito el proxy inverso de Apache2 en su sistema Linux.

## ** Conclusión: ** {#4a1a}
En este tutorial, exploramos y discutimos lo que es un servidor proxy y apache, la configuración del proxy de proxy paso a paso. También aprendimos a configurar y configurar Apache2 como un proxy inverso en un sistema Linux. En nuestros próximos tutoriales, discutiremos temas más interesantes sobre Apache y otras pilas de soluciones de servidor web.

## Explorar
También puede que le gusten los artículos más relacionados:
  * [Cómo][1][Instalar y asegurar phpmyadmin con Nginx en Ubuntu][2]
  * [Cómo configurar Nginx con pasajero en el servidor de producción de AWS][3]
  * [Configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian][4]
  * [Asegurar y cifrar nginx con vamos a cifrar en Ubuntu 20.04][5]
  * [Cómo instalar y configurar OwnCloud con Apache en Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/es/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
