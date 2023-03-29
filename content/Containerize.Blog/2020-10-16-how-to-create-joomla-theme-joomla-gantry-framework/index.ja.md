---
title: "Joomlaテーマを作成する方法| Joomla Gantryフレームワーク" 
seoTitle: "Joomlaテーマを作成する方法| Joomla Gantryフレームワーク" 
description: "Joomla Gantry Frameworkはオープンソースであり、ドラッグ＆ドロップ機能を備えたGUIを提供し、ユーザーが動的で応答性の高いJoomla CMSテンプレートをすばやく構築できるようにします。" 
date: Fri, 16 Oct 2020 10:55:10 +0000
author: Masood Anwer
summary: "オープンソーステンプレートビルダーを使用して、強力でインタラクティブで使いやすいJoomlaテーマを設計します。ガントリーフレームワークは、ページの応答時間とパフォーマンスを高めます。" 
url: /ja/how-to-create-joomla-theme-joomla-gantry-framework/
categories: ['Content Management']
---

## オープンソーステンプレートビルダーを使用したパワフルでインタラクティブで使いやすいJoomlaテーマを設計します。ガントリーフレームワークは、ページの応答時間とパフォーマンスを高めます。

{{< figure align=center src="images/joomla-gantry-framework.png" alt="Joomla Gantry">}}


## **概要** 
[初心者向けJoomla Template Development Guide]、[1]、[Lead Mautic Integration for Drupal Mautic Integration for Automate Lead Nurturing][2]、[2]、[Mautic＆Joomlaをデジタルマーケティング自動化][3][3]などのトピックに関する記事を既に公開しています。 、その他、このガイドでは **gantryフレームワーク** でテーマの作成に集中します。 Gantry Frameworkは、[Joomla][4]および[WordPress][5]のレスポンシブでエンタープライズレベルのレイアウトを構築するために使用されるオープンソーステンプレートビルダーです。オープンソースコミュニティは、豊富な機能を提供するテーマ構築機能を提供する幅広いコンテンツ管理システムを開発しました。 JoomlaのGantryフレームワークは、最も人気のあるテーマフレームワークの1つです。人目を引く魅力的なウェブサイトを構築することは、あらゆるビジネスの重要な要素です。ただし、そのようなWebサイトを構築または変更するのに必要な時間は、もう1つの重要な側面です。
したがって、Joomla Gantryフレームワークは、レイアウト開発プロセスをスピードアップするための規定を提供します。とりわけ、コーディングまたはプログラミングスキルを備えているという強制も排除されます。一方、このようなフレームワークのインストールプロセスは非常に簡単で簡単です。これらは、WordPressやJoomlaなどのほとんどのコンテンツ管理システムのプラグインの形で利用できます。このガントリーフレームワークのチュートリアルでは、次のポイントについて説明します。
* [ **JoomlaのGantryフレームワークは何ですか？** ][6]
* [ **ガントリーフレームワークのインストール** ][7]
* [ **ガントリーテーマのインストール** ][8]
* [ **ガントリーでテーマを作成** ][9]

## JoomlaのGantry Frameworkとは何ですか？ {#gantry}

[ **gantry**][10]は、Joomlaの無料でオープンソースのテーマフレームワークです。**Gantry** は、高速で柔軟なWebテーマフレームワークです。 Twitter Bootstrapに基づいた12列の960グリッドシステムレイアウトの上に構築されています。さらに、開発者とエンドユーザーの両方にとって簡単に使用できます。 Gantryは、GUI機能がコードを作成する代わりにサイトをすばやく設計するのに役立つため、ユーザーがテーマをすばやくカスタマイズするのに役立つドラッグアンドドロップ機能を備えています。テキストファイルの構成（YAML）に基づいているため、これらのテキストファイルを簡単に編集できます。さらに、このオープンソースのテーマビルダーは、WordPressとJoomlaで利用できます。 Joomla Gantryは、コンテンツとデータに関してユーザーに完全な制御を提供します。この無料のテーマビルダーを構成し、サードパーティアプリケーションと統合する機能があります。さらに、それは非常に拡張可能であり、ユーザーは要件に従って機能を拡張できます。
テーマビルディングのオプションに関する限り、このテーマフレームワークは、Googleフォント、トグル、カラーチューザー、画像選択者、プレフィックスラベル、サフィックス付きスライダーテキストプラスなどを含むUI要素の多くのスタイルとデザインを提供します。実際、アラビア語、ペルシア語などの左右の言語がサポートされています。ユーザーはブロックのサイズを制御し、グリッドシステムの助けを借りて任意のレイアウトを設計できます。 Gantryは非常に安全であり、Ajaxを搭載したイベント用の非侵入性グロールスタイルの通知を可能にします。さらに、JavaScriptコントロール、URL、Cookie、セッション、プリセットを介してパラメーターを設定する機能が多くあります。

