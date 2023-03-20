---
title: "Cara mengatur restic perangkat lunak cadangan open source di ubuntu" 
seoTitle: "Cara mengatur restic perangkat lunak cadangan open source di ubuntu" 
description: "Restic adalah perangkat lunak cadangan open-source yang cepat, aman, dan terbaik. Ini mendukung AWS S3, Microsoft Azure, Google Cloud, dan opsi backend lainnya." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Ambil cadangan dengan perangkat lunak cadangan open source dan simpan secara lokal atau di backends eksternal. Restic adalah cross-platform dan mendukung banyak jenis penyimpanan." 
url: /id/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## Ambil cadangan dengan perangkat lunak cadangan open source dan simpan secara lokal atau di backends eksternal. Restic adalah cross-platform dan mendukung banyak jenis penyimpanan.

{{< figure align=center src="images/restic-post-banner.png" alt="Perangkat Lunak Cadangan Sumber Terbuka">}}

Sistem cadangan sangat penting untuk bisnis dan individu. Data dapat hilang karena berbagai alasan seperti serangan cyber, kegagalan sistem, penghapusan tidak disengaja, dan banyak lagi. Anda harus memiliki strategi cadangan yang baik sehingga Anda dapat mengembalikan data Anda dengan cepat. Panduan ini akan menunjukkan kepada Anda cara menginstal dan memanfaatkan perangkat lunak cadangan open source ** ** restic di server Ubuntu Anda.
Kami telah membahas bagian -bagian berikut dalam tutorial ini.
  *[** Prasyarat **][1]
  *[** Apa itu restic? **][2]
  *[** Instalasi Restic **][3]
  *[** konfigurasi restic **][4]
  *[** Alternatif untuk restic **][5]
  *** [Kesimpulan][6] **

## Prasyarat {#perequisites}
Program Perangkat Lunak Backup Restic mendukung tiga sistem operasi utama Linux, MacOS, dan Windows. Sebelum menginstal ** Restic Backup **, Anda harus memenuhi persyaratan sistem berikut.
  * Mesin atau sistem desktop dengan sistem operasi ubuntu yang menampung data yang akan dicadangkan
  * Contoh server ubuntu terbaru
  * Otentikasi kunci SSH yang dikonfigurasi antara dua klien dan server
  * Pengguna non-root dengan hak istimewa sudo
Dengan bit -bit ini di tangan, mari kita bergerak dan mulai bekerja.

## Apa itu Restic? {#Restic}
[** restic **][7] adalah alat cadangan open source ** yang fantastis **. Ini adalah utilitas cadangan gratis ** ** yang cepat, aman, dan efisien. Ini adalah program cross-platform backup, jadi itu akan berjalan di Linux, BSD, Mac OS X, dan Windows. Software cadangan open source terbaik restic mudah dijalankan dan tidak memerlukan server atau konfigurasi yang rumit. Ini membuat cadangan data yang dimodifikasi dan memungkinkan pengguna untuk mengembalikannya bila perlu. Lebih lanjut, ini menyediakan berbagai opsi penyimpanan, termasuk penyimpanan mandiri dan penyimpanan internet. Selain itu, Restic Open Source Open Sore Hosted Cloud Storage menggunakan teknik kriptografi yang kuat untuk melindungi data Anda.
Restic bukan utilitas penyalinan file sederhana. Ini terutama dibangun di atas dua konsep: snapshot dan repositori. ** Restic ** Solusi cadangan sumber terbuka menyimpan informasi sebagai snapshot, yang kemudian disimpan dalam repositori. Itu ditulis dalam bahasa pemrograman Go. ReStic GO Based Backup Utility dan Aplikasi Cadangan Sumber Terbuka bekerja dengan lancar dengan banyak sistem penyimpanan cloud dan backend lokal. Kode sumber perangkat lunak cadangan file sumber terbuka restic tersedia di [** github **][8]. Namun, Anda dapat menemukan rinci [** dokumentasi **][9] untuk instalasi dan penggunaan.
Restic Self Hosted Cloud Backup mendukung out-of-the-box mengikuti backend untuk penyimpanan cadangan.
  * Direktori Lokal
  * SFTP Server (via SSH)
  * Server istirahat
  * AWS S3
  * Server Minio
  * Wasabi
  * ALIBABA Cloud
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blob Storage
  * Google Cloud Storage
Anda dapat menggunakan [** rClone **][10] untuk berbagai backend selain yang tercantum di atas.

Instalasi ## Restic {#installation}
Ada berbagai cara untuk menginstal penyimpanan cloud yang di -host mandiri terbaik pada sistem operasi Ubuntu Anda. Kami akan mencakup pemasangan penyimpanan file restic yang di -host menggunakan paket Ubuntu, Docker, dan kode sumber.

