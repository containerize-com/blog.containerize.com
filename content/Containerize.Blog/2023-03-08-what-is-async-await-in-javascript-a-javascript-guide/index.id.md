---
title: "Apa itu async menunggu di javascript? | Panduan JavaScript" 
seoTitle: "Apa itu async menunggu di javascript?" 
description: "Apa itu async menunggu di javascript? Kata kunci Async & Await digunakan untuk mengoperasikan operasi asinkron lebih baik daripada janji tradisional dalam JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Apa itu async menunggu di javascript? Kata kunci Async & Await digunakan untuk mengoperasikan operasi asinkron lebih baik daripada janji tradisional dalam JavaScript." 
url: /id/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 Memperkenalkan JavaScript Async/Await yang merupakan pembungkus di sekitar janji. Async/Await digunakan untuk mengkonsumsi API berbasis janji dengan cara modern dan paling sederhana.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Apa itu async menunggu di javascript??">}}


## Ringkasan
Kami membahas [JavaScript janji][1] Dalam posting blog kami sebelumnya dan Anda harus mengunjungi jika Anda ingin mendapatkan pemahaman yang jelas tentang konsep di balik janji JavaScript. Dalam seri ini [tutorial JavaScript][2], kami di sini dengan panduan JavaScript lain yang akan menunjukkan fitur modern dari JavaScript Async/Await. Posting blog ini untuk mereka yang memiliki pengetahuan sebelumnya tentang janji JavaScript. Lebih lanjut, kami akan mencoba membahas**apa itu async/menunggu di javascript**, dan ketika kami perlu menggunakan async/menunggu. Selain itu, kami juga akan membahas kesalahan penanganan dengan async/menunggu. Jadi, berikan bacaan menyeluruh untuk tutorial**JavaScript Async/Await**untuk menandai konsep ini diperiksa.
Kami akan melalui bagian berikut dalam tutorial JavaScript Async Await ini:
* **[Apa itu Async/Await di JavaScript | Async menunggu sintaks][3]**
* **[Kapan menggunakan async/menunggu?][4]**
* **[Penanganan kesalahan dengan async/menunggu][5]**

## Apa itu async/menunggu di JavaScript | Async menunggu sintaks   {#what-is-asyncait-in-javascript-async-aakait-syntax}
ECMascript 2017 merilis fitur baru JavaScript dan Async/Await adalah salah satu yang paling banyak digunakan di antara fitur -fitur ini. Async/Await dibangun di atas janji -janji dan sebenarnya cara modern untuk menangani janji JavaScript.
Mari kita lihat cara menggunakan kata kunci Async/Await dalam kode JavaScript:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
Nah, kata kunci async di awal fungsi menyiratkan bahwa fungsi ini akan mengembalikan janji. Jadi, tunggu kata kunci selalu digunakan di dalam tubuh fungsi async untuk menjeda eksekusi fungsi sampai janji diselesaikan. Yang penting untuk dicatat di sini adalah bahwa Anda tidak dapat menggunakan kata kunci menunggu di dalam tubuh fungsi reguler. Namun, Anda dapat menggunakan menunggu hanya dengan fungsi asinkron yang dinyatakan dengan kata kunci async.

## Kapan Menggunakan Async/Await?   {#BAPA-GUNAKAN-ASYNCAWAIT}
Sejauh ini, Anda memiliki jawaban untuk**apa yang ditunggu async di javascript**. Karena ini hanya pembungkus di sekitar janji JavaScript tradisional sehingga Anda lebih baik menggunakan cara baru ini untuk membuat dan menangani janji dengan cara yang lebih bersih dan mudah dibaca. Selain itu, Anda dapat menyingkirkan beberapa janji. Kata kunci yang menunggu merangkum pernyataan .then () ke dalam satu baris.

