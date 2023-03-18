---
title: "Apa janji dalam javascript? | Tutorial JavaScript" 
seoTitle: "Apa janji dalam javascript?" 
description: "Apa janji dalam javascript? Janji adalah blok kode yang memberikan hasil akhir dari operasi asinkron seperti tertunda, diselesaikan atau ditolak." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "Apa janji dalam javascript? Janji adalah blok kode yang memberikan hasil akhir dari operasi asinkron seperti selesai atau ditolak." 
url: /id/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## Apakah Anda berjuang untuk mempelajari konsep janji JavaScript? Artikel ini akan menjelaskan cara membuat janji, mengapa kami menggunakan janji dalam JavaScript dan banyak lagi.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## Ringkasan
Kami harap Anda memiliki pemahaman yang lebih baik tentang [tipe data JavaScript] [1]. Sekarang, ini adalah posting blog lain dalam kategori [pemrograman] [2]. Dalam tutorial JavaScript ini, kita akan membahas**apa janji dalam JavaScript**, dan seiring dengan itu, kita juga akan melihat apa operasi yang asinkron, penggunaan janji, dan cara membuat janji dalam JavaScript. Pertama, proses/operasi asinkron adalah proses yang dieksekusi secara mandiri sehubungan dengan proses lain dan tidak membuat penyumbatan apa pun. Oleh karena itu, Anda perlu menangani operasi asinkron jika tidak, ia dapat menciptakan kelainan dalam kode JavaScript Anda. Jadi, kita akan mengeksplorasi bagaimana kita bisa menangani operasi asinkron menggunakan janji.
Kami akan membahas poin -poin berikut dalam tutorial JavaScript ini:
***[Apa janji dalam javascript? Janji dijelaskan] [3]**
***[Mengapa kami menggunakan janji di javascript?] [4]**
***[Bagaimana Janji Bekerja Dalam JavaScript?] [5]**
***[Cara membuat janji?] [6]**

## Apa janji dalam javascript? Janji dijelaskan {#what-is-promise-in-javascript-promises-Explained}
Janji adalah objek yang mewakili nilai dari cuaca operasi async yang diselesaikan, ditolak atau dalam keadaan tertunda. Dengan kata yang lebih sederhana, janji digunakan untuk mengembalikan nilai yang belum diproduksi oleh blok kode asinkron. Faktanya, ada tiga kondisi janji**dan itu bisa di salah satu negara berikut:
* * Tertunda**: Janji dalam keadaan tertunda yang berarti dalam fase awal dan saat ini sedang dieksekusi.
* * Dipenuhi**: Janji diselesaikan dan nilai telah dikembalikan.
* * Ditolak**: Ini adalah keadaan yang disebabkan oleh kesalahan apa pun yang berarti janji telah ditolak.
Suatu hal yang penting untuk dipertimbangkan di sini adalah bahwa nilai/keadaan yang dikembalikan oleh janji tidak dapat diubah dan tidak dapat diubah yang berarti janji memastikan bahwa tidak ada perilaku yang tidak biasa.

## Mengapa kami menggunakan janji di JavaScript? {#Why-we-use-promise-in-javascript}
Jika Anda tidak mengetahui**callback neraka**maka izinkan saya membagikan apa itu. Pertama, panggilan balik adalah fungsi di dalam fungsi lain. Pada dasarnya, fungsi panggilan balik disahkan sebagai argumen kedua dalam fungsi yang dieksekusi setelah menerima hasil. Jadi, dalam banyak skenario, Anda perlu menyatukan fungsi panggilan balik dan seiring meningkatnya bersarang, menjadi hampir tidak mungkin ditangani. Oleh karena itu, kami menyebut sarang fungsi panggilan balik yang panjang ini**Callback Hell**.
Jadi, janji adalah cara untuk menghindari situasi neraka panggilan balik. Penggunaan janji memberikan keterbacaan yang lebih baik dan peningkatan penanganan kesalahan. Lebih lanjut, Anda dapat menangani operasi asinkron dengan lebih baik dengan mengambil nilai yang dikembalikan dan meneruskan nilai itu ke fungsi berikutnya dalam rantai.

