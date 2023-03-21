---
title: "Bir WordPress sitesine bir web konferans yazılımı yükleyin" 
seoTitle: "Bir WordPress sitesine bir web konferans yazılımı yükleyin" 
description: "BigBluebutton açık kaynaklı bir web konferans yazılımı hakkında bilgi edinmek için bu kılavuzu izleyin. WordPress'e BigBlueButton eklentisini nasıl yükleyeceğinizi keşfedelim." 
date: Thu, 19 Jan 2023 20:06:03 +0000
author: muhammadmustafa
summary: "Sanal toplantılar yapmak için WordPress tabanlı iş web sitenize BigBlueButton eklentisini yükleyin. Ücretsiz, açık kaynaklıdır ve çok çeşitli özellikler sunar." 
url: /tr/install-a-web-conferencing-software-on-a-wordpress-site/
categories: ['Blogging', 'Video Conferencing Software']
---

## Sanal toplantılar yapmak için WordPress tabanlı işletme web sitenize BigBlueButton eklentisini yükleyin. Ücretsiz, açık kaynaklıdır ve çok çeşitli özellikler sunar.

{{< figure align=center src="images/Install-a-Web-Conferencing-Software-on-a-WordPress-Site.png" alt="WordPress sitesinde web konferans yazılımı">}}


