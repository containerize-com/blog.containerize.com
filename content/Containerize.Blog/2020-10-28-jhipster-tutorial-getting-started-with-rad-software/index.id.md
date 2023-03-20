---
title: "Tutorial Jhipster | Memulai dengan perangkat lunak RAD" 
seoTitle: "Tutorial Jhipster | Memulai dengan perangkat lunak RAD" 
description: "Tutorial Jhipster langkah demi langkah untuk pemula untuk memulai. Ikuti artikel ini untuk mengatur aplikasi pertama dengan perangkat lunak Open Source Jhipster RAD." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Mari selami generator kode sumber. Ini menawarkan fitur out-of-the-box untuk menghasilkan aplikasi responsif berbasis web dengan API REST yang terdokumentasi dengan baik." 
url: /id/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## Mari selami generator kode sumber. Ini menawarkan fitur out-of-the-box untuk menghasilkan aplikasi responsif berbasis web dengan API REST yang terdokumentasi dengan baik.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="Tutorial Jhipster">}}


## Ringkasan:
Kami baru -baru ini menerbitkan [posting blog][1] tentang pentingnya [RAD Software][2] di zaman saat ini. Teknologi berkembang dengan kecepatan yang sangat tinggi. Persyaratan dan kebutuhan bisnis berubah dari hari ke hari. Ada perlombaan untuk mengembangkan solusi dalam rentang waktu yang lebih singkat. Di sisi lain, setiap bisnis ingin menangkap pasar dengan meluncurkan produk sesegera mungkin. Oleh karena itu, komunitas open source telah mengembangkan banyak perangkat lunak yang didasarkan pada pengembangan perangkat lunak gesit ** **. Perangkat lunak pengembangan aplikasi cepat gratis ini memfasilitasi pengguna dengan kemampuan pengembangan prototipe cepat. Ini memungkinkan Anda membangun dan meluncurkan rilis awal produk Anda dan karenanya, Anda dapat mengembangkan rilis lebih lanjut dengan input umpan balik pengguna. Selain itu, perangkat lunak ini dirancang untuk menyerap perubahan apa pun pada setiap tahap proyek.
Sementara itu, tim pengembangan perangkat lunak mempercepat proses pengembangan mereka dan memastikan pengiriman sebelumnya. Bahkan, ini hemat biaya, hemat waktu, dan memberikan kepuasan kepada pengembang dan pengguna. Pengembangan aplikasi yang cepat cukup fleksibel sehingga Anda tidak perlu merencanakan tenggat waktu dan ketat. Anda membangun apa yang dibutuhkan konsumen akhir. Dalam tutorial Jhipster ini, kita akan melihat cara mengatur [Jhipster][3] dan membuat aplikasi pertama kami dengannya dengan mencakup poin -poin berikut:
  * [Apa itu Jhipster dan bagaimana menginstalnya?][4]
  * [Bagaimana cara menghasilkan dan menjalankan aplikasi dasar?][5]
  * [Jelajahi dasbor admin dari aplikasi yang dihasilkan][6]
  * [Kesimpulan][7]

## Apa itu Jhipster dan bagaimana menginstalnya? {#Install}
[Jhipster][3] adalah perangkat lunak RAD open source yang digunakan untuk menghasilkan aplikasi web perusahaan. Pembuat aplikasi open source ini menawarkan kerangka boot spring berbasis Java di server-sisi dan teknologi front-end populer seperti Angular, Vue.js, dan React.js. Generator kode sumber ini mencakup arsitektur layanan mikro yang kuat dengan beberapa mekanisme otentikasi pengguna seperti OAuth.20, JWTS, dan otentikasi sesi HTTP. Selain itu, ini menyediakan versi online di mana pengguna dapat menjelajahi semua fitur. Alat prototyping open source ** ini ditulis dalam JavaScript dengan sedikit input naskah. Oleh karena itu, dokumentasi komprehensif tersedia mengenai pengembangan dan penyebaran. Pengembang dapat menemukan kode sumber di [GitHub][8] repo. Ada dukungan lengkap untuk menjalankan tes menggunakan kerangka kerja pengujian populer seperti Gatling dan Dropractor. Lebih lanjut, itu kuat, aman, lintas platform, dan mendukung integrasi pihak ketiga.
Dalam tutorial ** Jhipster ini, ** kami akan menjelajahi Jhipster mengenai pengaturan dan penggunaannya. [Jhipster][3] gratis dan dibangun di atas model pengembangan aplikasi cepat. Ini menyediakan ekosistem yang ramah pengembang yang cukup menjanjikan dan menghasilkan alat pengembangan aplikasi web yang kuat.
Mari kita lihat bagaimana kita bisa menginstal pembangun aplikasi open source ini. Pertama, kami akan menginstal prasyarat berikut.
  * [Java 11 JDK][9]
  * [Node.js 10.20.1+][10]
