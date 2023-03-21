---
title: "Apache'yi Ubuntu/Debian için ters vekil olarak nasıl yapılandırır" 
seoTitle: "Apache'yi Ubuntu/Debian için ters vekil olarak nasıl yapılandırır" 
description: "Apache ters proxy yapılandırması adım adım bir veya daha fazla arka uç sunucusunu Ubuntu/Debian Linux'ta mod_proxy ile bir proxy sunucusunun arkasında çalıştırmanızı sağlar." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Ters Proxy, bir veya daha fazla arka uç sunucusunu bir proxy sunucusunun arkasında çalıştırmanıza olanak tanır. Ubuntu/Debian sisteminde Apache Ters Proxy'yi nasıl yapılandıracağınız aşağıda açıklanmıştır." 
url: /tr/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Ters Proxy, bir veya daha fazla arka uç sunucusunu bir proxy sunucusunun arkasında çalıştırmanıza olanak tanır. Ubuntu/Debian sisteminde Apache Ters Proxy'yi nasıl yapılandıracağınız aşağıda açıklanmıştır.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Apache Ters Proxy'yi yükleyin ve yapılandırın">}}


## **Genel Bakış** 
Apache Ters Proxy, tüm trafiğin ve bir proxy sunucusunun arkasındaki bir veya daha fazla arka uç sunucusunu veya kapsayıcıları kamuya açıklamadan çalıştırmasına izin verir. Arka uç web sunucusu başka bir Apache2 veya Nginx gibi açık kaynaklı HTTP sunucusu olabilir. Apache2 HTTP sunucusu, bugün kullanılan en popüler açık kaynak web sunucusundan biridir.
Bir proxy sunucusunu kurmak ve yapılandırmak için birçok neden vardır. Örneğin, ters proxy, saldırıları ve daha fazlasını önlemek için güvenlik eklemenize, yük dengeleme için belirli yerlere erişimi kısıtlamanıza yardımcı olabilir. Bu makalede, Ubuntu/Debian'da HTTPS sunucusu için Apache Ters Proxy Yapılandırması'nın adım adım nasıl kurulacağı ve yapılandırılacağı açıklanmaktadır:
  * Apache2'nin yüklenmesi
  * Apache2'yi yapılandırın
  * Proxy modüllerini etkinleştirin
  * SSL'yi etkinleştirin
  * Apache2'yi yeniden başlatın
  * Çözüm

## Adım 1: Apache2'yi yükle
Apache2'yi kurmak çok basit ve çalıştırılması kolaydır. Kurulum yapmak için aşağıdaki komutları basitçe çalıştırın:
sudo apt-get güncellemesi
sudo apt-get install apache2
{{_LINE_25_}}
APACHE2'yi sisteminize yükledikten sonra, sunucu arttığında her zaman yeniden başlatmak için Apache2'yi durdurmak, başlatmak, etkinleştirmek ve yeniden başlatmak için Debian Linux veya Ubuntu Linux sürümü Ubuntu'da aşağıdaki SystemCtl komutlarını kullanın.
sudo systemctl stop apache2.service
sudo systemctl start apache2.service
sudo systemctl etkinleştir apache2.service
sudo systemctl yeniden başlatma apache2.service
{{_LINE_31_}}
Web sunucusu durumunu aşağıdaki komutu kullanarak görüntüleyebilirsiniz:
sudo SystemCtl Durumu Apache2.service
{{_LINE_34_}}
Apache2 kurulumunu kontrol etmek için tarayıcınızı açın ve sunucu ana bilgisayar adına veya Sistem IP adresinize göz atın; aşağıda gösterildiği gibi Apache2 Varsayılan Test sayfasını görmelisiniz. Bunu gördüğünüzde Apache2 beklendiği gibi çalışıyor. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Ubuntu için Apache Ters Proxy Proxy'yi kurun ve yapılandırın">}}


