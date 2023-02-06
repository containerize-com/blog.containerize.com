---
title: Beginners Guide To Develop phpList Plugin
seoTitle: Beginners Guide To Develop phpList Plugin
description: Get familiarize with the phpList plugin architecture and learn how to create a basic phpList plugin. This guideline helps you to customize and enhance phpList functionality.
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: phpList plugins allows developers to customize the product and enhance its functionality. In this post, we will learn how to create basic plugin in phpList.
url: /newsletter/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']

---
## phpList plugins allows developers to customize the product and enhance its functionality. In this post, we will learn how to create basic plugin in phpList.

[{{< figure align=center src="images/phplist-plugin.png" alt="phpList Plugin">}}][1] 

The plugin support is an essential part of the software, especially for open source systems. This allows developers to build a new plugin to expand the features. **phpList** encourages the development of plugins so that developers can use them to add new features according to their business requirements. A phpList plugin is a standalone code collection containing code for PHP, HTML, CSS, and JavaScript.

Applications support plugins due to many reasons and some of them are:

  * Don’t modify core functionality.
  * Allow developers to create new features.
  * Reduce the size of the software.

We will discuss the below topics in detail in this tutorial.

  * [**Prerequisites**][2]
  * [**Basics of phpList Plugin Development**][3]
  * [**Create Our phpList Plugin**][4]
  * [**Conclusion**][5]

## Prerequisites {#Req}

  * Latest version of phpList.
  * Familiar with phpList and PHP.
  * Understanding of HTML / CSS and JavaScript.

## Basics of phpList Plugin Development {#Basics}

The following methods will improve the functionality of a phpList plugin.

  * **Pages** – Create pages for activities such as reporting, statistics, to display information, and many more.
  * **Hooks** – This allows you to invoke functionality in specific places.

There are three types of special plugins for phpList. One plugin of each type can be enabled only.

  * **Editor plugin** – Allows implementing editor for editing campaigns or templates.
  * **Authentication plugin** – This allows adding a new mechanism for the authentication of administrators.
  * **Email sender plugin** – Allows implementing a new method for email sending instead of built-in functionality.

## Create Our phpList Plugin {#Create}

First of all, you need to extend the phpListPlugin core class. To create a plugin, you need to create a directory named “helloworld” under PLUGIN\_ROOTDIR and create a file named helloworld.php at the root of plugins directory. You can check the config.php file to find the value for the PLUGIN\_ROOTDIR variable. Copy below code into helloworld.php file.


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


You must set $coderoot to the directory of your plugin. To make sure that the plugin is correctly initialized, you must call the parent constructor. Create a file main.php and place it in your plugin directory. Copy the following code into it.


```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```


Place the helloworld.php class file and your plugin directory in PLUGIN ROOTDIR to install the plugin. To activate a plugin, click on the Config tab in the menu bar and then click on the Manage Plugins. The plugin page will show you a list of available plugins and you can enable/disable your plugin form there. 

You can access your plugin by the following URL like http://example.com/admin/?page=main&pi=helloworld. Replace example.com with your domain name.

## Conclusion {#Con}

We have learned the basics of **phpList plugin** development and created a sample plugin. As a starting point, you can follow this guideline and further explore plugin development to enhance the functionality.

Finally, [**containerize.com**][6] is in a consistent process of writing blog posts on further latest open source products. Therefore, stay in touch with this [**Newsletters**][7] category for the latest updates.

## Explore

You may find the following links relevant.

  * [**phpList**][8]
  * [**Mailtrain**][9]
  * [**listmonk**][10]
  * [**MoonMail**][11]
  * [**Mailman**][12]
  * [**Top 5 Open Source Newsletter Software In 2021**][13]
  * [**How To Configure Multi-tenant Application In phpList**][14]
  * [**How to create and send newsletter using phpList**][15]

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
 [13]: https://blog.containerize.com/2021/04/23/top-5-open-source-newsletter-software-in-2021/
 [14]: https://blog.containerize.com/2020/10/24/how-to-implement-multi-tenancy-in-phplist/
 [15]: https://blog.containerize.com/2020/10/29/how-to-create-and-send-newsletter-using-phplist/