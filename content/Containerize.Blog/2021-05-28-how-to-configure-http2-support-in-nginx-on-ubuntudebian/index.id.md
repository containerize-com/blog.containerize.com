---
title: "Cara mengkonfigurasi dukungan http/2 di nginx di ubuntu/debian" 
seoTitle: "Cara mengkonfigurasi dukungan http/2 di nginx di ubuntu/debian" 
description: "HTTP2 atau H2 adalah protokol biner dan versi yang lebih baik dari protokol HTTP yang memungkinkan untuk meningkatkan kecepatan halaman situs setelah Nginx mengaktifkan dukungan HTTP2" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 adalah protokol multipleks yang kuat untuk meningkatkan kecepatan dan keamanan beban halaman. Dalam tutorial ini, kita akan belajar cara mengatur Nginx dengan dukungan HTTP/2." 
url: /id/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2 adalah protokol multipleks yang kuat untuk meningkatkan kecepatan dan keamanan beban halaman. Dalam tutorial ini, kita akan belajar cara mengatur Nginx dengan dukungan HTTP/2.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx Mengaktifkan Dukungan HTTP2 di Ubuntu dan Debian">}}


## **Ringkasan**
Nginx adalah server web open source cepat dan andal. Ini mendapatkan popularitas karena jejak memori yang rendah, penyeimbangan beban, skalabilitas tinggi, caching, dukungan untuk sebagian besar protokol dan proksi terbalik. Sekarang mari kita bicara tentang bagaimana Nginx mengaktifkan protokol HTTP2.
Salah satu protokol yang didukung oleh Nginx adalah HTTP/2 yang diterbitkan pada Mei 2015. Keuntungan utama dari HTTP/2 adalah kecepatan transfer yang tinggi untuk situs web yang kaya konten, mengurangi beban di server web dan dapat memulai beberapa permintaan paralel beberapa paralel dalam satu koneksi TCP. Nginx Aktifkan HTTP2 adalah versi yang lebih baik dari protokol HTTP. Sebelum kita mulai, kita akan membutuhkan beberapa server Ubuntu atau Debian dengan sertifikat SSL. Dalam tutorial ini, kami akan memandu Anda langkah demi langkah tentang cara nginx mengaktifkan HTTP2 di Ubuntu.
  * Memperbarui paket dan menginstal Nginx
  * Mengaktifkan Dukungan HTTP/2
  * Menambahkan nama server
  * Menambahkan sertifikat SSL
  * Menghapus cipher
  * Mengalihkan semua permintaan http ke https
  * Restart nginx
  * Kesimpulan

