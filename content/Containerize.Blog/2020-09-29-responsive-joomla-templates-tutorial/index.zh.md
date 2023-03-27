---
title: "JOOMLA模板开发指南" 
seoTitle: "JOOMLA模板开发指南" 
description: "了解Joomla模板开发，如何为各种用例设置响应式布局。定义业务网站设计层的一组文件。" 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "构建高度专业且可定制的Joomla模板，这些模板提供了许多功能，例如多语言，SEO /用户友好和丰富的配色方案。" 
url: /zh/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## 构建高度专业和可定制的Joomla模板，这些模板提供了许多功能，例如多语言，SEO /用户友好和丰富的配色方案。 {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Joomla模板开发">}}


## 概述
精心设计的商业网站通过使访客易于导航，扮演着至关重要的角色。 **full以Joomla为特色** 通过多种响应式布局和Joomla模板开发来促进其用户，以控制业务网站的美学。
在开发阶段，设计元素的放置对于获得至关重要：
  * 一致性
* 轻松导航
* 简单
* 移动兼容性
* 可读性
**JOOMLA模板** 来了。此开源软件提供了为所有网页开发或使用预定义响应布局的规定，而不是分别为每个页面编写代码。
在这篇博客文章中，我们将学习有关如何在Joomla创建和设置 **用户友好模板** 的知识。
* [ **什么是Joomla布局？** ][2]
* [ **如何在Joomla中创建一个简单的响应模板？** ][3]
* [ **如何安装Joomla模板？** ][4]
* [ **结论** ][5]

## 什么是Joomla布局？ {#what}

Joomla为前端以及后端提供模板。它带有许多现成的模板，它为开发人员提供了 **根据用例构建免费响应式引导主题** 。 Joomla中有两种类型的模板。
**前端模板:** 与面向业务网站的用户相关。
**后端模板:** 这些模板链接到站点的业务逻辑。

## 如何在Joomla中创建一个简单的响应模板？ {#how}

在本节中，我们将介绍本Joomla模板教程的步骤。
在进入本节之前，请确保您了解以下内容：
  * html
  * CSS
  * JavaScript
  * php
因此，在Joomla中创建自定义模板从未如此艰难和复杂。但是，让我们开始创建第一个Joomla模板。

## **设置目录结构** 
首先，在“ **模板**”文件夹中创建一个名为“**mytemplate** ”的文件夹。
在“ **myTemplate** ”文件夹中创建以下文件：
* **index.php** ：这是包含整个模板页面的HTML和PHP代码的核心文件。
* **templatedEtails.xml** ：此文件包含模板的元数据，并且强制着Joomla注意。
现在，在“ **mytemplate** ”文件夹中创建三个文件夹，并具有以下名称：
* **JS** ：此文件夹将包含模板所需的所有JavaScript文件
* **CSS** ：所有用于造型的CSS文件都将进入此文件夹
* **图像** ：模板使用的图像将位于此文件夹中
在“ **CSS**”文件夹中创建一个名为“**Template.CSS** ”的CSS文件。
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
最终，这就是目录结构的外观。

## 让我们放一些代码
将此代码放在 **templatedEtails.xml** 文件中。
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
如前所述，该文件包含有关标记标签之间定义的响应式布局的元数据。但是，您可以更改一般信息，例如名称，作者和描述。
该文件还包含有关模板使用的其他文件和文件夹的信息。
现在，打开 **index.php** 文件，然后开始列出以下代码：
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
此文件将从此行开始，该行可以阻止其他人读取您的PHP代码。
```
<!DOCTYPE html>
```
这是为了让浏览器知道文档类型。
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
HTML文档从此行开始， **xmlns** 属性告诉文档的XML名称空间。
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
标签后的第一行告诉Joomla将标题信息添加到元数据信息和页面标题之类的标题信息。
第二行中有一个指向外部样式表的链接，第三行链接了外部JavaScript文件。
其余的文件将引导程序置于模板中。
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
主体部分开始在头部部分包含将在模板上反映的所有数据，供用户查看和导航。
```
<jdoc:include type="modules" name="position-7" style="well" />
```
该语句称为JDOC语句，用于指示Joomla添加一个名为“ position-7”的模块。 **JOOMLA模板开发** 有几种JDOC语句经常使用。
这是最终完整的 **index.php** 文件，其中包含基本Joomla模板所需的所有代码。
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
对于一个非常基本的模板，一切都已经到位。现在，是时候将其安装在Joomla服务器上并查看如何进行。

## 如何安装Joomla模板？ {#install}

Joomla模板安装过程非常直接且容易。有以下步骤可以安装：
转到“扩展 - >管理 - >安装

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla安装设置图像">}}

在这里，您可以在列表中看到新开发的Joomla模板，如下图所示。

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Joomla模板列表">}}

现在，选择模板，点击“安装”，并将出现有关成功安装的成功消息。
安装模板后，您可以在Joomla控制面板中访问和修改模板文件，并从“模板预览”选项中预览更改。

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="JOOMLA">}}

现在，您可以在浏览器中查看第一个Joomla模板！

## 结论 {#结论}

良好且响应的模板是整体站点建模的基础。 **Joomla的响应式布局** 是多功能的，可用于各种项目。从编写代码到Joomla模板开发变得非常简单，借助直观的管理仪表板。 Joomla提供了对模板开发的完全控制，以满足用户的需求。
由于 **CMS软件** 类别正在始终如一地进行改进，并且将添加有关其他内容管理系统的更多教程，请与[Content Management Systems][6]部分保持联系以进行常规更新。

## 相关产品页面
您可能会发现以下链接相关：
  * [JOOMLA][1]
  * [Drupal][7]
  * [pyro][8]
  * [django cms][9]
  * [umbraco cms][10]
  * [Concrete5][11]
  * [坟墓][12]
  * [工艺][13]
  * [contao][14]
  * [叉][15]
  * [炼油厂CMS][16]
  * [slomotivecms][17]



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
