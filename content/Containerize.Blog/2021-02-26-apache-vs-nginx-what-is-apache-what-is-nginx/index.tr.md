---
title: "Apache vs nginx | Apache nedir? | Nginx nedir?" 
seoTitle: "Apache vs nginx | Apache nedir? | Nginx nedir?" 
description: "Bu makale Apache vs Nginx karşılaştırması ile ilgilidir. Her iki web sunucusu da açık kaynaklıdır, yapılandırılabilir ve dünya internet trafiğinin yarısından fazlasını kullanır." 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apache, süreç odaklı bir yaklaşım kullanır ve NGINX, işlem kullanıcı isteklerini işlemek için olay odaklı yaklaşım kullanır. Apache ve Nginx arasındaki farkı araştıralım." 
url: /tr/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache, süreç odaklı bir yaklaşım kullanır ve NGINX, kullanıcı isteklerini işlemek için olay odaklı yaklaşım kullanır. Apache ve Nginx arasındaki farkı araştıralım.

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs nginx">}}


## Genel Bakış
Apache ve Nginx birçok niteliği paylaşsa da, tamamen değiştirilebilir olarak kabul edilmemelidir. Her iki açık kaynak web sunucusu birbirinden farklıdır ve web uygulamalarınızın ihtiyaçlarına göre seçilmelidir. Bu makalede, ** Apache vs Nginx ** karşılaştırmasını ayrıntılı olarak tartışacağız.
  * [Apache nedir?] [1]
  * [Nginx nedir?] [2]
  * [Apache vs Nginx karşılaştırması] [3]
  * [Nginx apache'den daha mı iyi] [4]
  * [Sonuç] [5]
  * [Keşfedin] [6]

## Apache nedir? {#whatisapache}
Apache web sunucusu internetteki en popüler sunuculardan biridir ve web sitelerinin% 27'sinden fazlasını sunmaktadır. Apache, esnekliği, gücü ve yaygın destek ve ayrıntılı belgeler nedeniyle çoğunlukla geliştiricilerin ilk tercihidir. Geliştiricilerin işlevselliğini kolayca genişletmesine izin veren dinamik olarak yüklenebilir modülleri destekler.

## Nginx nedir? {#whatisnginx}
Bu makale Apache vs Nginx karşılaştırması ile ilgilidir. Her iki web sunucusu da açık kaynaklıdır, yapılandırılabilir ve dünyanın internet trafiğinin yarısından fazlasını kullanır.

## Apache vs nginx karşılaştırması {#apachevsnginx}
Bu bölümde, Apache ve Nginx'i destek, belgeler, içerik türü ve yapılandırma yapısı temelinde karşılaştıralım.

#### Mimari
Apache, iş yükünü önyükleme zamanında paylaşmak için birden fazla sunucu işlemi başlatır. Bir ebeveyn süreci ve birçok çocuk süreci vardır. Her çocuk işlemi, gelen istekleri işleyen sunucu iş parçacıkları oluşturmaktan sorumludur. Apache, istekleri kabul etmek ve ağ bağlantı noktalarını bağlamak için alt işlemler atamak için çok işleme modülü kullanır. Aksine, Nginx olay odaklı bir mimariye sahiptir. Nginx, bağlantı noktası bağlama ve yapılandırma okumasını kontrol eden bir ana işlemi vardır. Ana işlem, Nginx sunucusunun kaynakları daha verimli kullanmasına izin veren Apache'nin aksine, öngörülebilir bir işlem modeline göre alt süreçler oluşturur. Her yeni istek için Nginx bir olay başlatır ve yalnızca küçük bir işlem belleği alan bir dosya tanımlayıcısı oluşturur. Bu, Nginx'i Apache'den daha ölçeklenebilir hale getirir. Apache, her bağlantı için çok daha fazla işlem belleği tüketir.

#### Modüller
Hem Apache hem de Nginx, temel işlevselliğini genişletmek veya değiştirmek için modüllere sahiptir. Modüller için uygulama hem Apache hem de Nginx için farklıdır ve temel fark modüllerin yüklenmesidir. Apache durumunda, modüller sadece onlara ihtiyaç duyulduğunda dinamik olarak yüklenir. Aksine, Nginx modülleri çekirdeğe entegre edilir ve ihtiyaç duymasanız bile önyüklemeye yüklenir. Bu anlamda Apache, geliştiriciler için Nginx'e kıyasla daha özelleştirilebilir bir platformdur. Bu, esneklik söz konusu olduğunda kullanıcılar için bir sınırlamadır, ancak olumlu notta, dinamik modüller güvenlik endişeleri yaratabileceğinden daha iyi güvenlik anlamına gelir.

#### Destek ve Belgeler
Apache, destek ve belgeler temelinde karşılaştırırsak, burada çok uzun süredir piyasada olduğu için açık kazanan. Apache sunucusu için geniş bir mevcut belge kütüphanesi vardır. Nispeten, Nginx de yüksek performans ve kaynak kullanımı nedeniyle popüler hale geliyor ve bu nedenle destek ve belgeleri hızla büyüyor.

#### Statik ve Dinamik İçerik
Apache hem statik hem de dinamik içeriğe kendi başına hizmet vermektedir. Öte yandan, Nginx dinamik içerik sunma yeteneğine sahip değildir, böylece bu istekleri üçüncü taraf yazılımlara aktarır. Apache sunucuları, geleneksel dosya tabanlı yöntemlerini kullanarak statik içeriği kullanır.

#### Dosya vs URI tabanlı yorum
Apache Server, bir isteği dosya sisteminde veya URI konumu olarak fiziksel bir kaynak olarak yorumlama olanağına sahiptir. Öte yandan, Nginx hem bir web sunucusu hem de proxy sunucusu olarak çalışmak üzere tasarlanmıştır. Bu iki rol için gereken mimari nedeniyle, öncelikle URI'lerle çalışır ve gerektiğinde dosya sistemine dönüşür. Nginx bir dosya sistemi dizin için yapılandırma belirtmez ve bunun yerine Uri'nin kendisini ayrıştırır.

#### Yapılandırma
Apache, geliştiricilerin .htaccess olarak adlandırılan dosyayı kullanarak dizin düzeyinde yapılandırma ayarlamalarını sağlar. Ancak Nginx durumunda, dizin düzeyinde yapılandırmayı ayarlamak için böyle bir mekanizma yoktur. Apache, konfigürasyonlar açısından Nginx'ten daha fazla esneklik sağlar.

## Nginx Apache'den daha mı iyi? {#nginx}
Nginx, statik içerik sunmak için Apache'den daha hızlıdır. Web uygulamanız çok fazla statik içerik sunuyorsa, evet Nginx Apache'den daha iyi ve daha hızlıdır. Dinamik içerik söz konusu olduğunda, her iki web sunucusu da neredeyse aynı performansı verir, bu nedenle burada net bir kazanan yoktur. Hem Apache hem de Nginx neredeyse tüm işletim sistemlerinde çalışır, ancak Nginx’in Windows'daki performansı Apache’y'ye kıyasla iyi değil. İşletim sisteminiz Unix benzeri bir sistemse ve web uygulamanız performans açısından kritik ise evet, Nginx Apache'den daha iyidir.

## Sonuç {#Conclusion}
Hem Apache hem de Nginx kendi yollarıyla yeteneklidir. Apache vs Nginx karşılaştırması, Apache nedir, Nginx'i ayrıntılı olarak ve Apache ve Nginx arasındaki farkı tartıştık. Bu en popüler iki web sunucusundan birini seçmek tamamen web uygulamalarınızın gereksinimlerine bağlıdır. Seçim, bir web sunucusunun performans, kaynak kullanımı, hız, ölçeklenebilirlik ve desteği ile beklentilerinize bağlıdır. Her ikisinin de kendi faydaları var. Tüm web sunucusu tek beden yoktur, bu nedenle hedeflerinize ve beklentilerinize en uygun çözümü kullanın.
Son olarak, [Containerize.com] [7] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [açık kaynak web sunucuları] [8] kategorisiyle iletişim halinde olun. Dahası, bizi sosyal medya hesaplarımızda [Facebook] [9], [LinkedIn] [10] ve [Twitter] [11] 'te takip edebilirsiniz.

## Keşfedin {#Explore}
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [2021'de Top 5 Açık Kaynak Web Sunucusu Çözümü Yığınları] [12]
  * [Windows'ta Localhost olarak XAMP ve PHPMyAdmin kurulum] [13]
  * [XAMPP | Ücretsiz ve açık kaynaklı web sunucusu çözümü yığını] [14]
  * [Nginx | Hafif ve Yüksek Performanslı Web Sunucusu] [15]
  * [Ubuntu 18.04'te Lemp Yığın için Kurulum Eğitimi] [16]
[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
