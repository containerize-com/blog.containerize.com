---
title: "Cara mengatur perangkat lunak obrolan langsung di situs web | Rocket.chat" 
seoTitle: "Cara mengatur perangkat lunak obrolan langsung di situs web | Rocket.chat" 
description: "Rocket.chat mudah diatur, membantu tim dan pelanggan berkomunikasi secara efisien. Perangkat lunak obrolan langsung ini adalah open-source, cross-platform, dan hosting sendiri." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "Perangkat lunak dukungan obrolan langsung menghadirkan kenyamanan dan efisiensi dalam memberikan dukungan pelanggan. Mari kita pelajari cara menginstal rocket.chat di situs web bisnis Anda." 
url: /id/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## Perangkat lunak dukungan obrolan langsung membawa kenyamanan dan efisiensi dalam memberikan dukungan pelanggan. Mari kita pelajari cara menginstal rocket.chat di situs web bisnis Anda.

{{< figure align=center src="images/rocketchat-1.png" alt="Perangkat lunak obrolan langsung">}}


## Ringkasan
Kami telah menerbitkan beberapa posting blog yang terkait dengan perangkat lunak obrolan langsung open source seperti [Top 5 Perangkat Lunak Obrolan Dukungan Pelanggan Gratis untuk Situs Web][1], [Pesan Instan WordPress menggunakan Rocket.chat][2], dan beberapa lagi. Dalam posting blog ini, kami akan melalui perangkat lunak dukungan pelanggan terkemuka teratas Rocket.chat. Dengan peningkatan besar dalam lalu lintas online, bisnis merasa sulit untuk menghibur sejumlah besar pertanyaan tepat waktu. Pengunjung datang ke situs Anda, cenderung memperoleh beberapa informasi yang terkait dengan produk atau layanan, dan meninggalkan situs Anda jika tidak menerima tanggapan. Oleh karena itu, dukungan obrolan langsung membantu Anda menyapa pelanggan Anda secara proaktif saat mereka melalui situs web Anda. Atau, jika mereka membutuhkan bantuan dan klarifikasi untuk membuat keputusan pembelian mereka.
Dukungan obrolan langsung meningkatkan peluang Anda untuk mengubah pengunjung menjadi pelanggan. Ada banyak open-source **Langsung Dukungan Obrolan Softwar**  Tersedia. Tapi, Rocket.Chat telah mendapatkan banyak ketertarikan karena fitur -fiturnya. Dan itu diperlakukan sebagai alternatif untuk perangkat lunak obrolan terkemuka di industri seperti Slack, dan Microsoft Team. Di artikel ini, kami akan belajar cara menginstal Rocket.chat di server dan kemudian cara mengonfigurasinya di situs web Anda. Jadi, mari kita mulai dengan menutupi poin -poin berikut.
  *[**Apa itu rocket.cha**  t?][3]
  ?
  ***[Aktifkan fitur obrolan langsung][5]** 
  ***[Instal Widget Langsung Obrolan di Situs Web Anda][6]** 
  ***[Kesimpulan][7]** 

## Apa itu rocket.chat   {#intro}
[Rocket.chat][8] adalah salah satu dari perangkat lunak obrolan langsung **yang populer **. Ini memiliki versi obrolan langsung gratis sebagai edisi komunitas serta versi obrolan langsung yang di -host untuk perusahaan besar dengan fitur obrolan internal pribadi. Rocket.chat mendukung dukungan pelanggan obrolan langsung bersama dengan fitur obrolan tim. Ini adalah cross-platform dan menawarkan dukungan untuk hampir semua platform populer seperti Windows, Mac, Linux, dan aplikasi seluler juga. Perangkat lunak dukungan pelanggan  **ini**   aman, dapat diperluas, dan menawarkan integrasi dengan aplikasi populer pihak ketiga seperti Trello, Google Drive, dan banyak lagi. Ada banyak fitur kuat yang ditawarkan Rocket.Chat seperti banyak kamar, ruang obrolan pribadi & grup, pemberitahuan, emoji, otentikasi LDAP, dan antarmuka yang tenang. Selain itu, alat gratis ini mudah digunakan dan dilengkapi dengan kemampuan hosting sendiri. Selain itu, ia menawarkan antarmuka yang logis dan ramah pengguna di mana pengguna dapat memodifikasi tema seperti gelap, terang, atau hitam.
Perangkat lunak dukungan obrolan ** ini ditulis dalam JavaScript, semua dokumentasi tersedia mengenai pengembangan dan penyebaran. Oleh karena itu, Anda dapat menemukan semua kode sumber di [GitHub][9]. Untuk detail lebih lanjut, Anda dapat membaca tentang rocket.chat [di sini][10].

