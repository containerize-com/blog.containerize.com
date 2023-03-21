---
title: "Cara Mengatur Perangkat Lunak Meja Bantuan Online Menggunakan Osticket" 
seoTitle: "Cara Mengatur Perangkat Lunak Meja Bantuan Online Menggunakan Osticket" 
description: "Kelola semua permintaan dukungan Anda di satu tempat menggunakan Osticket Help Desk. Konversi pertanyaan yang dibuat melalui email, telepon, dan formulir menjadi tiket berbasis web." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Kelola semua permintaan dukungan Anda di satu tempat menggunakan Osticket. Konversi pertanyaan yang dibuat melalui email, telepon, dan formulir menjadi tiket berbasis web sederhana." 
url: /id/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Kelola semua permintaan dukungan Anda di satu tempat menggunakan Osticket. Konversi pertanyaan yang dibuat melalui email, telepon, dan formulir menjadi tiket berbasis web sederhana.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Cara Mengatur Perangkat Lunak Meja Bantuan Online Menggunakan Osticket">}}

Osticket adalah solusi perangkat lunak bantuan help of desk open source. Osticket Helpdesk adalah alternatif gratis untuk sistem dukungan pelanggan yang mahal dan kompleks. Ini sederhana, ringan, andal, berbasis web, dan mudah diatur dan digunakan. Bagian terbaiknya adalah, benar -benar gratis. Kami akan membahas bagian berikut dalam tutorial ini:
  * [Apa itu osticket?][1]
  * [Pro dan kontra Osticket][2]
  * [Bagaimana cara mengatur osticket?][3]
  * [Kesimpulan][4]

## Apa itu Osticket?   {#osticket}
Osticket menyediakan panel kontrol ramah pengguna dan komponen pelaporan waktu-nyata. Pengguna dapat masuk dan membuat tiket dalam beberapa langkah mudah. Mereka dapat membuat tiket melalui situs web, email, atau telepon Anda. Tiket yang masuk kemudian akan disimpan dan ditugaskan ke agen. Agen akan mendapatkan pemberitahuan email dan akan menanggapi pertanyaan untuk membantu menyelesaikan masalah mereka. Pelanggan dan agen dapat membahas detail dan kemajuan di bagian komentar. Pelanggan dapat melacak permintaan dan kemajuan mereka melalui portal pelanggan bawaan yang disediakan oleh perangkat lunak Help Desk online ini.

## pro dan kontra Osticket   {#pros}

## ## Pro
  * Osticket sangat ramah pengguna untuk pengguna akhir dan agen dukungan.
  * Dikumpulkan dengan fitur -fitur yang kaya, Osticket memiliki semua yang Anda butuhkan tanpa terlalu rumit.
  * Osticket sepenuhnya gratis dan perangkat lunak manajemen tiket open source.
  * Ini ringan, aman, andal, dan mudah menginstal perangkat lunak manajemen meja bantuan.
  * Fleksibel untuk berjalan di semua server web populer termasuk Apache, Nginx, LightTPD dan IIS, dll.

## ## kontra
  * Osticket tidak memberikan detail analisis tiket dan statistik seperti sistem meja bantuan berbayar lainnya.
  * Antarmuka pengguna ini sangat sederhana dan mendasar jika dibandingkan dengan sistem pendukung lainnya.

## Bagaimana cara menginstal Osticket?   {#Bagaimana}
Ikuti langkah -langkah ini untuk menginstal Osticket dengan Nginx di Ubuntu 18.04 LTS.
  * Buat direktori baru untuk Osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Unduh Pengaturan Osticket Terbaru Menggunakan Menggunakan Perintah berikut.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Setelah itu, buat file konfigurasi dari file sampel menggunakan perintah ini.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Kemudian ubah kepemilikan direktori Web Osticket menjadi pengguna dan grup 'www-data'.
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Setelah itu, buat file konfigurasi host virtual baru.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Kemudian tempel kode konfigurasi ke dalamnya.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * Ubah nama server sesuai nama domain Anda. Simpan file dan keluar.
  * Sekarang tautkan file host virtual ini ke folder yang diaktifkan situs menggunakan perintah berikut
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Tes untuk kesalahan konfigurasi menggunakan perintah berikut
```
nginx -t
```
  * Sekarang restart layanan nginx menggunakan perintah berikut
```
sudo systemctl restart nginx

```
  * Sekarang masukkan nama domain Anda di browser web apa pun untuk memulai Wizard Instalasi seperti yang ditunjukkan pada gambar berikut

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Cara Mengatur Perangkat Lunak Meja Bantuan Online Menggunakan Osticket">}}

  * Aktifkan ekstensi yang diperlukan dari Php.ini dan klik "Lanjutkan".
  *Isi semua informasi yang diperlukan dan klik "**Instal sekarang"**  Tombol.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Cara Mengatur Perangkat Lunak Meja Bantuan Online Menggunakan Osticket">}}

  * Dalam pengaturan database, masukkan DBName, nama pengguna, dan kata sandi.
  * Akhirnya klik tombol “Instal Sekarang”
  * Setelah instalasi selesai, itu akan menampilkan halaman dengan pesan sukses.
  * Selanjutnya, ubah izin ost-config.php untuk menghapus akses menulis dengan menjalankan perintah berikut:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## kesimpulan   {#conclusion}
Osticket paling cocok untuk perusahaan dengan anggaran rendah atau mereka yang menginginkan sistem meja bantuan sederhana dan bukan yang kompleks. Ini sederhana, ringan, dapat diandalkan, open source, dan benar -benar perangkat lunak meja bantuan online gratis. Yang menjadikan Osticket alternatif yang bagus untuk sistem dukungan pelanggan berbiaya lebih tinggi. Untuk mempelajari lebih lanjut tentang fitur Osticket dan panduan instalasi, silakan lihat tutorial berikut.

## Mengeksplorasi
[Open Source Terbaik dan Perangkat Lunak Bantuan IT IT Gratis][5]
[Helpdesk dan Sistem Layanan Pelanggan Berbasis Tiket Gratis Populer][6]
[Panduan Pemula untuk Mengembangkan Plugin Osticket][7]
[Cara menerapkan multi-tenancy in osticket][8]
[Otomatis Sistem Tiket Menggunakan WordPress dan Osticket][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
