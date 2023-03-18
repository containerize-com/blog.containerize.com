---
title: "Perangkat Lunak Manajemen Kode Sumber | Apa itu git?" 
seoTitle: "Perangkat Lunak Manajemen Kode Sumber | Apa itu git?" 
description: "Apa itu git? Git adalah perangkat lunak manajemen kode sumber gratis yang memungkinkan Anda untuk merekam, meninjau perubahan pada file sumber Anda dan mengelola proyek secara efisien." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "Dalam artikel ini, kami akan mengeksplorasi apa itu git & amp; Bagaimana git bekerja? Git adalah sistem kontrol versi yang dirancang untuk mengelola kode sumber, melacak & amp; versi log." 
url: /id/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## Dalam artikel ini, kita akan mengeksplorasi apa itu git & bagaimana git bekerja? Git adalah sistem kontrol versi yang dirancang untuk mengelola kode sumber, melacak & log versi.

{{< figure align=center src="images/version-control-banner.png" alt="Perangkat Lunak Manajemen Kode Sumber">}}


## Ringkasan
Bayangkan Anda sebagai pengembang perangkat lunak yang mengerjakan suatu proyek. Anda memiliki lebih dari satu orang yang mengerjakannya. Dan, ada satu file yang berisi kode sumber. Karena mereka semua membuat perubahan pada kode, mereka akan memiliki versi file yang berbeda setiap kali mereka melakukan perubahan. Jadi, sekarang bagaimana kita mengelola versi yang berbeda dari file yang sama? Di situlah perangkat lunak manajemen kode sumber masuk. Ini membantu Anda mengelola dan menggabungkan versi yang berbeda dari file yang sama. Dan bahkan membiarkan Anda melacak kembali sejarah perubahan. Dan Anda selalu dapat yakin siapa yang membuat perubahan pada file dan apa saja perubahan itu.
Dalam artikel ini, kita akan belajar tentang sistem kontrol versi git. Bagaimana Anda dapat menggunakannya untuk mengelola file kode sumber pengembangan perangkat lunak Anda atau file lainnya. Jadi mari kita mulai.
  *** [Apa itu Sistem Kontrol Versi] [1] **
  *** [apa itu git] [2] **
  *** [Bagaimana cara kerja git] [3] **
  *** [instal git] [4] **
  *** [Menyiapkan repositori] [5] **
  *** [simpan perubahan ke repositori] [6] **
  *** [periksa status repositori] [7] **
  *** [Kembalikan atau Ubah Perubahan] [8] **
  *** [Kesimpulan] [9] **

## Apa itu Sistem Kontrol Versi {#Versi-Control}
Kontrol Versi adalah sistem yang mencatat perubahan pada file atau set file dari waktu ke waktu sehingga Anda dapat mengingat versi tertentu nanti. Jika Anda adalah pengembang perangkat lunak dan ingin menyimpan versi file kode sumber, perangkat lunak manajemen kode sumber adalah hal yang sangat berguna bagi Anda. Ini memungkinkan Anda untuk mengembalikan file yang dipilih kembali ke keadaan sebelumnya, mengembalikan seluruh proyek kembali ke keadaan sebelumnya, membandingkan perubahan dari waktu ke waktu, lihat siapa yang terakhir memodifikasi sesuatu yang mungkin menyebabkan masalah, siapa yang memperkenalkan masalah dan kapan, dan banyak lagi. Menggunakan kontrol versi berarti Anda tidak perlu khawatir kehilangan pekerjaan Anda.

## Apa itu git {#git}
GIT adalah sistem kontrol versi sumber terbuka dan open-source yang dirancang untuk menangani semuanya dari proyek kecil hingga sangat besar dengan kecepatan dan efisiensi. Tidak seperti sistem kontrol versi terpusat yang lebih lama seperti SVN dan CVS, kontrol versi Git didistribusikan. Setiap pengembang memiliki riwayat lengkap repositori kode mereka secara lokal. Padahal, itu membuat klon awal agak lambat. Tapi, setelah itu, semua komitmen dan operasi lainnya sangat cepat. Git memungkinkan Anda untuk memiliki beberapa cabang lokal yang sepenuhnya independen satu sama lain.

## Bagaimana cara kerja git {#how}
Menggunakan git Anda dapat membuat perubahan pada repositori lokal Anda dan mendorongnya ke alat hosting. Atau Anda dapat menarik perubahan orang lain dari alat hosting ke mesin lokal Anda. Berikut ini adalah tinjauan dasar tentang cara kerja Sumber Code Management Software (GIT).
  1. Buat "repositori" dengan alat hosting apa pun (seperti github, gitlab, atau bitbucket)
  2. Kloning repositori ke mesin lokal Anda
  3. Tambahkan file ke repositori lokal Anda
  4. Simpan (komit) perubahan pada repositori lokal Anda
  5. “Dorong” perubahan Anda pada cabang master Anda pada hosting jarak jauh
  6. Lakukan perubahan pada file Anda dengan alat hosting git dan komit
  7. “Tarik” perubahan pada mesin lokal Anda
  8. Buat "Cabang" (Versi), buat perubahan, lakukan perubahan
  9. Buka "Permintaan Tarik" (mengusulkan perubahan pada cabang master)
 10. “Gabungkan” Cabang Anda ke Cabang Master

