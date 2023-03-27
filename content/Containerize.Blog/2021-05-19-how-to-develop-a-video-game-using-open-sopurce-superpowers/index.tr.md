---
title: "Open-Sopurce Superpowers kullanarak bir video oyunu nasıl geliştirilir" 
seoTitle: "Open-Sopurce Superpowers kullanarak bir video oyunu nasıl geliştirilir" 
description: "Bir video oyunu nasıl geliştirilir? SuperPowers açık kaynaklı bir HTML5 oyun geliştirmedir. Çapraz platformdur ve kullanıcıların animasyonlu 2D ve 3D oyunları oluşturmasına olanak tanır." 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "Çevrimdışı mod ile video oyunu geliştirme için ücretsiz video oyunu tasarım yazılımı. Kendi kendine barındırın, animasyonlu 2D & amp; Ses efektleri ve yazı tiplerine sahip 3D oyunlar." 
url: /tr/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## Çevrimdışı mod ile video oyunu geliştirme için ücretsiz video oyunu tasarım yazılımı. Self It, ses efektleri ve yazı tipleri ile animasyonlu 2D ve 3D oyunlar oluşturun.

{{< figure align=center src="images/superpowers.png" alt="Bir video oyunu nasıl geliştirilir">}}


## Genel Bakış
Yakın geçmişte, [Oyun Geliştirme Yazılımı][1] kategorisinde, global oyun endüstrisinin açık kaynak yazılımından nasıl yararlanmasını ve yeni başlayanların oyun geliştirmeye başlaması için GDEPLOVE eğitimini içeren bazı makaleler yayınlandı. Video oyunu geliştirme, eğlence oyunlarına olan artan taleple dünyaya çok daha fazla yayılıyor. Bununla birlikte, fikir, tasarım geliştirme, sürekli test, sürümler ve geri bildirimleri içerir. Başka bir deyişle, tasarımcıları, yazılım mimarlarını, programcıları, testçileri ve destek kaynaklarını içerir. Buna ek olarak, aksiyon oyunları, bulmaca oyunları, yarış oyunları, bilişsel oyunlar ve biraz daha fazlası gibi birçok oyun türü vardır.
Bu nedenle, herhangi bir 3D oyun oluşturucu ile başlamak için iyi bir oyun geliştirme kılavuzu çok gereklidir. Açık kaynaklı topluluk, 3D ve 2D oyunlar geliştirmek için kurumsal düzeyde özellikler ve yardımcı programlar sunan birçok oyun geliştirme yazılımı geliştirdi. Bu HTML5 Oyun Geliştirme Eğitimi, aşağıdaki noktaları kaplayarak ücretsiz video oyunu geliştirme yazılımı  **süper güçler**  kullanarak bir video oyununun nasıl geliştirileceğini araştıracaktır.
*  **[süper güçler nedir][2]**  
*  **[Localhost'ta nasıl kurulur?][3]**  
*  **[Süper Güçler Gösterge Tablosu?][4]**  
*  **[Sonuç][5]**  

## Süper güçler nedir {#intro}

[Süper güçler][6] video oyunu geliştirme için açık kaynaklı bir yazılımdır. Esnek, sağlam ve genişletilebilir. Bununla birlikte, animasyonlar, 3D modeller ve çok çeşitli oyun örnekleri için destek sunar. Ayrıca, kullanıcıların herhangi bir internet bağlantısı olmadan oyun oluşturabileceği çevrimdışı bir sürümle de gelir. Herhangi bir projeyi yayınlamak inanılmaz derecede kolaydır ve bunlar tek bir tıklamayla gerçekleşir. Kullanıcılar için kullanıcıların çeşitli öğelerden kolayca gidebilecekleri sezgisel bir gösterge tablosu vardır. Her şeyden önce, herhangi bir belirsizlik veya hatadan kaçınmak için geliştiriciye hatayı gösterdiği canlı hata raporlaması olan çok havalı bir şey var. SuperPowers'ın kurulumu kolaydır ve sunucularda daha da barındırmak için kolay gereksinimler gerektirir, bu 3D Game Builder TypeScript'te yazılmıştır ve geliştirme ve dağıtım ile ilgili tüm belgelerle birlikte gelir. Bu nedenle, tüm kaynak kodu [GitHub][7] 'de mevcuttur.
Süper güçler aşağıdaki önemli noktaları sunar:
  * Canlı hata raporlaması
  * Çok dilli
  * Çapraz platform
  * Zengin yazı tipi ve ses efektleri
  * Kendi kendine

## Localhost'ta nasıl kurulur? {#setup}

Hala bir video oyunu nasıl geliştireceğinizi merak ediyorsanız, makalenin bu bölümünde Localhost'ta süper güçler oluşturmayı öğreneceğiz. Bu bölümde, bu  **Oyun Geliştirme Kılavuzu**  , oyun geliştirme ortamını kurma sürecini ayrıntılı olarak açıklayacaktır.
Her şeyden önce, video oyunu geliştirmeye başlamadan önce aşağıdaki ön koşulları yüklediğinizden emin olun:
  * Git
  * NPM
  * Node.js
Yukarıda belirtilen gereksinimler kolay ve çok bilinen bu nedenle yeni başlayanlar için zor bir görev olmayacaktır. Yukarıdaki gereksinimler yüklendikten sonra, terminali açın ve kaynak kodunu klonlamak için aşağıdaki komutu çalıştırın:
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
Başarılı bir klondan sonra, aşağıdaki komutu çalıştırarak indirilen dizine gidin:
```
cd superpowers/core
```
Şimdi, Superpowers oyun sistemini klonlamak için aşağıdaki komutu çalıştırın:
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
Bundan sonra, yapıyı yapmak için aşağıdaki komutu çalıştırın:
```
npm run build
```
Başarılı bir derleme üzerine, aşağıdaki komutu çalıştırarak sunucuyu başlatın:
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="HTML5 Oyun Geliştirme Eğitimi">}}

