---
title: "Memulai Pengembangan Game menggunakan kekuatan super" 
seoTitle: "Memulai Pengembangan Game menggunakan kekuatan super" 
description: "Superpowers adalah pembuat game 3D open source dengan kolaborasi waktu nyata. Tutorial ini adalah tentang memulai pengembangan game menggunakan kekuatan super." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "Perilaku dan pergerakan objek game dikendalikan oleh animasi. Dalam tutorial pengembangan game ini, kita akan belajar cara menghidupkan karakter game." 
url: /id/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## Perilaku dan pergerakan objek game dikendalikan oleh animasi. Dalam tutorial pengembangan game ini, kita akan belajar cara menghidupkan karakter game.

{{< figure align=center src="images/super.png" alt="Memulai Pengembangan Game">}}


## **Ringkasan** 
Dalam seri tutorial kami pengembangan game open source, kami telah menerbitkan posting blog tentang beberapa topik populer seperti [Tutorial Pengembangan Game | Gerakan Pemain di GDevely][1], [HTML5 Tutorial Pengembangan Game untuk Pemrogram Video Game][2], [Bagaimana Industri Gaming Global Memanfaatkan Perangkat Lunak Sumber Terbuka][3], dan [Tutorial GDevely untuk Pemula untuk Memulai Pengembangan Game][4 ]. Artikel tutorial ini adalah tentang memulai pengembangan game menggunakan open source gratis [Superpowers][5] dengan membahas poin -poin berikut.
* **[Jenis Animasi Game][6]** 
* **[Cara membuat sprite?][7]** 
* **[bekerja dengan adegan][8]** 
* **[meluncurkan game di localhost][9]** 
* **[Kesimpulan][10]** 
Ada banyak perangkat lunak pengembangan game open source untuk pemula yang tersedia dengan kemampuan tuan rumah mandiri. Namun, [Superpowers][5] adalah perangkat lunak pembuatan game 2D & 3D lintas platform. Ini menyediakan perpustakaan dan contoh game bawaan yang membuat pengembangan game mudah bagi pengembang game. Aplikasi desain game gratis ini ditulis dalam TypeScript dan semua dokumentasi tersedia di [GitHub][11] tentang pengembangan dan penyebaran. Dalam posting blog ini, kami akan menjelajahi kekuatan super tentang penggunaannya.

## Jenis Animasi Game {#types}

Animasi adalah bagian penting dari video game. Karakter dalam game harus menanggapi tindakan pengguna, animasi harus lancar dan tiba -tiba. Ini tentang mengelola beberapa frame dan animator memperbaiki bingkai itu untuk menghasilkan efek bergerak. Selain itu, ada animasi 2D & 3D di mana objek tampak bergerak melalui ruang tiga dimensi. Pengembang game dan desainer grafis membuat model 3D. Animasi bergantung pada sifat permainan dan tipe yang paling umum adalah sebagai berikut.
**Walk Animation:**  Walk Animation adalah tentang penciptaan proses berjalan di mana karakter menghidupkan setiap langkah dan memberikan ilustrasi berjalan.
**Animasi Idle:**  Ini adalah jenis animasi yang sangat penting di mana karakter tidak melakukan apa -apa karena pengguna tidak menekan controller apa pun.
**Jalankan Animasi** : Jalankan animasi adalah bagian dari setiap game di mana objek game melakukan siklus run. Jenis ini adalah tipe yang paling umum dan membutuhkan lebih banyak perhatian dari pengembang.
**Fighting Animation** : Dalam game pertempuran, beberapa karakter game bertarung satu sama lain.
**Animasi lompat** : Jenis animasi ini membutuhkan keterampilan dan keahlian yang lebih baik. Karakter mengompres dan melepaskan tubuh untuk melakukan ilustrasi lompatan.

## Bagaimana cara membuat sprite? {#sprites}

Bagian panduan pembuatan game ini memungkinkan pengguna membuat proyek dan mulai membuat sprite untuk game. Sprite adalah gambar atau grafik non-statis yang tidak hanya digunakan dalam game tetapi juga bagian dari desain web. Ini biasanya ditarik di atas latar belakang yang disegarkan terus -menerus.
Sebelum pindah, pastikan Anda telah mengatur kekuatan super di mesin Anda. Anda dapat mengikuti tautan ini [tutorial pengembangan game HTML5 untuk pemrogram video game][2] untuk mengatur platform pembuatan game gratis ini.
Pertama, buka aplikasi ke browser, dan mari kita buat proyek kosong baru. seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Memulai Pengembangan Game">}}

