---
title: "Dijital pazarlama otomasyonu için Mautic & Joomla'yı entegre edin '" 
seoTitle: "Dijital pazarlama otomasyonu için Mautic & Joomla'yı entegre edin" 
description: "Mautic ve Joomla entegrasyonu, işletmenize dijital pazarlama otomasyonu ile yardımcı olabilir. Ürünleri mautik kampanyalar aracılığıyla pazarlamaya yardımcı olur." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Mautic ve Joomla entegrasyonu, işletmenize dijital pazarlama otomasyonu ile yardımcı olabilir. Çevrimiçi mautik kampanyalar aracılığıyla ürünlerin pazarlanmasına yardımcı olur." 
url: /tr/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## Mautic ve Joomla entegrasyonu, işletmenize dijital pazarlama otomasyonu ile yardımcı olabilir. Çevrimiçi mautik kampanyalar aracılığıyla ürünlerin pazarlanmasına yardımcı olur.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Mautic ve Joomla entegrasyonu">}}


## Bu entegrasyon işletmenize nasıl yardımcı olabilir:
Mautic ve Joomla entegrasyonu, ürünlerinizi/hizmetlerinizi çok kolay ama verimli bir şekilde pazarlamanıza izin verecektir. MAUTIC Ücretsiz bir açık kaynak pazarlama çözümü, pazarlama kampanyaları üzerinde büyük bir kontrol sağlar ve duruma göre damla kampanyasına devam etmek çok basittir. Örneğin: Müşteri e -postayı okuduysa veya ürün sayfalarınızı ziyaret ettiyse size bilgi verir. Bu bilgileri kullanarak, o müşteri için sonraki e -postaları göndermeye devam edip etmeyeceğinize karar vermek için kampanyalar ayarlayabilirsiniz. Bu entegrasyon dijital pazarlama otomasyonuna yardımcı olacaktır. Bu blog yazısı aşağıdaki bölümlerde size rehberlik edecektir:
  * [Genel Bakış] [1]
  * [Joomla eklentisi kurulumu] [2]
  * [Mautik konfigürasyon] [3]
  * [Sonuç] [4]

## Genel Bakış: {#Overview}
Mautic, açık kaynaklı bir pazarlama otomasyon sistemidir. Ücretsiz bir pazarlama yazılımıdır. Hedeflenen müşterilere pazarlama e -postaları göndermek için sınırsız kampanyalar oluşturmak için kullanabilirsiniz.
Joomla aynı zamanda web siteleri geliştirmek için ücretsiz bir açık kaynaklı içerik yönetim sistemidir. Joomla'da işletme web sitelerinizi kurmak çok kolaydır. Gereksinimlerinize göre kullanılabilecek binlerce uzantıya sahiptir.

## Joomla eklenti kurulumu: {#plugin}
  * [Eklenti] [5] 'i indirin.
  * Ardından uzantılara gidin -> yönetin -> yükleyin.
  * Mautik URL'yi girin.
  * Mautic örneğinizden yüklenen 1 Px GIF görüntüsü ekler.
  * Formları aşağıdaki kod snippet'ini kullanarak Joomla içeriğine yerleştirin: {mautic type = ”form” kimliği}
  * Ardından, Form'u Mautic uygulamanızda oluşturabilir ve kimliği URL'den alabilirsiniz.
  * Dinamik içerik aşağıdaki kod kullanılarak da eklenebilir: {mautic type = ”içerik” slot = ”slot_name”} varsayılan içerik burada {/mautic}.
  * slot_name, kampanyanıza bir "İstek Dinamik İçerik" kararı eklerken belirttiğiniz yuvanın tanımlayıcısıdır.
Kurulumdan sonra Joomla sitenize formlar oluşturmanız ve gömmeniz gerekir. Bu formlar temas bilgilerini Mautic'e gönderecektir. Joomla'da eklenti yapılandırmayı bitirdikten sonra, bir sonraki adım Mautic üzerinde yapılandırmak olacaktır.

## Mautik Yapılandırma: {#Mautic}
  * Mautic sitenize gidin, ayarlara geçin.
  * Yapılandırmaya tıklayın.
  * API ayarlarından API'yi etkinleştirin.
  * Mautic'i Joomla ile bağlamak için sitelerinizde SSL sertifikası olmalıdır.
  * Ardından API kimlik bilgilerine gitmeniz gerekir.
  *Web sitenizde bir SSL yoksa (böylece ** http **: //yourjoomlasite.com adresine gidersiniz), OAuth1'i seçin. Sitenizde bir SSL varsa (böylece ** https **: //yourjoomlasite.com adresine gidersiniz), OAuth2'yi seçin.
  * Yeni tıklayın, bir ad (istediğiniz herhangi bir şey olabilir) ve Joomla'nın tam URL'sini sağlayın! Site ([https://yourjoomlasite.com] [6])
  * Kaydet'i tıklayın ve kapatın.
  * Burada kamu ve özel anahtarlar alabilirsiniz.
  * Joomla sitenize gidin ve daha önce yüklediğiniz Mautic eklentisini bulun.
  * Mautic sitenizden oluşturduğunuz genel ve gizli anahtarları girin.
  * OAUTH1 veya OAUTH2'yi (Mautic'te seçtiğinizle aynı) seçin ve kayıtlı kullanıcıları Evet'e gönderin.
  * Eklentiyi kaydedin ve yayınlayın.
  * Bundan sonra Joomla sitenize yetki verebilirsiniz.
  * Joomla, yetkilendirme için mautik örneği yeniden yönlendirecektir.
  * “Yetkilendir” i tıklayın ve hepsi bu.
  * Mautic sitenize temas kurmaya başlayacaksınız.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Mautic ve Joomla entegrasyonu">}}


## Sonuç: {#Conclusion}
Bu yazıda Mautic ve Joomla'nın dijital pazarlama otomasyonuna nasıl yardımcı olabileceğini tartıştık. Bu açık kaynaklı ücretsiz pazarlama çözümü, Joomla sitesinden gelen tüm kişileri gruplandırmanıza ve bunları kullanarak pazarlama kampanyaları oluşturmanıza olanak tanır. Mautic, ihtiyaçlarınıza göre farklı segmentlerde farklı kampanyalar yapabilmeniz için segmentler oluşturmanıza izin verir. Ayrıntılı genel bakış için lütfen [Joomla] [7] ve [Mautic] [8] bloglarını kontrol edin.

## Keşfetmek:
İlgili aşağıdaki bağlantıları bulabilirsiniz:
  * [Joomla] [7]
  * [Mautic] [8]
  * [Mautic nasıl kurulur - Facebook Entegrasyonu] [9]
  * [Kurşun beslemesini otomatikleştirmek için drupal mautik entegrasyon] [10]
  * [Mautic ve WordPress WooCommerce kullanarak pazarlama otomasyonu] [11]
  * [Mautic'te pazarlama kampanyaları nasıl kurulur] [12]
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
