---
title: "Localhost'ta bootstrap form creator form.io nasıl kurulur" 
seoTitle: "Localhost'ta bootstrap form creator form.io nasıl kurulur" 
description: "Bu makaleyi gözden geçirin ve LocalHost'ta Formio'nun nasıl kurulacağını öğrenin. Bu bootstrap form yaratıcısı ücretsiz, genişletilebilir ve üçüncü taraf entegrasyonlar sunar." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "HTML Form Oluşturucu bir sürükleme ve bırak kullanarak göreve özgü ve özelleştirilebilir formlar oluşturun. Formio kendi kendine barındırılır, API odaklı, formlar ve veri yönetimi sağlar." 
url: /tr/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## HTML Form Oluşturucu sürükle ve bırak kullanarak göreve özgü ve özelleştirilebilir formlar oluşturun. Formio kendi kendine barındırılır, API odaklı, formlar ve veri yönetimi sağlar.

{{< figure align=center src="images/formio-1.png" alt="Bootstrap form yaratıcısı">}}


##  **Genel Bakış ** 
Hızlı büyüyen iş ihtiyaçlarında, doğrudan kamuoyu ve katılımına ait birçok operasyon vardır. Bu katılım fiziksel ya da sanal olabilir. Bazen hizmet sağlamakla ilgilidir ve bazen veri veya geri bildirim toplamakla ilgilidir. Öte yandan, kurumsal kuruluşlar müşterinin ürün ve hizmetleri hakkındaki verilerini toplama eğilimindedir. Bu nedenle, veri miktarı ilgili kitleye ulaşmaya bağlıdır. Daha sonra, veri yönetimi başka bir kritik görevdir ve muazzam bir dikkat gerektirir.
Ancak, kurumsal sektörler veri toplama ile ilgili ihtiyaçları karşılamak için çevrimiçi formları kullanırlar. İletişim formu, şikayet formu, müşteri geri bildirimi formu, giriş formu ve daha fazlası gibi birçok form içerebilecek birçok web sitesi vardır. Şimdi, bu formları ve gönderim verilerini oluşturmak, yönetmek için bir güçlük haline geliyor. İşte [form.io][1] geliyor. Form.io, form oluşturma ve veri yönetimi özellikleri sağlayan açık kaynaklı bootstrap form oluşturucudur. Yakın geçmişte, [2020 yılında ilk 5 açık kaynaklı çevrimiçi form oluşturucuları] kapsayan bir makale yayınladık [2]. Bu blog yazısında, bu Bootstrap form yaratıcısını, aşağıdaki noktaları kaplayarak Localhost'ta kurma süreci ile birlikte keşfedeceğiz.
  *** [form.io?
  * **[Localhost'ta Form.io Nasıl Kurulur?][4] ** 
  * **[Form.io nasıl çalışır?][5] ** 
  * **[Sonuç][6] ** 

## Form.io nedir?   {#Ne}
Form.io, ücretsiz bir açık kaynak form oluşturucudur. Kendi kendine barındırılan, çok dilli ve çok kiracı bir yazılımdır. Bu  **HTML Form Creator ** , kullanıcılar ve formlar için rol tabanlı izinler sunar. Form.io, OAuth kimlik doğrulaması sağlar ve kullanıcıların Google ve Facebook gibi popüler kimlik sağlayıcılarını kullanarak oturum açmasına izin verir. Ayrıca, bu HTML Form Builder sunucusuz mimariye dayanır ve kullanıcılar sadece tek bir kod satırı yerleştirerek formlar üretebilir ve diğer uygulamalara yerleştirebilir. Kullanıcı arayüzü söz konusu olduğunda, sürükleme ve damla özelliklerine sahip mantıksal bir kullanıcı arayüzü sunar. Bir tarafta kullanıcıların gerekli formu oluşturmak için sürükleyip bırakabileceği çeşitli HTML öğeleri vardır. Kullanıcılar gelişmiş işlevsellik için özel JavaScript enjekte edebilir. Ayrıca, kullanıcılar CSS kullanarak formun görünümünü ve hissini değiştirebilir. Formların sunulmasını ve erişimini kontrol etmek için hükümler vardır. Ancak, bu ücretsiz HTML form üreticisi JavaScript'te yazılmıştır ve tüm kaynak kodu [GitHub][7] 'de mevcuttur.
Form.io, geniş alan özellikleri sağlar. Temel özellikler aşağıda listelenmiştir.
  * E -posta Formu Gönderimi
  * Veri yönetimi
  * Oauth sağlayıcıları
  * Gömülebilir formlar
  * Düzen dostu

## localhost'ta form.io nasıl kurulur?   {#localhost}
 **Form Oluşturucu Eğitimi **  'nin bu bölümünde, LocalHost'ta form.io'nun nasıl kurulacağını göreceğiz. Dağıtım ve geliştirme ile ilgili kapsamlı belgeler sağladığı için kurulumu kolaydır.
Daha ileri gitmeden önce, aşağıdaki ön koşulları yüklediğinizden emin olun.
  * Git
  * Nodejs
  * MongoDB
Yukarıdaki ön koşullar yüklendikten sonra, terminali aşağıdaki komutları çalıştırın:
```
mkdir formio<br>cd formio
```
Şimdi, bu uygulamanın kaynak kodunu klonlamak için aşağıdaki komutu çalıştırın:
```
git clone https://github.com/formio/formio.git
```
Başarılı bir klon üzerine, bağımlılıkları yüklemek için aşağıdaki komutları çalıştırın:
```
cd formio <br>npm install
```
Bundan sonra, uygulamayı aşağıdaki komutla çalıştırın:
```
npm start 
```
Bu komut, bazı kullanıcı istemleri ile aşağıdaki çıktıyı gösterecektir:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Form Oluşturucu öğreticisi">}}

Uygulamaya aşağıdaki adresten tarayıcıda erişebilirsiniz.
```
http://localhost:3001 
```
Giriş sayfasını açacaktır. Kurulum işlemi sırasında girdiğiniz kimlik bilgileriyle giriş yapabilirsiniz.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Bootstrap form yaratıcısı">}}


## Form.io nasıl çalışır?   {#iş}
Bu segment [form.io][1] 'in çalışma mekanizmasını açıklamaktadır. Bu form tasarımcısının tüm ekosistemi bileşenlere ve geliştirici dostlarına dayanmaktadır. Genişletilebilir ve üçüncü taraf uygulamalar için dinlendirici bir arayüz sağlar. Öyleyse, bu  **Form Oluşturucu **  'da nasıl formlar oluşturulacağını görelim.
Girişten sonra bir sonraki sayfaya ineceksiniz.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="HTML Form Oluşturucuyu Sürükle ve Bırakın">}}

