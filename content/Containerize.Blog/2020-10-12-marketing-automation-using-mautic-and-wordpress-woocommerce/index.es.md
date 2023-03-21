---
title: "Automatización de marketing con Mautic y WooCommerce Integration" 
seoTitle: "Automatización de marketing con Mautic y WooCommerce Integration" 
description: "La integración de Mautic y WooCommerce permiten enviar información de contacto de sitios de WordPress a Mautic. Eso ayuda a comercializar productos a través de la aplicación Mautic." 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "Cuenta con ventas usando Mautic y WordPress WooCommerce juntos. Automatice el proceso de marketing obteniendo los datos de los clientes de WordPress a Mautic." 
url: /es/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

## cuenta con ventas utilizando Mautic y WordPress WooCommerce juntos. Automatice el proceso de marketing obteniendo los datos de los clientes de WordPress a Mautic.

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="Automatización de marketing utilizando la integración Mautic-WooCommerce">}}


## Descripción general:
La integración de Mautic-WooCommerce proporciona una manera fácil de obtener todos los contactos en la aplicación Mautic. Luego, utilizando estos contactos, puede crear campañas de marketing de acuerdo con sus requisitos. Mautic es una gran herramienta de marketing que le brinda el control total sobre sus campañas de marketing.
Mautic es una solución de automatización de marketing gratuita y de código abierto. Se utiliza para crear campañas de marketing, segmentos, formularios, informes y mucho más.
WooCommerce es un complemento de comercio electrónico de código abierto para WordPress. Es la solución de comercio electrónico en su mayoría usada en todo el mundo en este momento. Hay cientos de complementos disponibles para WooCommerce que se pueden usar de acuerdo con sus necesidades.
Hay un complemento disponible para Mautic y WordPress que proporciona una solución de automatización de marketing. Siga estos pasos para integrar WooCommerce con Mautic utilizando el complemento [Integración con Mautic para WooCommerce - Automatización de marketing de código abierto][1]
Este blog cubrirá las siguientes secciones:
  * [Configuración del complemento de WordPress][2]
  * [Configuración mautica][3]
  * [Pensamientos finales][4]

## Configuración del complemento de WordPress   {#WordPress}
  1. Vaya a complementos.
  2. Haga clic en "Agregar nuevo".
  3. Busque "**Integración con Mautic para WooCommerce** ".
  4. Una vez que encuentre el complemento, haga clic en "Instalar ahora".
  5. Después de la instalación, haga clic en "Activar".
  6. Luego vaya a WooCommerce -> Mautic -> Connect Pest.
  7. Complete el formulario con los siguientes datos:
      * URL de base.
      * Identificación del cliente.
      * ID de secreto.
  8. Todos esos campos vendrán después de configurar la aplicación Mautic, que se explica en la siguiente sección.

{{< figure align=center src="images/woocommerce-1024x665.png" alt="Integración Mautic y WordPress">}}


## Configuración mautica:   {#Mautic}
  1. Desde su sitio máximo, vaya a Configuración.
  2. Vaya a configuraciones.
  3. Habilitar API desde la configuración de API.
  4. Vaya a las credenciales de API.
  5. Haga clic en "Nuevo", ingrese cualquier nombre que desee y la URL completa de su sitio de WordPress, es decir, [http://yourwordpresssite.com/wp-admin/admin.phpfont> ahe5]
  6. Presione Guardar y cerrar.
  7. Creará claves públicas y privadas.
  8. Vaya a su sitio de WordPress y encuentre el complemento Mautic que instaló anteriormente.
  9. Ingrese las claves públicas y secretas que creó desde su sitio máximo.
 10. Seleccione OAUTH1 o OAUTH2 (lo mismo que seleccionó en Mautic) y configure los usuarios registrados a sí.
 11. Guarde y publique el complemento.
 12. Después de eso, podrá autorizar su sitio de WordPress.
 13. WordPress volverá a dirigir a una instancia mautica a la autorización.
 14. Haga clic en "Autorizar" y eso es todo.
 15. Comenzará a obtener contactos en su sitio máximo.

{{< figure align=center src="images/mautic-1024x622.png" alt="Pasos de integración de Mautic y WordPress">}}


## Pensamientos finales:   {#final}
La integración de Mautic-WooCommerce juntos puede ayudarlo a alcanzar sus objetivos de marketing. Esta integración es una de las mejores solución para la automatización de marketing de comercio electrónico. Con WordPress, puede obtener fácilmente muchos clientes y luego con Mautic puede crear campañas ilimitadas para atacar a esos clientes y mantenerlos actualizados con respecto a sus productos/servicios, lo que definitivamente se jactará de las ventas.

## Explorar:
Puede encontrar los siguientes enlaces relevantes:
  * [Wodpress][6]
  * [Mautic][7]
  * [Cómo configurar Mautic - Integración de Facebook][8]
  * [Integración de Drupal Mautic para automatizar la crianza de plomo][9]
  * [Automatización de marketing utilizando Mautic y WordPress WooCommerce][10]
  * [Cómo configurar campañas de marketing en Mautic][11]

  
[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/es/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
