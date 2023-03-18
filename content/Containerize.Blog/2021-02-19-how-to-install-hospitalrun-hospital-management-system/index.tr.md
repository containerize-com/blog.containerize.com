---
title: "Hastane Nasıl Kurulur | Hastane yönetim sistemi" 
seoTitle: "Hastane Nasıl Kurulur | Hastane yönetim sistemi" 
description: "Bu makale HospitalRun'u Localhost'a kurmanıza yardımcı olur. Zengin, açık kaynaklı, ücretsiz hastane yönetim sistemini kullanarak tıbbi işlemleri otomatikleştirin." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Klinisyenleri ve hastaları kolaylaştırmak için kendi kendine barındırılan sağlık hizmeti çözümü. Basit adımları izleyerek Localhost'ta ücretsiz HospitalRun'u nasıl dağıtacağınızı öğrenelim." 
url: /tr/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## Klinisyenleri ve hastaları kolaylaştırmak için kendi kendine barındırılan sağlık hizmeti çözümü. Basit adımları izleyerek Localhost'ta ücretsiz HospitalRun'u nasıl dağıtacağınızı öğrenelim.

{{< figure align=center src="images/hospitalrun.png" alt="Hastane yönetim sistemi">}}


## Genel Bakış
Kısa bir süre önce açık kaynak hastane yönetim sisteminin sağlık endüstrisi üzerindeki etkisini tanımlayan [çevrimiçi sağlık yazılımı nasıl sağlık endüstrisi güçlendiriyor] [1] hakkında bir blog yazısı yayınladık. Küresel sağlık yazılımı endüstrisi zamanın geçişine değer kazanıyor. Aslında, teknoloji yaşamın her alanını dönüştürdü. Hasta ve personelin sayısı o kadar yükseldi ki, bu büyük verileri yönetmek için bir güçlük haline geldi. Öte yandan, her gün gerçekleşen birçok zaman alıcı görev var ve sağlık kuruluşları bu görevleri tekrar tekrar gerçekleştiriyor. Bu nedenle, açık kaynaklı kaynak topluluğu, sağlık ihtiyaçlarını karşılamak için birçok yararlı modülle birlikte gelen açık kaynaklı tıbbi yazılım geliştirmiştir.
Açık kaynaklı tıbbi yazılım, tıbbi geçmişleriyle ilgili hasta kayıtlarını ve hastane yönetimi hükümlerini yönetmek için geliştirilmiştir. Buna ek olarak, açık kaynaklı sağlık yazılımı, ileri düzeyde hizmet sağlamak için yapay zekadan yararlanıyor. Hastalık tedavilerinin çoğu şimdi sadece problemleri teşhis etmekle kalmayıp aynı zamanda tedavide yardım sağlayan yazılım tarafından ele alınmaktadır. Ancak, hastaneler için ortaya çıkan birçok yazılım var. Bu blog yazısında aşağıdaki noktaları ele alacağız.
  *[** Hastane Nedir? **] [2]
  *[** Hospitalrun'un özellikleri nelerdir **] [3]
  *[** Hastanenin kurulum adımları? **] [4]
  *[** Sonuç **] [5]

## Hospitalrun nedir? {#intro}
Hospitalrun ücretsiz açık kaynaklı bir hastane bilgi yönetim sistemidir. Bu ücretsiz sağlık hizmeti çözümü, internet bağlantısı olmasa bile kullanıcılar bu ücretsiz yazılımı tam olarak kullanabileceğinden çevre dostudur. Kullanıcı yönetimi, hasta kayıtları, randevular, faturalandırma sistemi, hasta deşarj sistemi ve daha fazlası gibi birçok özellik sağlar. Bu açık kaynaklı eHealth sisteminin kullanıcı arayüzü, kullanıcıların farklı öğelerden kolayca gidebilecekleri mantıklıdır. Buna ek olarak, kurulumu kolaydır ve geliştiricilerin bir Docker görüntüsü kullanarak dağıtabileceği bir Docker görüntüsü sunar.
Bu ** Hastane Yönetim Sistemi **, hastanın tıbbi kayıtlarını merkezileştirmek için laboratuvarları entegre etmek için hüküm sunar. Ayrıca, kullanıcıların hasta ziyaretleri, ilaç ve değerlendirmelerin kayıtlarını korumasını sağlar. Bu eHealth kayıt sistemi güvenli, esnektir ve üçüncü taraf uygulamalarla entegrasyonlar sunar. Hospitalrun'a destek sağlayan çok canlı bir topluluk var. Ayrıca, tam bir hasta deşarj sistemi vardır. Bu açık kaynaklı tıbbi yazılım tamamen JavaScript'te yazılmıştır. Ayrıca, geliştirme ve dağıtım konusunda kapsamlı belgeler mevcuttur. Aslında, bu açık kaynaklı tıbbi yazılım, destek departmanı, klinik departmanı ve idari departman gibi farklı departmanlar için farklı gösterge tabloları sağlar. Tüm bu roller farklı izin ve erişim seviyeleri ile birlikte gelir.

## Hospitalrun'un özellikleri nelerdir? {#özellikler}
Bu bölümde, bu eHealth sisteminin aşağıdaki temel özelliklerinden bazılarını inceleyeceğiz.
  *** Kendi kendine barındırılan **: Hospitalrun kendi kendine barındırma yetenekleriyle birlikte gelir ve sunuculara dağıtmak için daha az çaba gerektirir.
  *** Randevu Zamanlaması **: Bu sağlık sistemi, kullanıcıların randevuları planlamasına olanak tanır. Gösterge tablosunda randevular için eksiksiz bir modül vardır. Ayrıca, kullanıcılar randevuları filtreler yardımıyla arayabilir.
  *** Hasta Taburcusu Sistemi **: Bu hastane yönetim sistemi, taburcu edilen hastaların kaydını korur.
  *** Uyuşturucu Yönetimi **: Bu eShalth kayıt sistemi, kullanıcıların belirli bir hastanın ilaçlarının tam verilerini kaydetmelerini sağlar.
  *** Hasta Kayıtları Yönetimi **: Hastalar kayıt yönetimi için eksiksiz bir modül var. Kullanıcılar yeni hastaların ayrıntılarını kaydedebilir, hastaları tıp, raporlar ve ziyaretler gibi tam tıbbi geçmişlerine karşı kabul edebilirler.
  *** Özelleştirilmiş Faturalandırma Sistemi **: Bu açık kaynaklı sağlık yazılımında zengin bir faturalandırma sistemi mevcuttur. Kullanıcıların laboratuvar fiyatları, koğuş ücretleri, görüntüleme fiyatları vb. Gibi tüm ayrıntılarla faturalar oluşturmasını ve yönetmesini sağlar.
  *** Elektronik Tıbbi Kayıtlar **: Bu açık kaynaklı tıbbi yazılım, tıbbi ve idari kayıtları korumak için gerekli tüm modülleri sağlar.
  *** Esnek **: Hastane, geliştiricilerin gerekli işlevleri karşılamak için işlevselliğini genişletebilecek kadar esnek ve genişletilebilir.

## Hastanenin kurulum adımları? {#steps}
Blog yazısının bu bölümü Hospitalrun'un kurulum adımlarını açıklamaktadır.
Başlamadan önce, önce aşağıdaki ön koşulları yükleyin:
  * [Docker] [6]
  * [Docker-compose] [7]
Önkoşullar yüklendikten sonra, bu [bağlantı] [8] 'den kaynak kodunu indirin.
Bundan sonra, terminali açın ve aşağıdaki komutları çalıştırın:
CD jenerik
CD Sunucusu
Şimdi, \ `conp/initcouch.sh \ 'satırındaki parolayı ve _config-demo.js_ 7. satırındaki şifreyi değiştirin.
Ardından, uygulamayı oluşturmak ve çalıştırmak için aşağıdaki komutu çalıştırın:
_DOCKER-Compose Build && Docker-Compose UP_
Bundan sonra, aşağıdaki resimde gösterildiği gibi Docker kabını döndürecektir:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="Hastane yönetim sistemi">}}

Son olarak, bu sağlık çözümüne http: // localhost/#/giriş adresinden tarayıcıda erişebilirsiniz. Aşağıdaki giriş ekranını gösterecektir.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="Hastane yönetim sistemi">}}


## Sonuç {#Conclusion}
Bu öğretici makalenin sonu. Bu hasta kayıt sistemi gerçekten ** sağlık hizmetlerini ** otomatikleştirmeye yardımcı olur **. Modern açık kaynaklı hastane yönetim sistemi, sağlık çalışanlarının daha iyi sağlık tesisleri için gerekli önlemleri almalarına yardımcı olan veri analitik araçlarıyla birlikte gelir. Hastaneniz/kliniğiniz için bir eHealth sistemi dağıtmak istiyorsanız, bu blog yazısı size gerçekten yardımcı olacaktır. Bu açık kaynaklı çözümler, laboratuvarlarla ve diğer kliniklerle entegre oldukları için uygun maliyetlidir ve ayrıca her işlemi bilgisayarlı olarak evrakları en aza indirir. Açık Kaynak Sağlık Hizmetleri Çözümü, kullanıcıların hastaların ilaçları, taburcuları, raporları ve faturalandırma yönetimi gibi tüm sağlık operasyonlarının görsellerine sahip olmalarını sağlar. Ayrıca, kaynak planlaması ve risk değerlendirmesi gibi diğer önemli görevlere odaklanabilirsiniz. Ancak, aşağıdaki “Keşfet” bölümünde belirtilen hastaneler için başka birçok işletme düzeyinde yazılım vardır.
Sonunda, **** [Containerize.com] [9] **** daha fazla açık kaynaklı ürünlere yazmayı amaçlamaktadır. Bu nedenle, en son güncellemeler için bu [Healthcare Technologies] [10] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Openemr] [11]
  * [OpenMRS] [12]
  * [Hospitalrun] [13]
  * [Açık Hastane] [14]
  * [Solizmli] [15]
  * [2021'de açık kaynaklı yazılım seçmeden önce gözden geçirilecek şeyler] [16]
  * [Tıbbi Kayıt Yöneticisi Hospitalrun'un Keşfi Özellikleri] [17]
  * [Top 5 Açık Kaynak Hasta Sağlığı Kayıt Yazılımı] [18]
  * [Tıbbi Sağlık Çözümü OpenEmr'ın Keşiflenmesi] [19]
  * [Localhost'ta EHealth System Hastanesi Nasıl Kurulur] [20]
  * [Çevrimiçi sağlık yazılımı sağlık sektörünü nasıl güçlendirir] [1]
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/tr/how-to-install-hospitalrun-hospital-management-system/
