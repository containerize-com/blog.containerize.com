---
title: "WordPressサイトにWeb会議ソフトウェアをインストールします" 
seoTitle: "WordPressサイトにWeb会議ソフトウェアをインストールします" 
description: "このガイドに従って、オープンソースのWeb会議ソフトウェアBigBlueButtonについて学びます。 WordPressにBigBlueButtonプラグインをインストールする方法を調べましょう。" 
date: Thu, 19 Jan 2023 20:06:03 +0000
author: muhammadmustafa
summary: "WordPressベースのビジネスWebサイトにBigBlueButtonプラグインをインストールして、仮想会議を実施します。無料でオープンソースで、幅広い機能を提供しています。" 
url: /ja/install-a-web-conferencing-software-on-a-wordpress-site/
categories: ['Blogging', 'Video Conferencing Software']
---

## WordPressベースのビジネスWebサイトにBigBlueButtonプラグインをインストールして、仮想会議を実施します。無料でオープンソースで、幅広い機能を提供しています。

{{< figure align=center src="images/Install-a-Web-Conferencing-Software-on-a-WordPress-Site.png" alt="WordPressサイトのWeb会議ソフトウェア">}}


## 概要
[オープンソースビデオ会議ソフトウェア][1]のカテゴリにある別のブログ投稿があります。電子メールやビデオ通話など、リモート通信には特定の方法があります。ただし、対面の会議は、メールやチャットよりも常に効果的で便利です。この急成長している世界では、人々は本当に時間と空間を気にしません。現在、小規模/巨大な組織は**リモートコラボレーションツール**を採用して仮想会議を実施しています。ビデオ会議を実施するための強力なツールを提供する多くのWebミーティングプラットフォームがありますが、それらはすべて支払われます。したがって、このニーズを感じて、オープンソースコミュニティは、**Web会議サービス**のためのいくつかのエンタープライズレベルのソリューションを開発しました。さらに、これらの無料のプラットフォームは巨大な市場を紹介し、活気のある開発者のコ​​ミュニティに支えられています。このブログ投稿では、[WordPress][2]サイトにWeb会議ソフトウェア**をインストールする方法**を学びます。
この記事では、次のポイントについて説明します。
* [**bigbluebuttonとは？**][3]
* [**WordPressの簡単なイントロ**][4]
***[WordPressにBigBlueButtonプラグインをインストールする方法？][5]**

##**bigbluebuttonとは？**{#what-is-bigbluebutton}
[BigBlueButton][6]は、オープンソースの無料**ビデオコラボレーションソフトウェア**で、エンタープライズレベルの機能が膨大なスタックです。このオープンソースソフトウェアは非常に拡張可能であり、WordPress、[Redmine][7]、[Schoology][8]、[Drupal][9]、Canvasなどの多くの一般的なアプリケーションとの統合を提供します。さらに、共有ホワイトボード、パブリック/プライベートメッセージ、HDオーディオ、電子ハンドレイジング、リッチなプレゼンテーションツールを提供します。さらに、**BigBlueButton**はHTML5がサポートされており、すべての人気のあるWebブラウザーでうまく機能します。
さらに、この**Web会議ソフトウェア**には、巨大で生きている開発者コミュニティがあります。 7.8K星と5.8Kフォークを備えた[Github Repo][10]には非常に良い統計があります。 BigBlueButtonは、JavaやRubyなどの他の言語からの入力とともにJavaScriptで書かれています。実際、開発者は、開発、展開、および使用に関する包括的なドキュメントを見つけることができます。そのため、この自己ホストされたソフトウェアをローカルサーバーまたはクラウドサーバーに簡単に設定できます。

##**WordPressの簡単なイントロ**{#a-brief-intro-to-wordpress}
[WordPress][2]は、Webサイトソフトウェアのカテゴリのトップ**オープンソースブログプラットフォーム**の1つです。このオープンソースソフトウェアは、初心者レベルのWeb開発者でさえサイトビルディングを実行して起動することができるユーザーフレンドリーです。さらに、WordPressは高度に構成可能であり、ビジネス要件に従ってカスタマイズできます。とりわけ、多数のプラグインを見つけることができる巨大な[MarketPlace][11]があります。
この**ブログソフトウェア**には、自己ホスティング機能が備わっており、複数の言語を利用できるように完全にサポートされています。さらに、[github][12]リポジトリには非常に良い統計があり、ソースコードをダウンロードして簡単にセットアップできます。さらに、WordPress Webサイトに機能のプラグインをインストールできます。実際、あらゆるカテゴリに属する​​サイトのプラグインを見つけることができます。これは主にPHPで書かれており、開発、展開、および使用に関する完全な指示を見つけることができます。

