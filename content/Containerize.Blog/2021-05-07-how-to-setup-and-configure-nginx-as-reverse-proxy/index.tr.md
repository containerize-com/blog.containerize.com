---
title: "Nginx'i ters proxy olarak nasıl kurar ve yapılandırır" 
seoTitle: "Nginx'i ters proxy olarak nasıl kurar ve yapılandırır" 
description: "Bu öğretici, Nginx'in ters proxy olarak nasıl kurulacağı ve yapılandırılacağı ile ilgilidir. Nginx, en popüler açık kaynaklı proxy web sunucularından biri olarak kabul edilir." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx, ters bir proxy olarak da hareket edebilen açık kaynaklı bir web sunucusudur. Bu öğretici, Nginx'i ters proxy olarak nasıl kuracağınızı ve yapılandıracağınızı öğrenmenize yardımcı olacaktır." 
url: /tr/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## Nginx, ters proxy olarak da işlev görebilen açık kaynaklı bir web sunucusudur. Bu öğretici, Nginx'i ters proxy olarak nasıl kuracağınızı ve yapılandıracağınızı öğrenmenize yardımcı olacaktır.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Nginx'i ters proxy sunucusu olarak kullanın">}}


## Genel Bakış:
Nginx ve Apache en popüler iki açık kaynak web sunucuları **genellikle PHP ile kullanılmaktadır. Ters proxy veya ağ geçidi, istemci ve sunucu arasında bir bağlantı görevi görür. İstemci ve sunucu, sürekli ve verimli bir şekilde çalışmak için birbirleriyle bilgi alışverişinde bulunur. En yaygın ters vekiller** nginx ve apache**'dır ve her ikisi de birden fazla web sitesini barındırırken aynı sanal makinede yapılandırılabilir. Ters proxy, web sunucularını saldırılardan korur ve bağlantı ağ geçidi, istemciye özel bir ters proxy nginx yapılandırmasının gerekli olmadığı sıradan bir web sunucusu gibi görünür. Ters proxy, istenen bilgileri nereye aktaracağına ve ardından nihai çıktı sonucunu istemciye teslim ederken istemci istek gönderir.
Redis öğreticileri hakkındaki dizilerimiz için çok takdir ettikten sonra, Nginx öğreticilerinde bir dizi başlatmak için birçok istek aldık. Geçen hafta uygulamalarınız için [NGINX Ters Proxy Yük Dengeleyici][1] 'in nasıl kullanılacağı hakkında bir öğretici ile başladık. Bu basit Nginx ters proxy yapılandırma örneği birçok güvenilirlik ve Nginx ters proxy performans avantajı sağlar. Nginx Basit Ters Proxy, internette en aktif olarak kullanılan açık kaynak Nginx Proxy sunucusudur. Bu öğreticide, Nginx'in ters proxy **olarak nasıl kullanılacağını ve tek bir sunucuda ters proxy olarak nasıl ayarlanacağını** yapacağız. Öyleyse başlayalım!
  * Proxy sunucusu nedir?
  * İleri vs ters proxy
  * Ters proxy'yi yapılandırın
  * Nginx ters proxy'nin avantajları nelerdir?
  * Çözüm

## Proxy sunucusu nedir?
**Bir Proxy Sunucusu** Sizin ve İnternet arasında bir ağ geçidi görevi görür. Son kullanıcıları göz attıkları web sitelerinden ayıran bir aracı sunucudur. Proxy sunucuları, kullanım durumunuza veya şirket politikasına göre farklı düzeyde işlevsellik, güvenlik ve gizlilik sağlar.
Bir proxy sunucusuyla, internet trafiği, talep ettiğiniz adrese giderken proxy sunucusundan akar. İstek daha sonra aynı proxy sunucusundan (çoğunlukla) geri döner ve ardından Proxy sunucusu web sitesinden alınan verileri size iletir.

## Forward vs Ters Proxy:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="Ters proxy sunucusu olarak nginx">}}

Genellikle proxy'den bahsettiğimizde, çoğu zaman ileri vekili kastediyoruz. **İleri vekiller** Çin'in büyük güvenlik duvarı gibi ülke kısıtlamalarından kaçınmak için mükemmeldir. İstemci, Forward Proxy aracılığıyla engellenen kaynaklara bağlanır. Forward Proxy'ler, IP adreslerini değiştirerek kullanıcının kimliklerini gizleyebilir. Yani, temel olarak Nginx, ileri proxy olarak istemci ve internet arasında oturur, bu nedenle son sunucu gerçek istemcinin farkında değildir.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="Nginx Ters Proxy olarak">}}

**Ters proxy'ler**Ayrıca aracılar görevi görür, ancak bağlantının diğer tarafında otururlar. Ters proxy'ler** yük dengeleme**, web optimizasyonu ve güvenlik konusunda mükemmeldir. Ters proxy, genellikle yükü birkaç sunucu arasında dağıtmak, farklı web sitelerinden içeriği sorunsuz bir şekilde göstermek veya HTTP dışındaki protokoller üzerinden uygulama sunucularına işleme isteklerini geçmek için kullanılır.

