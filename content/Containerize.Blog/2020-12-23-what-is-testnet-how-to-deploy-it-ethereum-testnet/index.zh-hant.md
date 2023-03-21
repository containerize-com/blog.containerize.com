---
title: "什麼是測試網以及如何部署它|以太坊測試網'" 
seoTitle: "什麼是測試網以及如何部署它|以太坊測試網" 
description: "什麼是testnet？本指南是關於如何在local主機上設置以太坊節點的。區塊鍊是一個節點網絡，可維持所有交易的歷史記錄。" 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "以太坊是連接節點的開源區塊鏈對等網絡。讓我們學習如何在本地服務器上部署並與以太坊節點進行交互。" 
url: /zh-hant/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## 以太坊是連接節點的開源區塊鏈對等網絡。讓我們學習如何在本地服務器上部署並與以太坊節點進行交互。

{{< figure align=center src="images/ether.png" alt="什麼是testnet">}}

在我們以前的博客文章中，我們撰寫了多個主題，其中包括[商業區塊鏈技術][1]，[寫基本的智能合約][2]和[流行的區塊鏈平台][3]。隨著**分散的分類帳技術**的流逝，我們將在不久的將來寫一些主題。由於安全性和透明度，人們現在開始對數字資產管理平台感興趣。此外，數字交易是可追溯的，不可變的，這些因素使人們對這項技術的可靠性有信心。區塊鏈公共，私人和權限有三種類型。但是，用戶可以根據其用例採用任何類型。
這項技術的出現帶來了銀行業的巨大變化，因為它改變了金融交易的方式。在此博客文章中，我們將討論有關在Localhost上設置以太坊節點的以太坊區塊鏈，我們將看到如何與測試網絡進行交互。我們將介紹以下要點。
***什麼是testnet？**
* **[如何設置以太坊區塊鏈？][4]**
* **[如何與以太坊區塊鏈互動？][5]**
* **[結論][6]**

## 什麼是testnet？   {#tetstnet}
在這篇博客文章中，我們將在Localhost上部署一個以太坊節點。以太坊具有多個網絡，生產網絡稱為主網，用於測試目的的網絡稱為TestNet。大多數分散應用程序基於[以太坊][7]區塊鏈。智能合約是該分佈式基礎架構的組成部分。此外，區塊鍊是一個稱為“節點”的計算機網絡。但是，每個節點都包含一個區塊鏈的副本，因此參與了網絡。以太坊區塊鏈還具有自己的加密貨幣，稱為“以太”。所有交易都是密碼保護的。此外，這是一種完整的分類帳技術，從未關閉或損壞。它使您可以編寫在Etherum區塊鏈節點上運行的智能合約和分散應用程序（DAPP）。
此開源分佈式區塊鍊網絡使用稱為工作證明（POW）的共識算法。此外，以太坊的體系結構包括五層，例如以太坊虛擬機，以太坊客戶端API，智能合約，以太坊節點和最終用戶應用程序。以太坊虛擬機提供了識別智能合約的軟件和體系結構。智能合約是控制交易的軟件。對以太坊區塊鏈有很大的支持，而《財富》 500強公司使用該技術表現出了更大範圍的開發的極大興趣。此外，以太坊以GO語言編寫，其源代碼可在[Github][8]上獲得。所有文檔都可以在部署和開發方面可用，因為它具有充滿活力的社區。

## 如何設置以太坊區塊鏈？   {#設置}
現在，我們知道什麼是TestNet。在本節中，我們將在本地計算機上設置以太坊節點。在進一步之前，請確保您已經安裝了以下先決條件。
  * [Homebrew][9]（用於MacOS）

  * [GO7] (brew install go)
先決條件到位後，請運行以下命令以克隆源代碼：
```
git clone https://github.com/ethereum/go-ethereum
```
在成功的克隆中，進入目錄：
```
cd go-ethereum
```
現在，運行以下命令來構建GETH程序：
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    筆記
{{_LINE_34_}}
  如果有任何錯誤，請通過運行Xcode-select安裝XCode-安裝，然後重試
{{_LINE_36_}}
因此，您已經設置了所有先決條件和源代碼。因此，運行以下命令以啟動節點：
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="以太坊節點">}}


## 如何與以太坊區塊鏈互動？   {#相互影響}
本節討論了與一個與區塊鏈完全同步的運行以太坊節點的相互作用。我們可以使用GETH軟件進行交互並將命令發送到測試網絡。
為此，讓我們通過運行以下命令將build/bin/geth包括在$路徑環境變量中：
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
之後，停止您在上方提出的服務器並使用以下標誌運行測試網絡：
Geth  - 測試網絡-RPC -RPCAPI =“ DB，ETH，NET，WEB3，個人，Web3”
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="什麼是testnet">}}

接下來，您需要打開一個新的終端窗口，並通過運行以下命令將Geth命令連接到節點：
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="數字資產管理平台">}}

Geth將打開控制台窗口，您可以在其中與測試網絡進行交互。以下命令將創建一個包含虛擬貨幣和公共/私鑰對的帳戶：
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="分散的分類帳技術">}}

要檢查您的帳戶，您可以運行以下命令：
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="什麼是testnet">}}

同樣，您可以使用許多命令與以太坊區塊鏈進行交互。

## 結論 {#conclusion}
這是本教程的結尾。我們了解了**什麼是TestNet**以及本地計算機上以太坊節點的設置過程。以太坊區塊鍊是大多數分散應用的廣義解決方案。大多數企業和政府部門傾向於採用這項技術來帶來穩健性，透明度，可用性和問責制。此外，如果您打算在以太坊區塊鏈上開發智能合約，則此**區塊鏈教程**將為您提供幫助。 Etheruem區塊鏈更加穩定和流行，因為它具有數千個現場節點。此外，企業可以輕鬆地開發和部署以太坊區塊鍊網絡，而無需花費任何額外的時間。以太坊可靠性的另一個因素是，它以其他**數字資產管理平台**提供的方式提供了智能合約的開發。
以太坊網絡中的最新更新使網絡更具成本效益和高效。實際上，雲上還有更多可用的材料，這些材料證明了Etheruem關於投資和發展目的的重要方面。對於開發人員而言，它為開發人員提供了預製的實用程序。對於礦工來說，每當以太挖掘一個新的區塊時，就會有一個以太的賞金。此外，[containerize.com][10]在[blog.containerize.com][11]上發表了許多有關流行開源產品的技術博客文章和教程。因此，與[3個平台][12]類別保持連接，以進行常規更新。

## 探索
您可能會發現以下鏈接相關：
  * [以太坊][7]
  * [Hyperledger織物][13]
  * [oppenchain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [共識法規][17]
  * [如何在本地共享Quorum區塊鍊網絡[18]
  * [2020年的前5個開源區塊鏈平台][3]
  * [關於如何創建以太坊智能合約的基本指南][2]
  * [分散技術如何升級您的業務策略][19]

  
[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[4]: #setup
[5]: #interact
[6]: #Conclusion
[7]: https://products.containerize.com/blockchain-platforms/ethereum
[8]: https://github.com/ethereum/go-ethereum
[9]: https://brew.sh/
[10]: https://www.containerize.com/
[11]: https://blog.containerize.com/
[12]: https://products.containerize.com/blockchain-platforms/
[13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[14]: https://products.containerize.com/blockchain-platforms/openchain
[15]: https://products.containerize.com/blockchain-platforms/ripple
[16]: https://products.containerize.com/blockchain-platforms/multichain
[17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
