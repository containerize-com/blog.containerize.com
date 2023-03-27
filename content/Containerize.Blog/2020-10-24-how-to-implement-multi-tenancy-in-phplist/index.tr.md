---
title: "Phplist'te çok kiracılı uygulama nasıl yapılandırılır" 
seoTitle: "Phplist'te çok kiracılı uygulama nasıl yapılandırılır" 
description: "Phplist ücretsiz ve açık kaynaklı bir bülten yazılımıdır. Çok kiracılı uygulamayı yapılandırın ve bir uygulamanın birkaç örneğini paylaşılan bir ortamda çalıştırın." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Phplist'te çok kiracılı bir uygulama geliştirmek için öğretici. Çok kiracılı özellik, barındırma maliyetlerini azaltmak için birden fazla ana bilgisayar için tek bir kurulum kullanır." 
url: /tr/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## Phplist'te çok kiracılı bir uygulama geliştirmek için öğretici. Çok kiracılı özellik, barındırma maliyetlerini azaltmak için birden fazla ana bilgisayar için tek bir kurulum kullanır.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Çok kiracılı uygulama Phplist">}}

Bu makalede, **çok kiracılık neyi**ve Phplist'te**çok kiracılı uygulama** nasıl yapılandırabileceğimizi ele alacağız.

## Phplist nedir?
Pazarlama stratejisine karar verirken, e -posta pazarlaması her çevrimiçi dijital şirketin önemli bir parçasıdır. Phplist, işletmelerin geniş bir kitleye ulaşmalarını sağlar. Phplist, listeleri yönetmek ve bültenleri göndermek için **açık kaynak bülten yazılımı** yaygın olarak kullanılmaktadır. Şirketlerin bülten kampanyaları oluşturmasına, planlamasına, göndermesine ve analiz etmesine yardımcı olur. Phplist, analiz, segmentasyon, sıçrama işleme, eklentiler, API'ler ve daha fazlası gibi özellikleri destekler.

## Çok kiracılık nedir?
Multi-kiracılık, birçok müşterinin/sitenin bir yazılım uygulamasının tek bir örneği ile temsil edildiği bir mimaridir. Çok kiracılıkta, site kiracı olarak kabul edilir. Her kiracının yapılandırma, temalar, SMTP gibi özel özellikleri vardır.
Bulut bilişimin önemli bir yönü çok kiracılıktır. **Çok Kireli Mimari** , işletmelerin bakım maliyetlerini ve hızlı kiracı güncellemelerini azaltarak daha iyi bir yatırım getirisi elde etmelerine yardımcı olur. Ayrıca, çoklu kiracıların mimarisi üzerinde tasarlanan uygulamalar kolayca ölçeklenebilir.
Aşağıdaki yaklaşımları kullanarak çoklu kiracılık uygulayabiliriz.
  * Tüm kiracılar için paylaşılan veritabanı.
  * Her kiracı için ayrı veritabanı.
Phplist'te çok kiracılık uygulamak için her kiracı yaklaşımı için ayrı bir veritabanı kullanacağız.
  * [Teslim Talep Akışı][1]
  * [Kiracı için kurulum veritabanı][2]
  * [Kiracı için Nginx yapılandırın][3]

## Teslim Talep Akışı {#request}

  * Config.php dosyanızın bir yedeğini alın ve bunu yapılandırma dizininin altında bulabilirsiniz.
  * Yeni bir Config.php dosyası oluşturun ve siteleri/kiracıları işlemek için aşağıdaki kodu ekleyin.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Örnek.com'u alan adınızla değiştirin. Ayrıca her kiracı için bir yapılandırma dosyası oluşturmanız gerekir. Config.php'in yedekleme dosyasını kopyalayın ve config.example.com.php gibi yeni bir adla kaydedin.

## Kiracı için kurulum veritabanı {#database}

  * Mevcut Phplist veritabanının yedeğini alın. Yeni kiracı için bir veritabanı oluşturmak için kullanın.
  * Config.example.com.php dosyasını açın. Veritabanı kimlik bilgilerini ve diğer ayarları ortamınıza göre değiştirin.

## Kiracı için Nginx'i yapılandırın {#Nginx}

* Nginx dizinine gidin **CD/etc/nginx/siteler-BAĞLANTI** .
  * Varsayılan config.php dosyasını kopyalayın ve örnek.com gibi site adınızla kaydedin.
* **sudo nano örnek.com** ile örnek.com yapılandırması.
  * Kök yolunu, Server_Name ve diğer ayarları değiştirin.
* **sudo nginx -t** ile yapılan yapılandırmaları test edin
* Son olarak, **sudo ln -s /etc/nginx/sites-vailable/example.com/etc/nginx/sites-etkin/** 
* Yeni oluşturulan yapılandırma dosyasını yükleyebilmesi için **sudo SystemCtl yeniden başlatma nginx** çalıştırarak nginx web sunucusunu yeniden başlatın.

## Çözüm
Çok kiracılık yazılımının, bakım maliyetlerini azaltma, etkili kaynak kullanımı ve yüklenmesi kolay güncellemeler gibi tek kiracılık uygulamasına kıyasla bazı avantajları vardır. SaaS (hizmet olarak yazılım) yazılımı oluşturacaksanız, çok kiracılık mimarisini takip edebilir ve gerçek gücünün tadını çıkarabilirsiniz.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Phplist - Açık Kaynak Bülten ve E -posta Pazarlama Yazılımı][4]
  * [Phplist kullanarak bülten nasıl oluşturulur ve gönderilir][5]
  * [Phplist'te sıçrama nasıl kurulur ve işlenir][6]
  * [Phplist eklentisini geliştirmek için yeni başlayanlar rehberi][7]
  * [Phplist'te Gelişmiş Buluş Yönetimi ve Sıçrama Kuralları Kurulumu][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
