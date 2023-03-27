---
title: "Bagaimana melakukan pemantauan aplikasi web dengan statping" 
seoTitle: "Bagaimana melakukan pemantauan aplikasi web dengan statping" 
description: "Statping adalah salah satu alat pemantauan situs web terbaik yang memungkinkan Anda memantau semua layanan. Rerender halaman status yang indah untuk waktu kerja layanan showcase." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Secara otomatis memantau situs web Anda, aplikasi web, API dengan alat pemantauan gratis dan pameran layanan uptime dengan sistem halaman status sumber terbuka." 
url: /id/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Secara otomatis memantau situs web Anda, aplikasi web, API dengan alat pemantauan gratis dan showcase layanan uptime dengan sistem halaman status sumber terbuka.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Pemantauan Aplikasi Web">}}

Statping adalah **perangkat lunak halaman status sumber terbuka**dan salah satu alat pemantauan situs web**terbaik** . Ini juga digunakan untuk memantau layanan seperti HTTP, TCP, UDP, ICMP dan GRPC. Statping secara otomatis mengambil layanan, memantau mereka, dan membuat halaman status yang indah. Ini adalah cross-platform dan Anda dapat menginstalnya di sistem operasi Liunx, Mac dan Windows. Lebih lanjut, ini memungkinkan untuk menggunakan sistem basis data MySQL, Postgres atau SQLite untuk menyimpan informasi. Selain itu, ia datang dengan aplikasi seluler di luar kotak untuk perangkat iPhone dan Android.
Mari kita lihat fitur inti dari statping.
* **Pemantauan Layanan** - Statping memungkinkan Anda untuk dengan mudah melacak semua layanan HTTP, TCP, UDP, GRPC, dan ICMP Anda.
* **Pemberitahuan** -Statping mendukung sebagian besar aplikasi pihak ketiga utama untuk menerima pemberitahuan.
* **Aplikasi Seluler** - Gunakan aplikasi gratis untuk perangkat iPhone & Android dan mengelola semuanya saat bepergian.
* **OAuth Authenticatio** n - Mendukung otentikasi OAuth untuk layanan populer seperti GitHub, Google, Slack, dan penyedia OpenID khusus. Gunakan fitur ini dan tingkatkan keamanan.
Kami akan membahas topik -topik berikut dalam tutorial ini.
  * [Menginstal di Linux][1]
  * [Konfigurasikan Layanan SystemD][2]
  * [Buat Layanan untuk Pemantauan][3]
  * [Kesimpulan][4]

## Menginstal di Linux {#Installing}

Jalankan perintah di bawah untuk instalasi statping.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Konfigurasikan Layanan SystemD {#Configure}

Menyiapkan Layanan SystemD adalah cara terbaik untuk memastikan bahwa server statping Anda dapat reboot secara otomatis bila perlu. Untuk membuat layanan SystemD, ikuti langkah -langkah di bawah ini.
  * Pertama, jalankan perintah di bawah ini untuk membuat file baru.
```
sudo nano /etc/systemd/system/statping.service
```
  * Salin kode di bawah ini dan tempel di dalamnya.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * Akhirnya, gunakan perintah di bawah ini untuk mengaktifkan dan memulai layanan SystemD.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## Buat layanan untuk pemantauan {#Create}

  * Buka browser Anda, masukkan URL untuk masuk ke instalasi statping Anda.
  * Klik tautan Layanan di Navigasi Top. Ini akan menunjukkan kepada Anda halaman layanan yang terlihat seperti di bawah ini.

{{< figure align=center src="images/statping-dashboard.png" alt="Daftar Pemantauan Layanan Web">}}

  * Klik tombol Buat untuk menambahkan layanan baru untuk pemantauan. Isi bidang yang diperlukan seperti nama layanan, jenis layanan, periksa interval, titik akhir layanan (URL) dll.

## Kesimpulan {#Kesimpulan}

Kami belajar tentang statping, cara menginstalnya di Linux, dan cara membuat layanan SystemD dalam tutorial ini. Selanjutnya, kami telah membuat layanan baru untuk memantau dan memperkenalkan Anda tentang berbagai fitur. Kami berharap panduan ini akan membantu Anda dalam mulai menggunakan statping untuk melakukan **pemantauan layanan web**dan**pemantauan aplikasi web** .
Akhirnya, [ **containerize.com**][5] sedang dalam proses penulisan posting blog yang konsisten pada produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [**status** ini**][6] untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
* [ **Perangkat Lunak Halaman Status Sumber Terbuka Teratas Untuk 2020** ][7]
* [ **Statping** ][8]
* [ **cap** ][9]
* [ **Monitoror** ][10]
* [ **Staytus** ][11]
* [ **UppTime** ][12]
* [ **StatusFy** ][13]



[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
