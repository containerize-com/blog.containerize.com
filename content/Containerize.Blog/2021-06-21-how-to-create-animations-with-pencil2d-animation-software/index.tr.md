---
title: "Pencil2D animasyon yazılımı ile animasyonlar nasıl oluşturulur" 
seoTitle: "Pencil2D animasyon yazılımı ile animasyonlar nasıl oluşturulur" 
description: "Pencil2D, kullanıcıların 2D animasyonlar ve eskizler oluşturmasını sağlayan açık kaynaklı bir animasyon yazılımıdır. Bu makale Pencil2D ile animasyonun nasıl oluşturulacağı ile ilgilidir." 
date: Mon, 21 Jun 2021 06:45:42 +0000
author: bilalahmed
summary: "Pencil2D, kullanıcıların 2D animasyonlar ve eskizler oluşturmasını sağlayan açık kaynaklı bir animasyon yazılımıdır. Bu makale Pencil2D ile animasyonun nasıl oluşturulacağı ile ilgilidir." 
url: /tr/how-to-create-animations-with-pencil2d-animation-software/
categories: ['Animation Software']
---

{{< figure align=center src="images/How-To-Create-Animations-With-Pencil2D-Animation-Software.png" alt="Pencil2D animasyon yazılımı ile animasyonlar nasıl oluşturulur">}}


## **PENEM2D, kullanıcıların 2D animasyonlar ve eskizler oluşturmasını sağlayan açık kaynaklı bir animasyon yazılımıdır. Bu makale Pencil2D** ile nasıl animasyon oluşturulacağı ile ilgilidir.
Animasyonlar ve çizimler oluşturmak için yeni yazılım öğrenmek söz konusu olduğunda, yeni yazılımlara hakim olmanıza ve animasyonları öğrenmenize yardımcı olabilecek bir grup öğretici ve kılavuz oluşturduk. İster yeni başlayan ister gelişmiş bir kullanıcı olun, [geçmiş yayınlarımız][1] sizin için doğru animasyon uygulamasını bulmanıza yardımcı olabilir. Pencil2D animasyon yazılımı ile animasyonların nasıl oluşturulacağını öğrenmek için aşağıdaki konuları ele alalım.
  * [Pencil2D nedir?][2]
  * [Pencil2D nasıl kurulur?][3]
  * [Uygulama arayüzüne genel bakış][4]
  * [Pencil2D ile animasyonlar nasıl oluşturulur?][5]
  * [Sonuç][6]

## Pencil2D nedir? {#what-is-pencil2d}

[PENEM2D][7], kullanıcıların farklı projeler için 2D çizgi film ve animasyon eskizleri oluşturmalarını sağlayan geleneksel bir animasyon uygulamasıdır. GNU Genel Kamu Lisansı altında lisanslı açık kaynaklı bir animasyon yazılımı olduğu için Pencil2D'yi hem kişisel projeler hem de ticari çabalar için kullanabilirsiniz. Pencil2D kullanmak, yazıda daha fazla göreceğiniz gibi oldukça basittir. Hem yeni başlayan animatörler hem de profesyonel kullanıcılar tarafından da kullanılabilir.
[Pencil2d][7] ile animasyonlarınız bitmap veya vektör çizimlerinde saklanır ve animasyonların etkili yönetimi için bir raster/vektör iş akışı kullanır. Pencil2D kullanırken kabul edilebilir dosya biçimlerinden bazıları PNG, JPEG, BMP, TIFF vb. Görüntüler için ve videolar için AVI, MP4, GIF ve daha fazlasıdır. Windows, Mac OS, Linux ve FreeBSD ile de uyumludur.

## Pencil2D nasıl kurulur? {#install-pencil2d}

Terminali açın ve aşağıdaki komutu yazarak yerel sunucunuzun paket dizinini güncelleyin:
```
sudo apt-get update -y

```
Pencil2D'yi yüklemek için terminalde aşağıdaki komutu çalıştırın:
```
sudo apt-get install -y pencil2d

```

## Uygulama arayüzüne genel bakış {#application-interface}

