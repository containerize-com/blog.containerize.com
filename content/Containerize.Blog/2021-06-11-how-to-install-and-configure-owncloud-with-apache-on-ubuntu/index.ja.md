---
title: "ubuntuでapacheでowncloudをインストールして構成する方法" 
seoTitle: "ubuntuでapacheでowncloudをインストールして構成する方法" 
description: "OwnCloudは、ファイルホスティングサービスを作成するためのオープンソースクライアントサーバーソフトウェアです。このチュートリアルでは、ubuntuでowncloudをインストールして構成する方法を学びます" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloudは、ファイルホスティングサーバーを作成するためのクライアントサーバーソフトウェアのオープンソースコレクションです。このチュートリアルは、UbuntuでOwnCloudを構成する方法に関するものです。" 
url: /ja/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloudは、ファイルホスティングサーバーを作成するためのクライアントサーバーソフトウェアのオープンソースコレクションです。このチュートリアルは、UbuntuでOwnCloudを構成する方法に関するものです。

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **概要**
OwnCloudは、データの同期とファイル共有に使用されるPHPで記述された無料で人気のある堅牢なオープンソースエンタープライズWebアプリケーションです。また、データファイル、連絡先、カレンダー、リストなどを簡単に管理することもできます。 Google Drive、Dropbox、Icloud、その他のクラウドストレージサービスなど、最も人気のあるクラウドプラットフォームに代わる優れた代替品です。ただし、他のクラウドストレージサービスとは異なり、OwnCloud Self Hostedは自由なホストクラウドを無料で作成できます。
OwnCloudは、プライベートクラウドを作成するためにWebインターフェイスを使用してデータアクセスを提供するオープンソースのプライベートクラウドソフトウェアです。カレンダーイベント、アーカイブ、写真、録音、タスク、ドロップボックスやGoogleドライブに似たブックマーク付きアドレス帳を簡単に表示および同期できる独自のファイル共有サーバーを作成できます。また、すべてが制御されているデバイス間でデータを同期および共有するオプションも提供します。 owncloudをインストールして構成することは、デスクトップクライアントとモバイルアプリデバイス用にサポートされています。さらに、ubuntuでowncloudを使用して、ユーザーごとにファイルにユーザーおよびグループアクセス制限を簡単に実装できます。 OwnCloud Open Sourceパーソナルストレージサーバーはクロスプラットフォームアプリケーションであり、すべての一般的なオペレーティングシステムにインストールできます。
このチュートリアルは、owncloudをセットアップし、Ubuntu LTSシステムでOwnCloudを構成するのに役立ちます。
  *ランプサーバーをインストールします
  * OwnCloudをダウンロードします
  * MySQLデータベースとユーザーを作成します
  * owncloudをインストールします
  * OwnCloudの最良の選択肢は何ですか？
  * 結論

## ステップ1：ランプサーバーをインストールします
独自のクラウドサーバーとプライベートクラウドの作成方法をセットアップするには、まずランニングランプサーバーをセットアップする必要があります。既にインストールしてランプスタックを実行している場合は、この手順をスキップしてください。そうしないと、Ubuntuシステムにランプをセットアップするためにフォローイングコマンドを使用します。

### PHPをインストールします
コマンドを実行して、ubuntuまたはdebianシステムにPHP 5.6以下のバージョンをインストールできます。
sudo apt-getインストールpython-software-properties
sudo add-papt-repository ppa：ondrej/php
sudo apt-getアップデート
sudo apt -getアップグレード-y
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### apache2をインストールします
Apacheは、最も広く使用されているオープンソースWebサーバーソフトウェアです。次に、ubuntuにApache Webサーバーをインストールして、実行して独自のクラウドサーバーを設定します。
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### mysqlをインストールします
MySQLオープンソースリレーショナルデータベース管理システムは、ランプWebアプリケーションソフトウェアスタックなどのコンポーネントです。以下で実行して、ubuntuにmysqlをインストールします。
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## ステップ2：ubuntuでowncloudをダウンロードします
UbuntuシステムでLamp Serverの構成に成功した後、[公式Webサイト] [1]から最新のCloudプライベートクラウドストレージソリューションをダウンロードしましょう。
CD /TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
OwnCloud Serverソフトウェアをダウンロードした後、Webサイトのドキュメントルートでダウンロードされたアーカイブを抽出し、ubuntuにowncloudをインストールするために実行してファイルとディレクトリに適切なアクセス許可を設定します。
CD/var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data：www-data owncloud
sudo chmod -r 755 owncloud
{{_LINE_50_}}
次に、アーカイブファイルを削除し、Apacheサーバーを再起動します。
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl restart apache2