## Instal git {#install}
Ada berbagai metode yang tersedia untuk menginstal git di komputer Anda. Anda dapat menginstalnya sebagai paket atau melalui penginstal lain, atau mengunduh kode sumber dan mengkompilasinya sendiri.

### Menginstal di Linux
Jika Anda ingin menginstal Alat Git Basic di Linux melalui installer biner, Anda umumnya dapat melakukannya melalui alat manajemen paket yang disertakan dengan distribusi Anda. Untuk Fedora (atau distribusi berbasis RPM yang terkait erat, seperti RHEL atau CentOS), Anda dapat menggunakan "DNF"
```
$ sudo dnf install git-all
```
Jika Anda berada di distribusi berbasis Debian, seperti Ubuntu, cobalah "Apt"
```
$ sudo apt install git-all
```

### Menginstal MacOS
Ada beberapa cara untuk menginstal git di Mac. Yang termudah mungkin untuk menginstal alat baris perintah XCODE. Pada mavericks (10.9) atau di atas Anda dapat melakukan ini hanya dengan mencoba menjalankan ** git ** dari terminal pertama kali.
```
$ git --version
```
Jika Anda belum menginstalnya, itu akan meminta Anda untuk menginstalnya.

## Mengatur repositori {#init}
Repositori Git adalah penyimpanan virtual untuk file kode Anda. Ini memungkinkan Anda untuk menyimpan berbagai versi kode Anda, yang dapat Anda akses saat dibutuhkan.
Untuk membuat repo baru, Anda akan menggunakan perintah ** git init **. Git Init adalah perintah satu kali yang Anda gunakan selama pengaturan awal repo baru. Melaksanakan perintah ini akan membuat subdirektori .git baru di direktori kerja Anda saat ini. Ini juga akan membuat cabang ** master ** baru.

{{< figure align=center src="images/git-init-2.gif" alt="Apa itu git">}}


## Simpan perubahan ke repositori {#Commit}
Sekarang Anda memiliki repositori yang diinisialisasi, Anda dapat melakukan perubahan versi file padanya.

{{< figure align=center src="images/git-add-commit-1.gif" alt="Git Commit">}}


## Periksa status repositori {#status}
Perintah ** git status ** menampilkan keadaan direktori kerja dan area pementasan. Ini memungkinkan Anda melihat perubahan mana yang telah dipentaskan, mana yang belum, dan file mana yang tidak dilacak oleh Sumber Code Management Software (GIT). Output status tidak menunjukkan informasi apa pun tentang riwayat proyek yang dilakukan. Untuk ini, Anda perlu menggunakan ** git log **.

{{< figure align=center src="images/git-status-2.gif" alt="Perangkat Lunak Manajemen Kode Sumber">}}

Log git akan menunjukkan kepada Anda output berikut
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## Kembalikan perubahan Anda {#revert}
Anda dapat menggunakan perintah git revert untuk membatalkan perubahan yang sudah Anda lakukan dalam repo Anda. Pertama, gunakan perintah "git log" untuk mendapatkan daftar komit
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
Kemudian, putuskan komit mana yang ingin Anda kembalikan. Dan, gunakan perintah git revert seperti di bawah ini
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
Seperti yang Anda lihat, Git Revert menciptakan komitmen baru yang membatalkan perubahan yang dibuat dalam "komit kedua".

## Kesimpulan
Sekarang setelah Anda membaca seluruh artikel di mana kami membahas apa itu git & bagaimana git bekerja, Anda harus menyadari perangkat lunak manajemen kode sumber. Apa tujuannya dan mengapa Anda membutuhkannya. Kami mengeksplorasi bagaimana git dapat membantu Anda mengelola kode sumber proyek Anda. Dan, kami juga belajar tentang cara menggunakan perintah git yang berbeda untuk menginisialisasi dan merepositori, menyimpan perubahan Anda, dan cara membatalkan perubahan. Dalam tutorial mendatang kami, kami akan menjelajahi lebih banyak git dan akan membagikan bagaimana kami dapat menggunakan perintah yang berbeda untuk mengelola kode Anda dengan lebih baik.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  *[** Otomatis alur kerja pengembangan perangkat lunak dengan tindakan github **] [10]
  *** [Cara Mengatur Pipa Penempatan Berkelanjutan dengan Gitlab CI/CD] [11] **
  *** [Memahami dan mempelajari cabang dan tarik permintaan di git] [12] **
  *** [Top 5 Sistem Kontrol Versi Sumber Terbuka di 2021] [13] **
[1]: #version-control
[2]: #git
[3]: #how
[4]: #install
[5]: #init
[6]: #commit
[7]: #status
[8]: #revert
[9]: #conclusion
[10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
