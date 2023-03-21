---
title: "Cara berlabuh WordPress | Docker WordPress" 
seoTitle: "Cara berlabuh WordPress | Docker WordPress" 
description: "Apa itu Docker & Docker Compose? Dalam artikel ini, kita akan belajar cara menginstal Docker, Docker Compose, dan cara berlabuh WordPress ke dalam wadah Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Perangkat lunak kontainer mengikat aplikasi, ketergantungannya dan membuat aplikasi dijalankan pada lingkungan komputasi apa pun. Mari kita pelajari cara merampok WordPress." 
url: /id/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Perangkat lunak kontainer menggabungkan aplikasi, ketergantungannya dan membuat aplikasi dijalankan pada lingkungan komputasi apa pun. Mari kita pelajari cara merampok WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


## Ringkasan
Selamat datang di posting blog lain di [blogging][1] kategori perangkat lunak open source. Kami telah menerbitkan beberapa artikel tentang topik -topik seperti [meningkatkan petunjuk Anda dengan integrasi CivicRM WordPress gratis][2], [Cara Membangun Situs Web Anda dengan WordPress dan Gatsby][3], dan beberapa lagi. Namun, artikel ini akan membawa wawasan dan detail lebih lanjut tentang platform blogging open source dan **perangkat lunak kontainer **. Kami akan melalui beberapa pertanyaan panas seperti apa itu Docker &  **Cara Menginstal Docker Compose**   dan kami akan belajar cara berlabuh WordPress.
Kontainerisasi telah menjadi tren utama dalam pengembangan perangkat lunak sebagai alternatif untuk virtualisasi. Ini melibatkan enkapsulasi atau menggabungkan kode perangkat lunak dan semua ketergantungannya sehingga dapat berjalan pada infrastruktur apa pun secara konsisten. Kontainerisasi memungkinkan pengembang untuk membuat dan menggunakan aplikasi lebih cepat dan lebih aman. Docker adalah aplikasi kontainerisasi paling populer yang digunakan di seluruh komunitas pengembang. Dalam tutorial ini, kita akan belajar cara berlabuh WordPress menggunakan Docker Compose. Jadi, mari kita mulai dengan poin -poin berikut.
  *[**Apa itu Docker?** ][4]
  *[**Mengapa Anda perlu berlabuh WordPress** ?][5]
  ***[Cara Menginstal Docker Compose][6]** 
  ***[Dockerize WordPress][7]** 
  ***[Kesimpulan][8]** 

## Apa itu Docker?   {#buruh pelabuhan}
Dengan kata-kata sederhana, Docker adalah open-source **perangkat lunak wadah**  yang melakukan virtualisasi lebih cepat dan lebih ringan. Sangat ringan sehingga wadah Docker dapat diluncurkan hanya dalam beberapa detik. Dan, Anda dapat dengan mudah menjalankan lusinan wadah Docker pada satu PC. Pengembang menggunakan Docker untuk membuat, menggunakan, dan menjalankan aplikasi dengan menggunakan wadah. Wadah memungkinkan pengembang untuk mengemas aplikasi dengan semua bagian yang dibutuhkan, seperti perpustakaan dan dependensi lainnya, dan menggunakannya sebagai satu paket. Dengan melakukan itu, pengembang dapat yakin bahwa aplikasi akan berjalan pada infrastruktur apa pun. Selain itu, ada pengembang besar dan komunitas pendukung yang selalu hidup untuk memberikan bantuan terbaik dalam relevansi apa pun. Docker telah menjadi komponen yang harus dimiliki dari perusahaan perangkat lunak apa pun karena fitur dan penggunaannya yang kuat.

## Mengapa Anda perlu berlabuh WordPress?   {#Mengapa}
Di bagian ini, kita akan tahu tentang kebutuhan di balik Dockerisasi WordPress. WordPress adalah perangkat lunak blogging open source terkemuka terkemuka yang sangat diadopsi oleh dunia teknologi. Namun, untuk menjalankan WordPress secara lokal, Anda memerlukan Apache/nginx, server MySQL, PHP, dan banyak dependensi lainnya. Dan penyebaran ke pementasan atau lingkungan produksi adalah mimpi buruk dalam hal mengelola dependensi tersebut. Kadang -kadang, itu menjadi kerumitan bagi pengembang dan mendukung insinyur untuk mengulangi penyebaran berulang kali karena menuntut waktu dan tenaga kerja.
Jadi, kontainerisasi dapat membantu Anda dengan ini. Yang Anda butuhkan hanyalah Docker - Instalasi itu sendiri membutuhkan waktu beberapa detik dan tidak diperlukan konfigurasi tambahan
Tidak masalah apakah itu adalah mesin dev, panggung, atau server langsung dan apa itu, Docker bekerja sama di mana -mana. Ini berarti Anda tidak perlu mencari bug yang, katakanlah, muncul di satu lingkungan dan tidak dapat direproduksi di negara lain.

