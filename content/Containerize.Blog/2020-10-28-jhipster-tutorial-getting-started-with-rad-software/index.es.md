---
title: "Tutorial Jhipster | Comenzando con el software RAD" 
seoTitle: "Tutorial Jhipster | Comenzando con el software RAD" 
description: "Un tutorial de Jhipster paso a paso para que los principiantes se inicien. Siga este artículo para configurar la primera aplicación con el software RAD Jhipster Open Source." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Vamos a sumergirnos en un generador de código fuente. Ofrece características listas para usar para generar aplicaciones receptivas basadas en la web con API REST bien documentada." 
url: /es/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## Veamos en un generador de código fuente. Ofrece características listas para usar para generar aplicaciones receptivas basadas en la web con API REST bien documentada.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="tutorial de jhipster">}}


## Descripción general:
Recientemente publicamos una [publicación de blog][1] sobre la importancia del [software rad][2] en los tiempos actuales. La tecnología está evolucionando a un ritmo muy alto. Los requisitos y necesidades comerciales cambian día a día. Hay una carrera para desarrollar soluciones en un período de tiempo más corto. Por otro lado, cada empresa quiere capturar el mercado lanzando el producto lo antes posible. Por lo tanto, la comunidad de código abierto ha desarrollado muchos software que se basan en **Desarrollo de software ágil** . Estos software de desarrollo de aplicaciones rápidas gratuitas facilitan a los usuarios con capacidades de desarrollo de prototipos rápidos. Le permite construir y iniciar la versión inicial de su producto y, por lo tanto, puede desarrollar más lanzamientos con la entrada de comentarios de los usuarios. Además, estos software están diseñados para absorber cualquier cambio en cualquier etapa del proyecto.
Mientras tanto, los equipos de desarrollo de software aceleran sus procesos de desarrollo y se aseguran de entregas anteriores. De hecho, es rentable, ahorran tiempo y da satisfacción a los desarrolladores y usuarios. El desarrollo rápido de aplicaciones es lo suficientemente flexible como para que no necesite tener plazos planificados y estrictos. Construyes lo que necesitan tus consumidores finales. En este tutorial de Jhipster, veremos cómo configurar [jhipster][3] y crearemos nuestra primera aplicación con él cubriendo los siguientes puntos:
  * [¿Qué es Jhipster y cómo instalarlo?][4]
  * [¿Cómo generar y ejecutar una aplicación básica?][5]
  * [Explore el tablero de administración de la aplicación generada][6]
  * [Conclusión][7]

## ¿Qué es Jhipster y cómo instalarlo?   {#instalar}
[Jhipster][3] es un software RAD de código abierto que se utiliza para generar aplicaciones web empresariales. Este constructor de aplicaciones de código abierto ofrece un marco de arranque de resorte basado en Java en el lado del servidor y las populares tecnologías front-end como Angular, Vue.js y React.js. Este generador de código fuente incluye una arquitectura de microservicio robusta con múltiples mecanismos de autenticación de usuarios como OAuth.20, JWTS y la autenticación de la sesión HTTP. Además, proporciona una versión en línea donde los usuarios pueden explorar todas las funciones. Esta **herramienta de prototipos de código abierto**  está escrita en JavaScript con una pequeña entrada de TypeScript. Por lo tanto, la documentación integral está disponible con respecto al desarrollo y la implementación. Los desarrolladores pueden encontrar el código fuente en el repositorio [Github][8]. Existe un soporte completo para ejecutar pruebas utilizando marcos de prueba populares como Gatling y ProTractor. Además, es robusto, seguro, multiplataforma y admite integraciones de terceros.
En este **tutorial Jhipster,**  Exploraremos Jhipster con respecto a su configuración y uso. [Jhipster][3] es gratuito y está construido sobre el modelo de desarrollo de aplicaciones rápidas. Proporciona un ecosistema amigable para el desarrollador que es bastante prometedor y presenta potentes herramientas rápidas de desarrollo de aplicaciones web.
Veamos cómo podemos instalar este constructor de aplicaciones de código abierto. Primero, instalaremos los siguientes requisitos previos.
  * [Java 11 JDK][9]
  * [Node.js 10.20.1+][10]
