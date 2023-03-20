---
title: "Cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu" 
seoTitle: "Cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu" 
description: "PhPMyAdmin es un software de gestión de bases de datos de código abierto escrito en PHP. Aprenderemos a instalar phpmyadmin con nginx y administrar mysql a través de phpmyadmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PhPMyAdmin es la herramienta de administración de bases de datos de interfaz web de código web de código abierto de código abierto escrita en PHP. En este tutorial, aprenderemos cómo instalar PhPMyAdmin con Nginx." 
url: /es/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PhPMyAdmin es la herramienta de gestión de la base de datos de interfaz web de código web de código abierto escrita en PHP. En este tutorial, aprenderemos cómo instalar PhPMyAdmin con Nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu">}}


## **Descripción general**
PhPMyAdmin es una herramienta de administración de bases de datos gratuitas y de código abierto que ofrece a los usuarios una interfaz web para administrar los servidores MySQL o MariadB a través de una interfaz intuitiva. Este es uno de los software ampliamente compatible que ofrece la mayoría de los proveedores de alojamiento populares para permitir que los administradores web para crear una base de datos en PhPMyAdmin y administrar bases de datos, ejecutar declaraciones SQL, importar y exportar datos fácilmente. Podrá acceder a sus bases de datos MySQL o MariadB en PhPMyadmin con Nginx a través de una interfaz web gráfica fácilmente, que se ejecuta junto con un entorno de desarrollo de PHP.
En esta guía, vamos a describir los pasos sobre cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu 20.04. Deberá instalar y configurar phpmyadmin en el servidor Ubuntu para dejar que funcione con bases de datos y tablas de MySQL fácilmente. Entonces, aprendamos cómo instalar y asegurar phpmyadmin con Nginx en Ubuntu 20.04 / 20.10:
  * Requisitos previos
  * Instalar phpmyadmin
  * Configurar la base de datos
  * Crear enlace simbólico
  * Acceso a PhPMyadmin
  * Crea MySQL Superuser
  * Asegurar phpmyadmin
  * Conclusión

## Paso 1: Requisitos previos {#ID-Prerequisitos}
Para seguir esta guía, necesitará el servidor Ubuntu 20.04 que se ejecuta en su computadora local o en un servidor remoto con requisitos previos.
  * Debe acceder al servidor como usuario no raíz con privilegios de sudo y habilitado UFW Firewall.
  * Se supone que ya ha instalado Nginx, MySQL y PHP en Ubuntu.
  * Como PhPMyAdmin utiliza credenciales de MySQL para autenticarse, también debe instalar certificados SSL/TLS para habilitar el tráfico cifrado entre el servidor y el cliente.
Con eso fuera del camino, comencemos a instalar y asegurar phpMyadmin para conectarse al servidor MySQL para acceder a la base de datos a través de la interfaz web.

## Paso 2: Instale PhPMyadmin {#ID-1-Install-PhpMyadmin}
Asegúrese de haber instalado con éxito todos los requisitos previos en su sistema antes de instalar phpmyadmin en Ubuntu 20.04. Comience actualizando la lista de paquetes:
```
sudo apt update 
```
Ahora, ejecute el siguiente comando para instalar el paquete PhPMyAdmin desde los repositorios de Ubuntu predeterminados en Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
Presione ** y ** y ** Enter ** Cuando se le pide que continúe. Si se le solicita que elija un servidor web, ya que no hay opción para ** Nginx ** como a continuación, presione ** pestaña ** para seleccionar OK y luego ** Ingrese ** para continuar sin seleccionar un servidor web.

{{< figure align=center src="images/mysql-setup.png" alt="Instale y asegure phpmyadmin para Nginx en Ubuntu 20.04">}}


## Paso 2: Configurar la base de datos {#ID-1-Install-PhpMyadmin}
A continuación, seleccione ** Sí ** y presione ** Ingrese ** para instalar y configurar la base de datos utilizando la herramienta DBConfig-Common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Cómo configurar mysql con phpmyadmin">}}

La contraseña de la aplicación MySQL es utilizada internamente por PhPMyAdmin para comunicarse con la base de datos MySQL. Ingrese una nueva contraseña para PhPMyAdmin DBMS para registrarse como la nueva base de datos, seleccione Aceptar y presione ENTER para continuar.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Cómo configurar mysql para phpmyadmin">}}

Se le solicitará que confirme la contraseña, ingrese la misma contraseña, seleccione ** Aceptar ** y presione ** Enter **. ¡Felicidades! PhPMyAdmin se ha instalado con éxito en su sistema.

