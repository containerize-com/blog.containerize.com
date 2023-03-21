---
title: "Mari kita kembangkan plugin WordPress | Tutorial plugin WordPress" 
seoTitle: "Mari kita kembangkan plugin WordPress | Tutorial plugin WordPress" 
description: "Tertarik dengan pengembangan plugin WordPress? Ikuti tutorial plugin WordPress ini yang menjelaskan langkah -langkah lengkap untuk membuat plugin WordPress dasar." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "Plugin WordPress adalah modul yang Anda aktifkan di situs web Anda untuk menyediakan serangkaian fitur atau elemen. Plugin ini dioptimalkan SEO dan menawarkan otomatisasi." 
url: /id/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## Plugin WordPress adalah modul yang Anda aktifkan di situs web Anda untuk menyediakan serangkaian fitur atau elemen. Plugin ini dioptimalkan SEO dan menawarkan otomatisasi.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="tutorial plugin WordPress">}}


## Ringkasan
WordPress adalah platform blogging open source tingkat perusahaan. A **WordPress Plugin**  adalah set kode mandiri yang meningkatkan dan memperluas fungsionalitas WordPress. Dengan menggunakan kombinasi PHP, HTML, CSS, JavaScript/jQuery. Plugin dapat menambahkan fitur baru ke bagian mana pun dari situs web Anda.
Fungsionalitas yang dapat Anda tambahkan ke situs web Anda tergantung pada apa yang telah dilakukan oleh setiap plugin tertentu. Plugin WordPress dapat dikembangkan untuk melakukan apa saja. Dari tugas kecil hingga aplikasi penuh yang melakukan sejumlah operasi dan memiliki antarmuka sendiri. Plugin berbeda dari tema Anda dan bekerja secara mandiri, menggunakan kait, filter, kode pendek, widget, dan kode khusus untuk melakukan fungsionalitasnya.
Dalam tutorial plugin WordPress ini, kami akan belajar cara membuat plugin WordPress pertama kami. Alasan terpenting untuk membuat plugin adalah karena memungkinkan Anda memisahkan kode Anda sendiri dari kode inti WordPress.
  ***[persyaratan][1]** 
  ***[Dasar -dasar Pengembangan Plugin][2]** 
  ***[cara membuat plugin wp?][3]** 
  ***[Kesimpulan][4]** 

## Persyaratan   {#Requirements}
  * Versi WordPress Terbaru
  * Pemahaman tentang php / mysql
  * Pemahaman tentang HTML / CSS dan JavaScript

## Dasar -dasar pengembangan plugin   {#basics}
Mari kita luangkan waktu sejenak untuk membicarakan beberapa aspek kunci dari pengembangan plugin. Pemahaman yang kuat tentang bagaimana konsep-konsep ini bekerja akan membantu Anda membangun fungsionalitas yang mudah digunakan dan dapat dipelihara.

## # Tindakan
**Hooks Action  **adalah alat yang sangat berguna di **  WordPress  ****  plugin  **dan mereka digunakan untuk melakukan fungsi (**  Tindakan** ) di tempat -tempat tertentu dari tema atau plugin. WordPress memiliki lusinan tindakan yang ditentukan di seluruh fungsi intinya, setiap tindakan yang terdiri dari nama yang unik. Untuk detail lebih lanjut [baca][5].

Filter ## #
Filter WordPress adalah kait yang menerima variabel (atau serangkaian variabel) dan mengembalikannya setelah mereka dimodifikasi. Filter ini sering digunakan sehingga Anda memiliki cara untuk memanipulasi informasi default. Untuk detail lebih lanjut [baca][6].

Kode pendek ## #
Kode pendek adalah makro yang dapat digunakan untuk melakukan interaksi dinamis dengan konten. yaitu membuat galeri dari gambar yang dilampirkan ke pos atau merender video. Akibatnya, mereka adalah cara yang berharga untuk menjaga konten tetap bersih dan semantik sambil memungkinkan pengguna akhir beberapa kemampuan untuk secara terprogram mengubah presentasi konten mereka. Untuk detail lebih lanjut [baca][7].