Una vez que se complete la instalación, abra el terminal y ejecute el siguiente comando.
`NPM Install -G Generator -Jhipster`
Este comando puede tomar unos minutos, y después de completar exitosamente, Jhipster se instalará en su máquina.
Puede verificar el siguiente comando para verificar la instalación.
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="Instalación de jhipster">}}


## ¿Cómo generar y ejecutar una aplicación básica?   {#correr}
En la sección de este **Tutorial Jhipster** , aprenderemos cómo generar nuestra primera aplicación utilizando este software RAD de código abierto.
Regrese a la ventana del terminal, ejecute los siguientes comandos:
`mkdir 1stappcd 1stapp/`
Después de hacer directorios, ejecute el siguiente comando mencionado a continuación:
`Jhipster`
Este comando iniciará el proceso. Responda todas las preguntas sobre las preferencias de la tecnología de aplicaciones, como las tecnologías frontales y de back -end, la base de datos, el marco de prueba y más como puede ver en la imagen a continuación.

{{< figure align=center src="images/qst-1024x474.png" alt="tutorial de jhipster">}}

Después de responder a todas las preguntas, este generador de código fuente generará archivos de código en su carpeta.
Ahora, ejecute la aplicación generada con el siguiente comando:
`./MVNW`
Nota: Este comando funcionará si ha elegido a Maven como Automatización de compilación para el backend.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="tutorial de jhipster">}}

Acceda a su aplicación al navegador en http: // localhost: 8080/.

## Explore el tablero de administración de la aplicación generada   {#dashboard}
Una vez que presione http: // localhost: 8080/en su navegador, verá la siguiente pantalla.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="generador de códigos">}}

Puede usar las credenciales mencionadas para iniciar sesión como administrador. Jhipster proporciona dos roles de usuario predeterminados. Después de un inicio de sesión exitoso, tendrá las siguientes disposiciones que se muestran en la imagen.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="Software de código abierto RAD">}}

Jhipster proporciona administración completa de usuarios donde puede administrar a sus usuarios como puede ver en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Gestión de usuarios de jhipster">}}

La opción de salud le brinda información sobre su espacio en disco y su base de datos.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="tutorial de jhipster">}}

Hay un sistema de registro completo disponible en el tablero de administración de Jhipster.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="Software de código abierto RAD">}}

El tablero de administración de este constructor de aplicaciones de código abierto también proporciona puntos finales REST de funcionalidades integradas y personalizadas.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Jhipster de código abierto">}}


## conclusión   {#con}
Este es el final de este tutorial Jhipster. Hay muchas plataformas RAD de código abierto que proporcionan **desarrollo de aplicaciones instantáneas **. Hay una comunidad muy vibrante que siempre está viva para responder a los problemas y sus soluciones. La metodología RAD está ganando fama debido a muchos factores. En primer lugar, no es necesario tener una comprensión completa de los requisitos. En segundo lugar, el consumidor final está involucrado durante todo el ciclo de vida del desarrollo de software. En tercer lugar, el factor de riesgo es muy menor ya que todas las partes interesadas están a bordo. Sin embargo, el software RAD es adaptable, amigable para el desarrollador y flexible a los cambios. Ahorra mucho tiempo a medida que los generadores de código ahorran un tiempo inmenso para reescribir los scripts repetitivos. Este  **[Jhipster][3] Tutorial**   Artículo destacó algunas ideas importantes. Es liviano y fácil de configurar con algunos comandos de shell simples.
Siéntase libre de instalar este constructor de aplicaciones de código abierto hoy si está buscando seriamente una plataforma de desarrollo de aplicaciones rápidas de código abierto. Finalmente, [Contenerize.com][11] está listo para mejorar su base tutorial con algunos tutoriales más interesantes. Manténgase conectado con esta categoría [desarrollo rápido de aplicaciones][2] para actualizaciones regulares.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Plataforma Cuba][12]
  * [QuickApp][13]
  * [Jhipster][3]
  * [Li3][14]
  * [Apache ISIS][15]
  * [Top 5 Software de desarrollo de aplicaciones rápidas gratuitas en 2021][16]
  * [Software rápido de desarrollo de aplicaciones para negocios | Rad][17]
  * [Cosas para revisar antes de optar el software de código abierto en 2021][18]

  
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
