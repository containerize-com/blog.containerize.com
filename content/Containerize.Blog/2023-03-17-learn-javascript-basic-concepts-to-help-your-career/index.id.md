---
title: "Pelajari konsep dasar JavaScript untuk membantu karier Anda" 
seoTitle: "Konsep Dasar JavaScript" 
description: "Ikuti tutorial JavaScript ini untuk mempelajari konsep dasar JavaScript. Lingkup, pengangkat, dan penutupan adalah konsep yang sangat mendasar tetapi wajib dalam JavaScript." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "Ikuti tutorial JavaScript ini untuk mempelajari konsep dasar JavaScript. Lingkup, pengangkat, dan penutupan adalah konsep yang sangat mendasar tetapi wajib dalam JavaScript." 
url: /id/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## Mari belajar beberapa fundamental javascript inti yang harus diketahui pengembang. Bahasa pemrograman yang ditafsirkan ini banyak digunakan untuk mengembangkan aplikasi tingkat perusahaan.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="Konsep Dasar JavaScript">}}


## Ringkasan
JavaScript adalah bahasa skrip yang digunakan untuk mengembangkan aplikasi berbasis web yang dinamis. Kami menggunakan HTML dan CSS untuk membangun situs web statis sedangkan JavaScript digunakan untuk menambahkan interaktivitas. Dalam posting blog kami sebelumnya, kami membahas [Model Objek Dokumen][1] dan sekarang kami akan membahas beberapa konsep dasar**JavaScript penting lainnya**. Pengembang web cenderung memilih bahasa skrip ini karena fitur dan kerangka kerja yang kaya. Selain itu, Anda dapat melakukan pengembangan di ujung depan dan belakang dengan mempelajari JavaScript. Namun, Anda tidak hanya tidak hanya mengembangkan aplikasi web tetapi juga aplikasi seluler. Tutorial JavaScript ini akan membantu Anda jika Anda mempersiapkan diri untuk sesi wawancara. Namun demikian, panduan ini layak dibaca untuk menambah lebih banyak ke ember pengetahuan Anda.
Kami akan membahas poin -poin berikut dalam artikel ini:
* **[apa yang diangkat dalam javascript][2]**
* **[SCOPES IN JAVASCRIPT][3]**
* **[Penutupan JavaScript][4]**

## Apa yang diangkat dalam JavaScript   {#what-is-hoisting-in-javascript}
Fenomena fungsi pengambilan atau deklarasi variabel di atas ruang lingkup saat ini dikenal sebagai pengangkat. Ini adalah konsep yang sangat kritis dan sebagian besar pengembang JavaScript tidak menyadarinya. Namun, hal penting yang perlu diperhatikan di sini adalah bahwa hanya deklarasi fungsi/variabel yang diambil ke atas, bukan inisialisasi fungsi/variabel.
Mari kita ambil contoh dan lihat cuplikan kode di bawah ini;
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
Dalam contoh kode di atas, kami membuat panggilan fungsi sebelum deklarasi fungsi tetapi meskipun kode berhasil dijalankan dan itu karena JavaScript mengangkat. Pada dasarnya, selama waktu kompilasi, JavaScript Interpreter memindai kode, mengumpulkan semua fungsi/variabel, dan memasukkannya ke dalam memori yang disebut lingkungan leksikal. Hal yang sama terjadi dengan variabel.
```
name = "mustafa";
console.log(name);
var name;

```
Demikian pula, inisialisasi variabel nama telah dilakukan sebelum deklarasi, dan kode berfungsi tanpa kesalahan. Sekali lagi, selama waktu kompilasi, juru bahasa JS melihat ke lingkungan leksikal untuk menemukan deklarasi variabel dan karenanya mengeksekusi kode tersebut.
Jadi, jika Anda mendeklarasikan variabel dengan kata kunci Let and Const, JavaScript akan mengangkatnya sedikit berbeda.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
Kesalahan dalam cuplikan kode di atas terjadi. Alasannya adalah bahwa inisialisasi tidak dilakukan saat mengangkat variabel ini. Singkat cerita, semua deklarasi diinisialisasi dengan "tidak terdefinisi" sementara variabel dinyatakan dengan "let" atau "const" tidak diinisialisasi dalam pengangkatan.

