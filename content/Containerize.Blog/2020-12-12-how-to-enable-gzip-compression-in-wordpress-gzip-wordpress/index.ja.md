---
title: "WordPressでGZIP圧縮を有効にする方法| gzip wordpress" 
seoTitle: "WordPressでGZIP圧縮を有効にする方法| gzip wordpress" 
description: "WordPressでGZIP圧縮を有効にしてWebサイトをスピードアップしますか？このブログ投稿では、WordPressでの圧縮を有効にする方法を学びます。" 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "ページの速度と読み込み時間は、検索エンジンのランキングを改善するための重要な要素です。 GZIP圧縮はそれを実現し、競争力を提供することができます。" 
url: /ja/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## ページの速度とロード時間は、検索エンジンでのランキングを改善するための重要な要素です。 GZIP圧縮はそれを実現し、競争力を提供することができます。

{{< figure align=center src="images/Asset-1.png" alt="GZIP圧縮を有効にします">}}


## 概要
Googleや他の検索エンジンは、Webサイトのユーザーエクスペリエンス（UX）がランキングアルゴリズムの重要な要素であると考えています。ウェブサイトを改善して最適化することがより重要になりました。注意を払う最も重要な要素の中には、ページ速度と読み込み時間があります。また、サイトの速度とパフォーマンスを改善する最速かつ最も簡単な方法は、WebサイトでGZIP圧縮を可能にすることです。 WebホストがGZIP圧縮を自動的に有効にする可能性があります。そうでない場合は、この重要なタスクを自分で実行する必要があります。
この記事では、WordPressでGZIP圧縮を簡単に有効にする方法を正確に示します。始めましょう！
  *[** GZIP圧縮とは何ですか？][1]
  *[** GZIP圧縮はどのように機能しますか？**][2]
  *** [GZIP圧縮が有効になっているかどうかを確認する方法？][3] **
  *** [WordPressでGZIP圧縮を有効][4] **
  *** [結論][5] **

## GZIP圧縮とは何ですか？ {#何}
GZIPは**ファイル形式であり、ファイルの圧縮と減圧に使用されるソフトウェアアプリケーション**です。 Webサーバーまたはその他のソフトウェアは、ユーザーのブラウザに送信される前に、データファイルを圧縮するためにGZIP圧縮を使用します。これにより、ファイルのダウンロード時間が短縮され、ウェブサイトが高速になります。すべての最新のブラウザは、GZIP圧縮をサポートしています。
また、ファイルとフォルダーの圧縮を有効にする前に、WebサーバーでGZIP圧縮を有効にする必要があることに注意することも重要です。まもなく、WebサーバーがGZIPを有効にしているかどうかを確認する方法を確認します。

## GZIP圧縮はどのように機能しますか？ {#仕事}
最も人気のある圧縮法であるGZIPは、Webサーバーとブラウザで使用され、インターネット上で送信されるコンテンツを圧縮および解凍します。主にコードファイルとテキストファイルで使用されているため、GZIPはJavaScript、CSS、およびHTMLファイルのサイズを最大90％削減できます。デフォルトでは、GZIP圧縮は画像やビデオを圧縮しません。そのためには、WordPressサイトのWebの画像を最適化する必要があります。これが、Google PagesSpeed InsightsなどのほとんどのWebサイト速度テストツールがGZIP圧縮を可能にすることを強くお勧めする理由です。
WebサーバーがWebページのリクエストを受信すると、Webサーバーはリクエストのヘッダーをチェックして、ブラウザがGZIPをサポートしているかどうかを確認します。その場合、サーバーはGZIPを適用する前にページのマークアップを生成します。 GZIPはHTMLマークアップを圧縮データに変換し、エンドユーザーに配信されます。エンドユーザーが圧縮データを受信すると、ブラウザはそれを解凍します。

## ** GZIP圧縮が有効になっているかどうかを確認する方法？** {#verify}
Webホストは、デフォルトでWordPressでの圧縮を可能にする場合があります。ただし、これは必ずしもそうではありません。 Chrome ’DevToolsを使用して既にGZIP圧縮を有効にしているかどうかを確認できます。
Chromeブラウザでサイトを開き、ページの任意の場所を右クリックして、**を選択して**を選択して**開発者ツールを開きます**。
次に、**ネットワーク**タブに移動し、[名前]セクションからWebサイトのメインURLをクリックします。 **ヘッダー**タブを選択し、下にスクロールして**応答ヘッダー**セクションを見つけます：

{{< figure align=center src="images/gzip-determine.gif" alt="コンテンツエンコーディングを確認します">}}

そこで、GZIP圧縮が有効になっているかどうかがわかります。

## WordPressでGZIP圧縮を有効にする{#Enable}
** WordPress GZIP圧縮がまだ有効になっていないと判断した場合、**、実行するために使用できる複数の方法があります。最も簡単な方法は、[WP Rocket][6]、[WP Super Cache][7]、または[W3 Total Cache][8]などのWordPressプラグインを使用することです。ただし、.htaccessファイルまたはnginx構成を更新することで、サーバーレベルでこれを手動で実行できます。

.htaccessファイルを編集して###
WordPress GZIP圧縮を有効にする最も一般的な方法の1つは、_.htaccess_ファイル**を**編集することです。ただし、これには何かを壊すリスクが含まれます。これは敏感なサーバーファイルであり、1つの間違った動きが多くの問題を引き起こす可能性があります。
リスクを減らすために、変更を加える前に、元のファイル**のコピーを**保存するようにしてください。 _.htaccess_ファイルは、ウェブサイトの**ルートフォルダー**にある必要があります。 _.htaccess_を開いたら、「#begin wordpress」と `#end wordpress`タグでマークされたセクションの下に次のコードを追加します
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
**ファイル**を保存し、サイトのサーバーにアップロードします。完了したら、上記のようにChromeのDevtoolsを使用してGZIPが有効になっているかどうかを確認してください。

## nginxでGZIP圧縮を有効にします
**コンプレッションを有効にする**、onパラメーターに** gzip **ディレクティブを含めます。 ** gzip ** on;デフォルトでは、** nginx **は、MIMEタイプテキスト/HTMLでのみ応答を圧縮します。他のMIMEタイプで応答を圧縮するには、GZIP_TYPESディレクティブを含め、追加のタイプをリストします。
_nginx.conf_ファイル**を開き、次のコードを追加することにより、WordPressでGZIP圧縮を有効にすることができます。
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## 結論{#conclusion}
これは、このGZIP WordPressチュートリアルの終わりです。スピードとパフォーマンスのためにウェブサイトを最適化する方法はたくさんあります。このGZIP WordPressチュートリアルでは、GZIP圧縮、GZIP圧縮の重要性、およびそのインストール手順を経験しました。さらに、以下の「探索」セクションに記載されている多くの関連リンクがあります。
最後に、[containerize.com][9]は、さらなるオープンソース製品に関する記事を書いています。したがって、定期的なニュースと更新については、[ブログ][10]カテゴリに連絡してください。

## 探検
  * [マトモ][11]
  * [もっともらしい][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Docker ComposeでWordPressをDockerizeする方法][15]
  * [無料のビジネス分析ツールがあなたのビジネスをどのように支援するか][16]
  * [2021年のトップ5オープンソースビジネスインテリジェンスツール][17]
  * [WordPressにプラグインをインストールする方法|バニラフォーラム][18]
  * [無料のCivicRM WordPress統合でリードを後押し][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
