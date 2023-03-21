---
title: "Cara Mengatur Server Surat Menggunakan Pos di Ubuntu" 
seoTitle: "Cara Mengatur Server Surat Menggunakan Pos di Ubuntu" 
description: "Kirim email dari aplikasi web Anda dengan server surat open source. Pos memungkinkan Anda untuk mengirim email menggunakan API SMTP & HTTP, dan memantau lalu lintas email juga." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Kirim dan terima email dengan server surat sumber terbuka. Artikel ini akan membantu Anda dalam menginstal dan mengkonfigurasi server surat pos untuk perusahaan Anda." 
url: /id/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Kirim dan terima email dengan server surat sumber terbuka. Artikel ini akan membantu Anda dalam menginstal dan mengkonfigurasi server surat pos untuk perusahaan Anda.

{{< figure align=center src="images/postal-banner.png" alt="Server surat open source">}}

Mengirim email pada berbagai jenis acara diperlukan untuk aplikasi modern. Setiap bisnis membutuhkan server email **yang andal  **untuk email keluar. Lebih lanjut, perusahaan memerlukan server surat untuk mengirim email massal untuk kampanye pemasaran, buletin, dan banyak tugas lainnya. Ada beberapa **  server surat open source  **tersedia untuk ini. Namun, kita akan membahas **  server pos**  secara rinci dalam posting ini dan membahas topik -topik berikut.
  * [Apa itu server surat pos?][1]
  * [Fitur Pos][2]
  * [Instalasi Pos][3]
  * [Kesimpulan][4]

## Apa itu server surat pos?   {#Postal}
[**Pos **][5] adalah server surat open source gratis dan **. Ini adalah server email berfitur lengkap untuk situs web dan aplikasi web. Server Pos Mail adalah alternatif untuk server email  **yang ada **  seperti SendGrid, dan MailGun.  **Pos **  adalah platform pengiriman email open source yang kuat, aman, dan terukur. Semua kode sumber dan dokumentasi tersedia di [ **github ** ][6]. Anda dapat mengunduh, menginstalnya di server pribadi Anda dan tetap mengendalikannya. Anda juga dapat meningkatkan dan meningkatkannya sesuai kebutuhan bisnis. Selain itu,  **server surat pos**   mendukung banyak organisasi.
Pengguna dapat melihat grafik dan statistik yang menunjukkan volume surat yang masuk & keluar. Selain itu, Anda dapat mengakses antrian pesan keluar & masuk lengkap. Server Pos Mail menyediakan fungsionalitas untuk webhooks. Anda dapat mengatur webhooks untuk menerima informasi langsung tentang informasi pengiriman secara real-time. Ini juga menawarkan retensi pesan yang memungkinkan Anda untuk menyimpan dan memeriksa semua pesan mengirim dan menerima. Pengiriman email sangat penting dalam bisnis untuk memastikan bahwa pengguna mendapatkan email. Namun, terkadang email mengirimkan ke pengguna dan Anda harus menyelidiki masalah ini. Server email yang masuk dan keluar dan keluar ** juga menyediakan penebangan dan alat lengkap untuk melakukan penyelidikan.

## fitur pos   {#features}
Server Pos Mail menawarkan banyak fitur. Namun, kami akan membahas fitur -fitur utama berikut dalam artikel ini.
**Mengirim email** : Server Pos Mail menyediakan dua teknik untuk email keluar termasuk HTTP API dan SMTP. Anda dapat dengan mudah menggunakan HTTP API untuk integrasi dengan aplikasi web. Anda juga dapat menggunakan server SMTP untuk integrasi dengan aplikasi dan sistem yang ada.
**Email yang masuk **:  **MAIL Masuk **  Dapat diteruskan ke titik akhir HTTP,  **Server SMTP**  , dan alamat email lainnya menggunakan server pos pos.
**Pemeriksaan spam dan virus** : Spamassassin dan Clamav dapat diintegrasikan dengan pos untuk secara otomatis memindai pesan yang masuk dan keluar saat mereka melewati server surat. Fitur ini juga dimatikan secara default.
**Klik dan buka pelacakan** : Pembukaan email dan klik dapat dilacak dengan pos. Pos akan memindai pesan keluar Anda dan mengganti tautan apa pun dengan tautan baru yang bergerak melalui server web pos Anda. Ketika pengguna mengklik tautan, Pos mencatat tindakan dan langsung mengarahkannya ke URL asli. Namun, ini tidak diaktifkan secara default.
**IP Pools** : Pos memungkinkan Anda mengirim pesan dari berbagai alamat IP. Ini memungkinkan Anda untuk menetapkan beberapa alamat IP ke berbagai server email atau mengirim dari IP yang berbeda tergantung pada pengirim atau alamat penerima.

## Instalasi Pos   {#installation}
Ikuti panduan langkah demi langkah di bawah ini untuk menginstal perangkat lunak server postal  ****  di Ubuntu 18.04.
  * Pertama, Anda perlu menghubungkan server Anda Vis SSH. Jalankan perintah berikut untuk memperbarui sistem dengan paket terbaru yang tersedia.
```
sudo apt-get update
```

### Instal Mariadb Database Server
  * Jalankan perintah untuk menginstal mariadb.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Setelah Anda selesai dengan instalasi. Sekarang, Anda perlu mengamankannya dengan menjalankan perintah di bawah ini.
