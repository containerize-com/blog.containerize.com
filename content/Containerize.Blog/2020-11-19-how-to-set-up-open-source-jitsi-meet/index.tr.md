---
title: "Açık Kaynak Jitsi Meet'i kurmak için adım adım kılavuz" 
seoTitle: "Açık Kaynak Jitsi Meet'i kurmak için adım adım kılavuz" 
description: "Jitsi Meet'i nasıl kuracağınızı öğrenin. Uzaktan iletişim ihtiyaçlarını karşılamak için tasarlanmış bir açık kaynaklı video konferans yazılımıdır ve güçlü özellikler sunar" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet, etkili toplantılar yapmak için uzak insanları bir araya getiriyor. Bu video konferans yazılımını nasıl kuracağınızı ve özelliklerini keşfedelim" 
url: /tr/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meet, etkili toplantılar yapmak için uzak insanları bir araya getiriyor. Bu video konferans yazılımını nasıl kuracağınızı ve özelliklerini keşfedelim

{{< figure align=center src="images/jitsi-bannerF.png" alt="Video konferans yazılımı">}}


## Genel Bakış
Kısa süre önce [video konferans yazılımı][2] 'in kurumsal sektör üzerindeki etkisinden bahseden bir [blog yazısı][1] yayınladık. Ancak, bu makalede, aşağıdaki noktaları ele alacağız.
  * [Jitsi Meet'in kısa bir girişi][3]
  * [Jitsi Meet nasıl kurulur?][4]
  * [Jitsi Meet Feature Keşif][5]
  * [Sonuç][6]

## Jitsi'nin kısa bir tanıtımı   {#intro}
[Jitsi Meet][7] tamamen ücretsiz bir açık kaynak, güvenli ve ölçeklenebilir video işbirliği yazılımıdır. Tam şifreleme, Etherpad için destek ve video/ses kaydı ile çok partili video konferans gibi birkaç popüler özellik sağlar. Bu WebRTC uyumlu yazılım, bir video toplantısına istediğiniz kadar kullanıcıyı davet etmenizi sağlar.
Sanal toplantıların yükselişi son zamanlarda başladı ve insanlar video/ses çağrıları yoluyla iletişimin daha etkili ve işbirlikçi olduğuna inanıyorlar. Her şeyden önce, bu yazılım kategorisi sadece dizüstü bilgisayarlarda/masaüstünde çalışmakla kalmaz, aynı zamanda katılımcıların cep telefonları aracılığıyla yüz yüze güvenli video toplantılarına katılmalarını da sağlar.

## Jitsi Meet nasıl kurulur?   {#kurmak}
Bu bölümde, Jitsi Meet'in kurulum sürecine gireceğiz. İlk olarak, aşağıdaki ön koşulları yüklediğinizden emin olun.
  * [Docker][8]
Docker yüklendikten sonra, bu [link][9] 'dan kaynak kodunun zip dosyasını indirin.
Terminali açın ve aşağıdaki komutu çalıştırın
CD Docker-Jitsi-Meet`
Bundan sonra, bir `.env 'oluşturmak için aşağıdaki komutu çalıştırın
`cp env.example .env`
Şimdi, gerekli dizinleri oluşturmak için aşağıdaki komutu çalıştırın.
`mkdir -p ~/.jitsi-meet-cfg/{Web/Letssencrypt, Transcripts, Prosody/Config, Prosody/Prosody-Plugins-Custom, Jicofo, JVB, Jigasi, Jibri}`
Son olarak, Docker görüntüsünü döndürmek ve tarayıcıdaki bu URL'deki uygulamaya erişmek için bu komutu çalıştırın.
`Docker -Compose Up -d`

## Jitsi Meet Feature Exploration   {#Features}
Bu ücretsiz görüntülü sohbet yazılımı birçok zengin özellik sunar. Bu ilk olarak gösterilecek ana sayfadır.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="video konferans">}}

Toplantının altyazısını yazın ve “Go” a basın ve aşağıdaki video akışı penceresine ineceksiniz.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="Açık Kaynak Yazılım">}}

Açılır pencerede gösterilen bağlantıyı paylaşarak insanları toplantıya davet edebilirsiniz. Ayrıca, video akışını kodu alarak herhangi bir yere gömebilirsiniz.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="Açık Kaynak Yazılım">}}

Ekranınızı diğer katılımcılarla paylaşma seçeneği sunar.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Görüntülü sohbet">}}

Sağ üst köşeden, video bağlantınızın ayrıntılarını görebilirsiniz.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Ücretsiz görüntülü sohbet">}}

Jitsi Meet, emojilerle entegre sohbet sunuyor.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Video toplantı yazılımı">}}


## Sonuç   {#con}
Bu makalede, çarpıcı bir uzaktan iletişim yazılımı ve kurulum sürecinden geçtik. Ayrıca, iş ihtiyaçlarını gelişen teknolojilerle senkronize etmek için en iyi çözümleri tercih etmenin zamanı geldi. Sonunda, [Containerize.com][10] video konferans yazılımı listesini genişletmek için çalışıyor. Bu nedenle, düzenli güncellemeler için lütfen [video konferans yazılımı][2] kategorisiyle bağlantıda kalın.

## İlgili Ürün Sayfaları
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Jitsi Meet][7]
  * [Bigbluebutton][11]
  * [OpenVIDU][12]
  * [Element][13]
  * [Tel][14]

  
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
