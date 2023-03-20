---
title: "Kustomisasi Osticket-Menerapkan multi-tenancy di Osticket" 
seoTitle: "Kustomisasi Osticket-Menerapkan multi-tenancy di Osticket" 
description: "Menerapkan multi-tenancy di osticket dapat menghemat biaya dan pemanfaatan sumber daya. Dalam artikel ini, kami akan melakukan kustomisasi osticket untuk mencapai multi-tenancy." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "Multi-tenant Osticket Helpdesk memungkinkan Anda membuat beberapa penyewa dari satu instalasi. Itu memanfaatkan sumber daya server web yang optimal." 
url: /id/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multi-tenant Osticket Helpdesk memungkinkan Anda membuat beberapa penyewa dari satu instalasi. Itu memanfaatkan sumber daya server web yang optimal.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Kustomisasi Osticket - Menerapkan multi -tenancy di osticket">}}

Dalam artikel ini kita akan membahas cara membuat kustomisasi osticket untuk mengimplementasikan multi-tenancy. Posting ini akan mencakup topik berikut:
  * [Osticket Ikhtisar][1]
  * [Tinjauan multi-tenancy][2]
  * [Manfaat multi-tenancy][3]
  * [Implementasi][3]
  * [Kesimpulan][4]

## Osticket Ikhtisar: {#Osticket}
[OSTICKET][5] adalah perangkat lunak Bantuan Meja Bantuan Web Dukungan Pelanggan Open Source Open Source. Ini menyediakan panel kontrol intuitif dan komponen pelaporan real-time. Ini memiliki modul manajemen pertanyaan yang mudah digunakan. Ini memungkinkan Anda untuk membuat pertanyaan dari ponsel, email, dan formulir berbasis web Anda. Yang menawarkan banyak opsi untuk membantu menyesuaikan semua bagian dari pengalaman dukungan klien seperti komentar dan pemberitahuan email.

## ikhtisar multi-tenancy: {#multitenancy}
Multi-tenancy mengacu pada implementasi, di mana beberapa contoh independen dari suatu aplikasi beroperasi di lingkungan bersama. Contoh (penyewa) terisolasi secara logis, tetapi terintegrasi secara fisik. Suatu organisasi mungkin dapat memiliki banyak departemen. Jadi mereka dapat membuat beberapa penyewa/instance dari aplikasi yang sama. Misalnya, dalam kasus kami, sistem HelpDesk dapat dikonfigurasi untuk berbagai domain dari organisasi yang sama. Mungkin ada ratusan penyewa tetapi mereka semua akan menggunakan file yang sama dan karenanya penyimpanan yang sama. Ini akan mengurangi biaya penyimpanan serta akan membuat peningkatan lebih mudah. Pengembang hanya perlu memperbarui file dari satu tempat alih -alih membuat perubahan untuk setiap situs secara terpisah.

## Apa manfaat dari multi-tenancy? {#benefits}
Berikut adalah beberapa manfaat penting dari multi-tenancy
  *** Optimalisasi Sumber Daya: ** Satu mesin yang disediakan untuk satu penyewa tidak efisien. Karena satu penyewa tidak mungkin menggunakan semua daya komputasi mesin. Mesin berbagi akan memaksimalkan ketersediaan sumber daya.
  *** Biaya yang lebih rendah: ** Dengan beberapa penyewa berbagi sumber daya yang sama akan jauh lebih rendah daripada jika setiap penyewa membutuhkan infrastruktur khusus mereka sendiri.
  *** Hosting yang efisien: ** Juga osticket multi-tenant akan mengurangi biaya hosting seminimal mungkin di lingkungan bersama.
  *** Keamanan: ** Dengan interaksi yang lebih sedikit dengan dunia luar, paparan perangkat lunak berbahaya berkurang.
  *** Upgrade Mudah **: Upgrade file hanya di satu tempat alih -alih memperbaruinya secara terpisah. Ini akan menghemat banyak waktu dan usaha.

## Implementasi Osticket Multi-Tenant: {#Implementation}
  * Buat nama basis data kosong baru sebagai "Main_DB".
  * Kemudian buat tabel bernama "Penyewa" yang akan menyimpan detail tentang semua penyewa.
  * Ini akan memiliki bidang berikut:
  1. situs_name
  2. URL
  3. DB_NAME

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Kustomisasi Osticket - Menerapkan multi -tenancy di osticket">}}

  * Situs \ _Name Field akan memegang nama penyewa. URL Field akan memegang URL lengkap penyewa. DB \ _Name Field akan memegang nama basis data yang akan dibuat untuk penyewa baru.
  * Setelah file terbuka /include/ost-config.php dan tambahkan kode berikut
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  * Kode ini akan memperbarui konektivitas basis data default. Ini pertama -tama akan mendapatkan URL penyewa saat ini. Maka itu akan mendapatkan nama basis data sesuai dengan URL itu. Begitulah cara aplikasi akan mengetahui basis data mana yang akan terhubung. Setiap penyewa akan memiliki database terpisah. Basis data akan dipilih berdasarkan URL penyewa.
  * Untuk membuat penyewa baru, cukup atur domain penyewa baru di server nginx. Setelah itu cukup salin database Osticket saat ini dan ganti namanya. Akhirnya tambahkan entri ke dalam tabel "penyewa" dari database "Main_DB".

## kesimpulan: {#conclusion}
Osticket adalah perangkat lunak Manajemen Bantuan IT Source dan Open Source. Kami telah belajar bagaimana membuat kustomisasi Osticket untuk mengimplementasikan multi-tenancy di Osticket untuk dapat menghemat biaya, mengoptimalkan aplikasi, dan lebih rendah persyaratan sumber daya. Ini akan membuat hidup lebih mudah bagi pengembang untuk menciptakan penyewa baru dalam beberapa langkah sederhana. Karenanya buat beberapa penyewa osticket dari instalasi yang sama.

## Mengeksplorasi:
Silakan periksa halaman berikut untuk mempelajari lebih lanjut tentang Osticket:
  * [OSTICKET - Perangkat Lunak Helpdesk Open Source Gratis][5]
  * [Panduan Pemula untuk Mengembangkan Plugin Osticket][6]
  * [Cara Mengatur Perangkat Lunak Meja Bantuan Online Menggunakan Osticket][7]
  * [Otomatis Sistem Tiket Menggunakan WordPress dan Osticket][8]

  
[1]: #osticket
[2]: #multitenancy
[3]: #benefits
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/osticket
[6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
