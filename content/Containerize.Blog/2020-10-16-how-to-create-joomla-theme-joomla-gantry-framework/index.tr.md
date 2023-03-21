---
title: "Joomla teması nasıl oluşturulur | Joomla Gantry Framework" 
seoTitle: "Joomla teması nasıl oluşturulur | Joomla Gantry Framework" 
description: "Joomla Gantry Framework açık kaynaktır ve kullanıcıların hızlı bir şekilde dinamik ve duyarlı Joomla CMS şablonları oluşturmalarını sağlayan GUI sunar." 
date: Fri, 16 Oct 2020 10:55:10 +0000
author: Masood Anwer
summary: "Açık kaynak şablon oluşturucu ile güçlü, etkileşimli ve kullanımı kolay Joomla teması tasarlayın. Portal çerçevesi sayfa yanıt süresini ve performansını artırır." 
url: /tr/how-to-create-joomla-theme-joomla-gantry-framework/
categories: ['Content Management']
---

## Açık kaynaklı şablon oluşturucu ile güçlü, etkileşimli ve kullanımı kolay Joomla teması tasarlayın. Portal çerçevesi sayfa yanıt süresini ve performansını artırır.

{{< figure align=center src="images/joomla-gantry-framework.png" alt="Joomla Gantry">}}


