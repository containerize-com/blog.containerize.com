---
title: "Fitur Eksplorasi Manajer Rekam Medis HospitalRun" 
seoTitle: "Fitur Eksplorasi Manajer Rekam Medis HospitalRun" 
description: "Ikuti panduan ini untuk memulai dengan Medical Record Manager HospitalRun. Ini adalah open source, multibahasa dan mengotomatiskan banyak proses penting." 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "Sistem manajemen rumah sakit adalah bagian penting dari perusahaan perawatan kesehatan. HospitalRun menyediakan kontrol data, peran berbasis akses, dan manajemen pendapatan." 
url: /id/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## Sistem manajemen rumah sakit adalah bagian penting dari perusahaan perawatan kesehatan. HospitalRun menyediakan kontrol data, peran berbasis akses, dan manajemen pendapatan.

{{< figure align=center src="images/blog-banners-template-1.png" alt="Manajer Rekam Medis">}}


## Ringkasan
Open Source [Perangkat Lunak Kesehatan][1] telah mendapatkan popularitas yang sangat besar di masa lalu. Pertama, ini karena kemajuan teknologi. Kedua, Covid-19 memengaruhi industri medis dalam segala hal dan melahirkan kesempatan baru bagi komunitas open source. Sangat penting untuk menyediakan layanan perawatan kesehatan berkualitas tinggi kepada pasien ketika seluruh dunia melewati waktu yang penting. Untungnya, beberapa solusi manajemen catatan kesehatan open source tersedia yang menyediakan sentralisasi data, transparansi, keamanan, integrasi, dan banyak fitur kuat lainnya. Layanan perawatan kesehatan gratis ini menawarkan kelancaran manajemen alur kerja seperti dokter, pasien, klinik, dan anggota staf lainnya. Baru -baru ini, [containerize.com][2] telah menerbitkan beberapa artikel tentang sistem manajemen informasi rumah sakit open source yang mencakup [5 perangkat lunak catatan kesehatan open source top][3], [fitur eksplorasi solusi kesehatan medis OpenEMR][4], dan [Bagaimana Perangkat Lunak Kesehatan Online Memberdayakan Industri Kesehatan][5].
Di masa lalu, kami menulis sebuah artikel yang menjelaskan prosedur pengaturan [HospitalRun][6] di Localhost. Dalam posting blog ini, kami akan mengeksplorasi [HospitalRun][6] lebih lanjut dengan membahas poin -poin berikut.
  ***[Mengapa HospitalRun?][7]** 
  ***[Pasien dan Modul Penjadwalan][8]** 
  ***[integrasi lab dan obat -obatan][9]** 
  ***[pencitraan dan insiden][10]** 
  ***[Kesimpulan][11]** 

## Mengapa HospitalRun?   {#Mengapa}
Ada banyak alasan di balik popularitas manajer rekaman medis ini. HospitalRun adalah catatan kesehatan elektronik lengkap dan sistem informasi rumah sakit. Ini mendukung versi offline dan online. Ini memungkinkan Anda mengintegrasikan klinik dan memberikan sinkronisasi data. Selain itu, ini multibahasa, lintas platform, dan muncul dengan kemampuan hosting sendiri. Sistem catatan pasien ini menawarkan manajemen catatan pasien, penjadwalan janji temu, obat -obatan, dan manajemen resep. Ada juga ketentuan untuk menghasilkan laporan khusus yang berisi detail diagnostik lengkap. Selain itu, anggota staf medis dapat mengambil bantuan dari modul pelepasan pasien. Di atas segalanya, sistem manajemen rumah sakit ini menawarkan manajemen kasus -kasus darurat dan darurat. Ini aman, andal, dan ramah pengguna. Namun, sistem manajemen rekam medis ini sepenuhnya ditulis dalam JavaScript dan semua kode sumber tersedia di [GitHub][12] dengan dokumentasi mengenai pengembangan dan penyebaran.

## pasien dan modul penjadwalan   {#modules}
Di bagian ini, kami akan melalui dasbor sistem manajemen informasi rumah sakit ini. Setelah Anda masuk, Anda akan mendarat di dasbor HospitalRun seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="Manajer Rekam Medis">}}

Di sisi kanan atas, ada dua opsi. Pertama, pengaturan di mana pengguna dapat memilih bahasa seperti bahasa Inggris, Italia, Turki dan banyak lagi. Kedua, ada opsi untuk membuat catatan pasien baru, janji temu baru, meminta obat, meminta laboratorium, permintaan pencitraan baru, dan insiden laporan.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="Sistem Manajemen Rumah Sakit">}}

