---
title: "Tutorial Apache Kafka -Troduction to Kafka untuk pemula" 
seoTitle: "Tutorial Apache Kafka -Troduction to Kafka untuk pemula" 
description: "Apache Kafka adalah platform streaming acara terdistribusi sumber terbuka. Tutorial ini adalah panduan pemula untuk memahami Apache Kafka Up." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka adalah platform streaming acara terdistribusi sumber terbuka. Tutorial ini memberi Anda pengantar Kafka dari sudut pandang pemula." 
url: /id/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka adalah platform streaming acara terdistribusi sumber terbuka. Tutorial ini memberi Anda pengantar Kafka dari perspektif pemula.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka Tutorial Open Source">}}

Baru-baru ini kami menulis sebuah artikel tentang “Kafka vs Redis Pub-Sub-Sub” yang menjelaskan tentang perbedaan antara Kafka dan Redis pub-sub. Dalam artikel itu kami segera menjelaskan tentang broker pesan Kafka itu sendiri. Jadi, sekarang artikel ini memberi Anda lebih banyak wawasan tentang platform streaming acara Open Source Apache Kafka yang didistribusikan dan memberi Anda semua yang diperlukan untuk memulai dengan antrian pesan terdistribusi Kafka. Jadi, mari kita mulai.
  * [Pengantar Apache Kafka][1]
  * [Apa itu sistem pesan?][2]
  * [Istilah fundamental][3]
  * [Langkah Instalasi][4]
  * [Buat topik][5]
  * [Tulis pesan ke topik][6]
  * [Baca pesan dari topik][7]
  * [Kesimpulan][8]

## Pengantar Apache Kafka   {#intro}
Apache Kafka Pesan Pesan Open Source dimulai di LinkedIn dan kemudian menjadi proyek Apache open source. Perangkat lunak broker pesan Kafka dikembangkan di Scala dan Java. Apache Kafka Broker adalah sistem pesan berlangganan yang diterbitkan yang memungkinkan pertukaran data antara aplikasi, server, dan prosesor juga. Ini cepat, dapat diskalakan, dan didistribusikan oleh desain. Ini mampu menangani jutaan data atau pesan per detik. Ini berfungsi sebagai mediator antara sistem sumber (produsen) dan sistem target (konsumen). Organisasi seperti Netflix, Uber, dan ribuan perusahaan tersebut memanfaatkan Apache Kafka streaming waktu nyata. Dibandingkan dengan sistem pesan lainnya, perangkat lunak antrian pesan Kafka memiliki throughput yang lebih baik, partisi bawaan, replikasi, dan toleransi kesalahan yang melekat. Ini membuatnya cocok untuk aplikasi pemrosesan pesan skala besar.

## Apa itu sistem pesan?   {#messaging}
Sistem pesan adalah pertukaran pesan sederhana antara dua atau lebih orang, perangkat, dll. Ini bertanggung jawab untuk transfer data dari satu aplikasi ke aplikasi lain, sehingga aplikasi dapat fokus pada data, tetapi tidak khawatir tentang cara membagikannya.
Salah satu jenis sistem perpesanan adalah "sistem poin ke titik pesan". Dalam sistem ini pesan disimpan dalam antrian saat dikirim oleh produser. Hanya satu konsumen yang dapat mengkonsumsi pesan pada waktu tertentu. Dan, begitu pesan dikonsumsi itu akan dihapus dari antrian. Salah satu contoh sistem ini adalah sistem pemrosesan pesanan. Di mana hanya satu proses yang dapat menghasilkan pesanan.
Jenis lain dari sistem pesan adalah sistem pesan pub-sub yang memungkinkan pengirim untuk mengirim pesan dan penerima untuk membaca pesan itu. Dalam Apache Kafka Messaging, pengirim dikenal sebagai produser yang menerbitkan pesan, dan penerima dikenal sebagai konsumen yang mengkonsumsi pesan itu dengan berlangganan. Contoh dari sistem ini adalah TV kabel Anda yang menerbitkan banyak saluran, dan siapa pun dapat berlangganan pilihan saluran mereka dan mendapatkannya kapan pun saluran berlangganan mereka tersedia.

