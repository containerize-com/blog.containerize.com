---
title: "Tutorial de acciones de GitHub | Automatice su primer flujo de trabajo" 
seoTitle: "Tutorial de acciones de GitHub | Automatice su primer flujo de trabajo" 
description: "Siga este tutorial de acciones de GitHub para explorar cómo podemos utilizar las acciones de GitHub para automatizar y ejecutar nuestros flujos de trabajo de desarrollo de software desde nuestro repositorio." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub ha introducido acciones de GitHub que le permiten configurar la integración continua y amp; Implementación continua utilizando un archivo de configuración directamente en su repositorio de GitHub." 
url: /es/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub ha introducido acciones de GitHub que le permiten configurar la integración continua y la implementación continua utilizando un archivo de configuración directamente en su repositorio de GitHub.

{{< figure align=center src="images/github-actions-workflows.png" alt="Tutorial de acciones de Github">}}


## Descripción general
Una de las mejores maneras de aumentar la productividad en un proyecto de software es automatizar cualquier cosa manual o repetitiva. Y es posible que se sorprenda de lo fácil que es la automatización para implementar cuando usa una herramienta increíble como ** GitHub Actions **. Desde los últimos artículos, he estado escribiendo sobre [GIT][1], [Control de versiones][1] y [Automatización de flujos de trabajo de desarrollo de software][2] y sobre [integración continua y entrega continua][3 ] Con suerte, con suerte, es muy consciente de los repositorios y cómo usarlos.
En el tutorial ** GitHub Actions de hoy **, exploraremos las acciones de GitHub y cómo puede usarlo para la automatización de aplicaciones, la personalización y ejecutar sus flujos de trabajo de desarrollo de software directamente en su repositorio. Entonces empecemos
  *** [Revisión de flujos de trabajo CI/CD][4] **
  *** [¿Cuáles son las acciones de Github][5] **
  *** [Comprender la sintaxis yaml][6] **
  *** [Creando su primer flujo de trabajo][7] **
  *** [Conclusión][8] **

## CI/CD Flojos de trabajo {#cicd}
CI/CD es un método de implementaciones frecuentes de sus proyectos de desarrollo de software para los usuarios finales en diferentes etapas con la ayuda de la automatización. ** Integración continua e implementación continua ** es más una filosofía y una de las mejores prácticas para que los equipos de DevOps implementen, para entregar cambios de código de manera más frecuente y confiable.
** La integración continua ** es un conjunto de prácticas que alientan a los equipos de desarrollo a verificar con frecuencia los repositorios de código a versiones de control. Y, por cada empuje al repositorio, puede crear un conjunto de scripts para construir y probar su aplicación automáticamente. Estos scripts ayudan a disminuir las posibilidades de que introduzca errores en su aplicación.
** Implementación continua ** es un paso por delante en sus flujos de trabajo CI/CD. No solo construye y prueba su aplicación cada vez que se presenta un cambio de código a la base de código, sino que la aplicación también se implementa continuamente a su servidor.

## ¿Cuáles son las acciones de GitHub {#GitHub-Actions}
En la sección de este tutorial de acciones de GitHub, llegaremos a saber cuáles son ** GitHub Actions **. Sin embargo, las acciones de GitHub son una API para causa y efecto sobre GitHub. Hace que sea fácil automatizar todos sus flujos de trabajo de software, ahora con CI/CD. Puede diseñar cualquier flujo de trabajo, en función de cualquier evento, por ejemplo (empujar a una rama, solicitud de extracción, etc.), mientras que GitHub administra la ejecución. Sin embargo, no necesita escribir las acciones usted mismo. Github tiene un mercado incorporado donde las personas pueden encontrar acciones creadas por otras personas y reutilizarlas si se ajusta a sus necesidades. Las acciones de GitHub admiten Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET y más. Construya, prueba e implementa aplicaciones en su idioma de elección.

