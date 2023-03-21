---
title: "Apa tipe data JavaScript? | Panduan Pemula" 
seoTitle: "Apa tipe data JavaScript? | Panduan Pemula" 
description: "Apa tipe data JavaScript? Ikuti panduan pemula ini untuk mempelajari 7 tipe data yang digunakan dalam nomor JavaScript, string, boolean, nol, tidak terdefinisi, dan banyak lagi." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "Popularitas JavaScript tidak dapat dihentikan karena kemampuan beradaptasi. Ikuti panduan pemula JavaScript ini dan mulailah memelihara keahlian Anda di JS Stack." 
url: /id/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## Popularitas JavaScript tidak dapat dihentikan karena kemampuan beradaptasi. Ikuti panduan pemula JavaScript ini dan mulailah memelihara keahlian Anda di JS Stack.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |Apa tipe data JavaScript? | Panduan Pemula">}}


## Ringkasan
Tidak peduli apakah Anda adalah tingkat yang biasa -biasa saja atau pengembang yang berpengalaman, Anda akan mendapatkan solusi untuk masalah Anda yang datang selama pekerjaan pengembangan. [containerize.com][1] telah mulai menulis posting blog tutorial dalam kategori pemrograman dan kami mulai dengan panduan pemula**JavaScript**. Karena kami memulai sehingga artikel ini adalah tentang tipe data JavaScript. Mari kita jelajahi**Apa itu tipe data JavaScript**dan lihat contoh bagaimana Anda bisa menggunakannya dalam kode sumber secara efisien. Oleh karena itu, melalui panduan pemula ini secara menyeluruh sehingga Anda dapat memiliki pemahaman yang baik tentang**tipe data JavaScript**.
Kami meliput poin berikut:
  * [Apa itu tipe data?][2]
  * [Apa itu tipe data JavaScript?][3]

## Jenis data dijelaskan | Apa itu tipe data?   {#What-is-a-data-tipe}
Tipe data adalah tentang memberi tahu kompiler cara menafsirkan atau mengkompilasi data. Penggunaan tipe data sangat penting dan harus digunakan dengan bijak. Dengan kata -kata sederhana, ini tentang format data seperti angka, string, boolean dan banyak lagi. Namun, ada dua kategori tipe data tipe data primitif dan tipe data non-primitif. Ada delapan tipe data primitif yang akan kita lalui di bagian selanjutnya.

## Apa tipe data JavaScript?   {#Whate-javascript-data-types}
Faktanya, JavaScript adalah bahasa yang diketik secara longgar yang berarti Anda tidak harus mendefinisikan jenis variabel secara eksplisit. Anda dapat menetapkan nilai apa pun ke variabel dan variabel itu akan menyimpan nilai itu seperti string, bigint, boolean, atau lebih.

{{< figure align=center src="images/web-development.png" alt="Panduan Pemula Javascript">}}


#### tipe data primitif
Jenis data primitif adalah yang tidak dapat diubah dan tidak dapat diubah setelah pembuatan dan inisialisasi. Namun, Anda dapat menilai kembali nilai baru tetapi tidak dapat bermutasi nilai yang ada.
Misalnya:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
Dalam contoh di atas, string adalah tipe data primitif dan nilai lama digantikan oleh nilai baru tetapi perubahan nilai yang ada tidak tercermin. Jadi, kita bisa melihatnya masih "nama saya diubah" bukan "nama saya diubah";

#### tipe data non-primitif
Jenis data non-primitif dapat berubah, dengan kata-kata sederhana berlawanan dengan tipe data primitif.
Misalnya:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
Selain itu, tipe data primitif dibandingkan dengan nilai, dan tipe data non-primitif selalu dibandingkan dengan referensi.
Misalnya:
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
Sekarang, mari kita telusuri tipe data satu per satu. Ada 6 tipe data primitif dan 1 tipe data non-primitif.
**Jenis data primitif meliputi:**
***String**: Jenis data ini mewakili data tekstual yang terdiri dari urutan karakter yang dikelilingi oleh kutipan.
***Nomor**: Ini mewakili data desimal/non-desimal, terutama bilangan bulat atau float.
***Boolean**: Representasi nilai -nilai logis Benar atau salah.
***Simbol**: Simbol digunakan untuk memegang nilai unik.
***Tidak ditentukan**: Variabel tanpa nilai atau variabel yang tidak diinisialisasi.
***NULL**: Tidak adanya nilai apa pun dianggap nol.
**Jenis data non-primitif meliputi:**
**Objek**: Ini digunakan untuk menyimpan pengumpulan data yang terdiri dari pasangan nilai kunci.

## Kesimpulan
Ini adalah akhir dari panduan pemula**javascript**ini. Kami telah melewati**Apa tipe data JavaScript**? Selain itu, kami telah menjelajahi apa itu tipe data secara singkat. Anda harus memiliki pemahaman yang lebih baik tentang tipe data non-primitif dan**primitif**dalam JavaScript. Posting blog ini akan sangat membantu Anda jika Anda ingin melakukan persiapan untuk wawancara kerja.
Akhirnya, [containerize.com][1] terus menulis posting blog tentang produk dan topik open-source lebih lanjut. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][4], [LinkedIn][5], dan [Twitter][6].

## Berikan pertanyaan
Anda dapat memberi tahu kami tentang pertanyaan atau pertanyaan Anda di [forum] kami [7].

## FAQ
**Apa tipe data 8 JavaScript?**
Silakan kunjungi [tautan][3] ini untuk mengetahui tipe data 8 JavaScript.

## Lihat juga
  * [Kerangka JavaScript Populer Gratis & Terbuka][8]
  * [Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka][9]
  * [Top 10 Teknologi Open Source Untuk Belajar di 2022][10]

  
[1]: https://www.containerize.com/
[2]: #What-is-a-data-type
[3]: #What-are-JavaScript-Data-Types
[4]: https://web.facebook.com/containerize
[5]: https://www.linkedin.com/company/containerize/
[6]: https://twitter.com/containerize_co
[7]: https://forum.containerize.com/
[8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
[9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
