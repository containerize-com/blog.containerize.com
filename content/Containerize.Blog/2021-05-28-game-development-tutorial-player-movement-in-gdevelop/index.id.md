---
title: "Tutorial Pengembangan Game | Gerakan Pemain di GDevel" 
seoTitle: "Tutorial Pengembangan Game | Gerakan Pemain di GDevel" 
description: "Ikuti tutorial pengembangan game ini untuk mempelajari tentang fungsi permainan dasar. GDevelop adalah perangkat lunak pembuatan game gratis untuk membangun dan menerbitkan game." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Pindah objek di layar adalah bagian penting dari permainan apa pun. Dalam panduan pengembangan game ini, kita akan belajar cara mengendalikan dan memindahkan objek game di GDevelop." 
url: /id/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Objek yang bergerak di layar adalah bagian penting dari permainan apa pun. Dalam panduan pengembangan game ini, kita akan belajar cara mengendalikan dan memindahkan objek game di GDevelop.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Tutorial Pengembangan Game">}}


## **Ringkasan** 
Komunitas open source muncul dengan perjalanan setiap menit. Ada permainan lintas platform, game mobile, dan game desktop. Berbagai jenis game termasuk game aksi, permainan petualangan, permainan peran, permainan olahraga, game puzzle, game simulasi, dan banyak lagi. Oleh karena itu, semua jenis game yang berbeda ini telah memberikan dorongan besar untuk lalu lintas karena pengguna dari semua kelompok umur cenderung memainkan game ini.
Selain itu, pandemi telah membawa perubahan besar dalam gaya hidup orang yang tinggal di seluruh dunia. Orang sekarang memiliki lebih banyak waktu. Semua kegiatan offline telah online. Oleh karena itu, mereka cenderung memilih perangkat lunak online untuk melakukan tugas profesional dan video game dalam kasus hiburan. Karena semua alasan ini, industri ini telah memperoleh keberlanjutan dan dukungan dari pengguna dan pengembang. Di masa lalu, kami menulis tentang topik -topik seperti [tutorial pengembangan game HTML5 untuk pemrogram video game][1], [bagaimana industri game global memanfaatkan perangkat lunak open source][2], dan [tutorial GDevely untuk pemula untuk memulai pengembangan game][3]. Dalam tutorial pengembangan game ini, kami akan membahas poin -poin berikut.
* **[Fitur Eksplorasi GDevelop][4]** 
* **[bekerja pada permainan][5]** 
* **[Kesimpulan][6]** 

## Fitur eksplorasi gdevelop {#features}

[GDevelop][7] adalah platform pembangunan game open source. Ini sangat dapat diperluas dan menawarkan antarmuka logis di mana pengguna dapat menavigasi dengan mudah. Perangkat lunak gratis ini ditulis dalam C ++, TypeScript, dan JavaScript. Selain itu, ada dokumentasi komprehensif yang tersedia mengenai pengembangan dan penyebaran. Semua kode sumber tersedia di GitHub. Lebih lanjut, ada banyak fitur yang membuat perangkat lunak membuat game ini menonjol. Mari kita lihat beberapa fitur utama.
**Cross-Platform** : Platform pembuatan game ini adalah multiplatform dan dapat digunakan pada hampir semua sistem operasi populer seperti macOS, Linux dan Windows.
**Opsi Mengekspor** : GDevelop memungkinkan pengguna mengekspor game yang dikembangkan hanya dengan satu klik untuk Android, iOS, dan Web. Pemilik game dapat menampilkan iklan video di game mereka dan mungkin dimungkinkan dengan dukungan Admob.
**Objek Game Kaya** : Pembuat game open source ini menyediakan berbagai objek game seperti sprite dengan animasi, ledakan api, dan efek lainnya dengan bantuan pemancar partikel. Teks yang diformat, video tertanam, dan menggambar bentuk khusus tersedia untuk membawa efek menarik ke dalam permainan.
**Perilaku Serbaguna** : Dalam artikel pengembangan game dasar ini, kami akan menunjukkan kepada Anda bagaimana kami dapat menambahkan perilaku yang berbeda ke objek game. Ada beberapa perilaku yang tersedia yang siap digunakan dan pengguna dapat berkembang lebih lanjut sesuai persyaratan. Itu semua terjadi dalam hitungan beberapa klik mouse.
**Antarmuka Lanjutan** : Dalam tutorial desain game ini, kita akan melihat antarmuka pengguna mesin game 3D ini. Pengguna dapat menyeret dan menjatuhkan berbagai elemen dan objek game.

