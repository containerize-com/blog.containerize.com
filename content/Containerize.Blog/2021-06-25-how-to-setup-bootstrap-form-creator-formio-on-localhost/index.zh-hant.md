---
title: "如何在localhost上設置bootstrap表單創建器form.io" 
seoTitle: "如何在localhost上設置bootstrap表單創建器form.io" 
description: "瀏覽本文，並了解如何在Localhost上設置Formio。該引導形式創建者是免費的，可擴展的，並提供了第三方集成。" 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "使用拖放html表單構建器構建特定於任務和可自定義的表單。 Formio是自託管的，API驅動的，提供表格和數據管理。" 
url: /zh-hant/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

##使用拖放html表單構建器構建特定於任務和可自定義的表單。 Formio是自託管的，API驅動的，提供表格和數據管理。

{{< figure align=center src="images/formio-1.png" alt="Bootstrap表單創建者">}}


## **概述**
在快速增長的業務需求下，有很多直接屬於公眾交易和參與的業務。這種參與可以是物理的或虛擬的。有時，這是關於提供服務，有時是關於收集數據或反饋。另一方面，企業組織傾向於收集有關其產品和服務的客戶數據。因此，數據量取決於與相關受眾的影響力。接下來，數據管理是另一個關鍵任務，它需要引起極大的關注。
但是，公司行業使用在線表格來滿足與數據收集相關的需求。有許多網站可能包含許多表格，例如聯繫表，投訴表格，客戶反饋表，入學表格等。現在，它成為構建，管理這些表格和提交數據的麻煩。來了[form.io][1]。 Form.io是一個開源Bootstrap表單創建者，可提供形式的建築物和數據管理功能。在最近的過去，我們發表了一篇文章，其中涵蓋了[2020年的前5名開源在線形式建築商][2]。在這篇博客文章中，我們將通過涵蓋以下幾點來探索此Bootstrap表單創建者以及在Localhost上的設置過程。
  * **[什麼是form.io？io？3]
  * **[如何在localhost上設置form.io？][4]**
  * **[form.io如何工作？][5]**
  * **[結論][6]**

##什麼是form.io？   {#什麼}
form.io是一個免費的開源形式構建器。它是自託管，多語言和多租戶軟件。這個 **html表單創建者** 為用戶和表格提供了基於角色的權限。 Form.io提供OAuth身份驗證，並允許用戶使用流行的身份提供商（例如Google和Facebook）登錄。此外，此HTML表單構建器基於無服務器體系結構，用戶可以通過僅放置單個代碼來生成和嵌入表單。就用戶界面而言，它提供了帶有拖放功能的邏輯用戶界面。一側有各種HTML元素，用戶可以拖放以構建所需的表單。用戶可以注入自定義JavaScript以獲得增強功能。此外，用戶可以使用CSS修改表格的外觀。有一些規定可以控製表格的提交和訪問。但是，此免費的HTML表單製造商用JavaScript編寫，所有源代碼均可在[Github][7]上獲得。
form.io提供了廣泛的功能。關鍵功能在下面列出。
  *電子郵件表格提交
  * 數據管理
  * OAuth提供商
  *可嵌入形式
  *佈局友好

##如何在localhost上設置form.io？   {#localhost}
在 **form Builder教程** 的這一部分中，我們將看到如何在Localhost上設置Form.io。它很容易設置，因為它提供了有關部署和開發的全面文檔。
在進一步之前，請確保您已經安裝了以下先決條件。
  * git
  * nodejs
  * mongodb
一旦安裝上述先決條件，打開終端運行以下命令：
```
mkdir formio<br>cd formio
```
現在，運行以下命令以克隆本應用程序的源代碼：
```
git clone https://github.com/formio/formio.git
```
成功克隆時，運行以下命令安裝依賴項：
```
cd formio <br>npm install
```
之後，使用以下命令運行應用程序：
```
npm start 
```
此命令將在某些用戶提示中顯示以下輸出：

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Form Builder教程">}}

您可以在以下地址中訪問瀏覽器中的應用程序。
```
http://localhost:3001 
```
它將打開登錄頁面。您可以使用在安裝過程中輸入的憑據登錄。

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Bootstrap表單創建者">}}


## form.io如何工作？   {#工作}
該部分描述了[form.io][1]的工作機制。該表格設計師的整個生態系統基於組件和開發人員友好。它是可擴展的，並為第三方應用程序提供了一個安息的接口。因此，讓我們看看如何在此**形式構建器**中創建形式。
登錄後，您將降落在下一頁上。

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="拖放HTML形成構建器">}}

現在，單擊“新表單”按鈕，然後創建第一個表單。將顯示以下頁面。您可以看到左側有一個面板，其中包含表單的HTML元素。它包含四個部分，例如“基本組件”，“特殊組件”等。

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="HTML形式創建者">}}

您可以將表單名稱與其他屬性一起設置。現在，如果您從左側選擇一個表單元素並將其放入中間，則會看到以下對話框。

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Bootstrap表單創建者">}}

您可以看到它使您可以修改表單主題，驗證和其他修改。構建表格後，點擊“創建”按鈕，您將降落在生成的表單上。

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="拖放HTML形成構建器">}}

生成的表單帶有各種選項，您可以在其中編輯表單並查看提交的數據。在“表單操作”選項卡中，您可以設置諸如電子郵件，webhook等的前或發布表單提交掛鉤。最重要的是，每個生成的表單都帶有API，用戶可以通過表單ID訪問它。

##結論 {#conclusion}
這是此形式構建器教程的終結。希望您已經了解了此引導表格創建者的功能，部署和用法。此外，還有許多提供廣泛功能的開源形式建築商。但是，選擇滿足您業務需求的最佳產品非常重要。因此，在這篇博客文章中，我們觀察到Form.io提供了有關功能，佈局和样式的自定義化。它使您可以生成可以在實時網站上託管的多功能表格。實際上，您可以在自己的數據庫或任何其他存儲選項中以良好的方式收集數據。
最後，[ **containerize.com ** ][8]正處於撰寫有關進一步開源主題和產品的文章的一致過程中。因此，請與此[表格][9]類別保持聯繫以進行常規更新。

## 探索
  * **[form.io][1]**
  * **[ORBEON][10]**
  * **[ohmyform][11]**
  * **[Webiny][12]**
  * **[formtools][13]**
  * **[formBuilder][14]**
  * **[羊駝表格][15]**
  *[**使用免費和開源軟件自動化業務操作**][16]
  *[ **2020年的前5名開源在線形式建築商** ][2]

  
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
