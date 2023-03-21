---
title: "什麼是多重？ |為什麼要採用多租戶方法？" 
seoTitle: "什麼是多重？ |為什麼要採用多租戶方法？" 
description: "什麼是多重？請關注此博客文章以了解多租戶背後的實際概念，並開始構建可擴展的多租戶應用程序。" 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "設計多租戶應用程序體系結構，並有效地滿足用戶的要求。讓我們探討如何允許您構建可擴展軟件。" 
url: /zh-hant/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## 設計多租戶應用程序體系結構，並有效地滿足用戶的要求。讓我們探討如何允許您構建可擴展軟件。

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## 概述
歡迎來到[編程][1]類別中的另一篇博客文章。我們將討論多租戶的應用程序體系結構。實際上，[Containerize.com][2]在其開源產品堆棧中具有廣泛的多租戶應用程序。開源多租戶應用程序包括[Form.io][3]，[Botpress][4]等。此外，關於這些開源軟件的架構，部署，開發和使用，還有完整的[文檔][5]。撰寫本文的原因是要了解軟件開發中多租賃背後的概念。因此，讓我們找出**什麼是多種態度？
以下幾點將在本文中討論：
  * [什麼是多差？多租戶與單租戶][6]
  * [多租戶應用架構的類型][7]
  * [多租戶應用程序的業務益處][8]
  * [多租期中的缺點][9]

## 什麼是多差？多租戶vs單租戶 {#what-is-multitenancy-multi-tenant-tenant-vs-single-tenant}
多義是指為多個前端服務的單個服務器實例，特別是已知的租戶。每當您遇到多租戶軟件時，只需告訴您的大腦，該軟件正在運行共享服務器的單個實例，並且多個租戶（客戶端）都通過不同的品牌連接到此實例。
例如，為大學構建的軟件服務於具有不同前端品牌和計劃數據的不同部門。基本上，有一個服務器運行和服務所有租戶的實例。此外，所有租戶之間都有數據分離和數據隱私。此外，每個租戶都有自己的業務邏輯，並獲取並將其數據存儲在一個但私人/孤立的位置。

{{< figure align=center src="images/multi-tenant-1.png" alt="多租戶建築">}}

現在，讓我們快速看一下單租戶建築。在單租戶體系結構中，每個租戶有一個服務器實例。同樣，讓我們以大學軟件為例。單租戶方法是指每個部門的一個服務器實例，實例的數量取決於部門的數量（租戶）。

{{< figure align=center src="images/single-tenant-2.png" alt="單租戶建築">}}


## 多租戶應用程序架構的類型
到目前為止，您對多種租賃有所了解，現在我們將經歷各種類型。
**一個數據庫 - 一個應用程序實例**：這種方法非常受歡迎，並且已被廣泛用於構建多租戶應用程序。根據這種方法，有一個帶有單個數據庫的應用程序實例。此外，還有一個共享的模式，租戶的數據與其獨特的ID一起存儲在一個位置中。
**多個數據庫 - 一個應用程序實例：**在此多租戶應用程序體系結構中，只有一個實例使用多個數據庫運行。每個租戶都有自己的數據庫架構，每個租戶分別為每個租戶保存所有信息。
**多個數據庫 - 多個應用程序實例**：第三種方法是指運行多個服務器實例以及多個數據庫。沒有共享，每個租戶都完全隔離，租戶之間沒有依賴性。

## 多租戶應用的業務利益 {#-Multi-Tenant-App}
在本節中，我們將獲得選擇多種挑戰的一些顯著好處。雖然，我們可以長期討論特權，但讓我們看看以下幾點：
**可伸縮性**：縮放多租戶體系結構很容易。無論您選擇哪種類型，您都可以水平或垂直擴展。
**成本效益**：選擇多種義務可節省您的運營成本。有共享的資源，因此擴大資源始終具有成本效益。
**效率和靈活性**：在多端環境中，您可以在開發和部署中實現效率。例如，您可以在共享數據庫架構上運行腳本以更新所有租戶。
**更好的資源管理**：添加和刪除資源很簡單。此外，該架構提供了改進且管理良好的基礎設施。此外，每個租戶都是私人且安全的，並且可以訪問共享/非共享數據庫。

## 多租戶中的缺點
這篇博客文章的目的是給予“多租戶”架構的公平感。
**複雜的身份驗證機制**：由於多種資源分配的共同性質，數據訪問點有嚴格的協議。
**服務器故障：**選擇多租戶應用程序體系結構是要考慮的主要點。由於任何原因，每當服務器下降時，所有租戶都會變得無功能。
**隱私風險**：在多租戶架構中，有高風險的安全漏洞。實際上，所有租戶的數據都存儲在共享數據庫中，因此任何第三方入侵都可能導致數據損壞或盜竊。

## 結論
我們在這裡結束這篇博客文章。這篇文章是否對您的問題有答案，例如**什麼是多重**？此外，我們還探索了**多租戶與單租戶**基礎架構。此外，本指南將在選擇多租戶應用程序體系結構或單個租戶時為您提供幫助。最重要的是，如果您要建造SaaS，則是第一選擇。您可能會在“另見”部分中找到其他有趣的博客文章，這將為您提供有關技術界的最新見解。
最後，[Containerize.com][2]不斷地撰寫有關進一步開源產品和主題的博客文章。此外，您可以在我們的社交媒體帳戶[Facebook][10]，[LinkedIn][11]和[Twitter][12]上關注我們。

## 問一個問題
您可以在我們的[論壇][13]上讓我們知道您的問題或查詢。

## 常見問題解答
**示例有什麼多租戶？**
請訪問此[鏈接][6]，以了解什麼是多重。有細節以及示例。
**多租戶建築的含義是什麼？**
**多租戶應用程序體系結構**是指服務器的一個實例為多個租戶（客戶端）服務。有關更多詳細信息，請導航到此[鏈接][7]。

## 也可以看看
  * [什麼是生成的ai |生成人工智能][14]
  * [如何與Google床單整合Chatgpt][15]
  * [如何在VSCODE中使用chatgpt | VSCODE擴展代碼GPT][16]
  * [什麼是OpenAi ChatBot GPT-3 | Chatgpt AI革命][17]
  * [人工智能簡介|什麼是AI？][18]

  
[1]: https://blog.containerize.com/category/programming/
[2]: https://www.containerize.com/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/live-chat/botpress/
[5]: https://products.containerize.com/
[6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
[7]: #Types-of-Multi-Tenant-Application-Architecture
[8]: #Business-Benefits-of-Multi-Tenant-App
[9]: #Drawbacks-in-Multi-Tenancy
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
