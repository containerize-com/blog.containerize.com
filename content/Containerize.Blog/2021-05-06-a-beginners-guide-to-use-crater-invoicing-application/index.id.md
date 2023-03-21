---
title: "Panduan Pemula untuk Menggunakan Aplikasi Faktur Kawah" 
seoTitle: "Panduan Pemula untuk Menggunakan Aplikasi Faktur Kawah" 
description: "Tutorial untuk memulai dengan sistem faktur open source. Pedoman kawah ini membantu Anda terbiasa dengan konsep dan fitur inti." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Tutorial ini akan membantu Anda mempelajari tentang aplikasi faktur kawah. Ini adalah sistem faktur sumber terbuka dan terbuka untuk usaha kecil." 
url: /id/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Tutorial ini akan membantu Anda mempelajari tentang aplikasi faktur kawah. Ini adalah sistem faktur sumber terbuka dan terbuka untuk usaha kecil.

{{< figure align=center src="images/blog-crater.png" alt="Sistem Faktur Sumber Terbuka">}}

Setiap bisnis membutuhkan semacam sistem untuk pengelolaan faktur, pengeluaran, pembayaran, dan banyak lagi. Perangkat lunak faktur membantu Anda mengelolanya sehingga Anda dapat dengan mudah melakukan tugas penagihan dan tetap fokus pada hal -hal penting lainnya. Dalam posting ini, kita akan belajar cara mengatur kawah dan menggunakannya untuk menangani operasi akuntansi untuk bisnis.
  * [Pendahuluan Tentang Kawah][1]
  * [Prosedur Instalasi Kawah][2]
  * [Eksplorasi fitur][3]
  * [Kesimpulan][4]

## PENDAHULUAN TENTANG CRATER   {#TrODUCTION}
[Crater][5] adalah aplikasi penagihan sumber gratis dan terbuka. Ini benar -benar gratis, dan Anda dapat dengan mudah memperbaruinya ke versi terbaru. Ini adalah sistem akuntansi gratis untuk usaha kecil dan freelancer. Ini juga merupakan solusi faktur lengkap, memungkinkan Anda untuk melacak pengeluaran dan pembayaran, menghitung pajak, dan menghasilkan estimasi dan faktur. Selain itu, ia hadir dengan aplikasi seluler out-of-the-box untuk perangkat iPhone dan Android. Ini akan memungkinkan Anda untuk mengelolanya dari tempat mana pun. Karena Crater adalah perangkat lunak penagihan berbasis web, aplikasi Web dirancang dengan Laravel dan Vuejs, dan aplikasi seluler dibangun dengan React Native. Semua dokumentasi yang terkait dengan pengembangan dan penyebaran tersedia. Kode sumber lengkap dapat ditemukan di [GitHub][6].

## Prosedur Instalasi Kawah   {#installation}
Kami akan membahas cara memasang kawah dengan metode manual dan menggunakan Docker di bagian ini.

### Instalasi manual
  * Unduh versi terbaru dari.
  * Unggah file zip yang diunduh ke server Anda dan ekstrak.
  * Arahkan domain Anda ke direktori publik di dalam folder kawah.
  * Arahkan ke akar proyek Anda dan jalankan perintah “sudo chmod -r 775 ./” untuk menetapkan hak istimewa yang sesuai.
  * Buka situs Anda di browser dan ikuti Wizard Instalasi.

Instalasi ### Docker
  * Instal Docker di server Anda :.
  * Instal Docker Compose dengan mengikuti panduan ini :.
  * Klone Repositori Kawah dengan menggunakan perintah ini.
```
git clone https://github.com/bytefury/crater
```
  * Jalankan di bawah perintah satu per satu untuk memasang kawah.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Buka situs kawah di browser Anda dan ikuti wizard instalasi.

## Eksplorasi fitur   {#feature}
Di bagian ini, kami akan mengeksplorasi fitur inti dari aplikasi penagihan sumber terbuka ini. Setelah selesai dengan instalasi, buka situs Anda http://example.com dan masuk ke aplikasi.
  ***Dasbor**  - Setelah masuk, Anda akan dibawa ke dasbor, yang menampilkan seluruh tampilan aplikasi.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

  ***Pengaturan**  - Sekarang navigasikan ke halaman Pengaturan dan tambahkan berbagai pengaturan aplikasi web seperti pengaturan akun, informasi perusahaan, preferensi, penyesuaian, pemberitahuan, modul pembayaran, dan sebagainya.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

  ***Item**  - Tab Item dapat diakses dari menu bilah samping. Dari tab ini, Anda dapat mengelola item Anda. Anda dapat menggunakan item saat membuat perkiraan dan faktur.
  ***Perkiraan**  - Buat kutipan komprehensif yang mencakup tarif, diskon, inventaris, dan banyak lagi. Salah satu dari tiga templat builtin dapat digunakan untuk membuat perkiraan. Pajak tambahan dapat ditambahkan ke perkiraan, dan mereka juga dapat ditambahkan sebagai pajak majemuk.
  ***Faktur**  - Buat faktur profesional dan kirimkan ke klien Anda. Anda dapat menggunakan templat yang tersedia untuk menghasilkan faktur. Anda dapat menambahkan pajak tambahan ke faktur, serta pajak majemuk. Selanjutnya, Anda dapat memberikan diskon persentase atau nilai tetap untuk pelanggan Anda. Selain itu, Anda dapat menerapkan diskon untuk item individual serta jumlah faktur keseluruhan.
  ***Pembayaran**  - Modul ini membantu Anda terus melacak pembayaran yang Anda dapatkan dari klien Anda.
  ***Biaya**  - Modul pengeluaran membantu Anda melacak berapa banyak yang Anda habiskan untuk berbagai layanan.
  ***Pajak**  - Menggunakan fitur ini, Anda dapat dengan mudah mengelola pajak Anda. Anda dapat menambahkan beberapa pajak pada jumlah total faktur atau pada item individual.
  ***Laporan**  - Dapatkan informasi komprehensif tentang semua faktur Anda, apakah itu untuk satu atau beberapa pelanggan. Dukungan kawah dilengkapi dengan empat jenis laporan seperti laporan penjualan, laporan laba rugi, laporan pengeluaran, dan laporan pajak.

## kesimpulan   {#conclusion}
Kami belajar tentang kawah dan cara mengaturnya secara manual dan dengan Docker. Kami juga telah melihat beberapa fitur yang harus disediakan oleh setiap perangkat lunak penagihan akuntansi. Mudah -mudahan, panduan ini dapat membantu Anda dengan cepat menerapkan sistem faktur open source untuk bisnis Anda.
Akhirnya, [containerize.com][7] terus menulis posting blog tentang produk dan topik open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [Faktur][8] untuk pembaruan rutin.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Kawah - Sistem Akuntansi Gratis untuk Bisnis Kecil][5]
  * [Top 5 Perangkat Lunak Akuntansi Sumber Terbuka di Tahun 2021][9]

  
[1]: #Introduction
[2]: #Installation
[3]: #Feature
[4]: #Conclusion
[5]: https://products.containerize.com/invoicing/crater/
[6]: https://github.com/bytefury/crater
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/invoicing/
[9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
