---
title: "Osticketを使用してオンラインヘルプソフトウェアをセットアップする方法" 
seoTitle: "Osticketを使用してオンラインヘルプソフトウェアをセットアップする方法" 
description: "Osticket Help Deskを使用して、すべてのサポートリクエストを1か所で管理します。メール、電話、フォームを介して作成された問い合わせをWebベースのチケットに変換します。" 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Osticketを使用して、すべてのサポートリクエストを1か所で管理します。メール、電話、フォームを介して作成された問い合わせをシンプルなWebベースのチケットに変換します。" 
url: /ja/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Osticketを使用して、すべてのサポートリクエストを1か所で管理します。メール、電話、フォームを介して作成された問い合わせをシンプルなWebベースのチケットに変換します。

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Osticketを使用してオンラインヘルプソフトウェアをセットアップする方法">}}

Osticketは、オープンソースのオンラインヘルプデスクソフトウェアソリューションです。 Osticket Helpdeskは、高コストで複雑なカスタマーサポートシステムに代わる無料の代替品です。シンプルで、軽量で、信頼性が高く、Webベースで、セットアップと使用が簡単です。最良の部分は、完全に無料です。このチュートリアルの次のセクションについて説明します。
  * [Osticketとは？] [1]
  * [Osticketの長所と短所] [2]
  * [Osticketをセットアップする方法？] [3]
  * [結論] [4]

## Osticketとは何ですか？ {#osticket}
Osticketは、ユーザーフレンドリーなコントロールパネルとリアルタイムのレポートコンポーネントを提供します。ユーザーは、いくつかの簡単な手順でログインしてチケットを作成できます。彼らはあなたのウェブサイト、電子メール、または電話でチケットを作成できます。その後、着信チケットは保存され、エージェントに割り当てられます。エージェントは電子メール通知を取得し、問題を解決するためにクエリに応答します。顧客とエージェントは、コメントセクションで詳細と進捗状況について説明できます。顧客は、このオンラインヘルプデスクソフトウェアによって提供される組み込みの顧客ポータルを介して、リクエストと進捗を追跡できます。

## osticketの長所と短所{#pros}

#### Pro
  * Osticketは、エンドユーザーとサポートエージェントの両方にとって非常にユーザーフレンドリーです。
  *豊かな機能にバンドルされたOsticketには、過度に複雑にならずに必要なものがすべて揃っています。
  * Osticketは完全に無料でオープンソースのチケット管理ソフトウェアです。
  *軽量で、安全で、信頼性が高く、ヘルプデスク管理ソフトウェアを簡単にインストールできます。
  * Apache、Nginx、LightTPD、IISなどを含むすべての人気のあるWebサーバーで実行できます。

#### cons
  * Osticketは、他の有料ヘルプデスクシステムのように、詳細チケット分析や統計を提供していません。
  *ユーザーインターフェイスは、他のサポートシステムと比較した場合、非常にシンプルで基本的です。

## Osticketをインストールする方法は？ {#どうやって}
次の手順に従って、ubuntu 18.04 LTSにNginxを備えたOsticketをインストールします。
  * Osticketの新しいディレクトリを作成します。
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  *次のコマンドを使用して最新のOsticketセットアップをダウンロードします。
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  *その後、これらのコマンドを使用してサンプルファイルから構成ファイルを作成します。
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  *次に、Osticket Webディレクトリの所有権を「www-data」ユーザーとグループに変更します。
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  *その後、新しい仮想ホスト構成ファイルを作成します。
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  *次に、構成コードを貼り付けます。
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  *ドメイン名に従ってサーバー名を変更します。ファイルを保存して終了します。
  *次に、この仮想ホストファイルを[次のコマンドを使用してサイト対応]フォルダーにリンクします
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  *次のコマンドを使用して構成エラーをテストします
```
nginx -t
```
  *次に、次のコマンドを使用してnginxサービスを再起動します
```
sudo systemctl restart nginx

```
  *次の図に示すように、任意のWebブラウザにドメイン名を入力してインストールウィザードを開始します

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Osticketを使用してオンラインヘルプソフトウェアをセットアップする方法">}}

  * php.iniから必要な拡張機能を有効にし、[続行]をクリックします。
  *必要なすべての情報を入力し、[**今すぐインストール] **ボタンをクリックします。

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Osticketを使用してオンラインヘルプソフトウェアをセットアップする方法">}}

  *データベース設定で、DBName、ユーザー名、およびパスワードを入力します。
  *最後に「今すぐインストール」ボタンをクリックします
  *インストールが完了した後、成功メッセージ付きのページに表示されます。
  *次に、ost-config.phpの許可を変更して、次のコマンドを実行して書き込みアクセスを削除します。
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## 結論{#conclusion}
Osticketは、低予算の企業や、複雑なヘルプシステムではなく、シンプルなヘルプデスクシステムを望んでいる企業に最適です。シンプルで軽量で、信頼性が高く、オープンソースで、完全に無料のオンラインヘルプデスクソフトウェアです。これにより、Osticketは、高コストのカスタマーサポートシステムの優れた代替品になります。 Osticketの機能とインストールガイドの詳細については、次のチュートリアルをご覧ください。

## 探検
[ベストオープンソースと無料のヘルプデスクソフトウェア] [5]
[人気のある無料チケットベースのヘルプデスクとカスタマーケアシステム] [6]
[Osticketのプラグインを開発するための初心者向けガイド] [7]
[Osticketでマルチテナンシーを実装する方法] [8]
[WordPressとOsticketを使用したチケットシステムを自動化] [9]
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
