---
title: "UbuntuにオープンソースのバックアップソフトウェアResticをセットアップする方法" 
seoTitle: "UbuntuにオープンソースのバックアップソフトウェアResticをセットアップする方法" 
description: "Resticは、高速で安全で、最高のオープンソースバックアップソフトウェアの1つです。 AWS S3、Microsoft Azure、Google Cloud、およびその他のバックエンドオプションをサポートしています。" 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "オープンソースのバックアップソフトウェアでバックアップを取り、ローカルまたは外部バックエンドに保存します。 Resticはクロスプラットフォームで、複数のストレージタイプをサポートしています。" 
url: /ja/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## オープンソースのバックアップソフトウェアでバックアップを取り、ローカルまたは外部バックエンドに保存します。 Resticはクロスプラットフォームで、複数のストレージタイプをサポートしています。

{{< figure align=center src="images/restic-post-banner.png" alt="オープンソースバックアップソフトウェア">}}

バックアップシステムは、企業と個人の両方にとって本当に重要です。サイバー攻撃、システム障害、偶発的な除去など、さまざまな理由でデータを失う可能性があります。データを速く復元できるように、適切なバックアップ戦略を整備する必要があります。このガイドでは、Ubuntuサーバーに**オープンソースバックアップソフトウェア** Resticをインストールして利用する方法を示します。
このチュートリアルでは、次のセクションについて説明しました。
  *[**前提条件**][1]
  *[ **RESTICとは？** ][2]
  *[ **RESTICインストール** ][3]
  *[ **RESTIC構成** ][4]
  *[ **RESTICの代替** ][5]
  * **[結論][6] ** 

## Prererequisites   {#prerequisites}
RESTICバックアップソフトウェアプログラムは、3つの主要なオペレーティングシステムLinux、MacOS、およびWindowsをサポートしています。  **RESTICバックアップ** をインストールする前に、次のシステム要件を満たす必要があります。
  *バックアップするデータを収容するUbuntuオペレーティングシステムを備えたマシンまたはデスクトップシステム
  *最新のUbuntuサーバーインスタンス
  * 2つのクライアントとサーバーの間で構成されたSSHキー認証
  * Sudo特権を持つ非ルートユーザー
これらのビットを手にして、動いて仕事に取り掛かりましょう。

## RESTICとは何ですか？   {#restic}
[ **restic ** ][7]は素晴らしい**オープンソースバックアップツール**です。 **無料のバックアップユーティリティ**は、高速で安全で効率的です。クロスプラットフォームバックアッププログラムであるため、Linux、BSD、Mac OS X、およびWindowsで実行されます。 Restic Best Open Sourceバックアップソフトウェアは実行が簡単で、サーバーや複雑な構成は必要ありません。変更されたデータのバックアップを作成し、必要に応じてユーザーが復元できるようにします。さらに、自己ホストやインターネットストレージなど、さまざまなストレージオプションを提供します。さらに、RESTICオープンソースのセルフホストクラウドストレージは、データを保護するために堅牢な暗号化技術を使用しています。
Resticは、ユーティリティをコピーする単純なファイルではありません。主に、スナップショットとリポジトリの2つの概念に基づいて構築されています。  **RESTIC ** オープンソースバックアップソリューションは、情報をスナップショットとして保存し、リポジトリに保存されます。 GOプログラミング言語で書かれています。 Restic Goベースのバックアップユーティリティとオープンソースのバックアップアプリケーションは、多くのクラウドおよびローカルバックエンドストレージシステムでスムーズに機能します。 RESTICオープンソースファイルバックアップソフトウェアのソースコードは、[ **github ** ][8]で利用できます。ただし、インストールと使用については、詳細[**ドキュメント**][9]を見つけることができます。
Restic Self Hosted Cloud Backupは、バックアップストレージのバックエンドのフォローアウトボックスをサポートします。
  *ローカルディレクトリ
  * SFTPサーバー（SSH経由）
  * RESTサーバー
  * AWS S3
  * MINIOサーバー
  * わさび
  * Alibaba Cloud
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blobストレージ
  * Googleクラウドストレージ
上記のバックエンドに加えて、さまざまなバックエンドに[ **rclone ** ][10]を使用できます。

## RESTICインストール {#inStallation}
UbuntuオペレーティングシステムにRestic Best Self Hosted Cloudストレージをインストールするさまざまな方法があります。 Ubuntuパッケージ、Docker、およびソースコードを使用して、Restic Self Hostedファイルストレージのインストールをカバーします。