## Adım 2: Apache2'yi ters proxy olarak yapılandırın
Apache2 başarıyla kurulur ve kullanıma hazırdır. Artık Apache2'yi Apache2 Ters Proxy Ubuntu olarak çalışacak şekilde yapılandırabilirsiniz. Apache2 Proxy Modülünün **Proxypass  **ve **  ProxypassReverse  **işlevi ters bir proxy sağlar. **  proxypass  **ve **  proxypassReverse**  kullanmak için önce site trafiğini yönlendirmek istediğinizi bilmelisiniz.
Apache2 Ters Proxy sunucusu, basit bir kurulumda 80 bağlantı noktası olan varsayılan HTTP bağlantı noktasındaki tüm trafiği dinleyecektir. Web sitesi içeriğini barındıran arka uç sunucu özel bir bağlantı noktasını dinleyecek ve büyük olasılıkla 8080 bağlantı noktasıdır.
Bu blog makalesinde, 80 numaralı bağlantı noktasını dinlemek için Apache2'yi kuruyoruz ve daha sonra 8080 numaralı bağlantı noktasını dinleyen arka uç sunucusuna doğrudan trafiği yönlendiriyoruz. Apache2proxy.conf adlı bir proxy VirtualHost dosyası oluşturmak için aşağıdaki komutu çalıştırın.
sudo nano /etc/apache2/sites-evailable/apache2proxy.conf
Ardından apache2proxy.conf dosyasına aşağıdaki kod bloğunu ekleyin ve kaydedin.
{{_LINE_43_}}
        ServerName Örnek.com
        Serveralias www.example.com
        ServerAdmin Webmaster@example.com
        Errorlog $ {apache_log_dir} /error.log
        CustomLog $ {apache_log_dir} /ccess.log kombine
        Proxyrequests
{{_LINE_50_}}
          Sipariş redded, izin ver
          Hepsinden izin ver
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        ProxypassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Sipariş ver, inkar
          Hepsinden izin ver
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
Apache2proxy.conf dosyası, sunucu adınızı ve proxy_pass'ı içerir, burada trafik HTTP Proxy sunucusu tarafından alındığında yönlendirilir.

## Adım 3: Apache2 Proxy'yi etkinleştir
Apache2 web sunucusu artık yüklü ve başarıyla kuruldu. Apache, içinde paketlenmiş birçok paketli modül vardır. Bu modüller taze Apache2 kurulumunda etkinleştirilmez. İlk olarak, farklı ağ protokollerini desteklemek için gerekli Apache mod_proxy modülünü ve eklenti modüllerinin birçoğunu etkinleştirmek için ihtiyacımız olan modülleri etkinleştirmemiz gerekecek. HTTP Proxy modüllerini etkinleştirmek için aşağıda listelenen komutları çalıştırın.
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbMethod_byrequests
{{_LINE_69_}}
Şimdi VirtualHost sitesini etkinleştirin ve Apache2 modülleri yapılandırmasını yeniden yüklemek için apache2'yi yeniden başlatın.
sudo a2ensite apache2proxy.conf
sudo systemctl yeniden başlatma apache2.service
Seçtiğiniz bir Web tarayıcısını başlatın ve Sunucu Hostname Like Expal.com'a gidin. Artık varsayılan bağlantı noktasında Apache2 sunucunuza, yani 8080'e bağlı olacaksınız.

## Adım 4: SSL'yi etkinleştir   {#Block-07B86D83-DCA0-4924-B991-206719C342EB}
Apache Ters Proxy SSL modülünü etkinleştirmek istiyorsanız, Apache Ters Proxy HTTPS Proxy Pass'i etkinleştirmek için aşağıdaki komutu çalıştırın:
sudo a2enmod ssl
Bu, arka uç sunucularına HTTPS desteğine Güvenli Apache Ters Proxy HTTP sağlayacaktır.

## Adım 5: Yeniden Başlat Apache2   {#Block-836BB4FF-17AD-4317-8ECB-153104BD28A7}
Bu değişiklikleri yürürlüğe koymak için, aşağıdaki komutu çalıştırarak Apache'yi yeniden başlatın:
sudo systemctl yeniden başlatma apache2.service
Tebrikler! Linux sisteminize Apache2 Ters Proxy'yi başarıyla yüklediniz ve yapılandırdınız.

## **Sonuç:** {#4A1A}
Bu öğreticide, bir proxy sunucusu ve Apache ters proxy örnek konfigürasyonunun adım adım ne olduğunu araştırdık ve tartıştık. Ayrıca APACHE2'nin bir Linux sisteminde ters proxy olarak nasıl kurulacağını ve yapılandırılacağını öğrendik. Yaklaşan öğreticilerimizde, Apache ve diğer web sunucusu çözüm yığınları hakkında daha ilginç konuları tartışacağız.

## Keşfetmek
Aşağıdaki daha ilgili makaleleri de beğenebilirsiniz:
  * [Nasıl yapılır][1][ubuntu'da nginx ile phpmyadmin yükleyin ve sabitleyin][2]
  * [AWS Üretim Sunucusunda Yolcu ile Nginx Nasıl Kurulur][3]
  * [Ubuntu/Debian'da Nginx'te HTTP/2 desteğini yapılandırın][4]
  * [Ubuntu 20.04'te Let's Şifreleme ile Nginx'i Güvenli ve Şifreleyin][5]
  * [Ubuntu'da Apache ile OwnCloud'u nasıl kurar ve yapılandırır][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/tr/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
