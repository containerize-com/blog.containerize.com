---
title: "Jhipster教程| RAD軟件入門" 
seoTitle: "Jhipster教程| RAD軟件入門" 
description: "逐步的Jhipster教程，用於初學者的入門。遵循本文，使用開源Jhipster Rad軟件設置第一個應用程序。" 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "讓我們研究源代碼生成器。它提供開箱即用的功能，以生成具有據可查的REST API的基於Web的響應應用程序。" 
url: /zh-hant/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## 讓我們深入研究源代碼生成器。它提供開箱即用的功能，以生成具有據可查的REST API的基於Web的響應應用程序。

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="Jhipster教程">}}


## 概述：
我們最近發表了一份關於[RAD軟件][2]的重要性的[博客文章][1]。技術的發展速度很高。業務需求和需求正在一天變化。在較短的時間範圍內開發解決方案的競賽。另一方面，每個企業都希望盡快推出產品來捕捉市場。因此，開源社區開發了許多基於**敏捷軟件開發**的軟件。這些免費的快速應用程序開發軟件可以促進用戶具有快速原型開發功能的用戶。它使您可以構建和啟動產品的初始版本，因此可以通過用戶反饋的輸入來開發更多版本。此外，這些軟件旨在在項目的任何階段吸收任何更改。
同時，軟件開發團隊加快了他們的開發流程並確保早期交付。實際上，它是具有成本效益的，節省時間的，並使開發人員和用戶滿意。快速的應用程序開發足夠靈活，您不需要計劃和嚴格的截止日期。您可以建立最終消費者所需的東西。在本Jhipster教程中，我們將研究如何設置[Jhipster][3]並通過涵蓋以下幾點來創建我們的第一個應用程序：
  * [什麼是JHipster，如何安裝它？][4]
  * [如何生成並運行基本應用程序？][5]
  * [探索生成應用程序的管理儀表板][6]
  * [結論][7]

## 什麼是JHIPSTER？如何安裝它？   {#安裝}
[Jhipster][3]是一種開源RAD軟件，用於生成企業Web應用程序。該開源應用程序構建器在服務器端和流行的前端技術（例如Angular，vue.js和react.js）上提供了基於Java的彈簧啟動框架。此源代碼生成器包括具有多種用戶身份驗證機制（例如OAuth.20，JWTS和HTTP Session Authentication）的強大微服務體系結構。此外，它提供了一個在線版本，用戶可以在其中探索所有功能。此**開源原型製作工具**用JavaScript編寫，並少量輸入打字稿。因此，有關開發和部署的綜合文檔。開發人員可以在[Github][8] repo中找到源代碼。使用流行的測試框架（例如蓋林和量角器）進行運行測試的完全支持。此外，它是強大的，安全的，跨平台的，並支持第三方集成。
在此**Jhipster教程中，**我們將探索Jhipster的設置和用法。 [JHIPSTER][3]是免費的，並在快速應用開發模型的頂部建立。它提供了一個非常有前途的開發人員友好的生態系統，並提供了強大的快速Web應用程序開發工具。
讓我們看看如何安裝此開源應用程序構建器。首先，我們將安裝以下先決條件。
  * [Java 11 JDK][9]
  * [node.js 10.20.1+][10]
安裝完成後，打開終端並運行以下命令。
`npm install -g generator -jhipster`
此命令可能需要幾分鐘，並且成功完成後，將在您的計算機上安裝Jhipster。
您可以檢查以下命令以檢查安裝。
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="JHIPSTER安裝">}}


## 如何生成和運行基本應用程序？   {#跑步}
在此**Jhipster教程**的部分中，我們將學習如何使用此開源RAD軟件生成第一個應用程序。
返回到終端窗口，運行以下命令：
`mkdir 1StAppCD 1Stapp/`
製作目錄後，運行下面提到的以下命令：
'
此命令將啟動該過程。回答有關應用程序技術偏好的所有問題，例如前端和後端技術，數據庫，測試框架等，如下圖所示。

{{< figure align=center src="images/qst-1024x474.png" alt="Jhipster教程">}}

回答所有問題後，此源代碼生成器將將代碼文件生成您的文件夾。
現在，使用以下命令運行生成的應用程序：
`。/mvnw`
注意：如果您選擇了Maven作為後端的構建自動化，則此命令將起作用。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="Jhipster教程">}}

通過http：// localhost：8080/訪問您的應用程序中的應用程序。

## 探索生成應用的管理儀表板 {#dashboard}
擊中http：// localhost：8080/在瀏覽器中，您將看到以下屏幕。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="代碼生成器">}}

您可以使用上述憑據登錄為管理員。 Jhipster提供兩個默認用戶角色。成功登錄後，您將在圖像中顯示以下規定。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="開源RAD軟件">}}

Jhipster提供完整的用戶管理，您可以在下面的圖像中看到您的用戶。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="JHipster用戶管理">}}

健康選項為您提供有關磁盤空間和數據庫的信息。

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="Jhipster教程">}}

JHIPSTER Admin儀表板中有一個完整的記錄系統。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="開源RAD軟件">}}

此開源應用程序構建器的管理儀表板還提供內置和自定義功能的休息端點。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="開源雜物">}}


## 結論 {#con}
這是本Jhipster教程的終結。有許多開源RAD平台提供**即時應用程序開發**。有一個非常充滿活力的社區，始終活著回應問題及其解決方案。由於許多因素，RAD方法正在名聲。首先，無需完全了解要求。其次，在整個軟件開發生命週期中，最終消費者都參與其中。第三，由於所有利益相關者都在船上，危險因素的速度非常小。但是，RAD軟件具有適應性的，對開發人員的友好型，並且可以靈活地進行更改。隨著代碼生成器節省重寫重複腳本的巨大時間，它節省了很多時間。這個**[jhipster][3]教程**文章強調了一些重要的見解。使用一些簡單的外殼命令可以輕巧且易於設置。
如果您正在認真尋找開源快速應用程序開發平台，請立即隨時安裝此開源應用程序構建器。最後，[Containerize.com][11]都將通過一些更有趣的教程來增強其教程基礎。請與此[快速應用程序開發][2]類別保持聯繫，以進行常規更新。

## 探索
您可能會發現以下鏈接相關：
  * [古巴平台][12]
  * [QuickApp][13]
  * [jhipster][3]
  * [li3][14]
  * [Apache ISIS][15]
  * [2021年的前5名免費快速應用程序開發軟件][16]
  * [企業快速應用程序開發軟件| RAD][17]
  * [在2021年選擇開源軟件之前需要審查的內容][18]

  
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
