---
title: "WordPressテーマをゼロから作成するための初心者ガイド" 
seoTitle: "WordPressテーマをゼロから作成するための初心者ガイド" 
description: "ゼロからWordPressテーマをゼロから作成する方法を学びましょう。このチュートリアルでは、簡単なステップでプロセスを説明しました。" 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "ステップ5：styles.cssファイル" 
url: /ja/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="WordPressテーマをゼロから作成するための初心者ガイド">}}

WordPressテーマを作成する方法は、Google検索のトップクエリの1つです。基本的なHTML、CSS、およびJavaScriptを知っている場合、WordPressテーマを作成することは簡単です。ただし、WordPressを初めて使用する場合は、このチュートリアルが最適です。あなたがしなければならないのは、言及された手順に従うことだけです。それでは、このガイドを読んで、WordPressテーマをゼロから作成する方法を学びましょう。
  * [要件][1]
  * [ステップバイステップガイド][2]

## # 要件 {#requirements}
最初で最も重要なことは、WordPressをインストールすることです。 WordPressは、インストールのしやすさでよく知られています。これは簡単なプロセスであり、[ガイド][3]に従うことで簡単に自分で実行できます。

## # WordPressテーマの作成方法。ステップバイステップガイド {#guide}
WordPressテーマの場合、すべてが**wp_content **ディレクトリのみで行われます。**  wp_content→テーマフォルダーに新しいテーマのサブフォルダーを作成するだけです。
2つ目は、テーマのレイアウトを決定することです。ここで、このチュートリアルでは、**ヘッダー、メインエリア、フッター、サイドバーで構成される基本的なレイアウトを示しています。
基本的に、WordPressは2つのファイル、つまりStyle.cssとindex.phpのみを必要とします。ただし、このレイアウトには、次のように **5ファイル** が必要です。
  ***header.php  - ** テーマのヘッダーセクションのコードが含まれています。
  ***index.php  - ** メイン領域のコードが含まれており、他のファイルが含まれる場所を指定します。これがテーマの主なファイルです。
  ***SideBar.php  - ** サイドバーに関する情報が含まれています。
  ***footer.php  - ** フッターセクションを処理します。
  ***style.css  - ** テーマのスタイリングを担当します。
  ***bootstrap.css  - ** 個別のCSSコードは必要ありません。非常に反応が良い。
  ***bootstrap.js  - ** ナビゲーションバー、またはタブなどに独自のJSを提供します。
**bootstrap.js  **and **  bootstrap.css **は、bootstrapパッケージからダウンロードし、** テーマ**フォルダーにコピーする必要があります。
セットアップテーマに従う手順は次のとおりです

## # ステップ1：header.phpファイル
次のコードをheader.phpファイルに入れます。
```
<html>
<head>
<title>Custom Theme</title>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/jquery-ui.min.js'; ?>">
</script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri().'/js/bootstrap.js'; ?>">
</script>
<link  href="<?php echo get_stylesheet_directory_uri().'/css/bootstrap.css'; ?>">
<link  href="<?php bloginfo('stylesheet_url'); ?>">
</head>

<body>

<div id="ttr_header" class="jumbotron">
<h1>HEADER</h1>
</div>
<div class="container">
```
このファイルheader.phpには、JSおよびスタイルファイルがリンクされているヘッダーパーツのコードが含まれています。ページのヘッダーが表示されます。

## # ステップ2：index.phpファイル
次のコードをメインファイルindex.phpに配置します
```
<?php get_header(); ?>
<div id="ttr_main" class="row">
<div id="ttr_content" class="col-lg-8 col-sm-8 col-md-8 col-xs-12">

<div class="row">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
<h1><?php the_title(); ?></h1>
<h4>Posted on <?php the_time('F jS, Y') ?></h4>
<p><?php the_content(__('(more...)')); ?></p>
</div>
<?php endwhile; else: ?>
<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
</div>
</div>
<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
```
上記のコードには、投稿のメインコンテンツ、サイドバー、フッターが表示されます。

## # ステップ3：sidebar.phpファイル
sidebar.phpに次のコードを追加します
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
上記のコードでは、内部のWordPress関数が呼び出され、さまざまなカテゴリ、投稿のアーカイブを表示します。

## # ステップ4：footer.phpファイル
以下のコード行をfooter.phpファイルに追加します。
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## ステップ5：styles.cssファイル
次の行をstyle.cssファイルに追加します
```
body
{
text-align: left;
}
#ttr_sidebar
{
border-left: 1px solid black;
}
#ttr_footer
{
width: 100%;
border-top: 1px #a2a2a2 solid;
text-align: center;
}
.title
{
font-size: 11pt;
font-family: verdana;
font-weight: bold;
}
```
上記のすべての手順に従うと、基本的なワードプレステーマがあります。さらに変更して、より美しく、要件に合わせて適合させることができます。

## # 結論
このチュートリアルでは、シンプルで簡単なステップでWordPressテーマを作成する方法について説明しました。 WordPressのテーマを作成して作成した後、今では難しいタスクではありません。しかし、明らかにこのチュートリアルは非常に基本的なセットアップに固執し、その上に強化するには、HTML、CSS、JS、PHPの詳細を学ぶ必要があります。

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
