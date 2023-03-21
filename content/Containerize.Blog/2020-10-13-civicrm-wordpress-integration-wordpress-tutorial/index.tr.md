---
title: "Civicrm WordPress Entegrasyonu | WordPress öğreticisi" 
seoTitle: "Civicrm WordPress Entegrasyonu | WordPress öğreticisi" 
description: "CiviCRM WordPress entegrasyonu, veri ve iş akışlarının yönetimini kontrol etmenizi sağlar. WordPress ile açık kaynaklı CivicRM'nin etkili kullanımı hakkında en iyi rehber." 
date: Tue, 13 Oct 2020 08:23:40 +0000
author: muhammadmustafa
summary: "Bu WordPress eklentisi öğreticisinde, iletişim yönetimi açısından rekabet avantajları elde etmek için ücretsiz CiviCRM'nin WordPress ile nasıl entegre edileceğini öğreneceğiz." 
url: /tr/civicrm-wordpress-integration-wordpress-tutorial/
categories: ['Blogging', 'Marketing Automation']
---

## Bu WordPress eklenti öğreticisinde, iletişim yönetimi açısından rekabet avantajları elde etmek için ücretsiz CivicRM'nin WordPress ile nasıl entegre edileceğini öğreneceğiz.

{{< figure align=center src="images/integrate-civicrm-with-wordpress-banner-1024x536.png" alt="Civicrm WordPress">}}


## Genel Bakış:
**CiviCrm WordPress Entegrasyonu**  hakkında bu öğretici makaleye hoş geldiniz. Mesele şu ki, bilgi ve veri çağında yaşıyoruz. Bazı şeyler işletmenize veri toplama, tutarlı iletişim, pazarlama kampanyaları ve diğer iş akışları gibi farklı özellikler sunar. Bu modern çağda, veri miktarı her geçen gün artmaktadır. Kuruluşlar bu verileri çeşitli veri kaynaklarından alır. Sonuç olarak, bu kadar büyük miktarda veriyi yönetmek ve derlemek zorlaşır. Bununla birlikte, veri bütünlüğünün ve özgünlüğünün etkili bir pazarlama kampanyasının temeli olduğundan emin olmak son derece önemlidir. Buna ek olarak, birçok yerde veri oluşumu güçlük ve yanlış yönetim doğurur ve operasyonel ekipler aynı sayfaya gelip birleşik bir yönde çalışmayı zor bulur.
Öte yandan, sağlam içerik yönetimi ve SEO dostu yankı sistemleri nedeniyle kullanıcıların ve geliştirici topluluklarının güçlü desteğini kazanan birkaç içerik yönetim sistemi vardır. Bu açık kaynaklı içerik yönetim sistemleri, içerikle ilgili hedeflere ulaşmak için kolay ve hızlı gelişmeler ve dağıtımlar sunar. Maliyet verimliliği, genişletilebilir işlevsellik ve kendi kendine barındırma yetenekleri sunar. Bu **WordPress Eklenti Eğitimi** , [Civicrm][2] 'nin [WordPress][3] ile entegrasyonu ile ilgilidir ve aşağıdaki mermi noktalarını kapsayacağız
  * [Bu kombinasyonun iş için faydaları?][4]
  * [Bir dizin yapısı nasıl kurulur?][5]
  * [Civicrm'i WordPress'te nasıl etkinleştirir ve kurabilirim?][6]

