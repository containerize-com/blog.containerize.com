---
title: "Osticket eklentisi nasıl geliştirilir | Yardım masası yazılımı" 
seoTitle: "Osticket eklentisi nasıl geliştirilir | Yardım masası yazılımı" 
description: "Osticket eklentisini nasıl geliştireceğinizi öğrenmek için bu öğreticiyi izleyin. Bu Yardım Masası yazılımı müşteri iletişimini yönetir ve sorun çözümü otomatikleştirir." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Osticket kurulumunuza özellikler eklemek için bir Osticket eklentisi oluşturun. Bu açık kaynaklı biletleme sistemi, işletmelerin müşterileri verimli bir şekilde ele almasına yardımcı olur." 
url: /tr/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Osticket kurulumunuza özellikler eklemek için bir Osticket eklentisi oluşturun. Bu açık kaynaklı biletleme sistemi, işletmelerin müşterileri verimli bir şekilde ele almasına yardımcı olur.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="Yardım masası yazılımı">}}


## Genel Bakış
[Yardım masası bilet yazılımı][1] serisindeki başka bir ilginç blog yayınına hoş geldiniz. [Popüler ücretsiz bilet tabanlı yardım masası ve müşteri hizmetleri sistemi][2], [WordPress ve Osticket kullanarak biletleme sistemini otomatikleştir][3] ve biraz daha fazlası gibi bazı blog yayınları yayınladık. Bununla birlikte, Osticket, müşterilerin personeli desteklemek için sorgularını ve şikayetlerini bildirmeleri için tasarlanmış açık kaynaklı bir biletleme tabanlı yardım masası sistemidir. Bu ücretsiz destek sistemi, telefon, e-posta ve formlardan gelen soruları web tabanlı biletlere dönüştüren kullanımı kolay Sorgulama Yönetimi modülü sağlar. Destek personelinin müşteriler için inanılmaz bir müşteri destek deneyimi sunmasını sağlayan çok çeşitli özellikler ve seçenekler sunar.
Bu Açık Kaynak Biletleme Sistemi (Osticket), istemci, sayfalara ve bildirimlere gönderilen mesajlar gibi müşteri destek deneyiminin tüm bölümlerini uyarlamaya yardımcı olmak için çok sayıda seçenek sunan tamamen esnek bir destek bilet çerçevesidir. Makalesinde, ihtiyaçlarımıza göre işlevselliği artırmak için Osticket eklenti geliştirme öğreneceğiz. Bunu yapmak için aşağıdaki konuları ele alacağız:
  * [Eklentileri neden kullanmalı?][4]
  * [Gereksinimler][5]
  * [Osticket’in eklentisi nasıl geliştirilir?][6]
  * [Sonuç][7]

## Neden eklentileri kullanabilirim?   {#Neden}
Bu konuda, bu **Yardım Masası Yazılımı**  (Osticket) temel işlevselliğini genişletmek için basit bir eklentinin nasıl oluşturulacağını öğreneceğiz. Bir eklenti, herhangi bir uygulamanın/yazılımın temel işlevselliğini genişleten bir yazılım parçasıdır. Buna ek olarak, işlevsellikleri genişleten büyük bir eklenti yığınına sahip birçok kurumsal düzey açık kaynak yazılımı vardır. Ayrıca, bu popüler açık kaynak yazılımı WordPress, Joomla ve daha fazlasını içerir. Her şeyden önce, canlı ve canlı topluluklar ihtiyaçlara göre eklentileri destekler ve geliştirir. Ancak, çerçeveler eklentilerin geliştirilmesi ile ilgili kapsamlı belgeler sunar. Uygulamaların eklentileri desteklemesi için bazı nedenler aşağıdadır:
  * Üçüncü taraf geliştiricilerin bir uygulamanın işlevselliğini genişleten yazılım bileşenleri oluşturmalarını sağlar.
  * Eklentiler yeni özellikleri kolayca entegre etmeyi sağlar.
  * Ayrıca bir uygulamanın boyutunu ve karmaşıklığını artırmaz.
  * Ve geliştiriciler eklentilerin kodunu temel uygulamadan ayrı olarak saklayabilir ve yönetebilir.

## Gereksinimler   {#Requirements}
**BT Help Sıvacı Yazılımı**  kılavuzunun bu bölümü Osticket eklentisini geliştirmek için gereken gereksinimleri açıklar.
  * PHP sürüm 5.6 veya üstü
  * osticket kurulumu
  * Temel PHP bilgisi

