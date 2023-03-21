---
title: "Guía para principiantes para desarrollar el complemento Phplist" 
seoTitle: "Guía para principiantes para desarrollar el complemento Phplist" 
description: "Familiarícese con la arquitectura del complemento Phplist y aprenda cómo crear un complemento Phplist básico. Esta directriz le ayuda a personalizar y mejorar la funcionalidad de Phplist." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Phplist Plugins permite a los desarrolladores personalizar el producto y mejorar su funcionalidad. En esta publicación, aprenderemos cómo crear complementos básicos en Phplist." 
url: /es/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## Los complementos Phplist permiten a los desarrolladores personalizar el producto y mejorar su funcionalidad. En esta publicación, aprenderemos cómo crear complementos básicos en Phplist.

{{< figure align=center src="images/phplist-plugin.png" alt="complemento phplist">}}

El soporte del complemento es una parte esencial del software, especialmente para los sistemas de código abierto. Esto permite a los desarrolladores construir un nuevo complemento para expandir las características. **Phplist**  Fomenta el desarrollo de complementos para que los desarrolladores puedan usarlos para agregar nuevas características de acuerdo con sus requisitos comerciales. Un complemento Phplist es una colección de código independiente que contiene código para PHP, HTML, CSS y JavaScript.
Los complementos de soporte de aplicaciones debido a muchas razones y algunas de ellas son:
  * No modifique la funcionalidad central.
  * Permitir a los desarrolladores crear nuevas características.
  * Reducir el tamaño del software.
Discutiremos los siguientes temas en detalle en este tutorial.
  *[**Prerrequisitos** ][2]
  *[**Conceptos básicos del desarrollo del complemento Phplist** ][3]
  *[**Crea nuestro complemento Phplist** ][4]
  *[**Conclusión** ][5]

## Requisitos previos   {#req}
  * Última versión de Phplist.
  * Familiarizado con Phplist y PHP.
  * Comprensión de HTML / CSS y JavaScript.

## conceptos básicos del desarrollo de complementos phplist   {#basics}
Los siguientes métodos mejorarán la funcionalidad de un complemento Phplist.
  ***Páginas** : cree páginas para actividades como informes, estadísticas, para mostrar información y muchas más.
  ***HOGHS**  - Esto le permite invocar la funcionalidad en lugares específicos.
Hay tres tipos de complementos especiales para Phplist. Un complemento de cada tipo solo se puede habilitar.
  ***Complemento del editor**  - Permite la implementación del editor para editar campañas o plantillas.
  ***Complemento de autenticación** : esto permite agregar un nuevo mecanismo para la autenticación de los administradores.
  ***Complemento del remitente de correo electrónico** -Permite implementar un nuevo método para el envío de correo electrónico en lugar de la funcionalidad incorporada.

## Cree nuestro complemento Phplist   {#Create}
En primer lugar, debe extender la clase Core Phplistplugin. Para crear un complemento, debe crear un directorio llamado "Helloworld" en el complemento \ _rootdir y crear un archivo llamado HelloWorld.php en el directorio Root of Plugins. Puede verificar el archivo config.php para encontrar el valor de la variable de complemento \ _rootdir. Copie el código a continuación en el archivo helloworld.php.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
Debe establecer $ Coderoot en el directorio de su complemento. Para asegurarse de que el complemento se inicialice correctamente, debe llamar al constructor principal. Cree un archivo main.php y colóquelo en su directorio de complementos. Copie el siguiente código en él.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Coloque el archivo de clase helloworld.php y su directorio de complementos en el complemento rootdir para instalar el complemento. Para activar un complemento, haga clic en la pestaña Configuración en la barra de menú y luego haga clic en los complementos Administrar. La página del complemento le mostrará una lista de complementos disponibles y puede habilitar/deshabilitar su formulario de complemento allí.
Puede acceder a su complemento mediante la siguiente URL como http://example.com/admin/?page=main&pi=helloworld. Reemplace el ejemplo.com con su nombre de dominio.

## conclusión   {#con}
Hemos aprendido los conceptos básicos de **Phplist Plugin**  Desarrollo y creamos un complemento de muestra. Como punto de partida, puede seguir esta guía y explorar más a fondo el desarrollo de complementos para mejorar la funcionalidad.
Finalmente, [**Contenerize.com **][6] se encuentra en un proceso consistente de escribir publicaciones de blog sobre otros productos de código abierto más recientes. Por lo tanto, manténgase en contacto con esta categoría [ **boletines**  ][7] para las últimas actualizaciones.

## Explorar
Puede encontrar los siguientes enlaces relevantes.
  *[**Phplist** ][8]
  *[**Mailtrain** ][9]
  *[**ListMonk** ][10]
  *[**Moonmail** ][11]
  *[**Mailman** ][12]
  *[**Top 5 Software de boletín de código abierto en 2021** ][13]
  *[**Cómo configurar la aplicación múltiple en phplist** ][14]
  *[**Cómo crear y enviar boletín con Phplist** ][15]

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
