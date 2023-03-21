---
title: "Süper güçleri kullanarak oyun geliştirmeye başlamak" 
seoTitle: "Süper güçleri kullanarak oyun geliştirmeye başlamak" 
description: "SuperPowers, gerçek zamanlı işbirliğine sahip açık kaynaklı bir 3D oyun üreticisidir. Bu öğretici, süper güçler kullanarak oyun geliştirmeye başlamakla ilgilidir." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "Oyun nesnelerinin davranışı ve hareketi animasyonlar tarafından kontrol edilir. Bu oyun geliştirme öğreticisinde, oyun karakterlerini nasıl canlandıracağınızı öğreneceğiz." 
url: /tr/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## Oyun nesnelerinin davranışı ve hareketi animasyonlar tarafından kontrol edilir. Bu oyun geliştirme öğreticisinde, oyun karakterlerini nasıl canlandıracağınızı öğreneceğiz.

{{< figure align=center src="images/super.png" alt="Oyun Gelişimine Başlamak">}}


## **Genel Bakış** 
Açık kaynaklı oyun geliştirme öğretici serimizde, [Oyun Geliştirme Eğitimi | GDEPOSP'DA PLAYER hareketi][1], [Video Oyunu Programcıları için HTML5 Oyun Geliştirme Eğitimi][2], [Global Oyun Endüstrisi Nasıl Açık Kaynak Yazılımlardan yararlanıyor][3] ve [Yeni Başlayanlar Oyun Gelişimine Başlamak İçin Gdeelop öğreticisi][4 ]. Bu öğretici makale, aşağıdaki noktaları kapsayarak ücretsiz açık kaynak [süper güçler][5] kullanarak oyun geliştirmeye başlamakla ilgilidir.
  ***[Oyun Animasyon Türleri][6]** 
  ***[Sprite nasıl oluşturulur?][7]** 
  ***[sahnelerle çalışmak][8]** 
  ***[Oyunu Localhost'ta başlatmak][9]** 
  ***[Sonuç][10]** 
Yeni başlayanlar için kendi kendine barındırma yetenekleriyle birlikte gelen birçok açık kaynaklı oyun geliştirme yazılımı vardır. Bununla birlikte, [Superpowers][5] platformlar arası 2D ve 3D oyun oluşturma yazılımıdır. Oyun geliştiricileri için oyun geliştirmeleri kolaylaştıran yerleşik kütüphaneler ve oyun örnekleri sağlar. Bu ücretsiz oyun tasarım uygulaması TypeScript'te yazılmıştır ve tüm belgeler geliştirme ve dağıtım ile ilgili [GitHub][11] 'te mevcuttur. Bu blog yazısında, kullanımlarıyla ilgili süper güçleri keşfedeceğiz.

## Oyun Animasyon Türleri   {#types}
Animasyonlar video oyunlarının hayati bir parçasıdır. Oyunlardaki karakterler kullanıcının eylemlerine yanıt vermelidir, animasyon pürüzsüz ve ani olmalıdır. Bu, birden fazla kare ve animatörün yönetilmesi ile ilgilidir. Ayrıca, nesnelerin üç boyutlu alanda hareket ettiği 2D ve 3D animasyonlar vardır. Oyun geliştiricileri ve grafik tasarımcıları 3D modeller oluşturur. Animasyonlar oyunun doğasına bağlıdır ve en yaygın türler aşağıdaki gibidir.
**Yürüyüş Animasyonu:**  Yürüyüş Animasyonu, karakterlerin her adımı canlandırdığı ve yürüyüş çizimleri verdiği bir yürüyüş sürecinin oluşturulmasıyla ilgilidir.
**Boşta animasyon:**  Bu, kullanıcının herhangi bir denetleyiciye basmadığı için karakterin hiçbir şey yapmadığı çok önemli bir animasyon türüdür.
**animasyon çalıştırma** : Run Animation, Game nesnesinin çalışma döngüsünü gerçekleştirdiği her oyunun bir parçasıdır. Bu tür en yaygın tiptir ve geliştiriciden daha fazla dikkat gerektirir.
**Dövüş Animasyonu** : Dövüş oyunlarında, birden fazla oyun karakteri birbirleriyle savaşır.
**Atlama Animasyonu** : Bu tür animasyon daha iyi beceri ve uzmanlık gerektirir. Karakter, atlama illüstrasyonu yapmak için vücudu sıkıştırır ve serbest bırakır.

## Sprite nasıl oluşturulur?   {#Sprites}
Oyun Yapma Kılavuzu'nun bu bölümü, kullanıcıların proje oluşturmasını ve oyun için spritel oluşturmaya başlamasını sağlar. Sprite, sadece oyunlarda değil, aynı zamanda web tasarımının bir parçası olan statik olmayan görüntüler veya grafiklerdir. Bunlar normalde sürekli yenilenen bir arka plan üzerine çizilir.
Devam etmeden önce, makinenizde süper güçler ayarladığınızdan emin olun. Bu ücretsiz oyun oluşturma platformunu kurmak için bu bağlantıyı [Video Oyunu Programcıları için HTML5 Oyun Geliştirme Eğitimi][2] takip edebilirsiniz.
İlk olarak, uygulamayı tarayıcıya açın ve yeni bir boş proje oluşturalım. Aşağıdaki resimde gösterildiği gibi.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Oyun Gelişimine Başlamak">}}

Yeni boş projeyi oluşturduktan sonra proje alanına ineceksiniz. Sol yan panelde menü seçenekleri vardır. Varlık iletişim kutusunu açmak için “+” düğmesine tıklayın. Sprite seçeneğini seçin ve Create'e basın.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Oyun Yapma Rehberi">}}

Şimdi, davranış ekleyeceğimiz görüntüyü yükleyin. Sağ üst köşeye yerleştirilen düğmeyi tıklayarak yapabilirsiniz. Bu panel nesnenin yapılandırmasıyla ilgilidir.
Ardından, ızgara boyutunu istediğiniz şekilde ayarlayabilirsiniz. Tuvalin iki kısmı var. Üst kısım, alt parçanın animasyon uygulamayı amaçladığımız seçilen kısmı gösterdiği tam sayfayı gösterir. Aşağıdaki resimde gösterildiği gibi sağ yan panelde “kurulum” düğmesine basarak yapabilirsiniz.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="Oyun Geliştirme Eğitimi">}}