## Osticket’in eklentisini nasıl geliştirir?   {#Nasıl}
Bu bölümde, bu açık kaynak biletleme sisteminin (Osticket) eklenti geliştirme adımlarını inceleyeceğiz.
  * Eklentinin klasörünü oluşturun /dahil /eklentiler dizin. Bu öğreticide **Osticket Sistemini**  Redmine ile entegre eden bir demo eklentisi oluşturacağız.
  * Gerekli dosyalara sahip olmalıdır: Plugin.php ve config.php.
  * Plugin.php dosyası eklentinin genel açıklamasını içerir. Plugin.php dosyasında aşağıdaki örnek kodu kullanın:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Ardından, yukarıdaki koddan kimlik, ad, yazar adı ve eklenti sınıfı adlarını değiştirin.
  * Bundan sonra, eklenti yapılandırma seçeneklerini Osticket’in arka ucuna göstermemiz gerekiyor. Aşağıdaki örnek kodu config.php dosyasına ekleyin.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * Sonuç olarak, burada gösterildiği gibi yapılandırma sayfasında kullanıcı adı ve şifre alanları oluşturur:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Osticket eklentisini geliştirmek için yeni başlayan bir kılavuz">}}

  * Aşağıda, mevcut sınıf alanlarının bir listesidir, bunlar `[install_root]/incown/class.forms.php`::
      * TextBoxfield - Metin Kutusu
      * Textareaffield - Metin alanı
      * Threadentryfield - Tartışma Konuları için kullanılan zengin metin alanı
      * DateTimeField - JQuery DatePicker
      * Telefon alanı - Telefon numaraları için optimize edilmiş metin kutusu
      * Booneanfield - onay kutusu
      * ChoiceField-açılır seçme alanı
      * BölümBreakfield - Yatay bölüm molası
  * Bundan sonra, eklentinin işlevselliğinin tanımlanacağı dosyayı oluşturmamız gerekir.
  * Dosya adı Plugin.php dosyasında tanımlandığı gibi olmalıdır. yani redmine.php.
  * Bu, DynabicredMinePlugin sınıfını tutmalıdır. Aşağıdaki örnek koduna göz atın:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Bu kod yapılandırma değerlerini getirdi ve bu değerleri işlevlerinizde kullanabilirsiniz. Bu dosyada eklentinizin işlevselliğini gereksinimleriniz olarak ekleyebilirsiniz.

## Sonuç   {#Conclusion}
Bu bizi bu blog yazısının sonuna getiriyor. Osticket, gereksinimlere göre yeni işlevsellik ekleyebilmeleri için geliştiriciler için eklenti yapısı sunan bir biletleme yönetimi yazılımıdır. Eklentiler, herhangi bir uygulamanın/yazılımın temel işlevselliğini genişleten bileşenlerdir. Makalesinde, geliştiricilerin gereksinimlerine göre özel özellikler ve geliştirmeler eklemelerine yardımcı olan bu **Müşteri Destek Sistemi  **(Osticket) eklentisi geliştirmeyi tartıştık. Bu nedenle, bu blog yazısı, işiniz için bir **  Help Sıvacı Yazılımı  **dağıtmak istiyorsanız size gerçekten yardımcı olacaktır. Ayrıca, aşağıdaki “Keşfet” bölümünde belirtilen başka **  yardım masası bilet yazılımı**  ve makaleler de vardır.
Son olarak, [Containerize.com][8] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [Yardım Masası biletleme yazılımı][1] kategorisiyle iletişime geçin. Dahası, bizi sosyal medya hesaplarımızda [Facebook][9], [LinkedIn][10] ve [Twitter][11] 'te takip edebilirsiniz.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Uvdesk][12]
  * [Zammad][13]
  * [Freesout][14]
  * [Yardım][15]
  * [En iyi açık kaynak ve ücretsiz BT yardım masası yazılımı][16]
  * [Popüler Ücretsiz Bilet Tabanlı Yardım Masası ve Müşteri Hizmetleri Sistemi][2]
  * [Osticket kullanarak çevrimiçi yardım masası yazılımı nasıl kurulur][17]
  * [Osticket'te çoklu kiracılık nasıl uygulanır][18]
  * [WordPress ve Osticket kullanarak biletleme sistemini otomatikleştirin][3]
  * [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][19]

  
[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
