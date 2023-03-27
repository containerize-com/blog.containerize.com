---
title: "Tutorial Tindakan GitHub | Otomatiskan alur kerja pertama Anda" 
seoTitle: "Tutorial Tindakan GitHub | Otomatiskan alur kerja pertama Anda" 
description: "Ikuti tutorial Tindakan GitHub ini untuk mengeksplorasi bahwa bagaimana kita dapat menggunakan tindakan GitHub untuk mengotomatisasi & menjalankan alur kerja pengembangan perangkat lunak kami dari repo kami." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub telah memperkenalkan tindakan GitHub yang memungkinkan Anda untuk mengatur integrasi kontinu & amp; Penerapan kontinu menggunakan file konfigurasi tepat di repo github Anda." 
url: /id/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub telah memperkenalkan tindakan github yang memungkinkan Anda untuk mengatur integrasi kontinu & penyebaran berkelanjutan menggunakan file konfigurasi tepat di repo github Anda.

{{< figure align=center src="images/github-actions-workflows.png" alt="Tutorial Tindakan GitHub">}}


## Ringkasan
Salah satu cara terbaik untuk meningkatkan produktivitas dalam proyek perangkat lunak adalah dengan mengotomatisasi apa pun manual atau berulang. Dan Anda mungkin terkejut dengan betapa mudahnya otomatisasi untuk diimplementasikan saat Anda menggunakan alat yang luar biasa seperti **Tindakan GitHub** . Sejak beberapa artikel terakhir, saya telah menulis tentang [git][1], [kontrol versi][1], dan [otomatisasi alur kerja pengembangan perangkat lunak][2], dan tentang [integrasi berkelanjutan dan pengiriman berkelanjutan][3 ]. Jadi semoga sekarang, Anda sangat menyadari repositori dan cara menggunakannya.
Di Tutorial Tindakan GitHub **hari ini** , kami akan menjelajahi tindakan GitHub, dan bagaimana Anda dapat menggunakannya untuk otomatisasi aplikasi, kustomisasi, dan untuk menjalankan alur kerja pengembangan perangkat lunak Anda tepat di repositori Anda. Jadi, mari kita mulai
* **[Tinjau alur kerja CI/CD][4]** 
* **[Tindakan gitub apa][5]** 
* **[Memahami sintaks YAML][6]** 
* **[Membuat alur kerja pertama Anda][7]** 
* **[Kesimpulan][8]** 

## Alur kerja CI/CD {#cicd}

CI/CD adalah metode penyebaran yang sering dari proyek pengembangan perangkat lunak Anda ke pengguna akhir dalam berbagai tahap dengan bantuan otomatisasi. **Integrasi Berkelanjutan & Penyebaran Berkelanjutan** lebih merupakan filosofi dan salah satu praktik terbaik untuk diterapkan oleh tim DevOps, untuk memberikan perubahan kode lebih sering dan andal.
**Integrasi Berkelanjutan** adalah serangkaian praktik yang mendorong tim pengembangan untuk memeriksa kode ke repositori kontrol versi sering. Dan, untuk setiap dorongan ke repositori, Anda dapat membuat satu set skrip untuk membangun dan menguji aplikasi Anda secara otomatis. Script ini membantu mengurangi kemungkinan Anda memperkenalkan kesalahan dalam aplikasi Anda.
**Penyebaran berkelanjutan** adalah selangkah lebih maju dalam alur kerja CI/CD Anda. Ini tidak hanya membangun dan menguji aplikasi Anda setiap kali perubahan kode didorong ke basis kode, tetapi aplikasi ini juga digunakan terus menerus ke server Anda.

## Apa tindakan gitub {#github-actions}

Di bagian tutorial Tindakan GitHub ini, kita akan mengetahui apa itu **Tindakan GitHub** . Namun, tindakan GitHub adalah API untuk sebab dan akibat pada GitHub. Mudah untuk mengotomatiskan semua alur kerja perangkat lunak Anda, sekarang dengan CI/CD. Anda dapat merancang alur kerja apa pun, berdasarkan peristiwa apa pun, mis. (Dorong ke cabang, permintaan tarik, dll), sementara GitHub mengelola eksekusi. Namun, Anda tidak perlu menulis tindakan sendiri. GitHub memiliki pasar bawaan di mana orang dapat menemukan tindakan yang dibuat oleh orang lain, dan menggunakannya kembali jika sesuai dengan kebutuhan mereka. Tindakan GitHub mendukung Node.js, Python, Java, Ruby, PHP, Go, Rust, .net, dan banyak lagi. Membangun, menguji, dan menggunakan aplikasi dalam bahasa pilihan Anda.

## Sintaks YAML {#yaml}

