---
title: "テストネットとは何ですか、そしてそれを展開する方法|イーサリアムテストネット '" 
seoTitle: "テストネットとは何ですか、そしてそれを展開する方法|イーサリアムテストネット" 
description: "テストネットとは何ですか？このガイドは、localhostでイーサリアムノードをセットアップする方法に関するものです。ブロックチェーンは、すべてのトランザクションの履歴を維持するノードのネットワークです。" 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereumは、接続されたノードのオープンソースブロックチェーンピアツーピアネットワークです。ローカルサーバーでEthereumノードを展開および対話する方法を学びましょう。" 
url: /ja/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereumは、接続されたノードのオープンソースブロックチェーンピアツーピアネットワークです。ローカルサーバーでEthereumノードを展開および対話する方法を学びましょう。

{{< figure align=center src="images/ether.png" alt="テストネットとは何ですか">}}

以前のブログ投稿では、[ビジネスのためのブロックチェーンテクノロジー][1]、[基本的なスマートコントラクトを書く][2]、[人気のブロックチェーンプラットフォーム][3]を含む複数のトピックについて書きました。 **分散化された元帳技術**が時間の経過とともに歩き回っているため、近い将来に書くトピックがさらにあります。人々は現在、セキュリティと透明性のためにデジタル資産管理プラットフォームに関心を持ち始めています。さらに、デジタルトランザクションは追跡可能で、不変であり、このような要因は、この技術の信頼性に関して人々に自信を与えます。パブリック、プライベート、および許可されているブロックチェーンには3種類があります。ただし、ユーザーはユースケースに応じて任意のタイプを採用できます。
このテクノロジーの出現は、金融取引の方法を変えたため、銀行セクターに大きな変化をもたらしました。このブログ投稿では、LocalHostでEthereumノードのセットアップに関するEthereumブロックチェーンについて説明し、テストネットワークと対話する方法を確認します。次の重要なポイントをカバーします。
  ***テストネットとは？**
  *** [Ethereumブロックチェーンのセットアップ方法？][4] **
  *** [Ethereumブロックチェーンと対話する方法？][5] **
  *** [結論][6] **

## テストネットとは何ですか？ {#tetstnet}
このブログ投稿では、LocalHostにEthereumノードを展開します。 Ethereumには複数のネットワークがあり、生産ネットワークはMainNetと呼ばれ、テスト目的で使用されるネットワークはTestNetと呼ばれます。分散型アプリケーションのほとんどは、[Ethereum][7]ブロックチェーンに基づいています。スマートコントラクトは、この分散インフラストラクチャの不可欠なコンポーネントです。さらに、ブロックチェーンは「ノード」と呼ばれるコンピューターのネットワークです。ただし、各ノードにはブロックチェーンのコピーが含まれているため、ネットワークに参加します。 Ethereum Blockchainには、「Ether」と呼ばれる独自の暗号通貨もあります。すべてのトランザクションは暗号化されています。さらに、それは完全な元帳技術であり、決してシャットダウンしたり、破損したりすることはありません。 Etherumブロックチェーンノードで実行されるスマートコントラクトと分散型アプリケーション（DAPPS）を作成できます。
このオープンソース分散ブロックチェーンネットワークは、Proof of Work（POW）と呼ばれるコンセンサスアルゴリズムを使用しています。さらに、Ethereumのアーキテクチャには、Ethereum Virtual Machine、Ethereum Client API、Smart Contracts、Ethereumノード、エンドユーザーアプリケーションなどの5つのレイヤーが含まれます。 Ethereum Virtual Machineは、スマートコントラクトを認識するソフトウェアとアーキテクチャを提供します。スマートコントラクトは、トランザクションを管理するソフトウェアです。 Ethereum Blockchainには強力なサポートがあり、Fortune 500企業は、この技術を使用して大規模に開発を行うことに大きな関心を示しています。さらに、EthereumはGO言語で記述されており、そのソースコードは[github][8]で入手できます。すべてのドキュメントは、活気に満ちたコミュニティがあるため、展開と開発に関して利用できます。

## Ethereumブロックチェーンをセットアップする方法は？ {#設定}
今、私たちはテストネットとは何かを知っています。このセクションでは、ローカルマシンにEthereumノードをセットアップします。さらに進む前に、次の前提条件をインストールしていることを確認してください。
  * [homebrew][9]（macosの場合）

  * [go7] (brew install go)
