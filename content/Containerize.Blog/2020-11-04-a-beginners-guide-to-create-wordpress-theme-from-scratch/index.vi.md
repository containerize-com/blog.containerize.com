---
title: "Hướng dẫn người mới bắt đầu để tạo chủ đề WordPress từ đầu" 
seoTitle: "Hướng dẫn người mới bắt đầu để tạo chủ đề WordPress từ đầu" 
description: "Tìm hiểu làm thế nào để tạo chủ đề WordPress từ đầu không đau. Trong hướng dẫn này, chúng tôi đã giải thích quá trình theo các bước dễ dàng." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Bước 5: Tệp Styles.css" 
url: /vi/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Hướng dẫn người mới bắt đầu để tạo chủ đề WordPress từ đầu">}}

Cách tạo chủ đề WordPress là một trong những truy vấn hàng đầu trong tìm kiếm của Google. Tạo một chủ đề WordPress có thể đơn giản nếu bạn biết cơ bản HTML, CSS và JavaScript. Tuy nhiên, nếu bạn chưa quen với WordPress thì hướng dẫn này là dành cho bạn. Tất cả bạn phải làm là làm theo các bước được đề cập. Vì vậy, hãy để đọc hướng dẫn này và tìm hiểu cách tạo chủ đề WordPress từ đầu.
  * [Yêu cầu][1]
  * [Hướng dẫn từng bước][2]

### Yêu cầu   {#Requirements}
Điều đầu tiên và quan trọng nhất bạn cần làm là, cài đặt WordPress. WordPress nổi tiếng vì dễ cài đặt. Đó là một quá trình đơn giản và có thể tự mình thực hiện dễ dàng bằng cách làm theo [hướng dẫn][3].

### Cách tạo chủ đề WordPress; Hướng dẫn từng bước   {#Guide}
Đối với chủ đề WordPress, mọi thứ sẽ được thực hiện trong thư mục**wp_content**. Chỉ cần tạo một thư mục con chủ đề mới trong thư mục**wp_content → chủ đề.**Hãy để giả sử bạn đặt tên cho nó**.
Điều thứ hai là quyết định bố cục của chủ đề. Ở đây, hướng dẫn đang hiển thị bố cục cơ bản bao gồm**tiêu đề, khu vực chính, chân trang, thanh bên**.
Về cơ bản, WordPress chỉ cần 2 tệp, tức là style.css và index.php. Nhưng, đối với bố cục này, bạn cần**5 tệp**, như sau;
***header.php -**chứa mã cho phần tiêu đề của chủ đề.
***index.php -**chứa mã cho khu vực chính và sẽ chỉ định nơi các tệp khác sẽ được bao gồm. Đây là tập tin chính của chủ đề.
***Sidebar.php -**chứa thông tin về thanh bên.
***Footer.php -**Xử lý phần chân trang.
***Style.css -**Chịu trách nhiệm về kiểu dáng của chủ đề của bạn.
***BootStrap.css -**Không cần mã CSS riêng biệt; đáp ứng cao.
***BootStrap.js -**cung cấp JS của riêng mình cho thanh điều hướng, hoặc tab, v.v.
* * BootStrap.js**và**BootStrap.css**Cần được tải xuống từ gói Bootstrap và sao chép vào thư mục**chủ đề**.
Dưới đây là các bước để làm theo chủ đề thiết lập

### Bước 1: Tệp tiêu đề.php
Đặt mã sau trong tệp Header.php.
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
Tệp này tiêu đề.php chứa mã cho phần tiêu đề trong đó tệp JS và kiểu được liên kết. Nó hiển thị tiêu đề của trang.

### Bước 2: Tệp index.php
Đặt mã sau vào tệp chính Index.php
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
Mã trên hiển thị nội dung chính của bài, thanh bên và chân trang.

### Bước 3: Tệp Sidebar.php
Thêm mã sau trong thanh bên.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
Trong mã trên, các chức năng WordPress nội bộ được gọi để hiển thị các danh mục khác nhau, Lưu trữ các bài đăng.

### Bước 4: Tệp footer.php
Thêm các dòng mã bên dưới vào tệp footer.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Bước 5: Tệp Styles.css
Thêm các dòng sau vào tệp style.css
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
Sau khi làm theo tất cả các bước trên, bạn sẽ có một chủ đề WordPress làm việc cơ bản. Bạn có thể sửa đổi nó hơn nữa để làm cho nó đẹp hơn và phù hợp với yêu cầu của bạn.

### Phần kết luận
Trong hướng dẫn này, chúng tôi đã giải thích cách tạo chủ đề WordPress theo các bước đơn giản và dễ dàng. Sau khi đọc và làm theo các bước tạo ra một chủ đề WordPress không phải là nhiệm vụ khó khăn hơn bây giờ. Nhưng, rõ ràng hướng dẫn này gắn liền với thiết lập rất cơ bản và để tăng cường trên nó, bạn sẽ phải tìm hiểu thêm về HTML, CSS, JS và PHP.

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
