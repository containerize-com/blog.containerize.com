---
title: "Ubuntu 20.04'te SSL ile Webmin nasıl yüklenir" 
seoTitle: "Ubuntu 20.04'te SSL ile Webmin nasıl yüklenir" 
description: "Webmin, Unix benzeri sistemler için web tabanlı bir sistem yönetimi aracıdır. Bu yazıda Ubuntu 20.04'te SSL ile Webmin'in nasıl yükleneceğini öğreneceğiz." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin, komut satırı sistem yönetimine basit bir alternatif olan Web tabanlı bir sistem yönetimi aracıdır. Bu makale Webmin'in nasıl kurulacağı rehberlik ediyor" 
url: /tr/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Webmin Nasıl Kurulur">}}


## Webmin, komut satırı sistem yönetimine basit bir alternatif olan Web tabanlı bir sistem yönetimi aracıdır. Bu makale Webmin'in nasıl kurulacağı rehberlik ediyor
“Ubuntu 20.04'te SSL ile Webmin Nasıl Kurulur” makalesiyle Web Hosting Yazılımı ve Araçları'nda yeni öğretici serimize başlıyoruz. Webmin ile kullanıcı hesaplarını ayarlayabilir, dosya paylaşımını etkinleştirebilir, apache ve DNS ayarlarını yapılandırabilir ve web barındırma ile ilgili daha birçok görev gerçekleştirebilirsiniz. Tüm web barındırma sunucusunu yönetmenizi sağlar. Linux yapılandırma dosyalarını manuel olarak düzenleme sorununu ortadan kaldırır. Öyleyse Webmin'in SSL ile nasıl yükleneceğini öğrenelim.
  ***[Webmin'e Giriş][1]** 
  *[**Vurgulanan özellikler** ][2]
  *[**Desteklenen İşletim Sistemleri** ][3]
  *[**Ubuntu'ya webmin yükleyin** ][4]
  *[**Webmin kullanarak Apache'yi yükleyin** ][5]
  *[**Sonuç** ][6]

## Webmin'e Giriş   {#Intro}
Webmin, Linux için sistem yönetimi için web tabanlı bir arayüzdür. Herhangi bir modern web tarayıcısından uzaktan kendi barındırma sunucunuzu yönetmenize yardımcı olur. Webmin ile kullanıcı hesapları, apache, dns, dosya paylaşımı ve çok daha fazlası gibi işletim sistemi iç kısımlarını yapılandırabilirsiniz. Webmin ayrıca, tek bir arayüz aracılığıyla birçok makinenin kontrol edilmesine veya aynı alt ağ veya LAN'daki diğer webmin ana bilgisayarlarında sorunsuz oturum açmasına izin verir. Perl'ye dayanan Webmin, kendi süreci ve web sunucusu olarak çalışır. Ve webmin ile ilgili en iyi yanı% 100 ücretsiz ve açık kaynaktır ve çok gelişen bir geliştirici topluluğuna sahiptir.

## Vurgulanan özellikler   {#features}
  * Etki alanları, DNS kayıtları, seçenekleri ve görünümleri bağlamanızı ve düzenlemenize olanak tanır.
  * IPFW kullanarak kurallar oluşturarak ve düzenleyerek bir güvenlik duvarının yapılandırılmasına yardımcı olur.
  * /Etc/init.d veya /etc/rc.local adresinden önyükleme zamanında çalıştırılacak komut dosyaları ayarlayalım
  * Dosya aktarımını sunucudan birden çok sunucuya planlayabilirsiniz
  * Bir kaynaktan RPMS, Debian ve Solaris paketlerini birden çok sunucuya yüklemenizi sağlar.
  * Bant genişliği kullanımı, yüklemeler, indirmeler, ziyaretçiler vb. Gibi raporlara erişim sağlar.
  * Aynı anda birden çok sunucuda çalışan planlanmış cron işleri oluşturabilirsiniz
  * Bir kerede birden çok sunucuda komutları çalıştırmanızı sağlar
  * Yerel dosya sistemleri için kullanıcı veya grup disk kotalarını ayarlamanıza ve düzenlemenize olanak tanır
  * Dökümü kullanarak dosya sistemlerini yedekleme ve geri yükleme ve komut ailesini geri yükleyin
  * Windows'a benzer bir dosya yöneticisi kullanarak, sunucunuzdaki dosyalarda ve dizinlerde izinleri görüntüleyebilir, düzenleyebilir ve değiştirebilirsiniz.
  * Hizmet Konumu Protokol Sunucusunu yapılandırabilirsiniz
  * Windows benzeri bir dosya yöneticisi ile sisteminizdeki dosyalar ve dizinlerdeki izinleri görüntüleyin, düzenleyin ve değiştirin
  * INETD'den Stunnel Run'ı kullanarak POP3 ve IMAP gibi hizmetleri şifrelemek için SSL tünellerinin kurulmasına yardımcı olur.

## Desteklenen İşletim Sistemleri   {#Support}
Farklı UNIX benzeri işletim sistemleri ve Linux dağıtımları çeşitli yapılandırma dosyaları için farklı konumlar kullandığından, Webmin yalnızca yapılandırıldığı sistemleri destekleyebilir. Aşağıdaki işletim sistemleri Webmin'in 1.979 sürümü tarafından desteklenmektedir:
  * Almalinux linux
  * Alphacore Linux
  * Amazon Linux
  * Aplinux
  * Asianux
  * Asianux Sunucusu
  * BigBlock
  * BSDI
  * Caixa Magica
  * Caldera OpenLinux
  * Caldera openlinux eserver
  * Caos Linux
  * Cendio lbs linux
  * Centos Linux
  * Citrix Hipervizör
  * Cloudlinux
  * Cloudrouter Linux
  * Kobalt Linux
  * Tutarlı Teknoloji Linux
  * Conectiva linux
  * Corel Linux
  * Corvus latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * Aralık/Compaq OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Endian Güvenlik Duvarı Linux
  * Fedora Linux
  * Freebsd
  * Jenerik linux
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * İmmüniks linux
  * Lanthan Linux
  * Linux nane
  * Linuxppc
  * Lycoris masaüstü/lx
  * Mac OS X
  * MacOS Catalina
  * MacOS High Sierra
  * MacOS Mojave
  * macos sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Kurumsal Sunucusu
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis linux
  * Çoğunlukla
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * OpenMAba Linux
  * Openna Linux
  * Opensee Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X
  * Pardus linux
  * pclinuxos linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat linux masaüstü
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Bilimsel Linux
  * SCO OpenServer
  * SCO UNIX yazılımı
  * Güvenli Linux
  * SGI IRIX
  * Slackware Linux
  * Slamd64 linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Startcom linux
  * Sun Java Masaüstü Sistemi
  * Sun Solaris
  * Suse linux
  * Suse OpenExchange Linux
  * Suse sles linux
  * Synology DSM
  * Tao Linux
  * Tawie sunucusu linux
  * Thizlinux masaüstü
  * Thizserver
  * Tinysofa linux
  * Trustix
  * Trustix SE
  * Turbolinux
  * Ubuntu linux
  * United Linux
  * Ute linux
  * Virtuozzo linux
  * Beyaz cüce linux
  * Whitebox Linux
  * Wind River Linux
  * Pencereler
  * X/OS Linux
  * Xandros Linux
  * Xcp-ng linux
  * Xenserver Linux
  * Sarı köpek linux
  * Yoper linux
Şu anda en iyi desteklenen sistemler Solaris, Linux (özellikle REDHAT) ve FreeBSD'dir.

## Webmin'i ubuntu'ya yükleyin   {#install}
Webmin yüklemek için **kök  **ayrıcalıkları olan bir kullanıcıya erişmeniz gerekir. **  sudo**  erişim ile kök olmayan bir kullanıcı kurmanız önerilir.
Aşağıdaki komutu kullanarak sunucunuza ilk SSH
```
ssh user@server_IP_address
```
Webmin'i _apt-get_ aracılığıyla yüklemek için, önce webmin deposunu _sources.list_ dosyanıza eklemeniz gerekir. Sunucunuzda, favori metin düzenleyicinize _sources.list_ dosyasını açın. Bu öğreticide VIM'i kullanacağız:
```
sudo vi /etc/apt/sources.list
```
Dosya açıldıktan sonra dosyanın sonuna aşağıdaki satırları ekleyin.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Şimdi Webmin GPG tuşunu APT'ye ekleyin, böylece eklediğiniz kaynak depoya güvenilir. Bu komut bunu yapacak:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Webmin'i yüklemeden önce Apt-Get’in paket listelerini güncellemeniz gerekir:
```
sudo apt-get update
```
Şimdi webmin yüklemek için bu apt-get komutunu çalıştırın:
```
sudo apt-get install webmin 
```
Kurulumu onaylamak için Y girin. Kurulum tamamlandıktan sonra, webmin hizmeti otomatik olarak başlayacaktır. Web arayüzü 10000 numaralı bağlantı noktasında çalışacaktır. Aşağıdaki URL'yi kullanarak arayüze erişebilirsiniz.
```
https://server_IP_address:10000
```
Sunucunuzun SSL sertifikasına güvenilmediğini söyleyen bir uyarı isteyecektir. Bunun nedeni, Webmin kurulumdan sonra otomatik olarak bir SSL sertifikası oluşturur ve yüklemesidir ve sertifika, bilgisayarınız tarafından güvenilen bir sertifika yetkilisi tarafından verilmemiştir. Devam etmek iyi. Web tarayıcınıza sertifikaya güvenmesini bildirin.
Bu noktada, webmin giriş ekranını göreceksiniz:

{{< figure align=center src="images/webmin-login-screen.png" alt="Webmin'i kurun">}}

Webmin'e ilk giriş yaptığınızda, **Sistem Bilgileri**  sayfasına götürüleceksiniz. Size sisteminizin kaynaklarına ve diğer çeşitli bilgilerine genel bir bakış sunar.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Webmin Sistem Bilgilerini Yükle">}}


## Webmin kullanarak Apache'yi yükleyin   {#install-apache}
Webmin, farklı yazılım paketlerini yöneten çok çeşitli modüllerle birlikte gelir. Webmin kullanarak apache yüklemek için aşağıdaki talimatları izleyin
**Adım 1 **: Gezinme menüsünde, kategoriyi genişletmek için  **Kullanılmamış Modüller **  tıklayın ve ardından  **Apache Weberver**   tıklayın.
Sunucunuza Apache yüklü yoksa, modül sizi bilgilendirir ve size Apache'yi yüklemenin bir yolunu sunar.
**Adım 2 **:  **BURAYA TIKLAYIN**   bağlantısı (son cümlede) Apache'yi Webmin aracılığıyla Apt-Get aracılığıyla yüklemek için (son cümlede).
Apache kurulumu tamamlandıktan sonra, sunucunuz varsayılan Apache sunucusunu çalıştıracaktır.

## Sonuç   {#Conclusion}
Bu makalede Webmin'in yapabileceği çok sayıda şey tartışılmaktadır, Webmin, Linux/Unix sunucularınızı yönetmek için en iyi araçlardan biridir. Bu öğreticide ayrıca Ubuntu'ya Webmin'in nasıl yükleneceğini öğrendik, ayrıca Webmin kullanarak sunucunuza Apache'nin nasıl yükleneceğini tartıştık.

## Keşfetmek
  * [Ubuntu'da nginx ile birden fazla PHP sürümü nasıl kurulur][7]
  * [NGINX'i ters proxy olarak nasıl kurar ve yapılandırır][8]

  
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
