---
title: "WordPress'ten Ghost'a Göç için Bir Kılavuz | WordPress Hayalet" 
seoTitle: "WordPress'ten Ghost'a Göç için Bir Kılavuz | WordPress Hayalet" 
description: "Bu öğretici WordPress'ten Ghost'a nasıl geçileceğinizle ilgilidir. Mevcut WordPress web sitesinden yayınlarınızı ve sayfalarınızı Ghost'a nasıl taşıyacağınızı öğreneceğiz." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost ve WordPress, önde gelen iki açık kaynaklı içerik yayınlama platformudur. Bu öğreticide, içeriği WordPress'ten Ghost'a nasıl geçeceğinizi öğreneceğiz." 
url: /tr/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost ve WordPress, önde gelen iki açık kaynaklı içerik yayınlama platformudur. Bu öğreticide, içeriği WordPress'ten Ghost'a nasıl geçeceğinizi öğreneceğiz.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="WordPress'ten Ghost'a göç et">}}


## Genel Bakış
Geçmişte, [Ücretsiz Civicrm WordPress Entegrasyonu ile [1], [Söylem Forumu nasıl entegre edileceğiniz][2] ve daha fazlası gibi konular hakkında birçok makale yayınladık. Ghost, ortaya çıkan açık kaynaklı bir blog platformudur. İçerik yayıncılığı için bir Node.js CMS'dir ve kullanımı kolaylaştıran basit ve temiz bir arayüz ile birlikte gelir. Wysiwyg düzenleme yerine Markdown'a odaklandığı için yeni başlayanlar için harika bir platform. Node.js'nin gücü ve hızı hayaleti çok hızlı hale getirir. Platformun sadeliği nedeniyle, birçok kullanıcı diğer platformlardan geçiyor. WordPress, içerik yönetimi için bir numaralı platform olduğundan.
Bu nedenle, daha fazla kullanıcı ** WordPress'ten Ghost ** 'a geçer. Medya dosyaları, yorumlar, yayınlar vb. İçeren çok sayıda içerik vardır. Hayalet benimsemenin en büyük yararı, arama motoru optimizasyonuna odaklanmasıdır. Bu WordPress Ghost öğreticisinde, resmi WordPress Export eklentisini kullanarak tüm geçiş adımlarını inceleyeceğiz.
  *** [WordPress'in bir briedf girişi][3] **
  *** [Hayalet nedir?][4] **
  *** [Gereksinimler][5] **
  *** [Eklenti kullanarak Wrodpress'ten İçeriği Dışa Aktar][6] **
  *** [İçeriği Hayalet'e İçe Aktar][7] **
  *** [Sonuç][8] **

## ** WordPress ** {#wp} 'in bir briedf girişi
[WordPress][9], çok sayıda web sitesini güçlendiren önde gelen bir açık kaynak bloglama platformudur. Bu ücretsiz blog yazılımı kendi kendine barındırılmış, çok dillidir ve birçok dil için destek sağlar. Ayrıca, WordPress'in geliştirme topluluğu oldukça canlıdır ve kolayca mevcut olan devasa bir yararlı eklenti havuzu geliştirmiştir. Bu eklentiler, işletme web sitenizin hemen hemen her kullanım durumunu ele alır. Buna ek olarak, PHP'de yazılmıştır ve geliştirme ve dağıtım ile ilgili kapsamlı belgelerle birlikte gelir. Tüm kaynak kodu GitHub'da mevcuttur. Ayrıca, bu blog platformu son derece genişletilebilir, yapılandırılabilir ve üçüncü taraf uygulamalarla entegrasyonlar sağlar. Kullanıcıların web sitelerinin görünümünü ve hissini değiştirmek için öğeleri sürükleyip bırakabileceği çok mantıklı ve anlaşılması kolay bir kontrol paneli vardır.

## ** Hayalet nedir? ** {#ghost}
[Hayalet][10] bir başka popüler açık kaynak bloglama platformudur. Bu, geliştiriciler ve site sahipleri tarafından yüksek oranda benimsenen en yaygın kullanılan içerik yayınlama platformlarından biridir. Buna ek olarak, Ghost son derece SEO dostudur ve yerleşik temalar, formlar, e-posta bültenleri ve aboneliklerle birlikte gelir. Bu ücretsiz blog yazılımı JavaScript'te yazılmıştır ve tüm belgeler geliştirme ve dağıtım konusunda mevcuttur.

## Gereksinimler {#Requirements}
WordPress Ghost öğreticisinin bölümünde, WordPress'ten Ghost'a geçmek için gereken gereksinimleri göreceğiz. Resmi WordPress Export eklentisi ile içeriğinizi WordPress'ten Ghost'a kolayca taşıyabilirsiniz. Bu öğreticide, içeriğinizi WordPress'ten bir hayalet sitesine nasıl aktaracağınız konusunda size rehberlik edeceğiz. Bu nedenle, WordPress ve WordPress ** Export Eklentisi ** yüklü bir çalışma kurulumunuz olmalıdır.

## WordPress'ten İçerikleri Dışa Aktar {#Export}
Her şeyden önce, eklentiyi yüklemeniz gerekecek. Eklentiyi yüklemek için aşağıdaki adımları izleyin
  *Kenar çubuğu menüsünden ** eklentileri ** tıklayın
  *Tıklayın ** Yeni ekle ** ve ** Hayalet İhracatı aramak için sağ üst köşedeki arama alanını kullanın **
  *** Kurulum ** ve ** Eklentiyi "** Hayalet Vakfı **" ile etkinleştirin

{{< figure align=center src="images/ghost-activate-plugin.png" alt="WordPress için hayalet eklentisini yükleyin ve etkinleştirin">}}

  *Eklenti etkinleştirildikten sonra ** Araçlar ** yan menüden gidin
  *Kenar çubuğu menüsü ile Hayalet'e ** dışa aktarın.
  * WordPress içeriğinizi hayalet için nasıl hazırlayacağınız konusunda size bir rehber verilecektir.
  * Ghost, kategoriler yerine etiketler kullanır, böylece eklenti kategorileri etiketlere dönüştürmenize yardımcı olacaktır.
{{_LINE_37_}}
{{_LINE_38_}}
    Aşağıdaki adımlar, WordPress sitenizin içerik yapısını kalıcı olarak değiştirecektir. Bu değişikliği yapmaktan emin değilseniz, lütfen tüm içeriğinizin tam bir yedeklemesini oluşturmak için Tools> Dışa Aktarma Altında Standart WordPress dışa aktarma aracını kullanın.
{{_LINE_40_}}
{{_LINE_41_}}
  *Kenar çubuğu menüsünde ** İçe Aktarma **
  *** Taksonomi Dönüştürücü ** İçe Aktarma Öğesinin altında ** İthalatçı Çalıştır ** tıklayın.
  * Etiketlerinize ve dolayısıyla hayalet sitenize aktarmak istediğiniz kategorileri seçmek için onay kutularını kullanın.
  *Ardından ** Kategorileri etiketlere dönüştürün **.
  *Kenar çubuğu menüsünde ** Araçlar ** içinde Ghost ** 'ye dışa aktarın **.
  *** Hayalet Dosyasını İndir ** düğmesini tıklayın. Tüm içeriğinizi içeren bir zip dosyası indirmiş olacaksınız.

## İçeriği Ghost'a İçe Aktar {#Import}
WordPress Ghost Tutorial'ın bu bölümünde, içeriği hayalet içine aktarma adımlarını uygulayacağız.
  *Hayalet Yöneticiye giriş yapın ve ** Labs ** görünümüne gidin.
  *** İçeriği İçe Aktar ** seçeneğinde ** Dosya ** düğmesini seçin ve dışa aktarılan fermuarlı dosyanızı seçin
  *Tıklayın ** İçe Aktar **. Tüm içeriğiniz hayalet sitenize aktarılacaktır.
Şu anda, Ghost'un yerleşik bir yorum sistemi yok. En popüler alternatif Disqus'tur.

## Sonuç {#Conclusion}
Bu bizi bu blog yazısının sonuna getiriyor. Bu WordPress Ghost öğreticisinde, WordPress içeriğinizi Ghost'a göç etmeye hazır nasıl hazırlayacağınızı öğrendik. Göç yapmak için Hayalet Vakfı tarafından resmi Ghost Migration eklentisini kullandık. Buna ek olarak, gerekli tüm adımları kapsadığımız için WordPress'ten Ghost'a göç etmek istiyorsanız, bu blog yazısı kesinlikle size yardımcı olacaktır. Ayrıca, aşağıdaki “Keşfet” bölümünde belirtilen birçok açık kaynaklı içerik yayınlama platformu ve öğretici makalesi bulunmaktadır. Ancak, bu açık kaynaklı bloglama platformlarının her ikisi de, işletme web sitelerinizi karşılamak için kurumsal düzeyde özellikler sunan en iyi önde gelen yazılımdır.
Son olarak, [Containerize.com][11] diğer açık kaynak yazılımlarına yeni blog yazıları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [bu][12] platformu ile bağlantıda kalın.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [WordPress][9]
  * [Jekyll][13]
  * [Söylem][14]
  * [Hayalet][10]
  * [WordPress'i Docker Compose ile DockPress nasıl yapılır][15]
  * [Daha İyi Pagspeed ve SEO için WordPress'te GZIP Sıkıştırma Nasıl Etkinleştirilir][16]
  * [Ücretsiz Civicrm WordPress Entegrasyonu ile Kurşunlarınızı Artırın][1]
  * [WordPress ve Osticket kullanarak biletleme sistemini otomatikleştirin][17]
  * [Söylem Forumu WordPress ile nasıl entegre edilir][2]
  * [İlk 7 SEO blogunu takip ederek web sitesi arama trafiğini artırın][18]
  * [Web sitenizi WordPress ve Gatsby ile nasıl oluşturabilirsiniz][19]

  
[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
