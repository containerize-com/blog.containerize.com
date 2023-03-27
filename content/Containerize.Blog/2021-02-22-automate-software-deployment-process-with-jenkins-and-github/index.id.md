---
title: "Integrasi Berkelanjutan dan Penyebaran Berkelanjutan dari Server Kontrol Sumber" 
seoTitle: "Integrasi Berkelanjutan dan Penyebaran Berkelanjutan dari Server Kontrol Sumber" 
description: "Alat penyebaran gratis membantu tim pengembangan untuk mengotomatisasi alur kerja pengiriman perangkat lunak. Bangun dengan cepat, uji, gunakan perangkat lunak dengan Jenkins dan Github Repository." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Mengotomatiskan alur kerja pengembangan menggunakan alat penyebaran gratis. Kami akan belajar cara mengatur CI/CD dengan Jenkins Automation Server dan Github untuk penyebaran perangkat lunak." 
url: /id/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## Otomatis alur kerja pengembangan menggunakan alat penyebaran gratis. Kami akan belajar cara mengatur CI/CD dengan Jenkins Automation Server dan Github untuk penyebaran perangkat lunak.

{{< figure align=center src="images/ci-cd-post.png" alt="Integrasi berkelanjutan dan penyebaran berkelanjutan">}}

Tim pengembangan menggunakan metode yang berbeda untuk penyebaran perangkat lunak seperti FTP, menarik kode dari repositori, dan banyak lagi. Semua metode ini dilakukan secara manual dan membutuhkan banyak upaya. Kita dapat melihat bahwa lebih banyak tim mengikuti metodologi Agile untuk pengembangan perangkat lunak. Jadi, mereka merilis fitur baru dan perbaikan bug. Oleh karena itu, mengotomatiskan alur kerja pengiriman perangkat lunak membantu tim untuk meluncurkan versi baru dengan cepat dan tanpa kesalahan. Kami akan belajar cara menggunakan **CI/CD dengan Jenkins** dan Github untuk mengotomatisasi proses pengiriman perangkat lunak. Kami akan membahas bagian -bagian berikut dalam artikel ini.
* [ **Apa itu Jenkins?** ][1]
* [ **Integrasi Berkelanjutan** ][2]
* [ **Penempatan kontinu** ][3]
* [ **Konfigurasikan Jenkins** ][4]
* [ **Buat pekerjaan Jenkins** ][5]

## Apa itu Jenkins? {#Jenkins}

**Jenkins **adalah alat penyebaran gratis** yang kuat **untuk mengotomatisasi proses pengiriman perangkat lunak. Ini adalah server otomatisasi open source untuk membangun, menguji, dan penyebaran. Jenkins menggunakan arsitektur master-slave. Ini memungkinkan tim perangkat lunak untuk menjalankan beberapa build dan tes untuk perangkat lunak secara bersamaan. Selain itu, ada banyak plugin yang tersedia dan tim dapat menggunakannya sesuai kebutuhan. Anda dapat mengunjungi halaman [** Jenkins**][6] untuk informasi dan instalasi lebih lanjut. Selanjutnya, Anda dapat menemukan kode sumber di Jenkins [** github**][7] Repositori.

## Integrasi berkelanjutan {#CI}

**Integrasi Berkelanjutan** adalah praktik pengembangan yang mengharuskan pengembang untuk sering mengintegrasikan kode ke dalam repositori bersama. Setiap integrasi/dorongan kode ke dalam repositori dapat diverifikasi dengan build dan pengujian otomatis. Ini juga memungkinkan pengembang untuk dengan mudah mengidentifikasi masalah dalam kode.

## Penempatan terus menerus {#CD}

**Penempatan kontinu** adalah langkah berikutnya setelah integrasi berkelanjutan. Ini akan memungkinkan tim untuk terus menggunakan kode di server. Selain itu, ini membantu pengembang untuk mengurangi tugas yang berulang dan meningkatkan kelincahan.

## Konfigurasikan Jenkins {#Configure}

Ikuti pedoman langkah demi langkah di bawah ini untuk konfigurasi di Jenkins.
  * Buka situs dan login Jenkins Anda.
  * Instal plugin "Publik Over SSH". Anda dapat mencarinya dengan menavigasi ke “Kelola Jenkins → Kelola Plugin → Tersedia”.
  * Hasilkan tombol SSH di Build Server sebagai pengguna "Jenkins" seperti yang ditunjukkan di bawah ini.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * Sambungkan ke server target/penyebaran menggunakan SSH. Jalankan perintah di bawah ini dan tempel konten file pub ke server target.
```
$ cd .ssh
$ nano authorized_keys
```
  * Arahkan untuk mengelola “Jenkins → Configure System → Publish Over SSH”.
  * Tambahkan tombol SSH baik dengan menemukan jalur file atau tempel konten yang sama seperti yang dilakukan untuk server penyebaran.
  * Tambahkan server SSH dengan mengklik tombol "Tambah" di sebelah "Server SSH".
  * Masukkan nama, nama host, nama pengguna, dan jarak jauh untuk server penyebaran/target.
  * Klik tombol Konfigurasi Tes untuk memastikan bahwa Jenkins dapat terhubung ke server penyebaran.
  * Terakhir, klik tombol simpan untuk menyimpan informasi.

## Buat pekerjaan Jenkins {#Create}

Anda dapat menggunakan langkah -langkah ini untuk membuat pekerjaan Jenkins.
  * Buka dasbor Jenkins dan klik tombol "Item Baru".
  * Masukkan nama proyek dan pilih "pekerjaan gaya bebas".
  * Masukkan URL Repositori GitHub di bawah “Jendela Konfigurasi”.
  * Di bagian “Build Environment”, periksa opsi ini “Hapus Ruang Kerja Sebelum Build dimulai” dan “Kirim file atau jalankan perintah melalui SSH setelah Build berjalan”.
  * Masukkan nama, file sumber, dan direktori jarak jauh di bawah lingkungan build.
  * Simpan pekerjaan dan bangun.
  * Sambungkan ke Server Penyebaran dan pastikan kode itu ada di sana.

## Kesimpulan
Kami telah membahas **server Jenkins**, **Integrasi Berkelanjutan** , dan **Penyebaran Berkelanjutan** Dalam artikel ini. Kami juga telah belajar cara mengkonfigurasi alat penempatan**gratis** dan membuat pekerjaan Jenkins untuk penempatan menggunakan GitHub. Alat CI/CD gratis memungkinkan tim pengembangan untuk mengotomatisasi alur kerja pengiriman perangkat lunak dan tetap fokus pada pekerjaan penting. Kami akan meliput alat penempatan lain di posting mendatang.
Akhirnya, [ **containerize.com**][8] akan menerbitkan artikel tentang alat penyebaran open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan [**alat penempatan** ][9] Kategori untuk pembaruan rutin.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
* **[Jenkins][6]** 
* [ **drone** ][10]
* [ **Deployer** ][11]
* [ **capistrano** ][12]
* [ **Rancher** ][13]
* [ **Concourse** ][14]
* [ **ansible** ][15]
* [ **gocd** ][16]
* [ **Top 5 Alat Penyebaran Sumber Terbuka di 2021** ][17]
* [ **Otomatis Penerapan Aplikasi PHP dengan Deployer** ][18]



[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
