---
title: "Arquitectura de Kubernetes múltiples y contenedores" 
seoTitle: "Arquitectura basada en contenedores y múltiples tenientes" 
description: "Siga esta guía para aprender a obtener múltiples tenientes en una arquitectura basada en contenedores. Kubernetes múltiples se refiere a recursos compartidos" 
date: 2023-03-01T00:00:00+00:00
author: muhammadmustafa
summary: "Siga esta guía para aprender a obtener múltiples tenientes en una arquitectura basada en contenedores. Kubernetes múltiples se refiere a recursos compartidos" 
url: /es/kubernetes-multi-tenancy-container-based-architecture/
categories: ['Programming']
---

## Los recursos de clúster de Kubernetes se comparten entre todos los inquilinos. Implementar un enfoque de hosts de contenedores múltiples con inquilinos para implementar aplicaciones optimizadas y de ahorro de recursos.

{{< figure align=center src="images/Kubernetes Multi-Tenancy & Container-Based Architecture.png" alt="Kubernetes Multi-Tenancy y arquitectura basada en contenedores " caption="Kubernetes Multi-Tenancy & Container-Based Architecture" >}}


## Descripción general
Estamos aquí con otra emocionante publicación de blog en la serie de múltiples tenientes. En nuestro [artículo] anterior [1], tocamos el concepto básico detrás de las aplicaciones multiinquiliras, los pros y los contras, y los tipos de arquitectura multiintenente. Dado que es hora de servir a múltiples usuarios/inquilinos, administrar y utilizar recursos de manera eficiente. Por lo tanto, la teniente múltiple es el enfoque principal para construir una infraestructura que maneja a varios clientes/inquilinos simultáneamente. Sin embargo, nuestra [publicación de blog] más reciente [2] demostró arquitectura sin servidor, contenedorización y [Kubernetes][3]. Por lo tanto, en este artículo, exploraremos la arquitectura múltiple y contenedor basada en contenedores. Además, veremos cómo puede lograr la tenencia múltiple en sus aplicaciones [contenedores][4].
Los siguientes puntos se cubrirán en este artículo:
***[hosts de contenedores multi-inquilinos][5]**
***[Kubernetes multi-tenancia][6]**

## Hosts de contenedores múltiples {#Hosts-Container-Container}}
La implementación de aplicaciones de múltiples inquilinos es una tarea crítica cuando se trata de alojamiento de plataformas. Todos saben que los contenedores son livianos en comparación con las máquinas virtuales. La implementación de la aplicación toma solo unos pocos milisegundos para completar la implementación, mientras que podría ser cuestión de segundos o minutos en el caso de las máquinas virtuales.
Sin embargo, lograr la tenencia múltiple en una arquitectura basada en contenedores es bastante sencillo. Cada inquilino es alojado por un contenedor separado con completo aislamiento y privacidad de datos. Eso significa que el número de contenedores depende del número de inquilinos. Además, se utilizarán las siguientes herramientas para lograr este enfoque:
  * Docker y Docker componen
  * Nginx
  * Instancia de la base de datos
  * Servidor de aplicaciones
Utilizará Docker para construir la imagen, que es una plantilla para construir el contenedor. Además, usará Docker Compose para girar múltiples hosts de contenedores. Además, usará NGINX para redirigir las solicitudes entrantes al inquilino adecuado. Por lo tanto, cada host de contenedor contiene las instancias de la aplicación y la base de datos en ejecución. Este**Método de contenedores de múltiples inquilinos**no tiene intensidad de recursos y ofrece robustez en la gestión de varios inquilinos y asegurarse de que el aislamiento y la seguridad de los datos.

## Kubernetes Multi-Tenancy {#Kubernetes-Multi-Tenancy-}
Kubernetes contiene muchos componentes en su arquitectura, como nodos, clúster, plano de control y más. Básicamente, no hay múltiples tenientes incorporados en Kubernetes, pero puede lograrlo. Por lo tanto, hay múltiples aplicaciones/inquilinos que se ejecutan y comparten el clúster y el plano de control de Kubernetes. Por otro lado, en aplicaciones de inquilino único, una sola instancia de la aplicación ocupa todo el clúster Kubernetes.

{{< figure align=center src="images/kubernetes.svg" alt="Kubernetes multi-tenancia" >}}

Además, ir un poco más profundo nos hará aprender sobre el alojamiento de inquilinos en el clúster Kubernetes. Cada inquilino está asociado con un espacio de nombres de Kubernetes que organiza el código y evita las colisiones de nombres. Hay tres enfoques para lograr la tenencia múltiple en Kubernetes. El primero es el espacio de nombres como servicio, el segundo es el clúster como servicio, y el tercero son los planos de control como servicio.
Justo hablando, Kubernetes múltiples tenían una solución rentable a la organización que trata con múltiples interfaces de usuario. De hecho, puede enfrentar algunos desafíos, como la gestión de usuarios y una mejor gestión de recursos. Sin embargo, depende totalmente del caso de uso y de la naturaleza de la aplicación a la que apunta.

## Conclusión
Esto nos lleva al final de esta publicación de blog. Hemos pasado por**Kubernetes múltiples tenientes y arquitectura basada en contenedores**para lograr la tenencia múltiple. Además, hay muchas bibliotecas de terceros disponibles para cerrar las aplicaciones de múltiples inquilinos con Kubernetes. Esta publicación de blog lo ayudará a comprender el concepto de**Hosts de contenedores de múltiples inquilinos**. Hay otras publicaciones de blog interesantes que puede encontrar en la sección "Ver también".

## Conéctate con nosotros
Por último, [Contenerize.com][7] ofrece publicaciones de blog en curso sobre varios productos y temas de código abierto. Puede permanecer en el bucle siguiéndonos en nuestras plataformas de redes sociales, incluidas [Facebook][8], [LinkedIn][9] y [Twitter][10].

## Hacer una pregunta
Puede informarnos sobre sus preguntas o consultas en nuestro [Foro][11].

## Preguntas frecuentes
**¿Qué es la tenencia múltiple en Kubernetes?**?
Siga este [enlace][6] para conocer la múltiplo tenencia de Kubernetes.
**¿Qué es un clúster de inquilino múltiple VS?**
En un clúster de múltiples inquilinos, todos los inquilinos/clientes comparten el clúster de Kubernetes, mientras que, en un clúster de inquilino único, hay un clúster separado que se ejecuta para cada inquilino.

## Ver también
  * [¿Qué es la computación sin servidor? | Arquitectura sin servidor][12]
  * [¿Qué es la multitenancia? | ¿Por qué un enfoque de múltiples inquilinos?][13]
  * [¿Qué es generativo AI? Inteligencia artificial generativa][14]
  * [Cómo integrar chatgpt con hojas de Google][15]
  * [Cómo usar chatgpt en vscode | El código de extensión VScode GPT][16]
  * [¿Qué es OpenAi Chatbot GPT-3 | Chatgpt una revolución ai][17]
  * [Una introducción a la inteligencia artificial | ¿Qué es AI?][18]

  
[1]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[2]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/#Serverless-vs-Containers
[3]: https://products.containerize.com/devops/kubernetes/
[4]: https://www.containerize.com/
[5]: #Multi-Tenant-container-hosts
[6]: #Kubernetes-Multi-Tenancy-
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
