---
title: "Consensys Quorumブロックチェーンネットワークをローカルにセットアップする方法" 
seoTitle: "Consensys Quorumブロックチェーンネットワークをローカルにセットアップする方法" 
description: "このガイドに従って、LocalHostでのConsensys Quorum Blockchainのインストールプロセスについて学びます。 Consensys Quorumは、オープンソースEtherumベースのブロックチェーンです。" 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "ビジネスデジタルトランザクションを管理および監視するために、独自のパブリック/プライベートブロックチェーンネットワークを確立します。 LocalHostでConsensys Quorumをセットアップする方法を学びましょう。" 
url: /ja/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## ビジネスデジタルトランザクションを管理および監視するために、独自のパブリック/プライベートブロックチェーンネットワークを確立します。 LocalHostでConsensys Quorumをセットアップする方法を学びましょう。

{{< figure align=center src="images/quorum.png" alt="Consensys Quorum">}}


## 概要
最近では、[2020年のトップ5オープンソースブロックチェーンプラットフォーム][1]、[Ethereum Smart Contractの作成方法に関する基本ガイド][2]、[2]、[分散化方法など、ブロックチェーン関連のトピックに関するブログ投稿を公開しました。テクノロジーはビジネス戦略をアップグレードします][3]、および[ローカルホストでイーサリアムノードをセットアップするための初心者ガイド][4]。この記事では、次のポイントをカバーして、Consensys QuorumブロックチェーンネットワークをLocalHostに設定する方法を確認します。
  *** [Consensys Quorumの簡単な紹介][5] **
  *** [前提条件と**インストール手順は何ですか？][6] **
  *** [ネットワークの開始方法？][7] **
  *** [結論][8] **

## **コンセンシーQuorumの簡単な紹介** {#introduction}
[Consensys Quorum][9]は、**分散型元帳技術**に基づくオープンソースプラットフォームです。ただし、高速およびハイスループットトランザクションを処理するブロックチェーンベースのアプリケーションを構築するために、完全に開発者に優しい環境を提供します。 ** ethereum **ベースで拡張可能で、多くのプラグインを提供しています。さらに、このオープンソース分散システムには、高いセキュリティとプライバシーの基準があります。さらに、APIの許可や監視など、多くの強力な機能があります。さらに、この** dltプラットフォーム**は自己ホストされており、開発と展開に関する詳細なドキュメントを提供します。このフリーソフトウェアのソースコードは、[github][10]で入手できます。
Consensys Quorumは、次の重要な機能を提供します。
  *プラグ可能なアーキテクチャ
  *イーサリアムベース
  * 安全
  *自己ホスト
  *パブリック/プライベートネットワーク
[Consensys Quorumの詳細][11]

## ****前提条件とインストール手順は何ですか？**** {#前提条件}
このセクションでは、必要な依存関係をインストールし、ローカル環境をセットアップします。次のステップに進む前に、次の前提条件をインストールしていることを確認してください。
  * nodejs v10+
  * Docker
  * Docker-Compose
前提条件がインストールされたら、次のコマンドを実行して、CLIベースのクイックスタートユーティリティを開始します。
```
npx quorum-dev-quickstart
```
ただし、下の画像に示すように、インストールを完了するために質問に答えてください。

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Consensys Quorum">}}


## ****ネットワークの開始方法？**** {#start}
これで、ソースコードが整っています。したがって、次のステップは、ネットワークをライブにすることです。
次のコマンドを実行して、ルートディレクトリに入ります。
```
cd quorum-test-network
```
その後、次のコマンドを実行して、すべてのDockerコンテナを起動します。
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Consensys Quorum">}}

すべてのDockerコンテナが稼働していると、次のアドレスでブロックエクスプローラーにアクセスできます。
```
http://localhost:25000
```
[]（）
さらに、下の画像に示すように、ブロックエクスプローラーと対話できます。

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="オープンソース分散システム">}}

同様に、次のコマンドを実行することにより、ネットワーク全体を停止できます。
```
./stop.sh 
```

## 結論{#conclusion}
これがこのチュートリアルの終わりです。とりわけ、イーサリアムベースのコンセンシーQuorumは**デジタル金融テクノロジー**です。投票ベースのコンセンサスアルゴリズムがあります。ただし、この分散型テクノロジーの主な動機は、企業向けの効率的なソリューションを構築することです。
最後に、[containerize.com][12]は、[blog.containerize.com][13]で、人気のあるオープンソース製品に関する多くの技術的なブログ投稿とチュートリアルを公開しています。したがって、定期的な更新のために[ブロックチェーンプラットフォーム][14]カテゴリに固執します。

## 探検
次のリンクが関連する場合があります。
  * [Ethereum][15]
  * [Hyperledger Fabric][16]
  * [OpenChain][17]
  * [波紋][18]
  * [マルチチャイン][19]
  * [Consensys Quorum][9]

  
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
