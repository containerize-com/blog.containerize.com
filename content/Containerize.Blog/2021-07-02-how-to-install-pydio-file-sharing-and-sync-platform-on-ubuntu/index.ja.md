---
title: "UbuntuにPydioファイル共有と同期プラットフォームをインストールする方法" 
seoTitle: "UbuntuにPydioファイル共有と同期プラットフォームをインストールする方法" 
description: "Pydioは、オープンソースファイル共有および自己ホストの共同ドキュメント共有ソフトウェアです。 Pydioファイル共有と同期ツールのインストール方法を確認しましょう。" 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydioは、クラウドベースのファイル共有および同期プラットフォームであり、すべてのデータに任意のデバイスにアクセスします。このチュートリアルは、UbuntuにPydioをインストールする方法に関するものです。" 
url: /ja/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydioは、クラウドベースのファイル共有および同期プラットフォームであり、すべてのデータに任意のデバイスにアクセスします。このチュートリアルは、UbuntuにPydioをインストールする方法に関するものです。

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="UbuntuにPydioファイル共有と同期プラットフォームをインストールする方法">}}


## **概要**
Pydio Cellsは、オープンソースファイル共有および同期ソフトウェアです。すべてのデータストレージへのアクセスの1つのポイントを提供し、ストレージサービス、ファイル共有、同期を提供するOwnCloudおよびNextCloudに代わるものです。 Pydioは、Dropboxやその他のストレージプラットフォームと同様のエンタープライズオープンソースファイル共有プラットフォームです。 1つのプラットフォームですべてのファイルとデバイスを安全に接続するのに役立ちます。
Pydio Cellsは、クラウドベースのファイルの同期およびコラボレーションプラットフォームです。このオープンソースソフトウェアは、個人のITインフラストラクチャで実行され、スタッフがビジネスデータを保護および監視するのに役立ちます。モバイルアプリ、デスクトップソフトウェア、またはPydioセルを使用してWebブラウザーを使用して、データを同期してどこからでもアクセスできます。 Pydio Cells Best File共有アプリは、マイクロサービスアーキテクチャに基づいており、Golangプログラミング言語を使用して記述されています。
このチュートリアルは、Ubuntu LTSシステムにPydio Self Hosted File Sharing Softwareと同期プラットフォームをインストールおよび構成するのに役立ちます。
  * 入門
  *ランプサーバーをインストールします
  * UbuntuにPydioをインストールします
  * Pydioデータベースとユーザーを作成します
  *ブラウザにPydioにアクセスします
  * 結論

## ステップ1：開始
インストール前に、システムが最新のパッケージを実行していることを確認する必要があります。以下のコマンドを使用して、ubuntu 20.04サーバーを更新します。
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
更新後、新しい変更を有効にするためにサーバーを再起動することを常にお勧めします。
```
sudo reboot
```

## ステップ2：ランプサーバーをインストールします
Pydio Secure Enterpriseファイル共有サーバーとオープンソースのプライベートクラウドの作成方法をセットアップするには、まずランニングランプサーバーをセットアップする必要があります。既にインストールしてランプスタックを実行している場合は、この手順をスキップしてください。そうしないと、Ubuntuシステムにランプをセットアップするためにフォローイングコマンドを使用します。

### PHPをインストールします
コマンドを実行して、ubuntuまたはdebianシステムにPHPをインストールできます。
sudo apt-getインストールpython-software-properties
sudo add-papt-repository ppa：ondrej/php
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

### apache2をインストールします
Apacheは、最も広く使用されているオープンソースWebサーバーソフトウェアです。次に、実行してubuntuにApache Webサーバーをインストールします。
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

### mysqlをインストールします
MySQLオープンソースリレーショナルデータベース管理システムは、ランプWebアプリケーションソフトウェアスタックなどのコンポーネントです。以下で実行して、ubuntuにmysqlをインストールします。
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
インストールが完了したら、編集するために[intall.ini **設定ファイル]を開きます。推奨されるファイルエディターを使用します。
以下のようにphp.iniファイルに変更を加えます。 2つのファイルを開き、図のように変更を加えます
```
sudo vim /etc/php/7.4/apache2/php.ini
```
次の変更を加えます
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
ファイルを保存して閉じて、他のphp.iniファイルの編集に進みます
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## ステップ3：UbuntuにPydioをインストールします
まず、Pydio Best Free File ShariningソフトウェアリポジトリをUbuntu 20.04サーバーに追加する必要があります。これはまだ利用できないためです。また、ビジネスの公開キー向けにPydio Bestファイル共有システムを追加し、システムリポジトリを更新してください。
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Pydio EFSSとドキュメント共有ソフトウェアをインストールする時が来ました。図のようにコマンドを実行します
```
sudo apt install -y pydio pydio-all
```
Apacheを有効にして、以下に表示されているコマンドを使用してモジュールを書き換え、Apache2を再起動して有効にします
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
以下のコマンドを使用してApacheサービスが実行されていることを確認してください。
```
sudo systemctl status apache2
```
Apache2サービスが実行されていることを示す、インストールが適切に行われた場合、出力は示されるようにする必要があります。

