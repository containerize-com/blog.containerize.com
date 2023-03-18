---
title: "Ubuntu'da Nginx ile birden fazla PHP sürümü nasıl yüklenir" 
seoTitle: "Ubuntu'da Nginx ile birden fazla PHP sürümü nasıl yüklenir" 
description: "Makale, Ubuntu'da Nginx ile PHP'nin birden fazla sürümünün nasıl kurulacağı açıklanmaktadır. PHP'nin Nginx ile nasıl kurulacağına dair adım adım talimatları gözden geçireceğiz." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Nginx ile PHP'nin birden fazla sürümünü kullanmak istiyorsanız, bu makalede size Ubuntu'da NGINX ile PHP'nin nasıl yükleneceğine dair adım adım rehberlik edeceğiz." 
url: /tr/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="Nginx ile PHP çoklu PHP sürümleri">}}


## Nginx ile PHP'nin birden fazla sürümünü kullanmak istiyorsanız, bu makalede Ubuntu'da NGINX ile PHP'nin nasıl yükleneceğine dair adım adım size rehberlik edeceğiz.
Bu makale, Nginx hakkında öğreticilerle ilgili dizilerimizin devamıdır. Şimdiye kadar Nginx'i yük dengeleyici olarak nasıl kullanacağımızı, Nginx'in ters proxy olarak nasıl kullanılacağını ele aldık. Ve şimdi bu öğretici, “Nginx ile PHP'nin birden fazla sürümünün nasıl kullanılacağı” sorusunu başka bir soruyu kapsıyor. Bu öğreticide, PHP'nin Ubuntu'ya nasıl yükleneceğine, PHP'nin Nginx ile nasıl yapılandırılacağı ve son olarak Nginx ile PHP'nin birden fazla sürümünü nasıl yükleyebileceğiniz konusunda size adım adım rehberlik edeceğiz. Öyleyse başlayalım!
  * [Nginx'i yükleyin] [1]
  * [Birden çok PHP sürümünü yükleyin] [2]
  * [PHP ile birden çok web sitesi oluşturun] [3]
  * [Nginx'i web siteleri için farklı sürümler çalıştıracak şekilde yapılandırın] [4]
  * [Sonuç] [5]

## nginx {#nginx} yükle
Nginx (“Engine-X” olarak telaffuz edilir), genellikle ters proxy veya HTTP önbellek olarak kullanılan açık kaynaklı bir web sunucusudur. Linux için ücretsiz olarak kullanılabilir.
Nginx'i yüklemek için aşağıdaki komutu kullanın:
```
sudo apt update
sudo apt install nginx
```
Kurulum yapıldıktan sonra tarayıcınızda “http: // localhost” açabilirsiniz ve tüm kurulumunuz vardır.

{{< figure align=center src="images/php-with-nginx-install.png" alt="PHP'yi Nginx ile yükleyin">}}


## Birden çok PHP sürümünü yükleyin {#php}
** PHP ** (** PHP: HyperText Önişlemcisi ** için özyinelemeli kısaltma), web siteleri ve web tabanlı uygulamalar geliştirmek için yaygın olarak kullanılan ve en uygun olan açık kaynaklı, popüler bir genel amaçlı komut dosyası dilidir. HTML'ye gömülebilen bir sunucu tarafı komut dosyası dilidir.
Şu anda, ** PHP **, yani ** PHP 5.6 **, ** 7.0, ** ve ** 8.0 ** destekli üç versiyonu vardır. Anlam ** PHP 5.3 **, ** 5.4, ** ve ** 5.5 ** hepsi yaşamın sonuna ulaştı; Artık güvenlik güncellemeleri ile desteklenmiyorlar. Önce PHP 7.0 ve PHP 7.2'yi PHP-FPM ile yükleyelim.
Aslında kurulumla hareket etmeden önce ilk önce PHP-fpm olduğunu vurgulayalım. ** php-fpm ** (** fastcgi proses yöneticisinin kısaltması **) son derece popüler bir alternatif PHP (hipermetin işlemci) fastcgi uygulamasıdır. PHP-FPM, büyük miktarlarda trafik alan web siteleri için faydalı olabilecek çok sayıda özellik içerir.
İlk olarak PHP 7.0 ve 7.2'yi yüklemek için, PHP'nin birden fazla sürümünü yüklemek için sunucunuza PHP depo eklemeniz gerekir. Aşağıdaki komutla ondrej php depo ekleyebilirsiniz:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Depo güncel olduğunda, PHP 7.0, Php 7.2 ve PHP-FPM'yi aşağıdaki komutla yükleyin:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Kurulum tamamlandıktan sonra, PHP-FPM durumunu aşağıdaki komutla kontrol edin:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## PHP ile birden çok web sitesi oluşturun {#web}
Varsayılan sayfa/var/www/html/konumuna yerleştirilir. Statik sayfalarınızı buraya yerleştirebilir veya sanal ana bilgisayar kullanabilir ve başka bir konumu yerleştirebilirsiniz
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Ardından Site1 için bir örnek dizin.php dosyası oluşturun:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Şimdi site2 için bir örnek dizin.php dosyası oluşturun:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Ardından, her iki web sitesinin sahipliğini www-data olarak değiştirin:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## Nginx'i yapılandırın {#configure}
Ardından, PHP 7.0'ı kullanan alan Sitesi1.containerize.com için bir NGINX sanal ana bilgisayar dosyası oluşturmanız gerekecektir. Ve site için bir diğeri.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Aşağıdaki satırları ekleyin:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Şimdi site2.containerize.com için ikinci dosyayı oluşturun
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Ardından, aşağıdaki komutla her iki sanal ana bilgisayar dosyasını etkinleştirin:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Son olarak, tüm yapılandırma değişikliklerini uygulamak için NGINX ve PHP-FPM hizmetini yeniden başlatın:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## Sonuç {#Conclusion}
Bu öğreticide Ubuntu'da birden fazla PHP sürümünün nasıl yapılacağını araştırdık. Nginx'in nasıl kurulacağını öğrendik. Sonra Nginx'te iki farklı web sitesinin nasıl kurulacağını araştırdık. Ve son olarak, Nginx ile PHP'nin farklı sürümlerine sahip iki farklı web sitesinin nasıl yapılandırılacağını öğrendik. Umarım öğretici size yardımcı oldu.

## Keşfetmek
  * [Nginx'i ters proxy olarak nasıl kurar ve yapılandırır] [6]
  * [Uygulamanız için Nginx nasıl yük dengeleyici olarak kullanılır] [7]
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
