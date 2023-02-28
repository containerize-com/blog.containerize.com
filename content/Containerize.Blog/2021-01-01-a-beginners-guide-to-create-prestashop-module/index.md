---
title: A Beginners Guide To Create PrestaShop Module
seoTitle: A Beginners Guide To Create PrestaShop Module
description: PrestaShop is an efficient and cost effective open source eCommerce software to setup online store. PrestaShop addons help store owners to expand functionality.
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "The PrestaShop modules are small programs that allow you to improve your shop's functionality. We'll learn how to build a basic module in this tutorial."
url: /shopping-cart-software/a-beginners-guide-to-create-prestashop-module/

categories: ['Shopping Cart Software']

---
## The PrestaShop modules are small programs that allow you to improve your shop’s functionality. We’ll learn how to build a basic module in this tutorial.

{{< figure align=center src="images/prestashop-module.png" alt="PrestaShop Module">}}  

**PrestaShop** is eCommerce software that is 100% free and open source. This enables shop owners to easily set up their online presence and scale up business on a wide scale. PrestaShop comes with default features and you can need more functionality for your business requirements occasionally. The marketplace for PrestaShop is a fantastic place to find add-on features that can be used to expand store functionality. Moreover, you can find both free and paid modules at marketplace. However, you can create custom module from scratch as well.

We will discuss the below topics in detail to **create PrestaShop module**.

  * [Requirements][1]
  * [Basics of Module Development][2]
  * [Create Our PrestaShop Module][3]
  * [Conclusion][4]

## Requirements {#Req}

  * Install PrestaShop 1.6 or greater.
  * Familiar with PrestaShop.
  * Understanding of PHP.

## Basics of Module Development {#Basics}

Before you start coding, it is really important to know about the core concepts for **PrestaShop module development**. It will allow you to quickly build and manage your module.

**Configuration** – Configuration allows you to save data in the shop database without requiring a module specific table. The configuration table contains a list of key value properties that can be accessed from anywhere.

**Hooks** – Hooks are a way to connect any particular PrestaShop events with your code. You can use hooks to place your code in pages and for specific actions like sending email on certain event.

**Widgets** – Module developers use widgets to display content where required.

**Doctrine** – Doctrine is ORM allows you to manage your database data through objects. This provides an abstract layer that allows you to perform insert/update actions with simple call.

## Create Our PrestaShop Module {#Create}

  * Create module directory named **myfirstmodule** in **modules** directory of your PrestaShop installation. Place all files in your module directory.
  * Create main file with name **myfirstmodule.php** and copy the following code in it.


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


  * Create **install()** and **uninstall()** methods. Add the following methods in **myfirstmodule.php** file.


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


  * Call special methods to activate our registered hooks. We will use these methods to display “Hello World!” text to the sidebars. Add the following code in **myfirstmodule.php** file.


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


  * Finally, open administrator section, upload and **install PrestaShop module**.

## Conclusion {#Conclusion}

We have discussed core concepts for building the **PrestaShop module** in this tutorial. Further, we have developed basic module that can be used as starting point for more advance modules. [containerize.com][5] is consistently working on new tutorial blog posts. For the latest updates, please stay in touch with the [Shopping Cart software][6] category.

## Explore

You can find the following links useful in addition to the **PrestaShop module creation tutorial**.

  * [PrestaShop – Free Shopping Cart Software][7]
  * [Top 5 Open Source Shopping Cart Software in 2020][8]

 [1]: #Req
 [2]: #Basics
 [3]: #Create
 [4]: #Conclusion
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/shopping-cart-software/
 [7]: https://products.containerize.com/ecommerce/prestashop
 [8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/