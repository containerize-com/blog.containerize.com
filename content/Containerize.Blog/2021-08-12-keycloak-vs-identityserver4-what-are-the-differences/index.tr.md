---
title: "KEYCLOAK VS IdentityServer4 | Farklılıklar nedir?" 
seoTitle: "KEYCLOAK VS IdentityServer4 | Farklılıklar nedir?" 
description: "Bu blog yazısı, önde gelen iki açık kaynak kimlik sunucusu KeyCloak ve IdentityServer4'ün karşılaştırılması ile ilgilidir. Her iki yazılım da kendi kendine barındırılır ve zengin özelliklidir." 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "KeyCloak ve IdentityServer4, kaynaklara erişmek için hizmetlerde tek işaret sunan açık kaynak kimlik sağlayıcılarıdır. Bu iki SSO yazılımını karşılaştıralım." 
url: /tr/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## KeyCloak ve IdentityServer4, kaynaklara erişmek için hizmetlerde tek işaret sunan açık kaynak kimlik sağlayıcılarıdır. Bu iki SSO yazılımını karşılaştıralım.

{{< figure align=center src="images/open-source-sso.png" alt="KeyCloak vs IdentityServer4">}}


## Genel Bakış
Yakın geçmişte, daha iyi iş büyümesi için SSO sisteminden nasıl yararlanılacağı ve 2021 yılında ilk 5 açık kaynaklı tek oturum açma yazılımı gibi bazı blog yayınları yayınladık. Bu makaleler, yaygın olarak kullanılan açık kaynak SSo yazılımı ve onun İşletme üzerinde temel etkiler. Ancak, kullanıcı yönetimi herhangi bir uygulamanın en kritik yönüdür. Modern teknoloji dünyasında, siber güvenlik sıcak bir konudur. Kullanıcıların ziyaret ettiği, giriş yaptıkları ve oturum açtığı tonlarca uygulama vardır. Birden fazla kimlik bilgisi setine sahip bir kullanıcı daha savunmasızdır ve siber saldırıların kolay bir hedefidir.
Bu nedenle, tek bir kimlik bilgisi kümesi kullanarak kaynaklara erişmek her zaman iyi bir fikirdir. Tek oturum açma yazılımı, kullanıcıların tek bir kullanıcı adı ve şifre kullanarak birden fazla uygulamada oturum açmasını sağlar. Kullanıcılar yalnızca bir seferde oturum açar ve birçok uygulamaya tekrar giriş yapmadan erişebilir. Açık kaynak topluluğu [IdentityServer4][1] ve [KeyCloak][2] gibi açık kaynak kimlik sağlayıcıları geliştirdiğinden bu yaklaşım her geçen gün popülerlik kazanıyor. Bu blog yazısında, ilk iki açık kaynak SSO çözümünden geçeceğiz ve başlık KeyCloak vs IdentityServer4 önerdiği gibi özellikleri ve kapsamları karşılaştıracağız. Aşağıdaki noktalar ele alınacaktır.
* **[IdentityServer 4][3]** 
* **[KeyCloak nedir?][4]** 
* **[KeyCloak ve IdentityServer 4'ün Karşılaştırılması][5]** 
* **[Sonuç][6]** 

## IdentityServer4'ün Kısa Girişi4 {#intro}

[IdentityServer4][1] OpenID Connect ve OAuth 2.0'a dayanan açık kaynaklı bir SSO yazılımıdır. Bu ücretsiz araç, birden çok uygulamada tek oturum açma hizmetleri sağlamak için .NET Framework (4.5.x) ve .NET Core'da yazılmıştır. Bir kimlik doğrulama sunucusu olarak, dijital kaynaklara erişmek için kullanılabilecek bir JWT jetonu sağlar. API için Access Control, kullanıcı arayüzü özelleştirmeleri, API yetkisi ve talep tabanlı sağlayıcı gibi birçok hüküm sunar. Ayrıca, esnek, genişletilebilir ve kendi kendine barınma yetenekleri ile birlikte gelir. Ayrıca, Google, Facebook, Twitter ve diğer sosyal ağlar gibi birden fazla akışı ve federasyonlu kimlikleri destekler.
Bu ücretsiz tek oturum açma yazılımının tüm kaynak kodu [GitHub][7] 'de mevcuttur. Bu nedenle, kullanıcılar dağıtım ve geliştirme ile ilgili tüm belgeleri gözden geçirebilir.

## KeyCloak nedir? {#key}

[KeyCloak][2] yaygın olarak kullanılan bir başka kimlik doğrulama çözümüdür. OpenID Connect, OAuth2.0 ve SAML 2.0 kullanarak kimlik ve erişim yönetimi sunar. Bu ücretsiz yazılım, kullanıcıları, rolleri, yapılandırmaları ve oturumları yönetmek için kullanıcı dostu bir kullanıcı arayüzü sağlar. Ayrıca, LDAP ve Active Directory gibi üçüncü taraf uygulamalarla entegrasyonlar sağlar. Kullanıcılar, artan ölçeklenebilirlik ve kullanılabilirlik ile merkezi kullanıcı yönetiminden yararlanabilir. Her şeyden önce, sosyal girişler, kullanıcı federasyonu, merkezi yönetim, şifre politikaları, kümeleme ve adaptörler gibi birçok özellik ile birlikte entegrasyonlar için müşteri kütüphaneleri sağlar. Bu ücretsiz tek işaretin tüm kaynak kodu [GitHub][8] 'de mevcuttur. Bu nedenle, kullanıcılar dağıtım ve geliştirme ile ilgili tüm belgeleri gözden geçirebilir.

## KeyCloak ve IdentityServer'in Karşılaştırılması4 {#comp}

Bu KeyCloak vs IdentityServer4 makalesinin bölümünde, bu iki açık kaynaklı kimlik sağlayıcısını aşağıdaki noktaları kaplayarak özelliklere ve diğer özelliklere bakarak karşılaştıracağız.
**Topluluk Durum** : Bu ücretsiz SSO yazılımı her ikisi de toplulukta iyi geri alınmıştır. Bununla birlikte, KeyCloak GitHub'da IdentityServer4'e kıyasla daha iyi istatistiklere sahiptir. KeyCloak, GitHub'da 3K Plus Stars ile 9K Plus Stars ve IdentityServer standlarını güvence altına aldı. Belgeler söz konusu olduğunda, her iki ücretsiz kimlik doğrulama çözümleri, dağıtım ve dokümantasyon ile ilgili kapsamlı belgelerle birlikte gelir.
**Özellikler** : Birincisi, KeyCloak ve IdentityServer4 OpenID Connect ve OAuth2.0'a dayanmaktadır. Ancak, KeyCloak başka bir standart protokol SAML2.0 kullanır. KeyCloak, özelleştirilebilir ve LDAP ve Active Directory ile entegrasyonlar sağlayan bir kullanıcı arayüzü ile birlikte gelir. [IdentityServer4][1], SSO'yu elde etmek için OAuth2'nin üstünde bir kimlik doğrulama katmanı olan OIDC'yi kullanır. Her iki ücretsiz SSO yazılımı Docker görüntüleri ile birlikte gelir ve geliştiriciler Docker'ı kullanarak ayarlayabilir. Buna ek olarak, IdentityServer4, KeyCloak ile karşılaştırıldığında hafiftir.
**Teknik Yığın** : Teknolojiler söz konusu olduğunda, KeyCloak esas olarak Java'da JavaScript, HTML ve daha fazlası gibi diğer dillerin çok az girdisi ile yazılmıştır. İkincisi, IdentityServer4 esas olarak HTML ve SCSS gibi diğer dillerin girişiyle C# yazılır.
**Genişletilebilirlik** : Herhangi bir açık kaynak yazılımının ve her ikisinin de bu SSO yazılım geliştiricisinin ana özelliklerinden biridir. Bu yazılım üçüncü taraf kütüphanelerle entegrasyon sağlar. Ayrıca KeyCloak, Java ve JavaScript'te yazılmış istemci adaptörleri sunar.
**Güvenlik:**  KeyCloak ve IdentityServer4 güvenlik mekanizmalarını uyguladı. Ayrıca, IdentityServer4, yetkilendirme amacıyla taşıyıcı jetonları kullanır.

## Çözüm {#Çözüm}

Bu KeyCloak vs IdentityServer4 blog yayınının sonu. Hem ücretsiz SSO sistemlerinin bazı önemli yönlerinden geçtik hem de bazı temel özellikler üzerinde ayrıntılı olarak açıklandık. Bu nedenle, hangi ücretsiz tek oturum açma yazılımının daha iyi olduğu hakkında kendiniz bir sonuç çıkarabilirsiniz. Bu makale, işletmeniz için doğru ürün için doğru seçimi yapmanıza kesinlikle yardımcı olacaktır. Dahası, kullanım durumlarınızın iyi farkındaysanız, karar verme kolay bir iş haline gelir. Ayrıca, her zaman gereksinimlerinize uygun yazılımları tercih edersiniz.
Bu SSO yazılımlarının her ikisi de, kaynaklara erişme kolaylığı ile kuruluşa kolaylık sağlar. Kuruluşlar, iyi tek oturum açma yazılımı kurarak kaynakların kullanılabilirliğinden emin olur. USRE'lerin birden fazla kimlik kümesi taşımasına gerek yoktur; Daha ziyade bir kimlik kümesi kullanabilirler, sadece bir kez giriş yapabilirler ve bundan sonra tekrar giriş yapmadan birden fazla web sitesine erişebilirler. Tüm sisteme güven, güvenlik ve şeffaflık verir
Son olarak, **[Containerize.com][9]**daha fazla açık kaynaklı ürünler üzerine yazıyor. Lütfen bu [****][10]**[tek oturum açma][11]**Düzenli güncellemeler için kategoriyle iletişim halinde olun. Dahası, bizi sosyal medya hesaplarımızda [Facebook][12], [LinkedIn][13] ve [Twitter][14] 'te takip edebilirsiniz.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
* **[IdentityServer][15]** 
* **[KeyCloak][16]** 
* **[CAS][17]** 
* **[Authelia][18]** 
* **[WSO2][19]** 
* **[OpenDidentPlatform][20]** 
* **[Freeipa][21]** 
* **[2021 yılında ilk 5 açık kaynaklı tek oturum açma yazılımı][22]** 
* **[Daha İyi İş Büyümesi için SSO Sistemi Nasıl Kullanılır][23]** 
* **[Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][24]** 



[1]: https://products.containerize.com/single-sign-on/identity-server/
[2]: https://products.containerize.com/single-sign-on/keycloak/
[3]: #intro
[4]: #key
[5]: #comp
[6]: #Conclusion
[7]: https://github.com/IdentityServer
[8]: https://github.com/keycloak/keycloak
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/video-conferencing/
[11]: https://products.containerize.com/single-sign-on/
[12]: https://web.facebook.com/containerize
[13]: https://www.linkedin.com/company/containerize/
[14]: https://twitter.com/containerize_co
[15]: https://products.containerize.com/single-sign-on/identity-server
[16]: https://products.containerize.com/single-sign-on/keycloak
[17]: https://products.containerize.com/single-sign-on/cas
[18]: https://products.containerize.com/single-sign-on/authelia
[19]: https://products.containerize.com/single-sign-on/wso2
[20]: https://products.containerize.com/single-sign-on/openidentityplatform
[21]: https://products.containerize.com/single-sign-on/freeipa
[22]: https://blog.containerize.com/single-sign-on/top-5-open-source-single-sign-on-software-in-the-year-2021/
[23]: https://blog.containerize.com/single-sign-on/how-to-leverage-sso-solution-for-better-business-growth/
[24]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
