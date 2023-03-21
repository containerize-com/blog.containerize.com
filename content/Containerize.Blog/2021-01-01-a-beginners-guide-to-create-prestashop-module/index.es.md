---
title: "Una guía para principiantes para crear módulo prestashop" 
seoTitle: "Una guía para principiantes para crear módulo prestashop" 
description: "Prestashop es un software de comercio electrónico de código abierto eficiente y rentable para configurar la tienda en línea. Los complementos de Prestashop ayudan a los propietarios de tiendas a expandir la funcionalidad." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Los módulos Prestashop son pequeños programas que le permiten mejorar la funcionalidad de su tienda. Aprenderemos a construir un módulo básico en este tutorial." 
url: /es/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Los módulos Prestashop son pequeños programas que le permiten mejorar la funcionalidad de su tienda. Aprenderemos a construir un módulo básico en este tutorial.

{{< figure align=center src="images/prestashop-module.png" alt="Módulo prestashop">}}

 **Prestashop **  es un software de comercio electrónico que es 100% gratuito y de código abierto. Esto permite a los propietarios de tiendas establecer fácilmente su presencia en línea y ampliar los negocios a gran escala. Prestashop viene con características predeterminadas y ocasionalmente puede necesitar más funcionalidad para los requisitos de su negocio. El mercado de Prestashop es un lugar fantástico para encontrar características adicionales que se pueden usar para expandir la funcionalidad de la tienda. Además, puede encontrar módulos gratuitos y pagados en Marketplace. Sin embargo, también puede crear un módulo personalizado desde cero.
Discutiremos los temas a continuación en detalle para  **Crear módulo Prestashop ** .
  * [Requisitos][1]
  * [Conceptos básicos del desarrollo del módulo][2]
  * [Crea nuestro módulo Prestashop][3]
  * [Conclusión][4]

## Requisitos   {#req}
  * Instale Prestashop 1.6 o mayor.
  * Familiarizado con Prestashop.
  * Comprensión de PHP.

## conceptos básicos del desarrollo del módulo   {#Basics}
Antes de comenzar a codificar, es realmente importante saber sobre los conceptos centrales para el desarrollo del módulo  **Prestashop ** . Le permitirá construir y administrar rápidamente su módulo.
 **Configuración ** : la configuración le permite guardar datos en la base de datos del taller sin requerir una tabla específica del módulo. La tabla de configuración contiene una lista de propiedades de valor clave a las que se puede acceder desde cualquier lugar.
 **GANCHS **  - Los ganchos son una forma de conectar cualquier evento de Prestashop en particular con su código. Puede usar ganchos para colocar su código en las páginas y para acciones específicas como enviar correo electrónico en determinado evento.
 **Widgets **  - Los desarrolladores de módulos usan widgets para mostrar contenido donde sea necesario.
 **Doctrina **  - La doctrina es ORM le permite administrar los datos de su base de datos a través de objetos. Esto proporciona una capa abstracta que le permite realizar acciones de inserción/actualización con una llamada simple.

## Cree nuestro módulo Prestashop   {#Create}
  *Crear directorio de módulos llamado  **myFirstModule **  en  **Módulos **  Directorio de su instalación de Prestashop. Coloque todos los archivos en su directorio de módulos.
  *Cree el archivo principal con el nombre  **myFirstModule.php **  y copie el siguiente código en él.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
  *Crear  **Install () **  y  **Uninstall () **  Métodos. Agregue los siguientes métodos en  **myFirstModule.php **  archivo.
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * Llame a métodos especiales para activar nuestros ganchos registrados. Usaremos estos métodos para mostrar "¡Hola mundo!" texto a las barras laterales. Agregue el siguiente código en el archivo  **myFirstModule.php ** .
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
  *Finalmente, abra la sección Administrador, cargue e instale el módulo Prestashop **.

## conclusión   {#conclusion}
Hemos discutido conceptos básicos para construir el módulo  **Prestashop **  en este tutorial. Además, hemos desarrollado un módulo básico que puede usarse como punto de partida para más módulos de avance. [Contenerize.com][5] está trabajando constantemente en nuevas publicaciones de blog tutoriales. Para las últimas actualizaciones, manténgase en contacto con la categoría [Software de carrito de compras][6].

## Explorar
Puede encontrar los siguientes enlaces útiles además del  **Tutorial de creación del módulo Prestashop ** .
  * [Prestashop - software gratuito de carrito de compras][7]
  * [Top 5 Software de carrito de compras de código abierto en 2020][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
