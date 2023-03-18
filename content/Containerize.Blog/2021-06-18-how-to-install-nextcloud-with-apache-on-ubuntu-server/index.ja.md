---
title: "UbuntuサーバーにApacheを使用してNextCloudをインストールする方法" 
seoTitle: "UbuntuサーバーにApacheを使用してNextCloudをインストールする方法" 
description: "NextCloudは、PHPで書かれたオープンソースの自己ホストクラウドストレージソリューションです。この記事では、UbuntuにApacheを使用してNextCloudをインストールする方法を示します。" 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloudは、自己ホストされたオープンソースファイルの同期およびコラボレーションソフトウェアです。このチュートリアルでは、UbuntuにApacheを使用してNextCloudをインストールする方法を示します。" 
url: /ja/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloudは、自己ホストされたオープンソースファイルの同期とコラボレーションソフトウェアです。このチュートリアルでは、UbuntuにApacheを使用してNextCloudをインストールする方法を示します。

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="UbuntnにApacheを使用してNextCloudをインストールする方法">}}


## **概要**
** [nextcloud] [1] **は無料で安全な**自己ホストのクラウドストレージソリューション** PHPプログラミング言語で記述されています。 Webインターフェイスを使用してデータアクセスを提供し、Dropboxと機能的に類似しています。 DropboxやGoogleドライブなどの独自のクラウドストレージソリューションは便利ですが、ファイルがシステムに保存されているため、個人データを収集するために使用できます。安全で安全で準拠したファイルの同期と共有ソリューションが必要な場合は、オープンソースNextCloudサーバーに切り替えることができます。 NextCloudのセットアップは、プライベートホームサーバーまたは仮想プライベートサーバーにインストールできます。
NextCloud Open Sourceは、**エンドツーエンドの暗号化**を提供し、サーバーにアップロードする前にファイルをクライアントデバイスで暗号化できることを意味します。また、Collobora、OnlyOffice NextCloudなどのオンラインオフィススイートと統合することもできます。これにより、Doc、PPT、XLSファイルをNextCloudクライアントから直接作成および編集できます。 NextCloudクライアントのダウンロード後、NextCloudサーバーでコンピューターの1つ以上のファイルとフォルダーを共有および同期できます。 NextCloudデスクトップのダウンロードとモバイルクライアントは、制御下のすべてのデバイスで同期および共有するオプションを提供します。ローカル共有ディレクトリにデータファイルを配置すると、これらのファイルはすぐにサーバーと、NextCloud Desktop Syncクライアント、iOSアプリ、またはAndroidデバイスを使用して他のデバイスに同期されます。
このチュートリアルは、Apacheを備えたUbuntu 20.04 LTS LinuxオペレーティングシステムにNextCloudをインストールするのに役立ちます。
  ***前提条件をインストールする（ランプスタック）**
  *** ubuntuの次のクラウドアーカイブをダウンロード**
  *** mysqlデータベースを作成**
  *** NextCloud Webインストーラーを実行**
  ***ラッピング**

## ステップ1：前提条件（ランプスタック）をインストールする
UbuntuにNextCloudをインストールする最初のことは、Ubuntu LTSシステムで** Lamp Server **を実行している必要があることです。システムにログインし、端子ウィンドウにアクセスします。既に実行されている場合**ランプスタック**この手順をスキップしてください。そうしないと、次のコマンドを使用して必要な依存関係をインストールします。

### PHPをインストールします
UbuntuサーバーにPHPバージョン5.6以上のバージョンをインストールすることから始めましょう。
sudo apt-getアップデート
sudo apt-get install -y php php-gd php-curl php-zip php-xml php-mbstring
次のコマンドを使用してPHPバージョンを確認できます。
PHP -V
{{_LINE_29_}}

### apache2をインストールします
次に、コマンドでApacheをインストールします。
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl restart apache2
{{_LINE_34_}}