## Cara Menginstal Docker Compose   {#install}

### Prasyarat
Anda dapat menggunakan Docker Compose untuk dengan mudah menjalankan WordPress di lingkungan yang terisolasi yang dibangun dengan wadah Docker. Panduan ini menunjukkan cara menggunakan Compose untuk mengatur dan menjalankan WordPress.
Docker Compose mengandalkan mesin Docker, jadi pastikan Anda memasang mesin Docker. Pada sistem desktop seperti Docker Desktop untuk Mac dan Windows, Docker Compose disertakan sebagai bagian dari pemasangan desktop tersebut. Namun, pada sistem Linux terlebih dahulu, pasang mesin Docker dengan mengikuti [panduan resmi] mereka [9].

### Instal Compose di Linux
Jalankan perintah ini untuk mengunduh rilis stabil Docker Compose saat ini:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Menerapkan izin yang dapat dieksekusi ke biner:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Instalasi Uji Dengan Menjalankan Perintah Versi:
```
docker-compose --version
```

### Tentukan DockerFile untuk WordPress
Hal pertama yang perlu kita lakukan adalah mendefinisikan bagaimana gambar kita akan terlihat dalam **_ Dockerfile _** . Ini adalah file teks yang ditambahkan ke direktori dengan sumber aplikasi Anda.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
“**/var/www/html/wordpress **” akan berisi konten penuh WordPress bersama dengan tema, plugin, dan konten. Jika repositori Anda hanya berisi tema atau plugin maka cukup tambahkan folder yang relevan.
Buat file docker-compose.yml yang memulai blog WordPress Anda dan instance MySQL terpisah dengan volume yang dipasang untuk kegigihan data:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Sekarang, jalankan perintah di direktori proyek Anda
```
docker-compose up -d
```
Ini berjalan **_ Docker-Compose up _**  dalam mode terpisah, menarik gambar Docker yang dibutuhkan, dan memulai wadah WordPress dan database.
Setelah wadah dimulai, Anda dapat membuka URL di browser web dan mulai menggunakan aplikasi Anda:
```
http://localhost:8000
```

## kesimpulan   {#conclusion}
Ini membawa kita ke akhir posting blog ini. Dalam artikel ini, kami belajar tentang apa itu Docker, **Cara Menginstal Docker Compose **. Kami juga belajar cara berlabuh WordPress menggunakan Docker-Compose. Selain itu, kami memperkenalkan Anda pada konsep di belakang Docker dan bagaimana Anda dapat mendefinisikan aplikasi multi-kontainer sederhana. Namun, perangkat lunak kontainer  **open source**   ini adalah opsi terkemuka untuk semua organisasi perangkat lunak. Oleh karena itu, artikel ini akan sangat membantu Anda jika Anda ingin memilih Docker untuk aplikasi Anda. Ada banyak artikel lain yang relevan dan perangkat lunak blogging yang tercantum di bagian "Jelajahi" di bawah ini.
Akhirnya, [containerize.com][10] menulis artikel tentang produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [blogging][1] untuk berita dan pembaruan reguler. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][11], [LinkedIn][12], dan [Twitter][13].

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [WordPress][14]
  * [Jekyll][15]
  * [Wacana][16]
  * [Ghost][17]
  * [Cara Dockerize WordPress dengan Docker Compose][18]
  * [Tingkatkan petunjuk Anda dengan integrasi WordPress civicrm gratis][2]
  * [Otomatis Sistem Tiket Menggunakan WordPress dan Osticket][19]
  * [Cara mengintegrasikan forum wacana dengan WordPress][20]
  * [Tingkatkan Lalu Lintas Pencarian Situs Web Dengan mengikuti 7 blog SEO teratas][21]
  * [Cara Membangun Situs Web Anda Dengan WordPress dan Gatsby][3]
  * [Cara Mengaktifkan Kompresi GZIP di WordPress untuk Pagpeed dan SEO yang lebih baik][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/id/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
