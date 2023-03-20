---
title: "Buat proyek PHP pertama Anda di LocalHost menggunakan XAMPP '" 
seoTitle: "Buat proyek PHP pertama Anda di LocalHost menggunakan XAMPP" 
description: "Mengatur lingkungan pengembangan web menggunakan server web gratis dan open source XAMPP. Buat dan uji proyek PHP Anda di LocalHost dengan mengikuti beberapa langkah mudah." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Mengatur lingkungan pengembangan web menggunakan server XAMPP open source dan terbuka. Pelajari, buat, dan uji proyek PHP Anda di LocalHost dengan mengikuti beberapa langkah mudah." 
url: /id/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Pengaturan Lingkungan Pengembangan Web Menggunakan Server XAMPP Open Source dan Open. Pelajari, buat, dan uji proyek PHP Anda di LocalHost dengan mengikuti beberapa langkah mudah.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Buat Proyek PHP pertama Anda dengan server web Open Source XAMPP">}}

XAMPP adalah server web open source yang menyediakan lingkungan lokal untuk membuat, menjalankan, dan menguji proyek PHP sebelum menggunakannya di server langsung. Ini menyediakan server lokal bagi pengembang untuk menguji dan membangun aplikasi web. Kami akan membahas bagian berikut dalam posting blog ini:
  * [Persyaratan][2]
  * [Apa itu xampp][3]
  * [Buat skrip PHP][4]
  * [Jalankan dan uji skrip PHP][5]
  * [Kesimpulan][6]

## Persyaratan {#Requirements}
  * Instalasi xampp
  * Aplikasi Editor Kode
  * Pengetahuan PHP dasar
  * Pengetahuan HTML dan JavaScript dasar

## Apa itu XAMPP? {#xampp}
XAMPP adalah tumpukan solusi server web open source. Ini berisi apache, mysql, mariadb, php, dan perl. Sangat mudah dipasang dan digunakan. Itu sebabnya lingkungan pengembangan PHP paling populer. XAMPP Server menyediakan lingkungan yang lengkap untuk pengembangan aplikasi Web PHP. Jika Anda belum memiliki instalasi kerja XAMPP, maka ikuti panduan ini untuk menginstal XAMPP:
[Pengaturan XAMPP dan PHPMyAdmin sebagai localhost di windows][7]

## Buat skrip php {#php}
  * Dengan asumsi bahwa Anda telah menginstal XAMPP dengan mengikuti tutorial di atas, sekarang mari kita buat skrip PHP sederhana dan mengujinya di XAMPP.
  * Pertama buka editor Anda. Jika Anda tidak memiliki editor pemrograman, cukup buka Notepad.
  * Masukkan kode berikut
```
<?php
echo "This is my first PHP project";
?>
```
  * Klik "File" di sudut kanan atas.
  * Tekan tombol "Simpan As".
  * Masukkan nama dengan ekstensi ".php".
  *Untuk "Simpan sebagai Jenis", pilih opsi “Semua File (\*. \*)”.
  * Dan akhirnya tekan tombol "Simpan".

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Buat Proyek PHP pertama Anda dengan server web Open Source XAMPP">}}


## Jalankan dan uji skrip php {#test}
  * Salin skrip php ini ke folder htdocs di dalam instalasi XAMPP Anda. Sebagian besar folder htdocs berada di sini: c: \ xampp \ htdocs
  * Buka browser Anda.
  * Pergi ke localhost/\ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Buat Proyek PHP pertama Anda dengan server web Open Source XAMPP">}}

Selamat! Anda baru saja membuat proyek PHP pertama Anda.

## kesimpulan {#conclusion}
Membuat proyek web pertama selalu sangat menarik bagi pemula. Rasanya luar biasa saat Anda merancang skrip dinamis pertama Anda, jalankan dan lihat bekerja di browser Anda. Saya harap panduan sederhana ini telah membantu Anda membuat dan menjalankan proyek PHP pertama Anda dengan XAMPP Open Source Web Server.

## Mengeksplorasi
Untuk mempelajari lebih lanjut tentang XAMPP dan PHPMyAdmin, Panduan Checkout berikut:
[Pengaturan XAMPP dan PHPMyAdmin sebagai localhost di windows][7]
[Tumpukan solusi server web gratis untuk pengembang php & perl][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
