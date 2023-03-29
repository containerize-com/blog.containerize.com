---
title: "Açık Kaynak Gdepope kullanarak bir oyun nasıl sıfırda yapılır" 
seoTitle: "Açık Kaynak Gdepope kullanarak bir oyun nasıl sıfırda yapılır" 
description: "Sıfırdan bir oyun nasıl yapılır? Gdeish, web, masaüstü, iOS ve Android için video oyunları oluşturmak için birçok bileşen ve davranışla dolu mantıklı bir kullanıcı arayüzü sunar." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "Bu Oyun Geliştirme Eğitimi, bir kamyon yarış oyunu oluşturmanın temellerini açıklar. Heyecan verici bir video oyunu oluşturmak için yükleyebilir veya çevrimiçi uygulamasını kullanabilirsiniz." 
url: /tr/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Bu Oyun Geliştirme Eğitimi, bir kamyon yarış oyunu oluşturmanın temellerini açıklar. Heyecan verici bir video oyunu oluşturmak için yükleyebilir veya çevrimiçi uygulamasını kullanabilirsiniz.

{{< figure align=center src="images/gdevelop-game.png" alt="Scratch'da bir oyun nasıl yapılır">}}


## **Genel Bakış** 
Yakın geçmişte, [2021 yılında Top 5 Ücretsiz Oyun Geliştirme Yazılımı][1], [Superpowers kullanarak Oyun Gelişimine Başlamak][2], [Game Geliştirme Eğitimi | GDEVANP'DA PLAYER hareketi][3], [Video Oyunu Programcıları için HTML5 Oyun Geliştirme Eğitimi][4], [Global Oyun Endüstrisi Nasıl Açık Kaynak Yazılımdan yararlanıyor][5] ve [Yeni Başlayanlar için Gdepelple Eğitimi][6. ]. İnternet çağındaki son gelişmeler video oyun endüstrisinde yeni trendler getirdi. Açık kaynaklı bir oyun oluşturma platformu, oyunları bağımsız olarak geliştirmek için eksiksiz bir ekosistem sağlar ve geliştiriciler bu platformu ihtiyaçlara göre olgunlaştırır. Bu blog yazısında, aşağıdaki noktaları kapsayarak [Gdeelop][7] kullanarak bir oyunun çizikte nasıl yapılacağını öğreneceğiz.
* **[Neden Gdecop kullanmalıyız?][8]** 
* **[Projenin kurulması][9]** 
* **[arka plan ve nesne nasıl hazırlanır?][10]** 
* **[Nesneye Behviors Ekleme][11]** 
* **[oyunu çalıştırmak][12]** 
* **[Sonuç][13]** 

## Neden Gdeelp kullanmalıyız? {#why}

[GDEVER][7] açık kaynaklı bir oyun yazılımıdır. Kendi kendine barınma yetenekleri ile birlikte gelir ve doğada çapraz platformdur. İndirebilir ve yükleyebilir veya onunla oynamak için çevrimiçi sürümünü kullanabilirsiniz. Kullanıcıların bu oyun oluşturucusunu kullanmak için herhangi bir programlama bilgisi kazanmaları gerekmez. Her şeyden önce, önceden oluşturulmuş oyun davranışları, şablonları ve nesnelerle ortaya çıkan bir sürükleme ve damla kullanıcı arayüzü sunar. Bu ücretsiz oyun geliştirme yazılımı son derece yapılandırılabilir ve üçüncü taraf kütüphanelerle entegrasyonlar sunar. Bu ücretsiz araç hakkında daha fazla bilgi için, özellikleri ve kurulum süreci hakkında daha fazla bilgi edinmek için bu bağlantıyı kontrol edebilirsiniz.

## Projeyi kurmak {#setting}

Bu bölümde, bazı temel işlevlere sahip bir kamyon yarış oyunu oluşturmak için projemizi oluşturacağız. Bunu izleyin [bağlantı][6] Yerel makinenize kurmak istiyorsanız veya bu [bağlantı][14] 'e giderek çevrimiçi sürümü kullanabilirsiniz.
“Yeni bir proje oluştur” u tıkladığınızda aşağıdaki ekranı bulacaksınız ve ardından “Boş Oyunu” yı tıklayın.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Scratch'da bir oyun nasıl yapılır">}}

Pencerenin sol tarafındaki menü çubuğunu görebilirsiniz. Şimdi, “Sahneler” i tıklayın ve ardından “Sahne Eklemek İçin Tıklayın” düğmesine çift tıklayın. Bundan sonra, oyun nesneleri, arka planlar ve davranışlar oluşturabileceğiniz oyun ekranına ineceksiniz. İleri doğru, sağ yan panelde yerleştirilen “Yeni Bir Nesne Ekle” yi tıklayın ve aşağıdaki pencereyi göreceksiniz.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Gdeplop eğitimi">}}


## Arka plan ve nesne nasıl hazırlanır? {#prepare}

Arama çubuğunda, kamyon nesnesini arayın ve çift tıklayın ve sonuçlara geldikten sonra “Oyuna Ekle” ye basın. İki tekerlek ve bir platform nesnesi için bu adımı tekrarlayın. Şimdi, Greenfloor nesnesine sağ tıklayın ve düzenleyin.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="Oyun Geliştirme Eğitimi">}}


## Nesneye Behviors eklemek {#add}

