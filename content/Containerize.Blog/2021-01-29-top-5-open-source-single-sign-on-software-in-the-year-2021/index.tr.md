---
title: "2021 yılında ilk 5 açık kaynaklı tek oturum açma yazılımı" 
seoTitle: "2021 yılında ilk 5 açık kaynaklı tek oturum açma yazılımı" 
description: "Enterprise düzeyinde ücretsiz tek oturum açma yazılımı listesini kontrol edin. Bu açık kaynaklı SSO çözümleri IdentityServer, KeyCloak'ı içerir. CAS, Authelia ve WSO2." 
date: Fri, 29 Jan 2021 05:46:42 +0000
author: muhammadmustafa
summary: "Tek oturum açma yazılımı, tüm kullanıcı hesapları ve BT sistemleri için merkezi bir giriş sunar. Güvenlik ve şeffaflık sunarak kullanıcı deneyimini modernize eder." 
url: /tr/top-5-open-source-single-sign-on-software-in-the-year-2021/
categories: ['Single Sign-On']
---

## Tek Oturum Açma Yazılımı, tüm kullanıcı hesapları ve BT sistemleri için merkezi bir giriş sunar. Güvenlik ve şeffaflık sunarak kullanıcı deneyimini modernize eder.

{{< figure align=center src="images/sso.png" alt="Tek oturum açma yazılımı">}}


## Genel Bakış
Büyük kuruluşlardaki kullanıcılar ** tek oturum açma (SSO) ** yazılımı kullanarak dijital kaynaklara sorunsuz bir şekilde erişir. Kimlik ve Erişim Yönetimi ** SSO ** yazılımı kullanılarak rutin iş operasyonlarının ayrılmaz bir parçası haline gelmiştir. Bu blog yazısında, aşağıdaki ilk 5 popüler açık kaynaklı tek oturum açma yazılımından bazılarından geçeceğiz.
  *** [IdentityServer] [1] **
  *** [KeyCloak] [2] **
  *** [CAS] [3] **
  *** [Authelia] [4] **
  *** [WSO2] [5] **
  *** [Sonuç] [6] **

## IdentityServer {#IndentityServer}
[** IdentityServer **] [7] açık kaynaklı ücretsiz tek oturum açma yazılımıdır. OpenID Connect ve OAuth 2'ye dayanan platformlar arası bir çerçevedir. Ayrıca, bu açık kaynak yazılım birden çok uygulama için merkezi kimlik doğrulama ve yetkilendirme özellikleri sağlar. Federasyonlu kimlikleri, çoklu akışları ve API yetkisini destekler. Ayrıca, bu ** kendi kendine barındırma yazılımı **, kullanıcıların birçok uygulamada tek bir kullanıcı adı/şifre setiyle giriş yapmalarını sağlar. Bununla birlikte, ** IdentityServer ** C# 'da yazılmıştır ve tüm kaynak kodu, dağıtım ve geliştirme ile ilgili belgelerle birlikte [GitHub] [8]' de mevcuttur.
Aşağıda öne çıkan özellikler:
  * Talep Tabanlı Sağlayıcı
  * Çapraz platform
  * UI özelleştirme
  * API için Erişim Kontrolü
  * Tek Oturum Açma /Oturum Açma
[** IdentityServer hakkında daha fazla bilgi edinin **] [9]

## KeyCloak {#Keycloak}
[** KeyCloak **] [10] OpenID Connect, OAuth2.0 ve SAML2.0'a dayanan bir başka ücretsiz yazılımdır. Web uygulamaları ve web hizmetleri arasında ** sso ** özellikleri sağlar. Her şeyden önce, bu açık kaynak yazılım ** ldap ** ve Active Directory ile entegrasyonlar sağlar. Kullanıcıların rolleri, izinleri ve oturumları yönetebilecekleri mantıklı bir kullanıcı arayüzü vardır. Ayrıca, bu ** ücretsiz çözüm **, Java, JavaScript ve C#gibi birçok dil için müşteri kütüphaneleri sağlar. ** KeyCloak ** esas olarak Java ve HTML gibi diğer dillerden çok az girdi ile Java'da yazılmıştır. Kaynak kodu [GitHub] [11] 'de mevcuttur.
KeyCloak'ın aşağıdaki temel özellikleri vardır:
  * İstemci adaptörleri sağlar
  * Kullanıcı dostu kullanıcı arayüzü
  * Hizmet Olarak Kimlik Doğrulama
  * LDAP ile entegrasyon
  * Active Directory ile entegrasyon
[** KeyCloak hakkında daha fazla bilgi edinin **] [12]

## cas {#cas}
[** CAS **] [13] delege kimlik doğrulaması ile açık kaynaklı SSO yazılımıdır. Ayrıca, çok dillidir ve bilet tabanlı protokolü kullanarak merkezi yetkilendirme hizmetleri ile birlikte gelir. Bu ücretsiz yazılım istemci-sunucu mimarisi üzerine kurulmuştur. ** Merkezi Kimlik Doğrulama Hizmeti (CAS) ** OpenID, OAuth, OpenID Connect, Rest, WSFEDERATION ve SAML gibi birçok protokolü destekler. Her şeyden önce, üçüncü taraf uygulamalarla entegrasyon için kapsamlı bir sistem var. Bu ** tek oturum açma ** yazılımı Java'da yazılmıştır. Ancak, kaynak kodu geliştirme ve dağıtım ile ilgili tüm belgelerle [GitHub] [14] 'te mevcuttur.
CAS aşağıdaki önemli özellikleri sunar:
  * Çok dilli
  * Çok faktörlü kimlik doğrulama
  * Birçok yetkilendirme mekanizması (örneğin ABAC, saat/tarih, dinlenme)
  * İzleme ve istatistikleri yönetmek için kullanıcı arayüzü
  * Şifre Yönetimi
