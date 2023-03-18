---
title: "Kaynak Kontrol Sunucusundan Sürekli Entegrasyon ve Sürekli Dağıtım" 
seoTitle: "Kaynak Kontrol Sunucusundan Sürekli Entegrasyon ve Sürekli Dağıtım" 
description: "Ücretsiz dağıtım aracı, geliştirme ekiplerinin yazılım dağıtım iş akışlarını otomatikleştirmesine yardımcı olur. Jenkins ve Github depo ile yazılımı hızlı bir şekilde oluşturun, test edin, dağıtın." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Ücretsiz dağıtım aracını kullanarak geliştirme iş akışlarını otomatikleştirin. Yazılım dağıtım için Jenkins Automation Server ve GitHub ile CI/CD'nin nasıl kurulacağını öğreneceğiz." 
url: /tr/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## Ücretsiz dağıtım aracı kullanarak geliştirme iş akışlarını otomatikleştirin. Yazılım dağıtım için Jenkins Automation Server ve GitHub ile CI/CD'nin nasıl kurulacağını öğreneceğiz.

{{< figure align=center src="images/ci-cd-post.png" alt="Sürekli entegrasyon ve sürekli dağıtım">}}

Geliştirme ekipleri, FTP gibi yazılım dağıtım için farklı yöntemler kullanır, depodan kod çekme ve daha fazlası kullanır. Tüm bu yöntemler manuel olarak gerçekleştirilir ve çok çaba gerektirir. Daha fazla ekibin yazılım geliştirme için çevik metodolojiyi takip ettiğini görebiliriz. Böylece, sık sık yeni özellikler ve hata düzeltmesi yayınlarlar. Bu nedenle, yazılım dağıtım iş akışlarını otomatikleştirmek, ekiplerin yeni sürümleri hızlı ve hatasız başlatmalarına yardımcı olur. Yazılım dağıtım işlemini otomatikleştirmek için Jenkins ** ve GitHub ile ** CI/CD'nin nasıl kullanılacağını öğreneceğiz. Bu makalede aşağıdaki bölümleri ele alacağız.
  *[** Jenkins nedir? **] [1]
  *[** Sürekli Entegrasyon **] [2]
  *[** Sürekli Dağıtım **] [3]
  *[** Jenkins'i yapılandırın **] [4]
  *[** Jenkins işini yarat **] [5]

## Jenkins nedir? {#Jenkins}
** Jenkins ** Yazılım dağıtım sürecini otomatikleştirmek için güçlü bir ** ücretsiz dağıtım aracı **. Oluşturma, test ve dağıtım için açık kaynaklı bir otomasyon sunucusudur. Jenkins usta-köle mimarisi kullanıyor. Bu, yazılım ekiplerinin yazılım için aynı anda birden fazla yapı ve test çalıştırmasını sağlar. Buna ek olarak, çok sayıda eklenti var ve ekipler bunları gerektiği gibi kullanabilir. Daha fazla bilgi ve kurulum için [** Jenkins sayfasını **] [6] ziyaret edebilirsiniz. Ayrıca, kaynak kodunu Jenkins [** Github **] [7] deposunda bulabilirsiniz.

## Sürekli Entegrasyon {#ci}
** Sürekli Entegrasyon **, geliştiricilerin kodu sık sık paylaşılan bir depoya entegre etmesini gerektiren bir geliştirme uygulamasıdır. Kodun depoya her entegrasyonu/itme otomatik yapı ve testlerle doğrulanabilir. Ayrıca, geliştiricilerin koddaki sorunları kolayca tanımlamasına olanak tanır.

## sürekli dağıtım {#cd}
** Sürekli Dağıtım ** Sürekli entegrasyondan sonraki bir sonraki adımdır. Ekiplerin sunucuda sürekli kod dağıtmasına izin verir. Ayrıca, geliştiricilerin tekrarlayan görevleri azaltmasına ve çevikliği artırmasına yardımcı olur.

## Jenkins'i yapılandırın {#configure}
Jenkins'te yapılandırma için adım adım kılavuz izleyin.
  * Jenkins sitenizi açın ve giriş yapın.
  * “SSH üzerinden yayınlayın” eklentisini yükleyin. “Jenkins'i Yönet → Eklentileri Yönet → Mevcut” için gezinerek arayabilirsiniz.
  * Aşağıda gösterildiği gibi “Jenkins” kullanıcısı olarak yapı sunucusunda SSH tuşunu oluşturun.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * SSH kullanarak hedef/dağıtım sunucusuna bağlanın. Aşağıdaki komutu çalıştırın ve pub dosyası içeriğini hedef sunucuya yapıştırın.
```
$ cd .ssh
$ nano authorized_keys
```
  * “Jenkins → Yapılandırma Sistemi → SSH Yayınla” yönetmek için gezin.
  * Dosya yolunu bularak veya Dağıtım Sunucusu için yapılan içeriği yapıştırarak SSH tuşunu ekleyin.
  * “SSH sunucuları” nın yanındaki "Ekle" düğmesine tıklayarak bir SSH sunucusu ekleyin.
  * Dağıtım/hedef sunucusu için ad, ana bilgisayar adı, kullanıcı adı ve uzak dizin girin.
  * Jenkins'in dağıtım sunucusuna bağlanabildiğinden emin olmak için Test Yapılandırma düğmesine tıklayın.
  * Son olarak, bilgileri saklamak için Kaydet düğmesine tıklayın.

## Jenkins Job {#Create}
Bu adımları Jenkins işi oluşturmak için kullanabilirsiniz.
  * Jenkins Gösterge Tablosunu Açın ve “Yeni Öğe” düğmesine tıklayın.
  * Proje adını girin ve “serbest stil işi” seçin.
  * Github depo URL'sini “Yapılandırma Penceresi” altına girin.
  * “Yapı Ortamı” bölümünde, “Derleme Başlamadan Önce Çalışma Alanı Sil” ve “Dosya Gönder veya Yapım Çalışmaları'ndan sonra SSH üzerinden komutlar yürüt” seçeneklerini kontrol edin.
  * Yapı ortamı altında ad, kaynak dosyaları ve uzaktan dizin girin.
  * İşten kurtarın ve inşa edin.
  * Dağıtım sunucusuna bağlanın ve kodun orada olduğundan emin olun.

## Çözüm
Bu makalede ** Jenkins sunucusu **, ** sürekli entegrasyon ** ve ** sürekli dağıtım ** tartıştık. Ayrıca ** ücretsiz dağıtım aracının ** nasıl yapılandırılacağını öğrendik ve GitHub'ı kullanarak dağıtım için bir Jenkins işi oluşturduk. Ücretsiz CI/CD aracı, geliştirme ekibinin yazılım dağıtım iş akışlarını otomatikleştirmesini ve önemli işlere odaklanmasını sağlar. Önümüzdeki yayınlarda diğer dağıtım araçlarını ele alacağız.
Son olarak, [** Containerize.com **] [8] diğer açık kaynak dağıtım araçları hakkında makaleler yayınlayacaktır. Bu nedenle, düzenli güncellemeler için lütfen [** dağıtım araçları **] [9] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  *** [Jenkins] [6] **
  *[** drone **] [10]
  *[** Dağıtıcı **] [11]
  *[** Capistrano **] [12]
  *[** Rancher **] [13]
  *[** Concourse **] [14]
  *[** Ansible **] [15]
  *[** GOCD **] [16]
  *[** 2021'de Top 5 Açık Kaynak Dağıtım Aracı **] [17]
  *[** Dağıtıcı ile PHP Uygulama Dağıtımını Otomatikleştirin **] [18]
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
