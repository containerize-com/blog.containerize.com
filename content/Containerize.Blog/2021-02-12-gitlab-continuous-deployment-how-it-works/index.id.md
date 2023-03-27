---
title: "Gitlab Continuous Deployment | Bagaimana itu bekerja?" 
seoTitle: "Gitlab Continuous Deployment | Bagaimana itu bekerja?" 
description: "Dalam tutorial ini, kami akan membangun pipa penempatan berkelanjutan dengan Gitlab. Penyebaran berkelanjutan Gitlab membantu DevOps untuk melakukan penyebaran otomatis." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "Penyebaran Otomatis merampingkan alur kerja & amp; proses. Tutorial GitLab ini membantu Anda belajar mengatur pipa penyebaran kontinu menggunakan GitLab CI/CD." 
url: /id/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## Penerapan Otomatis merampingkan alur kerja & proses Anda. Tutorial GitLab ini membantu Anda belajar mengatur pipa penyebaran kontinu menggunakan GitLab CI/CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="Gitlab Penempatan Berkelanjutan">}}


## Ringkasan
Dalam beberapa artikel terakhir, kami belajar tentang [dasar -dasar kontrol versi][1] dan kemudian kami meningkatkan pengetahuan kami dengan belajar tentang berbagai [model percabangan][2] dan alur kerja. Sistem kontrol versi telah membawa efisiensi di dunia pengembangan, penyebaran, dan integrasi. Pengembang merasa sangat mudah untuk melakukan kode sumber tanpa khawatir tentang build dan tes. Industri perangkat lunak telah mendapatkan kepercayaan diri dan keunggulan kompetitif karena pendekatan ini telah mem -boot penyebaran.
**Gitlab Penyebaran Berkelanjutan** dan Integrasi membantu dalam menemukan masalah dengan mudah. Selain itu, pengembang dapat melacak bug dan penanganan Miss lainnya dalam rentang waktu yang lebih singkat. Seluruh proses otomatisasi ini memberikan kebebasan dari tugas yang sering terjadi dan mengurangi tenaga kerja dan peluang kesalahan. Hari ini di posting blog ini, kami akan mengeksplorasi tentang pipa penempatan berkelanjutan dengan Gitlab CI/CD. Jadi, mari kita mulai dengan menutupi poin -poin berikut!
* **[Apa itu CI & CD][3]** 
* **[apa itu gitlab runner][4]** 
* **[. Gitlab-ci.yml file][5]** 
* **[Buat aplikasi sampel dasar][6]** 
* **[Kesimpulan][7]** 

## Apa itu CI & CD {#cicd}

Continuous Integration (CI) adalah salah satu praktik terbaik DevOps untuk mengotomatisasi integrasi perubahan kode dari beberapa kontributor ke dalam satu proyek perangkat lunak tunggal. Hal ini memungkinkan pengembang untuk sering menggabungkan perubahan kode menjadi repositori pusat di mana bangunan dan tes kemudian dijalankan. Penyebaran kontinu (CD) bergerak satu langkah lebih jauh dengan secara otomatis menggunakan kode ke lingkungan target (produksi atau pementasan) setelah setiap kode berkomitmen dan dibangun.
Sebelum Anda mulai, pastikan Anda memiliki proyek di Gitlab yang ingin Anda gunakan CI/CD. Dan Anda harus memiliki akses tingkat pemelihara atau pemilik ke proyek.

## Apa itu Gitlab Runner {#runner}

Setelah pemahaman **Gitlab Penyebaran Berkelanjutan** , Gitlab Runner adalah program ringan kecil yang ditulis dalam Go yang menjalankan pekerjaan terkait integrasi kontinu (CI) pada mesin lokal Anda dan mengirimkan hasilnya ke GitLab untuk mempertimbangkan perubahan. Ini adalah biner tunggal yang dapat dieksekusi yang dapat diinstal pada OS utama apa pun.
Sebelum kami bergerak maju dengan Gitlab CI / CD, Anda perlu memastikan Anda memiliki pelari yang tersedia untuk menjalankan tugas Anda. Anda dapat mengikuti panduan resmi untuk [menginstal][8] dan [register][9] Gitlab Runner.

