---
title: "Cara Mengamankan Nginx dengan Let's Encrypt di Ubuntu 20.04" 
seoTitle: "Cara Mengamankan Nginx dengan Let's Encrypt di Ubuntu 20.04" 
description: "Cara mengatur, mengenkripsi, dan mengamankan Nginx dengan Let's Encrypt di Ubuntu. Mari kita enkripsi klien untuk menghasilkan sertifikat untuk secara otomatis mengonfigurasi Nginx." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Situs web termasuk enkripsi SSL/TLS untuk domainnya untuk menarik pengunjung. Artikel ini menjelaskan penggunaan utilitas certbot untuk mendapatkan sertifikat TLS/SSL untuk Nginx." 
url: /id/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

Situs web ## termasuk enkripsi SSL/TLS untuk domainnya untuk menarik pengunjung. Artikel ini menjelaskan penggunaan utilitas certbot untuk mendapatkan sertifikat TLS/SSL untuk Nginx.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Aman Nginx dengan Let's Encrypt on Ubuntu">}}


## **Ringkasan**
Situs web mana pun yang berupaya menarik pengunjung perlu menyertakan enkripsi TLS/SSL untuk domainnya. Sertifikat bebas SSL memastikan koneksi yang aman antara server web Anda suka mengenkripsi dan mengamankan NGINX dan browser aplikasi. Mari Enkripsi adalah otoritas sertifikat gratis, otomatis, dan terbuka yang memungkinkan Anda untuk mengatur perlindungan untuk Nginx SSL Letsencrypt. Mari kita enkripsi sertifikat SSL gratis dipercaya oleh semua browser utama dan berlaku untuk 90 hari berikutnya dari tanggal masalah.
Posting blog ini menjelaskan cara paling sederhana untuk mengenkripsi dan mengamankan server web Nginx yang menjalankan di Ubuntu 20.04 / 18.04 dengan memperoleh Nginx HTTPS Letsencrypt sertifikat menggunakan utilitas Nginx Certbot dan mengatur sertifikat Anda untuk memperbaruinya secara otomatis. Mari kita mulai dan mengatur Konfigurasi Ubuntu Nginx Ubuntu.
  * Ketergantungan dan prasyarat
  * Menginstal Utilitas Certbot
  * Mengonfirmasi konfigurasi Nginx
  * Mengizinkan https melalui firewall
  * Mendapatkan sertifikat SSL
  * Kesimpulan

## Hal Pertama Pertama: Ketergantungan dan Prasyarat   {#prequisites}
Untuk mengikuti artikel ini, Anda perlu mengikuti dependensi dan prasyarat untuk menginstal Letsencrypt Ubuntu nginx utilitas:
  * Pengguna non-root atau root SUDO di mesin lokal/jarak jauh.
  * Sistem yang menjalankan Ubuntu 20.04 atau Ubuntu 18.04
  * Akses ke terminal baris perintah
  * Hak istimewa sudo atau root pada mesin lokal/jarak jauh
  * Nginx diinstal dan diatur
  * Nama domain terdaftar yang menunjuk ke IP publik
  * Blok server yang dikonfigurasi untuk nama domain itu
  * Firewall dikonfigurasi untuk menerima koneksi pada port 80 dan 443.

## Langkah 1-Menginstal Certbot   {#Langkah-1 --— Instalasi-CertBot}
Langkah pertama untuk mengamankan NginX dan untuk mengenkripsi Nginx dengan Enkripsi Let's adalah menginstal Paket Nginx Certbot dan mudah digunakan untuk mendapatkan dan memperbarui Let's Encrypt Certificates SSL di server Anda. Untuk melakukannya, mulailah dengan membuka terminal di Ubuntu dan memperbarui repositori lokal. Ketik y dan masukkan jika diminta.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Sekarang mari kita verifikasi beberapa pengaturan konfigurasi Ninx Secure.

## Langkah 2-Mengonfirmasi Konfigurasi Nginx   {#Step-2 --—- Mengkonfirmasi-Nginx-39-S-Configuration}
Seperti yang dijelaskan di bagian dependensi dan prasyarat, Anda seharusnya sudah memiliki domain terdaftar dan Certbot harus dapat menemukan blok server NginX yang benar untuk domain tersebut untuk secara otomatis mengonfigurasi SSL. Sebagai contoh, posting blog ini menggunakan domain blog.containerize.com dan blok server untuk domain Anda di /etc/nginx/sites-available/blog.containerize.com dengan arahan server_name sudah disetel dengan benar.
Untuk mengonfirmasi, buka file konfigurasi untuk domain Anda menggunakan nano atau editor teks favorit Anda:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Temukan baris Directive Server_Name yang ada di file /etc/nginx/sites-available/blog.containerize.com. Seharusnya terlihat seperti ini:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Sekarang verifikasi sintaks file konfigurasi nginx Anda dan muat ulang server nginx untuk memuat pengaturan konfigurasi baru:
```
sudo nginx -t
sudo systemctl reload nginx

```
Certbot Utility sekarang dapat menemukan arahan blok server NginX yang benar untuk mengamankan NGINX dan memperbarui secara otomatis. Pada langkah berikutnya, mari kita perbarui firewall untuk mengizinkan lalu lintas HTTPS.

