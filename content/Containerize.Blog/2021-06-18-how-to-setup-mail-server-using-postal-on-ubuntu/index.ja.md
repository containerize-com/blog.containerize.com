---
title: "ubuntuで郵便を使用してメールサーバーをセットアップする方法" 
seoTitle: "ubuntuで郵便を使用してメールサーバーをセットアップする方法" 
description: "Open Source Mail Serverを使用して、Webアプリからメールを送信します。 Postalを使用すると、SMTP＆HTTP APIを使用して電子メールを送信し、電子メールトラフィックも監視できます。" 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "オープンソースのメールサーバーで電子メールを送信して受信します。この記事では、会社の郵便郵便サーバーのインストールと構成を支援します。" 
url: /ja/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## オープンソースのメールサーバーで電子メールを送信して受信します。この記事では、会社の郵便郵便サーバーのインストールと構成を支援します。

{{< figure align=center src="images/postal-banner.png" alt="オープンソースメールサーバー">}}

最新のアプリケーションには、さまざまな種類のイベントに関する電子メールを送信する必要があります。すべてのビジネスには、送信電子メールの信頼できる**メールサーバー**が必要です。さらに、企業は、マーケティングキャンペーン、ニュースレター、その他多くのタスクのために大量の電子メールを送信するためのメールサーバーを必要としています。これで利用可能な**オープンソースメールサーバーがいくつかあります。ただし、この投稿では**郵便サーバー**について詳しく説明し、次のトピックについて説明します。
  * [郵便郵便サーバーとは？][1]
  * [郵便の特徴][2]
  * [郵便設置][3]
  * [結論][4]

## Postal Mail Serverとは何ですか？ {#郵便}
[**郵便**][5]は無料で**オープンソースメールサーバー**です。これは、WebサイトやWebアプリケーション用のフル機能のメールサーバーです。 Postal Mail Serverは、SendGridやMailgunなど、既存の人気のある**メールサーバー**に代わるものです。 ** Postal **は、堅牢で安全でスケーラブルなオープンソースの電子メール配信プラットフォームです。すべてのソースコードとドキュメントは[** github **][6]で入手できます。ダウンロードして、プライベートサーバーにインストールして、それを完全に制御できます。また、ビジネスニーズに従って改善および強化することもできます。さらに、**郵便郵便サーバー**は複数の組織をサポートしています。
ユーザーは、着信と発信の郵便物の量を示すグラフと統計を表示できます。さらに、完全な発信および着信メッセージキューにアクセスできます。 Postal Mail Serverは、Webhooksの機能を提供します。 Webhooksをセットアップして、配信情報に関するライブ情報をリアルタイムで受信できます。また、すべての送信および受信メッセージを保存および調べることができるメッセージ保持も提供します。ユーザーが電子メールを受け取ることを保証するために、電子メール配信はビジネスで非常に重要です。ただし、電子メールがユーザーに配信され、問題を調査する必要がある場合があります。 **着信と発信のメールサーバー**は、調査を行うための完全なロギングとツールも提供します。

## 郵便{#features}の機能
Postal Mail Serverには多くの機能があります。ただし、この記事では、次の重要な機能について説明します。
**電子メールの送信**：Postal Mail Serverは、HTTP APIやSMTPを含む発信電子メールの2つの手法を提供します。 Webアプリとの統合には、HTTP APIを簡単に使用できます。 SMTPサーバーを使用して、既存のアプリケーションやシステムと統合することもできます。
**着信電子メール**：**入ってくるメール**は、郵便メールサーバーを使用して、http endpoint、** smtp server **、およびその他のメールアドレスに転送できます。
**スパムとウイルスのチェック**：スパマッサシンとクラマブを郵便と統合して、メールサーバーを通過するときに着信と発信メッセージを自動的にスキャンできます。この機能もデフォルトでオフになります。
**クリックして追跡を開きます**：電子メールの開きとクリックを郵便で追跡できます。 Postalは、発信メッセージをスキャンし、郵便Webサーバーを介して移動する新しいリンクにリンクを置き換えます。ユーザーがリンクをクリックすると、郵便はアクションを記録し、すぐに元のURLにリダイレクトします。ただし、これはデフォルトではアクティブ化されていません。
** IPプール**：郵便では、さまざまなIPアドレスからメッセージを送信できます。これにより、異なるメールサーバーに複数のIPアドレスを割り当てたり、送信者または受信者アドレスに応じて異なるIPから送信したりできます。

## 郵便インストール{#installation}
以下のステップバイステップガイドをフォローして、郵便サーバーソフトウェア**をubuntu 18.04にインストールします。
  *最初に、サーバーVIS SSHを接続する必要があります。次のコマンドを実行して、最新の利用可能なパッケージでシステムを更新します。
```
sudo apt-get update
```

### Mariadbデータベースサーバーをインストールします
  *コマンドを実行してMariadbをインストールします。
```
sudo apt install mariadb-server libmysqlclient-dev
```
  *インストールを完了したら。これで、以下のコマンドを実行して保護する必要があります。
