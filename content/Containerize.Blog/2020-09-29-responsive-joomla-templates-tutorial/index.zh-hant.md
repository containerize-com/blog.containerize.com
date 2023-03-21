---
title: "JOOMLA模板開髮指南" 
seoTitle: "JOOMLA模板開髮指南" 
description: "了解Joomla模板開發，如何為各種用例設置響應式佈局。定義業務網站設計層的一組文件。" 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "構建高度專業且可定制的Joomla模板，這些模板提供了許多功能，例如多語言，SEO /用戶友好和豐富的配色方案。" 
url: /zh-hant/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## 構建高度專業和可定制的Joomla模板，這些模板提供了許多功能，例如多語言，SEO /用戶友好和豐富的配色方案。 {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Joomla模板開發">}}


## 概述
精心設計的商業網站通過使訪客易於導航，扮演著至關重要的角色。**full以Joomla為特色**通過多種響應式佈局和Joomla模板開發來促進其用戶，以控制業務網站的美學。
在開發階段，設計元素的放置對於獲得至關重要：
  * 一致性
* 輕鬆導航
* 簡單
* 移動兼容性
* 可讀性
* * JOOMLA模板**來了。此開源軟件提供了為所有網頁開發或使用預定義響應佈局的規定，而不是分別為每個頁面編寫代碼。
在這篇博客文章中，我們將學習有關如何在Joomla創建和設置**用戶友好模板**的知識。
* [**什麼是Joomla佈局？**][2]
* [**如何在Joomla中創建一個簡單的響應模板？**][3]
* [**如何安裝Joomla模板？**][4]
* [**結論**][5]

## 什麼是Joomla佈局？   {#什麼}
Joomla為前端以及後端提供模板。它帶有許多現成的模板，它為開發人員提供了**根據用例構建免費響應式引導主題**。 Joomla中有兩種類型的模板。
* *前端模板：**與面向業務網站的用戶相關。
* *後端模板：**這些模板鏈接到站點的業務邏輯。

## 如何在Joomla中創建一個簡單的響應模板？   {#如何}
在本節中，我們將介紹本Joomla模板教程的步驟。
在進入本節之前，請確保您了解以下內容：
  * html
  * CSS
  * JavaScript
  * php
因此，在Joomla中創建自定義模板從未如此艱難和復雜。但是，讓我們開始創建第一個Joomla模板。

## **設置目錄結構**
首先，在“**模板**”文件夾中創建一個名為“**mytemplate**”的文件夾。
在“**myTemplate**”文件夾中創建以下文件：
***index.php**：這是包含整個模板頁面的HTML和PHP代碼的核心文件。
***templatedEtails.xml**：此文件包含模板的元數據，並且強制著Joomla注意。
現在，在“**mytemplate**”文件夾中創建三個文件夾，並具有以下名稱：
***JS**：此文件夾將包含模板所需的所有JavaScript文件
***CSS**：所有用於造型的CSS文件都將進入此文件夾
***圖像**：模板使用的圖像將位於此文件夾中
在“**CSS**”文件夾中創建一個名為“**Template.CSS**”的CSS文件。
```
* mytemplate/
**css/
*** template.css
**images/
**js/
**index.php
**templateDetails.xml
```
最終，這就是目錄結構的外觀。

## 讓我們放一些代碼
將此代碼放在**templatedEtails.xml**文件中。
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
如前所述，該文件包含有關標記標籤之間定義的響應式佈局的元數據。但是，您可以更改一般信息，例如名稱，作者和描述。
該文件還包含有關模板使用的其他文件和文件夾的信息。
現在，打開**index.php**文件，然後開始列出以下代碼：
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
此文件將從此行開始，該行可以阻止其他人讀取您的PHP代碼。
```
<!DOCTYPE html>
```
這是為了讓瀏覽器知道文檔類型。
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
HTML文檔從此行開始，**xmlns**屬性告訴文檔的XML名稱空間。
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
標籤後的第一行告訴Joomla將標題信息添加到元數據信息和頁面標題之類的標題信息。
第二行中有一個指向外部樣式表的鏈接，第三行鏈接了外部JavaScript文件。
其餘的文件將引導程序置於模板中。
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
主體部分開始在頭部部分包含將在模板上反映的所有數據，供用戶查看和導航。
```
<jdoc:include type="modules" name="position-7" style="well" />
```
該語句稱為JDOC語句，用於指示Joomla添加一個名為“ position-7”的模塊。**JOOMLA模板開發**有幾種JDOC語句經常使用。
這是最終完整的**index.php**文件，其中包含基本Joomla模板所需的所有代碼。
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
對於一個非常基本的模板，一切都已經到位。現在，是時候將其安裝在Joomla服務器上並查看如何進行。

## 如何安裝Joomla模板？   {#安裝}
Joomla模板安裝過程非常直接且容易。有以下步驟可以安裝：
轉到“擴展 - >管理 - >安裝

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla安裝設置圖像">}}

在這裡，您可以在列表中看到新開發的Joomla模板，如下圖所示。

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Joomla模板列表">}}

現在，選擇模板，點擊“安裝”，並將出現有關成功安裝的成功消息。
安裝模板後，您可以在Joomla控制面板中訪問和修改模板文件，並從“模板預覽”選項中預覽更改。

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="JOOMLA">}}

現在，您可以在瀏覽器中查看第一個Joomla模板！

## 結論 {#conclusion}
良好且響應的模板是整體站點建模的基礎。**Joomla的響應式佈局**是多功能的，可用於各種項目。從編寫代碼到Joomla模板開髮變得非常簡單，借助直觀的管理儀表板。 Joomla提供了對模板開發的完全控制，以滿足用戶的需求。
由於**CMS軟件**類別正在始終如一地進行改進，並且將添加有關其他內容管理系統的更多教程，請與[Content Management Systems][6]部分保持聯繫以進行常規更新。

## 相關產品頁面
您可能會發現以下鏈接相關：
  * [JOOMLA][1]
  * [Drupal][7]
  * [pyro][8]
  * [django cms][9]
  * [umbraco cms][10]
  * [Concrete5][11]
  * [墳墓][12]
  * [工藝][13]
  * [contao][14]
  * [叉][15]
  * [煉油廠CMS][16]
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
