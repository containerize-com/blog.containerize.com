---
title: "Apa itu DOM dalam JavaScript? | Model Objek Dokumen" 
seoTitle: "Apa itu DOM dalam JavaScript?" 
description: "Apa itu DOM dalam JavaScript? Panduan ini akan menunjukkan model objek dokumen, properti DOM, level DOM, dan cara mengakses elemen DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "Apa itu DOM dalam JavaScript? Panduan ini akan menunjukkan model objek dokumen, properti DOM, level DOM, dan cara mengakses elemen DOM." 
url: /id/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Representasi dokumen HTML di dalam browser web diperlakukan sebagai pohon DOM HTML. Ini adalah serangkaian objek dan mendefinisikan struktur halaman web.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="Apa itu DOM dalam JavaScript??">}}


## Ringkasan
Selamat datang di posting blog lain yang menarik dalam serangkaian [pemrograman JavaScript][1]. Dalam artikel ini, kita akan menyentuh konsep pengembangan web yang sangat mendasar namun penting. Ya, kami akan membahas model objek dokumen di JavaScript. Di masa lalu, kami telah menerbitkan tutorial JavaScript yang wajib untuk memulai pengembangan menggunakan bahasa JavaScript. Karena itu, kami sarankan Anda membaca posting blog ini secara menyeluruh sehingga Anda tidak melewatkan apa pun yang terkait dengan konsep penting ini. Mari kita mulai panduan ini dan temukan**apa itu DOM dalam JavaScript**, DOM Properties, dan bagaimana Anda dapat berinteraksi dengannya secara terprogram.
Kami akan membahas topik -topik berikut dalam panduan JavaScript ini:
* **[Apa itu model objek dokumen (DOM)?][2]**
* **[level DOM][3]**
* **[Apa itu properti dom dan bagaimana mengaksesnya?][4]**

## Apa itu model objek dokumen (DOM)?   {#What-is-document-object-model}
Dom berarti?**Model Objek Dokumen (DOM)**adalah representasi halaman web di dalam browser web. Sederhananya, representasi hierarkis dari unsur -unsur dokumen HTML di browser dikenal sebagai model objek dokumen. Itu dibentuk dalam bentuk pohon yang sebenarnya dihasilkan oleh browser web. Ini terdiri dari berbagai node yang terhubung satu sama lain membentuk bentuk pohon. Selain itu, elemen DOM memiliki atribut dan acara yang melekat padanya.
Faktanya, DOM adalah antarmuka pemrograman yang merumuskan struktur logis halaman web dan menentukan cara untuk mengakses elemen halaman. Pada dasarnya, JavaScript tidak mengenali tag HTML seperti judul, H1 dan dll. Oleh karena itu, setelah dokumen HTML dimuat ke dalam browser web, DOM dibuat yang kemudian memungkinkan JavaScript untuk memahami elemen dokumen.

## Level DOM   {#DOM-Levels}
Bagian ini akan menunjukkan berbagai tingkat DOM. Pertama, ada objek jendela di browser yang selalu di atas, dan kemudian ada node dokumen. Mari kita lihat gambar di bawah ini:

{{< figure align=center src="images/DOM.png" alt="Level DOM">}}

Nah, Anda dapat melihat elemen DOM pada gambar di atas. Jendela dan dokumen adalah objek browser tingkat atas dan kemudian kami memiliki elemen HTML sebagai root. Pindah, kita memiliki node kepala dan tubuh, judul simpul milik simpul kepala dan simpul tubuh berisi semua node yang diterjemahkan dan terlihat di browser web. Selain itu, elemen tubuh berisi atribut yang dapat kita lihat di gambar seperti tag jangkar yang berisi atribut "href". Demikian pula, node DOM lainnya berisi berbagai atribut seperti IMG, Meta, dan banyak lagi.

