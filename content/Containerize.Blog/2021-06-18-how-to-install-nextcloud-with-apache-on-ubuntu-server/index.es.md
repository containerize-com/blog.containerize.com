---
title: "Cómo instalar NextCloud con Apache en Ubuntu Server" 
seoTitle: "Cómo instalar NextCloud con Apache en Ubuntu Server" 
description: "NextCloud es una solución de almacenamiento de nube autohospedada de código abierto escrita en PHP. Este artículo mostrará cómo instalar NextCloud con Apache en Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud es un software de sincronización y colaboración de código abierto autohospedados. Este tutorial mostrará cómo instalar NextCloud con Apache en Ubuntu." 
url: /es/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud es un software de sincronización y colaboración autohospedado de archivos abiertos. Este tutorial mostrará cómo instalar NextCloud con Apache en Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Cómo instalar NextCloud con Apache en Ubuntn">}}


## **Descripción general**
** [NextCloud][1] ** es una solución de almacenamiento en la nube autohostada gratuita y segura ** escrita en el lenguaje de programación PHP. Proporciona acceso de datos utilizando la interfaz web y funcionalmente similar a Dropbox. Las soluciones de almacenamiento en la nube patentadas como Dropbox y Google Drive son convenientes, pero se pueden usar para recopilar datos personales porque sus archivos se almacenan en sus sistemas. Si necesita una solución de sincronización de archivos y compartir seguros, seguros y compatibles, puede cambiar a Open Source NextCloud Server. La configuración de NextCloud se puede instalar en sus servidores de inicio privados o en un servidor privado virtual.
NextCloud Open Source proporciona ** Cifrado de extremo a extremo **, significa que los archivos se pueden encriptar en el dispositivo cliente antes de cargarse en el servidor. También se puede integrar con una suite de oficina en línea como Collobora, OnlyOffice NextCloud para que pueda crear y editar sus archivos DOC, PPT, XLS directamente desde NextCloud Client. Puede compartir y sincronizar uno o más archivos y carpetas en su computadora con su servidor NextCloud después de la descarga del cliente NextCloud. La descarga de escritorio NextCloud y los clientes móviles proporcionan opciones para sincronizar y compartir todos los dispositivos bajo su control. Coloque los archivos de datos en sus directorios compartidos locales, y esos archivos se sincronizan inmediatamente con el servidor y en otros dispositivos utilizando el cliente de sincronización de escritorio NextCloud, la aplicación iOS o los dispositivos Android.
Este tutorial lo ayudará a instalar NextCloud en el sistema operativo Ubuntu 20.04 LTS Linux con Apache.
  *** Instalar requisitos previos (pila de lámparas) **
  *** Descargar NextCloud Archive en Ubuntu **
  *** Crear base de datos MySQL **
  *** Ejecutar el instalador web de NextCloud **
  * **Terminando**

## Paso 1: Instale requisitos previos (pila de lámparas)
Lo primero para instalar NextCloud en Ubuntu es que debe tener el servidor de lámpara ** ** en su sistema Ubuntu LTS. Inicie sesión en su sistema y acceda a la ventana del terminal. Si ya tiene ** pila de lámparas ** omita este paso, use los siguientes comandos para instalar las dependencias necesarias.

### Instalar PHP
Comencemos con la instalación de la versión 5.6 o superior PHP en su servidor Ubuntu:
actualización de sudo apt-get
sudo apt-get install -y php php-gd php-curl php-zip php-xml php-mbstring
Puede verificar la versión PHP usando el siguiente comando:
PHP -V
{{_LINE_29_}}

### instalar apache2
A continuación, instale Apache con el comando:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl reiniciar apache2
{{_LINE_34_}}

