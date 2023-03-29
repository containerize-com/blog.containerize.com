---
title: "AWSプロダクションサーバーの乗客でnginxをセットアップする方法" 
seoTitle: "AWSプロダクションサーバーの乗客でnginxをセットアップする方法" 
description: "このブログ投稿では、APT方法に従ってUbuntu 20.04 LTSオペレーティングシステムを介して乗客を介してNginxをインストールする手順について説明します。" 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "このブログ投稿では、APT方法に従ってUbuntu 20.04 LTSオペレーティングシステムを介して乗客とのNginxをインストールする手順について説明します。" 
url: /ja/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## このブログ投稿では、APTメソッドに従ってUbuntu 20.04 LTSオペレーティングシステムを通過するNGINXのインストールの手順について説明します。

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="AWSプロダクションサーバーの乗客を備えたNginxをセットアップします">}}


## **概要** ：
AWSプロダクション **サーバーの乗客と** nginxをインストールして構成する必要があります。
**Open Source Phusion Passenger** は、多くのカスタマイズと機能のオプションを提供します。乗客の一部は、アプリケーションのパフォーマンス特性を改善するために使用されます。カスタマイズのいくつかは、アプリケーションまたは接続処理の動作などに影響を与えます。乗客の2つの構成オプションは、乗客\ _ _enabledおよび乗客\ _rootと呼ばれるnginxでセットアップする必要があります。このインストールプロセスは、これらの両方のオプションを自動的にセットアップします。
このブログ記事では、 **aptメソッド** に続いて、ubuntuオペレーティングシステムにWebアプリケーションサーバーをインストールするための必須構成ステップのいくつかをカバーします。 Node.js、Python、およびRubyで記述されたWebアプリケーションを展開および管理できます。
* **nginxと乗客とは？** 
* **nginxと乗客のパッケージをインストール** 
* **乗客のnginxモジュールを有効にし、nginxを再起動します** 
* **インストールを検証** 
* **システムと乗客の更新** 
* **最高のオープンソースWebサーバー** 
  * **結論** 

## 1. Nginxと乗客とは何ですか？ {#step-4:-update-regularly}

**[nginxサーバーとは？][1] **nginxは、リバースプロキシ、HTTPロードバランサー、メディアストリーミング、HTTPキャッシュ、および電子メールプロキシ、POP3として機能するWeb用の無料でオープンソースWebサーバーソフトウェアです。 、およびsmtp。非常にスケーラブルで、最大のパフォーマンスと安定性のために設計されています。 Nginxは、複数のクライアント要求を同時に処理できるように、高性能の非同期、非スレッド、イベント駆動型のWebサーバーです。 2004年に2節BSDライセンスの条件の下でリリースされたIgor Sysoevによって書かれました。** nginxは、Apacheよりも2.5倍高速**を実行し、ベンチマークテストに従ってメモリを消費しませんでした。
**[乗客とは何ですか？][2]**Mod \ _railsおよびmod \ _rackとしても知られているPhusion乗客は、無料のWebサーバーとオープンソースのWebアプリケーションサーバーです。 ApacheやNginxと統合する高速で、堅牢で、機能が豊富で軽量であるように設計されています。また、アプリケーションのセキュリティ、信頼性、スケーラビリティも向上させます。管理者は、Webアプリケーション操作、サーバーパフォーマンスに関する洞察を得ることができます。乗客アプリサーバーは、Webアプリケーションを簡単に実行および自動管理します。また、複数のアプリケーションを提供することもできます。 HTTPリクエストを処理し、プロセスとリソースを管理し、管理タスク、監視、および問題の診断を可能にします。 Phusion Passengerは、Meteor、Ruby on Rails Nginxの乗客、JavaScript、Python、およびnode.jsアプリケーションを展開および管理するためのサポートを備えた無料アプリケーションサーバーです。

## 2. NGINXと乗客のパッケージをインストールします。 {#step-1:-install-passenger-packages}

