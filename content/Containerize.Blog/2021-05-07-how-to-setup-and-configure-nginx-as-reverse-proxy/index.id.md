---
title: "Cara mengatur dan mengonfigurasi nginx sebagai proxy terbalik" 
seoTitle: "Cara mengatur dan mengonfigurasi nginx sebagai proxy terbalik" 
description: "Tutorial ini adalah tentang cara mengatur dan mengkonfigurasi Nginx sebagai proxy terbalik. Nginx dianggap sebagai salah satu server web proxy terbalik sumber terbuka paling populer." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx adalah server web open-source yang juga dapat bertindak sebagai proxy terbalik. Tutorial ini akan membantu Anda mempelajari cara mengatur dan mengkonfigurasi Nginx sebagai proxy terbalik." 
url: /id/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## Nginx adalah server web open-source yang juga dapat bertindak sebagai proxy terbalik. Tutorial ini akan membantu Anda mempelajari cara mengatur dan mengkonfigurasi Nginx sebagai proxy terbalik.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Gunakan Nginx sebagai server proxy terbalik">}}


## Ringkasan:
Nginx dan Apache adalah dua server web open source paling populer **sering digunakan dengan PHP. Proxy atau gateway terbalik bertindak sebagai koneksi antara klien dan server. Informasi pertukaran klien dan server satu sama lain untuk bekerja terus menerus dan efisien. Proksi terbalik yang paling umum adalah  **nginx dan apache**   dan keduanya dapat dikonfigurasi pada mesin virtual yang sama saat hosting banyak situs web. Proxy terbalik melindungi server web dari serangan dan gateway koneksi muncul ke klien sebagai seperti server web biasa di mana tidak ada konfigurasi proxy reverse nginx khusus yang diperlukan. Klien mengirimkan permintaan sementara proxy terbalik memutuskan ke mana harus meneruskan informasi yang diminta dan kemudian mengirimkan hasil output akhir ke klien.
Setelah banyak penghargaan untuk seri kami tentang tutorial Redis, kami menerima banyak permintaan untuk memulai seri pada tutorial Nginx. Jadi minggu lalu kami mulai dengan tutorial tentang cara menggunakan [Nginx Reverse Proxy Load Balancer][1] untuk aplikasi Anda. Contoh konfigurasi proxy terbalik Nginx sederhana ini memberikan banyak manfaat kinerja keandalan dan proxy terbalik NGINX. Nginx Simple Reverse Proxy adalah server proxy Nginx open source yang paling aktif digunakan di Internet. Dalam tutorial ini, kami akan **mengkonfigurasi dan mengeksplorasi cara menggunakan Nginx sebagai proxy terbalik**  dan cara mengaturnya sebagai proxy terbalik pada satu server. Jadi, mari kita mulai!
  * Apa itu server proxy?
  * Maju vs proxy terbalik
  * Mengkonfigurasi proxy terbalik
  * Apa keuntungan dari proxy terbalik nginx?
  * Kesimpulan

## Apa itu server proxy?
**Server proxy**  bertindak sebagai gerbang antara Anda dan internet. Ini adalah server perantara yang memisahkan pengguna akhir dari situs web yang mereka jelajahi. Server proxy menyediakan berbagai tingkat fungsionalitas, keamanan, dan privasi sesuai dengan kasus penggunaan Anda, atau kebijakan perusahaan.
Dengan server proxy, lalu lintas internet mengalir melalui server proxy dalam perjalanan ke alamat yang Anda minta. Permintaan kemudian kembali melalui server proxy yang sama (kebanyakan), dan kemudian server proxy meneruskan data yang diterima dari situs web kepada Anda.

## Maju vs Proxy Terbalik:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="Nginx sebagai server proxy terbalik">}}

Secara umum ketika kita berbicara tentang proxy, sebagian besar waktu yang kita maksud adalah proxy maju. **Proxy Maju**  sangat bagus untuk menghindari pembatasan negara, seperti Great Firewall of China. Klien hanya terhubung ke sumber daya yang diblokir melalui proxy maju. Proksi maju dapat menyembunyikan identitas pengguna dengan mengubah alamat IP mereka. Jadi, pada dasarnya Nginx sebagai proxy depan duduk di antara klien dan internet, sehingga server akhir tidak mengetahui klien yang sebenarnya.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx sebagai proxy terbalik">}}

**Proxy terbalik  **juga bertindak sebagai perantara tetapi mereka duduk di sisi lain dari koneksi. Proxy terbalik sangat baik di **  Load Balancing** , optimasi web, dan keamanan. Proksi terbalik biasanya digunakan untuk mendistribusikan beban di antara beberapa server, dengan mulus menunjukkan konten dari berbagai situs web, atau memberikan permintaan untuk diproses ke server aplikasi melalui protokol selain HTTP.

