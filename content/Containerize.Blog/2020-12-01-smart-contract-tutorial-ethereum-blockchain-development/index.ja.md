---
title: "スマートコントラクトチュートリアル|イーサリアムブロックチェーン開発" 
seoTitle: "スマートコントラクトチュートリアル|イーサリアムブロックチェーン開発" 
description: "このスマートコントラクトチュートリアルでは、Ethereumスマートコントラクトを作成するための基本的な手順を詳しく説明しています。 Ethereumは、オープンソースで、安全な分散ブロックチェーンネットワークです。" 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereumは、スマートコントラクトと分散アプリケーション（DAPPS）を作成するための成熟したプラットフォームです。これらの手順に従って、スマートコントラクトを作成、テスト、および展開します。" 
url: /ja/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereumは、スマートコントラクトと分散アプリケーション（DAPPS）を作成するための成熟したプラットフォームです。これらの手順に従って、スマートコントラクトを作成、テスト、および展開します。

{{< figure align=center src="images/contract.png" alt="スマートコントラクトチュートリアル">}}


## 概要
最近では、ブロックチェーンテクノロジーの影響と重要性を強調する[ブログ投稿][1]を公開しました。別の興味深いブログ投稿があります[NFTとは何ですか？ |解散性のないトークンが説明した][2]。分散型台帳技術は、スマートコントラクト、ノード、マイニング、コンセンサスアルゴリズム、デジタルトランザクション、ピアツーピアネットワークなどのいくつかのコアコンセプトに基づいています。したがって、オープンソースであるため、ユースケースに関する拡張機能のための大きなウィンドウがあります。実際、多くのオープンソースと無料のデジタル資産管理プラットフォームが分散されており、トランザクションを管理するためにソフトウェアが必要です。
このスマートコントラクトチュートリアルでは、次の箇条書きをカバーすることにより、イーサリアムスマートコントラクトを構築する方法を学びます。
* [ **スマートコントラクトとは？** ][3]
* [ **基本的なスマートコントラクトを構築する方法？** ][4]
* [ **スマートコントラクトを実行および展開する方法？** ][5]
* [ **結論** ][6]

## スマートコントラクトとは何ですか？ {#what}

スマートコントラクトは、デジタルトランザクションを管理するためにブロックチェーンで実行されるプログラムです。このコードには、トランザクションの透明性を確認できる定義されたルールと手順が含まれています。すべてのスマートコントラクトにはアドレスが含まれており、そのアドレスは特定のスマートコントラクトの機能にアクセスするために使用されます。さらに、スマートコントラクトは、ブロックチェーンネットワークに透明性、信頼、セキュリティをもたらします。これらのコードは、特定の条件が満たされると自動的に実行されます。
ただし、開発者はスマートコントラクトを書き、ネットワーク上に展開できます。さらに、スマートコントラクトは、これらのコードの実行に依存関係が関係していないため、プロセスを非常に堅牢にします。さらに、スマートコントラクトは、参加者が取得および検証できるすべてのトランザクションに関連する必要な情報を保存します。ヘルスケア、銀行などの多くの業界は、この分散型台帳技術を非常に採用しています。政府機関は、信頼性と透明性を選挙制度にもたらすために、分散型アプリケーション（DAPP）を展開することに熱心です。 [Ethereum][8]、[Ripple][9]、[Corda][10]など、[ブロックチェーンプラットフォーム][7][7]がたくさんありますが、このガイドでは、最初のスマートコントラクトを構築します。イーサリアム。

## 基本的なスマートコントラクトを構築する方法は？ {#build}

スマートコントラクトチュートリアルのこのセクションでは、最初のスマートコントラクトのために環境をセットアップする手順を確認します。
スマートコントラクトは多くの言語で記述できますが、スマートコントラクトを書くための高レベルの言語である[Solidity][11]を使用します。
WebベースのIDEである[Ethereum Studio][12]を使用します。スマートコントラクトと分散型アプリを作成するために、スマートコントラクトと対話するために使用されます。これは、いくつかの事前に構築されたプロジェクトテンプレートを提供し、すぐにロジックを書き始めることができます。
したがって、[Ethereum Studio][12] IDEをブラウザに開くと、次のインターフェイスが表示されます。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="スマートコントラクトチュートリアル">}}

