---
title: "Windows'a Wamp Sunucusunu Nasıl Kurulur ve Yapılandırır" 
seoTitle: "Windows'a Wamp Sunucusunu Nasıl Kurulur ve Yapılandırır" 
description: "Windows'a Wampserver'ı yükleyin ve hızlı bir şekilde PHP tabanlı web uygulamaları geliştirmeye başlayın. Wamp Server hem Windows 32 hem de 64 bit için kullanılabilir." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Apache2, PHP ve MySQL ile web uygulamaları oluşturmak için bir web geliştirme ortamı oluşturun. Bu makale Windows'a Wamp Server'ı yüklemenize yardımcı olur." 
url: /tr/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Apache2, PHP ve MySQL ile web uygulamaları oluşturmak için bir web geliştirme ortamı oluşturun. Bu makale Windows'a Wamp Server'ı yüklemenize yardımcı olur.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Wamp Sunucusu">}}

Her geliştiricinin programı yazmadan önce bilgisayarına gerekli yazılımı kurulu olması gerekir. İlk günlerde, geliştiriciler her yazılımı ayrı ayrı yüklemek ve daha sonra bunları birlikte çalışacak şekilde yapılandırmak zorunda kaldılar.  **Wampserver**  ve gerekli tüm yazılımları tek bir pakette biriktiren diğer web çözümü yığın yazılımı mevcuttur. Geliştirme ortamınızı çalıştırmak ve çalıştırmak için yalnızca bir paket yüklemeniz gerekir.
Bu blog yazısında aşağıdaki bölümleri ele alacağız.
* [  **Wampserver nedir?**  ][1]
* [  **Wamp kurulumu**  ][2]
* [  **Wamp Yapılandırması**  ][3]
* [  **Access PhpmyAdmin**  ][4]

## Wampserver nedir? {#What}

Wampserver, PHP tabanlı uygulamalar için web geliştirme ortamını kurmak için ücretsiz bir çözüm yığınıdır. Wamp (W - Windows, A - Apache, M - MySQL ve P - PHP) anlamına gelir. Ayrıca, veritabanının yönetimi için phpmyadmin ve yönetici ile birlikte gelir. Wamp popüler araçlardan biridir ve hızlı bir şekilde ayarlayabilirsiniz. Ayrıca, WAMP sunucusunu kontrol panelinden yapılandırabilirsiniz. Uygulamalar oluşturmak ve test etmek için eksiksiz bir web geliştirme ortamı sağlar. Wampserver, kurulum sırasında ihtiyaçlarınıza göre seçebileceğiniz birkaç bileşenden oluşur. Wampserver, PHP'nin birden fazla versiyonu ile birlikte gelir. PHP sürümünü proje gereksinimlerinize göre kolayca değiştirebilirsiniz. Ayrıca, DBMS'yi (veritabanı yönetim sistemi) Wampserver kontrol panelinden değiştirebilirsiniz.

## Wamp kurulumu {#Installation}

Windows'a Wamp Server'ı yüklemek için aşağıdaki adım adım kılavuzu izleyin.
*  **Wampserver'ı İndir**  Resmi web sitesinden

{{< figure align=center src="images/wamp-download.png" alt="">}}