## Nginx'i ters proxy olarak yapılandırın:
Nginx bir isteği vekalet ettiğinde, isteği belirli bir proxed sunucuya gönderir, yanıtı alır ve istemciye geri gönderir. Belirli bir protokol kullanarak bir HTTP sunucusuna veya HTTP olmayan bir sunucuya istekleri proxy yapmak mümkündür. Desteklenen protokoller arasında **fastcgi, UWSGI, SCGI ve memcached** bulunur.
Bir HTTP Proxied sunucusuna bir istek iletmek için **Proxy_pass**yönergesi**konum** içinde belirtilir. Örneğin:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Bu NGINX ters proxy örnek yapılandırması, bu konumda işlenen tüm isteklerin belirtilen adreste proxed sunucuya aktarılmasıyla sonuçlanır. Bu adres alan adı veya IP adresi olarak belirtilebilir. Adres ayrıca bir bağlantı noktası da içerebilir:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Modifiye veya özel başlıkları, örnekte aşağıdaki nginx **proxy \ _Set \ _Header** ana bilgisayarındaki Proxy sunucusuna bile aktarabilirsiniz.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx ayrıca performansı artırmaya yardımcı olan arabelleğe alınmayı destekler. Tamponlama etkinleştirilmiş Nginx, istemcinin indirilmesi için ihtiyaç duyduğu sürece proxed sunucudan aldığı yanıtı depolayacaktır.
Tüm istekleri tek bir sunucuya proxying yapmak yerine,**birden fazla arka uç sunucusu kurabilir ve bu proxed sunucular arasında nginx denge yüküne izin verebilirsiniz. Bunu zaten [Nginx yük dengeleme][1] hakkında öğreticimizde ele aldık.

## Nginx Ters Proxy'nin avantajları nelerdir?
Aşağıda Nginx Ters Proxy Sunucusunu kurmanın faydaları şunlardır:
* Nginx en popüler **açık kaynaklı web sunucularından biridir** , aynı zamanda en popüler proxy aracıdır. Nginx Ters Proxy Config, kullanıcıya DDOS ve DOS web sunucusu saldırılarına karşı üst düzey güvenlik sağladığı için uygulanması çok basittir.
* Yüksek trafik web siteleri ve **Dropbox, Netflix ve Zynga** gibi arka uç sunucuları arasında dengeli bir yük oluşturmaya yardımcı olur.
  * Nginx ters proxy sanal ana bilgisayarını ayarlamak için daha yavaş bir arka uç sunucu ve yüksek trafik siteleri için önbellekleme mekanizması sağlar. İstemci tarafından her web isteği için yeni bir işlem oluşturulmasını gerektirmez.
  * Ayrıca HTTP, HTTPS, TCP, UDP, SMTP, IMAP ve POP3 vb. Gibi birden çok protokol için ters proxy sunucu olarak görev yapar.
* Nginx **10000'den fazla bağlantıyı işleyebilir** Düşük bellek ayak izi ile ve tek bir IP adresinde birden çok web sunucusu çalıştırabilir.
  * Ayrıca, Web ana bilgisayar sunucusundan yükü düşürmek için sayfa içeriğini önbelleğe almaya ve SSL şifrelemesini gerçekleştirmeye yardımcı olur. Nginx, statik içeriğin performansını sıkıştırarak ve yükleme süresini artırarak artırmak için en iyi web sunucularından biridir.
  * Çoklu sunucu ortamı için mükemmel bir araçtır ve tek bir sunucuyu anonim tutmak gibi farklı görevler için de yararlı olabilir.

## Çözüm:
Bu **Nginx Ters Proxy öğreticisinde**, Nginx Proxy sunucusunun ne olduğunu ve Nginx Ters Proxy'yi ayarladık. İleri vs ters proxy sunucusu Nginx arasındaki fark. Ayrıca örneğin Nginx'in ters proxy olarak nasıl kurulacağını öğrendik. Şimdi**nginx ters proxy yapılandırmasını adım adım** nasıl yükleyeceğinizi tam olarak anlıyorsunuz. Yukarıdaki öğretici, ters proxy kurulumuna başlamanıza yardımcı olur. Yaklaşan öğreticilerimizde Nginx hakkında daha ilginç konuları tartışacağız.
_ Kolay, dinamik ve tam özellikli en sevdiğiniz _revers proxy_ sunucusu nedir?. Lider_ _open kaynak _revers prox__y,**http ve tcp tabanlı uygulamalar için yük dengeleyici hakkında herhangi bir sorunuz var mı?

## Keşfetmek
Aşağıdaki daha fazla makaleyi bulabilirsiniz
  * [Apache'yi Ubuntu/Debian için ters proxy olarak nasıl yapılandırır][3]
  * [Ubuntu 20.04'te Şifreleme ile Nginx Güvenli][4]
  * [Uygulamanız için Nginx nasıl yük dengeleyici olarak kullanılır][1]
  * [Ubuntu'da nginx ile phpmyadmin nasıl kurulur ve güvence altına alınır][5]
  * [Ubuntu/Debian'da Nginx'te HTTP/2 desteğini yapılandırın [6]
  * [Ubuntu'da Nginx ile birden fazla PHP sürümü yükleyin][7]
  * [AWS Üretim Sunucusunda Yolcu ile Nginx'i Kurun][8]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
