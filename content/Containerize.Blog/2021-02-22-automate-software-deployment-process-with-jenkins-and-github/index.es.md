---
title: "Integración continua e implementación continua desde el servidor de control de origen" 
seoTitle: "Integración continua e implementación continua desde el servidor de control de origen" 
description: "La herramienta de implementación gratuita ayuda a los equipos de desarrollo a automatizar los flujos de trabajo de entrega de software. Construya, prueba, prueba rápidamente el software con Jenkins y el repositorio de GitHub." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Automatice los flujos de trabajo de desarrollo utilizando la herramienta de implementación gratuita. Aprenderemos cómo configurar CI/CD con Jenkins Automation Server y GitHub para la implementación de software." 
url: /es/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## Automatizar flujos de trabajo de desarrollo utilizando la herramienta de implementación gratuita. Aprenderemos cómo configurar CI/CD con Jenkins Automation Server y GitHub para la implementación de software.

{{< figure align=center src="images/ci-cd-post.png" alt="Integración continua y despliegue continuo">}}

Los equipos de desarrollo utilizan diferentes métodos para la implementación de software, como FTP, extraer código del repositorio y muchos más. Todos estos métodos se realizan manualmente y requieren mucho esfuerzo. Podemos ver que más equipos siguen la metodología ágil para el desarrollo de software. Por lo tanto, lanzan nuevas funciones y la fijación de errores con frecuencia. Por lo tanto, la automatización de flujos de trabajo de entrega de software ayuda a los equipos a lanzar nuevas versiones rápidamente y sin errores. Aprenderemos a usar ** CI/CD con Jenkins ** y GitHub para automatizar el proceso de entrega de software. Cubriremos las siguientes secciones de este artículo.
  *[** ¿Qué es Jenkins? **] [1]
  *[** Integración continua **] [2]
  *[** Implementación continua **] [3]
  *[** Configurar Jenkins **] [4]
  *[** Crear trabajo de Jenkins **] [5]

## ¿Qué es Jenkins? {#Jenkins}
** Jenkins ** es una poderosa herramienta de implementación gratuita ** para automatizar el proceso de entrega de software. Es un servidor de automatización de código abierto para la construcción, las pruebas y la implementación. Jenkins usa la arquitectura maestra-esclavo. Esto permite a los equipos de software ejecutar múltiples compilaciones y pruebas para el software simultáneamente. Además, hay muchos complementos disponibles y los equipos pueden usarlos según sea necesario. Puede visitar la página [** Jenkins **] [6] para obtener más información e instalación. Además, puede encontrar el código fuente en el repositorio Jenkins [** GitHub **] [7].

## Integración continua {#ci}
** La integración continua ** es una práctica de desarrollo que requiere que los desarrolladores integren con frecuencia el código en un repositorio compartido. Cada integración/empuje del código en el repositorio se puede verificar mediante compilación y pruebas automatizadas. También permite a los desarrolladores identificar fácilmente problemas en el código.

## Implementación continua {#CD}
** Implementación continua ** es el siguiente paso después de la integración continua. Permitiría a los equipos implementar continuamente el código en el servidor. Además, ayuda a los desarrolladores a reducir las tareas repetitivas y aumentar la agilidad.

## Configurar Jenkins {#configure}
Siga a continuación la guía paso a paso para la configuración en Jenkins.
  * Abra su sitio de Jenkins e inicie sesión.
  * Instale el complemento "Publicar sobre SSH". Puede buscarlo navegando para "Administrar Jenkins → Administrar complementos → disponibles".
  * Genere la tecla SSH en el servidor de compilación como usuario "Jenkins" como se muestra a continuación.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * Conéctese al servidor de destino/implementación utilizando SSH. Ejecute el siguiente comando y pegue el contenido del archivo del pub en el servidor de destino.
```
$ cd .ssh
$ nano authorized_keys
```
  * Navegue para administrar "Jenkins → Configurar sistema → Publicar sobre SSH".
  * Agregue la tecla SSH localizando la ruta del archivo o pegue el mismo contenido que se hace para el servidor de implementación.
  * Agregue un servidor SSH haciendo clic en el botón "Agregar" junto a los "servidores SSH".
  * Ingrese el nombre, el nombre de host, el nombre de usuario y el directorio remoto para el servidor de implementación/destino.
  * Haga clic en el botón de configuración de prueba para asegurarse de que Jenkins pueda conectarse al servidor de implementación.
  * Finalmente, haga clic en el botón Guardar para almacenar información.

## Crea Jenkins Job {#Create}
Puede usar estos pasos para crear el trabajo de Jenkins.
  * Abra el tablero de Jenkins y haga clic en el botón "Nuevo elemento".
  * Ingrese el nombre del proyecto y elija "trabajo de estilo libre".
  * Ingrese la URL del repositorio de GitHub en "Ventana de configuración".
  * En la sección "Construir entorno", verifique estas opciones "Elimine el espacio de trabajo antes de que comience la compilación" y "Envíe archivos o ejecute comandos a través de SSH después de que se ejecute la compilación".
  * Ingrese el nombre, los archivos de origen y el directorio remoto en el entorno de compilación.
  * Guardar trabajo y construirlo.
  * Conéctese al servidor de implementación y asegúrese de que el código esté allí.

## Conclusión
Hemos discutido el servidor ** Jenkins **, ** Integración continua ** y ** Implementación continua ** en este artículo. También hemos aprendido cómo configurar la herramienta de implementación gratuita ** ** y creado un trabajo de Jenkins para la implementación utilizando GitHub. La herramienta gratuita de CI/CD permite al equipo de desarrollo automatizar los flujos de trabajo de entrega de software y mantener el enfoque en trabajos importantes. Cubriremos otras herramientas de implementación en las próximas publicaciones.
Finalmente, [** Contenerize.com **] [8] publicará artículos sobre más herramientas de implementación de código abierto. Por lo tanto, manténgase en contacto con [** Herramientas de implementación **] [9] Categoría para actualizaciones regulares.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  *** [Jenkins] [6] **
  *[** Drone **] [10]
  *[** desplegador **] [11]
  *[** Capistrano **] [12]
  *[** Rancher **] [13]
  *[** Concurse **] [14]
  *[** Ansible **] [15]
  *[** GOCD **] [16]
  *[** Top 5 Herramientas de implementación de código abierto en 2021 **] [17]
  *[** Automatizar la implementación de la aplicación PHP con el implementador **] [18]
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
