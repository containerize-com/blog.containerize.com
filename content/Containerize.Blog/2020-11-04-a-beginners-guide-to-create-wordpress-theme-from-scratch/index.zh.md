---
title: "从头开始创建WordPress主题的初学者指南" 
seoTitle: "从头开始创建WordPress主题的初学者指南" 
description: "了解如何从头开始创建WordPress主题。在本教程中，我们以简单的步骤解释了该过程。" 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "步骤5：styles.css文件" 
url: /zh/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="从头开始创建WordPress主题的初学者指南">}}

如何创建WordPress主题是Google搜索中的最高查询之一。如果您知道基本的HTML，CSS和JavaScript，则创建WordPress主题可能很简单。但是，如果您是WordPress的新手，那么本教程适合您。您要做的就是遵循上述步骤。因此，让我们阅读本指南，并了解如何从头开始创建WordPress主题。
  * [要求][1]
  * [逐步指南][2]


### 要求 {#requirements}

首先，您需要做的是最重要的事情，是安装WordPress。 WordPress以其易于安装而闻名。这是一个简单的过程，可以按照[指南][3]轻松完成自己的操作。


### 如何创建WordPress主题；逐步指南 {#guide}

对于WordPress主题，一切都将仅在  **wp_content**  目录中完成。只需在**wp_content→主题文件夹中制作一个新的主题子文件夹即可。
第二件事是决定主题的布局。在这里，教程显示了基本布局，包括  **标题，主区域，页脚，侧边栏**  。
基本上，WordPress仅需要2个文件，即style.css and Index.php。但是，对于此布局，您需要  **5个文件**  ，如下所示；
*  **header.php  -**  包含主题标题部分的代码。
*  **index.php  -**  包含主区域的代码，并将指定将包含其他文件的位置。这是主题的主要文件。
*  **sidebar.php  -**  包含有关侧边栏的信息。
*  **footer.php  -**  处理页脚部分。
*  **style.css  -**  负责您主题的样式。
*  **bootstrap.css  -**  无需单独的CSS代码；反应迅速。
*  **bootstrap.js  -**  为导航栏或选项卡提供了自己的JS，等等。
 **Bootstrap.js** 和 **Bootstrap.css** 需要从Bootstrap软件包下载并复制到 **主题** 文件夹中。
这是要遵循设置主题的步骤

### 步骤1：header.php文件
将以下代码放在header.php文件中。
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
此文件标题.php包含链接JS和样式文件的标头部分的代码。它显示页面的标题。

### 步骤2：index.php文件
将以下代码放在主文件index.php中
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
上面的代码显示帖子，侧边栏和页脚的主要内容。

### 步骤3：sidebar.php文件
在sidebar.php中添加以下代码
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
在上面的代码中，调用内部WordPress函数显示不同的类别，即帖子档案。

### 步骤4：footer.php文件
将以下代码行添加到footer.php文件：
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## 步骤5：styles.css文件
将以下行添加到style.css文件
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
遵循上述所有步骤后，您将拥有一个基本的WordPress主题。您可以进一步修改它，使其更加美丽，适合您的要求。

### 结论
在本教程中，我们解释了如何以简单简便的步骤创建WordPress主题。在阅读并遵循创建WordPress主题的步骤之后，现在已经不再是艰巨的任务了。但是，显然，这个教程坚持非常基本的设置，为了增强您的功能，您必须了解有关HTML，CSS，JS和PHP的更多信息。



 [1]: #requirements
 [2]: #guide
 [3]: https://products.containerize.com/blogging/wordpress
