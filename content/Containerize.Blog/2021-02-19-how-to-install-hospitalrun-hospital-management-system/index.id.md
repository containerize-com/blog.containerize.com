---
title: "Cara Menginstal HospitalRun | Sistem Manajemen Rumah Sakit" 
seoTitle: "Cara Menginstal HospitalRun | Sistem Manajemen Rumah Sakit" 
description: "Artikel ini membantu Anda memasang HospitalRun di LocalHost. Mengotomatiskan proses medis menggunakan sistem manajemen rumah sakit yang berfitur kaya, open-source, gratis." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Solusi perawatan kesehatan yang diselenggarakan sendiri untuk memfasilitasi dokter dan pasien. Mari kita pelajari cara menggunakan rumah sakit gratis di localhost dengan mengikuti langkah -langkah sederhana." 
url: /id/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## Solusi perawatan kesehatan yang diselenggarakan sendiri untuk memfasilitasi dokter dan pasien. Mari kita pelajari cara menggunakan rumah sakit gratis di localhost dengan mengikuti langkah -langkah sederhana.

{{< figure align=center src="images/hospitalrun.png" alt="Sistem Manajemen Rumah Sakit">}}


## Ringkasan
Kami baru -baru ini menerbitkan posting blog tentang [bagaimana perangkat lunak layanan kesehatan online memberdayakan industri kesehatan][1] yang menggambarkan dampak sistem manajemen rumah sakit open source pada industri perawatan kesehatan. Industri perangkat lunak perawatan kesehatan global mendapatkan nilai dengan berlalunya waktu. Faktanya adalah bahwa teknologi telah mengubah setiap bidang kehidupan. Jumlah pasien dan anggota staf hilang begitu tinggi sehingga telah merepotkan untuk mengelola data yang begitu besar. Di sisi lain, ada banyak tugas yang memakan waktu yang terjadi setiap hari dan entitas perawatan kesehatan berulang kali melakukan tugas-tugas itu. Oleh karena itu, komunitas sumber open-source telah mengembangkan perangkat lunak medis open source yang datang dengan banyak modul bermanfaat untuk memenuhi kebutuhan perawatan kesehatan.
Perangkat lunak medis open-source dikembangkan untuk mengelola catatan pasien mengenai riwayat medis mereka serta ketentuan untuk manajemen rumah sakit. Selain itu, perangkat lunak layanan kesehatan open source memanfaatkan kecerdasan buatan untuk memberikan tingkat layanan lanjutan. Sebagian besar perawatan penyakit sekarang sedang ditangani oleh perangkat lunak yang tidak hanya mendiagnosis masalah tetapi juga memberikan bantuan dalam penyembuhan. Namun, ada banyak perangkat lunak yang muncul untuk rumah sakit. Dalam posting blog ini, kami akan membahas poin -poin berikut.
  *[**Apa itu HospitalRun?** ][2]
  *[**Apa saja fitur HospitalRun** ][3]
  *[**Langkah instalasi rumah sakit?** ][4]
  *[**Kesimpulan** ][5]

## Apa itu HospitalRun?   {#intro}
HospitalRun adalah sistem manajemen informasi rumah sakit open-source gratis. Solusi perawatan kesehatan gratis ini ramah lingkungan karena pengguna dapat memanfaatkan sepenuhnya perangkat lunak gratis ini bahkan jika tidak ada konektivitas internet. Ini menyediakan banyak fitur seperti manajemen pengguna, pendaftaran pasien, janji temu, sistem penagihan, sistem pelepasan pasien, dan banyak lagi. Antarmuka pengguna sistem eHealth open source ini adalah logis di mana pengguna dapat menavigasi melalui berbagai elemen dengan mudah. Selain itu, mudah diatur dan menawarkan gambar Docker di mana pengembang dapat menggunakannya menggunakan gambar Docker.
Sistem manajemen rumah sakit **ini**  menawarkan ketentuan untuk mengintegrasikan laboratorium untuk memusatkan catatan medis pasien. Selain itu, ini juga memungkinkan pengguna menyimpan catatan kunjungan pasien, obat, dan penilaian. Sistem catatan eHealth ini aman, fleksibel dan menawarkan integrasi dengan aplikasi pihak ketiga. Ada komunitas yang sangat bersemangat yang memberikan dukungan untuk HospitalRun. Selanjutnya, ada sistem pelepasan pasien yang lengkap. Perangkat lunak medis open source ini sepenuhnya ditulis dalam JavaScript. Selain itu, ada dokumentasi komprehensif yang tersedia mengenai pengembangan dan penyebaran. Faktanya, perangkat lunak medis open source ini menyediakan dasbor yang berbeda untuk berbagai departemen seperti departemen dukungan, departemen klinis, dan departemen administrasi. Semua peran ini datang dengan berbagai tingkat izin dan akses.

