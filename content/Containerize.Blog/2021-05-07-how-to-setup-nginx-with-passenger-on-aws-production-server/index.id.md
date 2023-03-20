---
title: "Cara mengatur nginx dengan penumpang di server produksi AWS" 
seoTitle: "Cara mengatur nginx dengan penumpang di server produksi AWS" 
description: "Posting blog ini menjelaskan langkah -langkah untuk instalasi NginX dengan penumpang melalui sistem operasi Ubuntu 20.04 LTS mengikuti metode APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "Posting blog ini menjelaskan langkah -langkah untuk pemasangan NginX dengan penumpang melalui sistem operasi Ubuntu 20.04 LTS mengikuti metode APT." 
url: /id/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## Posting blog ini menjelaskan langkah -langkah untuk instalasi Nginx dengan penumpang melalui sistem operasi Ubuntu 20.04 LTS mengikuti metode APT.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Setup Nginx dengan penumpang di server produksi AWS">}}


## **Ringkasan**:
Anda perlu menginstal dan mengonfigurasi ** nginx dengan penumpang pada produksi AWS ** server sebelum Anda menggunakan aplikasi Anda di server produksi.
** Penumpang fusi open source ** menyediakan banyak opsi kustomisasi dan fitur. Penumpang Beberapa fitur digunakan untuk meningkatkan karakteristik kinerja aplikasi. Beberapa aplikasi pengaruh kustomisasi atau perilaku penanganan koneksi dll. Dua opsi konfigurasi untuk penumpang perlu diatur di nginx, dinamai sebagai penumpang \ _enabled dan penumpang \ _root. Proses instalasi ini akan mengatur kedua opsi ini secara otomatis.
Dalam artikel blog ini, kami akan membahas beberapa langkah konfigurasi penting untuk instalasi server aplikasi web pada sistem operasi Ubuntu berikut ** Metode APT **. Anda akan dapat menggunakan dan mengelola aplikasi web yang ditulis dalam Node.js, Python, dan Ruby setelah membaca dan mengikuti panduan di bawah ini.
  *** Apa itu nginx dan penumpang? **
  *** Instal Paket Nginx dan Penumpang **
  *** Mengaktifkan modul Nginx penumpang dan restart nginx **
  *** Validasi instalasi **
  *** Pembaruan sistem dan penumpang **
  *** Server web open source terbaik **
  * **Kesimpulan**

## 1. Apa itu nginx dan penumpang? {#Langkah-4: -update-regularly}
? , dan smtp. Ini sangat terukur, dirancang untuk kinerja dan stabilitas maksimum. Nginx adalah server web berkinerja tinggi asinkron, non-threaded, dan digerakkan oleh peristiwa yang memungkinkan pemrosesan beberapa permintaan klien secara bersamaan. Itu ditulis oleh Igor Sysoev, dirilis pada tahun 2004 di bawah ketentuan lisensi BSD 2-Clause. ** Nginx melakukan 2,5 kali lebih cepat ** daripada Apache dan mengkonsumsi lebih sedikit memori sesuai dengan tes benchmark.
** [Apa itu penumpang?][2] ** Penumpang fusi juga dikenal sebagai mod \ _rails dan mod \ _rack, adalah server web gratis dan server aplikasi web open source. Ini dirancang untuk menjadi cepat, kuat, kaya fitur dan ringan yang terintegrasi dengan Apache dan Nginx. Ini juga meningkatkan keamanan, keandalan, dan skalabilitas untuk aplikasi. Ini memungkinkan administrator untuk mendapatkan wawasan tentang operasi aplikasi web, kinerja server. Server aplikasi penumpang berjalan dan mengelola aplikasi web Anda dengan mudah. Ini juga dapat ** melayani banyak aplikasi ** pada saat yang sama menjadi multi-penyewa dan mandiri. Ini dapat menangani permintaan HTTP, mengelola proses dan sumber daya, dan memungkinkan tugas administrasi, pemantauan dan diagnosis masalah. Phusion Penumpang adalah server aplikasi gratis dengan dukungan untuk menggunakan dan mengelola Meteor, Ruby on Rails Nginx Penumpang, JavaScript, Python, dan Aplikasi Node.js.

