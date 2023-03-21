---
title: "Mengatur Manajemen Bounce Advanced dan Aturan Bounce di Phplist" 
seoTitle: "Mengatur Manajemen Bounce Advanced dan Aturan Bounce di Phplist" 
description: "Aktifkan manajemen bouncing lanjutan di Phplist dan menangani email bouncing. Buat aturan bouncing dan mengotomatiskan proses untuk mengambil berbagai tindakan pada pesan yang dikembalikan." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "Bergantung pada jenis kode kesalahan bouncing yang dikembalikan oleh MTA, Advanced Bounce Management memungkinkan eksekusi otomatis dari berbagai tindakan." 
url: /id/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## Bergantung pada jenis kode kesalahan bouncing yang dikembalikan oleh MTA, Advanced Bounce Management memungkinkan eksekusi otomatis dari tindakan yang berbeda.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Mengatur Manajemen Bounce Advanced dan Aturan Bounce di Phplist">}}

Dalam tutorial [sebelumnya][1] kami, kami sudah membahas **Phplist Bounce Processing **. Jika Anda tidak terbiasa dengan pemrosesan bouncing, Anda dapat membacanya. Anda dapat mengunduh email yang tidak terkirim ke proyek PhPlist Anda menggunakan pemrosesan bouncing. Bagaimana Anda menangani email yang diunduh? Tidak tahu, mari kita lihat manajemen bouncing di muka yang memungkinkan Anda untuk memilah  **email bouncing**  . Setiap pesan email yang dikembalikan memiliki kode kesalahan yang dikembalikan oleh MTA (agen transfer surat). Selanjutnya, Anda dapat meninjau header email pesan yang dikembalikan dan berisi semua informasi di sepanjang kode kesalahan.
  * [Aktifkan Penanganan Bounce Lanjutan][2]
  * [Tambahkan aturan bouncing][3]
  * [Daftar aturan bouncing][4]
  * [Kesimpulan][5]

## Aktifkan Penanganan Bounce Advanced   {#Enable}
Hal pertama pertama, aktifkan penanganan **bouncing canggih**  dengan menyalin kode di bawah dalam file config.php.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Setelah itu, navigasikan ke **System> Kelola Bouncing> Daftar aturan memantul**  untuk membuat aturan bouncing.
Anda dapat membuat aturan bouncing berdasarkan ekspresi reguler. Anda dapat menemukan alasan mengapa **email bangkit kembali**  di header dan menggunakannya untuk ekspresi reguler. Selain itu, pilih tindakan yang sesuai berdasarkan kode kesalahan atau ekspresi reguler. Phplist mendukung tindakan berikut. Pernyataan tindakan jelas sendiri sehingga kami tidak perlu secara rinci.
  * Hapus pelanggan
  * Pelanggan Unconfirm
  * Pelanggan Blacklist
  * Alamat email daftar hitam
  * Hapus pelanggan dan bouncing
  * Pelanggan Unconfirm dan Hapus Bounce
  * Tambahkan pelanggan ke daftar do-not-end dan hapus bouncing
  * Tambahkan alamat email ke daftar do-not-end dan hapus bouncing
  * Hapus bouncing

## Tambahkan aturan bouncing   {#add}
Mari kita buat aturan bouncing pertama kami.
  *Pertama, masukkan ekspresi reguler seperti **(akun telah ditangguhkan | akun tidak tersedia)** 
  * Setelah itu, pilih tindakan yang sesuai
  * Akhirnya, tambahkan catatan/memo untuk aturan

{{< figure align=center src="images/add-bounce-rule.png" alt="Buat aturan bouncing di Phplist">}}

Anda dapat menambahkan aturan bouncing karena alasan berikut dan memilih tindakan yang tepat untuk menangani bouncing. Namun, Anda dapat mencari tanggapan SMTP dan menambahkan lebih banyak aturan ke dalam daftar.
  * Penerima yang diarsipkan
  * type = mx: host tidak ditemukan
  * Maaf, tidak ada kotak surat di sini dengan nama itu
  * Kotak surat dinonaktifkan
  * Akun dinonaktifkan
  * Kotak surat ini telah diblokir karena tidak aktif
  * Pengguna tidak diketahui
  * Tidak ada penerima seperti itu
  * dan seterusnya …
**Catatan:  **Anda harus membungkus alasan bouncing dalam tanda kurung dan menggunakan simbol pipa **  |  **atau **  atau**  pernyataan, jika Anda ingin menambahkan beberapa alasan dalam satu aturan bouncing.

## Daftar aturan bouncing   {#list}
Setelah membuat sejumlah aturan, aturan **bouncing**  Anda akan terlihat seperti pada tangkapan layar di bawah ini. Anda dapat melakukan tindakan lain seperti perubahan pesanan dan menghapus pada halaman ini.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Daftar Aturan Bounce">}}


## kesimpulan   {#conclusion}
Dalam tutorial ini, kami belajar tentang manajemen bouncing **canggih**  dan mengembangkan aturan bouncing yang diperlukan. Akan sangat bagus untuk mengizinkan fitur ini sehingga Anda dapat mengotomatiskan proses membersihkan alamat email yang tidak valid dari daftar Anda. Ini juga akan memungkinkan Anda untuk mempertahankan tingkat minimum email yang dikembalikan. Selain itu, daftar Anda akan memiliki pelanggan yang sah.
Lebih lanjut, [containerize.com][6] sedang dalam perjalanan untuk meningkatkan tumpukan produk open source dalam berbagai bahasa dan kerangka kerja. Untuk pembaruan rutin, silakan nantikan kategori [nawala][7] untuk artikel yang lebih menarik.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [PhPlist - Open Source Newsletter dan Perangkat Lunak Pemasaran Email][8]
  * [Cara membuat dan mengirim buletin menggunakan PhPlist][9]
  * [Cara Mengatur dan Proses Bouncing di PhPlist][1]
  * [Panduan Pemula untuk Mengembangkan Plugin PhPlist][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
