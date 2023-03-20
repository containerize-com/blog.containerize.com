---
title: "Panduan Pengembangan Template Joomla untuk Pemula" 
seoTitle: "Panduan Pengembangan Template Joomla untuk Pemula" 
description: "Pelajari Pengembangan Template Joomla, cara mengatur tata letak responsif untuk berbagai kasus penggunaan. Set file yang menentukan lapisan desain situs web bisnis." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Bangun templat Joomla yang sangat profesional dan dapat disesuaikan yang menawarkan banyak fitur seperti skema warna multibahasa, SEO / pengguna, dan warna yang kaya." 
url: /id/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Bangun templat Joomla yang sangat profesional dan dapat disesuaikan yang menawarkan banyak fitur seperti skema warna multibahasa, SEO / pengguna, dan warna yang kaya. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Pengembangan Template Joomla">}}


## Ringkasan
Situs web bisnis yang dirancang dengan baik memainkan peran penting untuk membawa dan mempertahankan pengunjung dengan memberi mereka kemudahan navigasi. ** Joomla ** fitur lengkap memfasilitasi penggunanya dengan sejumlah tata letak responsif dan pengembangan template Joomla yang mengontrol estetika situs web bisnis.
Selama fase pengembangan, penempatan elemen desain sangat penting untuk diperoleh:
  * Konsistensi
  * Navigasi yang mudah
  * Kesederhanaan
  * Kompatibilitas seluler
  * Keterbacaan
Inilah Template ** Joomla **. Perangkat lunak open source ini memberikan ketentuan untuk mengembangkan atau menggunakan tata letak responsif yang telah ditentukan untuk semua halaman web daripada menulis kode untuk setiap halaman secara terpisah.
Dalam posting blog ini, kami akan mempelajari hal -hal berikut tentang cara membuat dan mengatur template ramah pengguna ** di Joomla.
  *[** Apa itu tata letak Joomla? **][2]
  *[** Bagaimana cara membuat template responsif sederhana di Joomla? **][3]
  *[** Bagaimana cara menginstal template joomla? **][4]
  *[** Kesimpulan **][5]

## Apa itu tata letak Joomla? {#Apa}
Joomla menyediakan templat untuk ujung depan dan juga untuk bagian belakang. Muncul dengan banyak templat yang siap dan menawarkan pengembang untuk membangun ** tema bootstrap responsif gratis ** Menurut kasus penggunaannya. Ada dua jenis templat di Joomla.
** Templat front-end: ** Terkait dengan pengguna yang menghadapi bagian dari situs web bisnis.
** Template back-end: ** Template ini ditautkan ke logika bisnis situs.

## Bagaimana cara membuat template responsif sederhana di Joomla? {#Bagaimana}
Di bagian ini, kami akan membahas langkah -langkah tutorial Template Joomla ini.
Sebelum melompat ke bagian ini, pastikan Anda memiliki pemahaman tentang hal -hal berikut:
  * Html
  * CSS
  * JavaScript
  * Php
Jadi, membuat template khusus di Joomla tidak pernah begitu keras dan kompleks. Namun, mari kita mulai membuat template Joomla pertama kami.

## ** Struktur Direktori Pengaturan **
Pertama -tama, buat folder bernama "** mytemplate **" di dalam "** template **" folder.
Buat file berikut di dalam "** folder MyTemplate **":
  *** index.php **: Ini adalah file inti yang berisi kode HTML dan PHP untuk seluruh halaman templat.
  *** Templedetails.xml **: File ini berisi data meta templat dan wajib untuk diperhatikan oleh Joomla.
Sekarang, buat tiga folder di dalam folder "** MyTemplate **" dengan nama -nama berikut:
  *** JS **: Folder ini akan berisi semua file JavaScript yang diperlukan untuk template
  *** CSS **: Semua file CSS untuk penataan akan masuk ke folder ini
  *** Gambar **: Gambar yang digunakan oleh templat akan berada di folder ini
