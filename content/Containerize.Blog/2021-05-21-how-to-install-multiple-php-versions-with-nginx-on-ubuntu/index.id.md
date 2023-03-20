---
title: "Cara menginstal beberapa versi php dengan nginx di ubuntu" 
seoTitle: "Cara menginstal beberapa versi php dengan nginx di ubuntu" 
description: "Artikel ini menjelaskan cara menginstal beberapa versi PHP dengan Nginx di Ubuntu. Kami akan melalui petunjuk langkah demi langkah tentang cara menginstal PHP dengan Nginx." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Jika Anda ingin menggunakan beberapa versi PHP dengan NginX maka dalam artikel ini kami akan memandu Anda langkah demi langkah tentang cara menginstal PHP dengan Nginx di Ubuntu." 
url: /id/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP dengan Nginx beberapa versi PHP">}}


## Jika Anda ingin menggunakan beberapa versi PHP dengan NginX maka dalam artikel ini kami akan memandu Anda langkah demi langkah tentang cara menginstal PHP dengan Nginx di Ubuntu.
Artikel ini dalam kelanjutan dari seri kami tentang tutorial tentang Nginx. Sejauh ini kami telah membahas cara menggunakan nginx sebagai penyeimbang beban, cara menggunakan Nginx sebagai proxy terbalik. Dan sekarang tutorial ini mencakup pertanyaan lain yang menuntut "Cara menggunakan beberapa versi PHP dengan Nginx". Dalam tutorial ini, kami akan memandu Anda langkah demi langkah tentang cara menginstal PHP di Ubuntu, cara mengkonfigurasi PHP dengan Nginx, dan akhirnya bagaimana Anda dapat menginstal beberapa versi PHP dengan Nginx. Jadi, mari kita mulai!
  * [Instal nginx][1]
  * [Pasang beberapa versi PHP][2]
  * [Buat beberapa situs web dengan PHP][3]
  * [Konfigurasikan Nginx untuk menjalankan versi yang berbeda untuk situs web][4]
  * [Kesimpulan][5]

## Instal nginx {#nginx}
Nginx (diucapkan sebagai "engine-x") adalah server web open source yang sering digunakan sebagai proxy terbalik atau cache http. Ini tersedia untuk Linux secara gratis.
Untuk menginstal Nginx, gunakan perintah berikut:
```
sudo apt update
sudo apt install nginx
```
Setelah instalasi selesai, Anda dapat membuka "http: // localhost" di browser Anda dan Anda memiliki semua pengaturan.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Pasang PHP dengan Nginx">}}


## Instal beberapa versi PHP {#php}
** PHP ** (akronim rekursif untuk ** PHP: Hypertext Preprocessor **) adalah bahasa scripting serba guna yang populer dan populer yang banyak digunakan dan paling cocok untuk mengembangkan situs web dan aplikasi berbasis web. Ini adalah bahasa skrip sisi server yang dapat tertanam dalam HTML.
Saat ini, ada tiga versi yang didukung dari ** PHP **, yaitu ** PHP 5.6 **, ** 7.0, ** dan ** 8.0 **. Artinya ** PHP 5.3 **, ** 5.4, ** dan ** 5.5 ** semuanya mencapai akhir kehidupan; Mereka tidak lagi didukung dengan pembaruan keamanan. Jadi mari kita pasang PHP 7.0 dan PHP 7.2 dengan PHP-FPM.
Sebenarnya sebelum kita bergerak dengan instalasi mari kita kencangkan terlebih dahulu bahwa apa itu php-fpm. ** PHP-FPM ** (akronim dari ** FastCGI Process Manager **) adalah alternatif PHP (Hypertext Processor) alternatif yang sangat populer. PHP-FPM mencakup banyak fitur yang dapat terbukti bermanfaat untuk situs web yang menerima lalu lintas dalam volume besar.
Untuk menginstal PHP 7.0 dan 7.2 terlebih dahulu, Anda harus menambahkan repositori PHP ke server Anda untuk menginstal beberapa versi PHP. Anda dapat menambahkan repositori php ondrej dengan perintah berikut:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Setelah repositori mutakhir, instal PHP 7.0, PHP 7.2 dan PHP-FPM dengan perintah berikut:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Setelah instalasi selesai, periksa status PHP-FPM dengan perintah berikut:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Buat beberapa situs web dengan php {#web}
Halaman default ditempatkan di/var/www/html/lokasi. Anda dapat menempatkan halaman statis Anda di sini, atau menggunakan host virtual dan menempatkannya lokasi lain
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Selanjutnya buat file sampel index.php untuk SITE1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Sekarang buat file sampel index.php untuk situs2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Kemudian, ubah kepemilikan kedua situs web menjadi www-data:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## Konfigurasikan nginx {#configure}
Selanjutnya, Anda perlu membuat file host virtual nginx untuk domain Site1.containerize.com yang menggunakan PHP 7.0. Dan satu lagi untuk situs2.containerize.com yang menggunakan PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Tambahkan baris berikut:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Sekarang buat file kedua untuk situs2.containerize.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Kemudian, aktifkan kedua file host virtual dengan perintah berikut:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Akhirnya, restart layanan NginX dan PHP-FPM untuk menerapkan semua perubahan konfigurasi:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## kesimpulan {#conclusion}
Dalam tutorial ini kami menjelajahi cara beberapa versi PHP di Ubuntu. Kami belajar cara menginstal nginx. Kemudian kami menjelajahi cara mengatur dua situs web yang berbeda di Nginx. Dan akhirnya kami belajar cara mengkonfigurasi dua situs web yang berbeda dengan versi PHP yang berbeda dengan Nginx. Semoga tutorialnya membantu Anda.

## Mengeksplorasi
  * [Cara Mengatur dan Mengkonfigurasi Nginx sebagai Proxy Terbalik][6]
  * [Cara Menggunakan Nginx sebagai Load Balancer untuk Aplikasi Anda][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
