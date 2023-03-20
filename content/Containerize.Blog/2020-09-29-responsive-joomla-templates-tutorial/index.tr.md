---
title: "Yeni başlayanlar için Joomla Şablon Geliştirme Kılavuzu" 
seoTitle: "Yeni başlayanlar için Joomla Şablon Geliştirme Kılavuzu" 
description: "Joomla şablon geliştirme, çeşitli kullanım durumları için duyarlı düzenler nasıl kurulacak. Bir işletme web sitesinin tasarım katmanını tanımlayan dosya kümesi." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Çok dilli, SEO / kullanıcı dostu ve zengin renk şemaları gibi bir sürü özellik sunan son derece profesyonel ve özelleştirilebilir Joomla şablonları oluşturun." 
url: /tr/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Çok dilli, SEO / kullanıcı dostu ve zengin renk şemaları gibi bir grup özellik sunan son derece profesyonel ve özelleştirilebilir Joomla şablonları oluşturun. {.Has-metin-align-sol}

{{< figure align=center src="images/banner_1200x628.png" alt="Joomla Şablon Geliştirme">}}


## Genel Bakış
İyi tasarlanmış bir işletme web sitesi, ziyaretçileri navigasyon kolaylığı sağlayarak getirmek ve elde tutmak için hayati bir rol oynar. ** Tam özellikli Joomla ** Kullanıcılarını bir iş web sitesinin estetiğini kontrol eden bir dizi duyarlı düzen ve Joomla şablonu geliştirme ile kolaylaştırır.
Geliştirme aşaması sırasında, tasarım öğelerinin yerleştirilmesi çok kritiktir:
  * Tutarlılık
  * Kolay Gezinme
  * Basitlik
  * Mobil uyumluluk
  * Okunabilirlik
