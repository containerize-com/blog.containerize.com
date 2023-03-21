---
title: "Tutorial Drupal | Mengotomatiskan pertumbuhan timbal dengan Drupal & Mautic '" 
seoTitle: "Tutorial Drupal | Otomatiskan pertumbuhan timbal dengan Drupal & Mautik" 
description: "Kembangkan dan lacak alur kerja otomasi pemasaran Anda dengan bantuan integrasi mautik Drupal. Ikuti tutorial Drupal ini untuk mempelajari langkah -langkah integrasi." 
date: Wed, 14 Oct 2020 11:01:35 +0000
author: muhammadmustafa
summary: "Biarkan Mautic bertanggung jawab atas alur kerja otomasi pemasaran untuk meningkatkan tanggapan konsumen. Ini gratis, open-source, dan mudah diintegrasikan dengan situs Drupal Anda." 
url: /id/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
categories: ['Content Management', 'Marketing Automation']
---

## Biarkan Mautic bertanggung jawab atas alur kerja otomatisasi pemasaran untuk meningkatkan tanggapan konsumen. Ini gratis, open-source, dan mudah diintegrasikan dengan situs Drupal Anda.

{{< figure align=center src="images/integrate-mautic-with-drupal-banner-1024x536.png" alt="Tutorial Drupal">}}


## Ringkasan:
Pada titik waktu saat ini, sangat penting untuk memiliki strategi pemasaran yang kuat dan efektif. Lead Anda tetap bertunangan karena waktu yang Anda habiskan untuk analisis perilaku mereka yang mendalam. Untungnya, Open Source Community telah mengembangkan banyak platform otomatisasi pemasaran **gratis**  Perangkat lunak yang sebagai hasilnya meningkatkan mobilitas dan penerapan alur kerja otomatisasi pemasaran. Solusi open source ini mengotomatiskan tugas berulang seperti mengirim email, pelacakan, dan kampanye. Perangkat lunak otomatisasi pemasaran membantu Anda menempatkan strategi pemasaran yang efektif sehingga pemangku kepentingan bisnis dapat fokus pada operasi penghasil pendapatan lainnya. Lebih lanjut, revolusi dalam kecerdasan buatan dan pembelajaran mesin memiliki dampak besar pada industri otomatisasi. Perusahaan cenderung mengumpulkan data dari berbagai sumber. Kemudian, mereka menganalisis data itu secara kritis dan meluncurkan beberapa proses minat mereka. Setelah semua otomatisasi sudah ada, manajer cenderung bekerja pada kegiatan keterlibatan pelanggan.
Demikian juga, ada banyak alat open source **CMS**  untuk mengelola platform web dalam ruang lingkup yang lebih luas. Sebagian besar bisnis menggunakan sistem manajemen konten untuk mengelola konten. Ada banyak plugin untuk solusi manajemen konten ini. Komunitas open source telah mengembangkan sejumlah ekstensi yang meningkatkan fungsionalitas solusi CMS open source ini. Adalah fakta yang terbukti bahwa bisnis membuat penampilan digital mereka menggunakan perangkat lunak manajemen konten gratis ini. Di atas segalanya, mudah bagi mereka yang memiliki sedikit pengetahuan tentang pembangunan situs web. Dalam tutorial Drupal ini, kita akan melalui dampak integrasi [Drupal][2][Mautic][1] dengan menutupi poin -poin berikut:
  * [Pro integrasi ini untuk bisnis?][3]
  * [Bagaimana cara mengatur struktur direktori?][4]
  * [Bagaimana cara mengaktifkan dan mengaktifkan mautik di drupal?][5]
  * [Kesimpulan][6]

## pro dari integrasi ini untuk bisnis?   {#berguna}
MAUTIC adalah perangkat lunak otomatisasi pemasaran email yang gratis, kaya, dan berorientasi kualitas **. Alat otomatisasi ini menawarkan kontrol penuh atas email pemasaran dan halaman arahan. Integrasi CMS dengan MAUTIC adalah kombinasi yang kuat, andal, dan ramah bisnis. Selain itu, perangkat lunak pemasaran open source ini menyediakan integrasi dengan hampir semua platform media sosial populer seperti Facebook, Twitter, dan LinkedIn. Mudah diatur dan dilengkapi dengan kemampuan tuan rumah sendiri. Alat gratis ini memiliki banyak fitur seperti pembangunan kampanye, segmentasi kontak, pembangun email, pelacakan aktivitas pengguna, retensi pelanggan, dan banyak lagi. Namun, Drupal adalah sistem manajemen konten yang kuat yang menawarkan pemasangan beberapa plugin yang mudah. Ini memungkinkan pengguna membangun situs web yang sederhana hingga kompleks dengan semua fitur yang diperlukan. Selanjutnya, ada keamanan bawaan untuk mencegah sistem dari peretas dan penyerang. Ini hemat biaya dan menghilangkan kebutuhan mempekerjakan pengembang web senior untuk bisnis.
Ini ditulis dalam PHP dan dilengkapi dengan dokumentasi komprehensif mengenai pengembangan dan penyebaran. Namun, Drupal memiliki komunitas pengembang yang sangat besar yang bersemangat dan menyelesaikan masalah apa pun dengan sangat cepat. Ini juga menawarkan banyak fitur terkemuka yang mencakup pengeditan konten WYSIWYG, modul yang berkontribusi, optimasi kecepatan, server web dan independensi basis data, dan banyak lagi. Integrasi Mautik dan Drupal dapat memberi Anda banyak keunggulan seperti bentuk bangunan, kampanye pemasaran dan menyusun tanggapan yang diterima dari konsumen. Ini adalah salah satu alat otomatisasi pemasaran terbaik ** yang memungkinkan Anda menjalankan kampanye pemasaran yang ditargetkan berdasarkan perilaku dan minat pelanggan. Itu semua terjadi di satu tempat dengan antarmuka pengguna yang logis. Perangkat lunak open source ini cukup mampu melacak aktivitas pelanggan, dan minat. Di bagian selanjutnya dari tutorial Drupal ini, kita akan belajar cara mengatur struktur direktori.

