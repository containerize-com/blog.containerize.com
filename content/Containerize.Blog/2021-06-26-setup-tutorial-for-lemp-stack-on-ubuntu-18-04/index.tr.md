---
title: "Ubuntu 18.04'te Lemp Yığın için Kurulum Eğitimi" 
seoTitle: "Ubuntu 18.04'te Lemp Yığın için Kurulum Eğitimi" 
description: "LEMP yığını, web uygulamalarını geliştirmek ve dağıtmak için kullanılan bir yazılım yığınıdır. Ubuntu 18.04'e Nginx, MySQL ve PHP'yi nasıl kuracağınızı öğrenin." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Kurulum & amp; Web uygulamalarını geliştirmek ve dağıtmak için LEMP yığınını yapılandırın. Bu kılavuz, Ubuntu 18.04'e Nginx, MySQL ve PHP'yi kurmanıza yardımcı olacaktır." 
url: /tr/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Web uygulamalarını geliştirmek ve dağıtmak için LEMP yığınını yükleyin ve yapılandırın. Bu kılavuz, Ubuntu 18.04'e Nginx, MySQL ve PHP'yi kurmanıza yardımcı olacaktır.

{{< figure align=center src="images/lemp-banner.png" alt="Ubuntu'ya lemp yığınını yükleyin">}}


## Genel Bakış {#PerRerequisites}
Bu kılavuzda, Web uygulamalarını geliştirme ve dağıtma için Nginx, MySQL ve PHP (LEMP Yığın) yükleyeceğiz. Ayrıca Ubuntu Server 18.04'te bir web sunucusu sunucuya PHP uygulaması yapılandıracağız. Bu öğreticide aşağıdaki bölümleri ele alacağız.
  *[** Önkoşul **][1]
  *[** Lemp yığını nedir? **][2]
  *[** lemp kurulumu **][3]
  *[** Sonuç **][4]

## Önkoşullar {#prerequisites}
Yazılım yüklemeden önce aşağıdaki gereksinimleri karşılamalısınız.
  * Ubuntu işletim sistemine sahip sunucu
  *** sudo ** ayrıcalıklı kök dışı kullanıcı

## LEMP yığını nedir? {#Ne}
** LEMP STACK ** PHP tabanlı web uygulamalarını çalıştırmak için kullanılabilecek bir yazılım koleksiyonudur. Lemp, Linux, Nginx, MySQL ve PHP anlamına gelir. LEMP yığını, lamba yığınının bir varyantıdır. Hem lamba hem de LEMP, web uygulamalarını geliştirmek ve dağıtmak için popüler yazılım yığınlarıdır. Bu iki yazılım yığını arasında bir fark vardır. LAMP, Apache Web sunucusunu kullanırken, LEMP sunucusu Nginx Web sunucusunu kullanır.

## lemp yüklemesi {#installation}
Bu bölümde, Ubuntu 18.04'e Nginx, MySQL ve PHP'nin nasıl kurulacağına odaklanacağız. Her şeyden önce, aşağıdaki komutu çalıştırarak sunucu paketlerini güncellememiz gerekir.
```
$ sudo apt update
```

### nginx web sunucusunu yükleme
  *Ubuntu ** üzerine nginx yüklemek için aşağıdaki komutu çalıştırın.
```
$ sudo apt install nginx
```
  * Nginx yüklemesini bitirdikten sonra, web tarayıcınızı açın ve sunucu IP adresinizi yazın. Size Nginx Web Server Varsayılan Hoş Geldiniz sayfasını gösterecektir.

{{< figure align=center src="images/nginx-home-1.png" alt="Nginx Web Sunucusu Varsayılan Sayfası">}}


### MySQL yükleme
Şimdi, uygulama verilerinizin yönetimi için MySQL veritabanı sunucusunu yüklemeniz gerekir.
  *MySQL'i Ubuntu ** üzerine yüklemek için aşağıdaki komutu çalıştırın.
```
$ sudo apt install mysql-server
```
  * MySQL kurulumunu güvence altına almak için aşağıdaki komutu çalıştırın.
```
$ sudo mysql_secure_installation
```
  *Sizden Etkinleştirmek İsteyeceğiniz İstenir ** Parola eklentisini doğrulayın ** veya değil. Bunu etkinleştirmemek daha iyidir, N yazın ve bir sonraki adımda hareket etmek için Enter tuşuna basın.
  * Sonra, size aşağıda gösterildiği gibi birkaç soru soracaktır. Tüm soruları cevaplamanız gerekiyor.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Şimdi, MySQL Server çalışıyor ve çalışıyor. Aşağıdaki komutla test edebilirsiniz. Bir şifre istediği takdirde MySQL olanı değil, Ubuntu kök hesap şifrenizi girin.
```
$ sudo mysql
```
  * MySQL'den çıkmak için aşağıdaki komutu girin.
