---
title: "Kubernetes vs Docker | Farklılıklar nedir?" 
seoTitle: "Kubernetes vs Docker | Farklılıklar nedir?" 
description: "Kubernetes bir konteyner orkestrasyon teknolojisidir, Docker ise konteynerler oluşturmak ve çalıştırmak için bir teknolojidir. Kubernetes vs Docker'ı inceleyelim." 
date: Mon, 01 Nov 2021 01:16:43 +0000
author: yasir saeed
summary: "Kubernetes bir konteyner düzenleme teknolojisidir, Docker ise geliştiricilerin kap oluşturmasını ve çalıştırmasını sağlar. İki konteyner teknolojisini gözden geçirelim." 
url: /tr/kubernetes-vs-docker-what-are-the-differences/
categories: ['DevOps', 'Software Development']
---

## Kubernetes bir konteyner orkestrasyon teknolojisidir, Docker ise geliştiricilerin kap oluşturmasını ve çalıştırmasını sağlar. İki konteyner teknolojisini gözden geçirelim.

{{< figure align=center src="images/KubernetesVsDocker.png" alt="Kubernetes vs Docker">}}


## ** Genel Bakış **
Konteyner teknolojileri söz konusu olduğunda, iki isim Kubernetes ve Docker açık kaynak liderleri olarak ortaya çıkıyor. Birçok insan bulut bilişim endüstrisinde hangi konteyner teknolojisi seçeneğinin daha iyi olduğunu bilmek istiyor. ** Kubernetes vs Docker ** ** Eğitici ** tartışma konteynerizasyon dünyasında yaygındır. Her ne kadar çoğu insan kapsayıcı uygulamayı daha verimli yönetmek için Kubernetes ve Docker'ı karşılaştırmayı seviyor. Bu iki güçlü konteynerizasyon teknolojisi değiştirilemez ve birini diğerine seçemezsiniz. ** Docker vs Kubernetes **, konteyner uygulamaları otomatikleştirirken, oluştururken, teslim ederken, yönetirken ve ölçeklendirirken birbirini mükemmel bir şekilde tamamlayabilen ayrı konteyner teknolojileridir. Aslında, en iyi karşılaştırma konusu ** Kubernetes vs Docker Swarm ** olacaktır.
Bu makale, Docker ve Kubernetes teknolojileri arasındaki temel farkı açıklamaktadır ve Docker ve Kubernetes farklılıklarını açıklamaktadır, böylece hızla genişleyen konteyner platformunda gezinmeye güvenebilirsiniz. Harika ve en popüler açık kaynaklı Kubernetes vs Docker Container Technologies'e aşina olalım. Bunu yapmak için, onları birbirine bağlayan temel teknoloji ile başlamak önemlidir: konteynerler.
  * Konteyner nedir?
  * Docker nedir?
  * Kubernetes nedir?
  * Docker Vs. Kubernetes: Hangisini benimsemelisiniz?
  * Çözüm

## 1. ** Konteyner nedir? **
Bir kapsayıcı, uygulama kodunu bağımlılıklarıyla paketleyen ve BT altyapısında çalışmasını sağlayan standart bir yazılım birimidir. Bir kap tek başına durur, bu da onu ** işletim sistemi sanallaştırma ** gibi ortamlarda taşınabilir hale getirir. Bir konteynerin artan popülaritesini anlamanın en iyi yolu, onu bir sanal makine (VM) ile karşılaştırmaktır. ** Konteynerler ve sanal makineler ** Her ikisi de sanallaştırma teknolojilerine dayanmaktadır. Bir kapsayıcı bir işletim sistemini sanallaştırır ve bir VM, fiziksel donanımı sanallaştırmak için VM ve bir bilgisayarın donanımı arasında hafif bir yazılım katmanını kullanır.
Bir kapsayıcı, tüm kütüphaneleri ve bağımlılıkları olan bir uygulamanın tüm çalışma zamanı ortamından oluşur. Bir VM, bir ana bilgisayar işletim sisteminin tam bir kopyasından oluşurken, işletim sistemini çalıştırmak için gereken donanımın sanal bir kopyası, bir uygulama ve ilişkili kütüphaneler ve bağımlılıklar. Bir konuk işletim sisteminin olmaması, bir konteynerin boyutunu azaltarak hafif, hızlı ve taşınabilir hale getirir. Konteynerler, güvenliği artırmak için altta yatan altyapıdan ayırmanıza izin veren taşınabilirlik sorununu çözmenize yardımcı olur. Geliştiriciler, tüm bağımlılıklar ve kütüphaneler de dahil olmak üzere uygulamalarını küçük bir ** konteyner görüntüsüne ** üretim konteynerleştirme platformunda paketleyebilirler.
** DevOps ** Platformlar arası ve dağıtılmış ortamlarda tutarlı bir şekilde çalışan uygulamaları hızlı bir şekilde geliştirmek için kapları kullanın. Daha taşınabilir ve kaynak tasarruflu kaplar, fonksiyonel ekipler arasındaki araç ve yazılım farklılıklarından kaynaklanan çatışmaların çoğunu çözer. Bu ** hafif kaplar **, uygulamaların gevşek bir şekilde bağlanmış ve daha küçük hizmetlerden oluştuğu mikro hizmet mimarileri için idealdir.