今度は、乗客とnginxを設置する時が来ました。このガイドに従って、人気のあるWebサーバーの1つを簡単に展開できます。以下にリストされているコマンドは、PhusionのAPTリポジトリに乗客とNginxをインストールします。既にnginxをインストールしている場合、これらのコマンドは、乗客がコンパイルされた状態でnginxをPhusionのバージョンにアップグレードします。
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3.乗客nginxモジュールを有効にし、nginxを再起動します。 {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

edit /etc/nginx/nginx.confおよびconcomment incluse/etc/nginx/passenger.conf;。たとえば、これが表示される場合があります。
```
# include /etc/nginx/passenger.conf;
```
このような「#」文字を削除します。
```
include /etc/nginx/passenger.conf;
```
includectc/nginx/passenger.confのコメント版が表示されない場合。 nginx.conf内では、自分で挿入する必要があります。 httpブロック内に/etc/nginx/nginx.confに挿入します。
http {
    include /etc/nginx/passenger.conf;
    ...
}
このステップが終了したら、 **nginx** を再起動します：
```
$ sudo service nginx restart
```

## 4.インストールの検証： {#step-3:-check-installation}

インストール後、コマンドを実行してターミナルにインストールを検証してください `sudo/usr/bin/assenger-config varidate-install`：
```
sudo /usr/bin/passenger-config validate-install
```
すべてのチェックが合格するはずです。小切手のいずれかが合格しない場合は、画面上の提案に従ってください。
最後に、Nginxが助手席のコアプロセスを開始したかどうかを確認します。 `sudo/usr/sbin/assenger-memory-stats」を実行します。 Nginxプロセスと乗客プロセスが表示されるはずです。たとえば、以下のように：
```
sudo /usr/sbin/passenger-memory-stats
```
Nginxプロセスや乗客プロセスが表示されない場合は、おそらく何らかのインストールの問題や構成の問題があるでしょう。 [トラブルシューティングガイド][3]を参照してください。

## 5.システムと乗客の更新： {#step-4:-update-regularly}

Nginxの更新、乗客の更新、システムの更新は、 **aptパッケージマネージャー** を介して定期的に配信されます。次のコマンドを定期的に実行して、最新の状態に保つ必要があります。
sudo apt-getアップデート
sudo apt-getアップグレード
更新後にWebやアプリケーションを再起動する必要はありません。また、更新後に構成ファイルを変更する必要もありません。それはすべて、aptによってあなたのために自動的に世話されます。

## 6. **最高のオープンソースWebサーバー** ： {#step-4:-update-regularly}

**オープンソースのWebサーバーとは？**オープンソースWebサーバーソフトウェアは、WebページをインターネットWorld Wide Webで配信するように設計されたパブリックドメインソフトウェアです。基本的に、HTTPネットワークプロトコルを介してリクエストを処理して、World Wide Webで情報を配信します。
WebアプリケーションとWebサイトの80％以上が、オープンソースWebサーバーを搭載しています。ここでは、 **最も人気のあるオープンソースWebサーバー** のいくつかをリストしました。これらの人気のあるWebサーバーのいずれかを簡単に展開できます。
* **apache http server** 
* **lighttpd webサーバー** 
* **OpenLiteSpeed Webサーバー** 
* **Apache Tomcat Webサーバー** 
* **Caddy Webサーバー** 

## [][4]結論： {#next-step}

おめでとうございます、あなたはあなたのWebアプリケーションのために **AWS Production Server**に乗客とNginxを正常にインストールして構成しました。完全にマスターする乗客用アプリケーションサーバーについては、[乗客図書館][5]のさまざまなガイドをご覧ください。**capistrano** を介したRubyアプリケーションの[自動展開][6]ガイドに特に興味があるかもしれません。これで、AWS制作インスタンスにWebアプリケーションを展開する準備が整いました。
_無料のWebサーバーとオープンソースWebアプリケーションサーバー_ **Web開発またはホスティング** Needs_を好む_？。無料のWebサーバーとオープンソースWebアプリケーションサーバーについて質問がありますか？

## 探検
次の関連するブログ投稿を見つけることができます。
  * [ubuntu/debianの逆プロキシとしてApacheを構成する方法][8]
  * [ubuntuでnginxを使用してphpmyadminをインストールして保護][9]
  * [ubuntu/debianのnginxでHTTP/2サポートを構成][10]
  * [ubuntu 20.04で暗号化してnginxを保護し、暗号化します][11]
  * [ubuntuでapacheでowncloudをインストールして構成する方法][12]



[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
