---
title: "如何在本地设置CONSESYS CONSENSYS网络网络" 
seoTitle: "如何在本地设置CONSESYS CONSENSYS网络网络" 
description: "请遵循本指南，了解Localhost上共享Quorum区块链的安装过程。 Consensys Quorum是开源基于Etherum的区块链。" 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "建立自己的公共/私人区块链网络来管理和监视业务数字交易。让我们学习如何在Localhost上设置CONSENSYS CONSENSYS。" 
url: /zh/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## 建立自己的公共/私人区块链网络，以管理和监视业务数字交易。让我们学习如何在Localhost上设置COSSENSYS QUORUM。

{{< figure align=center src="images/quorum.png" alt="共识法规">}}


## 概述
在最近的过去，我们发表了有关区块链相关主题的博客文章，例如[2020年的前5个开源区块链平台][1]，[关于如何创建以太坊智能合约的基本指南][2]技术升级了您的业务策略][3]和[在Localhost上设置以太坊节点的初学者指南][4]。在本文中，我们将通过涵盖以下几点来查看如何在Localhost上设置Consensys Quorum区块链网络。
  ***[简要介绍共识Quorum][5]** 
  ***[前提条件和**安装过程**？][6]** 
  ***[如何启动网络？][7]** 
  ***[结论][8]** 

## **简要介绍共识Quorum **   {#indroduction}
[Consensys Quorum][9]是基于**分散分类帐技术**的开源平台。但是，它提供了一个完全易于开发的环境，可以构建基于区块链的应用程序，以处理快速和高通量交易。它是基于以太坊**，可扩展的，并提供许多插件。此外，此开源分布式系统具有高安全性和隐私标准。此外，还有许多强大的功能，例如许可API和监视。此外，这个 **DLT平台** 是自托管的，并提供了有关开发和部署的详细文档。该免费软件的源代码可在[GitHub][10]上获得。
Consensys Quorum提供以下重要功能：
  *可容纳的建筑
  *基于以太坊
  * 安全的
  *自我托管
  *公共/私人网络
[了解有关共识法规的更多信息][11]

## ****有哪些先决条件和安装过程？****   {#前提条件}
在本节中，我们将安装所需的依赖项并设置本地环境。在进入下一步之前，请确保已安装以下先决条件：
  * nodejs v10+
  * Docker
  * Docker-Compose
安装先决条件后，运行以下命令以启动基于CLI的QuickStart实用程序。
```
npx quorum-dev-quickstart
```
但是，请回答以下图片所示的问题以完成安装。

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="共识法规">}}


## ****如何启动网络？****   {#start}
现在，我们已经制定了源代码。因此，下一步是使网络实时。
运行以下命令进入根目录。
```
cd quorum-test-network
```
之后，运行以下命令以启动所有Docker容器：
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="共识法规">}}

所有Docker容器启动并运行后，您可以在以下地址访问Block Explorer：
```
http://localhost:25000
```
[]（）
此外，您可以与块资源管理器进行交互，如下图所示。

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="开源分布式系统">}}

同样，您可以通过运行以下命令来停止整个网络：
```
./stop.sh 
```

## 结论 {#conclusion}
这是本教程的结尾。最重要的是，以太坊的共识群体是一项专门用于财务用例的数字金融技术**。它具有基于投票的共识算法。但是，这项分散技术的主要动机是为企业建立有效的解决方案。
最后，[containerize.com][12]在[blog.containerize.com][13]上发表了许多有关流行开源产品的技术博客文章和教程。因此，请坚持[区块链平台][14]类别以进行常规更新。

## 探索
您可能会发现以下链接相关：
  * [以太坊][15]
  * [Hyperledger织物][16]
  * [oppenchain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [共识Quorum][9]

  
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
