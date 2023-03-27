---
title: "基本的なJoomlaテンプレートを作成するための初心者向けガイド" 
seoTitle: "基本的なJoomlaテンプレートを作成するための初心者向けガイド" 
description: "Joomlaは、人気のオープンソースコンテンツ管理システムです。このチュートリアルでは、Joomlaテンプレートを作成する方法を段階的に説明します。" 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomlaは、最も人気のあるオープンソースコンテンツ管理システムの1つです。このチュートリアルでは、Joomlaテンプレートをゼロから作成するための必要な手順を説明します。" 
url: /ja/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomlaは、最も人気のあるオープンソースコンテンツ管理システムの1つです。このチュートリアルでは、Joomlaテンプレートをゼロから作成するための必要な手順を説明します。

{{< figure align=center src="images/joomla-templates-2.png" alt="基本的なJoomlaテンプレート">}}

このデジタル時代では、コンテンツ管理システムは、すべてのコンテンツ作成ニーズに合わせてビジネスの基本的な必要性です。また、市場で利用可能な有料CMSソフトウェアだけでなく、多くのオープンソースがあります。また、企業向けのトップオープンソースコンテンツマネジメントソフトウェアの一部もあります。 Joomlaは最も人気のあるオープンソースのCMSソフトウェアの1つです。このチュートリアルでは、ステップバイステップを説明し、Joomlaテンプレートをゼロから作成する方法を説明します。始めましょう！
 **注：Joomla 2.5バージョンがインストールされていると仮定します** 
*  **[セットアップディレクトリ構造][2]**  
*  **[基本的なtemplatedetails.xmlファイルを作成][3]**  
*  **[基本的なindex.phpファイルを作成][4]**  
*  **[テンプレートを発見してインストール][5]**  
*  **[テンプレートをパッケージ化][6]**  
*  **[結論][7]**  

## セットアップディレクトリ構造 {#setup}

最初に非常に基本的なJoomlaテンプレートを作成するには、テンプレートフォルダーに新しいフォルダーを作成します。テンプレートを呼び出すものは何でもフォルダーに名前を付けます。
お気に入りのテキストエディターを使用して、ファイルを作成します  **index.php** および  **templatedetails.xml**  。画像とスタイルシートを管理するには、  **画像**  と  **css**  と呼ばれる2つの新しいフォルダーを作成します。  **css**  フォルダー内で **template.css**  というファイルを作成します。
あなたのディレクトリ構造はこのようなものになります

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Joomlaテンプレートディレクトリ構造">}}


## 基本的なtemplatedetails.xmlファイルを作成します {#xml}

 **templatedetails.xml** ファイルは、テンプレートに関するすべてのメタデータを保持します。そして、このファイルはそれなしで不可欠です。テンプレートはJoomlaには見えません！。
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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
TemplateEtails.xmlの内容は自明です。コンテンツをコピーするだけで、必要なビットを変更できます。
位置をそのままにしておきます。これらは一般的なセットであるため、標準テンプレートから簡単に切り替えることができます。

## 基本的なindex.phpファイルを作成します {#php}

index.phpは、Joomlaのすべてのページのメインブートストラップファイルになります！配達します。このページでは、独自のデザインにカットして貼り付ける準備ができているベアボーンコードが表示されます。
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## テンプレートを発見してインストールします {#install}

最初にJoomlaに伝える必要があります！新しいテンプレートを作成したこと。この機能は発見拡張機能と呼ばれ、経由でアクセスできます
```
Extensions -> Extension Manager -> Discover
```
[発見]ボタンをクリックしてテンプレートを発見し、[それを選択して[インストール]をクリックしてインストールします。これで、テンプレートはテンプレートマネージャー（スタイル）に表示され、アクセス可能です
```
Extensions -> Template Manager
```

## テンプレートをパッケージ化します {#packge}

いくつかのファイルを備えた解凍されたディレクトリは、配布のための適切な方法ではありません。したがって、配布のために、テンプレートのパッケージを作成する必要があります。パッケージはzip形式（.zip拡張子を使用）で使用できます。
テンプレートがディレクトリMyTemplateにある場合は、パッケージを作成するには、そのディレクトリに接続して、次のようなコマンドを使用できます。
```
zip -r ..\mytemplate.zip .
```

## 結論 {#conclusion}

この記事では、Joomlaテンプレートについて学びました。 Joomlaテンプレートを作成する方法を段階的に進めました。これは、テンプレートの作成を開始するための非常に基本的なチュートリアルです。もちろん、この裸の骨構造に基づいて、非常にカスタマイズされ、拡張されたテンプレートを構築できます。

## 関連する製品ページ
次のリンクが関連する場合があります。
  * [初心者向けのJoomla Template Development Guide][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
