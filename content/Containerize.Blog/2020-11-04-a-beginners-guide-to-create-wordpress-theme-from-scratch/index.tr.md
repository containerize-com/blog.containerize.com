---
title: "Sıfırdan WordPress teması oluşturmak için yeni başlayan bir kılavuz" 
seoTitle: "Sıfırdan WordPress teması oluşturmak için yeni başlayan bir kılavuz" 
description: "Scratch'tan WordPress temasını ağrısız bir şekilde nasıl oluşturacağınızı öğrenin. Bu öğreticide süreci kolay adımlarla açıkladık." 
date: Wed, 04 Nov 2020 02:18:25 +0000
author: Assad Mahmood
summary: "Adım 5: Styles.css dosyası" 
url: /tr/a-beginners-guide-to-create-wordpress-theme-from-scratch/
categories: ['Blogging']
---

{{< figure align=center src="images/Beginners-Guide-To-Create-WordPress-Theme-From-Scratch-1024x536.png" alt="Sıfırdan WordPress teması oluşturmak için yeni başlayan bir kılavuz">}}

WordPress teması nasıl oluşturulur, Google aramasındaki en iyi sorgular arasındadır. Basic HTML, CSS ve JavaScript'i biliyorsanız, bir WordPress teması oluşturmak basit olabilir. Ancak, WordPress'te yeniyseniz, bu öğretici sizin içindir. Tek yapmanız gereken belirtilen adımları takip etmektir. Öyleyse, bu kılavuzu okuyalım ve WordPress temasını sıfırdan nasıl oluşturacağınızı öğrenelim.
  * [Gereksinimler] [1]
  * [Adım adım kılavuz] [2]

### Gereksinimler {#Requirements}
Yapmanız gereken ilk ve en önemli şey WordPress'i yüklemektir. WordPress, kurulum kolaylığı ile tanınır. Bu basit bir süreçtir ve [kılavuz] [3] 'i takip ederek kolayca kendiniz yapılabilir.

### WordPress teması nasıl oluşturulur; Adım adım kılavuz {#guide}
WordPress teması için her şey yalnızca ** wp_content ** dizininde yapılacaktır. Sadece ** wp_content → temalar klasöründe yeni bir tema alt klasörü yapın. ** Varsayalım ki ** “CustomTheme” **.
İkinci şey, temanın düzenine karar vermektir. Burada, öğretici ** başlık, ana alan, altbilgi, kenar çubuğu ** oluşan temel düzeni gösteriyor.
Temel olarak, WordPress sadece 2 dosyaya ihtiyaç duyar. Ancak, bu düzen için, aşağıdaki gibi ** 5 dosyaya ** gerekir;
  *** header.php - **, temanın başlık bölümünün kodunu içerir.
  *** index.php - ** Ana alanın kodu içerir ve diğer dosyaların nereye dahil edileceğini belirtir. Bu temanın ana dosyasıdır.
  *** Sidebar.php - ** Kenar çubuğu hakkında bilgi içerir.
  *** footer.php - ** altbilgi bölümünü işler.
  *** Style.css - ** Temanızın stilinden sorumlu.
  *** bootstrap.css - ** ayrı CSS kodu gerekmez; son derece duyarlı.
  *** Bootstrap.js - ** Navigasyon çubuğu veya sekmeleri vb. İçin kendi js sağlar.
** bootstrap.js ** ve ** bootstrap.css ** bootstrap paketinden indirilmesi ve ** tema ** klasörüne kopyalanması gerekir.
İşte Kurulum Teması için İzlenecek Adımlar

### Adım 1: header.php dosyası
Aşağıdaki kodu header.php dosyasına koyun.
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
Bu dosya header.php, JS ve stil dosyasının bağlantılı olduğu başlık kısmının kodu içerir. Sayfanın başlığını görüntüler.

### Adım 2: index.php dosyası
Aşağıdaki kodu ana dosya dizinine koyun.php
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
Yukarıdaki kod, yazı, kenar çubuğu ve altbilginin ana içeriğini görüntüler.

### Adım 3: Sidebar.php dosyası
Sidebar.php'ye aşağıdaki kodu ekleyin
```
<div id="ttr_sidebar" class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
<h2 ><?php _e('Categories'); ?></h2>
<ul > <?php wp_list_cats('sort_column=namonthly'); ?> </ul>
<h2 ><?php _e('Archives'); ?></h2>
<ul > <?php wp_get_archives(); ?> </ul>
</div>
```
Yukarıdaki kodda, farklı kategorileri, yayın arşivlerini görüntülemek için dahili WordPress işlevleri çağrılır.

### Adım 4: Footer.php dosyası
Aşağıdaki kod satırlarını footer.php dosyasına ekleyin:
```
<div id= "ttr_footer">
<h1>FOOTER</h1>
</div>
</div>
</body>
</html>
```

## Adım 5: Styles.css Dosyası
Style.css dosyasına aşağıdaki satırları ekleyin
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
Yukarıdaki tüm adımları izledikten sonra, temel bir WordPress temasına sahip olacaksınız. Daha güzel hale getirmek ve gereksinimlerinize uygun hale getirmek için daha fazla değiştirebilirsiniz.

### Çözüm
Bu öğreticide WordPress temasının basit ve kolay adımlarla nasıl oluşturulacağını açıkladık. Bir WordPress teması oluşturmak ve şimdi daha zor bir iş değil, adımları okuduktan ve izledikten sonra artık zor bir görev değil. Ancak, bu öğretici çok temel kuruluma ve üstünü geliştirmek için HTML, CSS, JS ve PHP hakkında daha fazla bilgi edinmeniz gerekecek.
[1]: #requirements
[2]: #guide
[3]: https://products.containerize.com/blogging/wordpress
