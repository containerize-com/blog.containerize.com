---
title: "智能合同教程|以太坊区块链开发" 
seoTitle: "智能合同教程|以太坊区块链开发" 
description: "该智能合同教程阐述了创建以太坊智能合约的基本步骤。以太坊是开源，安全的，分布式的区块链网络。" 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "以太坊是创建智能合约和分散应用程序（DAPP）的成熟平台。请按照以下步骤创建，测试和部署智能合约。" 
url: /zh/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## 以太坊是一个成熟的平台，可创建智能合约和分散应用程序（DAPP）。请按照以下步骤创建，测试和部署智能合约。

{{< figure align=center src="images/contract.png" alt="智能合约教程">}}


## 概述
在最近的过去，我们发表了[博客文章][1]，该[1]强调了区块链技术的影响和重要性。还有另一个有趣的博客文章[什么是NFT？ |非可替代令牌解释了][2]。分布式分类帐技术基于一些核心概念，例如智能合约，节点，采矿，共识算法，数字交易和点对点网络。因此，由于它是开源的，因此有一个关于用例的巨大窗口。实际上，有许多开源和免费的数字资产管理平台分发，并且需要一些软件来管理交易。
在本智能合同教程中，我们将学习如何通过涵盖以下要点来建立以太坊智能合约。
  *[**什么是智能合约？**][3]
  *[**如何建立基本的智能合约？**][4]
  *[**如何运行和部署智能合约？**][5]
  *[**结论**][6]

## 什么是智能合约？ {#什么}
智能合约是在区块链上运行以管理数字交易的计划。该代码包含定义的规则和过程，这些规则和过程确保交易的透明度。每个智能合约都包含一个地址，该地址用于访问特定智能合约的任何功能。此外，智能合约将透明度，信任和安全性带入区块链网络。一旦满足某些条件，这些代码将自动执行。
但是，任何开发人员都可以编写智能合约并通过网络部署它。此外，智能合约使流程非常强大，因为执行这些代码不涉及。此外，智能合约存储与参与者可以检索和验证的每项交易有关的必要信息。许多行业，例如医疗保健，银行业，高度采用了这种分布式分类帐技术。政府机构还热衷于部署分散申请（DAPP），以将真实性和透明度带入选举制度。有许多[区块链平台][7]，例如[以太坊][8]，[Ripple][9]，[Corda][10]，但是，在本指南中，我们将建立我们的第一个智能合约在以太坊上。

## 如何建立基本的智能合约？ {#建造}
在智能合同教程的这一部分中，我们将看到为我们的第一个智能合约设置环境的步骤。
智能合约可以用多种语言编写，但是我们将使用[Solidity][11]，这是一种写智能合约的高级语言。
我们将使用基于网络的IDE [Ethereum Studio][12]。它用于编写智能合约以及分散的应用程序以与智能合约互动。它提供了一些预先构建的项目模板，您可以立即开始编写逻辑。
因此，将[Ethereum Studio][12] IDE打开到浏览器中，您将看到以下接口。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="智能合约教程">}}

让我们选择“ Hello World”选项并创建我们的第一个项目。您可以看到目录结构。此外，右侧还有一个输出窗口。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="智能合约教程">}}

有两个文件夹“应用程序”和“合同”。
App文件夹属于Web应用程序，并包含以下文件。
  *** app.css **：用于布局样式
  *** app.html **：用于主页
  *** app.js **：包含业务逻辑，以将前端与智能合约联系起来
同样，合同文件夹包含合同的源文件。
现在，让我们打开可以在文件/合同/helloworld.sol上找到的helloworld.sol文件。基本上，这是包含以坚固性编写的智能合约的代码的主要文件。您可以修改代码，如果需要，我们将保持原样。

## 如何运行和部署智能合约？ {#部署}
在智能合同教程的这一部分中，我们将看到如何运行和部署智能合约。以太坊工作室将坚固代码编译到字节代码中。因此，保存代码，让我们部署我们的第一个智能合约。
在左侧面板上，按火箭图标。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="什么是聪明的合同">}}

您可以配置并设置智能合约的初始值，如下所示。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="以太坊智能合约">}}

点击“保存”按钮，然后按“部署”按钮以部署智能合约。您将在底部的“控制台”窗口中看到以下输出和消息。控制台窗口提供了诸如智能合约地址，NONCE，GASSLIMIT之类的详细信息。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="什么是聪明的合同">}}

之后，左侧的面板上还有另一个选项，这是交互选项。此选项使您可以通过调用其功能和传递值来与智能合约进行交互。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="什么是聪明的合同">}}

此外，还有一个前端应用程序，允许用户与浏览器的智能合约进行交互。这个基于网络的应用程序称为分散应用程序。您可以传递该值并查看控制台窗口。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="什么是聪明的合同">}}


## 结论{#con}
这将我们带到了本智能合同教程的结尾。我希望这篇文章能帮助您了解建立和部署以太坊智能合约的关键步骤。随着区块链技术的发展速度很高，现在是时候获得对区块链回声系统的实践实践的时候了。该分布式分类帐技术是高度可配置和可扩展的。如果您愿意学习智能合同开发，这篇博客文章将真正为您提供帮助。此外，下面的“ Explore”部分中提到了许多有用的教程和开源数字资产管理平台。
最后，[Containerize.com][13]完全致力于编译开源软件列表。有关开源软件的教程和博客文章很多，并且有许多博客文章正在渠道中。因此，请与[7]类别保持联系，以进行常规更新。

## 探索
您可能会发现以下链接相关：
  * [以太坊][8]
  * [Hyperledger织物][14]
  * [oppen链][15]
  * [Ripple][16]
  * [Multichain][17]
  * [共识Quorum][18]
  * [什么是NFT？ |解释了非可替代令牌][2]
  * [如何在本地设置Quorum区块链网络[19]
  * [2020年前5个开源区块链平台][20]
  * [关于如何创建以太坊智能合约的基本指南][21]
  * [分散技术如何升级您的业务策略][22]
  * [如何在本地设置Quorum区块链网络[19]

  
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
