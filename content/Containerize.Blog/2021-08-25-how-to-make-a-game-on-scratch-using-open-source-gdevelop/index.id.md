---
title: "Cara membuat game di awal menggunakan open source gDevel" 
seoTitle: "Cara membuat game di awal menggunakan open source gDevel" 
description: "Bagaimana cara membuat game dari awal? GDevelop menawarkan UI logis yang diisi dengan banyak komponen dan perilaku untuk membangun video game untuk web, desktop, iOS, dan Android." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "Tutorial pengembangan game ini menjelaskan dasar -dasar membangun permainan balap truk. Anda dapat menginstalnya atau menggunakan aplikasi online untuk membangun video game yang menarik." 
url: /id/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Tutorial pengembangan game ini menjelaskan dasar -dasar membangun permainan balap truk. Anda dapat menginstalnya atau menggunakan aplikasi online untuk membangun video game yang menarik.

{{< figure align=center src="images/gdevelop-game.png" alt="Cara membuat game di awal">}}


## **Ringkasan**
Dalam masa lalu, kami menerbitkan banyak posting blog tentang perangkat lunak pengembangan game gratis sumber terbuka seperti [5 perangkat lunak pengembangan game gratis di tahun 2021][1], [memulai dengan pengembangan game menggunakan kekuatan super][2], [Game Tutorial Pengembangan | Gerakan Pemain di GDevelop][3], [Tutorial Pengembangan Game HTML5 untuk Pemrogram Video Game][4], [Bagaimana Industri Gaming Global Memanfaatkan Perangkat Lunak Sumber Terbuka][5], dan [Tutorial GDevely untuk Pemula untuk Memulai Pengembangan Game][6 ]. Kemajuan terbaru di zaman internet telah membawa tren baru dalam industri game video. Platform pembangunan game open source menyediakan ekosistem lengkap untuk mengembangkan game secara mandiri dan pengembang kemudian matang platform itu sesuai kebutuhan. Dalam posting blog ini, kita akan belajar cara membuat game di awal menggunakan [GDevelop][7] dengan meliput poin -poin berikut.
  * **[Mengapa kita harus menggunakan gdevelop?][8] ** 
  * **[menyiapkan proyek][9] ** 
  * **[Cara menyiapkan latar belakang dan objek?][10] ** 
  * **[Menambahkan Behviors ke Objek][11] ** 
  * **[Menjalankan game][12] ** 
  * **[Kesimpulan][13] ** 

## Mengapa kita harus menggunakan GDevelop?   {#Mengapa}
[GDevelop][7] adalah perangkat lunak game open source. Muncul dengan kemampuan hosting sendiri dan bersifat lintas platform. Anda dapat mengunduh dan menginstalnya, atau Anda dapat menggunakan versi online untuk bermain dengannya. Pengguna tidak perlu mendapatkan pengetahuan pemrograman apa pun untuk menggunakan pembuat game ini. Di atas segalanya, ia menawarkan antarmuka pengguna drag & drop yang muncul dengan perilaku permainan, templat, dan objek yang sudah dibangun sebelumnya. Perangkat lunak pengembangan game gratis ini sangat dapat dikonfigurasi dan menawarkan integrasi dengan perpustakaan pihak ketiga. Untuk informasi lebih lanjut tentang alat gratis ini, Anda dapat memeriksa tautan ini untuk mempelajari lebih lanjut tentang fitur -fiturnya dan proses pengaturan.

## Menyiapkan proyek   {#setting}
Di bagian ini, kami akan membuat proyek kami untuk membangun permainan balap truk dengan beberapa fungsi dasar. Ikuti ini [tautan][6] Jika Anda ingin mengatur di mesin lokal Anda atau Anda dapat menggunakan versi online dengan pergi ke [tautan] ini [14].
Jadi, Anda akan menemukan layar berikut setelah Anda mengklik "Buat proyek baru" dan kemudian klik "Game Kosong".

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Cara membuat game di awal">}}

Anda dapat melihat bilah menu di sisi kiri jendela. Sekarang, klik pada "adegan" dan kemudian klik dua kali pada tombol "Klik untuk menambahkan adegan". Setelah itu, Anda akan mendarat di layar game di mana Anda dapat membuat objek game, latar belakang, dan perilaku. Bergerak maju, klik "Tambahkan objek baru" yang ditempatkan di panel samping kanan dan Anda akan melihat jendela berikut.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Tutorial GDevely">}}


## Bagaimana menyiapkan latar belakang dan objek?   {#mempersiapkan}
Di bilah pencarian, cari objek truk dan klik dua kali dan tekan "Tambahkan ke game" setelah hasilnya. Ulangi langkah ini untuk kedua roda dan objek platform. Sekarang, klik kanan pada objek Greenfloor dan edit.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="Tutorial Pengembangan Game">}}


