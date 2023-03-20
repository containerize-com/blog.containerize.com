---
title: "Pengantar Redis Pub/Sub dan bagaimana cara kerjanya?" 
seoTitle: "Pengantar Redis Pub/Sub dan bagaimana cara kerjanya?" 
description: "Redis Pub/Sub adalah layanan pesan yang fleksibel, andal, real-time untuk aplikasi independen untuk menerbitkan dan berlangganan acara asinkron." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/Sub mengimplementasikan sistem pesan waktu-nyata, di mana penerbit, menerbitkan ke saluran/topik dan beberapa klien dapat berlangganan saluran/topik itu." 
url: /id/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis pub/Sub mengimplementasikan sistem pesan waktu-nyata, di mana penerbit, menerbitkan ke saluran/topik dan beberapa klien dapat berlangganan saluran/topik itu.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

Dalam tutorial terakhir kami “** [Panduan Pemula untuk Redis In-Memory Database][1] **” Kami belajar tentang Redis sebagai database dalam memori. Dan, bagaimana ini bersaing dengan database NoSQL. Kami juga belajar di mana menggunakan Redis dan di mana penggunaannya tidak optimal. Sekarang membangun di atas basis pengetahuan itu, dalam tutorial ini kita akan belajar tentang Redis Pub/Sub, bagaimana cara kerjanya, dan apa penggunaan terbaik dari sistem Redis Publish/Berlangganan. Mari kita mulai.
  *** [Apa itu Pola Publik/Berlangganan?][2] **
  *** [Bagaimana pub/sub bekerja?][3] **
  *** [Kapan Anda harus menggunakan pub/sub?][4] **
  *** [Cara menggunakan redis pub/sub?][5] **
  *** [Kesimpulan][6] **

## Apa itu pola publikasi/berlangganan? {#Apa}
Publikasikan/berlangganan atau dalam pub/sub pendek adalah pola pesan di mana pengirim dan penerima pesan tidak menukar pesan tersebut secara langsung. Sebaliknya, pengirim pesan menerbitkannya ke saluran/topik. Dan, semua orang yang ingin menerima pesan -pesan itu akan berlangganan saluran/topik. Jadi, itu lebih merupakan penjelasan teknis. Dalam kehidupan sehari-hari kami, kami menggunakan model yang berlangganan ini cukup sering saat menggunakan platform media sosial seperti YouTube, Twitter, Facebook, atau Instagram. Di mana produsen konten menghasilkan konten dan mereka yang tertarik akan mengikuti / berlangganan konten. Jadi inilah yang sebenarnya dilakukan oleh Pub/Sub Pattern dalam arsitektur perangkat lunak.

## Bagaimana cara kerja pub/sub? {#Bagaimana}
Dalam pengembangan perangkat lunak, penekanan pada reusability sangat tinggi. Dan semua pola desain didasarkan pada pembangunan komponen atau modul yang dapat digunakan kembali. Jadi untuk memahami pub/sub, Anda pertama -tama perlu melihat dari mana ide ini berasal dan bagaimana pengembang menemukannya sebagai sebuah pola.
Ketika arsitektur perangkat lunak berevolusi dan lebih banyak berbasis modul, lebih banyak komunikasi / pesan meningkat antara modul dan komponen. Seperti, pikirkan modul sebagai unit pemrosesan yang mengambil beberapa input dan memberikan beberapa output. Dan setiap input sebenarnya adalah pesan di mana unit pemrosesan memproses dan menghasilkan pesan lain sebagai output. Yang akan menjadi input ke beberapa modul lain. Jadi, peningkatan pesan ini membutuhkan perhatian khusus, untuk memiliki aplikasi yang dapat diskalakan ada persyaratan bahwa modul dan komponen dapat bekerja secara mandiri tanpa ketergantungan. Oleh karena itu, datanglah pola publikasi/berlangganan.
Di banyak sistem pub/sub, penerbit memposting pesan ke broker pesan perantara atau bus acara, dan pelanggan mendaftarkan langganan dengan broker itu, membiarkan broker melakukan penyaringan. Pialang biasanya melakukan fungsi toko dan maju untuk merutekan pesan dari penerbit ke pelanggan. Selain itu, broker dapat memprioritaskan pesan dalam antrian sebelum perutean.

## ** Kapan Anda harus menggunakan pub/sub? ** {#when}
Aplikasi obrolan adalah kasus penggunaan klasik dari pola pub/sub. Dalam aplikasi obrolan, peserta dapat berlangganan ruang obrolan yang memiliki pub/sub topik yang ditunjuk. Ketika seorang pengguna mengirim pesan ke ruang obrolan, contoh aplikasi obrolannya menerbitkan pesan tentang topik ruang obrolan itu. Pelanggan topik menerima pesan.
Layanan antrian pesan / antrian pesan atau aplikasi pemrosesan batch juga dapat menggunakan pola pub / sub. Di mana semua orang yang menginginkan tugas tertentu dilakukan akan mempublikasikan pesan ke antrian dan unit pemrosesan yang telah berlangganan antrian itu akan menerima pesan untuk memproses pekerjaan.
Mari kita bahas beberapa keuntungan dari pola pub/sub
  * Kopling longgar antara komponen sistem
  * Tampilan alur kerja yang lebih baik dari sistem sistem
  * Mengaktifkan integrasi yang lebih baik & lebih cepat
  * Memastikan skalabilitas yang lebih halus
  * Keandalan yang konsisten dijamin
  * Membangun elastisitas
  * Modularisasi Perangkat Lunak
  * Pengembangan perangkat lunak agnostik bahasa
  * Kejelasan dalam logika bisnis
  * Meningkatkan responsif

## Cara menggunakan redis pub/sub {#redis-pubsub}
Untuk instalasi Redis, Anda dapat merujuk ke [tutorial terakhir] saya [1]. Contoh ini menjelaskan cara kerja konsep penerbit dan pelanggan. Dalam contoh berikut, satu klien berlangganan saluran bernama 'Redischat'.
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Sekarang, dua klien sedang menerbitkan pesan di saluran yang sama bernama 'Redischat' dan klien yang berlangganan di atas menerima pesan.
```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great" 
1) "message" 
2) "redisChat" 
3) "Learn redis" 

```

## kesimpulan {#conclusion}
Dalam tutorial ini, kami belajar tentang pola desain publikasi/berlangganan. Dan mengeksplorasi bagaimana pub/sub Redis bekerja. Kami juga mengeksplorasi kasus penggunaan terbaik dari Redis Pub/Sub, pesan waktu nyata. Dalam tutorial saya yang akan datang, kami akan menjelajahi Redis lebih lanjut dan menjelaskan bagaimana kami dapat menggunakan Redis Pub/Sub dengan Node.js untuk membangun aplikasi obrolan real-time.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
