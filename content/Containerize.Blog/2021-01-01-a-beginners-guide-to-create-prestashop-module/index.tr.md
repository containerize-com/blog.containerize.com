---
title: "Prestashop Modülü Oluşturmak İçin Yeni Başlayanlar Kılavuzu" 
seoTitle: "Prestashop Modülü Oluşturmak İçin Yeni Başlayanlar Kılavuzu" 
description: "Prestashop, çevrimiçi mağaza kurmak için verimli ve uygun maliyetli bir açık kaynak e -ticaret yazılımıdır. Prestashop eklentileri, işlevselliği genişletmek için sahiplerinin depolanmasına yardımcı olur." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Prestashop modülleri, mağazanızın işlevselliğini geliştirmenizi sağlayan küçük programlardır. Bu öğreticide temel bir modül oluşturmayı öğreneceğiz." 
url: /tr/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Prestashop modülleri, mağazanızın işlevselliğini geliştirmenizi sağlayan küçük programlardır. Bu öğreticide temel bir modül oluşturmayı öğreneceğiz.

{{< figure align=center src="images/prestashop-module.png" alt="Prestashop modülü">}}

**Prestashop** % 100 ücretsiz ve açık kaynak olan e -ticaret yazılımıdır. Bu, mağaza sahiplerinin çevrimiçi varlıklarını kolayca kurmalarını ve işleri geniş bir ölçekte ölçeklendirmelerini sağlar. Prestashop varsayılan özelliklerle birlikte gelir ve iş gereksinimleriniz için zaman zaman daha fazla işlevselliğe ihtiyacınız olabilir. Prestashop için pazar, mağaza işlevselliğini genişletmek için kullanılabilecek eklenti özellikleri bulmak için harika bir yerdir. Ayrıca, hem ücretsiz hem de ücretli modülleri Marketplace'de bulabilirsiniz. Ancak, sıfırdan da özel modül oluşturabilirsiniz.
**Prestashop modülü oluşturma** için aşağıdaki konuları ayrıntılı olarak tartışacağız.
  * [Gereksinimler][1]
  * [Modül Gelişiminin Temelleri][2]
  * [Prestashop modülümüzü oluştur][3]
  * [Sonuç][4]

## Gereksinimler {#Req}

  * Prestashop 1.6 veya daha yüksek yükleyin.
  * Prestashop'a aşina.
  * PHP'nin anlaşılması.

## Modül Gelişiminin Temelleri {#Basics}

Kodlamaya başlamadan önce, **prestashop modül geliştirme** için temel kavramları bilmek gerçekten önemlidir. Modülünüzü hızlı bir şekilde oluşturmanıza ve yönetmenize izin verecektir.
**Yapılandırma** - Yapılandırma, modüle özgü bir tablo gerektirmeden mağaza veritabanına veri kaydetmenizi sağlar. Yapılandırma tablosu, her yerden erişilebilen anahtar değer özelliklerinin bir listesini içerir.
**Hooks** - Kancalar, belirli bir prestashop etkinliğini kodunuza bağlamanın bir yoludur. Kodunuzu sayfalara yerleştirmek ve belirli bir etkinliğe e -posta göndermek gibi belirli işlemler için kancaları kullanabilirsiniz.
**Widget'lar** - Modül geliştiricileri, gerektiğinde içeriği görüntülemek için widget'ları kullanır.
**Doktrin** - Doktrin ORM, veritabanı verilerinizi nesneler aracılığıyla yönetmenizi sağlar. Bu, basit çağrı ile ekleme/güncelleme eylemleri gerçekleştirmenizi sağlayan soyut bir katman sağlar.

## Prestashop Modülümüzü Oluşturun {#Create}

* Prestashop kurulumunuzun **Modüller**dizininde**MyFirstModule** adlı modül dizini oluşturun. Tüm dosyaları modül dizininize yerleştirin.
* Adlı ana dosya oluşturun **myfirstmodule.php** ve içindeki aşağıdaki kodu kopyalayın.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
* Create **install ()**ve **kaldırma ()** Yöntemler. Aşağıdaki yöntemleri**myfirstmodule.php** dosyasına ekleyin.
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * Kayıtlı kancalarımızı etkinleştirmek için özel yöntemleri arayın. Bu yöntemleri “Merhaba Dünya!” Diye görüntülemek için kullanacağız. Kenar çubuklarına metin. Aşağıdaki kodu **myfirstmodule.php** dosyasına ekleyin.
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
* Son olarak, yönetici bölümünü açın, yükleyin ve **prestashop modülünü yükleyin** .

## Çözüm {#Çözüm}

Bu öğreticide **prestashop modülünü** inşa etmek için temel kavramları tartıştık. Ayrıca, daha fazla ileri modül için başlangıç ​​noktası olarak kullanılabilecek temel modül geliştirdik. [Containerize.com][5] sürekli olarak yeni öğretici blog yayınları üzerinde çalışıyor. En son güncellemeler için lütfen [alışveriş sepeti yazılımı][6] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları **Prestashop Modülü Oluşturma Eğitimi** 'na ek olarak yararlı bulabilirsiniz.
  * [Prestashop - Ücretsiz Alışveriş Sepeti Yazılımı][7]
  * [2020'de Top 5 Açık Kaynak Alışveriş Sepeti Yazılımı][8]



[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
