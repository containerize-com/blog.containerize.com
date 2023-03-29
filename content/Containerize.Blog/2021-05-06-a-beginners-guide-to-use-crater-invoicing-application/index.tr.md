---
title: "Krater faturalandırma uygulamasını kullanmak için yeni başlayan bir kılavuz" 
seoTitle: "Krater faturalandırma uygulamasını kullanmak için yeni başlayan bir kılavuz" 
description: "Açık kaynaklı bir fatura sistemine başlamak için bir öğretici. Bu krater kılavuzu, temel kavramlara ve özelliklere aşina olmanıza yardımcı olur." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Bu öğretici, krater faturalandırma uygulamaları hakkında bilgi edinmenize yardımcı olacaktır. Küçük işletmeler için ücretsiz ve açık kaynaklı bir fatura sistemidir." 
url: /tr/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Bu öğretici, krater faturalandırma uygulamaları hakkında bilgi edinmenize yardımcı olacaktır. Küçük işletmeler için ücretsiz ve açık kaynaklı bir fatura sistemidir.

{{< figure align=center src="images/blog-crater.png" alt="Açık Kaynak Fatura Sistemi">}}

Her işletmenin faturaların, giderlerin, ödemelerin ve daha fazlasının yönetimi için bir tür sisteme ihtiyacı vardır. Faturalandırma yazılımı, faturalandırma görevlerini kolayca gerçekleştirebilmeniz ve diğer önemli şeylere odaklanabilmeniz için yönetmenize yardımcı olur. Bu yazıda, krater kurmayı ve iş için muhasebe operasyonlarını nasıl ele alacağımızı öğreneceğiz.
  * [Krater hakkında giriş][1]
  * [Krater kurulum prosedürü][2]
  * [Özellik Keşfi][3]
  * [Sonuç][4]

## Krater hakkında giriş {#Introduction}

[Crater][5] ücretsiz ve açık kaynaklı bir faturalandırma uygulamasıdır. Kesinlikle ücretsizdir ve en son sürümlere kolayca güncelleyebilirsiniz. Küçük işletmeler ve serbest çalışanlar için ücretsiz bir muhasebe sistemidir. Ayrıca, masrafları ve ödemeleri takip etmenize, vergileri hesaplamanıza ve tahmin ve faturalar üretmenize olanak tanıyan tam bir faturalandırma çözümüdür. Ayrıca, iPhone ve Android cihazlar için hazır mobil uygulamalarla birlikte gelir. Herhangi bir yerden yönetmenize izin verecektir. Crater web tabanlı bir faturalandırma yazılımı olduğundan, web uygulaması Laravel ve Vuejs ile tasarlanmıştır ve mobil uygulamalar React Native ile oluşturulmuştur. Geliştirme ve dağıtım ile ilgili tüm belgeler mevcuttur. Tam kaynak kodu [GitHub][6] 'da bulunabilir.

## Kraterin kurulum prosedürü {#Installation}

Bu bölümde kraterin manuel yöntemle nasıl yükleneceğini ve Docker'ı kullanmayı tartışacağız.

### Manuel Kurulum
  * En son sürümü indirin.
  * İndirilen Zip dosyasını sunucunuza yükleyin ve çıkarın.
  * Alan adınızı krater klasörü içindeki genel dizine yönlendirin.
  * Projenizin kökenine gidin ve uygun ayrıcalıkları atamak için “sudo chmod -r 775 ./” komutunu çalıştırın.
  * Sitenizi tarayıcıda açın ve kurulum sihirbazını takip edin.

### Docker Kurulumu
  * Docker'ı sunucunuza yükleyin :.
  * Bu kılavuzu izleyerek Docker Compose'u yükleyin :.
  * Bu komutu kullanarak klon krateri deposu.
```
git clone https://github.com/bytefury/crater
```
  * Aşağıdaki çalıştırın krater yüklemek için tek tek komutlar.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Tarayıcınızdaki krater sitesini açın ve kurulum sihirbazını takip edin.

## Özellik Keşfi {#Feature}

Bu bölümde, bu açık kaynak faturalandırma uygulamasının temel özelliklerini araştıracağız. Kurulumu bitirdikten sonra, sitenizi http://example.com açın ve uygulamaya giriş yapın.
*  **Dashboard**  - Oturum açtıktan sonra, uygulamanın tüm görünümünü görüntüleyen gösterge tablosuna götürüleceksiniz.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

*  **Ayarlar**  - Şimdi Ayarlar sayfasına gidin ve hesap ayarları, şirket bilgileri, tercihler, özelleştirmeler, bildirimler, ödeme modülleri vb.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

*  **Öğeler**  - Öğeler sekmesine kenar çubuğu menüsünden erişilebilir. Bu sekmeden öğelerinizi yönetebilirsiniz. Tahminler ve faturalar oluştururken öğeleri kullanabilirsiniz.
*  **Tahminler**  - Oranlar, indirimler, envanter ve daha fazlasını içeren kapsamlı bir teklif oluşturun. Üç yerleşik şablondan biri bir tahmin oluşturmak için kullanılabilir. Tahmine ek vergiler eklenebilir ve bunlar bileşik vergi olarak da eklenebilir.
*  **Faturalar**  - Profesyonel faturalar yapın ve bunları müşterilerinize gönderin. Fatura oluşturmak için mevcut şablonları kullanabilirsiniz. Faturaya ek vergiler ve bileşik bir vergi ekleyebilirsiniz. Ayrıca, müşterilerinize bir yüzde veya sabit değer indirimi sağlayabilirsiniz. Ayrıca, bireysel ürünlere ve toplam fatura tutarına indirim uygulayabilirsiniz.
*  **Ödemeler**  - Bu modül, müşterilerinizden aldığınız ödemeleri takip etmenize yardımcı olur.
*  **Giderler**  - Giderler modülü, farklı hizmetlerde ne kadar harcadığınızı takip etmenize yardımcı olur.
*  **Vergiler**  - Bu özelliği kullanarak vergilerinizi kolayca yönetebilirsiniz. Toplam fatura tutarına veya bireysel öğeye birden fazla vergi ekleyebilirsiniz.
*  **Raporlar**  - Bir ister birkaç müşteri için olsun, tüm faturalarınız hakkında kapsamlı bilgi alın. Krater Destekleri Satış Raporu, Kâr ve Zarar Raporu, Gider Raporu ve Vergi Raporu gibi dört tür raporla birlikte gelir.

## Çözüm {#Çözüm}

Krater ve manuel ve Docker ile nasıl ayarlanacağını öğrendik. Ayrıca, her muhasebe faturalandırma yazılımının sağlaması gereken bazı özelliklere de baktık. Umarım, bu kılavuz, işletmeniz için hızlı bir açık kaynak fatura sistemi uygulamanıza yardımcı olabilir.
Son olarak, [Containerize.com][7] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [faturalandırma][8] kategorisiyle iletişime geçin.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Krater - Küçük İşletmeler İçin Ücretsiz Muhasebe Sistemi][5]
  * [2021 yılında ilk 5 Açık Kaynak Muhasebe Yazılımı][9]



 [1]: #Introduction
 [2]: #Installation
 [3]: #Feature
 [4]: #Conclusion
 [5]: https://products.containerize.com/invoicing/crater/
 [6]: https://github.com/bytefury/crater
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/invoicing/
 [9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
