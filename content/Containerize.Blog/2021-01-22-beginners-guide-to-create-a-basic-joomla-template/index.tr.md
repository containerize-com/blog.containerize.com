---
title: "Temel bir Joomla şablonu oluşturmak için acemi kılavuzu" 
seoTitle: "Temel bir Joomla şablonu oluşturmak için acemi kılavuzu" 
description: "Joomla popüler bir açık kaynaklı içerik yönetim sistemidir. Bu öğreticide, bir Joomla şablonunun nasıl oluşturulacağını adım adım açıklayacağız." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla en popüler açık kaynaklı içerik yönetim sistemlerinden biridir. Bu öğretici, sıfırdan bir Joomla şablonu oluşturmanın gerekli adımlarından geçecektir." 
url: /tr/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla en popüler açık kaynaklı içerik yönetim sistemlerinden biridir. Bu öğretici, sıfırdan bir Joomla şablonu oluşturmanın gerekli adımlarından geçecektir.

{{< figure align=center src="images/joomla-templates-2.png" alt="Temel Joomla Şablonu">}}

Bu dijital çağda, bir içerik yönetim sistemi, tüm içerik oluşturma ihtiyaçları için herhangi bir işletmenin temel bir zorunluluğudur. Ve piyasada bulunan bir dizi açık kaynak ve ücretli CMS yazılımı vardır. Ayrıca, işletmeler için en iyi açık kaynaklı içerik yönetimi yazılımından bazılarını [listeledik][1]. Joomla en popüler açık kaynaklı CMS yazılımlarından biridir ve bu öğreticide size adım adım ilerleyeceğiz ve sıfırdan bir Joomla şablonunun nasıl oluşturulacağını açıklayacağız. Öyleyse başlayalım!
** Not: Joomla 2.5 sürümünün yüklü olduğunu varsayıyoruz **
  *** [Kurulum dizin yapısı][2] **
  *** [Temel Templatedetails.xml dosyası oluştur][3] **
  *** [Temel bir dizin oluşturun.php dosyası oluştur][4] **
  *** [Şablonu keşfedin ve yükleyin][5] **
  *** [şablonu paketleyin][6] **
  *** [Sonuç][7] **

## Kurulum dizin yapısı {#setup}
Önce çok temel bir Joomla şablonu oluşturmak için, şablon klasöründe yeni bir klasör oluşturun. Şablonunuzu demek istediğiniz her şeyi klasörü adlandırın, örneğin “** MyNewtemplate **”.
En sevdiğiniz metin düzenleyicinizi kullanarak ** index.php ** ve ** templatedetails.xml ** dosyalarını oluşturun. Resimlerinizi ve stil sayfalarınızı yönetmek için ** görüntüler ** ve ** css ** adlı 2 yeni klasör yapın. ** css ** klasörünün içinde ** template.css ** adlı bir dosya oluşturun.
Dizin yapınız böyle bir şey görünecek

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Joomla Şablon Dizin Yapısı">}}


## Temel Templatedetails.xml dosyası {#xml} oluşturun
** Templatedetails.xml ** dosyası, şablonunuzla ilgili tüm meta verileri tutar. Ve bu dosya onsuz şart, şablonunuz Joomla tarafından görülmeyecek!.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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
Templateetails.xml içeriği kendi kendini açıklayandır. Sadece gerekli bitleri değiştirin içeriğini kopyalayabilirsiniz.
Konumları oldukları gibi bırakın - bunlar ortak bir settir, böylece standart şablonlardan kolayca geçiş yapabilirsiniz.

## Basic Index.php dosyası {#php} oluşturun
INDEX.php, Joomla'nın her sayfasının ana bootstrap dosyası olur! teslim eder. Bu sayfa, kendi tasarımınıza kesmeniz ve yapıştırmanız için hazır çıplak kemikler kodunu gösterecektir.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## Şablonu keşfedin ve yükleyin {#install}
Önce Joomla'ya söylemelisin! Yeni bir şablon oluşturdunuz. Bu özelliğe Discover uzantıları denir ve
```
Extensions -> Extension Manager -> Discover
```
Şablonunuzu keşfetmek için Keşfet düğmesine tıklayın, ardından seçin ve yüklemek için yükleyin. Şimdi şablonunuz şablon yöneticisinde (stiller) görünmeli,
```
Extensions -> Template Manager
```

## şablon paketi {#packge}
Birkaç dosyaya sahip sıkıştırılmış bir dizin dağıtım için iyi bir yöntem değildir. Bu nedenle, dağıtım uğruna şablonumuzun bir paketini oluşturmalıyız. Paket zip biçiminde olabilir (.zip uzantısı ile).
Şablonunuz bir dizin myTemplate/ sonra paketi yapmak için bu dizine bağlanabilir ve aşağıdakileri kullanabilirsiniz:
```
zip -r ..\mytemplate.zip .
```

## Sonuç {#Conclusion}
Bu makalede Joomla şablonunu öğrendik. Bir Joomla şablonunun nasıl oluşturulacağına adım adım ilerledik. Bu, şablon oluşturmaya başlamak için çok temel bir öğreticidir. Tabii ki, bu çıplak kemik yapısına dayanan çok özelleştirilmiş ve geliştirilmiş bir şablon oluşturabilirsiniz.

## İlgili Ürün Sayfaları
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Yeni başlayanlar için Joomla Şablon Geliştirme Kılavuzu][8]

  
[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
