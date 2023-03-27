---
title: "Cómo configurar y procesar rebotes en Phplist" 
seoTitle: "Cómo configurar y procesar rebotes en Phplist" 
description: "Phplist es una poderosa lista de correo autohospedada y gerente de boletín. Ayuda a las empresas a enviar campañas de boletines y rebotes de procesos fácilmente." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Envíe una campaña con el boletín de código abierto y el software de marketing por correo electrónico. Configurar la gestión de rebote en Phplist y automatizar el procesamiento de rebote para listas de correo saludables." 
url: /es/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Enviar campaña con boletín de código abierto y software de marketing por correo electrónico. Configurar la gestión de rebote en Phplist y automatizar el procesamiento de rebote para listas de correo saludables.

{{< figure align=center src="images/phplist-2.png" alt="proceso rebota phplist">}}

Hemos escrito artículos para implementar [múltiples tenientes][1] y [envío de campaña de boletín][2] en Phplist. En este artículo, cubriremos estos puntos en detalle sobre los rebotes del proceso en Phplist.
  * [¿Qué es Phplist?][3]
  * [¿Qué es el rebote?][4]
  * [Configuración de gestión de rebote][5]
  * [¿Cómo procesar rebotes?][6]
  * [Conclusión][7]

## ¿Qué es phplist? {#phplist}

Phplist es el software de envío del boletín gratuito y de código abierto más populares. Phplist permite que las empresas envíen correos electrónicos de marketing, actualizaciones de productos y anuncios a los suscriptores. Ayuda a las empresas a administrar el listado, diseñar un boletín hermoso, una campaña de programación y gestión de rebote. [Leer más][8]

## ¿Qué es Bounce? {#bounce}

Un rebote es un mensaje de correo electrónico que no se puede entregar debido a la cantidad de razones y volver al remitente. Es posible que tengamos razones como el buzón está llena, la dirección de correo electrónico ya no es una dirección de correo electrónico válida o incorrecta. Debido a esto, debe procesar rebotes para no enviar correos electrónicos a direcciones de correo electrónico no válidas.

## Configuración de gestión de rebote {#setup}

Para configurar la administración de Bounce, debe configurar las siguientes configuraciones en el archivo config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist: gestión de procesamiento de rebote">}}

Explicaremos en los siguientes pasos más sobre estas configuraciones.
  * Primero, debe agregar la dirección de correo electrónico donde desea recibir mensajes de rebote. Puede encontrar **Message_envelope** Variable y agregar su dirección de correo electrónico.
* Phplist puede obtener correos electrónicos del buzón de rebote a través de dos protocolos, **mbox y pop3**. Entonces, busque**Bounce_protocol** Variable y cámbielo según su entorno.
* Si ha establecido **mbox**prototcol, debe definir el formato de archivo para ello. Entonces, busque**Bounce_mailbox** y configure una ruta como "/var/spool/mail/listBoUnces".
* En caso de que haya usado **Pop3**Protocolo, debe configurar****Host, nombre de usuario y contraseña** para buzón. Puedes ver estas configuraciones en Sreenshot arriba.
* Además de la configuración anterior para el protocolo **POP3** , es posible que deba agregar puerto y cifrado.

## ¿Cómo procesar los rebotes? {#process}

Phplist admite dos métodos para rebotes de procesos: manual y automatizado. Tendrá que crear un trabajo cron para automatizar el procesamiento de rebote. También puede procesar manualmente rebotes visitando **Sistema> Página de procesos**. Por lo tanto, primero debe cambiar**manualmente \ _Process \ _BoUnces** Configuración de acuerdo con sus requisitos. Puede visitar [Phplist Docs][9] para configurar el trabajo cron para los rebotes de procesos.

## Conclusión {#conclusion}

En esta publicación, hemos aprendido cómo configurar la dirección de correo electrónico de rebote y los rebotes de procesos. Puede procesar fácilmente los rebotes con el método manual, si tiene menos cantidad de suscriptores. Sin embargo, debe usar el proceso de manejo de rebote automatizar para listas grandes. Le ahorrará tiempo y lo ayudará a crear listas de suscriptores limpias y válidas.



[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
