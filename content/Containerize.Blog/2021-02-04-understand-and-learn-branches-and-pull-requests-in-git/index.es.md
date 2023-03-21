---
title: "Comprender y aprender ramas y aplicar solicitudes en Git" 
seoTitle: "Comprender y aprender ramas y aplicar solicitudes en Git" 
description: "Git es uno de los sistemas de control de versiones más populares. En este articl Ewe, entenderá cómo usar ramas Git y solicitudes de extracción." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "Git Branch es el componente fundamental del sistema de control de versiones GIT. Exploraremos diferentes modelos de ramificación en este tutorial." 
url: /es/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## La rama Git es el componente fundamental del sistema de control de versiones GIT. Exploraremos diferentes modelos de ramificación en este tutorial.

{{< figure align=center src="images/git-branches-pull-requests.png" alt="Ramas de solicitudes de extracción de git">}}

En nuestro [último artículo][1], aprendimos sobre los conceptos básicos de GIT y los sistemas de control de versiones. Pasamos paso a paso y aprendimos a configurar un repositorio Git. Además, aprendimos a agregar cambios a una rama y revertirlos en caso de que quiera deshacer sus cambios. Ahora que entendemos los conceptos básicos de los sistemas de control de versiones, específicamente, GIT. Entonces, en esta publicación de blog, pasaremos para discutir cómo usar las ramas Git y las solicitudes de extracción. Aprenderemos sobre diferentes flujos de trabajo. ¡Entonces empecemos!
  ***[¿Qué son las ramas Git][2]** 
  ***[Crear / modificar ramas Git][3]** 
  ***[¿Qué es una solicitud de extracción][4]** 
  ***[Modelos de ramificación Git Popular][5]** 
  *[**Conclusión** ][6]

## ¿Qué son las ramas Git   {#Branch}

{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="ramas git">}}

Hablemos de las ramas y por qué necesitamos ramas y cuáles son las estrategias de ramificación que podemos usar para trabajar de manera eficiente con nuestro código. Como su nombre lo sugiere, una rama  ****  representa una línea de desarrollo independiente de una raíz.
Cuando crea un repositorio, básicamente crea una rama también, que podemos llamar a una rama maestra (o predeterminada). Podemos cometer cambios en nuestra rama maestra. Pero en caso de que necesite trabajar en una función y no desea separar su código de la rama maestra. Entonces, ahí es donde las ramas te ayudan. Te dejan ramificarse y luego fusionarte más tarde.

## Crear / modificar ramas git   {#create}
```
git branch
```
El comando le permite crear, enumerar, cambiar el nombre y eliminar ramas. No le permite cambiar entre ramas, para esto, tenemos que usar el comando Git Checkout. O si desea fusionar sus cambios a una rama, entonces debe usar el comando **git fusion** .
Es importante entender que las ramas son solo consejos para los compromisos. Cuando crea una rama, todo lo que GIT debe hacer es crear un nuevo puntero, no cambia el repositorio de ninguna otra manera.
Use el siguiente comando para crear una rama
```
git branch <branch-name>
```
Una vez que haya terminado de trabajar en una sucursal y la haya fusionado en la base del código principal, puede eliminar la rama sin perder ningún historial utilizando el siguiente comando
```
git branch -d <branch-name>
```

## ¿Qué es una solicitud de extracción   {#pull}
Una solicitud de extracción es una forma de enviar una contribución a un proyecto de software utilizando un sistema de control de versiones como GIT. Los desarrolladores usan solicitudes de extracción para proponer cambios en una base de código. Una vez que se abre una solicitud de extracción, puede discutir y revisar los cambios potenciales con los colaboradores y agregar confirmaciones de seguimiento antes de que sus cambios se fusionen en la rama base.
Cuando un desarrollador abre una solicitud de extracción, todo lo que está haciendo es solicitar a otro desarrollador, extrae una rama de su repositorio a su repositorio. Esto significa que necesita proporcionar 4 valores de entrada para crear una solicitud de extracción: el repositorio de origen, la rama de origen, el repositorio de destino y la rama de destino.

## Modelos de ramificación populares   {#model}
Hay un número de flujos de trabajo de ramificación que están en uso por la comunidad de desarrolladores en todo el mundo. Pero, discutiremos los tres modelos de ramificación más populares uno por uno

## # flujo de git
GitFlow Workflow es un flujo de trabajo GIT que ayuda con el desarrollo continuo de software e implementando prácticas de DevOps. El flujo Git es el flujo de trabajo más conocido en esta lista. Fue creado por [Vincent Driessen en 2010][7] y se basa en dos ramas principales con una vida infinita, junto con otras ramas de soporte como las características-\*, HotfiMes-\* que luego se fusionan en la rama de desarrollo como individual Los artículos se completan.
  ***Master**  - Esta rama contiene código de producción. Todo el código de desarrollo se fusiona en la rama maestra una vez que está listo para ser empujado a la producción.
  ***Desarrollar** -Esta rama contiene código de preproducción. Cuando las características están terminadas, se fusionan en desarrollo.
Gitflow es ideal para proyectos que tienen un ciclo de lanzamiento programado. Sin embargo, la historia de GIT se vuelve ilegible.

## # flujo de github
El flujo de GitHub es un flujo de trabajo liviano. Fue creado por [Github][8] en 2011 y se centra principalmente en el modelo ágil, donde no espera un ciclo de liberación. En cambio, impulsa los cambios a la producción a diario a medida que las características se completan.
El flujo de Github sigue a los siguientes directores:
  * Cualquier cosa en la rama "maestra" es desplegable.
  * Para trabajar en algo nuevo, cree una rama separada de Off Master con algún nombre de descripción, por ejemplo, "suplente de imagen"
  * Comprométase con esa rama a nivel local y regularmente su trabajo a la rama del mismo nombre en el servidor.
  * Cuando necesite comentarios o ayuda, o cree que la rama está lista para fusionarse, abra una [solicitud de extracción][4]
  * Después de revisar y firmar en la función, puede fusionarlo en el maestro
  * Una vez que se fusiona y empuja a "Master", se puede implementar en producción.

## # flujo de gitlab
GitLab Flow es un flujo de trabajo creado por GitLab en 2014. GitLab Flow es una alternativa más simple a Gitflow y combina el desarrollo de características y las ramas de características con seguimiento de problemas. La principal diferencia entre el flujo de gitlab y el flujo de GitHub es el uso de ramas ambientales.
Los desarrolladores crean una rama **Desarrollar**  y hacen que sea el valor predeterminado, mientras que GitLab Flow funciona con la rama "principal" de inmediato. GitLab Flow incorpora múltiples ramas de preproducción. Y, se pueden usar para probar las cosas en diferentes niveles. por ejemplo, desde la rama de prueba hasta la aceptación y luego de la aceptación a la producción.

## conclusión   {#conclusion}
En este artículo, aprendimos sobre las ramas Git y las solicitudes de extracción. Estudiamos la importancia de las solicitudes de extracción y cómo se pueden usar en varios flujos de trabajo GIT. También exploramos brevemente diferentes modelos de ramificación GIT.

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