## Bu kombinasyonun işletmeleri için faydaları?   {#faydalar}
Bu **WordPress Tutorial  **bölümünde, **  CiviCrm WordPress**  entegrasyonunun temel avantajlarını inceleyeceğiz. Rekabet piyasada arttıkça [WordPress][3] 'in popülaritesi artmaktadır. WordPress topluluğu, eklentinin kovasını geliştirmek için yeni eklentiler geliştiriyor. Bu nedenle, eklentinin WordPress havuzuna CIVICRM eklenmesi, iş iş akışlarını otomatikleştirmek ve merkezileştirmek için gelişen kuruluşlardan büyük ilgi görmüştür.
Bu entegrasyon belirli yönlerden dolayı önemlidir. İlk olarak, [CIVICRM][2], kullanıcının farklı yerlerde ikamet eden iletişim kaynaklarını yönetme güçlüklerini ortadan kaldırır. İkincisi, verilerinizin düzenli yedeklerini alarak tam güvenlik sağlar. Üçüncüsü, verilerinize her yerden erişebileceğiniz anlamına gelen web tabanlı ve açık kaynaktır. Bu açık kaynak pazarlama otomasyon aracı sivil sektör için geliştirilmiştir. Tek durak bir çözüm sağlayarak çeşitli sayfalara ve veritabanlarına veri aktarma ihtiyacını ortadan kaldırmıştır. Bu açık kaynaklı CRM yazılımı, tüm verileri bültenler, etkinlik yönetimi siteleri, katkı yönetimi, vaka yönetimi ve vb. Sınırsız özel veri setleri, görev yönetimi, kullanıcı yönetimi, açık taahhütler ve üyelikler ve daha fazlası.

