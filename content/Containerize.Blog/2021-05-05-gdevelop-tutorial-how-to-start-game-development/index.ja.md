---
title: "Gdevelopチュートリアル|ゲーム開発を開始する方法" 
seoTitle: "Gdevelopチュートリアル|ゲーム開発を開始する方法" 
description: "このGdevelopチュートリアル記事に従って、ビデオゲームの開発を始めてください。 GDEVELOPは自己ホストされており、プログラミングスキルを開始する必要はありません。" 
date: Wed, 05 May 2021 16:51:40 +0000
author: muhammadmustafa
summary: "ビデオゲームをゼロから構築し、Android、iOS、Web、Windows、Linuxで実行します。 Gdevelopは、強力な機能を備えた自己ホストの無料ゲームエンジンです。" 
url: /ja/gdevelop-tutorial-how-to-start-game-development/
categories: ['Game Development Software']
---

## ビデオゲームをゼロから構築し、Android、iOS、Web、Windows、Linuxで実行します。 Gdevelopは、強力な機能を備えた自己ホストの無料ゲームエンジンです。

{{< figure align=center src="images/GDevelop.png" alt="Gdevelopチュートリアル">}}


## 概要
ビデオゲーム業界は高いペースで繁栄しています。世界中に何十億人ものゲーマーがいて、常にエキサイティングで面白いビデオゲームを探しています。一方、開発者に、高度で魅力的なゲームを開発するための完全な環境とゲーム開発ツールを提供するビデオゲーム開発ソフトウェアが多数あります。過去には、ゲーム開発者はゲームソースコードラインの書き込みに使用されていました。それは開発方法を撮るのに非常に時間があり、ゲーマーは新しいリリースを数か月待たなければなりませんでした。したがって、オープンソースコミュニティは、ゲーム開発者向けの無料の簡単なゲームメーカー**を開発しました。
これらの**無料のゲームエンジン**は、高速ゲームリリースを提供するのに役立つだけでなく、ゲームの品質と堅牢性を高める機能を備えています。さらに、これらの **3Dゲームデザイナー** は、ドラッグアンドドロップのユーザーインターフェイスを提供し、ゲームを構築するためのプログラミング知識を持つ必要性を排除します。ただし、これは **GDEVELOPTチュートリアル** で、GDEVELOPとは何か、次のポイントをカバーしてローカルにセットアップする方法を学習します。
  ***[gdevelopとは][1]** 
  ***[localhostでセットアップする方法？][2]** 
  ***[結論][3]** 

##  **gdevelopとは何か。**    {#intro}
GDEVELOPは、無料のオープンソースビデオゲーム開発ソフトウェアです。自己ホストされており、2Dゲームを開発するための豊富な機能を提供しています。ただし、3Dオブジェクトにはサポートがあります。ユーザーは、複数のプラットフォーム向けのゲームを開発および公開するために、いかなる種類のプログラミングスキルも必要ありません。この無料のゲームエンジンを自己ホストするために簡単な要件が必要であるため、非常に拡張可能でセットアップが簡単です。ドラッグアンドドロップ機能を備えた直感的なユーザーインターフェイスがあります。この無料ツールは、高級アニメーション、ビデオ/オーディオエフェクト、タッチスクリーンとマルチタッチ、ライブプレビューなどを提供します。さらに、この **3Dゲームデザイナー** は、開発者がプロ​​トタイプに基づいて素晴らしい製品を開発するのに役立つ強力なプロトタイピング機能を備えています。
さらに、このオープンソース**簡単なゲームメーカー**は高度に構成可能であり、サードパーティライブラリとの統合をサポートします。何よりも、人気のあるビデオゲームコンソールであるXboxとPlayStationのサポートを提供します。 GDEVELOPは、C ++、JavaScript、およびTypeScriptで記述されています。展開と開発に関する詳細なドキュメントがあります。 Gdevelopには、バグやクエリに積極的に対応する非常に活気のある開発者コミュニティがあります。したがって、すべてのソースコードは[github][4]で利用できます。
[Gdevelopの詳細][5]

##  **localhostでセットアップする方法？**    {#setup}
この **gdevelopチュートリアル** のセクションでは、ローカルシステムでGDEVELOPをセットアップするにはどうすればよいですか。次のステップに移動する前に、次の前提条件をインストールしていることを確認してください。
  * ギット
  * node.js 12.x
  *糸 / npm
すべての前提条件がインストールされたら、端子を開き、次のコマンドを実行してソースコードをクローン化します。
```
git clone https://github.com/4ian/GDevelop.git
```
その後、次のコマンドを実行して依存関係をインストールします。
```
cd GDevelop/newIDE/app
npm install
```
これで、次のコマンドを実行してアプリケーションを開始できます。
```
npm start
```