##**WordPressにBigBlueButtonプラグインをインストールする方法？
このセクションでは、WordPressサイト**にWeb会議ソフトウェアをインストールする方法を示します。さらに、BigBlueButtonプラグインももう少し検討します。さらに移動する前に、マシンにWordPressをインストールしていることを確認し、ビジネスWebサイトを稼働させてください。
WordPressをインストールしていない場合は、この[リンク][2]にアクセスしてください。完全なインストール手順を見つけることができます。
WordPressでBigBlueButton [プラグイン][13]のインストールプロセスを開始しましょう。
WordPressダッシュボードに移動し、「プラグイン」オプションを開き、「新規追加」を押します。検索バーにBigBlueButtonを書くと、下の画像に示すように、検索の最初の場所を示すプラグインがあります。
{{_LINE_29_}}
次に、「今すぐ」ボタンを押して、この**Web会議ソフトウェア**をインストールし、「アクティブ化」を押してプラグインをアクティブにします。アクティベーションが生きていると、このビデオ会議ソフトウェアの使用を開始できます。前に進むには、下の画像に示すように、ウィンドウの左側のサイドパネルにメニュー項目の「部屋」を新しい追加することができます。

{{< figure align=center src="images/bigbluebutton-plugin-1024x516.png" alt="BigBlueButtonプラグイン">}}

そのため、仲間とビデオミーティングを行うことができる部屋を作成および公開することで、会議室を作成できます。さらに、背景色を変更してブランドロゴをアップロードすることにより、部屋のルック＆フィールをカスタマイズできます。下の画像では、会議を作成したことがわかり、会議室のユーザーインターフェイスは、ライブチャットや共有メモなどの機能が非常に豊富であることがわかります。

{{< figure align=center src="images/bigbluebutton-plugin-ui-1024x532.png" alt="BigBlueButtonプラグインUI">}}


## ラッピング
これにより、このブログ投稿の最後になります。 WordPressサイトに**Web会議ソフトウェア**をインストールする方法を学んだことを願っています。さらに、会議室の作成プロセスも経験しました。**BigBlueButtonプラグイン**は、仮想対面会議の実施に関しては多くのことを提供します。この**Web会議ソフトウェア**はオープンソースであるため、ビジネス要件を満たすためにカスタマイズできます。さらに、「参照」セクションには、本当に興味深い記事がいくつか見つかります。
最後に、[containerize.com][14]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。したがって、定期的な更新については、[[ビデオ会議ソフトウェア][1]および[ブログプラットフォーム][15]カテゴリ][16]に連絡してください。さらに、ソーシャルメディアアカウント[Facebook][17]、[LinkedIn][18]、および[Twitter][19]でフォローできます。

## 質問する
[フォーラム][20]での質問や質問についてお知らせください。

## FAQ
**WordPressサイトにビデオ通話を追加するにはどうすればよいですか？**
このBigBlueButton [Plugin][13]を使用して、[WordPress][2]サイトにWeb会議ソフトウェアを追加できます。このソフトウェアはオープンソースであり、対面のビデオ通話を確立するための多くの機能を提供します。
**WordPressにBigBlueButtonを追加するにはどうすればよいですか？**
この[リンク][5]に従って、[WordPress][2]でインストールとセットアッププロセスを学習します。

## 参照
  * [jitsiとは何ですか？
  * [2021年のトップ5オープンソースビデオ会議ソフトウェア][22]
  * [オープンソースJitsi Meetをセットアップするためのステップバイステップガイド][23]

  
[1]: https://products.containerize.com/video-conferencing/
[2]: https://products.containerize.com/blogging/wordpress/
[3]: #What-is-BigBlueButton
[4]: #A-brief-intro-to-WordPress
[5]: #How-to-install-BigBlueButton-plugin-in-WordPress
[6]: https://products.containerize.com/video-conferencing/bigbluebutton/
[7]: https://products.containerize.com/project-management/redmine/
[8]: https://app.schoology.com/login
[9]: https://products.containerize.com/content-management/drupal/
[10]: https://github.com/bigbluebutton/bigbluebutton
[11]: https://wordpress.org/plugins/
[12]: https://github.com/WordPress/WordPress
[13]: https://wordpress.org/plugins/video-conferencing-with-bbb/
[14]: https://www.containerize.com/
[15]: https://products.containerize.com/blogging/
[16]: https://products.containerize.com/social-network-platforms/
[17]: https://web.facebook.com/containerize
[18]: https://www.linkedin.com/company/containerize/
[19]: https://twitter.com/containerize_co
[20]: https://forum.containerize.com/
[21]: https://blog.containerize.com/blogging/what-is-jitsi-meet-wordpress-plugin-and-how-to-install-it/
[22]: https://blog.containerize.com/video-conferencing-software/top-5-open-source-video-conferencing-software-of-2021/
[23]: https://blog.containerize.com/video-conferencing-software/how-to-set-up-open-source-jitsi-meet/
