---
title: "Ubuntu 20.04で暗号化してNginxを保護する方法" 
seoTitle: "Ubuntu 20.04で暗号化してNginxを保護する方法" 
description: "ubuntuで暗号化して、Nginxをセットアップ、暗号化、保護する方法。クライアントを暗号化して、Nginxを自動的に構成する証明書を生成しましょう。" 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Webサイトには、訪問者を引き付けるためのドメインのSSL/TLS暗号化が含まれています。この記事では、NginxのTLS/SSL証明書を取得するためにCertbotユーティリティの使用について説明します。" 
url: /ja/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

## ウェブサイトには、訪問者を引き付けるためのドメインのSSL/TLS暗号化が含まれています。この記事では、NginxのTLS/SSL証明書を取得するためにCertbotユーティリティの使用について説明します。

{{< figure align=center src="images/nginxletsencrypt.png" alt="ubuntuで暗号化してください">}}


## **概要**
訪問者を引き付けることを目指しているウェブサイトは、ドメインのTLS/SSL暗号化を含める必要があります。 SSL無料証明書は、Nginxとアプリケーションブラウザーを暗号化および保護することを好むWebサーバー間の安全な接続を保証します。 Let's Encryptは、Nginx SSL LetsEncryptのこのような保護をセットアップできる無料の自動化されたオープンな認証局です。無料のSSL証明書を暗号化してください。すべての主要なブラウザから信頼され、発行日から今後90日間有効です。
このブログ投稿では、nginx https letsencrypt証明書をNginx certbotユーティリティを使用して証明書を取得し、証明書を設定して自動的に更新することにより、Ubuntu 20.04 / 18.04でWebサーバーを実行しているNginxを暗号化および保護する最も簡単な方法について説明します。開始してセットアップしましょう。
  *依存関係と前提条件
  * CERTBOTユーティリティのインストール
  * Nginxの構成を確認します
  *ファイアウォールを介してHTTPSを許可します
  * SSL証明書の取得
  * 結論

## 最初のこと：依存関係と前提条件{#prerequisites}
この記事をフォローするには、Letsencrypt ubuntu nginxユーティリティをインストールするには、次の依存関係と前提条件が必要です。
  *ローカル/リモートマシンのsudo対応の非ルートまたはルートユーザー。
  * Ubuntu 20.04またはUbuntu 18.04を実行しているシステム
  *コマンドライン端末へのアクセス
  *ローカル/リモートマシンのsudoまたはルートの特権
  * nginxインストールとセットアップ
  *パブリックIPを指す登録ドメイン名
  *そのドメイン名に設定されたサーバーブロック
  *ファイアウォールは、ポート80および443の接続を受け入れるように構成されています。

## ステップ1  -  certbotのインストール{#ステップ1---インストールcertbot}
Nginxを固定し、Let's EncryptでNginxを暗号化するための最初のステップは、NGINX CERTBOTフル機能と使いやすいパッケージをインストールして、サーバーにSSL証明書を暗号化して更新するためにインストールすることです。そうするには、Ubuntuで端末を開き、ローカルリポジトリを更新することから始めます。 yと入力し、プロンプトが表示された場合は入力します。
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
次に、nginxセキュア構成設定の一部を確認しましょう。

## ステップ2  -  Nginxの構成の確認{#ステップ2-—- Nginx-39-s-configurationの確認}
依存関係と前提条件セクションで説明されているように、登録ドメインが既に登録されており、CERTBOTはそのドメインがSSLを自動的に構成するための正しいNGINXサーバーブロックを見つけることができる必要があります。例として、このブログ投稿では、domain blog.containerize.comとdomainのサーバーブロックを/etc/nginx/sites-abailable/blog.containerize.comを使用して、server_nameディレクティブを正しく設定しています。
確認するには、Nanoまたはお気に入りのテキストエディターを使用してドメインの構成ファイルを開きます。
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
file /etc/nginx/sites-abailable/blog.containerize.comで既存のserver_nameディレクティブ行を見つけます。このように見えるはずです：
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
次に、nginx構成ファイルの構文を確認し、新しい構成設定をロードするようにnginxサーバーをリロードします。
```
sudo nginx -t
sudo systemctl reload nginx

```
CERTBOTユーティリティは、NGINXを保護し、自動的に更新するための正しいNGINXサーバーブロックディレクティブを見つけることができます。次のステップでは、HTTPSトラフィックを許可するためにファイアウォールを更新しましょう。

