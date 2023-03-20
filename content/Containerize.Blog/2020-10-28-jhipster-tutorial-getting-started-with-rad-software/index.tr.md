---
title: "Jhipster Eğitimi | Rad Software'e başlamak" 
seoTitle: "Jhipster Eğitimi | Rad Software'e başlamak" 
description: "Yeni başlayanların başlaması için adım adım bir jipster öğretici. Açık kaynaklı Jhipster Rad yazılımı ile ilk uygulamayı ayarlamak için bu makaleyi izleyin." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Bir kaynak kodu üreticisine dalalım. İyi belgelenmiş REST API ile web tabanlı duyarlı uygulamalar oluşturmak için hazır özellikler sunar." 
url: /tr/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## Bir kaynak kodu üreticisine dalalım. İyi belgelenmiş REST API ile web tabanlı duyarlı uygulamalar oluşturmak için hazır özellikler sunar.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="jhipster öğreticisi">}}


## Genel Bakış:
Son zamanlarda [RAD yazılımı][2] 'nin şu anki zamanlarda önemi hakkında bir [blog yazısı][1] yayınladık. Teknoloji çok yüksek bir hızda gelişiyor. İş gereksinimleri ve ihtiyaçları her geçen gün değişiyor. Daha kısa sürede çözümler geliştirmek için bir yarış var. Öte yandan, her işletme ürünü mümkün olan en kısa sürede başlatarak piyasayı yakalamak istiyor. Bu nedenle, açık kaynaklı topluluk ** Çevik Yazılım Geliştirme ** temelli birçok yazılım geliştirmiştir. Bu ücretsiz hızlı uygulama geliştirme yazılımı, hızlı prototipleme geliştirme yeteneklerine sahip kullanıcıları kolaylaştırır. Ürününüzün ilk sürümünü oluşturmanıza ve başlatmanıza olanak tanır ve bu nedenle kullanıcı geri bildirimlerinin girişi ile daha fazla sürüm geliştirebilirsiniz. Ayrıca, bu yazılım projenin herhangi bir aşamasında herhangi bir değişikliği emmek üzere tasarlanmıştır.
Bu arada, yazılım geliştirme ekipleri geliştirme süreçlerini hızlandırır ve daha önceki teslimatlardan emin olun. Aslında, uygun maliyetli, zaman kazandırıcıdır ve geliştiricilere ve kullanıcılara memnuniyet verir. Hızlı uygulama geliştirme, planlı ve katı son tarihlere sahip olmanız gerekmeyecek kadar esnektir. Son tüketicilerinizin ihtiyaç duyduğu şeyi inşa ediyorsunuz. Bu JHIPSTER öğreticisinde, [JHIPSTER][3] 'in nasıl kurulduğuna bakacağız ve aşağıdaki noktaları kaplayarak ilk uygulamamızı nasıl oluşturacağız:
  * [Jipster nedir ve nasıl kurulur?][4]
  * [Temel bir uygulama nasıl oluşturulur ve çalıştırılır?][5]
  * [Oluşturulan uygulamanın yönetici kontrol panelini keşfedin][6]
  * [Sonuç][7]

## Jhipster nedir ve nasıl yüklenir? {#düzenlemek}
[Jhipster][3], kurumsal web uygulamaları oluşturmak için kullanılan açık kaynaklı bir RAD yazılımıdır. Bu açık kaynak uygulama oluşturucu, sunucu tarafında Java tabanlı bir Spring Boot çerçevesi ve Angular, Vue.js ve React.js gibi popüler ön uç teknolojileri sunar. Bu kaynak kodu oluşturucu, OAuth.20, JWTS ve HTTP oturum kimlik doğrulaması gibi birden fazla kullanıcı kimlik doğrulama mekanizmasına sahip sağlam mikro hizmet mimarisi içerir. Ayrıca, kullanıcıların tüm özellikleri keşfedebilecekleri çevrimiçi bir sürüm sağlar. Bu ** Açık Kaynak Prototipleme Aracı ** JavaScript'te küçük bir TypeScript girişi ile yazılmıştır. Bu nedenle, geliştirme ve dağıtım konusunda kapsamlı belgeler mevcuttur. Geliştiriciler kaynak kodunu [GitHub][8] repo'da bulabilirler. Gatling ve önsöz gibi popüler test çerçevelerini kullanarak testleri çalıştırmak için tam bir destek vardır. Ayrıca, sağlam, güvenli, çapraz platformdur ve üçüncü taraf entegrasyonları destekler.
Bu ** Jhipster öğreticisinde, ** kurulumu ve kullanımıyla ilgili Jhipster'ı keşfedeceğiz. [Jhipster][3] ücretsizdir ve hızlı uygulama geliştirme modelinin üzerine inşa edilmiştir. Oldukça umut verici ve güçlü hızlı web uygulama geliştirme araçları ortaya çıkaran geliştirici dostu bir ekosistem sağlar.
Bakalım bu açık kaynak uygulama oluşturucuyu nasıl yükleyebiliriz. İlk olarak, aşağıdaki önkoşulları kuracağız.
  * [Java 11 JDK][9]
  * [Node.js 10.20.1+][10]