İşte ** Joomla şablonları ** geliyor. Bu açık kaynaklı yazılım, her sayfa için ayrı ayrı kod yazmak yerine tüm web sayfaları için önceden tanımlanmış duyarlı düzenler geliştirme veya kullanma hükümleri sunar.
Bu blog yazısında, Joomla'da ** Kullanıcı Dostu Şablon ** nasıl oluşturulacağı ve kurulacağı hakkında aşağıdaki şeyleri öğreneceğiz.
  *[** Joomla düzenleri nelerdir? **][2]
  *[** Joomla'da basit bir duyarlı şablon nasıl oluşturulur? **][3]
  *[** Joomla şablonu nasıl kurulur? **][4]
  *[** Sonuç **][5]

## Joomla düzenleri nelerdir? {#Ne}
Joomla, ön uç ve arka uç için şablonlar sağlar. Birçok hazır yapılmış şablonla birlikte gelir ve geliştiricilere kullanım durumlarına göre ** ücretsiz duyarlı bootstrap temaları ** oluşturmak için sunar. Joomla'da iki tür şablon vardır.
** Ön uç şablonları: ** Bir işletme web sitesinin bir kısmına bakan kullanıcı ile ilgilidir.
** Arka uç şablonları: ** Bu şablonlar bir sitenin iş mantığı ile bağlantılıdır.

## Joomla'da basit bir duyarlı şablon nasıl oluşturulur? {#Nasıl}
Bu bölümde, bu Joomla şablon öğreticisinin adımlarını ele alacağız.
Bu bölüme atlamadan önce, aşağıdakileri anladığınızdan emin olun:
  * Html
  * CSS
  * JavaScript
  * PHP
Bu nedenle, Joomla'da özel şablonlar oluşturmak hiç bu kadar zor ve karmaşık olmamıştı. Ancak, ilk Joomla şablonumuzu oluşturmaya başlayalım.

## ** Kurulum dizin yapısı **
Her şeyden önce, “** şablonlar **” klasöründe “** mytemplate **” adlı bir klasör oluşturun.
“** MyTemplate **” klasöründe aşağıdaki dosyaları oluşturun:
  *** index.php **: Bu, tüm şablon sayfaları için HTML ve PHP kodu içeren temel dosyadır.
  *** Templatedetails.xml **: Bu dosya şablonun meta verilerini içerir ve Joomla tarafından fark edildiği için zorunludur.
Şimdi, aşağıdaki adlarla birlikte “** MyTemplate **” klasörü içinde üç klasör oluşturun:
  *** JS **: Bu klasör, şablon için gereken tüm JavaScript dosyalarını içerecektir.
  *** CSS **: Stil için tüm CSS dosyaları bu klasöre gelecek
  *** Resimler **: Şablon tarafından kullanılan resimler bu klasörde bulunacak
“** css **” klasöründe “** template.css **” adlı bir CSS dosyası oluşturun.
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
Sonunda, dizin yapısı böyle görünecektir.

## biraz kod koyalım
Bu kodu ** templatedetails.xml ** dosyasına koyun.
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Daha önce de belirtildiği gibi, bu dosya işaretleme etiketleri arasında tanımlanan duyarlı düzenler hakkındaki meta verileri içerir. Ancak, ad, yazar ve açıklama gibi genel bilgileri değiştirebilirsiniz.
Bu dosya ayrıca şablon tarafından kullanılan diğer dosyalar ve klasörler hakkında bilgi içerir.
Şimdi, ** index.php ** dosyasını açın ve aşağıdaki kodu koymaya başlayın:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Bu dosya, başkalarının PHP kodunuzu okumasını önleyen bu satırla başlayacaktır.
```
<!DOCTYPE html>
```
Bu, tarayıcıya belge türünü bildirmek içindir.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
HTML belgeleri bu satırla başlar ve ** xmlns ** özniteliği belge için XML ad alanını anlatır.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
Etiketten sonraki ilk satır Joomla'ya meta veri bilgileri ve sayfa başlığı gibi başlık bilgilerini koymasını söyler.
İkinci satırda harici stil sayfasına bir bağlantı vardır ve üçüncü satır harici JavaScript dosyasını bağlar.
Dosyaların geri kalanı bootstrap'ı şablona etkinleştirir.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
Vücut bölümü, baş bölümünün kullanıcının görüntülemesi ve gezinmesi için şablona yansıtılacak tüm verileri içerdikten sonra başlar.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Bu ifadeye Joomla'ya “Pozisyon-7” adlı bir modül eklemesini öğretmek için kullanılan JDOC beyanı denir. ** Joomla şablonu geliştirme ** 'de sıklıkla kullanılan birkaç JDOC ifadesi vardır.
Bu, temel bir Joomla şablonu için gerekli tüm kodlara sahip son tam ** dizin.php ** dosyasıdır.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Çok temel bir şablon için her şey yerinde. Şimdi, Joomla sunucusuna yükleme ve nasıl devam ettiğini görmenin zamanı geldi.

## Joomla şablonu nasıl kurulur? {#düzenlemek}
Joomla şablon kurulum işlemi oldukça düz ve kolaydır. Yüklenecek aşağıdaki adımlar vardır:
"Uzantılar -> Yönet -> Yükle

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla Kurulum Resmi Yükleme">}}

Burada yeni geliştirilen Joomla şablonunuzu aşağıdaki resimde gösterildiği gibi listede görebilirsiniz.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Joomla Şablonlar Listesi">}}

Şimdi, şablonu seçin, “yükleme” ye basın ve başarılı kurulum hakkında bir başarı mesajı görünecektir.
Şablon yüklendikten sonra, Joomla'nın kontrol panelindeki şablon dosyalarına erişebilir ve değiştirebilir ve “Şablon Önizleme” seçeneğinden değişiklikleri önizleyebilirsiniz.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Şimdi, ilk Joomla şablonunuzu tarayıcıya görüntüleyebilirsiniz!

## Sonuç {#Conclusion}
İyi ve duyarlı bir şablon, genel site modellemesinin temelidir. ** Duyarlı Düzenler ** Joomla'daki çok işlevlidir ve çeşitli projeler için kullanılabilir. Kod yazımından Joomla şablon geliştirmeye, sezgisel bir yönetici gösterge paneli yardımıyla çok basit hale gelir. Joomla, kullanıcının arzularını karşılamak için şablon geliştirme üzerinde tam kontrol sağlar.
** CMS Software ** kategorisi tutarlı iyileştirmeler altında olduğundan ve listeye diğer içerik yönetim sistemleri hakkında daha fazla öğretici ekleneceğinden, lütfen düzenli güncellemeler için [İçerik Yönetim Sistemi][6] bölümüyle iletişime geçin.

## İlgili Ürün Sayfaları
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Beton5][11]
  * [Grav][12]
  * [Craft][13]
  * [Contao][14]
  * [Çatal][15]
  * [Rafineri CMS][16]
  * [LocomotiveCms][17]

  
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
