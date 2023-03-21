---
title: "Bir HTML Form Jeneratör ile Başlamak | Formabuilder" 
seoTitle: "Bir HTML Form Jeneratör ile Başlamak | Formabuilder" 
description: "FormBuilder, sürükleme ve bırak kullanıcı arayüzüne sahip ücretsiz ve çok dilli bir HTML form jeneratörüdür. Localhost'ta nasıl kurulacağınızı öğrenmek için bu öğreticiyi izleyin." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "JavaScript, birden çok yapılandırma, yapılandırılabilir form şablonları ve özel kontrollerle birlikte açık kaynak form düzenleyicisi. Formbuilder'ı nasıl kuracağınızı öğrenelim." 
url: /tr/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## JavaScript, birden çok yapılandırma, yapılandırılabilir form şablonları ve özel denetimlerle güçlendirilmiş açık kaynak form düzenleyicisi. Formbuilder'ı nasıl kuracağınızı öğrenelim.

{{< figure align=center src="images/formbuilder.png" alt="HTML Form Jeneratörü">}}


## **Genel Bakış ** 
Kısa süre önce [2020 yılında Bootstrap Form Creator Form.io][1] ve [Top 5 Açık Kaynak Çevrimiçi Form İnşaatçıları][2] gibi konular hakkında bazı makaleler yayınladık [2]. İlk blog yazısı, bir Bootstrap Form Builder [Form.io][3] 'in ayarlama işlemini ve özelliklerini gösteren bir öğretici makaledir. İkinci makale, yaygın olarak kullanılan açık kaynaklı form üreticileri hakkında konuşuyor. Mevcut zaman noktasında, iki yönlü etkileşim, hizmet sağlayıcıları ve hizmet tüketicileri arasındaki en önemli şeydir. Kuruluşlar hizmetleri hakkında tutarlı geri bildirim alma eğilimindedir ve daha sonra gelecekteki iş stratejilerini formüle ederler. Ancak, formlar müşterilerden bilgi toplamak ve depolamaktır. İşletmeler, çeşitli devam eden operasyonlar hakkında veri toplamak için bir dizi form üretir ve bazıları tek sayfalardır ve bazıları çok sayfalık formlardır. Bazı işletmeler, çevrimiçi portallarına formlar yerleştirmiştir veya bazıları veri toplama için formlarını ortaya çıkarmak için e -postalar veya diğer tür ortamlar kullanırlar.
Bu nedenle, zengin form oluşturucu özelliklerine sahip birçok açık kaynak formu ve veri yönetimi yazılımı vardır. Bu makalede, aşağıdaki noktaları kaplayarak ücretsiz HTML form jeneratörü  **[formbuilder][4] **  keşfedeceğiz.
  * **[formbuilder nedir?][5] ** 
  *[ **Nasıl Kurulur? ** ][6]
  *[ **formbuilder kullanarak formlar nasıl oluşturulur? ** ][7]
  * **[Sonuç][8] ** 

## formbuilder nedir?   {#Ne}
[FormBuilder][4], kullanıcıların etkileşimli formlar oluşturmasını sağlayan açık kaynaklı bir form tasarımcısıdır. Güvenli, genişletilebilir ve kendi kendine barınma yetenekleri ile birlikte gelir. Bu HTML Form Jeneratörü çok dillidir ve birden fazla dil için destek sunar. Kullanıcıların gerekli form şablonunu formüle etmek için form öğelerini sürükleyip bırakabileceği kullanıcı dostu bir kullanıcı arayüzü vardır. Ayrıca, zengin kontroller ve yapılandırılabilir form şablonları sağlar. Ayrıca, kullanıcılar çok sayfalık formlar oluşturmak için kullanıcı arayüzünde birden fazla sekme oluşturabilir. Her şeyden önce, kullanıcılar eklentilerini geliştirerek bu ücretsiz form oluşturucuya eğilimli olabilir. Geliştirme ve dağıtım ile ilgili tüm belgelere sahiptir. Node.js ile yazılmıştır ve tüm kaynak kodu [GitHub][9] 'da mevcuttur.
İşte formun en önemli özellikleri.
  * i18n entegre
  * Çok sayfalık formlar
  * Genişletilebilir
  * Popüler JavaScript ön uç çerçeveleri için destek
  * Sürüklediğini ve bırak

## Nasıl kurulur?   {#kurmak}
Form Oluşturucu öğreticisinin bu bölümü, yerel makinede formbuilder'ın nasıl kurulacağını gösterecektir.
Daha ileri gitmeden önce, aşağıdaki ön koşulları yüklediğinizden emin olun.
  * Node.js> = 10.9.0
  * NPM
  * Git
