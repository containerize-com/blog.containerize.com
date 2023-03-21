---
title: "초보자 가이드는 처음부터 WordPress 테마를 만듭니다" 
seoTitle: "초보자 가이드는 처음부터 WordPress 테마를 만듭니다" 
description: "고통없이 처음부터 WordPress 테마를 만드는 방법을 배우십시오. 이 튜토리얼에서는 프로세스를 쉬운 단계로 설명했습니다." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "5 단계 : Styles.css 파일" 
url: /ko/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="초보자 가이드는 처음부터 WordPress 테마를 만듭니다">}}

WordPress 테마를 만드는 방법은 Google 검색의 쿼리 중 하나입니다. 기본 HTML, CSS 및 JavaScript를 알고 있으면 WordPress 테마를 만드는 것이 간단 할 수 있습니다. 그러나 WordPress를 처음 사용한다면이 튜토리얼은 귀하를위한 것입니다. 언급 된 단계를 따르기 만하면됩니다. 이 안내서를 읽고 처음부터 WordPress 테마를 만드는 방법을 배우겠습니다.
  * [요구 사항][1]
  * [단계별 가이드][2]

### 요구 사항   {#requirements}
가장 먼저해야 할 가장 중요한 일은 WordPress를 설치하는 것입니다. WordPress는 설치 용이성으로 잘 알려져 있습니다. 간단한 과정이며 [가이드][3]를 따라 혼자서 쉽게 수행 할 수 있습니다.

### WordPress 테마를 만드는 방법; 단계별 가이드   {#guide}
WordPress 테마의 경우 모든 것이**wp_content**디렉토리에서만 수행됩니다.**wp_content → 테마 폴더에서 새로운 테마 하위 폴더를 만드십시오.**이름을 "CustomTheme"**이름으로 가정 해 봅시다.
두 번째는 테마의 레이아웃을 결정하는 것입니다. 여기에서 튜토리얼에는**헤더, 메인 영역, 바닥 글, 사이드 바**로 구성된 기본 레이아웃이 표시됩니다.
기본적으로 WordPress는 2 개의 파일, 즉 Style.css 및 Index.php 만 필요합니다. 그러나이 레이아웃의 경우 다음과 같이**5 파일**가 필요합니다.
***header.php -**테마의 헤더 섹션에 대한 코드가 포함되어 있습니다.
***index.php -**주 영역의 코드가 포함되어 있으며 다른 파일이 포함될 위치를 지정합니다. 이것은 테마의 주요 파일입니다.
***sidebar.php -**는 사이드 바에 대한 정보를 포함합니다.
***족기 .php -**바닥 글을 처리합니다.
***style.css -**테마 스타일을 담당합니다.
***bootstrap.css -**별도의 CSS 코드가 필요하지 않습니다. 매우 반응이 좋습니다.
***bootstrap.js -**내비게이션 바 또는 탭 등의 자체 JS를 제공합니다.
* * bootstrap.js**및**bootstrap.css**는 bootstrap 패키지에서 다운로드하고**테마**폴더로 복사해야합니다.
다음은 테마를 설정하기 위해 따라야 할 단계입니다

### 1 단계 : header.php 파일
다음 코드를 Header.php 파일에 넣습니다.
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
이 파일 Header.php에는 JS 및 스타일 파일이 연결된 헤더 부분의 코드가 포함되어 있습니다. 페이지의 헤더를 표시합니다.

### 2 단계 : index.php 파일
다음 코드를 기본 파일 index.php에 넣습니다
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
위의 코드는 게시물, 사이드 바 및 바닥 글의 주요 내용을 표시합니다.

### 3 단계 : sidebar.php 파일
sidebar.php에 다음 코드를 추가하십시오
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
위의 코드에서는 내부 WordPress 기능이 호출되어 다른 범주, 게시물 아카이브를 표시합니다.

### 4 단계 : footer.php 파일
아래 코드 라인을 biger.php 파일에 추가하십시오.
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## 5 단계 : Styles.css 파일
Style.css 파일에 다음 줄을 추가하십시오
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
위의 모든 단계를 따르면 기본적인 작업 WordPress 테마가 나타납니다. 더 아름답고 요구 사항에 적합하도록 추가로 수정할 수 있습니다.

### 결론
이 튜토리얼에서는 간단하고 쉬운 단계에서 WordPress 테마를 만드는 방법을 설명했습니다. 단계를 읽고 따른 후 WordPress 테마를 만드는 것은 더 이상 어려운 작업이 아닙니다. 그러나이 튜토리얼은 매우 기본적인 설정을 고수하고 그 위에 향상하려면 HTML, CSS, JS 및 PHP에 대해 자세히 알아야합니다.

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
