---
title: "Software de administración de código fuente | ¿Qué es Git?" 
seoTitle: "Software de administración de código fuente | ¿Qué es Git?" 
description: "¿Qué es Git? Git es un software gratuito de gestión de código fuente que le permite grabar, revisar los cambios en sus archivos fuente y administrar proyectos de manera eficiente." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "En este artículo, exploraremos qué es Git & amp; ¿Cómo funciona Git? Git es un sistema de control de versiones diseñado para administrar el código fuente, Track & amp; Versiones de registro." 
url: /es/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## En este artículo, exploraremos qué es GIT y cómo funciona GIT. Git es un sistema de control de versiones diseñado para administrar el código fuente, las versiones de seguimiento y registro.

{{< figure align=center src="images/version-control-banner.png" alt="Software de administración de códigos fuente">}}


## Descripción general
Imagínese su desarrollador de software que trabaja en un proyecto. Tienes más de una persona trabajando en ello. Y, hay un solo archivo que contiene el código fuente. A medida que todos realizan cambios en el código, tendrán diferentes versiones del archivo cada vez que realicen un cambio. Entonces, ¿cómo administramos diferentes versiones del mismo archivo? Ahí es donde entra en marcha el software de gestión del código fuente. Le ayuda a administrar y fusionar diferentes versiones del mismo archivo. E incluso dejarte rastrear la historia del cambio. Y siempre puede estar seguro de quién hizo los cambios en el archivo y cuáles son esos cambios.
En este artículo, aprenderemos sobre el sistema de control de versiones GIT. Cómo puede usarlo para administrar sus archivos de código fuente de desarrollo de software o cualquier otro archivo. Entonces empecemos.
  *** [¿Qué es el sistema de control de versiones] [1] **
  *** [qué es git] [2] **
  *** [Cómo funciona Git] [3] **
  *** [instalar git] [4] **
  *** [Configuración de un repositorio] [5] **
  *** [Guardar cambios en el repositorio] [6] **
  *** [Verifique el estado del repositorio] [7] **
  *** [revertir o deshacer cambios] [8] **
  *** [Conclusión] [9] **

## ¿Qué es el sistema de control de versiones {#versión-control}
El control de versiones es un sistema que registra cambios en un archivo o conjunto de archivos a lo largo del tiempo para que pueda recuperar versiones específicas más adelante. Si es un desarrollador de software y desea mantener versiones del archivo del código fuente, el software de administración del código fuente es algo muy útil para usted. Le permite revertir los archivos seleccionados a un estado anterior, revertir todo el proyecto a un estado anterior, comparar los cambios con el tiempo, ver quién modificó por última vez algo que podría estar causando un problema, quién introdujo un problema y cuándo y más. Usar el control de versiones significa que nunca tiene que preocuparse por perder su trabajo.

## ¿Qué es git {#git}
Git es un sistema de control de versiones gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta muy grandes con velocidad y eficiencia. A diferencia de los sistemas de control de versiones centralizados más antiguos, como SVN y CVS, se distribuye el control de versiones GIT. Cada desarrollador tiene el historial completo de su repositorio de código localmente. Sin embargo, hace que el clon inicial sea un poco lento. Pero, después de eso, todos los compromisos y otras operaciones son muy rápidos. Git le permite tener múltiples ramas locales que pueden ser completamente independientes entre sí.

## Cómo funciona Git {#HOW}
Usando Git, puede hacer cambios en su repositorio local y llevarlo a una herramienta de alojamiento. O puede extraer los cambios de otros de la herramienta de alojamiento a su máquina local. Aquí hay una descripción básica de cómo funciona el software de gestión del código fuente (GIT).
  1. Cree un "repositorio" con un git cualquier herramienta de alojamiento (como GitHub, GitLab o Bitbucket)
  2. Clonar el repositorio de su máquina local
  3. Agregue un archivo a su repositorio local
  4. Guardar (confirmar) los cambios en su repositorio local
  5. "Empuje" sus cambios en su rama maestra en un alojamiento remoto
  6. Realice un cambio en su archivo con una herramienta de alojamiento de GIT y confirmación
  7. "Tire" de los cambios en su máquina local
  8. Cree una "rama" (versión), haga un cambio, comete el cambio
  9. Abra una "solicitud de extracción" (proponga cambios en la rama maestra)
 10. "fusione" su rama en la rama maestra