## file .gitlab-ci.yml {#yml}

**. Gitlab-ci.yml**adalah file tempat Anda mengkonfigurasi instruksi khusus untuk Gitlab CI/CD. Itu ditempatkan di akar repositori Anda dan berisi definisi tentang bagaimana proyek Anda harus dibangun. Setiap kali kami mendorong komitmen pada instance GitLab kami, Gitlab akan memohon pelari untuk membangun dan menguji proyek seperti yang diperintahkan di dalam file ini.

## Buat Aplikasi Sampel {#sample}

Di bagian tutorial **gitlab** ini, kami akan membuat aplikasi sampel. Dengan asumsi bahwa Anda sudah membuat repositori GitLab, mari kita buat aplikasi sampel dan kami akan mengatur proses CI / CD untuk aplikasi.
Pertama -tama, buat file package.json di root proyek Anda
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
Sekarang buat app.js di akar proyek Anda
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
Pada langkah terakhir **gitlab penempatan kontinu,**Buat**DockerFile** dan tambahkan konten berikut ke dalamnya:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
DockerFile berisi proses pembuatan untuk aplikasi ini. Ini melibatkan pembuatan wadah simpul dan memasang dependensi.
Sekarang kita perlu membuat file **. Gitlab-ci.yml** . File ini akan berisi instruksi untuk membangun proyek kami. Setiap kali kami mendorong komitmen ke repositori GitLab kami, Gitlab akan memohon pelari untuk membangun proyek.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Kami hanya memiliki satu tahap build dan baru saja **instalasi npm** sebagai skrip. Ini adalah perintah yang harus Anda jalankan secara manual setiap kali perubahan datang ke proyek Anda. Dan, di situlah pelari Gitlab masuk dan akan melakukan ini untuk Anda secara otomatis setiap kali Anda membuat komit.
Sekarang dengan asumsi bahwa Anda telah menginstal Runner GitLab dan juga telah mendaftarkannya dengan instance GitLab Anda, kami dapat menguji aksi GitLab CI / CD dengan membuat komitmen sederhana untuk aplikasi dan mendorongnya ke GitLab.
Anda kemudian dapat membuka proyek Anda di Gitlab, pergi ke proyek saya → Pipeline dan Anda akan melihat tag yang mengatakan "lulus" di sebelah komitmen yang Anda buat. Komitmen berikutnya juga akan memiliki tag.

## Kesimpulan {#conclusion}

Ini membawa kita ke akhir tutorial **gitlab ini**. Dalam artikel ini, kami belajar tentang dasar -dasar integrasi berkelanjutan Gitlab, **Apa itu CI & CD** , **Apa itu pelari gitlab** , dan penyebaran terus menerus. Lebih lanjut, kami mempelajari apa penggunaan pelari dalam keseluruhan alur kerja CI / CD. Kami juga membuat proyek sampel yang menjelaskan cara mengatur penyebaran kontinu menggunakan GitLab. Tutorial GitLab ini akan sangat membantu Anda jika Anda mencari**penempatan terus menerus gitlab** . Namun, ada banyak sumber daya lain yang disebutkan di bagian "Jelajahi" di bawah ini yang dapat Anda periksa. Selain itu, artikelnya tentang sistem kontrol versi****yang merupakan open source, hosting sendiri, dan dapat diperluas.
Akhirnya, [containerize.com][10] terus menulis posting blog tentang produk dan topik open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [][11][versi kontrol versi][12] untuk pembaruan rutin. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][13], [LinkedIn][14], dan [Twitter][15].

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Otomatis alur kerja pengembangan perangkat lunak dengan tindakan github][16]
  * [Memahami dan mempelajari cabang dan tarik permintaan di git][2]
  * [Perangkat Lunak Manajemen Kode Sumber | Apa itu git?][17]
  * [Top 5 Sistem Kontrol Versi Sumber Terbuka di 2021][18]
  * [Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka][19]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
