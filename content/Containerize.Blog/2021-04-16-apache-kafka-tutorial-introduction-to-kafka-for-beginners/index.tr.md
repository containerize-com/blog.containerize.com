---
title: "Apache Kafka Eğitimi -Yeni Başlayanlar İçin Kafka'ya Giriş" 
seoTitle: "Apache Kafka Eğitimi -Yeni Başlayanlar İçin Kafka'ya Giriş" 
description: "Apache Kafka, açık kaynaklı bir dağıtılmış olay akış platformudur. Bu öğretici, Apache Kafka'nın ortaya çıkmasını anlamak için yeni başlayan bir rehberdir." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka, açık kaynaklı bir dağıtılmış olay akış platformudur. Bu öğretici size bir başlangıç ​​açısından Kafka'ya bir giriş sağlar." 
url: /tr/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka, açık kaynaklı bir dağıtılmış olay akış platformudur. Bu öğretici size yeni başlayanların bakış açısından Kafka'ya bir giriş sağlar.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka Açık Kaynak Eğitimi">}}

Son zamanlarda Kafka ve Redis Pub-Sub arasındaki farkları açıklayan “Kafka vs Redis Pub-Sub” hakkında bir makale yazdık. Bu makalede kısa süre içinde Kafka mesaj komisyoncunun kendisini açıkladık. Şimdi, bu makale size Apache Kafka Açık Kaynak Dağıtılmış Etkinlik Akış Platformu hakkında daha fazla bilgi veriyor ve Kafka Dağıtılmış Mesaj kuyruğuyla başlamak için gerekli tüm tanıtımları sunuyor. Öyleyse başlayalım.
  * [Apache Kafka'ya Giriş][1]
  * [Mesajlaşma sistemi nedir?][2]
  * [Temel terimler][3]
  * [Kurulum adımları][4]
  * [Bir konu oluştur][5]
  * [Konuya mesaj yaz][6]
  * [Konudan gelen mesajları okuyun][7]
  * [Sonuç][8]

## Apache Kafka'ya Giriş {#intro}

Apache Kafka Açık Kaynak Mesaj Aracısı LinkedIn'de başlatıldı ve daha sonra açık kaynaklı Apache projesi oldu. Kafka Mesaj Broker Yazılımı Scala ve Java'da geliştirilmiştir. Apache Kafka Broker, uygulamalar, sunucular ve işlemciler arasında veri alışverişi sağlayan bir yayınlama abone mesajlaşma sistemidir. Hızlı, ölçeklenebilir ve tasarımla dağıtılmıştır. Saniyede milyonlarca veri veya mesajla işleyebilir. Kaynak (üretici) sistemi ile hedef (tüketici) sistemi arasında bir aracı olarak çalışır. Netflix, Uber ve bu tür binlerce firma gibi kuruluşlar Apache Kafka'nın gerçek zamanlı akışını kullanıyor. Diğer mesajlaşma sistemlerine kıyasla, Kafka mesaj kuyruğu yazılımı daha iyi verim, yerleşik bölümleme, çoğaltma ve doğal hata toleransına sahiptir. Bu, büyük ölçekli mesaj işleme uygulamaları için iyi bir uyum sağlar.

## Mesajlaşma sistemi nedir? {#messaging}

Bir mesajlaşma sistemi, iki veya daha fazla kişi, cihaz vb. Arasında basit bir mesaj alışverişidir. Bir uygulamadan diğerine veri aktarımından sorumludur, böylece uygulamalar verilere odaklanabilir, ancak nasıl paylaşacağınız konusunda endişelenmez.
Bir tür mesajlaşma sistemi “noktadan noktaya mesajlaşma sistemidir”. Bu sistemde mesajlar üretici tarafından gönderildiğinde bir kuyrukta saklanır. Herhangi bir zamanda yalnızca bir tüketici mesaj tüketebilir. Ve mesaj tüketildikten sonra kuyruktan kaldırılır. Bu sistemin örneğinden biri sipariş işleme sistemidir. Sadece bir sürecin siparişi alabileceği yerler.
Başka bir mesajlaşma sistemi türü, bir gönderenin mesajı göndermesine izin veren pub-sub mesajlaşma sistemidir ve bu mesajı okuması için bir alıcıdır. Apache Kafka mesajlaşmasında, bir gönderen mesaj yayınlayan bir yapımcı olarak bilinir ve bir alıcı, bu mesajı abone olarak tüketen bir tüketici olarak bilinir. Bu sistemin bir örneği, birçok kanal yayınlayan kablolu TV'inizdir ve herkes kanal seçimine abone olabilir ve abone olan kanalları mevcut olduğunda bunları alabilir.

## Temel terimler {#terms}

En iyi mesaj kuyruğu Apache Kafka hakkında daha fazla konuşmadan önce, bazı terimleri anlamalısınız.
* **Konular** : Belirli bir kategoriye ait bir mesaj akışı konu denir.
* **Bölüm** : Konular birçok bölüm olabilir, böylece keyfi miktarda veri işleyebilirler.
* **Bölüm Ofseti** : Bölünmüş her mesajın “ofset” adı verilen benzersiz bir dizi kimliği vardır.
* **Bölüm kopyaları** : Kopyalar bir bölümün yedeklemeleridir. Veri kaybını önlemek için kullanılırlar.
* **brokerler** : Yayınlanmış verilerin korunmasından sorumludur.
* **Kafka kümesi** : Kafka’nın birden fazla broker olması Kafka kümesi denir.
* **Yapımcılar** : Mesajların yayıncıları bir veya daha fazla konuya.
* **Tüketiciler** : Brokerlerden gelen verilerin okuyucusudur. Birden fazla konuya abone olurlar ve konuyla ilgili bir mesaj olduğunda tüketirler.
* **Lider** : Düğüm, herhangi bir bölüm için tüm okuma ve yazmalardan sorumludur.
* **Takipçi** : Lider talimatlarını izleyen düğüme takipçi denir.

## Kurulum adımları {#steps}


### Adım 1 - Java kurulumunun doğrulanması
Umarım şu anda makinenize Java yüklediniz, bu nedenle aşağıdaki komutu kullanarak doğrulayın.
```
$ java -version
```
Java makinenize başarıyla kurulmuşsa, yüklü Java'nın sürümünü görebilirsiniz. Değilse, önce Java'yı yüklemelisiniz.

### Adım 2 - Zookeeper çerçeve kurulumu
Aşağıdaki bağlantıyı ziyaret edin ve Zookeeper'ın en son sürümünü indirin.
{{_LINE_46_}}
Kurulum ve yapılandırmayı bitirdikten sonra, Zookeeper'ı aşağıdaki komutla başlatabilirsiniz.
```
$ bin/zkServer.sh start
```
Ve ardından CLI'den Zookeeper'a bağlanmak için aşağıdaki komutu kullanın
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Bağlandıktan sonra böyle bir şey görmelisin
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Adım 3 - Apache Kafka Kurulumu
En son Kafka En İyi Mesaj Broker sürümünü indirin ve aşağıdaki URL'den çıkarın
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Tüm hizmetleri doğru sırayla başlatmak için aşağıdaki komutları çalıştırın:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Başka bir terminal oturumu açın ve çalıştırın:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Bir Konu Oluşturun {#create}

Mesajlarınızı veya olaylarınızı konulara yazmak için önce bir konu oluşturmalısınız. Bir konu oluşturmak için terminalinizi açın ve aşağıdaki komutu çalıştırın:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Şimdi, hava durumu hakkında bilgi yayınlayacağımız ve tüketicilerin bu mesajları tüketeceğimiz “Weather-updates” adıyla bir konu oluşturduk.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Konuya mesaj yaz {#write}

Konunuza birkaç etkinlik yazmak için konsol yapımcı istemcisini çalıştırın. Varsayılan olarak, girdiğiniz her satır konuya ayrı bir olayın yazılmasına neden olur.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Konudan Mesajlar Oku {#read}

Başka bir terminal oturumu açın ve yeni oluşturduğunuz etkinlikleri okumak için konsol tüketici istemcisini çalıştırın:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Denemekten çekinmeyin: Örneğin, ek etkinlikler yazmak için üretici terminalinize (önceki adım) geri dönün ve etkinliklerin tüketici terminalinizde nasıl göründüğünü görün.

## Çözüm {#conclusion}

Bu öğreticide Apache Kafka kullanımının temellerini öğrendik. Kafka kuyruğu hizmetini yükledik ve daha sonra yapılandırdık. Ayrıca Kafka'da konuların nasıl oluşturulacağını, konulara mesaj göndermeyi ve konulardan mesajların nasıl okunacağını öğrendik. Umarım bu makale sizin için yararlı olmuştur. Bir sonraki makalede buluşalım.
_ Ne açık kaynaklı dağıtılmış olay akış platformu kullanıyorsunuz?. Herhangi bir sorunuz var mı?, Lütfen_ [iletişim kurun][9].

## Keşfetmek
İlgili aşağıdaki bağlantıları bulabilirsiniz:
  * [En iyi ücretsiz ve açık kaynaklı mesaj kuyruğu (MQ) yazılımı][10]
  * [Kafka vs Redis Pub-Sub, bilmeniz gereken farklılıklar][11]
  * [Redis Pub/Sub'a Giriş ve Nasıl Çalışır?][12]



[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
