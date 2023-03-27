---
title: "REDIS bellek içi veritabanı için yeni başlayanlar rehberi" 
seoTitle: "REDIS bellek içi veritabanı için yeni başlayanlar rehberi" 
description: "REDIS-Memory veritabanı açık kaynaklı, anahtar değeri bir mağazadır. Buna NoSQL veritabanı da denir. Bu Redis öğreticisi, Redis'in temel kavramları hakkında size rehberlik eder." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Bu eğitim, REDIS bellek içi veritabanını öğrenmenize yardımcı olur. Açık kaynaklıdır ve aynı zamanda ilişkisel olmayan bir veritabanı olan bir anahtar değer mağazası olarak da adlandırılır." 
url: /tr/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Bu eğitim, REDIS bellek içi veritabanını öğrenmenize yardımcı olur. Açık kaynaklıdır ve aynı zamanda ilişkisel olmayan bir veritabanı olan bir anahtar değer mağazası olarak da adlandırılır.

{{< figure align=center src="images/redis-in-memory-database.png" alt="Bellek içi veritabanı redis">}}

 **Redis** aslında “ **re** Mote **di** ctionary** s**erver” anlamına gelir. Veritabanı Redis, açık kaynaklı, gelişmiş bir anahtar değeri mağazasıdır. Birkaç veri türünü destekler: dizeler, karmalar, listeler, kümeler ve sıralı kümeler. Bu nedenle genellikle bir veri yapısı sunucusu olarak adlandırılır. Redis C'de yazılmıştır. Bu Redis öğreticisi, REDIS bellek içi veritabanı kavramlarının iyi bir şekilde anlaşılmasını sağlar.
*  **[NoSQL veritabanı nedir][1]**  
*  **[Redis NoSQL veritabanı mı?][2]**  
*  **[Redis ne zaman kullanılır?][3]**  
*  **[Redis ve diğer anahtar değer mağazaları][4]**  
*  **[Ubuntu'ya Redis'i yükleyin][5]**  
*  **[Sonuç][6]**  

## NoSQL veritabanı nedir {#nosql}

NoSQL veritabanları çok popüler hale geldi. Büyük şirketler yüzlerce petabayt veri depolamak ve saniyede milyonlarca sorgu yürütmek için onlara güveniyor. Ancak NoSQL veritabanı nedir? Nasıl işe yarıyor ve neden geleneksel, ilişkisel veritabanlarından çok daha iyi ölçekleniyor? MySQL, MariaDB, SQL Server gibi ilişkisel veritabanlarıyla sorunu hızlı bir şekilde açıklayarak başlayalım.
İlişkisel veritabanları, ilişkisel verileri mümkün olduğunca verimli bir şekilde saklamak için oluşturulmuştur. Mantıksal olarak birbirine bağlanan müşteriler, siparişler ve ürünler için bir masanız olabilir. Bu sıkı organizasyon verilerinizi yönetmek için mükemmeldir, ancak düşük ölçeklenebilirlik maliyeti ile birlikte gelir. Bu ilişkileri sürdürmek zorundalar ve bu çok fazla bellek ve hesaplama gücü gerektiren yoğun bir süreç.
Oysa NoSQL veritabanları hem dikey hem de yatay olarak ölçeklenebilir. Bunu bir binayla karşılaştırabilirsiniz, dikey olarak ölçeklendirme, mevcut bir binaya daha fazla kat eklemek anlamına gelirken, yatay ölçeklendirme daha fazla bina eklemek anlamına gelir. Şema modifikasyonu ilişkisel veritabanlarındaki en büyük zorluklardan biridir. NoSQL veritabanları, büyük miktarda veri ve yüksek kullanıcı yükleri ile kolayca ölçeklendirilen sabit bir şema gerektirmez.

## Redis NoSQL veritabanı mı? {#isnosql}

Bu, İnternet'teki geliştirici topluluğunda sorulan en popüler sorulardan biridir. Basit cevap evet. Redis, açık kaynaklı bir bellek içi veri yapısı mağazasıdır.
Aslında 4 farklı NOSQL veritabanı türü vardır: bunlar: belge veritabanları, anahtar değeri mağazaları, geniş sütunlu mağazalar ve grafik mağazaları. Bu nedenle, Sunucu REDIS Bellek İçi Veritabanı, NOSQL veritabanı kategorisine girer.

