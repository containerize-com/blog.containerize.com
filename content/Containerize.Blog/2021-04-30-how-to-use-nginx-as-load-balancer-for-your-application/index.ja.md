---
title: "アプリケーションのロードバランサーとしてnginxを使用する方法" 
seoTitle: "アプリケーションのロードバランサーとしてnginxを使用する方法" 
description: "Nginxは、人気のあるオープンソースWebサーバーです。高性能とスケーラビリティでよく知られています。このチュートリアルでは、nginxをロードバランサーとして使用することを学びます" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginxは、その高性能とスケーラビリティで人気があります。 #1オープンソースWebサーバーです。このチュートリアルでは、Nginxをロードバランサーとして使用することを学びます。" 
url: /ja/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## Nginxは、その高性能とスケーラビリティで人気があります。 #1オープンソースWebサーバーです。このチュートリアルでは、Nginxをロードバランサーとして使用することを学びます。

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="nginxをロードバランサーとして使用する方法">}}

最新の交通渋滞のウェブサイトは、数十万人にサービスを提供し、場合によってはユーザーまたはクライアントからの数百万の同時リクエストを提供し、正しいテキスト、画像、ビデオ、またはアプリケーションデータをすべて高速かつ信頼できる方法で返します。これらの大量のニーズとコンピューティングパワーを満たすには、より多くのサーバーが必要です。より多くのサーバーを使用すると、これらのサーバー間のトラフィックのバランスを負担する方法が必要です。このブログチュートリアルでは、ロードバランサーとは何か、Nginxをロードバランサーとしてどのように使用できるかを調べます。
Nginxロードバランシングを前提条件として構成するには、Nginxとの負荷バランスの利点を確認するようにインストールおよび構成されたWebサーバーソフトウェアを備えた少なくとも2つのホストが必要です。既に1つの実行中のWebホストが設定されている場合は、カスタムイメージを作成して複製し、新しいWebサーバーに展開します。それでは、クラウドサーバーのNginxロードバランシング構成を段階的にセットアップする方法を学びましょう。
  *** [nginx webサーバー][1] **
  *** [ロードバランサー][2] **
  *** [ロードバランサーとしてnginxをセットアップ（ラウンドロビン）][3] **
  *** [異なる上流の指令について][4] **
  *** [結論][5] **

## nginx webサーバー{#webserver}
Nginxは、高性能のオープンソースWebサーバーです。 HTTPサーバー機能に加えて、Nginxは電子メールのプロキシサーバー（IMAP、POP3、およびSMTP）および逆プロキシ、およびHTTP、TCP、およびUDPサーバーのNGINXのバランスバランスとして機能することもできます。アプリケーションのパフォーマンス、信頼性、セキュリティが向上します。リッチな機能セット、シンプルな構成、低リソースの消費で人気があります。
Nginxはどのように機能しますか？ Nginxは、複数の個別のサーバーで動作する分散Webアプリケーションへの単一のエントリポイントとして、Nginx逆プロキシロードバランサーとして一般的に使用されます。非同期のイベント駆動型アプローチを使用して、メモリの使用量と高い並行性を提供します。 nginx [ここ][6]の詳細を読むことができます。

## Load Balancer {#LoadBalancer}
ロードバランシングは、複数のサーバー全体にネットワークトラフィックを配布するプロセスです。この配布プロセスを実行する「ソフトウェア」または「ハードウェア」は、ロードバランサーと呼ばれます。ロードバランサーは、サーバーの前に立っている「交通警官」のようなもので、すべてのサーバー全体でクライアントリクエストをルーティングします。サーバーの1つがダウンしても、アプリケーションが動作し続けることを保証します。

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="ロードバランサーとしてのnginx">}}

ロードバランサーの主な機能は次のとおりです。
  *複数のサーバーにクライアントリクエストまたはネットワークロードを効率的に配布する
  *オンラインのサーバーにのみリクエストを送信することにより、高可用性と信頼性を保証します
  *需要の指示としてサーバーを追加または減算する柔軟性を提供します

