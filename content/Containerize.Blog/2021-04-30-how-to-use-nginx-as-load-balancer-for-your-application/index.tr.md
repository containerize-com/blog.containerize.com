---
title: "Uygulamanız için Nginx'i yük dengeleyici olarak nasıl kullanılır" 
seoTitle: "Uygulamanız için Nginx'i yük dengeleyici olarak nasıl kullanılır" 
description: "Nginx popüler bir açık kaynaklı web sunucusudur. Yüksek performans ve ölçeklenebilirlik ile iyi bilinir. Bu öğreticide, Nginx'i yük dengeleyici olarak kullanmayı öğreneceğiz" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx, yüksek performansı ve ölçeklenebilirliği için popülerdir. 1 numaralı açık kaynak web sunucusu. Bu öğreticide, Nginx'i yük dengeleyici olarak kullanmayı öğreneceğiz." 
url: /tr/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## Nginx, yüksek performansı ve ölçeklenebilirliği için popülerdir. 1 numaralı açık kaynak web sunucusu. Bu öğreticide, Nginx'i yük dengeleyici olarak kullanmayı öğreneceğiz.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Yük dengeleyici olarak nginx nasıl kullanılır">}}

Modern yüksek trafikli web siteleri yüz binlerce ve bazı durumlarda kullanıcılardan veya müşterilerden milyonlarca eşzamanlı istek sunar ve doğru metni, görüntüleri, videoları veya uygulama verilerini hızlı ve güvenilir bir şekilde iade eder. Bu yüksek hacimlerin ve bilgi işlem gücünün ihtiyaçlarını karşılamak için daha fazla sunucuya ihtiyacınız var. Daha fazla sunucu ile, bu sunucular arasındaki trafiği dengelemenin bir yoluna ihtiyacınız vardır. Bu blog öğreticisinde, yük dengeleyicisinin ne olduğunu ve Nginx'i yük dengeleyici olarak nasıl kullanabileceğimizi keşfedeceğiz.
Nginx yük dengelemesini bir ön koşul olarak yapılandırmak için, bir web sunucusu yazılımı ile en az iki ana bilgisayara sahip olmanız ve Nginx ile yük dengelemenin avantajlarını görmek için yapılandırılmış olmanız gerekir. Zaten çalışan bir web ana bilgisayarınız varsa, özel bir resim oluşturarak çoğaltın ve yeni bir web sunucusuna dağıtın. Öyleyse, bulut sunucularınız için Nginx Yük Dengeleme Yapılandırması'nı adım adım nasıl ayarlayacağınızı öğrenelim.!
  *** [Nginx web sunucusu][1] **
  *** [yük dengeleyici][2] **
  *** [Nginx'i yük dengeleyici olarak ayarlama (yuvarlak robin)][3] **
  *** [farklı yukarı akış yönergeleri hakkında][4] **
  *** [Sonuç][5] **

## nginx web sunucusu {#webserver}
Nginx, yüksek performanslı, açık kaynaklı bir web sunucusudur. HTTP sunucu özelliklerine ek olarak, Nginx ayrıca e -posta için bir proxy sunucu (IMAP, POP3 ve SMTP) ve ters proxy olarak işlev görebilir ve HTTP, TCP ve UDP sunucuları için denge Nginx'i yükleyebilir. Uygulamalarınızın performansını, güvenilirliğini ve güvenliğini artırır. Zengin özellik seti, basit konfigürasyon ve düşük kaynak tüketimi için popülerdir.
Nginx nasıl çalışır? Nginx, birden çok ayrı sunucuda çalışan dağıtılmış bir web uygulamasına tek bir giriş noktası olarak Nginx ters proxy yük dengeleyici olarak yaygın olarak kullanılır. Düşük bellek kullanımı ve yüksek eşzamanlılık sunmak için eşzamansız, olay odaklı bir yaklaşım kullanır. Nginx hakkında daha fazla bilgi edinebilirsiniz [burada][6].

## yük dengeleyici {#loadbalancer}
Yük dengeleme, ağ trafiğini birden çok sunucuya dağıtma işlemidir. Ve bu dağıtım işlemini gerçekleştiren “yazılım” veya “donanım” da yük dengeleyici denir. Yük dengeleyici, sunucularınızın önünde duran bir "trafik polisi" ve tüm sunucularda istemci isteklerini yönlendirme gibidir. Sunuculardan biri düşse bile uygulamanızın çalışır durumda kalmasını sağlar.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="yük dengeleyici olarak nginx">}}

Bir yük dengeleyicisinin ana işlevleri şu:
  * İstemci isteklerini veya ağ yükünü birden çok sunucu arasında verimli bir şekilde dağıtır
  * Yalnızca çevrimiçi olan sunuculara istek göndererek yüksek kullanılabilirlik ve güvenilirlik sağlar
  * Talep dikte ettiği gibi sunucular ekleme veya çıkarma esnekliği sağlar

