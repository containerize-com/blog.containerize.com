---
title: "Osticket Özelleştirme-Osticket'te çoklu kiracılık uygulayın" 
seoTitle: "Osticket Özelleştirme-Osticket'te çoklu kiracılık uygulayın" 
description: "Osticket'te çoklu kiracılığın uygulanması maliyetlerden ve kaynak kullanımından tasarruf edebilir. Bu makalede, çoklu kiracılık elde etmek için Osticket özelleştirme yapacağız." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "Çok kiracı Osticket Yardım Masası, tek bir kurulumdan birden fazla kiracı oluşturmanıza olanak tanır. Bu, web sunucusu kaynaklarının optimum kullanımını sağlar." 
url: /tr/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Çok kiracı Osticket Yardım Masası, tek bir kurulumdan birden fazla kiracı oluşturmanıza olanak tanır. Bu, web sunucusu kaynaklarının optimum kullanımını sağlar.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Osticket Özelleştirme - Osticket'te çoklu kiracılık uygulayın">}}

Bu makalede, çok kiracılık uygulamak için Osticket özelleştirmenin nasıl yapılacağını tartışacağız. Bu yazı aşağıdaki konuları kapsayacaktır:
  * [Osticket'e Genel Bakış][1]
  * [Çok Kencilik Genel Bakış][2]
  * [Çok kiracılığın faydaları][3]
  * [Uygulama][3]
  * [Sonuç][4]

## Osticket'e Genel Bakış: {#osticket}

[Osticket][5] açık kaynaklı bir çevrimiçi müşteri desteği web tabanlı yardım masası yazılımıdır. Sezgisel bir kontrol paneli ve gerçek zamanlı bir raporlama bileşeni sağlar. Kullanımı kolay sorular yönetimi modülüne sahiptir. Bu, telefonunuzdan, e-postanızdan ve web tabanlı formlarınızdan sorular oluşturmanıza olanak tanır. Bu, müşteri destek deneyiminin tüm bölümlerini yorumlar ve e -posta bildirimleri gibi uyarlamaya yardımcı olmak için çok sayıda seçenek sunar.

## Çok Kencilik Genel Bakış: {#multitenancy}

Çok kiracılık, bir uygulamanın birden fazla bağımsız örneğinin ortak bir ortamda çalıştığı uygulamayı ifade eder. Örnekler (kiracılar) mantıksal olarak izole edilir, ancak fiziksel olarak entegre edilir. Bir kuruluşun muhtemelen birden fazla departmanı olabilir. Böylece aynı uygulamanın birden fazla kiracı/örnek oluşturabilirler. Örneğin, bizim durumumuzda, aynı kuruluşun farklı alanları için bir yardım masası sistemi yapılandırılabilir. Yüzlerce kiracı olabilir, ancak hepsi aynı dosyaları ve dolayısıyla aynı depolamayı kullanacak. Bu, depolama maliyetlerini ve yükseltmeleri kolaylaştıracaktır. Geliştiricilerin dosyaları her site için ayrı ayrı değişiklik yapmak yerine tek bir yerden güncellemeleri gerekir.

## Çok kiracılığın faydaları nelerdir? {#benefits}

İşte çok kiracılığın bazı önemli faydaları
*  **Kaynaklar Optimizasyonu:**   Bir kiracı için ayrılmış bir makine verimli değildir. Çünkü bir kiracının makinenin tüm bilgi işlem gücünü kullanması muhtemel değildir. Paylaşım makineleri kaynak kullanılabilirliğini en üst düzeye çıkarır.
*  **Daha düşük maliyetler:**   Aynı kaynakları paylaşan birden fazla kiracıyla, her kiracının kendi özel altyapılarını gerektirdiğinden çok daha düşük olacaktır.
*  **Verimli barındırma:**   Ayrıca çok kiracı Osticket, ortak bir ortamda barındırma maliyetlerini minimumda bir şekilde düşürecektir.
*  **Güvenlik:**   Dış dünyayla daha az etkileşim ile kötü amaçlı yazılımlara maruz kalma azaltılır.
*  **Kolay Yükseltme**  : Dosyaları ayrı ayrı güncellemek yerine yalnızca tek bir yerde yükseltin. Bu çok zaman ve çaba tasarrufu sağlayacaktır.

## Çok kiracı ostiketin uygulanması: {#implementation}

  * “Main_db” olarak yeni bir boş veritabanı adları oluşturun.
  * Ardından, tüm kiracılar hakkında ayrıntılar tutacak “Kiracı” adlı tablo oluşturun.
  * Aşağıdaki alanlara sahip olacak:
  1. site_name
  2. URL
  3. db_name

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Osticket Özelleştirme - Osticket'te çoklu kiracılık uygulayın">}}

  * Site \ _Name Alanı kiracı adını tutacaktır. URL alanı kiracının tam URL'sini tutacaktır. DB \ _Name Alanı, yeni kiracı için oluşturulacak veritabanı adını tutacaktır.
  * Bundan sonra /include/ost-config.php dosyasını açın ve aşağıdaki kodu ekleyin
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  * Bu kod varsayılan veritabanı bağlantısını günceller. Önce mevcut kiracının URL'sini alacaktır. O zaman bu URL'ye göre veritabanının adını alacaktır. Uygulama hangi veritabanına bağlanacağını bu şekilde bilecektir. Her kiracının ayrı bir veritabanı olacaktır. Veritabanı kiracı URL'sine göre seçilecektir.
  * Yeni bir kiracı oluşturmak için, Nginx Server'da yeni kiracı alanı kurmanız yeterlidir. Bundan sonra mevcut Osticket veritabanını kopyalayın ve yeniden adlandırın. Son olarak girişi “Main_DB” veritabanının “kiracı” tablosuna ekleyin.

## Çözüm: {#conclusion}

Osticket, ücretsiz ve açık kaynaklı bir BT yardımcı masa yönetimi yazılımıdır. Ostickette ostickette çok kiracılık uygulamak için osticket özelleştirmelerinin maliyetleri tasarruf edebilmek, uygulamayı optimize etmek ve daha düşük kaynak gereksinimlerini nasıl yapmayı öğrendik. Geliştiricilerin birkaç basit adımda yeni kiracılar oluşturmaları hayatı kolaylaştıracaktır. Böylece aynı kurulumdan birden fazla Osticket kiracı oluşturun.

## Keşfetmek:
Osticket hakkında daha fazla bilgi edinmek için lütfen aşağıdaki sayfayı inceleyin:
  * [Osticket - Ücretsiz Açık Kaynak Yardım Masası Yazılımı][5]
  * [Osticket eklentisini geliştirmek için yeni başlayanlar rehberi][6]
  * [Osticket kullanarak çevrimiçi yardım masası yazılımı nasıl kurulur][7]
  * [WordPress ve Osticket kullanarak biletleme sistemini otomatikleştirin][8]



 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
