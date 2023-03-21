---
title: "Cara menginstal dan mengamankan phpMyadmin dengan nginx di ubuntu" 
seoTitle: "Cara menginstal dan mengamankan phpMyadmin dengan nginx di ubuntu" 
description: "PHPMyAdmin adalah perangkat lunak manajemen basis data sumber terbuka yang ditulis dalam PHP. Kami akan belajar cara menginstal phpMyadmin dengan nginx dan mengelola mysql melalui phpMyadmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PHPMyAdmin adalah alat manajemen basis data antarmuka web grafis open source yang ditulis dalam PHP. Dalam tutorial ini, kami akan belajar cara menginstal phpMyadmin dengan nginx." 
url: /id/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PHPMyAdmin adalah alat open source antarmuka Web Graphical Web Database Management Tool yang ditulis dalam PHP. Dalam tutorial ini, kami akan belajar cara menginstal phpMyadmin dengan nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Cara menginstal dan mengamankan phpMyadmin dengan nginx di ubuntu">}}


## **Ringkasan**
PHPMYADMIN adalah alat manajemen basis data sumber terbuka dan terbuka yang menawarkan kepada pengguna antarmuka web untuk mengelola server MySQL atau MariaDB melalui antarmuka intuitif. Ini adalah salah satu perangkat lunak yang didukung secara luas yang ditawarkan oleh sebagian besar penyedia hosting populer untuk membiarkan administrator web untuk membuat basis data di phpMyadmin dan mengelola basis data, menjalankan pernyataan SQL, impor dan mengekspor data dengan mudah. Anda akan dapat mengakses database MySQL atau MariaDB Anda di PHPMyAdmin dengan Nginx melalui antarmuka web grafis dengan mudah, berjalan di samping lingkungan pengembangan PHP.
Dalam panduan ini, kami akan menggambarkan langkah -langkah cara menginstal dan mengamankan phpMyadmin dengan Nginx di Ubuntu 20.04. Anda perlu menginstal dan mengkonfigurasi phpMyAdmin di Ubuntu Server untuk membiarkannya bekerja dengan database dan tabel MySQL dengan mudah. Jadi, mari kita pelajari cara menginstal dan mengamankan phpMyadmin dengan nginx di ubuntu 20.04 / 20.10:
  * Prasyarat
  * Pasang phpMyAdmin
  * Mengkonfigurasi database
  * Buat tautan simbolis
  * Mengakses phpMyadmin
  * Buat superuser mysql
  * Amankan phpMyadmin
  * Kesimpulan

## Langkah 1: Prasyarat   {#id-prasyarat}
Untuk mengikuti panduan ini, Anda akan memerlukan server Ubuntu 20.04 yang berjalan di komputer lokal Anda atau di server jarak jauh dengan prasyarat.
  * Anda harus mengakses ke server sebagai pengguna non-root dengan hak istimewa sudo dan firewall UFW yang diaktifkan.
  * Diasumsikan bahwa Anda telah menginstal Nginx, MySQL dan PHP di Ubuntu.
  * Karena phpMyAdmin menggunakan kredensial MySQL untuk mengautentikasi sehingga Anda juga harus menginstal sertifikat SSL/TLS untuk memungkinkan lalu lintas terenkripsi antara server dan klien.
Dengan itu, mari kita mulai menginstal dan mengamankan phpMyAdmin untuk terhubung ke server MySQL untuk mengakses database melalui antarmuka web.

## Langkah 2: Instal phpMyAdmin   {#id-1-install-phpMyAdmin}
Pastikan Anda telah berhasil menginstal semua prasyarat di sistem Anda sebelum menginstal phpMyAdmin di Ubuntu 20.04. Mulailah dengan memperbarui daftar paket:
```
sudo apt update 
```
Sekarang, jalankan perintah berikut untuk menginstal paket phpmyadmin dari repositori Ubuntu default di Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
Tekan  **y **  dan  **masukkan **  ketika diminta untuk melanjutkan. Jika Anda diminta untuk memilih server web, karena tidak ada opsi untuk  **nginx **  seperti di bawah ini, tekan  **tab **  untuk memilih OK dan kemudian  **masukkan **  untuk melanjutkan tanpa memilih server web.