## Paso 4: Crear enlace simbólico {#id-2-create-symbolic-link}
Hay varias formas en cómo configurar el Nginx para servir a los archivos PhPMyAdmin. Si el bloque de servidor de su dominio ya está configurado para atender las solicitudes PHP, debe crear un enlace simbólico desde los archivos de instalación PhPMyadmin Nginx/USR/Share/PHPMyAdmin a su directorio raíz de documento de dominio. La ubicación predeterminada de la raíz del documento NGINX en Ubuntu 20.04/20.10 debe ser/var/www/html/y podría ser diferente dependiendo de su configuración de INS. La raíz de su documento puede ubicarse, por ejemplo, en /var/www/example.com/public_html.
A continuación, crearemos un enlace simbólico desde el directorio phpmyadmin/usr/share/phpmyadmin a su raíz de documento. Aquí asumiremos que nuestra raíz del documento es/var/www/html/y simplemente agregaremos phpmyadmin al final de esto. Esto nos permitirá acceder a phpmyadmin en url ejemplo.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Paso 5: Acceder a phpmyadmin {#id-3-test-phpmyadmin}
Ahora debería poder acceder a la interfaz web PhPMyAdmin visitando el host/nombre de dominio o la dirección IP pública de su servidor seguido de dominio.com/phpmyadmin en su navegador web favorito. Por ejemplo, http://example.com/phpmyadmin o http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
En los servidores Ubuntu que se ejecutan con MySQL 5.7 y más tarde, no podrá iniciar sesión en la base de datos PhPMyAdmin gratuita utilizando la cuenta raíz predeterminada de MySQL y obtendrá un error como _ "Acceso denegado por el usuario" root "@’ localhost "". En su lugar, debe crear una nueva cuenta de Superuser solo para PhPMyAdmin. A continuación, crearemos una cuenta root de MySQL para iniciar sesión en phpmyadmin.

## Paso 6: Crea MySQL Superuser {#id-4-create-mysql-superuser}
En Terminal, inicie sesión en MySQL usando su contraseña de root MySQL que puede haber creado una contraseña de root cuando instaló la base de datos PhPMyAdmin MySQL por primera vez.
```
sudo mysql -u root -p
```
Después de iniciar sesión en MySQL, agregue un nuevo superusor MySQL con el nombre de usuario de su elección. En este ejemplo lo llamamos Yasiradmin. [Haga clic aquí para generar una contraseña segura][2] y reemplace la nueva \ _Password \ _here a continuación con ella.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Ahora otorgue privilegios de superusuario a nuestro nuevo usuario Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Ahora salga de la sesión MySQL. Ahora debería poder acceder a PhPMyAdmin utilizando estas nuevas credenciales de Superuser.

{{< figure align=center src="images/image.png" alt="Cómo iniciar sesión phpmyadmin en Ubuntu 20.04">}}

Se recomienda encarecidamente que configure una seguridad adicional para PhPMyadmin para asegurar phpmyadmin nginx. Debería poder cambiar y acceder a la URL de PhPMyadmin a algo como URL oscuro.

## Paso 7: PhpMyadmin seguro {#ID-6-SECURE-PHPMYADMIN OBDEMANDO}
A continuación, queremos configurar la autenticación en Nginx para proporcionar una capa adicional de seguridad. Ahora instalaremos Apache2-Utils, que pueden generar el archivo .htpasswd que funciona con los servidores Nginx y Apache2.
```
sudo apt install apache2-utils
```
Una vez instalado, podemos generar el archivo .htpasswd. Cambie el nombre de usuario de su elección. [Genere una contraseña][3] y manténgala segura.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Ahora habrá un archivo .htpasswd que contiene su nombre de usuario y contraseña cifrada. Puede verificar esto con el siguiente comando:
```
cat /etc/nginx/.htpasswd
```
Debería ver algo como el nombre de usuario: $ APR1SDFSDF4435SDTSKLFWMMG1SFDSDGG4
Ahora necesitamos agregar 2 directivas a nuestro archivo de configuración NGINX. La ubicación del archivo de configuración puede variar según sus instalaciones, aunque la ruta de archivo predeterminada generalmente es AT/ETC/NGINX/Sites-Available/Default. Si configura varios dominios, su archivo de configuración puede ubicarse en algún lugar como /etc/nginx/sites-available/example.com
En este ejemplo, asumiremos que el archivo de configuración NGINX es AT/ETC/NGINX/Sites-Available/Default. Abra el archivo para editarlo.
```
sudo nano /etc/nginx/sites-available/default
```
Desplácese hacia abajo y busque los bloques de ubicación y pegue en un nuevo bloque debajo de ellos con el nombre de su carpeta PhPMyadmin oscura, en este ejemplo Aspose_hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Guarde el archivo y salga (presione CTRL + X, presione Y y luego presione ENTER). Verifique que el archivo de configuración NGINX sea válido, de lo contrario, el servidor podría bloquearse en el reinicio ejecutando el comando.
```
sudo nginx -t
```
Si es válido, recargue la configuración Nginx.
```
sudo service nginx reload
```
Ahora, al visitar Ej ..com/aspose_hidden, se le debe presentar una ventana de autenticación.

{{< figure align=center src="images/auth3.png" alt="Cómo asegurar phpmyadmin">}}

Todo ha terminado con las instalaciones de PhPMyAdmin en el servidor Ubuntu.

## Conclusión: {#id-what-next}
Felicitaciones, ha instalado con éxito PhPMyAdmin con Nginx para el servidor Ubuntu 20.04 / 20.10 y ahora puede administrar MySQL a través de PhPMyAdmin. Ahora, puede comenzar a crear bases de datos MySQL, usuarios, tablas, realizar consultas MySQL y varias otras operaciones.
Si tiene preguntas, no dude en decirme a continuación en la sección de comentarios.

## Explorar
También puede que le gusten los artículos más relacionados:
  * [Cómo configurar Apache como un proxy inverso para Ubuntu/Debian][4]
  * [Cómo asegurar y cifrar a Nginx con Cifrar en Ubuntu 20.04][5]
  * [Cómo configurar el soporte HTTP/2 en Nginx en Ubuntu/Debian][6]
  * [Cómo configurar Nginx con pasajero en el servidor de producción de AWS][7]
  * [Cómo instalar y configurar OwnCloud con Apache en Ubuntu][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
