---
title: "Cara mengkonfigurasi aplikasi multi-penyewa di PhPlist" 
seoTitle: "Cara mengkonfigurasi aplikasi multi-penyewa di PhPlist" 
description: "PhPlist adalah perangkat lunak buletin sumber terbuka dan terbuka. Konfigurasikan aplikasi multi-penyewa dan jalankan beberapa contoh aplikasi di lingkungan bersama." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Tutorial untuk mengembangkan aplikasi multi-penyewa di Phplist. Fitur multi-tenant menggunakan instalasi tunggal untuk beberapa host untuk mengurangi biaya hosting." 
url: /id/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## Tutorial untuk mengembangkan aplikasi multi-penyewa di Phplist. Fitur multi-tenant menggunakan instalasi tunggal untuk beberapa host untuk mengurangi biaya hosting.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Phplist Aplikasi Multi-Tenant">}}

Dalam artikel ini, kami akan membahas **Apa itu multi-tenancy  **dan bagaimana kami dapat mengonfigurasi **  aplikasi multi-penyewa**  di PhPlist.

## Apa itu Phplist?
Saat memutuskan strategi pemasaran, pemasaran email adalah bagian penting dari setiap perusahaan digital online. Phplist memungkinkan bisnis untuk menjangkau khalayak yang besar. PhPlist banyak digunakan **Perangkat Lunak Newsletter Open Source**  Untuk mengelola daftar dan mengirim buletin. Ini membantu perusahaan untuk membuat, menjadwalkan, mengirim, dan menganalisis kampanye buletin. Phplist mendukung fitur seperti analitik, segmentasi, pemrosesan bouncing, plugin, API, dan banyak lagi.

## Apa itu multi-tenancy?
Multi-tenancy adalah arsitektur di mana banyak pelanggan/situs diwakili oleh satu contoh aplikasi perangkat lunak. Dalam multi-tenancy, situs ini dianggap sebagai penyewa. Setiap penyewa memiliki fitur spesifik seperti konfigurasi, tema, SMTP.
Aspek utama dari komputasi awan adalah multi-tenancy. **Arsitektur Multi-Tenant**  membantu bisnis untuk mencapai ROI yang lebih baik dengan mengurangi biaya pemeliharaan dan pembaruan penyewa yang cepat. Juga, aplikasi yang dirancang pada arsitektur multi-penyewa dapat dengan mudah diukur.
Kami dapat menerapkan multi-tenancy dengan menggunakan pendekatan berikut.
  * Database bersama untuk semua penyewa.
  * Database terpisah untuk setiap penyewa.
Kami akan menggunakan database terpisah untuk setiap pendekatan penyewa untuk mengimplementasikan multi-tenancy di Phplist.
  * [Menangani aliran permintaan][1]
  * [Pengaturan Basis Data untuk Penyewa][2]
  * [Konfigurasikan nginx untuk penyewa][3]

## menangani aliran permintaan   {#Request}
  * Ambil cadangan file config.php Anda dan Anda dapat menemukannya di bawah direktori config.
  * Buat file config.php baru dan tambahkan kode berikut di dalamnya untuk menangani situs/penyewa.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Ganti example.com dengan nama domain Anda. Anda juga perlu membuat file konfigurasi untuk setiap penyewa. Salin file cadangan config.php dan simpan dengan nama baru seperti config.example.com.php.

## database pengaturan untuk penyewa   {#database}
  * Ambil cadangan database PhPlist yang ada. Gunakan untuk membuat database untuk penyewa baru.
  * Buka file config.example.com.php. Ubah kredensial basis data dan pengaturan lainnya sesuai lingkungan Anda.

## Konfigurasikan Nginx untuk penyewa   {#nginx}
  *Pergi ke direktori nginx **cd/etc/nginx/situs-tersedia** .
  * Salin file config.php default dan simpan dengan nama situs Anda seperti example.com.
  *Buka Contoh.com Konfigurasi dengan **sudo nano example.com** .
  * Ubah jalur root, server_name, dan pengaturan lainnya.
  *Uji konfigurasi dengan **sudo nginx -t** 
  *Akhirnya, buat symlink dengan mengeksekusi  **sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/situs-diable/** 
  *Mulai ulang server web nginx dengan menjalankan **sudo systemctl restart nginx** , sehingga dapat memuat file konfigurasi yang baru dibuat.

## Kesimpulan
Perangkat lunak multi-tenancy memiliki beberapa keunggulan dibandingkan dengan aplikasi tenancy tunggal seperti mengurangi biaya perawatan, penggunaan sumber daya yang efektif dan mudah untuk menginstal pembaruan. Jika Anda akan membangun perangkat lunak SaaS (perangkat lunak sebagai layanan), Anda dapat mengikuti arsitektur multi-tenancy dan menikmati kekuatan aslinya.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [PhPlist - Open Source Newsletter dan Perangkat Lunak Pemasaran Email][4]
  * [Cara membuat dan mengirim buletin menggunakan PhPlist][5]
  * [Cara Mengatur dan Memproses Bouncing di PhPlist][6]
  * [Panduan Pemula untuk Mengembangkan Plugin PhPlist][7]
  * [Pengaturan Advanced Bounce Management dan Bounce Rules in Phplist][8]

  
[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
