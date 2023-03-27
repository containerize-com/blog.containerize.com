---
title: "Web sitesinde canlı sohbet yazılımı nasıl kurulur | Rocket.chat" 
seoTitle: "Web sitesinde canlı sohbet yazılımı nasıl kurulur | Rocket.chat" 
description: "Rocket.chat'in kurulması kolaydır, ekiplerin ve müşterilerin verimli iletişim kurmasına yardımcı olur. Bu canlı sohbet yazılımı açık kaynaklı, çapraz platform ve kendi kendine barındırılmıştır." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "Canlı sohbet destek yazılımı, müşteri desteği sunmada kolaylık ve verimlilik getirir. Rocket.chat'i işletme web sitenize nasıl yükleyeceğinizi öğrenelim." 
url: /tr/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## Canlı Sohbet Destek Yazılımı, müşteri desteğini sunmada kolaylık ve verimlilik getirir. Rocket.chat'i işletme web sitenize nasıl yükleyeceğinizi öğrenelim.

{{< figure align=center src="images/rocketchat-1.png" alt="Canlı sohbet yazılımı">}}


## Genel Bakış
[Web sitesi için Top 5 Ücretsiz Müşteri Destek Sohbet Yazılımı][1], [Rocket.Chat kullanan WordPress anlık mesajlaşma][2] ve biraz daha açık kaynaklı canlı sohbet yazılımı ile ilgili bazı blog yayınları yayınladık. Bu blog yazısında, en iyi müşteri destek yazılımı rocket.chat'ten geçeceğiz. Çevrimiçi trafikteki büyük artışla, işletmeler zamanında çok sayıda soruşturmayı eğlendirmekte zorlanıyor. Ziyaretçiler sitenize gelir, ürün veya hizmetlerle ilgili bazı bilgiler edinme ve yanıt almaması durumunda sitenizden ayrılma eğilimindedir. Bu nedenle, canlı sohbet desteği, web sitenizi geçerken müşterilerinizi proaktif olarak selamlamanıza yardımcı olur. Veya, satın alma kararlarını vermek için biraz yardım ve açıklamaya ihtiyaç duymaları durumunda.
Canlı sohbet desteği, bir ziyaretçiyi bir müşteriye dönüştürme şansınızı artırır. Bir sürü açık kaynaklı  **canlı sohbet desteği yazılım**  e mevcuttur. Ancak, Rocket.chat, özellikleri nedeniyle çok fazla cazibe kazandı. Ve Slack ve Microsoft Team gibi sektör lideri sohbet yazılımına alternatif olarak ele alınıyor. Bu makalede, bir sunucuya rocket.chat'i nasıl yükleyeceğinizi ve ardından web sitenizde nasıl yapılandırılacağını öğreneceğiz. Öyleyse, aşağıdaki noktaları ele alarak başlayalım.
* [  **Rocket.cha**  t?][3]
***[Rocket.
*  **[Canlı sohbet özelliğini etkinleştir][5]**  
*  **[Web sitenize canlı sohbet widget'ı yükleyin][6]**  
*  **[Sonuç][7]**  

## Rocket Nedir.chat {#intro}

[Rocket.chat][8] popüler  **canlı sohbet yazılımı** arasındadır. Bir topluluk baskısı olarak ücretsiz canlı sohbet sürümü ve özel dahili sohbet özelliklerine sahip büyük şirketler için ücretli barındırılan canlı sohbet sürümü vardır. Rocket.chat, takım sohbet özelliği ile birlikte canlı sohbet müşteri desteğini destekler. Platformlar arasıdır ve Windows, Mac, Linux ve mobil uygulamalar gibi neredeyse tüm popüler platformlar için destek sunar. Bu **Müşteri Destek Yazılımı**  güvenli, genişletilebilir ve Trello, Google Drive ve daha fazlası gibi üçüncü taraf popüler uygulamalarla entegrasyon sunar. Rocket.chat'in birden fazla oda, özel sohbet odaları ve grupları, bildirimler, emojiler, LDAP kimlik doğrulaması ve dinlendirici arayüz gibi sunduğu birçok güçlü özellik vardır. Buna ek olarak, bu ücretsiz aracın dağıtılması kolaydır ve kendi kendine barınma yetenekleriyle birlikte gelir. Ayrıca, kullanıcıların karanlık, hafif veya siyah gibi temaları değiştirebilecekleri mantıklı ve kullanıcı dostu bir arayüz sunar.
Bu  **Sohbet Destek Yazılımı**  JavaScript'te yazılmıştır, geliştirme ve dağıtım ile ilgili tüm belgeler mevcuttur. Bu nedenle, tüm kaynak kodu [GitHub][9] 'da bulabilirsiniz. Daha fazla ayrıntı için rocket.chat hakkında okuyabilirsiniz [burada][10].

## Rocket.chat nasıl kurulur {#install}

Yani, rocket.chat ne olduğunu biliyoruz ve bu bölümde bu canlı sohbet yazılımını nasıl kuracağımızı öğreneceğiz. Rocket.chat'i Ubuntu Snaps, Dockerhub gibi çeşitli pazarlardan yükleyebilir veya kendi sunucunuza yükleyebilirsiniz. Bu makalede, Ubuntu'daki Snaps aracılığıyla rocket.chat’ın kurulumuna odaklanacağız. En hızlı kurulum yöntemidir.
Snaps güvenlidir. Rocket.Chat ve tüm bağımlılıkları sisteminizin geri kalanından izole edilir. Snaps ayrıca yeni bir sürüm olduğunda otomatik olarak güncellenir.
İlk önce Ubuntu'da, aşağıdaki komutla SNAP'ı yükleyin
```
sudo apt-get install snapd
```
Ardından SNAP komutu aracılığıyla Rocket.chat Sunucusunu yükleyin.
```
sudo snap install rocketchat-server
```
Snap zaten çalışıyor ve çalışıyor. Http: // localhost: 3000'e göz atın ve rocket.chat'i ayarlayın. Nginx Proxy'yi Rocket.chat örneğini alan adınızla haritalamak için yapılandırabilirsiniz.

## Canlı Sohbet Özelliğini Etkinleştir {#enable}

Rocket.chat yazılımı yüklendikten ve yapılandırıldıktan sonra, bir sonraki adım özelliklerini etkinleştirmektir. Blog yazısının bu bölümünde, web sitenizde  **sohbet destek yazılımı**  nasıl etkinleştirileceğini açıklamaktadır. Roketinizdeki LiveChat özelliğini etkinleştirmek için.
1.  **Yönetim**  adresine gidin

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.Chat Yönetimi">}}

2. ‘  **omnichannel** ‘ **Ayarlar**  'da arayın ve etkinleştirin.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat Arama Omini">}}

Etkinleştirildikten sonra, bir yönetici, sol üst köşe açılır menüsünde Omnichannel adlı yeni bir menü aracılığıyla çok kanallı panel ayarlarına erişebilir.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.Chat Omini Kanalı">}}

Ve sonra canlı sohbet widget’ının görünümünü ve hissini yapılandırın

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat Livechat Widget">}}


##  **Web sitenize canlı sohbet widget'ı yükleyin**  {#widget}

Bu bölümde, işletme web sitesine canlı sohbet widget'ları yükleyeceğiz. Şimdi,  **LiveChat kurulumuna erişmek için**  Ayarlar:
Aşağıda gösterildiği gibi çok kanallı panel ayarlarında  **Livechat kurulum**  adresine gidin ve verilen kod parçasını kopyalayın.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="Rocket.Chat Widget">}}

