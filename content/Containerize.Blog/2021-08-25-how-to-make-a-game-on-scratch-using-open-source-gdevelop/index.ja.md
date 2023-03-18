---
title: "オープンソースgdevelopを使用してスクラッチでゲームを作成する方法" 
seoTitle: "オープンソースgdevelopを使用してスクラッチでゲームを作成する方法" 
description: "ゼロからゲームを作る方法は？ GDEVELOPは、Web、デスクトップ、iOS、Androidのビデオゲームを構築するために、多くのコンポーネントと動作を備えた論理的なUIを提供します。" 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "このゲーム開発チュートリアルでは、トラックレーシングゲームを構築することの基本について説明しています。インストールするか、オンラインアプリを使用してエキサイティングなビデオゲームを構築できます。" 
url: /ja/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## このゲーム開発チュートリアルでは、トラックレーシングゲームを構築することの基本について説明しています。インストールするか、オンラインアプリを使用してエキサイティングなビデオゲームを構築できます。

{{< figure align=center src="images/gdevelop-game.png" alt="スクラッチでゲームを作る方法">}}


## **概要**
近い過去には、[2021年のトップ5フリーゲーム開発ソフトウェア] [1]、[スーパーパワーを使用したゲーム開発の始めます] [2]、[ゲームなど、オープンソースの無料ゲーム開発ソフトウェアに関する多くのブログ投稿を公開しました。開発チュートリアル| Gdevelopのプレーヤーの動き] [3]、[ビデオゲームプログラマー向けのHTML5ゲーム開発チュートリアル] [4]、[オープンソースソフトウェアを活用するグローバルゲーム業界] [5]、および[初心者向けのGDEVELOPTチュートリアル]ゲーム開発を開始する[6 [6 ]。インターネットの時代の最新の進歩は、ビデオゲーム業界に新しい傾向をもたらしました。オープンソースゲームビルディングプラットフォームは、ゲームを独立して開発するための完全なエコシステムを提供し、開発者はニーズに応じてそのプラットフォームを成熟させます。このブログ投稿では、次のポイントをカバーして[gdevelop] [7]を使用してスクラッチでゲームを作成する方法を学びます。
  *** [なぜgdevelopを使用する必要があるのですか？] [8] **
  *** [プロジェクトのセットアップ] [9] **
  *** [背景とオブジェクトの準備方法？] [10] **
  *** [オブジェクトにbehviorsを追加] [11] **
  *** [ゲームの実行] [12] **
  *** [結論] [13] **

## なぜgdevelopを使用する必要があるのですか？ {#なぜ}
[GDEVELOP] [7]は、オープンソースのゲームソフトウェアです。自己ホスティング機能が備わっており、本質的にはクロスプラットフォームです。ダウンロードしてインストールすることも、オンラインバージョンを使用してプレイすることもできます。ユーザーは、このゲームビルダーを使用するためにプログラミングの知識を得る必要はありません。何よりも、事前に構築されたゲームの動作、テンプレート、およびオブジェクトを紹介するドラッグアンドドロップユーザーインターフェイスを提供します。この無料ゲーム開発ソフトウェアは高度に構成可能であり、サードパーティライブラリとの統合を提供します。この無料ツールの詳細については、このリンクを確認して、その機能とセットアッププロセスについてさらに学習できます。

## プロジェクトのセットアップ{#setting}
このセクションでは、いくつかの基本的な機能を備えたトラックレーシングゲームを構築するプロジェクトを作成します。これに従ってください[リンク] [6]ローカルマシンでセットアップする場合、またはこの[リンク] [14]にアクセスしてオンラインバージョンを使用できます。
したがって、「新しいプロジェクトの作成」をクリックして「空のゲーム」をクリックすると、次の画面があります。

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="スクラッチでゲームを作る方法">}}

窓の左側にメニューバーが見えます。次に、「シーン」をクリックしてから、[シーンを追加]ボタンをクリックします。その後、ゲーム画面に着地し、ゲームオブジェクト、背景、動作を作成できます。前方に進むには、右側のサイドパネルに配置された「新しいオブジェクトの追加」をクリックすると、次のウィンドウが表示されます。

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Gdevelopチュートリアル">}}


## 背景とオブジェクトを準備する方法は？ {#準備}
検索バーでトラックオブジェクトを探して、それをダブルクリックして、結果が得られたら「ゲームに追加」を押します。 2つのホイールとプラットフォームオブジェクトについてこの手順を繰り返します。次に、GreenFloorオブジェクトを右クリックして編集します。

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="ゲーム開発チュートリアル">}}