Buat file CSS bernama "** template.css **" di dalam "** css **" folder.
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
Akhirnya, beginilah penampilan struktur direktori.

## mari kita taruh beberapa kode
Masukkan kode ini di file ** templatedetails.xml **.
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
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
Seperti disebutkan sebelumnya, file ini berisi metadata tentang tata letak responsif yang didefinisikan di antara tag markup. Namun, Anda dapat mengubah informasi umum seperti nama, penulis, dan deskripsi.
File ini juga berisi informasi tentang file dan folder lain yang digunakan oleh template.
Sekarang, buka file ** index.php ** dan mulailah meletakkan kode berikut:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
File ini akan dimulai dengan baris ini yang mencegah orang lain membaca kode PHP Anda.
```
<!DOCTYPE html>
```
Ini untuk memberi tahu Browser tentang jenis dokumen.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
Dokumen HTML dimulai dengan baris ini dan ** xmlns ** atribut memberi tahu namespace XML untuk dokumen tersebut.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
Baris pertama setelah tag memberi tahu Joomla untuk menempatkan informasi header seperti informasi metadata dan judul halaman.
Ada tautan ke lembar gaya eksternal di baris kedua dan baris ketiga menautkan file JavaScript eksternal.
File lainnya memungkinkan bootstrap ke dalam templat.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
Bagian tubuh dimulai setelah bagian kepala berisi semua data yang akan tercermin pada templat untuk dilihat dan dinavigasi oleh pengguna.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Pernyataan ini disebut pernyataan JDOC yang digunakan untuk menginstruksikan Joomla untuk menambahkan modul bernama "Posisi-7". Ada beberapa pernyataan JDOC yang sering digunakan dalam pengembangan Template Joomla **.
Ini adalah file lengkap ** index.php ** final dengan semua kode yang diperlukan untuk template Joomla dasar.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Semuanya ada untuk templat yang sangat mendasar. Sekarang, sekarang saatnya untuk menginstalnya di server Joomla dan melihat bagaimana hasilnya.

## Bagaimana cara menginstal Template Joomla? {#Install}
Proses instalasi Template Joomla cukup lurus dan mudah. Ada langkah -langkah berikut untuk menginstal:
Pergi ke “Ekstensi -> Kelola -> Instal

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla Instal Pengaturan Gambar">}}

Di sini Anda dapat melihat template Joomla yang baru dikembangkan dalam daftar seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Daftar Template Joomla">}}

Sekarang, pilih template, tekan "Install" dan pesan sukses akan muncul tentang instalasi yang berhasil.
Setelah template diinstal, Anda dapat mengakses dan memodifikasi file template dalam panel kontrol Joomla dan melihat pratinjau perubahan dari opsi "Template Preview".

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Sekarang, Anda dapat melihat template Joomla pertama Anda ke browser!

## kesimpulan {#conclusion}
Template yang baik dan responsif adalah dasar untuk pemodelan situs secara keseluruhan. ** Tata letak responsif ** di Joomla bersifat multifungsi dan dapat digunakan untuk berbagai proyek. Dari menulis kode ke pengembangan Template Joomla menjadi sangat sederhana dengan bantuan dasbor admin intuitif. Joomla memberikan kontrol penuh atas pengembangan template untuk memenuhi keinginan pengguna.
Sebagai ** perangkat lunak CMS ** Kategori berada di bawah perbaikan yang konsisten dan lebih banyak tutorial tentang sistem manajemen konten lainnya akan ditambahkan ke daftar, harap tetap berhubungan dengan bagian [Sistem Manajemen Konten][6] untuk pembaruan rutin.

## halaman produk yang relevan
Anda mungkin menemukan tautan berikut yang relevan:
  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Concrete5][11]
  * [Grav][12]
  * [Craft][13]
  * [Conttao][14]
  * [Fork][15]
  * [Refinery CMS][16]
  * [LocomotiveCMS][17]

  
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