Setelah instalasi selesai, buka terminal dan jalankan perintah berikut.
`NPM Instal -G Generator -Jhipster`
Perintah ini mungkin memakan waktu beberapa menit, dan setelah berhasil selesai, Jhipster akan diinstal di mesin Anda.
Anda dapat memeriksa perintah berikut untuk memeriksa instalasi.
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="Instalasi Jhipster">}}


## Bagaimana cara menghasilkan dan menjalankan aplikasi dasar? {#berlari}
Di bagian tutorial ** Jhipster ** ini, kami akan belajar cara menghasilkan aplikasi pertama kami menggunakan perangkat lunak RAD open source ini.
Kembali ke jendela terminal, jalankan perintah berikut:
`mkdir 1stappcd 1stapp/`
Setelah membuat direktori, jalankan perintah berikut yang disebutkan di bawah ini:
`Jhipster`
Perintah ini akan memulai proses. Jawab semua pertanyaan tentang preferensi teknologi aplikasi seperti teknologi ujung depan dan belakang, basis data, kerangka kerja pengujian, dan lebih banyak lagi seperti yang Anda lihat pada gambar di bawah ini.

{{< figure align=center src="images/qst-1024x474.png" alt="Tutorial Jhipster">}}

Setelah menjawab semua pertanyaan, generator kode sumber ini akan menghasilkan file kode ke folder Anda.
Sekarang, jalankan aplikasi yang dihasilkan dengan perintah berikut:
`./mvnw`
Catatan: Perintah ini akan berfungsi jika Anda telah memilih Maven sebagai otomatisasi build untuk backend.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="Tutorial Jhipster">}}

Akses aplikasi Anda ke browser di http: // localhost: 8080/.

## Jelajahi dasbor admin dari aplikasi yang dihasilkan {#dashboard}
Setelah Anda menekan http: // localhost: 8080/di browser Anda, Anda akan melihat layar berikut.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="generator kode">}}

Anda dapat menggunakan kredensial yang disebutkan untuk masuk sebagai admin. Jhipster menyediakan dua peran pengguna default. Setelah masuk yang berhasil, Anda akan memiliki ketentuan berikut yang ditunjukkan pada gambar.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="Perangkat lunak RAD open source">}}

Jhipster menyediakan manajemen pengguna lengkap di mana Anda dapat mengelola pengguna seperti yang dapat Anda lihat di gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Manajemen Pengguna Jhipster">}}

Opsi kesehatan memberi Anda informasi tentang ruang disk dan database Anda.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="Tutorial Jhipster">}}

Ada sistem logging lengkap yang tersedia di dasbor admin Jhipster.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="Perangkat lunak RAD open source">}}

Dasbor admin dari pembangun aplikasi open source ini juga menyediakan titik akhir istirahat dari fungsionalitas bawaan dan kustom.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Jhipster open source">}}


## kesimpulan {#con}
Ini adalah akhir dari tutorial Jhipster ini. Ada banyak platform RAD open source yang menyediakan ** pengembangan aplikasi instan **. Ada komunitas yang sangat bersemangat yang selalu hidup untuk menanggapi masalah dan solusi mereka. Metodologi RAD mendapatkan ketenaran karena banyak faktor. Pertama, tidak perlu memiliki pemahaman lengkap tentang persyaratan. Kedua, konsumen akhir terlibat sepanjang siklus hidup pengembangan perangkat lunak. Ketiga, faktor risiko sangat kurang karena semua pemangku kepentingan ada di kapal. Namun, perangkat lunak RAD mudah beradaptasi, ramah pengembang, dan fleksibel untuk perubahan. Ini menghemat banyak waktu karena generator kode menghemat waktu yang sangat besar untuk menulis ulang skrip berulang. Tutorial ** [jhipster][3] ini menyoroti beberapa wawasan penting. Ringan dan mudah diatur dengan beberapa perintah shell sederhana.
Jangan ragu untuk menginstal pembangun aplikasi open source ini hari ini jika Anda serius mencari platform pengembangan aplikasi cepat open source. Akhirnya, [containerize.com][11] siap untuk meningkatkan basis tutorialnya dengan beberapa tutorial yang lebih menarik. Harap tetap terhubung dengan kategori [Pengembangan Aplikasi Cepat][2] ini untuk pembaruan rutin.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Platform Kuba][12]
  * [QuickApp][13]
  * [Jhipster][3]
  * [li3][14]
  * [Apache isis][15]
  * [Top 5 Perangkat Lunak Pengembangan Aplikasi Cepat Gratis Pada tahun 2021][16]
  * [Perangkat Lunak Pengembangan Aplikasi Cepat untuk Bisnis | Rad][17]
  * [Hal -hal yang harus ditinjau sebelum memilih perangkat lunak sumber terbuka pada tahun 2021][18]

  
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