## Apa itu properti DOM dan bagaimana mengaksesnya?   {#What-are-dom-properties-and-how-to-access-them}
Sejauh ini, kami telah memberikan jawaban atas apa itu DOM dalam level JavaScript, dan DOM, dan kami juga telah melalui node DOM. Di bagian ini, kita akan melalui properti DOM dan akan melihat bagaimana kita bisa berinteraksi dengan mereka. Setiap elemen DOM memiliki nilai yang terkait dengan itu seperti tag "p" memiliki properti teks, tag IMG memiliki gambar dan sebagainya. Metode JavaScript digunakan untuk mengakses nilai node. Selanjutnya, Anda dapat menambahkan/menghapus pendengar acara ke elemen DOM.
Anda dapat menemukan properti**dom berikut**:
**INNERHTML**: Properti ini digunakan untuk mengatur atau mengambil konten html dari sebuah node dom.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**Innertext**: Gunakan properti DOM ini untuk mengakses atau mengatur konten tekstual dari elemen HTML.
```
let textualContent = document.getElementById("customID").innerText;
```
**ParentElement**: Anda dapat menggunakan properti ini untuk mengakses simpul induk elemen.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**Gaya**: Perbarui atribut gaya elemen.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**Judul**: Gunakan properti ini untuk memperbarui elemen judul DOM.
```
document.getElementById("customID").title= "this is a web page";
```
 Berikut ini adalah beberapa metode yang dapat kita gunakan untuk berinteraksi dengan JavaScript:
**AddEventListener ()**: Metode DOM ini digunakan untuk melampirkan event handler ke elemen.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute ()**: Metode DOM ini digunakan untuk melampirkan event handler ke suatu elemen.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById ()**: Metode untuk mendapatkan elemen tertentu dengan "ID" yang diberikan.
```
let element = document.getElementById("myID");
```
**QuerySelector ()**: Gunakan metode ini untuk mendapatkan elemen anak pertama yang dicocokkan dengan pemilih CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**ToString ()**: Anda dapat menggunakan metode ini untuk mengubah elemen menjadi string.
Demikian juga, ada banyak metode dan sifat lain yang dapat Anda jelajahi.

## Kesimpulan
Kami mengakhiri tutorial JavasXcript ini di sini dengan harapan Anda memiliki pemahaman yang baik tentang**apa itu DOM dalam JavaScript**. Kami juga telah melewati**DOM, Level DOM, HTML DOM Tree dan DOM Properties**. Posting blog ini sangat penting bagi pemula yang ingin memiliki cengkeraman yang kuat pada konsep Javascrit. Selain itu, ada artikel lain yang relevan yang dapat Anda temukan di bagian "Lihat juga".

## Terhubung dengan kami
Akhirnya, [containerize.com][5] menawarkan tutorial JavaScript yang sedang berlangsung tentang berbagai topik menarik. Anda dapat tetap berada di loop dengan mengikuti kami di platform media sosial kami, termasuk [Facebook][6], [LinkedIn][7], dan [Twitter][8].

## Berikan pertanyaan
Anda dapat memberi tahu kami tentang pertanyaan atau pertanyaan Anda di [forum] kami [9].

## FAQ
**Apa yang digunakan DOM dalam JavaScript?**
Anda dapat mengunjungi [tautan][2] ini untuk mendapatkan jawaban terperinci untuk pertanyaan ini.

## Lihat juga
  * [Apa janji dalam javascript? | Tutorial JavaScript][10]
  * [Apa itu komputasi tanpa server? | Arsitektur tanpa server][11]
  * [Apa itu multitenancy? | Mengapa pendekatan multi-penyewa?][12]
  * [Apa itu AI generatif | Kecerdasan Buatan Generatif][13]
  * [Apa itu async menunggu di javascript? | Panduan JavaScript][14]
  * [Cara menggunakan chatgpt di vscode | Kode Ekstensi VScode GPT][15]
  * [Apa itu Openai Chatbot GPT-3 | Chatgpt an revolusi AI][16]
  * [Pengantar Kecerdasan Buatan | Apa itu ai?][17]

  
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
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