Kurulum tamamlandıktan sonra terminali açın ve aşağıdaki komutu çalıştırın.
`npm yükleme -g jenerator -jhipster`
Bu komut birkaç dakika sürebilir ve başarılı bir şekilde tamamlandıktan sonra Jhipster makinenize kurulacaktır.
Kurulumu kontrol etmek için aşağıdaki komutu kontrol edebilirsiniz.
`Jhipster -Versiyon '

{{< figure align=center src="images/install-1024x564.png" alt="Jhipster kurulumu">}}


## Temel bir uygulama nasıl oluşturulur ve çalıştırılır? {#koşmak}
Bu ** Jhipster Eğitimi ** bölümünde, bu açık kaynaklı RAD yazılımını kullanarak ilk uygulamamızı nasıl oluşturacağımızı öğreneceğiz.
Terminal penceresine geri dönün, aşağıdaki komutları çalıştırın:
`mkdir 1stappcd 1stapp/`
Dizin yaptıktan sonra aşağıda belirtilen komutu çalıştırın:
`Jhipster`
Bu komut işlemi başlatacaktır. Ön uç ve arka uç teknolojileri, veritabanı, test çerçevesi ve aşağıdaki resimde görebileceğiniz gibi daha fazlası gibi uygulama teknolojisi tercihleri ​​ile ilgili tüm soruları yanıtlayın.

{{< figure align=center src="images/qst-1024x474.png" alt="jhipster öğreticisi">}}

Tüm soruları cevapladıktan sonra, bu kaynak kod oluşturucu klasörünüze kod dosyaları oluşturur.
Şimdi, oluşturulan uygulamayı aşağıdaki komutla çalıştırın:
`./mvnw`
Not: Maven'i arka uç için yapı otomasyonu olarak seçtiyseniz bu komut çalışacaktır.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="jhipster öğreticisi">}}

Uygulamanıza http: // localhost: 8080/adresindeki tarayıcıya erişin.

## Oluşturulan uygulamanın yönetici kontrol panelini keşfedin {#dashboard}
Http: // localhost: 8080/tarayıcınızda vurduktan sonra aşağıdaki ekranı göreceksiniz.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="kod üreteci">}}

Bahsedilen kimlik bilgilerini yönetici olarak oturum açmak için kullanabilirsiniz. Jhipster iki varsayılan kullanıcı rolü sağlar. Başarılı bir oturum açtıktan sonra, görüntüde aşağıdaki hükümlere sahip olacaksınız.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="Açık Kaynak RAD yazılımı">}}

Jhipster, kullanıcılarınızı aşağıdaki resimde görebileceğiniz gibi yönetebileceğiniz eksiksiz kullanıcı yönetimi sağlar.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Jhipster Kullanıcı Yönetimi">}}

Sağlık seçeneği size disk alanınız ve veritabanınız hakkında bilgi verir.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="jhipster öğreticisi">}}

JHIPSSTER Yönetici Gösterge Tablosunda eksiksiz bir günlük sistemi mevcuttur.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="Açık Kaynak RAD yazılımı">}}

Bu açık kaynak uygulama oluşturucunun yönetici gösterge paneli, yerleşik ve özel işlevlerin dinlenme uç noktalarını da sağlar.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Açık Kaynak Jipster">}}


## Sonuç {#con}
Bu Jhipster öğreticisinin sonu. ** Anında Uygulama Geliştirme ** sağlayan birçok açık kaynaklı RAD platformu vardır. Sorunlara ve çözümlerine cevap vermek için her zaman canlı olan çok canlı bir topluluk var. RAD metodolojisi birçok faktör nedeniyle ün kazanıyor. İlk olarak, gereksinimleri tam olarak anlamaya gerek yoktur. İkincisi, son tüketici yazılım geliştirme yaşam döngüsü boyunca yer alır. Üçüncüsü, tüm paydaşlar gemide olduğu için risk faktörü çok daha azdır. Bununla birlikte, RAD yazılımı uyarlanabilir, geliştirici dostu ve değişikliklere esnektir. Kod jeneratörleri tekrarlayan komut dosyalarını yeniden yazmak için muazzam bir zaman kazandırdıkça çok zaman kazandırır. Bu ** [Jhipster][3] öğretici ** makale bazı önemli bilgileri vurguladı. Hafif ve birkaç basit kabuk komutuyla kurulması kolaydır.
Ciddi bir açık kaynaklı hızlı uygulama geliştirme platformu arıyorsanız, bu açık kaynak uygulama oluşturucuyu bugün yüklemekten çekinmeyin. Son olarak, [Containerize.com][11], daha ilginç öğreticilerle öğretici tabanını geliştirecek şekilde ayarlanmıştır. Düzenli güncellemeler için lütfen bu [Hızlı Uygulama Geliştirme][2] kategorisiyle bağlantıda kalın.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Küba platformu][12]
  * [Quickapp][13]
  * [Jhipster][3]
  * [LI3][14]
  * [Apache ISIS][15]
  * [2021'de Top 5 Ücretsiz Hızlı Uygulama Geliştirme Yazılımı][16]
  * [İşletme için Hızlı Uygulama Geliştirme Yazılımı | RAD][17]
  * [2021'de açık kaynaklı yazılım seçmeden önce gözden geçirilecek şeyler][18]

  
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
