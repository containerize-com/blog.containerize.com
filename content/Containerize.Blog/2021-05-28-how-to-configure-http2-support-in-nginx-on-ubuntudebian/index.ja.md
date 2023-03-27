---
title: "ubuntu/debianでnginxでhttp/2サポートを構成する方法" 
seoTitle: "ubuntu/debianでnginxでhttp/2サポートを構成する方法" 
description: "HTTP2またはH2は、NGINXがHTTP2サポートを有効にした後にサイトページの速度を上げることができるHTTPプロトコルのバイナリプロトコルと改良バージョンです" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2は、ページの負荷速度とセキュリティを改善するための堅牢な多重化プロトコルです。このチュートリアルでは、HTTP/2サポートでNGINXをセットアップする方法を学びます。" 
url: /ja/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2は、ページの負荷速度とセキュリティを改善するための堅牢な多重化プロトコルです。このチュートリアルでは、HTTP/2サポートでNGINXをセットアップする方法を学びます。

{{< figure align=center src="images/nginx-enable-http2.png" alt="nginxは、ubuntuとdebianでHTTP2サポートを有効にします">}}


## **概要** 
Nginxは、高速で信頼性の高いWebサーバーです。メモリフットプリントの低さ、負荷分散、高いスケーラビリティ、キャッシュ、プロトコルの大部分のサポート、逆プロキシのために人気を獲得しました。それでは、nginxがHTTP2プロトコルをどのように有効にするかについて話しましょう。
NGINXでサポートされているプロトコルの1つは、2015年5月に公開されたHTTP/2です。HTTP/2の主な利点は、コンテンツが豊富なWebサイトの転送速度が高いことであり、Webサーバーの負荷を削減し、複数の並列リクエストを開始できます。単一のTCP接続で。 nginx enable http2は、HTTPプロトコルの改良バージョンです。開始する前に、SSL証明書を備えたいくつかのUbuntuまたはDebianサーバーが必要になります。このチュートリアルでは、ubuntuでhttp2を有効にする方法について一歩踏み出します。
* パッケージの更新とnginxのインストール
  * HTTP/2サポートを有効にします
* サーバー名を追加します
  * SSL証明書の追加
* 暗号の削除
* すべてのHTTP要求をHTTPSにリダイレクトします
  * nginxを再起動します
  * 結論

## ステップ1：パッケージを更新し、nginxのインストール {#4597}

最初のステップは、APTパッケージシステムのリポジトリを更新およびアップグレードすることです。更新を使用すると、最新のバージョンパッケージがダウンロードされ、アップグレードはリストに最新バージョンのパッケージをインストールします。以下のAPTコマンドを実行して、パッケージを更新およびアップグレードします。
```
sudo apt-get update && apt-get upgrade
```
次のステップは、Nginxパッケージの最新バージョンをインストールすることです。 HTTP/2プロトコルのサポートは、Nginxバージョン1.9.5以降で導入されました。したがって、Nginxパッケージの最新バージョンをインストールする必要があります。以下の使用aptインストールコマンドを実行して、nginxパッケージをインストールします。
```
sudo apt-get install nginx
```
ステップバイステップのインストールプロセスを確認するように求められます。 [はい]オプションを選択し、インストールプロセスを完了します。インストールプロセスが終了した後、次のステップは、適切なバージョンをインストールしたかどうかにかかわらず、パッケージのバージョンを確認することです。コマンドを入力することで、Nginx Webサーバーのバージョンを確認できます。
```
sudo nginx -v
```
上記のバージョンチェックコマンドの出力は、次のように類似する必要があります。
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## ステップ2：HTTP/2サポートを有効にします {#f4d2}

NGINXパッケージをインストールした後、HTTP2 NGINXを有効にする必要があります。ユーザーはリスニングポートを80から443に変更する必要があります。NGINX構成ファイルを開きましょう。
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
nginxのデフォルトの値は、ポート80を聞くように設定されています。
80 default_serverを聞いてください。
聞く[::]：80 default_server;
2つの異なるリスニング変数があることがわかります。最初のリッスン変数はすべてのIPv4Connectionsの場合、2つ目はIPv6接続用です。両方の変数の暗号化を有効にします。リスニングポート番号を443に変更し、以下に示すようにHTTPSプロトコルのSSL接続を追加します。
443 SSL HTTP2 default_serverを聞いてください。
聞く[::]：443 SSL http2 default_server;
SSLに加えて、HTTP2も追加したことに注意してください。 Nginxは、HTTP/2プロトコルをサポートするブラウザを使用できるようになりました。

## ステップ3：サーバー名の追加 {#a745}