## Apa saja fitur HospitalRun?   {#fitur}
Di bagian ini, kami akan melalui beberapa fitur utama berikut dari sistem eHealth ini.
  ***Self-hosting** : HospitalRun hadir dengan kemampuan tuan rumah mandiri dan membutuhkan lebih sedikit upaya untuk digunakan pada server.
  ***Penjadwalan janji temu** : Sistem kesehatan ini memungkinkan pengguna menjadwalkan janji temu. Ada modul lengkap untuk janji temu yang tersedia di dasbor. Selanjutnya, pengguna dapat mencari janji dengan bantuan filter.
  ***Sistem pelepasan pasien** : Sistem manajemen rumah sakit ini memelihara catatan pasien yang telah habis.
  ***Manajemen Obat** : Sistem catatan eHealth ini memungkinkan pengguna untuk merekam data lengkap obat dari pasien tertentu.
  ***Manajemen Catatan Pasien** : Ada modul lengkap untuk manajemen catatan pasien. Pengguna dapat mencatat rincian pasien baru, menerima pasien terhadap riwayat medis lengkap mereka seperti obat, laporan dan kunjungan.
  ***Sistem penagihan yang disesuaikan** : Ada sistem penagihan yang kaya yang tersedia dalam perangkat lunak layanan kesehatan open source ini. Ini memungkinkan pengguna menghasilkan dan mengelola faktur dengan detail lengkap seperti harga laboratorium, biaya lingkungan, harga pencitraan dan dll.
  ***Catatan Medis Elektronik** : Perangkat lunak medis open source ini menyediakan semua modul yang diperlukan untuk menyimpan catatan medis dan administrasi.
  ***Fleksibel** : HospitalRun fleksibel dan cukup dapat diperluas sehingga pengembang dapat memperluas fungsinya untuk memenuhi fungsionalitas yang dibutuhkan.

## Langkah -langkah instalasi HospitalRun?   {#Langkah}
Bagian posting blog ini menjelaskan langkah -langkah instalasi HospitalRun.
Sebelum kita mulai, pertama-tama instal prasyarat berikut:
  * [Docker][6]
  * [Docker-Compose][7]
Setelah prasyarat diinstal, unduh kode sumber dari [tautan] ini [8].
Setelah itu, buka terminal dan jalankan perintah berikut:
CD generik
server CD
Sekarang, ubah kata sandi pada baris 8,9 dari \ `conf/initcouch.sh \` dan kata sandi pada baris 7 dari _config-demo.js_.
Kemudian, jalankan perintah berikut untuk membuat build dan menjalankan aplikasi:
_docker-compose build && docker-compose up_
Setelah itu, itu akan memutar wadah Docker seperti yang ditunjukkan pada gambar di bawah ini:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="Sistem Manajemen Rumah Sakit">}}

Akhirnya, Anda dapat mengakses solusi perawatan kesehatan ini di browser di http: // localhost/#/login. Ini akan menampilkan layar login berikut.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="Sistem Manajemen Rumah Sakit">}}


## kesimpulan   {#conclusion}
Ini adalah akhir dari artikel tutorial ini. Sistem catatan pasien ini sangat membantu mengotomatisasi **layanan kesehatan** . Sistem manajemen rumah sakit open source modern dilengkapi dengan alat analitik data yang membantu petugas kesehatan untuk mengambil tindakan yang diperlukan untuk fasilitas perawatan kesehatan yang lebih baik. Posting blog ini akan sangat membantu Anda jika Anda serius ingin menggunakan sistem eHealth untuk rumah sakit/klinik Anda. Solusi open-source ini hemat biaya karena terintegrasi dengan laboratorium dan klinik lain dan juga meminimalkan dokumen dengan mengkomputerisasi setiap proses. Solusi kesehatan open source memungkinkan pengguna untuk memiliki visual dari semua operasi perawatan kesehatan seperti obat pasien, pelepasan, laporan, dan manajemen penagihan. Selain itu, Anda dapat fokus pada tugas -tugas penting lainnya seperti perencanaan sumber daya dan evaluasi risiko. Namun, ada banyak perangkat lunak tingkat perusahaan lainnya untuk rumah sakit yang disebutkan di bagian "Jelajahi" di bawah ini.
Pada akhirnya, ****[containerize.com][9] ****  dimaksudkan untuk menulis pada produk open source lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [Teknologi Kesehatan][10] ini untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Openemr][11]
  * [OpenMrs][12]
  * [HospitalRun][13]
  * [Rumah Sakit Terbuka][14]
  * [Solismed][15]
  * [Hal -hal yang harus ditinjau sebelum memilih perangkat lunak sumber terbuka pada tahun 2021][16]
  * [Fitur Eksplorasi Medical Record Manager HospitalRun][17]
  * [Perangkat lunak catatan kesehatan pasien open source teratas][18]
  * [Fitur Eksplorasi OpenemR Solusi Kesehatan Medis][19]
  * [Cara Mengatur Sistem EHealth Hospitalrun di localhost][20]
  * [Bagaimana Perangkat Lunak Kesehatan Online Memberdayakan Industri Kesehatan][1]

  
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/id/how-to-install-hospitalrun-hospital-management-system/