## Genel Bakış
[Açık kaynaklı video konferans yazılımı][1] kategorisinde başka bir blog yazısıyla buradayız. E -postalar ve video görüşmeleri gibi uzak iletişimin bazı yolları vardır. Bununla birlikte, yüz yüze toplantılar her zaman daha etkili ve e-postalardan veya sohbetlerden daha uygundur. Bu hızlı büyüyen dünyada, insanlar gerçekten zaman ve mekanı umursamıyorlar. Şimdi, küçük/büyük kuruluşlar sanal konferanslar yapmak için**uzaktan işbirliği araçları**kullanmaya başladı. Video konferansları yapmak için güçlü araçlar sunan birçok web toplantı platformu olmasına rağmen, hepsi ödenir. Bu ihtiyacı algılayan açık kaynaklı topluluk,**Web Konferans Hizmetleri**için bazı kurumsal düzeyde çözümler geliştirdi. Buna ek olarak, bu ücretsiz platformlar büyük bir pazar bulur ve canlı bir geliştiricilerin topluluğu tarafından desteklenmektedir. Bu blog yazısında,**Web Konferans Yazılımı****bir [WordPress][2] sitesine nasıl yükleneceğini öğreneceğiz.
Aşağıdaki noktalar bu makalede ele alınacaktır:
* [**Bigbluebutton nedir?**][3]
* [**WordPress'e kısa bir giriş**][4]
* **[WordPress'e Bigbluebutton eklentisi nasıl kurulur?][5]**

##**Bigbluebutton nedir?** {#What-Is-bigbluebutton}
[BigBlueButton][6], büyük bir kurumsal düzeydeki özellik yığını ile açık kaynaklı bir ücretsiz**video işbirliği yazılımı**. Bu açık kaynaklı yazılım oldukça genişletilebilir ve WordPress, [Redmine][7], [Schoology][8], [Drupal][9] ve tuval gibi birçok popüler uygulamayla entegrasyonlar sunar. Buna ek olarak, zengin sunum araçlarıyla birlikte ortak bir beyaz tahta, genel/özel mesajlar, HD ses, elektronik el yetiştirme gönderir. Ayrıca,**BigBluebutton**HTML5 desteklenir ve tüm popüler web tarayıcılarında iyi çalışır.
Ayrıca, bu**web konferans yazılımı**büyük ve canlı bir geliştirici topluluğuna sahiptir. 7.8k yıldız ve 5.8k çatallı [GitHub Repo][10] üzerinde çok iyi istatistikler var. BigBluebutton, Java ve Ruby gibi diğer dillerden gelen girdilerle birlikte JavaScript'te yazılmıştır. Aslında, geliştiriciler geliştirme, dağıtım ve kullanım ile ilgili kapsamlı belgeler bulabilirler. Böylece, bu kendi kendine barındırılan yazılımı yerel veya bulut sunucusunda kolayca ayarlayabilirsiniz.

##**WordPress'e kısa bir giriş** {#a-brief-intro-to-wordpress}
[WordPress][2] web sitesi yazılımı kategorisinde en iyi**açık kaynaklı bloglama platformlarından biridir. Bu açık kaynaklı yazılım, yeni başlayan bir web geliştiricisi bile site binasını yapabilir ve başlatabilir. Buna ek olarak, WordPress oldukça yapılandırılabilir ve iş gereksinimlerinize göre özelleştirebilirsiniz. Her şeyden önce, bir dizi eklenti bulabileceğiniz muazzam bir [Marketplace][11] var.
Bu**blog yazılımı**kendi kendine barındırma yetenekleriyle birlikte gelir ve birden fazla dil için tam destek vardır. Ayrıca, [GitHub][12] repo'sunda çok iyi istatistikler vardır ve kaynak kodunu indirebilir ve kolayca ayarlayabilirsiniz. Ayrıca, WordPress web sitenizdeki herhangi bir işlev için bir eklenti yükleyebilirsiniz. Aslında, herhangi bir kategoriye ait siteler için eklentiler bulabilirsiniz. Esas olarak PHP'de yazılmıştır ve geliştirme, dağıtım ve kullanım ile ilgili eksiksiz talimatlar bulabilirsiniz.

##**WordPress'e BigblueButton eklentisi nasıl yüklenir?
Bu bölüm, bir WordPress sitesine**web konferans yazılımını nasıl kuracağınızı gösterecektir**. Ayrıca, Bigbluebutton eklentisini biraz daha keşfedeceğiz. Daha fazla hareket etmeden önce, makinenize WordPress'i yüklediğinizden ve bir işletme web sitesine sahip olduğunuzdan emin olun.
WordPress'i yüklememeniz durumunda lütfen bu [link][2] adresini ziyaret edin, tam kurulum talimatlarını bulabilirsiniz.
WordPress'te Bigbluebutton [eklenti][13] 'in kurulum işlemine başlayalım.
WordPress kontrol paneline gidin ve “Eklentiler” seçeneğini açın ve “Yeni Ekle” ye basın. BigBluebutton'u arama çubuğuna yazın ve aşağıdaki resimde gösterildiği gibi aramada 1. sırayı gösteren eklentiyi bulacaksınız:
{{_LINE_29_}}
Şimdi, bu**Web Konferans Yazılımı**yüklemek için “Şimdi Instal” düğmesine basın ve eklentiyi etkinleştirmek için “Etkinleştir” e basın. Etkinleştirme hayatta olduğunda, bu video konferans yazılımını kullanmaya başlayabilirsiniz. İleride, pencerenin sol yan panelinde aşağıdaki resimde gösterildiği gibi yeni bir menü öğesi “Odalar” eklenmesini görebilirsiniz.

{{< figure align=center src="images/bigbluebutton-plugin-1024x516.png" alt="Bigbluebutton eklentisi">}}

Şimdi, arkadaşlarınızla video toplantıları yapabileceğiniz odalar oluşturarak ve yayınlayarak toplantı odaları oluşturabilirsiniz. Buna ek olarak, arka plan rengini değiştirerek ve marka logosunu yükleyerek odaların görünümünü ve hissini özelleştirebilirsiniz. Aşağıdaki resimde, bir toplantı oluşturduğumuzu ve toplantı odasının kullanıcı arayüzünün canlı sohbet ve paylaşılan notlar gibi özelliklerle çok zengin olduğunu görebilirsiniz.

{{< figure align=center src="images/bigbluebutton-plugin-ui-1024x532.png" alt="Bigbluebutton eklentisi UI">}}


## sarmak
Bu bizi bu blog yazısının sonuna getiriyor. Bir WordPress sitesine**Web Konferans Yazılımı**nasıl yükleneceğinizi umarız. Ayrıca, toplantı odası oluşturma sürecinden de geçtik.**Bigbluebutton eklentisi**, sanal yüz yüze toplantılar yapmak söz konusu olduğunda çok şey sunar. Bu**web konferans yazılımı**açık kaynaklı olduğundan, iş gereksinimlerinizi karşılayacak şekilde özelleştirebilirsiniz. Dahası, “Ayrıca bkz.” Bölümünde gerçekten ilginç makaleler bulabilirsiniz.
Son olarak, [Containerize.com][14] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [[video konferans yazılımı][1] ve [bloglama platformları][15] kategorileri] ile iletişime geçin. Dahası, bizi sosyal medya hesaplarımızda [Facebook][17], [LinkedIn][18] ve [Twitter][19] 'dan takip edebilirsiniz.

## Bir soru sor
[Forum][20] 'de sorularınızı veya sorgularınızı bize bildirebilirsiniz.

## SSS
**WordPress siteme nasıl video görüşmesi ekleyebilirim?**
Bu bigbluebutton [eklenti][13] kullanarak [WordPress][2] sitenize web konferans yazılımı ekleyebilirsiniz. Bu yazılım açık kaynaklıdır ve yüz yüze video görüşmeleri oluşturmak için birçok özellik sunar.
**WordPress'e bigbluebutton nasıl ekleyebilirim?**
[WordPress][2] 'de kurulumu ve ayarlama işlemini öğrenmek için bunu [bağlantı][5] izleyin.

## Ayrıca bakınız
  * [Jitsi WordPress eklentisi ile tanışır ve nasıl yüklenir?][21]
  * [2021 Top 5 Açık Kaynak Video Konferans Yazılımı][22]
  * [Açık Kaynak Jitsi Meet'i kurmak için adım adım kılavuz][23]

  
[1]: https://products.containerize.com/video-conferencing/
[2]: https://products.containerize.com/blogging/wordpress/
[3]: #What-is-BigBlueButton
[4]: #A-brief-intro-to-WordPress
[5]: #How-to-install-BigBlueButton-plugin-in-WordPress
[6]: https://products.containerize.com/video-conferencing/bigbluebutton/
[7]: https://products.containerize.com/project-management/redmine/
[8]: https://app.schoology.com/login
[9]: https://products.containerize.com/content-management/drupal/
[10]: https://github.com/bigbluebutton/bigbluebutton
[11]: https://wordpress.org/plugins/
[12]: https://github.com/WordPress/WordPress
[13]: https://wordpress.org/plugins/video-conferencing-with-bbb/
[14]: https://www.containerize.com/
[15]: https://products.containerize.com/blogging/
[16]: https://products.containerize.com/social-network-platforms/
[17]: https://web.facebook.com/containerize
[18]: https://www.linkedin.com/company/containerize/
[19]: https://twitter.com/containerize_co
[20]: https://forum.containerize.com/
[21]: https://blog.containerize.com/blogging/what-is-jitsi-meet-wordpress-plugin-and-how-to-install-it/
[22]: https://blog.containerize.com/video-conferencing-software/top-5-open-source-video-conferencing-software-of-2021/
[23]: https://blog.containerize.com/video-conferencing-software/how-to-set-up-open-source-jitsi-meet/