次のステップは、サーバー名がドメイン名に関連付けられるようにサーバー\ _NAMEを変更することです。ユーザーは、構成ファイルのサーバー名を変更するだけです。構成ファイルのサーバー\ _NAMEエントリを見つけて、このように実際のドメインに_を変更します。
```
server_name example.com www.example.com;
```
テキストエディターで編集して、サーバー構成ファイルを保存します。コマンドを使用して、構文エラーのNGINX構成を確認できます。
```
sudo nginx -t
```
構文がエラーがない場合、以下の出力が表示されます。
nginx：構成ファイル/etc/nginx/nginx.conf構文は問題ありません
nginx：構成file /etc/nginx/nginx.confテストが成功しました

## ステップ4：SSL証明書の追加 {#37c0}

次のステップは、nginx HTTPS構成がSSL証明書を使用できるようにすることです。自己署名された証明書を生成するか、[Let's Encryptから無料の証明書をインストール][1]。 SSL証明書がない場合は、このチュートリアルに従ってください。次のようなnginx構成ディレクトリ内にSSL証明書を追加する
```
sudo mkdir /etc/nginx/ssl
```
この場所の証明書と秘密鍵をコピーし、Example.comを実際のドメイン名に置き換えます。
sudo cp /path/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
次に、NGINXサーバー構成ファイルをもう一度開きます。 NGINX SSL構成を有効にするために、証明書の位置でNginxサーバーブロック内に新しいSSL行を追加および構成します。
sudo nano /etc/nginx/sites-abailable/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
ファイルnginxファイルを保存し、テキストエディターを終了します。

## ステップ5：暗号の削除 {#d291}

Cipherは、データ暗号化と復号化のために暗号化で使用されるアルゴリズムです。暗号スイートは、ネットワーク接続を保護するために使用される暗号化アルゴリズムの束です。 HTTP/2には、削除する必要がある不安定な暗号の巨大なブラックリストがあります。ここでは、Internet Giants CloudFlareによって承認された人気のあるCipherセットを使用します。
次のnginx構成ファイル/etc/nginx/nginx.confを開き、**ssl \ _prefer \ _server_ciphers onの直後に以下の行を追加します。
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
gzipをオフに設定して、プロキシ\ _max \ _temp \ _file \ _size 0を追加できます。 err \ _http2 \ _protocol_error nginxエラーを回避するには。

## ステップ6：すべてのHTTP要求をHTTPSにリダイレクトします {#b387}

次に、サーバーがHTTP要求を受信した場合にのみ、nginx http2プロキシにHTTPSを介してコンテンツを提供するものを伝える必要があります。最後に、コメントした行を無視すると、nginx構成ファイル/etc/nginx/sites-abailable/domain-name.comがこれに似ているはずです。
server {聞く443 SSL http2 default_server;聞く[::]：443 SSL http2 default_server; root/var/www/html; index.html index.htm index.nginx-debian.html; server_name example.com; location/{try_files $ uri $ uri/= 404444444444444444444 ; } ssl_certificate /etc/nginx/ssl/example.com.crt;ssl_certificate_key /tc/nginx/ssl/example.com.key;ssl_dhparam /etc/nginx/ssl/dhparam.pem;} server {listen 80;聞く[::]：80; server_name example.com; 301 https：// $ server_name $ request_uri;}を返します
file /etc/nginx/sites-abailable/domain-name.comを保存してから終了します。構文エラーの構成を確認してください。
```
sudo nginx -t
```

## ステップ7：nginxを再起動します {#e687}

すべての変更を適用するには、nginx http2逆プロキシサーバーを再起動し、構成ステータスを確認します。
sudo systemctl restart nginx
sudo systemctl status nginx

## **結論:**  {#4a1a}

おめでとうございます、Ubuntu ServerでNginx config HTTP2サポートをセットアップする方法を成功裏に学びました。 NGINX HTTP2の設定は、HTTP/2ページにサービスを提供しており、HTTP/1とHTTP/2プロトコルの違いもクリアされています。それでも構成の問題に直面している場合は、コメントセクションでお知らせください。
HTTP2多重プロトコルについて質問がありますか？

## 探検
以下の記事も好きかもしれません：
  * [ubuntu/debianの逆プロキシとしてApacheを構成する方法][3]
  * [方法][3][ubuntuでnginxを使用してphpmyadminをインストールして保護する][4]
  * [AWSプロダクションサーバーの乗客とnginxをセットアップする方法][5]
  * [ubuntu 20.04で暗号化してnginxを保護し、暗号化します][1]
  * [ubuntuでapacheでowncloudをインストールして構成する方法][6]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
