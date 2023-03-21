---
title: "Mautic'te çoklu kiracılık nasıl uygulanır" 
seoTitle: "Mautic'te çoklu kiracılık nasıl uygulanır" 
description: "Mautic, açık kaynaklı bir pazarlama otomasyon çözümüdür. Mautikte çoklu kiracılığın uygulanması maliyetleri azaltır, verimliliği ve güvenliği artırır." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Mautic'te çoklu kiracılık uygulayarak maliyetleri tasarruf edin ve kaynak kullanımını en üst düzeye çıkarın. Çok kiracılık kod özelleştirmeleri, uygulama güncellemeleri, gelişmiş üretkenlik ve kolay bakıma yardımcı olur." 
url: /tr/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Mautic'te çoklu kiracılık uygulayarak maliyetlerden tasarruf edin ve kaynak kullanımını en üst düzeye çıkarın. Çok kiracılık kod özelleştirmeleri, uygulama güncellemeleri, gelişmiş üretkenlik ve kolay bakıma yardımcı olur.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Mautic'te çoklu kiracılık nasıl uygulanır">}}

Mautic, pazarlama e -postalarınız, açılış sayfalarınız, iş akışlarınız ve pazarlama faaliyetleriniz için önlemler üzerinde tam kontrol sağlayan ücretsiz ve açık kaynaklı bir pazarlama otomasyon çözümüdür. Bu öğreticideki aşağıdaki bölümleri ele alacağız:
  * [Çok kiracılık nedir][1]
  * [Mautic nedir][2]
  * [Mautic'te çoklu kiracılık uygulayın][3]
  * [Sonuç][4]

## Multi-kiracılık nedir   {#çoklu kiracılık}
Çok kiracılı yazılım mimarisinde, bir yazılım uygulamasının tek bir örneği birden fazla kiracıya hizmet eder. Her kiracı verisi, aynı başvuru örneğini paylaşan diğer kiracıdan izole edilir. Bu kiracılar mantıksal olarak izole, ancak fiziksel olarak entegre. Bu, tüm kiracılar için veri güvenliği ve gizliliği sağlar. Tek bir uygulama örneğinden birden fazla kiracı oluşturmak çok daha az bellek gerektirir. Kiracılar kaynakları paylaşır ve yazılım bakımı, altyapı ve veri merkezi operasyonları için maliyetleri azaltır. Maliyetler tek kiracı bir altyapıdan daha düşük olma eğilimindedir.

## Mautic nedir   {#Mautic}
[Mautic][5] ücretsiz ve açık kaynaklı bir pazarlama yazılımıdır. Mautic kullanarak pazarlama kampanyaları, olası satış üretimi, temas segmentasyonu vb. Gibi tekrarlayan pazarlama görevlerini otomatikleştirin. Kurşun üretimi, kampanya oluşturma, temas segmentasyonu, e -posta oluşturucu, A/B testi, sayfa oluşturucu, kurşun besleme ve daha fazlası gibi şaşırtıcı özelliklere sahiptir. Mautic ayrıca tüm popüler sosyal platformlarla entegrasyonu destekler; Facebook, Twitter, LinkedIn. Tüm bu inanılmaz özellikler, genel müşteri deneyimini artırmanıza ve işletmeniz için pazarlama otomasyonunu geliştirmenize yardımcı olur.

## mautic   {#implement}
  * “Main_db” olarak adlandırılan yeni bir boş veritabanı oluşturun.
  * Ardından, tüm kiracılarla ilgili ayrıntıları taşıyacak “Kiracı” adlı tablo oluşturun.
  * Şekilde gösterildiği gibi site \ _name, url ve db \ _name dahil olmak üzere 3 alanı olacaktır.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Mautic'te çoklu kiracılık nasıl uygulanır">}}

  * Bundan sonra Open Mautic/App/Paths.php dosyası ve bu kodu ekleyin:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * Bu, URL yolu temelinde ilgili yapılandırma dosyasını seçecektir.
  * Ardından mevcut mautik kurulumun veritabanını kopyalayın ve yeni kiracı için kullanın.
  * Bundan sonra, Mautic/App/config/local.php kopyasını oluşturun ve [site_name] .php olarak yeniden adlandırın.
  * Son olarak yeni veritabanına göre veritabanı adını, ana bilgisayarını, şifresini ve kullanıcıyı güncelleyin.

## Sonuç   {#Conclusion}
Mautic, ücretsiz, zengin özellikli ve kalite odaklı bir pazarlama otomasyon çözümüdür. Pazarlama kampanyaları, segmentler, formlar, raporlar ve çok daha fazlası oluşturmanıza olanak tanır. Mautikte çoklu kiracılığın uygulanması maliyetleri azaltır, verimliliği, ölçeklenebilirliği ve güvenliği artırır. Sadece bir kurulumdan yüzlerce kiracı oluşturun.

## Keşfetmek
Mautic ve Facebook hakkında daha fazla bilgi edinmek için lütfen şu adresi ziyaret edin:
  * [Mautic | Açık Kaynak İçerik Pazarlama Teknolojisi Platformu][5]
  * [Kampanya Oluşturucu Kullanarak Mautic Kampanyalar Nasıl Kurulur][6]
  * [Kurşun beslemesini otomatikleştirmek için drupal mautik entegrasyon][7]
  * [Mautic ve WooCommerce Entegrasyonu ile Pazarlama Otomasyonu][8]
  * [Dijital Pazarlama Otomasyonu için Mautic & Joomla'yı Entegre][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
