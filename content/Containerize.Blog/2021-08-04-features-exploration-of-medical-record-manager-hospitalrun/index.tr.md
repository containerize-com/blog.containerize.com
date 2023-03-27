---
title: "Tıbbi Kayıt Yöneticisi Hastanesi Keşfi" 
seoTitle: "Tıbbi Kayıt Yöneticisi Hastanesi Keşfi" 
description: "Tıbbi kayıt yöneticisi Hospitalrun'a başlamak için bu kılavuzu izleyin. Açık kaynak, çok dilli ve önemli süreçlerin çoğunu otomatikleştiriyor." 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "Hastane yönetim sistemi, sağlık kuruluşlarının önemli bir parçasıdır. Hospitalrun veri kontrolü, erişim tabanlı roller ve gelir yönetimi sağlar." 
url: /tr/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## Hastane yönetim sistemi, sağlık kuruluşlarının önemli bir parçasıdır. Hospitalrun veri kontrolü, erişim tabanlı roller ve gelir yönetimi sağlar.

{{< figure align=center src="images/blog-banners-template-1.png" alt="Tıbbi Kayıt Yöneticisi">}}


## Genel Bakış
Açık kaynak [Healthcare Software][1] yakın geçmişte muazzam bir popülerlik kazanmıştır. İlk olarak, teknolojideki ilerlemeden kaynaklanmaktadır. İkincisi, Covid-19 tıp endüstrisini her şekilde etkiledi ve açık kaynak topluluk için yeni bir fırsat doğurdu. Tüm dünya çok önemli bir zamandan geçerken hastalara en kaliteli sağlık hizmetleri sunmak son derece önemlidir. Neyse ki, veri merkezileşmeleri, şeffaflık, güvenlik, entegrasyonlar ve diğer birçok güçlü özellik sağlayan birkaç açık kaynaklı sağlık kayıt yönetimi çözümleri mevcuttur. Bu ücretsiz sağlık hizmetleri, doktorlar, hastalar, klinikler ve diğer personel gibi iş akışlarının sorunsuz bir şekilde yönetimini sunar. Son zamanlarda, [Containerize.com][2] açık kaynaklı hastane bilgi yönetim sistemleri hakkında [Top 5 Açık Kaynak Hasta Sağlığı Kayıt Yazılımı][3], [Tıbbi Sağlık Çözümü OpenEMR'nin Keşfi Etkinlikleri][4], bazı makaleler yayınladı. ve [çevrimiçi sağlık yazılımı nasıl sağlık sektörünü güçlendirir][5].
Geçmişte, [Hospitalrun][6] 'nın Localhost'ta kurulum prosedürünü açıklayan bir makale yazdık. Bu blog yazısında, [HospitalRun][6] 'yı aşağıdaki noktaları ele alarak keşfedeceğiz.
*  **[Neden Hastane?][7]**  
*  **[Hastalar ve Zamanlama Modülleri][8]**  
*  **[laboratuvar entegrasyonu ve ilaçlar][9]**  
*  **[görüntüleme ve olaylar][10]**  
*  **[Sonuç][11]**  

## Neden Hastane? {#why}

Bu tıbbi kayıt yöneticisinin popülaritesinin arkasında birçok neden var. Hospitalrun tam bir elektronik sağlık kaydı ve hastane bilgi sistemidir. Hem çevrimdışı hem de çevrimiçi sürümleri destekler. Klinikleri entegre etmenizi sağlar ve veri senkronizasyonu sağlar. Dahası, çok dilli, çapraz platformdur ve kendi kendine barınma yetenekleri ile gelir. Bu hasta kayıt sistemi hasta kayıt yönetimi, randevu planlama, ilaçlar ve reçeteli yönetimi sunar. Ayrıca, eksiksiz teşhis detayları içeren özel raporlar oluşturma hükümleri de vardır. Ayrıca, sağlık personeli hasta deşarj modülünden yardım alabilir. Her şeyden önce, bu hastane yönetim sistemi kazara ve acil durumların yönetimini sunmaktadır. Güvenli, güvenilir ve kullanıcı dostudur. Bununla birlikte, bu tıbbi kayıt yönetim sistemi tamamen JavaScript'te yazılmıştır ve tüm kaynak kodu geliştirme ve dağıtım ile ilgili belgelerle [GitHub][12] 'de mevcuttur.

## Hastalar ve Zamanlama Modülleri {#modules}

Bu bölümde, bu hastane bilgi yönetim sisteminin gösterge tablosundan geçeceğiz. Giriş yaptıktan sonra, aşağıdaki resimde gösterildiği gibi Hospitalrun'un gösterge tablosuna ineceksiniz.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="Tıbbi Kayıt Yöneticisi">}}

Sağ üst tarafta iki seçenek vardır. İlk olarak, kullanıcıların İngilizce, İtalyanca, Türkçe ve daha fazlası gibi bir dil seçebileceği ayarlar. İkincisi, yeni bir hasta kaydı, yeni randevu, ilaç istemek, laboratuar, yeni görüntüleme isteği ve rapor olayı oluşturma seçeneği vardır.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="hastane yönetim sistemi">}}