## **Genel Bakış** 
[Yeni başlayanlar için Joomla Şablon Geliştirme Kılavuzu][1], [kurşun beslemeyi otomatikleştirmek için drupal mautik entegrasyon][2], [dijital pazarlama otomasyonu için entegre][3] gibi konularda bazı makaleler yayınladık [3] ve daha fazlası, bu kılavuzda **Gantry Framework**  ile temayı oluşturmaya odaklanacağız. Gantry Framework, [Joomla][4] ve [WordPress][5] için duyarlı ve kurumsal düzeyde düzenler oluşturmak için kullanılan açık kaynaklı bir şablon oluşturucudur. Açık Kaynak Topluluk, zengin özellikli tema oluşturma özellikleri sunan çok çeşitli içerik yönetim sistemleri geliştirmiştir. Joomla için portal çerçevesi en popüler tema çerçevelerinden biridir. Göz alıcı ve ilgi çekici bir web sitesi oluşturmak, herhangi bir işletmenin hayati bir bileşenidir. Ancak, bu tür web sitelerini oluşturmak veya değiştirmek için zaman gerektirir.
Bu nedenle, Joomla Gantry Framework, düzen geliştirme sürecini hızlandırmak için hükümler sunmaktadır. Her şeyden önce, kodlama veya programlama becerileri ile donatılmanın zorunluluğunu da ortadan kaldırır. Öte yandan, bu tür çerçevelerin kurulum işlemi oldukça kolay ve basittir. WordPress ve Joomla gibi çoğu içerik yönetim sistemi için eklentiler şeklinde mevcuttur. Bu Portal Çerçevesi öğreticisinde aşağıdaki noktaları ele alacağız:
  *[**Joomla için portal çerçevesi nedir?** ][6]
  *[**Kingry Framework'ü Kurma** ][7]
  *[**Portal teması yükleme** ][8]
  *[**Gantry ile tema oluştur** ][9]

## Joomla için portal çerçevesi nedir?   {#gantry}
[**Gantry **][10] Joomla için ücretsiz ve açık kaynaklı bir tema çerçevesidir.  **Gantry**   Hızlı ve esnek bir web teması çerçevesidir. Twitter bootstrap'a dayanan 12 sütun, 960 ızgara sistemi düzeni üzerine inşa edilmiştir. Ayrıca, hem geliştiriciler hem de son kullanıcılar için kullanımı kolaydır. Gantry, kullanıcıların temayı hızlı bir şekilde özelleştirmelerine yardımcı olan bir sürükleme ve damla özelliğine sahiptir, çünkü GUI işlevselliği, kod yazmak yerine siteyi hızlı bir şekilde tasarlamanıza yardımcı olur. Bir metin dosyası yapılandırmasına (YAML) dayanır, bu nedenle bu metin dosyalarını düzenlemek kolaydır. Ayrıca, bu açık kaynak tema oluşturucu WordPress ve Joomla için mevcuttur. Joomla Gantry, kullanıcılara içerik ve veriler konusunda tam kontrol sağlar. Bu ücretsiz tema oluşturucuyu yapılandıracak ve üçüncü taraf uygulamalarla entegre etmek için özellikler vardır. Ayrıca, oldukça genişletilebilir ve kullanıcılar işlevselliğini gereksinimlerine göre genişletebilirler.
Tema oluşturma seçenekleri söz konusu olduğunda, bu tema çerçevesi, UI öğelerinde Google yazı tipleri, geçişler, renk-chooser, resim-chooser, önek etiketler, eklemli metin püskürtücüleri ve daha fazlasını içeren bir dizi stil ve tasarım sağlar. Aslında, Arapça, Farsi ve biraz daha fazlası gibi sağdan sola dillere destek var. Kullanıcılar blokların boyutunu kontrol edebilir ve bir ızgara sistemi yardımıyla herhangi bir düzeni tasarlayabilir. Gantry son derece güvenlidir ve etkinlikler için Ajax destekli müdahaleci olmayan hırıltı tarzı bildirimler sağlar. Ayrıca, birçok tipografik özellik, JavaScript kontrolü, URL, çerez, oturum ve ön ayarlarla parametreleri ayarlama yeteneği vardır.

## Portal Framework'ü Kurma   {#Installing}
  * Gantry'den indirin
  ***Uzantılar -> Uzantılar Yöneticisi -> Yükle**  adresine gidin ve Dosya Seç düğmesini seçin. İndirilen Zip'i bulun ve Yükle ve Yükle'yi tıklayın.
  * Gantry uzantılarını uzantılar yöneticisi altında görebilirsiniz. Tüm portal uzantılarının etkin olduğundan emin olun.

## Portal temasını yükleme   {#installtheme}
Gantry Framework eğitiminin bu bölümünde, bu tema çerçevesini (Gantry) yükleyeceğiz.
  ***Uzantılar -> Uzantılar Yöneticisi -> Yükle** . Dosya Seç düğmesini seçin, indirilen ZIP'yi bulun ve Yükle ve Yükle düğmesini tıklayın. Tapma Şablonu şablon yöneticisinde görünecektir.
  ***Uzantılar -> Şablon Yöneticisi**  'a gidin, Portal onay kutusunu seçin ve siteniz için varsayılan şablon yapın.

## Gantry ile tema oluştur   {#createtheme}
**Gantry temasını**  oluşturmanın çok kolay bir yolu, mevcut temayı alın ve yeni temanızın oluşturulması için bir şablon olarak kullanın.
  * Hidrojen temasını indirin, açın ve açın.
  * Dosyaların ve dizinlerin adlarını değiştirin.
  * Diyelim ki yeni tema adınız “Mit” olduğunu, bu nedenle hidrojeni dosyalar ve dizinlerde mit ile değiştirin.
  * Tema adı için dosyaları arama. Eski tema adını “Mitheme Hidrojen, Hidrojen Mytheme & Hidrojen'e Mit için Hidrojen” gibi yeni olan adını bulun ve değiştirin.
  * Zip teması, yükleyin ve hepsi bu.

## Çözüm
Bu, bu portal çerçevesi öğreticisinin sonu. Bu blog yazısında, Joomla Gantry Framework'ün tanıtımını, özelliklerini ve Joomla İçerik Yönetimi için kurulum adımlarından geçtik. Bu şablon oluşturucu açık kaynaklıdır, ücretsizdir ve canlı ve hatalara ve tartışmalara çok duyarlı canlı bir destek topluluğu ile birlikte gelir. Ayrıca, Joomla veya WordPress kullanarak oluşturulan bir web siteniz varsa bu blog yazısı size gerçekten yardımcı olabilir. Tema her web sitesinin merkezi bir parçasıdır ve güzel bir kullanıcı arayüzü ile ziyaretçileri çeker. Herhangi bir tema çerçevesi ile veya herhangi bir tema çerçevesi olmadan **Joomla şablonu ücretsiz**  oluşturabilirsiniz, ancak Gantry Framework ile son derece etkileşimli ve duyarlı bir Joomla şablonu oluşturabilirsiniz. Geliştirme maliyetlerinden ve zamandan tasarruf etmenize yardımcı olacaktır.
Gantry, en iyi Joomla şablon çerçevesinden biridir, bu nedenle Düzen Yöneticisi, Visual Menü Editörü, SCSS/daha az destek, tema mirası ve daha fazlası gibi özellikleri tüketerek gerçek gücünün tadını çıkarabilirsiniz. Ayrıca, keşfedebileceğiniz başka birçok öğretici ve karşılaştırma blog gönderisi ve açık kaynaklı ürünler vardır. Listelenen tüm ürünler ücretsizdir ve kendi kendine barınma yetenekleriyle birlikte gelir. Son olarak, [**Containerize.com **][11], en son açık kaynaklı ürünler hakkında blog yazıları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [ **İçerik Yönetimi**  ][12] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Joomla - Ücretsiz CMS yazılımı][13]
  * [Drupal][14]
  * [Pyro][15]
  * [Django CMS][16]
  * [Umbraco CMS][17]
  * [Beton5][18]
  * [Dijital Pazarlama Otomasyonu için Mautic & Joomla'yı Entegre][3]
  * [Kurşun beslemesini otomatikleştirmek için drupal mautik entegrasyon][2]
  * [2020'nin Top 5 Ücretsiz Duyarlı Joomla Bootstrap Şablonları][19]
  * [Yeni başlayanlar için Joomla Şablon Geliştirme Kılavuzu][1]
  * [2020 En İyi 5 Ücretsiz Duyarlı Joomla Şablonları][19]
  * [Temel bir Joomla şablonu oluşturmak için yeni başlayanlar rehberi][20]
  * [Joomla vs Drupal | 2021'de CMS karşılaştırması][21]
  * [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][22]

  
[1]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
[2]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[3]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
[4]: https://products.containerize.com/content-management/joomla/
[5]: https://products.containerize.com/blogging/wordpress/
[6]: #gantry
[7]: #Installing
[8]: #installtheme
[9]: #createtheme
[10]: http://gantry.org/
[11]: https://containerize.com
[12]: https://blog.containerize.com/category/content-management/
[13]: https://products.containerize.com/content-management/joomla
[14]: https://products.containerize.com/content-management/drupal
[15]: https://products.containerize.com/content-management/pyro
[16]: https://products.containerize.com/content-management/django
[17]: https://products.containerize.com/content-management/umbraco
[18]: https://products.containerize.com/content-management/concrete5
[19]: https://blog.containerize.com/content-management/top-5-best-free-responsive-joomla-templates-of-2020/
[20]: https://blog.containerize.com/content-management/beginners-guide-to-create-a-basic-joomla-template/
[21]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[22]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