```
mysql_secure_installation
```
  *次に、以下に示すようにいくつかの質問をします。すべての質問に答える必要があります。
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  *次のコマンドを使用してMariadBサーバーに接続します。
```
mysql -u root -p
```
  *郵便のデータベースを作成します。
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  *次に、新しいパスワードを使用して「Postaluser」というデータベースユーザーを作成します。
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  *その後、ユーザーに「Postaluser」データベースへの完全なアクセスを許可します。
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  *次に、特権を洗い流し、次のコマンドでMariadbシェルから出てください。
```
FLUSH PRIVILEGES;
EXIT;
```

### Rubyをインストールします
  *まず、サードパーティPPAを追加してRubyをインストールします。次のコマンドを実行します。
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Ubuntuパッケージを更新します。
```
sudo apt update
```
  *以下のコマンドを実行してRubyをインストールします。
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### rabbitmqをインストールします
  * erlangはrabbitmqをインストールする必要があるため、インストールする必要があります。以下のコマンドを使用して、ubuntuにerlangリポジトリキーを追加します。
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  *次に、次のコマンドでErlangリポジトリを追加します。
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  *次のコマンドを実行して、Erlangをインストールします。
```
sudo apt-get update
sudo apt-get install erlang
```
  * Erlangのインストールが完了したら、RabbitMQのインストールに進むことができます。 rabbitmqリポジトリをubuntuに追加します。
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  *次のコマンドでrabbitmq gpgキーを追加します。
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  *以下のコマンドを実行して、RabbitMQパッケージをインストールします。
```
sudo apt update
sudo apt install rabbitmq-server
```
  * rabbitmqを有効にするためにコマンドを下回って実行するため、システムが起動するときは常に起動します。
```
sudo systemctl enable rabbitmq-server
```
  *次に、郵便用にrabbitmq vhostとユーザーを作成する必要があります。次のコマンドを実行します。
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### nodejsをインストールします
  *次のコマンドでnodejsリポジトリを追加します。
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  *次に、以下のコマンドを実行してNodeJSをインストールします。
```
sudo apt-get install nodejs
```

### 郵便郵便サーバーをインストールします
  *最初に、郵便メールサーバー用のユーザーを作成する必要があります。次のコマンドで作成します。
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  *次に、RubyがWebポートで聴くことを許可します。
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  *次のコマンドを使用して、必要なすべての宝石をインストールします。
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  *郵便のディレクトリ構造を作成します。
```
sudo mkdir -p /opt/postal/app
```
  *次に、Postalの最新バージョンをダウンロードします。
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  *次のコマンドでダウンロードしたファイルを抽出します。
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  *次に、郵便ディレクトリの所有権を変更します。
```
sudo chown -R postal:postal /opt/postal
```
  *以下のコマンドを実行して、郵便バイナリのシンリンクを作成します。
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  *必要な依存関係をすべてインストールします。
```
sudo postal bundle /opt/postal/vendor/bundle
```
  *以下のコマンドを実行して、郵便構成を初期化します。
```
sudo postal initialize-config
```
  *次に、次のコマンドを実行して、郵便構成ファイルを開きます。
```
sudo nano /opt/postal/config/postal.yml
```
  *太字で示された変更を行い、ファイルを保存します。
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  *コマンドを実行して、データベースを初期化します。
```
sudo postal initialize
```
  *郵便用の管理者ユーザーを作成します。
```
sudo postal make-user
```
  *次に、以下の表示としてユーザーアカウントの詳細を提供する必要があります。
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```
  *最後に、次のコマンドを実行して、郵便申請のステータスを開始および確認します。
```
sudo -u postal postal start
sudo -u postal postal status
```

### nginxをインストールします
  *以下のコマンドを実行して、Nginx Webサーバーをインストールします。
```
sudo apt install nginx
```
  *次に、郵便nginx configをコピーして、仮想ホストとして使用します。
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  *自己署名SSL証明書を作成します。
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  *その後、質問に答える必要があります。
  * nginxデフォルトの仮想ホストファイルを開きます。
  * server_nameの値を変更し、ファイルを保存します。
  *最後に、以下のコマンドを実行してNginx Webサーバーを再起動します。
```
sudo systemctl restart nginx
```
  *最後に、ブラウザを開き、URL https://postal.example.comを入力します。ログインページにリダイレクトされます。

## 結論{#conclusion}
郵便郵便サーバーの紹介と主要な機能を非常に深く説明しました。また、この**メール転送エージェント**をセットアップするための段階的な指示も含まれています。さらに、セットアップについての洞察を与えました。郵便郵便サーバーのセットアップは簡単なプロセスです。この記事があなたのビジネスのために郵便郵便サーバーの設定と構成に本当に役立つことを願っています。
最後に、[** containerize.com **][7]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[**トランザクションメール**][8]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  *[**トップトランザクションメールソフトウェア**][9]
  *[** POTAL  - オープンソースメールサーバー**][5]
  *[** 5 2020年のビジネスのための最高のオープンソースメールサーバーソフトウェア**][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