{{< figure align=center src="images/181941986_370021980999009_49950285486947371_n.png" alt="Gdevelopチュートリアル">}}

{{_LINE_34_}}
{{_LINE_35_}}
    最後に、http：// localhost：3000のブラウザのアプリケーションにアクセスできます。
{{_LINE_37_}}
{{_LINE_38_}}
このゲームの作成ソフトウェアにアクセスすると、以下の画像に示すようにホームページを開きます。

{{< figure align=center src="images/181755626_430416518403410_850455915030815113_n-1024x612.png" alt="ゲーム開発ツール">}}

新しいプロジェクトを開始したり、新しいプロジェクトを開いたりするオプションがあります。さらに、良いスタートを切るための例やチュートリアルを見るオプションがあります。
「新しいプロジェクトの作成」をクリックすると、以下の画像に示すように、いくつかの事前に構築された基本的およびアドバンスゲームテンプレートが表示されます。

{{< figure align=center src="images/181970185_1410837245966585_2870884044502649776_n-1024x579.png" alt="Gdevelopチュートリアル">}}

このチュートリアルでは、最初のオプションを選択した後に次の画面を見ることができるように、任意のゲームをスターターとして選択できます。画面の右側にメニューバーがあり、プレーヤー、プラットフォーム、ジャンプスルーなど、多くのオプションを見ることができます。この **3Dゲームデザイナー** では、ダッシュボードからオブジェクトの動きと位置を制御できます。開発者がゲームに選択できる複数の文字があります。さらに、左上には、機能をテストするためにゲームを開始するボタンがあります。さらに、開発者がゲームキャラクターに拘束できるイベントや行動があり、ゲームに対話性をもたらすことができます。

{{< figure align=center src="images/181893666_518087772546969_1710882406977218030_n-1024x578.png" alt="ゲーム開発ソフトウェア">}}

このようにして、さらに機能を探索して試すことができます。この**簡単なゲームメーカー**は開発者に優しいものであり、直感的なダッシュボードを提供します。ゲームの開発が終了したら、Android、iOS、Webなどのさまざまなプラットフォームにゲームをエクスポートできます。

## **結論**   {#conclusion}
これにより、このGdevelopチュートリアルが終了します。この**無料ゲームエンジン**では、ビジュアルイベントを使用してゲームのロジックを実装できます。多くの役立つチュートリアルやユーザーマニュアルを作成した非常に協力的なコミュニティがあります。このブログ投稿は、ゲーム開発の世界で新しい場合に本当に役立ちます。他にも多くの **3Dゲームデザイナー** 、ゲーム開発ツール、以下の探索セクションに記載されている記事があります。これらのゲームエンジンはすべて無料のオープンソースで、自己ホスト機能を考え出します。したがって、ゲーム開発業界は、ゲーマーの数の増加とともに非常に拡大しています。高解像度のグラフィックスとサウンドエフェクトを備えたビデオゲームがあり、ゲーマーの関心と魅力を引き起こします。ただし、仕事に品質と効率をもたらす、よく表されたゲーム開発ソフトウェアを選択してください。
最後に、Containerize.comはすべて、より興味深いゲーム開発チュートリアルでチュートリアルベースを強化するように設定されています。定期的な更新については、[containerize.com][7]のこの[ゲーム開発ソフトウェア][6]カテゴリに接続してください。

## 探検
  * [gdevelop][8]
  * [godot][9]
  * [超大国][10]
  * [cocos creator][11]
  * [panda3d][12]
  * [2021年にオープンソースソフトウェアを選択する前にレビューすること][13]
  * [オープンソースgdevelopを使用してスクラッチでゲームを作成する方法][14]
  * [2021年のトップ5無料ゲーム開発ソフトウェア][15]
  * [超大国を使用したゲーム開発を始める][16]
  * [ゲーム開発チュートリアル| Gdevelopのプレイヤーの動き][17]
  * [ビデオゲームプログラマー向けのHTML5ゲーム開発チュートリアル][18]
  * [オープンソースソフトウェアを活用するビデオゲーム業界][19]

  
[1]: #intro
[2]: #setup
[3]: #Conclusion
[4]: https://github.com/4ian/GDevelop
[5]: https://gdevelop-app.com/
[6]: https://products.containerize.com/game-development-software
[7]: https://www.containerize.com/
[8]: https://products.containerize.com/game-development-software/gdevelop/
[9]: https://products.containerize.com/game-development-software/godot/
[10]: https://products.containerize.com/game-development-software/superpowers/
[11]: https://products.containerize.com/game-development-software/cocos-creator/
[12]: https://products.containerize.com/game-development-software/panda3d/
[13]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[14]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[15]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[16]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[17]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[18]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[19]: https://blog.containerize.com/2021/05/07/how-video-gaming-industry-leveraging-open-source-software/
