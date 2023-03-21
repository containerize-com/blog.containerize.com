---
title: "Cara Mengembangkan Video Game Menggunakan Superpower Open-Sopurce" 
seoTitle: "Cara Mengembangkan Video Game Menggunakan Superpower Open-Sopurce" 
description: "Bagaimana cara mengembangkan video game? Superpowers adalah pengembangan game HTML5 open-source. Ini adalah lintas platform dan memungkinkan pengguna untuk membangun game 2D & 3D animasi." 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "Perangkat lunak desain video game gratis untuk pengembangan video game dengan mode offline. HOST sendiri, buat animasi 2D & amp; Game 3D dengan efek suara dan font." 
url: /id/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## Perangkat lunak desain video game gratis untuk pengembangan video game dengan mode offline. Pembawa acara sendiri, buat game 2D & 3D animasi dengan efek suara dan font.

{{< figure align=center src="images/superpowers.png" alt="cara mengembangkan video game">}}


## Ringkasan
Dalam masa lalu, beberapa artikel diterbitkan pada kategori [perangkat lunak pengembangan game][1] yang mencakup bagaimana industri game global memanfaatkan perangkat lunak open source dan tutorial GDevely untuk pemula untuk memulai pengembangan game. Pengembangan video game jauh lebih banyak tersebar di seluruh dunia dengan meningkatnya permintaan untuk game yang menghibur. Namun, ini melibatkan ide, pengembangan desain, pengujian berkelanjutan, pelepasan, dan umpan balik. Dengan kata lain, ini melibatkan desainer, arsitek perangkat lunak, pemrogram, penguji, dan sumber daya dukungan. Selain itu, ada banyak jenis game seperti game aksi, permainan puzzle, game balap, game kognitif, dan beberapa lainnya.
Oleh karena itu, panduan pengembangan game yang bagus sangat dibutuhkan untuk mulai memulai dengan pembuat game 3D. Komunitas open-source telah mengembangkan banyak perangkat lunak pengembangan game yang menawarkan fitur dan utilitas tingkat perusahaan untuk mengembangkan game 3D & 2D. Tutorial pengembangan game HTML5 ini akan mengeksplorasi cara mengembangkan video game menggunakan perangkat lunak pengembangan video game gratis **negara adidaya**  dengan meliput poin berikut.
  ***[apa itu kekuatan super][2]** 
  ***[Bagaimana cara mengatur di localhost?][3]** 
  ***[Dasbor Superpowers?][4]** 
  ***[Kesimpulan][5]** 

## Apa itu Superpowers   {#intro}
[Superpowers][6] adalah perangkat lunak open source untuk pengembangan video game. Ini fleksibel, kuat, dan dapat diperluas. Namun, ia menawarkan dukungan untuk animasi, model 3D, dan berbagai contoh game. Selain itu, ia juga dilengkapi dengan versi offline di mana pengguna dapat membangun game tanpa konektivitas internet. Menerbitkan proyek apa pun sangat mudah dan semua yang terjadi dengan satu klik. Ada dasbor intuitif untuk pengguna di mana pengguna dapat menavigasi melalui berbagai elemen dengan mudah. Di atas semua itu, ada sangat keren yang merupakan pelaporan kesalahan langsung di mana ia menunjukkan kesalahan kepada pengembang untuk menghindari ambiguitas atau bug. Alam adidaya mudah diatur dan membutuhkan persyaratan yang mudah untuk diselenggarakan di server lebih lanjut, pembangun game 3D ini ditulis dalam TypeScript dan dilengkapi dengan semua dokumentasi mengenai pengembangan dan penyebaran. Oleh karena itu, semua kode sumber tersedia di [GitHub][7].
Kekuatan super menawarkan poin -poin penting berikut:
  * Pelaporan Kesalahan Langsung
  * Multibahasa
  * Cross-platform
  * Efek Font & Suara yang Kaya
  * Self-hosting

## Bagaimana cara mengatur di localhost?   {#mempersiapkan}
Jika Anda masih bertanya -tanya cara mengembangkan video game maka di bagian artikel ini, kami akan belajar cara mengatur kekuatan super di LocalHost. Di bagian ini, panduan pengembangan game **ini**  akan menguraikan proses pengaturan lingkungan pengembangan game.
Pertama-tama, pastikan Anda telah menginstal prasyarat berikut sebelum memulai pengembangan video game:
  * Git
  * npm
  * Node.js
