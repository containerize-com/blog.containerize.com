---
title: "Cómo configurar el software de chat en vivo en el sitio web | Cohete.chat" 
seoTitle: "Cómo configurar el software de chat en vivo en el sitio web | Cohete.chat" 
description: "Rocket.chat es fácil de configurar, ayuda a los equipos y clientes a comunicarse de manera eficiente. Este software de chat en vivo es de código abierto, multiplataforma y autohospedado." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "El software de soporte de chat en vivo aporta conveniencia y eficiencia para entregar el soporte al cliente. Aprendamos a instalar Rocket.Chat en el sitio web de su negocio." 
url: /es/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## El software de soporte de chat en vivo aporta conveniencia y eficiencia para entregarle atención al cliente. Aprendamos a instalar Rocket.Chat en el sitio web de su negocio.

{{< figure align=center src="images/rocketchat-1.png" alt="Software de chat en vivo">}}


## Descripción general
Hemos publicado algunas publicaciones de blog relacionadas con el software de chat en vivo de código abierto como [Top 5 Software gratuito de chat de atención al cliente para el sitio web] [1], [Mensajes instantáneos de WordPress usando Rocket.Chat] [2] y algunos más. En esta publicación de blog, pasaremos por el mejor software líder de soporte al cliente Rocket.chat. Con el gran aumento en el tráfico en línea, a las empresas les resulta difícil entretener a una gran cantidad de consultas a tiempo. Los visitantes vienen a su sitio, tienden a adquirir información relacionada con los productos o servicios, y abandonan su sitio en caso de no recibir respuesta. Por lo tanto, el soporte de chat en vivo lo ayuda a saludar a sus clientes de manera activa mientras pasan por su sitio web. O, en caso de que necesiten ayuda y aclaración para tomar sus decisiones de compra.
El soporte de chat en vivo aumenta sus posibilidades de convertir a un visitante en un cliente. Hay muchos de código abierto ** Soporte de chat en vivo Softwar ** e disponible. Pero, Rocket.Chat ha ganado mucha atracción debido a sus características. Y se está tratando como una alternativa al software de chat líder en la industria como Slack y Microsoft Team. En este artículo, aprenderemos cómo instalar Rocket.Chat en un servidor y luego cómo configurarlo en su sitio web. Entonces, comencemos cubriendo los siguientes puntos.
  *[** ¿Qué es Rocket.cha ** t?] [3]
  *** [Cómo instalar Rocket.Chat?fontefniEmmthmandmonmmmmmmmmmmmmmmro aslememgado
  *** [Habilitar la función de chat en vivo] [5] **
  *** [Instale el widget de chat en vivo en su sitio web] [6] **
  *** [Conclusión] [7] **

## ¿Qué es Rocket.chat {#Intro}
[Rocket.chat] [8] se encuentra entre el popular software de chat en vivo **. Tiene una versión gratuita de chat en vivo como una edición comunitaria, así como una versión de chat en vivo alojada pagada para grandes empresas con características de chat internas privadas. Rocket.Chat admite la atención al cliente de Live Chat junto con la función de chat del equipo. Es multiplataforma y ofrece soporte para casi todas las plataformas populares como Windows, Mac, Linux y aplicaciones móviles también. Este ** Software de soporte al cliente ** es seguro, extensible y ofrece integración con aplicaciones populares de terceros como Trello, Google Drive y más. Hay muchas características poderosas que ofrecen Rocket.Chat, como múltiples habitaciones, salas de chat privadas, notificaciones, emojis, autenticación LDAP e interfaz RESTful. Además, esta herramienta gratuita es fácil de implementar y viene con capacidades de autohostación. Además, ofrece una interfaz lógica y fácil de usar donde los usuarios pueden modificar los temas como la oscuridad, la luz o el negro.
Este ** Software de soporte de chat ** está escrito en JavaScript, toda la documentación está disponible con respecto al desarrollo y la implementación. Por lo tanto, puede encontrar todo el código fuente en [GitHub] [9]. Para más detalles, puede leer sobre Rocket.Chat [aquí] [10].

## Cómo instalar Rocket.Chat {#Install}
Entonces, sabemos lo que es Rocket.Chat y en esta sección, aprenderemos cómo instalar este software de chat en vivo. Puede instalar Rocket.Chat desde una variedad de mercados, como Ubuntu Snaps, DockerHub, o instalarlo en su propio servidor. En este artículo, nos centraremos en la instalación de Rocket.Chat a través de Snaps on Ubuntu. Que es el método de instalación más rápido.
Las instantáneas son seguras. Rocket.chat y todas sus dependencias están aisladas del resto de su sistema. Snaps también actualiza automáticamente cuando hay un nuevo lanzamiento.
En Ubuntu primero, instale Snap con el siguiente comando
```
sudo apt-get install snapd
```
Luego instale el servidor Rocket.Chat a través del comando Snap.
```
sudo snap install rocketchat-server
```
Snap ya está en funcionamiento. Explore a http: // localhost: 3000 y configure Rocket.chat. Puede configurar el proxy NGINX para mapear Rocket.Chat Instance con su dominio.

## Habilitar la función de chat en vivo {#enable}
Una vez que el software Rocket.Chat está instalado y configurado, el siguiente paso es habilitar sus características. Esta sección de la publicación del blog describe cómo habilitar ** Software de soporte de chat ** en su sitio web. Para habilitar la función Livechat en su instancia de cohete.
1. Vaya a ** Administración **

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="administración de chat.chat">}}

