---
title: "Cara Mengatur Jaringan Blockchain Quorum Consensys secara lokal" 
seoTitle: "Cara Mengatur Jaringan Blockchain Quorum Consensys secara lokal" 
description: "Ikuti panduan ini untuk mempelajari tentang proses pemasangan blockchain quorum Consensys di LocalHost. Consensys Quorum adalah blockchain berbasis eterum open source." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Buat jaringan blockchain publik/pribadi Anda sendiri untuk mengelola dan memantau transaksi digital bisnis. Mari Pelajari Cara Mengatur Kuorum Consensys di Localhost." 
url: /id/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## Buat jaringan blockchain publik/pribadi Anda sendiri untuk mengelola dan memantau transaksi digital bisnis. Mari kita pelajari cara mengatur Kuorum Consensys di LocalHost.

{{< figure align=center src="images/quorum.png" alt="Consensys Quorum">}}


## Ringkasan
Di masa lalu, kami menerbitkan posting blog tentang beberapa topik terkait blockchain seperti [Top 5 Open Source Blockchain Platforms pada tahun 2020][1], [Panduan Dasar tentang Cara Membuat Kontrak Cerdas Ethereum][2], [bagaimana terdesentralisasi Teknologi meningkatkan strategi bisnis Anda][3], dan [Panduan Pemula untuk Mengatur Node Ethereum di LocalHost][4]. Dalam artikel ini, kita akan melihat cara mengatur Jaringan Blockchain Quorum Consensys di LocalHost dengan meliput poin -poin berikut.
  ***[Pengenalan singkat dari Consensys Quorum][5]** 
  ***[Apa itu Prosedur Instalasi Prasyarat dan  **** ?][6]** 
  ***[Cara Memulai Jaringan?][7]** 
  ***[Kesimpulan][8]** 

## **Pengenalan singkat dari Consensys Quorum**    {#introduction}
[Consensys Quorum][9] adalah platform open source berdasarkan **teknologi buku besar yang terdesentralisasi **. Namun, ini menyediakan lingkungan yang sepenuhnya ramah pengembang untuk membangun aplikasi berbasis blockchain yang menangani transaksi cepat dan throughput tinggi. Ini adalah  **Ethereum **  berbasis, dapat diperluas, dan menawarkan banyak plugin. Selain itu, sistem terdistribusi open source ini hadir dengan standar keamanan dan privasi yang tinggi. Selain itu, ada banyak fitur kuat seperti API dan pemantauan izin. Selanjutnya, platform  **DLT**   ini diselenggarakan sendiri dan memberikan dokumentasi terperinci mengenai pengembangan dan penyebaran. Kode sumber perangkat lunak gratis ini tersedia di [GitHub][10].
Consensys Quorum menawarkan fitur -fitur penting berikut:
  * Arsitektur pluggable
  * Berbasis Ethereum
  * Aman
  * Self-hosting
  * Jaringan publik/pribadi
[Pelajari lebih lanjut tentang Consensys Quorum][11]

## ****Apa itu Prosedur Prasyarat dan Instalasi? ****    {#Pra-Persyaratan}
Di bagian ini, kami akan menginstal dependensi yang diperlukan dan mengatur lingkungan setempat. Sebelum pergi ke langkah berikutnya, pastikan Anda telah menginstal prasyarat berikut:
  * NodeJS V10+
  * Docker
  * Docker-Compose
Setelah prasyarat dipasang, jalankan perintah berikut untuk memulai utilitas QuickStart berbasis CLI.
```
npx quorum-dev-quickstart
```
Namun, jawab pertanyaan untuk menyelesaikan instalasi seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Consensys Quorum">}}


## ****Bagaimana cara memulai jaringan? ****    {#start}
Sekarang, kami memiliki kode sumber di tempat. Jadi, langkah selanjutnya adalah membuat jaringan langsung.
Jalankan perintah berikut untuk masuk ke direktori root.
```
cd quorum-test-network
```
Setelah itu, jalankan perintah berikut untuk memulai semua wadah Docker:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Consensys Quorum">}}

Setelah semua wadah Docker aktif dan berjalan, Anda dapat mengakses blok penjelajah di alamat berikut:
```
http://localhost:25000
```
[] ()
Lebih lanjut, Anda dapat berinteraksi dengan blok penjelajah seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="sistem terdistribusi sumber terbuka">}}

Demikian pula, Anda dapat menghentikan seluruh jaringan dengan menjalankan perintah berikut:
```
./stop.sh 
```

## kesimpulan   {#conclusion}
Ini adalah akhir dari tutorial ini. Di atas segalanya, quorum Consensys berbasis Ethereum adalah **teknologi keuangan digital**  dikembangkan khusus untuk kasus penggunaan keuangan. Ini memiliki algoritma konsensus berbasis pemungutan suara. Namun, motif utama dari teknologi desentralisasi ini adalah untuk membangun solusi yang efisien untuk perusahaan.
Akhirnya, [containerize.com][12] telah menerbitkan banyak posting blog teknis dan tutorial tentang produk open source populer di [blog.containerize.com][13]. Oleh karena itu, tetap pada kategori [platform blockchain][14] untuk pembaruan rutin.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Ethereum][15]
  * [Hyperledger Fabric][16]
  * [OpenChain][17]
  * [Riak][18]
  * [Multichain][19]
  * [Consensys Quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
