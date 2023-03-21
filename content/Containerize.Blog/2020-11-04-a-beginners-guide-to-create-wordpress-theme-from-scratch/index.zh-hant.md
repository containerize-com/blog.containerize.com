---
title: "從頭開始創建WordPress主題的初學者指南" 
seoTitle: "從頭開始創建WordPress主題的初學者指南" 
description: "了解如何從頭開始創建WordPress主題。在本教程中，我們以簡單的步驟解釋了該過程。" 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "步驟5：styles.css文件" 
url: /zh-hant/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="從頭開始創建WordPress主題的初學者指南">}}

如何創建WordPress主題是Google搜索中的最高查詢之一。如果您知道基本的HTML，CSS和JavaScript，則創建WordPress主題可能很簡單。但是，如果您是WordPress的新手，那麼本教程適合您。您要做的就是遵循上述步驟。因此，讓我們閱讀本指南，並了解如何從頭開始創建WordPress主題。
  * [要求][1]
  * [逐步指南][2]

###要求 {#requirements}
首先，您需要做的是最重要的事情，是安裝WordPress。 WordPress以其易於安裝而聞名。這是一個簡單的過程，可以按照[指南][3]輕鬆完成自己的操作。

###如何創建WordPress主題；逐步指南 {#guide}
對於WordPress主題，一切都將僅在**wp_content**目錄中完成。只需在**wp_content→主題文件夾中製作一個新的主題子文件夾即可。
第二件事是決定主題的佈局。在這裡，教程顯示了基本佈局，包括**標題，主區域，頁腳，側邊欄**。
基本上，WordPress僅需要2個文件，即style.css and Index.php。但是，對於此佈局，您需要**5個文件**，如下所示；
***header.php  -**包含主題標題部分的代碼。
***index.php  -**包含主區域的代碼，並將指定將包含其他文件的位置。這是主題的主要文件。
***sidebar.php  -**包含有關側邊欄的信息。
***footer.php  -**處理頁腳部分。
***style.css  -**負責您主題的樣式。
***bootstrap.css  -**無需單獨的CSS代碼；反應迅速。
***bootstrap.js  -**為導航欄或選項卡提供了自己的JS，等等。
* * Bootstrap.js**和**Bootstrap.css**需要從Bootstrap軟件包下載並複製到**主題**文件夾中。
這是要遵循設置主題的步驟

###步驟1：header.php文件
將以下代碼放在header.php文件中。
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
此文件標題.php包含鏈接JS和样式文件的標頭部分的代碼。它顯示頁面的標題。

###步驟2：index.php文件
將以下代碼放在主文件index.php中
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
上面的代碼顯示帖子，側邊欄和頁腳的主要內容。

###步驟3：sidebar.php文件
在sidebar.php中添加以下代碼
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
在上面的代碼中，調用內部WordPress函數顯示不同的類別，即帖子檔案。

###步驟4：footer.php文件
將以下代碼行添加到footer.php文件：
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

##步驟5：styles.css文件
將以下行添加到style.css文件
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
遵循上述所有步驟後，您將擁有一個基本的WordPress主題。您可以進一步修改它，使其更加美麗，適合您的要求。

##＃ 結論
在本教程中，我們解釋瞭如何以簡單簡便的步驟創建WordPress主題。在閱讀並遵循創建WordPress主題的步驟之後，現在已經不再是艱鉅的任務了。但是，顯然，這個教程堅持非常基本的設置，為了增強您的功能，您必須了解有關HTML，CSS，JS和PHP的更多信息。

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