## Penanganan kesalahan dengan Async/Await   {#error-handling-with-asyncaWait}
Penanganan kesalahan adalah tugas penting dalam hal pengembangan perangkat lunak tingkat perusahaan. Ada beberapa cara untuk menangkap kesalahan dalam pendekatan async/menunggu.

{{< figure align=center src="images/async-await.png" alt="Coba tangkap async menunggu javascript">}}

**Coba tangkap async menunggu javascript**: tidak ada yang baru dengan pendekatan penanganan kesalahan ini. Namun, Anda dapat menggunakan blok mencoba/menangkap di dalam fungsi async seperti yang ditunjukkan pada cuplikan kode di bawah ini:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Menggunakan blok coba/tangkap, Anda dapat menangkap pengecualian di dalam tubuh fungsi async.
Sedangkan, ada pendekatan lain untuk menangani kesalahan di mana Anda dapat menambahkan blok .catch () di akhir panggilan fungsi. Karena Async/Await mengembalikan janji, sehingga Anda menangkap kesalahan di blok .catch ().
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## Kesimpulan
Kami mengakhiri tutorial**javascript async menunggu ini**. Semoga Anda memiliki pemahaman yang lebih baik tentang**apa yang ditunggu async di JavaScript**. Selain itu, kami telah melalui sintaks JavaScript Async menunggu yang membuat kode sumber menjadi lebih kompleks. Fitur JavaScript ini banyak digunakan karena penggunaan dan kinerjanya yang kaya. Dalam beberapa hari mendatang, kami akan menulis lebih lanjut tentang fitur dan konsep JavaScript sehingga Anda bisa mendapatkan perintah yang kuat atas konsep JS. Selain itu, ada beberapa artikel menarik lainnya yang disebutkan di bagian "Lihat juga".

## Terhubung dengan kami
Terakhir, [containerize.com][6] menawarkan tutorial JavaScript yang sedang berlangsung tentang berbagai topik menarik. Anda dapat tetap diperbarui dengan mengikuti kami di platform media sosial kami, termasuk [Facebook][7], [LinkedIn][8], dan [Twitter][9].

## Berikan pertanyaan
Anda dapat memberi tahu kami tentang pertanyaan atau pertanyaan Anda di [forum] kami [10].

## FAQ
**Apa itu async menunggu di javascript dengan contoh?**
Anda dapat mengunjungi [tautan][3] ini untuk memahami konsep async menunggu.
**Apa itu async menunggu vs janji?**
 * Async/Await membuat kode sumber lebih jelas dan dapat dibaca dibandingkan dengan janji di mana janji rantai dapat membuat kode sumber berantakan.
 * Penanganan kesalahan sangat mirip di kedua pendekatan.
 * Debugging kurang sulit dalam menunggu.
 * Janji Pertahankan Negara -negara seperti yang tertunda, diselesaikan, atau ditolak. Sedangkan, async/wait baik diselesaikan atau ditolak.

## Lihat juga
  * [Apa janji dalam javascript? | Tutorial JavaScript][1]
  * [Apa itu komputasi tanpa server? | Arsitektur tanpa server][11]
  * [Apa itu multitenancy? | Mengapa pendekatan multi-penyewa?][12]
  * [Apa itu AI generatif | Kecerdasan Buatan Generatif][13]
  * [Cara mengintegrasikan chatgpt dengan Google Sheets][14]
  * [Cara menggunakan chatgpt di vscode | Kode Ekstensi VScode GPT][15]
  * [Apa itu Openai Chatbot GPT-3 | Chatgpt an revolusi AI][16]
  * [Pengantar Kecerdasan Buatan | Apa itu ai?][17]

  
[1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
[4]: #When-to-use-AsyncAwait
[5]: #Error-handling-with-AsyncAwait
[6]: https://www.containerize.com/
[7]: https://web.facebook.com/containerize
[8]: https://www.linkedin.com/company/containerize/
[9]: https://twitter.com/containerize_co
[10]: https://forum.containerize.com/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
