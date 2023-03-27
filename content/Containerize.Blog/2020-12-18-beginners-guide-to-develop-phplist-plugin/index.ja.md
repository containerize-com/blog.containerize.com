---
title: "PHLPLISTプラグインを開発するための初心者ガイド" 
seoTitle: "PHLPLISTプラグインを開発するための初心者ガイド" 
description: "Phplistプラグインアーキテクチャに慣れて、基本的なphphplistプラグインを作成する方法を学びます。このガイドラインは、Phplist機能をカスタマイズおよび強化するのに役立ちます。" 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Phplistプラグインを使用すると、開発者は製品をカスタマイズし、その機能を強化できます。この投稿では、PHPHPLISTで基本的なプラグインを作成する方法を学びます。" 
url: /ja/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## Phplistプラグインを使用すると、開発者は製品をカスタマイズし、機能を強化できます。この投稿では、PHPHPLISTで基本的なプラグインを作成する方法を学びます。

{{< figure align=center src="images/phplist-plugin.png" alt="Phplistプラグイン">}}

プラグインサポートは、特にオープンソースシステムにとって、ソフトウェアの重要な部分です。これにより、開発者は新しいプラグインを構築して機能を拡張できます。 **phplist** プラグインの開発を奨励して、開発者がビジネス要件に応じて新しい機能を追加できるようにします。 PHPLISTプラグインは、PHP、HTML、CSS、およびJavaScriptのコードを含むスタンドアロンコードコレクションです。
アプリケーションは多くの理由によりプラグインをサポートし、その一部は次のとおりです。
* コア機能を変更しないでください。
* 開発者が新しい機能を作成できるようにします。
* ソフトウェアのサイズを縮小します。
このチュートリアルでは、以下のトピックについて詳しく説明します。
* [ **前提条件** ][2]
* [ **phphplistプラグインの基本** ][3]
* [ **phphplistプラグインを作成** ][4]
* [ **結論** ][5]

## 前提条件 {#Req}

  * Phplistの最新バージョン。
  * PHPHPRISTとPHPに精通しています。
  * HTML / CSSおよびJavaScriptの理解。

## phphplistプラグイン開発の基本 {#Basics}

次の方法では、PHPHPLISTプラグインの機能が改善されます。
* **ページ**  - レポート、統計、情報を表示するなどのアクティビティのページを作成します。
* **フック**  - これにより、特定の場所で機能を呼び出すことができます。
PHPHPLIST用の特別なプラグインには3種類があります。各タイプの1つのプラグインを有効にすることができます。
* **エディタープラグイン**  - キャンペーンまたはテンプレートを編集するためにエディターを実装できます。
* **認証プラグイン**  - これにより、管理者の認証のための新しいメカニズムを追加できます。
* **電子メール送信者プラグイン**  - 組み込み機能の代わりに、電子メール送信の新しい方法を実装できます。

## PHPHPLISTプラグインを作成します {#Create}

まず、PhplistPlugin Coreクラスを拡張する必要があります。プラグインを作成するには、プラグインの下に「helloworld」という名前のディレクトリを作成し、プラグインディレクトリのルートにhelloworld.phpという名前のファイルを作成する必要があります。 config.phpファイルをチェックして、プラグイン\ _rootdir変数の値を見つけることができます。以下のコードをhelloworld.phpファイルにコピーします。
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
プラグインのディレクトリに$ coderootを設定する必要があります。プラグインが正しく初期化されていることを確認するには、親コンストラクターを呼び出す必要があります。ファイルmain.phpを作成し、プラグインディレクトリに配置します。次のコードをコピーします。
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Plugin RootDirにHelloWorld.phpクラスファイルとプラグインディレクトリを配置して、プラグインをインストールします。プラグインをアクティブにするには、メニューバーの[構成]タブをクリックし、[プラグインの管理]をクリックします。プラグインページには、利用可能なプラグインのリストが表示され、プラグインフォームを有効/無効にできます。
http://example.com/admin/?page=main&pi=helloworldなど、次のURLでプラグインにアクセスできます。 Example.comをドメイン名に置き換えます。

## 結論 {#Con}

**phplistプラグイン** 開発の基本を学び、サンプルプラグインを作成しました。出発点として、このガイドラインに従い、プラグインの開発をさらに調査して機能を強化できます。
最後に、[ **containerize.com**][6]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[**Newsletters** ][7]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
* [ **phplist** ][8]
* [ **MailTrain** ][9]
* [ **listmonk** ][10]
* [ **ムーンメール** ][11]
* [ **Mailman** ][12]
* [ **2021年のトップ5オープンソースニュースレターソフトウェア** ][13]
* [ **phphplistでマルチテナントアプリケーションを構成する方法** ][14]
* [ **phplistを使用してニュースレターを作成して送信する方法** ][15]



[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
