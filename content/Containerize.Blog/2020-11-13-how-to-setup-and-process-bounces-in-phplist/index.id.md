---
title: "Cara mengatur dan memproses bouncing di Phplist" 
seoTitle: "Cara mengatur dan memproses bouncing di Phplist" 
description: "Phplist adalah milis yang di-hosting sendiri yang kuat dan manajer buletin. Ini membantu bisnis untuk mengirim kampanye buletin dan memproses memantul dengan mudah." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Kirim kampanye dengan buletin open source dan perangkat lunak pemasaran email. Pengaturan manajemen bouncing dalam pemrosesan bouncing Phplist dan mengotomatiskan untuk milis yang sehat." 
url: /id/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Kirim kampanye dengan buletin open source dan perangkat lunak pemasaran email. Pengaturan manajemen bouncing dalam pemrosesan bouncing Phplist dan mengotomatiskan untuk milis yang sehat.

{{< figure align=center src="images/phplist-2.png" alt="Proses memantul Phplist">}}

Kami telah menulis artikel untuk menerapkan [multi-tenancy] [1] dan [mengirim kampanye buletin] [2] di Phplist. Dalam artikel ini, kami akan membahas poin -poin ini secara rinci tentang bouncing proses di Phplist.
  * [Apa itu PhPlist?] [3]
  * [Apa itu Bounce?] [4]
  * [Pengaturan Manajemen Bounce] [5]
  * [Bagaimana memproses bouncing?] [6]
  * [Kesimpulan] [7]

## Apa itu Phplist? {#phplist}
PhPlist adalah perangkat lunak pengiriman buletin gratis dan open source yang paling populer. PhPlist memungkinkan bisnis untuk mengirim email pemasaran, pembaruan produk, dan pengumuman kepada pelanggan. Ini membantu bisnis untuk mengelola daftar, merancang buletin yang indah, kampanye jadwal, dan manajemen bouncing. [Baca lebih lanjut] [8]

## Apa itu Bounce? {#melambung}
Bouncing adalah pesan email yang tidak dapat dikirimkan karena sejumlah alasan dan kembali ke pengirim. Kami mungkin memiliki alasan seperti kotak surat penuh, alamat email tidak lagi valid atau alamat email yang salah. Karena itu, Anda harus memproses bouncing sehingga Anda tidak mengirim email ke alamat email yang tidak valid.

## Pengaturan Bounce Management {#setup}
Untuk mengatur manajemen bouncing, Anda perlu mengkonfigurasi pengaturan berikut dalam file config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist - Manajemen Pemrosesan Bounce">}}

Kami akan menjelaskan dalam langkah -langkah di bawah ini lebih lanjut tentang konfigurasi ini.
  * Pertama, Anda perlu menambahkan alamat email di mana Anda ingin menerima pesan bouncing. Anda dapat menemukan ** message_envelope ** variabel dan menambahkan alamat email Anda.
  *Phplist dapat mengambil email dari kotak surat bounce melalui dua protokol, ** mbox dan pop3 **. Jadi, temukan ** bounce_protocol ** variabel dan ubah sesuai lingkungan Anda.
  *Jika Anda telah mengatur ** MBox ** ProtoTCOL, Anda harus menentukan format file untuk itu. Jadi, temukan ** bounce_mailbox ** dan atur path seperti ‘/var/spool/mail/listbounces’.
  *Jika Anda telah menggunakan protokol ** POP3 **, Anda perlu mengonfigurasi ** host, nama pengguna, dan kata sandi ** untuk kotak surat. Anda dapat melihat pengaturan ini di atas Sreenshot.
  *Selain pengaturan di atas untuk protokol ** POP3 **, Anda mungkin perlu menambahkan port dan enkripsi.

## Bagaimana cara memproses bouncing? {#proses}
Phplist mendukung dua metode untuk bouncing proses: manual dan otomatis. Anda harus membuat pekerjaan cron untuk mengotomatiskan pemrosesan bouncing. Anda juga dapat memproses bouncing secara manual dengan mengunjungi ** sistem> proses bouncing **. Oleh karena itu, pertama -tama Anda perlu mengubah ** secara manual \ _process \ _bounces ** pengaturan sesuai dengan kebutuhan Anda. Anda dapat mengunjungi [PhPlist Docs] [9] untuk mengatur pekerjaan cron untuk proses memantul.

## kesimpulan {#conclusion}
Dalam posting ini, kami telah belajar cara mengkonfigurasi alamat email bouncing dan memproses bouncing. Anda dapat dengan mudah memproses bouncing dengan metode manual, jika Anda memiliki jumlah pelanggan yang lebih sedikit. Namun, Anda harus menggunakan proses penanganan bouncing otomatis untuk daftar besar. Ini akan menghemat waktu Anda dan membantu Anda membuat daftar pelanggan yang bersih dan valid.
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
