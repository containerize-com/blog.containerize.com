---
title: "htaccessの書き換えルールをnginxに書き換える方法指令の書き換え" 
seoTitle: "htaccessの書き換えルールをnginxに書き換える方法指令の書き換え" 
description: "Nginxは.htaccessの書き換えルールをサポートしていないため、開発者はこれらのルールをNginxの書き換え指令に変換する必要があります。この変換の実行方法を学びましょう。" 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "NginxはHTACCESSの書き換えルールをサポートせず、開発者はこれらのルールをNGINXの書き換え指令に変換する必要があります。この変換を行う方法を学びましょう。" 
url: /ja/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## NginxはHTACCESSの書き換えルールをサポートせず、開発者はこれらのルールをNGINXの書き換え指令に変換する必要があります。この変換を行う方法を学びましょう。

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt=".htaccessを変換して、ルールをNginxディレクティブに書き換えます">}}

前回のチュートリアルでは、[ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法][1]を学びました。 Apacheは最も人気のあるWebサーバーの1つですが、最近、NginxはApacheの競争相手としての地位を確立しています。しかし、NginxはHTACCESSの書き換えルールをサポートしていません。したがって、この記事では、htaccessの書き換えルールをNginxの書き換え指令に変換する方法を学びます。始めましょう！
  ***[nginxの書き換えルール][2]** 
  *[**。htaccessの書き換えルール**][3]
  *[**変換.htaccessルールの書き換え指令を書き換える**][4]
  *[**結論**][5]

## nginxはルールを書き直します {#nginx}
ルールの書き換えクライアントリクエストでルールの一部またはすべてのURLを変更します。通常、クライアントがリクエストしているリソースが別の場所に存在することをクライアントに通知するか、nginx内の処理の流れを制御します。たとえば、コンテンツを動的に生成する必要がある場合に、アプリケーションサーバーにリクエストを転送すること。 TRY_FILESディレクティブは、この目的のためによく使用されます。
一般的なnginx rewriteの2つの指令は_return_および_rewrite_であり、_try_files directive_はアプリケーションサーバーにリクエストを向ける便利な方法です。
リターンディレクティブは、2つの一般的な目的指令のうち、より簡単です。サーバーまたはロケーションコンテキストでリターンを囲みます。
たとえば、_return_ディレクティブを使用してクライアントを新しいドメイン名にリダイレクトする非常に簡単な例を次に示します
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
しかし、URL間の複雑な区別を実行したり、元のURLで要素をキャプチャしたり、パスに要素を変更または追加する必要がある場合はどうでしょうか？このような場合には、_rewrite_ディレクティブを使用できます。
以下は、書き換え指令を使用するサンプルNginxの書き換えルールです。文字列 /曲で始まるURLと一致し、 /メディア /または /オーディオ /ディレクトリをパスのどこかに含まれます。これらの要素を / mp3 /に置き換え、適切なファイル拡張子、.mp3または.raを追加します。 1ドルと2ドルの変数は、変化していないパス要素をキャプチャします。例として、/download/cdn-west/media/file1が/download/cdn-west/mp3/file1.mp3になります。ファイル名（.flvなど）に拡張機能がある場合、式はそれを取り除き、.mp3に置き換えます。
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess rulte rules   {#apache}
.htaccessファイルは、Webサイトにアクセス、ブロック、およびリダイレクトできる多くの方法を制御します。これは、一連の1つ以上の1つ以上の.htaccessを使用してルールを書き直します。これらの書き換えは、Apacheのmod_rewriteモジュールによって実行されます。
MOD_REWRITEは、正規表現ルールに基づいて、動的に着信URL要求を変更する方法を提供します。これにより、任意のURLを内部URL構造にマップすることができます。これは、外部URLをきれいにしてから、醜い内部URLにマッピングするためにも使用されます。
たとえば、.htaccessの書き換えルールは、www URLに非www urlを再現します。
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## Convert .htaccessルールの書き換えnginxディレクティブ {#convert}
上記の例で、非WWW URLをWWW URLにリダイレクトするために示したように、同じ.htaccessの書き換えルールをNginxの書き換え指令に変換しましょう。
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
そこで、ここでは、_yourdomain.com_用に1つ、もう1つは_www.yourdomain.com_用の2つの個別の_server_ブロックを作成しました。 _yourdomain.com_の_server_ブロックでは、_return_ディレクティブを使用して、www urlをwww urlにリダイレクトします。
Return Directiveで実行したのと同じリダイレクトは、書き換え指令でも実行できますが、推奨されません。
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
より明確にするために、WordPress htaccessルールをnginx try_filesディレクティブに変換しましょう。
[wordpress.orgは配布されます][6]基本的なデフォルト**。htaccess **次のファイル。 htaccessは、かなりのパーマリンクを有効にするルールを書き直します。
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
これが変換されたnginx try_filesディレクティブです
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## 結論 {#conclusion}
このチュートリアルでは、apacheの.htaccessの書き換えルールと、それらの.htaccessの書き換えルールをNginxの書き換え指令に変換する方法を調査しました。さらに、URLの書き換えに使用できるさまざまなNginx指令を調査しました。また、NginxとApacheの両方のルールを書き直す例を示しました。チュートリアルが役立つことを願っています。

## 探検
  * [ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法][1]
  * [nginxをリバースプロキシとしてセットアップして構成する方法][7]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
