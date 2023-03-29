---
title: "Osticket kullanarak çevrimiçi yardım masası yazılımı nasıl kurulur" 
seoTitle: "Osticket kullanarak çevrimiçi yardım masası yazılımı nasıl kurulur" 
description: "Osticket yardım masasını kullanarak tüm destek isteklerinizi tek bir yerde yönetin. E-posta, telefon ve formlarla oluşturulan soruları web tabanlı biletlere dönüştürün." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Tüm destek isteklerinizi Osticket kullanarak tek bir yerde yönetin. E-posta, telefon ve formlarla oluşturulan soruları basit web tabanlı biletlere dönüştürün." 
url: /tr/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Osticket kullanarak tüm destek isteklerinizi tek bir yerde yönetin. E-posta, telefon ve formlarla oluşturulan soruları basit web tabanlı biletlere dönüştürün.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Osticket kullanarak çevrimiçi yardım masası yazılımı nasıl kurulur">}}

Osticket açık kaynaklı bir çevrimiçi yardım masası yazılımı çözümüdür. Osticket Yardım Masası, yüksek maliyetli ve karmaşık müşteri destek sistemlerine ücretsiz bir alternatiftir. Basit, hafif, güvenilir, web tabanlı ve kurulumu ve kullanımı kolaydır. En iyi yanı, tamamen ücretsiz. Bu öğreticideki aşağıdaki bölümleri ele alacağız:
  * [Osticket nedir?][1]
  * [Osticket'in artıları ve eksileri][2]
  * [Osticket nasıl kurulur?][3]
  * [Sonuç][4]

## Osticket nedir? {#osticket}

Osticket, kullanıcı dostu bir kontrol paneli ve gerçek zamanlı bir raporlama bileşeni sağlar. Kullanıcılar sadece birkaç kolay adımda giriş yapabilir ve biletleri oluşturabilir. Web siteniz, e -postanız veya telefonunuz aracılığıyla bilet oluşturabilirler. Daha sonra gelen biletler kaydedilecek ve temsilcilere atanacaktır. Temsilciler e -posta bildirimleri alacak ve sorunlarının çözülmesine yardımcı olmak için sorgulara yanıt verecektir. Müşteriler ve temsilciler yorum bölümünde ayrıntıları ve ilerlemeyi tartışabilir. Müşteriler, bu çevrimiçi yardım masası yazılımı tarafından sağlanan yerleşik müşteri portalı aracılığıyla isteklerini ve ilerlemelerini takip edebilirler.

## Osticket'in artıları ve eksileri {#pros}


#### Artılar
  * Osticket hem son kullanıcılar hem de destek aracıları için son derece kullanıcı dostudur.
  * Zengin özelliklerle paketlenmiş Osticket, aşırı karmaşık olmadan ihtiyacınız olan her şeye sahiptir.
  * Osticket tamamen ücretsiz ve açık kaynaklı bilet yönetimi yazılımıdır.
  * Hafif, güvenli, güvenilir ve yardım masası yönetimi yazılımı yüklenmesi kolaydır.
  * Apache, Nginx, LightTPD ve IIS vb.

#### Eksileri
  * Osticket, diğer ücretli yardım masası sistemleri gibi bilet analizi ve istatistikleri detaylandırmaz.
  * Kullanıcı arayüzü, diğer destek sistemlerine kıyasla çok basit ve temeldir.

## Osticket nasıl kurulur? {#how}

Ubuntu 18.04 LTS'ye Nginx ile Osticket'i kurmak için bu adımları izleyin.
  * Osticket için yeni bir dizin oluşturun.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Aşağıdaki komutları kullanarak en son Osticket kurulumunu indirin.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Bundan sonra, bu komutları kullanarak örnek dosyadan yapılandırma dosyası oluşturun.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Ardından, Osticket Web Dizini'nin sahipliğini 'WWW-DATA' kullanıcı ve grubuna değiştirin.
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Bundan sonra, yeni sanal ana bilgisayar yapılandırma dosyası oluşturun.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Ardından yapılandırma kodunu içine yapıştırın.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * Alan adınıza göre sunucu adını değiştirin. Dosyayı kaydet ve çık.
  * Şimdi bu sanal ana bilgisayar dosyasını aşağıdaki komutu kullanarak siteler özellikli klasöre bağlayın
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Aşağıdaki komutu kullanan herhangi bir yapılandırma hatasını test edin
```
nginx -t
```
  * Şimdi aşağıdaki komutu kullanarak nginx hizmetini yeniden başlatın
```
sudo systemctl restart nginx

```
  * Şimdi aşağıdaki şekilde gösterildiği gibi Kurulum Sihirbazı'nı başlatmak için herhangi bir web tarayıcısına etki alanı adınızı girin

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Osticket kullanarak çevrimiçi yardım masası yazılımı nasıl kurulur">}}

  * Php.ini'den gerekli uzantıları etkinleştirin ve “Devam” ı tıklayın.
* Gerekli tüm bilgileri doldurun ve “  **Şimdi Yükle”**  düğmesine tıklayın.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Osticket kullanarak çevrimiçi yardım masası yazılımı nasıl kurulur">}}

  * Veritabanı ayarlarında dbname, kullanıcı adı ve şifre girin.
  * Son olarak "Şimdi Yükle" düğmesine tıklayın
  * Kurulum tamamlandıktan sonra, sayfa başarı mesajı ile gösterilir.
  * Ardından, aşağıdaki komutu çalıştırarak yazma erişimini kaldırmak için ost-config.php iznini değiştirin:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## Çözüm {#conclusion}

Osticket, düşük bütçeli veya basit bir yardım masası sistemi isteyen şirketler için en uygun olan şirketler için en uygun olanıdır. Basit, hafif, güvenilir, açık kaynak ve tamamen ücretsiz çevrimiçi yardım masası yazılımıdır. Bu da Osticket'i daha yüksek maliyetli müşteri destek sistemlerine harika bir alternatif haline getiriyor. Osticket özellikleri ve kurulum kılavuzu hakkında daha fazla bilgi edinmek için lütfen aşağıdaki öğreticiye göz atın.

## Keşfetmek
[En iyi açık kaynak ve ücretsiz BT Yardım masası yazılımı][5]
[Popüler Ücretsiz Bilet Tabanlı Yardım Masası ve Müşteri Hizmetleri Sistemi][6]
[Osticket’in eklentisini geliştirmek için yeni başlayanlar rehberi][7]
[Osticket'te çoklu kiracılık nasıl uygulanır][8]
[WordPress ve Osticket kullanarak biletleme sistemini otomatikleştirin][9]



 [1]: #osticket
 [2]: #pros
 [3]: #how
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/
 [6]: https://products.containerize.com/helpdesk/osticket
 [7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
 [9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
