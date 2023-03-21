---
title: "Panduan Pemula untuk Redis In-Memory Database" 
seoTitle: "Panduan Pemula untuk Redis In-Memory Database" 
description: "Database Redis In-Memory adalah toko serba guna open-source. Ini juga disebut database NoSQL. Tutorial Redis ini memandu Anda tentang konsep inti Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Tutorial ini membantu Anda belajar tentang database Redis In-Memory. Ini adalah sumber terbuka dan juga disebut toko nilai kunci, yang merupakan jenis database non-relasional." 
url: /id/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Tutorial ini membantu Anda belajar tentang basis data Redis In-Memory. Ini adalah sumber terbuka dan juga disebut toko nilai kunci, yang merupakan jenis database non-relasional.

{{< figure align=center src="images/redis-in-memory-database.png" alt="Redis database dalam memori">}}

**redis  **sebenarnya adalah singkatan dari "**  re  **mote **  di  **ctionary **  s**  erver". Database Redis adalah toko kunci-kunci open-source, canggih. Ini mendukung beberapa tipe data: string, hash, daftar, set, dan set yang diurutkan. Itu sebabnya sering disebut sebagai server struktur data. Redis ditulis dalam C. Tutorial Redis ini memberikan pemahaman yang baik tentang konsep basis data Redis In-Memory.
  ***[Apa itu database NoSQL][1]** 
  ***[Apakah Redis A NoSQL Database?][2]** 
  ***[Kapan menggunakan redis?][3]** 
  ***[redis vs toko nilai kunci lainnya][4]** 
  ***[instal redis di ubuntu][5]** 
  ***[Kesimpulan][6]** 

## Apa itu database NoSQL   {#NoSQL}
Database NoSQL menjadi sangat populer. Perusahaan besar mengandalkan mereka untuk menyimpan ratusan data petabyte dan menjalankan jutaan pertanyaan per detik. Tapi apa itu database NoSQL? Bagaimana cara kerjanya, dan mengapa skala jauh lebih baik daripada database relasional tradisional? Mari kita mulai dengan dengan cepat menjelaskan masalah dengan database relasional seperti MySQL, MariaDB, SQL Server.
Basis data relasional dibangun untuk menyimpan data relasional seefisien mungkin. Anda dapat memiliki tabel untuk pelanggan, pesanan, dan produk, menghubungkan bersama secara logis. Organisasi yang ketat ini sangat bagus untuk mengelola data Anda, tetapi ia datang dengan biaya skalabilitas rendah. Mereka harus mempertahankan hubungan ini, dan itu adalah proses yang intensif, membutuhkan banyak memori dan menghitung daya.
Sedangkan database NoSQL dapat skala baik secara vertikal dan horizontal. Anda dapat membandingkan ini dengan bangunan, penskalaan vertikal berarti menambahkan lebih banyak lantai ke bangunan yang ada, sedangkan penskalaan horizontal berarti menambahkan lebih banyak bangunan. Modifikasi skema adalah salah satu tantangan terbesar dalam database relasional. Basis data NoSQL tidak memerlukan skema tetap yang berarti skala dengan mudah dengan sejumlah besar data dan beban pengguna yang tinggi.

## Apakah Redis database NoSQL?   {#isnosql}
Ini adalah salah satu pertanyaan paling populer yang diajukan di seluruh komunitas pengembang di internet. Jawaban sederhananya adalah ya. Redis adalah toko struktur data dalam-memori open-source.
Sebenarnya ada 4 jenis jenis basis data NoSQL, yang meliputi: database dokumen, toko-toko nilai kunci, toko kolom lebar, dan toko grafik. Jadi, server redis dalam memori database, menjadi toko kunci-value jatuh di bawah kategori database NoSQL.

## Kapan Menggunakan Redis?   {#Kapan}
Setiap teknologi memiliki kelebihan dan kekurangannya. Jadi, dengan begitu banyak opsi yang tersedia dalam database. Menjadi penting untuk dipahami kapan dan kapan tidak menggunakan teknologi tertentu. Selalu pilih alat yang tepat untuk pekerjaan itu.
Untuk data yang stabil, dapat diprediksi, dan relasional memilih database relasional. Untuk data sementara, sangat dinamis memilih database NoSQL. Skema untuk database adalah salah satu tantangan terbesar dalam database relasional dan dapat memakan waktu selamanya dalam database besar relasional.
Jika Anda memiliki data yang sangat dinamis yang sering berubah, dan Anda tidak perlu membuat kueri yang kompleks, melainkan ingin menyimpan data sebagai pasangan nilai kunci, maka Redis dapat menjadi pilihan yang berpotensi baik. Jika Anda memerlukan database berorientasi dokumen yang lebih unggulan yang memungkinkan Anda untuk melakukan kueri rentang, pencarian ekspresi reguler, pengindeksan, dan MapReduce, Anda harus memeriksa MongoDB, CouchDB, atau serupa.
Beberapa contoh menggunakan kasus basis data Redis In-Memory adalah sebagai berikut:
  ***Akses Logger** : Ketika Anda perlu mencatat banyak aktivitas dengan cepat, Redis adalah solusi yang baik.
  ***Mempertahankan penghitung** : Anda dapat menggunakan Redis untuk mempertahankan jumlah yang berbeda, mis. Unduh penghitung
  ***Kehadiran pengguna** : Karena kecepatan, Anda dapat menggunakannya untuk menyimpan status "online / offline" pengguna.
  ***Antrian** : Anda dapat menggunakan Redis untuk mempertahankan antrian sementara untuk memproses pekerjaan latar belakang.

## redis vs toko nilai kunci lainnya   {#other}
Basis data Redis In-Memory sangat cepat dan dapat melakukan sekitar 1.10000 set per detik, sekitar 81000 mendapat per detik. Ini mendukung beberapa tipe data: string, hash, daftar, set, dan set yang diurutkan. Redis adalah satu threaded yang memungkinkannya untuk menjadi asam (atomisitas, konsistensi, isolasi, dan daya tahan). Database NoSQL lainnya umumnya tidak memberikan kepatuhan asam, atau mereka memberikannya sebagian.

## Instal Redis di Ubuntu   {#install}
Untuk menginstal Redis di Ubuntu, buka terminal dan ketik perintah berikut
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
Perintah berikut akan memulai server Redis
```
$ redis-server
```
Untuk memverifikasi apakah server Redis berjalan, Anda dapat menggunakan perintah **redis-cli**  untuk menghubungkannya.
```
$ redis-cli 
```
Perintah ini akan memberi Anda output berikut, yang berarti server berjalan dan sekarang Anda terhubung.
```
redis 127.0.0.1:6379>
```
Sekarang ketik perintah **ping  **berikut, dan Anda akan mendapatkan respons dari server sebagai **  pong** .
```
redis 127.0.0.1:6379> ping
PONG
```

## kesimpulan   {#conclusion}
Dalam tutorial Redis ini, kami belajar tentang database Redis In-Memory. Kami mengeksplorasi perbedaan utama antara database relasional dan non-relasional (NoSQL). Juga, dipelajari kapan kita harus menggunakan redis dan kasus penggunaan terbaik. Tutorial ini adalah bagian dari serangkaian tutorial yang sedang berlangsung. Dalam artikel yang akan datang, kami akan lebih mengeksplorasi kasus penggunaan khusus Redis.

  
[1]: #nosql
[2]: #isnosql
[3]: #when
[4]: #other
[5]: #install
[6]: #conclusion
