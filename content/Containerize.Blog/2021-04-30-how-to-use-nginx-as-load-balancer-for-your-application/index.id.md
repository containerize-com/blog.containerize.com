---
title: "Cara menggunakan nginx sebagai penyeimbang beban untuk aplikasi Anda" 
seoTitle: "Cara menggunakan nginx sebagai penyeimbang beban untuk aplikasi Anda" 
description: "Nginx adalah server web open-source yang populer. Ini terkenal dengan kinerja tinggi dan skalabilitas. Dalam tutorial ini, kita akan belajar menggunakan Nginx sebagai penyeimbang beban" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx populer karena kinerja dan skalabilitasnya yang tinggi. Ini adalah server web open source #1. Dalam tutorial ini, kami akan belajar menggunakan Nginx sebagai penyeimbang beban." 
url: /id/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## Nginx populer karena kinerja tinggi dan skalabilitasnya. Ini adalah server web open source #1. Dalam tutorial ini, kami akan belajar menggunakan Nginx sebagai penyeimbang beban.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Cara menggunakan nginx sebagai penyeimbang beban">}}

Situs web lalu lintas tinggi modern melayani ratusan ribu, dan dalam beberapa kasus jutaan permintaan bersamaan dari pengguna atau klien dan mengembalikan teks, gambar, video, atau data aplikasi yang benar, semuanya dengan cepat dan andal. Untuk memenuhi kebutuhan volume tinggi ini, dan daya komputasi, Anda membutuhkan lebih banyak server. Dengan lebih banyak server, Anda memerlukan cara untuk memuat keseimbangan lalu lintas antara server ini. Dalam tutorial blog ini, kami akan mengeksplorasi apa itu penyeimbang beban dan bagaimana kami dapat menggunakan Nginx sebagai penyeimbang beban.
Untuk mengonfigurasi nginx load balancing sebagai prasyarat, Anda harus memiliki setidaknya dua host dengan perangkat lunak server web yang diinstal dan dikonfigurasi untuk melihat keunggulan penyeimbangan beban dengan Nginx. Jika Anda sudah memiliki satu host yang berjalan diatur maka duplikatnya dengan membuat gambar khusus dan menggunakannya ke server web baru. Jadi, mari kita pelajari cara mengatur konfigurasi balancing load Nginx langkah demi langkah untuk server cloud Anda.!
* **[server web nginx][1]** 
* **[Load Balancer][2]** 
* **[Pengaturan Nginx sebagai Load Balancer (Round Robin)][3]** 
* **[tentang arahan hulu yang berbeda][4]** 
* **[Kesimpulan][5]** 

## Server Web Nginx {#webserver}

Nginx adalah server web open-source berkinerja tinggi. Selain kemampuan server HTTP -nya, Nginx juga dapat berfungsi sebagai server proxy untuk email (IMAP, POP3, dan SMTP) dan proxy terbalik dan untuk memuat Nginx saldo untuk server HTTP, TCP, dan UDP. Ini meningkatkan kinerja, keandalan, dan keamanan aplikasi Anda. Populer untuk set fitur yang kaya, konfigurasi sederhana, dan konsumsi sumber daya rendah.
Bagaimana cara kerja nginx? Nginx umumnya digunakan sebagai penyeimbang beban proxy terbalik NGINX sebagai titik masuk tunggal ke aplikasi web terdistribusi yang bekerja pada beberapa server terpisah. Ini menggunakan pendekatan asinkron, yang digerakkan oleh peristiwa untuk menawarkan penggunaan memori rendah dan konkurensi tinggi. Anda dapat membaca lebih lanjut tentang nginx [di sini][6].

## Load Balancer {#loadbalancer}

Load Balancing adalah proses mendistribusikan lalu lintas jaringan di beberapa server. Dan "perangkat lunak" atau "perangkat keras" yang melakukan proses distribusi ini disebut load balancer. Penyeimbang beban seperti "polisi lalu lintas" yang berdiri di depan server Anda dan merutekan permintaan klien di semua server. Ini memastikan bahwa aplikasi Anda tetap operasional bahkan jika salah satu server turun.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx sebagai penyeimbang beban">}}

Fungsi utama penyeimbang beban mengikuti:
  * Mendistribusikan permintaan klien atau beban jaringan secara efisien di beberapa server
  * Memastikan ketersediaan dan keandalan yang tinggi dengan mengirimkan permintaan hanya ke server yang online
  * Memberikan fleksibilitas untuk menambah atau mengurangi server sesuai permintaan

## Mengatur nginx sebagai penyeimbang beban {#setup}

