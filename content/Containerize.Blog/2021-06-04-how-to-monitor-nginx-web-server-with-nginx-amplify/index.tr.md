---
title: "Nginx Web Sunucusu Nginx Amplify ile Nasıl İzlenir" 
seoTitle: "Nginx Web Sunucusu Nginx Amplify ile Nasıl İzlenir" 
description: "Nginx Amplify, Nginx web sunucusu ve PHP uygulamaları için ücretsiz bir izleme aracısıdır. Bu makale, Nginx amplify ile nginx web sunucusunu nasıl izleyeceğinizle ilgilidir" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "NGINX, PHP uygulamaları, Nginx ile işletim sistemi, yapılandırmayı yükseltip geliştirin. Bu makale, Nginx Amplify'yi kurmaya ve yapılandırmanıza rehberlik eder." 
url: /tr/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## NGINX'i izleyin, PHP uygulamaları, Nginx amplifikasyon ve geliştirme ile yapılan işletim sistemi yapılandırmayı geliştirin. Bu makale, Nginx Amplify'yi kurmaya ve yapılandırmanıza rehberlik eder.

{{< figure align=center src="images/nginx-post.png" alt="Nginx Web sunucusunu Nginx Amplify ile izleyin">}}


## Genel Bakış {#install}
** Web Sunucusu İzleme ** Yüksek trafikli web siteleri için çok önemlidir. ** İzleme aracısı **, web sunucusu hakkında düzenli olarak temel metrikleri kaydeder. Bu kritik metrikler NGINX yapılandırmasını optimize etmek için kullanılabilir. Web sunucunuzun ve uygulamanızın performansını artırmanıza yardımcı olacaktır.
Bu blog yazısında, ** nginx izleme ** açık kaynak aracı için aşağıdaki bölümleri ele alacağız.
  * [Nginx web sunucusu] [1]
  * [Nginx amplifikasyon] [2]
  * [Nginx amplify'yi yükleyin] [3]
  * [Metrikleri İzleme] [4]

## nginx web sunucusu {#nginx}
[Nginx] [5] ücretsiz ve açık kaynaklı bir web sunucusudur. Apache'den daha basit, hafif ve yapılandırılması kolaydır. Nginx web sunucusu ayrıca ters proxy, yük dengeleyici, posta proxy ve http önbellek olarak çalışır. HTTP, HTTPS, SMTP, POP3 ve IMAP protokolleri için çalışır. Nginx, uygulamalarınızın performansını artıran yüksek hızlı, güvenilir ve bellek tasarruflu bir web sunucusudur. Ayrıca, popülerlik kazandı ve şimdi en popüler web sunucusu olarak kabul ediliyor. Ayrıca, Nginx yüksek trafikli siteler ve uygulamalar da dahil olmak üzere her türlü web sitesi için uygundur. Neredeyse tüm işletim sistemlerine kurulabilir ve yapılandırılabilir.

### nginx'i yükle
  * Nginx web sunucusunu yüklemek için komutları aşağıda çalıştırın.
```
sudo apt update
sudo apt install nginx
```
  * Kurulumu bitirdikten sonra tarayıcınızı açın ve “http: // ip \ _of \ _your_server” yazın. Aşağıdaki karşılama sayfasını göreceksiniz.

{{< figure align=center src="images/nginx-home.png" alt="Nginx'e hoş geldiniz!">}}


## nginx amplify {#mplify}
Nginx Amplify, Nginx Açık Kaynak, Nginx Plus ve PHP-FPM için ücretsiz bir izleme aracıdır. Nginx sunucu izleme ve uygulamaları için SaaS tabanlı bir araçtır. Kullanıcılar altyapı varlıklarını kolayca takip edebilir, performansı izleyebilir ve yapılandırmayı ayarlayabilir. Kullanıcıların web sunucusunu ve uygulama yapılandırmasını optimize etmek için kullanabileceği kapsamlı bilgiler verir. Sunucuda Nginx ve PHP uygulamalarını barındıran bir aracı görevi görür. Nginx amplify, performansdan ödün vermeden sunucuları yükseltmek için hafif, push günlükleri ve izleme verileridir. Metrikleri Amplify panosunda görüntüleyebilirsiniz. Temsilci, RHEL, Centos, Ubuntu, Debian, Fedora ve FreeBSD gibi tüm birincil işletim sistemleri için mevcuttur. Nginx Amplify, Nginx Amplify Agent, Nginx Amplify Web UI ve Nginx amplifikasyon arka uç gibi üç ana bileşene sahiptir.
  *** Nginx Amplify Agent ** - İzlenen sistemde çalışır. Tüm iletişim SSL/TLS kullanılarak şifrelenir.
  *** NGinx Amplify Web UI ** - Web kullanıcı arayüzü web sunucuları, uygulamalar ve işletim sistemleri için metrikleri gösterir.
  *** NGinx Amplify Arka uç ** - SaaS olarak uygulanan ve metrikleri toplamak, bir veritabanını korumak, bir analiz motoru çalıştırmak ve bir çekirdek API sağlamaktan sorumlu olan önemli bir bileşendir.

## nginx amplify {#install}
Ubuntu'ya Nginx Amplify kurulumu için aşağı adım adım kılavuzu izleyin.
  * İlk olarak, Nginx [web sitesi] [6] 'da bir hesap oluşturmanız gerekir.
  * Girişten sonra Nginx Amplify web sitesinde aşağıda ekranı göreceksiniz. Şimdi, SSH üzerinden sunucunuza bağlanın ve aşağıdaki adımlarda verilen komutları kullanın.

{{< figure align=center src="images/amplify-1.png" alt="Nginx Amplify'yi yükle">}}

  * Temsilciyi indirmek için aşağıdaki komutu çalıştırın.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Nginx amplify'yi sunucuya yüklemek için aşağıdaki komutu yürütün. XXXXX'i gerçek API anahtarıyla değiştirin. Nginx Amplify panosunda bulabilirsiniz.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Kurulumu bitirdikten sonra, durumu aşağıdaki komutla kontrol edebilirsiniz.
```
$ sudo service amplify-agent status
```
  * Şimdi, metrikleri görüntülemek için Nginx Amplify Agent'ı yapılandırmanız gerekiyor.

{{< figure align=center src="images/amplify-2-1.png" alt="Nginx izleme yapılandırması">}}

  * STUB_STATUS yapılandırmasıyla yeni bir dosya oluşturun.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Aşağıdaki kodu kopyalayın ve dosyayı kaydedin.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * STUB_STATUS modülünü etkinleştirmek için NGINX Web sunucusunu yeniden başlatın.
```
$ sudo service nginx restart
```
  * Şimdi, aşağıdaki komutla Nginx yapılandırma dosyasını açın.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Aşağıdaki kodu içine ekleyin ve kaydedin.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Tüm değişiklikleri uygulamak için Nginx hizmetini yeniden başlatın.
```
$ sudo service nginx restart
```
  * Ardından, gösterge tablosunu yükseltmek için gidin ve "Bitir" düğmesine tıklayın. Aşağıdaki sayfayı görmelisiniz.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Web Sunucusu İzleme">}}

  *** Genel Bakış ** sekmesine tıklayarak istatistikleri daha kolay ve okunabilir biçimde görebilirsiniz. Aşağıda gösterildiği gibi görünecektir.

{{< figure align=center src="images/amplify-overview.png" alt="Nginx izleme istatistikleri">}}


## Metrikleri İzleme {#monitoring}
Nginx Amplify Agent aşağıdaki veri türlerini toplar:
  *** NGinx Metrikleri **-STub_status, günlük dosyaları ve işlem durumundan Nginx ile ilgili çeşitli metrikleri toplar.
  *** Sistem Metrikleri ** - Nginx Amplify, CPU kullanımı, bellek kullanımı, ağ trafiği ve daha fazlası gibi çeşitli sistem metriklerini izler.
  *** PHP-FPM Metrikleri **-Çalışan bir PHP-FPM ana işlemini tanımlarsa, PHP-FPM havuz durumundan metrik alır.
  *** MySQL Metrikleri ** - MySQL Global Durum Değişkenleri Kümesi, ajan tarafından metrikleri toplamak için kullanılabilir.
  *** NGinx MetaTatalar ** - Aracı, paket verileri, oluşturma bilgileri, ikili yol, yapılandırma ayarları ve daha fazlası gibi Nginx örnekleri hakkında veri toplar.
  *** Sistem Meta Veri ** - Aracı, işletim sistemi hakkında ana bilgisayar adı, çalışma süresi, işletim sistemi aroması ve diğer ayrıntılar dahil veri toplar.

## Çözüm
Nginx web sunucusunu ve NGINX'in gelişmiş izleme aracısını ayrıntılı olarak inceledik. Nginx amplify'nin ayarlanması ve yapılandırılması oldukça basittir. Buna ek olarak, Nginx Amplify'nin ** nginx ** izlemeyi izleyebileceği kritik metriklerin üstesinden geldik. Bu önemli metrikler, Nginx web sunucunuzun ve uygulamalarınızın yapılandırmasını geliştirmek için kullanılabilir.
Son olarak, [Containerize.com] [7], en son açık kaynaklı ürünler hakkında blog yayınları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [Web Server Çözüm Yığını] [8] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Uygulamanız için Nginx nasıl yük dengeleyici olarak kullanılır] [9]
  * [NGINX'i ters proxy olarak nasıl kurar ve yapılandırır] [10]
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