### Menginstal Paket Menggunakan
  * Jalankan perintah di bawah ini untuk menginstal Server Cadangan Sumber Terbuka Restic di Ubuntu OS.
```
$ sudo apt-get install restic
```

### Menginstal Menggunakan Docker
  * Dapatkan gambar restic dari Dockerhub.
```
$ docker pull restic/restic
```

### Menginstal Sumber Menggunakan
  * Pertama, Anda perlu menginstal bahasa pemrograman Go untuk mengatur restic dari sumbernya. Anda dapat mengunjungi situs web resmi [** Golang **][11] untuk instruksi untuk menginstal GO.
  * Selanjutnya, jalankan perintah di bawah ini untuk menginstal restic cadangan tambahan.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * Dengan menentukan OS target dalam perintah, Anda dapat dengan cepat menyusun restic untuk semua platform yang didukung. Berikut beberapa contoh.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## konfigurasi restic {#configuration}
Seperti yang telah kami sebutkan di atas bahwa sistem cadangan open source restic didasarkan pada snapshot dan repositori untuk cadangan. Mari kita lihat cara mengatur repositori, ambil snapshot, dan kemudian kembalikan cadangan.

### Buat repositori
  * Jalankan perintah berikut untuk menginisialisasi repositori. Anda juga perlu mengatur kata sandi untuk repositori.
```
$ restic init --repo /tmp/
```

### data cadangan ke direktori lokal
  * Pada langkah pertama, kami telah membuat repositori untuk menyimpan data. Sekarang, kami akan menambahkan data ke repositori untuk cadangan. Jalankan perintah berikut.
```
$ restic --repo /tmp/backup backup ~/work
```

### Kembalikan cadangan
  * Perintah pemulihan mengembalikan file dan direktori. File tidak dikembalikan ke lokasi aslinya saat menggunakan pendukung cloud open source restic. Anda harus memilih lokasi target agar file dipulihkan oleh Restic.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * Namun, Anda dapat mengembalikan snapshot terbaru tanpa menentukan ID snapshot. Anda perlu menambahkan parameter terbaru dalam perintah seperti di bawah ini.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### Bekerja dengan snapshot
Di bagian ini, kita akan melihat beberapa fitur snapshot.
  * Jalankan perintah berikut untuk mendaftar snaphosts.
```
$ restic snapshots -r /tmp/backup
```
  * Anda dapat membandingkan dua snapshot dengan perintah berikut.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Anda mungkin perlu menghapus cadangan lama untuk membebaskan ruang penyimpanan. Untuk menghapus snapshot, jalankan perintah di bawah ini.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## alternatif untuk restic
Restic adalah aplikasi perangkat lunak cadangan open source yang paling populer dan menjamin kerahasiaan dan integritas data file penting Anda. Berikut ini adalah alternatif paling populer dan pesaing teratas untuk restic data cadangan.
  * Glacier Amazon
  * Replikasi
  * Runrest
  * Afi
  * Cadangan Rainyday
  * Borg
  * Cadangan veeam
  * Gateway penyimpanan AWS
  * Kohesitas

## Kesimpulan
Dalam artikel ini, kami membahas restic ** perangkat lunak cadangan open source gratis **. Kami juga membahas beberapa teknik instalasi, serta cara membuat cadangan dan cara mengembalikan cadangan. Ada banyak bentuk penyimpanan cadangan data lainnya, dan kami baru saja membahas satu di artikel ini. Jenis penyimpanan backend yang tersisa akan dibahas dalam publikasi mendatang. Kami berharap tutorial ini akan berfungsi sebagai titik awal bagi Anda untuk menggunakan alat cadangan open source terbaik untuk mengambil dan mengembalikan cadangan.
Akhirnya, [** containerize.com **][12] sedang dalam proses penulisan posting blog yang konsisten pada produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [** cadangan ini **][13] untuk pembaruan terbaru.
_ Apa perangkat lunak cadangan gratis & open source paling favorit Anda?. Apakah Anda memiliki pertanyaan tentang perangkat lunak cadangan open source?, Silakan_ [hubungi][14].

## Mengeksplorasi:
Kami juga memiliki beberapa informasi terkait lainnya dari OSS Watch:
  * [Top 5 Perangkat Lunak Penyimpanan Cloud Open Source pada tahun 2021][15]
  * [Cara Menginstal NextCloud dengan Apache di Ubuntu Server][16]
  * [Instal dan konfigurasikan owncloud dengan apache di ubuntu][17]
  * [Cara Menginstal Pypening File Pydio dan Sinkronisasi Platform di Ubuntu][18]
  * [NSQ vs Kafka | Apa perbedaan utama?][19]
  * [NextCloud vs OwnCloud | Apa perbedaannya?][20]
  * [Perangkat Lunak Penyimpanan Cloud Terbaik dan Berbagi File][21]

  
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
