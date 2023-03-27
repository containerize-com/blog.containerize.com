---
title: "Cara mengonversi htaccess menulis ulang aturan ke nginx menulis ulang arahan" 
seoTitle: "Cara mengonversi htaccess menulis ulang aturan ke nginx menulis ulang arahan" 
description: "Nginx tidak mendukung. Htaccess menulis ulang aturan, sehingga pengembang harus mengonversi aturan tersebut menjadi arahan menulis ulang NGINX. Mari kita pelajari cara melakukan konversi ini." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "Nginx tidak mendukung aturan penulisan ulang HTACCESS, dan pengembang perlu mengubah aturan tersebut menjadi arahan menulis ulang NGINX. Mari kita pelajari cara melakukan konversi ini." 
url: /id/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## Nginx tidak mendukung aturan penulisan ulang htAccess, dan pengembang perlu mengubah aturan tersebut menjadi arahan penulisan ulang nginx. Mari kita pelajari cara melakukan konversi ini.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Konversi .htaccess menulis ulang aturan ke arahan nginx">}}

Dalam tutorial terakhir kami, kami belajar [cara menginstal beberapa versi PHP dengan nginx di ubuntu][1]. Apache adalah salah satu server web paling populer tetapi akhir -akhir ini, Nginx telah memantapkan dirinya sebagai pesaing untuk Apache. Tetapi Nginx tidak mendukung aturan penulisan ulang HTACCESS. Jadi, dalam artikel ini, kita akan belajar cara mengonversi HtAccess menulis ulang aturan menjadi Nginx ReRite Arahan. Mari kita mulai!
*  **[Nginx Menulis Ulang Aturan][2]**  
* [  **. Htaccess menulis ulang aturan**  ][3]
* [  **Konversi .htaccess menulis ulang aturan ke nginx mengutarakan arahan ulang**  ][4]
* [  **Kesimpulan**  ][5]

## Nginx menulis ulang aturan {#nginx}

Menulis ulang aturan mengubah bagian atau semua URL dalam permintaan klien, biasanya untuk memberi tahu klien bahwa sumber daya yang mereka minta sekarang berada di lokasi yang berbeda, atau untuk mengontrol aliran pemrosesan di dalam Nginx. Misalnya untuk meneruskan permintaan ke server aplikasi saat konten perlu dihasilkan secara dinamis. Petunjuk Try_Files sering digunakan untuk tujuan ini.
Dua arahan untuk penulisan ulang nginx umum adalah _Return_ dan _rewrite_, dan _try_files directive_ adalah cara praktis untuk mengarahkan permintaan ke server aplikasi.
Petunjuk pengembalian adalah yang lebih sederhana dari dua arahan umum. Anda melampirkan pengembalian dalam konteks server atau lokasi.
Misalnya, inilah contoh yang sangat sederhana yang mengarahkan klien ke nama domain baru menggunakan arahan _return_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Tetapi bagaimana jika Anda perlu melakukan perbedaan rumit antara URL, ambil elemen dalam URL asli, atau mengubah atau menambahkan elemen di jalur? Anda dapat menggunakan arahan _rewrite_ dalam kasus seperti itu.
Berikut adalah aturan penulisan ulang sampel Nginx yang menggunakan arahan penulisan ulang. Ini cocok dengan URL yang dimulai dengan string /lagu dan kemudian menyertakan /media /atau /audio /direktori di suatu tempat nanti di jalur. Ini menggantikan elemen -elemen tersebut dengan / mp3 / dan menambahkan ekstensi file yang sesuai, .mp3 atau .ra. Variabel $ 1 dan $ 2 menangkap elemen jalur yang tidak berubah. Sebagai contoh,/unduh/cdn-west/media/file1 menjadi /download/cdn-west/mp3/file1.mp3. Jika ada ekstensi pada nama file (seperti .flv), ekspresi mencentang dan menggantinya dengan .mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess menulis ulang aturan {#apache}

File .htaccess mengontrol sejumlah cara situs web dapat diakses, diblokir, dan dialihkan. Ini melakukan ini menggunakan serangkaian satu atau lebih. Htaccess menulis ulang aturan. Penulisan ulang ini dieksekusi oleh modul MOD_REWRITE Apache.
MOD_REWRITE menyediakan cara untuk memodifikasi permintaan URL yang masuk, secara dinamis, berdasarkan aturan ekspresi reguler. Ini memungkinkan Anda untuk memetakan URL apa pun ke struktur URL internal Anda dengan cara apa pun yang Anda suka. Ini juga digunakan untuk membuat URL eksternal Anda bersih dan kemudian memetakannya ke URL internal yang tampak jelek.
Misalnya, mengikuti. Htaccess menulis ulang aturan redricts non www URL ke URL www.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## Konversi .htaccess menulis ulang aturan ke nginx menulis ulang arahan {#convert}

Seperti yang kami tunjukkan dalam contoh kami di atas untuk mengarahkan URL non-WWW ke URL WWW, mari kita konversi aturan yang sama. HTACCESS TRIFECTE TRIOTE menjadi NGINX RERITE DANRECTIF.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Jadi di sini kami membuat dua blok _server_ terpisah, satu untuk _yourdomain.com_ dan yang lainnya untuk _www.yourdomain.com_. Dan di blok _server_ untuk _yourdomain.com_ kami menggunakan arahan _Return_ untuk mengarahkan URL non-www ke URL www.
Pengalihan yang sama yang kami lakukan dengan arahan pengembalian, juga dapat dilakukan dengan arahan penulisan ulang tetapi tidak dianjurkan.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
Demi kejelasan lebih lanjut, mari kita mengubah aturan htaccess wordpress menjadi nginx try_files directive.
[WordPress.org Distributes][6] Default dasar  **. HtAccess**  File dengan yang berikut. HtAccess menulis ulang aturan yang memungkinkan Permalinks Pretty:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
Inilah arahan nginx try_files yang dikonversi
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Kesimpulan {#conclusion}

Dalam tutorial ini, kami mengeksplorasi aturan penulisan ulang Apache yang ditulis ulang dan bagaimana kami dapat mengubahnya. Htaccess menulis ulang aturan menjadi Nginx Rerite Arahan. Kami selanjutnya mengeksplorasi berbagai arahan nginx yang dapat digunakan untuk menulis ulang URL. Kami juga memberikan contoh aturan penulisan ulang untuk Nginx dan Apache. Semoga tutorialnya bermanfaat untuk Anda.

## Mengeksplorasi
  * [Cara menginstal beberapa versi PHP dengan Nginx di Ubuntu][1]
  * [Cara Mengatur dan Mengkonfigurasi Nginx sebagai Proxy Terbalik][7]



 [1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [2]: #nginx
 [3]: #apache
 [4]: #convert
 [5]: #conclusion
 [6]: https://codex.wordpress.org/htaccess
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
