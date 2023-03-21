---
title: "Cara Mengkonfigurasi Apache Sebagai Proxy Terbalik untuk Ubuntu/Debian" 
seoTitle: "Cara Mengkonfigurasi Apache Sebagai Proxy Terbalik untuk Ubuntu/Debian" 
description: "Konfigurasi Proxy Reverse Apache Langkah demi langkah memungkinkan Anda menjalankan satu atau lebih server ujung belakang di belakang server proxy dengan mod_proxy di Ubuntu/Debian Linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxy memungkinkan Anda menjalankan satu atau lebih server back-end di belakang server proxy. Inilah cara mengkonfigurasi proxy terbalik apache pada sistem Ubuntu/Debian." 
url: /id/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Proxy Reverse memungkinkan Anda menjalankan satu atau lebih server back-end di belakang server proxy. Inilah cara mengkonfigurasi proxy terbalik apache pada sistem Ubuntu/Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Instal dan konfigurasikan proxy terbalik apache">}}


## **Ringkasan**
Proxy Reverse Apache memungkinkan semua lalu lintas dan meneruskannya untuk menjalankan satu atau lebih server atau wadah backend di belakang server proxy, tanpa mengeksposnya secara publik. Server web back-end dapat berupa server HTTP APACHE2 atau Open Source seperti Nginx. APACHE2 HTTP Server adalah salah satu server web open source paling populer yang sedang digunakan saat ini.
Ada banyak alasan untuk menginstal dan mengonfigurasi server proxy. Misalnya, proxy terbalik dapat membantu Anda menambahkan keamanan, untuk menyeimbangkan beban, membatasi akses ke lokasi tertentu untuk mencegah serangan dan banyak lagi. Artikel ini menjelaskan cara menginstal dan mengkonfigurasi konfigurasi proxy reverse langkah demi langkah untuk server https di ubuntu/debian:
  * Menginstal apache2
  * Konfigurasikan Apache2
  * Mengaktifkan modul proxynya
  * Aktifkan SSL
  * Restart Apache2
  * Kesimpulan

## Langkah 1: Instal apache2
Menginstal APACHE2 sangat sederhana dan mudah dijalankan. Untuk melakukan instalasi, jalankan perintah di bawah ini dengan sederhana:
pembaruan sudo apt-get
sudo apt-get install apache2
{{_LINE_25_}}
Setelah menginstal APACHE2 di sistem Anda, gunakan perintah SystemCTL berikut di Debian Linux atau Ubuntu Linux Version Ubuntu untuk berhenti, mulai, aktifkan dan restart Apache2 untuk selalu restart ketika server booting.
sudo systemctl stop apache2.service
Sudo Systemctl Mulai Apache2.Service
Sudo Systemctl Aktifkan Apache2.service
sudo systemctl restart apache2.service
{{_LINE_31_}}
Anda dapat melihat status server web menggunakan perintah berikut:
Sudo Systemctl Status Apache2.Service
{{_LINE_34_}}
Untuk memeriksa pengaturan APACHE2, buka browser Anda dan telusuri ke hostname server atau alamat IP sistem Anda dan Anda akan melihat halaman uji default APACHE2 seperti yang ditunjukkan di bawah ini. Saat Anda melihatnya, maka Apache2 berfungsi seperti yang diharapkan. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Instal dan konfigurasikan proxy proxy terbalik apache untuk ubuntu">}}


