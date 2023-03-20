---
title: "Cómo construir una aplicación Node.js con Docker en Ubuntu" 
seoTitle: "Cómo construir una aplicación Node.js con Docker en Ubuntu" 
description: "Si está interesado en Node.js y desea usar Docker. Este tutorial lo guiará, cómo construir una aplicación NodeJS con Docker." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "Este artículo le explicará cómo construir una aplicación NodeJS con Docker Containerization. Docker permite empaquetar y ejecutar aplicaciones como contenedores." 
url: /es/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Cómo construir la aplicación NodeJS con Docker">}}


## Este artículo le explicará cómo construir una aplicación NodeJS con Docker Containerization. Docker permite empaquetar y ejecutar aplicaciones como contenedores.
Hoy estamos comenzando una serie de tutoriales sobre herramientas de desarrollo de software. Y este primer artículo cubre cómo contenedorizar una aplicación Node.js usando Docker. Docker ayuda a los desarrolladores a empaquetar y ejecutar aplicaciones como contenedores. Dado que el contenedor es un proceso aislado y una alternativa liviana a las máquinas virtuales. Este artículo explica cómo construir una aplicación NodeJS con Docker Containerization. ¡Empecemos!
  *[** ¿Qué es Docker **][1]
  *** [Requisitos previos][2] **
  *[** Configurar la aplicación Node.js **][3]
  *[** Escribir Dockerfile **][4]
  *[** Build Imagen y ejecutar Contenedor de Docker **][5]
  *[** Conclusión **][6]

## ¿Qué es Docker {#Docker}
Docker es un conjunto de plataforma como productos de servicio que utilizan la virtualización de nivel del sistema operativo para entregar software en paquetes llamados contenedores. Es una plataforma abierta para desarrollar, enviar y ejecutar aplicaciones. Docker le permite separar sus aplicaciones de su infraestructura para que pueda entregar software rápidamente.
Docker utiliza una arquitectura de cliente cliente. El cliente de Docker habla con Docker Daemon, que hace el trabajo pesado de la construcción, la ejecución y la distribución de sus contenedores Docker. El cliente de Docker y el demonio se comunican utilizando una API REST, sobre sockets Unix o una interfaz de red. Aquí está el diagrama de Docker Architecture.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="arquitectura de acopolador">}}


## Requisitos previos {#Preeq}
  * Servidor Ubuntu
  * Docker instalado en el servidor
  * Node.js NPM instalado

## Setup node.js Aplicación {#setup}
Para crear su imagen, primero deberá hacer sus archivos de aplicación, que luego puede copiar a su contenedor. Estos archivos incluirán el contenido, el código y las dependencias estáticas de su aplicación.
Primero, cree un directorio para su proyecto en el directorio de inicio de su usuario que no sea Root. Luego, ejecute el siguiente comando en una nueva carpeta que creó.
```
npm init -y
npm i -s express
```
El comando anterior configurará una aplicación Node.js con Express Framework instalada como dependencia. Agregamos el siguiente código al archivo ** App.js **.
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
Inicie la aplicación con Node App.js
```
node app.js
```
Navegue su navegador a http: // su \ _server \ _ip: 3000. Verá la siguiente página de destino.
Ahora tiene una aplicación en funcionamiento. Ahora podemos pasar para crear el DockerFile que nos permitirá recrear y escalar esta aplicación.

## Escribir Dockerfile {#DockerFile}
Usando DockerFile, puede especificar lo que se incluirá en el contenedor de su aplicación cuando se ejecute y el entorno del contenedor.
En primer lugar, cree DockerFile con el siguiente comando en la raíz de su proyecto.
```
vi Dockerfile
```
Agregue la siguiente instrucción ** de ** para establecer la imagen base de la aplicación:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Puede agregar el archivo .dockerignore para eliminar archivos que no pertenecen a Docker Image.
{{_LINE_46_}}
{{_LINE_47_}}
Creemos el subdirectorio ** node_modules ** en /home /node junto con el directorio de aplicaciones. Esto asegurará que tengan los permisos necesarios, lo que será importante cuando creemos módulos de nodo locales en el contenedor con instalación de NPM.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
A continuación, establezca el directorio de trabajo de la aplicación a/home/nodo/app:
```
...
WORKDIR /home/node/app
```
A continuación, copie el paquete.json y el paquete-lock.json, asigne el archivo del proyecto a un "nodo" de usuario no raíz y luego ejecute la instalación de NPM
```
...
COPY package*.json ./
USER node
RUN npm install
```
Copie su código de aplicación con los permisos apropiados al directorio de aplicaciones en el contenedor
```
...
COPY --chown=node:node . .
```
Exponer el comando para exponer el puerto:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
La versión final de Dockerfile debería verse así:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## construir imagen y ejecutar contenedor {#Build}
Ejecute el siguiente comando para generar su imagen Docker
```
docker build -t <<image_name>> .
```
Esto generará una imagen _docker que puede verificar utilizando el comando Docker Images. Ahora es posible crear un contenedor con esta imagen usando el siguiente comando:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Esto iniciará el contenedor que puede verificar ejecutando el comando Docker PS. Ahora en su navegador si accede a http: // localhost: 3000 verá su aplicación Node.js en ejecución. Sin embargo, esta vez ahora está huyendo desde su contenedor Docker.

## conclusión {#conclusion}
El desarrollo con el contenedor Docker es muy simple y fácil. Docker ayuda a los desarrolladores a empaquetar y ejecutar aplicaciones como contenedores. En este tutorial aprendimos a construir una aplicación Node.js usando Docker Container en Ubuntu. En los próximos artículos escribiremos sobre más usos de Docker y también discutiremos otras herramientas.

## Explorar
  * [Cómo instalar múltiples versiones de PHP con Nginx en Ubuntu][7]
  * [Cómo configurar y configurar Nginx como proxy inverso][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
