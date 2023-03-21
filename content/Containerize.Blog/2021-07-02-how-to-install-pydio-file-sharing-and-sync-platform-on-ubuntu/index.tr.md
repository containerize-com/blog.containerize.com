---
title: "Ubuntu'ya Pydio Dosya Paylaşımı ve Senkronizasyon Platformu Nasıl Kurulur" 
seoTitle: "Ubuntu'ya Pydio Dosya Paylaşımı ve Senkronizasyon Platformu Nasıl Kurulur" 
description: "Pydio, açık kaynaklı bir dosya paylaşımı ve kendi kendine barındırılan işbirlikçi belge paylaşım yazılımıdır. Pydio dosya paylaşım ve senkronizasyon aracının nasıl yükleneceğini inceleyelim." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio, tüm verilere herhangi bir yerde ve herhangi bir cihazda erişmek için bulut tabanlı bir dosya paylaşımı ve senkronizasyon platformudur. Bu öğretici Ubuntu'ya Pydio'nun nasıl kurulacağı ile ilgilidir." 
url: /tr/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio, tüm verilere herhangi bir yerde ve herhangi bir cihazda erişmek için bulut tabanlı bir dosya paylaşımı ve senkronizasyon platformudur. Bu öğretici Ubuntu'ya Pydio'nun nasıl kurulacağı ile ilgilidir.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Ubuntu'ya Pydio Dosya Paylaşımı ve Senkronizasyon Platformu Nasıl Kurulur">}}


## **Genel Bakış** 
Pydio Cells, açık kaynaklı bir dosya paylaşımı ve senkronizasyon yazılımıdır. Tüm veri depolama alanınıza tek bir erişim noktası sağlar ve depolama hizmetleri, dosya paylaşımı ve senkronizasyon sağlayan Owncloud ve NextCloud'a bir alternatiftir. Pydio, Dropbox ve diğer depolama platformlarına benzer bir kurumsal açık kaynak dosya paylaşım platformudur. Tüm dosyalarınızı ve cihazlarınızı tek bir platformda güvenli bir şekilde bağlamanıza yardımcı olur.
Pydio Cells, bulut tabanlı bir dosya senkronizasyonu ve işbirliği platformudur. Bu açık kaynaklı yazılım kişisel BT altyapınız üzerinde çalışır ve personelinizin iş verilerinizi korumasına ve izlemesine yardımcı olur. Verilerinizi senkronize edebilir ve bir mobil uygulama, masaüstü yazılımı veya Pydio hücrelerini kullanarak bir web tarayıcısı kullanarak herhangi bir yerden erişebilirsiniz. Pydio Cells En İyi Dosya Paylaşımı Uygulaması bir mikro hizmet mimarisine dayanır ve Golang programlama dili kullanılarak yazılır.
Bu öğretici, Ubuntu LTS sistemlerine Pydio Self Barding yazılımını ve senkronizasyon platformunu kurmanıza ve yapılandırmanıza yardımcı olacaktır.
  * Başlarken
  * Lamba sunucusunu yükleyin
  * Ubuntu'ya pydio yükleyin
  * Pydio veritabanı ve kullanıcı oluşturun
  * Tarayıcınızdaki Pydio'ya erişin
  * Çözüm

## Adım 1: Başlamak
Kurulumlardan önce, sisteminizin en son paketleri çalıştırdığından emin olmanız gerekir. Ubuntu 20.04 sunucunuzu güncellemek için aşağıdaki komutu kullanın.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Güncellemeden sonra, yeni değişikliklerin yürürlüğe girmesi için sunucunuzu her zaman yeniden başlatmanız önerilir.
```
sudo reboot
```

