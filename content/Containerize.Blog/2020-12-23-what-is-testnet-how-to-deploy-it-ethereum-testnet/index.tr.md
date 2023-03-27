---
title: "TestNet nedir ve nasıl dağıtılır | Ethereum testnet '" 
seoTitle: "TestNet nedir ve nasıl dağıtılır | Ethereum TestNet" 
description: "TestNet nedir? Bu kılavuz, Localhost'ta Ethereum düğümünün nasıl kurulacağı ile ilgilidir. Blockchain, tüm işlemlerin geçmişini koruyan bir düğüm ağıdır." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum, açık kaynaklı bir blockchain eşler arası bağlı düğümlerin ağıdır. Yerel bir sunucuda Ethereum düğümünün nasıl dağıtılacağını ve etkileşim kuracağınızı öğrenelim." 
url: /tr/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum, açık kaynaklı bir blockchain eşler arası bağlı düğümlerin ağıdır. Yerel bir sunucuda Ethereum düğümünün nasıl dağıtılacağını ve etkileşim kuracağınızı öğrenelim.

{{< figure align=center src="images/ether.png" alt="TestNet nedir">}}

Önceki blog yayınlarımızda, [Blockchain Business için][1], [temel bir akıllı sözleşme yazma][2] ve [popüler blockchain platformları][3] içeren birden fazla konu hakkında yazdık. Yakın gelecekte yazacağımız diğer konular da  **Merkezi olmayan defter teknolojisi**  zamanın geçişine ayak uyduruyor. İnsanlar artık güvenlik ve şeffaflık nedeniyle dijital varlık yönetimi platformlarına ilgi duymaya başlıyor. Buna ek olarak, dijital işlemler izlenebilir, değişmez ve bu tür faktörler bu teknolojinin güvenilirliği konusunda insanlara güven vermektedir. Üç tür blockchain kamu, özel ve izin alınmıştır. Ancak, kullanıcılar kullanım durumlarına bağlı olarak herhangi bir türü benimseyebilir.
Bu teknolojinin ortaya çıkması, finansal işlemlerin yolunu değiştirdiği için bankacılık sektöründe büyük bir değişiklik getirdi. Bu blog yazısında, LocalHost'ta Ethereum düğümünü kurma konusunda Ethereum Blockchain hakkında konuşacağız ve test ağıyla nasıl etkileşim kuracağımızı göreceğiz. Aşağıdaki kilit noktaları ele alacağız.
*  **TestNet nedir?**  
*  **[Ethereum blockchain nasıl kurulur?][4]**  
*  **[Ethereum blockchain ile nasıl etkileşim kurabilirim?][5]**  
*  **[Sonuç][6]**  

## TestNet nedir? {#tetstnet}

Bu blog yazısında, LocalHost'ta bir Ethereum düğümü dağıtacağız. Ethereum'un birden fazla ağı vardır, üretim ağına Mainnet denir ve test amacıyla kullanılan ağa TestNet denir. Merkezi olmayan uygulamaların çoğu [Ethereum][7] blockchain'e dayanmaktadır. Akıllı sözleşme, bu dağıtılmış altyapının ayrılmaz bir bileşenidir. Ayrıca, blockchain “düğümler” adı verilen bir bilgisayar ağıdır. Ancak, her düğüm blockchain'in bir kopyasını içerir ve böylece ağa katılır. Ethereum Blockchain'in de “eter” adı verilen kendi kripto para birimi vardır. Tüm işlemler kriptografik olarak güvence altına alınmıştır. Buna ek olarak, asla kapanmayan veya bozulmayan tam bir defter teknolojisidir. Etherum blockchain düğümlerinde çalışan akıllı sözleşmeler ve merkezi olmayan uygulamalar (DAPP'ler) yazmanızı sağlar.
Bu açık kaynaklı dağıtılmış blockchain ağı, İş Kanıtı (POW) adı verilen bir konsensüs algoritması kullanır. Ayrıca, Ethereum mimarisi Ethereum Virtual Machine, Ethereum istemci API'leri, akıllı sözleşmeler, Ethereum düğümleri ve son kullanıcı uygulamaları gibi beş katman içerir. Ethereum Virtual Machine, akıllı sözleşmeleri tanıyan yazılım ve mimariyi sunar. Akıllı sözleşmeler, işlemleri yöneten yazılımdır. Ethereum Blockchain ve Fortune 500 şirketleri için güçlü bir destek var, bu teknolojiyi kullanarak daha büyük ölçekte kalkınma yapmak için büyük ilgi gösterdi. Ayrıca, Ethereum Go dilinde yazılmıştır ve kaynak kodu [GitHub][8] 'de mevcuttur. Canlı bir topluluğa sahip olduğu için dağıtım ve geliştirme ile ilgili tüm belgeler mevcuttur.

## Ethereum Blockchain Nasıl Kurulur? {#setup}

Şimdi, TestNet'in ne olduğunun farkındayız. Bu bölümde, yerel makinemizde Ethereum düğümünü kuracağız. Daha ileri gitmeden önce, aşağıdaki ön koşulları yüklediğinizden emin olun.
  * [Homebrew][9] (macOS için)

  * [Go7] (brew install go)
