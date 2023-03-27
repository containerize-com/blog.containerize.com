---
title: "Memahami dan mempelajari cabang dan menarik permintaan di git" 
seoTitle: "Memahami dan mempelajari cabang dan menarik permintaan di git" 
description: "Git adalah salah satu sistem kontrol versi paling populer. Dalam articl ini akan memahami cara menggunakan cabang git dan menarik permintaan." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "Git Branch adalah komponen mendasar dari sistem kontrol versi Git. Kami akan mengeksplorasi berbagai model percabangan dalam tutorial ini" 
url: /id/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## Git Branch adalah komponen mendasar dari sistem kontrol versi Git. Kami akan mengeksplorasi berbagai model percabangan dalam tutorial ini

{{< figure align=center src="images/git-branches-pull-requests.png" alt="Permintaan tarik git Cabang">}}

Dalam [artikel terakhir][1] kami, kami belajar tentang dasar -dasar sistem kontrol GIT dan versi. Kami melewati langkah demi langkah dan belajar cara mengatur repositori git. Kami juga belajar cara menambahkan perubahan ke cabang dan mengembalikannya jika Anda ingin membatalkan perubahan Anda. Sekarang kami memahami dasar -dasar sistem kontrol versi, khususnya, git. Jadi, dalam posting blog ini, kami akan melanjutkan untuk membahas cara menggunakan cabang git dan menarik permintaan. Kami akan belajar tentang alur kerja yang berbeda. Jadi, mari kita mulai!
* **[apa itu cabang git][2]** 
* **[buat / ubah cabang git][3]** 
* **[Apa itu permintaan tarik][4]** 
* **[model percabangan git populer][5]** 
* [ **Kesimpulan** ][6]

## Apa itu cabang git {#branch}


{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="Cabang git">}}

Mari kita bicara tentang cabang dan mengapa kita membutuhkan cabang dan apa strategi percabangan yang dapat kita gunakan untuk bekerja secara efisien dengan kode kita. Seperti namanya, cabang****mewakili garis pengembangan independen dari root.
Saat Anda membuat repositori, Anda pada dasarnya membuat cabang juga, yang dapat kami sebut cabang master (atau default). Kami dapat melakukan perubahan pada cabang utama kami. Tetapi jika Anda perlu mengerjakan suatu fitur dan tidak ingin memisahkan kode Anda dari cabang master. Jadi, di situlah cabang membantu Anda. Mereka membiarkan Anda bercabang dan kemudian bergabung nanti.

## Buat / ubah cabang git {#create}

```
git branch
```
Perintah memungkinkan Anda membuat, mendaftar, mengganti nama, dan menghapus cabang. Itu tidak membiarkan Anda beralih di antara cabang, untuk ini, kami harus menggunakan perintah checkout git. Atau jika Anda ingin menggabungkan perubahan Anda kembali ke cabang maka Anda harus menggunakan perintah **git gabungan** .
Penting untuk dipahami bahwa cabang hanyalah petunjuk untuk berkomitmen. Saat Anda membuat cabang, yang perlu dilakukan Git adalah membuat pointer baru, itu tidak mengubah repositori dengan cara lain.
Gunakan perintah berikut untuk membuat cabang
```
git branch <branch-name>
```
Setelah Anda selesai bekerja di cabang dan menggabungkannya ke basis kode utama, Anda bebas untuk menghapus cabang tanpa kehilangan riwayat apa pun menggunakan perintah berikut
```
git branch -d <branch-name>
```

## Apa itu permintaan tarik {#pull}

Permintaan tarik adalah cara untuk mengirimkan kontribusi ke proyek perangkat lunak menggunakan sistem kontrol versi seperti GIT. Pengembang menggunakan permintaan tarik untuk mengusulkan perubahan pada basis kode. Setelah permintaan tarik dibuka, Anda dapat mendiskusikan dan meninjau perubahan potensial dengan kolaborator dan menambahkan komit tindak lanjut sebelum perubahan Anda digabungkan ke dalam cabang dasar.
Ketika seorang pengembang membuka permintaan tarik, yang dia lakukan hanyalah meminta pengembang lain, menarik cabang dari repositori ke dalam repositori mereka. Ini berarti bahwa ia perlu memberikan 4 nilai input untuk membuat permintaan tarik: repositori sumber, cabang sumber, repositori tujuan, dan cabang tujuan.

