---
title: "Cara mengatur solusi cmdb ralph di localhost" 
seoTitle: "Cara mengatur solusi cmdb ralph di localhost" 
description: "Tutorial ini adalah tentang menyiapkan Ralph di Localhost. Ralph adalah solusi CMDB gratis yang menyediakan fitur untuk melacak aset dan konfigurasi." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "Solusi manajemen aset TI mengurangi biaya operasional dan meningkatkan efisiensi. Artikel ini adalah tentang cara mengatur perangkat lunak CMDB Ralph di mesin lokal Anda." 
url: /id/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## Solusi manajemen aset TI mengurangi biaya operasional dan meningkatkan efisiensi. Artikel ini adalah tentang cara mengatur perangkat lunak CMDB Ralph di mesin lokal Anda.

{{< figure align=center src="images/ralph.png" alt="Solusi CMDB">}}


##  **Ringkasan**  
Pada titik waktu saat ini, organisasi berkembang untuk memenuhi laju teknologi dengan menggunakan infrastruktur TI yang besar. Selanjutnya, tidak kurang dari tantangan untuk mengelola lingkungan yang begitu besar. Dibutuhkan tenaga kerja dan kekuatan teknologi untuk menyelesaikan tugas -tugas kritis seperti itu. Kadang -kadang, menjadi repot untuk merumuskan proses dan prosedur untuk menangani jaringan sistem yang kompleks yang mencakup printer, komputer desktop, pemindai, telepon, dan aksesori TI lainnya. Demikian juga, konfigurasi node ini juga penting karena ada peluang tinggi downtime dari mesin apa pun di jaringan. Oleh karena itu, harus ada pemeriksaan yang konsisten atas konfigurasi ini.
Namun, ada banyak sumber terbuka dan perangkat lunak gratis yang tersedia untuk melacak dan mencatat aset. Perangkat lunak ini dikenal sebagai Configuration Management Database Software (CMDB). Baru -baru ini, [containerize.com][1] menerbitkan solusi CMDB [Ralph][2] yang menyediakan banyak fitur untuk aset yang lebih baik dan manajemen konfigurasi. Dalam posting blog ini, kami akan menjelajahi Ralph dengan meliput poin -poin berikut.
*  **[Pengenalan singkat tentang CMDB Software Asset Management Ralph][3]**  
*  **[Fitur Ralph][4]**  
*  **[Bagaimana cara mengatur ralph di localhost?][5]**  
*  **[Kesimpulan][6]**  

## Pengenalan Singkat Manajemen Aset Perangkat Lunak CMDB Ralph {#intro}

Ralph adalah solusi manajemen aset IT open source gratis. Ini adalah cross-platform dan dilengkapi dengan kemampuan hosting sendiri. Ada ekosistem lengkap pelacakan aset waktu nyata. Oleh karena itu, pengguna dapat melakukan analisis untuk pelaporan. Ini memungkinkan pengguna untuk merekam detail aset tentang siklus hidup mereka. Selain itu, perangkat lunak manajemen aset digital open source ini menyediakan ruang untuk menyimpan informasi tentang aset pusat data. Di sisi lain, solusi CMDB ini juga memberikan dukungan untuk mengelola perangkat lunak, lisensi, sertifikat, dan kontrak lainnya. Ralph tidak hanya mendukung manajemen aset tetapi juga memberikan ketentuan untuk melakukan tindakan pada aset tersebut. Namun, tindakan tersebut terkait dengan menggunakan host, menghasilkan faktur, pelacakan domain, atau manajemen inventaris.
Solusi manajemen aset TI ini muncul dengan antarmuka yang tenang. Pengembang dapat mengintegrasikan banyak aplikasi pihak ketiga menggunakan titik akhir API yang diekspos oleh alat bebas sumber terbuka ini. Selain itu, Ralph ditulis dalam Python bersama dengan input HTML, CSS, dan JavaScript. Oleh karena itu, ada dokumentasi komprehensif yang tersedia mengenai pengembangan dan penyebaran. Kode sumber solusi manajemen stok ini tersedia di [GitHub][7].

## Fitur Ralph {#features}

