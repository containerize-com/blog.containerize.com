---
title: "Cara mengaktifkan kompresi gzip di wordpress | GZIP WordPress" 
seoTitle: "Cara mengaktifkan kompresi gzip di wordpress | GZIP WordPress" 
description: "Apakah Anda ingin mengaktifkan kompresi GZIP di WordPress untuk mempercepat situs web Anda? Dalam posting blog ini, kami akan belajar cara mengaktifkan kompresi di WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "Kecepatan halaman dan waktu pemuatan adalah faktor utama untuk peringkat yang lebih baik di mesin pencari. Kompresi GZIP dapat mewujudkannya dan memberikan keunggulan kompetitif." 
url: /id/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## Kecepatan halaman dan waktu pemuatan adalah faktor utama untuk peringkat yang lebih baik di mesin pencari. Kompresi GZIP dapat mewujudkannya dan memberikan keunggulan kompetitif.

{{< figure align=center src="images/Asset-1.png" alt="Aktifkan kompresi GZIP">}}


## Ringkasan
Karena Google dan mesin pencari lainnya mempertimbangkan pengalaman pengguna situs web (UX) sebagai faktor penting dalam algoritma peringkat mereka. Menjadi lebih penting untuk meningkatkan dan mengoptimalkan situs web Anda untuk peringkat teratas. Di antara faktor -faktor terpenting yang harus diperhatikan adalah, kecepatan halaman dan waktu pemuatan. Dan, cara tercepat dan termudah untuk meningkatkan kecepatan dan kinerja situs adalah dengan memungkinkan kompresi GZIP di situs web Anda. Ada kemungkinan host web Anda secara otomatis memungkinkan kompresi GZIP untuk Anda. Jika tidak, Anda harus melakukan tugas penting ini sendiri.
Dalam artikel ini, kami akan menunjukkan kepada Anda bagaimana dengan mudah mengaktifkan kompresi GZIP di WordPress. Mari kita mulai!
  *[** Apa itu kompresi gzip **?] [1]
  *[** Bagaimana cara kerja kompresi gzip? **] [2]
  *** [Bagaimana cara memverifikasi apakah kompresi gzip diaktifkan?] [3] **
  *** [Aktifkan kompresi GZIP di WordPress] [4] **
  *** [Kesimpulan] [5] **

## Apa itu kompresi gzip? {#Apa}
GZIP adalah format file ** dan aplikasi perangkat lunak ** digunakan untuk kompresi file dan dekompresi. Server web atau perangkat lunak lain menggunakan kompresi GZIP untuk mengompres file data sebelum dikirim ke browser pengguna. Ini mengurangi waktu unduhan file yang membuat situs web Anda lebih cepat. Semua browser modern mendukung kompresi GZIP.
Penting juga untuk dicatat bahwa kompresi GZIP harus diaktifkan di server web Anda sebelum Anda dapat mengaktifkan kompresi file dan folder. Singkatnya, kami akan melihat cara memverifikasi apakah server web Anda telah diaktifkan GZIP.

## Bagaimana cara kerja kompresi GZIP? {#bekerja}
GZIP, metode kompresi paling populer, digunakan oleh server web dan browser untuk memampatkan dan mendekompres konten saat ditransmisikan melalui internet. Ini sebagian besar digunakan pada kode dan file teks, GZIP dapat mengurangi ukuran file JavaScript, CSS, dan HTML hingga 90%. Secara default, kompresi GZIP tidak memampatkan gambar atau video. Untuk itu, Anda harus mengoptimalkan gambar untuk web di situs WordPress Anda. Inilah sebabnya mengapa sebagian besar alat uji kecepatan situs web seperti Google PageSpeed ​​Insights sangat merekomendasikan memungkinkan kompresi GZIP.
Ketika server web menerima permintaan untuk halaman web, server web memeriksa header permintaan untuk memeriksa apakah browser mendukung GZIP. Jika demikian, server menghasilkan markup untuk halaman sebelum menerapkan GZIP. GZIP mengubah markup HTML menjadi data terkompresi yang kemudian dikirim ke pengguna akhir. Ketika pengguna akhir menerima data terkompresi, browser mereka mendekompresnya.

