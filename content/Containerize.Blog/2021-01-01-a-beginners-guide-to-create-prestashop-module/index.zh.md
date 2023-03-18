---
title: "创建Prestashop模块的初学者指南" 
seoTitle: "创建Prestashop模块的初学者指南" 
description: "PrestAshop是一个高效且具有成本效益的开源电子商务软件，可以在线设置在线商店。 Prestashop addons可帮助存储所有者扩展功能。" 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Prestashop模块是小型程序，可让您提高商店的功能。我们将学习如何在本教程中构建基本模块。" 
url: /zh/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Prestashop模块是小程序，可让您改善商店的功能。我们将学习如何在本教程中构建基本模块。

{{< figure align=center src="images/prestashop-module.png" alt="Prestashop模块">}}

** PRESTASHOP **是100％免费和开源的电子商务软件。这使商店所有者可以轻松地建立在线形象并大规模扩大业务。 PrestAshop具有默认功能，您可能需要更多的功能来满足您的业务需求。 Prestashop的市场是找到可用于扩展商店功能的附加功能的绝佳场所。此外，您可以在市场上找到免费和付费模块。但是，您也可以从头开始创建自定义模块。
我们将详细讨论以下主题，以**创建Prestashop模块**。
  * [要求] [1]
  * [模块开发的基础知识] [2]
  * [创建我们的Prestashop模块] [3]
  * [结论] [4]

## 要求{#req}
  *安装Prestashop 1.6或更高。
  *熟悉Prestashop。
  *了解PHP。

## 模块开发的基础知识{#basics}
在开始编码之前，了解** Prestashop模块开发**的核心概念非常重要。它将允许您快速构建和管理模块。
**配置**  - 配置允许您在商店数据库中保存数据，而无需模块特定表。配置表包含一个可以从任何地方访问的键值属性列表。
**挂钩**  - 钩子是将任何特定的Prestashop事件与您的代码连接起来的方法。您可以使用挂钩将代码放入页面上，并为特定的操作（例如在某些事件中发送电子邮件）。
**小部件**  - 模块开发人员使用小部件在需要的地方显示内容。
**学说**  - 学说是ORM允许您通过对象管理数据库数据。这提供了一个抽象层，可让您使用简单的调用执行插入/更新操作。

## 创建我们的prestashop模块{#create}
  *创建名为** MyFirstModule **的模块目录**在**模块中** PrestAshop安装的目录。将所有文件放在模块目录中。
  *使用名称** myfirstmodule.php **创建主文件，然后在其中复制以下代码。
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
  *创建** install（）**和** uninstall（）**方法。在** myfirstmodule.php **文件中添加以下方法。
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
  *调用特殊方法激活我们的注册钩子。我们将使用这些方法显示“ Hello World！”发短信给侧边栏。在** myfirstmodule.php **文件中添加以下代码。
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
  *最后，打开管理员部分，上传和**安装Prestashop模块**。

## 结论{#conclusion}
我们已经讨论了本教程中构建** Prestashop模块**的核心概念。此外，我们开发了基本模块，可以用作更多提前模块的起点。 [Containerize.com] [5]一直在研究新的教程博客文章。有关最新更新，请与[购物车软件] [6]类别保持联系。

## 探索
除了** Prestashop模块创建教程**外，您还可以找到以下链接。
  * [PRESTASHOP  - 免费购物车软件] [7]
  * [2020年的前5个开源购物车软件] [8]
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
