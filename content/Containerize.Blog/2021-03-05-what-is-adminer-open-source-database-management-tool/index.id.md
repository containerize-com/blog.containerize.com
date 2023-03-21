---
title: "Apa itu Adminer? | Alat manajemen basis data sumber terbuka" 
seoTitle: "Apa itu Adminer? | Alat manajemen basis data sumber terbuka" 
description: "Apa itu Adminer? Sistem manajemen basis data berbasis web dengan antarmuka yang ramah pengembang. Mari kita bahas cara mengelola database dengan administrasi sumber terbuka." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Adminer adalah sistem manajemen basis data berbasis web open-source untuk mengelola database. Mari kita pelajari cara mengatur admin pada localhost dan meninjau fitur -fitur utamanya." 
url: /id/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Adminer adalah sistem manajemen database berbasis web open-source untuk mengelola database. Mari kita pelajari cara mengatur admin pada localhost dan meninjau fitur -fitur utamanya.
{{_LINE_11_}}

## Ringkasan
Tugas terkait data sekarang jauh lebih penting daripada sebelumnya. Alat manajemen basis data telah menjadi bagian integral dari bisnis apa pun. Namun, ada banyak sistem manajemen basis data berbasis web yang menawarkan solusi untuk tugas-tugas yang menantang seperti itu. Perusahaan menghasilkan banyak data setiap hari dan menjadi sulit dipertahankan. Selain itu, organisasi cenderung menyederhanakan akses data dan kontrol data. Alat gratis ini membantu mengurangi redundansi data, membuat database efisien dan dapat diandalkan. Selanjutnya, kami telah menerbitkan posting blog tentang topik -topik seperti [perangkat perangkat lunak DBMS open source top][1], dan beberapa lagi.
Oleh karena itu, komunitas open source telah mengembangkan Adminer yang merupakan alat manajemen database gratis tingkat perusahaan. Dalam tutorial Adminer ini, kami akan membahas poin -poin berikut.
  * [Apa itu Adminer?][2]
  * [Fitur penting Adminer][3]
  * [Adminer vs PHPMyAdmin][4]
  * [Kelola Database dengan Adminer][5]
  * [Kesimpulan][6]

## Apa itu Adminer?   {#Apa}
Ketika datang ke alat manajemen database MySQL yang ringan, ramah pengguna, dan berkinerja tinggi, Adminer telah mendapatkan popularitas yang luas dan memberikan banyak peningkatan dibandingkan dengan phpMyAdmin. Awalnya, alat manajemen basis data ini dikembangkan oleh Jakub Vrana pada tahun 2007 sebagai alternatif untuk phpMyAdmin, sehingga yang harus Anda lakukan adalah mengunduh dan menginstal satu file php ringan di database aplikasi Anda.
Sebagai alat manajemen basis data open source, itu juga gratis untuk digunakan dan ditulis dalam PHP. Apa yang membuat sistem manajemen basis data berbasis web ini terpisah adalah desain antarmuka pengguna yang baik untuk pengalaman pengguna yang mulus, serta fitur keamanan yang kuat untuk menjaga data tetap aman dari serangan apa pun atau upaya peretasan berbahaya. Alat manajemen basis data ini mudah diatur dan membutuhkan persyaratan sederhana seperti Ubuntu, dan Lampu. Pengguna dapat menemukan dokumentasi komprehensif mengenai pengembangan dan penyebaran. Oleh karena itu, Anda dapat menemukan file sumber dari sistem manajemen basis data berbasis web ini di [GitHub][7].

## Fitur penting dari admin   {#important}
Beberapa fitur dasar tetapi penting dari alat manajemen basis data ini meliputi:
  * Ini memiliki banyak fungsi basis data termasuk basis data pilih, tabel edit, masukkan/edit data dalam tabel, dan penyortiran/pencarian data di beberapa kolom
  * Mendukung beberapa database termasuk: MySQL, PostgreSQL, SQLite, MS SQL, Oracle, dan SimpledB Database dan banyak lagi
  * Ini tersedia dalam 43 bahasa termasuk bahasa Inggris, Arab, Persia, Polandia, Belanda dll
  * Anda dapat dengan mudah mengedit objek basis data seperti tampilan, pemicu, prosedur tersimpan, izin pengguna dan banyak lagi.
  * Adminer juga memberikan langkah -langkah keamanan terhadap injeksi SQL, pencurian sesi, serangan perangkat lunak scripting situs silang (XSS) dan serangan lainnya juga.

