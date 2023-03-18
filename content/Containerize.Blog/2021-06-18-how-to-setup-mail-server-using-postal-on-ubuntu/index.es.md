---
title: "Cómo configurar el servidor de correo usando Postal en Ubuntu" 
seoTitle: "Cómo configurar el servidor de correo usando Postal en Ubuntu" 
description: "Envíe correos electrónicos desde sus aplicaciones web con el servidor de correo de código abierto. Postal le permite enviar correos electrónicos utilizando la API SMTP y HTTP, y monitorear el tráfico de correo electrónico también." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Envíe y reciba correos electrónicos con un servidor de correo de código abierto. Este artículo lo ayudará a instalar y configurar el servidor de correo postal para su empresa." 
url: /es/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Enviar y recibir correos electrónicos con un servidor de correo de código abierto. Este artículo lo ayudará a instalar y configurar el servidor de correo postal para su empresa.

{{< figure align=center src="images/postal-banner.png" alt="Servidor de correo de código abierto">}}

El envío de correos electrónicos a diferentes tipos de eventos es necesario para aplicaciones modernas. Cada negocio necesita un servidor de correo ** confiable ** para correos electrónicos salientes. Además, las empresas necesitan un servidor de correo para enviar correos electrónicos a granel para campañas de marketing, boletines y muchas otras tareas. Hay varios ** Servidor de correo de código abierto ** disponible para esto. Sin embargo, discutiremos el servidor postal ** ** en detalle en esta publicación y cubriremos los siguientes temas.
  * [¿Qué es el servidor de correo postal?] [1]
  * [Características del postal] [2]
  * [Instalación postal] [3]
  * [Conclusión] [4]

## ¿Qué es el servidor de correo postal? {#Postal}
[** Postal **] [5] es un servidor de correo de código abierto gratuito y ** **. Es un servidor de correo completo para sitios web y aplicaciones web. Postal Mail Server es una alternativa al popular servidor de correo popular ** ** como SendGrid y Mailgun. ** Postal ** es una plataforma de entrega de correo electrónico de código abierto robusta, segura y escalable. Todo el código fuente y la documentación están disponibles en [** GitHub **] [6]. Puede descargarlo, instalarlo en su servidor privado y mantener el control completo sobre él. También puede mejorar y mejorarlo según las necesidades comerciales. Además, ** Postal Mail Server ** admite múltiples organizaciones.
Los usuarios pueden ver gráficos y estadísticas que muestran el volumen de correos entrantes y salientes. Además, puede acceder a la cola completa de mensajes salientes e entrantes. Postal Mail Server proporciona funcionalidad para Webhooks. Puede configurar Webhooks para recibir información en vivo sobre la información de entrega en tiempo real. También ofrece retención de mensajes que le permite almacenar y examinar todos los mensajes de envío y recibido. La entrega por correo electrónico es muy importante en el negocio para garantizar que los usuarios reciban el correo electrónico. Sin embargo, a veces el correo electrónico entrega al usuario y debe investigar el problema. El ** servidor de correo entrante y saliente ** también proporciona registro completo y herramientas para realizar la investigación.

## Características de Postal {#Feature}
Postal Mail Server ofrece muchas características. Sin embargo, discutiremos las siguientes características clave en este artículo.
** Enviar correos electrónicos **: Postal Mail Server proporciona dos técnicas para correos electrónicos salientes, incluidos la API HTTP y SMTP. Puede usar fácilmente la API HTTP para la integración con aplicaciones web. También puede usar un servidor SMTP para la integración con aplicaciones y sistemas existentes.
** Correos electrónicos entrantes **: ** Correo entrante ** se puede reenviar a HTTP Endpoint, ** servidor SMTP ** y otras direcciones de correo electrónico utilizando el servidor de correo postal.
** Verificación de spam y virus **: Spamassassin y Clamav se pueden integrar con el postal para escanear automáticamente los mensajes entrantes y salientes a medida que pasan a través de los servidores de correo. Esta característica también se desactiva de forma predeterminada.
** Haga clic y abra el seguimiento **: Las aberturas de correo electrónico y los clics se pueden rastrear con Postal. Postal escaneará sus mensajes salientes y reemplazará cualquier enlace con un nuevo enlace que viaja a través de su servidor web postal. Cuando el usuario hace clic en el enlace, Postal registra la acción y los redirige instantáneamente a la URL original. Sin embargo, esto no se activa por defecto.
** Pools IP **: Postal le permite enviar mensajes desde una variedad de direcciones IP. Esto le permite asignar múltiples direcciones IP a diferentes servidores de correo o enviar desde diferentes IP dependiendo del remitente o las direcciones del destinatario.

## Instalación postal {#Installation}
Siga la siguiente guía paso a paso para instalar el software de servidor de correo postal ** ** en Ubuntu 18.04.
  * Primero, debe conectar su servidor VIS SSH. Ejecute el siguiente comando para actualizar el sistema con los últimos paquetes disponibles.
```
sudo apt-get update
```

