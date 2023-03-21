---
title: "Nginx Amplifyを使用してNginx Webサーバーを監視する方法" 
seoTitle: "Nginx Amplifyを使用してNginx Webサーバーを監視する方法" 
description: "Nginx Amplifyは、Nginx WebサーバーとPHPアプリケーションの無料監視エージェントです。この記事は、Nginx Amplifyを使用してNginx Webサーバーを監視する方法に関するものです" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "NGINX、PHPアプリケーション、NGINXが増幅し、構成を改善したオペレーティングシステムを監視します。この記事では、Nginx Amplifyのセットアップと構成をガイドします。" 
url: /ja/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## NGINX、PHPアプリケーション、NGINXが増幅して構成を改善したオペレーティングシステムを監視します。この記事では、Nginx Amplifyのセットアップと構成をガイドします。

{{< figure align=center src="images/nginx-post.png" alt="Nginx Amplifyを使用してNginx Webサーバーを監視します">}}


## 概要 {#install}
**Webサーバーの監視**は、交通量の多いWebサイトにとって非常に重要です。 **監視エージェント** は、Webサーバーに関する重要なメトリックを定期的に記録します。これらの重要なメトリックを使用して、NGINX構成を最適化できます。これは、Webサーバーとアプリケーションのパフォーマンスを改善するのに役立ちます。
このブログ投稿では、 **nginx監視** オープンソースツールについては、次のセクションについて説明します。
  * [nginx webサーバー][1]
  * [nginx amplify][2]
  * [nginx amplifyをインストール][3]
  * [監視指標][4]

## nginx webサーバー {#nginx}
[nginx][5]は、無料でオープンソースのWebサーバーです。 Apacheよりもシンプルで軽量で構成が簡単です。 Nginx Webサーバーは、リバースプロキシ、ロードバランサー、メールプロキシ、およびHTTPキャッシュとしても機能します。 HTTP、HTTPS、SMTP、POP3、およびIMAPプロトコルで機能します。 Nginxは、アプリケーションのパフォーマンスを向上させる高速で信頼性が高く、メモリ効率の高いWebサーバーです。さらに、それは人気が高まっており、現在では最も人気のあるWebサーバーと見なされています。さらに、NGINXは、交通量の多いサイトやアプリケーションを含むあらゆるタイプのWebサイトに適しています。ほぼすべてのオペレーティングシステムにインストールして構成できます。

### nginxをインストールします
  *コマンドを下に実行して、NGINX Webサーバーをインストールします。
```
sudo apt update
sudo apt install nginx
```
  *インストールが完了したら、ブラウザを開き、「http：// ip \ _of \ _your_server」と入力します。以下のウェルカムページが表示されます。

{{< figure align=center src="images/nginx-home.png" alt="Nginxのへようこそ！">}}


## nginx amplify   {#amplify}
Nginx Amplifyは、Nginxオープンソース、Nginx Plus、およびPHP-FPMの無料監視ツールです。 Nginxサーバーの監視とアプリケーション用のSaaSベースのツールです。ユーザーは、インフラストラクチャアセットを簡単に追跡し、パフォーマンスを監視し、構成を調整できます。ユーザーが利用してWebサーバーとアプリケーションの構成を最適化できる包括的な情報を提供します。 NginxおよびPHPアプリケーションをホストするサーバー上のエージェントとして機能します。 Nginx Amplifyは、パフォーマンスを損なうことなく、軽量のプッシュログと監視データを監視してサーバーを増幅します。 Amplifyダッシュボードでメトリックを表示できます。エージェントは、Rhel、Centos、Ubuntu、Debian、Fedora、FreeBSDなどのすべての主要なオペレーティングシステムで利用できます。 Nginx Amplifyには、Nginx Amplify Agent、Nginx Amplify Web UI、Nginx Amplify BackEndなどの3つの主要なコンポーネントがあります。
  ***nginx Amplify Agent**   - 監視されているシステムで動作します。すべての通信は、SSL/TLSを使用して暗号化されます。
  ***nginx Amplify web ui**   -  Web UIは、Webサーバー、アプリケーション、およびオペレーティングシステムのメトリックを表示します。
  ***nginx Amplify BackEnd**   - これは、SaaSとして実装された重要なコンポーネントであり、メトリックの収集、データベースの維持、分析エンジンの実行、コアAPIの提供を担当します。