## istilah fundamental   {#terms}
Sebelum kita berbicara lebih banyak tentang antrian pesan terbaik Apache Kafka, Anda harus memahami beberapa istilah.
  ***Topik** : Aliran pesan milik kategori tertentu disebut topik.
  ***Partisi** : Topik mungkin memiliki banyak partisi, sehingga mereka dapat menangani jumlah data yang sewenang -wenang.
  ***Partisi Offset** : Setiap pesan yang dipartisi memiliki ID urutan unik yang disebut "Offset".
  ***Replika partisi** : Replika adalah cadangan dari sebuah partisi. Mereka digunakan untuk mencegah kehilangan data.
  ***Pialang** : bertanggung jawab untuk memelihara data yang dipublikasikan.
  ***KAFKA CLUSTER** : Kafka memiliki lebih dari satu broker disebut Kafka Cluster.
  ***Produsen** : Apakah penerbit pesan ke satu atau lebih topik.
  ***Konsumen** : Apakah pembaca data dari broker. Mereka berlangganan beberapa topik dan mengkonsumsi setiap kali ada pesan dalam topik tersebut.
  ***Pemimpin** : Apakah simpul yang bertanggung jawab untuk semua bacaan dan menulis untuk setiap partisi yang diberikan.
  ***Pengikut** : Node yang mengikuti instruksi pemimpin disebut pengikut.

## langkah instalasi   {#steps}

### Langkah 1 - Memverifikasi Instalasi Java
Semoga Anda sudah menginstal Java di mesin Anda sekarang, jadi Anda cukup memverifikasi menggunakan perintah berikut.
```
$ java -version
```
Jika Java berhasil diinstal pada mesin Anda, Anda dapat melihat versi Java yang diinstal. Jika tidak maka Anda harus terlebih dahulu menginstal Java.

### Langkah 2 - Instalasi Kerangka Kerja ZooKeeper
Kunjungi tautan berikut dan unduh versi terbaru ZooKeeper.
{{_LINE_46_}}
Setelah Anda selesai dengan instalasi dan konfigurasi, Anda dapat memulai zookeeper dengan perintah berikut
```
$ bin/zkServer.sh start
```
Dan kemudian gunakan perintah berikut untuk terhubung ke ZooKeeper dari CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Setelah terhubung, Anda harus melihat sesuatu seperti ini
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Langkah 3 - Instalasi Apache Kafka
Unduh rilis broker pesan terbaik kafka dan ekstrak dari URL berikut
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Jalankan perintah berikut untuk memulai semua layanan dalam urutan yang benar:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Buka sesi terminal lain dan jalankan:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Buat topik   {#Create}
Untuk menulis pesan atau acara Anda ke dalam topik, Anda harus terlebih dahulu membuat topik. Untuk membuat topik, buka terminal Anda dan jalankan perintah berikut:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Sekarang kami telah membuat topik dengan nama "pembaruan cuaca" di mana kami akan mempublikasikan informasi tentang cuaca dan konsumen akan mengkonsumsi pesan-pesan itu.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Tulis pesan ke topik   {#write}
Jalankan klien produser konsol untuk menulis beberapa acara ke dalam topik Anda. Secara default, setiap baris yang Anda masukkan akan menghasilkan acara terpisah yang ditulis ke topik.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Baca pesan dari topik   {#read}
Buka sesi terminal lain dan jalankan Klien Konsumen Konsol untuk membaca acara yang baru saja Anda buat:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Jangan ragu untuk bereksperimen: Misalnya, beralih kembali ke terminal produser Anda (langkah sebelumnya) untuk menulis acara tambahan, dan lihat bagaimana acara tersebut segera muncul di terminal konsumen Anda.

## kesimpulan   {#conclusion}
Dalam tutorial ini kami telah belajar tentang dasar -dasar penggunaan Apache Kafka. Kami menginstal layanan antrian Kafka dan kemudian mengonfigurasinya. Kami juga belajar cara membuat topik di Kafka, mengirim pesan ke topik dan cara membaca pesan dari topik. Saya harap artikel ini berguna untuk Anda. Mari bertemu di artikel berikutnya.
_WApa Platform Streaming Acara Terdistribusi Sumber Terbuka yang Anda Gunakan?. Apakah Anda punya pertanyaan?, Tolong_ [hubungi][9].

## Mengeksplorasi
Anda dapat menemukan tautan berikut yang relevan:
  * [Perangkat Lunak Antrian Pesan Best Gratis dan Open Source (MQ)][10]
  * [Kafka vs Redis Pub-Sub-Sub, Perbedaan Yang Harus Anda Ketahui][11]
  * [Pengantar redis pub/sub dan bagaimana cara kerjanya?][12]

  
[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