## Nginx'i yük dengeleyici olarak ayarlayın {#setup}
Nginx Round Robin yük dengelemesini ayarlamadan önce, sunucunuza Nginx yüklü olmalısınız. Apt-Get ile hızlı bir şekilde yükleyebilirsiniz:
```
sudo apt-get install nginx
```
Yuvarlak robin yük dengeleyici kurmak için NGINX yukarı akış modülünü kullanmamız gerekecek. NGINX yük dengeleyici yapılandırmasını Nginx ayarlarına güncelleyeceğiz. Web sitenizin yapılandırmasını açalım. Bu örnek uğruna, varsayılan yapılandırma dosyasını kullanıyorum
```
sudo vi /etc/nginx/sites-available/default
```
Nginx ile yük dengeleyicisini yapılandırmak için yük dengeleme yapılandırmasını dosyaya eklememiz gerekir.
Öncelikle Nginx yukarı akış yük dengeleme için yukarı akış modülü eklememiz gerekir:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Sunucu bloğunuzdaki proxy uç noktanız olarak bu arka uç yukarı akış kullanın:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Nginx'i yeniden başlatın
```
sudo service nginx restart
```
Tüm sunucuları yerinde bulundurduğunuz sürece, şimdi Nginx açık kaynak yük dengeleyicisinin ziyaretçileri sunuculara eşit olarak dağıtmaya başlayacağını bulmalısınız. Bu eşit dağılıma yuvarlak robin yük dengeleme denir.

## upstream direktifleri {#upstream}
Son örneğimizde, trafiği sunucular arasında eşit olarak dağıtmak için yuvarlak robin yük dengeleme yapmak için basit bir yukarı akış modülü kullandık. Bununla birlikte, bunun trafikle çalışmanın en etkili yolu olmamasının birçok nedeni vardır. Site ziyaretçilerini daha etkili bir şekilde yönlendirmek için kullanabileceğimiz birkaç yönerge vardır.

### Ağırlık
Kullanıcıları daha hassas bir şekilde sunuculara tahsis etmeye başlamanın bir yolu, belirli makinelere belirli ağırlık tahsis etmektir. Nginx, her sunucuya yönlendirilmesi gereken trafiğin oranını belirten bir sayı atamamıza olanak tanır.
Sunucu ağırlığı içeren yük dengeli bir kurulum şöyle görünebilir:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
Varsayılan ağırlık 1'dir. 2 ağırlık 2 ile backend2.example, Backend1'den iki kat daha fazla trafik gönderilecek ve 4 ağırlık ile Backend3, Backend2'den iki kat daha fazla trafik ve arka uçtan dört kat daha fazla trafikle ilgilenecek 1.

### Doğramak
IP Hash, sunucuların istemcilere IP adreslerine göre yanıt vermesine izin verir ve ziyaretçileri her ziyaret ettiklerinde aynı VPS'ye geri gönderir (bu sunucu kapalı olmadıkça). Bir sunucunun aktif olmadığı biliniyorsa, aşağı olarak işaretlenmelidir. Down sunucusuna gitmesi gereken tüm IP'ler daha sonra alternatif olana yönlendirilir.
Aşağıdaki yapılandırma bir örnek sunmaktadır:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Max başarısız oluyor
Varsayılan yuvarlak robin ayarlarına göre, Nginx uygulama yük dengeleyici, sunucular yanıt vermese bile sanal özel sunuculara veri göndermeye devam edecektir. Max Fails, yanıt vermeyen sunucuları belirli bir süre için çalışkan hale getirerek bunu otomatik olarak önleyebilir.
Maks ile ilişkili iki faktör vardır: maks. Max Fails, etkin olmayan kabul edilmeden önce gerçekleşmesi gereken bir sunucuya bağlanma için başarısız girişim sayısını ifade eder. Fall_timeout, sunucunun çalışmaz olarak kabul edildiğini belirtir. Zaman süresi sona erdiğinde, sunucuya ulaşmak için yeni girişimler tekrar başlayacaktır. Varsayılan zaman aşımı değeri 10 saniyedir.
Örnek bir yapılandırma şöyle görünebilir:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Sonuç: {#Conclusion}
Bu Nginx yük dengeleme öğreticisinde, trafiğinizi birden çok sunucuya dağıtmak için NGNix, yük dengeleme ve nginx yük dengeleyicisinin nasıl kurulacağını öğrendik. Ayrıca yuvarlak robin, karma ve max başarısızlık gibi farklı yük dengeleme algoritmalarını araştırdık. Yüksek hacimli bir uygulama çalıştırıyorsanız ve yükü farklı sunuculara dağıtmanız gerekiyorsa, Nginx sizin için en iyi seçeneklerden biridir. Ve en önemlisi% 100 ücretsiz ve açık kaynaklı web sunucusu.
_ [Twitter][7], [LinkedIn][8] ve [Facebook][9] sayfamızda bize katılabilirsiniz. Sunucuların kaynağı kullanılabilirliğini ve verimliliğinizi artırmak için başka hangi güçlü yük dengeleyicisi __ __ __ kullanırsınız? . Herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen_ [iletişime geçin][10].

## Keşfetmek
Aşağıdaki makaleleri daha fazla bulabilirsiniz
  * [Ubuntu 20.04'te Let's Şifreleme ile Nginx'i nasıl güvence altına alır ve şifrelersiniz][11]
  * [Apache vs Nginx - 2021'de ayrıntılı karşılaştırma][12]

  
[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
