---
title: "Panduan Pemula untuk Membuat Modul Prestashop" 
seoTitle: "Panduan Pemula untuk Membuat Modul Prestashop" 
description: "Prestashop adalah perangkat lunak e -commerce open source yang efisien dan hemat biaya untuk mengatur toko online. Prestashop Addons membantu pemilik toko untuk memperluas fungsionalitas." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Modul Prestashop adalah program kecil yang memungkinkan Anda meningkatkan fungsionalitas toko Anda. Kami akan belajar cara membangun modul dasar dalam tutorial ini." 
url: /id/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Modul Prestashop adalah program kecil yang memungkinkan Anda untuk meningkatkan fungsionalitas toko Anda. Kami akan belajar cara membangun modul dasar dalam tutorial ini.

{{< figure align=center src="images/prestashop-module.png" alt="Modul Prestashop">}}

**Prestashop** adalah perangkat lunak eCommerce yang 100% gratis dan open source. Ini memungkinkan pemilik toko untuk dengan mudah mengatur keberadaan online mereka dan meningkatkan bisnis dalam skala luas. Prestashop hadir dengan fitur default dan Anda dapat membutuhkan lebih banyak fungsi untuk kebutuhan bisnis Anda sesekali. Marketplace for Prestashop adalah tempat yang fantastis untuk menemukan fitur tambahan yang dapat digunakan untuk memperluas fungsionalitas toko. Selain itu, Anda dapat menemukan modul gratis dan berbayar di Marketplace. Namun, Anda dapat membuat modul khusus dari awal juga.
Kami akan membahas topik di bawah ini secara rinci untuk **Buat Modul Prestashop** .
  * [Persyaratan][1]
  * [Dasar -dasar Pengembangan Modul][2]
  * [Buat modul prestashop kami][3]
  * [Kesimpulan][4]

## Persyaratan {#Req}

  * Pasang Prestashop 1.6 atau lebih besar.
  * Akrab dengan prestashop.
  * Pemahaman tentang PHP.

## Dasar -dasar Pengembangan Modul {#Basics}

Sebelum Anda mulai mengkode, sangat penting untuk mengetahui tentang konsep inti untuk pengembangan modul prestashop****. Ini akan memungkinkan Anda untuk dengan cepat membangun dan mengelola modul Anda.
**Konfigurasi** - Konfigurasi memungkinkan Anda menyimpan data di database toko tanpa memerlukan tabel spesifik modul. Tabel konfigurasi berisi daftar properti nilai kunci yang dapat diakses dari mana saja.
**Hooks** - Hooks adalah cara untuk menghubungkan acara prestashop tertentu dengan kode Anda. Anda dapat menggunakan kait untuk menempatkan kode Anda di halaman dan untuk tindakan tertentu seperti mengirim email pada acara tertentu.
**Widget** - Pengembang modul menggunakan widget untuk menampilkan konten jika diperlukan.
**Doktrin** - Doktrin adalah ORM memungkinkan Anda untuk mengelola data database Anda melalui objek. Ini memberikan lapisan abstrak yang memungkinkan Anda melakukan tindakan memasukkan/memperbarui dengan panggilan sederhana.

## Buat modul prestashop kami {#Create}

* Buat direktori modul bernama **myfirstmodule**dalam**modul** direktori instalasi prestashop Anda. Tempatkan semua file di direktori modul Anda.
* Buat file utama dengan nama **myfirstmodule.php** dan salin kode berikut di dalamnya.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
* Buat **Instal ()**dan **uninstall ()** Metode. Tambahkan metode berikut di**file myfirstmodule.php** .
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * Hubungi metode khusus untuk mengaktifkan kait terdaftar kami. Kami akan menggunakan metode ini untuk menampilkan "Hello World!" SMS ke bilah samping. Tambahkan kode berikut di **file myfirstmodule.php** .
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
* Akhirnya, buka bagian Administrator, Unggah dan **Instal Modul Prestashop** .

## Kesimpulan {#Kesimpulan}

Kami telah membahas konsep inti untuk membangun modul **prestashop** dalam tutorial ini. Lebih lanjut, kami telah mengembangkan modul dasar yang dapat digunakan sebagai titik awal untuk lebih banyak modul canggih. [containerize.com][5] secara konsisten bekerja pada posting blog tutorial baru. Untuk pembaruan terbaru, harap tetap berhubungan dengan kategori [Perangkat Lunak Keranjang Belanja][6].

## Mengeksplorasi
Anda dapat menemukan tautan berikut yang berguna selain tutorial pembuatan Modul Prestashop****.
  * [Prestashop - Perangkat lunak keranjang belanja gratis][7]
  * [Top 5 Perangkat Lunak Keranjang Belanja Open Source Pada tahun 2020][8]



[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
