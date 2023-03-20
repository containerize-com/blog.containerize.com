---
title: "Cara membuat situs web e-learning dengan moodle lms" 
seoTitle: "Cara membuat situs web e-learning dengan moodle lms" 
description: "Moodle LMS adalah solusi e-learning gratis dan open source untuk membuat platform pembelajaran online. Lihatlah panduan untuk membiasakan diri dengan itu." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Bangun platform pembelajaran online dengan platform e-learning open source. Artikel ini menjelaskan cara menggunakan Moodle LMS untuk membuat situs pembelajaran jarak jauh." 
url: /id/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Bangun platform pembelajaran online dengan platform e-learning open source. Artikel ini menjelaskan cara menggunakan Moodle LMS untuk membuat situs pembelajaran jarak jauh.

{{< figure align=center src="images/moodle-banner.png" alt="LMS Moodle">}}

Kami telah menderita Covid 19 selama lebih dari setahun. Setiap bagian dunia telah ditempatkan di bawah penguncian. Ini memiliki dampak negatif pada kehidupan dan perusahaan orang di seluruh dunia. Lebih penting lagi, ini memiliki dampak besar pada sistem pendidikan kita. Lembaga pendidikan harus melakukan transisi ke pembelajaran online sehingga siswa dapat melanjutkan pendidikan mereka dari kenyamanan rumah mereka sendiri. Tanpa platform e-learning yang solid dan aman, pembelajaran online tidak mungkin. Dalam artikel ini, kita akan melihat proyek ** open source ** Moodle, yang memungkinkan guru dan siswa untuk berkomunikasi dan belajar dari mana saja.
Kami akan membahas bagian-bagian berikut dalam artikel ini untuk ** membuat situs web e-learning ** menggunakan Moodle.
  * [Prasyarat][1]
  * [Apa itu Moodle?][2]
  * [Fitur Moodle][3]
  * [Instalasi Moodle][4]
  * [Kesimpulan][5]

## Prasyarat {#perequisites}
Jika Anda belum melakukannya, Anda harus menginstal dan mengkonfigurasi lingkungan lampu di server Anda.

## Apa itu Moodle? {#Apa}
[** Moodle **][6] adalah solusi e-learning bebas dan open source. Moodle adalah singkatan dari lingkungan pembelajaran dinamis yang berorientasi objek modular. Itu diciptakan untuk memberi para pendidik, administrator, dan pelajar platform e-learning untuk menciptakan dan memberikan lingkungan belajar individual. Lebih lanjut, Moodle adalah ** LMS yang cocok untuk sekolah **, universitas, dan kursus pelatihan profesional di perusahaan. Ini adalah salah satu solusi pembelajaran ** jarak jauh ** untuk membuat situs web LMS. Selain itu, Moodle memberi para guru dan siswa dengan alat yang kaya dan lingkungan belajar kolaboratif. Moodle memiliki aplikasi seluler untuk ponsel dan tablet iPhone, Android, dan Windows. Aplikasi seluler dapat digunakan dari lokasi mana pun di seluruh dunia. LMS ** yang diselenggarakan sendiri ** ini ditulis dalam PHP dan menyimpan data dalam database MySQL/PostgreSQL. Muncul dengan dokumentasi pengguna dan pengembang yang luas. Semua kode sumber tersedia di [** github **][7]. Lisensi untuk solusi open source ** e-learning ini ** adalah gplv3+.

