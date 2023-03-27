---
title: "使用HTML表單生成器入門|形式構建器" 
seoTitle: "使用HTML表單生成器入門|形式構建器" 
description: "FormBuilder是具有拖放用戶界面的免費且多語言的HTML Form Generator。請按照本教程了解如何在Localhost上進行設置。" 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "JavaScript供電的開源形式編輯器，具有多種配置，可配置的表單模板和自定義控件。讓我們學習如何設置FormBuilder。" 
url: /zh-hant/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## JavaScript動力開源表格編輯器，具有多個配置，可配置的表單模板和自定義控件。讓我們學習如何設置FormBuilder。

{{< figure align=center src="images/formbuilder.png" alt="HTML表單生成器">}}


## **概述** 
我們最近發表了一些有關主題的文章，例如[如何設置Bootstrap表單創建者表單。第一篇博客文章是一篇教程文章，該文章演示了Bootstrap Form Builder [Form.io][3]的設置過程和功能。第二篇文章談到了廣泛使用的開源形式的建築商。在當前時間點，雙向互動是服務提供商和服務消費者之間最重要的事情。組織傾向於收到有關其服務的一致反饋，然後製定未來的業務策略。但是，表格是從客戶那裡收集和存儲信息。企業生產多種表格來收集有關各種正在進行的操作的數據，其中有很多類型的形式是單頁，其中一些是多頁面的形式。一些企業在其在線門戶網站上嵌入了表格，或者有些企業使用電子郵件或其他類型的媒介來揭示其表格以收集數據。
因此，有許多具有豐富形式構建器功能的開源表格和數據管理軟件。在本文中，我們將通過介紹以下幾點來探討免費的HTML表單生成器 **[formBuilder][4]** 。
* **[什麼是FormBuilder？][5]** 
* [ **如何設置？** ][6]
* [ **如何使用FormBuilder創建表單？** ][7]
* **[結論][8]** 

## 什麼是Form Builder？ {#what}

[FormBuilder][4]是一個開源表單設計器，可讓用戶創建交互式表單。它是安全的，可擴展的，並且具有自託管功能。此HTML表單生成器是多語言的，並為多種語言提供了支持。有一個用戶友好的用戶界面，用戶可以在其中拖放表單元素以製定所需的表單模板。此外，它提供了豐富的控件和可配置的表單模板。此外，用戶可以在用戶界面上創建多個選項卡以構建多頁面表單。最重要的是，用戶可以通過開發其插件來傾向於此免費形式構建器。它具有有關開發和部署的所有文檔。它是用node.js編寫的，所有源代碼都可以在[github][9]上找到。
這是form.io的頂級亮點
  * I18N集成
* 多頁面
* 可擴展
* 支持流行的JavaScript前端框架
* 拖動UI

## 如何設置？ {#setup}

Form Builder教程的這一部分將向您展示如何在本地計算機上設置FormBuilder。
在進一步之前，請確保您已經安裝了以下先決條件。
  * node.js> = 10.9.0
  * npm
  * git
安裝先決條件後，運行以下命令以克隆此應用程序的源代碼：
```
git clone https://github.com/kevinchappell/formBuilder
```
接下來，運行以下命令安裝依賴項：
```
cd form-builder<br>npm install 
```
之後，您可以通過運行以下命令來啟動應用程序：
```
npm start
```
最後，上述命令將在以下地址打開瀏覽器中的應用程序：
```
http://localhost:8080/
```

## 如何使用FormBuilder創建表單？ {#how}

在本節中，我們將探討此HTML表單生成器的功能，並將學習如何創建表單。
啟動服務器後，將出現以下用戶界面。

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="HTML表單生成器">}}

向前邁進，您可以在右側看到菜單欄。它包含表單元素，例如按鈕，複選框，文本字段，數據字段，標題，段落等。但是，您可以拖動這些元素，並掉入屏幕的中間區域（可丟棄）。在左上角，有一個選項可以啟用該應用程序的引導版本。在左上角，有一個下拉列表，用戶可以選擇任何可用的語言。

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="形式編輯器">}}

接下來，我們可以將任何形式元素拖到可輟學的區域。此外，我們可以編輯任何元素的配置，如上圖中所示。可以選擇創建現有元素的副本。我們可以彼此更改元素的位置。

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="HTML表單生成器">}}

完成表單建築物後，您可以通過按下頂部中間的“渲染”按鈕來渲染表單。此外，在各種表單選項中，用戶可以在表格後面生成HTML。還有其他選項，例如加載用戶表單，顯示用戶數據，渲染用戶表單和清除用戶表單。除這些功能外，還有許多表單操作，例如“ getFieldTypes”，它們返回表單的註冊字段類型。同樣，還有許多其他動作，例如顯示數據，獲取XML，設置數據，切換編輯等等。但是，您可以檢查自己的其他許多事情。由於它是開源，您可以根據自己的要求對其進行修改。

## 結論 {#結論}

這是博客文章的結尾。我們希望，如果您希望部署開源HTML表單生成器，本教程將真正為您提供幫助。本文介紹了FormBuilder的許多方面，因此您可以輕鬆地考慮您的業務需求。這些免費的開源形式建築商具有成本效益且節省時間。這些免費工具不僅提供形式構建功能，還提供表格和數據管理。您可以使用第三方Web應用程序配置表單。此外，它消除了為不同業務應用程序創建不同形式的麻煩，而是企業主可以使用這些開源形式的建造者製作任何形式的表單。此外，這些表單編輯器還有一些可根據需求修改的插件。因此，現在是時候通過使用良好的免費HTML表單生成器來自動化此類重複任務了。
最後，[Containerize.com][10]正在撰寫有關進一步開源產品的文章。因此，請與[表格][11]類別保持聯繫以進行常規新聞和更新。

## 探索
* **[form.io][3]** 
* **[orbeon][12]** 
* **[ohmyform][13]** 
* **[Webiny][14]** 
* **[formtools][15]** 
* **[formBuilder][4]** 
* **[羊駝表格][16]** 
* [ **如何在localhost上設置Bootstrap Form creator form.io** ][1]
* [ **使用免費和開源軟件自動化業務操作** ][17]
* [ **2020年的前5名開源在線形式建築商** ][2]



[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