## ステップ3  - ファイアウォールを介してhttpsを許可する{#step-3--- aving https-through-the-firewall}
この記事で推奨されているように、前提条件は、HTTPSトラフィックを許可するために設定を調整する必要があります。ファイアウォールが有効でアクティブであることを確認するには、以下のコマンドを実行します。
```
sudo ufw status

```
出力は、UFWがアクティブであり、設定されたルールのリストを提供することを示す必要があります。 HTTPトラフィックがWebサーバーに許可されていることのみが表示されます。暗号化されたトラフィックを許可するには、nginx httpsプロファイルを追加するか、nginx fullを使用して既存のnginx httpルールを削除できます。コマンドを入力することにより、nginx httpsトラフィックを許可します。
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
UFWステータスコマンドを入力することにより、HTTPSトラフィックを許可するHTTPSルールを確認します。
```
sudo ufw status

```
次に、証明書を実行して証明書を取得しましょう。

## ステップ4  -  SSL証明書の取得{#step-4-—- gotaining-an-ssl-vertificate}
Certbot用のNginxのプラグインは、Nginxの再構成に対応し、必要に応じて構成をリロードします。したがって、次のコマンドを実行して、Nginxプラグインで証明書を生成する必要があります。
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
CERTBOTユーティリティを初めて実行するのが初めての場合、CertBotはHTTPS設定を構成するように依頼します。メールアドレスを入力し、利用規約に同意するように求められます。 Enterを押した後、構成が更新され、Nginxは新しい設定をピックアップするようにリロードします。最後に、CERTBOTは、証明書が正常に生成され、証明書が保存されていることを示すメッセージで表示されます。
証明書はダウンロード、インストール、およびnginx SSL証明書LetsEncrypt構成でロードされます。 https：//を使用してWebサイトをリロードしてみて、ブラウザのセキュリティインジケーターに注意してください。通常、ロックアイコンを使用して、サイトが適切に固定されていることを示す必要があります。 SSL Labsサーバーテストを使用してサーバーをテストすると、NginxとLetsencryptのAグレードが得られます。
更新プロセスをテストして終了しましょう。

## ステップ5  -  Certbot Auto-Renewalの検証{#step-5---検証certbot-auto-renewal}
Let's Encrypt証明書は90日ごとに期限切れになり、Nginx SSL LetsEncryptがユーザーがセットアップと自動更新クロンジョブを奨励しています。まず、現在のユーザーのCrontab構成ファイルを開きます。
```
sudo crontab -e
```
Certbotコマンドを実行するCronジョブを追加します。CertbotRenew Nginxは、30日以内に証明書が有効になることを検出した場合、証明書を更新します。指定された時間に毎日実行するようにスケジュールします。
```
sudo certbot renew --dry-run

```
Cronジョブには、上記のコマンドのように、-quiet属性も含める必要があります。これにより、NGINX Renew SSL証明書は、タスクを実行した後に出力を含めないように指示します。自動証明書の更新を有効にします。 Cronジョブを追加したら、変更を保存し、ファイルを終了します。

## 結論{#conclusion}
この記事では、nginxのインストールLetsEncrypt SSL証明書をインストールする方法を学びました。ドメイン用のSSL証明書をダウンロードし、これらの証明書を使用するようにnginxを構成しました。さらに、SSL nginx letsencryptの証明書を自動的に更新できるようにcertbotを有効にする必要があります。今後のチュートリアルでは、WebブラウザーとWebサーバー間の暗号化された通信を可能にする標準的なセキュリティテクノロジーでWebサーバーを保護する方法についてのより興味深いトピックについて説明します。
_Yourは[Twitter] [1]、[LinkedIn] [2]、および[Facebook] [3]ページに参​​加できます。コンピューターネットワークを介してコミュニケーションセキュリティを提供するために使用する暗号化プロトコルは何ですか？ご質問がある場合は、[ご連絡ください] [4]をお願いします。

## 探検
サーバーのパフォーマンスを監視し、その信頼性とセキュリティを確保するための次の関連するリンクを見つけることができます。
  * [ubuntu/debianの逆プロキシとしてApacheを構成する方法] [5]
  * [ubuntuでnginxを使用してphpmyadminをインストールして保護する方法] [6]
  * [ubuntu/debianでnginxでHTTP/2サポートを構成] [7]
  * [AWSプロダクションサーバーの乗客を備えたnginxをセットアップ] [8]
  * [ubuntuでapacheでowncloudをインストールして構成する方法] [9]
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
