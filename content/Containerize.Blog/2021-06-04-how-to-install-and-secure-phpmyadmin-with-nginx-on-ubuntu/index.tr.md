---
title: "Ubuntu'da nginx ile Phpmyadmin nasıl kurulur ve güvence altına alırsınız" 
seoTitle: "Ubuntu'da nginx ile Phpmyadmin nasıl kurulur ve güvence altına alırsınız" 
description: "PhpmyAdmin, PHP'de yazılmış açık kaynaklı veritabanı yönetimi yazılımıdır. PHPMyAdmin'in Nginx ile nasıl yükleneceğini öğreneceğiz ve MySQL'i PhpmyAdmin üzerinden yöneteceğiz." 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PhpmyAdmin, PHP'de yazılmış açık kaynaklı grafik web arayüzü veritabanı yönetim aracıdır. Bu öğreticide, PhpmyAdmin'in Nginx ile nasıl kurulacağını öğreneceğiz." 
url: /tr/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PhpmyAdmin, PHP'de yazılmış açık kaynaklı grafik web arayüzü veritabanı yönetim aracıdır. Bu öğreticide, PhpmyAdmin'in Nginx ile nasıl kurulacağını öğreneceğiz.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Ubuntu'da nginx ile Phpmyadmin nasıl kurulur ve güvence altına alırsınız">}}


## **Genel Bakış** 
PHPMyAdmin, kullanıcılara sezgisel bir arayüz aracılığıyla MySQL veya MariaDB sunucularını yönetmek için bir web arayüzü sunan ücretsiz ve açık kaynaklı bir veritabanı yönetim aracıdır. Bu, popüler barındırma sağlayıcılarının çoğu tarafından Web yöneticilerinin PhpmyAdmin'de veritabanı oluşturmasına ve veritabanlarını yönetmesine, SQL uyarılarını yürütmesine, içe aktarma ve dışa aktarma verilerini kolayca vermeye izin vermek için sunulan yaygın olarak desteklenen yazılımlardan biridir. PHPMyAdmin'deki MySQL veya MariaDB veritabanlarınıza, bir PHP geliştirme ortamının yanında çalışan bir grafik web arayüzü aracılığıyla NGINX ile erişebileceksiniz.
Bu kılavuzda, PHPMyAdmin'in Ubuntu 20.04'te Nginx ile nasıl kurulacağı ve güvence altına alınacağını açıklayacağız. MySQL veritabanları ve tablolarla kolayca çalışmasına izin vermek için phpmyAdmin'i Ubuntu sunucusuna yüklemeniz ve yapılandırmanız gerekir. Öyleyse, ubuntu 20.04 / 20.10'da nginx ile phpmyadmin nasıl kurulacağını ve güvence altına alacağınızı öğrenelim:
  * Önkoşullar
  * Phpmyadmin'i kurun
  * Veritabanı yapılandırın
  * Sembolik bağlantı oluştur
  * PhpmyAdmin'e erişmek
  * Mysql süper kullanıcı oluştur
  * Güvenli phpmyadmin
  * Çözüm

## 1. Adım: Önkoşullar {#id-prerequisites}

Bu kılavuzu takip etmek için, yerel bilgisayarınızda veya ön koşullu uzak bir sunucuda çalışan Ubuntu 20.04 sunucusuna ihtiyacınız olacaktır.
  * Sudo ayrıcalıkları ve UFW güvenlik duvarını etkinleştiren kök olmayan bir kullanıcı olarak sunucuya erişmelisiniz.
  * Ubuntu'ya zaten Nginx, MySQL ve PHP yüklediğiniz varsayılmaktadır.
  * PHPMyAdmin kimlik doğrulaması için MySQL kimlik bilgilerini kullandığından, sunucu ve istemci arasında şifreli trafiği etkinleştirmek için SSL/TLS sertifikalarını da yüklemelisiniz.
Bu şekilde, veritabanına web arayüzü aracılığıyla erişmek için MySQL Server'a bağlanmak üzere PhpmyAdmin'i yüklemeye ve güvence altına almaya başlayalım.

## 2. Adım: PhpmyAdmin'i kurun {#id-1-install-phpmyadmin}

PhpmyAdmin'i Ubuntu 20.04'e yüklemeden önce tüm ön koşulları sisteminize başarılı bir şekilde yüklediğinizden emin olun. Paketler listesini güncelleyerek başlayın:
```
sudo apt update 
```
Şimdi, PHPMyAdmin paketini varsayılan Ubuntu depolarından Ubuntu 20.04 / 20.10'a yüklemek için aşağıdaki komutu çalıştırın:
```
sudo apt install phpmyadmin

```
Devam etmesi istendiğinde **y**ve **girin** . Bir web sunucusu seçmeniz isteniyorsa, aşağıdaki gibi **nginx** için bir seçenek olmadığı için, Tamam'ı seçmek için **sekme** tuşuna basın ve sonra**bir web sunucusu seçmeden devam etmek için** girin.

