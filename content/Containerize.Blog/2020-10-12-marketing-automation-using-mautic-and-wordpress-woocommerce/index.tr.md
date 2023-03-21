---
title: "Mautic ve WooCommerce Entegrasyonu ile Pazarlama Otomasyonu" 
seoTitle: "Mautic ve WooCommerce Entegrasyonu ile Pazarlama Otomasyonu" 
description: "Mautic ve WooCommerce entegrasyonu, WordPress sitelerinden Mautic'e iletişim bilgilerinin gönderilmesine izin verir. Bu, ürünlerin Mautic uygulaması aracılığıyla pazarlanmasına yardımcı olur." 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "Birlikte Mautic ve WordPress WooCommerce kullanarak satışları övün. Müşterilerin verilerini WordPress'ten Mautic'e getirerek pazarlama sürecini otomatikleştirin." 
url: /tr/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

## Birlikte Mautic ve WordPress WooCommerce kullanarak satışları övün. Müşterilerin verilerini WordPress'ten Mautic'e getirerek pazarlama sürecini otomatikleştirin.

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="Mautic-Wookommerce Entegrasyonunu Kullanarak Pazarlama Otomasyonu">}}


## Genel Bakış:
Mautic-Woocommerce Entegrasyonu, Mautic APP'deki tüm kişileri almak için kolay bir yol sağlar. Ardından bu kişileri kullanarak, gereksinimlerinize göre pazarlama kampanyaları oluşturabilirsiniz. Mautic, pazarlama kampanyalarınız üzerinde tam kontrol sağlayan harika bir pazarlama aracıdır.
Mautic açık kaynaklı ve ücretsiz pazarlama otomasyon çözümüdür. Pazarlama kampanyaları, segmentler, formlar, raporlar ve çok daha fazlası oluşturmak için kullanılır.
WooCommerce, WordPress için açık kaynaklı bir e-ticaret eklentisidir. Bu noktada dünya çapında çoğunlukla kullanılan e-ticaret çözümüdür. WooCommerce için ihtiyaçlarınıza göre kullanılabilecek yüzlerce eklenti var.
Mautic ve WordPress için pazarlama otomasyon çözümü sağlayan bir eklenti var. WooCommerce'ı Mautic ile entegre etmek için lütfen bu adımları izleyin [WooCommerce için Mautic ile Entegrasyon - Açık Kaynak Pazarlama Otomasyonu.][1]
Bu blog aşağıdaki bölümleri kapsayacaktır:
  * [WordPress eklentisi yapılandırması][2]
  * [Mautik konfigürasyon][3]
  * [Son düşünceler][4]

## WordPress eklenti yapılandırması   {#wordpress}
  1. Eklentilere gidin.
  2. “Yeni Ekle” ye tıklayın.
  3. “**Woocommerce için Mautic ile entegrasyon arayın** ”.
  4. Eklentiyi bulduktan sonra “Şimdi Yükle” ye tıklayın.
  5. Kurulumdan sonra “Etkinleştir” i tıklayın.
  6. Ardından WooCommerce -> Mautic -> Bağlama sekmesine gidin.
  7. Formu aşağıdaki verilerle doldurun:
      * Temel URL.
      * Müşteri Kimliği.
      * Gizli kimlik.
  8. Tüm bu alanlar, bir sonraki bölümde açıklanan Mautic APP'de yapılandırıldıktan sonra gelecek.

{{< figure align=center src="images/woocommerce-1024x665.png" alt="Mautic ve WordPress Entegrasyonu">}}


## Mautik Yapılandırma:   {#Mautic}
  1. Mautic sitenizden ayarlara gidin.
  2. Yapılandırmalara gidin.
  3. API ayarlarından API'yi etkinleştirin.
  4. API kimlik bilgilerine gidin.
  5. “Yeni” yi tıklayın, istediğiniz adları girin ve WordPress sitenizin tam URL'sini girin, yani [http://yourwordpresssite.com/wp-admin/admin.php Cialy [5]
  6. Kaydet ve Kapatın.
  7. Kamu ve özel anahtarlar yaratacaktır.
  8. WordPress sitenize gidin ve daha önce yüklediğiniz Mautic eklentisini bulun.
  9. Mautic sitenizden oluşturduğunuz kamu ve gizli anahtarları girin.
 10. OAUTH1 veya OAUTH2'yi (Mautic'te seçtiğinizle aynı) seçin ve kayıtlı kullanıcıları Evet'e gönder.
 11. Eklentiyi kaydedin ve yayınlayın.
 12. Bundan sonra WordPress sitenize yetki verebilirsiniz.
 13. WordPress, yetkilendirme için mautik örneği yeniden yönlendirecektir.
 14. “Yetkilendir” i tıklayın ve hepsi bu.
 15. Mautic sitenize temas kurmaya başlayacaksınız.

{{< figure align=center src="images/mautic-1024x622.png" alt="Mautic ve WordPress entegrasyon adımları">}}


## Son Düşünceler:   {#Final}
Mautic-Woocommerce entegrasyonu birlikte pazarlama hedeflerinize ulaşmanıza yardımcı olabilir. Bu entegrasyon, e -ticaret pazarlama otomasyonu için en iyi çözümlerden biridir. WordPress ile kolayca çok fazla müşteri alabilirsiniz ve daha sonra Mautic ile bu müşterileri hedeflemek ve bunları kesinlikle satışlarla övünecek ürünleriniz/hizmetlerinizle ilgili olarak güncel tutmak için sınırsız kampanyalar oluşturabilirsiniz.

## Keşfetmek:
İlgili aşağıdaki bağlantıları bulabilirsiniz:
  * [Wodpress][6]
  * [Mautic][7]
  * [Mautic nasıl kurulur - Facebook Entegrasyonu][8]
  * [Kurşun beslemesini otomatikleştirmek için drupal mautik entegrasyon][9]
  * [Mautic ve WordPress WooCommerce kullanarak pazarlama otomasyonu][10]
  * [Mautic'te pazarlama kampanyaları nasıl kurulur][11]

  
[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/tr/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
