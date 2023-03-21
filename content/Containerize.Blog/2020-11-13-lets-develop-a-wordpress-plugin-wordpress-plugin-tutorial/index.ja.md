---
title: "WordPressプラグインを開発しましょう| WordPressプラグインチュートリアル" 
seoTitle: "WordPressプラグインを開発しましょう| WordPressプラグインチュートリアル" 
description: "WordPressプラグインの開発に興味がありますか？基本的なWordPressプラグインを作成するための完全な手順を説明するこのWordPressプラグインチュートリアルに従ってください。" 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "WordPressプラグインは、Webサイトでアクティブになるモジュールで、一連の機能または要素を提供します。これらのプラグインはSEOが最適化されており、自動化を提供しています。" 
url: /ja/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## WordPressプラグインは、Webサイトでアクティブになるモジュールで、一連の機能または要素を提供します。これらのプラグインはSEOが最適化されており、自動化を提供しています。

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="WordPressプラグインチュートリアル">}}


## 概要
WordPressは、エンタープライズレベルのオープンソースブログプラットフォームです。 A  **WordPressプラグイン** は、WordPressの機能を強化および拡張するスタンドアロンのコードセットです。 PHP、HTML、CSS、JavaScript/jQueryの任意の組み合わせを使用します。プラグインは、ウェブサイトの任意の部分に新しい機能を追加できます。
Webサイトに追加できる機能は、各特定のプラグインが作成されたものによって異なります。 WordPressプラグインを開発して、何でもすることができます。小さなタスクから、多くの操作を実行し、独自のインターフェイスを備えたフルレッジアプリケーションまで。プラグインは、フック、フィルター、ショートコード、ウィジェット、およびカスタムコードを使用して機能を実行するために、テーマや作業とは異なり、独立して作業します。
このWordPressプラグインチュートリアルでは、最初のWordPressプラグインを作成する方法を学びます。プラグインを作成する最も重要な理由は、WordPressコアコードから独自のコードを分離できることです。
  ***[要件][1]** 
  ***[プラグイン開発の基本][2]** 
  ***[WPプラグインの作成方法？][3]** 
  ***[結論][4]** 

## 要件 {#requirements}
  * WordPressの最新バージョン
  * PHP / MySQLの理解
  * HTML / CSSおよびJavaScriptの理解

## プラグイン開発の基本 {#basics}
プラグイン開発のいくつかの重要な側面について少し話しましょう。これらの概念がどのように機能するかをしっかりと理解することは、使いやすく保守可能な機能を構築するのに役立ちます。

## # 行動
**アクションフック**は**WordPress ** **プラグイン** の非常に便利なツールであり、テーマまたはプラグインの特定の場所で機能（**アクション**）を実行するために使用されます。 WordPressには、コア機能全体にわたって数十のアクションが定義されており、各アクションは一意の名前で構成されています。詳細[読む][5]。

## # フィルター
WordPressフィルターは、変数（または一連の変数）を受け入れ、変更された後に戻したフックです。これらのフィルターは、デフォルト情報を操作する方法があるようによく使用されます。詳細[読む][6]。

## # ショートコード
ショートコードは、コンテンツとの動的な相互作用を実行するために使用できるマクロです。つまり、投稿に添付された画像からギャラリーを作成したり、ビデオをレンダリングしたりします。その結果、エンドユーザーがコンテンツのプレゼンテーションをプログラム的に変更する能力を可能にしながら、コンテンツを清潔でセマンティックに保つ貴重な方法です。詳細[読む][7]。

## # ウィジェット
ウィジェットは、使いやすいインターフェイスを提供しながらプラグインのコードを実行する別の手段を提供するため、重要です。ほとんどのテーマは1つ以上のサイドバーをサポートするためです。独自のウィジェットを追加すると、テーマ内に情報を表示するための迅速なアクセスが可能になります。

##  **WPプラグインの作成方法？** {#create}
WordPressプラグインチュートリアルのこのセクションでは、フォルダーを作成してから、1行のコンテンツを含む単一のファイルを作成するだけです。 **wp-content/plugins **フォルダーに移動し、 **mytestplugin ** という名前の新しいフォルダーを作成します。この新しいフォルダー内で、 **mytestplugin.php**  という名前のファイルを作成します。テキストエディターでファイルを開き、次の情報を貼り付けます。
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
これで、バックエンドに移動してプラグインをアクティブにすることができます。このプラグインは何もしませんが、それだけです。しかし、それはアクティブで機能するプラグインです。プラグインを開発する際のベストプラクティスは、コードを適切なファイルとフォルダーにきちんと分離することです。
実証するには、各投稿が表示されている回数を保存することにより、記事の人気を追跡するテストプラグインに機能を追加しましょう。

## # ページビューの保存
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
これまでのところ、このWordPressプラグインチュートリアルではとても良いです。しかし、この関数は決して呼び出されないため、実際には使用されません。これがフックが入ってくる場所です。テーマのファイルに移動し、そこから手動で機能を呼び出すことができます。しかし、テーマを変更した場合、その機能を失い、目的全体を打ち負かすことになります。 **wp_head **という名前のフックは、ほとんどのテーマにタグが存在する直前に実行されるため、 **wp_head**  が実行されるたびに機能するように機能を設定できます。
```
add_action("wp_head", "add_page_views");
```

## # ページビューを表示します
次に、上記の関数に既に保存されているページビューを返す別の関数を作成します。コードを見てみましょう。
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
これまでのところ、ビューカウントを取得したばかりです。さあ、見せてみましょう。あなたはそれが複雑でなければならないと思っているかもしれません。しかし、このように非常に簡単です：
```
echo get_page_views() . “view(s)”
```

## 結論 {#conclusion}
これは、このWordPressプラグインチュートリアルの終わりです。この記事に従って、ほんの一握りの関数のみを使用することにより、最も人気のある投稿を追跡するための基本的なプラグインを作成しました。私たちはそれを大いに改善することができますが、目的はあなたが基本に満足することでした。さらに、WordPress開発（プラグイン、フックなど）のパターンを学ぶことで、単語以外の環境でも役立つスキルを獲得しています。オープンソースのブログプラットフォームとオープンソースCMSに関連する他の多くのブログ投稿があります。以下の探索セクションで見つけることができます。このブログ投稿は、ビジネスのためにオープンソースのブログプラットフォームを展開しようとしている場合に本当に役立ちます。
最後に、[containerize.com][8]は、さらなるオープンソース製品に関する記事を書いています。したがって、定期的なニュースとアップデートの[ブログ][9]および[ビジネスインテリジェンスソフトウェア][10]カテゴリに連絡してください

## 探検
  * [WordPressにMatomoをインストールする方法| WordPressチュートリアル][11]
  * [無料のCivicRM WordPress統合でリードを後押し][12]
  * [WordPressにプラグインをインストールする方法|バニラフォーラム][13]
  * [Joomla vs Drupal | 2021年のCMS比較][14]
  * [2021年にオープンソースソフトウェアを選択する前にレビューすること][15]

  
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
