---
title: "Kafka vs redis pub-sub, perbedaan yang harus Anda ketahui" 
seoTitle: "Kafka vs redis pub-sub, perbedaan yang harus Anda ketahui" 
description: "Jika Anda mencari alat untuk mengelola sejumlah besar data dan membingungkan antara Kafka dan Redis. Artikel ini Kafka vs Redis Pub-Sub akan membantu Anda." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis dan Kafka adalah dua alat berbeda yang kebetulan melakukan pekerjaan serupa dengan cara mereka sendiri. Perbandingan Kafka vs Redis memberi Anda wawasan yang harus Anda ketahui." 
url: /id/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs Redis Pub Sub">}}


## Redis dan Kafka adalah dua alat berbeda yang kebetulan melakukan pekerjaan serupa dengan cara mereka sendiri. Perbandingan Kafka vs Redis memberi Anda wawasan yang harus Anda ketahui.
Dalam serangkaian artikel kami tentang "Redis", kami belajar tentang [Dasar -Dasar Redis] [1], maka kami menjelajahi [bagaimana Redis pub/sub bekerja] [2] dan bagaimana ini bersaing dengan database NoSQL. Bergerak maju dalam seri kami hari ini, kami akan membandingkan Redis dengan Kafka yang merupakan salah satu pesaingnya dalam berbagai tugas. Dalam artikel ini Kafka vs Redis Pub-Sub-Sub, kami akan mengeksplorasi apa Kafka itu berbeda dari Redis, dan apa kesamaan di dalamnya. Jadi, mari kita mulai.
  * Apa itu kafka?
  * Apa itu Redis?
  * Apa perbedaan utamanya?
  * Kapan menggunakan yang mana?
  * Kesimpulan

## Apa itu Kafka?
Apache Kafka adalah platform aliran acara terdistribusi sumber terbuka. Digunakan untuk pipa data berkinerja tinggi, dan streaming analitik. Kafka bertindak sebagai [Sistem Pesan Berlangganan Publikasikan] [3]. Dengan ini, Anda dapat memproses data baru saat dihasilkan dengan kecepatan tinggi dan juga dapat menyimpannya ke beberapa database juga.
Kafka adalah sistem terdistribusi yang terdiri dari ** server ** dan ** klien **. Ini dapat digunakan pada perangkat keras telanjang-logam, mesin virtual, dan wadah di lingkungan serta lingkungan cloud.

## Apa itu Redis?
Redis adalah toko nilai kunci terkemuka dan lanjutan. Ini mendukung beberapa tipe data: string, hash, daftar, set, dan set yang diurutkan. Itu sebabnya sering disebut sebagai server struktur data.
Redis juga dianggap sebagai database NoSQL. Untuk diskusi terperinci tentang dia Redis dan cara kerjanya, Anda dapat merujuk pada artikel kami “[Panduan Pemula untuk Redis Database In-Memory] [1]“.

## Apa perbedaan utamanya?
** REDIS ** Pub-Sub sebagian besar seperti sistem api-dan-laba di mana semua pesan yang Anda hasilkan akan dikirimkan ke semua konsumen sekaligus dan data tidak disimpan di mana pun. Anda memiliki keterbatasan dalam memori sehubungan dengan Redis. Juga, jumlah produsen dan konsumen dapat mempengaruhi kinerja Redis.
Di sisi lain, ** kafka ** adalah throughput tinggi, log terdistribusi yang dapat digunakan sebagai antrian. Ini juga memberikan kegigihan untuk pesan yang dikirim melalui antrian.
** Redis ** Mendukung ** Push-Based ** Pengiriman Pesan. Ini berarti setiap pesan yang didorong ke Redis akan dikirimkan secara otomatis ke semua pelanggan.
** KAFKA **, bagaimanapun, mendukung ** Pengiriman Pesan Berbasis Tarik. Berarti pesan yang diterbitkan untuk Kafka tidak didistribusikan ke pelanggan secara otomatis. Sebaliknya, konsumen meminta pesan ketika mereka siap untuk mengkonsumsi pesan -pesan itu.
** Redis ** tidak menyimpan pesan sebagai gantinya, pesan dikirim sekaligus ke semua konsumen dan kemudian dihapus. Namun, ** kafka ** menjadi log, Anda selalu memiliki pesan. Anda dapat memantau ini dengan menetapkan kebijakan retensi, katakanlah 7 hari ** retensi **.

## Kapan menggunakan yang mana?

### redis
  * Jika Anda menginginkan jenis sistem pemadam kebakaran, di mana semua pesan yang Anda hasilkan dikirimkan secara instan kepada konsumen.
  *Jika ** Kecepatan ** paling peduli.
  *Jika ** penyimpanan ** tidak penting, dan Anda tidak ingin sistem Anda menyimpan pesan yang telah dikirim
  * Jumlah data yang akan dibahas tidak besar.

### kafka
  *Jika Anda ingin ** keandalan **.
  * Jika Anda ingin sistem Anda memiliki salinan pesan yang telah dikirim bahkan setelah konsumsi.
  *Jika ** Kecepatan ** bukan masalah besar.
  * Dan ukuran data Anda sangat besar.

## Kesimpulan
Dalam tutorial ini Kafka vs Redis Pub-Sub, kami menjelajahi Kafka dan Redis. Apa perbedaan dan persamaannya? Kami juga belajar kapan Anda harus redis dan kapan baik menggunakan kafka. Dalam tutorial mendatang kami, kami akan mengeksplorasi lebih lanjut tentang Kafka dan analisis mendalam.
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#Apa