## Bagaimana cara mengatur struktur direktori?   {#mempersiapkan}
Di bagian tutorial Drupal ini, kita akan belajar cara mengatur struktur direktori untuk integrasi CMS ini.
**Asumsi** : Anda terbiasa dengan dasar -dasar alat CMS (mis. Drupal dalam tutorial ini) dan Anda telah mengaturnya di mesin Anda.
Pertama, unduh plugin Mautic untuk Drupal dari [tautan] ini [7]. Kami akan mengunduh opsi pertama bernama "Mautic 8.x-1.11".
Kedua, ekstrak dan tempatkan folder yang diunduh di server lokasi ini \ _path/modul/, dan pada akhirnya, jalur lengkap akan server \ _path/modul/mautik.

## Bagaimana cara mengaktifkan dan mengaktifkan Mautic di Drupal?   {#memungkinkan}
Sekarang, buka dasbor admin drupal Anda ke browser, buka mengelola-> Perpanjangan dan Anda akan melihat plugin MAUTIC dalam daftar.

{{< figure align=center src="images/Screenshot-2020-10-13-at-13.53.23-1024x577.png" alt="Mautik Drupal">}}

Setelah itu, klik dropdown untuk melihat opsi lebih lanjut.

{{< figure align=center src="images/Screenshot-2020-10-13-at-14.00.26-1024x577.png" alt="Perangkat Lunak Otomasi Pemasaran Email">}}

Sekarang, untuk menyelesaikan integrasi **CMS ini**  Tekan opsi "Configure" dan Anda akan ditampilkan jendela ini.

{{< figure align=center src="images/Screenshot-2020-10-13-at-14.02.28-1024x548.png" alt="Integrasi Drupal">}}

Terakhir, untuk mengaktifkan Mautic JavaScript, menempatkan URL ke dalam bidang "URL Mautik" (mis. Pesan sukses akan muncul pada konfigurasi yang berhasil. Bagian tutorial **drupal**  ini berakhir di sini.

{{< figure align=center src="images/Screenshot-2020-10-13-at-14.17.39-1024x419.png" alt="Mautik Drupal">}}


## Kesimpulan   {#Final}
Dengan pendekatan modern dari alur kerja otomatisasi pemasaran **, integrasi mautik Drupal memberikan pengalaman pelanggan yang mulus terhadap sifat digital suatu organisasi. Ini adalah pilihan yang sempurna dalam hal mengonversi arahan segar menjadi prospek pemasaran yang ahli. Kombinasi ini bisa menjadi faktor yang menguntungkan dan hemat waktu untuk bisnis Anda. Mautic cukup dapat diperluas sehingga pengembang dapat menambahkan kode khusus untuk mencapai fungsionalitas yang diinginkan. Data adalah aset paling berharga dari organisasi mana pun. Oleh karena itu, MAUTIC dapat mengekstrak set data untuk memberikan wawasan terperinci di mana manajemen puncak dapat melakukan analitik. Ini memungkinkan Anda untuk melacak kontak situs web dan itu dapat dilakukan dengan cukup mudah dengan menempatkan kode javascript mautik. Selain itu, Anda dapat menemukan banyak templat email yang dipersonalisasi bersama dengan banyak ketentuan lain untuk meningkatkan tingkat konversi.
Tutorial Drupal ini akan sangat membantu jika Anda ingin menginstal perangkat lunak otomasi pemasaran email pada sistem manajemen konten Anda. Namun, [containerize.com][8] berkembang untuk meningkatkan integrasi **CMS**  ember tutorial yang mencakup banyak alat CMS sumber terbuka lainnya dan plugin yang ramah bisnis. Tetap terhubung dengan manajemen konten dan kategori otomatisasi pemasaran untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Drupal][9]
  * [Mautic][10]
  * [Otomasi Pemasaran dengan Integrasi Mautik dan WooCommerce][11]
  * [Cara Menyiapkan Kampanye Mautik Menggunakan Pembuat Kampanye][12]
  * [Cara Mengatur Mautik - Integrasi Facebook][13]
  * [Top 5 Top Templat Bootstrap Joomla Responsif Gratis dari 2020][14]
  * [Panduan Pengembangan Template Joomla untuk Pemula][15]
  * [Cara Membuat Tema Joomla dengan Kerangka Gantry][16]
  * [Top 5 Open Source CMS Software untuk 2020][17]
  * [Tingkatkan petunjuk Anda dengan integrasi wordpress civicrm gratis][18]

  
[1]: https://products.containerize.com/marketing-automation/mautic
[2]: https://products.containerize.com/content-management/drupal
[3]: #useful
[4]: #setup
[5]: #enable
[6]: #final
[7]: https://www.drupal.org/project/mautic/releases
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/content-management/drupal/
[10]: https://products.containerize.com/marketing-automation/mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[13]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[14]: https://blog.containerize.com/content-management/top-5-best-free-responsive-joomla-templates-of-2020/
[15]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
[16]: https://blog.containerize.com/content-management/how-to-create-joomla-theme-joomla-gantry-framework/
[17]: https://blog.containerize.com/content-management/top-5-open-source-content-management-systems-for-2020/
[18]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