## behviorsをオブジェクトに追加する{#Add}
次に、Greenfloorをゲーム画面にドラッグアンドドロップし、その高さと幅を希望に応じて調整します。トラックオブジェクトをドラッグして、ゲーム画面にドロップし、ホイールオブジェクトをドロップします。前方に移動し、トラック本体を右クリックして「オブジェクトトラックボディの編集」を押し、動作をクリックし、[オブジェクトに動作を追加]をクリックし、[Physics Engine 2.0]をクリックすると、次のウィンドウが表示されます。

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="スクラッチでゲームを作る方法">}}

このウィンドウでは、密度、幅、高さなどの構成を変更できます。ここで、GreenFloorオブジェクトについて同じプロセスを繰り返しますが、タイプ「静的」を保持し、「適用」ボタンを押します。繰り返しますが、トラックボディオブジェクトを編集し、「編集ポイント」を押し、「EDDポイント」を押してから、前輪の名前を挿入します（つまり、このチュートリアルでFW）。オブジェクトにポイントが作成され、ホイールの位置にそのポイントをドラッグするだけです。以下の画像に示すように、このプロセスも後輪で繰り返し、xとyを0にします。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="ゲーム開発チュートリアル">}}

その後、ホイールオブジェクトの両方を編集し、ポイントを調整します。さらに、ホイールの編集オプションに移動し、「動作」タブを押し、「Physics Engine 2.0」を選択し、下の画像に示すようにタイプ、半径、密度の値を設定します。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="ゲームデザインソフトウェア">}}

「新しいシーン」タブをクリックし、「新しいイベントの追加」を押し、「条件を追加」を押し、「シーンの先頭で」を検索して「OK」を押します。次に、「Camera Center X Position」の「アクションの追加」検索を押して、次の構成を設定します。

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="無料のゲーム開発ソフトウェア">}}

次に、アクションをコピーしますが、コピーされたアクションが「Y」に設定されていることを確認します。 「Change Camera Zoom」という名前の別のアクションを追加し、0.4に設定し、このアクションを上部にドラッグします。別のアクションを追加し、「ホイールジョイントを追加」を検索し、以下に示すように両方のホイールの構成を設定します。

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="ゲーム開発ガイド">}}

その後、新しい状態を追加し、「キープレス」を検索して左に設定します。次に、アクションを追加し、最初のホイールを選択し、線形速度Xを検索し、「減算」に変更し、値50を設定します。この手順を適切なキーに繰り返しますが、以下に示すように変更符号を追加してください。

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="ゲーム開発チュートリアル">}}


## ゲームの実行{#run}
すべてのステップが完了したら。左上隅に配置されたボタンを押してゲームを実行する時が来ました。ゲームを新しいウィンドウに起動します。

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="スクラッチでゲームを作る方法">}}


## 結論{#conclusion}
これがこのブログ投稿の終わりであり、あなたは確かにスクラッチでゲームを作る方法を知っているようになりました。ただし、この業界が人気と需要を獲得しているため、市場で利用可能な無料の**ゲームデザインソフトウェア**があります。オープンソースソフトウェアはスケーラブルで構成可能で、費用対効果が高く、メンテナンスが容易であるなど、その背後にはいくつかの理由があります。さらに、開発者がAndroid、iOS、Web、デスクトップなどのすべての人気のあるプラットフォームで実行されるゲームを快適に構築するのが快適であると感じるため、クロスプラットフォームゲームビルダーの需要が高まっています。一方、パンデミックの出現は人々の生活を変え、今では屋内にとどまることを好みます。そのため、人々は余暇にビデオゲームをする傾向があります。
最後に、[containerize.com] [15]は、より興味深い**ゲーム開発チュートリアル**を使用して、チュートリアルベースを強化するためにすべて設定されています。定期的な更新については、この[ゲーム開発ソフトウェア] [16]カテゴリに接続してください。

## 探検
  *** [gdevelop] [7] **
  *** [godot] [17] **
  *** [超大国] [18] **
  *** [cocos creator] [19] **
  *** [panda3d] [20] **
  *** [playcanvas] [21] **
  *** [超大国を使用したゲーム開発を始めよう] [2] **
  *** [ゲーム開発チュートリアル| Gdevelopのプレイヤーの動き] [3] **
  *** [ビデオゲームプログラマー向けのHTML5ゲーム開発チュートリアル] [4] **
  *** [オープンソースソフトウェアを活用するグローバルゲーム業界] [5] **
  *** [初心者向けのGDEVELOPTチュートリアルゲーム開発を開始する] [6] **
  *[** 2021年のトップ5無料ゲーム開発ソフトウェア**] [1]
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
