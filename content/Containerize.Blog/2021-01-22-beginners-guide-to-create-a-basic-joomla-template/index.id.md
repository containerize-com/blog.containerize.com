---
title: "Panduan Pemula Untuk Membuat Template Joomla Dasar" 
seoTitle: "Panduan Pemula Untuk Membuat Template Joomla Dasar" 
description: "Joomla adalah sistem manajemen konten open-source yang populer. Dalam tutorial ini, kami akan menjelaskan langkah demi langkah cara membuat template Joomla." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla adalah salah satu sistem manajemen konten open-source yang paling populer. Tutorial ini akan memandu Anda melalui langkah -langkah yang diperlukan untuk membuat template Joomla dari awal." 
url: /id/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla adalah salah satu sistem manajemen konten open-source paling populer. Tutorial ini akan memandu Anda melalui langkah -langkah yang diperlukan untuk membuat template Joomla dari awal.

{{< figure align=center src="images/joomla-templates-2.png" alt="Template Joomla Dasar">}}

Di era digital ini, sistem manajemen konten adalah kebutuhan dasar bisnis apa pun untuk semua kebutuhan pembuatan konten mereka. Dan, ada sejumlah open-source serta perangkat lunak CMS berbayar yang tersedia di pasar. Kami juga telah [terdaftar][1] Beberapa perangkat lunak manajemen konten open-source teratas untuk bisnis. Joomla adalah salah satu perangkat lunak CMS open-source paling populer dan dalam tutorial ini kami akan memandu Anda melalui langkah demi langkah dan menjelaskan cara membuat template Joomla dari awal. Jadi mari kita mulai!
**Catatan: Kami berasumsi bahwa Anda memiliki versi joomla 2.5 yang diinstal** 
  ***[Struktur Direktori Pengaturan][2]** 
  ***[Buat file TemplateDetails.xml dasar][3]** 
  ***[Buat file index.php dasar][4]** 
  ***[temukan dan instal template][5]** 
  ***[paket templat][6]** 
  ***[Kesimpulan][7]** 

Struktur direktori setup ##  {#setup}
Untuk membuat template Joomla yang sangat mendasar terlebih dahulu, buat folder baru di folder Templates. Sebutkan folder apa pun yang ingin Anda sebut templat Anda, mis. “**MyNewTemplate** “.
Menggunakan Editor Teks Favorit Anda Buat file **index.php  **dan **  templatedetails.xml **. Untuk mengelola gambar dan lembar gaya Anda, buat 2 folder baru yang disebut  **gambar **  dan  **CSS ** . Di dalam folder  **CSS **  Buat file yang disebut  **template.css**  .
Struktur direktori Anda akan terlihat seperti ini

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Struktur Direktori Template Joomla">}}


## Buat file dasar templatedetails.xml   {#xml}
File **templatedetails.xml**  memegang semua metadata tentang templat Anda. Dan, file ini sangat penting tanpanya, template Anda tidak akan dilihat oleh Joomla!.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Isi Templateetails.xml cukup jelas. Anda bisa menyalin konten yang mengubah bit yang diperlukan.
Biarkan posisi apa adanya - ini adalah set umum sehingga Anda akan dapat dengan mudah beralih dari templat standar.

## Buat file index.php dasar   {#php}
Index.php menjadi file bootstrap utama dari setiap halaman yang Joomla! memberikan. Halaman ini akan menunjukkan kode Bare-Bones yang siap untuk Anda potong dan tempel ke dalam desain Anda sendiri.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## temukan dan instal template   {#install}
Pertama -tama Anda harus memberi tahu Joomla! bahwa Anda telah membuat templat baru. Fitur ini disebut Discover Extensions dan dapat diakses melalui
```
Extensions -> Extension Manager -> Discover
```
Klik Temukan tombol untuk menemukan template Anda, lalu pilih dan klik Instal untuk menginstalnya. Sekarang template Anda harus muncul di Template Manager (Styles), dapat diakses melalui
```
Extensions -> Template Manager
```

## Paket template   {#packge}
Direktori yang tidak di -zip dengan beberapa file bukanlah metode yang baik untuk distribusi. Jadi, demi distribusi, kita harus membuat paket templat kita. Paket dapat dalam format zip (dengan ekstensi .zip).
Jika template Anda ada di direktori myTemplate/ maka untuk membuat paket Anda dapat terhubung ke direktori itu dan menggunakan perintah seperti:
```
zip -r ..\mytemplate.zip .
```

## kesimpulan   {#conclusion}
Dalam artikel ini, kami belajar tentang Template Joomla. Kami melewati langkah demi langkah tentang cara membuat template Joomla. Ini hanya tutorial yang sangat mendasar untuk memulai dengan penciptaan template. Tentu saja, Anda dapat membangun template yang sangat disesuaikan dan ditingkatkan berdasarkan struktur tulang telanjang ini.

## halaman produk yang relevan
Anda mungkin menemukan tautan berikut yang relevan:
  * [Panduan Pengembangan Template Joomla untuk Pemula][8]

  
[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
