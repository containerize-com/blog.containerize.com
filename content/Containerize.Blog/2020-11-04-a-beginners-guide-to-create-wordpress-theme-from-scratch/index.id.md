---
title: "Panduan Pemula Untuk Membuat Tema WordPress dari awal" 
seoTitle: "Panduan Pemula Untuk Membuat Tema WordPress dari awal" 
description: "Pelajari cara membuat tema WordPress dari awal tanpa rasa sakit. Dalam tutorial ini kami telah menjelaskan prosesnya dalam langkah -langkah mudah." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Langkah 5: File Styles.css" 
url: /id/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Panduan Pemula Untuk Membuat Tema WordPress dari awal">}}

Cara membuat tema WordPress adalah salah satu kueri teratas dalam pencarian Google. Membuat tema WordPress bisa sederhana jika Anda tahu HTML dasar, CSS, dan JavaScript. Namun, jika Anda baru mengenal WordPress maka tutorial ini untuk Anda. Yang harus Anda lakukan adalah mengikuti langkah -langkah yang disebutkan. Jadi, mari kita baca panduan ini dan pelajari cara membuat tema WordPress dari awal.
  * [Persyaratan][1]
  * [Panduan Langkah demi Langkah][2]

### Persyaratan {#Requirements}
Hal pertama dan terpenting yang perlu Anda lakukan adalah, instal WordPress. WordPress terkenal karena kemudahan pemasangannya. Ini adalah proses yang sederhana dan dapat dilakukan dengan mudah sendiri dengan mengikuti [panduan][3].

### Cara membuat tema WordPress; Panduan Langkah demi Langkah {#Guide}
Untuk tema WordPress, semuanya akan dilakukan di direktori ** wp_content ** saja. Buat saja subfolder tema baru di folder ** wp_content → tema. ** Mari kita asumsikan nama Anda ** "CustomTheme" **.
Yang kedua adalah memutuskan tata letak tema. Di sini, tutorial ini menunjukkan tata letak dasar yang terdiri dari ** header, area utama, footer, bilah samping **.
Pada dasarnya, WordPress hanya membutuhkan 2 file yaitu style.css dan index.php. Tapi, untuk tata letak ini, Anda memerlukan ** 5 file **, sebagai berikut;
  *** header.php - ** berisi kode untuk bagian header tema.
  *** index.php - ** berisi kode untuk area utama dan akan menentukan di mana file lainnya akan disertakan. Ini adalah file utama tema.
  *** sidebar.php - ** berisi informasi tentang bilah samping.
  *** footer.php - ** Menangani bagian footer.
  *** style.css - ** Bertanggung jawab atas gaya tema Anda.
  *** bootstrap.css - ** Tidak ada kode CSS terpisah diperlukan; sangat responsif.
  *** bootstrap.js - ** menyediakan JS sendiri untuk bilah navigasi, atau tab, dll.
** bootstrap.js ** dan ** bootstrap.css ** perlu diunduh dari paket bootstrap dan disalin ke folder ** tema **.
Berikut adalah langkah -langkah yang harus diikuti untuk mengatur tema

### Langkah 1: File header.php
Masukkan kode berikut di file header.php.
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
File header.php ini berisi kode untuk bagian header di mana file JS dan gaya ditautkan. Ini menampilkan header halaman.

### Langkah 2: File index.php
Masukkan kode berikut di indeks file utama.php
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
Kode di atas menampilkan konten utama postingan, sidebar, dan footer.

### Langkah 3: File sidebar.php
Tambahkan kode berikut di sidebar.php
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
Dalam kode di atas, fungsi WordPress internal dipanggil untuk menampilkan berbagai kategori, arsip posting.

### Langkah 4: File footer.php
Tambahkan baris kode di bawah ini ke file footer.php:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Langkah 5: File Styles.css
Tambahkan baris berikut ke file style.css
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
Setelah mengikuti semua langkah di atas, Anda akan memiliki tema WordPress yang berfungsi dasar. Anda dapat memodifikasinya lebih lanjut untuk membuatnya lebih indah dan sesuai dengan kebutuhan Anda.

### Kesimpulan
Dalam tutorial ini kami telah menjelaskan cara membuat tema WordPress dalam langkah -langkah sederhana dan mudah. Setelah membaca dan mengikuti langkah -langkah yang membuat tema WordPress adalah tugas yang lebih sulit sekarang. Tapi, jelas tutorial ini menempel pada pengaturan yang sangat mendasar dan untuk meningkatkan di atasnya, Anda harus mempelajari lebih lanjut tentang HTML, CSS, JS dan PHP.

  
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
