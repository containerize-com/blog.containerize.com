---
title: "HTAccess Yeniden Yazma Kurallarını Nginx Yeniden Yazma Yönergeleri'ne nasıl dönüştürülür" 
seoTitle: "HTAccess Yeniden Yazma Kurallarını Nginx Yeniden Yazma Yönergeleri'ne nasıl dönüştürülür" 
description: "Nginx .htaccess yeniden yazma kurallarını desteklemez, bu nedenle geliştiriciler bu kuralları NGINX yeniden yazma yönergesine dönüştürmelidir. Bu dönüşümü nasıl gerçekleştireceğinizi öğrenelim." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "Nginx, HTAccess yeniden yazma kurallarını desteklemez ve geliştiriciler bu kuralları NGINX yeniden yazma direktiflerine dönüştürmeyi gerektirir. Bu dönüşümün nasıl yapılacağını öğrenelim." 
url: /tr/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## Nginx, HTAccess yeniden yazma kurallarını desteklemez ve geliştiriciler bu kuralları NGINX yeniden yazma yönergesine dönüştürmek gerekir. Bu dönüşümün nasıl yapılacağını öğrenelim.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Nginx Direktiflerine Yeniden Yazma Kurallarını Dönüştür">}}

Son öğreticimizde [Ubuntu'da NGINX ile birden fazla PHP sürümü nasıl kurulacağını] öğrendik [1]. Apache en popüler web sunucularından biridir, ancak son zamanlarda Nginx kendisini Apache için bir rakip olarak kurmuştur. Ancak Nginx, HTAccess yeniden yazma kurallarını desteklemiyor. Dolayısıyla, bu makalede, HTAccess yeniden yazma kurallarını NGINX yeniden yazma yönergelerine nasıl dönüştüreceğimizi öğreneceğiz. Başlayalım!
  *** [Nginx Yeniden Yazma Kuralları] [2] **
  *[**. Htaccess Yeniden Yazma Kuralları **] [3]
  *[** .htaccess Yeniden Yazma Kurallarını Nginx Yeniden Yazma Direktiflerine Dönüştürme **]
  *[** Sonuç **] [5]

## nginx yeniden yazma kuralları {#nginx}
Yeniden Yazma Kuralları, bir müşteri isteğinde URL'nin bir kısmını veya tamamını değiştirir, genellikle istemcilere istedikleri kaynağın şimdi farklı bir yerde bulunduğunu veya Nginx içindeki işlem akışını kontrol etmek için bildirmek için. Örneğin, içeriğin dinamik olarak oluşturulması gerektiğinde istekleri bir uygulama sunucusuna iletmek. Try_files yönergesi genellikle bu amaç için kullanılır.
General Purpose Nginx yeniden yazımı için iki yönerge _return_ ve _rewrite_ ve _try_files direktifi, istekleri uygulama sunucularına yönlendirmenin kullanışlı bir yoludur.
İade Direktifi, iki genel amaçlı direktifin daha basittir. Dönüşü bir sunucu veya konum içeriğine ekliyorsunuz.
Örneğin, _return_ yönergesini kullanarak istemcileri yeni bir etki alanı adına yönlendiren çok basit bir örnek.
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Peki ya URL'ler arasında karmaşık ayrımlar yapmanız, orijinal URL'deki öğeleri yakalamanız veya yolda öğeleri değiştirmeniz veya eklemeniz gerekiyorsa? Bu gibi durumlarda _rewrite_ yönergesini kullanabilirsiniz.
İşte yeniden yazma yönergesini kullanan bir örnek Nginx yeniden yazma kuralı. Dize /şarkılarla başlayan ve daha sonra yolun ilerleyen saatlerinde /media /veya / /ses /dizinini içerir. Bu öğeleri / mp3 / ile değiştirir ve uygun dosya uzantısını .mp3 veya .ra ekler. 1 $ ve 2 $ değişkenler değişmeyen yol öğelerini yakalar. Örnek olarak,/download/cdn-west/media/file1 /download/cdn-west/mp3/file1.mp3 olur. Dosya adında (.flv gibi) bir uzantı varsa, ifade onu çıkarır ve .mp3 ile değiştirir.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .Htaccess Yeniden Yazma Kuralları {#apache}
.Htaccess dosyası, bir web sitesinin erişilebilmesi, engellenmesi ve yeniden yönlendirilebileceği çeşitli yolları denetler. Bunu bir veya daha fazla .htaccess yeniden yazma kurallarını kullanarak yapar. Bu yeniden yazmalar Apache’nin Mod_rewrite modülü tarafından yürütülür.
Mod_rewrite, gelen URL isteklerini dinamik olarak düzenli olarak düzenli olarak değiştirmenin bir yolunu sağlar. Bu, URL'leri dahili URL yapınıza istediğiniz şekilde eşlemenize olanak tanır. Bu aynı zamanda harici URL'lerinizi temizlemek ve daha sonra bunları çirkin görünen dahili URL'lerle eşlemek için kullanılır.
Örneğin.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## Dönüştür.
Yukarıdaki örneğimizde WWW olmayan bir URL'yi bir www URL'sine yönlendirmek için gösterdiğimiz gibi, aynı .htaccess yeniden yazma kuralını Nginx yeniden yazma yönergesine dönüştürelim.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Burada biri _yourdomain.com_ ve diğeri _www.yourdomain.com_ için iki ayrı _server_ bloğu oluşturduk. Ve _yourdomain.com_ için _server_ bloğunda, www olmayan URL'yi www URL'sine yönlendirmek için _return_ yönergesini kullanıyoruz.
İade Direktifi ile gerçekleştirdiğimiz aynı yönlendirme, yeniden yazma yönergesiyle de yapılabilir, ancak önerilmez.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
Daha fazla netlik uğruna WordPress HTAccess kurallarını Nginx Try_Files Direktifine dönüştürelim.
[WordPress.org dağıtır] [6] Temel bir varsayılan **. Htaccess ** Dosya aşağıdakilerle. HTAccess, oldukça uygun bağlantıları sağlayan kuralları yeniden yazın:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
İşte dönüştürülmüş Nginx Try_Files Direktifi
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Sonuç {#Conclusion}
Bu öğreticide, Apache’nin .htaccess yeniden yazma kurallarını ve bu .htaccess yeniden yazma kurallarını NGINX yeniden yazma yönergelerine nasıl dönüştürebileceğimizi araştırdık. Ayrıca URL'leri yeniden yazmak için kullanılabilecek farklı NGINX yönergelerini araştırdık. Ayrıca hem Nginx hem de Apache için örnek yeniden yazma kuralları verdik. Umarım öğretici sizin için yararlıdır.

## Keşfetmek
  * [Ubuntu'da nginx ile birden fazla PHP sürümü nasıl kurulur] [1]
  * [NGINX'i ters proxy olarak nasıl kurar ve yapılandırır] [7]
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