```
mysql_secure_installation
```
  * Selanjutnya, ini akan menanyakan beberapa pertanyaan seperti yang ditunjukkan di bawah ini. Anda perlu menjawab semua pertanyaan.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Sambungkan ke server MariaDB dengan perintah berikut.
```
mysql -u root -p
```
  * Buat database untuk pos.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Selanjutnya, buat pengguna database yang disebut "postalUser" dengan kata sandi baru.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Setelah itu, berikan pengguna akses penuh ke pengguna ke database "postaluser".
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Selanjutnya, siram hak istimewa dan keluar dari shell mariadb dengan perintah berikut.
```
FLUSH PRIVILEGES;
EXIT;
```

### Instal Ruby
  * Pertama, tambahkan PPA pihak ketiga untuk menginstal Ruby. Jalankan perintah berikut.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Perbarui paket Ubuntu.
```
sudo apt update
```
  * Pasang Ruby dengan menjalankan perintah di bawah ini.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Instal RabbitMQ
  * Erlang diharuskan menginstal RabbitMQ jadi, Anda perlu menginstalnya juga. Tambahkan kunci repositori Erlang ke Ubuntu dengan perintah di bawah ini.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Selanjutnya, tambahkan repositori Erlang dengan perintah berikut.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Jalankan perintah berikut untuk menginstal Erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Setelah selesai dengan instalasi Erlang, Anda dapat melanjutkan untuk menginstal RabbitMQ. Tambahkan repositori Rabbitmq ke ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Tambahkan kunci GPG RabbitMQ dengan perintah berikut.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Jalankan perintah di bawah ini untuk menginstal paket RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Jalankan perintah di bawah untuk mengaktifkan RabbitMQ, jadi selalu dimulai saat sistem boot.
```
sudo systemctl enable rabbitmq-server
```
  * Selanjutnya, Anda perlu membuat rabbitmq vhost dan pengguna untuk pos. Jalankan perintah berikut untuk itu.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Instal NodeJs
  * Tambahkan repositori nodejs dengan perintah berikut.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Selanjutnya, jalankan perintah di bawah ini untuk menginstal nodeJS.
```
sudo apt-get install nodejs
```

### Instal Server Surat Pos
  * Pertama, Anda perlu membuat pengguna untuk server email pos. Buat dengan perintah berikut.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Selanjutnya, izinkan Ruby mendengarkan di port web.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Pasang semua permata yang diperlukan dengan perintah berikut.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Buat struktur direktori untuk pos.
```
sudo mkdir -p /opt/postal/app
```
  * Berikutnya, unduh versi terbaru pos.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Ekstrak file yang diunduh dengan perintah berikut.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Selanjutnya, ubah kepemilikan direktori pos.
```
sudo chown -R postal:postal /opt/postal
```
  * Buat symlink untuk biner pos dengan menjalankan perintah di bawah ini.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Pasang semua dependensi yang diperlukan.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Jalankan perintah di bawah ini untuk menginisialisasi konfigurasi pos.
```
sudo postal initialize-config
```
  * Selanjutnya, jalankan perintah berikut untuk membuka file konfigurasi pos.
```
sudo nano /opt/postal/config/postal.yml
```
  * Buat perubahan yang ditunjukkan dalam huruf tebal dan simpan file.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * Jalankan perintah untuk menginisialisasi database.
```
sudo postal initialize
```
  * Buat pengguna admin untuk pos.
```
sudo postal make-user
```
  * Selanjutnya, Anda harus memberikan detail akun pengguna seperti yang ditunjukkan di bawah ini.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```
  * Akhirnya, jalankan perintah berikut untuk memulai dan memeriksa status aplikasi pos.
```
sudo -u postal postal start
sudo -u postal postal status
```

### Instal Nginx
  * Jalankan perintah di bawah ini untuk menginstal server web nginx.
```
sudo apt install nginx
```
  * Berikutnya, salin konfigurasi postal Nginx untuk menggunakannya sebagai host virtual.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Buat sertifikat SSL yang ditandatangani sendiri.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Setelah itu, Anda perlu menjawab pertanyaan.
  * Buka file host virtual Nginx Default.
  * Ubah nilai server_name dan simpan file.
  * Akhirnya, restart Nginx Web Server dengan menjalankan perintah di bawah ini.
```
sudo systemctl restart nginx
```
  * Akhirnya, buka browser Anda dan ketik url https://postal.example.com. Anda akan dialihkan ke halaman login.

## kesimpulan   {#conclusion}
Kami telah membahas pendahuluan dan fitur utama dari server surat pos secara mendalam. Kami juga menyertakan instruksi langkah demi langkah untuk mengatur agen transfer **email ini** . Selain itu, kami telah memberikan beberapa wawasan tentang pengaturan. Menyiapkan server surat pos adalah proses yang sederhana. Saya harap artikel ini memang bermanfaat dalam mengatur dan mengkonfigurasi server surat pos untuk bisnis Anda.
Akhirnya, [**containerize.com **][7] sedang dalam proses penulisan posting blog yang konsisten pada produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [ **email transaksional**  ][8] ini untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  *[**Perangkat Lunak Email Transaksional Top** ][9]
  *[**Potal - Server Source Open Source** ][5]
  *[**5 Perangkat Lunak Server Sumber Sumber Terbaik Terbaik Untuk Bisnis di 2020** ][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
