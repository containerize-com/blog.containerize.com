---
title: "WordPress ve Osticket'i kullanarak biletleme sistemini otomatikleştirin" 
seoTitle: "WordPress ve Osticket'i kullanarak biletleme sistemini otomatikleştirin" 
description: "Osticket-WordPress Entegrasyonu, müşterilerin WordPress sitesinden destek biletleri oluşturmaları ve bunları Osticket Gösterge Tablosu'ndan yönetmeleri için bir yol sağlar." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Sakinsiz WordPress ve Osticket entegrasyonu ile Yardım Masası işlemini otomatikleştirin. Müşterilerin sorularını web tabanlı formlar aracılığıyla destek biletlerine dönüştürün." 
url: /tr/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Sakinsiz WordPress ve Osticket entegrasyonu ile Yardım Masası işlemini otomatikleştirin. Müşterilerin sorularını web tabanlı formlar aracılığıyla destek biletlerine dönüştürün.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Biletleme sistemini otomatikleştirmek için osticket-wordpress entegrasyonu">}}

Müşterilerinizin ürünleriniz/hizmetlerinizle ilgili sorguları olabilir. Sorgularını WordPress sitenizdeki farklı formlardan göndereceklerdir. Osticket-Wordpress entegrasyonu, bu sorguların biletlere dönüştürülmesine yardımcı olur. API aracılığıyla Osticket Help Masto sistemine veri gönderir.
Osticket açık kaynaklı ve ücretsiz bir yardım masası biletleme sistemidir. Müşteriler, Osticket'teki sorularıyla ilgili biletler oluşturabilir. Bu yardım masası sistemi, herhangi bir kuruluşun müşterilerinden gelen sorguları yönetmesini çok kolaylaştırır. Yönetici departmanlar ve ekipler oluşturabilir ve oluşturulan biletlerin doğasına göre farklı temsilcilere bilet atayabilir. Bu ücretsiz açık kaynaklı sistem sorunları takip edecektir. Hem müşterilerin hem de temsilcilerin ilerlemeyi tartışmak için bilet hakkında yorum yapmasını sağlar. Bu blog gönderisindeki aşağıdaki bölümleri ele alacağız:
  * [Entegrasyon süreci][1]
  * [WordPress eklentisi kurulumu][2]
  * [Kimlik Doğrulama Prosedürü][3]
  * [Sonuç][4]

## Entegrasyon Süreci: {#integration}

Osticket ve WordPress entegrasyonu, WordPress sitesinde aşağıdaki alanlarla bir iletişim formu gerektirir
  1. Yardım Konusu
  2. E -posta
  3. Tam Ad
  4. Konu
  5. Mesaj
İletişim formu e -postalar göndermelidir, çünkü bu eklenti formların verilerini almak için WP_MAIL işlevini kanca yapar.

## WordPress eklentisi kurulumu: {#wordpress}

  1. WordPress sitenizin Yönetici Gösterge Tablosuna gidin.
  2. Ardından Eklentiler bölümüne gidin.
  3. Sonra bu [eklenti][5] takın.
  4. Bundan sonra eklentiyi etkinleştirin.
  5. ve “ayar” -> “Osticket Konektörü” na gidin.
  6. Ardından Osticket Sitenizin URL'sini girin, yani [http: //your.domain/api/tickets.json][6]
  7. Osticket yönetici panelinden oluşturulan API tuşunu girin (bir sonraki bölümde açıklanmıştır).
  8. Sonunda, verileri iletişim formunuzdan Osticket’in bilet alanlarına eşlemek için tüm alanları doldurun.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Biletleme sistemini otomatikleştirmek için osticket-wordpress entegrasyonu">}}


## Kimlik Doğrulama Prosedürü: {#auth}

API kimlik doğrulaması, Osticket'in yönetici panelinde yapılandırılan API tuşları aracılığıyla gerçekleştirilir. API anahtarları oluşturulur ve HTTP API isteklerinin kaynak IP'sine göre doğrulanan bir kaynak IP adresine bağlanır. API anahtarı oluşturmak için
  1. Osticket Yönetici Paneline gidin.
  2. “Yönet” e tıklayın.
  3. “API Keys” alt menüsüne gidin.
  4. “Yeni API Anahtarı Ekle” ye tıklayın.
  5. “Durumu” etkin olarak ayarlayın.
  6. “Bilet Oluşturabilir” onay kutusunu işaretleyin.
  7. WordPress sitenizin IP adresini girin ve “Anahtar Ekle” e basın.

{{< figure align=center src="images/osticket-1024x729.png" alt="Biletleme sistemini otomatikleştirmek için osticket-wordpress entegrasyonu">}}


## Çözüm: {#conclusion}

Osticket-WordPress entegrasyonu biletleme sürecini otomatikleştirecektir. Bu nedenle destek ekibi için hayatı kolaylaştıracaktır. WordPress web sitesindeki sorular otomatik olarak Osticket'teki destek biletlerine dönüşecektir. Böylece destek ekibi tüm müşterilerin sorgularını daha kolay ve verimli bir şekilde yönetebilir. Destek aracılarına e -posta bildirimleri ile bilgilendirilecektir. Bu nedenle, temsilciler müşterilerin sorgularını zamanında çözebilir. Osticket ile ilgili yorum bölümü hem müşterilerin hem de destek temsilcilerinin etkili ve zamanında iletişim kurmasına yardımcı olur. Ayrıca, yöneticilerin her bilet için ilerlemeyi takip etmelerini kolaylaştırır.

## Keşfetmek:
Osticket ve WordPress hakkında daha fazla bilgi edinmek için lütfen şu sayfalara göz atın:
  * [Osticket - Ücretsiz Açık Kaynak Yardım Masası Biletleme Sistemi][7]
  * [WordPress - ücretsiz açık kaynak ve en yaygın kullanılan CMS ve bloglama aracı][8]
  * [Osticket kullanarak çevrimiçi yardım masası yazılımı nasıl kurulur][9]



[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
