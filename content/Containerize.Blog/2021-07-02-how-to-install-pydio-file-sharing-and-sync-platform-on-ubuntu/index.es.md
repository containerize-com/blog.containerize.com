---
title: "Cómo instalar la plataforma de intercambio y sincronización de archivos Pydio en Ubuntu" 
seoTitle: "Cómo instalar la plataforma de intercambio y sincronización de archivos Pydio en Ubuntu" 
description: "Pydio es un intercambio de archivos de código abierto y un software de intercambio de documentos colaborativo autohostado. Revisemos cómo instalar la herramienta de intercambio de archivos y sincronización de Pydio." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio es una plataforma de intercambio y sincronización basada en la nube para acceder a todos los datos en cualquier lugar y en cualquier dispositivo. Este tutorial trata sobre cómo instalar Pydio en Ubuntu." 
url: /es/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio es una plataforma de intercambio y sincronización basada en la nube para acceder a todos los datos en cualquier lugar y en cualquier dispositivo. Este tutorial trata sobre cómo instalar Pydio en Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Cómo instalar la plataforma de intercambio y sincronización de archivos Pydio en Ubuntu">}}


## **Descripción general**
Pydio Cells es un software de intercambio de archivos y sincronización de código abierto. Proporciona un solo punto de acceso a todo su almacenamiento de datos y es una alternativa a OwnCloud y NextCloud que proporcionan servicios de almacenamiento, intercambio de archivos y sincronización. Pydio es una plataforma de intercambio de archivos de código abierto empresarial similar a Dropbox y otras plataformas de almacenamiento. Le ayuda a conectar de forma segura todos sus archivos y dispositivos en una sola plataforma.
Pydio Cells es una plataforma de sincronización y colaboración basada en la nube. Este software de código abierto se ejecuta en su infraestructura de TI personal y ayuda a su personal a proteger y monitorear sus datos comerciales. Puede sincronizar sus datos y acceder a ellos desde cualquier lugar utilizando una aplicación móvil, un software de escritorio o un navegador web utilizando celdas Pydio. La aplicación Pydio Cells Best File Sharing se basa en una arquitectura de micro-servicio y se escribe utilizando el lenguaje de programación de Golang.
Este tutorial lo ayudará a instalar y configurar el software de intercambio de archivos auto alojados de Pydio y la plataforma de sincronización en los sistemas Ubuntu LTS.
  * Empezando
  * Instalar servidor de lámparas
  * Instale Pydio en Ubuntu
  * Crear base de datos Pydio y usuario
  * Acceda a Pydio en tu navegador
  * Conclusión

## Paso 1: Comenzando
Antes de las instalaciones, debe asegurarse de que su sistema esté ejecutando los últimos paquetes. Use el comando a continuación para actualizar su servidor Ubuntu 20.04.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Después de la actualización, siempre se recomienda reiniciar su servidor para que los nuevos cambios entren en vigencia.
```
sudo reboot
```

## Paso 2: Instale el servidor de lámparas
Para configurar Pydio Secure Enterprise File Sharing Server y cómo crear una nube privada de código abierto, primero debemos configurar un servidor de lámparas en ejecución. Si ya ha instalado y ejecutando la pila de lámparas, omita este paso más use los comandos de seguimiento para configurar la lámpara en su sistema Ubuntu.

## # Instalar PHP
Puede instalar PHP en su sistema Ubuntu o Debian ejecutando comandos:
sudo apt-get install python-software-properties
Sudo Add-APT-Repository PPA: Ondrej/PHP
sudo apt-get instalación -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

## # instalar apache2
Apache es el software de servidor web de código abierto más utilizado. A continuación, instale el servidor web Apache en Ubuntu ejecutando:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

## # instalar mysql
El sistema de administración de bases de datos relacionales de código abierto MySQL es un componente de la pila de software de aplicaciones web de Lamp y otros. Ahora instalando MySQL en Ubuntu ejecutando a continuación:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
Una vez que se completa la instalación, abra **php.ini**  Archivo de configuración para editar. Use su editor de archivos preferido.
Realizar cambios en el archivo php.ini como se muestra a continuación. Abra dos archivos y realice los cambios como se muestra
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Hacer los siguientes cambios
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Guardar y cerrar el archivo y proceder a editar el otro archivo php.ini
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Paso 3: Instale Pydio en Ubuntu
Primero debe agregar el mejor repositorio de software de intercambio de archivos Pydio Best gratuito a su servidor Ubuntu 20.04 porque aún no está disponible. También agregue el mejor sistema de intercambio de archivos Pydio para la clave pública comercial y continúe para actualizar su repositorio de sistema.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Ahora es el momento de instalar Pydio EFSS y el software para compartir documentos. Ejecute el comando como se muestra
```
sudo apt install -y pydio pydio-all
```
Habilitar el módulo de reescritura de Apache utilizando los comandos mostrados a continuación y reinicie y habilite Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Confirme que el servicio Apache se ejecute utilizando el siguiente comando:
```
sudo systemctl status apache2
```
La salida debe ser como se muestra si la instalación se realizó correctamente, lo que demuestra que el servicio Apache2 se está ejecutando.

