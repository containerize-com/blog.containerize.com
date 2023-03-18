---
title: "Ubuntu 20.04'te Let's Şifreleme ile Nginx nasıl güvence altına alınır" 
seoTitle: "Ubuntu 20.04'te Let's Şifreleme ile Nginx nasıl güvence altına alınır" 
description: "Ubuntu'da Let's Şifreleme ile Nginx'i nasıl kurar, şifreleyebilir ve güvence altına alır. Nginx'i otomatik olarak yapılandırmak için sertifika oluşturmak üzere istemciyi şifreleyelim." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Web siteleri, alan adının ziyaretçileri çekmesi için SSL/TLS şifrelemesini içerir. Bu makalede, NGINX için TLS/SSL sertifikaları elde etmek için CERTBOT yardımcı programının kullanımı açıklanmaktadır." 
url: /tr/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

## Web siteleri, alan adının ziyaretçileri çekmek için SSL/TLS şifrelemesini içerir. Bu makalede, NGINX için TLS/SSL sertifikaları elde etmek için CERTBOT yardımcı programının kullanımı açıklanmaktadır.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Ubuntu'da Let's Şifreleme ile Nginx'i Güvenli">}}


## ** Genel Bakış **
Ziyaretçileri çekmeye çalışan herhangi bir web sitesinin, alan adı için TLS/SSL şifrelemesini dahil etmesi gerekir. SSL Ücretsiz Sertifikalar, web sunucunuz arasında Nginx'i ve uygulama tarayıcılarını şifrelemek ve güvence altına almak gibi güvenli bir bağlantı sağlar. Let's Encrypt, NGINX SSL LetsEncrypt için böyle bir koruma oluşturmanızı sağlayan ücretsiz, otomatik ve açık bir sertifika yetkilisidir. Ücretsiz SSL sertifikalarına tüm büyük tarayıcılar tarafından güvenilir ve sorun tarihinden itibaren önümüzdeki 90 gün boyunca geçerlidir.
Bu blog yazısı, NGINX Certbot yardımcı programını kullanarak NGINX HTTPS letbot sertifikalarını alarak Ubuntu 20.04 / 18.04'te Web sunucusunu çalıştırmanın en basit yolunu açıklar ve sertifikalarınızı otomatik olarak yenilemek için ayarlayın. LetsEncrypt Ubuntu Nginx yapılandırmalarını başlatalım ve kurulalım.
  * Bağımlılıklar ve Önkoşullar
  * Certbot yardımcı programı yükleme
  * Nginx’in yapılandırmasını onaylamak
  * Güvenlik duvarından HTTPS'ye izin vermek
  * SSL sertifikası almak
  * Çözüm

## İlk Şeyler İlk: Bağımlılıklar ve Önkoşullar {#PreRequisites}
Bu makaleyi takip etmek için, LetsEncrypt Ubuntu Nginx Utilities'i yüklemek için aşağıdaki bağımlılıklara ve önkoşullara ihtiyacınız olacaktır:
  * Yerel/uzak makinelerde sudo özellikli bir kök olmayan veya kök kullanıcı.
  * Ubuntu 20.04 veya Ubuntu 18.04 çalıştıran bir sistem
  * Bir komut satırı terminaline erişim
  * Yerel/uzak makinelerde sudo veya kök ayrıcalıkları
  * Nginx yüklendi ve kurdu
  * Genel IP'ye işaret eden kayıtlı bir alan adı
  * Bu alan adı için yapılandırılmış bir sunucu bloğu
  * Güvenlik duvarı, 80 ve 443 bağlantı noktalarındaki bağlantıları kabul edecek şekilde yapılandırılmıştır.

## Adım 1-Certbot yükleme {#Step-1 -—- Kurulum-CertBot}
Nginx'i güvence altına almak ve Nginx'i Let's Encrypt ile şifrelemek için ilk adım, SSL sertifikalarını sunucunuza şifreletin alacak ve yenilemek için tam özellikli ve kullanımı kolay paket yüklemektir. Bunu yapmak için Ubuntu'da bir terminal açarak ve yerel depoyu güncelleyerek başlayın. Y tipi ve istenirse girin.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Şimdi bazı NGINX Güvenli Yapılandırma ayarlarını doğrulayalım.

## Adım 2-Nginx’in Yapılandırmasını Onaylama {#Step-2 --—- NGINX-39-S-Configuration} onaylama
Bağımlılıklar ve Önkoşullar bölümünde açıklandığı gibi, zaten kayıtlı bir etki alanınız olması gerekir ve sertifika, bu alan adının SSL'yi otomatik olarak yapılandırması için doğru NGINX sunucu bloğunu bulabilmelidir. Örnek olarak, bu blog yazısı, Server_Name Directive zaten doğru ayarlanmış olarak /etc/nginx/sites-vailable/blog.containerize.com adresinden etki alanınız için Domain Blog.containerize.com ve Sunucu Bloğunu kullanır.
Onaylamak için, Nano veya en sevdiğiniz metin düzenleyicinizi kullanarak etki alanınız için yapılandırma dosyasını açın:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Mevcut Server_Name Directive satırını /etc/nginx/sites-evailable/blog.containerize.com adresinde bulun. Şöyle görünmeli:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Şimdi yeni yapılandırma ayarlarını yüklemek için Nginx yapılandırma dosyalarınızın sözdizimini doğrulayın ve Nginx sunucusunu yeniden yükleyin:
```
sudo nginx -t
sudo systemctl reload nginx

```
CertBot yardımcı programı artık NGINX'i güvence altına almak ve otomatik olarak güncellemek için doğru Nginx Server Block yönergesini bulabilir. Bir sonraki adımda, HTTPS trafiğine izin vermek için güvenlik duvarını güncelleyelim.

