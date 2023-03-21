---
title: "Cara Mengembangkan Plugin Osticket | Ini membantu perangkat lunak" 
seoTitle: "Cara Mengembangkan Plugin Osticket | Ini membantu perangkat lunak" 
description: "Ikuti tutorial ini untuk mempelajari cara mengembangkan plugin Osticket. Perangkat lunak TI ini membantu mengelola komunikasi pelanggan dan mengotomatiskan resolusi masalah." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Buat plugin Osticket untuk menambahkan fitur ke dalam instalasi osticket Anda. Sistem tiket open-source ini membantu bisnis untuk menangani pelanggan secara efisien." 
url: /id/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Buat plugin Osticket untuk menambahkan fitur ke dalam instalasi Osticket Anda. Sistem tiket open-source ini membantu bisnis untuk menangani pelanggan secara efisien.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="itu membantu perangkat lunak">}}


## Ringkasan
Selamat datang di posting blog lain yang menarik dalam serangkaian perangkat lunak [Helpdesk Ticketing Software][1]. Kami telah menerbitkan beberapa posting blog tentang topik -topik seperti [helpdesk berbasis tiket gratis populer dan sistem layanan pelanggan][2], [mengotomatiskan sistem tiket menggunakan WordPress dan Osticket][3], dan beberapa lagi. Namun, Osticket adalah sistem HelpDesk berbasis tiket open source yang dirancang untuk pelanggan untuk melaporkan pertanyaan dan keluhan mereka untuk mendukung staf. Sistem dukungan gratis ini menyediakan modul manajemen pertanyaan yang mudah digunakan yang mengonversi pertanyaan yang berasal dari telepon, email, dan formulir menjadi tiket berbasis web. Ini menawarkan berbagai fitur dan opsi yang memungkinkan staf pendukung untuk memberikan pengalaman dukungan klien yang luar biasa bagi pelanggan.
Sistem Tiket Open Source ini (OSTICKET) ini adalah kerangka tiket dukungan yang sepenuhnya fleksibel yang menawarkan banyak opsi untuk membantu menyesuaikan semua bagian dari pengalaman dukungan klien seperti pesan yang dikirim ke klien, halaman, dan pemberitahuan. Dalam artikelnya, kita akan belajar pengembangan plugin Osticket untuk meningkatkan fungsionalitas sesuai dengan kebutuhan kita. Untuk melakukan itu, kami akan membahas topik -topik berikut:
  * [Mengapa menggunakan plugin?][4]
  * [Persyaratan][5]
  * [Cara Mengembangkan Plugin Osticket?][6]
  * [Kesimpulan][7]

## Mengapa menggunakan plugin?   {#Mengapa}
Dalam topik ini, kita akan belajar cara membuat plugin sederhana untuk memperluas fungsionalitas inti dari perangkat lunak ini **ini**  (Osticket). Plugin adalah perangkat lunak, yang memperluas fungsionalitas inti dari aplikasi/perangkat lunak apa pun. Selain itu, ada banyak perangkat lunak open source tingkat perusahaan yang memiliki tumpukan plugin yang besar yang memperluas fungsionalitas. Selanjutnya, perangkat lunak open source populer ini termasuk WordPress, Joomla, dan banyak lagi. Di atas segalanya, komunitas yang bersemangat dan hidup mendukung dan mengembangkan plugin sesuai kebutuhan. Namun, kerangka kerja menawarkan dokumentasi komprehensif mengenai pengembangan plugin. Berikut ini adalah beberapa alasan aplikasi untuk mendukung plugin:
  * Ini memungkinkan pengembang pihak ketiga untuk membuat komponen perangkat lunak yang memperluas fungsionalitas suatu aplikasi.
  * Plugin memungkinkan untuk dengan mudah mengintegrasikan fitur baru.
  * Juga tidak meningkatkan ukuran dan kompleksitas aplikasi.
  * Serta pengembang dapat menyimpan dan mengelola kode plugin secara terpisah dari aplikasi inti.

## Persyaratan   {#Requirements}
Bagian ini dari panduan **IT helpdesk**  ini menjelaskan persyaratan yang diperlukan untuk mengembangkan plugin Osticket.
  * PHP Versi 5.6 atau lebih
  * Instalasi Osticket
  * Pengetahuan PHP dasar

