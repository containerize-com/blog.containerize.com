---
title: "Multitenancy nedir? | Neden çok kiracı bir yaklaşım?" 
seoTitle: "Multitenancy nedir? | Neden çok kiracı bir yaklaşım?" 
description: "Multitenancy nedir? Çok kiracılığın arkasındaki gerçek konsepti öğrenmek ve ölçeklenebilir çok kiracılı uygulamalar oluşturmaya başlamak için bu blog gönderisini izleyin." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "Çok kiracılı bir uygulama mimarisi tasarlayın ve kullanıcınızın gereksinimlerini verimli bir şekilde karşılayın. MultiPancy'nin ölçeklenebilir yazılım oluşturmanızı nasıl sağladığını keşfedelim." 
url: /tr/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## Çok kiracılı bir uygulama mimarisi tasarlayın ve kullanıcınızın gereksinimlerini verimli bir şekilde karşılayın. MultiPancy'nin ölçeklenebilir yazılım oluşturmanızı nasıl sağladığını keşfedelim.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## Genel Bakış
[Programlama] [1] kategorisindeki başka bir blog yayınına hoş geldiniz. Çok kiracılı bir uygulama mimarisini tartışacağız. Aslında, [Containerize.com] [2] açık kaynaklı ürün yığınında çok çeşitli çok kiracılı uygulamalara sahiptir. Açık kaynaklı çok kiracılı uygulamalar arasında [Form.io] [3], [Botpress] [4] ve daha fazlası bulunmaktadır. Buna ek olarak, bu açık kaynaklı yazılımların mimarisi, dağıtım, geliştirilmesi ve kullanımı hakkında tam [belgeler] [5] mevcuttur. Bu makaleyi yazmanın ardındaki nedeni, yazılım geliştirmede çok kiracılığın arkasındaki kavramı anlamaktır. Öyleyse,**Çok Mitenancy nedir?**Bulunalım?**Ayrıca çoklu şehir ve çok kiracılı vs tek kiracılı mimarinin artılarını ve eksilerini de gözden geçireceğiz.
Bu yazıda aşağıdaki noktalar tartışılacaktır:
  * [Multitenancy nedir? Çok kiracılı vs tek kiracı] [6]
  * [Çok Kireli Uygulama Mimarisi Türleri] [7]
  * [Çok Kireli Uygulamanın İş Avantajları] [8]
  * [Çoklu kiracılıkta dezavantajlar] [9]

## Multi -Miteancy nedir? Çok kiracı vs tek kiracı {#What-IS-Multenancy-Multi-Kenant-VS-Single Tenant}
Multi-Mensicancy, özellikle bilinen kiracılardan çok sayıda ön uç sağlayan tek bir sunucu örneğini ifade eder. Ne zaman çok kiracılı bir yazılımla karşılaştığınızda, beyninize bu yazılımın paylaşılan bir sunucunun tek bir örneğini çalıştırdığını ve birden fazla kiracı (istemciler) bu örneğe farklı markalarla bağlandığını söyleyin.
Örneğin, bir üniversite için oluşturulan yazılım, farklı ön uç markalarına ve program verilerine sahip farklı departmanlara hizmet vermektedir. Temel olarak, sunucunun tüm kiracıları çalıştıran ve servis eden tek bir örneği vardır. Ayrıca, tüm kiracılar arasında veri ayırma ve veri gizliliği vardır. Ayrıca, her kiracının kendi iş mantığı vardır ve verilerini tek bir ancak özel/izole bir yerde getirir ve saklar.

{{< figure align=center src="images/multi-tenant-1.png" alt="çok kiracı mimarisi">}}

Şimdi, tek kiracı mimariye hızlı bir şekilde bakalım. Tek kiracı mimaride kiracı başına bir sunucu örneği vardır. Yine, üniversite yazılımına bir örnek alalım. Tek kiracılı yaklaşım, departman başına bir sunucu örneğini ifade eder ve örnek sayısı departman sayısına (kiracılar) bağlıdır.

{{< figure align=center src="images/single-tenant-2.png" alt="tek kiracı mimarisi">}}


## Çok Kireli Uygulama Mimarisi Türleri {#Multi-Kireli Uygulama Türleri-Mimarlık}
Şimdiye kadar, çok kiracılık hakkında bir anlayışınız var ve şimdi çeşitli türlerinden geçeceğiz.
* * Bir veritabanı-bir uygulama örneği**: Bu yaklaşım oldukça popülerdir ve çok kiracı uygulamalar oluşturmak için yaygın olarak kullanılmıştır. Bu yaklaşıma göre, tek bir veritabanıyla çalışan bir uygulama örneği vardır. Buna ek olarak, paylaşılan bir şema vardır ve kiracının verileri benzersiz kimliklerine göre tek bir yerde saklanır.
* * Birden çok veritabanı-Bir uygulama örneği:**Bu çok kiracılı uygulama mimarisinde, uygulamanın yalnızca bir örneği birden fazla veritabanı ile çalışır. Her kiracının kendi veritabanı şeması vardır, burada tüm bilgilerin her kiracı için ayrı ayrı kaydedildiği.
* * Çoklu Veritabanı - Birden Çok Uygulama Örneği**: Üçüncü yaklaşım, birden çok sunucu örneği ile birlikte birden fazla veritabanı çalıştırmayı ifade eder. Paylaşılan hiçbir şey yoktur ve her kiracı tam bir izolasyona sahiptir ve kiracılar arasında bağımlılık yoktur.

