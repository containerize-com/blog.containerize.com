---
title: "Cara memantau server web nginx dengan nginx amplify" 
seoTitle: "Cara memantau server web nginx dengan nginx amplify" 
description: "Nginx Amplify adalah agen pemantauan gratis untuk server web nginx dan aplikasi PHP. Artikel ini adalah tentang cara memantau server web nginx dengan nginx amplify" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Monitor NGINX, aplikasi PHP, sistem operasi dengan Nginx memperkuat dan meningkatkan konfigurasi. Artikel ini memandu Anda untuk mengatur dan mengkonfigurasi Nginx Amplify." 
url: /id/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Monitor NGINX, Aplikasi PHP, Sistem Operasi dengan Nginx memperkuat dan meningkatkan konfigurasi. Artikel ini memandu Anda untuk mengatur dan mengkonfigurasi Nginx Amplify.

{{< figure align=center src="images/nginx-post.png" alt="Pantau server web Nginx dengan Nginx Amplify">}}


## Ringkasan {#Install}

**Pemantauan server web**sangat penting untuk situs web lalu lintas tinggi. Agen pemantauan****akan merekam metrik penting tentang server web secara teratur. Metrik kritis tersebut dapat digunakan untuk mengoptimalkan konfigurasi Nginx. Ini akan membantu Anda dalam meningkatkan kinerja server web dan aplikasi Anda.
Dalam posting blog ini, kami akan membahas bagian berikut untuk pemantauan **nginx** Alat Sumber Terbuka.
  * [Server web nginx][1]
  * [Nginx amplify][2]
  * [Instal Nginx Amplify][3]
  * [Metrik Pemantauan][4]

## Server Web Nginx {#Nginx}

[Nginx][5] adalah server web sumber terbuka dan terbuka. Ini sederhana, ringan, dan mudah dikonfigurasi daripada Apache. Nginx Web Server juga berfungsi sebagai proxy terbalik, load balancer, proxy mail, dan cache http. Ini berfungsi untuk protokol HTTP, HTTPS, SMTP, POP3, dan IMAP. Nginx adalah server web berkecepatan tinggi, andal, dan efisien memori yang meningkatkan kinerja aplikasi Anda. Lebih lanjut, telah semakin populer dan sekarang dianggap sebagai server web yang paling populer. Selain itu, Nginx cocok untuk semua jenis situs web termasuk situs dan aplikasi lalu lintas tinggi. Ini dapat diinstal dan dikonfigurasi pada hampir semua sistem operasi.

### Instal Nginx
  * Jalankan perintah di bawah ini untuk menginstal Nginx Web Server.
```
sudo apt update
sudo apt install nginx
```
  * Setelah Anda selesai dengan instalasi, buka browser Anda dan ketik "http: // ip \ _of \ _your_server". Anda akan melihat halaman selamat datang di bawah ini.

{{< figure align=center src="images/nginx-home.png" alt="Selamat Datang di Nginx!">}}


## Nginx Amplify {#Amplify}

Nginx Amplify adalah alat pemantauan gratis untuk Nginx Open Source, Nginx Plus, dan PHP-FPM. Ini adalah alat berbasis SaaS untuk pemantauan dan aplikasi Nginx Server. Pengguna dapat dengan mudah melacak aset infrastruktur, memantau kinerja, dan menyesuaikan konfigurasi. Ini memberikan informasi komprehensif yang dapat digunakan pengguna untuk mengoptimalkan server web dan konfigurasi aplikasi. Ini bertindak sebagai agen di server yang meng -host aplikasi Nginx dan PHP. Nginx Amplify adalah ringan, push log dan memantau data untuk memperkuat server tanpa mengurangi kinerja. Anda dapat melihat metrik di dasbor amplify. Agen tersedia untuk semua sistem operasi utama seperti RHEL, Centos, Ubuntu, Debian, Fedora, dan FreeBSD. Nginx Amplify memiliki tiga komponen utama seperti Nginx Amplify Agent, Nginx Amplify Web UI, dan Nginx Amplify Backend.
* **Nginx Amplify Agent** - Ini beroperasi pada sistem yang sedang dipantau. Semua komunikasi dienkripsi menggunakan SSL/TLS.
* **Nginx Amplify Web UI** - Web UI Menampilkan Metrik untuk Server Web, Aplikasi, dan Sistem Operasi.
* **Nginx Amplify Backend** - Ini adalah komponen kunci yang diimplementasikan sebagai SaaS dan bertanggung jawab untuk mengumpulkan metrik, memelihara basis data, menjalankan mesin analitik, dan menyediakan API inti.