## cara menginstal rocket.chat   {#install}
Jadi, kita tahu apa itu rocket.chat dan di bagian ini, kita akan belajar cara menginstal perangkat lunak obrolan langsung ini. Anda dapat menginstal Rocket.Chat dari berbagai pasar, seperti Ubuntu Snaps, Dockerhub, atau menginstalnya di server Anda sendiri. Dalam artikel ini, kami akan fokus pada instalasi Rocket.chat melalui Snaps di Ubuntu. Yang merupakan metode instalasi tercepat.
Bentak aman. Rocket.chat dan semua dependensinya diisolasi dari seluruh sistem Anda. Snaps juga meningkatkan otomatis ketika ada rilis baru.
Di Ubuntu terlebih dahulu, instal snap dengan perintah berikut
```
sudo apt-get install snapd
```
Kemudian instal rocket.chat server melalui perintah snap.
```
sudo snap install rocketchat-server
```
Snap sudah berjalan dan berjalan. Jelajahi ke http: // localhost: 3000 dan atur rocket.chat. Anda dapat mengonfigurasi proxy nginx untuk memetakan instance rocket.chat dengan domain Anda.

## Aktifkan fitur obrolan langsung   {#Enable}
Setelah Rocket.Chat Software diinstal dan dikonfigurasi, langkah selanjutnya adalah mengaktifkan fitur -fiturnya. Bagian posting blog ini menjelaskan cara mengaktifkan **perangkat lunak dukungan obrolan**  di situs web Anda. Untuk mengaktifkan fitur LiveChat di Rocket.chat Anda Instance:
1. Pergi ke **administrasi** 

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="ROCKET.Chat Administration">}}

2. Cari ‘**omnichannel **‘ dalam pengaturan ****  dan aktifkan.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.chat Search Omini">}}

Setelah diaktifkan, admin akan memiliki akses ke pengaturan panel omnichannel melalui menu baru yang disebut omnichannel di menu dropdown sudut kiri atas.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="ROCKET.Chat Omini Channel">}}

Dan kemudian konfigurasikan tampilan dan nuansa widget obrolan langsung

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Widget Livechat Rocket.Chat">}}


## **Instal Widget Obrolan Langsung di Situs Web Anda**    {#Widget}
Di bagian ini, kami akan menginstal widget obrolan langsung di situs web bisnis. Sekarang, untuk mengakses **instalasi livechat**  Pengaturan:
Pergi ke **instalasi livechat**  dalam pengaturan panel omnichannel, seperti yang ditunjukkan di bawah ini, dan salin sepotong kode yang diberikan.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="Widget Rocket.chat">}}

Dan, tempel kode ini di atas tag terakhir di situs Anda; Widget obrolan langsung akan muncul di sudut kanan bawah halaman web Anda. Seperti yang ditunjukkan di bawah ini sesuai konfigurasi obrolan langsung Anda.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Perangkat lunak obrolan langsung">}}

{{_LINE_48_}}

## kesimpulan   {#conclusion}
Ini membawa kita ke akhir posting blog ini. Dalam artikel ini, kami telah melalui apa itu rocket.chat, cara menginstal rocket.chat dan kami juga telah menunjukkan kepada Anda cara menginstalnya di server Anda sendiri melalui Ubuntu Snaps. Kami juga belajar cara mengaktifkan fitur obrolan langsung dan menginstal widget di situs web Anda. Selain itu, **Perangkat Lunak Dukungan Pelanggan  **telah menjadi komponen yang harus dimiliki dari situs web bisnis apa pun karena faktor-faktor tertentu yang kita bahas di atas. Namun, posting blog ini akan sangat membantu Anda jika Anda ingin menggunakan perangkat lunak obrolan langsung open source di situs web bisnis Anda. Selanjutnya, ada banyak perangkat lunak dukungan obrolan **  lainnya**  & artikel yang tersedia di bagian "Jelajahi" di bawah ini yang dapat Anda periksa.
Akhirnya, [**containerize.com **][11] Menulis artikel pada sumber terbuka lebih lanjut  **aplikasi obrolan open source.**   Oleh karena itu, tetap berhubungan dengan kategori [Live Chat][12] untuk pembaruan rutin. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook][13], [LinkedIn][14], dan [Twitter][15].

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan.
  * [Zulip][16]
  * [Lets-chat][17]
  * [Botpress][18]
  * [Cara Membuat Bot FAQ Berbasis AI untuk Bisnis Anda Menggunakan Botpress][19]
  * [Top 5 Perangkat Lunak Obrolan Dukungan Pelanggan Gratis Untuk Situs Web][1]
  * [Pesan Instan WordPress Menggunakan Rocket.chat][2]
  * [Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka][20]
  * [Cara membuat dan menjalankan bot di rocket.chat menggunakan botpress][21]
  * [Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka][20]

  
[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
