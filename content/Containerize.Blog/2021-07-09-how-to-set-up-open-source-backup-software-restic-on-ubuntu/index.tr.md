---
title: "Ubuntu'da Açık Kaynak Yedekleme Yazılımı Restic Nasıl Kurulur" 
seoTitle: "Ubuntu'da Açık Kaynak Yedekleme Yazılımı Restic Nasıl Kurulur" 
description: "Restic, hızlı, güvenli ve en iyi açık kaynaklı yedekleme yazılımlarından biridir. AWS S3, Microsoft Azure, Google Cloud ve diğer arka uç seçeneklerini destekler." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Açık kaynak yedekleme yazılımı ile yedekleyin ve yerel veya harici arka uçlarda saklayın. Restic, platformlar arasıdır ve birden fazla depolama türünü destekler." 
url: /tr/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## Açık kaynak yedekleme yazılımı ile yedekleyin ve yerel olarak veya harici arka uçlarda saklayın. Restic, platformlar arasıdır ve birden fazla depolama türünü destekler.

{{< figure align=center src="images/restic-post-banner.png" alt="Açık Kaynak Yedekleme Yazılımı">}}

Bir yedekleme sistemi hem işletmeler hem de bireyler için gerçekten önemlidir. Veriler siber saldırı, sistem arızası, kazara çıkarma ve daha fazlası gibi çeşitli nedenlerle kaybolabilir. Verilerinizi hızlı bir şekilde geri yükleyebilmeniz için iyi bir yedekleme stratejisine sahip olmalısınız. Bu kılavuz, Ubuntu sunucunuza ** açık kaynak yedekleme yazılımını ** restic'i nasıl yükleyeceğinizi ve kullanacağınızı gösterecektir.
Bu öğreticide aşağıdaki bölümleri ele aldık.
  *[** Önkoşul **] [1]
  *[** Restic nedir? **] [2]
  *[** Restic kurulumu **] [3]
  *[** Restic yapılandırması **] [4]
  *[** Restic'e alternatifler **] [5]
  *** [Sonuç] [6] **

## Önkoşullar {#prerequisites}
Restic Backup yazılım programı üç ana işletim sistemi Linux, macOS ve Windows'u destekler. ** Restic Backup ** yüklemeden önce aşağıdaki sistem gereksinimlerini karşılamalısınız.
  * Yedeklenecek verileri barındıran Ubuntu işletim sistemine sahip makine veya masaüstü sistemi
  * En son Ubuntu sunucu örneği
  * İki istemci ve sunucu arasında yapılandırılmış SSH anahtar kimlik doğrulaması
  * Sudo ayrıcalıkları olan kök dışı kullanıcı
Bu bitler elle hareket edelim ve işe başlayalım.

## Restic nedir? {#Restic}
[** Restic **] [7] Fantastik ** Açık Kaynak Yedekleme Aracı **. Hızlı, güvenli ve verimli bir ** ücretsiz yedekleme yardımcısı **. Platformlar arası yedekleme programıdır, bu nedenle Linux, BSD, Mac OS X ve Windows'ta çalışır. Restic en iyi açık kaynak yedekleme yazılımının çalıştırılması kolaydır ve bir sunucu veya karmaşık bir yapılandırma gerektirmez. Değiştirilmiş verilerin bir yedeğini oluşturur ve kullanıcıların gerektiğinde geri yüklemelerine izin verir. Ayrıca, kendi kendine barındırılan ve internet depolama da dahil olmak üzere çeşitli depolama seçenekleri sunar. Ayrıca, Restic Açık Kaynak Kendine Barındırılan Bulut Depolama, verilerinizi korumak için sağlam kriptografik teknikler kullanır.
Restic basit bir dosya kopyalama yardımcı programı değildir. Öncelikle iki kavram üzerine kurulmuştur: anlık görüntüler ve depolar. ** RESTIC ** Açık kaynak yedekleme çözümü, bilgileri bir anlık görüntü olarak kaydeder, bu da daha sonra bir depoya kaydedilir. Go programlama dilinde yazılmıştır. Restic Go tabanlı yedekleme yardımcı programı ve açık kaynak yedekleme uygulaması birçok bulut ve yerel arka uç depolama sistemi ile sorunsuz çalışır. Restic açık kaynak dosya yedekleme yazılımının kaynak kodu [** github **] [8] adresinde mevcuttur. Ancak, kurulum ve kullanım için ayrıntılı [** dokümantasyon **] [9] bulabilirsiniz.
Restic Self Barındırılan Bulut Yedekleme, yedek depolama için arka uçları takip eden kutudan çıkma destekler.
  * Yerel dizin
  * SFTP Sunucusu (SSH aracılığıyla)
  * REST Sunucusu
  * AWS S3
  * Minio Server
  * Wasabi
  * Alibaba bulutu
  * OpenStack Swift
  * Backblaze b2
  * Microsoft Azure Blob Depolama
  * Google Bulut Depolama
Yukarıda listelenenlere ek olarak çeşitli arka uçlar için [** rclone **] [10] kullanabilirsiniz.

## restic kurulumu {#installation}
Ubuntu işletim sisteminize Restic En İyi Kendine Barındırılan Bulut Depolama kurmanın çeşitli yolları vardır. Ubuntu paketi, Docker ve kaynak kodunu kullanarak Restic Selfed Dosya Depolama yüklemesini kapsayacağız.

### Paketi kullanarak yükleme
  * Ubuntu işletim sistemine restik açık kaynak yedekleme sunucusunu yüklemek için aşağıdaki komutu çalıştırın.
```
$ sudo apt-get install restic
```

### Docker kullanarak yükleme
  * RESTIC görüntüsünü Dockerhub'dan alın.
```
$ docker pull restic/restic
```

### Kaynak kullanarak yükleme
  * İlk olarak, RESTIC'i kaynaktan ayarlamak için GO programlama dilini yüklemeniz gerekir. Talimatları yüklemek için resmi [** Golang web sitesi **] [11] ziyaret edebilirsiniz.
  * Ardından, RESTIC artımlı yedekleme yüklemek için aşağıdaki komutları yürütün.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * Hedef işletim sistemini komutta belirterek, desteklenen tüm platformlar için Restic'i hızlı bir şekilde derleyebilirsiniz. İşte birkaç örnek.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## restic yapılandırması {#configuration}
Yukarıda belirttiğimiz gibi, restik açık kaynak yedekleme sisteminin yedekleme için anlık görüntülere ve depolara dayandığını. Bir depo kuracağınıza, bir anlık görüntü kuracağına ve yedeklemeyi nasıl geri yükleyeceğine bir göz atalım.

### depo oluştur
  * Depoyu başlatmak için aşağıdaki komutu çalıştırın. Ayrıca depo için bir şifre ayarlamanız gerekir.
```
$ restic init --repo /tmp/
```

### Verileri yerel bir dizine yedekleme
  * İlk adımda, verileri depolamak için bir depo oluşturduk. Şimdi, yedekleme için depoya veri ekleyeceğiz. Aşağıdaki komutu yürütün.
```
$ restic --repo /tmp/backup backup ~/work
```

### Yedeklemeyi geri yükleyin
  * Geri yükleme komutu dosyaları ve dizinleri geri yükler. Restic açık kaynak bulut yedekleme kullanılırken dosyalar orijinal konumlarına geri yüklenmez. Restic tarafından geri yüklenecek dosyaların bir hedef konumu seçmelisiniz.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * Ancak, anlık görüntü kimliğini belirtmeden en son anlık görüntüyü geri yükleyebilirsiniz. En son parametreyi aşağıdaki gibi komuta eklemeniz gerekir.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### Anlık görüntülerle çalışmak
Bu bölümde, bazı anlık görüntülerin özelliklerine bakacağız.
  * Snaphostları listelemek için aşağıdaki komutu çalıştırın.
```
$ restic snapshots -r /tmp/backup
```
  * İki anlık görüntüyü aşağıdaki komutla karşılaştırabilirsiniz.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Depolama alanını serbest bırakmak için eski bir yedeklemeyi silmeniz gerekebilir. Bir anlık görüntüyü kaldırmak için aşağıdaki komutu çalıştırın.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## Restic'e alternatifler
Restic en popüler açık kaynaklı yedekleme yazılımı uygulamasıdır ve önemli dosyalar verilerinizin gizliliğini ve bütünlüğünü garanti eder. Restic veri yedekleme aracı için en popüler alternatifler ve en iyi rakipler aşağıdadır.
  * Amazon buzul
  * Çoğaltma
  * Runrestic
  * AFI
  * Yağmurlu Yedekleme
  * Borg
  * Veeam yedekleme
  * AWS Depolama Ağ Geçidi
  * Yarışma

## Çözüm
Bu makalede, RESTIC ** ÜCRETSİZ Açık Kaynak Yedekleme Yazılımını ** ele aldık. Ayrıca çeşitli kurulum tekniğinin yanı sıra yedeklemenin nasıl oluşturulacağı ve yedeklemenin nasıl geri yükleneceğini de tartıştık. Başka birçok veri yedekleme depolama alanı var ve bu makalede sadece bir tane ele aldık. Kalan arka uç depolama türleri gelecekteki yayınlarda ele alınacaktır. Bu öğreticinin yedeklemeleri almak ve geri yüklemek için RITIC en iyi açık kaynak yedekleme aracını kullanmanız için bir başlangıç ​​noktası olacağını umuyoruz.
Son olarak, [** Containerize.com **] [12], en son açık kaynaklı ürünlere blog yayınları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [** yedekleme yazılımı **] [13] kategorisiyle iletişim halinde olun.
_ En sevdiğiniz ücretsiz ve açık kaynak yedekleme yazılımı nedir?. Açık kaynak yedekleme yazılımı hakkında herhangi bir sorunuz var mı? Lütfen_ [İletişim kurun] [14].

## Keşfetmek:
Ayrıca OSS Watch'tan başka ilgili bilgilerimiz de var:
  * [2021'de Top 5 Açık Kaynak Bulut Depolama Yazılımı] [15]
  * [Ubuntu sunucusunda apache ile nextcloud nasıl yüklenir] [16]
  * [Ubuntu'da Apache ile Owncloud'u yükleyin ve yapılandırın] [17]
  * [Ubuntu'ya Pydio Dosya Paylaşımı ve Senkronizasyon Platformu Nasıl Kurulur] [18]
  * [NSQ vs Kafka | Temel farklılıklar nelerdir?] [19]
  * [NextCloud vs Owncloud | Farklılıklar nelerdir?] [20]
  * [En İyi Açık Kaynak Bulut Depolama ve Dosya Paylaşım Yazılımı] [21]
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