## Langkah 2: Konfigurasikan Apache2 sebagai proxy terbalik
Apache2 berhasil diinstal dan siap digunakan. Anda sekarang dapat mengkonfigurasi APACHE2 untuk bekerja sebagai proxy ubuntu apache2. Apache2 Proxy Module **ProxyPass  **dan **  Fungsi ProxyPassReverse  **memberikan proxy terbalik. Untuk menggunakan **  proxypass  **dan **  proxypassreverse** , Anda harus terlebih dahulu tahu bahwa di mana Anda ingin mengarahkan lalu lintas situs.
Server Proxy Reverse APACHE2 akan mendengarkan semua lalu lintas di port http default, yang merupakan port 80 dalam pengaturan sederhana. Server back-end yang meng-host konten situs web akan mendengarkan di port khusus dan kemungkinan besar port 8080.
Dalam artikel blog ini, kami akan mengatur Apache2 untuk mendengarkan di port 80 dan kemudian mengarahkan lalu lintas ke server back-end yang mendengarkan port 8080. Jalankan perintah di bawah ini untuk membuat file proxy virtualhost yang disebut apache2proxy.conf.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Kemudian tambahkan blok kode berikut dalam file apache2proxy.conf dan kemudian simpan.
{{_LINE_43_}}
        Servername example.com
        ServeralIas www.example.com
        Serveradmin webmaster@example.com
        ErrorLog $ {apache_log_dir} /error.log
        CustomLog $ {APACHE_LOG_DIR} /Access.log Gabungan
        ProxyRequests Off
{{_LINE_50_}}
          Pesanan tolak, izinkan
          Izinkan dari semua
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        ProxypassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Order izin, tolak
          Izinkan dari semua
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
File apache2proxy.conf berisi nama server Anda serta proxy_pass di mana lalu lintas akan diarahkan ketika diterima oleh server proxy http.

## Langkah 3: Aktifkan proxy apache2
APACHE2 Web Server sekarang diinstal dan berhasil diatur. Apache memiliki banyak modul bundel yang tersedia yang dibundel di dalamnya. Modul ini tidak diaktifkan dalam instalasi APACHE2 segar. Pertama-tama kita perlu mengaktifkan modul yang kita perlukan untuk mengaktifkan modul APACHE MOD_PROXY yang diperlukan dan beberapa modul tambahannya untuk mendukung berbagai protokol jaringan. Jalankan perintah terdaftar di bawah ini untuk mengaktifkan modul proxy HTTP -nya.
Proxy Sudo A2Enmod
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
Sekarang aktifkan situs VirtualHost dan restart APACHE2 untuk mengaktifkan Muat Ulang Konfigurasi Modul APACHE2.
sudo a2ensite apache2proxy.conf
sudo systemctl restart apache2.service
Luncurkan browser web pilihan Anda dan navigasikan ke nama host server Anda seperti example.com. Anda sekarang akan diproksi ke server Apache2 Anda di port default yaitu 8080.

## Langkah 4: Aktifkan SSL   {#block-07b86d83-dca0-4924-b991-206719c342eb}
Jika Anda ingin mengaktifkan modul SSL proxy reverse apache, maka jalankan perintah di bawah ini untuk mengaktifkan proxy https proxy proxy apache reverse pass:
Sudo A2Enmod SSL
Ini akan memberikan dukungan HTTP Reverse HTTP ke HTTPS yang aman ke server backend.

## Langkah 5: Restart Apache2   {#blok-836bb4ff-17ad-4317-8ECB-153104BD28A7}
Untuk membuat perubahan ini berlaku, restart Apache dengan menjalankan perintah di bawah ini:
sudo systemctl restart apache2.service
Selamat! Anda telah berhasil menginstal dan mengonfigurasi proxy terbalik APACHE2 pada sistem Linux Anda.

## **Kesimpulan:** {#4a1a}
Dalam tutorial ini, kami mengeksplorasi dan membahas apa itu server proxy dan konfigurasi proxy reverse apache langkah demi langkah. Kami juga belajar cara mengatur dan mengkonfigurasi APACHE2 sebagai proxy terbalik pada sistem Linux. Dalam tutorial mendatang kami, kami akan membahas topik yang lebih menarik tentang Apache dan tumpukan solusi server web lainnya.

## Mengeksplorasi
Anda mungkin juga menyukai artikel yang lebih terkait di bawah ini:
  * [Cara][1][Instal dan Aman PHPMyAdmin dengan Nginx di Ubuntu][2]
  * [Cara Mengatur Nginx Dengan Penumpang di Server Produksi AWS][3]
  * [Mengkonfigurasi Dukungan HTTP/2 di Nginx di Ubuntu/Debian][4]
  * [Aman dan enkripsi Nginx dengan Let's Encrypt on Ubuntu 20.04][5]
  * [Cara Menginstal dan Mengkonfigurasi OwnCloud dengan Apache di Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/id/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
