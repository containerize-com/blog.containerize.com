---
title: "Cómo configurar Mautic - Integración de Facebook" 
seoTitle: "Cómo configurar Mautic - Integración de Facebook" 
description: "MAUTIC - La integración de Facebook puede ayudar a sincronizar sus clientes potenciales de Facebook al sistema mautic sin ninguna dificultad y luego usarlos en campañas de marketing." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Obtener Facebook conduce a Mautic, agregue contactos a un segmento y ejecute campañas de correo electrónico. También use estos contactos para crear una audiencia personalizada para los anuncios de Facebook." 
url: /es/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook conduce a Mautic, agregue contactos a un segmento y ejecute campañas de correo electrónico. También use estos contactos para crear una audiencia personalizada para los anuncios de Facebook.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Cómo configurar Mautic - Integración de Facebook">}}

Mautic es un software de automatización de marketing y brinda control completo sobre correos electrónicos de marketing, páginas de destino y flujos de trabajo para actividades de marketing. Las campañas de goteo de Mautic ayudan a involucrar al público objetivo y mantenerlos actualizados sobre sus productos. Mautic Facebook Integration proporciona una forma para que se agregarán nuevos clientes potenciales a Mautic. Con esta integración de Mautic - Facebook, los liderazgo de su campaña de Facebook se agregarán automáticamente a Mautic.
Cubriremos las siguientes secciones en este tutorial:
  * [Configurar la cuenta de desarrollador de Facebook][1]
  * [Configurar la aplicación del desarrollador de Facebook][2]
  * [Configuración del complemento mautic][3]
  * [Conclusión][4]

## Configurar la cuenta de desarrollador de Facebook {#ACCOUNT}
  * Vaya a [Facebook para desarrolladores][5]
  * Registre su cuenta si no tiene una.
  * Para registrar una nueva cuenta, vaya y haga clic en "Comenzar" desde la esquina superior derecha.
  * Después de eso, seleccione su cuenta de Facebook y presione "Continuar".
  * Luego, desde la ventana emergente, haga clic en el botón "Desarrollador".

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic - Integración de Facebook - Cuenta de revelador de registro">}}


## Configurar la aplicación del desarrollador de Facebook {#App}
  * Haga clic en "Crear primera aplicación"

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - Integración de Facebook - Crear primera aplicación">}}

  * Haga clic en "Administrar integraciones comerciales" y presione "Continuar".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - Integración de Facebook - Elija un propósito">}}

  * En la ventana siguiente, ingrese el nombre de la aplicación y seleccione el propósito de la aplicación. Haga clic en el botón "Crear aplicación".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - Integración de Facebook - Complete el formulario para crear la aplicación">}}

  * El siguiente paso es configurar el inicio de sesión de Facebook. Desde la página de productos, haga clic en el botón "Configurar" en el cuadro "Inicio de sesión de Facebook".

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - Integración de Facebook - Configuración FB Iniciar sesión">}}

  * Desde el menú izquierdo, haga clic en "Configuración" en Productos -> Inicio de sesión de Facebook.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - Integración de Facebook - Configurar el inicio de sesión de FB">}}

  * Ingrese la URL de su sitio web de Mautic. Establezca "Cliente de inicio de sesión de OAuth" y "Web OAuth Inicio de sesión" en "Sí".
  * Ahora vaya a Configuración -> Configuración básica. Desde la parte inferior de la página, haga clic en el botón "+ Agregar plataforma". Después de eso se abrirá una ventana emergente. Ingrese la URL de su sitio web y guarde los cambios.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - Integración de Facebook - Agregar sitio web como plataforma">}}


## Configuración del complemento Mautic {#Configuration}
  * Vaya al tablero de Mautic.
  * Luego muévase a "Configuración" desde la esquina superior derecha.
  * Haga clic en "complementos".
  * Después de eso, abra la configuración del complemento "Facebook".
  * Luego ingrese la identificación del cliente y el secreto del cliente. Obtenga estas claves de la aplicación de desarrolladores de Facebook que acaba de crear siguiendo los pasos anteriores.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - Integración de Facebook - Configurar el complemento FB en Mautic">}}

  * Presione el botón "Autorizar la aplicación".
  * Después de eso, se abrirá una nueva ventana de autorización de Facebook. Siga las indicaciones para completar la autorización de la aplicación.
  * Después de una autorización exitosa, muévase a la pestaña "Mapeo de contacto" del complemento de Facebook de Mautic.
  * Aquí puede mapear sus campos de contacto a los campos de Facebook.
  * Finalmente, publique la configuración y está listo para comenzar.

## conclusión {#conclusion}
Mautic: la integración de Facebook puede ayudar a sincronizar sus clientes potenciales de Facebook al sistema mautic sin ninguna dificultad. En la aplicación Mautic, puede agregar todos estos cables a un segmento. Puede ejecutar campañas de marketing por correo electrónico en ellas. Esto realmente puede ayudar a su negocio a crecer, comercializar y vender productos/servicios a un público objetivo mucho más grande.

## Explorar
Para obtener más información sobre Mautic y Facebook, visite:
  * [Mautic | Plataforma de tecnología de marketing de contenido de código abierto][6]
  * [Cómo configurar campañas Mautic usando Campaign Builder][7]
  * [Integración de Drupal Mautic para automatizar la crianza de plomo][8]
  * [Automatización de marketing con integración de Mautic y WooCommerce][9]
  * [Integrar Mautic y Joomla para la automatización de marketing digital][10]

  
[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
