---
title: "Lighttpd | Açık Kaynak Web Sunucusu Nasıl Kurulur ve Yapılandırılır '" 
seoTitle: "Lighttpd | Açık Kaynak Web Sunucusunu Nasıl Kurulur ve Yapılandırma" 
description: "Açık kaynaklı web sunucusunu nasıl ayarlayacağınızı ve yapılandırmayı öğrenmek için bu makaleyi izleyin. LightTPD, sağlam CPU yük kontrolü ile birlikte gelen uyumlu bir web sunucusudur." 
date: Wed, 16 Dec 2020 12:53:41 +0000
author: bilalahmed
summary: "Güvenli, hafif ve açık kaynaklı bir web sunucusu yapılandırın. LightTPD, kurumsal düzeyde ücretsiz bir web sunucusudur ve yüksek performanslı web siteleri için en uygun." 
url: /tr/lighttpd-how-to-setup-configure-open-source-web-server/
categories: ['Web Server Solution Stack']
---

## Güvenli, hafif ve açık kaynaklı bir web sunucusunu yapılandırın. LightTPD, kurumsal düzeyde ücretsiz bir web sunucusudur ve yüksek performanslı web siteleri için en uygun.

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Websites.png" alt="açık kaynaklı web sunucusu">}}

[Web Server Çözümü Yığın][1] kategorisindeki başka bir blog yayınına hoş geldiniz. [[Setup XAMPP ve PhpmyAdmin Windows'ta Localhost olarak][2]][3], [2021'de Top 5 Açık Kaynak Web Server Çözümü Yığınları][4] ve diğerleri gibi birçok makale yayınladık. Bu makaleler, ayrıntılı kılavuz makalelerle birlikte çeşitli açık kaynaklı web sunucularının kurulum süreçlerini göstermiştir. Aslında, 90'lı yıllarda bir web sunucusu tanıtıldı ve o zamandan beri dijital dünyada en popülerlik kazandı. İnternet veya intranet üzerinden içerik sunmaya bağlı birçok faktör vardır. Bununla birlikte, dijital endüstrinin büyük bir kısmı, web sunucusu çözümlerini sürdüren şirketlere veya topluluklara bağlıdır. Bu nedenle, sağlamlık, güvenlik, güvenilirlik, depolama, veri optimizasyonu ve diğer bazı faktörler gibi faktörler, işletme düzeyinde bir dijital sistemin ana sütunlarıdır.
Buna ek olarak, Open Source topluluğu, kurumsal sektörün iş web sitelerine ve yazılıma ev sahipliği yapmak için kendi web sunucularını oluşturmasını sağlamak için birçok açık kaynak web sunucusu ve web proxy sunucusu geliştirmiştir. LightTPD Web, özellikle Linux makineleri için tasarlanmış ücretsiz ve açık kaynaklı bir web sunucusu çözüm yığınıdır. Bu blog yazısında, aşağıdaki noktayı ele alarak LightTPD'den geçeceğiz.
  * [LightTPD nedir?][5]
  * [LightTPD'nin faydaları][6]
  * [LightTPD nasıl yapılandırılır?][7]
  * [Sonuç][8]

## LightTPD nedir? {#what}

Apache ve Nginx gibi diğer web sunucularıyla karşılaştırıldığında, LightTPD web sunucusu küçük bir bellek ayak izi vardır, bu nedenle CPU yükünün etkili yönetimini sağlar. Bu hafif web sunucusu, FastCGI, SCGI, Auth, Output-Pression ve URL-REWRITY, vb. Dahil gelişmiş özellik kümeleri sağlar. LightTPD’nin FastCGI'si PHP'yi destekleyecek şekilde yapılandırılabilir. PHP dışında Python, Perl, Ruby ve daha fazlası dahil olmak üzere diğer programlama dillerini de destekler.
Birçok açık kaynaklı web sunucusu ve web proxy sunucuları vardır, ancak LightTPD yaygın olarak kullanılan listenin üstünde. Bu web sunucusu çözümünün ayarlanması çok kolaydır ve Ubuntu 18.04 gibi basit gereksinimler gerektirir. Ayrıca, bu açık kaynak çözümü dağıtmak isteyenler bu [bağlantı][9] 'dan en son sürümü indirebilirler. Her şeyden önce, Python, Ruby, Perl ve daha fazlası gibi PHP dışında birçok dili desteklemektedir. Ayrıca, geliştirme ve dağıtım ile ilgili tüm belgeler mevcuttur. Bu nedenle, geliştiriciler kaynak kodunu [GitHub][10] 'da bulabilirler.

## LightPD'nin faydaları {#benefits}

Bu bölümde, bu açık kaynaklı web sunucusunun sunduğu faydaları ve hükmü ele alacağız. Bu nedenle, hızlı, verimli ve güvenli bir web sunucusu arıyorsanız, LightTPD web sunucusu sizin için en iyi seçimdir. Çok fazla bellek ve CPU kullanımı gerektirmez. Bu da hız ve yüksek performansa ihtiyaç duyan herhangi bir proje için en iyilerden biri yapar. LightTPD, tek bir sunucuda paralel olarak 10000'e kadar bağlantıyı işleyebilir. LightTPD, hız veya performans sorunları olan her sunucu için mükemmel bir çözümdür. Bu ücretsiz çözüm uygun maliyetli ve kaynak tasarrufludur.
Ayrıca, bu web sunucusu çözümü Windows, Linux, Solaris ve MacOS gibi neredeyse tüm popüler platformlar için destek sunar. Benzer şekilde, LightTPD gömülü sistemler için çok büyüktür ve sınırlı kaynaklara sahip birden fazla kullanıcıya statik ve dinamik içerik sunma yeteneğine sahiptir. Güvenliği, hızı, uyumluluğu ve esnekliği ile tanınan LightTPD, bir web sunucusunun verimliliğini hızla yeniden tanımlıyor.
LightTPD aşağıdaki önemli avantajları sağlar:
  * Http/2 desteği
  * FastCGI, SCGI, CGI arayüzleri için destek
  * Tls ocsp zımba
  * Mod_proxy, arka uçlara HTTP/1.1 istekleri yapar (HTTP/1.0'dan değişiklik)
  * Chroot ve Mod_rewrite kullanma desteği

## LightTPD nasıl yapılandırılır? {#configure}

Bu blog yazısının bu bölümünde, LightTPD'yi yapılandırma adımlarını araştırıyoruz. LightTPD'yi Ubuntu'ya kurmak çok basit ve anlaşılır. Sadece aşağıdaki komutu kullanın ve gitmekte fayda var
```
$ sudo apt install lighttpd
```
LightTPD'yi doğrudan kaynaktan da yükleyebilirsiniz. Git'ten yüklemek için bu komutları kullanın
```
git clone https://git.lighttpd.net/lighttpd/lighttpd1.4.git
cd lighttpd1.4
./autogen.sh
```
SVN'den yüklemek için bu komutları kullanın
```
svn checkout https://github.com/lighttpd/lighttpd1.4/trunk lighttpd1.4
```
Güncellemeleri almak için bu komutu kullanın
```
svn update
```
Bağımlılıkları yüklemek için bu komutu çalıştırın
```
apt-get build-dep lighttpd
```
Bundan sonra, yapılandırma komutunu aşağıdaki gibi kullanın
```
./configure --help
```
Make komutunu kullanarak inşa et
```
make
```
Başarılı bir yapıdan sonra, şimdi paketi yükleyin
```
su make install
```
LIGHTTPD'nin URL [http: // yourer-ip][11] 'i ziyaret ederek doğru şekilde yapılandırılıp yapılandırılmadığını kontrol edin. Aşağıdaki sayfayı görmelisiniz

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Web-1024x506.png" alt="Yüksek performanslı web siteleri için LightTPD nasıl kurulur ve yapılandırılır">}}


## Çözüm {#conclusion}

Bu bizi bu blog yazısının sonuna getiriyor. Lighttpd nedir? LightTPD nasıl yapılandırılır? ve prosedürü ayarlamak. LightTPD, hız açısından kritik ortamlar için tasarlanmış ücretsiz, yüksek performanslı ve açık kaynaklı bir web sunucusudur. Düşük bellek ayak izi, küçük CPU yükü ve hız optimizasyonları, yük problemleri olan sunucular için uygun hale getirir. Diğer web sunucularına kıyasla hafif, güvenli ve hızlıdır, bu da onu yüksek performanslı ve hız-kritik web siteleri için en iyi seçeneklerden biri haline getirir. LightTPD, sorunlara ve sorgulara destek sağlayan çok canlı ve canlı bir topluluğa sahiptir. Aşağıdaki “Keşfet” bölümünde belirtilen birçok oper açık kaynak ürünü ve ilgili blog yayınları vardır. Bu nedenle, işletmeniz için açık kaynaklı bir web sunucusu tercih etmek istiyorsanız, bu makale size gerçekten yardımcı olabilir.
Son olarak,  **[Containerize.com][12]**  daha fazla açık kaynaklı ürünler üzerine yazıyor. Düzenli güncellemeler için lütfen bu [Web Server Çözümü Yığını][1] kategorisiyle iletişime geçin. Dahası, bizi sosyal medya hesaplarımızda takip edebilirsiniz [Facebook][13], [LinkedIn][14] ve [Twitter][15].

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [XAMPP][16]
  * [Nginx][17]
  * [Caddy][18]
  * [LightTPD | Açık kaynak ve hafif web sunucusu çözümü][19]
  * [En iyi açık kaynaklı web sunucusu çözümü yığın seçenekleri][1]
  * [2021'de Top 5 Açık Kaynak Web Sunucusu Çözümü Yığınları][4]
  * [Windows'ta Localhost olarak XAMPP ve PHPMyAdmin kurulum][2]



 [1]: https://products.containerize.com/solution-stack/
 [2]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
 [3]: https://blog.containerize.com/2020/12/16/setup-and-configure-lighttpd-web-server-for-high-performance-websites/
 [4]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
 [5]: #what
 [6]: #benefits
 [7]: #configure
 [8]: #conclusion
 [9]: http://www.lighttpd.net/download/
 [10]: https://github.com/lighttpd/lighttpd1.4
 [11]: http://your-server-ip/
 [12]: https://www.containerize.com/
 [13]: https://web.facebook.com/containerize
 [14]: https://www.linkedin.com/company/containerize/
 [15]: https://twitter.com/containerize_co
 [16]: https://products.containerize.com/solution-stack/xampp/
 [17]: https://products.containerize.com/solution-stack/nginx/
 [18]: https://products.containerize.com/solution-stack/caddy/
 [19]: https://products.containerize.com/solution-stack/lighttpd
