---
title: "Memulai dengan Generator Formulir HTML | Formbuilder" 
seoTitle: "Memulai dengan Generator Formulir HTML | Formbuilder" 
description: "FormBuilder adalah generator formulir HTML gratis dan multibahasa dengan antarmuka pengguna drag & drop. Ikuti tutorial ini untuk mempelajari cara mengaturnya di LocalHost." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "JavaScript Berdaya Editor Formulir Open Source dengan beberapa konfigurasi, templat formulir yang dapat dikonfigurasi dan kontrol khusus. Mari kita pelajari cara mengatur FormBuilder." 
url: /id/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## JavaScript Berdasarkan Editor Formulir Sumber Terbuka dengan beberapa konfigurasi, templat formulir yang dapat dikonfigurasi, dan kontrol khusus. Mari kita pelajari cara mengatur FormBuilder.

{{< figure align=center src="images/formbuilder.png" alt="generator bentuk html">}}


## **Ringkasan**
Kami baru -baru ini menerbitkan beberapa artikel tentang topik -topik seperti [Cara Mengatur Formulir Bootstrap Form.io di LocalHost][1] dan [Top 5 Open Source Online Form Builders pada tahun 2020][2]. Posting blog pertama adalah artikel tutorial yang menunjukkan proses pengaturan dan fitur pembangun formulir bootstrap [form.io][3]. Artikel kedua berbicara tentang pembangun bentuk open source yang banyak digunakan. Pada titik waktu saat ini, interaksi dua arah adalah hal yang paling penting antara penyedia layanan dan konsumen layanan. Organisasi cenderung menerima umpan balik yang konsisten pada layanan mereka dan kemudian mereka merumuskan strategi bisnis di masa depan. Namun, formulir adalah untuk mengumpulkan dan menyimpan informasi dari pelanggan. Bisnis menghasilkan sejumlah formulir untuk mengumpulkan data tentang berbagai operasi yang sedang berlangsung dan ada banyak jenis bentuk beberapa di antaranya adalah halaman tunggal dan beberapa di antaranya adalah bentuk multi-halaman. Beberapa bisnis telah menanamkan formulir di portal online mereka atau beberapa di antaranya menggunakan email atau jenis media lain untuk mengekspos formulir mereka untuk pengumpulan data.
Oleh karena itu, ada banyak formulir open source dan perangkat lunak manajemen data yang tersedia dengan kemampuan pembangun formulir yang kaya. Dalam artikel ini, kami akan menjelajahi generator formulir HTML gratis ** [FormBuilder][4] ** dengan mencakup poin -poin berikut.
  *** [Apa itu FormBuilder?][5] **
  *[** Bagaimana cara mengatur? **][6]
  *[** Bagaimana cara membuat formulir menggunakan formbuilder? **][7]
  *** [Kesimpulan][8] **

## Apa itu FormBuilder? {#Apa}
[FormBuilder][4] adalah perancang formulir open source yang memungkinkan pengguna membuat formulir interaktif. Ini aman, dapat diperluas, dan dilengkapi dengan kemampuan hosting sendiri. Generator formulir HTML ini multibahasa dan menawarkan dukungan untuk berbagai bahasa. Ada antarmuka pengguna yang ramah pengguna di mana pengguna dapat menyeret dan menjatuhkan elemen formulir untuk merumuskan templat formulir yang diperlukan. Selanjutnya, ini memberikan kontrol yang kaya dan templat bentuk yang dapat dikonfigurasi. Selain itu, pengguna dapat membuat beberapa tab di antarmuka pengguna untuk membangun formulir multi halaman. Di atas segalanya, pengguna dapat cenderung pembangun formulir gratis ini dengan mengembangkan pluginnya. Ini memiliki semua dokumentasi yang tersedia mengenai pengembangan dan penyebaran. Ini ditulis dalam node.js dan semua kode sumber tersedia di [github][9].
Berikut adalah sorotan teratas dari form.io
  * I18n terintegrasi
  * Formulir multi-halaman
  * Dapat diperluas
  * Dukungan untuk Kerangka Ujung Depan JavaScript Populer
  * Seret dan lepas UI

## Bagaimana cara mengatur? {#mempersiapkan}
Bagian tutorial Form Builder ini akan menunjukkan kepada Anda cara mengatur Formbuilder di mesin lokal.
Sebelum melangkah lebih jauh, pastikan Anda telah menginstal prasyarat berikut.
  * Node.js> = 10.9.0
  * npm
  * Git