### Instale el servidor de base de datos Mariadb
  * Ejecute el comando para instalar mariadb.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Una vez que haya terminado con la instalación. Ahora, debe asegurarlo ejecutando el siguiente comando.
```
mysql_secure_installation
```
  * A continuación, le hará un par de preguntas como se muestra a continuación. Debe responder a todas las preguntas.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Conéctese al servidor MariadB con el siguiente comando.
```
mysql -u root -p
```
  * Cree una base de datos para la publicación.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * A continuación, cree un usuario de la base de datos llamado "Postaluser" con una nueva contraseña.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Después de eso, otorgue al usuario el acceso completo a la base de datos "PostalUser".
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * A continuación, enjuague los privilegios y salga del shell Mariadb con el siguiente comando.
```
FLUSH PRIVILEGES;
EXIT;
```

### Instalar Ruby
  * Primero, agregue PPA de terceros para instalar Ruby. Ejecute los siguientes comandos.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Actualizar los paquetes de Ubuntu.
```
sudo apt update
```
  * Instale Ruby ejecutando el siguiente comando.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Instalar RabbitMQ
  * Erlang debe instalar RabbitMQ, por lo que también debe instalarlo. Agregue la tecla de repositorio de Erlang a Ubuntu con el siguiente comando.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * A continuación, agregue el repositorio de Erlang con el siguiente comando.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Ejecute los siguientes comandos para instalar Erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Una vez que haya terminado con la instalación de Erlang, puede proceder a instalar RabbitMQ. Agregue el repositorio de RabbitMQ al Ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Agregue la tecla RabbitMQ GPG con el siguiente comando.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Ejecute los comandos a continuación para instalar el paquete RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Ejecute el comando a continuación para habilitar RabbitMQ, para que siempre comience cuando el sistema de arranque.
```
sudo systemctl enable rabbitmq-server
```
  * A continuación, necesitará crear RabbitMQ VHost y Usuario para Postal. Ejecute el siguiente comando.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Instalar NodeJs
  * Agregar repositorio de NodeJS con el siguiente comando.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * A continuación, ejecute el comando a continuación para instalar NodeJS.
```
sudo apt-get install nodejs
```

### Instalar servidor de correo postal
  * Primero, debe crear un usuario para el servidor de correo postal. Cúbrelo con el siguiente comando.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * A continuación, permita que Ruby escuche en los puertos web.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Instale todas las gemas requeridas con los siguientes comandos.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Crear una estructura de directorio para la postal.
```
sudo mkdir -p /opt/postal/app
```
  * A continuación, descargue la última versión de Postal.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Extraiga el archivo descargado con el siguiente comando.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * A continuación, cambie la propiedad del directorio postal.
```
sudo chown -R postal:postal /opt/postal
```
  * Cree un enlace simbólico para el binario postal ejecutando el siguiente comando.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Instale todas las dependencias requeridas.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Ejecute el comando a continuación para inicializar las configuraciones postales.
```
sudo postal initialize-config
```
  * A continuación, ejecute el siguiente comando para abrir el archivo de configuración postal.
```
sudo nano /opt/postal/config/postal.yml
```
  * Haga los cambios indicados en negrita y guarde el archivo.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * Ejecutar el comando para inicializar la base de datos.
```
sudo postal initialize
```
  * Crear un usuario administrador para postal.
```
sudo postal make-user
```
  * A continuación, deberá proporcionar detalles de la cuenta de usuario como se muestra a continuación.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```
  * Finalmente, ejecute el siguiente comando para iniciar y verificar el estado de la aplicación postal.
```
sudo -u postal postal start
sudo -u postal postal status
```

### instalar nginx
  * Ejecute el comando a continuación para instalar el servidor web NGINX.
```
sudo apt install nginx
```
  * A continuación, copie la configuración Postal Nginx para usarlo como virtual-anfitrión.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Crear un certificado SSL autofirmado.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Después de eso, deberá responder las preguntas.
  * Abra el archivo de host Virtual Virtual Nginx predeterminado.
  * Cambie el valor de server_name y guarde el archivo.
  * Finalmente, reinicie el servidor web Nginx ejecutando el siguiente comando.
```
sudo systemctl restart nginx
```
  * Finalmente, abra su navegador y escriba la URL https://postal.example.com. Serás redirigido a la página de inicio de sesión.

## conclusión {#conclusion}
Hemos repasado la introducción y las características principales del servidor de correo postal en gran profundidad. También hemos incluido instrucciones paso a paso para configurar este agente de transferencia de correo ** **. Además, hemos dado una idea de la configuración. Configurar un servidor de correo postal es un proceso simple. Espero que este artículo sea realmente útil para configurar y configurar un servidor de correo postal para su negocio.
Finalmente, [** Contenerize.com **] [7] se encuentra en un proceso consistente de escribir publicaciones de blog sobre otros productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [** Correo electrónico transaccional **] [8] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  *[** Software de correo electrónico transaccional superior **] [9]
  *[** POTAL - Open Source Mail Server **] [5]
  *[** 5 Mejor software de servidor de correo de código abierto para empresas en 2020 **] [10]
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
