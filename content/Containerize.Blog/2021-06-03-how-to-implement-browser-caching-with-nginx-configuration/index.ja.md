---
title: "nginx構成でブラウザキャッシュを実装する方法" 
seoTitle: "nginx構成でブラウザキャッシュを実装する方法" 
description: "ウェブサイトのロードが速いほど、訪問者が滞在する可能性が高くなります。このチュートリアルでは、nginx構成でブラウザキャッシュを実装します。" 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "ウェブサイトのロードが速いほど、訪問者が滞在する可能性が高くなります。この記事では、NGINX構成でブラウザキャッシュを実装する方法について説明します。" 
url: /ja/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## ウェブサイトのロードが速くなるほど、訪問者が滞在する可能性が高くなります。この記事では、NGINX構成でブラウザキャッシュを実装する方法について説明します。

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="nginx構成でBrowsRキャッシュを実装する方法">}}

nginxのチュートリアルシリーズでは、[nginxをロードバランサーとして使用する方法][1]、[nginxをリバースプロキシとして構成][2]、[nginx]で複数のPHPバージョンを使用し、[3]、および[htaccess rewriteを変換します。 Nginxの規則は、指令を書き直します][4]。今日の記事では、ブラウザのキャッシュを活用することで企業がユーザーのエクスペリエンスを向上させるのに役立つ非常に重要なトピックを取り上げています。このチュートリアルでは、NGINXのヘッダーモジュールを使用してNGINX構成を使用してブラウザキャッシュを実装する方法について説明します。始めましょう！
* **[ブラウザキャッシュをレバレッジ][5]** 
* [ **nginxヘッダーモジュール** ][6]
* [ **e-tage and if-none-match** ][7]
* [ **nginx構成でブラウザキャッシュをレバレッジします** ][8]
* [ **結論** ][9]

## ブラウザのキャッシュを利用する {#browser-caching}

ウェブサイトのロードが速いほど、訪問者がウェブサイトにとどまる可能性が高くなります。多くの画像とインタラクティブコンテンツを備えたWebサイトは、背景にロードされており、Webサイトが複雑なタスクを開きます。サーバーから1つずつ多くの異なるファイルを要求することで構成されています。これらのリクエストの量を最小化することは、ウェブサイトをスピードアップする1つの方法です。
Webサイトのパフォーマンスを改善する1つの方法は、_ Leverarging Browser caching_です。ブラウザキャッシュは、ページ速度を上げるためのキャッシュメカニズムに大きな役割を果たします。 Webサイトに使用されるCSS、JS、JPEG、PNGなどの静的ファイルは、将来のアクセスのために訪問者のコンピューターに保存できます。訪問者がウェブサイトで新しいページに遭遇するたびに、上記のファイルに提供されたサーバーの代わりに訪問者のコンピューターからアクセスできます。これにより、ページの負荷速度が大幅に向上します。

## Nginxのヘッダーモジュール {#header-module}

_ngx \ _http \ _headers_module_モジュールを使用すると、「_expires_」および「_c​​ache-control_」ヘッダーフィールド、および任意のフィールドを応答ヘッダーに追加できます。ヘッダーモジュールを使用して、これらのHTTPヘッダーを設定できます。ヘッダーモジュールはコアNginxモジュールです。つまり、使用するには個別にインストールする必要はありません。
例の構成は次のようになります：
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## eタグとif-none-match {#etage}

さまざまな拡張機能を持ついくつかのテストファイルがあると仮定しましょう。デフォルトでは、すべてのファイルには同じデフォルトのキャッシュ動作があります。次のコマンドを使用してファイルの応答ヘッダーを確認して、ローカルNginxサーバーからファイルを要求し、応答ヘッダーを表示します。
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
2行目から最後の行には、_ETAG_ヘッダーがあります。これには、要求されたファイルのこの特定の改訂の一意の識別子が含まれています。最後の_CURL_コマンドを繰り返し実行すると、まったく同じETAG値が見つかります。
Webブラウザーを使用する場合、_ETAG_値は保存され、ユーザーがページを再表示するときに_IF-None-Match_リクエストヘッダーでサーバーに送信されます。
次のコマンドを使用して、これをコマンドラインでシミュレートできます。
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
一意の識別子に注意してください。以前の_CURL_コールから得た応答値と一致する必要があります。今回は応答が異なります。
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
今回は、Nginxは **304が変更されていない** で応答します。ネットワーク上にファイルを送信しません。代わりに、既にローカルでダウンロードしているファイルを再利用できることをブラウザに指示します。これは、ネットワークトラフィックを削減するため有用です。しかし、ブラウザはまだHTTP呼び出しを行い、サーバーから応答を取得する必要がありますが、時間がかかります。

## Nginx構成でブラウザキャッシュをレバレッジします {#nginx-configuration}

前の例では、eタグとif-none-matchがネットワークトラフィックを削減するのにどのように役立つかを説明しました。しかし、「ETAG」の問題は、ブラウザが常にキャッシュされたファイルを再利用できるかどうかを尋ねるリクエストをサーバーに送信することです。そして、これにはまだリクエストを行い、応答を受け取るのに時間がかかります。
Nginxのヘッダーモジュールの助けを借りて、サーバーを明示的に尋ねることなく、一部のファイルをローカルにキャッシュするためのブラウザを作成します。
nginx構成ファイルに次の3行を追加して、nginxの静的コンテンツをキャッシュします
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
最初の行は、Nginxに30日間（30D）にクライアントブラウザのコンテンツをキャッシュするよう指示します。この期間の後、ユーザーからの新しいリクエストは、クライアントブラウザーからのキャッシュの再検証と更新が行われます。
上記の行を_location_、_server_、または_http_ブロックに配置できます。
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
それらをロケーションブロックに配置すると、その場所が提供するコンテンツのみがキャッシュされます。上記の場合、 / static / to / static /のみがキャッシュされます。
特定のファイルタイプをキャッシュする場合は、ロケーションブロックを使用してそうすることができます。
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
上記の例では、JS、JPG、CSSなど、さまざまなファイルタイプをキャッシュしています。
同様に、ロケーションブロックの前に_server_ブロックにキャッシュ構成を配置できます。この場合、このサーバーからのすべての応答はキャッシュされます。または、_HTTP_ブロックに配置することもできます。この場合、NGINX構成ファイルによってサポートされるすべてのサーバー要求がキャッシュされます。

## 結論 {#conclusion}

Nginxのヘッダーモジュールを使用して、任意のヘッダーを応答に追加できますが、キャッシュコントロールヘッダーを適切に設定することは、最も有用なアプリケーションの1つです。これは、特にモバイルキャリアネットワークのようなレイテンシが高いネットワーク上のユーザーにとって、ウェブサイトのパフォーマンスを改善するのに役立ちます。このチュートリアルでは、NGINX構成でブラウザキャッシュを活用する方法を学びました。これがあなたのウェブサイトでのユーザーのエクスペリエンスを向上させるのに役立つことを願っています。

## 探検
  * [ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法][3]
  * [nginxをリバースプロキシとしてセットアップして構成する方法][2]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
