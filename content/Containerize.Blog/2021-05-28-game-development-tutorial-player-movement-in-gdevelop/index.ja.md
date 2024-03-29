---
title: "ゲーム開発チュートリアル| GDEVELOPでのプレイヤーの動き" 
seoTitle: "ゲーム開発チュートリアル| GDEVELOPでのプレイヤーの動き" 
description: "このゲーム開発チュートリアルに従って、基本的なゲーム関数について学びます。 Gdevelopは、ゲームを構築および公開するための無料のゲーム作成ソフトウェアです。" 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "画面上のオブジェクトを移動することは、あらゆるゲームの重要な部分です。このゲーム開発ガイドでは、GDEVELOPでゲームオブジェクトを制御および移動する方法を学びます。" 
url: /ja/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## 画面上のオブジェクトを移動することは、あらゆるゲームの重要な部分です。このゲーム開発ガイドでは、GDEVELOPでゲームオブジェクトを制御および移動する方法を学びます。

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="ゲーム開発チュートリアル">}}


## **概要** 
オープンソースコミュニティは、毎分の通過とともに出現しています。クロスプラットフォームゲーム、モバイルゲーム、デスクトップゲームがあります。さまざまな種類のゲームには、アクションゲーム、アドベンチャーゲーム、ロールプレイングゲーム、スポーツゲーム、パズルゲーム、シミュレーションゲームなどがあります。したがって、これらのさまざまなゲームタイプはすべて、すべての年齢層のユーザーがこれらのゲームをプレイする傾向があるため、トラフィックを大きく後押ししています。
さらに、パンデミックは、世界中に住んでいる人々のライフスタイルに大きな変化をもたらしました。人々は今より多くの時間を持っています。すべてのオフラインアクティビティはオンラインになりました。したがって、彼らはエンターテインメントの場合に専門的な義務とビデオゲームを実行するためにオンラインソフトウェアを選択する傾向があります。これらすべての理由により、この業界は持続可能性とユーザーと開発者のサポートを獲得しています。最近では、[ビデオゲームプログラマー向けのHTML5ゲーム開発チュートリアル][1]、[オープンソースソフトウェアを活用するグローバルゲーム業界][2]、[GDEVELOPTION TUTORIAL for初心者向けゲーム開発]などのトピックについて書きました。 [3]。このゲーム開発チュートリアルでは、次のポイントについて説明します。
* **[gdevelopの探索を特徴][4]** 
* **[ゲームに取り組んでいる][5]** 
* **[結論][6]** 

## GDEVELOPの探索が特徴です {#features}

[GDEVELOP][7]は、オープンソースゲームビルディングプラットフォームです。これは非常に拡張可能であり、ユーザーが簡単にナビゲートできる論理インターフェイスを提供します。このフリーソフトウェアは、C ++、TypeScript、およびJavaScriptで記述されています。さらに、開発と展開に関して利用できる包括的なドキュメントがあります。すべてのソースコードはGitHubで入手できます。さらに、このゲームをソフトウェアを際立たせる多くの機能があります。いくつかの重要な機能を見てみましょう。
**Cross-Platform** ：このゲーム作成プラットフォームはマルチプラットフォームであり、MacOS、Linux、Windowsなどのほとんどすべての一般的なオペレーティングシステムに展開できます。
**オプションのエクスポート**：GDEVELOPにより、ユーザーはAndroid、iOS、およびWebをワンクリックして、開発されたゲームをエクスポートできます。ゲーム所有者はゲームにビデオ広告を表示でき、ADMOBのサポートで可能になります。
**リッチなゲームオブジェクト**：このオープンソースゲームメーカーは、粒子エミッターの助けを借りて、アニメーション、火災爆発、その他の効果を備えたスプライトなどの幅広いゲームオブジェクトを提供します。フォーマットされたテキスト、組み込みビデオ、および描画カスタムシェイプは、ゲームに目を引く効果をもたらすために利用できます。
**汎用性のある動作**：この基本的なゲーム開発記事では、ゲームオブジェクトにさまざまな動作を追加する方法を示します。使用可能な複数の動作があり、ユーザーは要件に応じてさらに開発できます。それはすべて、数回のマウスクリックの問題で起こります。
**Advanced Interface** ：このゲームデザインチュートリアルでは、この3Dゲームエンジンのユーザーインターフェイスが表示されます。ユーザーは、さまざまなゲーム要素やオブジェクトをドラッグアンドドロップできます。

