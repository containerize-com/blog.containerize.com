---
title: "Cara menginstal platform berbagi file pydio di ubuntu" 
seoTitle: "Cara menginstal platform berbagi file pydio di ubuntu" 
description: "Pydio adalah berbagi file open source dan perangkat lunak berbagi dokumen kolaboratif yang diselenggarakan sendiri. Mari kita tinjau cara menginstal alat berbagi dan sinkronisasi file pydio." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio adalah platform berbagi dan sinkronisasi file berbasis cloud untuk mengakses semua data di mana saja dan di perangkat apa pun. Tutorial ini adalah tentang cara menginstal Pydio di Ubuntu." 
url: /id/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio adalah platform berbagi dan sinkronisasi file berbasis cloud untuk mengakses semua data di mana saja dan di perangkat apa pun. Tutorial ini adalah tentang cara menginstal Pydio di Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Cara menginstal platform berbagi file pydio di ubuntu">}}


## **Ringkasan**
Pydio Cells adalah perangkat lunak berbagi file open source dan sinkronisasi. Ini memberikan satu titik akses ke semua penyimpanan data Anda dan ini merupakan alternatif untuk OwnDloud dan NextCloud yang menyediakan layanan penyimpanan, berbagi file, dan sinkronisasi. Pydio adalah platform berbagi file open source perusahaan yang mirip dengan Dropbox dan platform penyimpanan lainnya. Ini membantu Anda untuk menghubungkan semua file dan perangkat Anda dengan aman dalam satu platform.
Pydio Cells adalah platform sinkronisasi file dan kolaborasi berbasis cloud. Perangkat lunak open source ini berjalan pada infrastruktur TI pribadi Anda dan membantu staf Anda untuk melindungi dan memantau data bisnis Anda. Anda dapat menyinkronkan data Anda dan mengaksesnya dari mana saja menggunakan aplikasi seluler, perangkat lunak desktop, atau browser web menggunakan sel Pydio. Aplikasi berbagi file terbaik sel Pydio didasarkan pada arsitektur layanan mikro dan ditulis menggunakan bahasa pemrograman Golang.
Tutorial ini akan membantu Anda menginstal dan mengonfigurasi perangkat lunak berbagi file yang di -host pydio dan platform sinkronisasi pada sistem Ubuntu LTS.
  * Mulai
  * Pasang server lampu
  * Instal Pydio di Ubuntu
  * Buat database dan pengguna Pydio
  * Akses pydio di browser Anda
  * Kesimpulan

## Langkah 1: Memulai
Sebelum instalasi, Anda perlu memastikan bahwa sistem Anda menjalankan paket terbaru. Gunakan perintah di bawah ini untuk memperbarui server Ubuntu 20.04 Anda.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Setelah pembaruan, selalu disarankan untuk me -reboot server Anda agar perubahan baru berlaku.
```
sudo reboot
```

## Langkah 2: Instal Lamp Server
Untuk mengatur server berbagi file Pydio Secure Enterprise dan cara membuat cloud pribadi open source, pertama -tama kita harus mengatur server lampu yang berjalan. Jika Anda sudah memasang dan menjalankan tumpukan lampu, lewati langkah ini, gunakan perintah pengikut untuk mengatur lampu pada sistem ubuntu Anda.

## # Instal PHP
Anda dapat menginstal PHP pada sistem Ubuntu atau Debian Anda dengan menjalankan perintah:
sudo apt-get menginstal properti python-software
Sudo Add-apt-Repository PPA: ondrej/php
sudo apt-get install -y php pHp-gd php-curl pHp-zip pHp-dom php-xml PHP-simplexml pHP-mbstring
{{_LINE_34_}}

## # Instal apache2
Apache adalah perangkat lunak server web open-source yang paling banyak digunakan. Selanjutnya, instal server web Apache di Ubuntu dengan menjalankan:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

## # Instal MySQL
MySQL Open-Source Relational Database Management System adalah komponen dari tumpukan perangkat lunak aplikasi web lampu dan lainnya. Sekarang menginstal MySQL di Ubuntu dengan berjalan di bawah ini:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
Setelah instalasi selesai, buka **php.ini**  file konfigurasi untuk diedit. Gunakan editor file pilihan Anda.
Buat perubahan pada file php.ini seperti di bawah ini. Buka dua file dan buat perubahan seperti yang ditunjukkan
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Membuat perubahan berikut
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Simpan dan tutup file dan lanjutkan untuk mengedit file php.ini lainnya
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Langkah 3: Instal Pydio di Ubuntu
Pertama, Anda perlu menambahkan repositori perangkat lunak berbagi file gratis Pydio ke server Ubuntu 20.04 Anda karena belum tersedia. Juga tambahkan Pydio Sistem Berbagi File Terbaik untuk Kunci Publik Bisnis dan lanjutkan untuk memperbarui repositori sistem Anda.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Sekarang saatnya menginstal Pydio EFSS dan perangkat lunak berbagi dokumen. Jalankan perintah seperti yang ditunjukkan
```
sudo apt install -y pydio pydio-all
```
Aktifkan Modul Penulisan Ulang Apache Menggunakan perintah yang ditampilkan di bawah ini dan restart dan aktifkan Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Konfirmasikan bahwa Layanan Apache sedang berjalan menggunakan perintah di bawah ini:
```
sudo systemctl status apache2
```
Output harus seperti yang ditunjukkan jika instalasi dilakukan dengan benar, menunjukkan bahwa layanan APACHE2 sedang berjalan.

