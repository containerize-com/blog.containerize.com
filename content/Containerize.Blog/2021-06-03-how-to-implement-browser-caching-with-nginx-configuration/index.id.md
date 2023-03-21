---
title: "Cara mengimplementasikan caching browser dengan konfigurasi nginx" 
seoTitle: "Cara mengimplementasikan caching browser dengan konfigurasi nginx" 
description: "Semakin cepat situs web, semakin besar kemungkinan pengunjung tetap tinggal. Dalam tutorial ini, kami akan mengimplementasikan caching browser dengan konfigurasi nginx." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Semakin cepat situs web, semakin besar kemungkinan pengunjung tetap tinggal. Artikel ini memandu Anda tentang cara mengimplementasikan caching browser dengan konfigurasi nginx." 
url: /id/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## Situs web yang lebih cepat memuat, semakin besar kemungkinan pengunjung tetap tinggal. Artikel ini memandu Anda tentang cara mengimplementasikan caching browser dengan konfigurasi nginx.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Cara mengimplementasikan caching browsr dengan konfigurasi nginx">}}

Dalam seri tutorial Nginx kami, kami telah membahas [cara menggunakan nginx sebagai penyeimbang beban][1], [Konfigurasikan nginx sebagai proxy terbalik][2], [gunakan beberapa versi php dengan nginx][3], dan [konversi htaccess revited review Aturan untuk Nginx menulis ulang arahan][4]. Dalam artikel hari ini, kami membahas topik yang sangat penting yang membantu bisnis untuk meningkatkan pengalaman pengguna mereka dengan memanfaatkan caching browser. Dalam tutorial ini, kami akan memandu Anda tentang cara mengimplementasikan caching browser dengan konfigurasi Nginx menggunakan modul header Nginx. Mari kita mulai!
  ***[leverage browser caching][5]** 
  *[**modul header nginx** ][6]
  *[**e-tage dan if-none-match** ][7]
  *[**Caching Leverage Browser dengan Konfigurasi Nginx** ][8]
  *[**Kesimpulan** ][9]

## leverage browser caching   {#browser-caching}
Semakin cepat situs web, semakin besar kemungkinan pengunjung tetap di situs web. Situs web dengan banyak gambar dan konten interaktif dimuat di latar belakang membuat situs web membuka tugas yang kompleks. Ini terdiri dari meminta banyak file berbeda dari server satu per satu. Meminimalkan jumlah permintaan ini adalah salah satu cara untuk mempercepat situs web Anda.
Salah satu metode untuk meningkatkan kinerja situs web adalah _Weveraging Browser Caching_. Caching browser memainkan peran besar dalam mekanisme cache untuk meningkatkan kecepatan halaman. File statis seperti CSS, JS, JPEG, PNG, dll yang digunakan untuk situs web dapat disimpan di komputer pengunjung untuk akses di masa mendatang. Setiap kali pengunjung menemukan halaman baru di situs web Anda, file di atas dapat diakses dari komputer pengunjung alih -alih server yang disediakan Anda, yang akan sangat meningkatkan kecepatan beban halaman.