## ゲームに取り組んでいます {#working}

ゲーム開発チュートリアルのこのセクションでは、GDEVELOPで基本的なゲーム開発を詳しく説明しています。さらに進む前に、マシンにgdeveloveをローカルにインストールしていることを確認してください。
このチュートリアル[GDEVELOPTチュートリアルの初心者向けのゲーム開発を開始する][3]にアクセスして、LocalHostでこのゲームエディターをセットアップする知識を得ることができます。
次に、編集者を開き、新しいプロジェクトを作成します。このチュートリアルでは、ゲームファイルを保存するためにGoogleドライブにフォルダーを作成します。 「新しいプロジェクトの作成」をクリックすると、新しいダイアログボックスが開き、「空のゲーム」オプションを選択して新しいゲームの構築を開始します。

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="ゲーム開発チュートリアル">}}

左側のプロジェクトメニューバーで、[ASを保存]をクリックしてゲームを保存します。
まず、シーンを追加しましょう。そのためには、「シーン」オプションをクリックして、以下の画像に示すこのチュートリアルの「最初のシーン」などの名前を変更します。

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" ゲームビルディングプラットフォーム">}}

シーンを作成した後、それを開いてオブジェクトを追加します。オブジェクトを追加するには、右側パネルに表示される「新しいオブジェクトの追加」をクリックします。最終的には、異なる資産を含む新しいダイアログボックスを開きます。ただし、「Red Ship」というオブジェクトを「ゲームに追加」を押して、ダイアログボックスを閉じてみましょう。

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" ゲーム開発ガイド">}}

次に、左側のサイドパネルにオブジェクトが表示されます。メイン画面にドラッグし、左上隅に表示されるボタンを押して、ゲームを起動します。したがって、下の画像に示すように、ゲームを新しいウィンドウに開きます。

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="ゲーム開発チュートリアル">}}

今まで、動作が追加されていないため、このオブジェクトをプレイすることはできません。それでは、このオブジェクトに動作を追加しましょう。そのためには、Shipオブジェクトをクリックして「オブジェクトの編集」を押します。新しいダイアログボックスを開き、[動作]タブに移動し、[トップダウンの動き]を選択し、「Apply」を押します。ここで、ゲームをプレビューすると、キーボードの矢印キーを使用して画面上で船のオブジェクトを移動できることがわかります。これで、船のオブジェクトが画面から外れていることに気付くでしょう。したがって、この問題を解決するには、オブジェクトを編集し、動作に移動します。 [オブジェクトに動作を追加]をクリックします。次に、「新しい動作を検索」に移動し、下の画像に示すように、検索バーで「画面上の滞在」動作を探します。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="gdevelop">}}

次に、それを選択してプロジェクトにインストールし、適用を押します。もう1つは、オブジェクトの中心点を調整することです。それでは、オブジェクトのプロパティにもう一度行き、下部に「ポイントの編集」が表示されます。次の画面に着地します。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="ゲームデザインのチュートリアル">}}

したがって、左上隅に表示されるマークをオブジェクトの中央にドラッグし、閉じて適用します。これで、ゲームをリニューアルすると、変更が表示されます。

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="ゲーム開発チュートリアル">}}


## 結論 {#結論}

これがこのゲーム開発チュートリアルの終わりです。うまくいけば、このブログ投稿がゲーム開発者に役立つでしょう。このチュートリアルにより、ゲームオブジェクトを使用して動作を追加することができました。将来、Containerize.comは、さらにオープンソースのビデオゲームデザインソフトウェアに関するブログ投稿とチュートリアル記事を公開します。したがって、定期的な更新については、[containerize.com][9]の[ゲーム開発ソフトウェア][8]カテゴリに関連してください。

## 探検
  * [gdevelop][7]
  * [godot][10]
  * [超大国][11]
  * [cocos creator][12]
  * [panda3d][13]



[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/ja/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
