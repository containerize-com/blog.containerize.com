---
title: "开发phplist插件的初学者指南" 
seoTitle: "开发phplist插件的初学者指南" 
description: "熟悉phplist插件体系结构，并学习如何创建基本的phplist插件。该指南可帮助您自定义和增强phplist功能。" 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Phplist插件允许开发人员自定义产品并增强其功能。在这篇文章中，我们将学习如何在phplist中创建基本插件。" 
url: /zh/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## Phplist插件允许开发人员自定义产品并增强其功能。在这篇文章中，我们将学习如何在phplist中创建基本插件。

{{< figure align=center src="images/phplist-plugin.png" alt="phplist插件">}}

插件支持是软件的重要组成部分，尤其是对于开源系统。这使开发人员可以构建一个新的插件来扩展功能。 ** phplist **鼓励插件的开发，以便开发人员可以根据其业务需求来添加新功能。 phplist插件是一个独立的代码集合，其中包含用于PHP，HTML，CSS和JavaScript的代码。
由于许多原因，应用程序支持插件，其中一些是：
  *不要修改核心功能。
  *允许开发人员创建新功能。
  *减少软件的大小。
我们将在本教程中详细讨论以下主题。
  *[**先决条件**] [2]
  *[** phplist插件开发的基础知识**] [3]
  *[**创建我们的phplist插件**] [4]
  *[**结论**] [5]

## 先决条件{#req}
  *最新版本的phplist。
  *熟悉Phplist和PHP。
  *了解HTML / CSS和JavaScript。

## Phplist插件开发的基础知识{#BASICS}
以下方法将改善phplist插件的功能。
  ***页面**  - 创建有关报告，统计信息，显示信息等活动的页面。
  ***钩**  - 这使您可以在特定位置调用功能。
Phplist有三种特殊插件。每种类型的一个插件只能启用。
  ***编辑插件**  - 允许实现编辑器进行编辑活动或模板。
  ***身份验证插件**  - 这允许添加用于管理员身份验证的新机制。
  ***电子邮件发送者插件**  - 允许实现一种新方法来发送电子邮件，而不是内置功能。

## 创建我们的phplist插件{#create}
首先，您需要扩展phplistplugin核心类。要创建一个插件，您需要在插件\ _Rootdir下创建一个名为“ Helloworld”的目录，并在插件目录的根部创建一个名为Helloworld.php的文件。您可以检查config.php文件以查找插件\ _Rootdir变量的值。将下面的代码复制到helloworld.php文件中。
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
您必须将$ coderoot设置为插件目录。为了确保插件正确初始化，必须调用父构建器。创建一个文件main.php并将其放入插件目录中。将以下代码复制到其中。
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
将helloworld.php类文件和插件目录放入插件rootdir中以安装插件。要激活插件，请单击菜单栏中的“配置”选项卡，然后单击“管理插件”。插件页面将向您显示可用插件的列表，您可以在此处启用/禁用插件表。
您可以通过以下URL访问您的插件，例如http://example.com/admin/?page=main&pi=helloworld。用您的域名替换example.com。

## 结论{#con}
我们已经了解了** phplist插件**开发的基础知识，并创建了一个示例插件。作为起点，您可以遵循此指南并进一步探索插件开发以增强功能。
最后，[** containerize.com **] [6]正处于撰写有关更多最新开源产品的博客文章的一致过程。因此，与此[**新闻通讯**] [7]类别保持联系以获取最新更新。

## 探索
您可能会发现以下链接相关。
  *[** phplist **] [8]
  *[** mailTrain **] [9]
  *[** ListMonk **] [10]
  *[** MOONMAIL **] [11]
  *[** Mailman **] [12]
  *[** 2021年的前5个开源通讯软件**] [13]
  *[**如何在phplist中配置多租户应用程序**] [14]
  *[**如何使用phplist创建和发送新闻通讯**] [15]
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
