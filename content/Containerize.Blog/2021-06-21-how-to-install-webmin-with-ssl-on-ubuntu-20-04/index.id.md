---
title: "Cara menginstal webmin dengan ssl di ubuntu 20.04" 
seoTitle: "Cara menginstal webmin dengan ssl di ubuntu 20.04" 
description: "WebMin adalah alat administrasi sistem berbasis web untuk sistem seperti UNIX. Dalam artikel ini kita akan belajar cara menginstal webmin dengan SSL di Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin adalah alat administrasi sistem berbasis web yang merupakan alternatif sederhana untuk administrasi sistem baris perintah. Artikel ini memandu cara menginstal webmin" 
url: /id/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Cara Menginstal Webmin">}}


## Webmin adalah alat administrasi sistem berbasis web yang merupakan alternatif sederhana untuk administrasi sistem baris perintah. Artikel ini memandu cara menginstal webmin
Dengan artikel ini "Cara Menginstal Webmin dengan SSL di Ubuntu 20.04" Kami memulai seri tutorial baru kami tentang perangkat lunak dan alat hosting web. Dengan WebMin Anda dapat mengatur akun pengguna, mengaktifkan berbagi file, mengkonfigurasi pengaturan apache, dan DNS, dan melakukan lebih banyak tugas yang berkaitan dengan hosting web. Ini memungkinkan Anda untuk mengelola seluruh server hosting web. Ini menghilangkan masalah mengedit file konfigurasi Linux secara manual. Jadi mari kita pelajari cara menginstal webmin dengan SSL.
  ***[Pengantar Webmin][1]** 
  *[**fitur yang disorot** ][2]
  *[**Sistem operasi yang didukung** ][3]
  *[**Instal Webmin di Ubuntu** ][4]
  *[**Instal Apache Menggunakan Webmin** ][5]
  *[**Kesimpulan** ][6]

## Pengantar Webmin   {#intro}
Webmin adalah antarmuka berbasis web untuk administrasi sistem untuk Linux. Ini membantu Anda mengelola server hosting Anda sendiri dari jarak jauh dari browser web modern mana pun. Dengan Webmin, Anda dapat mengonfigurasi internal sistem operasi seperti akun pengguna, Apache, DNS, berbagi file, dan banyak lagi. Webmin juga memungkinkan untuk mengendalikan banyak mesin melalui satu antarmuka, atau login tanpa batas pada host webmin lainnya pada subnet atau LAN yang sama. Webmin, berdasarkan Perl, berjalan sebagai prosesnya sendiri dan server web. Dan bagian terbaik tentang webmin adalah 100% gratis dan open-source dan memiliki komunitas pengembang yang sangat berkembang.

## fitur yang disorot   {#features}
  * Memungkinkan Anda untuk membuat dan mengedit domain, catatan DNS, mengikat opsi, dan tampilan.
  * Membantu mengonfigurasi firewall dengan membuat dan mengedit aturan menggunakan IPFW.
  * Mari Anda mengatur skrip untuk dijalankan pada waktu boot dari /etc/init.d atau /etc/rc.local
  * Anda dapat menjadwalkan transfer file dari server ke beberapa server
  * Memungkinkan Anda untuk menginstal paket RPM, Debian, dan Solaris di beberapa server dari satu sumber
  * Ini menyediakan akses ke laporan seperti penggunaan bandwidth, unggahan, unduhan, pengunjung, dll.
  * Anda dapat membuat pekerjaan cron terjadwal yang berjalan di banyak server secara bersamaan
  * Memungkinkan Anda menjalankan perintah di beberapa server sekaligus
  * Memungkinkan Anda untuk mengatur dan mengedit kuota disk pengguna atau grup untuk sistem file lokal
  * Termasuk cadangan dan mengembalikan sistem file menggunakan dump dan memulihkan keluarga perintah
  * Menggunakan manajer file yang mirip dengan Windows, Anda dapat melihat, mengedit, dan mengubah izin pada file dan direktori di server Anda
  * Anda dapat mengonfigurasi server protokol lokasi layanan
  * Lihat, Edit, dan Ubah Izin pada File dan Direktori di Sistem Anda Dengan Manajer File Seperti Windows
  * Ini membantu dalam menyiapkan terowongan SSL untuk mengenkripsi layanan seperti POP3 dan IMAP, menggunakan stunnel yang dijalankan dari Inetd.

