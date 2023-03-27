---
title: "Ubuntu 20.04にSSLを使用してWebminをインストールする方法" 
seoTitle: "Ubuntu 20.04にSSLを使用してWebminをインストールする方法" 
description: "Webminは、UNIXのようなシステム用のWebベースのシステム管理ツールです。この記事では、Ubuntu 20.04にSSLを使用してWebminをインストールする方法を学びます。" 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webminは、コマンドラインシステム管理に代わる単純な代替手段であるWebベースのシステム管理ツールです。この記事では、Webminのインストール方法を紹介します" 
url: /ja/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Webminのインストール方法">}}


## Webminは、コマンドラインシステム管理に代わる簡単な代替手段であるWebベースのシステム管理ツールです。この記事では、Webminのインストール方法を紹介します
この記事「Ubuntu 20.04にSSLを使用してWebminをインストールする方法」では、Webホスティングソフトウェアとツールに関する新しいシリーズのチュートリアルを開始します。 Webminを使用すると、ユーザーアカウントを設定し、ファイル共有を有効にし、ApacheとDNSの設定を構成し、Webホスティングに関連するさらに多くのタスクを実行できます。これにより、Webホスティングサーバー全体を管理できます。 Linux構成ファイルを手動で編集するトラブルを排除します。それでは、SSLを使用してWebminをインストールする方法を学びましょう。
* **[webminの紹介][1]** 
* [ **強調表示された機能** ][2]
* [ **サポートされているオペレーティングシステム** ][3]
* [ **ubuntuにWebminをインストールする** ][4]
* [ **webminを使用してapacheをインストール** ][5]
* [ **結論** ][6]

## Webminの紹介 {#intro}

Webminは、Linuxのシステム管理用のWebベースのインターフェイスです。最新のWebブラウザーから独自のホスティングサーバーをリモートで管理するのに役立ちます。 Webminを使用すると、ユーザーアカウント、Apache、DNS、ファイル共有などのオペレーティングシステムの内部を構成できます。また、Webminでは、単一のインターフェイスを介して多くのマシンを制御すること、または同じサブネットまたはLANの他のWebminホストでのシームレスなログインを可能にします。 Perlに基づくWebminは、独自のプロセスとWebサーバーとして実行されます。そして、Webminの最大の部分は、100％無料でオープンソースであり、非常に繁栄した開発者コミュニティを持っています。

## 強調表示された機能 {#features}

* ドメイン、DNSレコード、バインドオプション、およびビューを作成および編集できます。
  * IPFWを使用してルールを作成および編集することにより、ファイアウォールの構成に役立ちます。
  * /etc/init.dまたは/etc/rc.localからブートタイムに実行するスクリプトを設定しましょう
* サーバーから複数のサーバーへのファイル転送をスケジュールできます
  * 1つのソースから複数のサーバーにRPMS、Debian、およびSolarisパッケージをインストールできます
* 帯域幅の使用、アップロード、ダウンロード、訪問者などのレポートへのアクセスを提供します。
* 複数のサーバーで同時に実行されるスケジュールされたCronジョブを作成できます
* 複数のサーバーで一度にコマンドを実行できます
* ローカルファイルシステムのユーザーまたはグループディスクの割り当てをセットアップおよび編集できます
* ダンプを使用してファイルシステムをバックアップして復元することを含めて、コマンドファミリを復元します
  * Windowsに似たファイルマネージャーを使用して、サーバー上のファイルとディレクトリのアクセス許可を表示、編集、変更できます
  * Service Location Protocol Serverを構成できます
  * Windowsのようなファイルマネージャーを使用して、ファイルおよびシステム上のファイルとディレクトリのアクセス許可を表示、編集、および変更
  * INETDからのスタンネルランを使用して、POP3やIMAPなどのサービスを暗号化するようにSSLトンネルをセットアップするのに役立ちます。

## サポートされているオペレーティングシステム {#support}

異なるUNIXのようなオペレーティングシステムとLinuxディストリビューションは、さまざまな構成ファイルに異なる場所を使用しているため、Webminは構成されているシステムのみをサポートできます。次のオペレーティングシステムは、Webminのバージョン1.979でサポートされています。
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * aplinux
  * asianux
  * Asianuxサーバー
  * BigBlock
  * bsdi
  * Caixa Magica
  * Caldera openlinux
  * Caldera openlinux eserver
  * CAOS Linux
  * Cendio LBS Linux
  * Centos Linux
  * Citrixハイパーバイザー
  * Cloudlinux
  * CloudRouter Linux
* コバルトLinux
* コヒーレントテクノロジーLinux
  * Conectiva Linux
  * Corel Linux
  * corvus latinux
  * Cygwin
* ダーウィン
  * Debian Linux
  * 12月/Compaq OSF/1
  * Devuan Linux
  * Dragonfly BSD
* エンディアンファイアウォールLinux
  * Fedora Linux
  * FreeBSD
