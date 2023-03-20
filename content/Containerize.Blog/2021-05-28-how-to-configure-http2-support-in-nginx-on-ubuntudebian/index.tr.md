---
title: "Ubuntu/Debian'da Nginx'te HTTP/2 desteği nasıl yapılandırılır" 
seoTitle: "Ubuntu/Debian'da Nginx'te HTTP/2 desteği nasıl yapılandırılır" 
description: "HTTP2 veya H2, HTTP protokolünün bir ikili protokol ve NGINX'i etkinleştirdikten sonra site sayfalarının hızını artırmaya izin veren geliştirilmiş bir sürümüdür." 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2, sayfa yük hızını ve güvenliğini artırmak için sağlam bir çoğullu protokoldür. Bu öğreticide, Nginx'in HTTP/2 desteğiyle nasıl kurulacağını öğreneceğiz." 
url: /tr/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2, sayfa yük hızını ve güvenliğini artırmak için sağlam bir çoğulluk protokolüdür. Bu öğreticide, Nginx'in HTTP/2 desteğiyle nasıl kurulacağını öğreneceğiz.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx Ubuntu ve Debian'da HTTP2 desteğini etkinleştirin">}}


## ** Genel Bakış **
Nginx açık kaynaklı hızlı ve güvenilir bir web sunucusudur. Düşük bellek ayak izi, yük dengeleme, yüksek ölçeklenebilirlik, önbellekleme, protokollerin çoğunluğu için destek ve ters proxy nedeniyle popülerlik kazandı. Şimdi Nginx'in HTTP2 protokolünü nasıl etkinleştirdiğinden bahsedelim.
NGINX tarafından desteklenen protokollerden biri, Mayıs 2015'te yayınlanan HTTP/2'dir. HTTP/2'nin ana avantajı, içerik açısından zengin web siteleri için yüksek aktarım hızıdır, web sunucusundaki yükü azaltır ve birden fazla paralel istek başlatabilir tek bir TCP bağlantısında. Nginx Enable HTTP2, HTTP protokolünün geliştirilmiş bir sürümüdür. Başlamadan önce, SSL sertifikalı birkaç Ubuntu veya Debian sunucusuna ihtiyacımız olacak. Bu öğreticide, Ubuntu'da HTTP2'yi nasıl etkinleştireceğiniz konusunda size adım adım rehberlik edeceğiz.
  * Paketleri güncelleme ve Nginx'i yükleme
  * HTTP/2 desteğini etkinleştirme
  * Sunucu adını ekleme
  * SSL sertifikalarını ekleme
  * Şifreleri kaldırma
  * HTTPS'ye tüm HTTP isteklerini yeniden yönlendirin
  * Nginx'i yeniden başlatın
  * Çözüm

