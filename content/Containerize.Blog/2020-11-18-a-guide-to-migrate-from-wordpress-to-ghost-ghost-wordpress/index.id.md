---
title: "Panduan untuk bermigrasi dari WordPress ke Ghost | Hantu WordPress" 
seoTitle: "Panduan untuk bermigrasi dari WordPress ke Ghost | Hantu WordPress" 
description: "Tutorial ini adalah tentang cara bermigrasi dari WordPress ke Ghost. Kami akan belajar cara memigrasikan posting dan halaman Anda ke hantu dari situs web WordPress yang ada." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost dan WordPress adalah dua platform penerbitan konten open-source terkemuka. Dalam tutorial ini, kita akan belajar cara memigrasikan konten dari WordPress ke Ghost." 
url: /id/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost dan WordPress adalah dua platform penerbitan konten open-source terkemuka. Dalam tutorial ini, kita akan belajar cara memigrasikan konten dari WordPress ke Ghost.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Bermigrasi dari wordpress ke hantu">}}


## Ringkasan
Di masa lalu, kami menerbitkan banyak artikel tentang topik -topik seperti [meningkatkan petunjuk Anda dengan integrasi CivicRM WordPress gratis][1], [cara mengintegrasikan forum wacana dengan WordPress][2], dan banyak lagi. Ghost adalah platform blogging open source yang muncul. Ini adalah cms node.js untuk penerbitan konten dan dilengkapi dengan antarmuka sederhana dan bersih yang membuatnya mudah digunakan. Ini adalah platform yang luar biasa untuk pemula karena berfokus pada markdown alih -alih mengedit wysiwyg. Kekuatan dan kecepatan node.js membuat hantu sangat cepat. Karena kesederhanaan platform, banyak pengguna beralih dari platform lain. Karena WordPress adalah platform nomor satu untuk manajemen konten.
Oleh karena itu, lebih banyak pengguna **bermigrasi dari WordPress ke Ghost** . Ada banyak konten yang menyertakan file media, komentar, posting dan dll. Ada plugin yang tersedia yang membantu Anda memigrasikan konten dari WordPress ke Ghost. Manfaat utama mengadopsi hantu adalah berfokus pada optimasi mesin pencari. Dalam tutorial WordPress Ghost ini, kami akan melalui semua langkah migrasi menggunakan plugin Ekspor WordPress resmi.
  ***[intro briedf wordpress][3]** 
  ***[Apa itu hantu?][4]** 
  ***[persyaratan][5]** 
  ***[Isi Ekspor dari WrodPress Menggunakan Plugin][6]** 
  ***[Impor konten ke hantu][7]** 
  ***[Kesimpulan][8]** 

## **Intro Briedf WordPress** {#WP}
[WordPress][9] adalah platform blogging open source terkemuka yang telah memberi daya pada sejumlah besar situs web. Perangkat lunak blogging gratis ini diselenggarakan sendiri, multibahasa, dan memberikan dukungan untuk banyak bahasa. Selain itu, komunitas pengembangan WordPress sangat bersemangat dan telah mengembangkan kumpulan raksasa plugin berguna yang tersedia dengan mudah. Plugin ini membahas hampir setiap kasus penggunaan situs web bisnis Anda. Selain itu, ditulis dalam PHP dan dilengkapi dengan dokumentasi komprehensif mengenai pengembangan dan penyebaran. Semua kode sumber tersedia di GitHub. Lebih lanjut, platform blog ini sangat dapat diperluas, dapat dikonfigurasi, dan memberikan integrasi dengan aplikasi pihak ketiga. Ada dasbor yang sangat logis dan mudah dipahami di mana pengguna dapat menyeret & menjatuhkan elemen untuk memodifikasi tampilan dan nuansa situs web mereka.

## **Apa itu Ghost?** {#ghost}
[Ghost][10] adalah platform blogging open source populer lainnya. Ini adalah salah satu platform penerbitan konten yang paling banyak digunakan yang sangat diadopsi oleh pengembang dan pemilik situs. Selain itu, Ghost sangat ramah SEO dan dilengkapi dengan tema, formulir, buletin email, dan langganan email. Perangkat lunak blogging gratis ini ditulis dalam JavaScript dan semua dokumentasi tersedia mengenai pengembangan dan penyebaran.

## Persyaratan   {#Requirements}
Di bagian tutorial WordPress Ghost, kita akan melihat persyaratan yang diperlukan untuk bermigrasi dari WordPress ke Ghost. Dengan plugin Ekspor WordPress resmi, Anda dapat dengan mudah memigrasikan konten Anda dari WordPress ke Ghost. Dalam tutorial ini, kami akan memandu Anda tentang cara mengekspor konten Anda dari WordPress ke situs hantu. Jadi, Anda harus memiliki instalasi WordPress dan WordPress **Plugin Ekspor yang berfungsi**  diinstal.

