---
title: "AWS Üretim Sunucusunda Yolcu ile Nginx Nasıl Kurulur" 
seoTitle: "AWS Üretim Sunucusunda Yolcu ile Nginx Nasıl Kurulur" 
description: "Bu blog yazısı, APT yöntemini takip eden Ubuntu 20.04 LTS işletim sistemi aracılığıyla Nginx'in yolcu ile kurulumu için adımlar açıklanmaktadır." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "Bu blog yazısı, APT yöntemini izleyen Ubuntu 20.04 LTS işletim sistemi üzerinden yolcu ile Nginx'in yüklenmesi için adımlar açıklanmaktadır." 
url: /tr/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## Bu blog yazısı, APT yöntemini izleyen Ubuntu 20.04 LTS işletim sistemi aracılığıyla Nginx'in yolcu ile yüklenmesi için adımlar açıklanmaktadır.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="AWS Üretim Sunucusunda Yolcu ile Nginx'i Kurun">}}


## **Genel Bakış** :
Uygulamanızı üretim sunucusuna dağıtmadan önce AWS Production **sunucusunda**  nginx'i Yolcu ile yüklemeniz ve yapılandırmanız gerekir.
**Açık Kaynak Phusion Yolcu**  Çok sayıda özelleştirme ve özellik seçeneği sunar. Yolcu Uygulamanın performans özelliklerini iyileştirmek için bazı özellikler kullanılır. Özelleştirme uygulaması veya bağlantı işleme davranışını etkiler. Bu kurulum işlemi bu seçeneklerin her ikisini de otomatik olarak ayarlayacaktır.
Bu blog makalesinde, **apt yöntemini**  takip eden Ubuntu işletim sistemine web uygulama sunucusunun yüklenmesi için bazı temel yapılandırma adımlarını ele alacağız. Aşağıdaki kılavuz okuduktan ve takip ettikten sonra Node.js, Python ve Ruby'de yazılmış web uygulamalarını dağıtabilir ve uygulayabilirsiniz.
  ***Nginx ve yolcu nedir?** 
  ***Nginx ve Yolcu Paketlerini Yükle** 
  ***Yolcu Nginx modülünü etkinleştirin ve nginx'i yeniden başlatın** 
  ***Kurulumları doğrulayın** 
  ***Sistem ve Yolcu Güncellemeleri** 
  ***En iyi açık kaynaklı web sunucuları** 
  * **Çözüm**

## 1. Nginx ve yolcu nedir?   {#Adım-4: -update-edular}
**[Nginx sunucusu nedir?][1]  **Nginx, Web için ters proxy, http yük dengeleyici, ortam akışı, http önbellek ve e-posta proxy olarak hizmet veren ücretsiz ve açık kaynaklı bir web sunucusu yazılımıdır. ve SMTP. Maksimum performans ve istikrar için tasarlanmış oldukça ölçeklenebilir. Nginx, aynı anda birden fazla istemci isteğinin işlenmesini sağlayan yüksek performanslı eşzamansız, süresiz ve olay odaklı web sunucusudur. 2-Clause BSD lisansı şartları altında 2004 yılında yayınlanan Igor Sysoev tarafından yazılmıştır. **  Nginx, Apache'den 2,5 kat daha hızlı**  gerçekleştirir ve bir kıyaslama testine göre daha az bellek tüketir.
**[Yolcu nedir?][2]  **Mod _Rails ve Mod \ _rack olarak da bilinen phusion yolcusu ücretsiz bir web sunucusu ve açık kaynaklı web uygulama sunucusudur. Apache ve Nginx ile entegre olan hızlı, sağlam, özellik açısından zengin ve hafif olacak şekilde tasarlanmıştır. Ayrıca uygulamalar için güvenlik, güvenilirlik ve ölçeklenebilirliği artırır. Yöneticilerin web uygulama işlemleri, sunucu performansı hakkında bilgi edinmelerini sağlar. Yolcu App Server web uygulamalarınızı kolayca çalıştırır ve otomatik yönetir. Aynı zamanda çoklu kiracılı ve bağımsız olarak birden fazla uygulamaya**   hizmet verebilir. HTTP isteklerini yerine getirebilir, süreçleri ve kaynakları yönetebilir ve yönetim görevlerini, izleme ve sorunları teşhis edebilecek. Phusion Goter, Meteor, Ruby On Rails Nginx Yolcu, JavaScript, Python ve Node.js uygulamalarını dağıtma ve yönetme desteğine sahip ücretsiz bir uygulama sunucusudur.

## 2. NGINX ve Yolcu Paketlerini Yükle:   {#Step-1: -Sstall-Passenger-Package}
Şimdi yolcu ve nginx kurma zamanı. Bu kılavuzu takip eden popüler web sunucularından birini kolayca dağıtabileceksiniz. Aşağıda listelenen komutlar, Phusion’ın APT deposu aracılığıyla yolcu ve nginx'i yükleyecektir. Zaten Nginx yüklü olsaydınız, bu komutlar Nginx'i Phusion’ın sürümüne yükseltir:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Yolcu Nginx modülünü etkinleştirin ve nginx'i yeniden başlatın:   {#step-2: -paser-the-Passenger-nginx-ve-restart-nginx}
Düzenle /etc/nginx/nginx.conf ve Uncomment dahil /etc/nginx/passenger.conf;. Örneğin, şunu görebilirsiniz:
```
# include /etc/nginx/passenger.conf;
```
‘#’ Karakterlerini kaldırın:
```
include /etc/nginx/passenger.conf;
```
Incors /etc/nginx/passenger.conf; Nginx.conf içinde, o zaman kendiniz eklemeniz gerekir. HTTP bloğunun içine /etc/nginx/nginx.conf içine yerleştirin.
http {
    dahil /etc/nginx/passenger.conf;
    ...
}
Bu adımı bitirdiğinizde, **Nginx'i yeniden başlatın** :
```
$ sudo service nginx restart
```

