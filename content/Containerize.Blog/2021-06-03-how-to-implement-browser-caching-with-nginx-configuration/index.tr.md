---
title: "Nginx yapılandırması ile tarayıcı önbelleği nasıl uygulanır" 
seoTitle: "Nginx yapılandırması ile tarayıcı önbelleği nasıl uygulanır" 
description: "Bir web sitesi ne kadar hızlı yüklenirse, bir ziyaretçi kalma olasılığı o kadar yüksektir. Bu öğreticide, Nginx yapılandırmasıyla tarayıcı önbelleğini uygulayacağız." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Bir web sitesi ne kadar hızlı yüklenirse, bir ziyaretçi kalma olasılığı o kadar yüksektir. Bu makale, NGINX yapılandırmalarıyla tarayıcı önbelleğini nasıl uygulayacağınıza dair size rehberlik eder." 
url: /tr/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## Bir web sitesi ne kadar hızlı yüklenirse, bir ziyaretçi kalma olasılığı o kadar yüksektir. Bu makale, NGINX yapılandırmalarıyla tarayıcı önbelleğini nasıl uygulayacağınıza dair size rehberlik eder.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Nginx Yapılandırması ile Browsr Caching nasıl uygulanır">}}

Nginx'in öğretici serimizde [Nginx'i yük dengeleyici olarak nasıl kullanacağımızı][1], [Nginx'i ters proxy olarak yapılandırın][2], [Nginx ile birden fazla PHP sürümünü kullanın][3] ve [HTAccess Rewrite'ı dönüştürdük Nginx yeniden yazma yönergeleri kuralları][4]. Bugünkü makalede, işletmelerin tarayıcı önbelleğinden yararlanarak kullanıcılarının deneyimlerini geliştirmelerine yardımcı olan çok önemli bir konuyu ele alıyoruz. Bu öğreticide, Nginx’in başlık modülünü kullanarak Nginx yapılandırmasıyla tarayıcı önbelleğini nasıl uygulayacağınız konusunda size rehberlik edeceğiz. Başlayalım!
* **[Tarayıcı önbelleğinden yararlanın][5]** 
* [ **Nginx başlık modülü** ][6]
* [ **E-TAGE ve IF-NONE-MATCH** ][7]
* [ **NGINX yapılandırması ile önbelleğe alınma önbelleğe alınma** ][8]
* [ **Sonuç** ][9]

## Tarayıcı önbelleğe alın {#browser-caching}

Bir web sitesi ne kadar hızlı yüklenirse, bir ziyaretçi web sitesinde kalma olasılığı o kadar artar. Çok sayıda görüntü ve etkileşimli içeriğe sahip web siteleri arka planda yüklenir Web sitesinin karmaşık bir görev açmasını sağlar. Sunucudan birçok farklı dosya talep etmekten oluşur. Bu isteklerin miktarını en aza indirmek, web sitenizi hızlandırmanın bir yoludur.
Web sitesi performansını iyileştirmek için bir yöntem, tarayıcı caching_'i geliştirmektir. Tarayıcı önbellekleme, sayfa hızını artırmak için önbellek mekanizmasında büyük bir rol oynar. Web sitesi için kullanılan CSS, JS, JPEG, PNG, vb. Gibi statik dosyalar, gelecekteki erişim için ziyaretçinin bilgisayarına kaydedilebilir. Ziyaretçi web sitenizde yeni bir sayfayla karşılaştığında, yukarıdaki dosyalara sağlanan sunucunuz yerine ziyaretçinin bilgisayarından erişilebilir, bu da sayfa yük hızını muazzam bir şekilde artıracaktır.

## Nginx’in başlık modülü {#header-module}

_Ngx \ _http \ _headers_module_ modülü, bir yanıt üstbilgisine “_Expires_” ve “_Cache-control_” başlık alanlarının ve keyfi alanlarının eklenmesine izin verir. Bu HTTP başlıklarını ayarlamak için başlık modülünü kullanabiliriz. Başlık modülü bir çekirdek Nginx modülüdür, yani kullanılmak için ayrı ayrı kurulması gerekmez.
Örnek yapılandırma şuna benziyor:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## E-etiket ve if- {#etage}

