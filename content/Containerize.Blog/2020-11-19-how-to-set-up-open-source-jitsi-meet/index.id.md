---
title: "Panduan Langkah demi Langkah untuk Menyiapkan Open Source Jitsi Meet" 
seoTitle: "Panduan Langkah demi Langkah untuk Menyiapkan Open Source Jitsi Meet" 
description: "Pelajari cara mengatur jitsi bertemu. Ini adalah perangkat lunak konferensi video open source yang dirancang untuk memenuhi kebutuhan komunikasi jarak jauh dan menawarkan fitur yang kuat" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet menyatukan orang -orang terpencil untuk melakukan pertemuan yang efektif. Mari kita pelajari cara mengatur perangkat lunak konferensi video ini dan jelajahi fitur -fiturnya" 
url: /id/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi bertemu menyatukan orang -orang jarak jauh untuk melakukan pertemuan yang efektif. Mari kita pelajari cara mengatur perangkat lunak konferensi video ini dan jelajahi fitur -fiturnya

{{< figure align=center src="images/jitsi-bannerF.png" alt="Perangkat lunak konferensi video">}}


## Ringkasan
Kami baru -baru ini menerbitkan [posting blog][1] yang berbicara tentang dampak [perangkat lunak konferensi video][2] pada sektor perusahaan. Namun, dalam artikel ini, kami akan membahas poin -poin berikut.
  * [Pengenalan singkat Jitsi Meet][3]
  * [Bagaimana cara mengatur jitsi bertemu?][4]
  * [Jitsi bertemu fitur eksplorasi][5]
  * [Kesimpulan][6]

## Pengenalan singkat Jitsi Meet   {#intro}
[Jitsi Meet][7] adalah perangkat lunak kolaborasi video open source, aman, dan terukur sepenuhnya gratis. Ini menyediakan beberapa fitur populer seperti konferensi video multipartai dengan enkripsi penuh, dukungan untuk Etherpad, dan perekaman video/audio. Perangkat lunak yang kompatibel dengan WEBRTC ini memungkinkan Anda untuk mengundang sebanyak mungkin pengguna ke pertemuan video.
Munculnya pertemuan virtual dimulai dalam beberapa waktu terakhir dan orang -orang percaya bahwa komunikasi melalui panggilan video/audio lebih efektif dan kolaboratif. Di atas segalanya, kategori perangkat lunak ini tidak hanya berfungsi pada laptop/desktop tetapi juga memungkinkan peserta untuk menghadiri pertemuan video yang diamankan tatap muka melalui ponsel mereka.

## Bagaimana cara mengatur jitsi bertemu?   {#mempersiapkan}
Di bagian ini, kami akan masuk ke proses instalasi Jitsi Meet. Pertama, pastikan Anda telah menginstal prasyarat berikut.
  * [Docker][8]
Setelah Docker diinstal, unduh file zip kode sumber dari [tautan] ini [9].
Buka terminal dan jalankan perintah berikut
`CD Docker-jitsi-meet`
Setelah itu, jalankan perintah berikut untuk membuat `.env`
`CP Env.Example .env`
Sekarang, jalankan perintah berikut untuk membuat direktori yang diperlukan.
`mkdir -p ~/.jitsi-meet-cfg/{web/letsencrypt, transkrip, prosodi/konfigurasi, prosodi/prosodi-plugins-custom, jicofo, jvb, jigasi, jibri}`
Akhirnya, jalankan perintah ini untuk memutar gambar Docker dan mengakses aplikasi di URL ini di browser.
`Docker -Compose UP -D`

## jitsi bertemu fitur eksplorasi   {#features}
Perangkat lunak obrolan video gratis ini menawarkan banyak fitur kaya. Ini adalah beranda yang akan ditampilkan terlebih dahulu.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="konferensi video">}}

Ketik judul pertemuan dan tekan "Go" dan Anda akan mendarat ke jendela aliran video berikut.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="Perangkat lunak open source">}}

Anda dapat mengundang orang ke dalam pertemuan dengan berbagi tautan yang ditampilkan di jendela popup. Selain itu, Anda dapat menanamkan streaming video di mana saja dengan mendapatkan kode.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="Perangkat lunak open source">}}

Ini memberi Anda opsi untuk berbagi layar Anda dengan peserta lain.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Obrolan video">}}

Dari sudut kanan atas, Anda dapat melihat detail koneksi video Anda.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Obrolan video gratis">}}

Jitsi Meet menawarkan obrolan terintegrasi dengan emoji.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Perangkat lunak pertemuan video">}}


## kesimpulan   {#con}
Dalam artikel ini, kami menjalani perangkat lunak komunikasi jarak jauh yang menakjubkan dan proses instalasinya. Selain itu, sudah saatnya untuk memilih solusi terbaik untuk menyinkronkan kebutuhan bisnis dengan teknologi yang berkembang. Pada akhirnya, [containerize.com][10] telah bekerja untuk memperluas daftar perangkat lunak konferensi video. Oleh karena itu, tetap terhubung dengan kategori [perangkat lunak konferensi video][2] untuk pembaruan rutin.

## halaman produk yang relevan
Anda mungkin menemukan tautan berikut yang relevan:
  * [Jitsi bertemu][7]
  * [BigBluebutton][11]
  * [OpenVidu][12]
  * [Elemen][13]
  * [Kawat][14]

  
[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