## ステップ3：owncloudデータベースとユーザーを作成します
コードを抽出した後、MySQLデータベースとユーザーアカウントを作成して、owncloudパーソナルクラウドストレージサーバーを構成します。次のコマンドセットを使用してMySQL Serverにログインして、ownCloudデータベースとユーザーを作成します。
mysql -u root -p
パスワードを入力する：
mysql> database owncloudを作成します。
mysql> over allcloudですべてを付与します。
mysql>フラッシュ特権。
mysql> quit
{{_LINE_62_}}
次に、プライベートクラウドを作成するには、Webインターフェイスからubuntuにowncloudをインストールする必要があります。

## ステップ4：ubuntuにowncloudをインストールします
これで、Webブラウザー上の独自のCloud Best Personal Cloud Server Webパネルディレクトリにアクセスします。ローカルホストをサーバーIPアドレスまたはドメイン名に変更します。
http：// localhost/owncloud/
{{_LINE_67_}}
Open Source OwnCloudログインページが表示されます。新しい管理者のユーザー名とパスワード資格情報を入力して、管理者アカウントを作成し、データフォルダーの場所を提供します。すべてが大丈夫なら、このようなWebページを取得する必要があります。
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="UbuntuにApacheでOwnCloudをインストールします">}}

{{_LINE_71_}}
次に、ページを下にスライドさせます。以下のフォームでは、ユーザー名とパスワードをマネージャーに入力する必要があります。また、データベースとパスワードとともにデータベースを提供して、Database Server、データフォルダーの場所であるOwnCloud Serverを接続し、[セットアップの完了]をクリックします。
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="ubuntuでowncloudを構成します">}}

{{_LINE_75_}}
セットアップを完了すると、管理者ダッシュボードが取得されます。ユーザー、グループを作成し、アクセス許可などを割り当てることができます。
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="OwnCloudダッシュボードをインストールします">}}

{{_LINE_79_}}
うん！個人のクラウドストレージを構築するためのOwnCloudインストールガイドが完了しました。ドロップボックスやGoogleドライブと同様に、プライベートクラウドを段階的に構築するために、Ubuntuにowncloudを完全にインストールする方法を知っています。

## ** owncloudの最良の代替品は何ですか？** {#4a1a}
以下は、セルフホストの独自のCloudの代替品と競合他社のホスティングソフトウェアです。
  *** Seafile **はオープンソースのクロスプラットフォームファイルホスティングソフトウェアシステムです
  *** NextCloud **は無料でオープンソースクラウドストレージプラットフォームです
  *** Resilio Sync **はオープンソースのピアからピアファイルの同期アプリケーションです
  *** pydioセル**はオープンソースファイルの共有および同期ソフトウェアです
  ***同期**は無料でオープンソースのピアツーピアファイルの同期アプリケーションです

## **結論：** {#block-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}
おめでとう！ UbuntuマシンでApacheを使用して独自のプライベートクラウドを構築するために、owncloudを正常にインストールおよび構成しました。これで、データがサードパーティの手に渡ることはなく、仮想プライベートクラウドOwnCloud Ubuntu Serverストレージで個人的に管理できます。多くの企業は、データのプライバシーに関する多くの問題のために、多くの重要な情報を備えた独自のCloudサーバーを作成することを選択しています。今後のチュートリアルでは、Webサーバーソリューションスタックのより興味深いトピックについて説明します。
_Yourは[Twitter] [2]、[LinkedIn] [3]、および[Facebook] [4]ページに参​​加できます。オンラインで使用していますか？ご質問がある場合は、[ご連絡ください] [5]をお願いします。

## 探検：
また、サーバーの日々の管理に関する他の記事もいくつかあります。
  * [ubuntu/debianの逆プロキシとしてApacheを構成する方法] [6]
  * [ubuntuでnginxを使用してphpmyadminをインストールして保護する方法] [7]
  * [ubuntu 20.04で暗号化してnginxを保護し、暗号化します] [8]
  * [ubuntu/debianでnginxでHTTP/2サポートを構成] [9]
  * [AWSプロダクションサーバーの乗客を備えたnginxをセットアップ] [10]
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