### mysqlをインストールします
依存関係が邪魔にならないようにするため、次の手順はMySQLデータベースサーバーを保護することです。実行してMySQLデータベースサーバーをインストールします。
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## ステップ2：UbuntuでNextCloud Archiveをダウンロードします
この記事を書いている時点で、NextCloudの最新バージョンは22.0.0.0Beta5です。システムにLamp Serverを正常に構成した後、[公式Webサイト] [2]からNextCloudをダウンロードしましょう。
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
NextCloud Serverのダウンロードが完了したら、Webサイトのドキュメントルートでダウンロードされたアーカイブを抽出し、次のクラウドディレクトリの所有権をファイルとディレクトリのwww-dataに設定します。
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data：www-data nextcloud
Sudo Chmod -R 755 NextCloud
{{_LINE_49_}}
次に、ダウンロードされたアーカイブファイルを削除します。
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## ステップ3：MySQLデータベースを作成します
ソースコードを抽出した後、NextCloud MySQLデータベースとユーザーアカウントを作成して、NextCloudを構成しましょう。次のコマンドセットを使用してMySQLサーバーにログインし、NextCloudデータベース、ユーザー、MySQLコンソールから出口を作成します。
mysql -u root -p
パスワードを入力する：
mysql> [データベースNextCloud]を作成します。
mysql> nextcloudにすべて付与します。
mysql>フラッシュ特権。
mysql> quit
{{_LINE_61_}}

## ステップ4：NextCloud Webインストーラーを実行します
この時点で、NextCloudはUbuntu 20.04を正常にインストールし、構成します。次に、以下のようなWebブラウザでNextCloud Configuration Directoryを開き、URL http://your-domain.comを入力します。ローカルホストをサーバーIPアドレスまたはドメイン名に変更します。次の画面が表示されます。
http：// localhost/nextcloud/or http：// your_domain_name/nextcloud/
{{_LINE_65_}}
新しい管理者資格情報を入力して、管理者アカウントを作成し、データフォルダーの場所を提供します。
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Ubuntu LinuxサーバーにApacheを使用してNextCloudをインストールする方法">}}

{{_LINE_69_}}
次に、ページを下にスライドさせ、データベース名、データベースのユーザー名、パスワードを入力し、[セットアップの完了]ボタンをクリックします。
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="ApacheでNextCloud Ubuntu 20.04をインストールする方法">}}

{{_LINE_73_}}
インストールが終了したら、次の画面にNextCloud管理ダッシュボードが表示されます。ここでは、ユーザー、グループを作成し、アクセス許可などを割り当てることができます。
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Apacheを使用してUbuntuにNextCloudをインストールします">}}

{{_LINE_77_}}
おめでとうございます、Ubuntu LTSシステムに次のCloud On-Premise Cloudソリューションが機能しています。これで、クラウドサーバーのカスタマイズを開始して、ニーズを完全に満たすことができます。

## **ラッピング：** {#4a1a}
おめでとう！ Apache **を使用してUbuntuサーバーにNextCloudを構成およびインストールしました**。プライベートクラウドの作成方法を学びました。 NextCloud Ubuntu Serverは、ほぼすべてのプライベートまたはハイブリッドクラウドストレージのニーズに対応できる素晴らしいクラウドストレージコラボレーションプラットフォームです。これで、UbuntuにNextCloudをインストールする方法がわかり、データが安全で安全に保護されています。今後のチュートリアルでは、Webサーバーソリューションスタックに関連するより興味深いトピックについて説明します。
_クラウドベースのセルフホストストレージソリューションはどんなものですか？ご質問がある場合は、[ご連絡ください] [3] ._

## 探検：
サーバーの日々の管理に関連する記事をフォローすることができます。
  * [ubuntuでapacheでowncloudをインストールして構成する方法] [4]
  * [ubuntuまたはdebianの逆プロキシとしてApacheを構成する方法] [5]
  * [ubuntuでnginxを使用してphpmyadminをインストールして保護する] [6]
  * [ubuntu 20.04で暗号化してnginxを保護し、暗号化します] [7]
  * [ubuntu/debianでnginxでHTTP/2サポートを構成] [8]
  * [AWSプロダクションサーバーの乗客を備えたnginxをセットアップ] [9]
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
