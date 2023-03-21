---
title: "Automatizar el sistema de boletos con WordPress y Osticket" 
seoTitle: "Automatizar el sistema de boletos con WordPress y Osticket" 
description: "Osticket-WordPress Integration proporciona una forma para que los clientes generen boletos de soporte desde el sitio de WordPress y los administre desde Osticket Dashboard." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Automatice el proceso de servicio de ayuda con una integración perfecta de WordPress e Osticket. Transforme las consultas de los clientes a través de formularios basados ​​en la web en boletos de soporte." 
url: /es/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Automatice el proceso de servicio de ayuda con una integración perfecta de WordPress e Osticket. Transforme las consultas de los clientes a través de formularios basados ​​en la web en boletos de soporte.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Integración Osticket-WordPress para automatizar el sistema de entradas">}}

Sus clientes pueden tener consultas con respecto a sus productos/servicios. Enviarán sus consultas a través de diferentes formularios en su sitio de WordPress. La integración Osticket-WordPress ayuda a convertir esas consultas en boletos. Envía datos a través de API al sistema Osticket HelpDesk.
Osticket es un sistema de boletos de servicio abierto y de código abierto. Los clientes pueden crear boletos con respecto a sus consultas en Osticket. Este sistema de servicio de ayuda hace que sea muy fácil para cualquier organización administrar las consultas provenientes de sus clientes. El administrador puede crear departamentos y equipos, y asignar boletos a diferentes agentes de acuerdo con la naturaleza de los boletos creados. Este sistema gratuito de código abierto realizará un seguimiento de los problemas. Permite a los clientes y agentes comentar sobre el boleto para discutir el progreso. Cubriremos las siguientes secciones en esta publicación de blog:
  * [Proceso de integración][1]
  * [Instalación del complemento de WordPress][2]
  * [Procedimiento de autenticación][3]
  * [Conclusión][4]

## Proceso de integración:   {#integration}
La integración de Osticket y WordPress requiere un formulario de contacto en el sitio de WordPress con los siguientes campos
  1. Ayuda Tema
  2. Correo electrónico
  3. Nombre completo
  4. sujeto
  5. Mensaje
El formulario de contacto debe enviar correos electrónicos, porque este complemento engancha la función wp_mail para obtener los datos de los formularios.

## Instalación del complemento de WordPress:   {#WordPress}
  1. Vaya al tablero de administración de su sitio de WordPress.
  2. Luego vaya a la sección de complementos.
  3. Luego instale este [complemento][5].
  4. Después de eso, active el complemento.
  5. y vaya a "configurar" -> "conector Osticket".
  6. Luego ingrese la URL de su sitio de Osticket, es decir, [http: //your.domain/api/tickets.json][6]
  7. Ingrese la clave API creada desde el panel de administración de Osticket (explicado en la siguiente sección).
  8. Al final, complete todos los campos para mapear los datos de su formulario de contacto a los campos de boletos de Osticket.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Integración Osticket-WordPress para automatizar el sistema de entradas">}}


## Procedimiento de autenticación:   {#auth}
La autenticación API se realiza a través de teclas API configuradas dentro del panel de administración de Osticket. Las claves API se generan y se vinculan a una dirección IP de origen que se verifica con la IP de origen de las solicitudes de API HTTP. Para crear la tecla API
  1. Vaya al panel de administración de Osticket.
  2. Haga clic en "Administrar".
  3. Vaya al submenú "teclas API".
  4. Haga clic en "Agregar nueva tecla API".
  5. Establezca "estado" en activo.
  6. Verifique la casilla de verificación "Puede crear boleto".
  7. Ingrese la dirección IP de su sitio de WordPress y presione "Agregar clave".

{{< figure align=center src="images/osticket-1024x729.png" alt="Integración Osticket-WordPress para automatizar el sistema de entradas">}}


## Conclusión:   {#Conclusion}
La integración Osticket-WordPress automatizará el proceso de venta de tickets. Por lo tanto, facilitará la vida del equipo de apoyo. Las consultas en el sitio web de WordPress se convertirán automáticamente en boletos de soporte en Osticket. Para que el equipo de soporte pueda administrar todas las consultas de los clientes de manera más fácil y eficiente. Los agentes de soporte serán notificados por notificaciones por correo electrónico. Por lo tanto, los agentes pueden resolver las consultas de los clientes a tiempo. La sección de comentarios sobre Osticket ayuda tanto a los clientes como a los agentes de apoyo a comunicarse de manera efectiva y oportuna. También facilita a los gerentes realizar un seguimiento del progreso para cada boleto.

## Explorar:
Para obtener más información sobre Osticket y WordPress, consulte estas páginas:
  * [Osticket - Sistema gratuito de Ticketing de Ticket de TicketSk de Helpdesk de código abierto][7]
  * [WordPress: código abierto gratuito y la herramienta de blogs y Blogging más utilizada][8]
  * [Cómo configurar el software de la mesa de ayuda en línea usando Osticket][9]

  
[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
