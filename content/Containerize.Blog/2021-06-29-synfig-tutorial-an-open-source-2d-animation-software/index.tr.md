---
title: "Synfig Öğreticisi | Açık kaynaklı 2D animasyon yazılımı" 
seoTitle: "Synfig Öğreticisi | Açık kaynaklı 2D animasyon yazılımı" 
description: "Synfig ile 2D animasyonlar oluşturmak ücretsiz, sorunsuz ve hızlı bir işlemdir. Bu kılavuzda, başlamak için ihtiyacınız olan tüm bilgileri bulacaksınız." 
date: Tue, 29 Jun 2021 08:08:53 +0000
author: yasir saeed
summary: "Synfig ile 2D animasyonlar oluşturmak ücretsiz, sorunsuz ve hızlı bir işlemdir. Bu kılavuzda, başlamak için ihtiyacınız olan tüm bilgileri bulacaksınız." 
url: /tr/synfig-tutorial-an-open-source-2d-animation-software/
categories: ['Animation Software']
---

## Synfig ile 2D animasyonlar oluşturmak ücretsiz, sorunsuz ve hızlı bir işlemdir. Bu kılavuzda, başlamak için ihtiyacınız olan tüm bilgileri bulacaksınız.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

  * [Synfig nedir?][1]
  * [Synfig nasıl kurulur?][2]
  * [Uygulama Arabirimine Genel Bakış][3]
  * [Synfig ile temel bir animasyon nasıl oluşturulur?][4]
  * [Sonuç][5]

## Synfig nedir? {#Ne}
Synfig, solo sanatçılar veya küçük ekipler için animasyon iş akışlarını ve projelerini yönetmeleri için tasarlanmış en iyi 2D animasyon yazılımlarından biridir. Açık kaynaklı bir animasyon yazılımı olarak, Synfig, yalnızca bir animasyonun işlenmesi için gereken süreyi kesmeyen, aynı zamanda animatörlere çizim çerçevesi akıllıca ekleme olanağı da veren “bir ara” animasyon sistemi kullanır.
Synfig kullanma söz konusu olduğunda, solo veya küçük bir ekipte çalışan herhangi bir sanatçının gösterme boru hattına harika bir katkı olabilen hafif, hızlı işleme animasyon yazılımıdır. Ayrıca, Synfig topluluğu sadece yazılım uygulamasını kullanma konusunda değil, aynı zamanda bir barikatla karşılaşmanız durumunda çözüm bulmanıza yardımcı olacak kaynakları bulmak için aktif bir yerdir.
Synfig'i Windows, Mac OS ve Linux dahil olmak üzere birden fazla işletim sisteminde kolayca kullanabilirsiniz. Lütfen Synfig kullanırken sisteminizin şu olması gerektiğini unutmayın:
  * En az 2GB RAM veya daha fazla
  * 2 GHz veya daha fazla çift çekirdekli bir CPU
Synfig, Morevna: Demo Project, Morevna'nın Son Tarihi, Cenan Los'un Polar Dedektif Prologu ve diğer birçok ticari proje gibi birçok popüler projeyi canlandırmak için kullanılmıştır. Bu, hem ticari hem de kişisel projeler için de kullanılabileceği gibi Synyfig'in kapsamını gösteriyor. İster animasyon dünyasında yeni olun, ister kariyerinizde gelişmiş olun, Synfig, beceri setinize güzel bir baskı yapabilir ve inanılmaz 2D animasyonlar oluşturma konusunda sıkı bir kavrayış geliştirmenize yardımcı olabilir. Diğer animasyon yazılım programları hakkında daha fazla bilgi edinmek istiyorsanız, sizin için yaptığımız diğer kılavuzlara ve öğreticilere göz atabilirsiniz.

## Synfig nasıl kurulur? {#nasıl kurulur}
Bir Linux cihazına Synfig 2D animasyon yazılımı yüklemek için, yükleyici dosyasını SystemFig’in ana ana sayfasından doğrudan indirebilirsiniz. 32 bit veya 64 bit resim dosyasını indirme seçeneğini alacaksınız, sisteminize göre seçin.
İndirildikten sonra komut satırınızı açın ve aşağıdaki komutları yazın:
```
sudo apt-get update
```
```
sudo apt-get install synfigstudio
```
Artık Synfig Studio'ya kolayca erişebilmelisiniz.

