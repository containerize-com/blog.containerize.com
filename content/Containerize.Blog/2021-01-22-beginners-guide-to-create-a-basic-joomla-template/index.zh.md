---
title: "创建基本Joomla模板的初学者指南" 
seoTitle: "创建基本Joomla模板的初学者指南" 
description: "Joomla是一种流行的开源内容管理系统。在本教程中，我们将逐步解释如何创建Joomla模板。" 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla是最受欢迎的开源内容管理系统之一。本教程将带您浏览从头开始创建Joomla模板的必要步骤。" 
url: /zh/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla是最受欢迎的开源内容管理系统之一。本教程将带您浏览从头开始创建Joomla模板的必要步骤。

{{< figure align=center src="images/joomla-templates-2.png" alt="基本的Joomla模板">}}

在这个数字时代，内容管理系统是任何企业满足其所有内容创建需求的基本必需品。而且，市场上有许多开源和付费的CMS软件。我们还有[列表][1]一些企业的顶级开源内容管理软件。 Joomla是最受欢迎的开源CMS软件之一，在本教程中，我们将逐步引导您，并说明如何从头开始创建Joomla模板。因此，让我们开始吧！
 **注意：我们假设您已安装了Joomla 2.5版本** 
*  **[设置目录结构][2]**  
*  **[创建一个基本的TemplatedEtails.xml文件][3]**  
*  **[创建一个基本index.php文件][4]**  
*  **[发现并安装模板][5]**  
*  **[软件包模板][6]**  
*  **[结论][7]**  

## 设置目录结构 {#setup}

要首先创建一个非常基本的Joomla模板，请在模板文件夹中创建一个新文件夹。无论您想调用模板，命名文件夹命名，例如“  **myNewTemplate**  ”。
使用您喜欢的文本编辑器创建文件  **index.php** 和  **templatedEtails.xml**  。为了管理您的图像和样式表，请制作2个名为  **图像**  和  **css**  的新文件夹。在  **css**  文件夹中创建一个名为 **Template.css**  的文件。
您的目录结构看起来像这样

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Joomla模板目录结构">}}


## 创建一个基本的TemplatedEtails.xml文件 {#xml}

 **templatedEtails.xml** 文件包含有关模板的所有元数据。而且，没有它，此文件至关重要，Joomla！不会看到您的模板。
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
templateTails.xml的内容是自我解释的。您可以将内容复制修改所需位。
将位置保持原样 - 这些是常见的集合，因此您可以轻松地从标准模板中切换。

## 创建一个基本index.php文件 {#php}

index.php成为Joomla每个页面的主要引导程序！交付。此页面将显示出学号的准备，供您切割并粘贴到自己的设计中。
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

## 发现并安装模板 {#install}

您首先需要告诉Joomla！您创建了一个新模板。此功能称为发现扩展，可以通过
```
Extensions -> Extension Manager -> Discover
```
单击“发现”按钮以发现模板，然后选择它，然后单击“安装”安装。现在，您的模板应显示在模板管理器（样式）中，可通过
```
Extensions -> Template Manager
```

## 包装模板 {#packge}

带有多个文件的无拉链目录不是分发的好方法。因此，为了发行，我们应该创建一个模板包。包装可以采用ZIP格式（带有.zip扩展名）。
如果您的模板位于目录MyTemplate中/，则可以将包装连接到该目录并使用以下命令：
```
zip -r ..\mytemplate.zip .
```

## 结论 {#conclusion}

在本文中，我们了解了Joomla模板。我们逐步介绍了如何创建Joomla模板。这只是一个非常基本的教程，可以从模板创建开始。当然，您可以基于这个裸露的结构来构建一个非常自定义和增强的模板。

## 相关产品页面
您可能会发现以下链接相关：
  * [Joomla模板开发指南][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