## ステップ4：Pydioデータベースとユーザーを作成します
コードを抽出した後、MySQLデータベースとユーザーアカウントを作成してPydioを構成しましょう。次のコマンドセットを使用してMySQL Serverにログインして、AjaxPlorer SharesyncまたはPydioデータベースとユーザーを作成します。
mysql -u root -p
パスワードを入力する：
mysql>データベースpydioを作成します。
mysql> pydioですべてを付与します。
mysql>フラッシュ特権。
mysql> quit
{{_LINE_69_}}
次に、プライベートクラウドを作成するには、WebインターフェイスからUbuntuにPydioをインストールする必要があります。

## ステップ5：ブラウザにPydioにアクセスします
ブラウザを開き、URL _http：/// pydio_を入力します。図のようにページが表示されます
Pydioプライベートクラウドファイル共有とビジネスファイル共有ソフトウェアがインストールされ、構成され、Webインターフェイスにアクセスする時が来ました。
ブラウザを開き、url http：// your-server -ip / pydioを入力します。次のページにリダイレクトされます。

{{< figure align=center src="images/Pydio-Installer.png" alt="Pydioインストーラー">}}

すべてのコントロールを確認し、[** Pydioのインストール]をクリックします**ボタン。次のページを表示する必要があります。

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydioセットアップウィザード">}}

言語を選択して、[wizard **を開始] **をクリックします。次のページを表示する必要があります。

{{< figure align=center src="images/Starting-the-setting.png" alt="Pydio設定を開始します">}}

プログラム名とウェルカムメッセージを入力してください。次に、[次に**]ボタンをクリックします。次のページを表示する必要があります。

{{< figure align=center src="images/Enter-the-application-name.png" alt="Pydioアプリケーションを入力します">}}

次に、管理者アカウントを入力し、[次の**]ボタンをクリックします。次のページを表示する必要があります。

{{< figure align=center src="images/MySQL-database-settings.png" alt="MySQLデータベース設定">}}

次に、データベース名、ユーザー名、パスワードなどのデータベースの詳細を入力します。次に、[db接続をテスト**]ボタンをクリックします。次のページを表示する必要があります。

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Pydio Advanced Options">}}

次に、** Pydio **インストールボタンをクリックします。インストールが正常に完了したら。次のページにリダイレクトされます。

{{< figure align=center src="images/Pydio-Login.png" alt="Pydioログイン">}}

次に、管理者にユーザー名とパスワードを入力します。 [入力]ボタンをクリックします。次のページを表示する必要があります。

うん！完了しました。 Pydioの自己ホストファイル同期とオープンソースファイル共有ソフトウェアをUbuntuに完全にインストールする方法を知っていることがわかりました。

## **結論：** {#4a1a}
このチュートリアルでは、UbuntuシステムにPydioセルオープンソースセキュアファイル共有を正常にインストールしました。この記事を使用して、自己ホストクラウドにファイルを保存、保護、共有するためのクラウドインフラストラクチャを作成できます。 Pydioコラボレーションドキュメント共有と最高の無料ファイル共有アプリを使用して、データをより制御し、ビジネス組織で効率的なコラボレーションを確保します。今後のチュートリアルでは、オープンソースクラウドストレージソリューションとファイル共有コラボレーションツールのより興味深いトピックについて説明します。
_Yourは[Twitter] [1]、[LinkedIn] [2]、および[Facebook] [3]ページに参​​加できます。どのクラウドベース_オープンソース_FILE共有プラットフォームをオンラインで使用していますか？ご質問がある場合は、[ご連絡ください] [4]をお願いします。

## 探検：
また、サーバーの日々の管理に関する他の記事もいくつかあります。
  * [ubuntu/debianの逆プロキシとしてApacheを構成する方法] [5]
  * [ubuntuでnginxを使用してphpmyadminをインストールして保護する方法] [6]
  * [ubuntu 20.04で暗号化してnginxを保護し、暗号化します] [7]
  * [ubuntu/debianでnginxでHTTP/2サポートを構成] [8]
  * [AWSプロダクションサーバーの乗客を備えたnginxをセットアップ] [9]
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
