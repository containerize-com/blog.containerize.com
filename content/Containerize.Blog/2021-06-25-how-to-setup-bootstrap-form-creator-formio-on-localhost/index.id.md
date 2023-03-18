---
title: "Cara Mengatur Bootstrap Form Pencipta Form.io di LocalHost" 
seoTitle: "Cara Mengatur Bootstrap Form Pencipta Form.io di LocalHost" 
description: "Pergi melalui artikel ini dan pelajari cara mengatur formio di localhost. Pembuat bentuk bootstrap ini gratis, dapat diperluas, dan menawarkan integrasi pihak ketiga." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "Bangun formulir khusus dan dapat disesuaikan dengan menggunakan pembangun Formulir HTML Drag and Look. Formio diselenggarakan sendiri, didorong oleh API, menyediakan formulir dan manajemen data." 
url: /id/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## Bangun formulir khusus dan dapat disesuaikan dengan menggunakan builder Formulir HTML Drag and Look. Formio diselenggarakan sendiri, didorong oleh API, menyediakan formulir dan manajemen data.

{{< figure align=center src="images/formio-1.png" alt="Bootstrap Form Creator">}}


## **Ringkasan**
Dalam kebutuhan bisnis yang berkembang pesat, ada banyak operasi yang secara langsung termasuk dalam transaksi dan keterlibatan publik. Keterlibatan ini bisa bersifat fisik atau virtual. Terkadang ini tentang menyediakan layanan dan kadang -kadang tentang mengumpulkan data atau umpan balik. Di sisi lain, organisasi perusahaan cenderung mengumpulkan data pelanggan tentang produk dan layanan mereka. Oleh karena itu, jumlah data tergantung pada jangkauan ke audiens yang relevan. Selanjutnya, manajemen data adalah tugas penting lainnya dan menuntut perhatian besar.
Namun, sektor perusahaan menggunakan formulir online untuk memenuhi kebutuhan yang terkait dengan pengumpulan data. Ada banyak situs web yang mungkin berisi banyak formulir seperti formulir kontak, formulir pengaduan, formulir umpan balik pelanggan, formulir penerimaan, dan banyak lagi. Sekarang, menjadi repot untuk membangun, mengelola formulir ini dan data pengiriman. Here Comes [form.io] [1]. Form.io adalah pembuat formulir bootstrap open source yang menyediakan kemampuan pembangunan dan manajemen data. Di masa lalu, kami menerbitkan sebuah artikel yang mencakup [5 pembangun formulir online open source teratas pada tahun 2020] [2]. Dalam posting blog ini, kami akan menjelajahi pencipta formulir bootstrap ini bersama dengan proses pengaturannya di LocalHost dengan meliput poin -poin berikut.
  *** [apa itu form.io?ht3 media**
  *** [cara mengatur form.io di localhost?] [4] **
  *** [Bagaimana cara kerja form.io?] [5] **
  *** [Kesimpulan] [6] **

## Apa itu form.io? {#Apa}
Form.io adalah pembangun formulir open source gratis. Ini adalah perangkat lunak yang diselenggarakan sendiri, multibahasa, dan multi-penyewa. Ini ** HTML Form Creator ** menawarkan izin berbasis peran untuk pengguna dan formulir. Form.io menyediakan otentikasi OAuth dan memungkinkan pengguna masuk menggunakan penyedia identitas populer seperti Google dan Facebook. Lebih lanjut, pembangun formulir HTML ini didasarkan pada arsitektur tanpa server, dan pengguna dapat menghasilkan dan menanamkan formulir ke dalam aplikasi lain dengan hanya menempatkan satu baris kode. Sejauh menyangkut antarmuka pengguna, ia menawarkan antarmuka pengguna yang logis dengan fitur drag and drop. Ada berbagai elemen HTML di satu sisi yang dapat diseret dan ditarik pengguna untuk membangun formulir yang dibutuhkan. Pengguna dapat menyuntikkan JavaScript khusus untuk fungsionalitas yang ditingkatkan. Selain itu, pengguna dapat memodifikasi tampilan & nuansa formulir menggunakan CSS. Ada ketentuan untuk mengontrol pengajuan dan akses formulir. Namun, pembuat formulir HTML gratis ini ditulis dalam JavaScript dan semua kode sumber tersedia di [GitHub] [7].
Form.io menyediakan fitur yang luas. Fitur utama tercantum di bawah ini.
  * Pengajuan Formulir Email
  * Manajemen data
  * Penyedia OAuth
  * Bentuk yang bisa disematkan
  * Tata letak ramah

## Bagaimana cara mengatur form.io di localhost? {#localhost}
Di bagian tutorial Form Builder ** ini **, kita akan melihat cara mengatur form.io di localhost. Sangat mudah untuk diatur karena memberikan dokumentasi komprehensif tentang penyebaran dan pengembangan.
Sebelum melangkah lebih jauh, pastikan Anda telah menginstal prasyarat berikut.
  * Git
  * NodeJS
  * MongoDB
Setelah prasyarat di atas diinstal, buka terminal jalankan perintah berikut:
```
mkdir formio<br>cd formio
```
Sekarang, jalankan perintah berikut untuk mengkloning kode sumber aplikasi ini:
```
git clone https://github.com/formio/formio.git
```
Setelah klon yang berhasil, jalankan perintah berikut untuk menginstal dependensi:
```
cd formio <br>npm install
```
Setelah itu, jalankan aplikasi dengan perintah berikut:
```
npm start 
```
Perintah ini akan menampilkan output berikut dengan beberapa prompt pengguna:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Tutorial Form Builder">}}

Anda dapat mengakses aplikasi di browser di alamat berikut.
```
http://localhost:3001 
```
Ini akan membuka halaman login. Anda dapat masuk dengan kredensial yang Anda masukkan selama proses instalasi.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Bootstrap Form Creator">}}


## Bagaimana cara kerja form.io? {#bekerja}
Segmen ini menggambarkan mekanisme kerja [form.io] [1]. Seluruh ekosistem perancang bentuk ini didasarkan pada komponen dan ramah pengembang. Ini dapat diperluas dan menyediakan antarmuka yang tenang untuk aplikasi pihak ketiga. Jadi, mari kita lihat cara membuat formulir dalam pembangun bentuk ** ini **.
Setelah login, Anda akan mendarat di halaman berikut.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="seret dan lepas pembangun formulir html">}}