Ada beberapa opsi seperti pasien, penjadwalan, obat-obatan, laboratorium, pencitraan dan insiden di sisi kiri. Dalam modul pasien, Anda dapat menambahkan catatan pasien baru dan melihat daftar pasien yang sudah ditambahkan. Manajer rekaman medis gratis ini memungkinkan pengguna merekam catatan pasien lengkap seperti nama, alamat, kontak, jenis pasien, dan detail dasar lainnya. Dalam daftar pasien, ada bilah pencarian juga di mana pengguna dapat mencari pasien dalam daftar. Lebih lanjut, dalam modul penjadwalan, pekerja medis dapat menjadwalkan janji temu. Antarmuka modul ini ditampilkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="Sistem Manajemen Informasi Rumah Sakit">}}

Antarmuka menunjukkan janji yang dijadwalkan. Lebih lanjut, pengguna dapat menerapkan filter untuk melihat jumlah janji per hari, per minggu, dan per bulan. Ada opsi di sudut kanan atas di mana pejabat perawatan kesehatan dapat memesan janji baru. Pejabat medis dapat memasukkan rincian janji temu seperti tanggal mulai, tanggal akhir, alasan, dan banyak lagi.

## integrasi dan obat -obatan lab   {#lab}
Bagian ini menjelaskan fungsi dua modul terkemuka dari perangkat lunak perawatan kesehatan gratis ini. Modul obat memungkinkan pengguna menambahkan data terhadap obat di mana mereka dapat mengatur prioritas obat seperti rutin, mendesak, atau ASAP. Demikian pula, ada daftar permintaan obat di mana para pejabat dapat mencari berdasarkan filter.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="Sistem Manajemen Rekam Medis">}}

Di modul laboratorium, petugas perawatan kesehatan dapat meminta laboratorium dengan memasukkan informasi, kunjungan, dan jenis pasien. Seiring dengan itu, petugas kesehatan dapat menambahkan catatan tambahan. Demikian pula, ada filter dalam opsi Permintaan Lab di mana pengguna dapat melakukan fitur pencarian.

## Pencitraan dan Insiden   {#Imaging}
Pencitraan adalah tentang menciptakan representasi visual dari sesuatu dengan memindai dengan medan elektromagnetik. HospitalRun menawarkan manajemen catatan pencitraan. Selain itu, ini memungkinkan pengguna membuat permintaan pencitraan baru, dan modul ini terkait dengan modul pasien karena modul lain saling terkait satu sama lain. Demikian pula, pengguna dapat melihat daftar permintaan pencitraan. Selanjutnya, dalam modul Insiden, para pejabat dapat melaporkan insiden dengan memasukkan detailnya. Oleh karena itu, pengguna dapat melihat daftar insiden yang sudah dilaporkan. Ada representasi grafis dari insiden yang juga tersedia di yang terakhir seperti yang ditunjukkan pada gambar di bawah ini.

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="Manajemen Catatan Kesehatan">}}


## kesimpulan   {#conclusion}
Ini adalah akhir dari posting blog ini. Bahkan, sebagian besar lembaga kesehatan bergantung pada operasi manual. Ini bisa rentan sehubungan dengan keamanan data dan integritas. Namun, sistem otomatis memastikan aspek dasar dan paling penting dari operasi perawatan kesehatan rutin. Oleh karena itu, pemasangan manajer rekaman medis open-source yang baik melindungi aset Anda dari sumber yang tidak sah dan membantu Anda melakukan tugas rutin dengan mudah dan percaya diri. Perangkat lunak open source ini menyinkronkan beberapa entitas seperti dokter, pasien, klinik, laboratorium dan membuat alur kerja lebih mudah. Intinya adalah, sudah saatnya untuk mengadopsi perangkat lunak open source untuk rumah sakit atau klinik Anda untuk kudeta dengan tantangan terbaru. Anda dapat menghemat waktu dan upaya Anda dan fokus pada tugas -tugas penting yang penting.
Akhirnya, [containerize.com][2] menulis artikel tentang produk open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [Teknologi Kesehatan][1] untuk berita dan pembaruan reguler.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Openemr][13]
  * [OpenMrs][14]
  * [HospitalRun][15]
  * [Rumah Sakit Terbuka][16]
  * [Solismed][17]
  * [Perangkat Lunak Catatan Kesehatan Pasien Sumber Terbuka Top][3]
  * [Fitur Eksplorasi OpenemR Solusi Kesehatan Medis][4]
  * [Cara Mengatur Sistem EHealth Hospitalrun di LocalHost][18]
  * [Bagaimana Perangkat Lunak Kesehatan Online Memberdayakan Industri Kesehatan][5]

  
[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