## Langkah 3-Mengizinkan https melalui firewall   {#langkah-3 --— memungkinkan-https-through-the-firewall}
Seperti yang direkomendasikan dalam artikel ini prasyarat, Anda harus menyesuaikan pengaturan untuk memungkinkan lalu lintas HTTPS. Untuk memastikan bahwa firewall Anda diaktifkan dan aktif, jalankan perintah di bawah ini:
```
sudo ufw status

```
Output harus memberi tahu Anda UFW aktif dan memberi Anda daftar aturan yang ditetapkan. Ini hanya menunjukkan lalu lintas HTTP diizinkan ke server web. Untuk mengizinkan lalu lintas terenkripsi, Anda dapat menambahkan profil Nginx HTTPS atau menggunakan Nginx penuh dan menghapus aturan Nginx HTTP yang ada. Izinkan lalu lintas nginx https dengan mengetik perintah:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Verifikasi aturan https yang memungkinkan lalu lintas https dengan mengetik perintah status ufw:
```
sudo ufw status

```
Selanjutnya, mari kita jalankan Certbot dan Ambil Sertifikat kami.

## Langkah 4-Mendapatkan Sertifikat SSL   {#Langkah-4 --—- Perolehan-An-SSL-Sertifikat}
Plugin Nginx untuk Certbot akan mengurus konfigurasi ulang nginx dan memuat ulang konfigurasinya bila perlu. Oleh karena itu, hanya Anda yang perlu menghasilkan sertifikat dengan Nginx Plug -in dengan mengeksekusi perintah berikut:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Jika ini adalah pertama kalinya Anda menjalankan Certbot Utility maka Certbot meminta Anda untuk mengonfigurasi pengaturan HTTPS Anda. Anda akan diminta untuk memasukkan alamat email dan menyetujui Ketentuan Layanan. Setelah tekan Enter, konfigurasi akan diperbarui, dan Nginx akan memuat ulang untuk mengambil pengaturan baru. Akhirnya, Certbot akan ditampilkan dengan pesan yang memberi tahu Anda bahwa sertifikat telah berhasil dihasilkan dan di mana sertifikat Anda disimpan.
Sertifikat Anda diunduh, diinstal, dan dimuat dengan konfigurasi Nginx SSL Certificate LetsenCrypt. Coba muat ulang situs web Anda menggunakan https: // dan perhatikan indikator keamanan browser Anda. Ini harus menunjukkan bahwa situs tersebut diamankan dengan benar, biasanya dengan ikon kunci. Jika Anda menguji server Anda menggunakan tes server SSL Labs, itu akan mendapatkan nilai A untuk Nginx dan Letsencrypt.
Mari kita selesaikan dengan menguji proses pembaruan.

## Langkah 5-Memverifikasi Certbot Auto-Renewal   {#Step-5 --—- Verifikasi-Certbot-Auto-Renewal}
Karena Let's Encrypt Certificates berakhir setiap sembilan puluh (90) hari dan Nginx SSL Letsencrypt mendorong pengguna pengaturan dan pekerjaan cron pembaruan otomatis. Pertama, buka file konfigurasi crontab untuk pengguna saat ini:
```
sudo crontab -e
```
Tambahkan pekerjaan cron yang menjalankan perintah certbot, certbot memperbarui nginx memperbarui sertifikat jika mendeteksi sertifikat akan berakhir dalam waktu 30 hari. Jadwalkan untuk berjalan setiap hari pada waktu tertentu mis. 05:00 A.M.
```
sudo certbot renew --dry-run

```
Pekerjaan cron juga harus menyertakan atribut –Quiet, seperti pada perintah di atas. Ini menginstruksikan Nginx memperbarui sertifikat SSL untuk tidak memasukkan output apa pun setelah melakukan tugas. Aktifkan Pembaruan Sertifikat Otomatis. Setelah Anda menambahkan pekerjaan cron, simpan perubahan, dan keluar dari file.

## kesimpulan   {#conclusion}
Dalam artikel ini, kami belajar cara menginstal Nginx Letsencrypt SSL Certificate. Kami mengunduh sertifikat SSL untuk domain Anda dan mengonfigurasi NGINX untuk menggunakan sertifikat ini. Selain itu, Anda harus mengaktifkan Certbot untuk memperbarui sertifikat secara otomatis untuk SSL Nginx Letsencrypt. Dalam tutorial mendatang kami, kami akan membahas tentang topik yang lebih menarik tentang cara mengamankan server web dengan teknologi keamanan standar yang memungkinkan komunikasi terenkripsi antara browser web dan server web.
_Your dapat bergabung dengan kami di [Twitter][1], [LinkedIn][2] dan halaman [Facebook][3] kami. Protokol kriptografi apa yang Anda gunakan untuk memberikan keamanan komunikasi melalui jaringan komputer? Jika Anda memiliki pertanyaan, silakan_ [hubungi Anda][4].

## Mengeksplorasi
Anda dapat menemukan tautan yang relevan berikut untuk memantau kinerja server dan memastikan keandalan dan keamanannya:
  * [Cara Mengkonfigurasi Apache Sebagai Proksi Terbalik untuk Ubuntu/Debian][5]
  * [Cara Menginstal dan Mengamankan PHPMyAdmin dengan Nginx di Ubuntu][6]
  * [Mengkonfigurasi Dukungan HTTP/2 di Nginx di Ubuntu/Debian][7]
  * [Pengaturan Nginx dengan penumpang di server produksi AWS][8]
  * [Cara Menginstal dan Mengkonfigurasi OwnCloud dengan Apache di Ubuntu][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