{{< figure align=center src="images/mysql-setup.png" alt="Ubuntu 20.04'e Nginx için PhpmyAdmin'i yükleyin ve güvenli hale getirin">}}


## 2. Adım: Veritabanını Yapılandırın {#id-1-install-phpmyadmin}

Ardından, DBConfig-Common aracını kullanarak veritabanını yüklemek ve ayarlamak için **evet**seçin ve**girin****girin**:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Phpmyadmin ile mysql nasıl yapılandırılır">}}

MySQL uygulama şifresi, MySQL veritabanı ile iletişim kurmak için PhpmyAdmin tarafından dahili olarak kullanılır. Yeni veritabanı olarak kaydolmak için PhpmyAdmin DBMS için yeni bir şifre girin, Tamam'ı seçin ve devam etmek için Enter tuşuna basın.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Phpmyadmin için MySQL nasıl yapılandırılır">}}

Parolayı onaylamanız, aynı şifreyi girmeniz, **Tamam**seçmeniz ve**Enter** tuşuna basın. Tebrikler! PhpmyAdmin sisteminize başarıyla kuruldu.

## 4. Adım: Sembolik Bağlantı Oluşturun {#id-2-create-symbolic-link}

PHPMyAdmin dosyalarını sunacak şekilde Nginx'in nasıl yapılandırılacağı birkaç yol vardır. Etki alanınızın sunucu bloğu zaten PHP isteklerini sunacak şekilde ayarlanmışsa, PHPMyAdmin Nginx yükleme dosyalarından/usr/share/phpmyAdmin'den etki alanı belge kök dizinine sembolik bir bağlantı oluşturmanız gerekir. Ubuntu 20.04/20.10'daki Nginx belge kökünün varsayılan konumu/var/www/html/olmalıdır ve INS kurulumunuza bağlı olarak farklı olabilir. Belge kökü örneğin /var/www/example.com/public_html adresinde bulunabilir.
Daha sonra, PhpmyAdmin dizininden/usr/share/phpmyAdmin'den belge kökü ile sembolik bir bağlantı oluşturacağız. Burada belge kökümüzün/var/www/html/olduğunu varsayacağız ve bunun sonuna phpmyadmin ekleyeceğiz. Bu, PhpmyAdmin'e url örneğinden erişmemize izin verecek.
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Adım 5: PhpmyAdmin'e Erişim {#id-3-test-phpmyadmin}

Artık sunucunuzun ana bilgisayar/alan adı veya genel IP adresini ziyaret ederek ve ardından en sevdiğiniz web tarayıcısında Domain.com/phpmyAdmin'i ziyaret ederek PHPMyAdmin Web arayüzüne erişebilmeniz gerekir. Örneğin http://example.com/phpmyadmin veya http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
MySQL 5.7 ve üstü ile çalışan Ubuntu sunucularında, MySQL varsayılan kök hesabını kullanarak ücretsiz phpmyAdmin veritabanına giriş yapamazsınız ve _ “_@’ localhost ’kullanıcısı için reddedilen erişim) _ gibi bir hata alırsınız. Bunun yerine, sadece PhpmyAdmin için yeni bir süper kullanıcı hesabı oluşturmalısınız. Ardından, PhpmyAdmin'e giriş yapmak için MySQL kök hesabı oluşturacağız.

## Adım 6: MySQL Superuser Oluştur {#id-4-create-mysql-superuser}

Terminalde, ilk kez PhpmyAdmin MySQL veritabanını yüklediğinizde bir kök şifre oluşturmuş olabileceğiniz MySQL kök şifrenizi kullanarak MySQL'e kaydolarak başlayın.
```
sudo mysql -u root -p
```
MySQL'e giriş yaptıktan sonra, seçtiğiniz kullanıcı adı ile yeni bir MySQL süper kullanıcısı ekleyin. Bu örnekte buna Yasiradmin diyoruz. [Güçlü bir şifre oluşturmak için buraya tıklayın][2] ve aşağıdaki yeni \ _password \ _Here'nin değiştirin.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Şimdi yeni kullanıcı Yasiradmin'e Superuser ayrıcalıkları verin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Şimdi MySQL oturumundan çıkın. Artık bu yeni süper kullanıcı kimlik bilgilerini kullanarak PhpmyAdmin'e erişebilmelisiniz.

