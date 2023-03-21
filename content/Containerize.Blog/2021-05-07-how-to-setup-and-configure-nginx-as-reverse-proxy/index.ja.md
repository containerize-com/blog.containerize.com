---
title: "Nginxをリバースプロキシとしてセットアップおよび構成する方法" 
seoTitle: "Nginxをリバースプロキシとしてセットアップおよび構成する方法" 
description: "このチュートリアルは、Nginxをリバースプロキシとして設定して構成する方法に関するものです。 Nginxは、最も人気のあるオープンソースリバースプロキシWebサーバーの1つと見なされています。" 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginxは、逆プロキシとしても機能するオープンソースWebサーバーです。このチュートリアルは、Nginxをリバースプロキシとして設定して構成する方法を学ぶのに役立ちます。" 
url: /ja/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## nginxは、逆プロキシとしても機能するオープンソースのWebサーバーです。このチュートリアルは、Nginxをリバースプロキシとして設定して構成する方法を学ぶのに役立ちます。

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Nginxを逆プロキシサーバーとして使用します">}}


## 概要：
NginxとApacheは、PHPで使用されることが多い2つの最も人気のあるオープンソースWebサーバーです。逆プロキシまたはゲートウェイは、クライアントとサーバーの間の接続として機能します。クライアントとサーバーは、継続的かつ効率的に動作するために互いに情報を交換します。最も一般的な逆プロキシは**nginxとapache** であり、両方を複数のWebサイトをホストするときに同じ仮想マシンで構成できます。リバースプロキシは、攻撃からWebサーバーを保護し、接続ゲートウェイはクライアントに表示され、特別な逆プロキシNginx構成が必要ない通常のWebサーバーのように表示されます。クライアントはリクエストを送信し、リバースプロキシは要求された情報を渡す場所を決定し、最終出力結果をクライアントに配信します。
Redisチュートリアルに関するシリーズに感謝した後、Nginxチュートリアルのシリーズを開始するための多くのリクエストを受け取りました。そのため、先週、アプリケーションに[Nginx Reverse Proxy Load Balancer][1]の使用方法に関するチュートリアルを始めました。このシンプルなnginx逆プロキシ構成の例は、多くの信頼性とnginxの逆プロキシパフォーマンスの利点を提供します。 Nginx Simple Reverse Proxyは、インターネット上で最もアクティブに使用されているオープンソースNginxプロキシサーバーです。このチュートリアルでは、Nginxを逆プロキシ**として使用する方法と、単一のサーバーで逆プロキシとして設定する方法を**構成して検討します。それでは、始めましょう！
  *プロキシサーバーとは何ですか？
  *転送vsリバースプロキシ
  *リバースプロキシを構成します
  * Nginx逆プロキシの利点は何ですか？
  * 結論

## プロキシサーバーとは何ですか？
**プロキシサーバー**は、あなたとインターネットの間のゲートウェイとして機能します。これは、エンドユーザーが閲覧するWebサイトからエンドユーザーを分離する仲介サーバーです。プロキシサーバーは、ユースケースまたは会社ポリシーに従って、さまざまなレベルの機能、セキュリティ、プライバシーを提供します。
プロキシサーバーを使用すると、インターネットトラフィックがプロキシサーバーを介して、要求したアドレスに向かって流れます。その後、リクエストは同じプロキシサーバー（ほとんど）を介して戻ってきてから、プロキシサーバーがWebサイトから受信したデータを転送します。

## Forward vs Reverse Proxy：

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="リバースプロキシサーバーとしてのnginx">}}

一般に、プロキシについて話すとき、ほとんどの場合、フォワードプロキシを意味します。 **フォワードプロキシ**は、中国の偉大なファイアウォールのように、国の制限を避けるのに最適です。クライアントは、フォワードプロキシを介してブロックされたリソースに接続するだけです。フォワードプロキシは、IPアドレスを変更することにより、ユーザーのIDを隠すことができます。したがって、基本的にはフォワードプロキシとしてのNginxはクライアントとインターネットの間に位置するため、エンドサーバーは実際のクライアントを認識していません。

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="逆プロキシとしてのnginx">}}

**逆プロキシ**も仲介者として機能しますが、接続の反対側に座っています。逆プロキシは、**ロードバランシング**、Web最適化、セキュリティで優れています。逆プロキシは通常、いくつかのサーバー間で負荷を配布したり、異なるWebサイトからコンテンツをシームレスに表示したり、HTTP以外のプロトコルを介してアプリケーションサーバーに処理するためのリクエストをパスするために使用されます。