## Adminer vs PhpMyAdmin   {#Adminer}
Jadi, ketika kita berbicara tentang apa yang Adminer, maka akan menarik untuk mengetahui perbandingan antara Adminer vs PHPMyadmin. Ketika datang untuk memilih antara Adminer dan PHPMyAdmin, Adminer berada di atas untuk fitur fleksibel dan unggahan file lampu yang disediakan. Demikian pula, dibandingkan dengan phpMyAdmin, ini mendukung beberapa database termasuk MySQL, SQLite, dan banyak lainnya. Demikian pula, ini lebih intuitif dan lebih pintar daripada phpMyadmin ketika datang untuk menambahkan bidang tambahan yang admin admin lakukan secara otomatis atau manipulasi dengan semua indeks pada saat yang sama.

## Kelola database dengan admin   {#Manage}
Di bagian tutorial Adminer ini, kami akan melalui bagaimana kami dapat mengelola database dengan Adminer.
**Persyaratan sistem**
Agar adminer dapat berjalan pada sistem Anda, penting bagi Anda untuk memiliki persyaratan berikut yang sudah diatur di server Anda:
  * PHP Versi 5, 7 atau 8
  * Driver database seperti mysql, sqlite, postgresql dll
**Instalasi**
Jika Anda telah memeriksakan dua persyaratan sistem ini, maka cukup unduh file dari [][8], dan mulai dengan mengunggah file PHP ke server Anda. Untuk server XAMPP, ganti nama file yang diunduh sebagai "adminer.php" dan masukkan file ini ke folder htdocs.
**Akses Antarmuka Pengguna** 
Setelah melalui itu, apa itu Adminer? Sekarang akses aplikasi ini dari http: Anda-IP-Address/Adminer.php seperti yang ditunjukkan:
{{_LINE_42_}}
**Sambungkan ke server**
Masuk ke alat manajemen basis data gratis ini menggunakan nama pengguna dan kata sandi server Anda. Sekarang jika Anda hanya ingin mengakses satu database maka masukkan namanya. Anda dapat membiarkan bidang ini kosong untuk mengakses semua database yang sudah ada di server.
**Kelola database** 
Setelah login, Anda akan melihat daftar semua database Anda saat ini. Klik pada database apa pun untuk mengelolanya.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Kelola Database dengan Alat Manajemen Database Adminer">}}

Di layar berikutnya, Anda akan melihat daftar semua tabel database yang dipilih. Dari sini Anda dapat mengekspor database atau tabelnya, menambah atau mengedit tabel/kolom, mengubah data melalui kueri SQL, dan lebih banyak lagi seperti yang ditunjukkan di sini:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="Alat manajemen basis data">}}

**Buat database baru** 
Untuk membuat database baru, klik "Buat Database", masukkan nama database dan klik "Simpan".

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="Alat manajemen basis data">}}

**Sisipkan/Perbarui Catatan** 
Menambahkan catatan baru ke tabel cukup sederhana. Klik tautan item baru yang akan mengarahkan Anda ke layar Sisipkan. Di sini Anda akan dapat menambahkan data baru untuk semua kolom dalam tabel, bersama dengan tipe data sehingga menambahkan data baru adalah proses cepat.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Admin Vs PHPMyAdmin">}}


## kesimpulan   {#conclusion}
Ini membawa kita ke akhir tutorial Adminer ini. Kami telah melalui beberapa topik penting seperti apa yang Adminer, Adminer vs PHPMyAdmin, dan aspek lain dari sistem manajemen basis data berbasis web open source ini. Mudah -mudahan, posting blog ini pasti akan membantu Anda jika Anda ingin menginstal alat manajemen basis data open source. Antarmuka intuitif, cerdas, dan mudah digunakan menjadikannya alat manajemen basis data yang sangat populer. Selain itu, ini mendukung banyak database termasuk MySQL, SQLite, MongoDB, dan banyak lagi, bersama dengan langkah -langkah keamanan untuk melindungi dan mencegah peristiwa peretasan berbahaya. Secara keseluruhan, alat manajemen basis data ini tidak hanya open source tetapi juga gratis untuk digunakan.
Akhirnya, [containerize.com][9] terus menulis posting blog tentang produk dan topik open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [Alat Manajemen Database][10] untuk pembaruan rutin. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][11], [LinkedIn][12], dan [Twitter][13].

## Mengeksplorasi
Untuk mempelajari lebih lanjut tentang alat manajemen basis data berbasis web gratis, silakan periksa halaman berikut:
  * [Admin | Sistem Manajemen Database Berbasis Web Gratis][14]
  * [Perangkat Perangkat Lunak DBMS Terbuka Top][1]
  * [Top 5 Alat Manajemen Database Sumber Terbuka di 2021][15]
  * [Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