## 2. Instal Paket Nginx dan Penumpang: {#Langkah-1: -install-Paksing-Paket}
Sekarang saatnya menginstal penumpang dan nginx. Anda akan dapat dengan mudah menggunakan salah satu server web populer yang mengikuti panduan ini. Perintah terdaftar di bawah ini akan menginstal penumpang dan nginx melalui repositori apt phusion. Jika Anda sudah menginstal NGINX maka perintah ini akan meningkatkan Nginx ke versi Phusion dengan penumpang yang dikompilasi di:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Mengaktifkan modul Nginx penumpang dan restart nginx: {#step-2: -enable-the-penumpu-nginx-module-and-restart-nginx}
Edit /etc/nginx/nginx.conf dan uncomment termasuk /etc/nginx/passenger.conf;. Misalnya, Anda dapat melihat ini:
```
# include /etc/nginx/passenger.conf;
```
Hapus karakter ‘#’, seperti ini:
```
include /etc/nginx/passenger.conf;
```
Jika Anda tidak melihat versi berkomentar dari /etc/nginx/passenger.conf; Di dalam nginx.conf, maka Anda harus memasukkannya sendiri. Masukkan ke dalam /etc/nginx/nginx.conf di dalam blok http.
http {
    termasuk /etc/nginx/passenger.conf;
    ...
}
Setelah Anda selesai dengan langkah ini, ** restart nginx **:
```
$ sudo service nginx restart
```

## 4. Validasi Instalasi: {#Langkah-3: -Check-Installasi}
Setelah instalasi, silakan validasi instalasi di terminal dengan menjalankan perintah `sudo/usr/bin/penumpang-konfigasi validasi-instal`:
```
sudo /usr/bin/passenger-config validate-install
```
Semua cek harus berlalu. Jika salah satu cek tidak lewat, silakan ikuti saran di layar.
Akhirnya, periksa apakah Nginx telah memulai proses inti penumpang. Jalankan `sudo/usr/sbin/penumpang-memori-stats`. Anda akan melihat proses Nginx serta proses penumpang. Misalnya seperti di bawah ini:
```
sudo /usr/sbin/passenger-memory-stats
```
Jika Anda tidak melihat proses NGINX atau proses penumpang, maka Anda mungkin memiliki semacam masalah instalasi atau masalah konfigurasi. Silakan merujuk ke [Panduan Pemecahan Masalah][3].

## 5. Pembaruan Sistem dan Penumpang: {#Langkah-4: -Update-Regularly}
Pembaruan NGINX, pembaruan penumpang dan pembaruan sistem dikirimkan melalui ** APT Package Manager ** secara teratur. Anda harus menjalankan perintah berikut secara teratur untuk terus memperbarui:
pembaruan sudo apt-get
Sudo apt-get upgrade
Anda tidak perlu memulai ulang web atau aplikasi setelah pembaruan, dan Anda juga tidak perlu memodifikasi file konfigurasi setelah pembaruan. Itu semua diurus secara otomatis untuk Anda oleh Apt.

## 6. ** Server Web Open Source Terbaik **: {#Langkah-4: -Update-Regularly}
** Apa itu server web open source? ** Perangkat lunak server web open source adalah perangkat lunak domain publik yang dirancang untuk mengirimkan halaman web melalui Internet World Wide Web. Pada dasarnya ini memproses permintaan melalui protokol jaringan HTTP untuk mendistribusikan informasi di World Wide Web.
Lebih dari 80% aplikasi web dan situs web ditenagai oleh server web open source. Di sini saya telah mendaftarkan beberapa ** server web open source paling populer ** dan Anda dapat dengan mudah menggunakan salah satu server web populer ini sendiri.
  *** Apache HTTP Server **
  *** server web lighttpd **
  *** Server Web OpenLitespeed **
  *** Server Web Apache Tomcat **
  *** server web caddy **

## [][4] Kesimpulan: {#Next-Step}
Selamat, Anda telah berhasil menginstal dan mengonfigurasi NginX dengan penumpang di ** AWS Production Server ** untuk aplikasi web Anda. Silakan lihat berbagai panduan di [Perpustakaan Penumpang][5] untuk sepenuhnya menguasai server aplikasi penumpang. Anda mungkin sangat tertarik pada panduan [Automating Deployment][6] dari aplikasi Ruby Anda melalui ** Capistrano **, yang mengajarkan Anda cara secara otomatis menggunakan pembaruan aplikasi di masa mendatang tanpa banyak pekerjaan manual. Sekarang Anda siap untuk menggunakan aplikasi web Anda pada instance produksi AWS.
_ Apa server web gratis dan server aplikasi web open source_ yang Anda sukai untuk ** pengembangan atau hosting web ** kebutuhan_?. Apakah Anda memiliki pertanyaan tentang server web gratis dan server aplikasi web open source?, Silakan_ [hubungi][7].

## Mengeksplorasi
Anda mungkin menemukan posting blog yang relevan berikut:
  * [Cara Mengkonfigurasi Apache Sebagai Proksi Terbalik untuk Ubuntu/Debian][8]
  * [Instal dan Aman PHPMyAdmin dengan Nginx di Ubuntu][9]
  * [Mengkonfigurasi Dukungan HTTP/2 di Nginx di Ubuntu/Debian][10]
  * [Aman dan enkripsi Nginx dengan Let's Encrypt on Ubuntu 20.04][11]
  * [Cara Menginstal dan Mengkonfigurasi OwnCloud dengan Apache di Ubuntu][12]

  
[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
