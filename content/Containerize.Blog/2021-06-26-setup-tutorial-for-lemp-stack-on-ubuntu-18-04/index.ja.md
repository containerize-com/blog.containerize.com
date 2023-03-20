---
title: "Ubuntu 18.04のLEMPスタックのセットアップチュートリアル" 
seoTitle: "Ubuntu 18.04のLEMPスタックのセットアップチュートリアル" 
description: "LEMPスタックは、Webアプリケーションの開発と展開に使用されるソフトウェアスタックです。 Ubuntu 18.04にNginx、MySQL、およびPHPをインストールする方法を学びます。" 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "インストール＆amp; Webアプリケーションを開発および展開するためにLEMPスタックを構成します。このガイドは、Ubuntu 18.04にNginx、MySQL、およびPHPをインストールするのに役立ちます。" 
url: /ja/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Webアプリケーションを開発および展開するために、LEMPスタックをインストールして構成します。このガイドは、Ubuntu 18.04にNginx、MySQL、およびPHPをインストールするのに役立ちます。

{{< figure align=center src="images/lemp-banner.png" alt="ubuntuにLEMPスタックをインストールします">}}


## 概要{#prerequisites}
このガイドでは、開発と展開のためにNginx、MySQL、およびPHP（LEMPスタック）をインストールします。また、Ubuntu Server 18.04でWeb Server to Server PHPアプリケーションを構成します。このチュートリアルでは、次のセクションについて説明します。
  *[**前提条件**][1]
  *[** LEMPスタックとは？**][2]
  *[** LEMPインストール**][3]
  *[**結論**][4]

## Prererequisites {#prerequisites}
ソフトウェアをインストールする前に、次の要件を満たす必要があります。
  * Ubuntuオペレーティングシステムを備えたサーバー
  *** sudo **特権を持つ非ルートユーザー

## LEMPスタックとは何ですか？ {#何}
** LEMP Stack **は、PHPベースのWebアプリケーションを実行するために使用できるソフトウェアのコレクションです。 LEMPは、Linux、Nginx、MySQL、およびPHPの略です。 LEMPスタックは、ランプスタックのバリアントです。 LampとLempの両方は、Webアプリケーションを開発および展開するための人気のあるソフトウェアスタックです。これら2つのソフトウェアスタックには1つの違いがあります。 LAMPはApache Webサーバーを使用しますが、LEMPサーバーはNginx Webサーバーを使用しています。

## LEMPインストール{#installation}
このセクションでは、Ubuntu 18.04にNginx、MySQL、およびPHPをインストールする方法に焦点を当てます。まず、以下のコマンドを実行して、サーバーパッケージを更新する必要があります。
```
$ sudo apt update
```

### Nginx Webサーバーのインストール
  *以下のコマンドを実行して、** ubuntu **にnginxをインストールします。
```
$ sudo apt install nginx
```
  * NGINXインストールを完了したら、Webブラウザーを開き、サーバーIPアドレスを入力します。 Nginx Web Serverデフォルトのウェルカムページが表示されます。

{{< figure align=center src="images/nginx-home-1.png" alt="Nginx Webサーバーのデフォルトページ">}}


### mysqlのインストール
これで、アプリケーションデータを管理するためにMySQLデータベースサーバーをインストールする必要があります。
  *以下のコマンドを実行して、** ubuntu **にmysqlをインストールします。
```
$ sudo apt install mysql-server
```
  * MySQLインストールを保護するには、次のコマンドを実行します。
```
$ sudo mysql_secure_installation
```
  ***パスワードプラグインを検証するかどうかを有効にするかどうかを尋ねられます。それを有効にしないようにすることをお勧めします。Nと入力してEnterを押して次のステップを進んでください。
  *次に、以下に示すようにいくつかの質問をします。すべての質問に答える必要があります。
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  *今、MySQLサーバーは稼働しています。次のコマンドでテストできます。パスワードを求めた場合に備えて、mysqlのパスワードではなく、ubuntuルートアカウントパスワードを入力してください。
```
$ sudo mysql
```
  * mysqlから終了するには、以下のコマンドを入力します。
