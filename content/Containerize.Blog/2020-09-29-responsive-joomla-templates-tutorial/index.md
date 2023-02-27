---
title: Joomla Template Development Guide For The Beginners
seoTitle: Joomla Template Development Guide For The Beginners
description: Learn Joomla template development, how to set up responsive layouts for various use cases. Set of files that define the design layer of a business website.
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: Build highly professional and customizable Joomla templates that offer a bunch of features such as multilingual, SEO / user friendly, and rich color schemes.
url: /content-management/responsive-joomla-templates-tutorial/
aliases: 
    -  /2020/09/29/responsive-joomla-templates-tutorial/
categories: ['Content Management']

---
## Build highly professional and customizable Joomla templates that offer a bunch of features such as multilingual, SEO / user friendly, and rich color schemes. {.has-text-align-left}

[{{< figure align=center src="images/banner_1200x628.png" alt="joomla template development ">}}][1] 

## Overview

A well-designed business website plays a vital part to bring and retain visitors by giving them ease of navigation. **Full featured Joomla** facilitates its users with a number of responsive layouts and Joomla template development that control the aesthetic of a business website.

During the development phase, the placement of design elements are very critical to obtain:

  * Consistency
  * Easy Navigation
  * Simplicity
  * Mobile Compatibility
  * Readability

Here comes the **Joomla templates**. This open source software gives provision to develop or use predefined responsive layouts for all the web pages rather than writing code for each page separately.

In this blog post, we will learn the following things on how to create and setup a **user friendly template** in Joomla.

  * [**What are Joomla layouts?**][2]
  * [**How to create a simple responsive template in Joomla?**][3]
  * [**How to install a Joomla template?**][4]
  * [**Conclusion**][5]

## What are Joomla layouts? {#what}

Joomla provides templates for the front end as well as for the back end. It comes with many ready made templates and it offers developers to build **free responsive bootstrap themes** according to their use cases. There are two types of templates in Joomla.

**Front-end Templates: **Related to the user facing part of a business website.

**Back-end Templates: **These templates are linked to the business logic of a site.

## How to create a simple responsive template in Joomla? {#how}

In this section, we will cover the steps of this Joomla template tutorial.

Before jump into this section, make sure you have an understanding of the following:

  * HTML
  * CSS
  * Javascript
  * PHP

So, creating custom templates in Joomla has never been so hard and complex. However, let’s start to create our first Joomla template.

## **Setup directory structure**

First of all, create a folder named “**mytemplate**” inside “**templates**” folder.

Create following files inside “**mytemplate**” folder :

  * **index.php** : This is the core file that contains HTML and PHP code for the whole template pages.
  * **templateDetails.xml** : This file contains the meta data of the template and is compulsory for being noticed by Joomla.

Now, create three folders inside “**mytemplate**” folder with the following names:

  * **js** : This folder will contain all the Javascript files needed for the template
  * **css** : All CSS files for styling will come into this folder
  * **images** : Images used by the template will reside in this folder

Create a css file named “** template.css** ” inside “**css**” folder.


```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```


Eventually, this is how the directory structure will look like.

## Lets put some code

Put this code in the **templateDetails.xml** file.


```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```


As mentioned earlier, this file contains the metadata about the responsive layouts which is defined between markup tags. However, you can change the general information like name, author, and description.

This file also contains information about the other files and folders that are used by the template.

Now, open the **index.php** file and start putting the following code:


```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```


This file will start with this line which prevents others to read your PHP code.


```
<!DOCTYPE html>
```


This is to let browser know about the document type.


```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```


HTML documents starts with this line and the **xmlns** attribute tells the xml namespace for the document.


```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```


First line after the <head> tag tells Joomla to put header information like metadata information and page title.

There is a link to the external style sheet in the second line and the third line links the external Javascript file.

The rest of files enable the Bootstrap into the template.


```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```


The body section starts after the head section contains all the data which will be reflected at the template for the user to view and navigate.


```
<jdoc:include type="modules" name="position-7" style="well" />
```


This statement is called jdoc statement which is used to instruct Joomla to add a module named “position-7”. There are several jdoc statements that are frequently being used in **Joomla template development**.

This is the final complete **index.php** file with all the code required for a basic Joomla template.


```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```


Everything is in place for a very basic template. Now, it is time to install it on the Joomla server and see how it goes on.

## How to install Joomla Template? {#install}

Joomla template installation process is quite straight and easy. There are the following steps to install:

Go to “Extensions -> Manage – > Install

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla install setup image">}}  

Here you can see your newly developed Joomla template in the list as shown in the image below.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Joomla templates list">}}  

Now, select the template, hit “Install” and a success message will appear about the successful installation.

After the template is installed, you can access and modify the template files within the control panel of Joomla and preview the changes from “Template Preview” option.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}  

Now, you can view your first Joomla template in to the browser!

## Conclusion {#Conclusion}

A good and responsive template is the foundation for overall site modeling. **Responsive layouts** at Joomla are multifunctional and can be used for various projects. From writing code to the Joomla template development becomes very simple with the help of an intuitive admin dashboard. Joomla provides complete control over the template development to meet the user’s desires.

As **CMS software** category is under consistent improvements and more tutorials about other content management systems will be added to the list, please stay in touch with the [Content Management System][6] section for regular updates.

## Relevant Product Pages

You may find the following links relevant:

  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Concrete5][11]
  * [Grav][12]
  * [Craft][13]
  * [Contao][14]
  * [Fork][15]
  * [Refinery CMS][16]
  * [LocomotiveCMS][17]

 [1]: https://products.containerize.com/content-management/joomla
 [2]: #what
 [3]: #how
 [4]: #install
 [5]: #Conclusion
 [6]: https://href.li/?https://products.containerize.com/content-management
 [7]: https://products.containerize.com/content-management/drupal
 [8]: https://products.containerize.com/content-management/pyro
 [9]: https://products.containerize.com/content-management/django
 [10]: https://products.containerize.com/content-management/umbraco
 [11]: https://products.containerize.com/content-management/concrete5
 [12]: https://products.containerize.com/content-management/grav
 [13]: https://products.containerize.com/content-management/craft
 [14]: https://products.containerize.com/content-management/contao
 [15]: https://products.containerize.com/content-management/fork
 [16]: https://products.containerize.com/content-management/refinery-cms
 [17]: https://products.containerize.com/content-management/locomotive-cms