Modul Header ## Nginx  {#header-module}
Modul _ngx \ _http \ _Headers_module_ memungkinkan menambahkan bidang header “_expires_” dan “_cache-control_”, dan bidang sewenang-wenang, ke header respons. Kita dapat menggunakan modul header untuk mengatur header HTTP ini. Modul header adalah modul inti nginx, yang berarti tidak perlu dipasang secara terpisah untuk digunakan.
Contoh konfigurasi terlihat seperti ini:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## e-tag dan if-none-match   {#etage}
Mari kita asumsikan kami memiliki beberapa file uji dengan ekstensi yang berbeda, mis. Test.html, test.jpg, test.css, dan test.js. Secara default, semua file akan memiliki perilaku caching default yang sama. Untuk memeriksa header respons file menggunakan perintah berikut untuk meminta file dari server nginx lokal kami dan menunjukkan header respons:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
Di baris kedua hingga terakhir, Anda akan menemukan header _etag_, yang berisi pengidentifikasi unik untuk revisi khusus file yang diminta ini. Jika Anda menjalankan perintah _curl_ terakhir berulang kali, Anda akan menemukan nilai Etag yang sama persis.
Saat menggunakan browser web, nilai _etag_ disimpan dan dikirim kembali ke server dengan header permintaan _if-none-match_ ketika pengguna menyegarkan halaman atau file yang sama diperlukan oleh browser dengan alasan apa pun.
Kita dapat mensimulasikan ini pada baris perintah dengan perintah berikut.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Perhatikan pengidentifikasi unik, itu harus cocok dengan nilai respons yang kami dapatkan dari panggilan _curl_ kami sebelumnya. Respons akan berbeda kali ini:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Kali ini, Nginx akan merespons dengan **304 tidak dimodifikasi** . Itu tidak akan mengirim file melalui jaringan lagi; Sebagai gantinya, itu akan memberi tahu browser bahwa ia dapat menggunakan kembali file yang sudah diunduh secara lokal. Ini berguna karena mengurangi lalu lintas jaringan. Tetapi browser masih harus melakukan panggilan HTTP untuk mendapatkan respons dari server, yang masih membutuhkan waktu.

## leverage browser caching dengan konfigurasi nginx   {#nginx-konfigurasi}
Dalam contoh kami sebelumnya, kami menjelaskan bagaimana e-tag dan jika tidak ada pertandingan membantu Anda mengurangi lalu lintas jaringan. Tetapi masalah dengan `etag` adalah bahwa browser selalu mengirim permintaan ke server yang menanyakan apakah ia dapat menggunakan kembali file yang di -cache. Dan ini masih membutuhkan waktu untuk mengajukan permintaan dan menerima tanggapan.
Sekarang dengan bantuan modul header Nginx, kami akan membuat browser untuk menyimpan beberapa file secara lokal tanpa secara eksplisit bertanya kepada server.
Tambahkan 3 baris berikut dalam file konfigurasi nginx Anda ke cache konten statis di nginx
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
Baris pertama menginstruksikan Nginx untuk mensembakan konten di browser klien selama 30 hari (30D). Setelah periode ini, permintaan baru dari pengguna akan menghasilkan validasi ulang cache dan pembaruan dari browser klien.
Anda dapat menempatkan baris di atas di _location_, _server_ atau _http_ blok.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Saat Anda menempatkannya di blok lokasi, hanya konten yang dilayani oleh lokasi yang akan di -cache. Dalam kasus di atas, hanya permintaan ke / statis / akan di -cache.
Jika Anda ingin menyimpan jenis file tertentu, Anda dapat melakukannya menggunakan blok lokasi.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
Dalam contoh di atas, kami caching berbagai jenis file seperti JS, JPG, CSS, dll.
Demikian pula, Anda dapat menempatkan konfigurasi cache di blok _server_ sebelum blok lokasi mana pun. Dalam hal ini, semua tanggapan dari server ini akan di -cache. Atau Anda dapat menempatkannya di blok _http_, dalam hal ini, semua permintaan server yang didukung oleh file konfigurasi Nginx akan di -cache.

## kesimpulan   {#conclusion}
Modul header Nginx dapat digunakan untuk menambahkan header sewenang-wenang ke respons, tetapi dengan benar mengatur header kontrol-cache adalah salah satu aplikasi yang paling berguna. Ini membantu Anda meningkatkan kinerja situs web, terutama untuk pengguna di jaringan dengan latensi yang lebih tinggi, seperti jaringan operator seluler. Dalam tutorial ini, kami belajar cara memanfaatkan caching browser dengan konfigurasi nginx. Semoga ini akan membantu Anda meningkatkan pengalaman pengguna di situs web Anda.

## Mengeksplorasi
  * [Cara menginstal beberapa versi PHP dengan nginx di ubuntu][3]
  * [Cara Mengatur dan Mengkonfigurasi Nginx sebagai Proxy Terbalik][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