## 4. Kurulumları doğrulayın:   {#Step-3: -Ceck-installation}
Kurulumdan sonra, lütfen `sudo/usr/bin/yolcu-config validate-install 'komutunu çalıştırarak terminaldeki yüklemeyi doğrulayın:
```
sudo /usr/bin/passenger-config validate-install
```
Tüm kontroller geçmelidir. Çeklerden herhangi biri geçmezse, lütfen ekrandaki önerileri izleyin.
Son olarak, Nginx'in yolcu çekirdek süreçlerini başlatıp başlatmadığını kontrol edin. `Sudo/usr/sbin/yolcu-memory-stats 'çalıştırın. Nginx süreçlerinin yanı sıra yolcu süreçlerini de görmelisiniz. Örneğin aşağıdaki gibi:
```
sudo /usr/sbin/passenger-memory-stats
```
Herhangi bir NGINX işlemi veya yolcu işlemi görmüyorsanız, muhtemelen bir tür kurulum probleminiz veya yapılandırma probleminiz vardır. Lütfen [Sorun Giderme Kılavuzu][3] 'e bakın.

## 5. Sistem ve Yolcu Güncellemeleri:   {#Adım-4: -update-Regularly}
Nginx güncellemeleri, yolcu güncellemeleri ve sistem güncellemeleri **Apt Paket Yöneticisi**  aracılığıyla düzenli olarak teslim edilir. Bunları güncel tutmak için aşağıdaki komutu düzenli olarak çalıştırmalısınız:
sudo apt-get güncellemesi
sudo apt-get yükseltme
Bir güncellemeden sonra Web veya uygulamayı yeniden başlatmanız gerekmez ve ayrıca bir güncellemeden sonra herhangi bir yapılandırma dosyasını değiştirmeniz gerekmez. Bu, APT tarafından sizin için otomatik olarak halledilir.

## 6. **En iyi açık kaynaklı web sunucuları** :   {#Adım-4: -update-rejüler olarak}
**Açık kaynaklı bir web sunucusu nedir?**  Açık kaynaklı bir web sunucusu yazılımı, web sayfalarını İnternet World Wide Web üzerinden sunmak için tasarlanmış bir genel alan yazılımıdır. Temel olarak, World Wide Web'e bilgi dağıtmak için HTTP Ağ Protokolü aracılığıyla istekleri işler.
Web uygulamalarının ve web sitelerinin% 80'inden fazlası açık kaynaklı web sunucuları tarafından desteklenmektedir. Burada **en popüler açık kaynak web sunucularından bazılarını listeledim**  ve bu popüler web sunucularından birini kendiniz kolayca dağıtabilirsiniz.
  ***Apache HTTP Sunucusu** 
  ***LightTPD Web Sunucusu** 
  ***OpenLitespeed Web Sunucusu** 
  ***Apache Tomcat Web Sunucusu** 
  ***caddy web sunucusu** 

## [][4] Sonuç:   {#sonraki adım}
Tebrikler, Web uygulamanız için **AWS Üretim Sunucusu  **'da Yolcu ile Nginx'i başarıyla yüklediniz ve yapılandırdınız. Yolcu Uygulama Sunucusuna tamamen hakim olmak için lütfen [Yolcu Kütüphanesi][5] 'deki çeşitli kılavuzlara bir göz atın. Özellikle, çok fazla manuel çalışma olmadan gelecekteki uygulama güncellemelerini otomatik olarak nasıl dağıtacağınızı öğreten **  capistrano**  aracılığıyla [otomatik dağıtım][6] RABY uygulamanızın kılavuzuyla ilgilenebilirsiniz. Artık web uygulamanızı AWS prodüksiyon örneklerine dağıtmaya hazırsınız.
_ What Free Web Sunucusu ve Açık Kaynak Web Uygulama Sunucusu_ **Web Geliştirme veya Barındırma**  Needs_?. Ücretsiz web sunucusu ve açık kaynaklı web uygulama sunucusu hakkında herhangi bir sorunuz var mı? Lütfen_ [İletişim kurun][7].

## Keşfetmek
Aşağıdaki ilgili blog yayınlarını bulabilirsiniz:
  * [Apache'yi Ubuntu/Debian için ters proxy olarak nasıl yapılandırır][8]
  * [Ubuntu'da nginx ile phpmyadmin yükleyin ve sabitleyin][9]
  * [Ubuntu/Debian'da Nginx'te HTTP/2 desteğini yapılandırın][10]
  * [Ubuntu 20.04'te Let's Şifreleme ile Nginx'i Güvenli ve Şifreleyin][11]
  * [Ubuntu'da Apache ile OwnCloud'u nasıl kurar ve yapılandırır][12]

  
[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
