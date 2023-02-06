---
title: How To Setup ConsenSys Quorum Blockchain Network Locally
seoTitle: How To Setup ConsenSys Quorum Blockchain Network Locally
description: Follow this guide to learn about the installation process of ConsenSys Quorum blockchain on localhost. ConsenSys Quorum is open source Etherum-based blockchain.
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Establish your own public/private blockchain network to manage and monitor business digital transactions. Let's learn how to setup Consensys Quorum on localhost."
url: /blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']

---
## Establish your own public/private blockchain network to manage and monitor business digital transactions. Let’s learn how to setup Consensys Quorum on localhost.

{{< figure align=center src="images/quorum.png" alt="ConsenSys Quorum">}}  

## Overview

In the recent past, we published blog posts on some blockchain-related topics such as [Top 5 Open Source Blockchain Platforms In 2020][1], [A Basic Guide on How To Create Ethereum Smart Contract][2], [How Decentralized Technology Upgrades Your Business Strategy][3], and [A Beginners Guide To Setup Ethereum Node On Localhost][4]. In this article, we will see how to set up the ConsenSys Quorum blockchain network on localhost by covering the following points.

  * **[A Brief Introduction Of ConsenSys Quorum][5]**
  * **[What Are The Pre-requisites And **Installation Procedure**?][6]**
  * **[How To Start The Network?][7]**
  * **[Conclusion][8]**

## **A Brief Introduction Of ConsenSys Quorum** {#Introduction}

[ConsenSys Quorum][9] is an open source platform based on **decentralized ledger technology**. However, it provides a completely developer-friendly environment to build blockchain-based applications that handle fast and high-throughput transactions. It is **Ethereum** based, extensible, and offers many plugins. Moreover, this open source distributed system comes with high security and privacy standards. In addition, there are many powerful features such as permissioning APIs and monitoring. Further, this **DLT platform** is self-hosted and provides detailed documentation regarding development and deployment. The source code of this free software is available at [Github][10].

ConsenSys Quorum offers the following important features:

  * Pluggable Architecture
  * Ethereum Based
  * Secure
  * Self-Hosted 
  * Public/Private Network 

[Learn more about ConsenSys Quorum][11]

## ****What Are The Pre-requisites And Installation Procedure?**** {#pre-requisites}

In this section, we will install the required dependencies and set up the local environment. Before going to the next step make sure you have installed the following pre-requisites:

  * Nodejs v10+ 
  * Docker
  * Docker-compose 

Once the pre-requisites are installed, run the following command to start the CLI-based quickstart utility. 


```
npx quorum-dev-quickstart
```


However, answer the questions to complete the installation as shown in the image below.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="ConsenSys Quorum">}}  



## ****How To Start The Network?**** {#start}

Now, we have the source code in place. So, the next step is to make the network live.  
Run the following command to get into the root directory.


```
cd quorum-test-network
```


After that, run the following command to starts all the docker containers:


```
./run.sh
```


{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="ConsenSys Quorum">}}  

Once all docker containers are up and running, you can access the block explorer at the following address:


```
http://localhost:25000
```


[]()

Further, you can interact with the block explorer as shown in the image below.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="open source distributed system">}}  

Similarly, you can stop the entire network by running the following command:


```
./stop.sh 
```


## Conclusion {#Conclusion}

This is the end of this tutorial. Above all, Ethereum based ConsenSys Quorum is a **digital financial technology** specially developed for financial use cases. It has a voting-based consensus algorithm. However, the main motive of this decentralized technology is to build efficient solutions for enterprises. 

Finally, [containerize.com][12] has published many technical blog posts and tutorials about popular open source products at [blog.containerize.com][13]. Therefore, stick to the [Blockchain Platforms][14] category for regular updates.

## Explore

You may find the following links relevant:

  * [Ethereum][15]
  * [Hyperledger Fabric][16]
  * [Openchain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [ConsenSys Quorum][9]

 [1]: https://blog.containerize.com/2020/12/11/top-5-open-source-blockchain-platforms-in-2020/
 [2]: https://blog.containerize.com/2020/12/01/a-basic-guide-on-how-to-create-ethereum-smart-contract/
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