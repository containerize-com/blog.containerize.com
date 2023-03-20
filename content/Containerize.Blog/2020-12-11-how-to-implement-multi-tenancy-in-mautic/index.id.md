---
title: "Cara mengimplementasikan multi-tenancy di MAUTIC" 
seoTitle: "Cara mengimplementasikan multi-tenancy di MAUTIC" 
description: "Mautic adalah solusi otomatisasi pemasaran open source. Menerapkan multi-tenancy di MAUTIC mengurangi biaya, meningkatkan efisiensi dan keamanan." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Hemat biaya dan memaksimalkan penggunaan sumber daya dengan menerapkan multi-tenancy di MAUTIC. Multi-tenancy membantu dalam kustomisasi kode, pembaruan aplikasi, peningkatan produktivitas dan pemeliharaan yang mudah." 
url: /id/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Menghemat biaya dan memaksimalkan penggunaan sumber daya dengan menerapkan multi-tenancy di MAUTIC. Multi-tenancy membantu dalam kustomisasi kode, pembaruan aplikasi, peningkatan produktivitas dan pemeliharaan yang mudah.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Cara mengimplementasikan multi-tenancy di MAUTIC">}}

MAUTIC adalah solusi otomatisasi pemasaran open source gratis dan open yang memberi Anda kendali penuh atas email pemasaran, halaman arahan, alur kerja, dan langkah -langkah untuk kegiatan pemasaran Anda. Kami akan membahas bagian berikut dalam tutorial ini:
  * [Apa itu multi-tenancy][1]
  * [Apa itu Mautik][2]
  * [Menerapkan multi-tenancy in mautic][3]
  * [Kesimpulan][4]

## Apa itu multi-tenancy {#multi-tenancy}
Dalam arsitektur perangkat lunak multi-tenant, satu contoh aplikasi perangkat lunak melayani banyak penyewa. Setiap data penyewa diisolasi dari penyewa lain yang berbagi contoh aplikasi yang sama. Penyewa ini secara logis terisolasi, tetapi terintegrasi secara fisik. Ini memastikan keamanan dan privasi data untuk semua penyewa. Membuat beberapa penyewa dari satu contoh aplikasi membutuhkan lebih sedikit memori. Penyewa berbagi sumber daya dan mengurangi biaya untuk pemeliharaan perangkat lunak, infrastruktur, dan operasi pusat data. Biaya cenderung lebih rendah dari pada infrastruktur penyewa tunggal.

## Apa itu mautik {#mautic}
[MAUTIC][5] adalah perangkat lunak pemasaran open source gratis dan terbuka. Otomatis tugas pemasaran berulang seperti kampanye pemasaran, generasi pemimpin, segmentasi kontak, dll. Menggunakan MAUTIC. Ini memiliki fitur -fitur yang mengejutkan termasuk generasi pemimpin, pembangunan kampanye, segmentasi kontak, pembangun email, pengujian A/B, pembangun halaman, pemeliharaan timah dan banyak lagi. MAUTIC juga mendukung integrasi dengan semua platform sosial populer mis. Facebook, Twitter, LinkedIn. Semua fitur luar biasa ini membantu Anda meningkatkan pengalaman pelanggan secara keseluruhan dan meningkatkan otomatisasi pemasaran untuk bisnis Anda.

## Implement Multi-tenancy di Mautic {#Implement}
  * Buat database kosong baru yang disebut sebagai "Main_DB".
  * Kemudian buat tabel bernama "Penyewa" yang akan menyimpan detail tentang semua penyewa.
  * Ini akan memiliki 3 bidang termasuk situs \ _name, url dan db \ _name seperti yang ditunjukkan pada gambar

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Cara mengimplementasikan multi-tenancy di MAUTIC">}}

  * Setelah itu file Open Mautic/App/Paths.php dan tambahkan kode ini:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * Ini akan memilih file konfigurasi yang sesuai berdasarkan jalur URL.
  * Kemudian salin database instalasi MAUTIC saat ini dan gunakan untuk penyewa baru.
  * Setelah itu, buat salinan mautic/app/config/local.php dan ganti namanya menjadi [situs_name] .php.
  * Akhirnya perbarui nama basis data, host, kata sandi, dan pengguna sesuai dengan database baru.

## kesimpulan {#conclusion}
Mautic adalah solusi otomatisasi pemasaran yang bebas, kaya, dan berorientasi kualitas. Ini memungkinkan Anda untuk membuat kampanye pemasaran, segmen, formulir, laporan, dan banyak lagi. Menerapkan multi-tenancy di MAUTIC mengurangi biaya, meningkatkan efisiensi, skalabilitas, dan keamanan. Mudah membuat ratusan penyewa hanya dari satu instalasi.

## Mengeksplorasi
Untuk mempelajari lebih lanjut tentang Mautic dan Facebook, silakan kunjungi:
  * [Mautic | Platform Teknologi Pemasaran Konten Sumber Terbuka][5]
  * [Cara Menyiapkan Kampanye Mautik Menggunakan Pembuat Kampanye][6]
  * [Integrasi Mautik Drupal untuk Mengotomatisasi Pemeliharaan Timbal][7]
  * [Otomasi Pemasaran dengan Integrasi Mautik dan WooCommerce][8]
  * [Mengintegrasikan Mautic & Joomla untuk Otomasi Pemasaran Digital][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