## Adım 2: Lamba Sunucusunu Yükle
Pydio Secure Enterprise Dosya Paylaşım Sunucusunu ve Açık Kaynak Özel Bulutun Nasıl Oluşturulacağını Kurmak için önce çalışan bir lamba sunucusu oluşturmamız gerekir. Zaten lamba yığınını takmış ve çalıştırmışsanız, bu adımı atlayın, aksi takdirde lambayı Ubuntu sisteminizde ayarlamak için takip komutlarını kullanın.

## # PHP'yi yükle
Komutları çalıştırarak Ubuntu veya Debian sisteminize PHP yükleyebilirsiniz:
sudo apt-get install python-software properties
sudo add -t-repository ppa: ondrej/php
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

## # Apache2'yi kurun
Apache en çok kullanılan açık kaynaklı web sunucusu yazılımıdır. Ardından, çalışarak Apache web sunucusunu Ubuntu'ya yükleyin:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

## # MySQL'i kurun
MySQL Açık kaynaklı ilişkisel veritabanı yönetim sistemi, lamba web uygulama yazılımı yığınının ve diğerlerinin bir bileşenidir. Şimdi aşağıda çalışarak MySQL'i Ubuntu'ya yükleme:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
Kurulum tamamlandığında, Düzenlemek için **PHP.ini**  yapılandırma dosyasını açın. Tercih ettiğiniz dosya düzenleyicisini kullanın.
Php.ini dosyasında aşağıdaki gibi değişiklikler yapın. İki dosya açın ve değişiklikleri gösterildiği gibi yapın
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Aşağıdaki değişiklikleri yapın
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Dosyayı kaydedin ve kapatın ve diğer php.ini dosyasını düzenlemeye devam edin
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Adım 3: Pydio'yu Ubuntu'ya Yükle
Öncelikle, zaten mevcut olmadığı için Ubuntu 20.04 sunucunuza Pydio En İyi Ücretsiz Dosya Paylaşım Yazılım Deposu eklemeniz gerekir. Ayrıca iş genel anahtarı için Pydio en iyi dosya paylaşım sistemi ekleyin ve sistem deponuzu güncellemeye devam edin.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Şimdi Pydio EFSS ve belge paylaşım yazılımı yükleme zamanı. Komutu gösterildiği gibi çalıştırın
```
sudo apt install -y pydio pydio-all
```
Aşağıdaki gösterilen komutları kullanarak Apache yeniden yazma modülünü etkinleştirin ve yeniden başlatın ve apache2'yi etkinleştirin
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Aşağıdaki komutu kullanarak Apache Service'in çalıştığını onaylayın:
```
sudo systemctl status apache2
```
Apache2 hizmetinin çalıştığını gösteren kurulum düzgün yapılırsa çıktı gösterildiği gibi olmalıdır.

## Adım 4: Pydio veritabanı ve kullanıcı oluşturun
Kod çıkardıktan sonra, Pydio'yu yapılandırmak için bir MySQL veritabanı ve kullanıcı hesabı oluşturalım. Ajaxplorer Sharesync veya Pydio veritabanı ve kullanıcı oluşturmak için MySQL Server'a giriş yapmak için aşağıdaki komut kümesini kullanın.
mysql -u root -p
Parolanı Gir:
MySQL> Veritabanı Oluştur Pydio;
Mysql> Pydio'da hepsini verir.
MySQL> Aydınlatma ayrıcalıkları;
MySQL> Bırak
{{_LINE_69_}}
Ardından, özel bir bulut oluşturmak için Web arayüzünden Ubuntu'ya Pydio'yu yüklememiz gerekiyor.

## Adım 5: Tarayıcınızdaki Pydio'ya erişin
Tarayıcınızı açın ve _http: /// pydio_ url'sini yazın. Gösterildiği gibi bir sayfa görmelisiniz
Pydio özel bulut dosya paylaşımı ve iş dosyası paylaşım yazılımı artık yüklendi ve yapılandırıldı, web arayüzlerine erişmenin zamanı geldi.
Tarayıcınızı açın ve url yazın http: // serinver -ip / pydio. Bir sonraki sayfaya yönlendirileceksiniz:

