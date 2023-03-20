---
title: "Tutorial Pengaturan untuk Lemp Stack di Ubuntu 18.04" 
seoTitle: "Tutorial Pengaturan untuk Lemp Stack di Ubuntu 18.04" 
description: "The Lemp Stack adalah tumpukan perangkat lunak yang digunakan untuk mengembangkan dan menggunakan aplikasi web. Pelajari cara menginstal nginx, mysql, dan php di ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Instal & amp; Konfigurasikan tumpukan LEMP untuk mengembangkan dan menggunakan aplikasi web. Panduan ini akan membantu Anda menginstal Nginx, MySQL, dan PHP di Ubuntu 18.04." 
url: /id/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Instal & Konfigurasikan LEMP Stack untuk mengembangkan dan menggunakan aplikasi web. Panduan ini akan membantu Anda menginstal Nginx, MySQL, dan PHP di Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="Instal Lemp Stack di Ubuntu">}}


## Ikhtisar {#perequisites}
Dalam panduan ini, kami akan menginstal Nginx, MySQL, dan PHP (LEMP Stack) untuk pengembangan dan penyebaran aplikasi web. Kami juga akan mengkonfigurasi server web ke aplikasi PHP server di Ubuntu Server 18.04. Kami akan membahas bagian -bagian berikut dalam tutorial ini.
  *[** Prasyarat **][1]
  *[** Apa itu tumpukan lemp? **][2]
  *[** Instalasi LEMP **][3]
  *[** Kesimpulan **][4]

## Prasyarat {#perequisites}
Sebelum menginstal perangkat lunak, Anda harus memenuhi persyaratan berikut.
  * Server dengan sistem operasi Ubuntu
  *Pengguna non-root dengan ** sudo ** hak istimewa

## Apa itu Lemp Stack? {#Apa}
** LEMP Stack ** adalah kumpulan perangkat lunak yang dapat digunakan untuk menjalankan aplikasi web berbasis PHP. LEMP adalah singkatan dari Linux, Nginx, MySQL, dan PHP. Tumpukan lemp adalah varian dari tumpukan lampu. Lampu dan LEMP adalah tumpukan perangkat lunak populer untuk mengembangkan dan menggunakan aplikasi web. Ada satu perbedaan antara dua tumpukan perangkat lunak ini. Lampu memanfaatkan server web Apache, sedangkan server LEMP memanfaatkan server web nginx.

Instalasi ## LEMP {#installation}
Di bagian ini, kami akan fokus pada cara menginstal Nginx, MySQL, dan PHP pada Ubuntu 18.04. Pertama -tama, kita perlu memperbarui paket server dengan menjalankan perintah di bawah ini.
```
$ sudo apt update
```

### Menginstal server web nginx
  *Jalankan perintah di bawah ini untuk ** Instal Nginx di Ubuntu **.
```
$ sudo apt install nginx
```
  * Setelah Anda selesai dengan instalasi NGINX, buka browser web Anda dan ketik alamat IP server Anda. Ini akan menunjukkan kepada Anda halaman Welcome Default Server Web NGINX.

{{< figure align=center src="images/nginx-home-1.png" alt="Halaman default server web nginx">}}


### Menginstal MySQL
Sekarang, Anda perlu menginstal server database MySQL untuk pengelolaan data aplikasi Anda.
  *Jalankan perintah di bawah ini untuk ** Instal MySQL di Ubuntu **.
```
$ sudo apt install mysql-server
```
  * Untuk mengamankan instalasi MySQL, jalankan perintah berikut.
```
$ sudo mysql_secure_installation
```
  *Anda akan ditanya baik Anda ingin mengaktifkan ** Plugin Kata Sandi ** atau tidak. Lebih baik tidak mengaktifkannya, ketik n dan tekan Enter untuk bergerak pada langkah berikutnya.
  * Selanjutnya, ini akan menanyakan beberapa pertanyaan seperti yang ditunjukkan di bawah ini. Anda perlu menjawab semua pertanyaan.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Sekarang, server MySQL sedang berjalan dan berjalan. Anda dapat mengujinya dengan perintah berikut. Masukkan kata sandi Akun Root Ubuntu Anda, bukan MySQL jika diminta untuk kata sandi.
```
$ sudo mysql
```
  * Masukkan perintah di bawah ini untuk keluar dari mysql.
```
mysql> exit
```

