---
title: "Otomatiskan Penyebaran Aplikasi PHP dengan Deployer" 
seoTitle: "Otomatiskan Penyebaran Aplikasi PHP dengan Deployer" 
description: "Menyebarkan aplikasi PHP dengan alat penyebaran sumber terbuka dan mengotomatiskan alur kerja penyebaran. Mudah merilis fitur dan rollback ke versi sebelumnya." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Otomatis proses penyebaran aplikasi PHP dengan alat penyebaran PHP. Kami akan belajar cara menyiapkan Deployer dan menggunakannya untuk menggunakan aplikasi PHP." 
url: /id/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## Mengotomatiskan proses penyebaran aplikasi PHP dengan alat penyebaran PHP. Kami akan belajar cara menyiapkan Deployer dan menggunakannya untuk menggunakan aplikasi PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="Alat Penyebaran PHP">}}

Ini adalah pekerjaan yang sangat penting untuk menggunakan aplikasi di server setelah pengembangan. Fitur baru dan perbaikan bug sering dirilis oleh tim. Jadi, lebih baik bagi tim untuk menghilangkan pekerjaan manual dan mengotomatiskan proses penyebaran perangkat lunak **. Ini akan memungkinkan tim perangkat lunak untuk berkonsentrasi pada tugas yang lebih penting. Ada beberapa alat penyebaran open source ** di luar sana tetapi kami akan berkonsentrasi pada ** PHP Deployer ** dalam tutorial ini. Kami akan membahas bagian berikut di pos ini.
  *[** Apa itu Deployer **][1]
  *[** Menginstal Deployer **][2]
  *[** Menyebarkan aplikasi PHP **][3]
  *[** Kesimpulan **][4]

## Apa itu Deployer {#what}
[** Deployer **][5] adalah alat penyebaran php gratis dan open-source ** **. Ini memungkinkan tim perangkat lunak untuk mengotomatisasi alur kerja penyebaran untuk aplikasi berbasis PHP. Sangat sederhana untuk dipasang dan mudah digunakan. Siapa pun dari pengalaman pemula hingga tingkat ahli dapat dengan cepat menggunakannya untuk menggunakan aplikasi PHP. Deployer hadir dengan resep/skrip di luar kotak untuk kerangka kerja PHP populer, CMS, dan perangkat lunak keranjang belanja. Selanjutnya, Anda dapat melakukan ** Laravel Deployment ** dengan ini ** Alat Penyebaran Sumber Terbuka **. Pengembang dapat menggunakan resep bawaan untuk proyek mereka dan menggunakannya untuk penempatan. Selanjutnya, Anda dapat dengan mudah membuat skrip Instal/Instal/Penyebaran dengan PHP Deployer ** Wizard. Selain itu, alat penyebaran gratis ** ini ** menawarkan fitur-fitur yang sangat baik seperti penyebaran zero-downtime, rollback ke versi sebelumnya, SSH, eksekusi paralel, dan banyak lagi.

## Menginstal Deployer {#installing}
  * Deployer tergantung pada PHP. Anda harus memastikan bahwa PHP berjalan di server Anda. Namun, Anda dapat menggunakan perintah di bawah ini untuk menginstal PHP di Ubuntu.
```
sudo apt-get install php
```
  * Jalankan di bawah perintah satu per satu untuk menginstal Deployer.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## Deploy Aplikasi PHP {#Deploy}
Ikuti pedoman langkah demi langkah untuk ** menggunakan aplikasi PHP ** dengan Deployer.
  * Buat direktori untuk Deployer dan navigasikan ke direktori yang baru dibuat.
```
sudo mkdir deployer
cd deployer
```
  * Jalankan perintah di bawah ini untuk menghasilkan skrip instalasi
```
dep init
```
  * Anda akan diminta dengan layar di bawah ini. Ini adalah wizard Deployer untuk membuat skrip instalasi dasar.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Pertama, Anda perlu memilih jenis proyek dengan memasukkan angka. Anda dapat memasukkan 0, jika Anda tidak yakin tentang jenis proyek atau hanya terbiasa dengan Deployer.
  * Kedua, Anda perlu menyediakan jalur repositori git. Ini adalah langkah opsional, Anda dapat melewatkannya dan menambahkan jalur nanti.
  * Pada langkah terakhir, Anda dapat berbagi informasi dengan komunitas Deployer dengan memilih YA atau masuk tidak untuk melewatkannya.
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
Anda harus mengubah variabel berikut untuk menggunakan aplikasi PHP Anda.
  *** Set (‘Aplikasi’, ‘My_Project’); ** - Setel Nama Aplikasi.
  *** Set (‘Repositori’, "); **-Setel jalur repositori git seperti‘ git@github.com: masood/first-app-with-deployer.git ’. Anda harus mengatur tombol Deploy ke repositori GitHub Anda. Anda dapat mencari cara membuat tombol SSH di server, jika Anda tidak terbiasa dengannya.
  *** Host (‘Project.com’)
    -> Set (‘Deploy_Path’, ‘~/{{Application}}’); ** -Setel nama proyek dan tentukan jalur di mana Anda ingin menyimpan file untuk aplikasi Anda. Itu akan terlihat seperti/var/www/html/deployer.
Terakhir, jalankan perintah di bawah ini untuk menggunakan aplikasi PHP Anda.
```
dep deployer
```
Jika Anda menemukan masalah dengan rilis baru dan ingin mengubah perubahan. Anda dapat melakukannya hanya dengan menjalankan perintah di bawah ini.
```
dep rollback
```

## kesimpulan {#conclusion}
Kami telah membahas tentang Deployer dan cara menginstalnya di tutorial ini. Lebih lanjut, kami telah membuat pedoman lengkap untuk menggunakan aplikasi berbasis PHP dari Github Repository. Mudah -mudahan, posting blog ini akan membantu Anda untuk memulai ** menggunakan aplikasi PHP ** dengan Deployer. Selain itu, kami akan menulis lebih banyak tentang alat penyebaran ** PHP ini ** dalam tutorial mendatang.
Akhirnya, [** containerize.com **][6] sedang dalam proses penulisan posting blog yang konsisten pada produk open source terbaru lebih lanjut. Oleh karena itu, tetap berhubungan dengan kategori [** penempatan ini **][7] kategori untuk pembaruan terbaru.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  *[** Deployer **][8]
  *[** Jenkins **][9]
  *[** drone **][10]
  *[** capistrano **][11]
  *[** Rancher **][12]
  *[** Concourse **][13]
  *[** ansible **][14]
  *[** gocd **][15]
  *[** Top 5 Alat Penyebaran Sumber Terbuka di 2021 **][16]
  *[** Integrasi Berkelanjutan dan Penyebaran Berkelanjutan dari Server Kontrol Sumber **][17]

  
[1]: #What
[2]: #Installing
[3]: #Deploy
[4]: #Conclusion
[5]: https://deployer.org/
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/deployment-tools/
[8]: https://products.containerize.com/deployment-tools/deployer
[9]: https://products.containerize.com/deployment-tools/jenkins/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/capistrano/
[12]: https://products.containerize.com/deployment-tools/rancher/
[13]: https://products.containerize.com/deployment-tools/concourse/
[14]: https://products.containerize.com/deployment-tools/ansible/
[15]: https://products.containerize.com/deployment-tools/gocd/
[16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