{{< figure align=center src="images/Pydio-Installer.png" alt="Pydio yükleyici">}}

Tüm kontrolleri onaylayın ve **Pydio Kurulum**  düğmesine devam edin. Aşağıdaki sayfayı görmelisiniz:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydio Kurulum Sihirbazı">}}

Dilinizi seçin ve **Sihirbazı Başlat**  tıklayın. Aşağıdaki sayfayı görmelisiniz:

{{< figure align=center src="images/Starting-the-setting.png" alt="Pydio ayarlarını başlatın">}}

Program adını girin ve hoş geldiniz mesajı. Ardından **Sonraki**  düğmesini tıklayın. Aşağıdaki sayfayı görmelisiniz:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Pydio uygulamasını girin">}}

Ardından, Yönetici hesabınızı girin ve **Sonraki**  düğmesini tıklayın. Aşağıdaki sayfayı görmelisiniz:

{{< figure align=center src="images/MySQL-database-settings.png" alt="MySQL Veritabanı Ayarları">}}

Ardından veritabanı adı, kullanıcı adı ve şifre gibi veritabanı ayrıntılarınızı girin. Ardından **Test DB Bağlantısı**  düğmesini tıklayın. Aşağıdaki sayfayı görmelisiniz:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Pydio Gelişmiş Seçenekler">}}

Ardından, **Pydio**  düğmesini takın. Kurulum başarıyla tamamlandıktan sonra. Bir sonraki sayfaya yönlendirileceksiniz:

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio Giriş">}}

Ardından yönetici için kullanıcı adınızı ve şifrenizi girin. Ardından [Enter] düğmesini tıklayın. Aşağıdaki sayfayı görmelisiniz:

Evet! Bitti. Artık Dropbox veya Google Drive'a benzer adım adım özel bir bulut adım oluşturmak için Ubuntu'da Pydio Selfole Dosya Senkronizasyonu ve Açık Kaynak Dosya Paylaşım Yazılımı nasıl tamamen yükleneceğini biliyorsunuz.

## **Sonuç:**    {#4A1A}
Bu öğreticide, Ubuntu sisteminize Pydio hücreleri açık kaynaklı güvenli dosya paylaşımını başarıyla yüklediniz. Bu makaleyi, dosyalarınızı kendi kendine barındıran bulutta depolamak, güvence altına almak ve paylaşmak için bir bulut altyapısı oluşturmak için kullanabilirsiniz. Verilerinizi daha fazla kontrol etmek ve iş organizasyonunuzda verimli işbirliği sağlamak için Pydio İşbirlikçi Belge Paylaşımı ve En İyi Ücretsiz Dosya Paylaşımı uygulamasını kullanın. Yaklaşan öğreticilerimizde, açık kaynaklı bulut depolama çözümleri ve dosya paylaşımı işbirliği araçlarının daha ilginç konularını tartışacağız.
_ [Twitter][1], [LinkedIn][2] ve [Facebook][3] sayfamızda bize katılabilirsiniz. Çevrimiçi olarak hangi cloud tabanlı_ açık kaynak _file paylaşım platformu kullanıyorsunuz? Herhangi bir sorunuz varsa, lütfen_ [iletişime geçin][4].

## Keşfetmek:
Ayrıca sunucunuzun günlük yönetimi ile ilgili başka birkaç makalemiz de var.
  * [Apache'yi Ubuntu/Debian için ters proxy olarak nasıl yapılandırır][5]
  * [Ubuntu'da nginx ile phpmyadmin nasıl kurulur ve güvence altına alınır][6]
  * [Ubuntu 20.04'te Let's Şifreleme ile Nginx'i Güvenli ve Şifreleyin][7]
  * [Ubuntu/Debian'da Nginx'te HTTP/2 desteğini yapılandırın][8]
  * [AWS Üretim Sunucusunda Yolcu ile Nginx'i Kurun][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