## ガントリーフレームワークのインストール {#Installing}

  * Gantryをダウンロードします
* **extensions-> extensions Manager->インストール** に移動し、[ファイルの選択]ボタンを選択します。ダウンロードしたzipを見つけて、[アップロード]とインストールをクリックします。
  * Extensions ManagerでGantry Extensionsを見ることができます。すべてのガントリー拡張機能が有効になっていることを確認してください。

## ガントリーテーマのインストール {#installtheme}

Gantry Frameworkチュートリアルのこのセクションでは、このテーマフレームワーク（Gantry）をインストールします。
* **extensions-> extensions Manager->インストール** に移動します。 [ファイルの選択]ボタンを選択し、ダウンロードしたzipを見つけ、[アップロード]ボタンをクリックします。ガントリーテンプレートは、テンプレートマネージャーに表示されます。
* **拡張機能 - >テンプレートマネージャー** に移動し、ガントリーチェックボックスを選択して、サイトのデフォルトのテンプレートにします。

## ガントリーでテーマを作成します {#createtheme}

**gantryテーマ** を構築する非常に簡単な方法、現在のテーマを取り、新しいテーマを作成するためのテンプレートとして使用します。
* 水素テーマをダウンロード、解凍、開きます。
* ファイルとディレクトリの名前を変更します。
* 新しいテーマ名が「Mytheme」であるとしましょう。ファイルとディレクトリの水素をMythemeに置き換えてください。
* テーマ名のファイルを検索します。古いテーマ名を見つけて、「水素から神学、水素への水素、水素への水素」などの新しいテーマ名に置き換えます。
* テーマをzip、インストールして、それだけです。

## 結論
これは、このガントリーフレームワークのチュートリアルの終わりです。このブログ投稿では、Joomla Gantry Frameworkの導入、その機能、Joomlaコンテンツ管理のためのインストール手順を経験しました。このテンプレートビルダーはオープンソースで無料で、バグやディスカッションに非常に反応する活気に満ちたサポートコミュニティが付属しています。さらに、このブログ投稿は、JoomlaまたはWordPressを使用して構築されたWebサイトがある場合に本当に役立ちます。テーマはすべてのウェブサイトの中心的な部分であり、美しいUIで訪問者を引き付けます。テーマフレームワークの有無にかかわらず **Joomlaテンプレート無料** を作成できますが、Gantryフレームワークを使用して、非常にインタラクティブでレスポンシブなJoomlaテンプレートを作成できます。開発コストと時間を節約するのに役立ちます。
Gantryは最高のJoomlaテンプレートフレームワークの1つです。そのため、レイアウトマネージャー、ビジュアルメニューエディター、SCSS/レスサポート、テーマの継承などなど、機能を消費することで、真のパワーを楽しむことができます。さらに、他にも多くのチュートリアルと比較ブログ投稿やオープンソース製品があります。リストされている製品はすべて無料で、自己ホースト機能が備わっています。最後に、[ **containerize.com**][11]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[**コンテンツ管理** ][12]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  * [Joomla  - 無料のCMSソフトウェア][13]
  * [Drupal][14]
  * [パイロ][15]
  * [DjangoCMS][16]
  * [Umbraco CMS][17]
  * [concrete5][18]
  * [デジタルマーケティングの自動化のためにMautic＆Joomlaを統合][3]
  * [鉛養育を自動化するためのDrupal Mautic統合][2]
  * [2020年のトップ5無料レスポンシブJoomla Bootstrapテンプレート][19]
  * [初心者向けのJoomla Template Development Guide][1]
  * [2020年の最高の無料レスポンシブJoomlaテンプレート][19]
  * [基本的なJoomlaテンプレートを作成するための初心者向けガイド][20]
  * [Joomla vs Drupal | 2021年のCMS比較][21]
  * [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化][22]



[1]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
[2]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[3]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
[4]: https://products.containerize.com/content-management/joomla/
[5]: https://products.containerize.com/blogging/wordpress/
[6]: #gantry
[7]: #Installing
[8]: #installtheme
[9]: #createtheme
[10]: http://gantry.org/
[11]: https://containerize.com
[12]: https://blog.containerize.com/category/content-management/
[13]: https://products.containerize.com/content-management/joomla
[14]: https://products.containerize.com/content-management/drupal
[15]: https://products.containerize.com/content-management/pyro
[16]: https://products.containerize.com/content-management/django
[17]: https://products.containerize.com/content-management/umbraco
[18]: https://products.containerize.com/content-management/concrete5
[19]: https://blog.containerize.com/content-management/top-5-best-free-responsive-joomla-templates-of-2020/
[20]: https://blog.containerize.com/content-management/beginners-guide-to-create-a-basic-joomla-template/
[21]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[22]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