```
mysql> exit
```

### PHPのインストール
PHPの処理のために、PHP-FPMのインストールについて説明します。 PHP-FPMは、FastCGI Process Managerの略です。 Nginx Webサーバーには、PHPの処理のためのビルドイン機能がないため、PHP-FPMを使用します。さらに、データ管理のためにMySQLとPHPを通信するためにPHP-MYSQLをインストールします。
  *以下のコマンドを実行して、** ubuntu **にphpをインストールします。
```
$ sudo apt install php-fpm php-mysql
```
  *ここで、Webアプリケーションを実行するためにPHPインストールとLEMPスタックのすべての必要なソフトウェアが完了します。
  *このステップでは、Nginx構成ファイルを作成して、Nginxに動的コンテンツにPHPプロセッサを使用するように指示します。以下のコマンドを実行して、nginx構成ファイルを作成します。
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  *コードをnginx構成ファイルにコピーして保存します。
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  *これらのディレクティブとロケーションブロックを少し見てみましょう。これにより、基本情報を入手できます。
      ***聞く**：nginxのポートを定義できます。 HTTPにはポート80、HTTPSプロトコルには443を使用します。
      *** root **：プロジェクトのルートディレクトリを定義します。 Nginxはそれを使用してWebサイトまたはWebアプリケーションを提供します。
      *** index **：ファイルを提供する順序を定義します。インデックスファイルが呼び出されると、nginxはindex.phpファイルを配信します。
      *** server_name **：サーバーのドメイン名またはパブリックIPを定義します。
      ***場所 /**：このロケーションブロックには** try_block **ディレクティブがあり、要求されたURIと一致します。 Nginxは、要求されたファイルが見つからない場合、404エラーを返します。
      *** location〜.php $ **：この場所ブロックはPHP処理を処理します。
      *** location〜 /.ht**：nginxは**。htaccess**ファイルを処理しません。この場所はそれをブロックします。 nginxは、**すべての**ディレクティブを定義することで.htaccessファイルを提供しません。
  *新しく作成されたnginx構成ファイルのSymlinkを作成して有効にします。
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  *次のコマンドを実行して、構文エラーについてnginx構成ファイルをテストします。
```
$ sudo nginx -t
```
  * nginx webサーバーを再起動します。
```
$ sudo systemctl restart nginx
```

### テストphp
  * NginxがPHPページを正しく提供することを確認するために、構成をテストするためのPHPファイルを作成します。
  *以下のコマンドを実行して、Nginx Webサーバーのルートディレクトリにinfo.phpファイルを作成します。
```
$ sudo nano /var/www/html/info.php
```
  *以下のコードをITに追加して、ファイルを保存します。
```
<?php
phpinfo();
```
  * Webブラウザーとタイプドメイン名またはサーバーのパブリックIPを開き、http：// server \ _ip \ _or_domain/info.phpのようなphpファイル名が続きます。以下のページが表示されます。

{{< figure align=center src="images/info-php.png" alt="PHP情報ページ">}}


## 結論{#conclusion}
このチュートリアルでは、** LEMPスタック**のインストールと構成について説明しました。ご覧のとおり、ソフトウェアスタックコンポーネントの構成は非常に簡単です。さらに、数分でWebアプリの作成と提供を開始できます。
最後に、[** containerize.com **][5]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[** Webサーバーソリューションスタック**][6]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  *[**最高のオープンソースWebサーバーソリューションスタック**][7]
  *** [最も人気のあるオープンソースデジタルフォレンジックツール][8] **
  *** [2021年のトップ5オープンソースメッセージキュー（MQ）ソフトウェア][9] **
  *** [最高のオープンソースクラウドストレージとファイル共有ソフトウェア][10] **
  *[** ubuntuでnginxを使用してphpmyadminをインストールして保護する方法**][11]
  *[** ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法**][12]
  *[** 2021年の最も人気のあるOSI-承認のオープンソースライセンスのトップ5 **][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