### instalar mysql
Con las dependencias fuera del camino, el siguiente paso a cuidar es asegurar el servidor de base de datos MySQL. Instale el servidor de base de datos MySQL ejecutando:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Paso 2: Descargar el archivo de NextCloud en Ubuntu
Al momento de escribir este artículo, la última versión de NextCloud es 22.0.0beta5. Después de configurar con éxito el servidor LAMP en su sistema, descargemos NextCloud desde su [sitio web oficial][2].
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
Una vez que se completa la descarga del servidor NextCloud, extraiga el archivo descargado en el documento del sitio web Root y configure la propiedad del directorio NextCloud a los datos www en archivos y directorios.
CD/VAR/WWW/HTML
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: data www nextcloud
sudo chmod -r 755 Nextcloud
{{_LINE_49_}}
Ahora, elimine el archivo de archivo descargado.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Paso 3: Crear base de datos MySQL
Después de extraer el código fuente, creemos una base de datos MySQL NextCloud y una cuenta de usuario para configurar NextCloud. Use el siguiente conjunto de comando para iniciar sesión en el servidor MySQL, cree la base de datos NextCloud, el usuario y salga desde la consola MySQL.
mysql -u raíz -p
Introducir la contraseña:
mysql> Crear base de datos NextCloud;
mySql> otorgar todo en NextCloud.* A 'NextCloud'@'localhost' identificado por 'Yasir_PA $$ w0rd_';
MySQL> privilegios de descarga;
mysql> salir
{{_LINE_61_}}

## Paso 4: ejecute el instalador web de NextCloud
En este punto, NextCloud instale Ubuntu 20.04 con éxito y configurado. Ahora, abra el directorio de configuración de NextCloud en el navegador web como a continuación y escriba la URL http://your-domain.com. Cambie localhost a la dirección IP o el nombre de dominio de su servidor. Verá la siguiente pantalla:
http: // localhost/nextcloud/o http: // your_domain_name/nextcloud/
{{_LINE_65_}}
Ingrese nuevas credenciales de administración para crear una cuenta de administración y proporcionar la ubicación de la carpeta de datos.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Cómo instalar NextCloud con Apache en Ubuntu Linux Server">}}

{{_LINE_69_}}
Ahora deslice su página hacia abajo e ingrese el nombre de la base de datos, el nombre de usuario de la base de datos, la contraseña y haga clic en el botón ** Finalizar Configuración **.
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Cómo instalar NextCloud Ubuntu 20.04 con Apache">}}

{{_LINE_73_}}
Una vez que la instalación haya terminado, debería ver el tablero de administración de NextCloud en la siguiente pantalla. Aquí puede crear un usuario, grupos, asignarles permisos, etc.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Instalación de NextCloud en Ubuntu con Apache">}}

{{_LINE_77_}}
Felicitaciones, tiene una solución de nube local de NextCloud en su sistema Ubuntu LTS. Ahora puede comenzar a personalizar su servidor en la nube para satisfacer perfectamente sus necesidades.

## ** Envolviendo: ** {#4a1a}
¡Felicidades! Ha configurado e instalado con éxito ** NextCloud en el servidor Ubuntu con Apache **. Has aprendido a crear una nube privada. NextCloud Ubuntu Server es una increíble plataforma de colaboración de almacenamiento en la nube que puede satisfacer casi las necesidades de almacenamiento en la nube privada o híbrida de cualquier persona. Ahora sabe cómo instalar NextCloud en Ubuntu y sus datos son seguros en su nube autohospedada. En nuestros próximos tutoriales, discutiremos sobre temas más interesantes relacionados con las pilas de soluciones del servidor web.
_ ¿Qué solución de almacenamiento autohospedada basada en la nube prefieres? Si tiene alguna pregunta, por favor [póngase en contacto][3] ._

## Explorar:
Es posible que desee seguir artículos relacionados con la administración diaria de su servidor.
  * [Cómo instalar y configurar OwnCloud con Apache en Ubuntu][4]
  * [Cómo configurar Apache como un proxy inverso para Ubuntu o Debian][5]
  * [Instalar y asegurar phpmyadmin con Nginx en Ubuntu][6]
  * [Asegurar y cifrar nginx con vamos en cifrado en Ubuntu 20.04][7]
  * [Configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian][8]
  * [Configurar nginx con pasajero en el servidor de producción de AWS][9]

  
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
