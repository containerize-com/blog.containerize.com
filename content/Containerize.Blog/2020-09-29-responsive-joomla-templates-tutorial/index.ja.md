---
title: "初心者向けのJoomla Template Development Guide" 
seoTitle: "初心者向けのJoomla Template Development Guide" 
description: "Joomlaテンプレート開発、さまざまなユースケースのレスポンシブレイアウトをセットアップする方法を学びます。ビジネスWebサイトの設計レイヤーを定義するファイルのセット。" 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "多言語、SEO /ユーザーフレンドリー、リッチなカラースキームなど、多数の機能を提供する非常にプロフェッショナルでカスタマイズ可能なJoomlaテンプレートを構築します。" 
url: /ja/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## 多言語、SEO /ユーザーフレンドリー、リッチなカラースキームなど、多数の機能を提供する非常にプロフェッショナルでカスタマイズ可能なJoomlaテンプレートを構築します。 {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Joomlaテンプレート開発">}}


## 概要
適切に設計されたビジネスウェブサイトは、訪問者をナビゲーションを容易にすることで、訪問者をもたらし、維持するための重要な役割を果たします。 **フルフィーチャーのJoomla** は、ビジネスウェブサイトの美学を制御する多くのレスポンシブレイアウトとJoomlaテンプレート開発でユーザーを促進します。
開発段階では、設計要素の配置を取得するために非常に重要です。
  * 一貫性
* 簡単なナビゲーション
* シンプルさ
* モバイル互換性
* 読みやすさ
**Joomlaテンプレート** があります。このオープンソースソフトウェアは、各ページのコードを個別に書き込むのではなく、すべてのWebページに事前に定義されたレスポンシブレイアウトを開発または使用するための規定を提供します。
このブログ投稿では、Joomlaで **ユーザーフレンドリーなテンプレート** を作成してセットアップする方法について次のことを学びます。
* [ **Joomlaレイアウトとは？** ][2]
* [ **Joomlaでシンプルなレスポンシブテンプレートを作成する方法？** ][3]
* [ **Joomlaテンプレートをインストールする方法？** ][4]
* [ **結論** ][5]

## Joomlaレイアウトとは何ですか？ {#what}

Joomlaは、フロントエンドとバックエンドのテンプレートを提供します。多くの既製のテンプレートが付属しており、開発者に **無料のレスポンシブブートストラップテーマ** を使用することができます**ユースケースに応じて。 Joomlaには2種類のテンプレートがあります。
**フロントエンドテンプレート:** ビジネスWebサイトの一部に直面しているユーザーに関連しています。
**バックエンドテンプレート:** これらのテンプレートは、サイトのビジネスロジックにリンクされています。

## Joomlaでシンプルなレスポンシブテンプレートを作成する方法は？ {#how}

このセクションでは、このJoomlaテンプレートチュートリアルの手順について説明します。
このセクションにジャンプする前に、次のことを理解していることを確認してください。
  * HTML
  * CSS
  * JavaScript
  * PHP
したがって、Joomlaでカスタムテンプレートを作成することは、これまでになく硬く複雑ではありませんでした。ただし、最初のJoomlaテンプレートを作成し始めましょう。

## **ディレクトリ構造のセットアップ** 
まず、「 **mytemplate**」という名前のフォルダーを「**テンプレート** 」フォルダーに作成します。
「 **myTemplate** 」フォルダー内で次のファイルを作成します。
* **index.php** ：これは、テンプレートページ全体のHTMLおよびPHPコードを含むコアファイルです。
* **templatedetails.xml** ：このファイルには、テンプレートのメタデータが含まれており、Joomlaが気づかないように義務付けられています。
次に、「 **myTemplate** 」フォルダー内に3つのフォルダーを作成します。
* **JS** ：このフォルダーには、テンプレートに必要なすべてのJavaScriptファイルが含まれます
* **CSS** ：スタイリング用のすべてのCSSファイルがこのフォルダーに入ります
* **画像** ：テンプレートで使用される画像はこのフォルダーに存在します
「 **template.css**」という名前のcssファイルを「**css** 」フォルダーに作成します。
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
最終的には、これがディレクトリ構造がどのように見えるかです。

