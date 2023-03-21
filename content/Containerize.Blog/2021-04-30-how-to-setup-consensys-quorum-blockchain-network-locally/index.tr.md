---
title: "Consensys Quorum Blockchain Ağı Yerel Olarak Nasıl Kurulur" 
seoTitle: "Consensys Quorum Blockchain Ağı Yerel Olarak Nasıl Kurulur" 
description: "Consensys Quorum Blockchain'in Localhost'taki kurulum süreci hakkında bilgi edinmek için bu kılavuzu izleyin. ConseSys Quorum açık kaynaklı Etherum tabanlı blockchain'dir." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "İş dijital işlemlerini yönetmek ve izlemek için kendi genel/özel blockchain ağınızı oluşturun. Consensys Quorum'u Localhost'ta nasıl kuracağınızı öğrenelim." 
url: /tr/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## İş dijital işlemlerini yönetmek ve izlemek için kendi genel/özel blockchain ağınızı oluşturun. Consensys Quorum'u Localhost'ta nasıl kuracağınızı öğrenelim.

{{< figure align=center src="images/quorum.png" alt="Konserler Yeter">}}


## Genel Bakış
Yakın geçmişte, [2020'de Top 5 Açık Kaynak Blockchain Platformları][1], [Ethereum Akıllı Sözleşmenin Nasıl Oluşturulacağı Üzerine Temel Kılavuz][2], [Merkezi Oluşturma Nasıl Merkezi Oluşturma Hakkında Blockchain ile ilgili bazı konularda blog yayınları yayınladık. Teknoloji iş stratejinizi yükseltir][3] ve [Localhost'ta Ethereum Düğümünü Kurmak İçin Yeni Başlayanlar Kılavuzu][4]. Bu makalede, aşağıdaki noktaları ele alarak Consensys Quorum Blockchain Network'ün Localhost'ta nasıl kurulacağını göreceğiz.
  ***[Consensys Quorum'un kısa bir tanıtımı][5]** 
  ***[Önkoşullar ve  **Kurulum Prosedürü Nedir ** ?][6]** 
  ***[Ağ nasıl başlatılır?][7]** 
  ***[Sonuç][8]** 

## **Consensys Quorum**    {#Introduction} 'in kısa bir girişi
[Consensys Quorum][9] **Merkezi olmayan Defter Teknolojisi  **tabanlı açık kaynaklı bir platformdur ** . Bununla birlikte, hızlı ve yüksek verimli işlemleri işleyen blockchain tabanlı uygulamalar oluşturmak için tamamen geliştirici dostu bir ortam sağlar.  **Ethereum **  tabanlı, genişletilebilir ve birçok eklenti sunar. Ayrıca, bu açık kaynak dağıtılmış sistem yüksek güvenlik ve gizlilik standartlarıyla birlikte gelir. Buna ek olarak, API'lara izin vermek ve izleme gibi birçok güçlü özellik vardır. Ayrıca, bu  **DLT platformu**   kendi kendine barındırılır ve geliştirme ve dağıtım ile ilgili ayrıntılı belgeler sağlar. Bu ücretsiz yazılımın kaynak kodu [GitHub][10] 'da mevcuttur.
ConseSys Quorum aşağıdaki önemli özellikleri sunar:
  * Ploggable mimari
  * Ethereum merkezli
  * Güvenli
  * Kendi kendine barındırıldı
  * Genel/Özel Ağ
[Consensys Quorum hakkında daha fazla bilgi edinin][11]

## ****Ön koşullar ve kurulum prosedürü nelerdir? ****    {#ön koşullar}
Bu bölümde, gerekli bağımlılıkları kuracağız ve yerel ortamı kuracağız. Bir sonraki adıma geçmeden önce aşağıdaki ön koşulları yüklediğinizden emin olun:
  * Nodejs v10+
  * Docker
  * Docker-Compose
Ön koşullar yüklendikten sonra, CLI tabanlı QuickStart yardımcı programını başlatmak için aşağıdaki komutu çalıştırın.
```
npx quorum-dev-quickstart
```
Ancak, aşağıdaki resimde gösterildiği gibi kurulumu tamamlamak için soruları yanıtlayın.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Konserler Yeter">}}


## ****Ağ nasıl başlatılır? ****    {#start}
Şimdi, kaynak kodumuz var. Yani, bir sonraki adım ağı canlı hale getirmektir.
Kök dizinine girmek için aşağıdaki komutu çalıştırın.
```
cd quorum-test-network
```
Bundan sonra, tüm Docker kaplarını başlatmak için aşağıdaki komutu çalıştırın:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Konserler Yeter">}}

Tüm Docker kapları çalışmaya başladığında, Block Explorer'a aşağıdaki adresten erişebilirsiniz:
```
http://localhost:25000
```
[] ()
Ayrıca, aşağıdaki resimde gösterildiği gibi Block Explorer ile etkileşime girebilirsiniz.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="Açık Kaynak Dağıtılmış Sistem">}}

Benzer şekilde, aşağıdaki komutu çalıştırarak tüm ağı durdurabilirsiniz:
```
./stop.sh 
```

## Sonuç   {#Conclusion}
Bu öğreticinin sonu. Her şeyden önce, Ethereum merkezli Consensys Quorum, finansal kullanım durumları için özel olarak geliştirilmiş bir **dijital finansal teknolojidir** . Oylama tabanlı bir fikir birliği algoritması vardır. Bununla birlikte, bu merkezi olmayan teknolojinin ana güdüsü, işletmeler için verimli çözümler oluşturmaktır.
Son olarak, [Containerize.com][12][blog.containerize.com][13] 'te popüler açık kaynak ürünleri hakkında birçok teknik blog yazısı ve öğretici yayınladı. Bu nedenle, düzenli güncellemeler için [blockchain platformları][14] kategorisine sadık kalın.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Ethereum][15]
  * [Hiperledger kumaş][16]
  * [Openchain][17]
  * [Ripple][18]
  * [MultiCain][19]
  * [Consensys Quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