Sekarang, klik tombol "Formulir Baru" dan buat formulir pertama. Halaman berikut akan ditampilkan. Anda dapat melihat ada panel di sisi kiri yang berisi elemen HTML untuk formulir. Ini berisi empat bagian seperti "komponen dasar", "komponen khusus" dan banyak lagi.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="Pembuat Formulir HTML">}}

Anda dapat mengatur nama formulir bersama dengan atribut lainnya. Sekarang, jika Anda memilih elemen bentuk dari sisi kiri dan menjatuhkannya ke tengah, Anda akan melihat kotak dialog berikut.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Bootstrap Form Creator">}}

Anda dapat melihat bahwa itu memungkinkan Anda memodifikasi tema formulir, validasi, dan modifikasi lainnya. Setelah Anda membangun formulir Anda, tekan tombol "Buat" dan Anda akan mendarat di formulir yang dihasilkan.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="seret dan lepas pembangun formulir html">}}

Formulir yang dihasilkan hadir dengan berbagai opsi di mana Anda dapat mengedit formulir dan melihat data yang dikirimkan. Di tab "Tindakan Formulir" Anda dapat mengatur kait pengiriman pra atau posting formulir seperti email, webhook, dan lainnya. Di atas segalanya, setiap formulir yang dihasilkan dilengkapi dengan API dan pengguna dapat mengaksesnya dengan melewati ID formulir.

## kesimpulan {#conclusion}
Ini adalah akhir dari tutorial pembangun formulir ini. Semoga Anda telah belajar tentang pencipta bentuk bootstrap ini mengenai fitur, penyebaran, dan penggunaannya. Selain itu, ada banyak pembangun bentuk open source yang menyediakan berbagai fitur. Namun, sangat penting untuk memilih produk terbaik yang memenuhi kebutuhan bisnis Anda. Oleh karena itu, dalam posting blog ini, kami mengamati bahwa Form.io memberikan kustomisasi mengenai fungsionalitas, tata letak, dan gaya. Ini memungkinkan Anda menghasilkan formulir multi-guna yang dapat Anda host di situs web langsung Anda. Bahkan, Anda dapat mengumpulkan data dengan cara yang terorganisir dengan baik di database Anda sendiri atau dalam opsi penyimpanan lainnya.
Akhirnya, [** containerize.com **] [8] sedang dalam proses penulisan artikel yang konsisten tentang topik dan produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [Formulir] [9] ini untuk pembaruan rutin.

## Mengeksplorasi
  *** [form.io] [1] **
  *** [orbeon] [10] **
  *** [ohmyform] [11] **
  *** [webiny] [12] **
  *** [formtools] [13] **
  *** [formbuilder] [14] **
  *** [Formulir Alpaca] [15] **
  *[** Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka **] [16]
  *[** Top 5 Open Source Online Form Builders Pada tahun 2020 **] [2]
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
