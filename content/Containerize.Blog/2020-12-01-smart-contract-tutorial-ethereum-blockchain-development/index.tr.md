---
title: "Akıllı Sözleşme Eğitimi | Ethereum Blockchain Geliştirme" 
seoTitle: "Akıllı Sözleşme Eğitimi | Ethereum Blockchain Geliştirme" 
description: "Bu akıllı sözleşme öğreticisi, Ethereum akıllı sözleşmeleri oluşturmak için temel adımları detaylandırır. Ethereum açık kaynaklı, güvenli, dağıtılmış bir blockchain ağıdır." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereum, akıllı sözleşmeler ve merkezi olmayan uygulamalar (DAPPS) oluşturmak için olgun bir platformdur. Akıllı sözleşmeler oluşturmak, test etmek ve dağıtmak için bu adımları izleyin." 
url: /tr/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum, akıllı sözleşmeler ve merkezi olmayan uygulamalar (DAPPS) oluşturmak için olgun bir platformdur. Akıllı sözleşmeler oluşturmak, test etmek ve dağıtmak için bu adımları izleyin.

{{< figure align=center src="images/contract.png" alt="Akıllı sözleşme öğreticisi">}}


## Genel Bakış
Yakın geçmişte, blockchain teknolojisinin etkisini ve önemini vurgulayan bir [blog yazısı][1] yayınladık. Başka bir ilginç blog yazısı var [NFT nedir? | Fungible olmayan jetonlar açıklandı][2]. Dağıtılmış defter teknolojisi, akıllı sözleşmeler, düğümler, madencilik, konsensüs algoritmaları, dijital işlemler ve eşler arası ağlar gibi bazı temel kavramlara dayanmaktadır. Bu nedenle açık kaynak olduğu için, kullanım durumları ile ilgili bir uzantı için büyük bir pencere vardır. Aslında, dağıtılmış ve işlemleri yönetmek için bazı yazılımlar gerektiren birçok açık kaynak ve ücretsiz dijital varlık yönetimi platformu vardır.
Bu akıllı sözleşme öğreticisinde, aşağıdaki mermi noktalarını kapsayarak bir Ethereum akıllı sözleşmesinin nasıl kurulacağını öğreneceğiz.
* [ **Akıllı sözleşme nedir?** ][3]
* [ **Temel Akıllı Bir Sözleşme Nasıl Oluşturulur?** ][4]
* [ **Akıllı sözleşme nasıl çalıştırılır ve dağıtılır?** ][5]
* [ **Sonuç** ][6]

## Akıllı sözleşme nedir? {#what}

Akıllı sözleşme, dijital işlemleri yönetmek için blok zincirinde çalışan bir programdır. Bu kod parçası, bir işlemin şeffaflığını sağlayan tanımlanmış kural ve prosedürleri içerir. Her akıllı sözleşme bir adres içerir ve bu adres belirli bir akıllı sözleşmenin herhangi bir işleve erişmek için kullanılır. Buna ek olarak, akıllı sözleşmeler blockchain ağına şeffaflık, güven ve güvenlik getiriyor. Bu kod parçaları belirli koşullar yerine getirildikten sonra otomatik olarak yürütülür.
Ancak, herhangi bir geliştirici akıllı bir sözleşme yazabilir ve ağ üzerinden dağıtabilir. Ayrıca, akıllı sözleşmeler, bu kod parçalarının yürütülmesine bağımlılık olmadığı için süreçleri oldukça sağlam hale getirir. Ayrıca, akıllı sözleşmeler, katılımcıların alabileceği ve doğrulayabileceği her işlemle ilgili gerekli bilgileri depolar. Sağlık, bankacılık gibi birçok endüstri, bu dağıtılmış defter teknolojisini büyük ölçüde benimsiyor. Hükümet kurumları ayrıca seçim sistemine özgünlük ve şeffaflık getirmek için merkezi olmayan uygulamalar (DAPP'ler) kullanmaya heveslidir. [Ethereum][8], [Ripple][9], [Corda][10] gibi birçok [blockchain platformu][7] var ve biraz daha fazlası, bu kılavuzda ilk akıllı sözleşmemizi oluşturacağız Ethereum'da.

## Temel bir akıllı sözleşme nasıl oluşturulur? {#build}

Akıllı sözleşme öğreticisinin bu bölümünde, ilk akıllı sözleşmemiz için çevreyi ayarlama adımlarını göreceğiz.
Akıllı sözleşmeler birçok dilde yazılabilir, ancak akıllı sözleşmeler yazmak için üst düzey bir dil olan [sağlamlık][11] kullanacağız.
Web tabanlı bir IDE olan [Ethereum Studio][12] kullanacağız. Akıllı sözleşmelerin yanı sıra akıllı sözleşmelerle etkileşim kurmak için merkezi olmayan uygulamalar yazmak için kullanılır. Mantığınızı hemen yazmaya başlayabileceğiniz önceden inşa edilmiş bazı proje şablonları sağlar.
Bu nedenle, [Ethereum Studio][12] IDE'yi tarayıcıya açın ve aşağıdaki arayüzü göreceksiniz.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Akıllı sözleşme öğreticisi">}}

“Merhaba Dünya” seçeneğini seçelim ve ilk projemizi oluşturalım. Dizin yapısını görebilirsiniz. Ayrıca, sağ tarafta bir çıkış penceresi vardır.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Akıllı sözleşme öğreticisi">}}

İki klasör “uygulama” ve “sözleşmeler” vardır.
Uygulama klasörü web uygulamasına aittir ve aşağıdaki dosyaları içerir.
* **App.css** : Düzen stili için
* **app.html** : ana sayfa için
* **App.js** : Ön uçları akıllı sözleşmeyle bağlamak için iş mantığını içerir
Benzer şekilde, Sözleşme klasörü sözleşmenin kaynak dosyasını içerir.
Şimdi, Files/Sözleşmeler/Helloworld.sol'de bulunabilen Helloworld.sol dosyasını açalım. Temel olarak, bu, sağlamlıkta yazılmış akıllı sözleşmenin kodunu içeren ana dosyadır. İsterseniz kodu değiştirebilirsiniz, olduğu gibi bırakacağız.

## Akıllı bir sözleşme nasıl çalıştırılır ve dağıtılır? {#deploy}

Akıllı sözleşme öğreticisinin bu bölümünde, bir akıllı sözleşmenin nasıl çalıştırılacağını ve dağıtılacağını göreceğiz. Ethereum Studio, sağlamlık kodunu bayt koduna derler. Bu nedenle, kodu kaydedin ve ilk akıllı sözleşmemizi dağıtalım.
Sol yan panelde roket simgesine basın.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="Akıllı sözleşme nedir">}}