## Fitur Moodle {#Features}
Moodle hadir dengan banyak fitur. Namun, dalam artikel ini, kami akan membahas beberapa fitur utama berikut.
** Alat dan aktivitas kolaboratif **: Forum, wiki, glosarium, aktivitas basis data, dan alat lain memungkinkan pengguna untuk berkolaborasi dan belajar bersama. Sekelompok elemen dalam kursus Moodle disebut sebagai kegiatan. Suatu kegiatan biasanya adalah sesuatu yang dilakukan siswa di mana ia berinteraksi dengan siswa lain dan/atau guru.
** Lacak Kemajuan **: Pendidik dan siswa dapat melacak kemajuan dan penyelesaian mereka menggunakan berbagai alat untuk melacak kegiatan atau materi tertentu serta di tingkat kursus. Ada beberapa cara untuk melacak kemajuan siswa di Moodle seperti nilai, kompetensi, penyelesaian aktivitas, penyelesaian kursus, lencana, laporan kursus, dan analitik.
** Manajemen Plugin **: Plugin memungkinkan Anda untuk memperluas fungsionalitas mendasar Moodle dengan menambahkan fitur baru. Pengguna dapat menambahkan plugin untuk berbagai tugas seperti aktivitas tambahan, jenis pertanyaan kuis baru, laporan baru, konektor sistem, dan banyak lagi. Antarmuka admin dapat digunakan untuk menginstal dan menonaktifkan plugin.
** Manajemen Kursus **: Buat dan kelola kursus yang memenuhi berbagai kebutuhan. Kelas yang dipimpin instruktur, kelas mandiri, kelas campuran, dan kelas online sepenuhnya adalah semua pilihan.
** Peer dan penilaian diri **: Lokakarya dan survei adalah kegiatan bawaan yang mendorong siswa untuk melihat, menilai, dan meninjau pekerjaan mereka sendiri dan teman sekelas lainnya sebagai sebuah kelompok.

Instalasi ## Moodle {#moodle}
Ikuti panduan langkah demi langkah di bawah ini untuk menginstal Moodle LMS di Ubuntu 18.04.
  * Pertama, jalankan perintah di bawah ini untuk mengubah unduhan Directlory dan unduh Moodle.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Jalankan perintah berikut, buat direktori data dan atur izin.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Buat file konfigurasi nginx untuk situs Moodle.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Tambahkan kode di bawah ini dan simpan file.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Buat symlink untuk mengaktifkan situs yang baru dibuat.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Restart Nginx Web Server.
```
sudo systemctl restart nginx
```
  * Selanjutnya, buka browser Anda dan ketik http://example.com. Ganti "example.com" dengan nama domain yang sebenarnya atau IP server Anda.
  * Sekarang, Anda dapat melihat Wizard Instalasi. Pilih bahasa dan klik tombol berikutnya.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - Pilih Bahasa">}}

  * Anda perlu meninjau dan memastikan bahwa URL situs, direktori root Moodle, dan jalur direktori data sudah benar. Anda juga dapat mengubah jalur "direktori data" dan harus berada di luar direktori kode Moodle untuk keamanan. Klik tombol berikutnya.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Setel Data Directory Path">}}

  * Pilih driver database di langkah ini. Namun, Anda dapat menggunakan yang sudah dipilih dan klik tombol berikutnya.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle - Pilih Driver Database">}}

  * Menyediakan pengaturan basis data seperti host basis data, nama database, pengguna database, kata sandi basis data, dan awalan tabel. Klik tombol berikutnya.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Pengaturan Database">}}

  * Klik tombol konfirmasi untuk menyetujui syarat dan ketentuan.
  * Anda dapat melihat daftar ekstensi PHP yang diperlukan. Namun, Anda harus menginstal add-on yang hilang. Klik tombol Lanjutkan untuk memindahkan langkah berikutnya.
  * Pada titik ini, Anda perlu mengisi data administrator untuk membuat akun. Klik tombol "Perbarui Profil".
  * Berikan informasi untuk situs Anda seperti nama situs lengkap, nama pendek untuk situs, ringkasan frontpage, zona waktu default, dan email tanpa-reply. Klik tombol "Simpan Perubahan".
  * Lengkapi pendaftaran situs Anda dengan memberikan informasi seperti nama situs, bahasa, wilayah, alamat email, dll.

## kesimpulan {#conclusion}
Kami belajar tentang Moodle dan fitur utamanya dalam artikel ini. Kami juga membahas pendekatan langkah demi langkah untuk menyiapkan ** Moodle LMS ** untuk ** membuat situs web e-learning **. Anda dapat meninjau [** dokumentasi resmi Moodle **][8] untuk menjadi lebih nyaman dengan berbagai fungsi seperti kursus, pendaftaran siswa, pelacakan kemajuan, dan sebagainya. Saya harap Anda menemukan posting ini berguna dalam membuat situs web LMS.
Akhirnya, [** containerize.com **][9] sedang dalam proses penulisan posting blog yang konsisten pada produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [** Sistem Manajemen Pembelajaran ini **][10] untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  *[** Alat LMS Open Source **][11]
  *[** Moodle-Sistem E-Learning **][12]

  
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