Önkoşullar mevcut olduğunda, lütfen kaynak kodunu klonlamak için aşağıdaki komutu çalıştırın:
```
git clone https://github.com/ethereum/go-ethereum
```
Başarılı bir klon üzerine dizine gidin:
```
cd go-ethereum
```
Şimdi, Geth programını oluşturmak için aşağıdaki komutu çalıştırın:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Not
{{_LINE_34_}}
  Herhangi bir hata olması durumunda, lütfen xcode-secect –stelect çalıştırarak Xcode'u yükleyin ve tekrar deneyin
{{_LINE_36_}}
Böylece, tüm önkoşulları ve kaynak kodunu kurdunuz. Bu nedenle, düğümü başlatmak için aşağıdaki komutu çalıştırın:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Ethereum düğümü">}}


## Ethereum Blockchain ile nasıl etkileşim yapılır? {#interact}

Bu bölüm, blok zinciri ile tamamen senkronize edilmiş çalışan bir Ethereum düğümü ile etkileşimden bahsediyor. Geth yazılımını test ağına etkileşim kurmak ve komut göndermek için kullanabiliriz.
Bunun için, aşağıdaki komutları çalıştırarak $ yol ortam değişkenine Build/Bin/Geth ekleyelim:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Bundan sonra, yukarıda getirdiğiniz sunucuyu durdurun ve test ağını aşağıdaki bayraklarla çalıştırın:
geth --testnet --rpc --rpcapi = "db, eth, net, web3, kişisel, web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="TestNet nedir">}}

Ardından, yeni bir terminal penceresi açmanız ve aşağıdaki komutu çalıştırarak Geth komutunu düğüme eklemeniz gerekir:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="Dijital Varlık Yönetim Platformu">}}

Geth, test ağıyla etkileşime girebileceğiniz bir konsol penceresi açacaktır. Aşağıdaki komut sanal para birimini ve kamu/özel anahtar çiftini tutan bir hesap oluşturacaktır:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Merkezi olmayan defter teknolojisi">}}

Hesabınızı kontrol etmek için aşağıdaki komutu çalıştırabilirsiniz:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="TestNet nedir">}}

Aynı şekilde, Ethereum blockchain ile etkileşim kurmak için kullanabileceğiniz birçok komut vardır.

## Çözüm {#Çözüm}

İşte bu öğreticinin sonu geliyor. TestNet*  ***ve Ethereum düğümünün yerel makinedeki kurulum sürecini öğrendik. Ethereum blockchain, çoğu merkezi olmayan uygulamalar için genelleştirilmiş bir çözümdür. Çoğu işletme ve devlet dairesi, sağlamlık, şeffaflık, kullanılabilirlik ve hesap verebilirlik getirmek için bu teknolojiyi benimseme eğilimindedir. Buna ek olarak, bu** Blockchain Eğitimi **, akıllı sözleşmelerden yararlandığı için Ethereum blockchain'de geliştirmeye başlamayı planlıyorsanız size gerçekten yardımcı olacaktır. Etheruem blockchain, binlerce canlı düğüme sahip olduğu için daha kararlı ve popülerdir. Ayrıca, işletmeler ekstra zaman harcamadan Ethereum blockchain ağlarını kolayca geliştirebilir ve dağıtabilir. Ethereum'un güvenilirliğinin arkasındaki diğer faktör, akıllı sözleşmelerin geliştirilmesini diğer**  dijital varlık yönetim platformlarının**sunmayacağı şekilde sunmasıdır.
Ethereum ağındaki en son güncellemeler, ağı daha uygun maliyetli ve verimli hale getirdi. Aslında, bulutta Etheruem'in yatırım ve kalkınma amaçları konusunda önemli yönlerini gösteren çok daha fazla malzeme var. Geliştiriciler için, önceden yapılmış yardımcı programlar içeren geliştirici dostu bir ekosistem sağlar. Madenciler için, blok zincirine yeni bir blok madencilik yaptığında bir eter şeklinde bir ödül vardır. Ayrıca, [Containerize.com][10][blog.containerize.com][11] adresinden popüler açık kaynak ürünleri hakkında birçok teknik blog yazısı ve öğretici yayınlamıştır. Bu nedenle, düzenli güncellemeler için [blockchain platformları][12] kategorisiyle bağlantıda kalın.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Ethereum][7]
  * [Hiperledger kumaş][13]
  * [Openchain][14]
  * [Ripple][15]
  * [MultiCain][16]
  * [Consensys Quorum][17]
  * [Consensys Quorum Blockchain Ağı Yerel Olarak Nasıl Kurulur][18]
  * [2020'de Top 5 Açık Kaynak Blockchain Platformu][3]
  * [Ethereum akıllı sözleşmenin nasıl oluşturulacağı hakkında temel bir rehber][2]
  * [Merkezi olmayan teknoloji iş stratejinizi nasıl yükseltiyor][19]



 [1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
 [2]: https://blog.containerize.com/
 [3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
 [4]: #setup
 [5]: #interact
 [6]: #Conclusion
 [7]: https://products.containerize.com/blockchain-platforms/ethereum
 [8]: https://github.com/ethereum/go-ethereum
 [9]: https://brew.sh/
 [10]: https://www.containerize.com/
 [11]: https://blog.containerize.com/
 [12]: https://products.containerize.com/blockchain-platforms/
 [13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
 [14]: https://products.containerize.com/blockchain-platforms/openchain
 [15]: https://products.containerize.com/blockchain-platforms/ripple
 [16]: https://products.containerize.com/blockchain-platforms/multichain
 [17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
 [18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
 [19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