Ve bu kodu sitenizdeki son etiketin üzerine yapıştırın; Canlı sohbet widget'ı web sayfanızın sağ alt köşesinde görünecektir. Canlı sohbet yapılandırmalarınıza göre aşağıda gösterildiği gibi.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Canlı sohbet yazılımı">}}

{{_LINE_48_}}

## Çözüm {#conclusion}

Bu bizi bu blog yazısının sonuna getiriyor. Bu makalede, rocket.chat, rocket.chat nasıl yükleyeceğimizi yaşadık ve ayrıca Ubuntu Snaps aracılığıyla kendi sunucunuza nasıl yükleneceğinizi gösterdik. Ayrıca canlı sohbet özelliğini nasıl etkinleştireceğinizi ve widget'ı web sitenize nasıl yükleyeceğinizi öğrendik. Ayrıca,  **Müşteri Destek Yazılımı** , yukarıda tartıştığımız belirli faktörler nedeniyle herhangi bir işletme web sitesinin sahip olması gereken bir bileşeni haline gelmiştir. Ancak, bu blog yazısı, işletme web sitenizde açık kaynaklı bir canlı sohbet yazılımı dağıtmak istiyorsanız size gerçekten yardımcı olacaktır. Ayrıca, aşağıdaki “Keşfet” bölümünde kontrol edebileceğiniz birçok **sohbet destek yazılımı**  ve makaleler vardır.
Son olarak, [  **Containerize.com**  ][11] diğer açık kaynak**açık kaynak sohbet uygulamaları üzerine makaleler yazıyor. Dahası, bizi sosyal medya hesaplarımızda takip edebilirsiniz [Facebook][13], [LinkedIn][14] ve [Twitter][15].

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz.
  * [Zulip][16]
  * [Lets-chat][17]
  * [Botpress][18]
  * [Botpress kullanarak işletmeniz için AI tabanlı bir SSS botu nasıl oluşturulur][19]
  * [Web sitesi için Top 5 Ücretsiz Müşteri Destek Sohbet Yazılımı][1]
  * [Rocket.chat kullanarak WordPress Anlık Mesajlaşma][2]
  * [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][20]
  * [Botpress kullanarak rocket.chat'de bot nasıl oluşturulur ve çalıştırılır][21]
  * [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][20]



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
