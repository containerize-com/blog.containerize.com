---
title: "WordPress'te GZIP Sıkıştırma Nasıl Etkinleştirilir | GZIP WordPress" 
seoTitle: "WordPress'te GZIP Sıkıştırma Nasıl Etkinleştirilir | GZIP WordPress" 
description: "Web sitenizi hızlandırmak için WordPress'te GZIP sıkıştırmasını etkinleştirmek istiyor musunuz? Bu blog yazısında, WordPress'te sıkıştırmayı nasıl etkinleştireceğinizi öğreneceğiz." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "Sayfa hızı ve yükleme süreleri, arama motorlarında daha iyi sıralama için anahtar faktörlerdir. GZIP sıkıştırması bunu gerçekleştirebilir ve rekabet avantajı sağlayabilir." 
url: /tr/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## Sayfa hızı ve yükleme süreleri, arama motorlarında daha iyi sıralama için anahtar faktörlerdir. GZIP sıkıştırması bunu gerçekleştirebilir ve rekabet avantajı sağlayabilir.

{{< figure align=center src="images/Asset-1.png" alt="GZIP sıkıştırmasını etkinleştirin">}}


## Genel Bakış
Google ve diğer arama motorları bir web sitesinin kullanıcı deneyimini (UX) sıralama algoritmalarında kritik bir faktör olarak görüyorlar. En iyi derecelendirmeler için web sitenizi geliştirmek ve optimize etmek daha önemli hale geldi. Dikkat edilmesi gereken en önemli faktörler arasında sayfa hızı ve yükleme süreleri. Ve site hızını ve performansı artırmanın en hızlı ve en kolay yolu, web sitenizde GZIP sıkıştırmasını sağlamaktır. Web ana bilgisayarınızın sizin için otomatik olarak GZIP sıkıştırmasını etkinleştirme şansı vardır. Değilse, bu önemli görevi kendiniz gerçekleştirmeniz gerekir.
Bu makalede, WordPress'te GZIP sıkıştırmasını tam olarak nasıl etkinleştireceğinizi tam olarak göstereceğiz. Başlayalım!
  *[**GZIP Sıkıştırma Nedir** ?][1]
  *[**GZIP sıkıştırma nasıl çalışır?** ][2]
  ***[GZIP Sıkıştırma Etkin Olursa Nasıl Doğrulur?][3]** 
  ***[WordPress'te GZIP sıkıştırmasını etkinleştir][4]** 
  ***[Sonuç][5]** 

## GZIP Sıkıştırma Nedir?   {#Ne}
GZIP bir **dosya biçimi ve dosya sıkıştırma ve dekompresyon için kullanılan bir yazılım uygulaması** . Web sunucuları veya diğer yazılımlar, kullanıcıların tarayıcılarına gönderilmeden önce veri dosyalarını sıkıştırmak için GZIP Sıkıştırma kullanır. Bu, web sitenizi daha hızlı hale getiren dosya indirme süresini azaltır. Tüm modern tarayıcılar GZIP sıkıştırmasını destekler.
Dosya ve klasör sıkıştırmasını etkinleştirebilmeniz için Web sunucunuzda GZIP sıkıştırmanın etkinleştirilmesi gerektiğini de belirtmek önemlidir. Kısacası, web sunucunuzun GZIP etkin olup olmadığını nasıl doğrulayacağını göreceğiz.

## GZIP sıkıştırma nasıl çalışır?   {#iş}
En popüler sıkıştırma yöntemi olan GZIP, Web sunucuları ve tarayıcılar tarafından içeriği internet üzerinden iletilirken sıkıştırmak ve doldurmak için kullanılır. Çoğunlukla kod ve metin dosyalarında kullanılır, GZIP JavaScript, CSS ve HTML dosyalarının boyutunu%90'a kadar azaltabilir. Varsayılan olarak, GZIP Sıkıştırma görüntüleri veya videoları sıkıştırmaz. Bunun için, WordPress sitenizdeki web için resimleri optimize etmeniz gerekir. Bu nedenle Google Pagespeed Insights gibi web sitesi hız test araçlarının çoğu GZIP sıkıştırmasını sağlamayı şiddetle tavsiye eder.
Bir web sunucusu bir web sayfası için bir istek aldığında, web sunucusu tarayıcının GZIP'yi destekleyip desteklemediğini kontrol etmek için isteğin başlığını kontrol eder. Öyleyse, GZIP uygulamadan önce sunucu sayfa için işaretlemeyi oluşturur. GZIP, HTML işaretlemesini daha sonra son kullanıcıya teslim edilen sıkıştırılmış verilere dönüştürür. Son kullanıcı sıkıştırılmış verileri aldığında, tarayıcıları onu açar.

## **GZIP Sıkıştırma Etkin Olursa Nasıl Doğrulur?**    {#Perify}
Web ana bilgisayarınız varsayılan olarak WordPress'te sıkıştırmayı etkinleştirebilir. Ancak, bu her zaman böyle değildir. Chrome’un Devtools'u kullanarak zaten GZIP sıkıştırma etkin olup olmadığını görebilirsiniz.
Sitenizi bir krom tarayıcısında açın, ardından sayfanın herhangi bir yerine sağ tıklayın ve ** ****  Delin  **Geliştirici Araçlarını **  açmak için seçin** .
Ardından, **Ağ  **sekmesine gidin ve web sitesinin ana URL'sini “Ad” bölümünden tıklayın. **  Başlıklar  **sekmesini seçin ve **  yanıt başlıklarını bulmak için aşağı kaydırın**  bölüm:

{{< figure align=center src="images/gzip-determine.gif" alt="İçerik kodlamasını doğrulayın">}}

Orada, GZIP sıkıştırmasının etkin olup olmadığını göreceksiniz.

## WordPress'te gzip sıkıştırmasını etkinleştir   {#enable}
**WordPress GZIP sıkıştırmasının henüz etkin olmadığını belirlediyseniz** , çalıştırmak için kullanabileceğiniz birden fazla yöntem vardır. En kolay yol, [WP Rocket][6], [WP Süper Önbellek][7] veya [W3 Total Cache][8] gibi bazı WordPress eklentilerini kullanmaktır. Ancak, bunu .htaccess dosyası veya Nginx yapılandırmanızı güncelleyerek sunucu düzeyinde manuel olarak yapabilirsiniz.

## # .htaccess dosyasını düzenleyerek
WordPress GZIP sıkıştırmasını etkinleştirmenin en yaygın yollarından biri **_.htaccess_ dosyasını**  düzenlemektir. Ancak bu, bir şeyi kırma riskini içerir. Bu hassas bir sunucu dosyasıdır ve yanlış bir hareket çok fazla soruna neden olabilir.
Riski azaltmak için, herhangi bir değişiklik yapmadan önce orijinal dosyanın bir kopyasını **kaydettiğinizden emin olun. _.Htaccess_ dosyası web sitenizin  **kök klasöründe olmalıdır**  . _.Htaccess_ açtıktan sonra, `## # wordpress 've`## end wordpress' etiketleri ile işaretlenen bölümlerin altına aşağıdaki kodu ekleyin
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
**Dosyayı kaydedin**  ve sitenizin sunucusuna yükleyin. İşiniz bittiğinde, yukarıda açıklandığı gibi Chrome’un Devtools'u kullanarak GZIP'nin etkin olup olmadığını kontrol edin.

## Nginx'te GZIP sıkıştırmasını etkinleştirin
**Sıkıştırma  **etkinleştirmek için ON parametresine **  gzip  **yönergesini ekleyin. **  gzip  **açık; Varsayılan olarak, **  nginx**  yanıtları yalnızca MIME tipi metin/html ile sıkıştırır. Yanıtları diğer MIME tipleriyle sıkıştırmak için GZIP_TYPES Direktifini ekleyin ve ek türleri listeleyin.
**_nginx.conf_ dosya**  açarak ve aşağıdaki kodu ekleyerek WordPress'te GZIP sıkıştırmasını etkinleştirebilirsiniz:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## Sonuç   {#Conclusion}
Bu GZIP WordPress öğreticisinin sonu. Web sitenizi hız ve performans için optimize etmenin birçok yolu vardır. Bu GZIP WordPress öğreticisinde, GZIP sıkıştırma, GZIP sıkıştırmasının önemi ve kurulum adımlarından geçtik. Ayrıca, aşağıdaki “Keşfet” bölümünde belirtilen birçok ilgili bağlantı vardır.
Son olarak, [Containerize.com][9] diğer açık kaynaklı ürünler üzerine makaleler yazıyor. Bu nedenle, düzenli haberler ve güncellemeler için lütfen [Blogging][10] kategorisiyle iletişime geçin.

## Keşfetmek
  * [Matomo][11]
  * [Akla yatkın][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [WordPress'i Docker Compose ile DockPress nasıl yapılır][15]
  * [Ücretsiz iş analizi araçları işletmenize nasıl yardımcı olur][16]
  * [2021 En İyi 5 Açık Kaynak İş Zekası Araçları][17]
  * [Eklenti WordPress'e nasıl yüklenir | Vanilya Forumu][18]
  * [Ücretsiz Civicrm WordPress Entegrasyonu ile Kurşunlarınızı Artırın][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