## 2. ** Docker nedir? **
[Docker] [1], uygulamaları bağımsız, taşınabilir kaplar olarak geliştirmeyi, dağıtmayı ve çalıştırmayı kolaylaştıran en popüler konteyner platformudur. ** Konteynerizasyon **, kodu ve bağımlılıkları kendi kendine yeterli birim olarak paketlemenizi sağlayan yenilikçi bir işletim sistemi sanallaştırma şeklidir. Uygulamanın farklı izole ortamlarda tutarlı bir şekilde çalışmasını sağlar. Docker lansmanından önce birkaç konteynerizasyon teknolojisi mevcuttu. Docker son yıllarda fiili konteyner platformu olarak büyüdü. Konteyner uygulamalarının çalıştırılmasını basitleştirdi ve son yıllarda konteynerleştirme platformu defacto haline geldi.
** Docker, Inc. Docker'ı 20 Mart 2013'te yayınladı ** ** ve hem tescilli Software Enterprise Edition hem de Açık Kaynak Yazılım Topluluğu Sürümü olarak dağıtıldı. Docker Açık Kaynak Yazılım Topluluğu Edition, piyasada doğru zamanda ortaya çıktı ve bu da mevcut pazar hakimiyetine yol açtı. İşletmelerin% 30'u şu anda Docker'ı AWS üretim ortamları için kullanmaktadır.
Çoğu kişi Docker hakkında konuştuğunda, uygulamalarınızı oluşturmanıza, yönetmenize ve kapsayıcılara sağlayan çalışma zamanı olan ** Docker Engine ** hakkında konuşurlar. Ancak bir Docker kapsayıcısını çalıştırmadan önce Docker dosyası kullanılarak oluşturulmalıdır. Docker dosyası, OS ağı spesifikasyonları ve dosya konumları dahil olmak üzere görüntüyü çalıştırmak için gereken tüm komutları tanımlar ve içerir. Artık bir ** Docker dosyanız ** olduğuna göre, Docker motorunda çalıştırılan bir kap oluşturma için bir dizi talimatla taşınabilir, statik bileşen olan bir Docker görüntüsü oluşturabilirsiniz. Docker ayrıca, ekibiniz, müşterileriniz veya Docker topluluğunuzla saklayabileceğiniz ve paylaşabileceğiniz ** Docker Hub ** adlı bir hizmete sahiptir. ** Docker Compose ** bir YAML dosyasında çoklu kontain uygulamalarını tanımlamak ve çalıştırmak için kullanılır.
Birkaç konteyner çeşitli sunucu ortamlarında dağıtıldığında birçok sorun ortaya çıkar. Konteyner uygulamalarında çok sayıda konteyner örneğini, etkileşimi, koordinasyonu, koordinasyonu ve planlanması çok zorlaşır. Bu, Kubernetes'in bu karmaşıklıkların çoğunu ele almak için geldiği yerdir. Kaynak Konteynerizasyon Platformunu Açar ** Docker Kaynak Kodu Deposu ** [GitHub] [2] 'de mevcuttur.

## 3. ** Kubernetes nedir? **
[Kubernetes] [3] ** K8S ** olarak da bilinir, konteynerleri ** düzenlemek için açık kaynaklı bir platformdur ** ** 2014'te başlatıldı. Dağıtım, ölçeklendirme, planlama ve yönetimi otomatikleştiren kapsamlı bir sistemdir. kapsayıcı uygulamalar. Docker gibi birçok kaptanizasyon aracını destekler. Kubernetes şimdi Cloud Native Computing Foundation'a (** CNCF **) bağışlanmıştır. Konteynerleri düzenlemek ve dağıtılmış uygulamaları dağıtmak için pazar lideri olarak büyüdü.
Kubernetes, çoklu sunucu makinelerinde ** Çoklu Alanlı Uygulamalar ** dağıtır, ölçeklendirme ve yönetirken bazı operasyonel zorlukları işleyebilir. Konteyner uygulamaları tek bir ana bilgisayarda çalıştırmak yerine bir fiziksel veya sanal makine kümesine dağıtır ve planlar. Bu şekilde, Kubernetes'te çalışan uygulamalar tek bir varlık gibi işlev görür, ancak aslında gevşek bir şekilde birleştirilmiş kaplardan oluşabilir. ** Kümeleme **, yöneticilerin fazlalık sunan uyumlu ve işbirlikçi bir sistem grubu oluşturmasını sağlayan hayati bir kaplama kavramıdır.
Kubernetes, Docker tabanlı uygulamaları olan ve canlı bir topluluğa sahip müşteriler için genel bir bulut hizmetinde çalışabilir. Birçok şirket buna yatırım yapıyor ve birçok bulut sağlayıcısı hizmet olarak Kubernetes sunuyor. Konteyner uygulamalarını mevcut kaynaklara göre anında ölçeklendirebilirsiniz, Kubernetes yardımıyla yatay ölçeklendirme ve yük dengeleme gerçekleştirebilirsiniz. Kaynak Konteyner Orkestrasyon Aracı Açıyor ** Kubernetes Kaynak Kodu Deposu ** [GitHub] [4] 'te mevcuttur.