## Paso 4: Crear base de datos Pydio y usuario
Después de extraer código, ahora creemos una base de datos MySQL y una cuenta de usuario para configurar Pydio. Use el siguiente conjunto de comandos para iniciar sesión en el servidor MySQL para crear Ajaxplorer Sharesync o Pydio Database and User.
mysql -u raíz -p
Introducir la contraseña:
MySQL> Crear base de datos Pydio;
mysql> otorgar todo en pydio.* a 'pydio'@'localhost' identificado por '_password_';
MySQL> privilegios de descarga;
mysql> salir
{{_LINE_69_}}
A continuación, necesitamos instalar Pydio en Ubuntu desde la interfaz web para crear una nube privada.

## Paso 5: Acceda a Pydio en su navegador
Abra su navegador y escriba la URL _http: /// pydio_. Deberías ver una página como se muestra
El software de intercambio de archivos en la nube privado de Pydio y compartir archivos comerciales ahora está instalado y configurado, es hora de acceder a su interfaz web.
Abra su navegador y escriba URL http: // su servidor -ip / pydio. Serás redirigido a la siguiente página:

{{< figure align=center src="images/Pydio-Installer.png" alt="Instalador de Pydio">}}

Confirme todos los controles y haga clic en el botón **Continuar con la instalación de Pydio** . Debería ver la siguiente página:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Asistente de configuración de Pydio">}}

Seleccione su idioma y haga clic en **Iniciar asistente** . Debería ver la siguiente página:

{{< figure align=center src="images/Starting-the-setting.png" alt="Inicie la configuración de Pydio">}}

Ingrese el nombre del programa y el mensaje de bienvenida. Luego haga clic en el botón **Siguiente** . Debería ver la siguiente página:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Ingrese la aplicación Pydio">}}

A continuación, ingrese su cuenta de administrador y haga clic en el botón **siguiente** . Debería ver la siguiente página:

{{< figure align=center src="images/MySQL-database-settings.png" alt="Configuración de la base de datos MySQL">}}

Luego ingrese los detalles de su base de datos, como el nombre de la base de datos, el nombre de usuario y la contraseña. Luego haga clic en el botón **Probar DB Connection** . Debería ver la siguiente página:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Opciones avanzadas de Pydio">}}

A continuación, haga clic en el botón **Instalar pydio** . Una vez que la instalación se ha completado con éxito. Serás redirigido a la siguiente página:

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio Iniciar sesión">}}

Luego ingrese su nombre de usuario y contraseña para el administrador. Luego haga clic en el botón [Enter]. Debería ver la siguiente página:

¡Sí! Está hecho. Ahora sabe cómo instalar completamente la sincronización de archivos auto alojados de Pydio y el software de intercambio de archivos de código abierto en Ubuntu para construir una nube privada paso a paso similar a Dropbox o Google Drive.

## **Conclusión:** {#4a1a}
En este tutorial, ha instalado con éxito el intercambio de archivos seguros de código abierto de Pydio Cells Open en su sistema Ubuntu. Puede usar este artículo para crear una infraestructura en la nube para almacenar, asegurar y compartir sus archivos en la nube autohostada. Use el intercambio de documentos colaborativos de Pydio y la mejor aplicación gratuita para compartir archivos para obtener más control de sus datos y garantizar una colaboración eficiente en su organización empresarial. En nuestros próximos tutoriales, discutiremos temas más interesantes de soluciones de almacenamiento en la nube de código abierto y herramientas de colaboración para compartir archivos.
_Un puede unirse a nosotros en [Twitter][1], [LinkedIn][2] y nuestra página [Facebook][3]. ¿Qué plataforma de compartir de código abierto en Cloud Based_ _File usa en línea? Si tiene alguna pregunta, por favor_ [póngase en contacto][4].

## Explorar:
También tenemos varios otros artículos relacionados con la administración diaria de su servidor.
  * [Cómo configurar Apache como un proxy inverso para Ubuntu/Debian][5]
  * [Cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu][6]
  * [Asegurar y cifrar nginx con vamos en cifrado en Ubuntu 20.04][7]
  * [Configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian][8]
  * [Configurar nginx con pasajero en el servidor de producción de AWS][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
