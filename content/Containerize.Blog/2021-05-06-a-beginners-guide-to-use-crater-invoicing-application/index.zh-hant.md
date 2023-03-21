---
title: "使用火山口發票應用的初學者指南" 
seoTitle: "使用火山口發票應用的初學者指南" 
description: "從開源發票系統入門的教程。這項火山口準則可以幫助您熟悉核心概念和功能。" 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "本教程將幫助您了解火山口發票應用程序。它是一個免費的小型企業的免費開源發票系統。" 
url: /zh-hant/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## 本教程將幫助您了解火山口發票應用程序。它是一個免費的小型企業的免費開源發票系統。

{{< figure align=center src="images/blog-crater.png" alt="開源發票系統">}}

每個企業都需要某種系統來管理髮票，費用，付款等。發票軟件可以幫助您管理它，以便您可以輕鬆執行計費任務並將關注點關注其他重要內容。在這篇文章中，我們將學習如何設置火山口並將其用於處理企業的會計操作。
  * [關於火山口的介紹][1]
  * [火山口的安裝程序][2]
  * [功能探索][3]
  * [結論][4]

## 介紹火山口 {#introduction}
[火山口][5]是一個免費的開源計費申請。它是絕對免費的，您可以輕鬆地將其更新為最新版本。它是針對小型企業和自由職業者的免費會計系統。這也是一個完整的發票解決方案，使您可以跟踪費用和付款，計算稅收並產生估計和發票。此外，它帶有用於iPhone和Android設備的開箱即用的移動應用程序。它將允許您從任何地方進行管理。由於火山口是一種基於Web的計費軟件，因此Web應用程序採用Laravel和Vuejs設計，並且移動應用程序由React Antial構建。所有與開發和部署有關的文檔都可以使用。完整的源代碼可以在[GitHub][6]上找到。

## 火山口的安裝過程 {#installation}
我們將討論如何使用手動方法安裝火山口並在本節中使用Docker。

## #手動安裝
  *從中下載最新版本。
  *將下載的ZIP文件上傳到您的服務器並提取。
  *將您的域名指向火山口文件夾中的公共目錄。
  *導航到項目的根部，並執行“ sudo chmod -r 775 ./”命令，以分配適當的特權。
  *在瀏覽器中打開您的網站，然後關注安裝嚮導。

## # Docker安裝
  *在您的服務器上安裝Docker：。
  *通過以下本指南安裝Docker組成：。
  *使用此命令使用克隆火山口存儲庫。
```
git clone https://github.com/bytefury/crater
```
  *在下面運行命令以一個命令安裝火山口。
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  *打開瀏覽器中的火山口站點，然後遵循安裝嚮導。

## 功能探索 {#feature}
在本節中，我們將探討此開源計費應用程序的核心功能。完成安裝後，打開網站http://example.com並登錄到應用程序。
 ***儀表板**  - 登錄後，您將被帶到儀表板，其中顯示了應用程序的整個視圖。

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

 ***設置**  - 現在導航到設置頁面，並添加各種Web應用程序設置，例如帳戶設置，公司信息，偏好，自定義，通知，付款模塊等。

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

 ***項目**  - 從側邊欄菜單可訪問“項目”選項卡。在此選項卡中，您可以管理項目。您可以在創建估算和發票時使用項目。
 ***估計**  - 創建一個全面的報價，其中包括費率，折扣，庫存等。三個內置模板之一可以用於創建估計值。可以將其他稅收添加到估算中，也可以作為複合稅添加。
 ***發票**  - 製作專業發票並將其發送給您的客戶。您可以使用可用的模板來生成發票。您可以向發票以及復合稅添加其他稅款。此外，您可以為客戶提供百分比或固定值折扣。此外，您可以對單個項目以及整體發票金額應用折扣。
 ***付款**  - 此模塊可幫助您跟踪您從客戶那裡獲得的付款。
 ***費用**  - 費用模塊可幫助您跟踪您在不同服務上的支出。
 ***稅**  - 使用此功能，您可以輕鬆管理稅收。您可以對總發票金額或單個項目添加多個稅款。
 ***報告**  - 獲取有關您所有發票的全面信息，無論是給一個或幾個客戶。火山口支持帶有四種類型的報告，例如銷售報告，損益報告，費用報告和稅收報告。

## 結論 {#conclusion}
我們了解了火山口以及如何手動和Docker設置它。我們還研究了每個會計計費軟件應提供的一些功能。希望本指南可以幫助您快速為您的業務實施開源發票系統。
最後，[Containerize.com][7]不斷地撰寫有關進一步開源產品和主題的博客文章。因此，請與[8]類別保持聯繫以進行常規更新。

## 探索
您可能會發現以下鏈接相關：
  * [火山口 - 小型企業的免費會計系統][5]
  * [2021年的前5個開源會計軟件][9]

  
[1]: #Introduction
[2]: #Installation
[3]: #Feature
[4]: #Conclusion
[5]: https://products.containerize.com/invoicing/crater/
[6]: https://github.com/bytefury/crater
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/invoicing/
[9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