## Adım 3-HTTPS'nin güvenlik duvarından izin verilmesi {#Step-3 -—- HTTPS-Firewall'a izin vermek}}
Bu makalede önerildiği gibi, HTTPS trafiğine izin vermek için ayarları ayarlamanız gerekir. Güvenlik duvarınızın etkin ve etkin olduğundan emin olmak için aşağıdaki komutu çalıştırın:
```
sudo ufw status

```
Çıktı size UFW'nin etkin olduğunu ve size ayarlanmış kuralların bir listesini vermesini söylemelidir. Yalnızca HTTP trafiğinin web sunucusuna izin verildiğini gösterir. Şifreli trafiğe izin vermek için NGINX HTTPS profilini ekleyebilir veya Nginx Full'u kullanabilir ve mevcut NGINX HTTP kuralını silebilirsiniz. Komutu yazarak Nginx HTTPS trafiğine izin verin:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
UFW durum komutunu yazarak HTTPS trafiğine izin veren HTTPS kuralını doğrulayın:
```
sudo ufw status

```
Ardından, sertifikalarımızı getirelim ve sertifikalarımızı getirelim.

## Adım 4-Bir SSL Sertifikası Alma {#Adım-4 -—- SSL-Certificat'ı elde etme}
Nginx’in certbot eklentisi, Nginx'i yeniden yapılandırmaya dikkat edecek ve gerektiğinde konfigürasyonunu yeniden yükleyecektir. Bu nedenle, aşağıdaki komutu yürüterek yalnızca Nginx eklentisi ile sertifika oluşturmanız gerekir:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Bu ilk kez Certbot yardımcı programı çalıştırıyorsanız, CertBot sizden HTTPS ayarlarınızı yapılandırmanızı ister. Bir e -posta adresi girmeniz ve Hizmet Şartlarını kabul etmeniz istenecektir. Enter'a ulaştıktan sonra yapılandırma güncellenir ve Nginx yeni ayarları almak için yeniden yüklenir. Son olarak, sertifika, bir sertifikanın başarıyla oluşturulduğunu ve sertifikalarınızın nerede saklandığını söyleyen bir mesajla görüntülenir.
Sertifikalarınız NGINX SSL Sertifikası LetsEncrypt yapılandırmaları ile indirilir, yüklenir ve yüklenir. Https: // kullanarak web sitenizi yeniden yüklemeyi deneyin ve tarayıcınızın güvenlik göstergesine dikkat edin. Sitenin genellikle bir kilit simgesi ile uygun şekilde sabitlendiğini göstermelidir. Sunucunuzu SSL Labs Server testini kullanarak test ederseniz, Nginx ve LetsEncrypt için A notu alır.
Yenileme sürecini test ederek bitirelim.

## Adım 5-Certbot Otomatik Yenileme {#Adım-5 -—- Doğrulama-Certbot-Auto-Renewal} doğrulama
Sertifikaların her doksan (90) günde bir süresi dolduğundan ve Nginx SSL LetsEncrypt kullanıcıların kurulumunu ve otomatik yenileme cron işini teşvik ettiği için. İlk olarak, geçerli kullanıcı için CRONTAB yapılandırma dosyasını açın:
```
sudo crontab -e
```
Certbot komutunu çalıştıran bir cron işi ekleyin, sertifikanın 30 gün içinde süresi dolacağını algıladığı takdirde sertifikayı yeniledi. Belirli bir zamanda günlük olarak çalışacak şekilde planlayın, örneğin 05:00
```
sudo certbot renew --dry-run

```
CRON işi, yukarıdaki komutta olduğu gibi –Quiet özniteliğini de içermelidir. Bu, Nginx Renew SSL Sertifikasını görevi gerçekleştirdikten sonra herhangi bir çıktı içermemesi için talimat verir. Otomatik sertifika yenilemesini etkinleştirin. Cron işini ekledikten sonra değişiklikleri kaydedin ve dosyadan çıkın.

## Sonuç {#Conclusion}
Bu makalede, LetsEncrypt SSL sertifikasının nasıl kurulacağını öğrendik. Etki alanınız için SSL sertifikalarını indirdik ve bu sertifikaları kullanacak NGINX'i yapılandırdık. Buna ek olarak, CertBot'un SSL Nginx LetsEncrypt için sertifikaları otomatik olarak yenilemesini sağlamalısınız. Yaklaşan öğreticilerimizde, bir web tarayıcısı ve bir web sunucusu arasında şifreli iletişimi sağlayan standart güvenlik teknolojisine sahip bir web sunucusunun nasıl güvence altına alınacağına dair daha ilginç konular hakkında tartışacağız.
_ [Twitter] [1], [LinkedIn] [2] ve [Facebook] [3] sayfamızda bize katılabilirsiniz. Bir bilgisayar ağı üzerinden iletişim güvenliği sağlamak için hangi şifreleme protokolünü kullanıyorsunuz?. Herhangi bir sorunuz varsa, lütfen_ [iletişime geçin] [4].

## Keşfetmek
Sunucu performansını izlemek ve güvenilirliğini ve güvenliğini sağlamak için aşağıdaki ilgili bağlantıları bulabilirsiniz:
  * [Apache'yi Ubuntu/Debian için ters proxy olarak nasıl yapılandırır] [5]
  * [Ubuntu'da nginx ile phpmyadmin nasıl kurulur ve güvence altına alınır] [6]
  * [Ubuntu/Debian'da Nginx'te HTTP/2 desteğini yapılandırın] [7]
  * [AWS Üretim Sunucusunda Yolcu ile Nginx'i Kurun] [8]
  * [Ubuntu'da Apache ile OwnCloud'u nasıl kurar ve yapılandırır] [9]
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
