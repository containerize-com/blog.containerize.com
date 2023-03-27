---
title: "Oyun Geliştirme Eğitimi | Gdepelop'ta oyuncu hareketi" 
seoTitle: "Oyun Geliştirme Eğitimi | Gdepelop'ta oyuncu hareketi" 
description: "Temel oyun işlevleri hakkında bilgi edinmek için bu Game Development eğitimini izleyin. Gdepel, oyunlar inşa etmek ve yayınlamak için ücretsiz bir oyun yaratma yazılımıdır." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Ekrandaki nesneleri taşımak herhangi bir oyunun önemli bir parçasıdır. Bu Oyun Geliştirme Kılavuzu'nda, GDEPLOVE'de oyun nesnelerini nasıl kontrol edeceğini ve taşıyacağını öğreneceğiz." 
url: /tr/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Ekrandaki nesneleri taşımak herhangi bir oyunun önemli bir parçasıdır. Bu Oyun Geliştirme Kılavuzu'nda, GDEPLOVE'de oyun nesnelerini nasıl kontrol edeceğini ve taşıyacağını öğreneceğiz.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Oyun Geliştirme Eğitimi">}}


## **Genel Bakış** 
Açık kaynak topluluk her dakikanın geçişi ile ortaya çıkıyor. Platformlar arası oyunlar, mobil oyunlar ve masaüstü oyunları var. Çeşitli oyun türleri aksiyon oyunları, macera oyunları, rol yapma oyunları, spor oyunları, bulmaca oyunları, simülasyon oyunları ve daha fazlasını içerir. Bu nedenle, tüm bu farklı oyun türleri, tüm yaş gruplarından kullanıcılar bu oyunları oynama eğiliminde olduğu için trafiğe büyük bir destek verdi.
Dahası, pandemi dünya çapında yaşayan insanların yaşam tarzında büyük bir değişiklik getirdi. İnsanların artık daha fazla zamanı var. Tüm çevrimdışı faaliyetler çevrimiçi hale geldi. Bu nedenle, eğlence durumunda profesyonel görevler ve video oyunları yapmak için çevrimiçi yazılım tercih etme eğilimindedirler. Tüm bu nedenlerden dolayı, bu endüstri sürdürülebilirlik ve kullanıcıların ve geliştiricilerin desteğini kazanmıştır. Yakın geçmişte, [Video Oyunu Programcıları için HTML5 Oyun Geliştirme Eğitimi][1], [Global Oyun Endüstrisi Nasıl Açık Kaynak Yazılımdan Kalkış][2] ve [Yeni Başlayanlar için Oyun Gelişimine Başlamak İçin Gdeelplop öğreticisi] gibi konular üzerine yazdık. [3]. Bu oyun geliştirme öğreticisinde aşağıdaki noktaları ele alacağız.
* **[Gdepop'un keşfi özellikleri][4]** 
* **[bir oyun üzerinde çalışmak][5]** 
* **[Sonuç][6]** 

## Gdepop'un keşfi özellikleri {#features}

[GDEVER][7] açık kaynaklı bir oyun oluşturma platformudur. Oldukça genişletilebilir ve kullanıcıların kolayca gezinebileceği mantıksal bir arayüz sunar. Bu ücretsiz yazılım C ++, TypeScript ve JavaScript'te yazılmıştır. Ayrıca, geliştirme ve dağıtım konusunda kapsamlı belgeler mevcuttur. Tüm kaynak kodu GitHub'da mevcuttur. Ayrıca, bu oyunu yazılımı öne çıkaran birçok özellik var. Bazı temel özellikleri görelim.
**Çapraz platform** : Bu oyun oluşturma platformu çoklu platformdur ve macOS, Linux ve Windows gibi neredeyse tüm popüler işletim sistemlerine dağıtılabilir.
**Dışa Aktarma Seçenekleri** : Gdeelp, kullanıcıların Android, iOS ve Web için tek bir tıklamayla geliştirilen oyunları dışa aktarmasına izin verir. Oyun sahipleri oyunlarında video reklamları görüntüleyebilir ve Admob'un desteğiyle mümkün olabilir.
**Zengin Oyun Nesneleri** : Bu açık kaynaklı oyun yapıcı, animasyonlar, yangın patlamaları ve parçacık yayıcılarının yardımıyla diğer efektler gibi çok çeşitli oyun nesneleri sunar. Oyunlara göz alıcı efektler getirmek için biçimlendirilmiş metin, gömülü videolar ve çizme özel şekilleri mevcuttur.
**Çok yönlü davranışlar** : Bu temel oyun geliştirme makalesinde, oyun nesnelerine nasıl farklı davranışlar ekleyebileceğimizi göstereceğiz. Kullanıma hazır olan ve kullanıcılar gereksinimlere göre daha fazla gelişebilecek birden fazla davranış vardır. Her şey birkaç fare tıklamasında olur.
**Gelişmiş Arayüz** : Bu Oyun Tasarım Eğitimi'nde, bu 3D oyun motorunun kullanıcı arayüzünü göreceğiz. Kullanıcılar çeşitli oyun öğelerini ve nesneleri sürükleyebilir ve bırakabilir.

## Bir oyun üzerinde çalışmak {#working}

Oyun Geliştirme Eğiticisi'nin bu bölümü, Gdeelp ile temel oyun geliştirmeyi detaylandırmaktadır. Daha ileri gitmeden önce, Makinenize yerel olarak Gdeelp'i yüklediğinizden emin olun.
Bu oyun editörünü LocalHost'ta kurma bilgisini almak için bu öğreticiyi [yeni başlayanlar için Gdepelop eğitimi][3][3] ziyaret edebilirsiniz.
Şimdi editörü açın ve yeni bir proje oluşturun. Bu öğreticide, Google Drive'da oyun dosyalarını kaydetmek için bir klasör oluşturacağız. Şimdi “Yeni Bir Proje Oluştur” u tıklayın, yeni bir iletişim kutusu açacak, yeni bir oyun oluşturmaya başlamak için “Boş Oyun” seçeneğini seçin.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Oyun Geliştirme Eğitimi">}}

Sol taraf proje menü çubuğunda, oyunu kaydetmek için “AS'yi Kaydet” i tıklayın.
İlk olarak, bir sahne ekleyelim. Bunun için “Sahneler” seçeneğini tıklayın ve aşağıdaki resimde gösterilen bu öğreticideki “İlk Sahne” gibi yeniden adlandırın.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" Oyun oluşturma platformu">}}