Bundan sonra animasyonlar oluşturalım. Bunu Animasyon sekmesindeki “Yeni” düğmesini tıklayarak yapabiliriz. Aşağıdaki resmi görebilirsiniz.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="Yeni başlayanlar için oyun geliştirme yazılımı">}}


## sahnelerle çalışmak   {#scenes}
Bu bölümde, oyunumuza bir sahne ekleyeceğiz. Bunun için yine Varlıklar iletişim kutusunu açın ve “Sahne” yi seçin ve Oluştur düğmesine basın. Şimdi aşağıdaki resimde gösterildiği gibi sağ üst köşede bulunan yıldız düğmesini tıklayarak bir aktör oluşturun.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="Yeni başlayanlar için sıfırda bir oyun nasıl yapılır">}}

Bundan sonra, sağ yan panelde yerleştirilen “Yeni Bileşen” düğmesini tıklayarak yeni bir bileşen oluşturun. “Sprite Renderer” ı seçin ve Create'e basın. Ardından, oluşturulan sprite sol yan panelden sürükleyin ve Sprite oluşturucu bölümünün altına bırakın. Dahası, “kamera” adlı başka bir aktör oluşturun ve aynı şekilde kamera adında yeni bir bileşen oluşturun.
Kamera modunu değiştirebilirsiniz, böylece aşağıdaki resimde gösterildiği gibi “ortografik” mod olarak değiştirin.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="Oyun Gelişimine Başlamak,">}}

Sol alt köşede, Ayarlar seçeneğine gidin ve açın. “Sprite” ve “Kiremit haritası” bölümleri altında, 16'yı “Birim başına piksel” e ekleyin. Ardından “Varsayılan Kamera Modu” nda, “Sahne” bölümünün altındaki 2D'yi seçin. Ayrıca, “Kiremit haritası” bölümü altında, varsayılan genişlik 36, varsayılan yükseklik 28 ve karo seti ızgara boyutu 16. Kaydedilmeye gerek yoktur, bunun yerine her şey otomatik havada bulunur.

## Localhost'ta oyunu başlatma   {#local}
Bu nedenle, ilk oyunumuzun Süper Güç Animasyonunu başlatmaya yaklaşıyoruz. Ancak, yine Ayarlar sekmesine gidin ve sahneyi sol yan panelden sürükleyin ve aşağıdaki resimde gösterildiği gibi “Başlangıç ​​Sahnesi” ne kadar bırakın.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="Yeni başlayanlar için sıfırda bir oyun nasıl yapılır">}}

Şimdi, “Player” ı tıklayın ve “Sprite Renderer” bileşeni altında, “Animasyon” özelliğine karşı animasyon seçin. Son olarak, sol üst köşeye yerleştirilen düğmeyi tıklayarak uygulamayı başlatın. Yeni sekmede ekrandaki hareketli nesneleri gösterecektir.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Oyun Gelişimine Başlamak">}}


## Sonuç   {#Conclusion}
Bu, yeni başlayanlar için sıfırda bir oyun yapmayı öğrendiğimiz öğreticinin sonu. Bu nedenle, oyun geliştirme yazılımının ayrıntılı belgeleri olduğunda oyun geliştirmeye başlamak kolaylaşır. Son olarak, [**Containerize.com** ][12] daha fazla açık kaynak konuları ve ürünleri hakkında makale yazma sürecindedir. Bu nedenle, düzenli güncellemeler için lütfen bu [oyun geliştirme yazılımı][13] kategorisiyle iletişim halinde olun.

## Keşfetmek
  * [Gdeelp][14]
  * [Godot][15]
  * [Süper güçler][5]
  * [Cocos Creator][16]
  * [Panda3d][17]
  * [Playcanvas][18]

  
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