前提条件が整ったら、次のコマンドを実行してソースコードをクローン化してください。
```
git clone https://github.com/ethereum/go-ethereum
```
クローンが成功したら、ディレクトリに移動します。
```
cd go-ethereum
```
次に、次のコマンドを実行してGETHプログラムを構築します。
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    ノート
{{_LINE_34_}}
  エラーが発生した場合は、Xcode-Selectを実行してXcodeをインストールして、インストールして再試行してください
{{_LINE_36_}}
そのため、すべての前提条件とソースコードを設定しました。したがって、次のコマンドを実行してノードを起動します。
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Ethereumノード">}}


## Ethereumブロックチェーンと対話する方法は？ {#相互作用}
このセクションでは、ブロックチェーンと完全に同期される実行中のイーサリアムノードとの相互作用について説明します。 GETHソフトウェアを使用して、テストネットワークにコマンドを対話して送信できます。
そのために、次のコマンドを実行して、$ PATH環境変数にBuild/Bin/Gethを含めましょう。
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
その後、上記のサーバーを停止し、次のフラグでテストネットワークを実行します。
geth --testnet  -  rpc  -  rpcapi = "db、eth、net、web3、personal、web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="テストネットとは何ですか">}}

次に、新しい端末ウィンドウを開き、次のコマンドを実行してGethコマンドをノードに添付する必要があります。
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="デジタル資産管理プラットフォーム">}}

Gethは、テストネットワークと対話できるコンソールウィンドウを開きます。次のコマンドは、仮想通貨とパブリック/プライベートキーペアを保持するアカウントを作成します。
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="分散型元帳技術">}}

アカウントを確認するには、次のコマンドを実行できます。
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="テストネットとは何ですか">}}

同様に、Ethereumブロックチェーンと対話するために使用できる多くのコマンドがあります。

## 結論{#conclusion}
このチュートリアルの終わりは次のとおりです。テストネット**とは何か、ローカルマシンのイーサリアムノードのセットアッププロセスを学びました。 Ethereumブロックチェーンは、ほとんどの分散型アプリケーションの一般化されたソリューションです。ほとんどの企業や政府部門は、この技術を採用して、堅牢性、透明性、可用性、説明責任をもたらす傾向があります。さらに、この**ブロックチェーンチュートリアル**は、スマートコントラクトを活用してイーサリアムブロックチェーンの開発を開始する予定がある場合に本当に役立ちます。 Etheruemブロックチェーンは、数千のライブノードがあるため、より安定して人気があります。さらに、企業は、余分な時間を費やすことなく、Ethereumブロックチェーンネットワークを簡単に開発および展開できます。 Ethereumの信頼性の背後にあるもう1つの要因は、他の**デジタル資産管理プラットフォーム**が提供しない方法でスマート契約の開発を提供することです。
Ethereum Networkの最新のアップデートにより、ネットワークがより費用対効果が高く効率的になりました。実際、クラウドには、投資と開発の目的に関するEtheruemの重要な側面を示す多くの資料があります。開発者には、事前に作られたユーティリティを備えた開発者に優しいエコシステムを提供します。鉱夫にとっては、ブロックチェーンに新しいブロックをマイニングするたびに、エーテルの形の恵みがあります。さらに、[containerize.com][10]は、[blog.containerize.com][11]で、人気のあるオープンソース製品に関する多くの技術的なブログ投稿とチュートリアルを公開しています。したがって、定期的な更新のために[ブロックチェーンプラットフォーム][12]カテゴリに接続してください。

## 探検
次のリンクが関連する場合があります。
  * [イーサリアム][7]
  * [Hyperledger Fabric][13]
  * [OpenChain][14]
  * [波紋][15]
  * [マルチチャイン][16]
  * [Consensys Quorum][17]
  * [コンセンシークォーラムブロックチェーンネットワークをローカルにセットアップする方法][18]
  * [2020年のトップ5のオープンソースブロックチェーンプラットフォーム][3]
  * [Ethereum Smart Contractを作成する方法に関する基本ガイド][2]
  * [分散化されたテクノロジーがビジネス戦略をアップグレードする方法][19]

  
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
