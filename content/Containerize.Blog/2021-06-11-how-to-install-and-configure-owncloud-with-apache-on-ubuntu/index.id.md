---
title: "Cara Menginstal dan Mengkonfigurasi OwnCloud dengan Apache di Ubuntu" 
seoTitle: "Cara Menginstal dan Mengkonfigurasi OwnCloud dengan Apache di Ubuntu" 
description: "OwnCloud adalah perangkat lunak server klien open source untuk membuat layanan hosting file. Dalam tutorial ini, kami akan belajar cara menginstal dan mengonfigurasi ourseldoud di ubuntu" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnDloud adalah koleksi open-source dari perangkat lunak server klien untuk membuat server hosting file. Tutorial ini adalah tentang cara mengonfigurasi sendiri di Ubuntu." 
url: /id/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud adalah koleksi open-source dari perangkat lunak server klien untuk membuat server hosting file. Tutorial ini adalah tentang cara mengonfigurasi sendiri di Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **Ringkasan**
OwnCloud adalah aplikasi web perusahaan open source yang kuat dan populer yang ditulis dalam PHP yang digunakan untuk sinkronisasi data dan berbagi file. Ini juga memungkinkan Anda untuk dengan mudah mengelola file data, kontak, kalender, untuk melakukan daftar dan banyak lagi. Ini adalah alternatif yang bagus untuk platform cloud paling populer seperti Google Drive, Dropbox, iCloud, dan layanan penyimpanan cloud lainnya di luar sana. Tetapi tidak seperti layanan penyimpanan cloud lainnya, OwnCloud Self Hosted gratis untuk membuat cloud host sendiri.
OwnDloud adalah perangkat lunak cloud pribadi open source yang menyediakan akses data menggunakan antarmuka web untuk membuat cloud pribadi. Ini memungkinkan Anda untuk membuat server berbagi file sendiri di mana Anda dapat dengan mudah melihat dan menyinkronkan acara kalender, arsip, gambar, rekaman, tugas, alamat buku dengan bookmark, mirip dengan Dropbox dan Google Drive. Ini juga menyediakan opsi untuk menyinkronkan dan berbagi data di seluruh perangkat semua di bawah kendali Anda. Instal dan konfigurasikan dukungan ownCloud Anda disinkronkan untuk klien desktop serta perangkat aplikasi seluler. Selain itu, Anda dapat dengan mudah mengimplementasikan pembatasan akses pengguna dan grup pada file per pengguna menggunakan owncloud di ubuntu. Sumber Open Source Own Source adalah aplikasi lintas platform dan dapat diinstal pada semua sistem operasi yang populer.
Tutorial ini akan membantu Anda untuk mengatur sendiri dan mengkonfigurasi sendiri pada sistem Ubuntu LTS.
  * Pasang server lampu
  * Unduh OwnCloud
  * Buat database dan pengguna MySQL
  * Instal OwnCloud
  * Apa alternatif terbaik untuk OwnCloud?
  * Kesimpulan

## Langkah 1: Instal Lamp Server
Untuk mengatur server cloud sendiri dan cara membuat cloud pribadi, pertama -tama kita harus mengatur server lampu yang berjalan. Jika Anda sudah memasang dan menjalankan tumpukan lampu, lewati langkah ini, gunakan perintah pengikut untuk mengatur lampu pada sistem ubuntu Anda.

### Instal PHP
Anda dapat menginstal PHP 5.6 atau versi yang lebih tinggi pada sistem Ubuntu atau Debian Anda dengan menjalankan perintah:
sudo apt-get menginstal properti python-software
Sudo Add-apt-Repository PPA: ondrej/php
pembaruan sudo apt-get
sudo apt -get upgrade -y
sudo apt-get install -y php pHp-gd php-curl pHp-zip pHp-dom php-xml PHP-simplexml pHP-mbstring
{{_LINE_31_}}

### Instal apache2
Apache adalah perangkat lunak server web open-source yang paling banyak digunakan. Selanjutnya, instal server web Apache di Ubuntu untuk menyiapkan server cloud Anda sendiri dengan menjalankan:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### Instal MySQL
MySQL Open-Source Relational Database Management System adalah komponen dari tumpukan perangkat lunak aplikasi web lampu dan lainnya. Sekarang menginstal MySQL di Ubuntu dengan berjalan di bawah ini:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## Langkah 2: Unduh OwnCloud di Ubuntu
Setelah berhasil mengkonfigurasi server lampu pada sistem Ubuntu Anda, mari kita unduh solusi penyimpanan cloud pribadi cloud terbaru dari [situs web resmi][1].
CD /TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
Setelah unduhan, Perangkat Lunak Server OwnCloud telah selesai, sekarang ekstrak arsip yang diunduh di bawah root dokumen situs web dan setup izin yang sesuai pada file dan direktori dengan menjalankan untuk menginstal OwnCloud di Ubuntu.
CD/var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data: www-data sendiri cloud
sudo chmod -r 755 owncloud
{{_LINE_50_}}
Sekarang, hapus file arsip dan restart server Apache.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl restart apache2