Akıllı sözleşmeniz için başlangıç ​​değerlerini aşağıda gösterildiği gibi yapılandırabilir ve ayarlayabilirsiniz.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Ethereum akıllı sözleşmesi">}}

“Kaydet” düğmesine basın ve akıllı sözleşmeyi dağıtmak için “Dağıtım” düğmesine basın. Aşağıdaki çıktıyı ve alttaki konsol penceresinde bir mesajı göreceksiniz. Konsol penceresi akıllı sözleşme adresi, nonce, gasslimit gibi ayrıntıları verir.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="Akıllı sözleşme nedir">}}

Bundan sonra, panelde sol taraftaki başka bir seçenek var ve bu etkileşim seçeneği. Bu seçenek, işlevini ve geçiş değerlerini arayarak akıllı sözleşmenizle etkileşime girmenizi sağlar.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="Akıllı sözleşme nedir">}}

Ayrıca, kullanıcıların tarayıcıdan akıllı sözleşme ile etkileşime girmesini sağlayan bir ön uç uygulaması var. Bu web tabanlı uygulamaya merkezi olmayan bir uygulama denir. Değeri geçebilir ve konsol penceresini görebilirsiniz.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="Akıllı sözleşme nedir">}}


## Çözüm {#con}

Bu bizi bu akıllı sözleşme öğreticisinin sonuna getiriyor. Umarım bu makale Ethereum akıllı sözleşmesinin oluşturulmasının ve konuşlandırılmasının temel adımlarını anlamanıza yardımcı oldu. Blockchain teknolojisi yüksek bir hızda geliştikçe, blockchain'in yankı sistemi üzerinde güçlü uygulamalı uygulama kazanmanın zamanı geldi. Bu dağıtılmış defter teknolojisi son derece yapılandırılabilir ve genişletilebilir. Akıllı sözleşme geliştirme öğrenmek istiyorsanız bu blog yazısı size gerçekten yardımcı olacaktır. Ayrıca, aşağıdaki “Keşfet” bölümünde belirtilen birçok yararlı öğretici ve açık kaynaklı dijital varlık yönetimi platformları vardır.
Sonunda, [Containerize.com][13] açık kaynaklı yazılım listesini derlemeye tamamen adanmıştır. Açık kaynaklı yazılım hakkında birçok öğretici ve blog yazısı vardır ve boru hattında bir dizi blog yazısı vardır. Bu nedenle, düzenli güncellemeler için lütfen [Blockchain Platformları][7] kategorisiyle iletişime geçin.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Ethereum][8]
  * [Hiperledger kumaş][14]
  * [Openchain][15]
  * [Ripple][16]
  * [MultiCain][17]
  * [Consensys Quorum][18]
  * [NFT nedir? | Fungible olmayan jetonlar açıklandı][2]
  * [Consensys Quorum Blockchain Ağı Yerel Olarak Nasıl Kurulur][19]
  * [2020'de Top 5 Açık Kaynak Blockchain Platformu][20]
  * [Ethereum akıllı sözleşmenin nasıl oluşturulacağı hakkında temel bir rehber][21]
  * [Merkezi olmayan teknoloji iş stratejinizi ne kadar yükseltiyor][22]
  * [Consensys Quorum Blockchain Ağı Yerel Olarak Nasıl Kurulur][19]



[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/blockchain-platforms/what-is-nft-non-fungible-tokens-explained/
[3]: #what
[4]: #build
[5]: #deploy
[6]: #con
[7]: https://products.containerize.com/blockchain-platforms/
[8]: https://products.containerize.com/blockchain-platforms/ethereum
[9]: https://ripple.com/
[10]: https://www.corda.net/
[11]: https://docs.soliditylang.org/en/v0.7.4/
[12]: https://studio.ethereum.org/
[13]: https://www.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[15]: https://products.containerize.com/blockchain-platforms/openchain
[16]: https://products.containerize.com/blockchain-platforms/ripple
[17]: https://products.containerize.com/blockchain-platforms/multichain
[18]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[19]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[20]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[21]: https://blog.containerize.com/
[22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
