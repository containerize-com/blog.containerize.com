---
title: "ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法" 
seoTitle: "ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法" 
description: "この記事では、ubuntuにnginxを使用してPHPの複数のバージョンをインストールする方法について説明します。 Nginxを使用してPHPをインストールする方法について、ステップバイステップの指示を行います。" 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "NGINXでPHPの複数のバージョンを使用したい場合は、この記事では、UbuntuにNginxを使用してPHPをインストールする方法を段階的に紹介します。" 
url: /ja/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="Nginx複数のPHPバージョンを備えたPHP">}}


## NGINXでPHPの複数のバージョンを使用したい場合は、この記事では、UbuntuにNGINXを使用してPHPをインストールする方法を段階的に紹介します。
この記事は、Nginxに関するチュートリアルに関するシリーズの継続です。これまで、Nginxをロードバランサーとして使用する方法、Nginxを逆プロキシとして使用する方法について説明しました。そして今、このチュートリアルは、「Nginxを使用してPHPの複数のバージョンを使用する方法」という別の要求の厳しい質問をカバーしています。このチュートリアルでは、UbuntuにPHPをインストールする方法、NGINXでPHPを構成する方法、そして最後にNGINXを使用してPHPの複数のバージョンをインストールする方法について、ステップバイステップを紹介します。それでは、始めましょう！
  * [nginx] [1]をインストールする
  * [複数のPHPバージョンをインストール] [2]
  * [PHPで複数のWebサイトを作成] [3]
  * [nginxをWebサイト用に異なるバージョンを実行するように構成] [4]
  * [結論] [5]

## インストールnginx {#nginx}
Nginx（「Engine-X」と発音）は、逆プロキシまたはHTTPキャッシュとしてよく使用されるオープンソースWebサーバーです。 Linuxで無料で利用できます。
nginxをインストールするには、次のコマンドを使用します。
```
sudo apt update
sudo apt install nginx
```
インストールが完了した後、ブラウザで「http：// localhost」を開くことができ、すべてのセットアップがあります。

{{< figure align=center src="images/php-with-nginx-install.png" alt="nginxでPHPをインストールします">}}


## 複数のPHPバージョン{#PHP}をインストールする
** PHP **（** PHP：HyperText Preprocessor **の再帰的頭字語）は、広く使用され、WebサイトやWebベースのアプリケーションの開発に最適なオープンソースで人気のある汎用スクリプト言語です。これは、HTMLに埋め込むことができるサーバー側のスクリプト言語です。
現在、** php **、すなわち** php 5.6 **、** 7.0、** 8.0 **の3つのサポートバージョンがあります。意味** PHP 5.3 **、** 5.4、**、および** 5.5 **はすべて終了に達しました。セキュリティの更新ではサポートされなくなりました。まず、PHP-FPMにPHP 7.0とPHP 7.2をインストールしましょう。
実際、インストールで移動する前に、最初にPHP-fpmであることが記載されています。 ** PHP-FPM **（** FastCGI Process Manager **の頭字語）は、非常に人気のある代替PHP（HyperText Processor）FastCGI実装です。 PHP-FPMには、頻繁にトラフィックを受け取るWebサイトに有益であることが証明できる多数の機能が含まれています。
最初にPHP 7.0と7.2をインストールするには、PHPリポジトリをサーバーに追加して、複数のバージョンのPHPをインストールする必要があります。次のコマンドでOndrej PHPリポジトリを追加できます。
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
リポジトリが最新になったら、次のコマンドでPHP 7.0、PHP 7.2、およびPHP-FPMをインストールします。
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
インストールが完了したら、次のコマンドでPHP-FPMのステータスを確認してください。
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## php {#web}で複数のWebサイトを作成する
デフォルトページは/var/www/html/locationに配置されます。静的ページをここに配置するか、仮想ホストを使用して他の場所を配置できます
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
次に、サイト1のサンプルindex.phpファイルを作成します。
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
ここで、サイト2のサンプルindex.phpファイルを作成します。
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
次に、両方のウェブサイトの所有権をwww-dataに変更します。
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## configure nginx {#configure}
次に、PHP 7.0を使用するDomain Site1.Containerize.comのNGINX仮想ホストファイルを作成する必要があります。 PHP 7.2を使用するSite2.Containerize.comのもう1つ。
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
次の行を追加します：
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
ここで、Site2.containerize.comの2番目のファイルを作成します
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
次に、次のコマンドで両方の仮想ホストファイルを有効にします。
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
最後に、すべての構成の変更を適用するために、nginxおよびphp-fpmサービスを再起動します。
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## 結論{#conclusion}
このチュートリアルでは、Ubuntuで複数のPHPバージョンを作成する方法について説明しました。 Nginxのインストール方法を学びました。次に、Nginxで2つの異なるWebサイトをセットアップする方法を検討しました。そして最後に、NGINXを使用してPHPの異なるバージョンで2つの異なるWebサイトを構成する方法を学びました。チュートリアルがあなたを助けてくれることを願っています。

## 探検
  * [nginxをリバースプロキシとしてセットアップして構成する方法] [6]
  * [アプリケーションのロードバランサーとしてnginxを使用する方法] [7]
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
