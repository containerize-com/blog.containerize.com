---
title: "Mari kita mengintegrasikan chatgpt di aplikasi JavaScript | Tutorial chatgpt" 
seoTitle: "Mengintegrasikan chatgpt di aplikasi javascript" 
description: "Cukup jalankan \"NPM I Chatgpt\" dan mulai menggunakan OpenAI Chatbot di aplikasi Node.js Anda. Ikuti panduan ini untuk mempelajari cara mengintegrasikan chatgpt ke dalam aplikasi JavaScript." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "Cukup jalankan \"NPM I Chatgpt\" dan mulai menggunakan OpenAI Chatbot di aplikasi Node.js Anda. Ikuti panduan ini untuk mempelajari cara mengintegrasikan chatgpt ke dalam aplikasi JavaScript." 
url: /id/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## merampingkan perangkat lunak bisnis Anda dengan mengintegrasikan chatbot viral berbasis GPT-3. Tutorial ChatGPT ini menunjukkan langkah -langkah integrasi dan cuplikan kode.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="Mengintegrasikan chatgpt di aplikasi javascript">}}


## Ringkasan
Halo pembaca! Terima kasih banyak atas tanggapan Anda yang luar biasa terhadap posting blog yang kami terbitkan di [chatgpt][1] integrasi. Kami di sini dengan tutorial chatgpt  **chatgpt lainnya** mengikuti minat Anda. Selain itu, kami akan berada dalam lingkaran untuk menerbitkan artikel yang bermanfaat bagi akademisi dan karier Anda. Namun, kami telah memulai [seri][20] dari tutorial JavaScript sehingga ini adalah waktu terbaik untuk menulis panduan yang menunjukkan cara **mengintegrasikan chatgpt dalam javascript aqpp**  secara terprogram. Lebih lanjut, kami akan menulis cuplikan kode untuk membuat fungsionalitas chatbot viral gpt-3 ini**. Untuk tujuan ini, kami akan mengaktifkan fungsionalitas chatgpt di aplikasi Node.js. Oleh karena itu, tingkat dasar pengetahuan sebelumnya tentang Node.js adalah nilai tambah saat memeriksa panduan ini.
Bagian berikut akan dibahas dalam tutorial chatgpt ini:
*  **[Prasyarat - Pembungkus JavaScript Chatgpt][2]**  
*  **[Integrasi chatgpt dengan aplikasi node.js][3]**  

## Prasyarat - Pembungkus JavaScript Chatgpt {#Pre-requisites---ChatGPT-JavaScript-wrapper-}

Bagian ini menunjukkan persyaratan yang diperlukan untuk mengaktifkan integrasi chatgpt dalam aplikasi berbasis Node.js. Persyaratan langsung dan mudah dipasang di sistem Anda.
Berikut ini adalah prasyarat untuk mempraktikkan integrasi javascript chatgpt ini:

 * [NodeJs4](>= 18)

 * [NPM5](>=9)
 
Setelah prasyarat di atas diinstal, langkah selanjutnya adalah mendapatkan kunci API OpenAI. Kunci ini digunakan untuk membuat permintaan API ke chatgpt secara terprogram. Oleh karena itu, silakan kunjungi [tautan] ini [6] untuk mempelajari cara mendapatkan kunci API OpenAI jika Anda tidak tahu prosedurnya.
Harap simpan kunci API Anda di tempat yang aman dan itu saja untuk fase persyaratan.

## Integrasi chatgpt dengan aplikasi node.js {#ChatGPT-integration-with-Node.js-application}

Sekarang, kita semua siap untuk  **mengintegrasikan chatgpt di aplikasi JavaScript secara terprogram.**  Pertama, buka terminal dan jalankan perintah berikut:
```
npm i chatgpt
```
Setelah berjalan berhasil, ikuti langkah-langkah berikut dan cuplikan kode untuk membuat permintaan ke model GPT-3 untuk berinteraksi dengan chatgpt secara terprogram:
 * Impor chatgptapi.
 * Inisialisasi konstruktor dengan kunci API openai Anda.
 * Menerapkan metode SendMessage untuk mengirim pesan ke model GPT-3 dan menerima tanggapan.
 * Tampilkan responsnya.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
Salin dan tempel cuplikan kode di atas ke file server utama Anda dan jalankan perintah berikut ke terminal Anda:
```
node index.js
```
 **CATATAN** : Harap tambahkan ("type": "module",) ke dalam file package.json Anda jika Anda mendapatkan kesalahan "tidak dapat menggunakan pernyataan impor di luar modul".
Anda dapat melihat output pada gambar di bawah ini:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="tutorial chatgpt">}}

Selain itu, pembungkus javascript chatgpt ini memungkinkan Anda melacak percakapan dan mengirim pesan tindak lanjut. Satu -satunya hal yang perlu Anda lakukan adalah lulus "ParentMessageId" di badan permintaan seperti yang ditunjukkan pada cuplikan kode di bawah ini:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
Demikian juga, Anda dapat menjelajahi banyak metode lain yang ditawarkan [di sini][7]. Integrasi Openai Chatbot ini dapat memberikan keunggulan kompetitif untuk aplikasi tingkat perusahaan Anda.

## Kesimpulan
Poin ini membawa kita ke akhir tutorial chatgpt  **ini** . Kami harap Anda telah belajar cara  **mengintegrasikan chatgpt dalam aplikasi JavaScript**  secara terprogram. Selanjutnya, Anda memiliki cuplikan kode kerja yang dapat Anda uji pada mesin lokal Anda. Posting blog ini adalah aset jika Anda berkembang untuk mempelajari **integrasi chatgpt**  di aplikasi node.js Anda.

## Terhubung dengan kami
Akhirnya, [containerize.com][8] secara terus -menerus menulis posting blog tentang berbagai topik. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][9], [LinkedIn][10], dan [Twitter][11].

## Berikan pertanyaan
Anda dapat memberi tahu kami tentang pertanyaan atau pertanyaan Anda di [forum] kami [12].

## FAQ
 **Bagaimana cara mengintegrasikan chatgpt dengan javascript?** 
Harap ikuti chatgpt ini [tutorial][2] Untuk mempelajari langkah -langkah dan cuplikan kode untuk mengintegrasikan chatgpt di aplikasi JavaScript secara terprogram.

## Lihat juga
  * [Pengantar Kecerdasan Buatan | Apa itu ai?][13]
  * [Cara mengintegrasikan chatgpt dengan Google Sheets][14]
  * [Cara menggunakan chatgpt di vscode | Kode Ekstensi VScode GPT][15]
  * [Apa itu Openai Chatbot GPT-3 | Chatgpt an revolusi AI][16]
  * [Integrasi Google Docs dengan Chatgpt | Openai GPT-3][17]
  * [Apa 5 kerangka kerja AI open-source teratas][18]
  * [Apa itu AI generatif | Kecerdasan Buatan Generatif][19]



[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
