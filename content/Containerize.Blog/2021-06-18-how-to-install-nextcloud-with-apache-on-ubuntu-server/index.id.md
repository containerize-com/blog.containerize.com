---
title: "Cara menginstal nextcloud dengan apache di server ubuntu" 
seoTitle: "Cara menginstal nextcloud dengan apache di server ubuntu" 
description: "NextCloud adalah solusi penyimpanan cloud yang di-host sendiri open source yang ditulis dalam PHP. Artikel ini akan menunjukkan cara menginstal NextCloud dengan Apache di Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud adalah perangkat lunak sinkronisasi file open source yang diselenggarakan sendiri dan perangkat lunak kolaborasi. Tutorial ini akan menunjukkan cara menginstal NextCloud dengan Apache di Ubuntu." 
url: /id/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud adalah sinkronisasi file open source yang diselenggarakan sendiri dan perangkat lunak kolaborasi. Tutorial ini akan menunjukkan cara menginstal NextCloud dengan Apache di Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Cara menginstal nextcloud dengan apache di ubuntn">}}


## **Ringkasan**
**[NextCloud][1]  **adalah solusi penyimpanan cloud yang bebas dan aman ** **  ditulis dalam bahasa pemrograman PHP. Ini menyediakan akses data menggunakan antarmuka web dan secara fungsional mirip dengan Dropbox. Solusi penyimpanan cloud berpemilik seperti Dropbox dan Google Drive nyaman tetapi mereka dapat digunakan untuk mengumpulkan data pribadi karena file Anda disimpan di sistem mereka. Jika Anda membutuhkan sinkronisasi file dan berbagi file yang aman, aman dan sesuai, maka Anda dapat beralih ke server Open Source NextCloud. Pengaturan NextCloud dapat diinstal di server rumah pribadi Anda atau di server pribadi virtual.
Sumber terbuka NextCloud menyediakan **enkripsi end-to-end** , berarti file dapat dienkripsi pada perangkat klien sebelum diunggah ke server. Ini juga dapat diintegrasikan dengan suite kantor online seperti Collobora, OnlyOffice NextCloud sehingga Anda dapat membuat dan mengedit file dokumen, PPT, XLS langsung dari klien NextCloud. Anda dapat berbagi dan menyinkronkan satu atau lebih file dan folder di komputer Anda dengan server NextCloud Anda setelah unduhan klien NextCloud. Download desktop NextCloud dan klien seluler menyediakan opsi untuk disinkronkan dan berbagi semua perangkat di bawah kendali Anda. Tempatkan file data di direktori bersama lokal Anda, dan file -file tersebut segera disinkronkan ke server dan ke perangkat lain menggunakan klien sinkronisasi desktop NextCloud, aplikasi iOS atau perangkat Android.
Tutorial ini akan membantu Anda menginstal NextCloud di Ubuntu 20.04 LTS Linux System Operasi dengan Apache.
  ***Pasang prasyarat (tumpukan lampu)** 
  ***Unduh Arsip NextCloud di Ubuntu** 
  ***Buat database MySQL** 
  ***Jalankan Penginstal Web NextCloud** 
  * **Membungkus**

## Langkah 1: Pasang prasyarat (tumpukan lampu)
Hal pertama untuk menginstal NextCloud di Ubuntu adalah Anda harus menjalankan **server lampu  **pada sistem Ubuntu LTS Anda. Masuk ke sistem Anda dan akses Terminal Terminal. Jika Anda sudah menjalankan tumpukan lampu ** **  Lewati langkah ini, Gunakan perintah berikut untuk menginstal dependensi yang diperlukan.

### Instal PHP
Mari kita mulai dengan instalasi PHP Versi 5.6 atau versi yang lebih tinggi di server Ubuntu Anda:
pembaruan sudo apt-get
sudo apt-get install -y php php-gd php-curl php-zip php-xml php-mbstring
Anda dapat memverifikasi versi PHP menggunakan perintah berikut:
php -v
{{_LINE_29_}}

### Instal apache2
Selanjutnya, instal Apache dengan perintah:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl restart apache2
{{_LINE_34_}}