## Adım 1: Paketlerin güncellenmesi ve nginx'i yükleme {#4597}
İlk adım, APT ambalaj sistemindeki depoları güncellemek ve yükseltmektir. Güncellemeyi kullanmak en son sürüm paketlerini indirecek ve yükseltme, paketlerin en son sürümünü listedeki yükleyecektir. Paketleri güncellemek ve yükseltmek için aşağıdaki apt komutunu çalıştırın.
```
sudo apt-get update && apt-get upgrade
```
Bir sonraki adım, Nginx paketinin en son sürümünü yüklemektir. HTTP/2 protokolü için destek NGINX sürüm 1.9.5 ve üstünde tanıtıldı. Bu nedenle, Nginx paketinin en son sürümünü yüklememiz gerekecek. Aşağıdaki çalıştırın Nginx paketlerini yüklemek için apt yükleme komutunu kullanın:
```
sudo apt-get install nginx
```
Adım adım kurulum işlemini onaylamanız istenecektir. Evet seçeneğini seçin ve yükleme işlemini bitirin. Kurulum işlemi bittikten sonra, bir sonraki adım, doğru sürümü yükleyip yüklememeyeceğimizi paketin sürümünü kontrol etmektir. Nginx web sunucusunun sürümünü komut yazarak kontrol edebilirsiniz:
```
sudo nginx -v
```
Yukarıdaki sürüm kontrol komutunun çıkışı aşağıdakilere benzer olmalıdır:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Adım 2: HTTP/2 desteğini etkinleştirme {#f4d2}
Nginx paketini kurduktan sonra HTTP2 NGINX'i etkinleştirmemiz gerekir. Kullanıcı dinleme bağlantı noktasını 80'den 443'e değiştirmelidir. Nginx yapılandırma dosyasını açalım:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
Nginx'in varsayılan değerinin Dinleme için ayarlandığını görebilirsiniz 80 bağlantı noktası.
Dinle 80 Varsayılan_server;
Dinle [::]: 80 default_server;
Gördüğünüz gibi iki farklı dinleme değişkeni var. Birincisi dinleme değişkeni tüm IPv4Connections ve ikincisi IPv6 bağlantıları içindir. Her iki değişken için şifrelemeyi etkinleştireceğiz. Dinleme bağlantı noktası numarasını 443 olarak değiştirin ve aşağıda gösterildiği gibi HTTPS protokolü için SSL bağlantısı ekleyin:
Dinle 443 SSL HTTP2 Varsayılan_server;
Dinle [::]: 443 SSL HTTP2 Varsayılan_server;
SSL'ye ek olarak HTTP2 eklediğimize dikkat edin. Nginx artık HTTP/2 protokolünü destekleyen tarayıcılar kullanabiliyor.

## Adım 3: Sunucu adını ekleme {#A745}
Sonraki adım, sunucu adının etki alanı adıyla ilişkili olacak şekilde sunucuyu değiştirmektir. Kullanıcının yapılandırma dosyasındaki sunucu adını değiştirmesi gerekir. Yapılandırma dosyasındaki sunucuyu \ _name girişini bulun ve _ _ gerçek etki alanınıza değiştirin:
```
server_name example.com www.example.com;
```
Metin düzenleyicisinde düzenleyerek sunucu yapılandırma dosyasını kaydedin. Sözdizimi hataları için Nginx yapılandırmasını komutla kontrol edebilirsiniz:
```
sudo nginx -t
```
Sözdizimi hatasızsa, aşağıdaki çıktıyı göreceksiniz:
nginx: yapılandırma dosyası /etc/nginx/nginx.conf sözdizimi tamam
nginx: yapılandırma dosyası /etc/nginx/nginx.conf testi başarılı

## Adım 4: SSL sertifikalarını ekleme {#37C0}
Sonraki adım, NGINX HTTPS yapılandırmasının SSL sertifikanızı kullanmasını etkinleştirmektir. Kendi imzalı bir sertifika oluşturabilir veya [Let's Şifreleme'den Ücretsiz Sertifika kurabilirsiniz][1]. SSL sertifikanız yoksa lütfen bu öğreticiyi izleyin. SSL sertifikalarınızı Nginx yapılandırma dizininin içine aşağıdakilere benzer şekilde ekleyin:
```
sudo mkdir /etc/nginx/ssl
```
Sertifikanızı ve özel anahtarınızı bu konuma kopyalayın ve ayrıca örnek.com'u gerçek alan adınızla değiştirin:
sudo cp /path/to/your/certicate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
Şimdi Nginx Server yapılandırma dosyasını bir kez daha açın. NGINX SSL yapılandırmasını etkinleştirmek için sertifikalarınızın konumu ile Nginx Server bloğunun içine yeni SSL satırlarını ekleyin ve yapılandırın:
sudo nano /etc/nginx/sites-evailable/domain-name.com
ssl_certicate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
Nginx dosyasını kaydedin ve metin düzenleyicisinden çıkın.

## Adım 5: Ciphers'ı Çıkarma {#D291}
Cipher, veri şifreleme ve şifre çözme için kriptografide kullanılan bir algoritmadır. Cipher süitleri, ağ bağlantılarını güvence altına almak için kullanılan bir grup kriptografik algoritmadır. HTTP/2, kaldırılması gereken büyük bir güvensiz şifre listesine sahiptir. Burada Internet Giants Cloudflare tarafından onaylanan popüler bir şifre seti kullanacağız.
Aşağıdaki Nginx yapılandırma dosyasını açın /etc/nginx/nginx.conf ** ssl \ _prefer \ _server_ciphers açıktan hemen sonra aşağıdaki satırları ekleyin.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
Gzip'i kapalı olarak ayarlayabilir ve proxy \ _max \ _temp \ _file \ _size 0 ekleyebilirsiniz; err \ _http2 \ _protocol_error nginx hatası önlemek için.

## Adım 6: Tüm HTTP isteklerini https {#b387} olarak yönlendirin
Şimdi NGINX HTTP2 Proxy'ye, yalnızca sunucu bir HTTP isteği alıyorsa, içeriği HTTPS aracılığıyla neye hizmet etmesi gerektiğini söylemeliyiz. Son olarak, yorumları göz ardı ederek, nginx yapılandırma dosyanız /etc/nginx/sites-vailable/Domain-name.com şunları benzer şekilde göstermelidir:
Sunucu {Dinle 443 SSL HTTP2 DEFAURS_SERVER; Dinle [::]: 443 SSL HTTP2 varsayılan_server; root/var/www/html; index index.html index.htm index.nginx-debian.html; html; ; } ssl_certicate /etc/nginx/ssl/example.com.crt ;ssl_certificate_key /etc/nginx/ssl/example.com.key; Dinle [::]: 80; Server_name örneği.com; Dönüş 301 https: // $ server_name $ request_uri;}
/Etc/nginx/sites-vailable/domain-name.com dosyasını kaydedin ve ardından çıkın. Sözdizimi hataları için yapılandırmaları kontrol edin:
```
sudo nginx -t
```

## Adım 7: Nginx'i yeniden başlatın {#e687}
Tüm değişiklikleri uygulamak için NGINX HTTP2 Ters Proxy sunucusunu yeniden başlatın ve yapılandırma durumunu kontrol edin.
sudo systemctl nginx yeniden başlat
sudo systemctl durumu nginx

## ** Sonuç: ** {#4A1A}
Tebrikler, Ubuntu sunucusunda Nginx Config HTTP2 desteğinin nasıl kurulacağını başarıyla öğrendiniz. Nginx HTTP2 ayarlarınız artık HTTP/2 sayfa sunuyor ve ayrıca HTTP/1 ve HTTP/2 protokolleri arasındaki farkı temizledi. Hala herhangi bir yapılandırma sorunuyla karşılaşırsanız, yorum bölümünde bize bildirin.
HTTP2 Multiplexed Protokolü hakkında herhangi bir sorunuz var mı?

## Keşfetmek
Aşağıdaki makaleleri de beğenebilirsiniz:
  * [Apache'yi Ubuntu/Debian için ters proxy olarak nasıl yapılandırır][3]
  * [Nasıl yapılır][3][ubuntu'da nginx ile phpmyadmin yükleyin ve sabitleyin][4]
  * [AWS Üretim Sunucusunda Yolcu ile Nginx Nasıl Kurulur][5]
  * [Ubuntu 20.04'te Let's Şifreleme ile Nginx'i Güvenli ve Şifreleyin][1]
  * [Ubuntu'da Apache ile OwnCloud'u nasıl kurar ve yapılandırır][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