Persyaratan yang disebutkan di atas mudah dan sangat dikenal sehingga tidak akan menjadi tugas yang sulit bagi pemula. Setelah persyaratan di atas diinstal, buka terminal dan jalankan perintah berikut untuk mengkloning kode sumber:
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
Setelah klon yang berhasil, masuk ke direktori yang diunduh dengan menjalankan perintah berikut:
```
cd superpowers/core
```
Sekarang, jalankan perintah berikut untuk mengkloning sistem game Superpowers:
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
Setelah itu, jalankan perintah berikut untuk membuat build:
```
npm run build
```
Setelah membangun yang sukses, mulailah server dengan menjalankan perintah berikut:
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="Tutorial Pengembangan Game HTML5">}}

Sekarang buka browser dan akses aplikasi di tautan berikut:
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## Dasbor kekuatan super?   {#fitur}
Setelah memukul URL di atas, Anda akan melihat halaman beranda berikut. Ada opsi untuk memodifikasi atau membuat proyek platformer kosong atau 2D baru.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="Pengembangan video game">}}

Bergerak maju pada pertanyaan tentang cara mengembangkan video game, Anda akan melihat layar berikut setelah membuat platformer 2D. Anda dapat melihat opsi di sisi kiri jendela seperti membuat adegan, mengatur ubin, peta permainan, dan pemain. Ada opsi pengkodean langsung di mana Anda dapat mengkode perilaku pengguna.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="Pengembangan video game">}}

Lebih lanjut, ada bilah pengaturan di sisi kiri tempat Anda dapat mengatur animasi, rendering, mengunggah, atau mengunduh gambar. Di sisi kiri, ada opsi untuk menambahkan lebih banyak aset ke proyek Anda seperti yang ditunjukkan pada gambar di bawah ini. Ini termasuk model 3D model kubik, opsi fint jika ingin memodifikasi font. Selain itu, pengguna dapat menambahkan adegan, skrip, shader, dan sprite lebih lanjut. Selain itu, pembangun game 3D open source ini juga memungkinkan Anda menambahkan berbagai efek suara ke dalam game untuk menarik gamer dengan efek suara game terbaik. Last but not least, ini juga memungkinkan Anda untuk menambahkan peta ubin dan set ubin.

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="Desain video game">}}

Demikian juga, setelah melalui artikel game ini, Anda dapat menjelajahinya lebih jauh dan memanfaatkan semua fitur. Lebih lanjut, Anda akan dapat memahami cara terus menggunakan Video Game Builder. Ada dukungan online yang tersedia untuk perangkat lunak pengembangan game ini.

## **Kesimpulan** {#conclusion}
Ini mengakhiri panduan pengembangan game HTML5 ini. Semoga posting blog ini akan membantu Anda jika Anda ingin memulai pengembangan video game. Kami telah menjelajahi apa itu kekuatan super, cara mengembangkan video game, yang merupakan pembangun game 3D open source dan kami juga telah melalui prosedur pemasangannya di LocalHost. Ada banyak aplikasi open source **aplikasi desain video game**  yang memungkinkan pengguna membangun game dari awal. Pemrogram video game menggunakan prinsip-prinsip desain game yang penting untuk membangun game berkualitas tinggi. Anda akan mempelajari lebih lanjut tentang membangun game 2D & 3D di artikel kami yang akan datang di [blog.containerize.com][8]. Ada open source lain, pembangun game 3D yang diselenggarakan sendiri dan artikel relevan yang disebutkan di bagian "Jelajahi" di bawah ini.
Akhirnya, Containerize.com terus menulis posting blog tentang produk dan topik open-source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [pengembangan video game][9][][10] untuk pembaruan rutin. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][11], [LinkedIn][12], dan [Twitter][13].

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [][14][GDevelop][14]
  * [][14][Godot][15]
  * [][14][Superpowers][6]
  * [][14][Pencipta Cocos][16]
  * [][14][panda3d][17]
  ***[Memulai Pengembangan Game Menggunakan Superpowers][18]** 
  ***[Tutorial Pengembangan Game | Gerakan Pemain di GDevelop][19]** 
  *[**Cara membuat game di awal menggunakan open source gDevelever** ][20]
  ***[Bagaimana industri game global memanfaatkan perangkat lunak sumber terbuka][21]** 
  ***[Tutorial GDevely untuk Pemula untuk Memulai Pengembangan Game][22]** 
  *[**Perangkat Lunak Pengembangan Game Top 5 Top di Tahun 2021** ][23]

  
[1]: https://blog.containerize.com/category/game-development-software/
[2]: #intro
[3]: #setup
[4]: #features
[5]: #Conclusion
[6]: https://products.containerize.com/game-development-software/superpowers/
[7]: https://github.com/superpowers/superpowers-core
[8]: https://blog.containerize.com/
[9]: https://products.containerize.com/game-development-software/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