Widget ## #
Widget penting karena memberi Anda cara lain untuk melaksanakan kode plugin Anda sambil menyediakan antarmuka yang mudah digunakan. Karena sebagian besar tema akan mendukung satu atau lebih sidebar; Menambahkan widget Anda sendiri akan memberi Anda akses cepat untuk menampilkan informasi Anda di dalam tema.

## **Cara Membuat Plugin WP?** {#Create}
Di bagian tutorial plugin WordPress ini, yang perlu Anda lakukan adalah membuat folder dan kemudian membuat satu file dengan satu baris konten. Arahkan ke folder **wp-content/plugin **, dan buat folder baru bernama  **mytestplugin ** . Di dalam folder baru ini, buat file bernama  **mytestplugin.php**  . Buka file dalam editor teks, dan tempel informasi berikut di dalamnya:
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
Sekarang, Anda dapat masuk ke bagian belakang untuk mengaktifkan plugin Anda. Itu saja, meskipun plugin ini tidak melakukan apa -apa. Tapi, ini adalah plugin yang aktif dan berfungsi. Praktik terbaik saat mengembangkan plugin adalah memisahkan kode Anda dengan rapi menjadi file dan folder yang sesuai.
Untuk mendemonstrasikan, mari kita tambahkan fungsionalitas ke plugin uji kami yang melacak popularitas artikel kami dengan menyimpan berapa kali setiap posting telah dilihat.

## # Menyimpan tampilan halaman
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
Sejauh ini, sangat bagus dalam tutorial plugin WordPress ini. Tetapi fungsi ini tidak pernah dipanggil, jadi itu tidak akan benar -benar digunakan. Di sinilah kait masuk. Anda bisa masuk ke file tema Anda dan memanggil fungsi secara manual dari sana. Tetapi kemudian Anda akan kehilangan fungsi itu jika Anda pernah mengubah tema, sehingga mengalahkan seluruh tujuan. Sebuah kait, bernama **wp_head **, yang berjalan tepat sebelum tag hadir di sebagian besar tema, jadi kami dapat mengatur fungsi kami untuk dijalankan kapan pun  **wp_head**   berjalan, seperti itu:
```
add_action("wp_head", "add_page_views");
```

## # Menampilkan tampilan halaman
Sekarang kami akan membuat fungsi lain yang mengembalikan tampilan halaman yang sudah kami simpan dalam fungsi di atas. Mari kita lihat kode:
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
Sejauh ini, kami baru saja mengambil jumlah tampilan. Sekarang, mari kita tunjukkan. Anda mungkin berpikir itu pasti rumit. Tapi, sangat sederhana seperti ini:
```
echo get_page_views() . “view(s)”
```

## kesimpulan   {#conclusion}
Ini adalah akhir dari tutorial plugin WordPress ini. Dengan mengikuti artikel ini dan hanya menggunakan beberapa fungsi, kami telah membuat plugin dasar untuk melacak posting kami yang paling populer. Kami dapat memperbaikinya, tetapi tujuannya adalah hanya untuk membuat Anda nyaman dengan dasar -dasarnya. Selain itu, dengan mempelajari beberapa pola pengembangan WordPress (plugin, kait, dll.), Anda juga mendapatkan keterampilan yang akan melayani Anda di lingkungan non-wordpress juga. Ada banyak posting blog lain yang terkait dengan platform blogging open source dan Open Source CMS. yang dapat Anda temukan di bagian Jelajahi di bawah ini. Posting blog ini benar -benar dapat membantu Anda jika Anda ingin menggunakan platform blogging open source untuk bisnis Anda.
Akhirnya, [containerize.com][8] menulis artikel tentang produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [Blogging][9] dan [Business Intelligence Software][10] untuk berita dan pembaruan reguler

## Mengeksplorasi
  * [Cara Menginstal Matomo untuk WordPress | Tutorial WordPress][11]
  * [Tingkatkan petunjuk Anda dengan integrasi wordpress civicrm gratis][12]
  * [Cara Menginstal Plugin di WordPress | Forum Vanilla][13]
  * [Joomla vs Drupal | Perbandingan CMS pada tahun 2021][14]
  * [Hal -hal yang harus ditinjau sebelum memilih perangkat lunak sumber terbuka pada tahun 2021][15]

  
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