[** CAS **] [15] hakkında daha fazla bilgi edinin

## Authelia {#Authelia}
[** Authelia **] [16] oldukça zengin özellikli ve ölçeklenebilir SSO yazılımıdır. Harika bir güvenlik sunar ve tek oturum açma ve giriş düzenleme yetenekleri sağlar. Bu ** Açık Kaynak Yazılım ** ayrıca LDAP ve Active Directory için destek sağlar. Ayrıca, kullanıcıların kolayca gezinmesini sağlayan sezgisel bir kullanıcı arayüzü vardır. Ayrıca, ** Google Authenticator ** OTP'ye dayalı iki faktörlü kimlik doğrulama sağlar. Bu ** ücretsiz yazılım **, Nginx gibi ters bir proxy ile çalışır. Bununla birlikte, Authelia Go dilinde yazılmıştır ve tüm kaynak kodu [GitHub] [17] 'de mevcuttur.
Authelia aşağıdaki temel özelliklerle birlikte gelir:
  * 2f Yubikey ile kimlik doğrulama
  * Kimlik doğrulama
  * Brute Force Saldırılarını Bloket
  * Ters vekillerle çalışır
  * Duo ile Push bildirimleri
** [Authelia hakkında daha fazla bilgi edinin] [18] **

## wso2 {#wso2}
[** WSO2 **] [19] yaygın olarak kullanılan bir başka açık kaynak kimliği ve erişim yönetim sistemidir. Kimlik doğrulama sağlamak için neredeyse tüm popüler kimlik standartlarını destekler. Diğer uygulamalarla entegrasyon için API uç pintlerini ortaya çıkarmıştır. ** WSO2 **, son derece özelleştirilebilir ** kullanıcı dostu bir arayüz ** ile gelir. Ayrıca, bu açık kaynaklı yazılım aynı zamanda iki faktörlü kimlik doğrulama sunar. Bununla birlikte, esas olarak Java'da yazılmıştır ve tüm kaynak kodu [GitHub] [20] 'te geliştirme ve dağıtım ile ilgili belgelerle mevcuttur.
WSO2 aşağıdaki önemli noktaları sunar:
  * Yüksek performans
  * Bulut entegrasyonları
  * Esnek
  * Gelen/Giden Provizyon
  * Kimlik Sağlayıcı
** [WSO2 hakkında daha fazla bilgi edinin] [21] **

## Sonuç {#Conclusion}
Bu blog gönderisinde belirtilen açık kaynak ** SSO yazılımı ** neredeyse tüm kurumsal düzeyde kullanılmaktadır. İş için en iyi ** yazılım ** tek işareti seçme sürecindeyseniz, bu makaleyi derinden gözden geçirmenizi öneririz.
Son olarak, [** Containerize.com **] [22] diğer açık kaynaklı ürünler üzerine makaleler yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [tek oturum açma] [23] kategorisiyle iletişime geçin.

## Keşfetmek
  *** [IdentityServer] [24] **
  *** [KeyCloak] [25] **
  *** [CAS] [26] **
  *[** Authelia **] [27]
  *** [WSO2] [28] **
  *** [OpenDidentPlatform] [29] **
  *** [Freeipa] [30] **
  *** [Daha İyi İş Büyümesi için SSO Sistemi Nasıl Kullanılır] [31] **
  *** [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin] [32] **
[1]: #IdentityServer
[2]: #KeyCloak
[3]: #CAS
[4]: #Authelia
[5]: #WSO2
[6]: #Conclusion
[7]: https://products.containerize.com/single-sign-on/identity-server
[8]: https://github.com/IdentityServer
[9]: https://identityserver.io/
[10]: https://products.containerize.com/single-sign-on/keycloak
[11]: https://github.com/keycloak/keycloak
[12]: https://www.keycloak.org/
[13]: https://products.containerize.com/single-sign-on/cas
[14]: https://github.com/apereo/cas
[15]: https://apereo.github.io/cas/6.3.x/index.html
[16]: https://products.containerize.com/single-sign-on/authelia
[17]: https://github.com/authelia/authelia
[18]: https://www.authelia.com/
[19]: https://products.containerize.com/single-sign-on/wso2
[20]: https://github.com/wso2/product-is
[21]: http://wso2.github.io/
[22]: https://www.containerize.com/
[23]: https://products.containerize.com/single-sign-on/
[24]: https://products.containerize.com/single-sign-on/identity-server/
[25]: https://products.containerize.com/single-sign-on/keycloak/
[26]: https://products.containerize.com/single-sign-on/cas/
[27]: https://products.containerize.com/single-sign-on/authelia/
[28]: https://products.containerize.com/single-sign-on/wso2/
[29]: https://products.containerize.com/single-sign-on/openidentityplatform/
[30]: https://products.containerize.com/single-sign-on/freeipa/
[31]: https://blog.containerize.com/single-sign-on/how-to-leverage-sso-solution-for-better-business-growth/
[32]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
