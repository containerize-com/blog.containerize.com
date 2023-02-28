---
title: Beginner’s Guide to Create a Basic Joomla template
seoTitle: Beginner’s Guide to Create a Basic Joomla template
description: "Joomla is a popular open-source content management system. In this tutorial, we'll explain step by step how to create a Joomla template."
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: Joomla is one of the most popular open-source content management systems. This tutorial will walk you through the necessary steps of creating a Joomla template from scratch.
url: /content-management/beginners-guide-to-create-a-basic-joomla-template/

categories: ['Content Management']

---
## Joomla is one of the most popular open-source content management systems. This tutorial will walk you through the necessary steps of creating a Joomla template from scratch.

{{< figure align=center src="images/joomla-templates-2.png" alt="basic joomla template">}}  

In this digital age, a content management system is a basic necessity of any business for all their content creation needs. And, there are a number of open-source as well as paid CMS software available in the market. We also have [listed][1] some of the top open-source content management software for businesses. Joomla is one of the most popular open-source cms software and in this tutorial we’ll walk you through step by step and explain how to create a Joomla template from scratch. So let’s get started!

**Note: We assume that you have Joomla 2.5 version installed**

  * **[Setup Directory Structure][2]**
  * **[Create a basic templateDetails.xml file][3]**
  * **[Create a basic index.php file][4]**
  * **[Discover and Install Template][5]**
  * **[Package the template][6]**
  * **[Conclusion][7]**

## Setup Directory Structure {#setup}

To create a very basic Joomla template first, create a new folder in the templates folder. Name the folder whatever you want to call your template e.g “**mynewtemplate**“.

Using your favorite text editor create the files **index.php** and **templateDetails.xml**. To manage your images and style sheets, make 2 new folders called **images** and **css**. Inside the **css** folder create a file called **template.css**.

Your Directory Structure will look something like this

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="joomla template directory structure">}}  

## Create a basic templateDetails.xml file {#xml}

The **templateDetails.xml** file holds all the metadata about your template. And, this file is essential without it, your template won’t be seen by Joomla!.


```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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


Contents of the templateetails.xml are self-explanatory. You can just copy the contents the modify the necessary bits. 

Leave the positions as they are – these are a common set so you will be able to switch easily from the standard templates.

## Create a basic index.php file {#php}

The index.php becomes the main bootstrap file of every page that Joomla! delivers. This page will show the bare-bones code ready for you to cut and paste into your own design.


```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```


## Discover and Install Template {#install}

You first need to tell Joomla! that you have created a new template. This feature is called Discover Extensions and can be accessed via 


```
Extensions -> Extension Manager -> Discover
```


Click Discover Button to discover your template, then select it and click Install to install it. Now your template should show up in the Template Manager (Styles), accessible via 


```
Extensions -> Template Manager
```


## Package the Template {#packge}

An unzipped directory with several files is not a good method for distribution. So, for the sake of distribution, we should create a package of our template. The package can be in ZIP format (with a .zip extension).

If your template is in a directory mytemplate/ then to make the package you can connect to that directory and use commands like:


```
zip -r ..\mytemplate.zip .
```


## Conclusion {#conclusion}

In this article, we learned about the Joomla Template. We went through step by step on how to create a Joomla template. This is just a very basic tutorial to get started with template creation. Of course, you can build a very customized and enhanced template based on this bare-bone structure.

## Relevant Product Pages

You may find the following links relevant:

  * [Joomla Template Development Guide For The Beginners][8]

 [1]: https://products.containerize.com/content-management
 [2]: #setup
 [3]: #xml
 [4]: #php
 [5]: #install
 [6]: #package
 [7]: #conclusion
 [8]: https://blog.containerize.com/2020/09/29/responsive-joomla-templates-tutorial/