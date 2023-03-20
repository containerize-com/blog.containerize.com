---
title: "Otomatis Sistem Tiket Menggunakan WordPress dan Osticket" 
seoTitle: "Otomatis Sistem Tiket Menggunakan WordPress dan Osticket" 
description: "Integrasi Osticket-WordPress menyediakan cara bagi pelanggan untuk menghasilkan tiket dukungan dari situs WordPress dan mengelolanya dari Osticket Dashboard." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Otomatiskan proses helpdesk dengan integrasi wordpress dan osticket yang mulus. Ubah pertanyaan pelanggan melalui formulir berbasis web menjadi tiket dukungan." 
url: /id/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Otomatiskan proses HelpDesk dengan integrasi WordPress dan Osticket yang mulus. Ubah pertanyaan pelanggan melalui formulir berbasis web menjadi tiket dukungan.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Integrasi Osticket-WordPress untuk mengotomatiskan sistem tiket">}}

Pelanggan Anda dapat memiliki pertanyaan tentang produk/layanan Anda. Mereka akan mengirimkan pertanyaan mereka melalui berbagai bentuk di situs WordPress Anda. Integrasi Osticket-WordPress membantu mengubah pertanyaan itu menjadi tiket. Ini mengirimkan data melalui API ke sistem helpdesk osticket.
Osticket adalah sistem tiket helpdesk open-source dan gratis. Pelanggan dapat membuat tiket mengenai pertanyaan mereka di Osticket. Sistem Helpdesk ini memudahkan organisasi mana pun untuk mengelola pertanyaan yang berasal dari pelanggan mereka. Admin dapat membuat departemen dan tim, dan menetapkan tiket ke berbagai agen sesuai dengan sifat tiket yang dibuat. Sistem open-source gratis ini akan melacak masalah. Ini memungkinkan pelanggan dan agen untuk mengomentari tiket untuk membahas kemajuan. Kami akan membahas bagian berikut dalam posting blog ini:
  * [Proses integrasi][1]
  * [Instalasi Plugin WordPress][2]
  * [Prosedur Otentikasi][3]
  * [Kesimpulan][4]

Proses integrasi ##: {#integrasi}
Integrasi Osticket dan WordPress membutuhkan formulir kontak di situs WordPress dengan bidang berikut
  1. Bantuan topik
  2. Email
  3. Nama lengkap
  4. Subjek
  5. Pesan
Formulir kontak harus mengirim email, karena plugin ini mengaitkan fungsi WP_Mail untuk mendapatkan data formulir.

Instalasi plugin ## WordPress: {#WordPress}
  1. Buka dasbor admin dari situs WordPress Anda.
  2. Selanjutnya buka bagian plugin.
  3. Kemudian instal [plugin] ini [5].
  4. Setelah itu aktifkan plugin.
  5. dan pergi ke "Pengaturan" -> "Konektor Osticket".
  6. Kemudian masukkan URL situs Osticket Anda yaitu [http: //your.domain/api/tickets.json][6]
  7. Masukkan kunci API yang dibuat dari panel admin Osticket (dijelaskan di bagian berikutnya).
  8. Pada akhirnya isi semua bidang untuk memetakan data dari formulir kontak Anda ke bidang tiket Osticket.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Integrasi Osticket-WordPress untuk mengotomatiskan sistem tiket">}}


Prosedur otentikasi ##: {#Auth}
Otentikasi API dilakukan melalui tombol API yang dikonfigurasi di dalam panel admin osticket. Kunci API dihasilkan dan ditautkan ke alamat IP sumber yang diverifikasi terhadap Sumber IP dari permintaan API HTTP. Untuk membuat kunci API
  1. Buka panel admin osticket.
  2. Klik "Kelola".
  3. Buka sub menu “Kunci API”.
  4. Klik “Tambahkan Kunci API Baru”.
  5. Atur "Status" ke Aktif.
  6. Centang kotak centang "dapat membuat tiket".
  7. Masukkan alamat IP dari situs WordPress Anda dan tekan "Tambahkan Kunci".

{{< figure align=center src="images/osticket-1024x729.png" alt="Integrasi Osticket-WordPress untuk mengotomatiskan sistem tiket">}}


## kesimpulan: {#conclusion}
Integrasi Osticket-WordPress akan mengotomatiskan proses tiket. Oleh karena itu akan membuat hidup lebih mudah bagi tim pendukung. Pertanyaan di situs web WordPress akan secara otomatis dikonversi menjadi tiket dukungan di Osticket. Sehingga tim pendukung dapat mengelola semua pertanyaan pelanggan dengan lebih mudah dan efisien. Agen pendukung akan diberitahu dengan pemberitahuan email. Oleh karena itu, agen dapat menyelesaikan pertanyaan pelanggan tepat waktu. Bagian komentar tentang Osticket membantu pelanggan dan agen pendukung untuk berkomunikasi secara efektif dan tepat waktu. Ini juga memudahkan manajer untuk melacak kemajuan untuk setiap tiket.

## Mengeksplorasi:
Untuk mempelajari lebih lanjut tentang Osticket dan WordPress, silakan periksa halaman -halaman ini:
  * [OSTICKET - Sistem tiket helpdesk open source gratis][7]
  * [WordPress - Sumber terbuka gratis dan CMS dan alat blogging yang paling banyak digunakan][8]
  * [Cara Mengatur Perangkat Lunak Meja Bantuan Online Menggunakan Osticket][9]

  
[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
