---
title: "オープンソープルの超大国を使用してビデオゲームを開発する方法" 
seoTitle: "オープンソープルの超大国を使用してビデオゲームを開発する方法" 
description: "ビデオゲームを開発する方法は？ SuperPowersは、オープンソースのHTML5ゲーム開発です。クロスプラットフォームであり、ユーザーがアニメーション化された2Dおよび3Dゲームを構築できるようにします。" 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "オフラインモードのビデオゲーム開発用の無料のビデオゲームデザインソフトウェア。自己ホスト、アニメーション2D＆amp;サウンドエフェクトとフォントを備えた3Dゲーム。" 
url: /ja/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## オフラインモードのビデオゲーム開発用の無料ビデオゲームデザインソフトウェア。自己ホストして、サウンドエフェクトとフォントを備えたアニメーション2Dおよび3Dゲームを作成します。

{{< figure align=center src="images/superpowers.png" alt="ビデオゲームの開発方法">}}


## 概要
近い過去には、[ゲーム開発ソフトウェア] [1]カテゴリにいくつかの記事が公開されました。これには、グローバルゲーム業界がオープンソースソフトウェアを活用し、初心者向けのGDEVELOPTIONチュートリアルを活用してゲーム開発を開始しました。ビデオゲームの開発は、楽しませるゲームの需要が高まっているため、世界中にはるかに広がっています。ただし、アイデア、設計開発、継続的なテスト、リリース、フィードバックが含まれます。言い換えれば、デザイナー、ソフトウェアアーキテクト、プログラマー、テスター、サポートリソースが含まれます。さらに、アクションゲーム、パズルゲーム、レーシングゲーム、認知ゲームなど、多くの種類のゲームがあります。
したがって、3Dゲームビルダーの始めを開始するためには、優れたゲーム開発ガイドが必要です。オープンソースコミュニティは、3Dおよび2Dゲームを開発するためのエンタープライズレベルの機能とユーティリティを提供する多くのゲーム開発ソフトウェアを開発しました。このHTML5ゲーム開発チュートリアルでは、以下のポイントをカバーすることにより、無料のビデオゲーム開発ソフトウェア**超大国**を使用してビデオゲームを開発する方法について説明します。
  *** [超大国とは] [2] **
  *** [localhostでセットアップする方法？] [3] **
  *** [超大国のダッシュボード？] [4] **
  *** [結論] [5] **

## 超大国とは{#intro}
[SuperPowers] [6]は、ビデオゲーム開発のためのオープンソースソフトウェアです。柔軟性があり、堅牢で、拡張可能です。ただし、アニメーション、3Dモデル、幅広いゲームの例をサポートしています。さらに、ユーザーがインターネット接続なしでゲームを構築できるオフラインバージョンも付属しています。プロジェクトを公開するのは驚くほど簡単で、1回のクリックですべてが発生します。ユーザーがさまざまな要素を簡単にナビゲートできるユーザー向けの直感的なダッシュボードがあります。とりわけ、曖昧さやバグを避けるために開発者にエラーを示すライブエラー報告である非常にクールなエラーがあります。 SuperPowersはセットアップが簡単で、サーバーでさらにホストするための簡単な要件が必要です。この3D Game BuilderはTypeScriptで記述されており、開発と展開に関するすべてのドキュメントが付属しています。したがって、すべてのソースコードは[github] [7]で利用できます。
SuperPowersは次の重要なポイントを提供します。
  *ライブエラーレポート
  *多言語
  *クロスプラットフォーム
  *リッチフォントとサウンドエフェクト
  *自己ホスト

## localhostでセットアップする方法は？ {#設定}
ビデオゲームの開発方法をまだ疑問に思っている場合は、記事のこの部分では、LocalHostで超大国をセットアップする方法を学びます。このセクションでは、この**ゲーム開発ガイド**は、ゲーム開発環境をセットアップするプロセスについて詳しく説明します。
まず第一に、ビデオゲームの開発を開始する前に、次の前提条件をインストールしたことを確認してください。
  * ギット
  * npm
  * node.js