Şimdi tarayıcıyı açın ve uygulamaya aşağıdaki bağlantıda erişin:
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## Süper güçler kontrol paneli? {#features}

Yukarıdaki URL'ye vurduktan sonra aşağıdaki ana sayfayı göreceksiniz. Yeni bir boş veya 2D platform Projesi'ni değiştirme veya oluşturma seçenekleri vardır.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="Video oyunu geliştirme">}}

Bir video oyununun nasıl geliştirileceği sorusunu ileriye doğru ilerlerken, bir 2D platformu oluşturduktan sonra aşağıdaki ekranı göreceksiniz. Pencerenin sol tarafındaki sahneler oluşturma, karo, oyun haritası ve oynatıcı gibi seçenekleri görebilirsiniz. Kullanıcının davranışını kodlayabileceğiniz canlı bir kodlama seçeneği vardır.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="Video oyunu geliştirme">}}

Ayrıca, sol tarafta animasyonları ayarlayabileceğiniz, görüntüyü oluşturabileceğiniz, yükleyebileceğiniz veya indirebileceğiniz bir ayar çubuğu var. Sol tarafta, aşağıdaki resimde gösterildiği gibi projenize daha fazla varlık ekleme seçeneği vardır. Yazı tipini değiştirmek istiyorsa 3D model kübik bir model, Fint seçeneği içerir. Buna ek olarak, kullanıcılar daha fazla sahne, komut dosyası, gölgelendirici ve sprite ekleyebilir. Ayrıca, bu açık kaynaklı 3D oyun oluşturucu, mümkün olan en iyi oyun ses efektlerine sahip oyuncuları çekmek için oyunlara çeşitli ses efektleri eklemenizi sağlar. Son olarak, fayans haritası ve karo setleri eklemenizi de sağlar.

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="Video oyunu tasarımı">}}

Aynı şekilde, bu oyun makalesinden geçtikten sonra, daha fazla keşfedebilir ve tüm özellikleri kullanabilirsiniz. Ayrıca, Superpowers Video Game Builder'ı kullanarak nasıl devam edeceğinizi anlayabileceksiniz. Bu oyun geliştirme yazılımı için çevrimiçi destek mevcuttur.

##  **Çözüm**  {#Conclusion}

Bu, bu HTML5 oyun geliştirme kılavuzuna bir son verir. Umarım, video oyunu geliştirmeye başlamak istiyorsanız bu blog yazısı size yardımcı olacaktır. Süper güçlerin ne olduğunu, açık kaynaklı bir 3D oyun oluşturucu olan bir video oyunu nasıl geliştirileceğini araştırdık ve ayrıca Localhost'ta kurulum prosedüründen geçtik. Kullanıcıların sıfırdan oyun oluşturmasına izin veren birçok açık kaynak  **video oyunu tasarım uygulamaları**  vardır. Video oyunu programcıları, yüksek kaliteli oyunlar oluşturmak için temel oyun tasarım ilkelerini kullanır. [Blog.containerize.com][8] adresindeki önümüzdeki makalelerimizde 2D ve 3D oyunlar oluşturma hakkında daha fazla bilgi edineceksiniz. Aşağıdaki “Keşfet” bölümünde belirtilen başka açık kaynak, kendi kendine barındırılan 3D oyun inşaatçıları ve ilgili makaleler vardır.
Son olarak, Containerize.com sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [video oyunu geliştirme][9][][10] kategorisiyle iletişim halinde olun. Dahası, bizi sosyal medya hesaplarımızda [Facebook][11], [LinkedIn][12] ve [Twitter][13] 'te takip edebilirsiniz.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [][14][GDEVANS][14]
  * [][14][Godot][15]
  * [][14][süper güçler][6]
  * [][14][COCOS Creator][16]
  * [][14][PANDA3D][17]
*  **[Süper güçler kullanarak oyun geliştirmeye başlamak][18]**  
*  **[Oyun Geliştirme Eğitimi | Gdepop'ta oyuncu hareketi][19]**  
* [  **Açık Kaynak Gdepelop**  ] Kullanarak Scratch'da Oyun Nasıl Yapılır**][20]
*  **[Küresel Oyun Endüstrisi Nasıl Açık Kaynak Yazılımlardan yararlanıyor][21]**  
*  **[Yeni Başlayanlar için Oyun Gelişimine Başlamak İçin Gdepelop Eğitimi][22]**  
* [  **2021 yılında ilk 5 ücretsiz oyun geliştirme yazılımı**  ][23]



 [1]: https://blog.containerize.com/category/game-development-software/
 [2]: #intro
 [3]: #setup
 [4]: #features
 [5]: #Conclusion
 [6]: https://products.containerize.com/game-development-software/superpowers/
 [7]: https://github.com/superpowers/superpowers-core
 [8]: https://blog.containerize.com/
 [9]: https://products.containerize.com/game-development-software/
 [10]: https://products.containerize.com/business-intelligence/
 [11]: https://web.facebook.com/containerize
 [12]: https://www.linkedin.com/company/containerize/
 [13]: https://twitter.com/containerize_co
 [14]: https://products.containerize.com/game-development-software/gdevelop/
 [15]: https://products.containerize.com/game-development-software/godot/
 [16]: https://products.containerize.com/game-development-software/cocos-creator/
 [17]: https://products.containerize.com/game-development-software/panda3d/
 [18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
 [19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
 [20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
 [21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
 [22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
 [23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
