---
title: "ubuntuでnginxを使用してphpmyadminをインストールして保護する方法" 
seoTitle: "ubuntuでnginxを使用してphpmyadminをインストールして保護する方法" 
description: "PHPMyAdminは、PHPで記述されたオープンソースデータベース管理ソフトウェアです。 nginxでphpmyadminをインストールし、phpmyadminを介してmysqlを管理する方法を学びます" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PHPMyAdminは、PHPで記述されたオープンソースグラフィカルWebインターフェイスデータベース管理ツールです。このチュートリアルでは、nginxを使用してphpmyadminをインストールする方法を学びます。" 
url: /ja/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## phpmyadminは、PHPで記述されたオープンソースグラフィカルWebインターフェイスデータベース管理ツールです。このチュートリアルでは、nginxを使用してphpmyadminをインストールする方法を学びます。

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="ubuntuでnginxを使用してphpmyadminをインストールして保護する方法">}}


## **概要**
PHPMyAdminは、直感的なインターフェイスを介してMySQLまたはMariaDBサーバーを管理するためのWebインターフェイスをユーザーに提供する無料のオープンソースデータベース管理ツールです。これは、人気のあるホスティングプロバイダーのほとんどが提供する広くサポートされているソフトウェアの1つであり、Web管理者がPHPMYADMINでデータベースを作成し、データベースを管理し、SQL-STATEMENTSを実行し、データを簡単にインポートおよびエクスポートできるようにします。 PHPMyAdminを使用してPHPMyAdminのMySQLまたはMariadBデータベースにアクセスでき、PHP開発環境に沿って実行され、グラフィカルなWebインターフェイスを簡単に実行できます。
このガイドでは、ubuntu 20.04でnginxを使用してphpmyadminをインストールして保護する方法をステップについて説明します。 UbuntuサーバーにPHPMyAdminをインストールして構成して、MySQLデータベースとテーブルを簡単に動作させる必要があります。それでは、ubuntu 20.04 / 20.10でnginxを使用してphpmyadminをインストールして保護する方法を学びましょう：
  *前提条件
  * phpmyadminをインストールします
  *データベースを構成します
  *シンボリックリンクを作成します
  * phpmyadminへのアクセス
  * MySQLスーパーユーザーを作成します
  * PHPMYADMINを保護します
  * 結論

## ステップ1：前提条件{#id-preceisites}
このガイドに従うには、ローカルコンピューターまたは前提条件を備えたリモートサーバーでubuntu 20.04サーバーを実行する必要があります。
  * SUDO特権を持つ非ルートユーザーとしてサーバーにアクセスし、UFWファイアウォールを有効にする必要があります。
  * UbuntuにNginx、MySQL、およびPHPをすでにインストールしていると想定されています。
  * PhpMyAdminがMySQL資格情報を使用して認証を取得するため、SSL/TLS証明書もインストールして、サーバーとクライアント間の暗号化されたトラフィックを有効にする必要があります。
それが邪魔にならないように、Webインターフェイスを介してデータベースにアクセスするためにMySQL Serverに接続するために、PHPMYADMINをインストールしてセキュリティで固定しましょう。

## ステップ2：phpmyadminをインストール{#id-1-install-phpmyadmin}
Ubuntu 20.04にphpMyAdminをインストールする前に、システムにすべての前提条件を正常にインストールしたことを確認してください。パッケージリストを更新することから始めます。
```
sudo apt update 
```
次に、ubuntu 20.04 / 20.10のデフォルトのubuntuリポジトリからphpmyadminパッケージをインストールするために、次のコマンドを実行します：
```
sudo apt install phpmyadmin

```
** y **と**を押してください**続行するように求められたら**を入力します。以下のように** nginx **のオプションがないため、Webサーバーを選択するように求められている場合は、**タブ**を押して[OK]を選択してから** ** Webサーバーを選択せず​​に続行します。

{{< figure align=center src="images/mysql-setup.png" alt="ubuntu 20.04でnginxのphpmyadminをインストールして保護します">}}


## ステップ2：データベースを構成{#id-1-install-phpmyadmin}
次に、**はい**を選択し、**を押して**を押して、dbconfig-commonツールを使用してデータベースをインストールしてセットアップします。

{{< figure align=center src="images/phpmyadmin-install2.png" alt="phpmyadminでmysqlを構成する方法">}}

MySQLアプリケーションパスワードは、PHPMyAdminによって内部的に使用され、MySQLデータベースと通信します。 PHPMyAdmin DBMSの新しいパスワードを入力して、新しいデータベースとして登録し、[OK]を選択してENTERを押して続行します。

{{< figure align=center src="images/phpmyadmin-install3.png" alt="phpmyadmin用にmysqlを構成する方法">}}

パスワードを確認するように求められ、同じパスワードを入力し、** ok **を選択して**を押してください**を押します。おめでとう！ PHPMyAdminはシステムに正常にインストールされています。

