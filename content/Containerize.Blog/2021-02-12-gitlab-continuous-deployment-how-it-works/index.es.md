---
title: "Despliegue continuo de gitlab | ¿Cómo funciona?" 
seoTitle: "Despliegue continuo de gitlab | ¿Cómo funciona?" 
description: "En este tutorial, construiremos una tubería de implementación continua con GitLab. La implementación continua de GitLab ayuda a los DevOps a realizar la implementación automatizada." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "La implementación automatizada optimiza su flujo de trabajo y amp; procesos. Este tutorial GitLab lo ayuda a aprender a configurar una tubería de implementación continua utilizando GitLab CI/CD." 
url: /es/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## La implementación automatizada optimiza su flujo de trabajo y procesos. Este tutorial GitLab lo ayuda a aprender a configurar una tubería de implementación continua utilizando GitLab CI/CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="Implementación continua de gitlab">}}


## Descripción general
En los últimos artículos, aprendimos sobre los [conceptos de control de versiones][1] y luego mejoramos nuestro conocimiento aprendiendo sobre diferentes [modelos de ramificación][2] y flujos de trabajo. El sistema de control de versiones ha traído eficiencia en el mundo del desarrollo, la implementación y la integración. A los desarrolladores les resulta muy fácil cometer el código fuente sin preocuparse por las compilaciones y las pruebas. La industria del software ha ganado confianza y una ventaja competitiva a medida que este enfoque ha iniciado las implementaciones.
** La implementación continua de GitLab ** y la integración ayudan a encontrar problemas fácilmente. Además, los desarrolladores pueden rastrear los errores y otras fallas en un lapso de tiempo más corto. Todo este proceso de automatización da libertad de las tareas que tienen lugar con frecuencia y reducen la mano de obra y las posibilidades de errores. Hoy en esta publicación de blog exploraremos sobre la tubería de implementación continua con Gitlab CI/CD. Entonces, ¡comencemos cubriendo los siguientes puntos!
  *** [Qué es CI y CD][3] **
  *** [Qué es Gitlab Runner][4] **
  *** [. Gitlab-ci.yml archivo][5] **
  *** [Crear aplicación de muestra básica][6] **
  *** [Conclusión][7] **

## ¿Qué es CI y CD {#cicd}
Continua Integration (CI) es una de las mejores prácticas de DevOps para automatizar la integración de los cambios de código de múltiples contribuyentes en un solo proyecto de software. Esto permite a los desarrolladores fusionar con frecuencia los cambios de código en un repositorio central donde se ejecutan construcciones y pruebas. La implementación continua (CD) avanza un paso más allá al implementar automáticamente el código en el entorno de destino (producción o estadificación) después de que cada código se comprometa y se construya.
Antes de comenzar, asegúrese de tener un proyecto en Gitlab para el que le gustaría usar CI/CD. Y debe tener acceso a nivel de mantenedor o propietario al proyecto.

## ¿Qué es Gitlab Runner {#runner}
Después de comprender ** GitLab Despliegue continuo **, GitLab Runner es un pequeño programa liviano escrito en GO que ejecuta trabajos relacionados con la integración continua (CI) en su máquina local y envía los resultados a GitLab para que considere los cambios. Es un solo binario ejecutable que se puede instalar en cualquier sistema operativo importante.
Antes de seguir adelante con el GitLab CI / CD, debe asegurarse de tener los corredores disponibles para ejecutar sus tareas. Puede seguir la guía oficial para [Instalar][8] y [Registrarse][9] GitLab Runner.

## .gitlab-ci.yml file {#yml}
El **. Gitlab-ci.yml ** es un archivo en el que configura instrucciones específicas para Gitlab CI/CD. Se coloca en la raíz de su repositorio y contiene definiciones de cómo se debe construir su proyecto. Cada vez que presionamos un compromiso con nuestra instancia de Gitlab, Gitlab invocaba a un corredor para construir y probar el proyecto según las instrucciones dentro de este archivo.

## Crear una aplicación de muestra {#Sample}
En la sección de este ** Tutorial GitLab **, crearemos una aplicación de muestra. Suponiendo que ya ha creado un repositorio de GitLab, creemos una aplicación de muestra y configuraremos un proceso CI / CD para la aplicación.
En primer lugar, cree el archivo Packle.json en la raíz de su proyecto
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
Ahora cree una aplicación APP.js en la raíz de su proyecto
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
En el último paso de ** GitLab Reployment continuo, ** cree un ** Dockerfile ** y agregue el siguiente contenido:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
DockerFile contiene el proceso de compilación para esta aplicación. Implica crear un contenedor de nodo e instalar las dependencias.
Ahora necesitamos crear un archivo **. Gitlab-ci.yml **. Este archivo contendría las instrucciones para construir nuestro proyecto. Cada vez que presionamos un compromiso con nuestro repositorio de Gitlab, Gitlab invocaba a un corredor para construir el proyecto.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Solo tenemos una construcción de una etapa y solo tiene ** NPM Instalar ** como script. Este es un comando que tendría que ejecutar manualmente cada vez que llegue un cambio a su proyecto. Y ahí es donde entra el corredor de Gitlab y lo haría automáticamente cada vez que se comprometa.
Ahora, suponiendo que ya haya instalado el Runner GitLab y también lo haya registrado con su instancia de GitLab, podemos probar el GitLab CI / CD en acción haciendo un compromiso simple con la aplicación y empujándola a GITLAB.
Luego puede abrir su proyecto en Gitlab, ir a My-Project → Pipeline y verá una etiqueta que diga "aprobada" junto al confirmación que realizó. Los confirmaciones posteriores también tendrán etiquetas.

## conclusión {#conclusion}
Esto nos lleva al final de este ** Tutorial Gitlab **. En este artículo, aprendimos sobre los conceptos básicos de la integración continua de Gitlab, ** qué es CI y CD **, ** ¿Qué es Gitlab Runner ** y la implementación continua? Además, estudiamos cuál es el uso de corredores en el flujo general de trabajo de CI / CD. También creamos un proyecto de muestra que explica cómo configurar la implementación continua utilizando GITLAB. Este tutorial de GitLab realmente lo ayudará si está buscando ** GitLab Despliegue continuo **. Sin embargo, hay muchos otros recursos mencionados en la sección "Explorar" a continuación que puede consultar. Además, los artículos son sobre ** sistemas de control de versiones ** que son de código abierto, autohostados y extensibles.
Finalmente, [Contenerize.com][10] escribe continuamente publicaciones de blog sobre otros productos y temas de código abierto. Por lo tanto, manténgase en contacto con la categoría [11][11][Software de control de versiones][12] para actualizaciones regulares. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook][13], [LinkedIn][14] y [Twitter][15].

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Automatice los flujos de trabajo de desarrollo de software con acciones de GitHub][16]
  * [Comprender y aprender ramas y solicitudes de tirar en GIT][2]
  * [Software de administración de código fuente | ¿Qué es git?][17]
  * [Top 5 Sistemas de control de versiones de código abierto en 2021][18]
  * [Automatice las operaciones comerciales utilizando software de código abierto y abierto][19]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
