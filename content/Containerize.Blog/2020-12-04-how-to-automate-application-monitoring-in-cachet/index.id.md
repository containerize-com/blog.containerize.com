---
title: "Cara mengotomatiskan pemantauan aplikasi web di cap" 
seoTitle: "Cara mengotomatiskan pemantauan aplikasi web di cap" 
description: "Cachet membantu memantau semua layanan Anda dan langsung memberi tahu pelanggan. Artikel ini adalah tentang mengintegrasikan plugin pihak ketiga untuk mengotomatiskan pemantauan." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "Halaman status cap memungkinkan bisnis untuk mendapatkan pemberitahuan instan tentang downtime layanan. Kami akan belajar cara mengotomatisasi pemantauan aplikasi web di Capet." 
url: /id/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

Halaman Status Cap ## Cap memungkinkan bisnis mendapatkan pemberitahuan instan tentang downtime layanan. Kami akan belajar cara mengotomatisasi pemantauan aplikasi web di Capet.

{{< figure align=center src="images/cachet-monitor.png" alt="Pemantauan Aplikasi Web">}}

Pemantauan aplikasi dan layanan adalah bagian yang sangat penting dari bisnis online. Situs web Anda berjalan 24x7 dan Anda bisa salah kapan saja. Anda tidak dapat mengetahui bahwa salah satu situs berfungsi atau tidak sampai Anda mengunjunginya. Selain itu, pelanggan tidak akan memiliki informasi tentang masalah ini. Mereka dapat menghubungi tim dukungan Anda untuk downtime layanan. Lebih lanjut, ini dapat menyebabkan pelanggan Anda menjadi kecewa. Namun, Anda dapat mengurangi downtime layanan dengan mengonfigurasi sistem halaman status. Sistem halaman status akan memantau semua layanan Anda sepanjang waktu dan segera mengirim pemberitahuan ke tim dan pelanggan Anda. Ini akan memungkinkan Anda untuk mengambil langkah cepat untuk memperbaiki masalah dan klien akan terus diperbarui tentang kemajuan. Dalam posting blog ini, Anda akan belajar cara mengintegrasikan perpustakaan pihak ketiga dengan **cap**untuk**pemantauan otomatis** .
  * [Persyaratan][1]
  * [Plugin Pemantauan Pengaturan][2]
  * [Membuat Layanan Linux][3]
  * [Kesimpulan][4]

## Persyaratan {#Persyaratan}

  * Instal versi cap terbaru.
  * Akrab dengan layanan Linux.

## Plugin Pemantauan Pengaturan {#Plugin}

Berikut ini adalah langkah -langkah untuk menginstal dan mengonfigurasi plugin untuk pemantauan di Ubuntu.
  * Unduh biner dari [halaman rilis][5].
  * Ubah nama file menjadi monitor cap.
  * Buat file dapat dieksekusi dengan perintah.
```
sudo chmod +x cachet-monitor
```
  * Letakkan yang dapat dieksekusi di direktori jalur, sehingga Anda dapat mengaksesnya secara langsung melalui Terminal. Jadi, saya sarankan Anda pindah di bawah **/usr/lokal/bin** .
  * Buat file config.json dengan menjalankan perintah berikut.
```
sudo nano config.json
```
  * Salin kode di bawah ini dan simpan file.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * Sekarang, uji konfigurasi Anda dengan perintah ini.
```
cachet-monitor -c config.json
```
  * Jika semuanya bekerja dengan baik, pindah ke bagian berikutnya dan buat layanan Linux.

## Membuat Layanan Linux {#Service}

Berikut ini adalah langkah -langkah untuk membuat dan memulai layanan Linux untuk mengotomatisasi proses pemantauan.
* Buat Layanan **File Cachet-Monitor.Service** .
```
sudo nano cachet-monitor.service
```
  * Salin kode di bawah ini dan simpan file.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * Perbarui konfigurasi SystemD dengan menjalankan perintah.
```
sudo systemctl daemon-reload
```
  * Aktifkan layanan monitor cap dengan menjalankan perintah, sehingga dapat memuat pada startup sistem.
```
sudo systemctl enable cachet-monitor.service
```

## Kesimpulan {#Kesimpulan}

Cap A adalah gratis dan **Halaman Status Sumber Terbuka** Sistem. Namun, itu tidak menyediakan fitur di luar kotak untuk pemantauan aplikasi Web****. Sebaliknya, ia memiliki API istirahat yang kuat yang dapat digunakan untuk melakukan tindakan seperti insiden, komponen, kelompok, dan banyak lagi. Dalam artikel ini, kami telah menggunakan plugin pihak ketiga untuk mengotomatiskan pemantauan aplikasi di cap. Di atas segalanya, Anda dapat mengembangkan plugin Anda sendiri atau menggunakan plugin lain yang ada untuk melakukan pekerjaan itu.
Lebih lanjut, [containerize.com][6] sedang dalam perjalanan untuk meningkatkan tumpukan produk open source dalam berbagai bahasa dan kerangka kerja. Untuk pembaruan rutin, tetap ikuti perkembangan [halaman status][7] untuk artikel yang lebih menarik.

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  * [Sistem Halaman Status Sumber Terbaik][8]
  * [CACHET - Perangkat Lunak Halaman Status Sumber Gratis dan Terbuka][9]
  * [Top 5 Perangkat Lunak Halaman Status Sumber Terbuka untuk 2020][10]



[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
