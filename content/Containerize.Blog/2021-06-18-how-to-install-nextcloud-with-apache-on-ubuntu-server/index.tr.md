---
title: "Ubuntu Server'da Apache ile NextCloud nasıl yüklenir" 
seoTitle: "Ubuntu Server'da Apache ile NextCloud nasıl yüklenir" 
description: "NextCloud, PHP'de yazılmış açık kaynaklı kendi kendine barındıran bulut depolama çözümüdür. Bu makale, Ubuntu'da Apache ile NextCloud'un nasıl kurulacağını gösterecektir." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud, kendi kendine barındırılan açık kaynak dosyaları senkronizasyon ve işbirliği yazılımıdır. Bu öğretici, Ubuntu'da Apache ile NextCloud'un nasıl kurulacağını gösterecektir." 
url: /tr/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud, kendi kendine barındırılan açık kaynak dosyaları senkronizasyon ve işbirliği yazılımıdır. Bu öğretici, Ubuntu'da Apache ile NextCloud'un nasıl kurulacağını gösterecektir.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Ubuntn'da Apache ile NextCloud nasıl kurulur">}}


## **Genel Bakış** 
**[NextCloud][1]  **ÜCRETSİZ ve güvenli bir **  Kendi kendine barındırılan bulut depolama çözümü**  PHP programlama dilinde yazılmıştır. Web arabirimini kullanarak veri erişimi sağlar ve Dropbox'a işlevsel olarak benzerdir. Dropbox ve Google Drive gibi tescilli bulut depolama çözümleri uygundur, ancak dosyalarınız sistemlerinde saklandığı için kişisel verileri toplamak için kullanılabilir. Güvenli, güvenli ve uyumlu dosya senkronizasyonu ve paylaşım çözümüne ihtiyacınız varsa, açık kaynak NextCloud sunucusuna geçebilirsiniz. NextCloud kurulumu özel ev sunucularınıza veya sanal bir özel sunucuya yüklenebilir.
NextCloud Açık Kaynak **uçtan uca şifreleme**  sağlar, yani dosyaların sunucuya yüklenmeden önce istemci cihazında şifrelenebileceği anlamına gelir. Ayrıca, doğrudan NextCloud istemcisinden DOC, PPT, XLS dosyalarınızı oluşturabileceğiniz ve düzenleyebilmeniz için Collobora, On TOUSFICE NEXTCLOUD gibi bir çevrimiçi ofis paketi ile entegre edilebilir. NextCloud istemcisi indirmesinden sonra NextCloud Client indirdikten sonra NextCloud sunucunuzla bilgisayarınızdaki bir veya daha fazla dosya ve klasörü paylaşabilir ve senkronize edebilirsiniz. NextCloud masaüstü indirme ve mobil istemciler, kontrolünüz altındaki tüm cihazlarda senkronize ve paylaşma seçenekleri sunar. Veri dosyalarını yerel paylaşılan dizinlerinize yerleştirin ve bu dosyalar hemen Sunucuya ve NextCloud Desktop Sync istemcisi, iOS uygulaması veya Android cihazlarını kullanarak diğer cihazlara senkronize edilir.
Bu öğretici, Apache ile Ubuntu 20.04 LTS Linux işletim sistemine NextCloud'u yüklemenize yardımcı olacaktır.
  ***Önkoşulları (lamba yığını) yükleyin** 
  ***Ubuntu'da NextCloud Arşivi İndir** 
  ***MySQL veritabanı oluştur** 
  ***NextCloud Web yükleyicisini çalıştırın** 
  ***Sarma** 

## Adım 1: Önkoşul (lamba yığını) yükleyin
NextCloud'u Ubuntu'ya yüklemek için ilk şey, Ubuntu LTS sisteminizde **lamba sunucusu  **çalıştırmanız gerektiğidir. Sisteminize giriş yapın ve Terminal penceresine erişin. Zaten çalışan **  lamba yığınınız varsa**  Bu adımı atlayın Aksi takdirde gerekli bağımlılıkları yüklemek için aşağıdaki komutları kullanın.

### PHP'yi yükle
Ubuntu sunucunuzda PHP sürüm 5.6 veya daha yüksek sürümün yüklenmesiyle başlayalım:
sudo apt-get güncellemesi
sudo apt-get install -y php php-gd php-curl php-zip php-xml php-mbstring
PHP sürümünü aşağıdaki komutu kullanarak doğrulayabilirsiniz:
PHP -V
{{_LINE_29_}}

### Apache2'yi kurun
Ardından, Apache'yi komutla yükleyin:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl yeniden başlatma apache2
{{_LINE_34_}}