## Langkah 1: Memperbarui paket dan menginstal nginx   {#4597}
Langkah pertama adalah memperbarui dan meningkatkan repositori dalam sistem pengemasan yang tepat. Menggunakan Update akan mengunduh paket versi terbaru dan peningkatan akan menginstal versi terbaru dari paket dalam daftar. Jalankan perintah APT di bawah ini untuk memperbarui dan meningkatkan paket.
```
sudo apt-get update && apt-get upgrade
```
Langkah selanjutnya adalah menginstal versi terbaru dari Paket NginX. Dukungan untuk protokol HTTP/2 diperkenalkan di Nginx versi 1.9.5 dan di atas. Oleh karena itu, kita harus menginstal versi terbaru dari paket Nginx. Jalankan perintah install app di bawah ini untuk menginstal paket nginx:
```
sudo apt-get install nginx
```
Anda akan diminta untuk mengonfirmasi proses instalasi langkah demi langkah. Pilih opsi Ya dan selesaikan proses instalasi. Setelah proses instalasi selesai, langkah selanjutnya adalah memeriksa versi paket apakah kami telah menginstal versi yang tepat atau tidak. Anda dapat memeriksa versi Nginx Web Server dengan mengetik perintah:
```
sudo nginx -v
```
Output dari perintah periksa versi di atas harus mirip dengan yang berikut:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Langkah 2: Mengaktifkan Dukungan HTTP/2   {#f4d2}
Setelah menginstal paket Nginx, kita perlu mengaktifkan HTTP2 Nginx. Pengguna harus mengubah port mendengarkan dari 80 menjadi 443. Mari kita buka file konfigurasi nginx:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
Anda dapat melihat nilai default Nginx diatur untuk mendengarkan adalah port 80.
Dengarkan 80 default_server;
Dengarkan [::]: 80 default_server;
Seperti yang Anda lihat bahwa ada dua variabel mendengarkan yang berbeda. Variabel mendengarkan yang pertama adalah untuk semua IPv4Connections dan yang kedua adalah untuk koneksi IPv6. Kami akan mengaktifkan enkripsi untuk kedua variabel. Ubah nomor port mendengarkan ke 443 dan tambahkan koneksi SSL untuk protokol HTTPS seperti yang ditunjukkan di bawah ini:
Dengarkan 443 SSL HTTP2 Default_Server;
Dengarkan [::]: 443 SSL HTTP2 Default_Server;
Perhatikan bahwa selain SSL, kami juga menambahkan HTTP2. Nginx sekarang dapat menggunakan browser yang mendukung protokol HTTP/2.

## Langkah 3: Menambahkan Nama Server   {#A745}
Langkah selanjutnya adalah mengubah server \ _name sehingga nama server dikaitkan dengan nama domain. Pengguna hanya perlu mengubah nama server di file konfigurasi. Temukan entri server \ _name di file konfigurasi dan ubah _ ke domain Anda yang sebenarnya, seperti ini:
```
server_name example.com www.example.com;
```
Simpan file konfigurasi server dengan mengedit di editor teks. Anda dapat memeriksa konfigurasi nginx untuk kesalahan sintaks dengan perintah:
```
sudo nginx -t
```
Jika sintaksnya bebas kesalahan maka Anda akan melihat output di bawah ini:
Nginx: File konfigurasi /etc/nginx/nginx.conf sintaks ok
nginx: file konfigurasi /etc/nginx/nginx.conf Tes berhasil

## Langkah 4: Menambahkan sertifikat SSL   {#37C0}
Langkah selanjutnya adalah mengaktifkan konfigurasi Nginx HTTPS untuk menggunakan sertifikat SSL Anda. Anda dapat menghasilkan sertifikat yang ditandatangani sendiri atau [instal sertifikat gratis dari Let's Encrypt][1]. Jika Anda tidak memiliki sertifikat SSL maka silakan ikuti tutorial ini. Tambahkan sertifikat SSL Anda di dalam direktori konfigurasi nginx yang mirip dengan:
```
sudo mkdir /etc/nginx/ssl
```
Salin sertifikat Anda dan kunci pribadi ke lokasi ini dan juga ganti example.com dengan nama domain Anda yang sebenarnya:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
Sekarang buka file konfigurasi server nginx sekali lagi. Tambahkan dan konfigurasikan baris SSL baru di dalam blok Nginx Server dengan lokasi sertifikat Anda untuk mengaktifkan konfigurasi NGINX SSL:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
Simpan file file Nginx dan keluar dari editor teks.

## Langkah 5: Menghapus ciphers   {#d291}
Cipher adalah algoritma yang digunakan dalam kriptografi untuk enkripsi dan dekripsi data. Cipher Suites adalah sekelompok algoritma kriptografi yang digunakan untuk mengamankan koneksi jaringan. HTTP/2 memiliki daftar hitam cipher yang tidak aman yang perlu dihapus. Di sini kita akan menggunakan set sandi populer, disetujui oleh raksasa internet Cloudflare.
Buka file konfigurasi nginx berikut /etc/nginx/nginx.conf dan tambahkan baris di bawah ini tepat setelah **SSL \ _Prefer \ _Server_Ciphers on.**  Baris -baris ini termasuk daftar cipher terbaru yang dipahami oleh browser HTTP2.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
Anda dapat mengatur gzip untuk mati dan menambahkan proxy \ _max \ _temp \ _file \ _size 0; Untuk menghindari err \ _http2 \ _protocol_error nginx kesalahan.

## Langkah 6: Redirect semua permintaan http ke https   {#b387}
Sekarang kita harus memberi tahu Nginx HTTP2 Proxy apa yang harus melayani konten melalui HTTPS hanya jika server menerima permintaan HTTP. Akhirnya, mengabaikan baris yang dikomentari, file konfigurasi nginx Anda /etc/nginx/sites-available/domain-name.com harus terlihat mirip dengan ini:
Server {Listen 443 SSL HTTP2 Default_Server; Dengarkan [::]: 443 SSL HTTP2 Default_Server; root/var/www/html; index index.html index.htm index.nginx-debian.html; server_name Contoh.com; Lokasi/{try_files $ URI $ URI/= 404 ; } ssl_certificate /etc/nginx/ssl/example.com.crt;ssl_certificate_key /etc/nginx/ssl/example.com.key;ssl_dhparam /etc/nginx/ssl/dhparam.pem; {listen 80; Dengarkan [::]: 80; server_name example.com; return 301 https: // $ server_name $ request_uri;}
Simpan file /etc/nginx/sites-available/domain-name.com dan kemudian keluar. Periksa konfigurasi untuk kesalahan sintaks:
```
sudo nginx -t
```

## Langkah 7: Restart nginx   {#e687}
Untuk menerapkan semua perubahan, restart server proxy terbalik Nginx HTTP2 dan periksa status konfigurasi.
Sudo Systemctl restart nginx
Sudo Systemctl Status nginx

## **Kesimpulan:**    {#4a1a}
Selamat, Anda telah berhasil belajar cara mengatur dukungan Nginx Config HTTP2 di Ubuntu Server. Pengaturan Nginx HTTP2 Anda sekarang melayani HTTP/2 halaman dan juga menghapus perbedaan antara protokol HTTP/1 dan HTTP/2. Jika Anda masih menghadapi masalah konfigurasi, beri tahu kami di bagian komentar.
Apakah Anda memiliki pertanyaan tentang protokol multiplexed http2? _, Silakan_ [hubungi Anda][2].

## Mengeksplorasi
Anda mungkin juga suka artikel di bawah ini:
  * [Cara Mengkonfigurasi Apache Sebagai Proksi Terbalik untuk Ubuntu/Debian][3]
  * [Cara][3][menginstal dan mengamankan phpMyadmin dengan nginx di ubuntu][4]
  * [Cara Mengatur Nginx Dengan Penumpang di Server Produksi AWS][5]
  * [Aman dan enkripsi Nginx dengan Let's Encrypt on Ubuntu 20.04][1]
  * [Cara Menginstal dan Mengkonfigurasi OwnCloud dengan Apache di Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