### パッケージを使用してインストールします
  *以下のコマンドを実行して、Ubuntu OSにRestic Open Sourceバックアップサーバーをインストールします。
```
$ sudo apt-get install restic
```

### Dockerを使用したインストール
  * DockerHubからRESTIC Imageを入手してください。
```
$ docker pull restic/restic
```

### ソースを使用してインストールします
  *最初に、ソースからRESTICをセットアップするには、GOプログラミング言語をインストールする必要があります。公式[ **Golang Webサイト** ][11]にアクセスして、GOをインストールする手順を確認できます。
  *次に、以下のコマンドを実行して、Restic Incremental Backupをインストールします。
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  *コマンド内のターゲットOSを指定することにより、サポートされているすべてのプラットフォームに対してRESTICをすばやくコンパイルできます。ここにいくつかの例があります。
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## RESTIC Configuration   {#Configuration}
上記で述べたように、Restic Open Sourceバックアップシステムは、バックアップ用のスナップショットとリポジトリに基づいています。リポジトリをセットアップし、スナップショットを取り、バックアップを復元する方法を見てみましょう。

### リポジトリを作成します
  *次のコマンドを実行して、リポジトリを初期化します。また、リポジトリのパスワードを設定する必要があります。
```
$ restic init --repo /tmp/
```

### ローカルディレクトリへのバックアップデータ
  *最初のステップでは、データを保存するリポジトリを作成しました。次に、バックアップのためにリポジトリにデータを追加します。次のコマンドを実行します。
```
$ restic --repo /tmp/backup backup ~/work
```

### バックアップを復元します
  *復元コマンドはファイルとディレクトリを復元します。ファイルは、Restic Open Sourceクラウドバックアップを使用している間、元の場所に復元されません。ファイルがRESTICによって復元されるように、ターゲットの場所を選択する必要があります。
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  *ただし、スナップショットIDを指定せずに最新のスナップショットを復元できます。以下のようにコマンドに最新のパラメーターを追加する必要があります。
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### スナップショットを操作します
このセクションでは、いくつかのスナップショットの機能について説明します。
  *次のコマンドを実行して、スナポーストをリストします。
```
$ restic snapshots -r /tmp/backup
```
  * 2つのスナップショットを次のコマンドと比較できます。
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  *ストレージスペースを解放するには、古いバックアップを削除する必要がある場合があります。スナップショットを削除するには、下のコマンドを実行します。
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## RESTICの代替
Resticは、最も人気のあるオープンソースバックアップソフトウェアアプリケーションであり、重要なファイルデータの機密性と整合性を保証します。以下は、Resticデータバックアップツールの最も人気のある代替品とトップの競合他社です。
  * Amazon Glacier
  *複製
  * Runrest
  * AFI
  *雨の日バックアップ
  *ボルグ
  * Veeamバックアップ
  * AWSストレージゲートウェイ
  *まとまり

## 結論
この記事では、Restic **無料のオープンソースバックアップソフトウェア**について説明しました。また、いくつかのインストール手法と、バックアップの作成方法とバックアップを復元する方法についても説明しました。他にも多くの形式のデータバックアップストレージがありますが、この記事の1つについて説明しました。残りのバックエンドストレージタイプは、将来の出版物でカバーされます。このチュートリアルが、バックアップを復元して復元するために、Restic Best Open Sourceバックアップツールを使用するための出発点として機能することを願っています。
最後に、[ **containerize.com ** ][12]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[**バックアップソフトウェア**][13]カテゴリに連絡してください。
_最も好きな無料＆オープンソースのバックアップソフトウェアは何ですか？オープンソースのバックアップソフトウェアについて質問がありますか？、Please_ [連絡を取得][14]。

## 探検：
また、OSS Watchから他のいくつかの関連情報もあります。
  * [2021年のトップ5オープンソースクラウドストレージソフトウェア][15]
  * [UbuntuサーバーにApacheを使用してNextCloudをインストールする方法][16]
  * [ubuntuでapacheでowncloudをインストールして構成][17]
  * [UbuntuにPydioファイル共有と同期プラットフォームをインストールする方法][18]
  * [nsq vs kafka |重要な違いは何ですか？][19]
  * [nextcloud vs owncloud |違いは何ですか？][20]
  * [最高のオープンソースクラウドストレージとファイル共有ソフトウェア][21]

  
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
