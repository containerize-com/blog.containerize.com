---
title: "XAMPP ve PHPMyAdmin'i Windows'ta Localhost olarak ayarlayın" 
seoTitle: "XAMPP ve PHPMyAdmin'i Windows'ta Localhost olarak ayarlayın" 
description: "XAMPP ve PhpmyAdmin'i Windows'ta Localhost olarak ayarlayın. Web uygulamalarını test etmek ve oluşturmak için kendi ücretsiz ve açık kaynaklı yerel test ortamınızı oluşturun." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Ücretsiz ve açık kaynaklı web sunucusu çözüm yığını (XAMPP) ve veritabanı yönetim yazılımı (phpmyAdmin) ile bir geliştirme ortamı kurun" 
url: /tr/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Ücretsiz ve açık kaynaklı web sunucusu çözüm yığını (XAMPP) ve veritabanı yönetim yazılımı (phpmyAdmin) ile bir geliştirme ortamı ayarlayın

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="Localhost olarak XAMPP ve Phpmyadmin">}}

Localhost olarak XAMPP ve PHPMyAdmin, geliştiricilerin web uygulamalarını test etmeleri ve oluşturmaları için yerel bir sunucu sağlar. XAMPP, kişisel bilgisayarlarda/dizüstü bilgisayarlara yüklü yerel bir sunucudur. PHP uygulamalarını canlı sunuculara dağıtmadan önce oluşturmak, çalıştırmak ve test etmek için yerel bir ortam sağlar.
Bu blog gönderisindeki aşağıdaki bölümleri ele alacağız:
  * [Açıklama] [1]
  * [XAMPP kurulumu] [2]
  * [PhpmyAdmin Gösterge Tablosu] [3]
  * [Son düşünceler] [4]

## açıklama: {#description}
XAMPP ücretsiz ve açık kaynaklı web sunucusu çözüm yığınıdır. Apache, MySQL, MariaDB, PHP ve Perl içerir. XAMPP, Windows işletim sistemleri için kullanılabilir. Kurulumu ve kullanımı son derece kolaydır. Bu yüzden en popüler PHP geliştirme ortamı. Localhost olarak XAMPP ve PHPMyAdmin, web uygulaması geliştirme ve test için eksiksiz bir ortam sağlar.
XAMPP'deki alfabeler şunları sağlar:
  *** X **-Çapraz Platform (Linux, Windows ve Mac OS dahil birden çok işletim sistemini destekler)
  *** A ** - Apache HTTP Sunucusu
  *** M ** - Mariadb (Veritabanı)
  *** P ** - PHP
  *** P ** - Perl

## xampp yüklemesi {#xampp}
  * XAMPP'yi [buradan] [5] 'den indirin.

{{< figure align=center src="images/xampp1.png" alt="Localhost olarak xampp">}}

  * Yürütülebilir dosyayı yükleyin.
  * Ardından “İleri” yi tıklayın.
  * Yüklemek istediğiniz bileşenleri seçin.

{{< figure align=center src="images/xampp2.png" alt="Localhost olarak Xampp Adım 2">}}

  * Çoğu web uygulaması için yalnızca _apache_, _mysql_, _php_ ve _phpmyAdmin_'e ihtiyacınız vardır.
  * XAMPP'yi yüklemek istediğiniz yükleme dizinini seçin.
  * Size bir Windows Güvenlik Uyarısı gösterilecektir. Aşağıdaki seçeneği kontrol etmelisiniz: “_ Ev veya Çalışma Ağı gibi ağlar” _ _.
  * Son olarak kurulumu tamamlamak için “Bitir” e tıklayın.

{{< figure align=center src="images/xampp4.png" alt="Localhost Adım 3 Adım olarak XAMPP">}}

  * Başarılı kurulumdan sonra XAMPP kontrol panelini açın.
  * “Apache” ve “MySQL” hizmetlerini başlatın.

{{< figure align=center src="images/xampp5.png" alt="Localhost olarak Xampp Adım 4">}}


## phpmyadmin gösterge paneli: {#phpmyadmin}
PHPMyAdmin Gösterge Tablosuna erişmek için MySQL hizmetinin yanındaki “Yönetici” düğmesine tıklayın. Tarayıcınızdan http: // localhost/phpmyadmin'i ziyaret ederek PhpmyAdmin'e de erişebilirsiniz. Burada veritabanları oluşturabilirsiniz. Yeni bir veritabanı oluşturmak için bu adımları izleyin.
  * Gösterge tablosundan “Veritabanları” sekmesine tıklayın.

{{< figure align=center src="images/db1.png" alt="localhost'ta Phpmyadmin 1. adım">}}

  * Veritabanı adını girin ve “Oluştur” düğmesine tıklayın. Bu sadece yeni bir boş veritabanı oluşturacaktır.

{{< figure align=center src="images/db2.png" alt="Localhost'ta Phpmyadmin 2. Adım 2">}}

  * Ardından, yeni oluşturulan veritabanını seçerek tablolar oluşturabilirsiniz.
  * “Tablo oluştur” altındaki tablo adını girin.

{{< figure align=center src="images/db3-1024x234.png" alt="Localhost'ta Phpmyadmin 3 Adım 3">}}

  * Sütun sayısını seçin.
  * Ardından “Git” düğmesine tıklayın.
  * Bundan sonra, tablo oluşturmayı bitirmek için bir sonraki sayfadaki formu doldurmanız gerekir.

{{< figure align=center src="images/db4-1024x564.png" alt="Localhost'ta Phpmyadmin 4. adımda">}}


## Son Düşünceler: {#Final}
XAMPP kurulumu basit ve basittir. Kurulum XAMPP sunucusuna 15 dakikadan fazla sürmez. Yüklendikten sonra, geliştiriciler İnternet bağlantısı olmadan bile PHP tabanlı web uygulamalarını oluşturabilir ve test edebilirler. Projeleri doğrudan canlı bir web sunucusunda test etmek yerine, bunları yerel olarak test etmek basit ve zaman tasarrufu sağlar. Yeni başlayanların PHP, Perl ve veritabanı becerilerini öğrenmeleri, test etmesi ve cilalaması için harika bir platform.

## Keşfetmek:
[PHP ve Perl geliştiricileri için açık kaynaklı web sunucusu çözümü yığını] [6]
[En İyi Açık Kaynak Web Server Çözümü Yığın Seçenekleri] [7]
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