## Bagaimana janji bekerja dalam javascript? {#How-promise-work-in-javascript}
Sekarang, mari kita pahami mekanisme kerja di balik janji. Silakan lihat diagram yang disebutkan di bawah ini.

{{< figure align=center src="images/what-is-a-promise.png" alt="Bagaimana Janji Bekerja Dalam JavaScript??" >}}

Sesuai alur kerja yang disebutkan di atas, detail implementasi cukup jelas. Promise memulai eksekusi atas penciptaannya dan berada dalam keadaan tertunda menunggu tanggapan. Ada dua opsi baik akan ada data atau akan ada kesalahan pada akhir pemrosesan. Setelah menerima data, itu masuk ke blok .then () dan masuk ke blok .catch () jika terjadi kesalahan.

## Bagaimana cara membuat janji? {#How-to-Create-A-Promise}
Sejauh ini, kami telah membahas konsep dasar janji. Sekarang, kita akan mengeksplorasi bagaimana kita bisa membuat janji di JavaScript. Mari kita gunakan konstruktor janji berikut untuk membuat janji.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise Constructor mengambil fungsi sebagai argumen yang sekali lagi mengambil dua argumen terlebih dahulu, menyelesaikan dan yang lain menolak. Ini memohon metode resolve () jika berhasil dan masuk ke blok reject () jika terjadi kesalahan atau penolakan.
Mari kita sedikit dalam dan jelajahi ciptaan janji sedikit lebih jauh.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
Dalam cuplikan kode di atas, Anda dapat melakukan panggilan API lebih lanjut di blok Resolve ().
Sekarang, mari kita lihat pola eksekusi janji JavaScript.
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
Berikut ini adalah output dari cuplikan kode di atas:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Jadi, kode di dalam Badan Janji bekerja secara sinkron sehingga "eksekusi sinkron" dicetak. Selanjutnya, .then () Block Works secara tidak sinkron dan menunggu sampai hasilnya dihasilkan tetapi eksekusi program tidak berhenti itulah sebabnya "Hello Word" dicetak dan eksekusi janji telah ditangguhkan. Setelah itu, .then () blok mengeksekusi dan mengembalikan nilai -nilai yang dijanjikan. Itulah kisah JavaScript. Sekali lagi, karena JavaScript berulir tunggal, janji-janji digunakan untuk menangani operasi asinkron dengan cara yang tidak memblokir.

## Kesimpulan
Ini adalah akhir dari tutorial**JavaScript**ini. Semoga Anda memiliki ide yang bagus tentang janji JavaScript. Kami telah membahas**Apa janji dalam javascript**, mengapa kami menggunakan janji dalam javascript,**bagaimana janji bekerja di javascript**, dan bagaimana membuat janji. Selanjutnya, kami akan membahas topik ini lebih lanjut tentang penggunaan dan ketentuan lanjutannya. Karena itu, buka artikel ini jika Anda mempersiapkan diri untuk sesi wawancara.

## Terhubung dengan kami
Akhirnya, [containerize.com] [7] menawarkan tutorial JavaScript yang sedang berlangsung tentang berbagai topik menarik. Anda dapat tetap berada di loop dengan mengikuti kami di platform media sosial kami, termasuk [Facebook] [8], [LinkedIn] [9], dan [Twitter] [10].

## Berikan pertanyaan
Anda dapat memberi tahu kami tentang pertanyaan atau pertanyaan Anda di [forum] kami [11].

## FAQ
* * Apa janji dalam javascript dengan contoh?**
Silakan ikuti [tautan] [3] ini untuk mengetahui janji apa yang ada di JavaScript.

## Lihat juga
  * [Apa tipe data JavaScript? | Panduan Pemula] [1]
  * [Kubernetes multi-tenancy & arsitektur berbasis kontainer] [12]
  * [Apa itu komputasi tanpa server? | Arsitektur tanpa server] [13]
  * [Apa itu multitenancy? | Mengapa pendekatan multi-penyewa?] [14]
  * [Apa tipe data JavaScript? | Panduan pemula] [15]
[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