## Bekerja di Game {#working}

Bagian tutorial pengembangan game ini menguraikan pengembangan game dasar dengan GDevelop. Sebelum melangkah lebih jauh, pastikan Anda telah menginstal GDevelyal secara lokal di mesin Anda.
Anda dapat mengunjungi tutorial ini [tutorial GDevely untuk pemula untuk memulai pengembangan game][3] untuk mendapatkan pengetahuan menyiapkan editor game ini di LocalHost.
Sekarang, buka editor dan buat proyek baru. Dalam tutorial ini, kami akan membuat folder di Google Drive untuk menyimpan file game. Sekarang klik pada "Buat Proyek Baru", itu akan membuka kotak dialog baru, pilih opsi "Game Kosong" untuk mulai membangun game baru.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Tutorial Pengembangan Game">}}

Di bilah menu proyek sisi kiri, klik "Simpan As" untuk menyimpan game.
Pertama, mari kita tambahkan adegan. Untuk itu, klik opsi "Scenes" dan ganti nama misalnya "Adegan Pertama" dalam tutorial ini yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" Platform pembangunan game">}}

Setelah membuat adegan, buka dan tambahkan objek. Untuk menambahkan objek, klik "Tambahkan Objek Baru" yang muncul di panel samping kanan. Akhirnya, itu akan membuka kotak dialog baru yang berisi aset yang berbeda. Namun, mari kita pilih objek "Red Ship" tekan "Tambahkan ke game" dan tutup kotak dialog.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Panduan Pengembangan Game">}}

Selanjutnya, Anda akan melihat objek yang muncul di panel samping kiri. Seret ke layar utama dan tekan tombol yang muncul di sudut kiri atas untuk meluncurkan game. Oleh karena itu, itu akan membuka game ke jendela baru seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Tutorial Pengembangan Game">}}

Sampai sekarang, Anda tidak dapat bermain dengan objek ini karena tidak ada perilaku yang ditambahkan ke dalamnya. Jadi, mari kita tambahkan perilaku ke objek ini. Untuk itu, klik pada objek kapal dan tekan "Edit Object". Ini akan membuka kotak dialog baru, navigasikan ke tab Perilaku, pilih "Gerakan Top-Down" dan tekan "Apply". Sekarang, pratinjau game dan Anda akan melihat bahwa Anda dapat memindahkan objek kapal di layar menggunakan tombol panah keyboard Anda. Sekarang, Anda akan melihat bahwa objek kapal keluar dari layar. Oleh karena itu, untuk menyelesaikan masalah ini mari kita edit objek dan navigasikan ke perilaku. Klik "Tambahkan perilaku ke objek". Sekarang, navigasikan ke "Cari Perilaku Baru" dan cari perilaku "Tetap di Layar" di bilah pencarian seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="GDevelop">}}

Selanjutnya, pilih dan instal ke dalam proyek, dan tekan berlaku. Satu hal lagi adalah menyesuaikan titik tengah objek. Jadi, mari kita pergi lagi ke properti objek, dan "Edit Points" muncul di bagian bawah. Anda akan mendarat di layar berikut.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="Tutorial Desain Game">}}

Jadi, seret tanda yang muncul di sudut atas kiri ke tengah objek lalu tutup dan terapkan. Sekarang, jika Anda meluncurkan kembali permainan, Anda akan melihat perubahannya.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Tutorial Pengembangan Game">}}


## Kesimpulan {#Kesimpulan}

Ini adalah akhir dari tutorial pengembangan game ini. Mudah -mudahan, posting blog ini akan bermanfaat bagi pengembang game. Tutorial ini memungkinkan Anda untuk bekerja dengan objek permainan dan menambah perilaku. Di masa depan, Containerize.com akan mempublikasikan posting blog dan artikel tutorial tentang perangkat lunak desain video game open source lebih lanjut. Oleh karena itu, tetap terhubung dengan kategori [Perangkat Lunak Pengembangan Game][8] ini di [containerize.com][9] untuk pembaruan rutin.

## Mengeksplorasi
  * [GDevelop][7]
  * [Godot][10]
  * [Superpowers][11]
  * [Pencipta Cocos][12]
  * [Panda3d][13]



[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/id/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
