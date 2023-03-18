---
title: "Nginx'te GZIP Sıkıştırma kullanarak web sitenizi nasıl optimize edersiniz" 
seoTitle: "Nginx'te GZIP Sıkıştırma kullanarak web sitenizi nasıl optimize edersiniz" 
description: "Bu makalede, Nginx'teki GZIP sıkıştırma yoluyla dosya boyutlarını azaltarak web sitesi aktarım hızlarınızı optimize etmek için bir yöntemi tartışacağız." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Bu öğretici, Nginx'te GZIP sıkıştırma kullanarak dosya boyutlarını azaltarak web sitenizin performansını nasıl optimize edeceğinizi ve hızlı hale getireceğinizi size yönlendirir." 
url: /tr/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Bu eğitim, Nginx'te GZIP sıkıştırma kullanarak dosya boyutlarını azaltarak web sitenizin performansını nasıl optimize edeceğiniz ve hızlı hale getireceğiniz konusunda size rehberlik eder.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Nginx'te GZIP Sıkıştırma Nasıl Etkinleştirilir">}}

Bu makale Nginx hakkında öğreticilerimizin devamıdır. Şimdiye kadar Nginx'i yük dengeleyici olarak nasıl kullanacağımızı, Nginx'in ters proxy olarak nasıl kullanılacağını ele aldık. Ve şimdi bu öğretici başka bir zorlu soruyu “Nginx'te GZIP Sıkıştırma Kullanarak Web Sitenizi Nasıl Optimize edeceğiniz” sorusunu kapsıyor. Bu öğreticide, Nginx'te GZIP sıkıştırmasını nasıl etkinleştireceğiniz konusunda size adım adım rehberlik edeceğiz. Öyleyse başlayalım!
  * [Sıkıştırma ile web sitesi optimizasyonu] [1]
  * [GZIP Sıkıştırma Nedir?] [2]
  * [GZIP sıkıştırma nasıl çalışır?] [3]
  * [Nginx'te GZIP sıkıştırmasını etkinleştir] [4]
  * [GZIP sıkıştırmasını doğrulayın] [5]
  * [Sonuç] [6]

## Sıkıştırma ile web sitesi optimizasyonu {#optimize}
Bir web sitesinin performansı bir dizi faktöre bağlıdır. Kısmen bağlı olduğu faktörlerden biri, bir kullanıcının tarayıcının sunucunuzdan indirmesi gereken tüm dosyaların boyutudur. Aktarılan bu dosyaların boyutunu azaltmak veya sıkıştırma, web sitenizin kullanıcı için daha hızlı yüklenmesini sağlayabilir. Ayrıca, ölçülü bağlantılarda bant genişliği kullanımı için ödeme yapmanız durumunda web siteniz için faturayı azaltabilir. Böylece sıkıştırma, web sitesi optimizasyonunuzda çok hayati bir rol oynayabilir.
Google ve diğer arama motorları bir web sitesinin kullanıcı deneyimini (UX) sıralama algoritmalarında kritik bir faktör olarak görüyorlar. En iyi derecelendirmeler için web sitenizi geliştirmek ve optimize etmek daha önemli hale geldi. Dikkat edilmesi gereken en önemli faktörler arasında sayfa hızı ve yükleme süreleri. Ve web sitenizi hız ve performansınızı iyileştirmenin en hızlı ve en kolay yolu, web sitenizde GZIP sıkıştırmasını etkinleştirmektir.

## GZIP Sıkıştırma Nedir? {#What-gzip}
GZIP, dosya sıkıştırma ve dekompresyon için kullanılan bir ** dosya biçimi ve yazılım uygulaması **'dır. Web sunucuları veya diğer yazılımlar, kullanıcıların tarayıcılarına gönderilmeden önce veri dosyalarını sıkıştırmak için GZIP Sıkıştırma kullanır. Bu, web sitenizi daha hızlı hale getiren dosya indirme süresini azaltır. Tüm modern tarayıcılar GZIP sıkıştırmasını destekler.
Dosya ve klasör sıkıştırmasını etkinleştirebilmeniz için Web sunucunuzda GZIP sıkıştırmanın etkinleştirilmesi gerektiğini de belirtmek önemlidir. Kısacası, Nginx'te GZIP sıkıştırmasını nasıl etkinleştireceğinizi göreceğiz.

## GZIP sıkıştırma nasıl çalışır? {#nasıl gzip}
En popüler sıkıştırma yöntemi olan GZIP, Web sunucuları ve tarayıcılar tarafından içeriği internet üzerinden iletilirken sıkıştırmak ve doldurmak için kullanılır. Çoğunlukla kod ve metin dosyalarında kullanılır, GZIP JavaScript, CSS ve HTML dosyalarının boyutunu%90'a kadar azaltabilir.
Varsayılan olarak, GZIP Sıkıştırma görüntüleri veya videoları sıkıştırmaz. Bu nedenle Google Pagespeed Insights gibi web sitesi hız test araçlarının çoğu GZIP sıkıştırmasını sağlamayı şiddetle tavsiye eder.
Bir web sunucusu bir web sayfası için bir istek aldığında, web sunucusu tarayıcının GZIP'yi destekleyip desteklemediğini kontrol etmek için isteğin başlığını kontrol eder. Öyleyse, GZIP uygulamadan önce sunucu sayfa için işaretlemeyi oluşturur. GZIP, HTML işaretlemesini daha sonra son kullanıcıya teslim edilen sıkıştırılmış bir veriye dönüştürür. Son kullanıcı sıkıştırılmış verileri aldığında, tarayıcıları onu açar.

## Nginx'te GZIP Sıkıştırma'yı Etkinleştir {#ENABLE-GZIP}
NGINX GZIP yapılandırmasını değiştirmek için, ana Nginx yapılandırma dosyasını “_vi_” veya en sevdiğiniz metin düzenleyicinizle açın:
```
sudo vi /etc/nginx/nginx.conf
```
Şuna benzeyen _gzip_ ayarları bölümünü bulun:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Gördüğünüz gibi GZIP varsayılan olarak _gzip açık; _, ancak başka yorumlanan GZIP ayarları da vardır.
Sıkıştırmayı istediğiniz dosya türlerinde sıkıştırmayı etkinleştirmek için _gzip_types_ ayarını etkinleştirebiliriz. Örneğin
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Yeni ayarları yürürlüğe koymak için şimdi Nginx'i yeniden başlatın.

## GZIP Sıkıştırma'yı doğrulayın {#Perify}
Artık GZIP sıkıştırmasını etkinleştirdiğimize göre, doğrulayalım.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
Bu filetype için sıkıştırma zaten etkinleştirildiğinden yanıt aynı kalacaktır:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## Sonuç {#Conclusion}
Bu makalede, dosya transferlerini hızlandırmak için NGINX GZIP modülünü kullanabileceğinizi öğrendik. GZIP modülünü kullanarak Nginx'te GZIP sıkıştırmasını nasıl etkinleştireceğinizi adım adım gösterdik. [GZIP modülü] [7] için resmi belgeler, bir göz atmak isteyebileceğiniz diğer yapılandırma yönergelerini listeler. Umarım bu öğretici web sitenizin performansını ve hızını optimize etmenize yardımcı olur.

## Keşfetmek
  * [Ubuntu'da nginx ile birden fazla PHP sürümü nasıl kurulur] [8]
  * [NGINX'i ters proxy olarak nasıl kurar ve yapılandırır] [9]
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