## Model percabangan populer {#model}

Ada sejumlah alur kerja percabangan yang digunakan oleh komunitas pengembang di seluruh dunia. Tapi, kita akan membahas tiga model percabangan paling populer satu per satu

### GIT Flow
GitFlow Workflow adalah alur kerja Git yang membantu pengembangan perangkat lunak berkelanjutan dan menerapkan praktik DevOps. Aliran Git adalah alur kerja yang paling dikenal dalam daftar ini. Itu dibuat oleh [Vincent Driessen pada 2010][7] dan didasarkan pada dua cabang utama dengan masa hidup yang tak terbatas, bersama dengan cabang pendukung lainnya seperti fitur-\*, perbaikan panas-\* yang kemudian bergabung ke dalam cabang pengembangan sebagai individual Barang selesai.
* **Master** - Cabang ini berisi kode produksi. Semua kode pengembangan digabungkan ke dalam cabang master setelah siap untuk didorong ke produksi.
* **Kembangkan** -Cabang ini berisi kode pra-produksi. Ketika fitur selesai maka mereka digabungkan menjadi berkembang.
Gitflow sangat cocok untuk proyek -proyek yang memiliki siklus rilis yang dijadwalkan. Padahal, sejarah git menjadi tidak dapat dibaca.

### Github Flow
Aliran GitHub adalah alur kerja yang ringan. Itu dibuat oleh [GitHub][8] pada tahun 2011 dan terutama berfokus pada model Agile, di mana Anda tidak menunggu siklus rilis. Sebaliknya, Anda mendorong perubahan pada produksi setiap hari karena fitur selesai.
Aliran GitHub mengikuti prinsipal berikut:
  * Apa pun di cabang "Master" dapat digunakan.
  * Untuk mengerjakan sesuatu yang baru, buat cabang master yang terpisah dengan beberapa nama deskripsi mis. "Image-uploading"
  * Berkomitmen untuk cabang itu secara lokal dan secara teratur mendorong pekerjaan Anda ke cabang yang disebut sama di server.
  * Saat Anda membutuhkan umpan balik atau bantuan, atau Anda pikir cabang siap untuk bergabung, buka [tarik permintaan][4]
  * Setelah ditinjau dan ditandatangani pada fitur, Anda dapat menggabungkannya ke dalam master
  * Setelah digabungkan dan didorong ke 'master', itu dapat digunakan untuk produksi.

### Gitlab Flow
Gitlab Flow adalah alur kerja yang dibuat oleh GitLab pada tahun 2014. Aliran GitLab adalah alternatif yang lebih sederhana untuk GitFlow dan menggabungkan pengembangan yang digerakkan oleh fitur dan cabang fitur dengan pelacakan masalah. Perbedaan utama antara aliran gitlab dan aliran gitub adalah penggunaan cabang lingkungan.
Pengembang membuat **mengembangkan** cabang dan menjadikannya default, sementara aliran GitLab bekerja dengan cabang 'utama' segera. Aliran GitLab menggabungkan beberapa cabang pra-produksi. Dan, itu dapat digunakan untuk menguji barang -barang di tingkat yang berbeda. mis. Dari cabang uji hingga penerimaan dan kemudian dari penerimaan ke produksi.

## Kesimpulan {#conclusion}

Dalam artikel ini, kami belajar tentang cabang git dan permintaan tarik. Kami mempelajari pentingnya permintaan tarik dan bagaimana mereka dapat digunakan dalam berbagai alur kerja Git. Kami juga menjelajahi berbagai model percabangan git secara singkat.



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
