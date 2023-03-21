---
title: "Cómo desarrollar el complemento Osticket | Software de servicio de ayuda" 
seoTitle: "Cómo desarrollar el complemento Osticket | Software de servicio de ayuda" 
description: "Siga este tutorial para aprender a desarrollar el complemento Osticket. Este software de servicio de TI administra las comunicaciones del cliente y automatiza la resolución de problemas." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Cree un complemento Osticket para agregar funciones a su instalación de Osticket. Este sistema de boletos de código abierto ayuda a las empresas a manejar a los clientes de manera eficiente." 
url: /es/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Cree un complemento Osticket para agregar características a su instalación de Osticket. Este sistema de boletos de código abierto ayuda a las empresas a manejar a los clientes de manera eficiente.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="Software de servicio de ayuda">}}


## Descripción general
Bienvenido a otra publicación de blog interesante en la serie de [Software de boletos de HelpDesk][1]. Hemos publicado algunas publicaciones de blog sobre temas como [Sistema popular de asistencia de boletos gratuitos y atención al cliente][2], [Automatizar el sistema de boletos con WordPress y Osticket][3], y algo más. Sin embargo, Osticket es un sistema de servicio de ayuda basado en boletos de código abierto diseñado para que los clientes denuncien sus consultas y quejas para apoyar al personal. Este sistema de soporte gratuito proporciona un módulo de administración de consultas fáciles de usar que convierte las consultas provenientes del teléfono, el correo electrónico y los formularios en boletos basados ​​en la web. Ofrece una amplia gama de características y opciones que permiten al personal de soporte proporcionar una increíble experiencia de soporte al cliente para los clientes.
Este sistema de boletos de código abierto (Osticket) es un marco de boletos de soporte completamente flexible que ofrece numerosas opciones para ayudar a adaptar todas las partes de la experiencia de soporte del cliente, como mensajes enviados a clientes, páginas y notificaciones. En su artículo, aprenderemos el desarrollo del complemento Osticket para mejorar la funcionalidad de acuerdo con nuestras necesidades. Para hacer eso, cubriremos los siguientes temas:
  * [¿Por qué usar complementos?][4]
  * [Requisitos][5]
  * [¿Cómo desarrollar el complemento de Osticket?][6]
  * [Conclusión][7]

## ¿Por qué usar complementos?   {#por qué}
En este tema, aprenderemos cómo crear un complemento simple para extender la funcionalidad central de este **Software de servicio IT**  (Osticket). Un complemento es un software que extiende la funcionalidad central de cualquier aplicación/software. Además, hay muchos software de código abierto de nivel empresarial que tiene una gran pila de complementos que extienden las funcionalidades. Además, este popular software de código abierto incluye WordPress, Joomla y muchos más. Sobre todo, las comunidades vibrantes y vivas apoyan y desarrollan complementos según las necesidades. Sin embargo, los marcos ofrecen documentación integral con respecto al desarrollo de los complementos. Las siguientes son algunas razones para que las aplicaciones admitan complementos:
  * Permite a los desarrolladores de terceros crear componentes de software que extienden la funcionalidad de una aplicación.
  * Los complementos permiten integrar fácilmente nuevas funciones.
  * Tampoco aumenta el tamaño y la complejidad de una aplicación.
  * Así como los desarrolladores pueden mantener y administrar el código de los complementos por separado de la aplicación central.

## Requisitos   {#Requirements}
Esta sección de **IT HelpDesk Software**  Guía describe los requisitos necesarios para desarrollar el complemento Osticket.
  * PHP versión 5.6 o superior
  * Instalación de Osticket
  * Conocimiento básico de PHP

## ¿Cómo desarrollar el complemento de Osticket?   {#cómo}
En esta sección, revisaremos los pasos del desarrollo del complemento de este sistema de boletos de código abierto (Osticket).
  * Crear la carpeta del complemento en el directorio /incluido /complementos. En este tutorial crearemos un complemento de demostración que integra **Sistema Osticket**  con RedMine.
  * Debe tener siguiendo los archivos necesarios: plugin.php y config.php.
  * El archivo plugin.php contiene una descripción general del complemento. Use el siguiente código de muestra en el archivo plugin.php:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Luego reemplace los nombres de ID, nombre, nombre del autor y complemento del código anterior.
  * Después de eso, necesitamos mostrar opciones de configuración de complementos en el backend de Osticket. Agregue el siguiente código de muestra en el archivo config.php.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * Como resultado, esto creará campos de nombre de usuario y contraseña en la página de configuración como se muestra aquí:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Una guía para principiantes para desarrollar el complemento Osticket">}}

  * La siguiente es una lista de campos de clase que están disponibles, se definen en `[install_root]/include/class.forms.php`:
      * TextBoxfield - cuadro de texto
      * TextAReafield - Área de texto
      * Threadentryfield - Área de texto enriquecida, utilizada para hilos de discusión
      * DateTimefield - jQuery datepicker
      * Phonefield - cuadro de texto optimizado para números de teléfono
      * Booleanfield - casilla de verificación
      * Choicefield-campo de selección desplegable
      * Sección Breakfield - Break de sección horizontal
  * Después de eso, necesitamos crear el archivo donde se definirá la funcionalidad del complemento.
  * El nombre del archivo debe ser el mismo que se definió en el archivo plugin.php. es decir, RedMine.php.
  * Esto debe mantener la clase DynabicredMinePlugin. Consulte el siguiente código de muestra:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Este código obtuvo los valores de configuración y puede usar estos valores en sus funciones. En este archivo puede agregar la funcionalidad de su complemento como sus requisitos.

## conclusión   {#conclusion}
Esto nos lleva al final de esta publicación de blog. Osticket es un software de administración de ticketing que ofrece una estructura de complementos para los desarrolladores para que puedan agregar una nueva funcionalidad según los requisitos. Los complementos son los componentes que extienden la funcionalidad central de cualquier aplicación/software. En su artículo, hemos discutido el desarrollo de complementos de este sistema de atención al cliente ** **(Osticket), que ayuda a los desarrolladores a agregar características y mejoras personalizadas de acuerdo con sus requisitos. Por lo tanto, esta publicación de blog realmente lo ayudará si está buscando implementar un software **  IT de servicio de ayuda  **para su negocio. Además, hay otro software de boletos de servicio ** **  y artículos mencionados en la sección "Explorar" a continuación.
Finalmente, [Contenerize.com][8] escribe continuamente publicaciones de blog sobre otros productos y temas de código abierto. Por lo tanto, manténgase en contacto con la categoría [Software de boletos de HelpDesk][1] para actualizaciones regulares. Además, puede seguirnos en nuestras cuentas de redes sociales [Facebook][9], [LinkedIn][10] y [Twitter][11].

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [UVDESK][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Helpy][15]
  * [El mejor software de mesa de ayuda de código abierto y gratis de TI][16]
  * [Sistema popular de asistencia basada en boletos gratuitos y atención al cliente][2]
  * [Cómo configurar el software de la mesa de ayuda en línea usando Osticket][17]
  * [Cómo implementar la tenencia múltiple en Osticket][18]
  * [Automatizar el sistema de tickets usando WordPress y Osticket][3]
  * [Automatice las operaciones comerciales utilizando software de código abierto y abierto][19]

  
[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