## Mengkonfigurasi Nginx sebagai proxy terbalik:
Ketika Nginx membuat permintaan, ia mengirimkan permintaan ke server proksi yang ditentukan, mengambil respons, dan mengirimkannya kembali ke klien. Dimungkinkan untuk permintaan proxy ke server HTTP atau server non-HTTP menggunakan protokol yang ditentukan. Protokol yang didukung termasuk **Fastcgi, UWSGI, SCGI, dan memcached** .
Untuk meneruskan permintaan ke server proksi http, arahan **proxy_pass  **ditentukan di dalam lokasi ** ** . Misalnya:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Contoh konfigurasi proxy Nginx ini hasil konfigurasi dalam memberikan semua permintaan yang diproses di lokasi ini ke server proksi di alamat yang ditentukan. Alamat ini dapat ditentukan sebagai nama domain atau alamat IP. Alamat juga dapat mencakup port:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Anda bahkan dapat meneruskan header yang dimodifikasi atau kustom ke server proksi di Nginx **proxy \ _set \ _header**  host di bawah ini dalam contoh.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx juga mendukung buffering yang membantu meningkatkan kinerja. Dengan buffering diaktifkan nginx akan menyimpan respons yang diterimanya dari server proksi selama klien membutuhkannya untuk diunduh.
Alih -alih membuat semua permintaan ke satu server, Anda juga dapat **mengatur beberapa server backend**  dan membiarkan nginx balance memuat antara server proksi tersebut. Kami sudah membahas ini di tutorial kami tentang [Nginx Load Balancing][1].

## Apa keuntungan dari proxy terbalik nginx?
Berikut ini adalah manfaat dari pengaturan server proxy terbalik nginx:
  *Nginx adalah salah satu server web open source **paling populer**  yang juga merupakan alat proxy paling populer. Nginx Reverse Proxy Config sangat sederhana untuk diimplementasikan karena memberi pengguna keamanan kelas atas terhadap serangan server web DDOS dan DOS.
  *Ini membantu membuat beban yang seimbang di antara situs web lalu lintas tinggi dan server backend seperti **Dropbox, Netflix, dan Zynga** .
  * Ini menyediakan mekanisme caching untuk server back-end yang lebih lambat dan situs lalu lintas tinggi untuk mengatur host virtual proxy reverse nginx. Itu tidak memerlukan pengaturan proses baru untuk setiap permintaan web dari sisi klien.
  * Ini juga bertindak sebagai server proxy terbalik untuk beberapa protokol seperti HTTP, HTTPS, TCP, UDP, SMTP, IMAP, dan POP3 dll.
  *Nginx dapat **menangani lebih dari 10000 koneksi**  dengan jejak memori rendah dan dapat mengoperasikan beberapa server web pada satu alamat IP.
  * Ini juga membantu untuk menyimpan konten halaman dan melakukan enkripsi SSL untuk menurunkan beban dari server host web. Nginx adalah salah satu server web terbaik untuk meningkatkan kinerja konten statis dengan mengompresnya dan meningkatkan waktu pemuatan.
  * Ini adalah alat yang sangat baik untuk beberapa lingkungan server dan juga dapat berguna untuk tugas yang berbeda seperti menjaga server tunggal anonim.

## Kesimpulan:
Dalam tutorial Proxy Reverse Nginx ini **, kami mengeksplorasi apa itu server proxy nginx dan mengatur proxy terbalik nginx. Perbedaan antara Forward vs Reverse Proxy Server Nginx. Kami juga belajar dengan contoh cara mengatur Nginx sebagai proxy terbalik. Sekarang Anda sepenuhnya memahami cara menginstal **konfigurasi proxy terbalik Nginx langkah demi langkah** . Tutorial di atas membantu Anda memulai dengan pengaturan proxy terbalik. Dalam tutorial mendatang kami, kami akan membahas lebih banyak topik menarik tentang Nginx.
_Apa server _reverse proxy_ favorit Anda yang mudah, dinamis, dan berfitur lengkap?. Apakah Anda memiliki pertanyaan tentang leading_ _Open Source _Reverse Prox__y, **memuat penyeimbang untuk http dan TCP**  Aplikasi berbasis_?, Silakan hubungi [2][2].

## Mengeksplorasi
Anda mungkin menemukan lebih banyak terkait artikel di bawah ini
  * [Cara Mengkonfigurasi Apache Sebagai Proksi Terbalik untuk Ubuntu/Debian][3]
  * [Aman Nginx dengan Let's Encrypt on Ubuntu 20.04][4]
  * [Cara Menggunakan Nginx sebagai Load Balancer untuk Aplikasi Anda][1]
  * [Cara Menginstal dan Mengamankan PHPMyAdmin dengan Nginx di Ubuntu][5]
  * [Mengkonfigurasi Dukungan HTTP/2 di Nginx di Ubuntu/Debian][6]
  * [Pasang beberapa versi PHP dengan Nginx di Ubuntu][7]
  * [Pengaturan Nginx dengan penumpang di server produksi AWS][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