Sebelum menyiapkan nginx round robin load balancing, Anda harus menginstal Nginx di server Anda. Anda dapat menginstalnya dengan cepat dengan apt-get:
```
sudo apt-get install nginx
```
Untuk mengatur penyeimbang beban round-robin, kita perlu menggunakan modul Nginx hulu. Kami akan memperbarui konfigurasi nginx load balancer ke dalam pengaturan Nginx. Mari buka konfigurasi situs web Anda. Demi contoh ini, saya menggunakan file konfigurasi default
```
sudo vi /etc/nginx/sites-available/default
```
Kita perlu menambahkan konfigurasi penyeimbang beban ke file untuk mengkonfigurasi balancer beban dengan nginx.
Pertama, kita perlu memasukkan modul hulu untuk nginx load balancing yang terlihat seperti ini:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Gunakan backend ini hulu sebagai titik akhir proxy Anda di blok server Anda:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Restart nginx
```
sudo service nginx restart
```
Selama Anda memiliki semua server di tempat, Anda sekarang harus menemukan bahwa penyeimbang beban open source Nginx akan mulai mendistribusikan pengunjung ke server secara setara. Distribusi yang sama ini disebut penyeimbangan beban round-robin.

## Arahan hulu {#upstream}

Dalam contoh terakhir kami, kami menggunakan modul hulu sederhana untuk melakukan penyeimbangan beban round-robin untuk mendistribusikan lalu lintas secara setara di antara server. Namun, ada banyak alasan mengapa ini mungkin bukan cara yang paling efisien untuk bekerja dengan lalu lintas. Ada beberapa arahan yang dapat kami gunakan untuk mengarahkan pengunjung situs secara lebih efektif.

### Berat
Salah satu cara untuk mulai mengalokasikan pengguna ke server dengan lebih presisi adalah dengan mengalokasikan bobot spesifik untuk mesin tertentu. Nginx memungkinkan kami untuk menetapkan nomor yang menentukan proporsi lalu lintas yang harus diarahkan ke setiap server.
Pengaturan Load Balanced yang termasuk berat server bisa terlihat seperti ini:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
Berat default adalah 1. Dengan berat 2, backend2.Example akan dikirim dua kali lebih banyak lalu lintas dari backend1, dan backend3, dengan berat 4, akan menangani lalu lintas dua kali lebih banyak daripada backend2 dan empat kali lebih banyak dari backend 1.

### hash
IP Hash memungkinkan server untuk menanggapi klien sesuai dengan alamat IP mereka, mengirim pengunjung kembali ke VPS yang sama setiap kali mereka berkunjung (kecuali server itu turun). Jika server diketahui tidak aktif, itu harus ditandai sebagai turun. Semua IP yang seharusnya rute ke server bawah kemudian diarahkan ke yang alternatif.
Konfigurasi di bawah ini memberikan contoh:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Max gagal
Menurut pengaturan round-robin default, penyeimbang beban aplikasi Nginx akan terus mengirim data ke server pribadi virtual, bahkan jika server tidak menanggapi. Max gagal secara otomatis dapat mencegah hal ini dengan membuat server yang tidak responsif tidak beroperasi untuk jumlah waktu yang ditentukan.
Ada dua faktor yang terkait dengan gagal maks: Max \ _fails dan Fall \ _Timeout. Gagal Max mengacu pada jumlah maksimum upaya gagal untuk terhubung ke server yang harus terjadi sebelum dianggap tidak aktif. Fall_Timeout menentukan panjang server dianggap tidak beroperasi. Setelah waktu berakhir, upaya baru untuk mencapai server akan dimulai lagi. Nilai batas waktu default adalah 10 detik.
Konfigurasi sampel mungkin terlihat seperti ini:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Kesimpulan: {#conclusion}

Dalam tutorial penyeimbangan beban Nginx ini, kami belajar tentang NGNIX, menyeimbangkan beban, dan cara mengatur penyeimbang beban nginx untuk mendistribusikan lalu lintas Anda ke beberapa server. Kami juga menjelajahi berbagai algoritma penyeimbangan beban seperti round-robin, hash, dan Max gagal. Jika Anda menjalankan aplikasi dengan volume tinggi dan Anda perlu mendistribusikan beban di berbagai server maka Nginx adalah salah satu pilihan terbaik untuk Anda. Dan yang paling penting itu 100% server web gratis dan open-source.
_Your dapat bergabung dengan kami di [Twitter][7], [LinkedIn][8] dan halaman [Facebook][9] kami. Penyeimbang beban yang kuat apa lagi untuk meningkatkan ketersediaan dan efisiensi sumber daya server Anda __ apakah Anda__ digunakan? . Jika Anda memiliki pertanyaan atau umpan balik, silakan_ [hubungi][10].

## Mengeksplorasi
Anda mungkin menemukan lebih banyak terkait artikel di bawah ini
  * [Cara mengamankan dan mengenkripsi Nginx dengan Let's Encrypt on Ubuntu 20.04][11]
  * [Apache vs nginx - perbandingan terperinci pada tahun 2021][12]



[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