2. Busque ‘** omnichannel **‘ en ** Configuración ** y habilitarlo.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="rocket.chat búsqueda omini">}}

Una vez habilitado, un administrador tendrá acceso a la configuración del panel Omnichannel a través de un nuevo menú llamado Omnichannel en el menú desplegable de la esquina superior izquierda.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.chat omini canal">}}

Y luego configure la apariencia del widget de chat en vivo

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="rocket.chat widget livechat">}}


## ** Instale el widget de chat en vivo en su sitio web ** {#Widget}
En esta sección, instalaremos widgets de chat en vivo en el sitio web de negocios. Ahora, para acceder a ** Instalación de Livechat ** Configuración:
Vaya a ** Instalación de Livechat ** en la configuración del panel omnicanal, como se muestra a continuación, y copie la pieza de código dada.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="rocket.chat widget">}}

Y, pegue este código por encima de la última etiqueta de su sitio; El widget de chat en vivo aparecerá en la esquina inferior derecha de su página web. Como se muestra a continuación según sus configuraciones de chat en vivo.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Software de chat en vivo">}}

{{_LINE_48_}}

## conclusión {#conclusion}
Esto nos lleva al final de esta publicación de blog. En este artículo, hemos pasado por lo que es Rocket.Chat, cómo instalar Rocket.Chat y también le hemos mostrado cómo instalarlo en su propio servidor a través de Snaps Ubuntu. También aprendimos cómo habilitar la función de chat en vivo e instalar el widget en su sitio web. Además, ** Software de atención al cliente ** se ha convertido en un componente imprescindible de cualquier sitio web comercial debido a ciertos factores que discutimos anteriormente. Sin embargo, esta publicación de blog realmente lo ayudará si está buscando implementar un software de chat en vivo de código abierto en el sitio web de su negocio. Además, hay muchos otros ** software de soporte de chat ** y artículos disponibles en la sección "Explorar" a continuación que puede consultar.
Finalmente, [** Contenerize.com **] [11] está escribiendo artículos sobre Open Open Source ** Aplicaciones de chat de código abierto. ** Por lo tanto, manténgase en contacto con la categoría [Chat en vivo] [12] para actualizaciones regulares. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook] [13], [LinkedIn] [14] y [Twitter] [15].

## Explorar
Puede encontrar los siguientes enlaces relevantes.
  * [Zulip] [16]
  * [Lets-Chat] [17]
  * [Botpress] [18]
  * [Cómo crear un bot basado en AI para su negocio usando Botpress] [19]
  * [Top 5 Software gratuito de chat de atención al cliente para el sitio web] [1]
  * [Mensajes instantáneos de WordPress usando Rocket.Chat] [2]
  * [Automatice las operaciones comerciales con software gratuito y de código abierto] [20]
  * [Cómo crear y ejecutar un bot en Rocket.Chat usando botpress] [21]
  * [Automatice las operaciones comerciales con software gratuito y de código abierto] [20]
[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
