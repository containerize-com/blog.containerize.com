---
title: "¿Qué es la multitenancia? | ¿Por qué un enfoque de múltiples inquilinos?" 
seoTitle: "¿Qué es la multitenancia? | ¿Por qué un enfoque de múltiples inquilinos?" 
description: "¿Qué es la multitenancia? Siga esta publicación de blog para aprender el concepto real detrás de la tenencia múltiple y comenzar a construir aplicaciones múltiples escalables." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "Diseñe una arquitectura de aplicaciones de múltiples inquilinos y cumpla con los requisitos de su usuario de manera eficiente. Exploremos cómo la multitenancia le permite crear un software escalable." 
url: /es/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## Diseñe una arquitectura de aplicaciones de múltiples inquilinos y cumpla con los requisitos de su usuario de manera eficiente. Exploremos cómo la multitenancia le permite construir un software escalable.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## Descripción general
Bienvenido a otra publicación de blog en la categoría de [programación][1]. Vamos a discutir una arquitectura de aplicaciones de múltiples inquilinos. De hecho, [Contenerize.com][2] tiene una amplia gama de aplicaciones de múltiples inquilinos en su pila de productos de código abierto. Las aplicaciones de múltiples inquilinos de código abierto incluyen [Form.io][3], [Botpress][4] y más. Además, hay una [documentación] completa [5] disponible con respecto a la arquitectura, la implementación, el desarrollo y el uso de este software de código abierto. La razón detrás de escribir este artículo es dar una comprensión del concepto detrás de la tenencia múltiple en el desarrollo de software. Entonces, descubramos  **¿Qué es la multitenancia?**  También pasaremos por los pros y los contras de la arquitectura multitenancia y múltiples inquilinos versus un solo inquilino.
Los siguientes puntos se discutirán en esta publicación:
  * [¿Qué es la multitenancia? Multi-inquilino vs inquilino único][6]
  * [Tipos de arquitectura de aplicaciones de múltiples inquilinos][7]
  * [Beneficios comerciales de la aplicación Multi-Wenant][8]
  * [Descartos en la tenencia múltiple][9]

## ¿Qué es la multitenancia? Multi-inquilino versus un solo inquilino {#What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant}

La multitenancia se refiere a una instancia de un servidor único que sirve múltiples front-end inquilinos particularmente conocidos. Cada vez que se encuentre con un software de múltiples inquilinos, solo dígale a su cerebro que este software está ejecutando una sola instancia de un servidor compartido y múltiples inquilinos (clientes) están conectados a esta instancia con diferentes marcas.
Por ejemplo, el software creado para una universidad atiende a diferentes departamentos que tienen diferentes marcas front-end y datos del programa. Básicamente, hay una sola instancia del servidor que se ejecuta y sirve a todos los inquilinos. Además, hay separación de datos y privacidad de datos entre todos los inquilinos. Además, cada inquilino tiene su propia lógica comercial y obtiene y almacena sus datos en una ubicación única pero privada/aislada.

{{< figure align=center src="images/multi-tenant-1.png" alt="arquitectura de múltiples inquilinos">}}

Ahora, echemos un vistazo rápido a la arquitectura de un solo inquilino. En la arquitectura de un solo inquilino, hay una instancia de servidor por inquilino. Nuevamente, tomemos un ejemplo de software universitario. El enfoque de inquilino único se refiere a una instancia de servidor por departamento y el número de instancias depende del número de departamentos (inquilinos).

{{< figure align=center src="images/single-tenant-2.png" alt="arquitectura de un solo inquilino">}}


## Tipos de arquitectura de aplicaciones múltiples de inquilino {#Types-of-Multi-Tenant-Application-Architecture}

Hasta ahora, comprende la tenencia múltiple y ahora pasaremos por sus diversos tipos.
 **Una base de datos: una instancia de aplicación** : Este enfoque es bastante popular y se ha utilizado ampliamente para crear aplicaciones multiinquilir. Según este enfoque, hay una instancia de aplicación que se ejecuta con una única base de datos. Además, hay un esquema compartido y los datos del inquilino se almacenan en una sola ubicación contra su identificación única.
 **Múltiples base de datos: una instancia de la aplicación:**  En esta arquitectura de aplicaciones de múltiples inquilinos, solo una instancia de la aplicación se ejecuta con múltiples bases de datos. Cada inquilino tiene su propio esquema de base de datos donde toda la información se guarda por cada inquilino por separado.
 **Base de datos múltiples: múltiples instancias de aplicaciones** : El tercer enfoque se refiere a ejecutar múltiples instancias del servidor junto con múltiples bases de datos. No hay nada compartido y cada inquilino tiene aislamiento completo y no hay dependencia entre los inquilinos.