### Instal MySQL
Dengan ketergantungan yang keluar dari jalan, langkah selanjutnya yang harus dijaga adalah mengamankan server database MySQL. Instal Server Database MySQL dengan menjalankan:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Langkah 2: Unduh Arsip NextCloud di Ubuntu
Pada saat penulisan artikel ini, versi terbaru NextCloud adalah 22.0.0Beta5. Setelah berhasil mengkonfigurasi server lampu di sistem Anda, mari kita unduh NextCloud dari [situs web resmi][2].
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
Setelah unduhan server NextCloud selesai, ekstrak arsip yang diunduh di bawah root dokumen situs web dan atur kepemilikan direktori NextCloud ke www-data pada file dan direktori.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data nextcloud
sudo chmod -r 755 nextcloud
{{_LINE_49_}}
Sekarang, hapus file arsip yang diunduh.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Langkah 3: Buat database MySQL
Setelah mengekstraksi kode sumber, mari kita buat database MySQL NextCloud dan akun pengguna untuk mengonfigurasi NextCloud. Gunakan set perintah berikut untuk masuk ke server MySQL, buat database NextCloud, pengguna dan keluar dari konsol MySQL.
mysql -u root -p
Masukkan kata kunci:
mysql> buat database nextcloud;
mysql> berikan semua di nextcloud.* ke 'nextcloud'@'localhost' yang diidentifikasi oleh 'yasir_pa $$ w0rd_';
mysql> hak istimewa flush;
mysql> berhenti
{{_LINE_61_}}

## Langkah 4: Jalankan penginstal web NextCloud
Pada titik ini, NextCloud menginstal Ubuntu 20.04 berhasil dan dikonfigurasi. Sekarang, buka direktori konfigurasi NextCloud di browser web seperti di bawah ini dan ketikkan url http://your-domain.com. Ubah LocalHost ke alamat IP server Anda atau nama domain. Anda akan melihat layar berikut:
http: // localhost/nextcloud/atau http: // your_domain_name/nextcloud/
{{_LINE_65_}}
Masukkan kredensial admin baru untuk membuat akun admin dan menyediakan lokasi folder data.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Cara Menginstal NextCloud dengan Apache di Ubuntu Linux Server">}}

{{_LINE_69_}}
Sekarang geser halaman Anda ke bawah dan masukkan nama database, nama pengguna basis data, kata sandi dan klik **Finish Setup**  Tombol.
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Cara menginstal NextCloud Ubuntu 20.04 dengan Apache">}}

{{_LINE_73_}}
Setelah instalasi selesai, Anda akan melihat dasbor admin NextCloud di layar berikut. Di sini Anda dapat membuat pengguna, grup, menetapkan izin, dll.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Menginstal NextCloud di Ubuntu dengan Apache">}}

{{_LINE_77_}}
Selamat, Anda memiliki solusi cloud on-premise NextCloud yang berfungsi pada sistem Ubuntu LTS Anda. Anda sekarang dapat mulai menyesuaikan server cloud Anda untuk memenuhi kebutuhan Anda dengan sempurna.

## **Wrapping Up:** {#4a1a}
Selamat! Anda telah berhasil **dikonfigurasi dan menginstal NextCloud di Ubuntu Server dengan Apache** . Anda telah belajar cara membuat cloud pribadi. NextCloud Ubuntu Server adalah platform kolaborasi Cloud Storage yang luar biasa yang dapat melayani hampir semua kebutuhan penyimpanan cloud pribadi atau hibrida. Sekarang Anda tahu cara menginstal NextCloud di Ubuntu dan data Anda aman dan aman di cloud yang diselenggarakan sendiri. Dalam tutorial mendatang kami, kami akan membahas tentang topik yang lebih menarik terkait dengan tumpukan solusi server web.
_ Solusi penyimpanan berbasis cloud yang Anda sukai? Jika Anda memiliki pertanyaan, silakan [hubungi Anda][3] ._

## Mengeksplorasi:
Anda mungkin suka mengikuti artikel yang berkaitan dengan manajemen sehari-hari server Anda.
  * [Cara Menginstal dan Mengkonfigurasi OwnCloud dengan Apache di Ubuntu][4]
  * [Cara Mengkonfigurasi Apache Sebagai Proksi Terbalik untuk Ubuntu atau Debian][5]
  * [Instal dan Aman PHPMyAdmin dengan Nginx di Ubuntu][6]
  * [Aman dan enkripsi Nginx dengan Let's Encrypt on Ubuntu 20.04][7]
  * [Mengkonfigurasi Dukungan HTTP/2 di Nginx di Ubuntu/Debian][8]
  * [Pengaturan Nginx dengan penumpang di server produksi AWS][9]

  
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