## scopes di javascript   {#scopes-in-javascript}
Lingkupnya adalah salah satu konsep dasar JavaScript yang harus diketahui pengembang. Namun, bekerja dengan lingkup JavaScript tidak mudah dan sedikit berbeda. Oleh karena itu, ada tiga jenis lingkup di JavaScript dan ini adalah sebagai berikut:
**Block-level**: Variabel dinyatakan dengan "let" atau "const" berisi ruang lingkup level blok.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
Variabel "A" tidak dapat diakses di luar kawat gigi keriting {} karena memiliki ruang lingkup level blok.
**Level Fungsi**: Variabel yang dinyatakan di dalam fungsi JavaScript memiliki ruang lingkup lokal.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
Suatu hal yang penting untuk dicatat di sini adalah bahwa variabel yang dinyatakan dengan "let" "const" dan "var" memiliki ruang lingkup fungsi di dalam tubuh fungsi.
**Global-level**: Variabel yang dinyatakan di luar fungsi menjadi variabel global. Tidak peduli apakah Anda telah mendeklarasikannya menggunakan "let", "const" atau "var" kata kunci. Selanjutnya, variabel menjadi variabel global jika dideklarasikan tanpa menggunakan kata kunci apa pun seperti yang ditunjukkan pada cuplikan kode di bawah ini:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## JavaScript penutupan   {#javascript-closures}
Ini adalah konsep penting lain yang memperkuat pengetahuan JavaScript Anda tentang lingkup dan enkapsulasi data. Dalam bentuk paling sederhana, fungsi di dalam fungsi dikenal sebagai penutupan. Anda dapat menyebut fungsi dalam sebagai penutupan. Fungsi batin ini memiliki tiga jenis ruang lingkup:
 * Ia memiliki ruang lingkup level blok sendiri.
 * Ini memiliki akses ke variabel orang tua.
 * Variabel dalam ruang lingkup global juga dapat diakses di dalam penutupan.
 Mari kita lihat cara membuat penutupan:
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
Variabel first_name dapat diakses di dalam fungsi bernama InnerFunc tetapi fungsi induk tidak dapat memiliki akses ke variabel last_name. Perilaku ini memungkinkan pemrogram membuat variabel pribadi dalam rantai lingkup.

## Kesimpulan
Kami mengakhiri panduan JavaScript ini di sini dan berharap Anda memiliki pemahaman yang lebih baik tentang**konsep dasar JavaScript**. Selain itu, kami juga telah melalui**penutupan javascript, lingkup di JavaScript**, dan mengangkat. Ada banyak konsep penting lainnya yang wajib untuk pemula. Jadi, artikel ini akan membantu Anda jika Anda berkembang untuk meningkatkan atau menyegarkan konsep JavaScript Anda. Selain itu, Anda dapat melalui posting blog yang disebutkan di bagian "Lihat juga".

## Terhubung dengan kami
Akhirnya, [containerize.com][5] menawarkan tutorial JavaScript yang sedang berlangsung tentang berbagai topik menarik. Anda dapat tetap berada di loop dengan mengikuti kami di platform media sosial kami, termasuk [Facebook][6], [LinkedIn][7], dan [Twitter][8].

## Berikan pertanyaan
Anda dapat memberi tahu kami tentang pertanyaan atau pertanyaan Anda di [forum] kami [9].

## FAQ
**Apa konsep penting untuk dipelajari dalam JavaScript?**
Silakan ikuti [panduan] pemula JavaScript ini [2] untuk mengetahui konsep dasar JavaScript.

## Lihat juga
  * [Apa itu Dom dalam JavaScript? | Model objek dokumen][1]
  * [Apa janji dalam javascript? | Tutorial JavaScript][10]
  * [Apa itu komputasi tanpa server? | Arsitektur tanpa server][11]
  * [Apa itu multitenancy? | Mengapa pendekatan multi-penyewa?][12]
  * [Apa itu AI generatif | Kecerdasan Buatan Generatif][13]
  * [Apa itu async menunggu di javascript? | Panduan JavaScript][14]
  * [Cara menggunakan chatgpt di vscode | Kode Ekstensi VScode GPT][15]
  * [Apa itu Openai Chatbot GPT-3 | Chatgpt an revolusi AI][16]
  * [Pengantar Kecerdasan Buatan | Apa itu ai?][17]
  * [Apa itu async menunggu di javascript? | Panduan JavaScript][18]

  
[1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
[2]: #What-is-hoisting-in-JavaScript
[3]: #Scopes-in-JavaScript
[4]: #JavaScript-Closures
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
