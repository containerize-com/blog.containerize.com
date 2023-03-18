---
title: "Cara menginstal dan mengkonfigurasi server wamp di windows" 
seoTitle: "Cara menginstal dan mengkonfigurasi server wamp di windows" 
description: "Instal WampServer di Windows dan dengan cepat mulai mengembangkan aplikasi web berbasis PHP. Wamp Server tersedia untuk Windows 32 dan 64 bit." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Siapkan lingkungan pengembangan web untuk membuat aplikasi web dengan APACHE2, PHP, dan MySQL. Artikel ini membantu Anda menginstal Wamp Server di Windows." 
url: /id/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Mengatur lingkungan pengembangan web untuk membuat aplikasi web dengan Apache2, PHP, dan MySQL. Artikel ini membantu Anda menginstal Wamp Server di Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Server wamp">}}

Setiap pengembang harus menginstal perangkat lunak yang diperlukan di komputernya sebelum menulis program. Pada hari -hari awal, pengembang harus menginstal setiap perangkat lunak secara terpisah dan kemudian mengkonfigurasinya untuk bekerja bersama. ** WampServer ** dan perangkat lunak tumpukan solusi web lainnya sekarang tersedia, yang menggabungkan semua perangkat lunak yang diperlukan menjadi satu paket. Anda hanya perlu menginstal satu paket untuk menjalankan dan menjalankan lingkungan pengembangan Anda.
Dalam posting blog ini, kami akan membahas bagian -bagian berikut.
  *[** Apa itu WampServer? **] [1]
  *[** Instalasi Wamp **] [2]
  *[** Wamp Configuration **] [3]
  *[** akses phpMyadmin **] [4]

## Apa itu WampServer? {#Apa}
WampServer adalah tumpukan solusi gratis untuk menyiapkan lingkungan pengembangan web untuk aplikasi berbasis PHP. Wamp adalah singkatan dari (W - Windows, A - Apache, M - MySQL, dan P - PHP). Selain itu, ia juga dilengkapi dengan phpMyadmin dan admin untuk manajemen database. Wamp adalah salah satu alat populer dan Anda dapat dengan cepat mengaturnya. Selanjutnya, Anda dapat mengonfigurasi server Wamp dari panel kontrol. Ini menyediakan lingkungan pengembangan web yang lengkap untuk membuat dan menguji aplikasi. WampServer terdiri dari beberapa komponen yang dapat Anda pilih selama instalasi sesuai dengan kebutuhan Anda. Wampserver hadir dengan beberapa versi PHP. Anda dapat dengan mudah mengubah versi PHP sesuai persyaratan proyek Anda. Juga, Anda dapat mengubah DBMS (Sistem Manajemen Basis Data) dari Panel Kontrol WampServer.

Instalasi ## Wamp {#installation}
Ikuti panduan langkah demi langkah di bawah ini untuk menginstal Wamp Server di Windows.
  *** Unduh WampServer ** dari situs web resmi

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *Pilih A ** WampServer 32 Bit ** atau ** WampServer 64 Bit ** Versi pemasang sesuai dengan sistem operasi Anda.
  *Temukan file unduhan ** wamp ** dan klik dua kali untuk menjalankan proses instalasi.
  * Pilih bahasa dan kemudian tekan tombol OK.
  * Pilih saya menerima kotak centang Perjanjian dan kemudian klik tombol Berikutnya.
  * Baca informasi penting tentang instalasi WampServer dan klik tombol berikutnya untuk melanjutkan.
  * Pilih folder tempat Anda ingin menginstal server Wamp dan klik tombol berikutnya.
  * Anda harus memilih komponen yang ingin Anda instal seperti yang ditunjukkan pada tangkapan layar di bawah ini. Anda dapat memilih semua versi PHP dan beralih selama pengembangan. Anda juga dapat menginstal MySQL dan Mariadb.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Pilih jalan pintas untuk WampServer dan klik tombol Berikutnya.
  * Klik tombol Instal untuk menginstal WampServer.
  * Sekarang, pilih browser default dan editor teks default untuk server Wamp.
  * Instalasi Anda selesai. Klik tombol Finish untuk keluar dari wizard instalasi server Wamp.
  * Buka browser Anda dan ketik localhost untuk mengaksesnya. Anda akan melihat halaman di bawah ini.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