## Beneficios comerciales de la aplicación multiinquilir {#Business-Benefits-of-Multi-Tenant-App}

En esta sección, pasaremos por algunos beneficios destacados de optar por la multitenancia. Aunque, podemos pasar mucho tiempo discutiendo las ventajas, pero veamos los siguientes puntos:
 **Escalabilidad** : Es fácil escalar una arquitectura de múltiples inquilinos. Puede escalar horizontal o verticalmente independientemente del tipo que haya elegido.
 **Rentolador** : Optar por la múltiples múltiples ahorra sus costos operativos. Hay recursos compartidos, por lo que siempre es rentable ampliar los recursos.
 **Eficiencia y flexibilidad** : En un entorno multitenante, logra la eficiencia en el desarrollo y la implementación. Por ejemplo, puede ejecutar un script en un esquema de base de datos compartido para actualizar a todos los inquilinos.
 **Una mejor gestión de recursos** : Agregar y eliminar recursos es sencillo. Además, esta arquitectura ofrece infraestructura mejorada y bien administrada. Además, cada inquilino es privado y seguro y tiene acceso a una base de datos compartida/no compartida.

## Inconvenientes en múltiples tenientes {#Drawbacks-in-Multi-Tenancy}

El propósito de esta publicación de blog es dar un sentido justo de  **arquitectura multiinquilir.**  Por lo tanto, exploremos algunas de las desventajas adjuntas a la tenencia múltiple.
 **Mecanismo de autenticación compleja** : Debido a la naturaleza compartida de la asignación de recursos en la multitenancia, existen protocolos estrictos para los puntos de acceso de datos.
 **Desglose del servidor:**  Es un punto importante a tener en cuenta al seleccionar la arquitectura de aplicaciones múltiples. Todos los inquilinos se vuelven no funcionales cada vez que el servidor está inactivo debido a cualquier motivo.
 **Riesgo de privacidad** : En una arquitectura de múltiples inquilinos, hay un alto riesgo de violación de seguridad. De hecho, los datos de todos los inquilinos se almacenan en una base de datos compartida, por lo que cualquier invasión de terceros podría dar lugar a la corrupción o robo de datos.

## Conclusión
Estamos terminando esta publicación de blog aquí. ¿Este artículo tiene la respuesta a sus preguntas, como  **, ¿qué es multitenancia?** ? Además, también hemos explorado **Infraestructura**  de inquilino multiinte frente a un solo inquilino**. Además, esta guía lo ayudará a optar por la arquitectura de aplicaciones de múltiples inquilinos o un solo inquilino. Sobre todo, la multitenancia es la primera opción si está construyendo un SaaS. Hay otras publicaciones de blog interesantes que puede encontrar en la sección "Ver también" que le dará las últimas ideas sobre el mundo tecnológico.
Finalmente, [Contenerize.com][2] está escribiendo continuamente publicaciones de blog sobre otros productos y temas de código abierto. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook][10], [LinkedIn][11] y [Twitter][12].

## Hacer una pregunta
Puede informarnos sobre sus preguntas o consultas en nuestro [Foro][13].

## Preguntas frecuentes
 **¿Qué es multi-inquilino con ejemplo?** 
Visite este [enlace][6] para saber qué es la multitenancia. Hay detalles junto con ejemplos.
 **¿Cuál es el significado de la arquitectura de múltiples inquilinos?** 
A  **Arquitectura de aplicaciones de múltiples inquilinos**  significa una sola instancia de un servidor atiende a múltiples inquilinos (clientes). Navegue a este [enlace][7] para obtener más detalles.

## Ver también
  * [¿Qué es generativo AI? Inteligencia artificial generativa][14]
  * [Cómo integrar chatgpt con hojas de Google][15]
  * [Cómo usar chatgpt en vscode | El código de extensión VScode GPT][16]
  * [¿Qué es OpenAi Chatbot GPT-3 | Chatgpt una revolución ai][17]
  * [Una introducción a la inteligencia artificial | ¿Qué es AI?][18]



 [1]: https://blog.containerize.com/category/programming/
 [2]: https://www.containerize.com/
 [3]: https://products.containerize.com/form/formio/
 [4]: https://products.containerize.com/live-chat/botpress/
 [5]: https://products.containerize.com/
 [6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
 [7]: #Types-of-Multi-Tenant-Application-Architecture
 [8]: #Business-Benefits-of-Multi-Tenant-App
 [9]: #Drawbacks-in-Multi-Tenancy
 [10]: https://web.facebook.com/containerize
 [11]: https://www.linkedin.com/company/containerize/
 [12]: https://twitter.com/containerize_co
 [13]: https://forum.containerize.com/
 [14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