## Bagaimana cara mengembangkan plugin Osticket?   {#Bagaimana}
Di bagian ini, kami akan melalui langkah -langkah pengembangan plugin dari sistem tiket open source ini (OSTICKET).
  * Buat folder plugin di /include /plugins direktori. Dalam tutorial ini kami akan membuat plugin demo yang mengintegrasikan **sistem osticket**  dengan redmine.
  * Seharusnya memiliki file yang diperlukan: plugin.php dan config.php.
  * File plugin.php berisi deskripsi umum plugin. Gunakan kode sampel berikut dalam file plugin.php:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Kemudian ganti ID, nama, nama penulis, dan nama kelas plugin dari kode di atas.
  * Setelah itu, kita perlu menampilkan opsi konfigurasi plugin ke backend Osticket. Tambahkan kode sampel berikut ke dalam file config.php.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * Sebagai hasilnya, ini akan membuat nama pengguna dan kata sandi di halaman konfigurasi seperti yang ditunjukkan di sini:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Panduan Pemula untuk Mengembangkan Plugin Osticket">}}

  * Berikut ini adalah daftar bidang kelas yang tersedia, mereka didefinisikan dalam `[install_root]/include/class.forms.php`:
      * TextBoxfield - kotak teks
      * TextAreAfield - Area Teks
      * ThreadEntryfield - Area Teks Kaya, digunakan untuk utas diskusi
      * DateTimefield - JQuery DatePicker
      * PhoneField - Kotak Teks Dioptimalkan untuk Nomor Telepon
      * Booleanfield - kotak centang
      * ChoiceField-bidang terpilih drop-down
      * SectionBreaksfield - Istirahat bagian horizontal
  * Setelah itu, kita perlu membuat file di mana fungsi plugin akan ditentukan.
  * Nama file harus sama seperti yang ditentukan dalam file plugin.php. yaitu redmine.php.
  * Ini harus memegang kelas DynabicredMineplugin. Lihat kode sampel berikut:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Kode ini mengambil nilai konfigurasi dan Anda dapat menggunakan nilai -nilai ini dalam fungsi Anda. Dalam file ini Anda dapat menambahkan fungsionalitas plugin Anda sebagai kebutuhan Anda.

## kesimpulan   {#conclusion}
Ini membawa kita ke akhir posting blog ini. Osticket adalah perangkat lunak manajemen tiket yang menawarkan struktur plugin untuk pengembang sehingga mereka dapat menambahkan fungsionalitas baru sesuai persyaratan. Plugin adalah komponen yang memperluas fungsionalitas inti dari aplikasi/perangkat lunak apa pun. Dalam artikelnya, kami telah membahas pengembangan plugin dari sistem dukungan pelanggan **ini  **(OSTICKET), yang membantu pengembang untuk menambahkan fitur dan peningkatan khusus sesuai dengan persyaratan mereka. Oleh karena itu, posting blog ini akan sangat membantu Anda jika Anda ingin menggunakan perangkat lunak **  IT helpdesk  **untuk bisnis Anda. Selain itu, ada perangkat lunak tiket **  helpdesk lainnya**  dan artikel yang disebutkan di bagian "Jelajahi" di bawah ini.
Akhirnya, [containerize.com][8] terus menulis posting blog tentang produk dan topik open source lebih lanjut. Oleh karena itu, harap tetap berhubungan dengan kategori [HelpDesk Ticketing Software][1] untuk pembaruan rutin. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][9], [LinkedIn][10], dan [Twitter][11].

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Uvdesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Helpy][15]
  * [Open Source Terbaik dan Perangkat Lunak Bantuan IT Gratis][16]
  * [Helpdesk berbasis tiket gratis dan sistem layanan pelanggan][2]
  * [Cara Mengatur Perangkat Lunak Meja Bantuan Online Menggunakan Osticket][17]
  * [Cara menerapkan multi-tenancy in osticket][18]
  * [Otomatis Sistem Tiket Menggunakan WordPress dan Osticket][3]
  * [Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka][19]

  
[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
