---
title: "Phplist'te Gelişmiş Giriş Yönetimi ve Buluş Kuralları Kurulum" 
seoTitle: "Phplist'te Gelişmiş Giriş Yönetimi ve Buluş Kuralları Kurulum" 
description: "Phplist'de gelişmiş sıçrama yönetimini etkinleştirin ve sıçrama e -postalarını kullanın. Geri dönen mesajlarda çeşitli işlemler yapmak için sıçrama kuralları oluşturun ve işlemi otomatikleştirin." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "MTA tarafından döndürülen sıçrama hata kodunun türüne bağlı olarak, Gelişmiş Bounce yönetimi farklı eylemlerin otomatik olarak yürütülmesine izin verir." 
url: /tr/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## MTA tarafından döndürülen sıçrama hata kodunun türüne bağlı olarak, Gelişmiş Bounce yönetimi farklı eylemlerin otomatik olarak yürütülmesine izin verir.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Phplist'te Gelişmiş Giriş Yönetimi ve Buluş Kuralları Kurulum">}}

[Önceki][1] öğreticimizde, **Phplist Bounce İşleme  **hitap etmiştik. Sıçrama işlemeye aşina değilseniz, okuyabilirsiniz. Buluş işlemini kullanarak Phplist projenize teslim edilmeyen e -postaları indirebilirsiniz. İndirilen e -postalarla nasıl başa çıkıyorsunuz? Hiçbir fikrim yok, **  Bounce e -postalarını  **çözmenizi sağlayan ileri sıçrama yönetimine bir göz atalım**  . Dönen her e -posta mesajı MTA (posta aktarım aracısı) tarafından döndürülen hata kodu vardır. Ayrıca, döndürülen mesaj e -posta başlığını gözden geçirebilirsiniz ve hata kodu boyunca tüm bilgileri içerir.
  * [Gelişmiş sıçrama kullanımı etkinleştir][2]
  * [Sıçrama kuralı ekle][3]
  * [Liste Sıçrama Kuralları][4]
  * [Sonuç][5]

## Gelişmiş sıçrama kullanımı etkinleştir   {#enable}
İlk olarak, Config.php dosyasındaki kodu kopyalayarak gelişmiş **sıçrama taşımasını**  etkinleştirin.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Bundan sonra, **Sistem> Yönetin Sarma> Liste Tutma Kuralları Oluşturma Kuralları**  'a gidin.
Normal ifadelere dayalı sıçrama kuralları oluşturabilirsiniz. **e -postanın başçıya geri dönme**  nedenini bulabilir ve normal ifade için kullanabilirsiniz. Ayrıca, hata koduna veya normal ifadeye dayalı uygun eylemleri seçin. Phplist aşağıdaki eylemleri desteklemektedir. Eylem ifadesi kendi açıklayıcıdır, bu nedenle ayrıntılı olarak gitmemize gerek yoktur.
  * Aboneyi sil
  * Abone'yu doğrulama
  * Blacklist abone
  * Blacklist e -posta adresi
  * Abone ve sıçrama
  * Abone ve Sil sıçramasını onaylayın
  * Yapılmayan listeye abone ekleyin ve sıçrama
  * Yapılmayan listeye e-posta adresi ekleyin ve sıçramayı silin
  * Sıçrama

## sıçrama kuralı ekle   {#add}
İlk sıçrama kuralımızı oluşturalım.
  *İlk olarak, **(Hesap askıya alındı ​​| Hesap mevcut değil) gibi düzenli ifadeye girin** 
  * Bundan sonra uygun eylemi seçin
  * Son olarak, kural için not/not ekleyin

{{< figure align=center src="images/add-bounce-rule.png" alt="Phplist'te sıçrama kuralı oluştur">}}

Aşağıdaki nedenlerle sıçrama kuralları ekleyebilir ve sıçramaları işlemek için uygun eylemi seçebilirsiniz. Ancak, SMTP yanıtlarını arayabilir ve listeye daha fazla kural ekleyebilirsiniz.
  * Arşivlenmiş alıcı
  * type = mx: ana bilgisayar bulunamadı
  * Üzgünüm, bu isme göre burada posta kutusu yok
  * Posta kutusu devre dışı
  * hesap devredışı
  * Bu posta kutusu hareketsizlik nedeniyle engellendi
  * Bilinmeyen kullanıcı
  * Böyle bir alıcı yok
  * ve benzeri …
**Not:  **Bir sıçrama kuralına birden fazla neden eklemek istiyorsanız, sıçrama nedenini parantezle sarmalı ve boru sembolü kullanmalısınız **  |  **veya **  veya**  ifadesi.

## Liste Sıçrama Kuralları   {#List}
Kural sayısını oluşturduktan sonra, **sıçrama kuralları**  listeniz aşağıdaki ekran görüntüsünde olduğu gibi görünecektir. Sipariş değişiklikleri ve bu sayfada silme gibi diğer işlemleri yapabilirsiniz.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Sıçrama kurallarının listesi">}}


## Sonuç   {#Conclusion}
Bu öğreticide, gelişmiş **sıçrama yönetimi**  öğrendik ve gerekli sıçrama kurallarını geliştirdik. Listelerinizden geçersiz e -posta adreslerini temizleme işlemini otomatikleştirebilmeniz için bu özelliğe izin vermek harika olurdu. Ayrıca, iade edilen e -postaların minimum seviyesini korumanıza da izin verir. Ayrıca, listelerinizde meşru aboneler olacak.
Ayrıca, [Containerize.com][6], birden fazla dil ve çerçevede açık kaynaklı ürün yığınını geliştirme yolunda. Düzenli güncellemeler için, daha ilginç makaleler için lütfen [bültenler][7] kategorisinde bizi izlemeye devam edin.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Phplist - Açık Kaynak Bülten ve E -posta Pazarlama Yazılımı][8]
  * [Phplist kullanarak bülten nasıl oluşturulur ve gönderilir][9]
  * [Phplist'te sıçrama nasıl kurulur ve işlenir][1]
  * [Phplist eklentisini geliştirmek için yeni başlayanlar rehberi][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
