---
title: "如何在本地設置CONSESYS CONSENSYS網絡網絡" 
seoTitle: "如何在本地設置CONSESYS CONSENSYS網絡網絡" 
description: "請遵循本指南，了解Localhost上共享Quorum區塊鏈的安裝過程。 Consensys Quorum是開源基於Etherum的區塊鏈。" 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "建立自己的公共/私人區塊鍊網絡來管理和監視業務數字交易。讓我們學習如何在Localhost上設置CONSENSYS CONSENSYS。" 
url: /zh-hant/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

##建立自己的公共/私人區塊鍊網絡，以管理和監視業務數字交易。讓我們學習如何在Localhost上設置COSSENSYS QUORUM。

{{< figure align=center src="images/quorum.png" alt="共識法規">}}


## 概述
在最近的過去，我們發表了有關區塊鏈相關主題的博客文章，例如[2020年的前5個開源區塊鏈平台][1]，[關於如何創建以太坊智能合約的基本指南][2]技術升級了您的業務策略][3]和[在Localhost上設置以太坊節點的初學者指南][4]。在本文中，我們將通過涵蓋以下幾點來查看如何在Localhost上設置Consensys Quorum區塊鍊網絡。
  * **[簡要介紹共識Quorum][5]**
  * **[前提條件和**安裝過程**？][6]**
  * **[如何啟動網絡？][7]**
  * **[結論][8]**

## **簡要介紹共識Quorum**   {#indroduction}
[Consensys Quorum][9]是基於**分散分類帳技術**的開源平台。但是，它提供了一個完全易於開發的環境，可以構建基於區塊鏈的應用程序，以處理快速和高通量交易。它是基於以太坊**，可擴展的，並提供許多插件。此外，此開源分佈式系統具有高安全性和隱私標準。此外，還有許多強大的功能，例如許可API和監視。此外，這個 **DLT平台** 是自託管的，並提供了有關開發和部署的詳細文檔。該免費軟件的源代碼可在[GitHub][10]上獲得。
Consensys Quorum提供以下重要功能：
  *可容納的建築
  *基於以太坊
  * 安全的
  *自我託管
  *公共/私人網絡
[了解有關共識法規的更多信息][11]

##****有哪些先決條件和安裝過程？****   {#前提條件}
在本節中，我們將安裝所需的依賴項並設置本地環境。在進入下一步之前，請確保已安裝以下先決條件：
  * nodejs v10+
  * Docker
  * Docker-Compose
安裝先決條件後，運行以下命令以啟動基於CLI的QuickStart實用程序。
```
npx quorum-dev-quickstart
```
但是，請回答以下圖片所示的問題以完成安裝。

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="共識法規">}}


##****如何啟動網絡？****   {#start}
現在，我們已經制定了源代碼。因此，下一步是使網絡實時。
運行以下命令進入根目錄。
```
cd quorum-test-network
```
之後，運行以下命令以啟動所有Docker容器：
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="共識法規">}}

所有Docker容器啟動並運行後，您可以在以下地址訪問Block Explorer：
```
http://localhost:25000
```
[]（）
此外，您可以與下圖所示的塊資源管理器進行交互。

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="開源分佈式系統">}}

同樣，您可以通過運行以下命令來停止整個網絡：
```
./stop.sh 
```

##結論 {#conclusion}
這是本教程的結尾。最重要的是，以太坊的共識群體是一項專門用於財務用例的數字金融技術**。它具有基於投票的共識算法。但是，這項分散技術的主要動機是為企業建立有效的解決方案。
最後，[containerize.com][12]在[blog.containerize.com][13]上發表了許多有關流行開源產品的技術博客文章和教程。因此，請堅持[區塊鏈平台][14]類別以進行常規更新。

## 探索
您可能會發現以下鏈接相關：
  * [以太坊][15]
  * [Hyperledger織物][16]
  * [oppenchain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [共識法規][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
