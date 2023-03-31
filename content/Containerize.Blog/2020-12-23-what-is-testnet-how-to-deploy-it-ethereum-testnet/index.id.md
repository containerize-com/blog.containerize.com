---
title: "Apa itu TestNet & Cara Menyebarkannya | Ethereum testnet '" 
seoTitle: "Apa itu TestNet & Cara Menyebarkannya | Ethereum testnet" 
description: "Apa itu testnet? Panduan ini adalah tentang cara mengatur simpul Ethereum di localhost. Blockchain adalah jaringan node yang mempertahankan riwayat semua transaksi." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum adalah jaringan peer-to-peer blockchain open-source dari node yang terhubung. Mari kita pelajari cara menggunakan dan berinteraksi dengan Ethereum Node di server lokal." 
url: /id/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum adalah jaringan blockchain open-source dari node yang terhubung. Mari kita pelajari cara menggunakan dan berinteraksi dengan Ethereum Node di server lokal.

{{< figure align=center src="images/ether.png" alt="Apa itu testnet">}}

Dalam posting blog kami sebelumnya, kami menulis di beberapa topik yang mencakup [Blockchain Technology for Business][1], [menulis kontrak pintar dasar][2], dan [platform blockchain populer][3]. Ada topik -topik lebih lanjut yang akan kita tulis dalam waktu dekat sebagai  **teknologi buku besar yang terdesentralisasi**  semakin baik dengan berlalunya waktu. Orang -orang sekarang mulai tertarik pada platform manajemen aset digital karena keamanan dan transparansi. Selain itu, transaksi digital dapat dilacak, tidak dapat diubah dan faktor -faktor tersebut memberikan kepercayaan kepada orang -orang mengenai keandalan teknologi ini. Ada tiga jenis blockchain publik, pribadi, dan diizinkan. Namun, pengguna dapat mengadopsi jenis apa pun tergantung pada kasus penggunaannya.
Munculnya teknologi ini telah membawa perubahan besar di sektor perbankan karena telah mengubah cara transaksi keuangan. Dalam posting blog ini, kita akan berbicara tentang blockchain Ethereum tentang pengaturan Ethereum Node di LocalHost dan kita akan melihat bagaimana berinteraksi dengan jaringan uji. Kami akan membahas poin -poin penting berikut.
*  **Apa itu testNet?**  
*  **[Cara Mengatur Ethereum Blockchain?][4]**  
*  **[Bagaimana cara berinteraksi dengan blockchain ethereum?][5]**  
*  **[Kesimpulan][6]**  

## Apa itu testnet? {#tetstnet}

Dalam posting blog ini, kami akan menggunakan simpul Ethereum di LocalHost. Ethereum memiliki beberapa jaringan, jaringan produksi disebut Mainnet dan jaringan yang digunakan untuk tujuan pengujian disebut testNet. Sebagian besar aplikasi terdesentralisasi didasarkan pada blockchain [Ethereum][7]. Kontrak pintar adalah komponen integral dari infrastruktur terdistribusi ini. Selain itu, Blockchain adalah jaringan komputer yang disebut "node". Namun, setiap node berisi salinan blockchain dan dengan demikian berpartisipasi dalam jaringan. Ethereum blockchain juga memiliki cryptocurrency sendiri yang disebut "eter". Semua transaksi diamankan secara kriptografis. Selain itu, ini adalah teknologi buku besar lengkap yang tidak pernah mati atau rusak. Ini memungkinkan Anda menulis kontrak pintar dan aplikasi terdesentralisasi (DAPPS) yang berjalan pada node blockchain eterum.
Jaringan blockchain terdistribusi open source ini menggunakan algoritma konsensus yang disebut Proof of Work (POW). Lebih lanjut, arsitektur Ethereum terdiri dari lima lapisan seperti mesin virtual Ethereum, API klien Ethereum, kontrak pintar, node Ethereum, dan aplikasi pengguna akhir. Ethereum Virtual Machine menawarkan perangkat lunak dan arsitektur yang mengenali kontrak pintar. Kontrak pintar adalah perangkat lunak yang mengatur transaksi. Ada dukungan kuat untuk Ethereum Blockchain dan perusahaan Fortune 500 telah menunjukkan minat besar untuk melakukan pengembangan pada skala yang lebih besar menggunakan teknologi ini. Selain itu, Ethereum ditulis dalam bahasa GO dan kode sumbernya tersedia di [GitHub][8]. Semua dokumentasi tersedia mengenai penyebaran dan pengembangan karena memiliki komunitas yang bersemangat.

## Bagaimana cara mengatur blockchain ethereum? {#setup}

Sekarang, kami menyadari apa itu testnet. Di bagian ini, kami akan mengatur simpul Ethereum di mesin lokal kami. Sebelum melangkah lebih jauh, pastikan Anda telah memasang prasyarat berikut.
  * [Homebrew][9] (untuk macOS)

  * [Go7] (brew install go)