## ** Bagaimana cara memverifikasi apakah kompresi gzip diaktifkan? ** {#verify}
Host web Anda mungkin mengaktifkan kompresi di WordPress secara default. Namun, ini tidak selalu terjadi. Anda dapat menentukan untuk melihat apakah Anda sudah mengaktifkan kompresi GZIP menggunakan Chrome 'DevTools.
Buka situs Anda di browser chrome, lalu klik kanan di mana saja di halaman dan pilih ** Periksa ** untuk ** Buka alat pengembang **.
Selanjutnya, arahkan ke tab ** jaringan ** dan klik URL utama situs web dari bagian "Nama". Pilih tab ** header **, lalu gulir ke bawah untuk menemukan header respons ** ** Bagian:

{{< figure align=center src="images/gzip-determine.gif" alt="Verifikasi Pengkodean Konten">}}

Di sana, Anda akan melihat apakah kompresi GZIP diaktifkan atau tidak.

## Mengaktifkan kompresi GZIP di WordPress {#Enable}
Jika Anda telah menentukan bahwa ** kompresi GZIP WordPress belum diaktifkan **, ada beberapa metode yang dapat Anda gunakan untuk menjalankannya. Cara termudah adalah dengan menggunakan beberapa plugin WordPress seperti [WP Rocket] [6], [WP Super Cache] [7], atau [W3 Total Cache] [8]. Namun, Anda dapat melakukan ini secara manual di level server baik dengan file .htaccess atau dengan memperbarui konfigurasi nginx Anda.

### dengan mengedit file .htaccess
Salah satu cara paling umum untuk mengaktifkan kompresi WordPress GZIP adalah dengan ** mengedit file _.htaccess_ Anda **. Namun, ini melibatkan risiko melanggar sesuatu. Ini adalah file server yang sensitif, dan satu langkah yang salah dapat menyebabkan banyak masalah.
Untuk mengurangi risiko, pastikan untuk ** menyimpan salinan file asli ** sebelum membuat perubahan. File _.htaccess_ harus di folder root ** situs web Anda **. Setelah Anda membuka _.htaccess_, tambahkan kode berikut di bawah bagian yang ditandai oleh tag `# begin WordPress` dan`# end WordPress`
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
** Simpan file ** dan unggah ke server situs Anda. Setelah selesai, periksa apakah GZIP diaktifkan menggunakan DevTools Chrome seperti yang dijelaskan di atas.

## Aktifkan kompresi GZIP di nginx
Untuk ** Mengaktifkan kompresi **, sertakan arahan ** gzip ** dengan parameter ON. ** gzip ** on; Secara default, ** nginx ** mengompres respons hanya dengan teks tipe mime/html. Untuk mengompres respons dengan tipe MIME lainnya, sertakan arahan GZIP_TYPES dan daftar jenis tambahan.
Anda dapat mengaktifkan kompresi GZIP di WordPress dengan ** membuka file _nginx.conf_ Anda ** dan menambahkan kode berikut:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## kesimpulan {#conclusion}
Ini adalah akhir dari tutorial GZIP WordPress ini. Ada banyak cara untuk mengoptimalkan situs web Anda untuk kecepatan dan kinerja. Dalam tutorial GZIP WordPress ini, kami telah melalui apa itu kompresi GZIP, pentingnya kompresi GZIP, dan langkah -langkah pemasangannya. Selain itu, ada banyak tautan relevan yang disebutkan di bagian "Jelajahi" di bawah ini.
Akhirnya, [containerize.com] [9] menulis artikel tentang produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [Blogging] [10] untuk berita dan pembaruan reguler.

## Mengeksplorasi
  * [Matomo] [11]
  * [Masuk akal] [12]
  * [WordPress] [13]
  * [Jekyll] [14]
  * [Cara Dockerize WordPress dengan Docker Compose] [15]
  * [Bagaimana alat analisis bisnis gratis membantu bisnis Anda] [16]
  * [Top 5 Open Source Business Intelligence Tools of 2021] [17]
  * [Cara Menginstal Plugin di WordPress | Forum Vanilla] [18]
  * [Tingkatkan petunjuk Anda dengan integrasi wordpress civicrm gratis] [19]
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
