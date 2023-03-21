---
title: "開發phplist插件的初學者指南" 
seoTitle: "開發phplist插件的初學者指南" 
description: "熟悉phplist插件體系結構，並學習如何創建基本的phplist插件。該指南可幫助您自定義和增強phplist功能。" 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Phplist插件允許開發人員自定義產品並增強其功能。在這篇文章中，我們將學習如何在phplist中創建基本插件。" 
url: /zh-hant/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## Phplist插件允許開發人員自定義產品並增強其功能。在這篇文章中，我們將學習如何在phplist中創建基本插件。

{{< figure align=center src="images/phplist-plugin.png" alt="phplist插件">}}

插件支持是軟件的重要組成部分，尤其是對於開源系統。這使開發人員可以構建一個新的插件來擴展功能。**phplist**鼓勵插件的開發，以便開發人員可以根據其業務需求來添加新功能。 phplist插件是一個獨立的代碼集合，其中包含用於PHP，HTML，CSS和JavaScript的代碼。
由於許多原因，應用程序支持插件，其中一些是：
* 不要修改核心功能。
* 允許開發人員創建新功能。
* 減少軟件的大小。
我們將在本教程中詳細討論以下主題。
* [**先決條件**][2]
* [**phplist插件開發的基礎知識**][3]
* [**創建我們的phplist插件**][4]
* [**結論**][5]

## 先決條件 {#req}
* 最新版本的phplist。
* 熟悉Phplist和PHP。
* 了解HTML / CSS和JavaScript。

## Phplist插件開發的基礎知識 {#BASICS}
以下方法將改善phplist插件的功能。
***頁面** - 創建有關報告，統計信息，顯示信息等活動的頁面。
***鉤** - 這使您可以在特定位置調用功能。
Phplist有三種特殊插件。每種類型的一個插件只能啟用。
***編輯插件** - 允許實現編輯器進行編輯活動或模板。
***身份驗證插件** - 這允許添加用於管理員身份驗證的新機制。
***電子郵件發送者插件** - 允許實現一種新方法來發送電子郵件，而不是內置功能。

## 創建我們的phplist插件 {#create}
首先，您需要擴展phplistplugin核心類。要創建一個插件，您需要在插件\ _Rootdir下創建一個名為“ Helloworld”的目錄，並在插件目錄的根部創建一個名為Helloworld.php的文件。您可以檢查config.php文件以查找插件\ _Rootdir變量的值。將下面的代碼複製到helloworld.php文件中。
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
您必須將$ coderoot設置為插件目錄。為了確保插件正確初始化，必須調用父構建器。創建一個文件main.php並將其放入插件目錄中。將以下代碼複製到其中。
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
將helloworld.php類文件和插件目錄放入插件rootdir中以安裝插件。要激活插件，請單擊菜單欄中的“配置”選項卡，然後單擊“管理插件”。插件頁面將向您顯示可用插件的列表，您可以在此處啟用/禁用插件表。
您可以通過以下URL訪問您的插件，例如http://example.com/admin/?page=main&pi=helloworld。用您的域名替換example.com。

## 結論 {#con}
我們已經了解了**phplist插件**開發的基礎知識，並創建了一個示例插件。作為起點，您可以遵循此指南並進一步探索插件開發以增強功能。
最後，[**containerize.com**][6]正處於撰寫有關更多最新開源產品的博客文章的一致過程。因此，與此[**新聞通訊**][7]類別保持聯繫以獲取最新更新。

## 探索
您可能會發現以下鏈接相關。
* [**phplist**][8]
* [**mailTrain**][9]
* [**ListMonk**][10]
* [**MOONMAIL**][11]
* [**Mailman**][12]
* [**2021年的前5個開源通訊軟件**][13]
* [**如何在phplist中配置多租戶應用程序**][14]
* [**如何使用phplist創建和發送新聞通訊**][15]

  
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
