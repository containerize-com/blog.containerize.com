---
title: "Mautic nasıl kurulur - Facebook Entegrasyonu" 
seoTitle: "Mautic nasıl kurulur - Facebook Entegrasyonu" 
description: "MAUTIC - Facebook entegrasyonu, Facebook potansiyel müşterilerinizi zorluk çekmeden senkronize etmeye yardımcı olabilir ve daha sonra pazarlama kampanyalarında kullanabilir." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Facebook'u getirir, mautic'e yol açar, bir segmente iletişim ekler ve e -posta kampanyaları çalıştırır. Ayrıca Facebook reklamları için özel kitle oluşturmak için bu kişileri de kullanın." 
url: /tr/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Facebook, Mautic'e yol açar, bir segmente iletişim ekler ve e -posta kampanyaları çalıştırır. Ayrıca Facebook reklamları için özel kitle oluşturmak için bu kişileri de kullanın.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Mautic Nasıl Kurulur - Facebook Entegrasyonu">}}

Mautic bir pazarlama otomasyon yazılımıdır ve pazarlama e -postaları, açılış sayfaları ve pazarlama faaliyetleri için iş akışları üzerinde tam kontrol sağlar. Mautic’in damla kampanyaları, hedef kitleye dahil olmaya ve ürünleriniz hakkında güncel tutmaya yardımcı olur. Mautic Facebook entegrasyonu, yeni olası satışların Mautic'e eklenmesi için bir yol sağlar. Bu Mautic - Facebook entegrasyonu ile Facebook kampanyanızdan potansiyel müşteriler otomatik olarak Mautic'e eklenecektir.
Bu öğreticideki aşağıdaki bölümleri ele alacağız:
  * [Facebook geliştirici hesabını yapılandır][1]
  * [Facebook geliştiricisinin uygulamasını yapılandır][2]
  * [Mautic eklenti yapılandırması][3]
  * [Sonuç][4]

## Facebook Geliştirici Hesabını Yapılandır   {#Account}
  * [Geliştiriciler için Facebook][5]
  * Varsa hesabınızı kaydedin.
  * Yeni bir hesap kaydetmek için, sağ üst köşeden “Başla” yı tıklayın.
  * Bundan sonra Facebook hesabınızı seçin ve “Devam” a basın.
  * Ardından açılır pencereden “Geliştirici” düğmesine tıklayın.

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic - Facebook Entegrasyonu - Kayıt Geliştirici Hesabı">}}


## Facebook geliştiricisinin uygulamasını yapılandırın   {#App}
  * "İlk Uygulama Oluştur" u tıklayın

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - Facebook Entegrasyonu - İlk Uygulamayı Oluşturun">}}

  * “İş Entegrasyonlarını Yönet” i tıklayın ve “Devam” a basın.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - Facebook Entegrasyonu - Amaç seçin">}}

  * Sonraki pencerede uygulama adını girin ve uygulama amacını seçin. "Uygulama Oluştur" düğmesine tıklayın.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - Facebook Entegrasyonu - Uygulama Oluşturmak İçin Form Doldur">}}

  * Bir sonraki adım Facebook Oturum Açma'yı ayarlamaktır. Ürünler sayfasından, “Facebook Giriş” kutusunun altındaki “Ayarla” düğmesine tıklayın.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - Facebook Entegrasyonu - Kurulum FB Giriş">}}

  * Sol menüden, ürünler altındaki “Ayarlar” ı tıklayın -> Facebook Oturum Açma.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - Facebook Entegrasyonu - FB Girişini Yapılandırın">}}

  * Mautic web sitesi URL'nizi girin. “İstemci OAuth Giriş” ve “Web OAuth Login” i “Evet” olarak ayarlayın.
  * Şimdi Ayarlar -> Temel Ayarlar'a gidin. Sayfanın altından “+ Platform Ekle” düğmesini tıklayın. Bundan sonra bir açılır pencere açılacaktır. Web Sitesi URL'nizi girin ve değişiklikleri kaydedin.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - Facebook Entegrasyonu - Platform olarak web sitesi ekle">}}


## Mautic eklenti yapılandırması   {#configuration}
  * Mautic panosuna gidin.
  * Ardından sağ üst köşeden “Ayarlar” a geçin.
  * “Eklentiler” i tıklayın.
  * Bundan sonra “Facebook” eklenti ayarlarını açın.
  * Ardından istemci kimliği ve istemci sırrı girin. Bu anahtarları, yukarıdaki adımları aşağıda oluşturduğunuz Facebook Geliştiricileri uygulamasından alın.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - Facebook Entegrasyonu - Mautic'te FB eklentisini yapılandırın">}}

  * “Uygulama Yetkilendir” düğmesine basın.
  * Bundan sonra yeni bir Facebook Yetkilendirme penceresi açılacak. Uygulama yetkisini tamamlamak için istemleri izleyin.
  * Başarılı yetkilendirmeden sonra Mautic’in Facebook eklentisinden “Eşleme İletişim” sekmesine geçin.
  * Burada iletişim alanlarınızı Facebook alanlarıyla eşleştirebilirsiniz.
  * Son olarak, ayarları yayınlayın ve gitmekte fayda var.

## Sonuç   {#Conclusion}
MAUTIC - Facebook entegrasyonu, Facebook potansiyel müşterilerinizi zorluk çekmeden senkronize etmeye yardımcı olabilir. Mautic uygulamasında, tüm bu potansiyel müşterileri bir segmente ekleyebilirsiniz. Onlara e -posta pazarlama kampanyaları çalıştırabilirsiniz. Bu, işletmenizin çok daha büyük bir hedef kitleye ürün/hizmetleri büyütmesine, pazarlamasına ve satmasına gerçekten yardımcı olabilir.

## Keşfetmek
Mautic ve Facebook hakkında daha fazla bilgi edinmek için lütfen şu adresi ziyaret edin:
  * [Mautic | Açık Kaynak İçerik Pazarlama Teknolojisi Platformu][6]
  * [Kampanya Oluşturucu Kullanarak Mautic Kampanyalar Nasıl Kurulur][7]
  * [Kurşun beslemesini otomatikleştirmek için drupal mautik entegrasyon][8]
  * [Mautic ve WooCommerce Entegrasyonu ile Pazarlama Otomasyonu][9]
  * [Dijital Pazarlama Otomasyonu için Mautic & Joomla'yı Entegre][10]

  
[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