## nginxをロードバランサーとしてセットアップ{#setup}
nginxラウンドロビンロードバランシングをセットアップする前に、サーバーにnginxをインストールする必要があります。 apt-getですばやくインストールできます。
```
sudo apt-get install nginx
```
ラウンドロビンロードバランサーをセットアップするには、nginxアップストリームモジュールを使用する必要があります。 nginxロードバランサーの構成をNginx設定に更新します。ウェブサイトの構成を開いてみましょう。この例のために、デフォルトの構成ファイルを使用しています
```
sudo vi /etc/nginx/sites-available/default
```
nginxを使用してロードバランサーを構成するには、ロードバランシング構成をファイルに追加する必要があります。
まず、このように見えるNginx Upstream Load Balancingのアップストリームモジュールを含める必要があります。
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
サーバーブロックのプロキシエンドポイントとして、このバックエンドを上流に使用します。
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
nginxを再起動します
```
sudo service nginx restart
```
すべてのサーバーを配置している限り、Nginxのオープンソースロードバランサーが訪問者をサーバーに均等に配布し始めることがわかります。この等しい分布は、ラウンドロビンロードバランシングと呼ばれます。

## upstreamディレクティブ{#upstream}
最後の例では、シンプルなアップストリームモジュールを使用して、ラウンドロビンロードバランスを実行して、サーバー間にトラフィックを均等に配布しました。ただし、これがトラフィックで作業する最も効率的な方法ではない理由はたくさんあります。サイト訪問者をより効果的に指示するために使用できるいくつかの指令があります。

### 重さ
より正確にサーバーにユーザーを割り当て始める1つの方法は、特定のマシンに特定の重量を割り当てることです。 Nginxを使用すると、各サーバーに向けられるべきトラフィックの割合を指定する番号を割り当てることができます。
サーバーの重みを含むロードバランスのセットアップは、次のようになります。
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
デフォルトの重みは1です。重量は2で、BackEnd2.exampleはBackEnd1の2倍のトラフィックを送信し、BackEnd3は4の重量で、BackEnd2の2倍のトラフィックとバックエンドの4倍のトラフィックを扱います。 1。

### ハッシュ
IP Hashを使用すると、サーバーはIPアドレスに従ってクライアントに応答し、訪問するたびに訪問者を同じVPに送り返します（サーバーがダウンしていない限り）。サーバーが非アクティブであることがわかっている場合、ダウンしているとマークする必要があります。ダウンサーバーにルーティングすることになっていたすべてのIPは、代替のIPに向けられます。
以下の構成は、例を示します。
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Maxは失敗します
デフォルトのラウンドロビン設定によると、NGINXアプリケーションロードバランサーは、サーバーが応答していなくても、仮想プライベートサーバーにデータを送信し続けます。最大失敗は、無反応のサーバーを一定の時間にわたって動作しないようにすることにより、これを自動的に防ぐことができます。
最大障害に関連する2つの要因があります：max \ _failsとfall \ _timeout。 Max Faileは、非アクティブと見なされる前に発生する必要があるサーバーに接続するための失敗した試みの最大数の試みを指します。 fall_timeoutサーバーが動作不能と見なされる長さを指定します。時間が切れると、サーバーに到達しようとする新しい試みが再び起動します。デフォルトのタイムアウト値は10秒です。
サンプル構成は次のようになる場合があります：
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## 結論：{#conclusion}
このnginxロードバランシングチュートリアルでは、NGNIX、ロードバランシング、およびNGINXロードバランサーをセットアップして複数のサーバーに配布する方法について学びました。また、Round-Robin、Hash、Maxなどのさまざまな負荷分散アルゴリズムも調査しました。大量のアプリケーションを実行しており、異なるサーバーに負荷を配布する必要がある場合、Nginxは最良の選択肢の1つです。そして最も重要なことは、100％無料でオープンソースWebサーバーです。
_Yourは[Twitter][7]、[LinkedIn][8]、および[Facebook][9]ページに参​​加できます。サーバーを改善するための他のどの強力なロードバランサーがリソースの可用性と効率性を向上させますか__あなた__使用しますか？ 。ご質問やフィードバックがある場合は、[ご連絡ください][10]をお願いします。

## 探検
以下の記事がより関連する場合があります
  * [ubuntu 20.04で暗号化してnginxを固定して暗号化する方法][11]
  * [Apache vs Nginx  -  2021年の詳細な比較][12]

  
[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