### MySQL'i kurun
Bağımlılıklar yoldan çıktığında, bir sonraki adımla ilgilenilecek adım MySQL veritabanı sunucusunu güvence altına almaktır. Çalışarak MySQL veritabanı sunucusunu yükleyin:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Adım 2: Ubuntu'da NextCloud Arşivini İndirin
Bu makaleyi yazarken, NextCloud en son sürümü 22.0.0beta5'tir. LAMP Sunucusunu sisteminizde başarıyla yapılandırdıktan sonra, NextCloud'u [resmi web sitesinden][2] indirelim.
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
NextCloud Sunucusu İndirme tamamlandıktan sonra, Web Sitesi Belge Kökü altında indirilen arşivi çıkarın ve NextCloud dizininin sahipliğini Dosyalar ve Dizinler üzerindeki WWW-DATA olarak ayarlayın.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data nextcloud
sudo chmod -r 755 NextCloud
{{_LINE_49_}}
Şimdi indirilen arşiv dosyasını kaldırın.
sudo rm -f /tmp/nextcloud -24.0.0beta5.zip
{{_LINE_52_}}

## Adım 3: MySQL veritabanı oluştur
Kaynak kodunu çıkardıktan sonra, NextCloud MySQL veritabanı oluşturalım ve NextCloud'u yapılandırmak için kullanıcı hesabı. MySQL Server'da oturum açmak, NextCloud veritabanını oluşturmak, kullanıcı ve MySQL konsolundan çıkmak için aşağıdaki komut kümesini kullanın.
mysql -u root -p
Parolanı Gir:
MySQL> Veritabanı Oluştur NextCloud;
mysql> nextcloud'da hepsini verir.
MySQL> Aydınlatma ayrıcalıkları;
MySQL> Bırak
{{_LINE_61_}}

## Adım 4: NextCloud Web Yükleyicisi'ni çalıştırın
Bu noktada, NextCloud Ubuntu 20.04'ü başarılı bir şekilde yükleyin ve yapılandırılmıştır. Şimdi, aşağıdaki gibi web tarayıcısında NextCloud Yapılandırma Dizini'ni açın ve http://your-domain.com URL'sini yazın. LocalHost'u sunucu IP adresinize veya etki alanı adınıza değiştirin. Aşağıdaki ekranı göreceksiniz:
http: // localhost/nextcloud/veya http: // your_domain_name/nextcloud/
{{_LINE_65_}}
Bir yönetici hesabı oluşturmak ve veri klasörünün konumunu sağlamak için yeni yönetici kimlik bilgileri girin.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Ubuntu Linux Server'da Apache ile NextCloud nasıl yüklenir">}}

{{_LINE_69_}}
Şimdi sayfanızı aşağı kaydırın ve veritabanı adını, veritabanı kullanıcı adı, şifreyi girin ve **Bitiş Kurulumu**  düğmesine tıklayın.
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Apache ile NextCloud Ubuntu 20.04 nasıl kurulur">}}

{{_LINE_73_}}
Kurulum bittikten sonra, sonraki ekranda NextCloud Yönetici Gösterge Tablosunu görmelisiniz. Burada bir kullanıcı, gruplar oluşturabilir, izin verebilir, vb.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Apache ile Ubuntu'ya NextCloud'u Yükleme">}}

{{_LINE_77_}}
Tebrikler, Ubuntu LTS sisteminizde çalışan bir sonraki şirket içi bulut çözümünüz var. Artık ihtiyaçlarınızı mükemmel bir şekilde karşılamak için bulut sunucunuzu özelleştirmeye başlayabilirsiniz.

## **Sarma:**    {#4A1A}
Tebrikler! Apache ** ile Ubuntu sunucusunda nextcloud'u başarıyla yapılandırdınız ve yüklediniz. Özel bir bulutun nasıl oluşturulacağını öğrendiniz. NextCloud Ubuntu Server, hemen hemen herkesin özel veya hibrit bulut depolama ihtiyaçlarını sunabilen inanılmaz bir bulut depolama işbirliği platformudur. Artık Ubuntu'ya NextCloud'u nasıl yükleyeceğinizi biliyorsunuz ve verileriniz kendi kendine barındırılan bulutunuzda güvenli ve güvenli. Yaklaşan öğreticilerimizde, web sunucusu çözüm yığınları ile ilgili daha ilginç konular hakkında tartışacağız.
_ Bulut tabanlı kendi kendine barındırılan depolama çözümünü tercih edersiniz?. Herhangi bir sorunuz varsa, lütfen [iletişime geçin][3] ._

## Keşfetmek:
Sunucunuzun günlük yönetimi ile ilgili makaleleri izleyebilirsiniz.
  * [Ubuntu'da Apache ile OwnCloud'u nasıl kurar ve yapılandırır][4]
  * [Apache'yi Ubuntu veya Debian için ters proxy olarak nasıl yapılandırır][5]
  * [Ubuntu'da nginx ile phpmyadmin yükleyin ve sabitleyin][6]
  * [Ubuntu 20.04'te Let's Şifreleme ile Nginx'i Güvenli ve Şifreleyin][7]
  * [Ubuntu/Debian'da Nginx'te HTTP/2 desteğini yapılandırın][8]
  * [AWS Üretim Sunucusunda Yolcu ile Nginx'i Kurun][9]

  
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