## コードを入れましょう
このコードを **templatedetails.xml** ファイルに配置します。
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
前述のように、このファイルには、マークアップタグ間で定義されているレスポンシブレイアウトに関するメタデータが含まれています。ただし、名前、著者、説明などの一般情報を変更できます。
このファイルには、テンプレートで使用されている他のファイルとフォルダーに関する情報も含まれています。
次に、 **index.php** ファイルを開き、次のコードの配置を開始します。
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
このファイルは、他の人がPHPコードを読むことを防ぐこの行から始まります。
```
<!DOCTYPE html>
```
これは、ドキュメントの種類をブラウザに知らせるためです。
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
HTMLドキュメントはこの行から始まり、 **xmlns** 属性はドキュメントのXMLネームスペースを伝えます。
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
タグの後の最初の行Joomlaに、メタデータ情報やページタイトルなどのヘッダー情報を入力するように指示します。
2行目には外部スタイルシートへのリンクがあり、3行目は外部JavaScriptファイルをリンクします。
残りのファイルは、ブートストラップをテンプレートに有効にします。
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
ボディセクションは、ヘッドセクションにテンプレートに反映されるすべてのデータが含まれているすべてのデータを含む後に開始されます。ユーザーが表示およびナビゲートするようになります。
```
<jdoc:include type="modules" name="position-7" style="well" />
```
このステートメントは、Joomlaに「Position-7」という名前のモジュールを追加するように指示するために使用されるJDOCステートメントと呼ばれます。 **Joomlaテンプレート開発** で頻繁に使用されているJDOCステートメントがいくつかあります。
これは、基本的なJoomlaテンプレートに必要なすべてのコードを備えた最終的な完全な **index.php** ファイルです。
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
非常に基本的なテンプレートのためにすべてが整っています。さて、Joomlaサーバーにインストールして、それがどのように進行するかを確認する時が来ました。

## Joomlaテンプレートをインストールする方法は？ {#install}

Joomlaテンプレートのインストールプロセスは非常にまっすぐで簡単です。インストールする手順は次のとおりです。
「拡張機能 - >管理 - >インストール

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomlaインストールセットアップ画像">}}

ここでは、下の画像に示すように、リストに新しく開発されたJoomlaテンプレートを確認できます。

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Joomlaテンプレートリスト">}}

次に、テンプレートを選択し、「インストール」を押すと、成功したインストールについて成功メッセージが表示されます。
テンプレートがインストールされたら、Joomlaのコントロールパネル内のテンプレートファイルにアクセスして変更し、「テンプレートプレビュー」オプションから変更をプレビューできます。

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

これで、最初のJoomlaテンプレートをブラウザに表示できます！

## 結論 {#結論}

優れた応答性のあるテンプレートは、サイト全体のモデリングの基盤です。 **Joomlaのレスポンシブレイアウト** は多機能であり、さまざまなプロジェクトに使用できます。コードの作成からJoomlaテンプレートの開発まで、直感的な管理ダッシュボードを使用すると、非常に簡単になります。 Joomlaは、ユーザーの欲求を満たすために、テンプレート開発を完全に制御します。
**CMSソフトウェア** カテゴリが一貫した改善の下にあり、他のコンテンツ管理システムに関するより多くのチュートリアルがリストに追加されるため、定期的な更新については[コンテンツ管理システム][6]セクションに連絡してください。

## 関連する製品ページ
次のリンクが関連する場合があります。
  * [Joomla][1]
  * [Drupal][7]
  * [パイロ][8]
  * [djangoCMS][9]
  * [Umbraco CMS][10]
  * [concrete5][11]
  * [墓][12]
  * [クラフト][13]
  * [contao][14]
  * [フォーク][15]
  * [製油所CMS][16]
  * [locomotivecms][17]



[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