### Memasang PHP
Kami akan mencakup pemasangan PHP-FPM untuk pemrosesan PHP. PHP-FPM adalah singkatan dari FastCGI Process Manager. Nginx Web Server tidak memiliki fungsionalitas builtin untuk pemrosesan PHP jadi, kami akan menggunakan PHP-FPM untuk itu. Selain itu, kami akan menginstal PHP-MYSQL untuk mengkomunikasikan PHP dengan MySQL untuk manajemen data.
  *Jalankan perintah di bawah ini untuk ** Instal PHP di Ubuntu **.
```
$ sudo apt install php-fpm php-mysql
```
  * Sekarang, Anda selesai dengan instalasi PHP dan semua perangkat lunak LEMP Stack yang diperlukan untuk menjalankan aplikasi web.
  * Pada langkah ini, kami akan membuat file konfigurasi nginx untuk memberi tahu Nginx untuk menggunakan prosesor PHP untuk konten dinamis. Jalankan perintah di bawah ini untuk membuat file konfigurasi nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Salin kode ke file konfigurasi nginx dan simpan.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * Mari kita lihat arahan dan blok lokasi ini, sehingga Anda dapat memiliki informasi dasar.
      *** Dengarkan **: Anda dapat mendefinisikan port untuk nginx. Gunakan Port 80 untuk HTTP dan 443 untuk protokol HTTPS.
      *** root **: Tentukan direktori root untuk proyek Anda. Nginx akan menggunakannya untuk melayani situs web atau aplikasi web.
      *** Indeks **: Tentukan urutan file mana yang harus dilayani. Ketika file indeks dipanggil, nginx akan mengirimkan file index.php.
      *** Server_name **: Tentukan nama domain atau IP publik dari server Anda.
      *** Lokasi /**: Blok lokasi ini memiliki ** try_block ** Petunjuk dan cocok dengan URI yang diminta. Nginx Mengembalikan 404 Kesalahan, jika tidak menemukan file yang diminta.
      *** Lokasi ~ .php $ **: Blok lokasi ini menangani pemrosesan PHP.
      *** Lokasi ~ /.ht**: nginx tidak memproses **. HtAccess ** File dan lokasi ini memblokirnya. Nginx tidak melayani file .htaccess dengan mendefinisikan ** menyangkal semua ** arahan.
  * Buat symlink untuk file konfigurasi nginx yang baru dibuat untuk mengaktifkannya.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Jalankan perintah berikut untuk menguji file konfigurasi nginx untuk kesalahan sintaksis.
```
$ sudo nginx -t
```
  * Restart Nginx Web Server.
```
$ sudo systemctl restart nginx
```

### Tes PHP
  * Untuk memastikan bahwa Nginx dengan benar melayani halaman PHP, kami akan membuat file PHP untuk menguji konfigurasi.
  * Buat file info.php di direktori root Nginx Web Server dengan menjalankan perintah di bawah ini.
```
$ sudo nano /var/www/html/info.php
```
  * Tambahkan kode di bawah ini ke dalamnya dan simpan file.
```
<?php
phpinfo();
```
  * Buka browser web Anda dan ketik nama domain atau server IP publik diikuti oleh nama file php seperti http: // server \ _ip \ _or_domain/info.php. Anda akan melihat halaman di bawah ini.

{{< figure align=center src="images/info-php.png" alt="Halaman Info PHP">}}


## kesimpulan {#conclusion}
Dalam tutorial ini, kami membahas tentang cara menginstal dan mengkonfigurasi tumpukan lemp ** **. Seperti yang Anda lihat, mengkonfigurasi komponen tumpukan perangkat lunak sangat mudah. Selain itu, Anda dapat mulai membuat dan melayani aplikasi web dalam hitungan menit.
Akhirnya, [** containerize.com **][5] sedang dalam proses penulisan posting blog yang konsisten pada produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [** Web Server Solution ini **][6] kategori untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  *[** Tumpukan solusi server web open source terbaik **][7]
  *** [Alat forensik digital open source paling populer][8] **
  *** [Top 5 Open Source Message Antrian (MQ) Perangkat Lunak pada 2021][9] **
  *** [Perangkat Lunak Penyimpanan Cloud Terbaik dan Berbagi File][10] **
  *[** Cara menginstal dan mengamankan phpMyadmin dengan nginx di ubuntu **][11]
  *[** Cara menginstal beberapa versi PHP dengan nginx di ubuntu **][12]
  *[** Top 5 Lisensi Open Source Terbaik yang Disetujui Osi-Osi 2021 **][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
