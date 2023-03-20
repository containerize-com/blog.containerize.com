---
title: "Tutorial Kontrak Cerdas | Pengembangan Blockchain Ethereum" 
seoTitle: "Tutorial Kontrak Cerdas | Pengembangan Blockchain Ethereum" 
description: "Tutorial kontrak pintar ini menjelaskan langkah -langkah dasar untuk membuat kontrak pintar Ethereum. Ethereum adalah jaringan blockchain open source, aman, terdistribusi." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereum adalah platform yang matang untuk membuat kontrak pintar dan aplikasi terdesentralisasi (DAPPS). Ikuti langkah -langkah ini untuk membuat, menguji, dan menggunakan kontrak pintar." 
url: /id/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum adalah platform yang matang untuk membuat kontrak pintar dan aplikasi terdesentralisasi (DAPPS). Ikuti langkah -langkah ini untuk membuat, menguji, dan menggunakan kontrak pintar.

{{< figure align=center src="images/contract.png" alt="Tutorial Kontrak Cerdas">}}


## Ringkasan
Di masa lalu, kami menerbitkan [posting blog][1] yang menyoroti dampak dan pentingnya teknologi blockchain. Ada posting blog lain yang menarik [apa itu NFT? | Token Non Fikible menjelaskan][2]. Teknologi buku besar terdistribusi didasarkan pada beberapa konsep inti seperti kontrak pintar, node, penambangan, algoritma konsensus, transaksi digital, dan jaringan peer-to-peer. Karena itu adalah open source, maka ada jendela besar untuk ekstensi mengenai kasus penggunaan. Faktanya, ada banyak platform manajemen aset digital open source dan gratis yang didistribusikan dan memerlukan beberapa perangkat lunak untuk mengatur transaksi.
Dalam tutorial kontrak pintar ini, kami akan belajar cara membangun kontrak pintar Ethereum dengan menutupi poin -poin berikut.
  *[** Apa itu kontrak pintar? **][3]
  *[** Bagaimana cara membangun kontrak pintar dasar? **][4]
  *[** Bagaimana cara menjalankan dan menggunakan kontrak pintar? **][5]
  *[** Kesimpulan **][6]

## Apa itu kontrak pintar? {#Apa}
Kontrak pintar adalah program yang berjalan di blockchain untuk mengatur transaksi digital. Sepotong kode ini berisi aturan dan prosedur yang ditentukan yang memastikan transparansi transaksi. Setiap kontrak pintar berisi alamat dan alamat itu digunakan untuk mengakses fungsi apa pun dari kontrak pintar tertentu. Selain itu, kontrak pintar membawa transparansi, kepercayaan, dan keamanan ke jaringan blockchain. Potongan -potongan kode ini dijalankan secara otomatis setelah kondisi tertentu terpenuhi.
Namun, setiap pengembang dapat menulis kontrak pintar dan menggunakannya melalui jaringan. Lebih lanjut, kontrak pintar membuat proses cukup kuat karena tidak ada ketergantungan yang terlibat dalam pelaksanaan potongan kode ini. Selain itu, kontrak pintar menyimpan informasi yang diperlukan terkait dengan setiap transaksi yang dapat diambil dan diverifikasi oleh peserta. Banyak industri seperti perawatan kesehatan, perbankan, sangat mengadopsi teknologi buku besar yang didistribusikan ini. Lembaga pemerintah juga ingin menggunakan aplikasi terdesentralisasi (DAPPS) untuk membawa keaslian dan transparansi ke dalam sistem pemilihan. Ada banyak [platform blockchain][7] seperti [Ethereum][8], [Ripple][9], [Corda][10], dan beberapa lagi, bagaimanapun, dalam panduan ini, kami akan membangun kontrak pintar pertama kami kami di Ethereum.

## Bagaimana cara membangun kontrak pintar dasar? {#membangun}
Di bagian tutorial kontrak pintar ini, kami akan melihat langkah -langkah untuk mengatur lingkungan untuk kontrak pintar pertama kami.
Kontrak pintar dapat ditulis dalam banyak bahasa tetapi, kami akan menggunakan [soliditas][11] yang merupakan bahasa tingkat tinggi untuk menulis kontrak pintar.
Kami akan menggunakan [Ethereum Studio][12] yang merupakan IDE berbasis web. Ini digunakan untuk menulis kontrak pintar serta aplikasi terdesentralisasi untuk berinteraksi dengan kontrak pintar. Ini menyediakan beberapa templat proyek yang sudah dibangun di mana Anda dapat mulai menulis logika Anda segera.
Jadi, buka IDE [Ethereum Studio][12] ke dalam browser dan Anda akan melihat antarmuka berikut.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Tutorial Kontrak Cerdas">}}

Mari kita pilih opsi "Hello World" dan buat proyek pertama kami. Anda dapat melihat struktur direktori. Lebih lanjut, ada jendela output di sisi kanan.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Tutorial Kontrak Cerdas">}}

