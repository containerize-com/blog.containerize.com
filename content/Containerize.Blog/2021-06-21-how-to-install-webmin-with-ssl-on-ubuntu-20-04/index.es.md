---
title: "Cómo instalar Webmin con SSL en Ubuntu 20.04" 
seoTitle: "Cómo instalar Webmin con SSL en Ubuntu 20.04" 
description: "Webmin es una herramienta de administración de sistemas basada en la web para sistemas similares a UNIX. En este artículo aprenderemos cómo instalar Webmin con SSL en Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin es una herramienta de administración de sistemas basada en la web que es una alternativa simple a la administración del sistema de línea de comandos. Este artículo guía cómo instalar webmins" 
url: /es/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Cómo instalar webmin">}}


## Webmin es una herramienta de administración de sistemas basada en la web que es una alternativa simple a la administración del sistema de línea de comandos. Este artículo guía cómo instalar webmins
Con este artículo "Cómo instalar Webmin con SSL en Ubuntu 20.04", estamos comenzando nuestra nueva serie de tutoriales sobre software y herramientas de alojamiento web. Con Webmin puede configurar cuentas de usuario, habilitar el intercambio de archivos, configurar la configuración de Apache y DNS, y realizar muchas más tareas relacionadas con el alojamiento web. Le permite administrar todo el servidor de alojamiento web. Elimina el problema de editar archivos de configuración de Linux manualmente. Así que aprendamos a instalar Webmin con SSL.
  *** [Introducción a Webmin][1] **
  *[** Características resaltadas **][2]
  *[** Sistemas operativos compatibles **][3]
  *[** Instale Webmin en Ubuntu **][4]
  *[** Instale Apache usando Webmin **][5]
  *[** Conclusión **][6]

## Introducción a Webmin {#Intro}
Webmin es una interfaz basada en la web para la administración del sistema para Linux. Le ayuda a administrar su propio servidor de alojamiento de forma remota desde cualquier navegador web moderno. Con Webmin, puede configurar las partes internas del sistema operativo, como cuentas de usuario, Apache, DNS, intercambio de archivos y mucho más. Webmin también permite controlar muchas máquinas a través de una sola interfaz, o inicio de sesión sin problemas en otros hosts Webmin en la misma subred o LAN. Webmin, basada en Perl, se ejecuta como su propio proceso y el servidor web. Y la mejor parte de Webmin es su 100% gratuito y de código abierto y tiene una comunidad de desarrolladores muy próspera.

## características resaltadas {#Feature}
  * Le permite crear y editar dominios, registros DNS, opciones de enlace y vistas.
  * Ayuda a configurar un firewall creando y editando reglas con IPFW.
  * Permítete configurar los scripts para ejecutar al momento de arranque desde /etc/init.d o /etc/rc.local
  * Puede programar la transferencia de archivos del servidor a múltiples servidores
  * Le permite instalar paquetes RPM, Debian y Solaris en múltiples servidores de una fuente
  * Proporciona acceso a informes como uso de ancho de banda, cargas, descargas, visitantes, etc.
  * Puede crear trabajos cron programados que se ejecutan en varios servidores simultáneamente
  * Le permite ejecutar comandos en varios servidores a la vez
  * Le permite configurar y editar cuotas de disco de usuario o grupo para sistemas de archivos locales
  * Incluye los sistemas de archivos de copia de seguridad y restauración utilizando el volcado y restaurar la familia de comandos
  * Uso de un administrador de archivos similar a Windows, puede ver, editar y cambiar permisos en archivos y directorios en su servidor
  * Puede configurar el servidor de protocolo de ubicación de servicio
  * Ver, editar y cambiar permisos en archivos y directorios en su sistema con un administrador de archivos tipo Windows
  * Ayuda a configurar túneles SSL para cifrar servicios como POP3 e IMAP, utilizando Stunnel Run desde Inetd.

