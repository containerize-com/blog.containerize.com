---
title: "Integrar Mautic y Joomla para la automatización de marketing digital '" 
seoTitle: "Integrar Mautic y Joomla para la automatización de marketing digital" 
description: "Mautic y Joomla Integration pueden ayudar a su negocio con la automatización de marketing digital. Ayuda a comercializar productos a través de campañas mautic." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Mautic y Joomla Integration pueden ayudar a su negocio con la automatización de marketing digital. Ayuda a comercializar productos a través de campañas mautic en línea." 
url: /es/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## La integración de Mautic y Joomla puede ayudar a su negocio con la automatización de marketing digital. Ayuda a comercializar productos a través de campañas mautic en línea.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Integración Mautic y Joomla">}}


## Cómo esta integración puede ayudar a su negocio:
La integración de Mautic y Joomla le permitirán comercializar sus productos/servicios de una manera muy fácil pero eficiente. Mautic Una solución de marketing gratuita de código abierto le brinda un gran control sobre las campañas de marketing y es muy simple continuar la campaña de goteo de acuerdo con la situación. Por ejemplo: le brinda la información de que si el cliente ha leído el correo electrónico o ha visitado sus páginas de productos. Usando esa información, puede configurar campañas para decidir si continúa enviando los próximos correos electrónicos para ese cliente o no. Esta integración ayudará en la automatización de marketing digital. Esta publicación de blog lo guiará con las siguientes secciones:
  * [Descripción general][1]
  * [Instalación del complemento de Joomla][2]
  * [Configuración mautica][3]
  * [Conclusión][4]

## Descripción general:   {#Overview}
Mautic es un sistema de automatización de marketing de código abierto. Es un software de marketing gratuito. Puede usarlo para crear campañas ilimitadas para enviar correos electrónicos de marketing a clientes específicos.
Joomla también es un sistema gratuito de gestión de contenido de código abierto para desarrollar sitios web. Es muy fácil configurar sus sitios web de negocios en Joomla. Tiene miles de extensiones que se pueden usar de acuerdo con sus requisitos.

## Instalación del complemento Joomla:   {#Plugin}
  * Descargue el [complemento][5].
  * Luego vaya a Extensiones -> Administrar -> Instalar.
  * Ingrese la URL mautic.
  * Insertará una imagen GIF 1 PX cargada desde su instancia mautica.
  * Formularios de incrustación en el contenido de Joomla usando el siguiente fragmento del código: {mautic type = "form" id}
  * Luego puede crear el formulario en su aplicación Mautic y obtener la ID de URL.
  * El contenido dinámico también se puede agregar usando el siguiente código Snippt: {mautic type = ”content” slot = ”slot_name”} Contenido predeterminado aquí. {/Mautic}
  * slot_name es el identificador de la ranura que especificó al agregar una decisión de "solicitar contenido dinámico" a su campaña.
Después de la instalación, debe crear e incrustar formularios en su sitio de Joomla. Estos formularios enviarán la información de contactos a Mautic. Una vez que haya terminado de configurar el complemento en Joomla, el siguiente paso será configurarlo en Mautic.

## Configuración mautica:   {#Mautic}
  * Vaya a su sitio Mautic, muévase a Configuración.
  * Haga clic en la configuración.
  * Desde la configuración de la API, habilitar la API.
  * Para conectar Mautic con Joomla debe tener un certificado SSL en sus sitios.
  * A continuación debe ir a las credenciales de API.
  *Si su sitio web no tiene un SSL (por lo que va a **http **: //yourjoomlasite.com), seleccione OAUTH1. Si tiene un SSL en su sitio (para que vaya a  **https**  : //yourjoomlasite.com), seleccione OAUTH2.
  * Haga clic en Nuevo, proporcione un nombre (puede ser lo que desee) y la URL completa de su Joomla. sitio ([https://yourjoomlasite.com][6])
  * Haga clic en Guardar y cerrar.
  * Aquí puede obtener claves públicas y privadas.
  * Vaya a su sitio de Joomla y encuentre el complemento Mautic que instaló anteriormente.
  * Ingrese las claves públicas y secretas que creó desde su sitio máximo.
  * Seleccione OAUTH1 u OAUTH2 (lo mismo que seleccionó en Mautic) y configure los usuarios registrados a sí.
  * Guarde y publique el complemento.
  * Después de eso, podrá autorizar su sitio de Joomla.
  * Joomla volverá a dirigir a Mautic Instance a la autorización.
  * Haga clic en "Autorizar" y eso es todo.
  * Comenzará a obtener contactos en su sitio máximo.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Integración Mautic y Joomla">}}


## Conclusión:   {#Conclusion}
En este artículo hemos discutido cómo Mautic y Joomla juntos pueden ayudar en la automatización de marketing digital. Esta solución de marketing gratuita de código abierto le permitirá agrupar todos los contactos provenientes del sitio de Joomla y crear campañas de marketing que los usen. Mautic le permite crear segmentos, para que pueda ejecutar diferentes campañas en diferentes segmentos de acuerdo con sus necesidades. Consulte [Joomla][7] y [Mautic][8] blogs para obtener una descripción detallada.

## Explorar:
Puede encontrar los siguientes enlaces relevantes:
  * [Joomla][7]
  * [Mautic][8]
  * [Cómo configurar Mautic - Integración de Facebook][9]
  * [Integración de Drupal Mautic para automatizar la crianza de plomo][10]
  * [Automatización de marketing utilizando Mautic y WordPress WooCommerce][11]
  * [Cómo configurar campañas de marketing en Mautic][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