## sintaxis yaml {#yaml}
Primero nos familiaricemos con las sintaxis y las terminologías de las acciones ** GitHub **.
  *** Flujo de trabajo: ** Dado que la acción de GitHub proporciona la facilidad para construir una integración continua e implementación continua ** Capacidades, este término se refiere a ese punto cuando el flujo comienza a ejecutar la herramienta CI.
  *** Trabajo **: Este término se refiere a todas las tareas en un solo flujo de trabajo. Un flujo de trabajo contiene más de un trabajo y es necesario que todos ellos completen su ejecución para evitar el fracaso.
  *** Paso: ** Para que un trabajo complete su ejecución, debe completar todos los pasos integrados en él.
  *** Acción: ** La acción es el subconjunto principal del paso y el subconjunto de flujo de trabajo más pequeño. Cada paso consta de múltiples acciones que deben ejecutarse con éxito.
Como puede ver, el flujo de trabajo, el trabajo, el paso y la acción son interdependientes, y la ejecución exitosa de todo es necesaria para la finalización exitosa de la tubería CI/CD.

## Crear un flujo de trabajo {#Workflow}
En un proyecto de desarrollo de software, uno de los equipos de desarrollo de problemas enfrenta es el formato del código fuente y la aplicación de las mejores prácticas. Este problema es más obvio para los equipos más grandes. Ya que involucran a más desarrolladores y todos tienen su propio estilo de códigos de escritura. Por lo tanto, el uso de paquetes de enlace es muy común en todos los equipos. Pero ahora con ** GitHub Actions **, en realidad puede hacer cumplir el enlace cada vez que alguien empuja el código al repositorio de GitHub.
En este tutorial de acciones de GitHub, agregará un flujo de trabajo que vincule múltiples lenguajes de codificación utilizando la acción [GitHub Super-Linter][9]. El flujo de trabajo utiliza Super-Linter para validar su código fuente cada vez que se lleva una nueva confirmación a su repositorio.
Desde su repositorio en GitHub, cree un nuevo archivo en el directorio **.
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
Para ejecutar su flujo de trabajo, cometer y impulsar los cambios a su repositorio de GitHub. Este evento de empuje activará el flujo de trabajo de Superlinter. Y ahora puede ver los resultados de su flujo de trabajo yendo a la pestaña de la acción

{{< figure align=center src="images/actions-tab.png" alt="Tutorial de acciones de Github">}}

En la barra lateral izquierda, haga clic en el flujo de trabajo que desea ver.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="Flujo de trabajo de acciones de Github">}}

El flujo de trabajo Super-Linter que acaba de agregar se ejecuta cada vez que el código de tiempo se presiona a su repositorio para ayudarlo a encontrar problemas en su código. Su repositorio puede tener múltiples flujos de trabajo que desencadenan diferentes trabajos basados ​​en diferentes eventos. Las acciones de GitHub pueden ayudarlo a automatizar casi todos los aspectos de los procesos de desarrollo de sus aplicaciones. Esta fue solo una introducción básica a las acciones de Github. Hay toneladas de [recursos][10] disponibles para un conocimiento profundo de las acciones de GitHub, que puede usar.

## conclusión {#conclusion}
En este ** Tutorial de acciones de GitHub **, hemos aprendido sobre ** Integración continua e implementación continua ** y ** cuáles son las acciones de GitHub **. Y también exploramos cómo podemos usar ** GitHub Acciones ** para construir un flujo de trabajo CI/CD. Utilizamos un flujo de trabajo simple súper linter del mercado de acciones de GitHub, para averiguar cualquier inconsistencia en nuestra base de código. En los próximos artículos, exploraremos las acciones de GitHub con más profundidad. Además, puede encontrar otras publicaciones de blog relacionadas con el sistema ** de control de versiones ** mencionado en la sección "Explorar" a continuación.
Finalmente, [Contenerize.com][11] está escribiendo continuamente publicaciones de blog sobre otros productos y temas de código abierto. Por lo tanto, manténgase en contacto con la categoría [Software de control de versiones][12] para actualizaciones regulares. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook][13], [LinkedIn][14] y [Twitter][15].

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Implementación continua de GITLAB | ¿Cómo funciona?][16]
  * [Comprender y aprender ramas y solicitudes de tirar en GIT][2]
  * [Software de administración de código fuente | ¿Qué es git?][17]
  * [Top 5 Sistemas de control de versiones de código abierto en 2021][18]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
