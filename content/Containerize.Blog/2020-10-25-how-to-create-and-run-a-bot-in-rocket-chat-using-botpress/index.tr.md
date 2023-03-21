---
title: "Botpress kullanarak rocket.chat'te bir bot nasıl oluşturulur ve çalıştırılır" 
seoTitle: "Botpress kullanarak rocket.chat'te bir bot nasıl oluşturulur ve çalıştırılır" 
description: "Bu kılavuz size botpress kullanarak bot oluşturma ve rocket.chat ile entegrasyon olduğunu basit ve kolay adımlarla öğretir." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "Bu öğreticide, botpress kullanarak nasıl bir bot oluşturacağınız konusunda size rehberlik edeceğiz ve rocket.chat ile entegrasyon." 
url: /tr/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## Bu öğreticide, Botpress kullanarak nasıl bir bot oluşturacağınız konusunda size rehberlik edeceğiz ve rocket.chat ile entegrasyon

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Botpress kullanarak rocket.chat'te bir bot nasıl oluşturulur ve çalıştırılır">}}

Chatbot, insan konuşmasını simüle etmek için tasarlanmış bir bilgisayar programıdır. Muhtemelen bir perakende web sitesi olan Facebook Messenger'da bir tane karşılaştınız. Teknik olarak, botlar belirli bir görevi yerine getirmek için tasarlanmış otomatik programlardır.
Rocket.chat Chatbot ve mesajlaşma otomasyonu entegrasyonlarını teşvik eder. Bu nedenle, bot yapma sürecinde size rehberlik edecek kapsamlı belgelere sahiptir.
Bu makalede, botpress kullanarak nasıl bot oluşturacağınız konusunda size rehberlik edeceğiz. Ve botpress ile rocket.chat nasıl yapılandırılır.
  * [Rocket.chat][1]
  * [Botpress][2]
  * [Rocket.chat'te bir bot kullanıcısı oluştur][3]
  * [Botpress kullanarak botunuzu kodlayın][4]
  * [Sonuç][5]

## # Rocket.chat   {#Rockchat}
Rocket.chat, popüler canlı sohbet yazılımı kısmen açık kaynaklı bir canlı sohbet projesi arasında. Topluluk baskısı olarak ücretsiz canlı sohbet sürümü vardır. Ayrıca, özel dahili sohbet özelliklerine sahip büyük şirketler için ücretli bir canlı sohbet sürümü. Bu canlı sohbet uygulaması tarayıcıda çalışır, ancak kendi sunucunuza da yüklenebilir. [Devamını oku][6]

## # Botpress   {#botpress}
Konuşma sohbet botları, işletmelerin müşterilerine istedikleri her zaman mevcut yüksek dokunmatik desteği vermelerini mümkün kıldı. Botpress, yerleşik doğal dil işlemeye sahip en popüler açık kaynak bot oluşturma araclarından biridir. Botpress’in NLU teknolojisi, Botkit, Dialogflow ve Microsoft Bot Framework gibi sahadaki rakiplerinden bir adım önde. [Devamını oku][7]

## # Rocket.chat   {#CreateBotuser}
Chatbot'unuzla konuşmak için botun giriş yapabileceği roket.chat sunucusunda önceden yapılandırılmış bir kullanıcı hesabı olmalıdır.
Hesabı oluşturmak için yönetici ayrıcalıklarına sahip olmanız gerekir:
  1. Topbar'da üç noktayı (seçenekleri) tıklayın ve ardından **Yönetim**  tıklayın.
  2. Sol kenar çubuğundan **kullanıcılar**  seçin
  3. Sağ kenar çubuğuna `+` (Kullanıcı Ekle) düğmesini tıklayın
  4. Görünen profil penceresinde _Name_, _username_, _EMAIL_ ve _password_ Fields doldurun
  5. _Verified_ geçişini etkinleştir _email_ alanının altında
  6. _password_ alanının altındaki geçişi değiştirme_ geçişini devre dışı bırakın
  7. `` Rol Ekle '' açılır menüsünden `bot'u seçin ve sağdaki _add role_ düğmesini tıklayın
  8. Devre Dışı Bırakma _Join Varsayılan Kanallar_ ve _Send hoş geldiniz e -posta_ onay kutuları
  9. _save_'i tıklayın
Kaydettikten sonra bot, 4. adımda ayarlanan kullanıcı adı ve şifre ile yapılandırılacaktır. Rocket.chat sunucusuna bu kullanıcı adı ve şifre çifti ile giriş yapmak için “Rockchat \ _user” ve “Rockketchat \ _Password” çevresel değişkenleri kullanabilirsiniz.

## # Botpress kullanarak botunuzu kodlayın   {#codeBot}
Botpress bir Node.js paketidir ve düğüm ve NPM ile çalışır.
Botpress ile başlamanın en hızlı yolu, [botpress-kanal konnektörü][9] aracılığıyla zaten roketle entegre edilmiş [Botpress-vur-starter][8] depo kullanmaktır [9].
Bot ile çalışmak istediğiniz klasöre gidin ve aşağıdaki adımlara devam edin:
**Botpress paketini yükleyin** 
```
npm init -y
npm install botpress@10.40.0
```
**Bir bot oluştur** 
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
“Botpress Init” komutu, ilk yapılandırmayı oluşturmanıza yardımcı olacak bir sihirbaz başlatır. Bir şeyi aşağıdaki gibi görmelisiniz:
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
**Botpress konnektörünü ve bot bağımlılıklarını yükleyin** 
```
npm install
npm install botpress-channel-rocketchat
```
Botu yapılandırın
"Yapılandırma" klasörünü açın ve aşağıdaki içerikle "kanal-rockchatat.json" dosyası oluşturun:
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
**Botu çalıştırın** 
```
npm start
```
**botunuzla konuş** 
Sunucuda, normal bir kullanıcı olarak (bot kullanıcısı değil) giriş yapın, genel odaya gidin ve yeni oluşturulan botunuzla konuşun.

## # Sonuç   {#Conclusion}
Bu makalede, Botpress'te bir bot oluşturmayı öğrendik. Ve rocket.chat ile nasıl yapılandırılır. Botpress, kullanıcıların yenilikçi otomatik iş akışları oluşturmasını çok kolaylaştırır. Ve Rocket.Chat ile entegrasyon, bunları konuşma bir şekilde kontrol etmenizi sağlar.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