Setelah menginstal prasyarat, jalankan perintah berikut untuk mengkloning kode sumber aplikasi ini:
```
git clone https://github.com/kevinchappell/formBuilder
```
Selanjutnya, jalankan perintah berikut untuk menginstal dependensi:
```
cd form-builder<br>npm install 
```
Setelah itu, Anda dapat memulai aplikasi dengan menjalankan perintah berikut:
```
npm start
```
Akhirnya, perintah di atas akan membuka aplikasi ke browser di alamat berikut:
```
http://localhost:8080/
```

## Bagaimana cara membuat formulir menggunakan FormBuilder? {#Bagaimana}
Di bagian ini, kami akan mengeksplorasi fitur generator formulir HTML ini dan kami akan belajar bagaimana kami dapat membuat formulir.
Antarmuka pengguna berikut akan muncul setelah Anda memulai server.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="generator bentuk html">}}

Bergerak maju, Anda dapat melihat bilah menu di sisi kanan. Ini berisi elemen formulir seperti tombol, kotak centang, bidang teks, bidang data, header, paragraf, dan banyak lagi. Namun, Anda dapat menyeret elemen -elemen ini dan jatuh di area tengah (dapat dijatuhkan) dari layar. Di sudut kiri atas, ada opsi untuk mengaktifkan versi aplikasi Bootstrap. Di sudut kiri atas, ada dropdown di mana pengguna dapat memilih bahasa yang tersedia.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="editor formulir">}}

Selanjutnya, kita dapat menyeret dan menjatuhkan elemen bentuk apa pun ke area yang dapat dijatuhkan. Selain itu, kami dapat mengedit konfigurasi elemen apa pun seperti yang ditunjukkan pada gambar di atas. Ada opsi untuk membuat salinan elemen yang ada. Kita dapat mengubah penempatan elemen satu sama lain.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="generator bentuk html">}}

Setelah selesai dengan bangunan formulir, Anda dapat membuat formulir dengan menekan tombol "render" yang ditempatkan di tengah atas. Lebih lanjut, ada berbagai opsi formulir di mana pengguna bisa mendapatkan HTML yang dihasilkan di belakang formulir. Ada juga opsi lain seperti memuat formulir pengguna, menunjukkan data pengguna, render formulir pengguna, dan formulir pengguna yang jelas. Seiring dengan fitur -fitur ini, ada banyak tindakan bentuk yang tersedia seperti "getFieldTypes" yang mengembalikan jenis bidang terdaftar untuk formulir. Demikian pula, ada banyak tindakan lain seperti menampilkan data, mendapatkan XML, mengatur data, sakelar edit, dan beberapa lagi. Namun, ada banyak hal lain yang dapat Anda periksa sendiri. Karena ini adalah open source, Anda dapat memodifikasinya sesuai kebutuhan Anda.

## kesimpulan {#conclusion}
Ini adalah akhir dari posting blog. Kami berharap tutorial ini akan sangat membantu Anda jika Anda ingin menggunakan generator formulir HTML open source. Artikel ini telah mencakup banyak aspek FormBuilder sehingga Anda dapat dengan mudah membuat pilihan mengingat kebutuhan bisnis Anda. Pembangun formulir open source gratis ini hemat biaya dan hemat waktu. Alat gratis ini tidak hanya memberikan kemampuan pembangunan formulir tetapi juga menyediakan formulir dan manajemen data. Anda dapat mengonfigurasi formulir dengan aplikasi web pihak ketiga. Selain itu, ia menghilangkan kerumitan menciptakan berbagai bentuk untuk aplikasi bisnis yang berbeda, bukan pemilik bisnis dapat membuat segala bentuk bentuk menggunakan pembangun formulir open source ini. Selain itu, ada plugin yang tersedia untuk editor formulir ini yang dapat dimodifikasi pengembang sesuai persyaratan. Oleh karena itu, sudah saatnya untuk mengotomatisasi tugas -tugas berulang seperti itu dengan menggunakan generator formulir HTML gratis yang baik.
Akhirnya, [containerize.com][10] menulis artikel tentang produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [Forms][11] untuk berita dan pembaruan reguler.

## Mengeksplorasi
  *** [form.io][3] **
  *** [orbeon][12] **
  *** [ohmyform][13] **
  *** [webiny][14] **
  *** [formtools][15] **
  *** [formbuilder][4] **
  *** [Formulir Alpaca][16] **
  *[** Cara Mengatur Bootstrap Form Pembuat Form.io di LocalHost **][1]
  *[** Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka **][17]
  *[** Top 5 Open Source Online Form Builders Pada tahun 2020 **][2]

  
[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