Şimdi, “Yeni Form” düğmesine tıklayın ve ilk formu oluşturun. Aşağıdaki sayfa gösterilecektir. Sol tarafta formlar için HTML öğesini içeren bir panel olduğunu görebilirsiniz. “Temel bileşenler”, “özel bileşenler” ve daha fazlası gibi dört bölüm içerir.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="html form yaratıcısı">}}

Form adını diğer özelliklerle birlikte ayarlayabilirsiniz. Şimdi, sol taraftan bir form öğesi seçip ortaya bırakırsanız, aşağıdaki iletişim kutusunu göreceksiniz.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Bootstrap form yaratıcısı">}}

Form temasını, doğrulama ve diğer değişiklikleri değiştirmenizi sağladığını görebilirsiniz. Formunuzu oluşturduktan sonra, “Oluştur” düğmesine basın ve oluşturulan formun üzerine inersiniz.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="HTML Form Oluşturucuyu Sürükle ve Bırakın">}}

Oluşturulan form, formu düzenleyebileceğiniz ve gönderilen verileri görüntüleyebileceğiniz çeşitli seçeneklerle birlikte gelir. “Form Eylemleri” sekmesinde, e -posta, Webhook ve daha fazlası gibi ön veya sonrası form gönderme kancalarını ayarlayabilirsiniz. Her şeyden önce, oluşturulan her form bir API ile birlikte gelir ve kullanıcılar form kimliğini geçerek erişebilir.

## Sonuç   {#Conclusion}
Bu, bu Form Oluşturucu öğreticisinin sonu. Umarım bu Bootstrap Form Creator'ı özellikleri, dağıtım ve kullanımıyla ilgili olarak öğrendiğinizdir. Buna ek olarak, çok çeşitli özellikler sağlayan birçok açık kaynak form oluşturucu vardır. Ancak, işletmenizin ihtiyaçlarını karşılayan en iyi ürünü seçmek son derece önemlidir. Bu nedenle, bu blog yazısında, Form.io'nun işlevsellik, düzen ve stil ile ilgili özelleştirmeler sağladığını gözlemledik. Canlı web sitelerinizde barındırabileceğiniz çok amaçlı formlar üretmenizi sağlar. Aslında, verileri kendi veritabanınızda veya başka bir depolama seçeneğinde iyi organize edilmiş bir şekilde toplayabilirsiniz.
Son olarak, [ **Containerize.com ** ][8] daha fazla açık kaynak konuları ve ürünleri hakkında makale yazma sürecindedir. Bu nedenle, düzenli güncellemeler için lütfen bu [Form][9] kategorisiyle iletişime geçin.

## Keşfetmek
  * **[Form.io][1] ** 
  * **[Orbeon][10] ** 
  * **[ohmyform][11] ** 
  * **[Webiny][12] ** 
  * **[FormTools][13] ** 
  * **[formbuilder][14] ** 
  * **[Alpaca formları][15] ** 
  *[ **Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin ** ][16]
  *[ **2020 yılında Top 5 Açık Kaynak Çevrimiçi Form İnşaatçıları ** ][2]

  
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
