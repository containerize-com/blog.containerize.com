---
title: "統計を使用してWebアプリケーションの監視を行う方法" 
seoTitle: "統計を使用してWebアプリケーションの監視を行う方法" 
description: "統計は、すべてのサービスを監視できる最高のWebサイト監視ツールの1つです。ショーケースサービスの稼働時間に美しいステータスページをレンダリングします。" 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Webサイト、Webアプリケーション、無料監視ツールを使用してAPIを自動的に監視し、オープンソースのステータスページシステムを使用してUptimeを紹介します。" 
url: /ja/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Webサイト、Webアプリケーション、無料の監視ツールを使用したAPIを自動的に監視し、オープンソースのステータスページシステムを使用してUptimeを紹介します。

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Webアプリケーションの監視">}}

統計は、**オープンソースのステータスページソフトウェア**であり、**最高のWebサイト監視ツールの1つです**。また、HTTP、TCP、UDP、ICMP、GRPCサービスなどのサービスの監視にも使用されます。統計は自動的にサービスを取得し、監視し、美しいステータスページをレンダリングします。これはクロスプラットフォームであり、Liunx、Mac、およびWindowsオペレーティングシステムにインストールできます。さらに、情報を保存するためにMySQL、Postgres、またはSQLiteデータベースシステムを使用できます。さらに、iPhoneおよびAndroidデバイス用のモバイルアプリケーションのボックスから外れています。
統計のコア機能を見てみましょう。
  ***サービス監視**  - ステータスを使用すると、すべてのHTTP、TCP、UDP、GRPC、およびICMPサービスを簡単に追跡できます。
  ***通知**  - 統計は、通知を受信するための主要なサードパーティアプリケーションのほとんどをサポートしています。
  ***モバイルアプリ**  -  iPhone＆Androidデバイスに無料アプリを使用し、外出先ですべてを管理します。
  ***OAuth Authentatio**  n  -  Github、Google、Slack、Custom OpenIDプロバイダーなどの人気サービスのOAuth認証をサポートしています。この機能を使用して、セキュリティを増やします。
このチュートリアルでは、次のトピックについて説明します。
  * [Linuxにインストール][1]
  * [SystemDサービスを構成][2]
  * [監視のためのサービスを作成][3]
  * [結論][4]

## linuxにインストール {#installing}
統計インストールのために以下のコマンドを実行します。
```
curl -o- -L https://statping.com/install.sh | bash
```

## configure systemd service   {#configure}
SystemDサービスをセットアップすることは、必要に応じてステータスサーバーが自動的に再起動できるようにするための優れた方法です。 SystemDサービスを作成するには、以下の手順に従ってください。
  *最初に、下のコマンドを実行して新しいファイルを作成します。
```
sudo nano /etc/systemd/system/statping.service
```
  *コードをコピーして貼り付けます。
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  *最後に、以下のコマンドを使用して、SystemDサービスを有効にして開始します。
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## 監視のためのサービスを作成 {#create}
  *ブラウザを開き、統計インストールにログインするためにURLを入力します。
  *トップナビゲーションのサービスリンクをクリックします。以下のように見えるサービスページが表示されます。

{{< figure align=center src="images/statping-dashboard.png" alt="Webサービス監視のリスト">}}

  * [作成]ボタンをクリックして、監視用の新しいサービスを追加します。サービス名、サービスタイプ、チェックインターバル、サービスエンドポイント（URL）などの必要なフィールドを入力します。

## 結論 {#conclusion}
統計、Linuxにインストールする方法、およびこのチュートリアルでSystemDサービスを作成する方法について学びました。さらに、さまざまな機能について監視および紹介する新しいサービスを作成しました。このガイドが、 **Webサービス監視** および **Webアプリケーションの監視を実行するためにステータスを使用し始めるのに役立つことを願っています** 。
最後に、[**containerize.com **][5]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新の更新については、この[** ステータスページ**][6]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  *[ **2020年のトップ5オープンソースステータスページソフトウェア** ][7]
  *[**statping** ][8]
  *[**cachet** ][9]
  *[**モニター**][10]
  *[**StayTus** ][11]
  *[**upptime** ][12]
  *[**StatusFy** ][13]

  
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
