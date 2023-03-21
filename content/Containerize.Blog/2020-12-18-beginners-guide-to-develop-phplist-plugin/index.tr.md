---
title: "Phplist eklentisini geliştirmek için yeni başlayanlar rehber" 
seoTitle: "Phplist eklentisini geliştirmek için yeni başlayanlar rehber" 
description: "Phplist eklenti mimarisine aşina olun ve temel bir Phplist eklentisinin nasıl oluşturulacağını öğrenin. Bu kılavuz, fplist işlevselliği özelleştirmenize ve geliştirmenize yardımcı olur." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Phplist eklentileri, geliştiricilerin ürünü özelleştirmesine ve işlevselliğini artırmasına olanak tanır. Bu yazıda, Phplist'te temel eklenti oluşturmayı öğreneceğiz." 
url: /tr/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## Phplist eklentileri, geliştiricilerin ürünü özelleştirmesine ve işlevselliğini artırmasına olanak tanır. Bu yazıda, Phplist'te temel eklenti oluşturmayı öğreneceğiz.

{{< figure align=center src="images/phplist-plugin.png" alt="flist eklentisi">}}

Eklenti desteği, özellikle açık kaynak sistemleri için yazılımın önemli bir parçasıdır. Bu, geliştiricilerin özellikleri genişletmek için yeni bir eklenti oluşturmalarını sağlar. **Phplist**  Eklentilerin geliştirilmesini teşvik eder, böylece geliştiriciler bunları iş gereksinimlerine göre yeni özellikler eklemek için kullanabilirler. Bir Phplist eklentisi, PHP, HTML, CSS ve JavaScript için kod içeren bağımsız bir kod koleksiyonudur.
Uygulamalar birçok nedenden dolayı eklentileri destekleyin ve bazıları:
  * Temel işlevselliği değiştirmeyin.
  * Geliştiricilerin yeni özellikler oluşturmasına izin verin.
  * Yazılımın boyutunu azaltın.
Aşağıdaki konuları bu öğreticide ayrıntılı olarak tartışacağız.
  *[**Önkoşul** ][2]
  *[**Phplist Eklenti Gelişiminin Temelleri** ][3]
  *[**PHPLIST eklentimizi oluştur** ][4]
  *[**Sonuç** ][5]

## Önkoşullar   {#req}
  * Phplist'in son sürümü.
  * Phplist ve PHP'ye aşina.
  * HTML / CSS ve JavaScript'in anlaşılması.

## Phplist eklenti geliştirme temelleri   {#basics}
Aşağıdaki yöntemler bir Phplist eklentisinin işlevselliğini geliştirecektir.
  ***Sayfalar**  - Raporlama, istatistik, bilgi görüntüleme ve daha fazlası gibi etkinlikler için sayfalar oluşturun.
  ***Hooks**  - Bu, belirli yerlerde işlevselliği çağırmanıza olanak tanır.
Phplist için üç tür özel eklenti vardır. Her türden bir eklenti yalnızca etkinleştirilebilir.
  ***Editör eklentisi**  - Kampanyaları veya şablonları düzenleme için düzenleyicinin uygulanmasına izin verir.
  ***Kimlik Doğrulama Eklentisi**  - Bu, yöneticilerin kimlik doğrulaması için yeni bir mekanizma eklemesini sağlar.
  ***E-posta Gönderen eklentisi** -Yerleşik işlevler yerine e-posta gönderme için yeni bir yöntem uygulanmasına izin verir.

## Phplist eklentimizi oluştur   {#create}
Her şeyden önce, PhplistPlugin çekirdek sınıfını genişletmeniz gerekir. Bir eklenti oluşturmak için \ _rootdir eklentisi altında “Helloworld” adlı bir dizin oluşturmanız ve eklenti dizininin kökeninde helloworld.php adlı bir dosya oluşturmanız gerekir. \ _Rootdir değişken eklentisinin değerini bulmak için config.php dosyasını kontrol edebilirsiniz. Aşağıdaki kodu helloworld.php dosyasına kopyalayın.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
Eklentinizin dizinine $ coderoot ayarlamanız gerekir. Eklentinin doğru şekilde başlatıldığından emin olmak için ana yapıcıyı çağırmanız gerekir. Main.php dosyası oluşturun ve eklenti dizininize yerleştirin. Aşağıdaki kodu içine kopyalayın.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Eklenti yüklemek için Helloworld.php sınıf dosyasını ve eklenti dizininizi eklenti rootdirine yerleştirin. Bir eklentiyi etkinleştirmek için menü çubuğundaki yapılandırma sekmesini tıklayın ve ardından Eklentileri Yönetin. Eklenti sayfası size kullanılabilir eklentilerin bir listesini gösterecek ve eklenti formunuzu orada etkinleştirebilir/devre dışı bırakabilirsiniz.
Eklentinize http://example.com/admin/?page=main&pi=helloworld gibi aşağıdaki URL ile erişebilirsiniz. Örnek.com'u alan adınızla değiştirin.

## Sonuç   {#con}
** Phplist eklentisinin temellerini öğrendik ve bir örnek eklentisi oluşturduk. Bir başlangıç ​​noktası olarak, bu kılavuzu izleyebilir ve işlevselliği geliştirmek için eklenti geliştirmeyi daha fazla keşfedebilirsiniz.
Son olarak, [**Containerize.com **][6], en son açık kaynaklı ürünler hakkında blog yazıları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [ **bültenler**  ][7] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz.
  *[**Phplist** ][8]
  *[**Mailtrain** ][9]
  *[**ListMonk** ][10]
  *[**Moonmail** ][11]
  *[**Mailman** ][12]
  *[**2021'de Top 5 Açık Kaynak Haber Bülteni Yazılımı** ][13]
  *[**Phplist'de Çok Kenti Uygulaması Nasıl Yapılandırılır** ][14]
  *[**Phplist kullanarak bülten nasıl oluşturulur ve gönderilir** ][15]

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
