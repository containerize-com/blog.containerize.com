---
title: "智能合同教程|以太坊區塊鏈開發" 
seoTitle: "智能合同教程|以太坊區塊鏈開發" 
description: "該智能合同教程闡述了創建以太坊智能合約的基本步驟。以太坊是開源，安全的，分佈式的區塊鍊網絡。" 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "以太坊是創建智能合約和分散應用程序（DAPP）的成熟平台。請按照以下步驟創建，測試和部署智能合約。" 
url: /zh-hant/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

##以太坊是一個成熟的平台，可創建智能合約和分散應用程序（DAPP）。請按照以下步驟創建，測試和部署智能合約。

{{< figure align=center src="images/contract.png" alt="智能合約教程">}}


## 概述
在最近的過去，我們發表了[博客文章][1]，該[1]強調了區塊鏈技術的影響和重要性。還有另一個有趣的博客文章[什麼是NFT？ |非可替代令牌解釋了][2]。分佈式分類帳技術基於一些核心概念，例如智能合約，節點，採礦，共識算法，數字交易和點對點網絡。因此，由於它是開源的，因此有一個關於用例的巨大窗口。實際上，有許多開源和免費的數字資產管理平台分發，並且需要一些軟件來管理交易。
在本智能合同教程中，我們將學習如何通過涵蓋以下要點來建立以太坊智能合約。
* [ **什麼是智能合約？** ][3]
* [ **如何建立基本的智能合約？** ][4]
* [ **如何運行和部署智能合約？** ][5]
* [ **結論** ][6]

## 什麼是智能合同？ {#what}

智能合約是在區塊鏈上運行以管理數字交易的計劃。該代碼包含定義的規則和過程，這些規則和過程確保交易的透明度。每個智能合約都包含一個地址，該地址用於訪問特定智能合約的任何功能。此外，智能合約將透明度，信任和安全性帶入區塊鍊網絡。一旦滿足某些條件，這些代碼將自動執行。
但是，任何開發人員都可以編寫智能合約並通過網絡部署它。此外，智能合約使流程非常強大，因為執行這些代碼不涉及。此外，智能合約存儲與參與者可以檢索和驗證的每項交易有關的必要信息。許多行業，例如醫療保健，銀行業，高度採用了這種分佈式分類帳技術。政府機構還熱衷於部署分散申請（DAPP），以將真實性和透明度帶入選舉制度。有許多[區塊鏈平台][7]，例如[以太坊][8]，[Ripple][9]，[Corda][10]，但是，在本指南中，我們將建立我們的第一個智能合約在以太坊上。

## 如何建立基本的智能合約？ {#build}

在智能合同教程的這一部分中，我們將看到為我們的第一個智能合約設置環境的步驟。
智能合約可以用多種語言編寫，但是我們將使用[Solidity][11]，這是一種寫智能合約的高級語言。
我們將使用基於網絡的IDE [Ethereum Studio][12]。它用於編寫智能合約以及分散的應用程序以與智能合約互動。它提供了一些預先構建的項目模板，您可以立即開始編寫邏輯。
因此，將[Ethereum Studio][12] IDE打開到瀏覽器中，您將看到以下接口。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="智能合約教程">}}

讓我們選擇“ Hello World”選項並創建我們的第一個項目。您可以看到目錄結構。此外，右側還有一個輸出窗口。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="智能合約教程">}}

有兩個文件夾“應用程序”和“合同”。
App文件夾屬於Web應用程序，並包含以下文件。
* **app.css** ：用於佈局樣式
* **app.html** ：用於主頁
* **app.js** ：包含以與智能合約聯繫的業務邏輯
同樣，合同文件夾包含合同的源文件。
現在，讓我們打開可以在文件/合同/helloworld.sol上找到的helloworld.sol文件。基本上，這是包含以堅固性編寫的智能合約的代碼的主要文件。您可以修改代碼，如果需要，我們將保持原樣。

## 如何運行和部署智能合同？ {#deploy}

在智能合同教程的這一部分中，我們將看到如何運行和部署智能合約。以太坊工作室將堅固代碼編譯到字節代碼中。因此，保存代碼，讓我們部署我們的第一個智能合約。
在左側面板上，按火箭圖標。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="什麼是聰明的合同">}}

您可以配置並設置智能合約的初始值，如下所示。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="以太坊智能合約">}}

點擊“保存”按鈕，然後按“部署”按鈕以部署智能合約。您將在底部的“控制台”窗口中看到以下輸出和消息。控制台窗口提供了諸如智能合約地址，NONCE，GASSLIMIT之類的詳細信息。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="什麼是聰明的合同">}}

之後，左側的面板上還有另一個選項，這是交互選項。此選項使您可以通過調用其功能和傳遞值來與智能合約進行交互。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="什麼是聰明的合同">}}

此外，還有一個前端應用程序，允許用戶與瀏覽器的智能合約進行交互。這個基於網絡的應用程序稱為分散應用程序。您可以傳遞該值並查看控制台窗口。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="什麼是聰明的合同">}}


## 結論 {#con}

這將我們帶到了本智能合同教程的結尾。我希望這篇文章能幫助您了解建立和部署以太坊智能合約的關鍵步驟。隨著區塊鏈技術的發展速度很高，現在是時候獲得對區塊鏈迴聲系統的實踐實踐的時候了。該分佈式分類帳技術是高度可配置和可擴展的。如果您願意學習智能合同開發，這篇博客文章將真正為您提供幫助。此外，下面的“ Explore”部分中提到了許多有用的教程和開源數字資產管理平台。
最後，[Containerize.com][13]完全致力於編譯開源軟件列表。有關開源軟件的教程和博客文章很多，並且有許多博客文章正在渠道中。因此，請與[7]類別保持聯繫，以進行常規更新。

## 探索
您可能會發現以下鏈接相關：
  * [以太坊][8]
  * [Hyperledger織物][14]
  * [oppen鏈][15]
  * [Ripple][16]
  * [Multichain][17]
  * [共識Quorum][18]
  * [什麼是NFT？ |解釋了非可替代令牌][2]
  * [如何在本地設置Quorum區塊鍊網絡[19]
  * [2020年前5個開源區塊鏈平台][20]
  * [關於如何創建以太坊智能合約的基本指南][21]
  * [分散技術如何升級您的業務策略][22]
  * [如何在本地設置Quorum區塊鍊網絡[19]



[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/blockchain-platforms/what-is-nft-non-fungible-tokens-explained/
[3]: #what
[4]: #build
[5]: #deploy
[6]: #con
[7]: https://products.containerize.com/blockchain-platforms/
[8]: https://products.containerize.com/blockchain-platforms/ethereum
[9]: https://ripple.com/
[10]: https://www.corda.net/
[11]: https://docs.soliditylang.org/en/v0.7.4/
[12]: https://studio.ethereum.org/
[13]: https://www.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[15]: https://products.containerize.com/blockchain-platforms/openchain
[16]: https://products.containerize.com/blockchain-platforms/ripple
[17]: https://products.containerize.com/blockchain-platforms/multichain
[18]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[19]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[20]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[21]: https://blog.containerize.com/
[22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