## Instal Nginx Amplify {#Install}

Ikuti panduan langkah demi langkah di bawah ini untuk pemasangan Nginx Amplify di Ubuntu.
  * Pertama, Anda perlu membuat akun di nginx [situs web][6].
  * Setelah login, Anda akan melihat layar di bawah ini di situs web Nginx Amplify. Sekarang, sambungkan ke server Anda melalui SSH dan gunakan perintah yang diberikan dalam langkah -langkah di bawah ini.

{{< figure align=center src="images/amplify-1.png" alt="Instal Nginx Amplify">}}

  * Jalankan perintah di bawah ini untuk mengunduh agen.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Jalankan perintah berikut untuk menginstal Nginx Amplify di server. Ganti xxxxx dengan kunci API yang sebenarnya. Anda dapat menemukannya di Nginx Amplify Dashboard.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Setelah selesai dengan instalasi, Anda dapat memeriksa status dengan perintah berikut.
```
$ sudo service amplify-agent status
```
  * Sekarang, Anda perlu mengkonfigurasi agen Nginx Amplify untuk melihat metrik.

{{< figure align=center src="images/amplify-2-1.png" alt="Konfigurasi Pemantauan Nginx">}}

  * Buat file baru dengan konfigurasi stub_status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Salin kode di bawah ini dan simpan file.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Mulai ulang server web Nginx untuk mengaktifkan modul Stub_Status.
```
$ sudo service nginx restart
```
  * Sekarang, buka file konfigurasi nginx dengan perintah berikut.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Tambahkan kode di bawah ini ke dalamnya dan simpan.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Mulai ulang Layanan Nginx untuk menerapkan semua perubahan.
```
$ sudo service nginx restart
```
  * Selanjutnya, navigasikan ke Dashboard Amplify dan klik tombol ‘Selesai’. Anda harus melihat halaman berikut.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Pemantauan Server Web">}}

* Anda dapat melihat statistik dalam format yang lebih mudah dan mudah dibaca dengan mengklik tab **Tinjauan** . Ini akan terlihat seperti seperti yang ditunjukkan di bawah ini.

{{< figure align=center src="images/amplify-overview.png" alt="Statistik pemantauan nginx">}}


## Metrik Pemantauan {#Monitoring}

Nginx Amplify Agent mengumpulkan jenis data berikut:
* **Metrik nginx** -Ini mengumpulkan berbagai metrik terkait nginx dari stub_status, file log, dan dari status proses.
* **Metrik Sistem** - Nginx Amplify memantau berbagai metrik sistem seperti penggunaan CPU, penggunaan memori, lalu lintas jaringan, dan banyak lagi.
* **Metrik PHP-FPM** -Jika mengidentifikasi proses master PHP-FPM yang berjalan, ia mendapat metrik dari status pool php-fpm.
* **Metrik MySQL** - Kumpulan variabel status global MySQL dapat digunakan oleh agen untuk mengumpulkan metrik.
* **Nginx Metadata** - Agen mengumpulkan data tentang instance nginx seperti data paket, membangun informasi, jalur biner, membangun pengaturan konfigurasi, dan banyak lagi.
* **Sistem Metadata** - Agen mengumpulkan data pada sistem operasi, termasuk nama host, waktu kerja, rasa OS, dan detail lainnya.

## Kesimpulan
Kami telah melewati Nginx Web Server dan Nginx Amplify Advanced Monitoring Agent dengan sangat rinci. Nginx Amplify cukup sederhana untuk diatur dan dikonfigurasi. Selain itu, kami telah pergi ke metrik kritis Nginx Amplify dapat melacak ke **Monitor nginx** . Metrik penting ini dapat digunakan untuk meningkatkan konfigurasi server dan aplikasi Nginx Anda.
Akhirnya, [containerize.com][7] sedang dalam proses yang konsisten dalam menulis posting blog tentang produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [Solusi Server Web Solution][8] ini untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Cara Menggunakan Nginx sebagai Load Balancer untuk Aplikasi Anda][9]
  * [Cara Mengatur dan Mengkonfigurasi Nginx sebagai Proxy Terbalik][10]



[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
