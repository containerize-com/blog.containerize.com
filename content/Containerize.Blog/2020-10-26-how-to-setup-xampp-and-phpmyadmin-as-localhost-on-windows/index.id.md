---
title: "Mengatur Xampp dan PhpMyadmin sebagai LocalHost di Windows" 
seoTitle: "Mengatur Xampp dan PhpMyadmin sebagai LocalHost di Windows" 
description: "Siapkan XAMPP dan PHPMyAdmin sebagai localhost di windows. Buat lingkungan pengujian lokal Anda yang gratis dan open-source untuk menguji dan membangun aplikasi web." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Siapkan Lingkungan Pengembangan dengan SOURE WEB SOULE SOULE SOURD SOURDE DAN OPEN SUMBER SOULE (XAMPP) dan perangkat lunak manajemen database (phpMyAdmin)" 
url: /id/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Mengatur lingkungan pengembangan dengan tumpukan solusi server web gratis dan open source (XAMPP) dan perangkat lunak manajemen database (PHPMyAdmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="Xampp dan phpMyadmin sebagai localhost">}}

XAMPP dan PHPMyAdmin sebagai LocalHost menyediakan server lokal bagi pengembang untuk menguji dan membangun aplikasi web. XAMPP adalah server lokal yang diinstal pada komputer/laptop pribadi. Ini menyediakan lingkungan lokal untuk membuat, menjalankan, dan menguji aplikasi PHP sebelum menggunakannya di server langsung.
Kami akan membahas bagian berikut dalam posting blog ini:
  * [Deskripsi][1]
  * [Instalasi xampp][2]
  * [dasbor phpMyadmin][3]
  * [Pikiran Terakhir][4]

## Keterangan: {#description}

XAMPP adalah tumpukan solusi server web gratis dan open source. Ini berisi apache, mysql, mariadb, php, dan perl. XAMPP tersedia untuk sistem operasi Windows. Sangat mudah dipasang dan digunakan. Itu sebabnya lingkungan pengembangan PHP paling populer. XAMPP dan PHPMyAdmin sebagai LocalHost menyediakan lingkungan yang lengkap untuk pengembangan dan pengujian aplikasi Web.
Enfabet di XAMPP adalah singkatan dari:
* **X** -Cross-Platform (mendukung beberapa sistem operasi termasuk Linux, Windows dan Mac OS)
* **A** - Server Apache HTTP
* **m** - mariadb (database)
* **P** - PHP
* **P** - Perl

## Instalasi XAMPP {#xampp}

  * Unduh xampp dari [di sini][5].

{{< figure align=center src="images/xampp1.png" alt="Xampp sebagai localhost">}}

  * Instal file yang dapat dieksekusi.
  * Kemudian klik "Next".
  * Pilih komponen yang ingin Anda instal.

{{< figure align=center src="images/xampp2.png" alt="Xampp sebagai Localhost Langkah 2">}}

  * Untuk sebagian besar aplikasi web, Anda hanya perlu _apache_, _mysql_, _php_, dan _phpMyadmin_.
  * Pilih direktori instalasi tempat Anda ingin menginstal XAMPP.
  * Anda akan ditampilkan peringatan Windows Security. Anda harus memeriksa opsi berikut: "_Private Networks, seperti rumah atau jaringan kerja saya" _.
  * Akhirnya klik "Selesai" untuk menyelesaikan instalasi.

{{< figure align=center src="images/xampp4.png" alt="Xampp sebagai Localhost Langkah 3">}}

  * Setelah instalasi yang berhasil, buka panel kontrol XAMPP.
  * Mulai layanan "Apache" dan "MySQL".

{{< figure align=center src="images/xampp5.png" alt="Xampp sebagai Localhost Langkah 4">}}


## Dasbor PhpMyadmin: {#phpmyadmin}

Untuk mengakses Dasbor PHPMyAdmin, klik tombol "Admin" di sebelah Layanan MySQL. Anda juga dapat mengakses phpMyadmin dengan mengunjungi http: // localhost/phpMyadmin dari browser Anda. Di sini Anda dapat membuat database. Ikuti langkah -langkah ini untuk membuat database baru.
  * Dari Dasbor, klik pada tab "Database".

{{< figure align=center src="images/db1.png" alt="PhpMyadmin di LocalHost Langkah 1">}}

  * Masukkan nama basis data dan klik tombol “Buat”. Ini hanya akan membuat database kosong baru.

{{< figure align=center src="images/db2.png" alt="PhpMyadmin di Localhost Langkah 2">}}

  * Selanjutnya Anda dapat membuat tabel dengan memilih database yang baru dibuat.
  * Masukkan nama tabel di bawah "Buat tabel".

{{< figure align=center src="images/db3-1024x234.png" alt="PhpMyadmin di LocalHost Langkah 3">}}

  * Pilih jumlah kolom.
  * Kemudian klik tombol "Go".
  * Setelah itu Anda perlu mengisi formulir di halaman berikutnya untuk menyelesaikan tabel.

{{< figure align=center src="images/db4-1024x564.png" alt="PhpMyadmin di LocalHost Langkah 4">}}


## Pikiran terakhir: {#final}

Instalasi XAMPP sederhana dan lurus ke depan. Dibutuhkan tidak lebih dari 15 menit ke server setup XAMPP. Setelah diinstal, pengembang dapat membangun dan menguji aplikasi web berbasis PHP mereka bahkan tanpa koneksi internet. Alih-alih menguji proyek secara langsung di server web langsung, sederhana dan hemat waktu untuk mengujinya secara lokal. Ini adalah platform yang hebat bagi pemula untuk belajar, menguji, dan memoles keterampilan PHP, Perl, dan database mereka.

## Mengeksplorasi:
[Open Source Web Server Solusi Tumpukan untuk PHP & Perl Developers][6]
[Opsi tumpukan solusi server web open source terbaik][7]



[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