## Sistem Operasi yang Didukung   {#Support}
Karena berbagai sistem operasi seperti UNIX dan distribusi Linux menggunakan lokasi yang berbeda untuk berbagai file konfigurasi mereka, WebMin hanya dapat mendukung sistem yang telah dikonfigurasi. Sistem operasi berikut didukung oleh versi 1.979 dari webmin:
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * Aplinux
  * Asianux
  * Server Asianux
  * BigBlock
  * BSDI
  * Caixa magica
  * Caldera OpenLinux
  * Caldera OpenLinux Eserver
  * Caos Linux
  * Cendio LBS Linux
  * Centos linux
  * Citrix Hypervisor
  * Cloudlinux
  * Linux Cloudrouter
  * Cobalt Linux
  * Linux Teknologi Koheren
  * CONECTIVA Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * Dec/compaq OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Linux Firewall Endian
  * Fedora Linux
  * Freebsd
  * Linux generik
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * Hp/ux
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * Linux Mint
  * Linuxppc
  * Lycoris desktop/lx
  * Mac OS X
  * MacOS Catalina
  * Macos High Sierra
  * Macos Mojave
  * MacOS Sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * Kebanyakan linux
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * Openna Linux
  * OpenSUSE Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X.
  * Pardus Linux
  * pclinuxos linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat enterprise linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Linux ilmiah
  * SCO OpenServer
  * SCO Unixware
  * Aman Linux
  * SGI IRIX
  * Slackware Linux
  * Slamd64 Linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Startcom Linux
  * Sistem Desktop Java Sun
  * Sun Solaris
  * SUSE Linux
  * Suse openexchange linux
  * Suse sles linux
  * Synology DSM
  * Tao Linux
  * Tawie Server Linux
  * Desktop Thizlinux
  * Thizserver
  * Tinysofa linux
  * Trustix
  * Josix se
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * Linux Dwarf Putih
  * Whitebox Linux
  * Wind River Linux
  * Windows
  * X/os linux
  * Xandros Linux
  * XCP-NG Linux
  * XenServer Linux
  * Linux anjing kuning
  * Yoper Linux
Sistem yang didukung terbaik saat ini adalah Solaris, Linux (khususnya RedHat), dan FreeBSD.

## Instal WebMin di ubuntu   {#install}
Untuk menginstal webmin, Anda harus memiliki akses ke pengguna dengan **root  **hak istimewa. Dianjurkan agar Anda mengatur pengguna non-root dengan **  sudo**  akses.
SSH pertama ke server Anda menggunakan perintah berikut
```
ssh user@server_IP_address
```
Untuk menginstal webmin melalui _apt-get_, Anda harus terlebih dahulu menambahkan repositori webmin ke file _sources.list_ Anda. Di server Anda, buka file _sources.list_ di editor teks favorit Anda. Kami akan menggunakan vim dalam tutorial ini:
```
sudo vi /etc/apt/sources.list
```
Setelah file dibuka, tambahkan baris berikut di akhir file.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Sekarang tambahkan tombol GPG Webmin ke APT, sehingga repositori sumber yang Anda tambahkan akan dipercaya. Perintah ini akan melakukan itu:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Sebelum menginstal WebMin, Anda harus memperbarui daftar paket APT-Get:
```
sudo apt-get update
```
Sekarang jalankan perintah apt-get ini untuk menginstal webmin:
```
sudo apt-get install webmin 
```
Masukkan Y untuk mengkonfirmasi instalasi. Setelah instalasi selesai, layanan Webmin akan dimulai secara otomatis. Dan antarmuka web akan berjalan di port 10000. Anda dapat mengakses antarmuka menggunakan URL berikut.
```
https://server_IP_address:10000
```
Anda akan diminta dengan peringatan yang mengatakan sertifikat SSL server Anda tidak dipercaya. Ini karena Webmin secara otomatis menghasilkan dan menginstal sertifikat SSL setelah instalasi, dan sertifikat tidak dikeluarkan oleh otoritas sertifikat yang dipercaya oleh komputer Anda. Tidak apa -apa untuk melanjutkan. Instruksikan browser web Anda untuk mempercayai sertifikat.
Pada titik ini, Anda akan melihat layar login webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="Instal Webmin">}}

Saat Anda pertama kali masuk ke webmin, Anda akan dibawa ke halaman Informasi Sistem  **** . Ini memberi Anda gambaran tentang sumber daya sistem Anda dan informasi lain -lain.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Instal Informasi Sistem Webmin">}}


## Instal Apache Menggunakan WebMin   {#Install-Apache}
Webmin hadir dengan berbagai macam modul yang mengelola paket perangkat lunak yang berbeda. Untuk menginstal Apache menggunakan webmin ikuti instruksi di bawah ini
**Langkah 1 **: Di menu navigasi, klik  **modul yang tidak digunakan **  untuk memperluas kategori, lalu klik  **Apache WebServer**  .
Jika Anda tidak menginstal Apache di server Anda, modul akan memberi tahu Anda dan memberi Anda cara untuk menginstal Apache.
**Langkah 2 **: Gunakan  **klik di sini**   tautan (dalam kalimat terakhir) untuk menginstal Apache melalui apt-get melalui webmin.
Setelah instalasi Apache selesai, server Anda akan menjalankan server Apache default.

## kesimpulan   {#conclusion}
Artikel ini membahas secara singkat banyak hal yang dapat dilakukan Webmin, Webmin adalah salah satu alat terbaik untuk mengelola server Linux/UNIX Anda. Dalam tutorial ini kami juga belajar cara menginstal webmin di Ubuntu, juga kami membahas cara menginstal Apache di server Anda menggunakan WebMin.

## Mengeksplorasi
  * [Cara menginstal beberapa versi PHP dengan Nginx di Ubuntu][7]
  * [Cara Mengatur dan Mengkonfigurasi Nginx sebagai Proxy Terbalik][8]

  
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