Pertama -tama mari kita terbiasa dengan sintaksis dan terminologi dari tindakan **github** .
* **Alur kerja:** Karena tindakan GitHub menyediakan fasilitas untuk membangun kemampuan end-to-end**Integrasi Berkelanjutan & Penempatan Berkelanjutan** Kemampuan, istilah ini mengacu pada titik itu ketika aliran mulai dieksekusi oleh alat CI.
* **Pekerjaan** : Istilah ini mengacu pada semua tugas dalam satu alur kerja. Alur kerja berisi lebih dari satu pekerjaan dan diperlukan bagi mereka semua untuk menyelesaikan eksekusi mereka untuk mencegah kegagalan.
* **Langkah:**  Untuk pekerjaan untuk menyelesaikan eksekusi, ia harus menyelesaikan semua langkah yang tertanam di dalamnya.
* **Tindakan:**  Tindakan adalah subset utama dari langkah dan subset alur kerja terkecil. Setiap langkah terdiri dari banyak tindakan yang harus dieksekusi dengan sukses.
Seperti yang Anda lihat alur kerja, pekerjaan, langkah, dan tindakan saling bergantung, dan eksekusi yang berhasil dari segala sesuatu diperlukan untuk keberhasilan penyelesaian pipa CI/CD.

## Buat alur kerja {#workflow}

Dalam proyek pengembangan perangkat lunak, salah satu masalah yang dihadapi tim pengembangan adalah format kode sumber dan penegakan praktik terbaik. Masalah ini lebih jelas untuk tim yang lebih besar. Karena mereka melibatkan lebih banyak pengembang dan semua orang memiliki gaya menulis kode mereka sendiri. Jadi penggunaan paket linter sangat umum di seluruh tim. Tapi sekarang dengan **tindakan github** , Anda benar -benar dapat menegakkan linter setiap kali seseorang mendorong kode ke repo github.
Dalam tutorial Tindakan GitHub ini, Anda akan menambahkan alur kerja yang berbaris banyak bahasa pengkodean menggunakan tindakan [Github Super-Linter][9]. Alur kerja menggunakan Super-Linter untuk memvalidasi kode sumber Anda setiap kali komit baru didorong ke repositori Anda.
Dari repositori Anda di github, buat file baru di direktori**.
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
Untuk menjalankan alur kerja Anda, melakukan dan mendorong perubahan pada repositori GitHub Anda. Acara dorong ini akan memicu alur kerja Superlincter. Dan, sekarang Anda dapat melihat hasil alur kerja Anda dengan masuk ke tab Action

{{< figure align=center src="images/actions-tab.png" alt="Tutorial Tindakan GitHub">}}

Di bilah sisi kiri, klik alur kerja yang ingin Anda lihat.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="Alur kerja Tindakan GitHub">}}

Alur kerja super-linter yang baru saja Anda tambahkan setiap kali kode kali didorong ke repositori Anda untuk membantu Anda menemukan masalah dalam kode Anda. Repositori Anda dapat memiliki beberapa alur kerja yang memicu pekerjaan yang berbeda berdasarkan berbagai peristiwa. Tindakan GitHub dapat membantu Anda mengotomatiskan hampir setiap aspek dari proses pengembangan aplikasi Anda. Ini hanya pengantar dasar untuk tindakan GitHub. Ada banyak [sumber daya][10] yang tersedia untuk pengetahuan mendalam tentang tindakan GitHub, yang dapat Anda gunakan.

## Kesimpulan {#conclusion}

Dalam tutorial Tindakan GitHub **ini**, kami telah belajar tentang **Integrasi Berkelanjutan & Penyebaran Berkelanjutan** dan **Apa itu Tindakan GitHub** . Dan, kami juga menjelajahi bagaimana kami dapat menggunakan**Tindakan GitHub** untuk membangun alur kerja CI/CD. Kami menggunakan alur kerja super-linter sederhana dari pasar Github Action, untuk mengetahui ketidakkonsistenan dalam basis kode kami. Dalam artikel yang akan datang, kami akan mengeksplorasi tindakan GitHub secara lebih mendalam. Selain itu, Anda dapat menemukan posting blog lain yang terkait dengan sistem kontrol versi****yang disebutkan di bagian "Jelajahi" di bawah ini.
Akhirnya, [containerize.com][11] terus menulis posting blog tentang produk dan topik open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [Software Kontrol Versi][12] untuk pembaruan rutin. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][13], [LinkedIn][14], dan [Twitter][15].

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Gitlab Continuous Deployment | Bagaimana cara kerjanya?][16]
  * [Memahami dan mempelajari cabang dan tarik permintaan di git][2]
  * [Perangkat Lunak Manajemen Kode Sumber | Apa itu git?][17]
  * [Top 5 Sistem Kontrol Versi Sumber Terbuka di 2021][18]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
