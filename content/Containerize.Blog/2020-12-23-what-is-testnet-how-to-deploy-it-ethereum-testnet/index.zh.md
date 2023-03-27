---
title: "什么是测试网以及如何部署它|以太坊测试网'" 
seoTitle: "什么是测试网以及如何部署它|以太坊测试网" 
description: "什么是testnet？本指南是关于如何在local主机上设置以太坊节点的。区块链是一个节点网络，可维持所有交易的历史记录。" 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "以太坊是连接节点的开源区块链对等网络。让我们学习如何在本地服务器上部署并与以太坊节点进行交互。" 
url: /zh/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## 以太坊是连接节点的开源区块链对等网络。让我们学习如何在本地服务器上部署并与以太坊节点进行交互。

{{< figure align=center src="images/ether.png" alt="什么是testnet">}}

在我们以前的博客文章中，我们撰写了多个主题，其中包括[商业区块链技术][1]，[写基本的智能合约][2]和[流行的区块链平台][3]。随着  **分散的分类帐技术**  的流逝，我们将在不久的将来写一些主题。由于安全性和透明度，人们现在开始对数字资产管理平台感兴趣。此外，数字交易是可追溯的，不可变的，这些因素使人们对这项技术的可靠性有信心。区块链公共，私人和权限有三种类型。但是，用户可以根据其用例采用任何类型。
这项技术的出现带来了银行业的巨大变化，因为它改变了金融交易的方式。在这篇博客文章中，我们将讨论以太坊区块链在Localhost上设置以太坊节点，我们将看到如何与测试网络进行交互。我们将介绍以下要点。
*  **什么是testnet？**  
*  **[如何设置以太坊区块链？][4]**  
*  **[如何与以太坊区块链互动？][5]**  
*  **[结论][6]**  

## 什么是testnet？ {#tetstnet}

在这篇博客文章中，我们将在Localhost上部署一个以太坊节点。以太坊具有多个网络，生产网络称为主网，用于测试目的的网络称为TestNet。大多数分散应用程序基于[以太坊][7]区块链。智能合约是该分布式基础架构的组成部分。此外，区块链是一个称为“节点”的计算机网络。但是，每个节点都包含一个区块链的副本，因此参与了网络。以太坊区块链还具有自己的加密货币，称为“以太”。所有交易都是密码保护的。此外，这是一种完整的分类帐技术，从未关闭或损坏。它使您可以编写在Etherum区块链节点上运行的智能合约和分散应用程序（DAPP）。
此开源分布式区块链网络使用称为工作证明（POW）的共识算法。此外，以太坊的体系结构包括五层，例如以太坊虚拟机，以太坊客户端API，智能合约，以太坊节点和最终用户应用程序。以太坊虚拟机提供了识别智能合约的软件和体系结构。智能合约是控制交易的软件。对以太坊区块链有很大的支持，而《财富》 500强公司使用该技术表现出了更大范围的开发的极大兴趣。此外，以太坊以GO语言编写，其源代码可在[Github][8]上获得。所有文档都可以在部署和开发方面可用，因为它具有充满活力的社区。

## 如何设置以太坊区块链？ {#setup}

现在，我们知道什么是TestNet。在本节中，我们将在本地计算机上设置以太坊节点。在进一步之前，请确保您已经安装了以下先决条件。
  * [Homebrew][9]（用于MacOS）

  * [GO7] (brew install go)
先决条件到位后，请运行以下命令以克隆源代码：
```
git clone https://github.com/ethereum/go-ethereum
```
在成功的克隆中，进入目录：
```
cd go-ethereum
```
现在，运行以下命令来构建GETH程序：
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    笔记
{{_LINE_34_}}
  如果有任何错误，请通过运行Xcode-select安装XCode-安装，然后重试
{{_LINE_36_}}
因此，您已经设置了所有先决条件和源代码。因此，运行以下命令以启动节点：
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="以太坊节点">}}


## 如何与以太坊区块链互动？ {#interact}

本节讨论了与一个与区块链完全同步的运行以太坊节点的相互作用。我们可以使用GETH软件进行交互并将命令发送到测试网络。
为此，让我们通过运行以下命令将build/bin/geth包括在$路径环境变量中：
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
之后，停止您在上方提出的服务器并使用以下标志运行测试网络：
Geth  - 测试网络-RPC -RPCAPI =“ DB，ETH，NET，WEB3，个人，Web3”
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="什么是testnet">}}

接下来，您需要打开一个新的终端窗口，并通过运行以下命令将Geth命令连接到节点：
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="数字资产管理平台">}}

Geth将打开控制台窗口，您可以在其中与测试网络进行交互。以下命令将创建一个包含虚拟货币和公共/私钥对的帐户：
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="分散的分类帐技术">}}

要检查您的帐户，您可以运行以下命令：
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="什么是testnet">}}

同样，您可以使用许多命令与以太坊区块链进行交互。

## 结论 {#结论}

这是本教程的结尾。我们了解了  **什么是TestNet** 以及本地计算机上以太坊节点的设置过程。以太坊区块链是大多数分散应用的广义解决方案。大多数企业和政府部门倾向于采用这项技术来带来稳健性，透明度，可用性和问责制。此外，如果您打算在以太坊区块链上开发智能合约，则此  **区块链教程**  将为您提供帮助。 Etheruem区块链更加稳定和流行，因为它具有数千个现场节点。此外，企业可以轻松地开发和部署以太坊区块链网络，而无需花费任何额外的时间。以太坊可靠性的另一个因素是，它以其他 **数字资产管理平台**  提供的方式提供了智能合约的开发。
以太坊网络中的最新更新使网络更具成本效益和高效。实际上，云上还有更多可用的材料，这些材料证明了Etheruem关于投资和发展目的的重要方面。对于开发人员而言，它为开发人员提供了预制的实用程序。对于矿工来说，每当以太挖掘一个新的区块时，就会有一个以太的赏金。此外，[containerize.com][10]在[blog.containerize.com][11]上发表了许多有关流行开源产品的技术博客文章和教程。因此，与[3个平台][12]类别保持连接，以进行常规更新。

## 探索
您可能会发现以下链接相关：
  * [以太坊][7]
  * [Hyperledger织物][13]
  * [openchain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [共识法规][17]
  * [如何在本地共享Quorum区块链网络[18]
  * [2020年的前5个开源区块链平台][3]
  * [关于如何创建以太坊智能合约的基本指南][2]
  * [分散技术如何升级您的业务策略][19]



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
