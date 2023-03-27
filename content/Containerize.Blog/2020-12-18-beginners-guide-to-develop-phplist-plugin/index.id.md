---
title: "Panduan Pemula untuk Mengembangkan Plugin PhPlist" 
seoTitle: "Panduan Pemula untuk Mengembangkan Plugin PhPlist" 
description: "Biasakan dengan arsitektur plugin PhPlist dan pelajari cara membuat plugin PhPlist dasar. Pedoman ini membantu Anda untuk menyesuaikan dan meningkatkan fungsionalitas Phplist." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Plugin PhPlist memungkinkan pengembang untuk menyesuaikan produk dan meningkatkan fungsinya. Dalam posting ini, kita akan belajar cara membuat plugin dasar di Phplist." 
url: /id/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## Plugin PhPlist memungkinkan pengembang untuk menyesuaikan produk dan meningkatkan fungsinya. Dalam posting ini, kita akan belajar cara membuat plugin dasar di Phplist.

{{< figure align=center src="images/phplist-plugin.png" alt="plugin Phplist">}}

Dukungan plugin adalah bagian penting dari perangkat lunak, terutama untuk sistem sumber terbuka. Ini memungkinkan pengembang untuk membangun plugin baru untuk memperluas fitur. **Phplist** mendorong pengembangan plugin sehingga pengembang dapat menggunakannya untuk menambahkan fitur baru sesuai dengan kebutuhan bisnis mereka. Plugin PhPlist adalah koleksi kode mandiri yang berisi kode untuk PHP, HTML, CSS, dan JavaScript.
Aplikasi mendukung plugin karena banyak alasan dan beberapa di antaranya adalah:
  * Jangan memodifikasi fungsionalitas inti.
  * Mengizinkan pengembang untuk membuat fitur baru.
  * Kurangi ukuran perangkat lunak.
Kami akan membahas topik di bawah ini secara rinci dalam tutorial ini.
* [ **Prasyarat** ][2]
* [ **Dasar -dasar pengembangan plugin Phplist** ][3]
* [ **Buat plugin PhPlist kami** ][4]
* [ **Kesimpulan** ][5]

## Prasyarat {#Req}

  * Versi terbaru dari PhPlist.
  * Akrab dengan Phplist dan PHP.
  * Pemahaman tentang HTML / CSS dan JavaScript.

## Dasar -dasar pengembangan plugin Phplist {#Basics}

Metode berikut akan meningkatkan fungsionalitas plugin Phplist.
* **Halaman** - Buat halaman untuk kegiatan seperti pelaporan, statistik, untuk menampilkan informasi, dan banyak lagi.
* **Kait** - Ini memungkinkan Anda untuk memohon fungsionalitas di tempat -tempat tertentu.
Ada tiga jenis plugin khusus untuk Phplist. Satu plugin dari masing -masing jenis dapat diaktifkan saja.
* **Plugin Editor** - Mengizinkan editor implementasi untuk mengedit kampanye atau templat.
* **Plugin Otentikasi** - Ini memungkinkan penambahan mekanisme baru untuk otentikasi administrator.
* **Plugin Pengirim Email** -Memungkinkan menerapkan metode baru untuk mengirim email alih-alih fungsionalitas bawaan.

## Buat plugin PhPlist kami {#Create}

Pertama -tama, Anda perlu memperluas kelas inti PhPlistplugin. Untuk membuat plugin, Anda perlu membuat direktori bernama "HelloWorld" di bawah plugin \ _rootdir dan membuat file bernama HelloWorld.php di root direktori plugin. Anda dapat memeriksa file config.php untuk menemukan nilai variabel plugin \ _rootdir. Salin kode di bawah ini ke file HelloWorld.php.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
Anda harus mengatur $ coderoot ke direktori plugin Anda. Untuk memastikan bahwa plugin diinisialisasi dengan benar, Anda harus menghubungi konstruktor induk. Buat file Main.php dan letakkan di direktori plugin Anda. Salin kode berikut ke dalamnya.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Tempatkan file kelas HelloWorld.php dan direktori plugin Anda di plugin rootdir untuk menginstal plugin. Untuk mengaktifkan plugin, klik pada tab Config di bilah menu dan kemudian klik pada Plugin Kelola. Halaman plugin akan menunjukkan kepada Anda daftar plugin yang tersedia dan Anda dapat mengaktifkan/menonaktifkan formulir plugin Anda di sana.
Anda dapat mengakses plugin Anda dengan url berikut seperti http://example.com/admin/?page=main&pi=Helloworld. Ganti example.com dengan nama domain Anda.

## Kesimpulan {#Con}

Kami telah mempelajari dasar -dasar **plugin Phplist** pengembangan dan membuat plugin sampel. Sebagai titik awal, Anda dapat mengikuti pedoman ini dan mengeksplorasi lebih lanjut pengembangan plugin untuk meningkatkan fungsionalitas.
Akhirnya, [ **containerize.com**][6] sedang dalam proses penulisan posting blog yang konsisten pada produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [**buletin** ][7] ini untuk pembaruan terbaru.

## Mengeksplorasi
Anda dapat menemukan tautan berikut yang relevan.
* [ **Phplist** ][8]
* [ **Mailtrain** ][9]
* [ **ListMonk** ][10]
* [ **moonmail** ][11]
* [ **Mailman** ][12]
* [ **Perangkat lunak buletin Open Source Top di 2021** ][13]
* [ **Cara Mengkonfigurasi Aplikasi Multi-Tenant di PhPlist** ][14]
* [ **Cara membuat dan mengirim buletin menggunakan PhPlist** ][15]



[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