Pencil2D ile animasyonların nasıl oluşturulacağına dair gerçek Pencil2D öğreticisi ile başlamadan önce, kullanıcı arayüzüne biraz genel bakış ve araçları ve özellikleri bilmek için bazı iyi.
* **Beyaz Tahta:**  Pencil2D'yi ilk kez başlattığınızda, ortada animasyonun ana bölümünü oluşturacağınız kontrol panelleri, araçları ve özellikleriyle çevrili bir ana beyaz tahta göreceksiniz.
* **Araçlar:**  Sol tarafta, fırça aracı, kalem, silgi, renk eklemek için kova aracı ve bir çizgi film veya animasyon çizmenize ve tanımlamanıza izin verecek tüm özellikleri içeren araçlar özelliğini bulacaksınız.
* **Seçenekler Kutusu:**  Araçlar kutusunun altında, kullandığınız araçların niteliklerini tanımlama seçeneğini elde edeceğiniz seçenek penceresini ekleme veya kaldırma yeteneğine sahipsiniz. Örneğin, bir fırça kullanıyorsanız, fırçanın kalınlığı arasında geçiş yapabilirsiniz, rengin ne kadar hafif veya koyu görüneceği ve benzer özellikler.
* **Ekran kutusu:**  Seçeneklerin altında, beyaz tahtaya çizdiğiniz çizimi sağa veya sola çevirme, soğan derisini önceki eskizlere uygulama ve daha fazlası gibi ekran kutusu bulunur.
* **Renk paleti:**  Burada çizimlerinize eklenebilecek tüm mevcut renkleri bulacaksınız.
* **Renk Kutusu:**  Renk paletinin hemen altında, renk tekerleğinden belirli renk tonlarını seçmenizi sağlayan renk kutusudur.
* **Zaman Çizelgesi Paneli:**  Bu, Bitmap katmanı, vektör katmanı ve kamera katmanından başlayarak animasyonunuza katmanlar uygulamanıza izin veren Pencil2D'nin en önemli bölümlerinden biridir. Ayrıca bir video animasyonu oluşturmak, çerçeveleri silmek ve yinelenen çerçeveler ve daha fazlasını oluşturmak için anahtar çerçeveler de ekleyebilirsiniz.
Bu araçları ustalaşıp anladıktan sonra, animasyonlar ve eskizler oluşturmaya başlayabilir veya gittikçe öğrenmeye çalışabilirsiniz.

## Pencil2D ile animasyonlar nasıl oluşturulur? {#create-animations}

Şimdi, Pencil2D ile temel bir animasyon oluşturmaya geçebiliriz.
{{_LINE_38_}}
{{_LINE_39_}}

{{< figure align=center src="images/IMG-20210617-WA0049.jpg" alt="Pencil2D animasyon yazılımı ile animasyonlar oluşturun">}}

{{_LINE_41_}}
{{_LINE_42_}}

{{< figure align=center src="images/IMG-20210617-WA0050.jpg" alt="Pencil2D animasyon yazılımı ile animasyonlar oluşturun">}}

{{_LINE_44_}}
{{_LINE_45_}}

{{< figure align=center src="images/IMG-20210617-WA0051.jpg" alt="Pencil2D animasyon yazılımı ile animasyonlar oluşturun">}}

{{_LINE_47_}}
{{_LINE_48_}}

{{< figure align=center src="images/IMG-20210617-WA0053.jpg" alt="Pencil2D animasyon yazılımı ile animasyonlar oluşturun">}}

{{_LINE_50_}}
{{_LINE_51_}}

{{< figure align=center src="images/IMG-20210617-WA0048.jpg" alt="Pencil2D animasyon yazılımı ile animasyonlar oluşturun">}}

{{_LINE_53_}}
{{_LINE_54_}}
Şimdi animasyonu bir web sitesine gömebilir, bir tarayıcıya veya masaüstünüze ve daha fazlasını oynatabilirsiniz.

## Çözüm {#conclusion}

Yukarıdaki öğreticiden de görebileceğiniz gibi, Pencil2D ile animasyonlar oluşturmak anlaşılması ve yürütülmesi oldukça kolaydır. Animasyon yazılımı, yeni başlayanlar dostu olacak şekilde ve profesyoneller tarafından da benimsenmede hızlı bir şekilde oluşturulmuştur. 2D eskiz veya animasyon oluşturma söz konusu olduğunda Pencil2D'de birçok seçenek vardır ve herhangi bir illüstratör gerçekten uygulama ile güçlü bir portföy oluşturabilir.
[Pencil2D][7] daha önce bahsettiğimiz gibi birçok işletim sistemi ile uyumludur, böylece seçtiğiniz ortamdaki animasyon yazılımını takabilir ve oynayabilirsiniz. Pencil2D ile ilgili daha fazla öğretici arıyorsanız, sadece web sitelerine göz atabilirsiniz. Ayrıca web sitemizde bulabileceğiniz diğer animasyon yazılım programlarını kullanmak için birçok öğretici ve rehber oluşturduk, bu yüzden daha fazla netlik için kontrol edin.

## Keşfetmek
İlgili aşağıdaki bağlantıları bulabilirsiniz:
  * [PENEM2D | Çapraz Platform ve Açık Kaynak Ücretsiz 2D Animasyon Yazılımı][7]
  * [Digikam kullanarak ücretsiz görüntü düzenlemeye başlamak için yeni başlayan kılavuz][8]
  * [En İyi Açık Kaynak Animasyon Yazılımı][9]



[1]: https://blog.containerize.com/
[2]: #what-is-pencil2d
[3]: #install-pencil2d
[4]: #application-interface
[5]: #create-animations
[6]: #conclusion
[7]: https://products.containerize.com/animation-software/pencil2d/
[8]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
[9]: https://products.containerize.com/animation-software/