## Redis ne zaman kullanılır?  {#when}

Her teknolojinin esası ve demeritleri vardır. Yani, veritabanlarında çok sayıda seçenek mevcuttur. Belirli bir teknolojiyi ne zaman ve ne zaman kullanmayacağınızı anlamak önemli hale gelir. Her zaman iş için doğru aracı seçin.
Kararlı, öngörülebilir ve ilişkisel veriler için ilişkisel bir veritabanı seçin. Geçici, son derece dinamik veriler için NoSQL veritabanı seçin. Veritabanı için şema, ilişkisel veritabanlarındaki en büyük zorluklardan biridir ve büyük veritabanı ilişkisel olarak sonsuza dek sürebilir.
Sık sık değişen son derece dinamik verileriniz varsa ve karmaşık sorgular yapmak zorunda değilseniz, verileri anahtar değer çiftleri olarak saklamak istiyorsanız, REDIS potansiyel olarak iyi bir seçim olabilir. Range sorguları, normal ifade aramaları, dizin ve mapReduce gerçekleştirmenizi sağlayan daha öne çıkan daha özellikli bir belge odaklı veritabanına ihtiyacınız varsa, MongoDB, couchdb veya benzeri kontrol etmelisiniz.
Bazı örnek kullanım durumları REDIS bellek içi veritabanı aşağıdaki gibidir:
*  **Access Logger**  : Çok sayıda etkinliği hızlı bir şekilde kaydetmeniz gerektiğinde, Redis iyi bir çözümdür.
*  **Sayaçları Bakım**  : Farklı sayıları korumak için REDIS'i kullanabilirsiniz, ör. Sayaçları İndir
*  **Kullanıcının Varlığı**  : Hız nedeniyle, kullanıcının “çevrimiçi / çevrimdışı” durumunu depolamak için kullanabilirsiniz.
*  **Kuyruklar**  : Arka plan işlerini işlemek için geçici kuyrukları korumak için REDIS'i kullanabilirsiniz.

## Redis vs diğer anahtar değer mağazaları {#other}

REDIS-Commory veritabanı çok hızlıdır ve saniyede yaklaşık 110000 set gerçekleştirebilir, saniyede yaklaşık 81000 alır. Birkaç veri türünü destekler: dizeler, karmalar, listeler, kümeler ve sıralı kümeler. Redis, asit uyumlu olmasına izin veren tek iş parçacıklıdır (atomiklik, tutarlılık, izolasyon ve dayanıklılık). Diğer NoSQL veritabanları genellikle asit uyumluluğu sağlamaz veya kısmen sağlarlar.

## Redis'i ubuntu'ya yükle {#install}

REDIS'i Ubuntu'ya yüklemek için terminale gidin ve aşağıdaki komutları yazın
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
Aşağıdaki komut Redis Server'ı başlatacak
```
$ redis-server
```
Redis sunucusunun çalışıp çalışmadığını doğrulamak için  **Redis-Cli**  komutunu ona bağlamak için kullanabilirsiniz.
```
$ redis-cli 
```
Bu komut size aşağıdaki çıktıyı verecektir, yani sunucunun çalıştığı ve şimdi bağlı olduğunuz anlamına gelir.
```
redis 127.0.0.1:6379>
```
Şimdi aşağıdaki  **ping** komutunu yazın, sunucudan **pong**  olarak bir yanıt alırsınız.
```
redis 127.0.0.1:6379> ping
PONG
```

## Çözüm {#conclusion}

Bu Redis öğreticisinde Redis-Commory veritabanını öğrendik. İlişkisel ve ilişkisel olmayan (NoSQL) veritabanları arasındaki temel farkı araştırdık. Ayrıca, Redis'i ne zaman kullanmalıyız ve en iyi kullanım durumlarını ne kullanmalıyız. Bu öğretici, devam eden bir eğitim dizisinin bir parçasıdır. Yaklaşan makalelerde, Redis’in özel kullanım durumlarını daha fazla keşfedeceğiz.



 [1]: #nosql
 [2]: #isnosql
 [3]: #when
 [4]: #other
 [5]: #install
 [6]: #conclusion
