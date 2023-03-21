---
title: "Cara mengoptimalkan situs web Anda menggunakan kompresi gzip di nginx" 
seoTitle: "Cara mengoptimalkan situs web Anda menggunakan kompresi gzip di nginx" 
description: "Dalam artikel ini, kami akan membahas metode untuk mengoptimalkan kecepatan transfer situs web Anda dengan mengurangi ukuran file melalui kompresi GZIP di Nginx." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Tutorial ini memandu Anda tentang cara mengoptimalkan kinerja situs web Anda dan membuatnya cepat dengan mengurangi ukuran file menggunakan kompresi GZIP di Nginx." 
url: /id/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Tutorial ini memandu Anda tentang cara mengoptimalkan kinerja situs web Anda dan membuatnya cepat dengan mengurangi ukuran file menggunakan kompresi GZIP di Nginx.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Cara mengaktifkan kompresi gzip di nginx">}}

Artikel ini adalah kelanjutan dari serangkaian tutorial kami tentang Nginx. Sejauh ini kami telah membahas cara menggunakan nginx sebagai penyeimbang beban, cara menggunakan Nginx sebagai proxy terbalik. Dan sekarang tutorial ini mencakup pertanyaan lain yang menuntut “Bagaimana Mengoptimalkan Situs Web Anda Menggunakan Kompresi Gzip di Nginx”. Dalam tutorial ini, kami akan memandu Anda langkah demi langkah tentang cara mengaktifkan kompresi GZIP di Nginx. Jadi, mari kita mulai!
  * [Optimalisasi Situs Web dengan Kompresi][1]
  * [Apa itu kompresi gzip?][2]
  * [Bagaimana cara kerja kompresi gzip?][3]
  * [Aktifkan kompresi GZIP di nginx][4]
  * [Verifikasi Kompresi GZIP][5]
  * [Kesimpulan][6]

## Optimalisasi situs web dengan kompresi   {#Optimize}
Kinerja situs web tergantung pada sejumlah faktor. Salah satu faktor yang tergantung pada sebagian adalah ukuran semua file yang harus diunduh oleh browser pengguna dari server Anda. Mengurangi atau mengompresi ukuran file yang ditransmisikan dapat membuat situs web Anda memuat lebih cepat untuk pengguna. Ini juga dapat mengurangi tagihan untuk situs web Anda jika Anda membayar penggunaan bandwidth pada koneksi meteran. Jadi kompresi dapat memainkan peran yang sangat vital dalam optimasi situs web Anda.
Karena Google dan mesin pencari lainnya mempertimbangkan pengalaman pengguna situs web (UX) sebagai faktor penting dalam algoritma peringkat mereka. Menjadi lebih penting untuk meningkatkan dan mengoptimalkan situs web Anda untuk peringkat teratas. Di antara faktor -faktor terpenting yang harus diperhatikan adalah, kecepatan halaman dan waktu pemuatan. Dan, cara tercepat dan termudah untuk meningkatkan kecepatan dan kinerja situs web Anda adalah dengan memungkinkan kompresi GZIP di situs web Anda.

## Apa itu kompresi gzip?   {#what-gzip}
GZIP adalah format file **dan aplikasi perangkat lunak**  digunakan untuk kompresi file dan dekompresi. Server web atau perangkat lunak lain menggunakan kompresi GZIP untuk mengompres file data sebelum dikirim ke browser pengguna. Ini mengurangi waktu unduhan file yang membuat situs web Anda lebih cepat. Semua browser modern mendukung kompresi GZIP.
Penting juga untuk dicatat bahwa kompresi GZIP harus diaktifkan di server web Anda sebelum Anda dapat mengaktifkan kompresi file dan folder. Singkatnya, kita akan melihat cara mengaktifkan kompresi GZIP di Nginx.

## Bagaimana cara kerja kompresi GZIP?   {#how-gzip}
GZIP, metode kompresi paling populer, digunakan oleh server web dan browser untuk memampatkan dan mendekompres konten saat ditransmisikan melalui internet. Ini sebagian besar digunakan pada kode dan file teks, GZIP dapat mengurangi ukuran file JavaScript, CSS, dan HTML hingga 90%.
Secara default, kompresi GZIP tidak memampatkan gambar atau video. Inilah sebabnya mengapa sebagian besar alat uji kecepatan situs web seperti Google PageSpeed ​​Insights sangat merekomendasikan memungkinkan kompresi GZIP.
Ketika server web menerima permintaan untuk halaman web, server web memeriksa header permintaan untuk memeriksa apakah browser mendukung GZIP. Jika demikian, server menghasilkan markup untuk halaman sebelum menerapkan GZIP. GZIP mengubah markup HTML menjadi data terkompresi yang kemudian dikirim ke pengguna akhir. Ketika pengguna akhir menerima data terkompresi, browser mereka mendekompresnya.

## Aktifkan kompresi GZIP di nginx   {#enable-gzip}
Untuk mengubah konfigurasi Nginx GZIP, buka file konfigurasi Nginx utama di “_vi_” atau editor teks favorit Anda:
```
sudo vi /etc/nginx/nginx.conf
```
Temukan bagian Pengaturan _GZIP_, yang terlihat seperti ini:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Seperti yang Anda lihat, GZIP diaktifkan secara default dengan _GZIP di; _ tetapi ada pengaturan GZIP yang dikomentari lainnya.
Kami dapat mengaktifkan pengaturan _gzip_types_ untuk mengaktifkan kompresi pada jenis file yang ingin kami kompres. Misalnya
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Sekarang restart nginx untuk mengambil pengaturan baru yang berlaku.

## Verifikasi GZIP Compression   {#verify}
Sekarang kami telah mengaktifkan kompresi GZIP, mari kita memverifikasinya.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
Responsnya akan tetap sama karena kompresi telah diaktifkan untuk filetype itu:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## kesimpulan   {#conclusion}
Dalam artikel ini kami telah belajar bahwa Anda dapat menggunakan modul Nginx GZIP untuk mempercepat transfer file. Kami menunjukkan kepada Anda langkah demi langkah cara mengaktifkan kompresi GZIP di nginx menggunakan modul GZIP. Dokumentasi resmi untuk [Modul GZIP][7] mencantumkan arahan konfigurasi lain yang mungkin ingin Anda lihat. Semoga tutorial ini membantu Anda mengoptimalkan kinerja dan kecepatan situs web Anda.

## Mengeksplorasi
  * [Cara menginstal beberapa versi PHP dengan Nginx di Ubuntu][8]
  * [Cara Mengatur dan Mengkonfigurasi Nginx sebagai Proxy Terbalik][9]

  
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