Sol tarafta hastalar, planlama, ilaçlar, laboratuvarlar, görüntüler ve olaylar gibi birçok seçenek vardır. Hastalar modülünde, yeni hasta kayıtları ekleyebilir ve zaten eklenen hastaların listesini görebilirsiniz. Bu ücretsiz tıbbi kayıt yöneticisi, kullanıcıların isim, adres, iletişim, hasta türü ve diğer temel detaylar gibi tam hasta kayıtlarını kaydetmesini sağlar. Hasta listesinde, kullanıcıların listedeki hastaları arayabilecekleri bir arama çubuğu da vardır. Ayrıca, zamanlama modülünde, sağlık çalışanları bir randevu planlayabilirler. Bu modülün arayüzü aşağıdaki görüntüde gösterilmiştir.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="Hastane Bilgi Yönetim Sistemi">}}

Arayüz planlanan randevuları gösterir. Ayrıca, kullanıcılar günde, haftada ve ayda randevu sayısını görmek için filtreler uygulayabilir. Sağ üst köşede, sağlık görevlilerinin yeni bir randevu alabileceği bir seçenek var. Tıbbi yetkililer, başlangıç ​​tarihi, bitiş tarihi, akıl ve daha fazlası gibi randevu ayrıntılarını ekleyebilir.

## Laboratuvar entegrasyonu ve ilaçlar {#lab}

Bu bölüm, bu ücretsiz sağlık yazılımının iki önemli modülünün işlevselliklerini açıklamaktadır. İlaç modülü, kullanıcıların rutin, acil veya ASAP gibi ilaç önceliğini ayarlayabilecekleri ilaca karşı veri eklemelerini sağlar. Benzer şekilde, yetkililerin filtrelere göre arama yapabileceği bir ilaç istekleri listesi vardır.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="Tıbbi Kayıt Yönetim Sistemi">}}

Laboratuar modülünde, sağlık görevlileri hasta bilgileri, ziyaret ve yazarak laboratuvar isteyebilir. Bununla birlikte, sağlık çalışanları ek bir not ekleyebilir. Benzer şekilde, laboratuvar istekleri seçeneğinde kullanıcıların arama özellikleri gerçekleştirebileceği filtreler vardır.

## Görüntüleme ve olaylar {#imaging}

Görüntüleme, elektromanyetik bir alanla tarayarak bir şeyin görsel bir temsilini oluşturmakla ilgilidir. Hospitalrun görüntüleme kayıtlarının yönetimini sunar. Ayrıca, kullanıcıların yeni görüntüleme istekleri oluşturmasına olanak tanır ve diğer modüller birbiriyle birbirine bağlı olduğu için bu modül hastanın modülü ile bağlantılıdır. Benzer şekilde, kullanıcılar görüntüleme isteklerinin listesini görebilir. Daha sonra, olay modülünde yetkililer, ayrıntıları ekleyerek bir olayı bildirebilir. Bu nedenle, kullanıcılar önceden bildirilen olayların listesini görebilirler. Sonunda aşağıdaki resimde gösterildiği gibi olayların grafiksel bir temsili de mevcuttur.

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="Sağlık Kayıtları Yönetimi">}}


## Çözüm {#Çözüm}

Bu blog yazısının sonu. Aslında, sağlık kurumlarının çoğu manuel operasyonlara bağlıdır. Veri güvenliği ve bütünlüğü açısından savunmasız olabilir. Bununla birlikte, otomatik sistemler rutin sağlık operasyonlarının temel ve en kritik yönlerinden emin olur. Bu nedenle, iyi bir açık kaynaklı tıbbi kayıt yöneticisinin kurulumu, varlıklarınızı yetkisiz kaynaklardan korur ve rutin görevleri kolay ve güvenle gerçekleştirmenize yardımcı olur. Bu açık kaynaklı yazılım, doktorlar, hastalar, klinikler, laboratuvarlar gibi birden fazla varlığı senkronize eder ve iş akışını kolaylaştırır. Sonuç olarak, hastanenizin veya kliniğinizin en son zorluklarla darbesi için açık kaynaklı bir yazılım benimsemenin zamanı geldi. Zamanınızı ve çabalarınızı tasarruf edebilir ve önemli, kritik görevlere odaklanabilirsiniz.
Son olarak, [Containerize.com][2] diğer açık kaynaklı ürünler üzerine makaleler yazıyor. Bu nedenle, düzenli haberler ve güncellemeler için lütfen [Healthcare Technologies][1] kategorisiyle iletişime geçin.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Openemr][13]
  * [OpenMRS][14]
  * [Hospitalrun][15]
  * [Açık hastane][16]
  * [Solizmli][17]
  * [Top 5 Açık Kaynak Hasta Sağlığı Kayıt Yazılımı][3]
  * [Tıbbi Sağlık Çözümü OpenEmr'ın Keşiflenmesi][4]
  * [Localhost'ta EHealth System Hastanesi Nasıl Kurulur][18]
  * [Çevrimiçi sağlık yazılımı sağlık sektörünü nasıl güçlendirir][5]



[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
