---
title: "Cara membuat bot FAQ berbasis AI untuk bisnis Anda menggunakan botpress" 
seoTitle: "Cara membuat bot FAQ berbasis AI untuk bisnis Anda menggunakan botpress" 
description: "Dalam posting blog ini, kami akan belajar cara mengotomatisasi pertanyaan pelanggan Anda menggunakan bot FAQ berbasis AI menggunakan botpress di situs web Anda." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "Bisnis membutuhkan platform dukungan pelanggan yang lebih baik untuk menyelesaikan pertanyaan mereka secara efisien. Dalam tutorial ini, kami akan belajar cara membuat bot FAQ berbasis AI menggunakan botpress" 
url: /id/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## Bisnis membutuhkan platform dukungan pelanggan yang lebih baik untuk menyelesaikan pertanyaan mereka secara efisien. Dalam tutorial ini, kami akan belajar cara membuat bot FAQ berbasis AI menggunakan botpress

{{< figure align=center src="images/botpress-banner.png" alt="Bot FAQ untuk bisnis Anda menggunakan Botpress">}}

Otomasi FAQ terdiri dari meningkatkan pengalaman klien Anda secara online dengan menggunakan chatbots untuk menjawab pertanyaan yang sering diajukan. Dengan kemajuan dalam kecerdasan buatan dan pembelajaran mesin, permintaan untuk chatbots percakapan berbasis AI telah mendapatkan banyak popularitas dan permintaan. Dan ini sebagian besar karena semua bisnis ingin meningkatkan pengalaman pelanggan mereka bahkan ketika bisnis offline. Chatbots percakapan telah memungkinkan bisnis ini untuk memberi pelanggan mereka dukungan sentuhan tinggi yang selalu tersedia yang mereka inginkan. Tujuan dari posting blog ini adalah untuk membantu Anda mengatur bot FAQ berbasis AI menggunakan Botpress.
Dalam artikel ini, kami akan belajar tentang modul NLU dari Botpress dan bagaimana pemahaman / pemrosesan bahasa alami bekerja dan dapat membantu bisnis untuk mencapai tingkat kepuasan pelanggan yang tinggi. Mari kita mulai!
  *** [apa itu pemrosesan bahasa alami][1] **
  *[** Tentukan kasus penggunaan Anda **][2]
  *[** Instal Botpress **][3]
  *[** Buat bot baru **][4]
  *[** Latih Bot Tanya Jawab Anda **][5]
  *[** Kesimpulan **][6]

## Apa itu pemrosesan bahasa alami {#nlu}
Natural Language Processing (NLP) adalah cabang kecerdasan buatan yang membantu komputer memahami, menafsirkan, dan memanipulasi bahasa manusia. NLP membantu komputer berkomunikasi dengan manusia dalam bahasa mereka sendiri. Dan, memungkinkan komputer untuk membaca teks, mendengar pidato, menafsirkannya, mengukur sentimen.
Tugas dasar NLP mencakup tokenisasi dan penguraian, batang, penandaan bagian-of-speech, deteksi bahasa, dan identifikasi hubungan semantik.
NLU adalah modul Botpress yang memproses setiap pesan yang masuk dan melakukan klasifikasi niat, identifikasi bahasa, ekstraksi entitas, dan penandaan slot.

## Tentukan kasus penggunaan Anda {#case}
Jika Anda ingin membuat chatbot FAQ AI, Anda perlu menggunakan kasus untuk bisnis Anda. Demi tutorial ini, kami ingin pengguna kami mengajukan pertanyaan acak terkait dengan harga produk kami dan waktu bisnis kami.

## Instal botpress {#install}
Untuk menginstal Botpress, kunjungi [situs web] mereka [7], klik ‘Unduh Gratis’, dan pilih platform Anda. Untuk tutorial ini, saya menggunakan versi Mac. Setelah unduhan selesai, Anda dapat mengekstrak file zip dan menjalankan perintah berikut di terminal Anda dengan masuk ke folder yang tepat.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="Botpress mulai">}}


## Buat bot baru {#Create}
Sekarang, kami ingin benar -benar membuat bot pertama kami dengan mengklik ** Buat bot ** dan kemudian memilih ** bot baru **. Saya akan memanggil bot kami bot FAQ, dan kemudian sebagai templat bot, saya akan memilih ** bot kosong ** sebelum mengklik ** Buat bot **.

{{< figure align=center src="images/create-bot.gif" alt="buat-bot baru">}}

Sekarang kami akan mengedit bot ini di Botpress Studio Editor.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="Botpress Edit di Studio">}}

Sekarang, di studio, Anda memiliki sejumlah menu di sepanjang bilah sisi kiri. Tetapi demi kesederhanaan, kami hanya akan tetap berpegang pada bagian tanya jawab.
Klik ikon "Q&A" dan tambahkan pertanyaan yang mungkin / sering diajukan dan jawaban yang sesuai.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Q&A botpress">}}


## Latih Bot FAQ Anda {#train}
Setelah selesai sekarang, Anda harus melatih bot FAQ Anda dengan mengklik tombol "Train Chatbot" di sudut kanan bawah bagian Q&A.

{{< figure align=center src="images/train-bot.gif" alt="Bot Botpress Train Bot">}}

Setelah pelatihan selesai, Anda dapat menguji bot FAQ Anda dengan menggunakan alat emulator bawaan.

{{< figure align=center src="images/test-faq-bot.gif" alt="Uji bot FAQ Anda">}}

Sekarang, bahwa Anda sudah menyiapkan bot FAQ Anda, Anda dapat menggunakan bot ini di situs web Anda dengan mengikuti panduan [8][8] Botpress.

## kesimpulan {#conclusion}
Dalam posting blog ini, kami belajar dan memahami pemrosesan bahasa alami. Kami juga mendapatkan langsung dengan proses pembuatan bot. Kami melatih bot FAQ sederhana yang membantu pelanggan Anda mengetahui tentang waktu bisnis dan paket pembayaran Anda. Tujuan tutorial ini adalah untuk membantu pemula dengan cepat memulai dengan bot FAQ berbasis AI menggunakan Botpress.

  
[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