Ardından, Greenfloor'u oyun ekranına sürükleyin ve bırakın ve yüksekliğini ve genişliğini dileğinize göre ayarlayın. Kamyon nesnesini sürükleyin ve oyun ekranına ve ardından tekerlek nesnelerine bırakın. İleride hareket edin, kamyon gövdesine sağ tıklayın ve “Nesne Truckbody Düzenle” ye basın, davranışları tıklayın, “Nesneye Bir Davranış Ekle” yi tıklayın ve “Fizik Motoru 2.0” ı tıklayın, aşağıdaki pencereyi göreceksiniz.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Scratch'da bir oyun nasıl yapılır">}}

Bu pencerede, yoğunluk, genişlik ve yükseklik gibi yapılandırmaları değiştirebilirsiniz. Şimdi, Greenfloor nesnesi için aynı işlemi tekrarlayın, ancak “statik” türünü saklayın ve “Uygula” düğmesine basın. Yine, TruckBody nesnesini düzenleyin, “Puanları Düzenle” ye basın, “EDD Points” te basın ve ardından ön tekerleğinizin adını ekleyin (yani bu öğreticide FW). Nesne üzerinde bir nokta oluşturulacak, sadece o noktayı tekerlek konumuna sürükleyin. Bu işlemi arka tekerlek için de tekrarlayın ve aşağıdaki resimde gösterildiği gibi x ve y'yi 0'a getirin.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="Oyun Geliştirme Eğitimi">}}

Bundan sonra, her iki tekerlek nesnesini de düzenleyin ve noktalarını ayarlayın. Ayrıca, tekrar tekerleklerin düzenleme seçeneğine gidin, “Davranış” sekmesine basın, “Fizik Motoru 2.0” ı seçin ve aşağıdaki resimde gösterildiği gibi tür, yarıçap ve yoğunluk değerlerini ayarlayın.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="Oyun Tasarım Yazılımı">}}

Şimdi, “Yeni Sahne” sekmesine tıklayın, “Yeni Etkinlikler Ekle” ye basın, “Durum Ekle” ye basın, “Sahnenin başında” arayın ve “Tamam” a basın. Ardından, “Kamera Merkezi X Pozisyonu” için “Eylem Ekle” araması yapın ve aşağıdaki yapılandırmaları ayarlayın.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="Ücretsiz Oyun Geliştirme Yazılımı">}}

Şimdi, eylemi kopyalayın, ancak kopyalanan eylemin “Y” olarak ayarlandığından emin olun. “Kamera Zoom'u Değiştir” adlı başka bir eylem ekleyin, 0.4'e ayarlayın ve bu eylemi üste sürükleyin. Başka bir eylem ekleyin, “Tekerlek eklemi ekle” yi arayın ve aşağıda gösterildiği gibi her iki tekerlek için yapılandırmaları ayarlayın.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Oyun Geliştirme Kılavuzu">}}

Bundan sonra, yeni bir koşul ekleyin, “tuşa basıldığını” arayın ve sola ayarlayın. Şimdi, eylem ekle, birinci tekerleği seçin, doğrusal hızı arayın ”,“ çıkarmak ”için modifikasyon işareti ve 50 değerini ayarlayın.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="Oyun Geliştirme Eğitimi">}}


## Oyunu Koşmak {#run}

Tüm adımlar tamamlandığında. Sol üst köşeye yerleştirilen düğmeye basarak oyunu çalıştırmanın zamanı geldi. Oyunu yeni pencereye başlatacak.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Scratch'da bir oyun nasıl yapılır">}}


## Çözüm {#Çözüm}

Bu blog yazısının sonu ve kesinlikle bir oyunun sıfırda nasıl yapılacağını öğrendiniz. Ancak, bu endüstri popülerlik ve talep kazandığı için piyasada birçok ücretsiz **oyun tasarım yazılımı** var. Arkasında açık kaynaklı yazılım ölçeklenebilir, yapılandırılabilir, uygun maliyetli ve bakımı kolay olması gibi çeşitli nedenler vardır. Buna ek olarak, geliştiriciler Android, iOS, Web ve masaüstü gibi tüm popüler platformlarda çalışan bir oyun oluşturmayı rahat buldukları için platformlar arası oyun inşaatçılarına olan talep artmaktadır. Öte yandan, pandeminin ortaya çıkışı insanların hayatlarını değiştirdi ve şimdi içeride kalmayı tercih ediyorlar. Yani, insanlar boş zamanlarında video oyunları oynama eğilimindedir.
Son olarak, [Containerize.com][15], öğretici tabanını biraz daha ilginç **oyun geliştirme öğreticileri** ile geliştirecek şekilde ayarlanmıştır. Düzenli güncellemeler için lütfen bu [Oyun Geliştirme Yazılımı][16] kategorisiyle bağlantıda kalın.

## Keşfetmek
* **[Gdeelp][7]** 
* **[Godot][17]** 
* **[süper güçler][18]** 
* **[Cocos yaratıcısı][19]** 
* **[Panda3d][20]** 
* **[Playcanvas][21]** 
* **[Süper güçler kullanarak oyun geliştirmeye başlamak][2]** 
* **[Oyun Geliştirme Eğitimi | Gdepop'ta oyuncu hareketi][3]** 
* **[Video oyunu programcıları için HTML5 Oyun Geliştirme Eğitimi][4]** 
* **[Küresel Oyun Endüstrisi Nasıl Açık Kaynak Yazılımlardan yararlanıyor][5]** 
* **[Yeni Başlayanlar için Oyun Gelişimine Başlamak İçin Gdepelop Eğitimi][6]** 
* [ **2021 yılında ilk 5 ücretsiz oyun geliştirme yazılımı** ][1]



[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
