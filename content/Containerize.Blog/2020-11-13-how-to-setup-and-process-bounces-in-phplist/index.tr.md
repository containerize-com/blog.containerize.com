---
title: "Phplist'te sıçramalar nasıl kurulur ve işlenir" 
seoTitle: "Phplist'te sıçramalar nasıl kurulur ve işlenir" 
description: "Phplist güçlü kendi kendine barındırılan posta listesi ve bülten yöneticisidir. İşletmelerin bülten kampanyaları ve süreç sıçramalarını kolayca göndermelerine yardımcı olur." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Açık kaynaklı bülten ve e -posta pazarlama yazılımı ile kampanya gönderin. Phplistte sıçrama yönetimi kurulum ve sağlıklı posta listeleri için sıçrama işlemeyi otomatikleştirin." 
url: /tr/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Açık kaynaklı bülten ve e -posta pazarlama yazılımı ile kampanya gönderin. Phplistte sıçrama yönetimi kurulum ve sağlıklı posta listeleri için sıçrama işlemeyi otomatikleştirin.

{{< figure align=center src="images/phplist-2.png" alt="Süreç sıçramaları Phplist">}}

Phplist'e [Multi-Tenacy][1] ve [bülten kampanyası][2][gönderme gönderme][2] uygulamak için makaleler yazdık. Bu makalede, bu noktaları Phplist'teki süreç sıçramaları hakkında ayrıntılı olarak ele alacağız.
  * [Phplist nedir?][3]
  * [Sıçrama nedir?][4]
  * [Kurulum Giriş Yönetimi][5]
  * [Sıçrama nasıl işlenir?][6]
  * [Sonuç][7]

## Phplist nedir? {#phplist}
Phplist en popüler ücretsiz ve açık kaynaklı bülten gönderme yazılımıdır. Phplist, işletmelerin abonelere pazarlama e -postaları, ürün güncellemeleri ve duyurular göndermelerini sağlar. İşletmelerin listeleme, güzel bülten tasarımı, program kampanyası ve sıçrama yönetimi için yardımcı olmasına yardımcı olur. [Devamını oku][8]

## Bounce nedir? {#sıçrama}
Sıçrama, neden sayısı nedeniyle teslim edilemeyen ve gönderene geri dönemeyen bir e -posta mesajıdır. Posta kutusu dolu, e -posta adresi artık geçerli veya yanlış e -posta adresi gibi nedenlerimiz olabilir. Bu nedenle, geçersiz e -posta adreslerine e -posta göndermemeniz için sıçramaları işlemeniz gerekir.

## Kurulum Girişim Yönetimi {#setup}
Boşluk yönetimini ayarlamak için, Config.php dosyasında aşağıdaki ayarları yapılandırmanız gerekir.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist - Sıçrama İşleme Yönetimi">}}

Bu konfigürasyonlar hakkında aşağıdaki adımlarda daha fazla açıklayacağız.
  * İlk olarak, sıçrama mesajları almak istediğiniz e -posta adresi eklemeniz gerekir. ** Message_envelope ** Değişken'i bulabilir ve e -posta adresinizi ekleyebilirsiniz.
  *Phplist, ** Mbox ve Pop3 ** iki protokolle Bounce posta kutusundan e -postaları getirebilir. Yani, ** Bounce_protocol ** değişken bulun ve ortamınıza göre değiştirin.
  *** Mbox ** Prototcol ayarladıysanız, bunun için dosya biçimini tanımlamanız gerekir. Yani, ** Bounce_mailbox ** bulun ve "/var/mako/posta/liste/listbounces" gibi yolu ayarlayın.
  *** POP3 ** protokolü kullandıysanız, posta kutusu için ** ana bilgisayar, kullanıcı adı ve şifre ** yapılandırmanız gerekir. Bu ayarı yukarıdaki Sreenshot'ta görebilirsiniz.
  *** POP3 ** protokolü için yukarıdaki ayarlara ek olarak, bağlantı noktası ve şifreleme eklemeniz gerekebilir.

## sıçrama nasıl işlenir? {#işlem}
Phplist, işlem sıçramaları için iki yöntemi destekler: manuel ve otomatik. Sıçrama işlemeyi otomatikleştirmek için Cron Job oluşturmanız gerekecek. Ayrıca ** Sistem> Process Sıçramaları ** sayfasını ziyaret ederek sıçramaları manuel olarak işleyebilirsiniz. Bu nedenle, önce gereksinimlerinize göre ** manuel olarak \ _Process \ _Bounces ** ayarlarını değiştirmeniz gerekir. Süreç sıçramaları için CRON Job'u kurmak için [Phplist Docs][9] ziyaret edebilirsiniz.

## Sonuç {#Conclusion}
Bu yazıda, sıçrama e -posta adresini ve süreç sıçramalarını nasıl yapılandıracağımızı öğrendik. Daha az aboneniz varsa, sıçramaları manuel yöntemle kolayca işleyebilirsiniz. Ancak, büyük listeler için otomatik sıçrama işleme işlemini kullanmanız gerekir. Zamanınızı koruyacak ve temiz ve geçerli abone listeleri oluşturmanıza yardımcı olacaktır.

  
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
