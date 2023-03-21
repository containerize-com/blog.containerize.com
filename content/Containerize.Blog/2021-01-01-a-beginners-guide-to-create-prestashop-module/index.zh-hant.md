---
title: "創建Prestashop模塊的初學者指南" 
seoTitle: "創建Prestashop模塊的初學者指南" 
description: "PrestAshop是一個高效且具有成本效益的開源電子商務軟件，可以在線設置在線商店。 Prestashop addons可幫助存儲所有者擴展功能。" 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Prestashop模塊是小型程序，可讓您提高商店的功能。我們將學習如何在本教程中構建基本模塊。" 
url: /zh-hant/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Prestashop模塊是小程序，可讓您改善商店的功能。我們將學習如何在本教程中構建基本模塊。

{{< figure align=center src="images/prestashop-module.png" alt="Prestashop模塊">}}

**PRESTASHOP **是100％免費和開源的電子商務軟件。這使商店所有者可以輕鬆地建立在線形象並大規模擴大業務。 PrestAshop具有默認功能，您可能需要更多的功能來滿足您的業務需求。 Prestashop的市場是找到可用於擴展商店功能的附加功能的絕佳場所。此外，您可以在市場上找到免費和付費模塊。但是，您也可以從頭開始創建自定義模塊。
我們將詳細討論以下主題，以**創建Prestashop模塊**。
  * [要求][1]
  * [模塊開發的基礎知識][2]
  * [創建我們的Prestashop模塊][3]
  * [結論][4]

## 要求 {#req}
  *安裝Prestashop 1.6或更高。
  *熟悉Prestashop。
  *了解PHP。

## 模塊開發的基礎知識 {#basics}
在開始編碼之前，了解 **Prestashop模塊開發** 的核心概念非常重要。它將允許您快速構建和管理模塊。
**配置**  - 配置允許您在商店數據庫中保存數據，而無需模塊特定表。配置表包含一個可以從任何地方訪問的鍵值屬性列表。
**掛鉤**  - 鉤子是將任何特定的Prestashop事件與您的代碼連接起來的方法。您可以使用掛鉤將代碼放入頁面上，並為特定的操作（例如在某些事件中發送電子郵件）。
**小部件**  - 模塊開發人員使用小部件在需要的地方顯示內容。
**學說**  - 學說是ORM允許您通過對像管理數據庫數據。這提供了一個抽象層，可讓您使用簡單的調用執行插入/更新操作。

## 創建我們的prestashop模塊 {#create}
  *創建名為 **MyFirstModule ** 的模塊目錄**在**模塊中** PrestAshop安裝的目錄。將所有文件放在模塊目錄中。
  *使用名稱 **myfirstmodule.php ** 創建主文件，然後在其中復制以下代碼。
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
  *創建 **install（）** 和 **uninstall（）** 方法。在 **myfirstmodule.php ** 文件中添加以下方法。
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
  *調用特殊方法激活我們的註冊鉤子。我們將使用這些方法顯示“ Hello World！”發短信給側邊欄。在 **myfirstmodule.php ** 文件中添加以下代碼。
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
  *最後，打開管理員部分，上傳和**安裝Prestashop模塊**。

## 結論 {#conclusion}
我們已經討論了本教程中構建 **Prestashop模塊** 的核心概念。此外，我們開發了基本模塊，可以用作更多提前模塊的起點。 [Containerize.com][5]一直在研究新的教程博客文章。有關最新更新，請與[購物車軟件][6]類別保持聯繫。

## 探索
除了 **Prestashop模塊創建教程** 外，您還可以找到以下鏈接。
  * [PRESTASHOP  - 免費購物車軟件][7]
  * [2020年的前5個開源購物車軟件][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