Ön koşulları yükledikten sonra, bu uygulamanın kaynak kodunu klonlamak için aşağıdaki komutu çalıştırın:
```
git clone https://github.com/kevinchappell/formBuilder
```
Ardından, bağımlılıkları yüklemek için aşağıdaki komutları çalıştırın:
```
cd form-builder<br>npm install 
```
Bundan sonra, uygulamayı aşağıdaki komutu çalıştırarak başlatabilirsiniz:
```
npm start
```
Son olarak, yukarıdaki komut uygulamayı aşağıdaki adreste tarayıcıya açacaktır:
```
http://localhost:8080/
```

## formbuilder kullanarak formlar nasıl oluşturulur?   {#Nasıl}
Bu bölümde, bu HTML form jeneratörünün özelliklerini keşfedeceğiz ve nasıl formlar oluşturabileceğimizi öğreneceğiz.
Sunucuyu başlattığınızda aşağıdaki kullanıcı arayüzü görünür.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="HTML Form Jeneratörü">}}

İleride, sağ tarafta menü çubuğunu görebilirsiniz. Düğmeler, onay kutuları, metin alanları, veri alanları, başlık, paragraf ve daha fazlası gibi form öğelerini içerir. Ancak, bu elemanları sürükleyebilir ve ekranın orta alanına (damlalabilen) düşebilirsiniz. Sol üst köşede, uygulamanın bootstrap sürümünü etkinleştirme seçeneği vardır. Sol üst köşede, kullanıcıların mevcut herhangi bir dili seçebileceği bir açılır liste vardır.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="Form Editörü">}}

Ardından, herhangi bir form elemanını damlalı alana sürükleyebilir ve bırakabiliriz. Ayrıca, yukarıdaki görüntüde gösterildiği gibi herhangi bir öğenin yapılandırmalarını düzenleyebiliriz. Mevcut öğenin bir kopyasını oluşturma seçeneği vardır. Elemanların yerleşimini birbirimizle değiştirebiliriz.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="HTML Form Jeneratörü">}}

Form binasını bitirdikten sonra, üst ortaya yerleştirilen “oluşturma” düğmesine basarak formu oluşturabilirsiniz. Ayrıca, kullanıcıların formların arkasında oluşturulan HTML'yi alabilecekleri çeşitli form seçenekleri vardır. Yük kullanıcı formu, kullanıcı verilerini göster, kullanıcı formu oluşturma ve kullanıcı formunu temizleme gibi başka seçenekler de vardır. Bu özelliklerin yanı sıra, form için kayıtlı alan türlerini döndüren “getFieldTypes” gibi birçok form eylemi vardır. Benzer şekilde, gösteri verileri, xml al, verileri ayarlamak, değiştirme düzenlemesi ve biraz daha fazlası gibi birçok eylem vardır. Ancak, kendinizi kontrol edebileceğiniz birçok şey var. Açık kaynak olduğu için, gereksinimlerinize göre değiştirebilirsiniz.

## Sonuç   {#Conclusion}
Bu blog yazısının sonu. Açık kaynaklı bir HTML form jeneratörü dağıtmak istiyorsanız, bu öğreticinin size gerçekten yardımcı olacağını umuyoruz. Bu makale FormBuilder'ın birçok yönünü kapsamıştır, böylece iş ihtiyaçlarınızı göz önünde bulundurarak kolayca bir seçim yapabilirsiniz. Bu ücretsiz açık kaynak form üreticileri uygun maliyetli ve zaman kazandırıcıdır. Bu ücretsiz araçlar sadece form oluşturma özellikleri sağlamakla kalmaz, aynı zamanda formlar ve veri yönetimi de sağlar. Formları üçüncü taraf web uygulamalarıyla yapılandırabilirsiniz. Buna ek olarak, farklı iş uygulamaları için farklı formlar oluşturma zahmetini ortadan kaldırır, ancak işletme sahipleri bu açık kaynak form üreticilerini kullanarak her türlü form yapabilir. Ayrıca, geliştiricilerin gereksinimlere göre değiştirebileceği bu form editörleri için eklentiler mevcuttur. Bu nedenle, iyi bir ücretsiz HTML form jeneratörü kullanarak bu tür tekrarlayan görevleri otomatikleştirmenin zamanı geldi.
Son olarak, [Containerize.com][10] diğer açık kaynaklı ürünler üzerine makaleler yazıyor. Bu nedenle, düzenli haberler ve güncellemeler için lütfen [Forms][11] kategorisiyle iletişime geçin.

## Keşfetmek
  * **[Form.io][3] ** 
  * **[Orbeon][12] ** 
  * **[ohmyform][13] ** 
  * **[Webiny][14] ** 
  * **[FormTools][15] ** 
  * **[formbuilder][4] ** 
  * **[Alpaca formları][16] ** 
  *[ **Bootstrap Form Creator Form.io Localhost'ta Nasıl Kurulur ** ][1]
  *[ **Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin ** ][17]
  *[ **2020 yılında Top 5 Açık Kaynak Çevrimiçi Form İnşaatçıları ** ][2]

  
[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
