---
title: "WordPress Nasıl Dockerize Edilir | Docker WordPress" 
seoTitle: "WordPress Nasıl Dockerize Edilir | Docker WordPress" 
description: "Docker & Docker kompozisyonu nedir? Bu makalede, Docker, Docker Compose'un nasıl yükleneceğini ve WordPress'in bir Docker kapsayıcısına nasıl yerleştirileceğini öğreneceğiz." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Bir kapsayıcı yazılımı bir uygulamayı, bağımlılıklarını bir araya getirir ve uygulamayı herhangi bir bilgi işlem ortamında çalıştırır. WordPress'i nasıl kullanacağınızı öğrenelim." 
url: /tr/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Bir kapsayıcı yazılımı bir uygulamayı, bağımlılıklarını bir araya getirir ve uygulamayı herhangi bir bilgi işlem ortamında çalıştırır. WordPress'i nasıl kullanacağınızı öğrenelim.

{{< figure align=center src="images/dockerwordpress.png" alt="WordPress Dockerize">}}


## Genel Bakış
Açık kaynaklı yazılım kategorisinde [bloglama][1] kategorisindeki başka bir blog yayınına hoş geldiniz. [Ücretsiz Civicrm WordPress Entegrasyonu ile Potansiyel Kaldırma][2], [Web sitenizi WordPress ve Gatsby ile nasıl oluşturulur][3] ve biraz daha fazlası gibi konularda bazı makaleler yayınladık. Ancak, bu makale açık kaynaklı bloglama platformları ve **konteyner yazılımı  **hakkında daha fazla bilgi ve ayrıntılar getirecektir. Docker & **  Docker Compose  **nasıl yükleneceği gibi bazı sıcak soruları inceleyeceğiz**   ve WordPress'i nasıl dockerize edeceğimizi öğreneceğiz.
Konteynerizasyon, sanallaştırmaya alternatif olarak yazılım geliştirmede önemli bir eğilim haline gelmiştir. Herhangi bir altyapı üzerinde tutarlı bir şekilde çalışabilmesi için yazılım kodunu ve tüm bağımlılıklarını kapsüllemeyi veya bir araya getirmeyi içerir. Konteynerizasyon, geliştiricilerin uygulamalar daha hızlı ve daha güvenli bir şekilde oluşturmasına ve dağıtmasına olanak tanır. Docker, geliştirici topluluğunda kullanılan en popüler kapsayıcı uygulamasıdır. Bu öğreticide, Docker Compose'u kullanarak WordPress'i nasıl dockerize edeceğimizi öğreneceğiz. Öyleyse, aşağıdaki noktalara başlayalım.
  *[**Docker nedir?** ][4]
  *[**Neden WordPress** ?][5]
  ***[Docker Compose nasıl yüklenir][6]** 
  ***[WordPress Dockerize][7]** 
  ***[Sonuç][8]** 

## Docker nedir?   {#liman işçisi}
Basit bir deyişle, Docker sanallaştırmayı daha hızlı ve daha hafif yapan açık kaynaklı **konteyner yazılımı** 'dır. O kadar hafif ki, bir Docker kabı sadece birkaç saniye içinde başlatılabilir. Ve düzinelerce Docker kapsayıcısını tek bir PC'ye kolayca çalıştırabilirsiniz. Geliştiriciler, kapsayıcılar kullanarak uygulamaları oluşturmak, dağıtmak ve çalıştırmak için Docker'ı kullanır. Konteynerler, bir geliştiricinin, kütüphaneler ve diğer bağımlılıklar gibi ihtiyaç duyduğu tüm parçalarla bir uygulamayı paketlemesine ve tek bir paket olarak dağıtmasına izin verir. Bunu yaparak, geliştirici uygulamanın herhangi bir altyapı üzerinde çalışacağından emin olabilir. Buna ek olarak, herhangi bir alaka düzeyinde en büyük yardım sağlamak için her zaman canlı olan büyük bir geliştirici ve destek topluluğu vardır. Docker, güçlü özellikleri ve kullanımları nedeniyle herhangi bir yazılım kuruluşunun olmazsa olmaz bir bileşeni haline gelmiştir.

## Neden WordPress'i dockerize etmeniz gerekiyor?   {#Neden}
Bu bölümde, WordPress'i Dockering'in arkasındaki ihtiyaç hakkında bilgi sahibi olacağız. WordPress, teknoloji dünyası tarafından yüksek oranda benimsenen en iyi önde gelen açık kaynak blog yazılımıdır. Ancak, WordPress'i yerel olarak çalıştırmak için Apache/Nginx, MySQL Server, PHP ve tonlarca başka bağımlılıklara ihtiyacınız vardır. Ve evreleme veya üretim ortamına konuşlandırma, bu bağımlılıkları yönetmek söz konusu olduğunda bir kabus. Bazen, geliştiricilerin ve destek mühendislerinin, zaman ve insan gücü talep ettiği için dağıtımları tekrar tekrar tekrarlamaları için bir güçlük haline gelir.
Yani, konteynerizasyon size bu konuda yardımcı olabilir. Tek ihtiyacınız olan Docker - Kurulumun kendisi saniye sürüyor ve ek yapılandırma gerekmiyor
Bir geliştirici makinesi, sahne veya canlı sunucu ve hangi işletim sisteminin ne olursa olsun, Docker her yerde aynı şekilde çalışır. Bu, bir ortamda görünen ve başka bir ortamda çoğaltılamayan hatalar aramanız gerekmeyeceği anlamına gelir.