{{< figure align=center src="images/mysql-setup.png" alt="Instal dan Aman PHPMyAdmin untuk Nginx di Ubuntu 20.04">}}


## Langkah 2: Konfigurasikan database   {#id-1-install-phpMyAdmin}
Selanjutnya, pilih  **ya **  dan tekan  **ENTER **  Untuk menginstal dan mengatur database dengan menggunakan alat dbconfig-common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Cara mengonfigurasi mysql dengan phpMyadmin">}}

Kata sandi aplikasi MySQL digunakan secara internal oleh phpMyAdmin untuk berkomunikasi dengan database MySQL. Masukkan kata sandi baru untuk phpMyAdmin DBMS untuk mendaftar sebagai database baru, pilih OK dan tekan ENTER untuk melanjutkan.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Cara mengkonfigurasi mysql untuk phpMyadmin">}}

Anda akan diminta untuk mengonfirmasi kata sandi, memasukkan kata sandi yang sama, pilih  **OK **  dan tekan  **ENTER ** . Selamat! PHPMyAdmin telah berhasil diinstal pada sistem Anda.

## Langkah 4: Buat tautan simbolik   {#id-2-create-simbolik-link}
Ada beberapa cara cara mengkonfigurasi NGINX untuk melayani file phpMyAdmin. Jika blok server domain Anda sudah diatur untuk melayani permintaan PHP maka Anda harus membuat tautan simbolik dari file instalasi phpmyadmin nginx/usr/share/phpMyadmin ke direktori root dokumen domain Anda. Lokasi default root dokumen Nginx di Ubuntu 20.04/20.10 harus/var/www/html/dan itu bisa berbeda tergantung pada pengaturan INS Anda. Root dokumen Anda dapat ditemukan misalnya di /var/www/example.com/public_html.
Selanjutnya, kami akan membuat tautan simbolis dari direktori phpMyadmin/usr/share/phpMyadmin ke root dokumen Anda. Di sini kami akan berasumsi bahwa root dokumen kami adalah/var/www/html/dan kami hanya akan menambahkan phpMyadmin ke akhir ini. Ini akan memungkinkan kami untuk mengakses phpMyadmin di url example.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Langkah 5: Mengakses phpMyAdmin   {#id-3-test-phpMyAdmin}
Anda sekarang harus dapat mengakses antarmuka web PHPMyAdmin dengan mengunjungi nama host/domain server Anda atau alamat IP publik diikuti oleh domain.com/phpmyadmin di browser web favorit Anda. Misalnya http://example.com/phpmyadmin atau http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
Pada server Ubuntu yang berjalan dengan MySQL 5.7 dan kemudian, Anda tidak akan dapat masuk ke database phpMyAdmin gratis menggunakan akun root default MySQL dan akan mendapatkan kesalahan seperti _ “Akses ditolak untuk pengguna 'root'@'localhost'” _. Sebaliknya, Anda harus membuat akun superuser baru hanya untuk phpMyadmin. Selanjutnya, kami akan membuat akun root MySQL untuk masuk ke phpMyadmin.

## Langkah 6: Buat MySQL SuperUser   {#ID-4-create-mysql-superuser}
Di Terminal, mulailah dengan masuk ke MySQL menggunakan kata sandi MySQL Root Anda yang mungkin telah membuat kata sandi root ketika Anda menginstal database phpmyadmin mysql untuk pertama kalinya.
```
sudo mysql -u root -p
```
Setelah login ke MySQL, tambahkan superuser MySQL baru dengan nama pengguna pilihan Anda. Dalam contoh ini kita menyebutnya Yasiradmin. [Klik di sini untuk menghasilkan kata sandi yang kuat][2] dan ganti \ _password baru di bawah ini.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Sekarang berikan hak istimewa superuser kepada pengguna baru kami Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Sekarang keluar sesi MySQL. Anda sekarang harus dapat mengakses phpMyadmin menggunakan kredensial superuser baru ini.

{{< figure align=center src="images/image.png" alt="Cara Masuk PHPMyAdmin di Ubuntu 20.04">}}

Sangat disarankan agar Anda mengatur beberapa keamanan tambahan untuk phpMyadmin untuk mengamankan phpMyadmin nginx. Anda harus dapat mengubah dan mengakses URL PHPMyAdmin ke sesuatu seperti URL yang tidak jelas.

## Langkah 7: Amankan phpMyadmin   {#id-6-secure-phpMyadmin-direkomendasikan}
Selanjutnya, kami ingin mengatur otentikasi di Nginx untuk memberikan lapisan keamanan tambahan. Kami sekarang akan menginstal apache2-utils, yang dapat menghasilkan file .htpasswd yang berfungsi dengan server NginX dan APACHE2.
```
sudo apt install apache2-utils
```
Setelah diinstal, kami dapat menghasilkan file .htpasswd. Ubah nama pengguna pilihan Anda. [Menghasilkan kata sandi][3] dan tetap aman.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Sekarang akan ada file .htpasswd yang berisi nama pengguna dan kata sandi terenkripsi Anda. Anda dapat memeriksa ini dengan perintah di bawah ini:
```
cat /etc/nginx/.htpasswd
```
Anda harus melihat sesuatu seperti nama pengguna: $ apr1sdfsdf4435sdtsklfwmmg1sfdsdgg4
Kami sekarang perlu menambahkan 2 arahan ke file konfigurasi NGINX kami. Lokasi file konfigurasi dapat bervariasi tergantung pada instalasi Anda, meskipun jalur file default biasanya di/etc/nginx/situs-tersedia/default. Jika Anda mengatur beberapa domain maka file konfigurasi Anda mungkin berada di suatu tempat seperti /etc/nginx/sites-available/example.com
Dalam contoh ini, kami akan mengasumsikan file konfigurasi nginx adalah di/etc/nginx/situs-tersedia/default. Buka file untuk mengeditnya.
```
sudo nano /etc/nginx/sites-available/default
```
Gulir ke bawah dan cari blok lokasi dan tempel di blok baru di bawahnya dengan nama folder phpMyadmin Anda yang tidak jelas, dalam contoh ini Aspose_hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Simpan File dan Keluar (tekan Ctrl + X, tekan Y dan kemudian tekan ENTER). Periksa apakah file konfigurasi nginx valid, jika tidak server dapat macet saat restart dengan menjalankan perintah.
```
sudo nginx -t
```
Jika valid, muat ulang konfigurasi nginx.
```
sudo service nginx reload
```
Sekarang saat mengunjungi contoh.com/aspose_hidden, Anda harus disajikan dengan jendela otentikasi.

{{< figure align=center src="images/auth3.png" alt="Cara mengamankan phpMyadmin">}}

Anda semua selesai dengan instalasi phpMyAdmin di Ubuntu Server.

## kesimpulan:   {#id-what-next}
Selamat, Anda telah berhasil menginstal PHPMyAdmin dengan Nginx untuk Ubuntu 20.04 / 20.10 Server dan sekarang dapat mengelola MySQL melalui phpMyAdmin. Sekarang, Anda dapat mulai membuat database MySQL, pengguna, tabel, melakukan kueri MySQL dan berbagai operasi lainnya.
Jika Anda memiliki pertanyaan, jangan ragu untuk memberi tahu saya di bawah di bagian komentar.

## Mengeksplorasi
Anda mungkin juga menyukai artikel yang lebih terkait di bawah ini:
  * [Cara Mengkonfigurasi Apache Sebagai Proksi Terbalik untuk Ubuntu/Debian][4]
  * [Cara mengamankan dan mengenkripsi Nginx dengan Let's Encrypt on Ubuntu 20.04][5]
  * [Cara Mengkonfigurasi Dukungan HTTP/2 di Nginx di Ubuntu/Debian][6]
  * [Cara Mengatur Nginx Dengan Penumpang di Server Produksi AWS][7]
  * [Cara Menginstal dan Mengkonfigurasi OwnCloud dengan Apache di Ubuntu][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
