---
title: "WordPressからGhostに移行するためのガイド| WordPress Ghost" 
seoTitle: "WordPressからGhostに移行するためのガイド| WordPress Ghost" 
description: "このチュートリアルは、WordPressからGhostに移行する方法に関するものです。既存のWordPress Webサイトから投稿やページをGhostに移行する方法を学びます。" 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "GhostとWordPressは、2つの主要なオープンソースコンテンツパブリッシングプラットフォームです。このチュートリアルでは、WordPressからGhostにコンテンツを移行する方法を学びます。" 
url: /ja/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## GhostとWordPressは、2つの主要なオープンソースコンテンツパブリッシングプラットフォームです。このチュートリアルでは、WordPressからGhostにコンテンツを移行する方法を学びます。

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="WordPressからGhostに移動します">}}


## 概要
過去には、[無料のCivicRM WordPress統合でリードを後押し] [1]、[談話フォーラムをWordPress] [2]などのトピックなどのトピックに関する多くの記事を発表しました。 Ghostは、新興のオープンソースブログプラットフォームです。これは、コンテンツパブリッシング用のnode.js CMSであり、使いやすいシンプルでクリーンなインターフェイスが付属しています。 WysiWygの編集の代わりにマークダウンに焦点を当てているため、初心者にとって素晴らしいプラットフォームです。 node.jsのパワーと速度は、ゴーストを非常に速くします。プラットフォームのシンプルさにより、多くのユーザーが他のプラットフォームから切り替えています。 WordPressはコンテンツ管理の最大のプラットフォームであるためです。
したがって、より多くのユーザー**は、WordPressからGhost **に移行します。メディアファイル、コメント、投稿などを含む多くのコンテンツがあります。WordPressからGhostにコンテンツを移行するのに役立つプラグインがあります。 Ghostを採用することの主な利点は、検索エンジンの最適化に焦点を当てていることです。このWordPress Ghostチュートリアルでは、公式のWordPressエクスポートプラグインを使用して、すべての移行ステップを通過します。
  *** [WordPressのbriedfイントロ] [3] **
  *** [ゴーストとは？] [4] **
  *** [要件] [5] **
  *** [プラグインを使用してwrodpressからコンテンツをエクスポート] [6] **
  *** [コンテンツを幽霊にインポート] [7] **
  *** [結論] [8] **

## ** WordPressのBRIEDFイントロ** {#WP}
[WordPress] [9]は、膨大な数のWebサイトを搭載した主要なオープンソースブログプラットフォームです。この無料のブログソフトウェアは、自己ホストされた多言語であり、多くの言語をサポートしています。さらに、WordPressの開発コミュニティは非常に活気があり、簡単に利用できる便利なプラグインの巨大なプールを開発しました。これらのプラグインは、ビジネスWebサイトのほぼすべてのユースケースに対応しています。さらに、PHPで記述されており、開発と展開に関する包括的なドキュメントが付属しています。すべてのソースコードはGitHubで利用できます。さらに、このブログプラットフォームは非常に拡張可能で構成可能であり、サードパーティのアプリケーションとの統合を提供します。ユーザーが要素をドラッグアンドドロップしてウェブサイトのルックアンドフィールを変更できる非常に論理的でわかりやすいダッシュボードがあります。

## **ゴーストとは？** {#Ghost}
[Ghost] [10]は、もう1つの人気のあるオープンソースブログプラットフォームです。これは、開発者やサイトの所有者が非常に採用している最も広く使用されているコンテンツパブリッシングプラットフォームの1つです。さらに、Ghostは非常にSEOフレンドリーで、組み込みのテーマ、フォーム、電子メールニュースレター、サブスクリプションが付属しています。この無料のブログソフトウェアはJavaScriptで記述されており、すべてのドキュメントは開発と展開に関して入手できます。

## 要件{#requirements}
WordPress Ghostチュートリアルのセクションでは、WordPressからGhostに移行するために必要な要件を確認します。 WordPressエクスポートプラグインを公式にすると、WordPressからGhostにコンテンツを簡単に移行できます。このチュートリアルでは、WordPressからGhostサイトにコンテンツをエクスポートする方法について説明します。したがって、WordPressとWordPress **エクスポートプラグイン**の動作インストールが必要です。