Ada dua folder "aplikasi" dan "kontrak".
Folder aplikasi milik aplikasi web dan berisi file -file berikut.
  *** app.css **: untuk gaya tata letak
  *** app.html **: untuk beranda
  *** app.js **: berisi logika bisnis untuk menghubungkan ujung depan dengan kontrak pintar
Demikian pula, folder kontrak berisi file sumber kontrak.
Sekarang, mari kita buka file helloworld.sol yang dapat ditemukan di file/kontrak/helloWorld.sol. Pada dasarnya, ini adalah file utama yang berisi kode untuk kontrak pintar yang ditulis dalam soliditas. Anda dapat memodifikasi kode jika Anda mau, kami akan membiarkannya.

## Bagaimana cara menjalankan dan menggunakan kontrak pintar? {#menyebarkan}
Di bagian tutorial kontrak pintar ini, kita akan melihat cara menjalankan dan menggunakan kontrak pintar. Ethereum Studio mengkompilasi kode soliditas ke dalam kode byte. Oleh karena itu, simpan kode, dan mari kita gunakan kontrak pintar pertama kami.
Di panel sisi kiri, tekan ikon roket.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="Apa itu Kontrak Cerdas">}}

Anda dapat mengonfigurasi dan mengatur nilai awal untuk kontrak pintar Anda seperti yang ditunjukkan di bawah ini.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Kontrak Cerdas Ethereum">}}

Tekan tombol "Simpan" dan tekan tombol "Deploy" untuk menggunakan kontrak pintar. Anda akan melihat output berikut dan pesan di jendela konsol di bagian bawah. Jendela konsol memberikan detail seperti alamat kontrak pintar, Nonce, Gasslimit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="Apa itu Kontrak Cerdas">}}

Setelah itu, ada opsi lain di panel di sisi kiri dan itu adalah opsi interaksi. Opsi ini memungkinkan Anda untuk berinteraksi dengan kontrak pintar Anda dengan memanggil fungsinya dan memberikan nilai.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="Apa itu Kontrak Cerdas">}}

Selain itu, ada aplikasi front-end yang memungkinkan pengguna untuk berinteraksi dengan kontrak pintar dari browser. Aplikasi berbasis web ini disebut aplikasi terdesentralisasi. Anda dapat memberikan nilai dan melihat jendela konsol.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="Apa itu Kontrak Cerdas">}}


## kesimpulan {#con}
Ini membawa kita ke akhir tutorial kontrak pintar ini. Saya harap artikel ini membantu Anda memahami langkah -langkah kunci membangun dan menggunakan kontrak pintar Ethereum. Ketika teknologi blockchain berkembang dengan kecepatan tinggi, sekarang saatnya untuk mendapatkan praktik langsung di atas sistem gema blockchain. Teknologi buku besar terdistribusi ini sangat dapat dikonfigurasi dan dapat diperluas. Posting blog ini akan sangat membantu Anda jika Anda bersedia mempelajari pengembangan kontrak pintar. Selain itu, ada banyak tutorial bermanfaat dan platform manajemen aset digital open source yang disebutkan di bawah bagian "Jelajahi" di bawah ini.
Pada akhirnya, [containerize.com][13] sepenuhnya didedikasikan untuk menyusun daftar perangkat lunak sumber terbuka. Ada banyak tutorial dan posting blog tentang perangkat lunak sumber terbuka dan sejumlah posting blog ada di dalam pipa. Oleh karena itu, harap tetap berhubungan dengan kategori [platform blockchain][7] untuk pembaruan rutin.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Ethereum][8]
  * [Hyperledger Fabric][14]
  * [OpenChain][15]
  * [Riak][16]
  * [Multichain][17]
  * [Consensys Quorum][18]
  * [Apa itu NFT? | Token Non Fikible Dijelaskan][2]
  * [Cara Mengatur Jaringan Blockchain Quorum Consensys Local][19]
  * [Top 5 Platform Blockchain Open Source di 2020][20]
  * [Panduan Dasar tentang Cara Membuat Kontrak Cerdas Ethereum][21]
  * [Bagaimana teknologi terdesentralisasi meningkatkan strategi bisnis Anda][22]
  * [Cara Mengatur Jaringan Blockchain Quorum Consensys Local][19]

  
[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/blockchain-platforms/what-is-nft-non-fungible-tokens-explained/
[3]: #what
[4]: #build
[5]: #deploy
[6]: #con
[7]: https://products.containerize.com/blockchain-platforms/
[8]: https://products.containerize.com/blockchain-platforms/ethereum
[9]: https://ripple.com/
[10]: https://www.corda.net/
[11]: https://docs.soliditylang.org/en/v0.7.4/
[12]: https://studio.ethereum.org/
[13]: https://www.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[15]: https://products.containerize.com/blockchain-platforms/openchain
[16]: https://products.containerize.com/blockchain-platforms/ripple
[17]: https://products.containerize.com/blockchain-platforms/multichain
[18]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[19]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[20]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[21]: https://blog.containerize.com/
[22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
