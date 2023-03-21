---
title: "Cómo implementar múltiples tenientes en mautic" 
seoTitle: "Cómo implementar múltiples tenientes en mautic" 
description: "Mautic es una solución de automatización de marketing de código abierto. La implementación de la tenencia múltiple en mautic reduce los costos, mejora la eficiencia y la seguridad." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Ahorre costos y maximice el uso de recursos mediante la implementación de múltiples tenientes en Mautic. Multi-tenencia ayuda en las personalizaciones de código, actualizaciones de aplicaciones, una mejor productividad y un fácil mantenimiento." 
url: /es/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Ahorre costos y maximice el uso de recursos mediante la implementación de múltiples tenientes en Mautic. Multi-tenencia ayuda en las personalizaciones de código, actualizaciones de aplicaciones, una mejor productividad y un fácil mantenimiento.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Cómo implementar múltiples tenientes en mautic">}}

Mautic es una solución de automatización de marketing gratuita y de código abierto que le brinda un control completo sobre sus correos electrónicos de marketing, páginas de destino, flujos de trabajo y las medidas para sus actividades de marketing. Cubriremos las siguientes secciones en este tutorial:
  * [¿Qué es múltiple tenencia][1]
  * [Qué es mautic][2]
  * [Implementar la tenencia múltiple en Mautic][3]
  * [Conclusión][4]

## ¿Qué es múltiple tenancía?
En la arquitectura de software de múltiples inquilinos, una sola instancia de una aplicación de software sirve a múltiples inquilinos. Cada datos del inquilino se aísla de otros inquilinos que comparten la misma instancia de aplicación. Estos inquilinos están lógicamente aislados, pero físicamente integrados. Esto garantiza la seguridad de los datos y la privacidad para todos los inquilinos. Crear múltiples inquilinos a partir de una sola instancia de aplicación requiere mucha menos memoria. Los inquilinos comparten recursos y disminuyen los costos de mantenimiento de software, infraestructura y operaciones de centros de datos. Los costos tienden a ser más bajos que los de una infraestructura de inquilino único.

## ¿Qué es Mautic   {#Mautic}
[Mautic][5] es un software de marketing gratuito y de código abierto. Automatice las tareas de marketing repetitivas, como campañas de marketing, generación de leads, segmentación de contacto, etc., utilizando Mautic. Tiene características sorprendentes que incluyen generación de leads, construcción de campañas, segmentación de contacto, creador de correo electrónico, pruebas A/B, constructor de páginas, nutrición de plomo y más. Mautic también admite la integración con todas las plataformas sociales populares, p. Facebook, Twitter, LinkedIn. Todas estas características increíbles lo ayudan a aumentar la experiencia general del cliente y mejorar la automatización de marketing para su negocio.

## Implementar múltiples tenientes en Mautic   {#IMPLEMENT}
  * Cree una nueva base de datos vacía llamada "Main_DB".
  * Luego cree una tabla llamada "inquilino" que contendrá detalles sobre todos los inquilinos.
  * Tendrá 3 campos, incluido el sitio \ _name, URL y DB \ _name como se muestra en la figura

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Cómo implementar múltiples tenientes en mautic">}}

  * Después de ese archivo Open mautic/app/ratts.php y agregue este código:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * Esto seleccionará el archivo de configuración correspondiente en función de la ruta de URL.
  * Luego copie la base de datos de la instalación mautic actual y úsela para un nuevo inquilino.
  * Después de eso, cree una copia de mautic/app/config/local.php y cambie el nombre de [sitio_name] .php.
  * Finalmente, actualice el nombre de la base de datos, el host, la contraseña y el usuario de acuerdo con la nueva base de datos.

## conclusión   {#conclusion}
Mautic es una solución de automatización de marketing gratuita, rica y orientada a la calidad. Le permite crear campañas de marketing, segmentos, formularios, informes y mucho más. La implementación de la tenencia múltiple en mautic reduce los costos, mejora la eficiencia, la escalabilidad y la seguridad. Cree fácilmente cientos de inquilinos a partir de una sola instalación.

## Explorar
Para obtener más información sobre Mautic y Facebook, visite:
  * [Mautic | Plataforma de tecnología de marketing de contenido de código abierto][5]
  * [Cómo configurar campañas Mautic usando Campaign Builder][6]
  * [Integración de Drupal Mautic para automatizar la crianza de plomo][7]
  * [Automatización de marketing con integración de Mautic y WooCommerce][8]
  * [Integrar Mautic y Joomla para la automatización de marketing digital][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