## Docker Compose nasıl yüklenir   {#install}

## # Önkoşullar
WordPress'i Docker kapları ile oluşturulan izole edilmiş bir ortamda kolayca çalıştırmak için Docker Compose'u kullanabilirsiniz. Bu kılavuz, WordPress'i ayarlamak ve çalıştırmak için Compose'un nasıl kullanılacağını gösterir.
Docker Compose, Docker motoruna dayanır, bu nedenle Docker motoru takıldığınızdan emin olun. Mac ve Windows için Docker Desktop gibi masaüstü sistemlerinde Docker Compose, bu masaüstü yüklerinin bir parçası olarak dahil edilir. Bununla birlikte, önce Linux Systems'a, [resmi rehberleri][9] izleyerek Docker motorunu takın.

## # Linux'a besteyi yükleyin
Docker Compose'un mevcut kararlı sürümünü indirmek için bu komutu çalıştırın:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
İkili olarak yürütülebilir izinler uygulayın:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Sürüm komutunu çalıştırarak kurulumu test edin:
```
docker-compose --version
```

## # WordPress için bir DockerFile tanımlayın
Yapmamız gereken ilk şey, bir **_ dockerfile _**  'da görüntümüzün nasıl görüneceğini tanımlamaktır. Uygulamanızın kaynaklarıyla dizine eklenen bir metin dosyasıdır.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
“**/var/www/html/wordpress **”, temalar, eklentiler ve içeriklerle birlikte tam WordPress içeriği içerecektir. Deponuz yalnızca temayı veya eklentiyi içeriyorsa, ilgili klasörü ekleyin.
WordPress blogunuzu başlatan bir docker-compose.yml dosyası ve veri kalıcılığı için birim montajı ile ayrı bir MySQL örneğini oluşturun:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Şimdi, proje dizininizdeki komutu çalıştırın
```
docker-compose up -d
```
Bu, **_ docker-compose up _**  müstakil modda çalışır, gerekli Docker görüntülerini çeker ve WordPress ve veritabanı kaplarını başlatır.
Kaplar başladıktan sonra URL'yi web tarayıcısında açabilir ve uygulamanızı kullanmaya başlayabilirsiniz:
```
http://localhost:8000
```

## Sonuç   {#Conclusion}
Bu bizi bu blog yazısının sonuna getiriyor. Bu makalede, Docker'ın ne olduğunu öğrendik, **Docker Compose  **nasıl yükleneceğini öğrendik ** . Ayrıca WordPress'i Docker-Compose kullanarak nasıl öğrendiğini öğrendik. Buna ek olarak, sizi Docker'ın arkasındaki konsepte ve basit çoklu kontain uygulamalarını nasıl tanımlayabileceğinizi tanıttık. Ancak, bu açık kaynak  **kapsayıcı yazılımı**   tüm yazılım kuruluşları için önde gelen bir seçenektir. Bu nedenle, uygulamalarınız için Docker'ı tercih etmek istiyorsanız, bu makale gerçekten size yardımcı olacaktır. Aşağıdaki “Keşfet” bölümünde listelenen diğer birçok ilgili makale ve blog yazılımı vardır.
Son olarak, [Containerize.com][10] diğer açık kaynaklı ürünler üzerine makaleler yazıyor. Bu nedenle, düzenli haberler ve güncellemeler için lütfen [bloglama][1] kategorisiyle iletişim halinde olun. Dahası, bizi sosyal medya hesaplarımızda [Facebook][11], [LinkedIn][12] ve [Twitter][13] 'te takip edebilirsiniz.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [WordPress][14]
  * [Jekyll][15]
  * [Söylem][16]
  * [Hayalet][17]
  * [WordPress'i Docker Compose ile DockPress nasıl yapılır][18]
  * [Ücretsiz Civicrm WordPress Entegrasyonu ile Kurşunlarınızı Artırın][2]
  * [WordPress ve Osticket kullanarak biletleme sistemini otomatikleştirin][19]
  * [Söylem Forumu WordPress ile nasıl entegre edilir][20]
  * [İlk 7 SEO blogunu takip ederek web sitesi arama trafiğini artırın][21]
  * [Web sitenizi WordPress ve Gatsby ile nasıl oluşturursunuz][3]
  * [Daha İyi Pagspeed ve SEO için WordPress'te GZIP Sıkıştırma Nasıl Etkinleştirilir][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/tr/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
