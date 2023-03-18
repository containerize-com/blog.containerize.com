---
title: "Ubuntu'da Apache ile Owncloud'u nasıl kurar ve yapılandırır" 
seoTitle: "Ubuntu'da Apache ile Owncloud'u nasıl kurar ve yapılandırır" 
description: "OwnCloud, dosya barındırma hizmetleri oluşturmak için açık kaynaklı istemci-sunucu yazılımıdır. Bu öğreticide, OwnCloud'u Ubuntu'ya nasıl kuracağınızı ve yapılandıracağınızı öğreneceğiz" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud, dosya barındırma sunucuları oluşturmak için bir istemci-sunucu yazılımı koleksiyonudur. Bu öğretici, Ubuntu'da OwnCloud'un nasıl yapılandırılacağı ile ilgilidir." 
url: /tr/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud, dosya barındırma sunucuları oluşturmak için bir istemci-sunucu yazılımı koleksiyonudur. Bu öğretici, Ubuntu'da OwnCloud'un nasıl yapılandırılacağı ile ilgilidir.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## ** Genel Bakış **
OwnCloud, PHP'de yazılmış ve veri senkronizasyonu ve dosya paylaşımı için kullanılan ücretsiz ve popüler sağlam açık kaynaklı kurumsal web uygulamasıdır. Ayrıca veri dosyalarını, kişileri, takvimleri, listeleri yapmak ve daha fazlasını kolayca yönetmenizi sağlar. Google Drive, Dropbox, ICloud ve diğer bulut depolama hizmetleri gibi en popüler bulut platformlarına harika bir alternatiftir. Ancak diğer bulut depolama hizmetlerinden farklı olarak, Owncloud Selfed Barındırılan kendi ana bilgisayar bulutu oluşturmak için ücretsizdir.
OwnCloud, özel bir bulut oluşturmak için web arayüzünü kullanarak veri erişimi sağlayan açık kaynaklı bir özel bulut yazılımıdır. Dropbox ve Google Drive'a benzer şekilde takvim etkinliklerini, arşivlerini, resimlerini, kayıtlarını, görevlerini, yer işaretleriyle adres defterlerini kolayca görüntüleyebileceğiniz ve senkronize edebileceğiniz kendi dosya paylaşım sunucunuzu oluşturmanızı sağlar. Ayrıca, tüm kontrolünüz altındaki cihazlarda verileri senkronize etme ve paylaşma seçenekleri sağlar. OwnCloud'u yükleyin ve yapılandırın, masaüstü istemcileri ve mobil uygulama cihazları için senkronize edilmiş verilerinizi destekler. Ayrıca, Ubuntu'da OwnCloud kullanarak kullanıcı başına kullanıcı ve grup erişim kısıtlamalarını kolayca uygulayabilirsiniz. Owncloud Açık Kaynak Kişisel Depolama Sunucusu bir çapraz platform uygulamasıdır ve tüm popüler işletim sistemlerine yüklenebilir.
Bu öğretici, OwnCloud'u kurmanıza ve Ubuntu LTS sistemlerinde OwnCloud'u yapılandırmanıza yardımcı olacaktır.
  * Lamba sunucusunu yükleyin
  * Owncloud'u indirin
  * MySQL veritabanı ve kullanıcı oluşturun
  * Owncloud'u kurun
  * Owncloud için en iyi alternatifler nelerdir?
  * Çözüm

## Adım 1: Lamba Sunucusunu Yükle
Kendi bulut sunucusunu ve nasıl özel bir bulutun oluşturulacağını ayarlamak için önce çalışan bir lamba sunucusu kurmamız gerekir. Zaten lamba yığınını takmış ve çalıştırmışsanız, bu adımı atlayın, aksi takdirde lambayı Ubuntu sisteminizde ayarlamak için takip komutlarını kullanın.

### PHP'yi yükle
Komutları çalıştırarak Ubuntu veya Debian sisteminize PHP 5.6 veya daha yüksek versiyonu yükleyebilirsiniz:
sudo apt-get install python-software properties
sudo add -t-repository ppa: ondrej/php
sudo apt-get güncellemesi
sudo apt -get yükseltme -y
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### Apache2'yi kurun
Apache en çok kullanılan açık kaynaklı web sunucusu yazılımıdır. Ardından, çalışarak kendi bulut sunucunuzu ayarlamak için Ubuntu'ya Apache Web sunucusunu yükleyin:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### MySQL'i kurun
MySQL Açık kaynaklı ilişkisel veritabanı yönetim sistemi, lamba web uygulama yazılımı yığınının ve diğerlerinin bir bileşenidir. Şimdi aşağıda çalışarak MySQL'i Ubuntu'ya yükleme:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## Adım 2: Ubuntu'dan Owncloud'u indirin
Ubuntu sisteminizde lamba sunucusunu başarıyla yapılandırdıktan sonra, en son Owncloud özel bulut depolama çözümünü [resmi web sitesi] [1] 'den indirelim.
CD /TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
OwnCloud Server yazılımını indirdikten sonra, şimdi indirilen arşivi web sitesi belgesi kökü altında çıkarın ve Ubuntu'ya owncloud yüklemek için çalıştırarak dosyalar ve dizinler üzerinde uygun izinler ayarlayın.
CD/var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data: www-data owncloud
sudo chmod -r 755 owncloud
{{_LINE_50_}}
Şimdi arşiv dosyasını kaldırın ve Apache sunucusunu yeniden başlatın.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl yeniden başlatma apache2