## Uygulama Arabirimi Genel Bakış {#Application Interface}
Yukarıda bahsettiğimiz gibi, Synfig Studio, kullanıcıların kesintisiz, hızlı işleme, Tweenless 2D animasyonlar oluşturmasına olanak tanıyan açık kaynaklı bir animasyon yazılımıdır. Araçları ve özellikleri anlamak için, ilk kullanmaya başladığınızda Synfig Studio'ya hızlı bir genel bakış.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-1-1024x649.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

  *** Tuval: ** Tuval, animasyonunuzu çizebileceğiniz ve efektler, katmanlar, çerçeveler ve düzenlemeler uygulayabileceğiniz gri damalı desendir. Burada sağdaki düğmelerle çevrili tuvalleri ** kilitleme/kilitleme ** anahtar çerçevelerine geçme, ** animasyon moduna geçecek, ** sol üst köşede ** caret ** adlı biraz siyah üçgen ve Sıfır olmayan bir animasyon tanımlamanız durumunda zaman çizelgesi.
  *** Araçlar: ** Araç kutusu, nesneleri manipüle etmek için ihtiyacınız olan tüm araçları bulacağınız Synfig'in ana bileşenlerinden biridir. Fırça boyutları, renkler, gradyanlar uygulamak, animasyonları silmek, metinler uygulamak ve daha fazlasını, animasyon oluşturmak ve sol üst taraftaki Araçlar Kutusu panelinde düzenlemek için ihtiyacınız olan her şeyi bulacaksınız.
  *** Zaman İz Paneli: ** Bir animasyon oluştururken, zamanlama anahtardır ve zaman izi paneli ile anahtar çerçeveleri ve her yol noktasını ayarlayabilirsiniz (zaman izi panelinde görünen grafik semboller ayarlamayı belirtmek için dahil olan herhangi bir parametrenin).
  *** Parametre Paneli: ** Burada, animasyonunuzda renk, genişlik, opaklık ve daha fazlası gibi aktif öğeler için tüm ayrıntılı seçenekleri ve ayarları bulacaksınız. Synfig'in temel bileşenlerinden biridir.
Şimdi Synfig Studios ile bir animasyon oluşturmaya geçelim.

## Synfig ile temel bir animasyon nasıl oluşturulur? {#create-animation}
Gönderinin bu bölümünde size Synfig Studio ile temel bir animasyonun nasıl oluşturulacağına dair adım adım bir eğitim vereceğiz. Hadi başlayalım.
{{_LINE_40_}}
{{_LINE_41_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-02.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

{{_LINE_43_}}
{{_LINE_44_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-03.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

{{_LINE_46_}}
{{_LINE_47_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-04.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

{{_LINE_49_}}
{{_LINE_50_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-05.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

{{_LINE_52_}}
{{_LINE_53_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-06.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

{{_LINE_55_}}
{{_LINE_56_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-07.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

{{_LINE_58_}}
{{_LINE_59_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-08.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

{{_LINE_61_}}
{{_LINE_62_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-09.png" alt="Synfig Tutorial Açık kaynaklı 2D animasyon yazılımı">}}

{{_LINE_64_}}
{{_LINE_65_}}
Ve orada Synfig Studio'da bir animasyon oluşturma konusunda temel bir öğreticiniz var.

## Sonuç {#Conclusion}
Çalışmanız için zaten animasyon yazılımı kullanıyorsanız Synfig 2D animasyon yazılımı kullanmak oldukça basit ve kolaydır. Animasyon endüstrisinde yeni olsanız bile, arayüzü anlamak kolay bir iştir. Bu öğreticiyi yararlı bulduğunuzu ve bir portföy oluşturmak için farklı akademik, ticari veya kişisel projeler için 2D animasyonlar oluşturabileceğinizi umuyoruz.
_ En sevdiğiniz açık kaynak animasyon yazılımı nedir? Animasyon yazılımı hakkında herhangi bir sorunuz var mı? Lütfen_ [İletişim kurun][6].

## Keşfetmek
İlgili aşağıdaki bağlantıları bulabilirsiniz:
  * [En İyi Açık Kaynak Animasyon Yazılımı][7]
  * [Synfig | Ücretsiz ve açık kaynaklı vektör tabanlı 2D animasyon süiti][8]
  * [Pencil2D animasyon yazılımı ile animasyonlar nasıl oluşturulur][9]
  * [Digikam kullanarak ücretsiz görüntü düzenlemeye başlamak için yeni başlayan kılavuz][10]

  
[1]: #what
[2]: #how-to-install
[3]: #application-interfae
[4]: #create-animation
[5]: #conclusion
[6]: mailto:yasir.saeed@aspose.com
[7]: https://products.containerize.com/animation-software/
[8]: https://products.containerize.com/animation-software/synfig/
[9]: https://blog.containerize.com/animation-software/how-to-create-animations-with-pencil2d-animation-software/
[10]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