Sahneyi oluşturduktan sonra açın ve bir nesne ekleyin. Bir nesne eklemek için, sağ yan panelde görünen “Yeni Nesne Ekle” yi tıklayın. Sonunda, farklı varlıklar içeren yeni bir iletişim kutusu açacaktır. Ancak, “Kırmızı Gemi” nesnesini seçelim “Oyuna Ekle” ve iletişim kutusunu kapatın.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Oyun Geliştirme Kılavuzu">}}

Ardından, sol yan panelde görünen bir nesne göreceksiniz. Ana ekrana sürükleyin ve oyunu başlatmak için sol üst köşede görünen düğmeye basın. Bu nedenle, oyunu aşağıdaki resimde gösterildiği gibi yeni bir pencereye açacaktır.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Oyun Geliştirme Eğitimi">}}

Şimdiye kadar, bu nesneyle oynayamazsınız çünkü ona eklenen bir davranış olmadığı için. Öyleyse, bu nesneye bir davranış ekleyelim. Bunun için gemi nesnesini tıklayın ve “Düzenle Nesnesi” ye basın. Yeni bir iletişim kutusu açacak, Davranışlar sekmesine gidecek, “Yukarıdan aşağıya hareket” seçeneğini seçecek ve “Uygula” a basın. Şimdi, oyunu önizleyin ve klavye ok tuşlarınızı kullanarak gemi nesnesini ekranda taşıyabileceğinizi göreceksiniz. Şimdi, gemi nesnesinin ekrandan çıktığını fark edeceksiniz. Bu nedenle, bu sorunu çözmek için nesneyi düzenleyelim ve davranışlara gidelim. "Nesneye bir davranış ekle" yi tıklayın. Şimdi, “Yeni Davranışlar Ara” adresine gidin ve aşağıdaki resimde gösterildiği gibi arama çubuğunda “Ekranda Kal” davranışını arayın.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Gelişmek">}}

Ardından, seçin ve projeye yükleyin ve uygulamaya basın. Bir şey daha, nesnenin merkez noktasını ayarlamaktır. Öyleyse, nesne özelliklerine tekrar gidelim ve altta görünen “Düzenle noktalarını”. Aşağıdaki ekrana ineceksiniz.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="Oyun Tasarım Eğitimi">}}

Bu nedenle, sol üst köşede görünen işareti nesnenin ortasına sürükleyin, ardından kapatın ve uygulayın. Şimdi, oyunu yeniden başlatırsanız, değişiklikleri göreceksiniz.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Oyun Geliştirme Eğitimi">}}


## Çözüm {#Çözüm}

Bu oyun geliştirme öğreticisinin sonu. Umarım, bu blog yazısı oyun geliştiricileri için yararlı olacaktır. Bu öğretici, oyun nesneleriyle çalışmanızı ve davranışları eklemenizi mümkün kıldı. Gelecekte Containerize.com, diğer açık kaynaklı video oyunu tasarım yazılımı hakkında blog yayınları ve öğretici makaleler yayınlayacak. Bu nedenle, düzenli güncellemeler için lütfen [Containerize.com][9] adresindeki bu [Oyun Geliştirme Yazılımı][8] kategorisiyle bağlantıda kalın.

## Keşfetmek
  * [Gdeelp][7]
  * [Godot][10]
  * [Süper güçler][11]
  * [Cocos Creator][12]
  * [Panda3d][13]



[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/tr/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