Test.html, test.jpg, test.css ve test.js. Varsayılan olarak, tüm dosyalar aynı varsayılan önbellek davranışına sahip olacaktır. Yerel Nginx sunucumuzdan bir dosya talep etmek için aşağıdaki komutu kullanarak bir dosyanın yanıt üstbilgilerini kontrol etmek ve yanıt başlıklarını gösterir:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
İkinci ila son satırda, istenen dosyanın bu özel revizyonu için benzersiz bir tanımlayıcı içeren _etag_ başlığını bulacaksınız. Son _curl_ komutunu tekrar tekrar yürütürseniz, tam olarak aynı ETAG değerini bulacaksınız.
Bir web tarayıcısı kullanılırken, _etag_ değeri depolanır ve kullanıcı sayfayı yenilediğinde veya herhangi bir nedenle tarayıcı tarafından aynı dosya gerektiğinde _if-none-match_ istek başlığı ile sunucuya geri gönderilir.
Bunu aşağıdaki komutla komut satırında simüle edebiliriz.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Benzersiz tanımlayıcıya dikkat edin, önceki _curl_ çağrımızdan aldığımız yanıt değeri ile eşleşmelidir. Yanıt bu sefer farklı olacak:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Bu kez, Nginx **304 ile değiştirilmedi** . Dosyayı tekrar ağ üzerinden göndermez; Bunun yerine, tarayıcıya zaten yerel olarak indirdiği dosyayı yeniden kullanabileceğini söyleyecektir. Bu, ağ trafiğini azalttığı için yararlıdır. Ancak tarayıcı hala sunucudan yanıt almak için bir HTTP çağrısı yapmak zorundadır, bu hala biraz zaman alır.

## Nginx yapılandırmasıyla önbelleğe sahip tarayıcıdan yararlanın {#nginx-configuration}

Önceki örneğimizde, e-etiket ve if-eşleşmenin ağ trafiğini azaltmanıza nasıl yardımcı olduğunu açıkladık. Ancak `ETAG` ile ilgili sorun, tarayıcının her zaman sunucuya önbelleğe alınmış dosyasını yeniden kullanıp kullanamayacağını soran bir istek göndermesidir. Ve bu, isteği yapmak ve yanıtı almak için hala zaman alıyor.
Şimdi Nginx’in başlık modülünün yardımıyla, tarayıcının sunucuya açıkça sormadan bazı dosyaları yerel olarak önbelleğe almasını sağlayacağız.
Nginx'te Nginx yapılandırma dosyanıza aşağıdaki 3 satırı ekleyin, Nginx'te statik içeriğe önbellek
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
İlk satır, Nginx'e 30 gün (30D) istemci tarayıcısındaki içeriği önbelleğe almasını söyler. Bu dönemden sonra, kullanıcıdan gelen herhangi bir yeni istek, istemci tarayıcısından önbellek yeniden doğrulama ve güncelleme ile sonuçlanacaktır.
Yukarıdaki satırları _location_, _server_ veya _http_ bloklara yerleştirebilirsiniz.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Bunları konum bloğuna yerleştirdiğinizde, yalnızca o konumun sunulan içeriği önbelleğe alınacaktır. Yukarıdaki durumda, yalnızca / statik / talepleri önbelleğe alınır.
Belirli dosya türlerini önbelleğe almak istiyorsanız, konum bloğunu kullanarak bunu yapabilirsiniz.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
Yukarıdaki örnekte, JS, JPG, CSS, vb. Gibi çeşitli dosya türlerini önbelleğe alıyoruz.
Benzer şekilde, herhangi bir konum bloğundan önce önbellek yapılandırmasını _server_ bloğuna yerleştirebilirsiniz. Bu durumda, bu sunucudan gelen tüm yanıtlar önbelleğe alınacaktır. Veya _http_ bloğuna yerleştirebilirsiniz, bu durumda, Nginx yapılandırma dosyası tarafından desteklenen tüm sunucu istekleri önbelleğe alınır.

## Çözüm {#conclusion}

Nginx’in başlıklar modülü, cevaba keyfi başlıklar eklemek için kullanılabilir, ancak önbellek kontrol başlıklarını düzgün bir şekilde ayarlamak en kullanışlı uygulamalarından biridir. Web sitesinin performansını artırmanıza yardımcı olur, özellikle mobil taşıyıcı ağlar gibi daha yüksek gecikmeli ağlardaki kullanıcılar için. Bu öğreticide, Nginx yapılandırmasıyla tarayıcı önbelleğinden nasıl yararlanacağını öğrendik. Umarım bu, kullanıcınızın web sitenizdeki deneyimini geliştirmenize yardımcı olacaktır.

## Keşfetmek
  * [Ubuntu'da Nginx ile birden fazla PHP sürümü nasıl kurulur][3]
  * [NGINX'i ters proxy olarak nasıl kurar ve yapılandırır][2]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