## nginxをリバースプロキシとして構成します：
Nginxがリクエストをプロキシすると、指定されたプロキシサーバーにリクエストを送信し、応答を取得し、クライアントに送り返します。指定されたプロトコルを使用して、HTTPサーバーまたは非HTTPサーバーにリクエストをプロキシすることができます。サポートされているプロトコルには、**FastCGI、UWSGI、SCGI、およびMemcached** が含まれます。
HTTP Proxiedサーバーにリクエストを渡すには、**proxy_pass **ディレクティブが** 場所**内で指定されています。例えば：
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
このnginx逆プロキシの例の構成により、この場所で処理されたすべての要求が指定されたアドレスのプロキシサーバーに合格します。このアドレスは、ドメイン名またはIPアドレスとして指定できます。アドレスにはポートを含めることもできます。
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Nginx **proxy \ _set \ _header **の下記のHost \ _set \ _header** の変更されたサーバーに変更されたヘッダーまたはカスタムヘッダーを渡すこともできます。
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginxは、パフォーマンスの向上に役立つバッファリングもサポートしています。バッファリングを可能にすると、NGINXは、クライアントがダウンロードする必要がある限り、プロキシサーバーから受信する応答を保存します。
すべてのリクエストを単一のサーバーにプロキシする代わりに、複数のバックエンドサーバー**を**セットアップし、それらのプロキシサーバー間のnginxバランス負荷を付けることもできます。 [Nginxロードバランシング][1]に関するチュートリアルでは、すでにこれについて説明しています。

## nginx逆プロキシの利点は何ですか？
以下は、Nginx Reverse Proxyサーバーのセットアップの利点です。
  *Nginxは最も人気のある**オープンソースWebサーバーの1つです**これも最も人気のあるプロキシツールです。 Nginx Reverse Proxy構成は、ユーザーにDDOSおよびDOS Webサーバー攻撃に対するハイエンドセキュリティを提供するため、非常に簡単に実装できます。
  ***Dropbox、Netflix、Zynga** など、トラフィックの高いWebサイトやバックエンドサーバー間でバランスの取れた負荷を作成するのに役立ちます。
  *より遅いバックエンドサーバーと、Nginx Reverse Proxy Virtual Hostをセットアップするためのトラフィックの高いサイトにキャッシュメカニズムを提供します。クライアント側からの各Web要求の新しいプロセスを設定する必要はありません。
  * HTTP、HTTPS、TCP、UDP、SMTP、IMAP、POP3などの複数のプロトコルの逆プロキシサーバーとしても機能します。
  *nginxは、10000を超える接続を処理できます**メモリフットプリントが低く、単一のIPアドレスで複数のWebサーバーを操作できます。
  *ページコンテンツをキャッシュし、SSL暗号化を実行してWebホストサーバーからの負荷を下げるのにも役立ちます。 Nginxは、静的コンテンツを圧縮して読み込み時間を強化することにより、静的コンテンツのパフォーマンスを向上させるための最高のWebサーバーの1つです。
  *複数のサーバー環境に最適なツールであり、単一のサーバーを匿名に保つなどのさまざまなタスクにも役立ちます。

## 結論：
この **nginx Reverse Proxyチュートリアル** で、nginxプロキシサーバーとは何かを調査し、nginxリバースプロキシをセットアップしました。フォワードとリバースプロキシサーバーnginxの違い。また、Nginxをリバースプロキシとしてセットアップする方法の例でも学びました。これで、 **nginxリバースプロキシ構成のインストール方法を完全に理解してください。ステップバイステップ** 。上記のチュートリアルは、リバースプロキシのセットアップを開始するのに役立ちます。今後のチュートリアルでは、Nginxに関するより興味深いトピックについて説明します。
_あなたの最も好きな_reverse Proxy_サーバーは、簡単で動的でフル機能がありますか？ leading_ _open source _reverse prox__y、**httpおよびtcp** ベースのアプリケーションのロードバランサー_？、please_ [連絡先][2]について質問がありますか？

## 探検
以下の記事がより関連する場合があります
  * [ubuntu/debianの逆プロキシとしてApacheを構成する方法][3]
  * [Ubuntu 20.04で暗号化しようとnginxを保護][4]
  * [アプリケーションのロードバランサーとしてnginxを使用する方法][1]
  * [ubuntuでnginxを使用してphpmyadminをインストールして保護する方法][5]
  * [ubuntu/debianでnginxでHTTP/2サポートを構成][6]
  * [ubuntuにnginxを使用して複数のPHPバージョンをインストール][7]
  * [AWSプロダクションサーバーの乗客を備えたnginxをセットアップ][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
