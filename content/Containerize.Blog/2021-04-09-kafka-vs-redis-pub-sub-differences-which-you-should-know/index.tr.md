---
title: "Kafka vs Redis pub-sub, bilmeniz gereken farklılıklar" 
seoTitle: "Kafka vs Redis pub-sub, bilmeniz gereken farklılıklar" 
description: "Kafka ve Redis arasında büyük miktarda veriyi yönetmek ve karıştırmak için araçlar arıyorsanız. Kafka vs Redis Pub-Sub bu makale size yardımcı olacaktır." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis ve Kafka, benzer işleri kendi yollarıyla yapan iki farklı araçtır. Kafka vs Redis karşılaştırması size bilmeniz gereken fikir verir." 
url: /tr/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs Redis Pub Sub">}}


## Redis ve Kafka, benzer işleri kendi yollarıyla yapan iki farklı araçtır. Kafka vs Redis karşılaştırması size bilmeniz gereken fikir verir.
“Redis” ile ilgili makalelerimizde [Redis'in temelleri][1] 'ın temellerini öğrendik, daha sonra [Redis Pub/Sub Works][2][2]' i ve bunun NoSQL veritabanlarıyla nasıl rekabet ettiğini araştırdık. Bugünkü dizimizde ilerlerken REDIS'i çeşitli görevlerde rakiplerinden biri olan Kafka ile karşılaştıracağız. Bu makalede Kafka vs Redis Pub-Sub, Kafka'nın Redis'ten nasıl farklı olduğunu ve onların benzerlikleri neler olduğunu keşfedeceğiz. Öyleyse başlayalım.
  * Kafka nedir?
  * Redis nedir?
  * Ana farklılıklar nelerdir?
  * Hangisini ne zaman kullanmalı?
  * Çözüm

## Kafka nedir?
Apache Kafka, açık kaynaklı bir dağıtılmış olay akışı platformudur. Yüksek performanslı veri boru hatları ve akış analizleri için kullanılır. Kafka, [yayınlama-abonelik mesajlaşma sistemi yayınlamak][3] gibi davranır. Bununla, yeni verileri yüksek hızlarda oluşturulduğu gibi işleyebilirsiniz ve ayrıca bazı veritabanlarına da kaydedebilirsiniz.
Kafka, **sunucuları  **ve**   istemcilerden oluşan dağıtılmış bir sistemdir. Çıplak metal donanım, sanal makineler ve şirket içi ve bulut ortamlarında kaplar üzerine dağıtılabilir.

## Redis nedir?
Redis, açık kaynaklı, gelişmiş bir anahtar değeri mağazasıdır. Birkaç veri türünü destekler: dizeler, karmalar, listeler, kümeler ve sıralı kümeler. Bu nedenle genellikle bir veri yapısı sunucusu olarak adlandırılır.
Redis ayrıca NoSQL veritabanı olarak kabul edilir. He Redis ve nasıl çalıştığı hakkında ayrıntılı bir tartışma için “[REDIS bellek içi veritabanı için yeni başlayanlar rehberi][1] makalemize başvurabilirsiniz.

## Temel farklılıklar nelerdir?
**REDIS**  Pub-Sub çoğunlukla ürettiğiniz tüm mesajların bir kerede tüm tüketicilere teslim edileceği ve verilerin hiçbir yerde saklanmadığı bir yangın ve onay sistemi gibidir. REDIS ile ilgili olarak bellekte sınırlamalarınız var. Ayrıca, üretici ve tüketicilerin sayısı REDIS'in performansını etkileyebilir.
Öte yandan, **Kafka** , kuyruk olarak kullanılabilen yüksek verimli, dağıtılmış bir günlüktir. Ayrıca kuyruktan gönderilen mesajlar için de kalıcılık sağlar.
**redis  ****  push tabanlı**  mesajların teslimatını destekler. Bu, Redis'e itilen her mesajın otomatik olarak tüm abonelere teslim edileceği anlamına gelir.
**Kafka  **Ancak, **  Pull-tabanlı**  Mesajların Teslimatını Destekler. Kafka'da yayınlanan mesajlar, abonelere otomatik olarak dağıtılamaz. Bunun yerine, tüketiciler bu mesajları tüketmeye hazır olduklarında mesajları ister.
**Redis  **mesaj depolamaz, mesajlar bir kerede tüm tüketicilere teslim edilir ve daha sonra kaldırılır. Ancak, **  Kafka  **Bir günlük olarak, her zaman mesajlarınız var. 7 gün **  tutma**  diyelim bir tutma politikası ayarlayarak bunu izleyebilirsiniz.

## Hangisini ne zaman kullanmalı?

### Redis
  * Ürettiğiniz tüm mesajların tüketicilere anında teslim edildiği bir yangın ve destek türünü istiyorsanız.
  ***hız**  en çok ilgileniyorsa.
  ***depolama**  önemli değilse ve sisteminizin gönderilen mesajı tutmasını istemezsiniz
  * Ele alınacak veri miktarı çok büyük değil.

### Kafka
  *İsterseniz **Güvenilirlik** .
  * Sisteminizin tüketimden sonra bile gönderilen mesajların bir kopyasını almasını istiyorsanız.
  ***hız**  büyük bir endişe değilse.
  * Ve veri boyutunuz çok büyük.

## Çözüm
Bu öğretici Kafka vs Redis Pub-Sub'da Kafka ve Redis'i araştırdık. Farklılıkları ve benzerlikleri nelerdir? Ayrıca ne zaman redis yapmanız gerektiğini ve Kafka'yı kullanmanın ne zaman iyi olduğunu öğrendik. Yaklaşan öğreticilerimizde Kafka ve derinlemesine analiz hakkında daha fazla bilgi edineceğiz.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#Ne