## Bir dizin yapısı nasıl kurulur?   {#Directory}
Bu **WordPress Eklenti Eğitimi**  başlamadan önce, WordPress'i kurduğunuzu ve eklentileri yüklemek ve etkinleştirmek için temel bir anlayışa sahip olduğunuzu varsayıyoruz. Ayrıca, WordPress ve özellikleri hakkında bilgi [burada][7] bulabilirsiniz.
İlk olarak, Civicrm'i bu [site][8] 'den indirin. “WordPress için Civicrmx.x.x'i indir” gibi bir seçenek seçin.
İndirdikten sonra zip dosyasını bu konuma /wp-content /eklentilerine yerleştirin ve çıkarın. Bu dizinin "yazma" erişimine sahip olduğundan emin olun.
Bu komutu "yazma" erişim izni vermek için kullanabilirsiniz. `Sudo Chmod 777 Server_Path/WP-Content/Eklentileri/Civicrm`
İkincisi, bu konuma /wp-content /yüklemelere “Civicrm” adlı boş bir klasör oluşturun ve aşağıdaki komutu kullanarak “yazma” erişimini verin.
`SUDO CHMOD 777 SERVER_PATH/WP-CONTENT/LOADS/CIVICRM '
**Not** : Bu dizinleri varsayılan olarak değiştirmeyi unutmayın. Bu dizinlerin varsayılan durumunu geri yüklemek için aşağıdaki komutları çalıştırabilirsiniz:
{{_LINE_29_}}
{{_LINE_30_}}
{{_LINE_31_}}
      sudo chown -r kullanıcı adı Sunucu_path/wp -content/uploads/Civicrmsudo chown -r kullanıcı adı Server_path/wp -content/eklenti/Civicrm
{{_LINE_33_}}
{{_LINE_34_}}
{{_LINE_35_}}
CivicRM WordPress entegrasyonunun bu bölümü tamamlandı. Bir sonraki bölüme geçelim.

## CivicRM'yi WordPress'e nasıl etkinleştirir ve kurabilirim?   {#düzenlemek}
WordPress öğreticisinin bu bölümü **Web Tabanlı Pazarlama Aracı  **CIVICRM'nin kurulum ve aktivasyon adımlarını gösterir. Dizin yapısını ayarladıktan sonra **  eklentilerine gidin **->  **Yüklü eklentiler ** **  Civicrm'i listede göreceksiniz.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.18.07-1024x544.png" alt="Civicrm WordPress">}}

“**Etkinleştir** ”.

{{< figure align=center src="images/civi-1024x581.jpeg" alt="Pazarlama Otomasyon Kılavuzu">}}

CiviCRM'yi etkinleştirdikten sonra, WP-Admin sayfasının sağ üst kısmında CivicRM seçeneğini bulacaksınız. Sadece bu seçeneğe basın ve **kurulum**  ekranına ineceksiniz.
Bir sonraki sayfa, veritabanı yapılandırmaları ile birlikte gereksinim ayrıntılarıyla gösterilecektir.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.56.14-1024x632.png" alt="Pazarlama Otomasyon Kılavuzu">}}

“Gereksinimleri kontrol edin ve CivicRM'yi kurun” düğmesine basın. CiviCRM başarıyla yüklenecek ve yukarıdaki talimatlar doğru bir şekilde izlenirse bir başarı mesajı görünecektir.

{{< figure align=center src="images/Screenshot-2020-10-10-at-03.06.05-1024x630.png" alt="Civicrm WordPress Entegrasyonu">}}

Son olarak, **CIVICRM WordPress Entegrasyonu**  Menü sekmesi yönetici kontrol panelinin üstünde görünecektir.

{{< figure align=center src="images/Screenshot-2020-10-09-at-23.22.03-1024x586.png" alt="WordPress Eklentisi Geliştirme Eğitimi">}}


## Çözüm
**CiviCRM WordPress Entegrasyonu **, dağınık kullanıcı bilgilerinin büyük depolanması söz konusu olduğunda gerçekten yararlı bir eklentidir. Sezgisel bir gösterge paneli sunarak karmaşık iş akışlarını basitleştirir. Bu iki açık kaynaklı yazılımın ikilisi, kullanıcıların kolayca gezinebileceği diğer yardımcı programlarla birlikte kullanıcı dostu bir arayüz sağlar. Neyse ki, açık kaynak topluluğu [Mautic][9], [Suitecrm][10], [ESPOCRM][11] ve daha fazlası gibi birçok pazarlama otomasyon aracı geliştirdi. Tüm bu çözümler ücretsizdir ve bulutta veya localhost'ta dağıtımı kolaydır. Her şeyden önce, bu çözümler geliştirme ve dağıtım ile ilgili kapsamlı belgelerle birlikte gelir. Ancak, pazarlama otomasyon yazılımını içerik yönetimi yazılımınızla entegre etmek istiyorsanız, bu  **WordPress eklenti öğreticisi**   çok yararlı olacaktır.
Son olarak, [Containerize.com][12] diğer bazı açık kaynak yazılımlarının entegrasyonu hakkında daha fazla öğretici yazma sürecindedir. Düzenli güncellemeler için [pazarlama otomasyonu][1] ve [bloglama][13] kategorileriyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Vanilya Forumu WordPress entegrasyonu hakkında yeni başlayanlar rehberi][14]
  * [WordPress'i Docker Compose ile DockPress nasıl yapılır][15]
  * [WordPress'ten Jekyll'e Geçiş][16]
  * [Web sitenizi WordPress ve Gatsby ile nasıl oluşturabilirsiniz][17]
  * [WordPress'ten Hayalet'e Göçmek İçin Yeni Başlayanlar Kılavuzu][18]
  * [Mautic'te çoklu kiracılık nasıl uygulanır][19]
  * [Mautic nasıl kurulur - Facebook Entegrasyonu][20]
  * [Kampanya Oluşturucu Kullanarak Mahsul Kampanyalar Kurulum][21]
  * [Kurşun beslemesini otomatikleştirmek için drupal mautik entegrasyon][22]
  * [Rocket.chat kullanarak WordPress Anlık Mesajlaşma][23]
  * [Söylem Forumu WordPress ile nasıl entegre edilir][24]
  * [WordPress ve Osticket kullanarak biletleme sistemini otomatikleştirin][25]
  * [Mautic ve WooCommerce Entegrasyonu ile Pazarlama Otomasyonu][26]
  * [2020'de Top 5 Açık Kaynak Bloglama Platformu][27]
  * [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][28]

  
[1]: https://products.containerize.com/marketing-automation
[2]: https://products.containerize.com/marketing-automation/civicrm
[3]: https://products.containerize.com/blogging/wordpress
[4]: #benefits
[5]: #directory
[6]: #install
[7]: https://products.containerize.com/blogging/wordpress/
[8]: https://civicrm.org/download
[9]: https://products.containerize.com/marketing-automation/mautic/
[10]: https://products.containerize.com/marketing-automation/suitecrm/
[11]: https://products.containerize.com/marketing-automation/espocrm/
[12]: https://href.li/?https://www.containerize.com/
[13]: https://products.containerize.com/blogging
[14]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
[17]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[18]:https://blog.containerize.com/blogging/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
[19]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
[20]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[21]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[22]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[23]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[24]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[25]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[26]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[27]: https://blog.containerize.com/2020/10/07/top-5-open-source-blogging-platform-in-2020/
[28]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
