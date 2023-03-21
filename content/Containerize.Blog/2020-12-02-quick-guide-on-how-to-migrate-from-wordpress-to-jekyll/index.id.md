---
title: "Bagaimana Migrasi dari WordPress ke Jekyll" 
seoTitle: "Bagaimana Migrasi dari WordPress ke Jekyll" 
description: "Dalam tutorial ini kita akan belajar cara memigrasikan situs Anda dari WordPress ke Jekyll dalam langkah cepat dan mudah. Mari kita mulai!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "Dalam tutorial ini kami akan belajar cara memigrasikan situs web Anda dari WordPress ke Jekyll dan meng -hostnya dengan GitHub gratis" 
url: /id/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## Dalam tutorial ini, kami akan belajar cara memigrasikan situs web Anda dari WordPress ke Jekyll dan meng -hostnya dengan GitHub gratis

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress ke Jekyll">}}

Jeykll adalah generator situs statis open source. Ini mengubah teks biasa Anda menjadi situs web dan blog statis. Dibutuhkan teks yang ditulis dalam bahasa markup favorit Anda (Markdown, Liquid, HTML / CSS) dan menggunakan tata letak untuk membuat situs web statis. Jekyll adalah blog sadar dan permalink, kategori, halaman, posting, dan tata letak khusus semuanya adalah warga negara kelas satu. Salah satu manfaat terbesar dari Jekyll adalah Anda dapat meng -host situs web statis Anda di halaman GitHub dan menjalankan situs web atau blog Anda gratis. Jadi, WordPress to Jekyll Migration dapat membantu Anda meningkatkan kinerja dan kecepatan situs web Anda.
Dalam posting blog ini kami akan melalui cara memigrasikan situs web atau blog Anda yang ada dari WordPress ke Jekyll untuk kecepatan dan kinerja yang lebih baik. Jadi, mari kita mulai!
  ***[Mengapa bermigrasi?][1]** 
  ***[instalasi][2]** 
  ***[Impor posting dan halaman WordPress ke][3]** 
  ***[Penerapan dengan halaman GitHub][4]** 
  ***[Kesimpulan][5]** 

## Mengapa bermigrasi?   {#Mengapa}
Di Jekyll, Anda bisa mendapatkan 100/100 [skor mercusuar][6] karena tidak ada interaksi database. Dan, semua konten diproses dan disimpan sebagai file HTML. Dan, Jekyll hanya akan membuat sedikit permintaan HTTP. Oleh karena itu, ini sangat cepat.

## Instalasi dan pengaturan jekyll   {#install}
Jekyll ditulis dalam Ruby. Jadi, Anda harus menginstalnya terlebih dahulu di komputer Anda. Panduan ini mengasumsikan bahwa Anda sudah menginstal Ruby di komputer Anda. Jika tidak, Anda dapat mengikuti [panduan resmi][7].
Pertama, kami akan "**jekyl **" dan " **bundler ** " permata menggunakan perintah " **permata**  " yang akan tersedia setelah menginstal Ruby. Buka baris perintah dan jalankan kode berikut.
```
gem install jekyll bundler
```
Kemudian, jalankan perintah berikut untuk membuat situs baru. Ini akan membuat folder **myblog** .
```
jekyll new myblog
```
Setelah diinstal, Anda dapat membangun situs dan membuatnya tersedia di server lokal.
```
bundle exec jekyll serve
```
Situs akan tersedia di http: // localhost: 4000. Ini juga menghasilkan folder "**_ Situs** " di folder Anda itulah output akhir dari situs ini.

## Impor halaman dan posting WordPress   {#import}
Plugin non-resmi untuk WordPress juga tersedia tetapi kami akan mengikuti metode resmi dalam tutorial ini. Jika Anda ingin memberikan plugin eksportir WordPess, Anda dapat [pergi ke sini][8].
Untuk mengimpor posting Anda dari situs web WordPress yang diselenggarakan sendiri, jalankan perintah berikut di terminal Anda.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
Ini hanya mengimpor data & konten posting & halaman. Importir ini hanya mengonversi posting Anda dan membuat materi depan YAML. Itu tidak mengimpor tata letak, gaya, atau file eksternal (gambar, CSS, dll.).

## **Penerapan dengan halaman github**    {#deploy}
Sejauh ini, kami membuat blog Jekyll kami secara lokal. Sekarang kita akan menggunakannya di GitHub. Pertama -tama, kami harus mengontrol versi situs kami menggunakan [git][9]. Jalankan perintah berikut di folder situs.
```
git init
git add .
git commit -m "Initial Commit"
```
Saat menginstal Jekyll, itu harus secara otomatis membuat file "**. Gitignore **" di root dengan setidaknya konten berikut.
Kemudian, masuk ke Github dan buat repositori baru youName.github.io
Selanjutnya, salin URL HTTPS dari repositori.

{{< figure align=center src="images/github-img.png" alt="URL HTTPS GITHUB">}}

Kemudian, tambahkan repositori jarak jauh dan dorong kode.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Selesai! Situs Anda sekarang harus tersedia di yourname.github.io

## kesimpulan   {#conclusion}
Dalam artikel ini, kami belajar cara membangun blog statis dengan situs Jekyll. Kemudian, kami belajar cara mengekspor posting dan halaman Anda dari WordPress ke Jekyll. Dan akhirnya, kami menggunakan situs terakhir ke halaman GitHub.

  
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