{{< figure align=center src="images/image.png" alt="Ubuntu 20.04'te phpmyadmin nasıl giriş yapılır">}}

Phpmyadmin Nginx'i güvence altına almak için PhpmyAdmin için bazı ek güvenlikler oluşturmanız şiddetle tavsiye edilir. PhpmyAdmin URL'sini belirsiz URL gibi bir şeye değiştirebilmelisiniz.

## Adım 7: Güvenli Phpmyadmin {#id-6-secure-phpmyadmin-recommended}

Daha sonra, ek bir güvenlik katmanı sağlamak için Nginx'te kimlik doğrulama ayarlamak istiyoruz. Şimdi hem Nginx hem de Apache2 sunucularıyla çalışan .htpasswd dosyasını oluşturabilen Apache2-Uutils'i yükleyeceğiz.
```
sudo apt install apache2-utils
```
Yüklendikten sonra .htpasswd dosyasını oluşturabiliriz. Seçtiğiniz kullanıcı adını değiştirin. [Bir şifre oluşturun][3] ve güvende tutun.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Artık kullanıcı adınızı ve şifreli şifrenizi içeren bir .htpaswd dosyası olacaktır. Bunu aşağıdaki komutla kontrol edebilirsiniz:
```
cat /etc/nginx/.htpasswd
```
Kullanıcı adı gibi bir şey görmelisiniz: $ nissdfsdf4435sdtsklfwmmg1sfdsdgg4
Artık Nginx yapılandırma dosyamıza 2 yönerge eklememiz gerekiyor. Yapılandırma dosyasının konumu, varsayılan dosya yolu genellikle/etc/nginx/sites-kullanılabilir/varsayılan olarak olmasına rağmen, kurulumlarınıza bağlı olarak değişebilir. Birden çok etki alanı ayarlarsanız, yapılandırma dosyanız /etc/nginx/sites-vailable/example.com gibi bir yerde bulunabilir
Bu örnekte, nginx yapılandırma dosyasının/etc/nginx/sites-kullanılabilir/varsayılan olduğunu varsayacağız. Düzenlemek için dosyayı açın.
```
sudo nano /etc/nginx/sites-available/default
```
Aşağı kaydırın ve konum bloklarını arayın ve bu örnekte ASPOS_HIDDEN'de gizlenmiş PhpmyAdmin klasörünüzün adıyla altındaki yeni bir blokta yapıştırın.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Dosyayı kaydedin ve çıkın (CTRL + X tuşuna basın, Y tuşuna basın ve ardından Enter tuşuna basın). Nginx yapılandırma dosyasının geçerli olup olmadığını kontrol edin, aksi takdirde sunucu komutu çalıştırarak yeniden başlatabilir.
```
sudo nginx -t
```
Geçerliyse, Nginx yapılandırmayı yeniden yükleyin.
```
sudo service nginx reload
```
Şimdi örnek.com/aspose_hidden'i ziyaret ederken, bir kimlik doğrulama penceresi sunulmalıdır.

{{< figure align=center src="images/auth3.png" alt="Phpmyadmin nasıl güvence altına alınır">}}

Hepiniz Ubuntu sunucusunda PhpmyAdmin kurulumları ile işiniz bitti.

## Çözüm: {#id-what-next}

Tebrikler, PHPMyAdmin'i Ubuntu 20.04 / 20.10 sunucusu için Nginx ile başarıyla yüklediniz ve şimdi MySQL'i PhpmyAdmin üzerinden uygulayabilirsiniz. Şimdi, MySQL veritabanları, kullanıcılar, tablolar, MySQL sorguları ve diğer çeşitli işlemler oluşturmaya başlayabilirsiniz.
Sorularınız varsa, aşağıda yorum bölümünde bana anlatmaktan çekinmeyin.

## Keşfetmek
Aşağıdaki daha ilgili makaleleri de beğenebilirsiniz:
  * [Apache'yi Ubuntu/Debian için ters proxy olarak nasıl yapılandırır][4]
  * [Ubuntu 20.04'te Let's Şifreleme ile Nginx'i nasıl güvence altına alır ve şifrelersiniz][5]
  * [Ubuntu/Debian'da Nginx'te HTTP/2 desteği nasıl yapılandırılır][6]
  * [AWS Üretim Sunucusunda Yolcu ile Nginx Nasıl Kurulur][7]
  * [Ubuntu'da Apache ile OwnCloud'u nasıl kurar ve yapılandırır][8]



[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
