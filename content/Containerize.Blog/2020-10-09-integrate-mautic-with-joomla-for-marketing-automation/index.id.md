---
title: "Integrasi Mautic & Joomla untuk Otomasi Pemasaran Digital '" 
seoTitle: "Integrasi Mautic & Joomla untuk Otomasi Pemasaran Digital" 
description: "Integrasi Mautic dan Joomla dapat membantu bisnis Anda dengan otomatisasi pemasaran digital. Ini membantu memasarkan produk melalui kampanye mautik." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Integrasi Mautic dan Joomla dapat membantu bisnis Anda dengan otomatisasi pemasaran digital. Ini membantu memasarkan produk melalui kampanye mautik online." 
url: /id/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## Integrasi Mautic dan Joomla dapat membantu bisnis Anda dengan otomatisasi pemasaran digital. Ini membantu memasarkan produk melalui kampanye mautik online.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Integrasi Mautik dan Joomla">}}


## Bagaimana integrasi ini dapat membantu bisnis Anda:
Integrasi Mautic dan Joomla akan memungkinkan Anda memasarkan produk/layanan Anda dengan cara yang sangat mudah tetapi efisien. Mautic Solusi pemasaran open-source gratis memberi Anda kendali besar atas kampanye pemasaran dan sangat mudah untuk melanjutkan kampanye tetesan sesuai dengan situasinya. Misalnya: ini memberi Anda informasi bahwa jika pelanggan telah membaca email atau mengunjungi halaman produk Anda. Dengan menggunakan informasi itu, Anda dapat mengatur kampanye untuk memutuskan apakah akan terus mengirimkan email berikutnya untuk pelanggan itu atau tidak. Integrasi ini akan membantu dalam otomatisasi pemasaran digital. Posting blog ini akan memandu Anda dengan bagian berikut:
  * [Ikhtisar][1]
  * [Instalasi Plugin Joomla][2]
  * [Konfigurasi Mautik][3]
  * [Kesimpulan][4]

## Ikhtisar: {#Overview}
Mautic adalah sistem otomasi pemasaran sumber terbuka. Ini adalah perangkat lunak pemasaran gratis. Anda dapat menggunakannya untuk membuat kampanye tanpa batas untuk mengirimkan email pemasaran ke pelanggan yang ditargetkan.
Joomla juga merupakan sistem manajemen konten open-source gratis untuk mengembangkan situs web. Sangat mudah untuk mengatur situs web bisnis Anda di Joomla. Ini memiliki ribuan ekstensi yang dapat digunakan sesuai dengan kebutuhan Anda.

Instalasi plugin ## Joomla: {#plugin}
  * Unduh [plugin][5].
  * Kemudian buka ekstensi -> kelola -> instal.
  * Masukkan URL Mautik.
  * Ini akan memasukkan 1 px gif gambar yang dimuat dari instance mautic Anda.
  * Formulir Embed dalam Konten Joomla Menggunakan Cuplikan Kode berikut: {Mautic Type = "Form" ID}
  * Kemudian Anda dapat membuat formulir di aplikasi MAUTIC Anda dan mendapatkan ID dari URL.
  * Konten dinamis juga dapat ditambahkan menggunakan cuplikan kode berikut: {mautic type = "content" slot = "slot_name"} konten default di sini. {/Mautic}
  * SLOT_NAME adalah pengidentifikasi slot yang Anda tentukan saat menambahkan keputusan "permintaan konten dinamis" ke kampanye Anda.
Setelah instalasi, Anda perlu membuat dan menanamkan formulir di situs Joomla Anda. Formulir ini akan mengirimkan informasi kontak ke MAUTIC. Setelah selesai mengkonfigurasi plugin di Joomla, langkah selanjutnya adalah mengonfigurasinya di Mautic.

## konfigurasi mautik: {#mautic}
  * Pergi ke situs mautik Anda, pindah ke pengaturan.
  * Klik pada konfigurasi.
  * Dari pengaturan API, aktifkan API.
  * Untuk menghubungkan Mautic dengan Joomla, Anda harus memiliki sertifikat SSL di situs Anda.
  * Selanjutnya Anda harus pergi ke kredensial API.
  *Jika situs web Anda tidak memiliki SSL (jadi Anda pergi ke ** http **: //yourjoomlasite.com), pilih OAuth1. Jika Anda memiliki SSL di situs Anda (jadi Anda pergi ke ** https **: //yourjoomlasite.com), pilih OAuth2.
  * Klik baru, berikan nama (bisa apa saja yang Anda inginkan) dan URL lengkap Joomla Anda! Situs ([https://yourjoomlasite.com][6])
  * Klik Simpan dan Tutup.
  * Di sini Anda bisa mendapatkan kunci publik dan pribadi.
  * Pergi ke situs Joomla Anda dan temukan plugin mautik yang Anda instal sebelumnya.
  * Masukkan kunci publik dan rahasia yang Anda buat dari situs mautik Anda.
  * Pilih OAuth1 atau OAuth2 (sama seperti yang Anda pilih di MAUTIC) dan atur Kirim pengguna terdaftar ke Ya.
  * Simpan dan publikasikan plugin.
  * Setelah itu Anda akan dapat mengesahkan situs Joomla Anda.
  * Joomla akan mengarahkan kembali ke contoh mautik ke otorisasi.
  * Klik "otorisasi" dan hanya itu.
  * Anda akan mulai mendapatkan kontak ke situs mautik Anda.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Integrasi Mautik dan Joomla">}}


## kesimpulan: {#conclusion}
Dalam artikel ini kita telah membahas bagaimana Mautic dan Joomla bersama -sama dapat membantu dalam otomatisasi pemasaran digital. Solusi pemasaran gratis open-source ini akan memungkinkan Anda untuk mengelompokkan semua kontak yang berasal dari situs Joomla dan membuat kampanye pemasaran menggunakannya. Mautic memungkinkan Anda untuk membuat segmen, sehingga Anda dapat menjalankan kampanye yang berbeda di segmen yang berbeda sesuai dengan kebutuhan Anda. Silakan periksa [Joomla][7] dan [MAUTIC][8] Blog untuk Tinjauan Rinci.

## Mengeksplorasi:
Anda dapat menemukan tautan berikut yang relevan:
  * [Joomla][7]
  * [Mautic][8]
  * [Cara Mengatur Mautik - Integrasi Facebook][9]
  * [Integrasi Mautik Drupal untuk Mengotomatisasi Pemeliharaan Timbal][10]
  * [Otomasi Pemasaran Menggunakan Mautik dan WordPress WooCommerce][11]
  * [Cara Mengatur Kampanye Pemasaran di Mautik][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
