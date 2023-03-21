---
title: "nginxのGZIP圧縮を使用してウェブサイトを最適化する方法" 
seoTitle: "nginxのGZIP圧縮を使用してウェブサイトを最適化する方法" 
description: "この記事では、NginxのGZIP圧縮を介してファイルサイズを削減することにより、Webサイトの転送速度を最適化する方法について説明します。" 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "このチュートリアルは、NGINXのGZIP圧縮を使用してファイルサイズを削減することにより、Webサイトのパフォーマンスを最適化し、高速にする方法について説明します。" 
url: /ja/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## このチュートリアルは、NginxのGZIP圧縮を使用してファイルサイズを削減することで、Webサイトのパフォーマンスを最適化し、高速にする方法についてガイドします。

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="NginxでGZIP圧縮を有効にする方法">}}

この記事は、Nginxに関する一連のチュートリアルを継続しています。これまで、Nginxをロードバランサーとして使用する方法、Nginxを逆プロキシとして使用する方法について説明しました。そして今、このチュートリアルは、「NginxのGZIP圧縮を使用してWebサイトを最適化する方法」という要求の厳しい質問をカバーしています。このチュートリアルでは、nginxでGZIP圧縮を有効にする方法を段階的にガイドします。それでは、始めましょう！
  * [圧縮によるウェブサイトの最適化][1]
  * [GZIP圧縮とは？][2]
  * [GZIP圧縮はどのように機能しますか？][3]
  * [nginxでgzip圧縮を有効][4]
  * [GZIP圧縮を確認][5]
  * [結論][6]

## Compressionによるウェブサイトの最適化 {#optimize}
ウェブサイトのパフォーマンスは、多くの要因に依存します。部分的に依存する要因の1つは、ユーザーのブラウザがサーバーからダウンロードする必要があるすべてのファイルのサイズです。これらの送信されたファイルのサイズを縮小または圧縮すると、ユーザーにとってWebサイトの読み込みが速くなります。また、メーター接続で帯域幅の使用を支払う場合に備えて、ウェブサイトの請求書を減らすことができます。したがって、圧縮はあなたのウェブサイトの最適化において非常に重要な役割を果たすことができます。
Googleや他の検索エンジンは、Webサイトのユーザーエクスペリエンス（UX）がランキングアルゴリズムの重要な要素であると考えています。ウェブサイトを改善して最適化することがより重要になりました。注意を払う最も重要な要素の中には、ページ速度と読み込み時間があります。また、ウェブサイトの速度とパフォーマンスを向上させる最速かつ最も簡単な方法は、WebサイトでGZIP圧縮を可能にすることです。

## GZIP圧縮とは何ですか？   {#what-gzip}
GZIPは、ファイルの圧縮と減圧に使用される**ファイル形式およびソフトウェアアプリケーション**です。 Webサーバーまたはその他のソフトウェアは、ユーザーのブラウザに送信される前に、データファイルを圧縮するためにGZIP圧縮を使用します。これにより、ファイルのダウンロード時間が短縮され、ウェブサイトが高速になります。すべての最新のブラウザは、GZIP圧縮をサポートしています。
また、ファイルとフォルダーの圧縮を有効にする前に、WebサーバーでGZIP圧縮を有効にする必要があることに注意することも重要です。まもなく、NginxでGZIP圧縮を有効にする方法を確認します。

## GZIP圧縮はどのように機能しますか？   {#how-gzip}
最も人気のある圧縮法であるGZIPは、Webサーバーとブラウザで使用され、インターネット上で送信されるコンテンツを圧縮および解凍します。主にコードファイルとテキストファイルで使用されているため、GZIPはJavaScript、CSS、およびHTMLファイルのサイズを最大90％削減できます。
デフォルトでは、GZIP圧縮は画像やビデオを圧縮しません。これが、Google PagesSpeed InsightsなどのほとんどのWebサイト速度テストツールがGZIP圧縮を可能にすることを強くお勧めする理由です。
WebサーバーがWebページのリクエストを受信すると、Webサーバーはリクエストのヘッダーをチェックして、ブラウザがGZIPをサポートしているかどうかを確認します。その場合、サーバーはGZIPを適用する前にページのマークアップを生成します。 GZIPはHTMLマークアップを圧縮データに変換し、エンドユーザーに配信されます。エンドユーザーが圧縮データを受信すると、ブラウザはそれを解凍します。

## nginxのgzip圧縮を有効にする {#enablegzip}
nginx gzip構成を変更するには、「_vi_」またはお気に入りのテキストエディターでメインnginx構成ファイルを開きます。
```
sudo vi /etc/nginx/nginx.conf
```
_GZIP_設定セクションを見つけます。これは次のようになります。
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
ご覧のとおり、GZIPは_GZIPオンでデフォルトで有効になっています; _しかし、GZIP設定は他にもコメントされています。
_GZIP_TYPES_設定を有効にして、圧縮するファイルタイプで圧縮を有効にすることができます。例えば
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Nginxを再起動して、新しい設定を有効にします。

## gzip圧縮を確認 {#verify}
GZIP圧縮を有効にしたので、それを確認します。
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
そのFiletypeに対して圧縮がすでに有効になっているため、応答は同じままです。
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## 結論 {#conclusion}
この記事では、Nginx GZIPモジュールを使用してファイル転送をスピードアップできることを学びました。 GZIPモジュールを使用してNginxでGZIP圧縮を有効にする方法を段階的に示しました。 [GZIPモジュール][7]の公式ドキュメントには、見たいと思う他の構成ディレクティブがリストされています。このチュートリアルがあなたのウェブサイトのパフォーマンスと速度を最適化するのに役立つことを願っています。

## 探検
  * [ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法][8]
  * [nginxをリバースプロキシとしてセットアップして構成する方法][9]

  
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
