---
title: Smart Contract Tutorial | Ethereum Blockchain Development
seoTitle: Smart Contract Tutorial | Ethereum Blockchain Development
description: This smart contract tutorial elaborates the basic steps to create Ethereum Smart Contracts. Ethereum is an open source, secure, distributed blockchain network.
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: Ethereum is a mature platform to create smart contracts and decentralized applications(Dapps). Follow these steps to Create, Test, and Deploy Smart Contracts.
url: /blockchain-platforms/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']

---
## Ethereum is a mature platform to create smart contracts and decentralized applications(Dapps). Follow these steps to Create, Test, and Deploy Smart Contracts.

{{< figure align=center src="images/contract.png" alt="smart contract tutorial">}}  

## Overview

In the recent past, we published a [blog post][1] that highlights the impact and importance of Blockchain technology. There is another interesting blog post [What is NFT? | Non Fungible Tokens Explained][2]. Distributed ledger technology is based on some core concepts such as Smart Contracts, Nodes, Mining, Consensus Algorithms, Digital Transactions, and Peer-to-Peer networks. As it is open source, therefore, there is a huge window for an extension regarding use cases. In fact, there are many open source and free digital asset management platforms that are distributed and require some software to govern the transactions.  
In this smart contract tutorial, We will learn how to build an Ethereum Smart Contract by covering the following bullet points.

  * [**What is a Smart Contract?**][3]
  * [**How to Build a Basic Smart Contract?**][4]
  * [**How to Run and Deploy Smart Contract?**][5]
  * [**Conclusion**][6] 

## What is a Smart Contract? {#what}

A smart contract is a program that runs on the Blockchain to govern digital transactions. This piece of code contains the defined rules and procedures which make sure the transparency of a transaction. Every smart contract contains an address and that address is used to access any function of a particular smart contract. In addition, smart contracts bring transparency, trust, and security into the blockchain network. These pieces of code execute automatically once certain conditions are fulfilled. 

However, any developer can write a smart contract and deploy it over the network. Further, smart contracts make the processes quite robust as there is no dependency involved in the execution of these pieces of code. Moreover, smart contracts store necessary information related to every transaction that participants can retrieve and verify. Many the industries such as Healthcare, Banking, are highly adopting this distributed ledger technology. Government institutions are also keen to deploy decentralized applications (dapps) to bring authenticity and transparency into the electoral system. There are many [Blockchain platforms][7] such as [Ethereum][8], [Ripple][9], [Corda][10], and some more, however, in this guide, we will build our first smart contract on Ethereum. 

## How to Build a Basic Smart Contract? {#build}

In this section of the smart contract tutorial, we will see the steps to set up the environment for our first smart contract.

Smart contracts can be written in many languages but, we will use [Solidity][11] that is a high-level language to write smart contracts. 

We will use [Ethereum Studio][12] that is a web-based IDE. It is used to write smart contracts as well as decentralized apps to interact with smart contracts. It provides some pre-built project templates where you can start writing your logic right away. 

So, open the [Ethereum Studio][12] IDE into the browser and you will see the following interface.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Smart Contract Tutorial ">}}  

Let’s choose “Hello World” option and create our first project. You can see the directory structure. Further, there is an output window on the right-hand side. 

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Smart Contract Tutorial ">}}  

There are two folders “app” and “contracts”. 

app folder belongs to the web app and contains the following files.

  * **app.css**: For layout styling 
  * **app.html**: For Home page 
  * **app.js**: Contains the business logic to connect front end with the smart contract

Similarly, the contracts folder contains the source file of the contract.

Now, let’s open the HelloWorld.sol file that can be found at Files/contracts/HelloWorld.sol. Basically, this is the main file that contains the code for the smart contract written in Solidity. You can modify the code if you want, we will leave it as it is. 

## How to Run and Deploy a Smart Contract? {#deploy}

In this section of the smart contract tutorial, we will see how to run and deploy a smart contract. Ethereum Studio compiles the Solidity code into byte code. Therefore, save the code, and let’s deploy our first smart contract.

On the left-hand side panel, press the Rocket icon. 

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="what is a smart contract">}}  

You can configure and set the initial values for your smart contract as shown below.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Ethereum Smart Contract">}}  

Hit the “Save” button and press the “Deploy” button to deploy the smart contract. You will see the following output and a message in the console window at the bottom. Console window gives details such as smart contract address, Nonce, Gasslimit. 

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="what is a smart contract">}}  

After that, there is another option on the panel on left-hand side and that is the Interact option. This option allows you to interact with your smart contract by calling its function and passing values. 

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="what is a smart contract">}}  

Moreover, there is a front-end app that allows users to interact with the smart contract from the browser. This web-based app is called a decentralized app. You can pass the value and see the console window.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="what is a smart contract">}}  

## Conclusion {#con}

This brings us to the end of this smart contract tutorial. I hope this article helped you to understand the key steps of building and deploying Ethereum Smart Contract. As Blockchain technology is evolving at a high pace, it is time to gain strong hands-on practice over the echo system of Blockchain. This distributed ledger technology is highly configurable and extensible. This blog post will really help you if you are willing to learn smart contract development. In addition, there are many helpful tutorials and open source digital asset management platforms mentioned under the “Explore” section below.

In the end, [containerize.com][13] is fully dedicated to compiling the list of open source software. There are many tutorials and blog posts about open source software and a number of blog posts are in the pipeline. Therefore, please stay in touch with the [Blockchain Platforms][7] category for regular updates.

## Explore

You may find the following links relevant:

  * [Ethereum][8]
  * [Hyperledger Fabric][14]
  * [Openchain][15]
  * [Ripple][16]
  * [Multichain][17]
  * [ConsenSys Quorum][18]
  * [What is NFT? | Non Fungible Tokens Explained][2]
  * [How To Setup ConsenSys Quorum Blockchain Network Locally][19]
  * [Top 5 Open Source Blockchain Platforms In 2020][20]
  * [A Basic Guide on How To Create Ethereum Smart Contract][21]
  * [How Decentralized Technology Upgrades Your Business Strategy][22]
  * [How To Setup ConsenSys Quorum Blockchain Network Locally][19]

 [1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
 [2]: https://blog.containerize.com/2021/11/23/what-is-nft-non-fungible-tokens-explained/
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
 [19]: https://blog.containerize.com/2021/04/30/how-to-setup-consensys-quorum-blockchain-network-locally/
 [20]: https://blog.containerize.com/2020/12/11/top-5-open-source-blockchain-platforms-in-2020/
 [21]: https://blog.containerize.com/2020/12/01/a-basic-guide-on-how-to-create-ethereum-smart-contract/
 [22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/