Konfigurasi ## Wamp {#Configuration}
Sekarang, kami akan melihat beberapa konfigurasi yang membantu Anda selama pengembangan dan pengujian aplikasi web. Anda sekarang dapat memulai WampServer dengan mengklik dua kali pada ikon shortcut wampserver di desktop Anda.
  *** Layanan **-Anda dapat melihat opsi untuk memulai, berhenti dan restart semua layanan dengan mengklik kiri pada ikon WampServer.
  *** Ubah Database **-Klik kanan pada ikon Wamp untuk membuka kotak dialog Alat. Pilih Alat dan klik "Invert default DBMS mariadb mysql". Wamp Server akan restart secara otomatis dan Anda dapat melihat database default dengan membuka LocalHost di browser Anda.
  *** Ubah Versi PHP **-Klik kanan pada ikon Wamp untuk membuka kotak dialog Alat. Pilih Alat dan Ubah Versi PHP CLI dan klik versi PHP yang Anda inginkan.
  *** Virtual Host ** - Anda dapat dengan mudah menambahkan host virtual melalui antarmuka web WampServer. Buka LocalHost di browser Anda dan klik "Tambahkan Host Virtual" di bawah bagian Alat. Masukkan "Nama host virtual seperti dev.example.com" dan masukkan jalur absolut proyek. Klik tombol “Mulai Pembuatan VirtualHost”. Mulai ulang server Apache untuk memuat host virtual yang baru dibuat.
  *** Ubah port apache ** - Secara default, server web apache berjalan pada port 80. Jika Anda ingin menggunakan port yang berbeda untuk Apache, Anda dapat melakukannya dari panel kontrol WampServer. Klik kanan pada ikon Wamp untuk membuka kotak dialog Alat. Pilih alat dan klik "Gunakan port selain 80". Masukkan nomor port baru di kotak dialog dan klik tombol OK.
  *** Ubah port DBMS ** - Secara default, server database berjalan pada port 3306. Jika Anda ingin menggunakan port yang berbeda untuk server database, Anda dapat melakukannya dari panel kontrol WampServer. Klik kanan pada ikon Wamp untuk membuka kotak dialog Alat. Pilih alat dan klik "Gunakan port selain 3306". Masukkan nomor port baru di kotak dialog dan klik tombol OK.
  *** Log kosong ** - WamServer menyediakan fungsionalitas untuk menghapus log dari panel kontrol. Anda dapat mengosongkan log seperti log kesalahan PHP, log kesalahan apache, log akses apache, log mysql, dan log mariadb. Bahkan Anda dapat menghapus semua log sekaligus. Klik kanan pada ikon Wamp untuk membuka kotak dialog Alat. Pilih alat dan pilih Log Kosong, Anda akan menemukan semua opsi untuk menghapus log.
  *** Ubah Bahasa ** - Anda dapat bahasa untuk panel kontrol WampServer. Klik kanan pada ikon Wamp untuk membuka kotak dialog Alat. Pilih bahasa dan klik bahasa yang diperlukan. Anda akan melihat panel kontrol dalam bahasa yang baru dipilih.

## akses phpmyadmin {#phpmyadmin}
Anda dapat mengakses ** phpMyAdmin ** untuk pengelolaan database Anda dengan membuka localhost di browser Anda dan kemudian klik tautan phpMyAdmin di halaman sambutan wampserver. Juga, Anda dapat mengaksesnya dengan mengunjungi http: // localhost/phpMyadmin URL.

## Kesimpulan
Kami telah membahas WampServer dan mencakup panduan langkah demi langkah lengkap untuk ** menginstal WampServer ** di Windows. Anda dapat dengan mudah menginstal dan mengonfigurasi ** wampserver ** dengan mengikuti tutorial ini dan mulai mengkode segera. Anda dapat mengunjungi tautan di bawah bagian Explore untuk lebih banyak opsi pada perangkat lunak Solution Stack.
Akhirnya, [** containerize.com **] [5] sedang dalam proses penulisan posting blog yang konsisten pada produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [** Web Server Solution ini **] [6] kategori untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  *[** Opsi tumpukan solusi server web server open terbaik **] [7]
  *[** Pengaturan XAMPP dan PHPMyAdmin sebagai localhost di windows **] [8]
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