## Menambahkan Behviors ke objek   {#Add}
Selanjutnya, seret dan jatuhkan greenfloor ke layar game dan sesuaikan tinggi dan lebarnya sesuai keinginan Anda. Seret objek truk dan jatuhkan di layar game dan kemudian objek roda. Bergerak maju, klik kanan pada badan truk dan tekan "Edit objek truk", klik perilaku, klik "Tambahkan perilaku ke objek" dan klik "Mesin Fisika 2.0" dan Anda akan melihat jendela berikut.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Cara membuat game di awal">}}

Di jendela ini, Anda dapat memodifikasi konfigurasi seperti kepadatan, lebar, dan tinggi. Sekarang, ulangi proses yang sama untuk objek Greenfloor tetapi pertahankan tipe "statis" dan tekan tombol "Terapkan". Sekali lagi, edit objek truk, tekan "Edit Points", tekan "EDD Points" dan kemudian masukkan nama roda depan Anda (mis. FW dalam tutorial ini). Suatu titik akan dibuat pada objek, cukup seret titik itu ke lokasi roda. Ulangi proses ini untuk roda belakang juga dan buat x dan y ke 0 seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="Tutorial Pengembangan Game">}}

Setelah itu, edit kedua objek roda dan sesuaikan poin mereka. Lebih lanjut, sekali lagi pergi ke opsi edit roda, tekan tab "Perilaku", pilih "Fisika Mesin 2.0" dan atur nilai -nilai jenis, jari -jari, dan kepadatan seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="Perangkat lunak desain game">}}

Sekarang, klik pada tab "Adegan Baru", tekan "Tambah Acara Baru", tekan "Tambah Kondisi", cari "Di awal adegan" dan tekan "OK". Kemudian, tekan pencarian "Tambah Tindakan" untuk "Posisi Pusat X Kamera" dan atur konfigurasi berikut.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="Perangkat Lunak Pengembangan Game Gratis">}}

Sekarang, salin tindakan tetapi pastikan tindakan yang disalin diatur ke "y". Tambahkan tindakan lain bernama "Ubah Zoom Kamera", atur ke 0,4, dan seret tindakan ini ke atas. Tambahkan tindakan lain, cari "Tambahkan sambungan roda" dan atur konfigurasi untuk kedua roda seperti yang ditunjukkan di bawah ini.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Panduan Pengembangan Game">}}

Setelah itu, tambahkan kondisi baru, cari "tombol ditekan" dan atur ke kiri. Sekarang, tambahkan tindakan, pilih roda pertama, cari kecepatan linier x ", tanda modifikasi untuk" kurangi "dan atur nilai 50. Ulangi langkah ini untuk kunci yang tepat tetapi pastikan tanda modifikasi tambahkan seperti yang ditunjukkan di bawah ini.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="Tutorial Pengembangan Game">}}


## Menjalankan game   {#run}
Setelah semua langkah selesai. Saatnya menjalankan game dengan menekan tombol yang ditempatkan di sudut kiri atas. Ini akan meluncurkan game ke jendela baru.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Cara membuat game di awal">}}


## kesimpulan   {#conclusion}
Ini adalah akhir dari posting blog ini dan Anda pasti tahu bahwa cara membuat game di awal. Namun, ada banyak perangkat lunak desain game  **gratis **  tersedia di pasaran karena industri ini mendapatkan popularitas dan permintaan. Ada beberapa alasan di baliknya seperti perangkat lunak open source dapat diskalakan, dapat dikonfigurasi, hemat biaya, dan mudah dipelihara. Selain itu, permintaan untuk pembangun permainan lintas platform meningkat karena pengembang merasa nyaman untuk membangun game yang berjalan di semua platform populer seperti Android, iOS, Web, dan Desktop. Di sisi lain, munculnya pandemi telah mengubah kehidupan orang -orang dan mereka sekarang lebih suka tinggal di dalam ruangan. Jadi, orang cenderung bermain video game di waktu luang mereka.
Akhirnya, [containerize.com][15] siap untuk meningkatkan basis tutorialnya dengan beberapa tutorial pengembangan game  **yang lebih menarik ** . Harap tetap terhubung dengan kategori [Perangkat Lunak Pengembangan Game][16] ini untuk pembaruan rutin.

## Mengeksplorasi
  * **[gDevelop][7] ** 
  * **[Godot][17] ** 
  * **[Superpowers][18] ** 
  * **[Pencipta Cocos][19] ** 
  * **[panda3d][20] ** 
  * **[playcanvas][21] ** 
  * **[Memulai Pengembangan Game Menggunakan Superpowers][2] ** 
  * **[Tutorial Pengembangan Game | Gerakan Pemain di GDevelop][3] ** 
  * **[tutorial pengembangan game html5 untuk pemrogram video game][4] ** 
  * **[Bagaimana industri game global memanfaatkan perangkat lunak sumber terbuka][5] ** 
  * **[Tutorial GDevely untuk Pemula untuk Memulai Pengembangan Game][6] ** 
  *[ **Perangkat Lunak Pengembangan Game Top 5 Top di Tahun 2021 ** ][1]

  
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
