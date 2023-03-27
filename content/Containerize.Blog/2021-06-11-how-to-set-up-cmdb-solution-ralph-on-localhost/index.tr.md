---
title: "Localhost'ta CMDB Çözümü Ralph nasıl kurulur" 
seoTitle: "Localhost'ta CMDB Çözümü Ralph nasıl kurulur" 
description: "Bu öğretici Ralph'i Localhost'ta kurmakla ilgilidir. Ralph, varlıkları ve yapılandırmaları izlemek için özellikler sağlayan ücretsiz bir CMDB çözümüdür." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "BT varlık yönetimi çözümü operasyonel maliyetleri azaltır ve verimliliği artırır. Bu makale, yerel makinenizde CMDB yazılımı Ralph'ın nasıl kurulacağı ile ilgilidir." 
url: /tr/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## BT varlık yönetimi çözümü operasyonel maliyetleri azaltır ve verimliliği artırır. Bu makale, yerel makinenizde CMDB yazılımı Ralph'ın nasıl kurulacağı ile ilgilidir.

{{< figure align=center src="images/ralph.png" alt="CMDB çözümü">}}


##  **Genel Bakış**  
Mevcut zaman noktasında, kuruluşlar büyük BT altyapısı kullanarak teknolojinin hızını karşılamak için gelişmektedir. Daha sonra, bu tür büyük ortamları yönetmek zor bir işten daha az değildir. Bu tür kritik görevleri yerine getirmek için insan gücü ve teknoloji gücü gerektirir. Bazen, yazıcılar, masaüstü bilgisayarlar, tarayıcılar, telefonlar ve diğer BT aksesuarlarını içeren karmaşık sistem ağlarını işlemek için süreçler ve prosedürler formüle etmek bir güçlük haline gelir. Benzer şekilde, bu düğümlerin yapılandırmaları da önemlidir, çünkü ağdaki herhangi bir makinenin kesinti süresi yüksektir. Bu nedenle, bu konfigürasyonlar üzerinde tutarlı bir kontrol olmalıdır.
Ancak, varlıkların izini ve kaydını tutmak için birçok açık kaynak ve ücretsiz yazılım vardır. Bu yazılım yapılandırma yönetimi veritabanı yazılımı (CMDB) olarak bilinir. Son zamanlarda, [Containerize.com][1] daha iyi varlıklar ve yapılandırma yönetimi için birçok özellik sağlayan bir CMDB çözümü [Ralph][2] yayınladı. Bu blog yazısında, aşağıdaki noktaları ele alarak Ralph'i keşfedeceğiz.
*  **[CMDB Yazılım Varlık Yönetimi Ralph'ın Kısa Giriş][3]**  
*  **[Ralph'ın özellikleri][4]**  
*  **[Ralph Localhost'ta nasıl kurulur?][5]**  
*  **[Sonuç][6]**  

## CMDB Yazılım Varlık Yönetimi Ralph'ın Kısa Giriş {#intro}

Ralph, ücretsiz bir açık kaynak BT varlık yönetimi çözümüdür. Platformlar arasıdır ve kendi kendine barınma yetenekleriyle birlikte gelir. Gerçek zamanlı varlık izlemenin tam bir ekosistemi vardır. Bu nedenle, kullanıcılar raporlama için analiz yapabilir. Kullanıcıların yaşam döngüsü hakkındaki varlıkların ayrıntılarını kaydetmelerini sağlar. Ayrıca, bu açık kaynaklı dijital varlık yönetimi yazılımı, veri merkezi varlıkları hakkında bilgi depolamak için alan sağlar. Öte yandan, bu CMDB çözümü yazılım, lisans, sertifikalar ve diğer sözleşmeleri yönetme için de destek sağlar. Ralph sadece varlık yönetimini desteklemekle kalmaz, aynı zamanda bu varlıklar üzerinde işlem yapmak için hükümler de sağlar. Ancak, eylemler bir ana bilgisayar dağıtımı, faturalar oluşturma, alan izleme veya envanter yönetimi ile ilgilidir.
Bu BT varlık yönetimi çözümü, dinlendirici bir arayüz ile birlikte gelir. Geliştiriciler, bu açık kaynaklı ücretsiz araç tarafından maruz kalan API uç noktalarını kullanarak birçok üçüncü taraf uygulamasını entegre edebilir. Ayrıca Ralph, HTML, CSS ve JavaScript girişiyle birlikte Python'da yazılmıştır. Bu nedenle, geliştirme ve dağıtım konusunda kapsamlı belgeler mevcuttur. Bu stok yönetimi çözümünün kaynak kodu [GitHub][7] 'de mevcuttur.

## Ralph'ın özellikleri {#features}

Ralph birçok özellik sunar. Ancak, aşağıdaki önemli özelliklerden bazılarından bahsedeceğiz.
 **Genişletilebilir** : Bu açık kaynaklı dijital varlık yönetimi yazılımı oldukça genişletilebilir. Geliştiriciler, ihtiyaçlarına göre tesislerde veya bulutta dağıtabilirler.
 **Veri merkezleri için destek:**  Ralph ayrıca veri ambarları, veri merkezi odaları, sunucular ve raflar için destek sunar. Kullanıcılar tüm bileşenleri, ağlarını ve yapılandırmalarını takip edebilir.
 **REST API** : Bu ücretsiz CMDB yazılımı oldukça özelleştirilebilir. Aslında, üçüncü taraf entegrasyonlar için bir dinlenme API'sı sağlar. Geliştiriciler bunu gereksinimlerine göre genişletebilir.
 **Sezgisel Kullanıcı Arayüzü:**  Bu CMDB çözümünde kullanıcıların kolayca gezinebileceği mantıksal bir kullanıcı arayüzü mevcuttur. Ayrıca, yönetici gösterge paneli, verilerin gerçek zamanlı olarak geldiğini gösteren çeşitli widget'lar sağlar.
 **Komut satırı arabirimi** : Ralph, ana bilgisayarların dağıtımına ilişkin MAC adreslerini keşfetmek için bir tesis sağlayan bir komut satırı arabirimi bulur.
 **Fiziksel olmayan varlıklar için destek** : Bu ekipman yönetimi çözümü sadece fiziksel varlıklara destek sağlamakla kalmaz, aynı zamanda alanlar, yazılım ve lisanslar gibi fiziksel olmayan kaynakları da yönetir.

## Localhost'ta Ralph nasıl kurulur? {#setup}

Bu bölümde, yerel makinedeki kaynak yönetimi yazılımı Ralph kurulum sürecinden geçeceğiz. Kurulmak ve kullanmak oldukça kolaydır.
Bir sonraki bölüme geçmeden önce, aşağıdaki ön koşulları yüklediğinizden emin olun.
  * [Docker-compose][8]
  * [Docker][9]
Açık kaynaklı yazılımların çoğu, çeşitli platformlarda dağıtımlar için Docker görüntüleri sunar. Geliştiricilere kolaylık verir ve geliştirme ve dağıtım sürecini hızlandırır.
Önkoşullar kurulduktan sonra Docker'ı açın. Şimdi, terminali açın ve boş bir dizin yapmak için aşağıdaki komutu çalıştırın:
```
mkdir ralph<br>cd ralph
```
Bundan sonra, 'Docker-Compose.yml' adlı yeni bir dosya yapın ve aşağıdaki verilerle doldurun.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Şimdi, dosyayı kaydedin ve yapıyı yapmak için aşağıdaki komutu çalıştırın:
```
docker-compose build

```
Başarılı bir yapı üzerine, veritabanı için aşağıdaki komutu çalıştırın:
```
docker-compose run –rm web /root/init.sh

```
Her şey yolunda giderse, Docker'ın kabını döndürmek için aşağıdaki komutu çalıştırın:
```
docker-compose up -d
```
Bu komutu çalıştırdıktan sonra, Docker kapsayıcıları aşağıdaki resimde gösterildiği gibi çalışır durumda olacak:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="CMDB çözümü">}}

Son olarak, tarayıcıyı açın ve uygulamaya bu adresten erişin http://127.0.0.1.
Giriş sayfasını aşağıdaki resimde gösterildiği gibi gösterecektir:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="CMDB çözümü">}}


## Çözüm {#Çözüm}

Bu CMDB öğretici blog yayınından geçtikten sonra, varlık yönetiminin iyi bir CMDB çözümü olmadan imkansız olduğu açıktır. Kaynak yönetimi yazılımı, varlıkların, yapılandırmaların ve ilişkilerinin yönetilmesinde ve izlenmesinde özel rollere sahiptir. Dijital veya fiziksel varlıklarda zar zor yapılmayan değişiklikleri izlemek için hükümler vardır. Bu ücretsiz araçların ayarlanması, kullanılması ve ayrıntılı dokümantasyon ve rehberlik ile birlikte gelmesi kolaydır. Son olarak, [  **Containerize.com** ][1] diğer açık kaynak ürünlerine makaleler yazmayı amaçlamaktadır. Bu nedenle, en son güncellemeler için lütfen bu [][10] **[CMDB yazılımı][11]**  kategorisiyle iletişim halinde olun.

## Keşfetmek
*  **[CMDB yazılımı][11]**  
*  **[Ralph][2]**  
* [  **Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin**  ][12]
*  **[2021'de bakmak için yazılım geliştirme eğilimleri][13]**  



[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