* İşletim sisteminize göre bir  **wampserver 32 bit** veya **wampserver 64 bit**  yükleyicinin sürümünü seçin.
*  **wamp indir**  dosyasını bulun ve yükleme işlemini çalıştırmak için üzerine çift tıklayın.
  * Dili seçin ve ardından Tamam düğmesine basın.
  * Sözleşme onay kutusunu kabul ediyorum ve ardından İleri düğmesini tıklayın.
  * Wampserver kurulumu hakkında önemli bilgileri okuyun ve devam etmek için bir sonraki düğmeye tıklayın.
  * WAMP sunucusunu yüklemek istediğiniz bir klasör seçin ve İleri düğmesini tıklayın.
  * Aşağıdaki ekran görüntüsünde gösterildiği gibi yüklemek istediğiniz bileşenleri seçmeniz gerekir. Geliştirme sırasında tüm PHP sürümlerini seçebilir ve geçiş yapabilirsiniz. Ayrıca, hem MySQL hem de MariaDB'yi kurabilirsiniz.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Wampserver için kısayolu seçin ve bir sonraki düğmeyi tıklayın.
  * Wampserver'ı yüklemek için Yükle düğmesine tıklayın.
  * Şimdi, WAMP sunucusu için varsayılan tarayıcı ve varsayılan metin düzenleyicisini seçin.
  * Kurulumunuz tamamlandı. Wamp Server kurulum sihirbazından çıkmak için Bitir düğmesini tıklayın.
  * Tarayıcınızı açın ve erişmek için LocalHost yazın. Aşağıdaki sayfayı göreceksiniz.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Wamp Yapılandırması {#Configuration}

Şimdi, web uygulamalarının geliştirilmesi ve test edilmesi sırasında size yardımcı olan birkaç yapılandırmaya bakacağız. Artık masaüstünüzdeki kısayol Wampserver simgesine çift tıklayarak Wampserver'ı başlatabilirsiniz.
*  **Hizmetler**  -Wampserver simgesine sol tıklayarak tüm hizmetleri başlatma, durdurma ve yeniden başlatma seçeneklerini görebilirsiniz.
*  **Veritabanını Değiştir**  -Araçlar iletişim kutusunu açmak için Wamp simgesine sağ tıklayın. Araçları seçin ve “Varsayılan DBMS MariAdb MySQL” ü tıklayın. Wamp Server otomatik olarak yeniden başlayacaktır ve tarayıcınızdaki LocalHost'u açarak varsayılan veritabanını görebilirsiniz.
*  **PHP sürümünü değiştir**  -Araçlar iletişim kutusunu açmak için Wamp simgesine sağ tıklayın. Araçları seçin ve PHP CLI sürümünü değiştirin ve istediğiniz PHP sürümünü tıklayın.
*  **Sanal ana bilgisayar**  - Wampserver'ın web arayüzü aracılığıyla kolayca bir sanal ana bilgisayar ekleyebilirsiniz. Localhost'u tarayıcınızda açın ve Araçlar bölümünün altındaki “Sanal Ana Bilgisayar Ekle” yi tıklayın. “Dev.example.com gibi sanal ev sahibinin adı” girin ve projenin mutlak yolunu girin. “Virtualhost'un oluşturulmasını başlatın” düğmesine tıklayın. Yeni oluşturulan sanal ana bilgisayarı yüklemek için Apache sunucusunu yeniden başlatın.
*  **Apache bağlantı noktasını değiştir**  - Varsayılan olarak, Apache web sunucusu 80 bağlantı noktasında çalışır. Apache için farklı bir bağlantı noktası kullanmak istiyorsanız, Wampserver kontrol panelinden yapabilirsiniz. Araçlar iletişim kutusunu açmak için Wamp simgesine sağ tıklayın. Araçları seçin ve “80 dışında bir bağlantı noktası kullan” ı tıklayın. İletişim kutusuna yeni bir bağlantı noktası numarası girin ve Tamam düğmesine tıklayın.
*  **DBMS bağlantı noktasını değiştir**  - Varsayılan olarak, veritabanı sunucusu bağlantı noktası 3306'da çalışır. Veritabanı sunucusu için farklı bir bağlantı noktası kullanmak istiyorsanız, Wampserver kontrol panelinden yapabilirsiniz. Araçlar iletişim kutusunu açmak için Wamp simgesine sağ tıklayın. Araçları seçin ve “3306 dışında bir bağlantı noktası kullanın” üzerine tıklayın. İletişim kutusuna yeni bağlantı noktası numarasını girin ve Tamam düğmesine tıklayın.
*  **Boş günlükler**  - Wamserver, kontrol panelinden günlükleri temizlemek için işlevsellik sağlar. PHP hata günlüğü, Apache hata günlüğü, Apache erişim günlüğü, MySQL günlüğü ve MariaDB günlüğü gibi günlükleri boşaltabilirsiniz. Tüm günlükleri bir kerede temizleyebilirsiniz. Araçlar iletişim kutusunu açmak için Wamp simgesine sağ tıklayın. Araçları seçin ve boş günlükleri seçin, günlükleri kaldırmak için tüm seçenekleri bulacaksınız.
*  **Dil Değiştir**  - Wampserver kontrol paneli için dil yapabilirsiniz. Araçlar iletişim kutusunu açmak için Wamp simgesine sağ tıklayın. Dili seçin ve gerekli dili tıklayın. Yeni seçilen dilde kontrol panelini göreceksiniz.

## Phpmyadmin'e erişim {#phpMyAdmin}

Tarayıcınızdaki LocalHost'u açarak veritabanlarınızın yönetimi için  **phpmyAdmin**  erişebilir ve ardından Wampserver Hoş Geldiniz sayfasındaki PhpmyAdmin bağlantısını tıklayabilirsiniz. Ayrıca, http: // localhost/phpmyAdmin URL'sini ziyaret ederek erişebilirsiniz.

## Çözüm
Wampserver'ı tartıştık ve Wampserver  **Windows'a yüklemek için tam adım adım kılavuzu kapladık. Bu öğreticiyi takip ederek ve hemen kodlamaya başlayarak**  wampserver**kolayca yükleyebilir ve yapılandırabilirsiniz. Çözüm yığın yazılımı hakkında daha fazla seçenek için Explore bölüm altındaki bağlantıları ziyaret edebilirsiniz.
Son olarak, [  **Containerize.com** ][5], en son açık kaynaklı ürünler hakkında blog yazıları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [ **Web Server Çözümü Yığın**  ][6] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
* [  **En İyi Açık Kaynak Web Server Çözümü Yığın Seçenekleri**  ][7]
* [  **XAMPP ve PHPMyAdmin'i Windows'ta Localhost olarak ayarlayın**  ][8]



 [1]: #What
 [2]: #Installation
 [3]: #Configuration
 [4]: #phpMyAdmin
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
