---
title: "Cara membuat dan menjalankan bot di rocket.chat menggunakan botpress" 
seoTitle: "Cara membuat dan menjalankan bot di rocket.chat menggunakan botpress" 
description: "Panduan ini mengajarkan Anda dengan langkah -langkah sederhana dan mudah bahwa cara membuat bot menggunakan botpress dan integrasi dengan rocket.chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "Dalam tutorial ini, kami akan memandu Anda tentang cara membuat bot menggunakan botpress dan integrasi dengan rocket.chat" 
url: /id/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## Dalam tutorial ini, kami akan memandu Anda tentang cara membuat bot menggunakan botpress dan integrasi dengan rocket.chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Cara membuat dan menjalankan bot di rocket.chat menggunakan botpress">}}

Chatbot adalah program komputer yang dirancang untuk mensimulasikan percakapan manusia. Anda mungkin pernah bertemu di Facebook Messenger, situs web ritel. Secara teknis, bot adalah program otomatis yang dirancang untuk melakukan tugas tertentu.
Rocket.Chat mendorong chatbot dan integrasi otomatisasi pesan. Oleh karena itu, memiliki dokumentasi komprehensif untuk memandu Anda melalui proses pembuatan bot.
Dalam artikel ini, kami akan memandu Anda melalui cara membuat bot menggunakan botpress. Dan, cara mengkonfigurasi rocket.chat dengan botpress.
  * [Rocket.chat][1]
  * [Botpress][2]
  * [Buat pengguna bot di rocket.chat][3]
  * [Kode bot Anda menggunakan botpress][4]
  * [Kesimpulan][5]

### rocket.chat   {#rocketchat}
Rocket.chat adalah salah satu perangkat lunak obrolan langsung yang populer sebagian proyek obrolan langsung open source. Ini memiliki versi obrolan langsung gratis sebagai edisi komunitas. Selain itu, versi obrolan langsung yang di -host untuk perusahaan besar dengan fitur obrolan internal pribadi. Aplikasi obrolan langsung ini berjalan di browser tetapi dapat diinstal di server Anda sendiri juga. [Baca lebih lanjut][6]

### botpress   {#botpress}
Chatbots percakapan telah memungkinkan bisnis ini untuk memberi pelanggan mereka dukungan sentuhan tinggi yang selalu tersedia yang mereka inginkan. Botpress adalah salah satu alat pembuatan bot open source paling populer dengan pemrosesan bahasa alami bawaan. Teknologi NLU Botpress membuatnya selangkah lebih maju dari para pesaingnya di bidang seperti Botkit, DialogFlow, dan Microsoft Bot Framework. [Baca lebih lanjut][7]

### Buat pengguna bot di rocket.chat   {#CreateBoTuser}
Untuk berbicara dengan chatbot Anda, harus ada akun pengguna yang telah dikonfigurasi sebelumnya di server roket.chat tempat bot dapat masuk.
Untuk membuat akun, Anda perlu memiliki hak istimewa admin:
  1. Di Topbar, klik tiga titik (opsi) dan kemudian klik **Administrasi** 
  2. Pilih **Pengguna**  dari bilah sisi kiri
  3. Klik tombol `+` (tambahkan pengguna) di bilah sisi kanan
  4. Di jendela Profil yang muncul, isi bidang _name_, _username_, _email_ dan _password_
  5. Aktifkan _verified_ sakelar di bawah bidang _email_
  6. Nonaktifkan _Require Password Change_ Toggle Di Bawah _Password_
  7. Pilih `bot` dari menu dropdown` add role` dan klik tombol _add role_ ke kanan
  8. Nonaktifkan _join Default Channels_ dan _Send Welcome Email_ Centang Kotak
  9. Klik _Save_
Setelah disimpan, bot akan dikonfigurasi dengan nama pengguna dan kata sandi yang ditetapkan pada langkah 4. Anda dapat menggunakan variabel lingkungan “Rocketchat \ _User” dan “Rocketchat \ _Password” untuk masuk ke server rocket.chat dengan nama pengguna dan kata sandi ini.

### Kode bot Anda menggunakan botpress   {#codeBot}
Botpress adalah paket Node.js dan bekerja dengan Node dan NPM.
Cara tercepat untuk memulai dengan Botpress adalah menggunakan repositori [botpress-kick-starter][8] yang sudah terintegrasi dengan rocket.chat melalui [konektor saluran botpress][9].
Arahkan ke folder tempat Anda ingin bekerja dengan bot dan melanjutkan dengan langkah -langkah berikut:
**Instal Paket Botpress** 
```
npm init -y
npm install botpress@10.40.0
```
**Buat bot** 
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
Perintah "Botpress Init" meluncurkan wizard yang akan membantu Anda membuat konfigurasi awal. Anda harus melihat sesuatu sebagai berikut:
```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```
**Pasang konektor botpress dan dependensi bot** 
```
npm install
npm install botpress-channel-rocketchat
```
Konfigurasikan bot
Buka folder "config" dan buat file "channel-rocketchat.json" dengan konten berikut:
```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```
**Jalankan bot** 
```
npm start
```
**Bicaralah dengan bot Anda** 
Di server, login sebagai pengguna biasa (bukan pengguna bot), pergi ke ruang umum, dan berbicara dengan bot Anda yang baru dibuat.

### Kesimpulan   {#conclusion}
Dalam artikel ini, kami telah belajar cara membuat bot di Botpress. Dan, cara mengkonfigurasinya dengan rocket.chat. Botpress membuatnya sangat mudah bagi pengguna untuk membangun alur kerja otomatis yang inovatif. Dan, integrasi dengan rocket.chat memungkinkan Anda untuk mengendalikannya secara percakapan.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