Ralph menawarkan banyak fitur. Namun, kami akan menyebutkan beberapa fitur utama berikut.
 **Extensible** : Perangkat lunak manajemen aset digital open source ini sangat dapat diperluas. Pengembang dapat menggunakannya di tempat atau di cloud sesuai kebutuhan mereka.
 **Dukungan untuk pusat data:**  Ralph juga menawarkan dukungan untuk gudang data, ruang pusat data, server, dan rak. Pengguna dapat melacak semua komponen, jaringan mereka, dan konfigurasi.
 **REST API** : Perangkat lunak CMDB gratis ini sangat dapat disesuaikan. Bahkan, ini menyediakan API REST untuk integrasi pihak ketiga. Pengembang dapat memperluasnya sesuai dengan persyaratan mereka.
 **Antarmuka pengguna intuitif:**  Ada antarmuka pengguna logis yang tersedia dalam solusi CMDB ini di mana pengguna dapat menavigasi dengan mudah. Selanjutnya, dasbor admin menyediakan berbagai widget yang menunjukkan data yang datang secara real-time.
 **Antarmuka baris perintah** : Ralph membuat antarmuka baris perintah yang menyediakan fasilitas untuk menemukan alamat MAC untuk penyebaran host.
 **Dukungan untuk aset non-fisik** : Solusi manajemen peralatan ini tidak hanya memberikan dukungan untuk aset fisik tetapi juga mengelola sumber daya non-fisik seperti domain, perangkat lunak, dan lisensi.

## Bagaimana cara mengatur ralph di localhost? {#setup}

Di bagian ini, kami akan melalui proses instalasi perangkat lunak manajemen sumber daya Ralph pada mesin lokal. Cukup mudah untuk diatur dan digunakan.
Sebelum pindah ke bagian berikutnya, pastikan Anda telah menginstal prasyarat berikut.
  * [Docker-Compose][8]
  * [Docker][9]
Sebagian besar perangkat lunak open source menawarkan gambar Docker untuk penyebaran di berbagai platform. Ini memberikan kemudahan bagi pengembang dan mempercepat proses pengembangan dan penyebaran.
Setelah prasyarat dipasang, nyalakan Docker. Sekarang, buka terminal dan jalankan perintah berikut untuk membuat direktori kosong:
```
mkdir ralph<br>cd ralph
```
Setelah itu, buat file baru bernama ‘Docker-Compose.yml’ dan mengisinya dengan data berikut.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Sekarang, simpan file dan jalankan perintah berikut untuk membuat build:
```
docker-compose build

```
Setelah membangun yang sukses, jalankan perintah berikut untuk database:
```
docker-compose run –rm web /root/init.sh

```
Jika semuanya berjalan dengan baik, jalankan perintah berikut untuk memutar wadah Docker:
```
docker-compose up -d
```
Setelah menjalankan perintah itu, wadah Docker akan naik dan berjalan seperti yang ditunjukkan pada gambar di bawah ini:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="Solusi CMDB">}}

Akhirnya, buka browser dan akses aplikasi di alamat ini http://127.0.0.1.
Ini akan menampilkan halaman login seperti yang ditunjukkan pada gambar di bawah ini:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="Solusi CMDB">}}


## Kesimpulan {#Kesimpulan}

Setelah melalui posting blog tutorial CMDB ini, satu hal jelas bahwa manajemen aset hampir tidak mungkin tanpa solusi CMDB yang baik. Perangkat lunak manajemen sumber daya memiliki peran khusus dalam mengelola dan melacak aset, konfigurasi, dan hubungannya. Ada ketentuan untuk melacak perubahan yang hampir tidak dibuat pada aset digital atau fisik. Alat gratis ini mudah diatur, digunakan, dan dilengkapi dengan dokumentasi dan panduan terperinci. Akhirnya, [  **containerize.com** ][1] dimaksudkan untuk menulis artikel tentang produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan [][10] **ini [perangkat lunak CMDB][11]**  Kategori untuk pembaruan terbaru.

## Mengeksplorasi
*  **[CMDB Software][11]**  
*  **[ralph][2]**  
* [  **Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka**  ][12]
*  **[tren pengembangan perangkat lunak yang harus diwaspadai pada tahun 2021][13]**  



[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