## インストールnginx amplify   {#install}
UbuntuにNginx Amplifyをインストールするためのステップバイステップガイドを参照してください。
  *最初に、Nginx [Webサイト][6]でアカウントを作成する必要があります。
  *ログイン後、NGINX Amplify Webサイトの以下の画面が表示されます。次に、SSHを介してサーバーに接続し、以下の手順で指定されたコマンドを使用します。

{{< figure align=center src="images/amplify-1.png" alt="nginx amplifyをインストールします">}}

  *以下のコマンドを実行して、エージェントをダウンロードします。
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  *次のコマンドを実行して、サーバーにnginx amplifyをインストールします。 xxxxxを実際のAPIキーに置き換えます。 Nginx Amplifyダッシュボードで見つけることができます。
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  *インストールが完了したら、次のコマンドでステータスを確認できます。
```
$ sudo service amplify-agent status
```
  *ここで、メトリックを表示するようにNginx Amplifyエージェントを構成する必要があります。

{{< figure align=center src="images/amplify-2-1.png" alt="nginx監視構成">}}

  * Stub_Status構成を備えた新しいファイルを作成します。
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  *以下のコードをコピーしてファイルを保存します。
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Nginx Webサーバーを再起動して、Stub_Statusモジュールをアクティブにします。
```
$ sudo service nginx restart
```
  *次に、次のコマンドでnginx構成ファイルを開きます。
```
$ sudo nano /etc/nginx/nginx.conf
```
  *以下のコードを追加して保存します。
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Nginxサービスを再起動して、すべての変更を適用します。
```
$ sudo service nginx restart
```
  *次に、ダッシュボードを増幅し、[完了]ボタンをクリックするために移動します。次のページが表示されます。

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Webサーバーの監視">}}

  ***概要**タブをクリックすると、より簡単で読みやすい形式で統計を確認できます。以下に示すように見えます。

{{< figure align=center src="images/amplify-overview.png" alt="nginx監視統計">}}


## 監視メトリック {#monitoring}
Nginx Amplifyエージェントは、次のタイプのデータを収集します。
  * **nginxメトリック**   -  stub_status、logsファイル、およびプロセス状態からさまざまなnginx関連メトリックを収集します。
  ***システムメトリック**  -  nginx Amplifyは、CPU使用、メモリ使用、ネットワークトラフィックなど、さまざまなシステムメトリックを監視しています。
  * **PHP-FPMメトリック**   - 実行中のPHP-FPMマスタープロセスを識別した場合、PHP-FPMプールステータスからメトリックを取得します。
  * **MySQLメトリック**   -  MySQLグローバルステータスの変数セットを使用して、メトリックを収集するために使用できます。
  * **nginxメタデータ**   - エージェントは、パッケージデータ、情報の構築、バイナリパス、構成設定のビルドなど、Nginxインスタンスに関するデータを収集します。
  ***システムメタデータ**  - エージェントは、ホスト名、アップタイム、OSフレーバー、その他の詳細など、オペレーティングシステム上のデータを収集します。

## 結論
Nginx WebサーバーとNginx Amplify Advanced Monitoring Agentを詳細に調整しました。 Nginx Amplifyは、セットアップと構成が非常に簡単です。さらに、Nginx AmplifyがNginx **を監視することを追跡できる重要なメトリックを調べました。これらの重要なメトリックを使用して、NGINX Webサーバーとアプリの構成を改善できます。
最後に、[containerize.com][7]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[Web Server Solution Stack][8]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  * [アプリケーションのロードバランサーとしてNginxを使用する方法][9]
  * [nginxをリバースプロキシとしてセットアップして構成する方法][10]

  
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