## 4. Docker Vs. Kubernetes: Hangisini benimsemelisiniz?
Kaplar harika. ** Docker ve K8s Kubernetes ** farklı teknolojiler olsa da, aslında birbirlerini tamamlarlar ve birlikte çalışabilirler. Kubernetes'i kurmak karmaşık ve zaman alıcıken Docker kurulumu kolay ve hızlıdır. Docker ** tek büyük küme ** için optimize edilmiştir ** ve Kubernetes ** birden fazla küçük kümeyle çalışabilir. Docker konteyner teknolojisinin merkezindedir ve uygulama kapsayıcıları oluşturmanıza, paylaşmanıza, çalıştırmanıza ve dağıtmanıza olanak tanır. Uygulamanız küçük ve basitse, Docker konteyneri yaşam döngüsünü yönetmek için temel altyapıya sahiptir.
** Kubernetes vs Docker ne zaman kullanılır? **. Konteyner uygulamanız daha büyük ve daha karmaşık hale gelirse, muhtemelen birden fazla küçük küme ve daha sofistike yönetime ihtiyaç duyarsa, Kubernetes kullanışlı bir araç haline gelir. Kubernetes, Docker kaplarınız için bir ** orkestrasyon platformu ** sağlar. Sadece kaplar oluşturmakla kalmaz, aynı zamanda çalıştırılacak bir konteyner aracı gerektirir, bu da docker kabının en popüler seçenek olduğu. Docker ile Kubernetes kullanmak altyapınızın sağlamlığını arttırır. Uygulamalarınız daha yüksektir ve ayrıca uygulamalarınızın ölçeklenebilirliğini artırır.

## ** Sonuç: ** {#4A1A}
** Kubernetes veya Docker ** en iyi seçim nedir **? Cevap bariz olanıdır: her ikisi de. Yukarıda belirtilen Kubernetes ve Docker, geliştiriciler için en popüler ücretsiz ve en iyi açık kaynak yazılımıdır. Hizmetleri ve sistemleri altyapının en çok ihtiyaç duyduğu tamamen yeni ve dijital bir şekilde düşünmeye izin verirler. Sonuç olarak, Kubernetes ve Docker'ın her ikisi de konteyner yönetimini, ölçeklendirilmesini, yok edilmesini ve sistemleri daha etkili bir şekilde otomatikleştirmek için ** iyi entegre bir platform ** sağlıyor. ** Container merkezli bir platform ** için daha yeni bir yazılım tasarlamak, uygulamalarınızı sadece daha ölçeklenebilir değil, aynı zamanda daha geleceğe dayanıklı hale getirir.
_ Ne açık kaynaklı konteyner Technolog_y tercih edersiniz?. Kubernetes ve Docker_?

## Keşfetmek:
BT yöneticileri için günlük görev yönetimini ele alacak başka ilgili makalelerimiz var:
  *** [DevOps 2021 için Top 5 Açık Kaynak Konteyner Orkestrasyon Aracı] [6] **
  *** [En İyi Açık Kaynak Bulut Depolama ve Dosya Paylaşım Yazılımı] [7] **
  *** [2021'de Top 5 Açık Kaynak Mesaj Kuyruğu (MQ) Yazılımı] [8] **
  *** [En popüler açık kaynaklı dijital adli araçlar] [9] **
  *** [En popüler OSI onaylı açık kaynak lisansları] [10] **
[1]: https://www.docker.com/
[2]: https://github.com/docker
[3]: https://kubernetes.io/
[4]: https://github.com/kubernetes/kubernetes
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/devops/top-5-open-source-container-orchestration-tools-for-devops-in-2021/
[7]: https://products.containerize.com/backup-and-sync/
[8]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[9]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[10]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
