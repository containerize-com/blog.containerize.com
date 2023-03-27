---
title: "Una guía paso a paso para configurar Jitsi de código abierto de código abierto" 
seoTitle: "Una guía paso a paso para configurar Jitsi de código abierto de código abierto" 
description: "Aprenda a configurar Jitsi Meet. Es un software de videoconferencia de código abierto diseñado para satisfacer las necesidades de comunicación remota y ofrece características potentes." 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet reúne a personas remotas para realizar reuniones efectivas. Aprendamos cómo configurar este software de videoconferencia y explorar sus características" 
url: /es/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet reúne a personas remotas para realizar reuniones efectivas. Aprendamos cómo configurar este software de videoconferencia y explorar sus características

{{< figure align=center src="images/jitsi-bannerF.png" alt="software de videoconferencia">}}


## Descripción general
Recientemente publicamos una [publicación de blog][1] que habla sobre el impacto del [software de videoconferencia][2] en el sector corporativo. Sin embargo, en este artículo, cubriremos los siguientes puntos.
  * [Una breve introducción de Jitsi Meet][3]
  * [¿Cómo configurar Jitsi Meet?][4]
  * [Exploración de características de JITSI para conocer][5]
  * [Conclusión][6]

## Una breve introducción de Jitsi Meet {#intro}

[Jitsi Meet][7] es un software de colaboración de video de video, seguro y escalable completamente gratuito. Proporciona varias características populares, como la videoconferencia multipartidista con cifrado completo, soporte para Etherpad y grabación de video/audio. Este software compatible con WEBRTC le permite invitar a tantos usuarios como desee en una reunión de video.
El aumento de las reuniones virtuales comenzó en los últimos tiempos y las personas creen que la comunicación a través de llamadas de video/audio es más efectiva y colaborativa. Sobre todo, esta categoría de software no solo funciona en computadoras portátiles/computadoras de escritorio, sino que también permite a los participantes asistir a reuniones de video seguras cara a cara a través de su teléfono móvil.

## ¿Cómo configurar Jitsi Meet? {#setup}

En esta sección, entraremos en el proceso de instalación de Jitsi Meet. Primero, asegúrese de haber instalado el siguiente requisito previo.
  * [Docker][8]
Una vez que se instale Docker, descargue el archivo zip del código fuente de este [enlace][9].
Abra el terminal y ejecute el siguiente comando
`CD Docker-Jitsi-Meet`
Después de eso, ejecute el siguiente comando para crear un `.env`
`cp env.example .env`
Ahora, ejecute el siguiente comando para crear los directorios requeridos.
`mkdir -p ~/.jitsi-meet-cfg/{web/letsencrypt, transcripciones, prosody/config, prosody/prosody-plugins-custom, jicofo, jvb, jigasi, jibri}`
Finalmente, ejecute este comando para girar la imagen de Docker y acceder a la aplicación en esta URL en el navegador.
`Docker -Compose Up -d`

## Jitsi Meet Características Exploración {#features}

Este software de chat de video gratuito ofrece muchas características ricas. Esta es la página de inicio que se mostrará primero.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="videoconferencia">}}

Escriba el título de la reunión y presione "Go" y aterrizará en la siguiente ventana de transmisión de video.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="software de código abierto">}}

Puede invitar a las personas a la reunión compartiendo el enlace que se muestra en la ventana emergente. Además, puede incrustar la transmisión de video en cualquier lugar obteniendo el código.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="software de código abierto">}}

Le da la opción de compartir su pantalla con otros participantes.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Chat de video">}}

Desde la esquina superior derecha, puede ver los detalles de su conexión de video.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Chat de video gratis">}}

Jitsi Meet ofrece chat integrado con emojis.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Software de reunión de video">}}


## Conclusión {#con}

En este artículo, pasamos por un impresionante software de comunicación remota y su proceso de instalación. Además, es hora de optar por las mejores soluciones para sincronizar las necesidades comerciales con tecnologías en evolución. Al final, [Contenerize.com][10] ha estado trabajando para extender la lista de software de videoconferencia. Por lo tanto, manténgase conectado con la categoría [Software de videoconferencia][2] para actualizaciones regulares.

## Páginas de productos relevantes
Puede encontrar los siguientes enlaces relevantes:
  * [Jitsi Meet][7]
  * [BigblueButton][11]
  * [OpenVidu][12]
  * [Elemento][13]
  * [Cable][14]



[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
