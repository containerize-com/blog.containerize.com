---
title: "Cara Membangun Aplikasi Node.js dengan Docker di Ubuntu" 
seoTitle: "Cara Membangun Aplikasi Node.js dengan Docker di Ubuntu" 
description: "Jika Anda tertarik pada Node.js dan ingin menggunakan Docker. Tutorial ini akan memandu Anda, cara membangun aplikasi NodeJs dengan Docker." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "Artikel ini akan menjelaskan kepada Anda cara membangun aplikasi NodeJS dengan Containerisasi Docker. Docker memungkinkan untuk mengemas dan menjalankan aplikasi sebagai wadah." 
url: /id/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Cara Membangun Aplikasi Nodej dengan Docker">}}


## Artikel ini akan menjelaskan kepada Anda cara membangun aplikasi NodeJs dengan Containerisasi Docker. Docker memungkinkan untuk mengemas dan menjalankan aplikasi sebagai wadah.
Hari ini kami memulai serangkaian tutorial tentang alat pengembangan perangkat lunak. Dan artikel pertama ini mencakup cara memuat aplikasi node.js menggunakan Docker. Docker membantu pengembang untuk mengemas dan menjalankan aplikasi sebagai wadah. Karena wadah adalah proses yang terisolasi dan alternatif ringan untuk mesin virtual. Artikel ini menjelaskan cara membangun aplikasi NodeJS dengan containerisasi Docker. Mari kita mulai!
  *[**Apa itu Docker** ][1]
  ***[prasyarat][2]** 
  *[**Pengaturan Node.js Aplikasi** ][3]
  *[**Tulis DockerFile** ][4]
  *[**Bangun gambar dan jalankan wadah Docker** ][5]
  *[**Kesimpulan** ][6]

## Apa itu Docker   {#Docker}
Docker adalah satu set platform sebagai produk layanan yang menggunakan virtualisasi level OS untuk mengirimkan perangkat lunak dalam paket yang disebut wadah. Ini adalah platform terbuka untuk mengembangkan, pengiriman, dan menjalankan aplikasi. Docker memungkinkan Anda untuk memisahkan aplikasi Anda dari infrastruktur Anda sehingga Anda dapat mengirimkan perangkat lunak dengan cepat.
Docker menggunakan arsitektur klien-server. Klien Docker berbicara dengan Docker Daemon, yang melakukan pengangkatan berat, berlari, dan mendistribusikan wadah Docker Anda. Klien Docker dan daemon berkomunikasi menggunakan API REST, melalui soket UNIX atau antarmuka jaringan. Berikut adalah diagram Arsitektur Docker.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Arsitektur Docker">}}


## Prasyarat   {#preeq}
  * Server Ubuntu
  * Docker diinstal di server
  * Node.js npm terpasang

## setup node.js Aplikasi   {#setup}
Untuk membuat gambar Anda, terlebih dahulu Anda harus membuat file aplikasi, yang kemudian dapat Anda salin ke wadah Anda. File -file ini akan mencakup konten, kode, dan dependensi statis aplikasi Anda.
Pertama, buat direktori untuk proyek Anda di direktori home pengguna non-root Anda. Kemudian, jalankan perintah di bawah ini dalam folder baru yang Anda buat.
```
npm init -y
npm i -s express
```
Perintah di atas akan mengatur aplikasi node.js dengan kerangka kerja ekspres yang diinstal sebagai ketergantungan. Mari tambahkan kode berikut ke dalam file **app.js** .
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
Mulai aplikasi dengan node app.js
```
node app.js
```
Navigasi browser Anda ke http: // \ _server \ _IP: 3000 Anda. Anda akan melihat halaman arahan berikut.
Sekarang Anda memiliki aplikasi dan berjalan. Kami sekarang dapat melanjutkan untuk membuat DockerFile yang akan memungkinkan kami untuk membuat ulang dan mengukur aplikasi ini.

## Tulis DockerFile   {#DockerFile}
Menggunakan DockerFile, Anda dapat menentukan apa yang akan disertakan dalam wadah aplikasi Anda saat dieksekusi dan lingkungan kontainer.
Pertama -tama buat DockerFile dengan perintah berikut di akar proyek Anda.
```
vi Dockerfile
```
Tambahkan instruksi **dari**  berikut untuk mengatur gambar dasar aplikasi:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Anda dapat menambahkan file .dockerignore untuk menghapus file yang bukan milik gambar Docker.
{{_LINE_46_}}
{{_LINE_47_}}
Mari kita buat **node_modules**  subdirektori di /home /node bersama dengan direktori aplikasi. Ini akan memastikan bahwa mereka memiliki izin yang diperlukan, yang akan penting ketika kami membuat modul node lokal di wadah dengan instalasi NPM.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
Selanjutnya, atur direktori kerja aplikasi ke/home/node/app:
```
...
WORKDIR /home/node/app
```
Selanjutnya, salin paket.json dan package-lock.json, tetapkan file proyek ke "node" pengguna non-root dan kemudian jalankan instalasi NPM
```
...
COPY package*.json ./
USER node
RUN npm install
```
Salin kode aplikasi Anda dengan izin yang sesuai ke direktori aplikasi pada wadah
```
...
COPY --chown=node:node . .
```
Perintah Ekspos untuk mengekspos port:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
Versi final DockerFile seharusnya terlihat seperti ini:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## Bangun gambar dan jalankan wadah   {#build}
Jalankan perintah berikut untuk menghasilkan gambar Docker Anda
```
docker build -t <<image_name>> .
```
Ini akan menghasilkan _docker Image_ yang dapat Anda periksa dengan menggunakan perintah gambar Docker. Sekarang dimungkinkan untuk membuat wadah dengan gambar ini menggunakan perintah berikut:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Ini akan memulai wadah yang dapat Anda verifikasi dengan menjalankan perintah Docker PS. Sekarang di browser Anda jika Anda mengakses http: // localhost: 3000 Anda akan melihat aplikasi Node.js Anda berjalan. Namun kali ini sekarang berjalan dari wadah Docker Anda.

## kesimpulan   {#conclusion}
Pengembangan dengan wadah Docker sangat sederhana dan mudah. Docker membantu pengembang untuk mengemas dan menjalankan aplikasi sebagai wadah. Dalam tutorial ini kami belajar cara membangun aplikasi Node.js menggunakan Docker Container di Ubuntu. Dalam artikel mendatang, kami akan menulis tentang lebih banyak penggunaan Docker dan juga kami akan membahas alat -alat lain.

## Mengeksplorasi
  * [Cara menginstal beberapa versi PHP dengan Nginx di Ubuntu][7]
  * [Cara Mengatur dan Mengkonfigurasi Nginx sebagai Proxy Terbalik][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