## Çok kiracı uygulamanın iş avantajları {#Multi-Kenant-App}
Bu bölümde, multitenancy'yi tercih etmenin bazı önemli faydalarından yararlanacağız. Her ne kadar avantajları tartışarak uzun süre gidebiliriz, ancak aşağıdaki noktaları görelim:
* * Ölçeklenebilirlik**: Çok kiracı bir mimariyi ölçeklendirmek kolaydır. Seçtiğiniz türden bağımsız veya dikey olarak ölçeklenebilirsiniz.
* * Maliyet etkin**: Çoklu Miteans'i seçmek operasyonel maliyetlerinizi tasarruf eder. Paylaşılan kaynaklar vardır, bu nedenle kaynakları ölçeklendirmek her zaman uygun maliyetlidir.
* * Verimlilik ve Esneklik**: Çok kenarlı bir ortamda, geliştirme ve dağıtımda verimlilik elde edersiniz. Örneğin, tüm kiracıları güncellemek için paylaşılan bir veritabanı şemasında bir komut dosyası çalıştırabilirsiniz.
* * Daha İyi Kaynak Yönetimi**: Kaynakları eklemek ve kaldırmak basittir. Ayrıca, bu mimari gelişmiş ve iyi yönetilen altyapı sunmaktadır. Ayrıca, her kiracı özeldir ve güvenlidir ve paylaşılan/paylaşılmayan bir veritabanına erişebilir.

## Multi-Tenacy'de Dezavantajlar {#Multi-Tenacy-In-Tenacy}
Bu blog yazısının amacı,**çok kiracılı mimarlık hakkında adil bir his vermektir.**Bu nedenle, çok kiracılığa bağlı bazı eksileri keşfedelim.
* * Karmaşık Kimlik Doğrulama Mekanizması**: Multi -Miteanity'de kaynak tahsisinin paylaşılan doğası nedeniyle, veri erişim noktaları için katı protokoller vardır.
* * Sunucu dökümü:**Çok kiracılı uygulama mimarisini seçerken dikkate alınması gereken önemli bir noktadır. Herhangi bir nedenle sunucu düştüğünde tüm kiracılar işlevsel değildir.
* * Gizlilik Riski**: Çok kiracılı bir mimaride, yüksek riskli güvenlik ihlali vardır. Aslında, tüm kiracıların verileri paylaşılan bir veritabanında saklanır, böylece herhangi bir üçüncü taraf istilası veri bozulmasına veya hırsızlığına neden olabilir.

## Çözüm
Bu blog gönderisini burada bitiriyoruz. Bu makalede**Çok Değerlilik Nedir**gibi sorularınıza cevabı var mı? Buna ek olarak,**çok kiracılı vs tek kiracılı**altyapıyı da araştırdık. Ayrıca, bu kılavuz çok kiracı uygulama mimarisi veya tek bir kiracı seçerken size yardımcı olacaktır. Her şeyden önce, bir SaaS inşa ediyorsanız ilk tercih olan çoklu deneme. “Ayrıca See” bölümünde bulabileceğiniz başka ilginç blog yayınları da var, bu da size teknoloji dünyasına en son bilgileri verecek.
Son olarak, [Containerize.com] [2] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Dahası, bizi [Facebook] [10], [LinkedIn] [11] ve [Twitter] [12] 'de sosyal medya hesaplarımızda takip edebilirsiniz.

## Bir soru sor
[Forum] [13] 'de sorularınızı veya sorgularınızı bize bildirebilirsiniz.

## SSS
* * Örneğin çok kiracı nedir?**
Multitenancy'nin ne olduğunu bilmek için lütfen bu [bağlantı] [6] ziyaret edin. Örneklerle birlikte detaylar var.
* * Çok kiracılı mimarinin anlamı nedir?**
A**Çok Kireli Uygulama Mimarisi**, bir sunucunun tek bir örneği birden fazla kiracıya (istemciler) hizmet verir. Daha fazla ayrıntı için lütfen bu [link] [7] 'e gidin.

## Ayrıca bakınız
  * [Üretken AI nedir | Üretken yapay zeka] [14]
  * [Chatgpt'i Google sayfalarıyla nasıl entegre eder] [15]
  * [Vscode'da chatgpt nasıl kullanılır | VSCODE Uzatma Kodu GPT] [16]
  * [Openai Chatbot GPT-3 Nedir | Chatgpt bir AI devrimi] [17]
  * [Yapay Zekaya Giriş | AI nedir?] [18]
[1]: https://blog.containerize.com/category/programming/
[2]: https://www.containerize.com/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/live-chat/botpress/
[5]: https://products.containerize.com/
[6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
[7]: #Types-of-Multi-Tenant-Application-Architecture
[8]: #Business-Benefits-of-Multi-Tenant-App
[9]: #Drawbacks-in-Multi-Tenancy
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