## ステップ4：シンボリックリンクを作成{#id-2-create-symbolic-link}
phpmyAdminファイルを提供するようにnginxを構成する方法はいくつかあります。ドメインのサーバーブロックが既に設定されている場合、PHPリクエストを提供するには、PHPMyAdmin nginxインストールファイル/usr/share/phpmyadminからドメインドキュメントルートルートディレクトリにシンボリックリンクを作成する必要があります。 Ubuntu 20.04/20.10のNginxドキュメントルートのデフォルトの場所は/var/www/html/である必要があり、INSセットアップによって異なる場合があります。ドキュメントルートは、/var/www/example.com/public_htmlなどの配置されている場合があります。
次に、PHPMyAdminディレクトリ/usr/share/phpmyadminからドキュメントルートにシンボリックリンクを作成します。ここでは、ドキュメントルートが/var/www/html/であると仮定し、これの最後にphpmyadminを追加するだけです。これにより、url example.com/phpmyadminでphpmyadminにアクセスできます
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## ステップ5：phpmyadminへのアクセス{#id-3-test-phpmyadmin}
これで、サーバーのホスト/ドメイン名またはパブリックIPアドレスにアクセスして、お気に入りのWebブラウザーでdomain.com/phpmyadminが続くことにより、PHPMyAdmin Webインターフェイスにアクセスできるようになりました。たとえば、http://example.com/phpmyadminまたはhttp://192.168.1.10/phpmyadmin
{{_LINE_48_}}
MySQL 5.7以降で実行されているUbuntuサーバーでは、MySQLのデフォルトルートアカウントを使用して無料のPHPMyAdminデータベースにログインできず、_「ユーザーの「ルート」@'localhostのアクセスが拒否された」などのエラーが表示されます。代わりに、phpMyAdminのみの新しいスーパーユーザーアカウントを作成する必要があります。次に、mySQLルートアカウントを作成して、phpMyAdminにログインします。

## ステップ6：mysqlスーパーユーザーを作成{#id-4-create-mysql-superuser}
ターミナルでは、MySQLルートパスワードを使用してMySQLにログインして開始します。これは、初めてPHPMyAdmin MySQLデータベースをインストールしたときにルートパスワードを作成した可能性があります。
```
sudo mysql -u root -p
```
MySQLにログインした後、選択したユーザー名で新しいMySQLスーパーユーザーを追加します。この例では、Yasiradminと呼んでいます。 [ここをクリックして、強力なパスワードを生成して] [2]、以下の新しい\ _password \ _hhereを置き換えます。
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
現在、新しいユーザーYasiradminにスーパーユーザーの特権を付与します。
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
MySQLセッションを終了します。これで、この新しいスーパーユーザー資格情報を使用してPHPMyAdminにアクセスできるようになりました。

{{< figure align=center src="images/image.png" alt="Ubuntu 20.04でphpmyadminをログインする方法">}}

phpMyAdmin nginxを保護するために、phpMyAdminの追加セキュリティをセットアップすることを強くお勧めします。 PHPMyAdmin URLを変更して、不明瞭なURLのようなものにアクセスできるはずです。

## ステップ7：Secure PhpMyAdmin {#id-6-secure-phpmyadmin-recommend}
次に、Nginxで認証をセットアップして、セキュリティの追加レイヤーを提供する必要があります。次に、apache2-utilsをインストールします。これにより、nginxとapache2サーバーの両方で動作する.htpasswdファイルを生成できます。
```
sudo apt install apache2-utils
```
インストールしたら、.htpasswdファイルを生成できます。選択したユーザー名を変更します。 [パスワードを生成] [3]を安全に保ちます。
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
これで、ユーザー名と暗号化されたパスワードを含む.htpasswdファイルがあります。以下のコマンドでこれを確認できます。
```
cat /etc/nginx/.htpasswd
```
usernameのようなものが表示されます：$ 1SDFSDF435SDTSKLFWMMG1SFDSDGG4
次に、NGINX構成ファイルに2つのディレクティブを追加する必要があります。設定ファイルの場所は、インストールによって異なる場合がありますが、デフォルトのファイルパスは通常/etc/nginx/sites-abailable/defaultにあります。複数のドメインを設定すると、構成ファイルは/etc/nginx/sites-abailable/example.comのようなどこかに配置される場合があります
この例では、nginx構成ファイルが/etc/nginx/sites-available/defaultにあると仮定します。ファイルを開いて編集します。
```
sudo nano /etc/nginx/sites-available/default
```
下にスクロールして、ロケーションブロックを探して、不明瞭なphpmyAdminフォルダーの名前で下の新しいブロックに貼り付けます。
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
ファイルを保存して終了します（Ctrl + xを押し、yを押してからEnterを押します）。 nginx構成ファイルが有効であることを確認します。そうしないと、コマンドを実行してサーバーが再起動時にクラッシュする可能性があります。
```
sudo nginx -t
```
有効な場合は、nginx configをリロードします。
```
sudo service nginx reload
```
example.com/aspose_hiddenにアクセスするときは、認証ウィンドウを表示する必要があります。

{{< figure align=center src="images/auth3.png" alt="phpmyadminを保護する方法">}}

Ubuntu ServerのphpmyAdminインストールはすべて完了です。

## 結論：{#id-what-next}
おめでとうございます。Ubuntu20.04 / 20.10サーバー用のNginxを使用してPhpMyAdminをインストールし、PHPMyAdminを介してMySQLを管理できるようになりました。これで、MySQLデータベース、ユーザー、テーブルの作成を開始し、MySQLクエリやその他のさまざまな操作を実行できます。
ご質問がある場合は、コメントセクションでお気軽にご連絡ください。

## 探検
また、以下のより関連する記事が好きかもしれません：
  * [ubuntu/debianの逆プロキシとしてApacheを構成する方法] [4]
  * [ubuntu 20.04で暗号化してnginxを固定して暗号化する方法] [5]
  * [ubuntu/debianでnginxでHTTP/2サポートを構成する方法] [6]
  * [AWSプロダクションサーバーの乗客とNginxをセットアップする方法] [7]
  * [ubuntuでapacheでowncloudをインストールして構成する方法] [8]
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