## Adım 3: Owncloud veritabanı ve kullanıcı oluşturun
Kodu çıkardıktan sonra, şimdi bir MySQL veritabanı oluşturalım ve Owncloud kişisel bulut depolama sunucusunu yapılandırmak için kullanıcı hesabı. Owncloud veritabanı ve kullanıcı oluşturmak için MySQL Server'a oturum açmak için aşağıdaki komut kümesini kullanın.
mysql -u root -p
Parolanı Gir:
mysql> veritabanı owncloud oluştur;
MySQL> Owncloud'da hepsini verir.
MySQL> Aydınlatma ayrıcalıkları;
MySQL> Bırak
{{_LINE_62_}}
Ardından, özel bir bulut oluşturmak için Web arayüzünden Ubuntu'ya Owncloud'u yüklememiz gerekiyor.

## Adım 4: Owncloud'u Ubuntu'ya Yükle
Şimdi bir web tarayıcısındaki OwnCloud En İyi Kişisel Cloud Server Web Panel dizinine erişin. LocalHost'u sunucu IP adresinize veya etki alanı adınıza değiştirin.
http: // localhost/owncloud/
{{_LINE_67_}}
Açık kaynak Owncloud giriş sayfasını görmelisiniz. Yönetici hesabı oluşturmak ve veri klasörünün konumunu sağlamak için yeni yönetici kullanıcı adı ve şifre kimlik bilgileri girin. Her şey yolunda olursa, web sayfasını böyle almalısınız.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Ubuntu'da Apache ile Owncloud'u kurun">}}

{{_LINE_71_}}
Şimdi sayfanızı aşağı kaydırın. Aşağıdaki formda, yöneticiye en iyi kişisel bulut sunucusu Owncloud paneline kullanıcı adı ve şifre girmeniz gerekir. Ayrıca, OwnCloud sunucusunu veritabanı sunucusuna, veri klasörünün konumu ile bağlamak için veritabanını kullanıcı adı ve şifre ile birlikte sağlayın ve ** Bitiş Kurulumu ** 'a tıklayın.
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Ubuntu'da Owncloud'u yapılandırın">}}

{{_LINE_75_}}
Kurulumu tamamladıktan sonra Yönetici Gösterge Tablosunu alacaksınız. Nerede kullanıcılar, gruplar oluşturabilir ve izinleri vb.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Owncloud kontrol panelini kurun">}}

{{_LINE_79_}}
Evet! Kişisel bulut depolama alanı oluşturmak için Owncloud kurulum kılavuzu ile işimiz bitti. Artık Dropbox veya Google Drive'a benzer adım adım özel bir bulut oluşturmak için Ubuntu'ya Owncloud'u nasıl yükleyeceğinizi biliyorsunuz.

## ** Owncloud için en iyi alternatifler nelerdir? ** {#4A1A}
Aşağıda, kendinden barındırılan Owncloud alternatifleri ve rakipler dosya barındırma yazılımı bulunmaktadır.
  *** SEAFILE ** Açık kaynaklı platformlu dosya barındırma yazılım sistemidir
  *** NextCloud ** Ücretsiz ve Açık Kaynak Bulut Depolama Platformu
  *** Resilio Sync ** Açık Kaynak Eşleme Dosyası Senkronizasyon Uygulamasıdır
  *** Pydio Hücreleri ** Açık kaynaklı dosya paylaşımı ve senkronizasyon yazılımıdır
  *** senkronizasyon ** ücretsiz ve açık kaynaklı eşler arası dosya senkronizasyon uygulaması

## ** Sonuç: ** {#blok-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}
Tebrikler! Ubuntu makinesinde Apache ile kendi özel bulutunuzu oluşturmak için OwnCloud'u başarıyla yüklediniz ve yapılandırdınız. Artık verileriniz asla üçüncü tarafların elinde değildir ve sanal özel bulut owncloud ubuntu sunucu depolamasında özel olarak yönetilebilir. Birçok şirket, verilerin gizliliği ile ilgili birçok sorun nedeniyle birçok hayati bilgi ile Owncloud sunucularını oluşturmayı seçmektedir. Yaklaşan öğreticilerimizde, web sunucusu çözüm yığınlarının daha ilginç konularını tartışacağız.
_ [Twitter] [2], [LinkedIn] [3] ve [Facebook] [4] sayfamızda bize katılabilirsiniz. Çevrimiçi bulut tabanlı depolama çözümünü hangi kullanıyorsunuz? Herhangi bir sorunuz varsa, lütfen_ [iletişime geçin] [5].

## Keşfetmek:
Ayrıca sunucunuzun günlük yönetimi ile ilgili başka birkaç makalemiz de var.
  * [Apache'yi Ubuntu/Debian için ters proxy olarak nasıl yapılandırır] [6]
  * [Ubuntu'da nginx ile phpmyadmin nasıl kurulur ve güvence altına alınır] [7]
  * [Ubuntu 20.04'te Let's Şifreleme ile Nginx'i güvenli ve şifreleyin] [8]
  * [Ubuntu/Debian'da Nginx'te HTTP/2 desteğini yapılandırın] [9]
  * [AWS Üretim Sunucusunda Yolcu ile Nginx'i Kurun] [10]
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