## Langkah 3: Buat basis data dan pengguna sendiri
Setelah mengekstraksi kode, sekarang mari kita buat database MySQL dan akun pengguna untuk mengkonfigurasi server penyimpanan cloud pribadi ownCloud. Gunakan set perintah berikut untuk masuk ke MySQL Server untuk membuat basis data dan pengguna sendiri.
mysql -u root -p
Masukkan kata kunci:
MySQL> Buat database sendiri;
mysql> berikan semua di owncloud.* Untuk 'owncloud'@'localhost' yang diidentifikasi oleh '_password_';
mysql> hak istimewa flush;
mysql> berhenti
{{_LINE_62_}}
Selanjutnya, kita perlu menginstal OwnCloud di Ubuntu dari antarmuka web untuk membuat cloud pribadi.

## Langkah 4: Instal OwnCloud di Ubuntu
Sekarang mengakses direktori Panel Web Cloud Server Personal Own Own Own di browser web. Ubah LocalHost ke alamat IP server Anda atau nama domain.
http: // localhost/owncloud/
{{_LINE_67_}}
Anda akan melihat halaman login Open Source OwnCloud. Masukkan nama pengguna dan kata sandi admin baru untuk membuat akun admin dan menyediakan lokasi folder data. Jika semuanya baik -baik saja maka Anda harus mendapatkan halaman web seperti ini.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Instal OwnCloud dengan Apache di Ubuntu">}}

{{_LINE_71_}}
Sekarang geser halaman Anda ke bawah. Dalam formulir di bawah ini, Anda perlu memasukkan nama pengguna dan kata sandi untuk mengelola Panel Cloud Cloud Own Best. Juga berikan database bersama dengan nama pengguna dan kata sandi untuk menghubungkan server owncloud dengan server database, lokasi folder data dan klik **Finish Setup** .
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Konfigurasi sendiri di ubuntu">}}

{{_LINE_75_}}
Setelah menyelesaikan pengaturan, Anda akan mendapatkan dasbor admin. Di mana Anda dapat membuat pengguna, grup dan menugaskannya izin, dll.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Instal Dasbor OwnCloud">}}

{{_LINE_79_}}
Ya! Kami selesai dengan panduan instalasi ownCloud untuk membangun penyimpanan cloud pribadi. Anda sekarang tahu cara menginstal sendiri OwnCloud di Ubuntu untuk membangun cloud pribadi langkah demi langkah mirip dengan Dropbox atau Google Drive.

## **Apa alternatif terbaik untuk owncloud?** {#4a1a}
Berikut ini adalah alternatif sendiri yang di -host sendiri dan perangkat lunak hosting file pesaing.
  ***Seafile**  adalah sistem perangkat lunak hosting file lintas platform open source
  ***NextCloud**  platform penyimpanan cloud bebas dan open source
  ***Sinkronisasi Resilio**  adalah Aplikasi Sinkronisasi Peer Sumber Terbuka
  ***Sel Pydio**  adalah perangkat lunak berbagi file dan sinkronisasi open source
  ***Synching**  Aplikasi sinkronisasi file peer-to-peer gratis dan open source

## **Kesimpulan:** {#block-dd1258f4-e0c5-4ac9-e18-7dd2a700f09e}
Selamat! Anda telah berhasil menginstal dan mengkonfigurasi sendiri untuk membangun cloud pribadi Anda sendiri dengan Apache di mesin Ubuntu. Sekarang data Anda tidak pernah ada di tangan pihak ketiga dan dapat dikelola secara pribadi di Virtual Private Cloud Own Cloud Ubuntu Server Storage. Banyak perusahaan memilih untuk membuat server cloud mereka sendiri dengan banyak informasi penting karena banyak masalah dengan privasi data. Dalam tutorial mendatang kami, kami akan membahas topik yang lebih menarik dari tumpukan solusi server web.
_Your dapat bergabung dengan kami di [Twitter][2], [LinkedIn][3] dan halaman [Facebook][4] kami. Solusi penyimpanan berbasis cloud apa yang Anda gunakan secara online?. Jika Anda memiliki pertanyaan, silakan_ [hubungi kami][5].

## Mengeksplorasi:
Kami juga memiliki beberapa artikel lain yang berkaitan dengan manajemen sehari-hari server Anda.
  * [Cara Mengkonfigurasi Apache Sebagai Proksi Terbalik untuk Ubuntu/Debian][6]
  * [Cara Menginstal dan Mengamankan PHPMyAdmin dengan Nginx di Ubuntu][7]
  * [Aman dan enkripsi Nginx dengan Let's Encrypt on Ubuntu 20.04][8]
  * [Mengkonfigurasi Dukungan HTTP/2 di Nginx di Ubuntu/Debian][9]
  * [Setup Nginx dengan penumpang di server produksi AWS][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
