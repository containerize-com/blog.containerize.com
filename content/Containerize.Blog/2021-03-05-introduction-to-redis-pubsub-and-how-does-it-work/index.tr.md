---
title: "Redis Pub/Sub'a Giriş ve Nasıl Çalışır?" 
seoTitle: "Redis Pub/Sub'a Giriş ve Nasıl Çalışır?" 
description: "Redis Pub/Sub, eşzamansız olayları yayınlamak ve abone olmak için bağımsız uygulamalar için esnek, güvenilir, gerçek zamanlı bir mesajlaşma hizmetidir." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/Sub, yayıncıların bir kanala/konuya yayınladığı ve birkaç istemcinin bu kanala/konuya abone olabileceği gerçek zamanlı bir mesajlaşma sistemi uygular." 
url: /tr/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub/Sub, yayıncıların bir kanala/konuya yayınladığı ve birkaç istemcinin bu kanala/konuya abone olabileceği gerçek zamanlı bir mesajlaşma sistemi uygular.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

Son öğreticimizde “** [REDIS bellek içi veritabanı için yeni başlayanlar rehberi][1] **” Redis'i bellek içi bir veritabanı olarak öğrendik. Ve bunun NoSQL veritabanlarıyla nasıl rekabet ettiği. Ayrıca Redis'in nerede kullanılacağını ve kullanımının nerede optimal olmadığını öğrendik. Şimdi bu bilgi tabanının üstüne binmek, bu öğreticide Redis Pub/Sub, nasıl işe yarıyor ve Redis Publish/Abone Sisteminin en iyi kullanımı hakkında bilgi edineceğiz. Başlayalım.
  *** [Publish/Abone Olası Desen nedir?][2] **
  *** [Pub/alt nasıl çalışıyor?][3] **
  *** [Pub/sub ne zaman kullanmalısınız?][4] **
  *** [Redis pub/sub nasıl kullanılır?][5] **
  *** [Sonuç][6] **

## Publish/Abone Olma Deseni nedir? {#Ne}
Yayınlayın/Abone Olma veya Kısa Pub/Sub, mesajların gönderen ve alıcısının bu mesajları doğrudan değiştirmediği bir mesajlaşma modelidir. Aksine, mesajın göndereni bunu bir kanala/konuya yayınlar. Ve bu mesajları almak isteyenler kanala/konuya abone olacaktır. Yani, bu daha çok teknik bir açıklamaydı. Günlük yaşamımızda, YouTube, Twitter, Facebook veya Instagram gibi sosyal medya platformlarını kullanırken bu yayınlama-abonelik modelini oldukça sık kullanıyoruz. İçerik üreticilerinin içeriği ürettiği ve ilgilenenlerin içeriğini takip edeceği / abone olacağı yerlerde. Yani Pub/Alt Desen'in yazılım mimarisinde de yaptığı şey budur.

## Pub/alt nasıl çalışır? {#Nasıl}
Yazılım geliştirmede yeniden kullanılabilirliğe vurgu çok yüksektir. Ve tüm tasarım desenleri, yeniden kullanılabilir bileşenler veya modüller oluşturmaya dayanmaktadır. Bu nedenle, pub/sub'u anlamak için önce bu fikrin nereden geldiğine ve geliştiricilerin onu nasıl bir model olarak bulduğuna bakmanız gerekir.
Yazılım mimarileri geliştikçe ve daha modül tabanlı hale geldikçe, modüller ve bileşenler arasında daha fazla iletişim / mesajlaşma arttı. Bir modülü bir miktar giriş alan ve bazı çıkışlar sağlayan bir işleme birimi olarak düşünün. Ve her giriş aslında işleme biriminin çıktı olarak işlediği ve başka bir mesaj oluşturduğu bir mesajdır. Başka bir modüle girdi olacak. Dolayısıyla, mesajlaşmanın bu artışı özel dikkat gerektiriyordu, ölçeklenebilir uygulamalara sahip olmak için modüllerin ve bileşenlerin bağımlılık olmadan bağımsız olarak çalışabileceği bir gereklilik vardı. Bu nedenle, yayın/abone kalıbı geldi.
Birçok pub/alt sistemde, yayıncılar bir aracı mesaj brokerine veya etkinlik veri yoluna mesaj gönderir ve aboneler o broker ile abonelikleri kaydeder ve komisyoncunun filtrelemeyi gerçekleştirmesine izin verir. Broker normalde yayıncılardan abonelere mesaj göndermek için bir mağaza ve ileri işlevi gerçekleştirir. Ayrıca, broker yönlendirmeden önce bir kuyruktaki mesajları önceliklendirebilir.

## ** Pub/sub ne zaman kullanmalısınız? ** {#new}
Sohbet uygulamaları, pub/alt modelinin klasik bir kullanım durumudur. Bir sohbet uygulamasında, katılımcılar belirlenmiş bir pub/alt konuya sahip sohbet odalarına abone olabilirler. Bir kullanıcı sohbet odasına mesaj gönderdiğinde, sohbet uygulaması örneği bu sohbet odasının konusundaki mesajı yayınlar. Konunun aboneleri mesajı alır.
Mesaj kuyruğu hizmeti / mesaj kuyruğu veya toplu işleme uygulamaları da pub / alt modelini kullanabilir. Belirli bir görevi yapmak isteyen herkesin mesajı bir kuyruğa ve bu kuyruğa abone olan işleme birimlerinin işini işlemek için mesajı alacağı yerlerde yayınlayacaklardır.
Pub/alt modelin bazı avantajlarını tartışalım
  * Sistem bileşenleri arasındaki gevşek bağlantı
  * Sistem çapında iş akışının daha iyi görünümü
  * Daha iyi ve daha hızlı entegrasyonu sağlar
  * Daha yumuşak ölçeklenebilirlik sağlar
  * Garantili tutarlı güvenilirlik
  * Esneklik oluşturur
  * Yazılım modülerleştirmesi
  * Dil agnostik yazılım geliştirme
  * İş mantıkındaki netlik
  * Duyarlılığı artırır

## Redis Pub/Sub {#redis-pubsub} nasıl kullanılır
Redis kurulumu için [son öğreticime [1] başvurabilirsiniz. Bu örnek, yayıncının ve abone kavramının nasıl çalıştığını açıklar. Aşağıdaki örnekte, bir müşteri 'Redischat' adlı bir kanala abone olur.
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Şimdi, iki istemci mesajları 'Redischat' adlı aynı kanalda yayınlıyor ve yukarıda abone olan istemci mesaj alıyor.
```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great" 
1) "message" 
2) "redisChat" 
3) "Learn redis" 

```

## Sonuç {#Conclusion}
Bu öğreticide, yayınlama/abone tasarım desenini öğrendik. Ve Redis Pub/Sub'un nasıl çalıştığını araştırdı. Ayrıca Redis Pub/Sub, gerçek zamanlı mesajlaşma en iyi kullanım durumları neler olduğunu araştırdık. Yaklaşan öğreticimde, Redis'i daha fazla keşfedeceğiz ve gerçek zamanlı bir sohbet uygulaması oluşturmak için Redis Pub/Sub Node.js ile nasıl kullanabileceğimizi açıklayacağız.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
