---
title: "Cómo instalar y configurar OwnCloud con Apache en Ubuntu" 
seoTitle: "Cómo instalar y configurar OwnCloud con Apache en Ubuntu" 
description: "OwnCloud es un software de servidor cliente de código abierto para crear servicios de alojamiento de archivos. En este tutorial, aprenderemos a instalar y configurar OwnCloud en Ubuntu" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud es una colección de código abierto de software cliente-servidor para crear servidores de alojamiento de archivos. Este tutorial trata sobre cómo configurar OwnCloud en Ubuntu." 
url: /es/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud es una colección de código abierto de software cliente-servidor para crear servidores de alojamiento de archivos. Este tutorial trata sobre cómo configurar OwnCloud en Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **Descripción general**
OwnCloud es una aplicación web de origen abierta sólida y popular gratuita escrita en PHP que se utiliza para la sincronización de datos y el intercambio de archivos. También le permite administrar fácilmente archivos de datos, contactos, calendarios, listas de tareas y muchas más. Es una gran alternativa a las plataformas en la nube más populares como Google Drive, Dropbox, iCloud y otros servicios de almacenamiento en la nube. Pero a diferencia de los otros servicios de almacenamiento en la nube, OwnCloud Self Hosted es gratuito para crear su propia nube de host.
OwnCloud es un software de nube privado de código abierto que proporciona acceso a datos utilizando la interfaz web para crear una nube privada. Le permite crear su propio servidor de intercambio de archivos donde puede ver y sincronizar fácilmente eventos calendario, archivos, imágenes, grabaciones, tareas, libros de direcciones con marcadores, similares a Dropbox y Google Drive. También proporciona opciones para sincronizar y compartir datos en todos los dispositivos, todos bajo su control. Instalar y configurar OwnCloud admite sus datos sincronizados para clientes de escritorio, así como dispositivos de aplicaciones móviles. Además, puede implementar fácilmente restricciones de acceso de usuario y agrupar en archivos por usuario que usan OwnCloud en Ubuntu. OwnCloud Open Source Storage Storage Server es una aplicación de plataforma cruzada y se puede instalar en todos los sistemas operativos populares.
Este tutorial lo ayudará a configurar OwnCloud y configurar OwnCloud en los sistemas Ubuntu LTS.
  * Instalar servidor de lámparas
  * Descargar OwnCloud
  * Crear base de datos MySQL y usuario
  * Instalar OwnCloud
  * ¿Cuáles son las mejores alternativas para OwnCloud?
  * Conclusión

## Paso 1: Instale el servidor de lámparas
Para configurar su propio servidor en la nube y cómo crear una nube privada, primero debemos configurar un servidor de lámparas en ejecución. Si ya ha instalado y ejecutando la pila de lámparas, omita este paso más use los comandos de seguimiento para configurar la lámpara en su sistema Ubuntu.

### Instalar PHP
Puede instalar PHP 5.6 o versión superior en su sistema Ubuntu o Debian ejecutando comandos:
sudo apt-get install python-software-properties
Sudo Add-APT-Repository PPA: Ondrej/PHP
actualización de sudo apt-get
sudo apt -get actualización -y
sudo apt-get instalación -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### instalar apache2
Apache es el software de servidor web de código abierto más utilizado. A continuación, instale el servidor web Apache en Ubuntu para configurar su propio servidor en la nube ejecutando:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### instalar mysql
El sistema de administración de bases de datos relacionales de código abierto MySQL es un componente de la pila de software de aplicaciones web de Lamp y otros. Ahora instalando MySQL en Ubuntu ejecutando a continuación:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## Paso 2: Descargar OwnCloud en Ubuntu
Después de configurar con éxito el servidor de lámparas en su sistema Ubuntu, descargemos la última solución de almacenamiento de nube privada de OwnCloud de su [sitio web oficial][1].
CD /TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
Después de descargar el software del servidor de OwnCloud, ahora extrae el archivo descargado en el sitio web Document Root y configure los permisos apropiados en archivos y directorios ejecutando para instalar OwnCloud en Ubuntu.
CD/VAR/WWW/HTML
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data: www-data Owncloud
sudo chmod -r 755 Owncloud
{{_LINE_50_}}
Ahora, elimine el archivo de archivo y reinicie el servidor Apache.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl reiniciar apache2

