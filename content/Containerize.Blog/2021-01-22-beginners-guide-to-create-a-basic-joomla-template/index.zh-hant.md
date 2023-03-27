---
title: "創建基本Joomla模板的初學者指南" 
seoTitle: "創建基本Joomla模板的初學者指南" 
description: "Joomla是一種流行的開源內容管理系統。在本教程中，我們將逐步解釋如何創建Joomla模板。" 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla是最受歡迎的開源內容管理系統之一。本教程將帶您瀏覽從頭開始創建Joomla模板的必要步驟。" 
url: /zh-hant/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla是最受歡迎的開源內容管理系統之一。本教程將帶您瀏覽從頭開始創建Joomla模板的必要步驟。

{{< figure align=center src="images/joomla-templates-2.png" alt="基本的Joomla模板">}}

在這個數字時代，內容管理系統是任何企業滿足其所有內容創建需求的基本必需品。而且，市場上有許多開源和付費的CMS軟件。我們還有[列表][1]一些企業的頂級開源內容管理軟件。 Joomla是最受歡迎的開源CMS軟件之一，在本教程中，我們將逐步引導您，並說明如何從頭開始創建Joomla模板。因此，讓我們開始吧！
 **注意：我們假設您已安裝了Joomla 2.5版本** 
*  **[設置目錄結構][2]**  
*  **[創建一個基本的TemplatedEtails.xml文件][3]**  
*  **[創建一個基本index.php文件][4]**  
*  **[發現並安裝模板][5]**  
*  **[軟件包模板][6]**  
*  **[結論][7]**  

## 設置目錄結構 {#setup}

要首先創建一個非常基本的Joomla模板，請在模板文件夾中創建一個新文件夾。無論您想調用模板，命名文件夾命名，例如“  **myNewTemplate**  ”。
使用您喜歡的文本編輯器創建文件  **index.php** 和  **templatedEtails.xml**  。為了管理您的圖像和样式表，請製作2個名為  **圖像**  和  **css**  的新文件夾。在  **css**  文件夾中創建一個名為 **Template.css**  的文件。
您的目錄結構看起來像這樣

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Joomla模板目錄結構">}}


## 創建一個基本的TemplatedEtails.xml文件 {#xml}

 **templatedEtails.xml** 文件包含有關模板的所有元數據。而且，沒有它，此文件至關重要，Joomla！不會看到您的模板。
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
templateTails.xml的內容是自我解釋的。您可以將內容複製修改所需位。
將位置保持原樣 - 這些是常見的集合，因此您可以輕鬆地從標準模板中切換。

## 創建一個基本index.php文件 {#php}

index.php成為Joomla每個頁面的主要引導程序！交付。此頁面將顯示出學號的準備，供您切割並粘貼到自己的設計中。
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

## 發現並安裝模板 {#install}

您首先需要告訴Joomla！您創建了一個新模板。此功能稱為發現擴展，可以通過
```
Extensions -> Extension Manager -> Discover
```
單擊“發現”按鈕以發現模板，然後選擇它，然後單擊“安裝”安裝。現在，您的模板應顯示在模板管理器（樣式）中，可通過
```
Extensions -> Template Manager
```

## 包裝模板 {#packge}

帶有多個文件的無拉鍊目錄不是分發的好方法。因此，為了發行，我們應該創建一個模板包。包裝可以採用ZIP格式（帶有.zip擴展名）。
如果您的模板位於目錄中的MyTemplate/，則可以使軟件包連接到該目錄並使用以下命令：
```
zip -r ..\mytemplate.zip .
```

## 結論 {#conclusion}

在本文中，我們了解了Joomla模板。我們逐步介紹瞭如何創建Joomla模板。這只是一個非常基本的教程，可以從模板創建開始。當然，您可以基於這個裸露的結構來構建一個非常自定義和增強的模板。

##相關產品頁面
您可能會發現以下鏈接相關：
  * [Joomla模板開髮指南][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
