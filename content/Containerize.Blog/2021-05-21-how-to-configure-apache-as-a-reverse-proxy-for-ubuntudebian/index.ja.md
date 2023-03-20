---
title: "ubuntu/debianの逆プロキシとしてApacheを構成する方法" 
seoTitle: "ubuntu/debianの逆プロキシとしてApacheを構成する方法" 
description: "Apache Reverse Proxy Configuration Stepバイステップでは、Ubuntu/Debian Linuxのmod_proxyを使用して、プロキシサーバーの後ろに1つ以上のバックエンドサーバーを実行できます。" 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxyを使用すると、プロキシサーバーの背後にある1つ以上のバックエンドサーバーを実行できます。 Ubuntu/DebianシステムでApache Reverse Proxyを構成する方法は次のとおりです。" 
url: /ja/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxyを使用すると、プロキシサーバーの背後に1つ以上のバックエンドサーバーを実行できます。 Ubuntu/DebianシステムでApache Reverse Proxyを構成する方法は次のとおりです。

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Apache Reverse Proxyをインストールして構成します">}}


## **概要**
Apache Reverse Proxyを使用すると、すべてのトラフィックが可能になり、プロキシサーバーの後ろにある1つまたは複数のバックエンドサーバーまたはコンテナを公開せずに実行できます。バックエンドWebサーバーは、Nginxのような別のApache2またはオープンソースHTTPサーバーのいずれかにすることができます。 APACHE2 HTTPサーバーは、今日使用されている最も人気のあるオープンソースWebサーバーの1つです。
プロキシサーバーをインストールして構成する理由はたくさんあります。たとえば、リバースプロキシは、攻撃などを防ぐために、負荷分散のためにセキュリティを追加し、特定の場所へのアクセスを制限するのに役立ちます。この記事では、ubuntu/debianのHTTPSサーバーのApache Reverse Proxy構成のインストールと構成の方法について説明します。
  * apache2のインストール
  * apache2を構成します
  *プロキシモジュールを有効にします
  * SSLを有効にします
  * apache2を再起動します
  * 結論

## ステップ1：apache2をインストールします
Apache2のインストールは非常にシンプルで実行が簡単です。インストールを行うには、以下のコマンドを単純に実行します。
sudo apt-getアップデート
sudo apt-getインストールapache2
{{_LINE_25_}}
システムにapache2をインストールした後、Debian Linuxまたはubuntu Linuxバージョンのubuntuで次のSystemCTLコマンドを使用して、apache2を停止、開始、有効にし、再起動して、サーバーが起動したときに常に再起動します。
sudo systemctl stop apache2.service
sudo systemctlは、apache2.serviceを開始します
sudo systemctlは、apache2.serviceを有効にします
sudo systemctl restart apache2.service
{{_LINE_31_}}
次のコマンドを使用してWebサーバーのステータスを表示できます。
sudo systemctl status apache2.service
{{_LINE_34_}}
apache2のセットアップを確認するには、ブラウザを開き、サーバーホスト名またはシステムIPアドレスを参照すると、以下に示すようにapache2デフォルトのテストページが表示されます。それを見ると、Apache2は期待どおりに機能します。 http：// localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="UbuntuのApache Reverse Proxyプロキシをインストールして構成します">}}


## ステップ2：apache2を逆プロキシとして構成します
APACHE2が正常にインストールされ、使用可能です。 Apache2逆プロキシUbuntuとして動作するようにApache2を構成できるようになりました。 apache2プロキシモジュールの** proxypass ** and ** proxypassReverse **関数は、逆プロキシを提供します。 ** proxypass ** and ** proxypassReverse **を使用するには、まずサイトトラフィックを向けたい場所を知っておく必要があります。
Apache2 Reverse Proxy Serverは、デフォルトのHTTPポートのすべてのトラフィックをリッスンします。これは、簡単なセットアップでポート80です。 Webサイトコンテンツをホストするバックエンドサーバーは、カスタムポートでリッスンし、ポート8080である可能性が最も高いです。
このブログ記事では、APACHE2をセットアップしてポート80でリッスンし、ポート8080でリッスンするバックエンドサーバーにトラフィックを向けます。
sudo nano/etc/apache2/sites-abailable/apache2proxy.conf
次に、次のコードブロックをapache2proxy.confファイルに追加してから保存します。
{{_LINE_43_}}
        servername emple.com
        ServerAlias www.example.com
        ServerAdmin webmaster@example.com
        errorlog $ {apache_log_dir}/error.log
        customlog $ {apache_log_dir}/access.log Combined
        プロキシレクエストオフ
{{_LINE_50_}}
          注文拒否、許可
          すべてから許可します
{{_LINE_53_}}
        proxypass/http://127.0.0.1:8080/
        proxypassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          注文許可、拒否
          すべてから許可します
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
apache2proxy.confファイルには、http proxyサーバーが受信したときにトラフィックが向けられるproxy_passだけでなく、サーバー名とproxy_passが含まれます。

## ステップ3：apache2プロキシを有効にします
Apache2 Webサーバーがインストールされ、正常にセットアップされます。 Apacheには、バンドルされたバンドルモジュールがたくさんあります。これらのモジュールは、新鮮なapache2インストールでは有効になりません。まず、必要なApache Mod_Proxyモジュールとそのいくつかのアドオンモジュールを有効にする必要があるモジュールを有効にして、さまざまなネットワークプロトコルをサポートする必要があります。以下のリストされたコマンドを実行して、HTTPプロキシモジュールを有効にします。
sudo a2enmodプロキシ
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
ここで、VirtualHostサイトを有効にし、Apache2を再起動してApache2モジュールの構成をReloadできます。
sudo a2ensite apache2proxy.conf
sudo systemctl restart apache2.service
選択したWebブラウザを起動し、Example.comのようなサーバーホスト名に移動します。これで、デフォルトのポート、つまり8080でapache2サーバーにプロキシになります。

## ステップ4：SSLを有効にします{#block-07b86d83-dca0-4924-b991-206719c342eb}
Apache Reverse Proxy SSLモジュールを有効にする場合は、以下のコマンドを実行してApache Reverse Proxy HTTPS Passを有効にします。
sudo a2enmod ssl
これにより、Secure Apache Reverse Proxy HTTPは、ServersにHTTPSサポートに提供されます。

## ステップ5：apache2を再起動{#block-836bb4ff-17ad-4317-8ecb-153104bd28a7}
これらの変更を有効にするには、以下のコマンドを実行してApacheを再起動します。
sudo systemctl restart apache2.service
おめでとう！ Linuxシステムにapache2リバースプロキシを正常にインストールおよび構成しました。

## **結論：** {#4a1a}
このチュートリアルでは、プロキシサーバーとApache Reverse Proxyの例の構成を段階的に調査して説明しました。また、Linuxシステムの逆プロキシとしてApache2をセットアップおよび構成する方法も学びました。今後のチュートリアルでは、Apacheやその他のWebサーバーソリューションスタックに関するより興味深いトピックについて説明します。

## 探検
また、以下のより関連する記事が好きかもしれません：
  * [方法][1][ubuntuでnginxを使用してphpmyadminをインストールして保護する][2]
  * [AWSプロダクションサーバーの乗客とnginxをセットアップする方法][3]
  * [ubuntu/debianでnginxでHTTP/2サポートを構成][4]
  * [ubuntu 20.04で暗号化してnginxを保護し、暗号化します][5]
  * [ubuntuでapacheでowncloudをインストールして構成する方法][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/ja/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