## WordPress {#Export}からのコンテンツのエクスポート
まず、プラグインをインストールする必要があります。次の手順に従って、プラグインをインストールしてください
  ***プラグイン**をクリックしてくださいサイドバーメニュー
  *[**新しい**を追加]をクリックし、右上隅の検索フィールドを使用して**ゴーストエクスポート**を検索します
  ***インストール**および**アクティブ化**「** Ghost Foundation **」によるプラグイン

{{< figure align=center src="images/ghost-activate-plugin.png" alt="WordPressのGhost Pluginをインストールしてアクティブにします">}}

  *プラグインがアクティブになったら、サイドメニューから**ツール**に移動します
  *[** SideBarメニュー]を使用してGhostにエクスポートします**をクリックします。
  * WordPressコンテンツをGhost用に準備する方法に関するガイドが提供されます。
  * Ghostはカテゴリの代わりにタグを使用するため、プラグインはカテゴリをタグに変換するのに役立ちます。
{{_LINE_37_}}
{{_LINE_38_}}
    次の手順は、WordPressサイトのコンテンツ構造を永久に変更します。この変更がわからない場合は、ツールの下で標準のWordPressエクスポートツールを使用してください>エクスポートして、すべてのコンテンツの完全なバックアップを作成してください。
{{_LINE_40_}}
{{_LINE_41_}}
  *サイドバーメニューで**インポート**に移動します
  *** Importer **を[インポーター]を実行してください**分類コンバーター**アイテムをインポートします。
  *チェックボックスを使用して、タグにインポートするカテゴリを選択して、ゴーストサイトに選択します。
  *次に、[カテゴリをタグに変換] **をクリックします**。
  *** SideBarメニューの**ツール**内で**へのエクスポートに戻ります。
  ***ゴーストファイルをダウンロード**ボタンをクリックします。すべてのコンテンツを含むzipファイルをダウンロードします。

## コンテンツをGhost {#import}にインポートする
WordPress Ghostチュートリアルのこのセクションでは、コンテンツをGhostにインポートする手順を実装します。
  *ゴースト管理者にログインし、**ラボ**ビューに移動します。
  *** [ファイル]ボタンをクリックします**インポートコンテンツ**オプションを選択し、エクスポートしたzipファイルを選択します
  ***インポート**をクリックします。その後、すべてのコンテンツがゴーストサイトにインポートされます。
現時点では、Ghostにはコメントシステムが組み込まれていません。最も人気のある代替品はdisqusです。

## 結論{#conclusion}
これにより、このブログ投稿の最後になります。このWordPress Ghostチュートリアルでは、ゴーストへの移行の準備ができているWordPressコンテンツを準備する方法を学びました。 Ghost Foundationによる公式Ghost Migration Pluginを使用して、移行を実行しました。さらに、このブログ投稿は、必要なすべての手順をカバーしているため、WordPressからGhostに移行しようとしている場合に確実に役立ちます。さらに、以下の「探索」セクションに記載されている多くのオープンソースコンテンツパブリッシングプラットフォームとチュートリアル記事があります。ただし、これらのオープンソースブログプラットフォームはどちらも、ビジネスウェブサイトのニーズを満たすためにエンタープライズレベルの機能を提供するトップの主要なソフトウェアです。
最後に、[containerize.com] [11]は、さらなるオープンソースソフトウェアに関する新しいブログ投稿を書いています。したがって、定期的な更新のために[this] [12]プラットフォームとの接続を維持してください。

## 探検
次のリンクが関連する場合があります。
  * [WordPress] [9]
  * [Jekyll] [13]
  * [談話] [14]
  * [ゴースト] [10]
  * [Docker ComposeでWordPressをDockerizeする方法] [15]
  * [PagspeedとSEOを改善するためにWordPressでGZIP圧縮を有効にする方法] [16]
  * [無料のCivicRM WordPress統合でリードを後押し] [1]
  * [WordPressとOsticketを使用したチケットシステムを自動化] [17]
  * [談話フォーラムをWordPressと統合する方法] [2]
  * [トップ7 SEOブログをフォローしてウェブサイトの検索トラフィックを増やす] [18]
  * [WordPressとGatsbyでWebサイトを構築する方法] [19]
[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
