---
title: "phphplistでマルチテナントアプリケーションを構成する方法" 
seoTitle: "phphplistでマルチテナントアプリケーションを構成する方法" 
description: "Phplistは無料でオープンソースのニュースレターソフトウェアです。マルチテナントアプリケーションを構成し、共有環境でアプリケーションのいくつかのインスタンスを実行します。" 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "PHPHPLISTでマルチテナントアプリケーションを開発するためのチュートリアル。マルチテナント機能は、複数のホストに単一のインストールを使用して、ホスティングコストを削減します。" 
url: /ja/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## チュートリアルPHPHPLISTでマルチテナントアプリケーションを開発します。マルチテナント機能は、複数のホストに単一のインストールを使用して、ホスティングコストを削減します。

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="マルチテナントアプリケーションPhplist">}}

この記事では、マルチテナンシー **とは何か、およびPHPHPLISTでマルチテナントアプリケーション** を構成する方法**について説明します。

## phphplistとは何ですか？
マーケティング戦略を決定するとき、電子メールマーケティングはすべてのオンラインデジタル企業の重要な部分です。 Phplistは、企業が大勢の視聴者にリーチできるようにします。 Phplistは広く使用されています **リストの管理とニュースレターの送信のために、オープンソースニュースレターソフトウェア** 。これは、企業がニュースレターキャンペーンを作成、スケジュール、送信、分析するのに役立ちます。 Phplistは、分析、セグメンテーション、バウンス処理、プラグイン、APIなどの機能をサポートしています。

## マルチテナンシーとは何ですか？
マルチテナンシーは、多くの顧客/サイトがソフトウェアアプリケーションの単一のインスタンスで表されるアーキテクチャです。マルチテナンシーでは、サイトはテナントと見なされます。すべてのテナントには、構成、テーマ、SMTPなどの特定の機能があります。
クラウドコンピューティングの主な側面はマルチテナンシーです。 **マルチテナントアーキテクチャ** は、メンテナンスコストと迅速なテナントの更新を削減することにより、企業がより良いROIを達成するのに役立ちます。また、マルチテナントのアーキテクチャで設計されたアプリケーションは、簡単にスケーラブルにすることができます。
次のアプローチを使用して、マルチテナントを実装できます。
* すべてのテナントの共有データベース。
* すべてのテナントに個別のデータベース。
すべてのテナントアプローチに個別のデータベースを使用して、PHPHPLISTにマルチテナンシーを実装します。
  * [リクエストフローを処理][1]
  * [テナントのデータベースのセットアップ][2]
  * [テナントのnginxを構成][3]

## リクエストフローを処理します {#request}

  * config.phpファイルのバックアップを取得すると、configディレクトリの下で見つけることができます。
* 新しいconfig.phpファイルを作成し、サイト/テナントを処理するために次のコードを追加します。
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Example.comをドメイン名に置き換えます。また、すべてのテナントに対して構成ファイルを作成する必要があります。 config.phpのバックアップファイルをコピーし、config.example.com.phpのような新しい名前で保存します。

## テナントのデータベースをセットアップします {#database}

* 既存のPhplistデータベースのバックアップを取ります。それを使用して、新しいテナントのデータベースを作成します。
  * config.example.com.phpファイルを開きます。環境に従って、データベースの資格情報やその他の設定を変更します。

## テナント用のnginxを構成します {#Nginx}

* nginxディレクトリに移動します **cd/etc/nginx/sites-abailable** 。
* デフォルトのconfig.phpファイルをコピーして、example.comのようなサイト名で保存します。
* **sudo nano embly.com** を備えたOpen Example.com構成**。
* ルートパス、server_name、およびその他の設定を変更します。
***sudo nginx -t*でのテスト構成
* 最後に、 **sudo ln -s/etc/nginx/sites-abailable/example.com/etc/nginx/sites-enabled/** を実行してSymlinkを作成します
* **sudo systemctl restart nginx** を実行してnginx webサーバーを再起動するため、新しく作成された構成ファイルをロードできます。

## 結論
マルチテナンシーソフトウェアには、メンテナンスコストの削減、効果的なリソースの使用量、更新を簡単にインストールできるなど、シングルテナンシーアプリケーションと比較して、いくつかの利点があります。 SaaS（Software As a Service）ソフトウェアを構築する場合は、マルチテナンシーアーキテクチャをフォローして、その真の力を楽しむことができます。

## 探検
次のリンクが関連する場合があります。
  * [Phplist  - オープンソースニュースレターと電子メールマーケティングソフトウェア][4]
  * [phphplistを使用してニュースレターを作成して送信する方法][5]
  * [phphplistでバウンスをセットアップして処理する方法][6]
  * [Phplistプラグインを開発するための初心者ガイド][7]
  * [高度なバウンス管理とバウンスルールをphphplist][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