「Hello World」オプションを選択し、最初のプロジェクトを作成しましょう。ディレクトリ構造を見ることができます。さらに、右側に出力ウィンドウがあります。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="スマートコントラクトチュートリアル">}}

「アプリ」と「契約」2つのフォルダーがあります。
アプリフォルダーはWebアプリに属し、次のファイルが含まれています。
* **app.css** ：レイアウトスタイリング用
* **app.html** ：ホームページの場合
* **app.js** ：フロントエンドをスマートコントラクトに接続するビジネスロジックが含まれています
同様に、契約フォルダーには契約のソースファイルが含まれています。
それでは、ファイル/契約/helloworld.solで見つけることができるhelloworld.solファイルを開きましょう。基本的に、これはSolidityで記述されたスマートコントラクトのコードを含むメインファイルです。必要に応じてコードを変更できます。そのままにしておきます。

## スマートコントラクトを実行および展開する方法は？ {#deploy}

スマートコントラクトチュートリアルのこのセクションでは、スマートコントラクトを実行および展開する方法を確認します。 Ethereum Studioは、Solidity CodeをBYTEコードにまとめます。したがって、コードを保存し、最初のスマートコントラクトを展開しましょう。
左側のパネルで、ロケットアイコンを押します。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="スマートコントラクトとは何ですか">}}

以下に示すように、スマートコントラクトの初期値を構成して設定できます。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Ethereumスマートコントラクト">}}

「保存」ボタンを押して、「展開」ボタンを押してスマートコントラクトを展開します。下部のコンソールウィンドウに、次の出力とメッセージが表示されます。コンソールウィンドウには、スマートコントラクトアドレス、NONCE、GASSLIMITなどの詳細が記載されています。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="スマートコントラクトとは何ですか">}}

その後、左側のパネルに別のオプションがあり、それがインタラクションオプションです。このオプションを使用すると、その機能を呼び出して値を通過することにより、スマートコントラクトと対話できます。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="スマートコントラクトとは何ですか">}}

さらに、ユーザーがブラウザからスマートコントラクトと対話できるフロントエンドアプリがあります。このWebベースのアプリは、分散型アプリと呼ばれます。値を渡して、コンソールウィンドウを表示できます。

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="スマートコントラクトとは何ですか">}}


## 結論 {#con}

これにより、このスマートコントラクトチュートリアルの最後になります。この記事が、Ethereum Smart Contractの構築と展開の重要なステップを理解するのに役立つことを願っています。ブロックチェーンテクノロジーが高いペースで進化しているため、ブロックチェーンのエコーシステムで強力な実践的な練習を獲得する時が来ました。この分散型台帳技術は、高度に構成可能で拡張可能です。このブログ投稿は、スマートコントラクトの開発を喜んで学ぶことができれば、本当に役立ちます。さらに、以下の「探索」セクションに記載されている多くの有用なチュートリアルとオープンソースのデジタル資産管理プラットフォームがあります。
最終的に、[containerize.com][13]は、オープンソースソフトウェアのリストをコンパイルすることに完全に専念しています。オープンソースソフトウェアに関する多くのチュートリアルやブログ投稿があり、多くのブログ投稿がパイプラインにあります。したがって、定期的な更新については、[ブロックチェーンプラットフォーム][7]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  * [イーサリアム][8]
  * [What is Ethereum? (ETH)][23]
  * [Hyperledger Fabric][14]
  * [OpenChain][15]
  * [波紋][16]
  * [マルチチャイン][17]
  * [Consensys Quorum][18]
  * [NFTとは何ですか？ |説明できないトークンが説明された][2]
  * [コンセンシークォーラムブロックチェーンネットワークをローカルにセットアップする方法][19]
  * [2020年のトップ5オープンソースブロックチェーンプラットフォーム][20]
  * [イーサリアムスマートコントラクトの作成方法に関する基本ガイド][21]
  * [分散化されたテクノロジーがビジネス戦略をアップグレードする方法][22]
  * [コンセンシークォーラムブロックチェーンネットワークをローカルにセットアップする方法][19]



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
[23]: https://docs.koinize.com/cryptocurrencies/ethereum-eth/
