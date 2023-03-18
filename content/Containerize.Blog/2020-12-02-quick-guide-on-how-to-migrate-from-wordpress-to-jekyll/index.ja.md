---
title: "WordPressからJekyllに移行する方法" 
seoTitle: "WordPressからJekyllに移行する方法" 
description: "このチュートリアルでは、迅速かつ簡単なステップでWordPressからJekyllにサイトを移行する方法を学びます。始めましょう！" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "このチュートリアルでは、WordPressからJekyllにWebサイトを移行し、無料でGithubでホストする方法を学びます" 
url: /ja/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## このチュートリアルでは、WordPressからJekyllにウェブサイトを移行し、無料でGithubでホストする方法を学びます

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="JekyllへのWordPress">}}

Jeykllは、オープンソースの静的サイトジェネレーターです。それはあなたのプレーンテキストを静的なWebサイトやブログに変換します。お気に入りのマークアップ（Markdown、Liquid、HTML / CSS）言語で書かれたテキストを撮影し、レイアウトを使用して静的Webサイトを作成します。 Jekyllはブログの認識であり、パーマリンク、カテゴリ、ページ、投稿、カスタムレイアウトはすべて一流の市民です。 Jekyllの最大の利点の1つは、Githubページで静的Webサイトをホストし、Webサイトやブログを無料で実行できることです。したがって、Jekyllの移行へのWordPressは、ウェブサイトのパフォーマンスとスピードを向上させるのに役立ちます。
このブログ投稿では、既存のWebサイトまたはブログをWordPressからJekyllに移行する方法について説明します。それでは、始めましょう！
  *** [なぜ移動するのか？] [1] **
  *** [インストール] [2] **
  *** [WordPressの投稿とページをインポート] [3] **
  *** [githubページで展開] [4] **
  *** [結論] [5] **

## なぜ移行するのですか？ {#なぜ}
Jekyllでは、データベースの相互作用がないため、100/100 [Lighthouse Score] [6]を取得できます。また、すべてのコンテンツは、前処理され、HTMLファイルとして保存されます。そして、Jekyllは最小限のHTTPリクエストのみを作成します。したがって、それは非常に速いです。

## インストールとセットアップJekyll {#install}
ジキルはルビーで書かれています。そのため、最初にコンピューターにインストールする必要があります。このガイドは、既にRubyがコンピューターにインストールされていることを前提としています。そうでない場合は、[公式ガイド] [7]に従うことができます。
まず、「** gem **」コマンドを使用して、「** jekyl **」と「** bundler **」の宝石を使用します。コマンドラインを開き、次のコードを実行します。
```
gem install jekyll bundler
```
次に、次のコマンドを実行して、新しいサイトを作成します。これにより、** myblog **フォルダーが作成されます。
```
jekyll new myblog
```
インストールしたら、サイトを構築して、ローカルサーバーで利用できるようにすることができます。
```
bundle exec jekyll serve
```
サイトはhttp：// localhost：4000で入手できます。また、フォルダーに「** _サイト**」フォルダーを生成します。これは、サイトの最終出力です。

## WordPressページと投稿をインポート{#import}
WordPress用の非公式プラグインも利用できますが、このチュートリアルの公式方法に従います。 WordPess Exporterプラグインを試してみたい場合は、[こちらに行く] [8]を試してみてください。
自己ホストのWordPress Webサイトから投稿をインポートするには、端末に次のコマンドを実行します。
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
これは、投稿とページのデータとコンテンツのみをインポートします。この輸入業者は、投稿のみを変換し、YAMLの前面を作成します。レイアウト、スタイリング、または外部ファイル（画像、CSSなど）をインポートしません。

## ** githubページでの展開** {#deploy}
これまでのところ、Jekyllブログをローカルに作成しました。これで、Githubに展開します。まず、[git] [9]を使用してサイトを制御する必要があります。サイトのフォルダーで次のコマンドを実行します。
```
git init
git add .
git commit -m "Initial Commit"
```
Jekyllをインストールするときは、少なくとも次のコンテンツでルートに「**。Gitignore**」ファイルを自動的に作成する必要があります。
次に、githubにログインして、新しいリポジトリyourname.github.ioを作成します
次に、リポジトリのHTTPS URLをコピーします。

{{< figure align=center src="images/github-img.png" alt="github https url">}}

次に、リモートリポジトリを追加してコードをプッシュします。
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
終わり！あなたのサイトはyourname.github.ioで利用できるようにする必要があります

## 結論{#conclusion}
この記事では、Jekyllサイトで静的なブログを構築する方法を学びました。次に、WordPressからJekyllに投稿やページをエクスポートする方法を学びました。そして最後に、最終サイトをGitHubページに展開しました。
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