## install git {#install}
Existen diferentes métodos disponibles para instalar Git en su computadora. Puede instalarlo como un paquete o a través de otro instalador, o descargar el código fuente y compilarlo usted mismo.

### Instalación en Linux
Si desea instalar las herramientas BASIC GIT en Linux a través de un instalador binario, generalmente puede hacerlo a través de la herramienta de administración de paquetes que viene con su distribución. Para Fedora (o cualquier distribución basada en RPM estrechamente relacionada, como RHEL o CentOS), puede usar "DNF"
```
$ sudo dnf install git-all
```
Si estás en una distribución con sede en Debian, como Ubuntu, prueba "APT"
```
$ sudo apt install git-all
```

### Instalación en macOS
Hay varias formas de instalar Git en una Mac. Lo más fácil probablemente sea instalar las herramientas de línea de comandos Xcode. En Mavericks (10.9) o arriba puede hacerlo simplemente tratando de ejecutar ** Git ** desde el terminal la primera vez.
```
$ git --version
```
Si aún no lo tiene instalado, le pedirá que lo instale.

## Configuración de un repositorio {#Init}
Un repositorio Git es el almacenamiento virtual para sus archivos de código. Le permite almacenar diferentes versiones de su código, a las que puede acceder cuando sea necesario.
Para crear un nuevo repositorio, utilizará el comando ** git init **. Git Init es un comando único que usa durante la configuración inicial de un nuevo repositorio. Ejecución de este comando creará un nuevo subdirectorio .git en su directorio de trabajo actual. Esto también creará una nueva rama ** maestro **.

{{< figure align=center src="images/git-init-2.gif" alt="Que es git">}}


## Guardar cambios en el repositorio {#commit}
Ahora que tiene un repositorio inicializado, puede confirmar cambios en la versión de archivo.

{{< figure align=center src="images/git-add-commit-1.gif" alt="Git Commit">}}


## Verifique el estado del repositorio {#status}
El comando ** Git Status ** muestra el estado del directorio de trabajo y el área de puesta en escena. Le permite ver qué cambios se han organizado, qué no lo han hecho, y qué archivos no están siendo rastreados por el software de administración de código fuente (GIT). La salida de estado no le muestra ninguna información sobre el historial de proyectos comprometido. Para esto, debe usar el registro ** git **.

{{< figure align=center src="images/git-status-2.gif" alt="Software de administración de códigos fuente">}}

El registro de git le mostrará la siguiente salida
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## Revertir sus cambios {#REVERT}
Puede usar el comando git revert para deshacer un cambio que ya ha cometido en su repositorio. Primero, use el comando "GIT Log" para obtener la lista de compromisos
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
Luego, decida qué compromiso desea revertir. Y, use el comando git revert como a continuación
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
Como puede ver, Git Revert creó una nueva confirmación que deshace los cambios que se hicieron en el "Segundo Commit".

## Conclusión
Ahora que ha leído todo el artículo donde discutimos lo que es GIT y cómo funciona GIT, debe conocer el software de administración del código fuente. ¿Cuál es el propósito y por qué lo necesitas? Exploramos cómo el GIT puede ayudarlo a administrar el código fuente de su proyecto. Y también aprendimos cómo usar diferentes comandos GIT para inicializar y repositorio, guardar sus cambios y cómo deshacer los cambios. En nuestros próximos tutoriales, exploraremos más el git y compartiremos cómo podemos usar diferentes comandos para administrar mejor su código.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  *[** Automatizar flujos de trabajo de desarrollo de software con acciones de GitHub **] [10]
  *** [Cómo configurar una tubería de implementación continua con Gitlab Ci/CD] [11] **
  *** [Comprender y aprender ramas y aplicar solicitudes en GIT] [12] **
  *** [Top 5 Sistemas de control de versiones de código abierto en 2021] [13] **
[1]: #version-control
[2]: #git
[3]: #how
[4]: #install
[5]: #init
[6]: #commit
[7]: #status
[8]: #revert
[9]: #conclusion
[10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
