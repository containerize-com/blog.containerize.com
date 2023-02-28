---
title: 'What is Testnet & How To Deploy It | Ethereum Testnet'
seoTitle: 'What is Testnet & How To Deploy It | Ethereum Testnet'
description: What is Testnet? This guide is about how to set up Ethereum Node on localhost. Blockchain is a network of nodes that maintain a history of all transactions.
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: Ethereum is an open-source blockchain peer-to-peer network of connected nodes. Let’s learn how to deploy and interact with Ethereum Node on a local server.
url: /blockchain-platforms/what-is-testnet-how-to-deploy-it-ethereum-testnet/

categories: ['Blockchain Platforms']

---
## Ethereum is an open-source blockchain peer-to-peer network of connected nodes. Let’s learn how to deploy and interact with Ethereum Node on a local server.

{{< figure align=center src="images/ether.png" alt="What is Testnet">}}  

In our previous blog posts, we wrote on multiple topics that include [Blockchain Technology for Business][1], [Writing a Basic Smart Contract][2], and [Popular Blockchain Platforms][3]. There are further topics that we will write on in the near future as **decentralized ledger technology** is gaining pace with the passage of time. People are now starting to take interest in digital asset management platforms due to security and transparency. In addition, digital transactions are traceable, immutable and such factors give confidence to the people regarding the reliability of this technology. There are three types of the blockchain public, private, and permissioned. However, users can adopt any type depending upon their use case. 

The advent of this technology has brought a huge change in the banking sector as it has changed the way of financial transactions. In this blog post, we will talk about Ethereum Blockchain regarding setting up Ethereum Node on localhost and we will see how to interact with the test network. We will cover the following key points.

  * **What is Testnet?**
  * **[How to Setup Ethereum Blockchain?][4]**
  * **[How to Interact With Ethereum Blockchain?][5]**
  * **[Conclusion][6]**

## What is Testnet? {#tetstnet}

In this blog post, we will be going to deploy an Ethereum node on localhost. Ethereum has multiple networks, the production network is called Mainnet and the network that is used for testing purposes is called Testnet. Most of the decentralized applications are based on [Ethereum][7] Blockchain. Smart Contract is an integral component of this distributed infrastructure. Moreover, blockchain is a network of computers called “Nodes”. However, each node contains a copy of the blockchain and thus participates in the network. Ethereum Blockchain also has its own cryptocurrency called “Ether”. All the transactions are cryptographically secured. In addition, it is a complete ledger technology that never shuts down or gets corrupted. It lets you write smart contracts and Decentralized applications (dapps) that run on Etherum blockchain nodes.

This open source distributed blockchain network uses a consensus algorithm called proof of work(POW). Further, the architecture of Ethereum comprises five layers such as Ethereum Virtual Machine, Ethereum Client Apis, Smart Contracts, Ethereum Nodes, and End User Applications. Ethereum Virtual Machine offers the software and architecture that recognize smart contracts. Smart Contracts are the software that governs the transactions. There is strong support for Ethereum Blockchain and fortune 500 companies have shown great interest to do development on a larger scale using this technology. Moreover, Ethereum is written in the Go language and its source code is available on [Github][8]. All the documentation is available regarding deployment and development as it has a vibrant community. 

## How to Setup Ethereum Blockchain? {#setup}

Now, we are aware of what is Testnet. In this section, we will set up the Ethereum node on our local machine. Before going further, make sure you have installed the following prerequisites.

  * [Homebrew][9] (for macOS)
  * [Go][7] (brew install go)

Once prerequisites are in place, please run the following command to clone the source code:


```
git clone https://github.com/ethereum/go-ethereum
```


Upon a successful clone, go into the directory:


```
cd go-ethereum
```


Now, run the following command to build the geth program:


```
make geth
```


<blockquote class="wp-block-quote">
  <p>
    Note
  </p>
  
  <cite>In case of any error, please Install XCode by running <code>xcode-select --install</code> and try again</cite>
</blockquote>

So, you have set up all the prerequisites and source code. Therefore, run the following command to start the Node:


```
build/bin/geth
```


{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Ethereum Node ">}}  

## How to Interact With Ethereum Blockchain? {#interact}

This section talks about the interaction with a running Ethereum Node that is fully synchronized with the blockchain. We can use the GETH software to interact and send commands to the test network. 

For that, let’s include build/bin/geth in $PATH environment variable by running the following commands:


```
cd build/bin/<br />sudo scp geth /usr/local/bin
```


After that, stop the server that you brought up above and run the test network with the following flags:

<pre class="wp-block-preformatted">geth --testnet --rpc --rpcapi="db,eth,net,web3,personal,web3"
</pre>

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="What is Testnet">}}  

Next, you need to open a new terminal window and attach the Geth command to the Node by running the following command:


```
geth attach http://127.0.0.1:8545
```


{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="digital asset management platform">}}  

Geth will open a console window where you can interact with the test network. Following command will create an account that holds the virtual currency and public/private key pair:


```
personal.newAccount()
```


{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="decentralized ledger technology">}}  

To check your account, you can run the following command:


```
eth.accounts
```


{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="What is Testnet">}}  

Likewise, there are many commands that you can use to interact with Ethereum Blockchain.

## Conclusion {#Conclusion}

Here comes the end of this tutorial. We learned **what is Testnet** and the setting up process of the Ethereum node on the local machine. Ethereum Blockchain is a generalized solution for most decentralized applications. Most businesses and government departments tend to adopt this technology to bring robustness, transparency, availability, and accountability. In addition, this **blockchain tutorial** will really help you if you are planning to start development on Ethereum blockchain as it leverages smart contracts. Etheruem blockchain is more stable and popular as it has thousands of live nodes. Moreover, enterprises can easily develop and deploy Ethereum blockchain networks without spending any extra time. The other factor behind the reliability of Ethereum is that it offers the development of smart contracts in a way that other **digital asset management platforms** do not offer. 

The latest updates in the Ethereum network have made the network more cost-effective and efficient. In fact, there is a lot more material available on the cloud that demonstrates the important aspects of Etheruem regarding investment and development purposes. For developers, it provides a developer-friendly ecosystem with pre-made utilities. For miners, there is a bounty in the form of an Ether whenever they mine a new block into the blockchain. Further, [containerize.com][10] has published many technical blog posts and tutorials about popular open source products at [blog.containerize.com][11]. Therefore, stay connected with the [Blockchain Platforms][12] category for regular updates.

## Explore

You may find the following links relevant:

  * [Ethereum][7]
  * [Hyperledger Fabric][13]
  * [Openchain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [ConsenSys Quorum][17]
  * [How To Setup ConsenSys Quorum Blockchain Network Locally][18]
  * [Top 5 Open Source Blockchain Platforms In 2020][3]
  * [A Basic Guide on How To Create Ethereum Smart Contract][2]
  * [How Decentralized Technology Upgrades Your Business Strategy][19]

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