Anda akan mendarat di ruang proyek setelah membuat proyek kosong baru. Ada opsi menu di panel samping kiri. Jadi, klik tombol "+" untuk membuka kotak dialog aset. Pilih opsi Sprite dan tekan Buat.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Panduan Pembuatan Game">}}

Sekarang, unggah gambar yang akan kami tambahkan perilaku. Anda dapat melakukannya dengan mengklik tombol yang ditempatkan di sudut kanan atas. Panel ini adalah tentang konfigurasi objek.
Selanjutnya, Anda dapat mengatur ukuran kisi sesuai pilihan Anda. Ada dua bagian dari kanvas. Bagian atas menunjukkan lembar penuh di mana bagian bawah menunjukkan bagian yang dipilih di mana kami dimaksudkan untuk menerapkan animasi. Anda dapat melakukannya dengan menekan tombol "Pengaturan" di panel samping kanan seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="Tutorial Pengembangan Game">}}

Setelah itu, mari kita buat animasi. Kita dapat melakukannya dengan mengklik tombol "Baru" di tab Animasi. Anda dapat melihat gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="Perangkat lunak pengembangan game untuk pemula">}}


## Bekerja dengan adegan {#scenes}

Di bagian ini, kami akan menambahkan adegan ke game kami. Untuk itu, sekali lagi buka kotak dialog Aset dan pilih "Scene" dan tekan tombol Buat. Sekarang buat aktor dengan mengklik tombol bintang yang tersedia di sudut kanan atas seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="cara membuat permainan di awal untuk pemula">}}

Setelah itu, buat komponen baru dengan mengklik tombol "Komponen Baru" yang ditempatkan di panel samping kanan. Pilih "Sprite Renderer" dan tekan CREATE. Kemudian, seret sprite yang dibuat dari panel sisi kiri dan jatuhkan di bawah bagian Sprite Renderer. Selain itu, buat aktor lain bernama "kamera" dan juga, buat komponen baru bernama kamera.
Anda dapat mengubah mode kamera sehingga ubah ke mode "ortografis" seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="Memulai Pengembangan Game,">}}

Di sudut kiri bawah, navigasikan ke opsi Pengaturan dan buka. Di bawah bagian "Sprite" dan "Tile Map", masukkan 16 terhadap "piksel per unit". Kemudian di "Mode Kamera Default", pilih 2D di bawah bagian "Adegan". Lebih lanjut, di bawah bagian "Peta Ubin", lebar default 36, tinggi default 28, dan Upaya Kisi Tile 16. Tidak perlu menyimpannya, melainkan semuanya di AutoSave.

## Meluncurkan game di localhost {#local}

Jadi, kami hampir meluncurkan animasi superpowers dari game pertama kami. Namun, lagi buka tab Pengaturan dan seret adegan dari panel sisi kiri dan letakkan di atas "adegan startup" seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="cara membuat permainan di awal untuk pemula">}}

Sekarang, klik "Player" dan di bawah komponen "Sprite Renderer", pilih Animasi terhadap atribut "Animasi". Terakhir, luncurkan aplikasi dengan mengklik tombol yang ditempatkan di sudut kiri atas. Tab baru akan menampilkan objek yang bergerak di layar.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Memulai Pengembangan Game">}}


## Kesimpulan {#Kesimpulan}

Ini adalah akhir dari tutorial di mana kami belajar cara membuat permainan di awal untuk pemula. Oleh karena itu, memulai dengan pengembangan game menjadi mudah ketika ada dokumentasi terperinci dari perangkat lunak pengembangan game yang tersedia. Akhirnya, [ **containerize.com** ][12] sedang dalam proses penulisan artikel yang konsisten tentang topik dan produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [perangkat lunak pengembangan game][13] ini untuk pembaruan rutin.

## Mengeksplorasi
  * [GDevelop][14]
  * [Godot][15]
  * [Superpowers][5]
  * [Pencipta Cocos][16]
  * [Panda3d][17]
  * [Playcanvas][18]



[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