## Isi Ekspor dari WordPress   {#Export}
Pertama -tama, Anda harus menginstal plugin. Ikuti langkah -langkah berikut untuk menginstal plugin
  *Klik **plugin**  dari menu bilah samping
  *Klik **Tambahkan baru  **dan gunakan bidang pencarian di sudut kanan atas untuk mencari **  ekspor hantu** 
  ***Instal  **dan **  Aktifkan  **Plugin oleh “**  Ghost Foundation** “

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Instal dan aktifkan Plugin Ghost untuk WordPress">}}

  *Setelah plugin diaktifkan navigasi ke **alat**  dari menu samping
  *Klik **Ekspor ke Ghost**  dengan menu bilah samping.
  * Anda akan diberikan panduan tentang cara menyiapkan konten WordPress Anda untuk Ghost.
  * Karena, Ghost menggunakan tag alih -alih kategori sehingga plugin akan membantu Anda mengubah kategori menjadi tag.
{{_LINE_37_}}
{{_LINE_38_}}
    Langkah -langkah berikut akan secara permanen mengubah struktur konten situs WordPress Anda. Jika Anda tidak yakin melakukan perubahan ini, silakan gunakan alat ekspor WordPress standar di bawah Alat> Ekspor untuk membuat cadangan lengkap dari semua konten Anda.
{{_LINE_40_}}
{{_LINE_41_}}
  *Arahkan ke **impor**  di menu bilah sisi
  *Klik **Jalankan importir  **di bawah konverter taksonomi ** **  item impor.
  * Gunakan kotak centang untuk memilih kategori yang ingin Anda impor ke dalam tag Anda dan karenanya ke situs hantu Anda.
  *Kemudian klik **Konversi kategori menjadi tag** .
  *Navigasikan kembali ke **Ekspor ke Ghost  **di dalam **  Alat**  di menu bilah samping.
  *Klik tombol **Unduh Ghost File** . Anda akan mengunduh file zip yang berisi semua konten Anda.

## Impor Impor ke Ghost   {#import}
Di bagian tutorial WordPress Ghost ini, kami akan menerapkan langkah -langkah untuk mengimpor konten ke Ghost.
  *Masuk ke Ghost Admin dan navigasikan ke **Labs**  View.
  *Klik tombol **Pilih File  **di dalam opsi Impor **  Konten**  dan pilih file zip yang diekspor Anda
  *Klik **Impor** . Semua konten Anda kemudian akan diimpor ke situs hantu Anda.
Pada saat ini, Ghost tidak memiliki sistem komentar bawaan. Alternatif yang paling populer adalah Disqus.

## kesimpulan   {#conclusion}
Ini membawa kita ke akhir posting blog ini. Dalam tutorial WordPress Ghost ini, kami belajar cara mempersiapkan konten WordPress Anda yang siap untuk migrasi ke Ghost. Kami menggunakan plugin migrasi hantu resmi oleh Ghost Foundation untuk melakukan migrasi. Selain itu, posting blog ini pasti akan membantu Anda jika Anda ingin bermigrasi dari WordPress ke Ghost karena kami telah membahas semua langkah yang diperlukan. Lebih lanjut, ada banyak platform penerbitan konten open source dan artikel tutorial yang disebutkan di bagian "Jelajahi" di bawah ini. Namun, kedua platform blogging open source ini adalah perangkat lunak terkemuka terkemuka yang menawarkan fitur tingkat perusahaan untuk memenuhi kebutuhan situs web bisnis Anda.
Akhirnya, [containerize.com][11] telah menulis posting blog baru pada perangkat lunak open source lebih lanjut. Karena itu, tetap terhubung dengan platform [ini][12] untuk pembaruan rutin.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [WordPress][9]
  * [Jekyll][13]
  * [Wacana][14]
  * [Ghost][10]
  * [Cara Dockerize WordPress dengan Docker Compose][15]
  * [Cara Mengaktifkan Kompresi GZIP di WordPress untuk Pagpeed dan SEO yang lebih baik][16]
  * [Tingkatkan petunjuk Anda dengan integrasi WordPress civicrm gratis][1]
  * [Otomatis Sistem Tiket Menggunakan WordPress dan Osticket][17]
  * [Cara mengintegrasikan forum wacana dengan WordPress][2]
  * [Tingkatkan Lalu Lintas Pencarian Situs Web Dengan mengikuti 7 blog SEO teratas][18]
  * [Cara Membangun Situs Web Anda Dengan WordPress dan Gatsby][19]

  
[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