* ジェネリックLinux
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * Linuxミント
  * linuxppc
  * lycorisデスクトップ/lx
  * Mac OS X
  * Macos Catalina
  * Macos High Sierra
  * Macos Mojave
  * Macos Sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linuxコーポレートサーバー
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * MASSIONLINUX
  * MSC Linux
  * Neoshine Linux
  * NetBSD
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * Openna Linux
  * OpenSuse Linux TumbleWeed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X
  * Pardus Linux
  * Pclinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linuxデスクトップ
* ロッキーLinux
  * Sangoma Linux
  * SCI Linux
  * Scientific Linux
  * SCO OpenServer
  * SCO UNIXWARE
* セキュアLinux
  * SGI IRIX
  * Slackware Linux
  * Slamd64 Linux
  * smartos
  * Sol Linux
  * Springdale Linux
  * Startcom Linux
  * Sun Javaデスクトップシステム
  * Sun solaris
  * suse linux
  * Suse OpenExchange Linux
  * Suse Sles Linux
  * Synology DSM
  * Tao Linux
  * Tawie Server Linux
  * thizlinuxデスクトップ
  * ThizServer
  * Tinysofa Linux
  * Trustix
  * Trustix SE
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * ute linux
  * Virtuozzo Linux
* 白いドワーフLinux
  * WhiteBox Linux
  * Wind River Linux
  * ウィンドウズ
  * X/OS Linux
  * Xandros Linux
  * xcp-ng linux
  * XenServer Linux
* 黄色の犬Linux
  * Yoper Linux
現在最もサポートされているシステムは、Solaris、Linux（特にRedhat）、およびFreeBSDです。

## ubuntuにWebminをインストールします {#install}

Webminをインストールするには、 **root**特権を持つユーザーにアクセスする必要があります。**sudo** アクセスを備えた非ルートユーザーを設定することをお勧めします。
最初に次のコマンドを使用してサーバーにsshします
```
ssh user@server_IP_address
```
_apt-get_経由でWebminをインストールするには、最初に_sources.list_ファイルにWebminリポジトリを追加する必要があります。サーバーで、お気に入りのテキストエディターで_sources.list_ファイルを開きます。このチュートリアルでは、VIMを使用します。
```
sudo vi /etc/apt/sources.list
```
ファイルが開かれたら、ファイルの最後に次の行を追加します。
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
これで、Webmin GPGキーを追加してAPTを追加するため、追加したソースリポジトリが信頼されます。このコマンドはそれを行います：
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Webminをインストールする前に、Apt-Getのパッケージリストを更新する必要があります。
```
sudo apt-get update
```
このApt-Getコマンドを実行して、Webminをインストールしてください。
```
sudo apt-get install webmin 
```
Yを入力して、インストールを確認します。インストールが完了すると、Webminサービスが自動的に開始されます。また、Webインターフェイスはポート10000で実行されます。次のURLを使用してインターフェイスにアクセスできます。
```
https://server_IP_address:10000
```
サーバーのSSL証明書は信頼されていないという警告が求められます。これは、Webminがインストール後にSSL証明書を自動的に生成およびインストールするため、証明書はコンピューターによって信頼されている証明書当局によって発行されなかったためです。続行しても大丈夫です。 Webブラウザに証明書を信頼するように指示します。
この時点で、Webminログイン画面が表示されます。

{{< figure align=center src="images/webmin-login-screen.png" alt="Webminをインストールします">}}

最初にWebminにログインすると、 **システム情報** ページに移動します。システムのリソースとその他のその他の情報の概要を提供します。

{{< figure align=center src="images/install-webmin-system-info.png" alt="Webminシステム情報をインストールします">}}


## Webminを使用してApacheをインストールします {#install-apache}

Webminには、さまざまなソフトウェアパッケージを管理する多種多様なモジュールが付属しています。 Webminを使用してApacheをインストールするには、以下の指示に従ってください
**ステップ1 **：ナビゲーションメニューで、**未使用のモジュール**をクリックしてカテゴリを展開し、[apache webserver** ]をクリックします。
サーバーにApacheをインストールしていない場合、モジュールはあなたに通知し、Apacheをインストールする方法を提供します。
**ステップ2 **:**  ここをクリック****リンク（最後の文で）を使用して、apt-getを介してapacheをインストールします。
Apacheのインストールが完了すると、サーバーはデフォルトのApacheサーバーを実行します。

## 結論 {#conclusion}

この記事では、Webminができることを簡単に説明します。Webminは、Linux/Unixサーバーを管理するための最良のツールの1つです。このチュートリアルでは、UbuntuにWebminをインストールする方法も学びました。また、Webminを使用してサーバーにApacheをインストールする方法について説明しました。

## 探検
  * [ubuntuにnginxを使用して複数のPHPバージョンをインストールする方法][7]
  * [nginxをリバースプロキシとしてセットアップして構成する方法][8]



[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