## Paso 3: Crear base de datos y usuario de OwnCloud
Después de extraer código, ahora creemos una base de datos MySQL y una cuenta de usuario para configurar OwnCloud Personal Cloud Storage Server. Use el siguiente conjunto de comandos para iniciar sesión en el servidor MySQL para crear OwnCloud Database and User.
mysql -u raíz -p
Introducir la contraseña:
mySQL> Crear base de datos OwnCloud;
mySql> otorgar todo en OwnCloud.* A 'OwnCloud'@'localhost' identificado por '_password_';
MySQL> privilegios de descarga;
mysql> salir
{{_LINE_62_}}
A continuación, necesitamos instalar OwnCloud en Ubuntu desde la interfaz web para crear una nube privada.

## Paso 4: Instale OwnCloud en Ubuntu
Ahora acceda al Directorio de panel web de OwnCloud Best Personal Cloud Server en un navegador web. Cambie localhost a la dirección IP o el nombre de dominio de su servidor.
http: // localhost/owncloud/
{{_LINE_67_}}
Debería ver la página de inicio de sesión de OwnCloud de código abierto. Ingrese las credenciales de nombre de usuario y contraseña de nuevo administrador para crear una cuenta de administrador y proporcionar la ubicación de la carpeta de datos. Si todo está bien, entonces debe obtener la página web como esta.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Instale OwnCloud con Apache en Ubuntu">}}

{{_LINE_71_}}
Ahora deslice su página hacia abajo. En el siguiente formulario, debe ingresar el nombre de usuario y la contraseña para administrar el mejor panel de Cloud Server Personal Cloud Server. También proporcione la base de datos junto con el nombre de usuario y la contraseña para conectar el servidor OwnCloud con el servidor de la base de datos, la ubicación de la carpeta de datos y haga clic en **Finalizar configuración** .
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Configurar OwnCloud en Ubuntu">}}

{{_LINE_75_}}
Después de completar la configuración, obtendrá el tablero de administración. Donde puede crear usuarios, grupos y asignarles permisos, etc.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Instalar el panel de OwnCloud">}}

{{_LINE_79_}}
¡Sí! Hemos terminado con OwnCloud Installation Guide para crear almacenamiento personal en la nube. Ahora sabe cómo instalar completamente OwnCloud en Ubuntu para construir una nube privada paso a paso similar a Dropbox o Google Drive.

## **¿Cuáles son las mejores alternativas para OwnCloud?**    {#4A1A}
Los siguientes son las alternativas propias y del software de alojamiento de archivos de competidores autopendiados.
  ***SEAFILE**  ES SISTEMA DE SOFTWARE DE ALTENCIÓN DE ARCHIVO CON CONTRAJE DE CORRECTO DE OPOR
  ***NextCloud**  es una plataforma de almacenamiento en la nube gratuita y de código abierto
  ***Resilio Sync**  es una aplicación de sincronización de archivos de código abierto de código abierto
  ***Celdas Pydio**  es un software de intercambio de archivos y sincronización de código abierto
  ***Syncthing**  es una aplicación de sincronización de archivos entre pares de código abierto y de código abierto

## **Conclusión:**    {#Block-DD1258F4-E0C5-4AC9-BE18-7DD2A700F09E}
¡Felicidades! Ha instalado y configurado con éxito OwnCloud para construir su propia nube privada con Apache en Ubuntu Machine. Ahora sus datos nunca están en manos de terceros y se pueden administrar en privado en el almacenamiento de servidor privado de Ubuntu de Cloud Virtual Cloud. Muchas compañías eligen crear sus propios servidores de Cloud con mucha información vital debido a muchos problemas con la privacidad de los datos. En nuestros próximos tutoriales, discutiremos temas más interesantes de las pilas de soluciones de servidor web.
_Un puede unirse a nosotros en [Twitter][2], [LinkedIn][3] y nuestra página [Facebook][4]. ¿Qué solución de almacenamiento basada en la nube usa en línea? Si tiene alguna pregunta, por favor_ [póngase en contacto][5].

## Explorar:
También tenemos varios otros artículos relacionados con la administración diaria de su servidor.
  * [Cómo configurar Apache como un proxy inverso para Ubuntu/Debian][6]
  * [Cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu][7]
  * [Asegurar y cifrar nginx con vamos a cifrar en Ubuntu 20.04][8]
  * [Configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian][9]
  * [Configurar nginx con pasajero en el servidor de producción de AWS][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