上記の要件は簡単で非常に知られているため、初心者にとっては難しい作業ではありません。上記の要件がインストールされたら、端末を開き、次のコマンドを実行してソースコードをクローン化します。
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
クローンが成功した後、次のコマンドを実行してダウンロードしたディレクトリに移動します。
```
cd superpowers/core
```
次に、次のコマンドを実行して、SuperPowersゲームシステムをクローン化します。
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
その後、次のコマンドを実行してビルドを作成します。
```
npm run build
```
ビルドが成功したら、次のコマンドを実行してサーバーを起動します。
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="HTML5ゲーム開発チュートリアル">}}

次に、ブラウザを開き、次のリンクでアプリケーションにアクセスします。
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## 超大国のダッシュボード？ {#特徴}
上記のURLを押すと、次のホームページが表示されます。新しい空のプラットフォーマープロジェクトを変更または作成するためのオプションがあります。

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="ビデオゲーム開発">}}

ビデオゲームを開発する方法の問題を進めるには、2Dプラットフォーマーを作成した後、次の画面が表示されます。シーンの作成、タイル、ゲームマップ、プレーヤーの設定など、ウィンドウの左側にあるオプションが表示されます。ユーザーの動作をコーディングできるライブコーディングオプションがあります。

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="ビデオゲーム開発">}}

さらに、左側に設定バーがあり、アニメーション、レンダリング、アップロード、または画像のダウンロードを設定できます。左側には、下の画像に示すように、プロジェクトにさらに資産を追加するオプションがあります。これには、フォントを変更する場合は、3Dモデルの立方モデル、FINTオプションが含まれています。さらに、ユーザーはさらにシーン、スクリプト、シェーダー、スプライトを追加できます。さらに、このオープンソースの3Dゲームビルダーを使用すると、ゲームにさまざまなサウンドエフェクトを追加して、可能な限り最高のゲームサウンドエフェクトでゲーマーを引き付けることができます。最後になりましたが、タイルマップとタイルセットを追加することもできます。

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="ビデオゲームのデザイン">}}

同様に、このゲームの記事を調べた後、それをさらに調査し、すべての機能を利用することができます。さらに、SuperPowersビデオゲームビルダーを使用して先に進む方法を理解することができます。このゲーム開発ソフトウェアでは、オンラインサポートがあります。

## **結論** {#conclusion}
これにより、このHTML5ゲーム開発ガイドが終了します。うまくいけば、このブログ投稿が、ビデオゲームの開発を開始したい場合に役立ちます。スーパーパワーとは何か、ビデオゲームの開発方法を調査しました。これは、オープンソースの3Dゲームビルダーであり、LocalHostでのインストール手順を実行しました。多くのオープンソース**ビデオゲームデザインアプリ**があり、ユーザーがゼロからゲームを構築できます。ビデオゲームプログラマーは、重要なゲームデザインの原則を使用して、高品質のゲームを構築します。 [blog.containerize.com] [8]で、今後の記事で2Dおよび3Dゲームの構築について詳しく学びます。以下の「探索」セクションに記載されている他のオープンソース、自己ホストの3Dゲームビルダー、関連する記事があります。
最後に、Contererize.comは、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。したがって、定期的な更新については、[ビデオゲーム開発] [9] [] [10]カテゴリに連絡してください。さらに、ソーシャルメディアアカウント[Facebook] [11]、[LinkedIn] [12]、および[Twitter] [13]でフォローできます。

## 探検
次のリンクが関連する場合があります。
  * [] [14] [gdevelop] [14]
  * [] [14] [godot] [15]
  * [] [14] [超大国] [6]
  * [] [14] [ココスクリエイター] [16]
  * [] [14] [panda3d] [17]
  *** [超大国を使用したゲーム開発を始めよう] [18] **
  *** [ゲーム開発チュートリアル| Gdevelopのプレイヤーの動き] [19] **
  *[**オープンソースgdevelop **] [20]を使用してスクラッチでゲームを作成する方法
  *** [オープンソースソフトウェアを活用するグローバルゲーム業界] [21] **
  *** [初心者向けのGDEVELOPTチュートリアルゲーム開発を開始する] [22] **
  *[** 2021年のトップ5無料ゲーム開発ソフトウェア**] [23]
[1]: https://blog.containerize.com/category/game-development-software/
[2]: #intro
[3]: #setup
[4]: #features
[5]: #Conclusion
[6]: https://products.containerize.com/game-development-software/superpowers/
[7]: https://github.com/superpowers/superpowers-core
[8]: https://blog.containerize.com/
[9]: https://products.containerize.com/game-development-software/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