## Sistemas operativos compatibles {#Support}
Debido a que diferentes sistemas operativos similares a UNIX y distribuciones de Linux utilizan diferentes ubicaciones para sus diversos archivos de configuración, Webmin solo puede admitir sistemas para los cuales se ha configurado. Los siguientes sistemas operativos son compatibles con la versión 1.979 de Webmin:
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * Aplinux
  * Asianux
  * Servidor asianux
  * Gran cuadra
  * BSDI
  * Caixa Magica
  * Caldera Openlinux
  * Caldera OpenLinux Eserver
  * Caos Linux
  * Cendio LBS Linux
  * Centos Linux
  * Citrix Hypervisor
  * CloudLinux
  * Cloudrouter Linux
  * Cobalt Linux
  * Tecnología coherente Linux
  * Conectiva Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * DEC/COMPAQ OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Endian Firewall Linux
  * Fedora Linux
  * FreeBSD
  * Linux genérico
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * Linux Mint
  * Linuxppc
  * Desktop de Lycoris/LX
  * Mac OS X
  * MacOS Catalina
  * MacOS High Sierra
  * MacOS MOJAVE
  * MacOS Sierra
  * Mageia Linux
  * Mandrake Linux
  * Servidor corporativo de Mandrake Linux
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * Mayormente Linux
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * Openna Linux
  * OpenSuse Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X
  * Pardus Linux
  * Pclinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Desktop Redhat Linux
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Linux científico
  * SCO OpenServer
  * SCO Unixware
  * Asegure Linux
  * SGI IRIX
  * Slackware Linux
  * SLAMD64 LINUX
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Startcom Linux
  * Sistema de escritorio de Sun Java
  * Sun Solaris
  * SUSE LINUX
  * Suse OpenExchange Linux
  * SUSE SLES LINUX
  * Synology DSM
  * Tao Linux
  * Tawie Server Linux
  * Desktop Thizlinux
  * Thizserver
  * Tinysofa Linux
  * Trustix
  * Trustix SE
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * White Dwarf Linux
  * Whitebox Linux
  * Wind River Linux
  * Windows
  * X/os linux
  * Xandros Linux
  * XCP-NG Linux
  * Xenserver Linux
  * Dog amarillo Linux
  * Yoper Linux
Los sistemas mejor respaldados en este momento son Solaris, Linux (Redhat en particular) y FreeBSD.

## Instale Webmin en Ubuntu {#Install}
Para instalar Webmin, deberá tener acceso a un usuario con ** root ** privilegios. Se recomienda que configure un usuario no raíz con el acceso ** sudo **.
Primero SSH en su servidor usando el siguiente comando
```
ssh user@server_IP_address
```
Para instalar Webmin a través de _apt-get_, primero debe agregar el repositorio de Webmin a su archivo _sources.list_. En su servidor, abra el archivo _sources.list_ en su editor de texto favorito. Usaremos VIM en este tutorial:
```
sudo vi /etc/apt/sources.list
```
Una vez que se abra el archivo, agregue las siguientes líneas al final del archivo.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Ahora agregue la tecla GPG Webmin a APT, por lo que se confiará en el repositorio de origen que agregó. Este comando hará eso:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Antes de instalar Webmin, debe actualizar las listas de paquetes de Apt-Get:
```
sudo apt-get update
```
Ahora ejecute este comando apt-get para instalar webmin:
```
sudo apt-get install webmin 
```
Ingrese y para confirmar la instalación. Después de completar la instalación, el servicio Webmin se iniciará automáticamente. Y la interfaz web se ejecutará en el puerto 10000. Puede acceder a la interfaz utilizando la siguiente URL.
```
https://server_IP_address:10000
```
Se le solicitará una advertencia que dice que no se confía en el certificado SSL de su servidor. Esto se debe a que Webmin genera e instala automáticamente un certificado SSL después de la instalación, y el certificado no fue emitido por una autoridad de certificado que confía en su computadora. Está bien proceder. Indique a su navegador web que confíe en el certificado.
En este punto, verá la pantalla de inicio de sesión de Webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="Instalar webmin">}}

Cuando inicie sesión por primera vez en Webmin, se lo llevará a la página ** Información del sistema **. Le brinda una visión general de los recursos de su sistema y otra información diversa.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Instalar información del sistema webmins">}}


## Instale Apache usando webmin {#install-apache}
Webmin viene con una gran variedad de módulos que administran diferentes paquetes de software. Para instalar Apache usando Webmin, siga las instrucciones a continuación
** Paso 1 **: En el menú de navegación, haga clic en ** Módulos no utilizados ** para expandir la categoría y luego haga clic en ** Apache WebServer **.
Si no tiene Apache instalado en su servidor, el módulo le notificará y le proporcionará una forma de instalar Apache.
** Paso 2 **: Use el enlace ** Haga clic aquí ** (en la última oración) para instalar Apache a través de apt-get a través de Webmin.
Después de que se complete la instalación de Apache, su servidor ejecutará el servidor Apache predeterminado.

## conclusión {#conclusion}
Este artículo analiza brevemente numerosas cosas que Webmin puede hacer, Webmin es una de las mejores herramientas para administrar sus servidores Linux/Unix. En este tutorial también aprendimos a instalar Webmin en Ubuntu, y también discutimos cómo instalar Apache en su servidor usando Webmin.

## Explorar
  * [Cómo instalar múltiples versiones de PHP con Nginx en Ubuntu][7]
  * [Cómo configurar y configurar Nginx como proxy inverso][8]

  
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