Setelah prasyarat ada, silakan jalankan perintah berikut untuk mengkloning kode sumber:
```
git clone https://github.com/ethereum/go-ethereum
```
Setelah klon yang sukses, masuk ke direktori:
```
cd go-ethereum
```
Sekarang, jalankan perintah berikut untuk membangun program geth:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Catatan
{{_LINE_34_}}
  Dalam hal kesalahan apa pun, silakan instal xcode dengan menjalankan Xcode-Select --instal dan coba lagi
{{_LINE_36_}}
Jadi, Anda telah mengatur semua prasyarat dan kode sumber. Oleh karena itu, jalankan perintah berikut untuk memulai simpul:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Node Ethereum">}}


## Bagaimana cara berinteraksi dengan blockchain Ethereum? {#interact}

Bagian ini berbicara tentang interaksi dengan simpul Ethereum yang berjalan yang sepenuhnya disinkronkan dengan blockchain. Kami dapat menggunakan perangkat lunak Geth untuk berinteraksi dan mengirim perintah ke jaringan uji.
Untuk itu, mari kita sertakan variabel build/bin/geth in $ path dengan menjalankan perintah berikut:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Setelah itu, hentikan server yang Anda bawa di atas dan jalankan jaringan uji dengan bendera berikut:
geth --testnet --rpc --rpcapi = "db, eth, net, web3, pribadi, web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="Apa itu testnet">}}

Selanjutnya, Anda perlu membuka jendela terminal baru dan melampirkan perintah Geth ke node dengan menjalankan perintah berikut:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="platform manajemen aset digital">}}

Geth akan membuka jendela konsol di mana Anda dapat berinteraksi dengan jaringan uji. Perintah berikut akan membuat akun yang memegang mata uang virtual dan pasangan kunci publik/pribadi:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Teknologi Buku Besar Terdesentralisasi">}}

Untuk memeriksa akun Anda, Anda dapat menjalankan perintah berikut:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="Apa itu testnet">}}

Demikian juga, ada banyak perintah yang dapat Anda gunakan untuk berinteraksi dengan blockchain Ethereum.

## Kesimpulan {#Kesimpulan}

Inilah akhir dari tutorial ini. Kami belajar  **apa itu testnet** dan proses pengaturan simpul Ethereum pada mesin lokal. Ethereum blockchain adalah solusi umum untuk sebagian besar aplikasi terdesentralisasi. Sebagian besar bisnis dan departemen pemerintah cenderung mengadopsi teknologi ini untuk membawa ketahanan, transparansi, ketersediaan, dan akuntabilitas. Selain itu, tutorial **blockchain**  ini akan sangat membantu Anda jika Anda berencana untuk memulai pengembangan di Ethereum Blockchain karena memanfaatkan kontrak pintar. Etheruem blockchain lebih stabil dan populer karena memiliki ribuan node hidup. Selain itu, perusahaan dapat dengan mudah mengembangkan dan menggunakan jaringan blockchain Ethereum tanpa menghabiskan waktu tambahan. Faktor lain di balik keandalan Ethereum adalah bahwa ia menawarkan pengembangan kontrak pintar dengan cara yang tidak ditawarkan oleh platform manajemen aset digital****lainnya.
Pembaruan terbaru dalam jaringan Ethereum telah membuat jaringan lebih hemat biaya dan efisien. Faktanya, ada lebih banyak materi yang tersedia di cloud yang menunjukkan aspek -aspek penting dari Etheruem mengenai tujuan investasi dan pengembangan. Untuk pengembang, ia menyediakan ekosistem yang ramah pengembang dengan utilitas yang sudah dibuat sebelumnya. Untuk penambang, ada hadiah dalam bentuk eter setiap kali mereka menambang blok baru ke dalam blockchain. Selanjutnya, [containerize.com][10] telah menerbitkan banyak posting blog teknis dan tutorial tentang produk open source populer di [blog.containerize.com][11]. Oleh karena itu, tetap terhubung dengan kategori [platform blockchain][12] untuk pembaruan rutin.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Ethereum][7]
  * [What is Ethereum? (ETH)][20]
  * [Hyperledger Fabric][13]
  * [OpenChain][14]
  * [Riak][15]
  * [Multichain][16]
  * [Consensys Quorum][17]
  * [Cara Mengatur Jaringan Blockchain Quorum Consensys Local][18]
  * [Top 5 Platform Blockchain Open Source di 2020][3]
  * [Panduan Dasar tentang Cara Membuat Kontrak Cerdas Ethereum][2]
  * [Bagaimana teknologi terdesentralisasi meningkatkan strategi bisnis Anda][19]



 [1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
 [2]: https://blog.containerize.com/
 [3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
 [4]: #setup
 [5]: #interact
 [6]: #Conclusion
 [7]: https://products.containerize.com/blockchain-platforms/ethereum
 [8]: https://github.com/ethereum/go-ethereum
 [9]: https://brew.sh/
 [10]: https://www.containerize.com/
 [11]: https://blog.containerize.com/
 [12]: https://products.containerize.com/blockchain-platforms/
 [13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
 [14]: https://products.containerize.com/blockchain-platforms/openchain
 [15]: https://products.containerize.com/blockchain-platforms/ripple
 [16]: https://products.containerize.com/blockchain-platforms/multichain
 [17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
 [18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
 [19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
 [20]: https://docs.koinize.com/cryptocurrencies/ethereum-eth/