```
mysql> exit
```

### PHP yükleniyor
PHP'nin işlenmesi için PHP-FPM kurulumunu kapsayacağız. PHP-FPM FastCGI Process Manager'ı temsil eder. Nginx web sunucusunun PHP'nin işlenmesi için herhangi bir yerleşik işlevselliği yoktur, bu nedenle PHP-FPM kullanacağız. Ayrıca, Veri Yönetimi için MySQL ile PHP'yi iletmek için PHP-MYSQL'i yükleyeceğiz.
  *Ubuntu ** üzerine PHP yüklemek için aşağıdaki komutu çalıştırın.
```
$ sudo apt install php-fpm php-mysql
```
  * Şimdi, Web uygulamasını çalıştırmak için PHP kurulumu ve LEMP yığınının tüm yazılımı ile işiniz bitti.
  * Bu adımda, Nginx'e PHP işlemcisini dinamik içerik için kullanmasını söylemek için NGINX yapılandırma dosyası oluşturacağız. Nginx yapılandırma dosyası oluşturmak için aşağıdaki komutu çalıştırın.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Kodu Nginx yapılandırma dosyasına kopyalayın ve kaydedin.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * Temel bilgilere sahip olabilmeniz için bu yönergelere ve konum bloğuna kısa bir göz atalım.
      *** Dinle **: Nginx için bağlantı noktasını tanımlayabilirsiniz. HTTP için Port 80 ve HTTPS protokolleri için 443 kullanın.
      *** Kök **: Projenizin kök dizinini tanımlayın. Nginx, web sitesine veya web uygulamasına hizmet etmek için kullanacaktır.
      *** Dizin **: Dosyaların sunulması gereken sırayı tanımlayın. Dizin dosyası çağrıldığında, nginx index.php dosyasını teslim eder.
      *** Server_name **: Sunucunuzun etki alanı adını veya genel IP'yi tanımlayın.
      *** Konum /**: Bu konum bloğu ** try_block ** yönergesine sahiptir ve istenen URI ile eşleşir. Nginx, istenen dosyayı bulamazsa 404 hatasını döndürür.
      *** Konum ~ .php $ **: Bu konum bloğu PHP işlemini işler.
      *** Konum ~ /.ht**: nginx işlenmiyor **. Nginx, ** tüm yönergesini reddederek .htaccess dosyasını sunmaz.
  * Etkinleştirmek için yeni oluşturulan Nginx yapılandırma dosyası için SymLink oluşturun.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Sözdizimi hataları için nginx yapılandırma dosyasını test etmek için aşağıdaki komutu çalıştırın.
```
$ sudo nginx -t
```
  * Nginx web sunucusunu yeniden başlatın.
```
$ sudo systemctl restart nginx
```

### PHP'yi test edin
  * NGINX'in PHP sayfalarına doğru bir şekilde hizmet verdiğinden emin olmak için yapılandırmaları test etmek için PHP dosyası oluşturacağız.
  * Aşağıdaki komutu çalıştırarak Nginx web sunucusunun kök dizininde info.php dosyası oluşturun.
```
$ sudo nano /var/www/html/info.php
```
  * Aşağıdaki kodu içine ekleyin ve dosyayı kaydedin.
```
<?php
phpinfo();
```
  * Web tarayıcınızı açın ve etki alanı adı veya sunucu public IP'yi ve ardından http: // sunucu \ _ip \ _or_domain/info.php gibi php dosya adı yazın. Aşağıdaki sayfayı göreceksiniz.

{{< figure align=center src="images/info-php.png" alt="PHP bilgi sayfası">}}


## Sonuç {#Conclusion}
Bu öğreticide, ** lemp yığınının ** nasıl kurulacağı ve yapılandırılacağını tartıştık. Gördüğünüz gibi, yazılım yığın bileşenlerini yapılandırmak gerçekten kolaydır. Ayrıca, birkaç dakika içinde web uygulamaları oluşturmaya ve sunmaya başlayabilirsiniz.
Son olarak, [** Containerize.com **][5], en son açık kaynaklı ürünler hakkında blog yazıları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [** Web Server Çözümü Yığın **][6] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  *[** En İyi Açık Kaynak Web Server Çözümü Yığını **][7]
  *** [En popüler açık kaynaklı dijital adli araçlar][8] **
  *** [2021'de Top 5 Açık Kaynak Mesaj Kuyruğu (MQ) Yazılımı][9] **
  *** [En İyi Açık Kaynak Bulut Depolama ve Dosya Paylaşım Yazılımı][10] **
  *[** ubuntu'da nginx ile phpmyadmin nasıl kurulur ve güvence altına alır **][11]
  *[** Ubuntu'da nginx ile birden fazla PHP sürümü nasıl yüklenir **][12]
  *[** En Popüler En Popüler OSI onaylı 2021 Açık Kaynak Lisansları **][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