## Langkah 4: Buat database dan pengguna Pydio
Setelah mengekstraksi kode, sekarang mari kita buat database MySQL dan akun pengguna untuk mengkonfigurasi pydio. Gunakan set perintah berikut untuk masuk ke MySQL Server untuk membuat Ajaxplorer ShareSync atau Pydio Database dan pengguna.
mysql -u root -p
Masukkan kata kunci:
mysql> buat basis data pydio;
mysql> berikan semua di pydio.* ke 'pydio'@'localhost' diidentifikasi oleh '_password_';
mysql> hak istimewa flush;
mysql> berhenti
{{_LINE_69_}}
Selanjutnya, kita perlu menginstal Pydio di Ubuntu dari antarmuka web untuk membuat cloud pribadi.

## Langkah 5: Akses pydio di browser Anda
Buka browser Anda dan ketik url _http: /// pydio_. Anda harus melihat halaman seperti yang ditunjukkan
Pydio Private Cloud File Sharing dan perangkat lunak berbagi file bisnis sekarang diinstal dan dikonfigurasi, sekarang saatnya untuk mengakses antarmuka web mereka.
Buka browser Anda dan ketik url http: // server Anda -IP / pydio. Anda akan dialihkan ke halaman berikut:

{{< figure align=center src="images/Pydio-Installer.png" alt="Pemasang Pydio">}}

Konfirmasikan semua kontrol dan klik **Lanjutkan ke instalasi pydio**  tombol. Anda harus melihat halaman berikut:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydio Setup Wizard">}}

Pilih bahasa Anda dan klik **Mulai Wizard** . Anda harus melihat halaman berikut:

{{< figure align=center src="images/Starting-the-setting.png" alt="Mulai Pengaturan Pydio">}}

Masukkan nama program dan pesan selamat datang. Kemudian klik tombol **berikutnya** . Anda harus melihat halaman berikut:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Masukkan Aplikasi Pydio">}}

Selanjutnya, masukkan akun administrator Anda dan klik tombol **berikutnya** . Anda harus melihat halaman berikut:

{{< figure align=center src="images/MySQL-database-settings.png" alt="Pengaturan Basis Data MySQL">}}

Kemudian masukkan detail database Anda, seperti nama basis data, nama pengguna, dan kata sandi. Kemudian klik tombol **Test DB Koneksi** . Anda harus melihat halaman berikut:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Opsi Pydio Advanced">}}

Selanjutnya, klik tombol Instal **Pydio** . Setelah instalasi selesai dengan sukses. Anda akan dialihkan ke halaman berikut:

{{< figure align=center src="images/Pydio-Login.png" alt="Login Pydio">}}

Kemudian masukkan nama pengguna dan kata sandi Anda untuk administrator. Kemudian klik tombol [Enter]. Anda harus melihat halaman berikut:

Ya! Selesai. Anda sekarang tahu cara menginstal Sinkronisasi File yang Di -Hosted Pydio dan Perangkat Lunak Berbagi File Open Source di Ubuntu untuk membangun cloud privat langkah demi langkah mirip dengan Dropbox atau Google Drive.

## **Kesimpulan:**    {#4a1a}
Dalam tutorial ini, Anda telah berhasil menginstal pembagian file aman Sumber Open Source Pydio pada sistem Ubuntu Anda. Anda dapat menggunakan artikel ini untuk membuat infrastruktur cloud untuk menyimpan, mengamankan, dan berbagi file Anda di cloud yang diselenggarakan sendiri. Gunakan berbagi dokumen kolaboratif PYDIO dan aplikasi berbagi file gratis terbaik untuk mendapatkan lebih banyak kontrol data Anda dan memastikan kolaborasi yang efisien di organisasi bisnis Anda. Dalam tutorial mendatang kami, kami akan membahas topik yang lebih menarik dari solusi penyimpanan cloud open source dan alat kolaborasi berbagi file.
_Your dapat bergabung dengan kami di [Twitter][1], [LinkedIn][2] dan halaman [Facebook][3] kami. Platform berbagi _file _file _file berbasis cloud apa yang Anda gunakan secara online?. Jika Anda memiliki pertanyaan, silakan_ [hubungi Anda][4].

## Mengeksplorasi:
Kami juga memiliki beberapa artikel lain yang berkaitan dengan manajemen sehari-hari server Anda.
  * [Cara Mengkonfigurasi Apache Sebagai Proksi Terbalik untuk Ubuntu/Debian][5]
  * [Cara Menginstal dan Mengamankan PHPMyAdmin dengan Nginx di Ubuntu][6]
  * [Aman dan enkripsi Nginx dengan Let's Encrypt on Ubuntu 20.04][7]
  * [Mengkonfigurasi Dukungan HTTP/2 di Nginx di Ubuntu/Debian][8]
  * [Pengaturan Nginx dengan penumpang di server produksi AWS][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
