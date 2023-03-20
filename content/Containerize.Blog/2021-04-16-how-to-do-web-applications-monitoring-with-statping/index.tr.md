---
title: "Statping ile Web Uygulamaları İzleme Nasıl Yapılır" 
seoTitle: "Statping ile Web Uygulamaları İzleme Nasıl Yapılır" 
description: "Statping, tüm hizmetleri izlemenizi sağlayan en iyi web sitesi izleme araçlarından biridir. Vitrin hizmetleri için güzel durum sayfası oluşturun." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Web sitelerinizi, web uygulamalarınızı, ücretsiz izleme araçlarına sahip API'larınızı ve açık kaynak durum sayfası sistemine sahip vitrin hizmetleri çalışma süresini otomatik olarak izleyin." 
url: /tr/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Web sitelerinizi, web uygulamalarınızı, ücretsiz izleme araçlarına sahip API'lerinizi ve açık kaynak durum sayfası sistemine sahip vitrin hizmetleri çalışma süresini otomatik olarak izleyin.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Web Uygulamaları İzleme">}}

Statping, ** açık kaynak durum sayfası yazılımı ** ve ** en iyi web sitesi izleme aracından biridir **. Ayrıca HTTP, TCP, UDP, ICMP ve GRPC hizmetleri gibi hizmetlerin izlenmesi için de kullanılır. Statping, hizmetleri otomatik olarak getirir, izler ve güzel durum sayfası oluşturur. Platformlar arasıdır ve Liunx, Mac ve Windows işletim sistemlerine yükleyebilirsiniz. Ayrıca, bilgi depolamak için MySQL, Postgres veya SQLIT veritabanı sisteminin kullanılmasına izin verir. Ayrıca, iPhone ve Android cihazlar için kutudan çıkış mobil uygulamaları ile birlikte gelir.
Statping'in temel özelliklerine bir göz atalım.
  *** Hizmetler İzleme ** - Statping, tüm HTTP, TCP, UDP, GRPC ve ICMP hizmetlerinizi kolayca izlemenizi sağlar.
  *** Bildirimler **-Statping, bildirim almak için büyük üçüncü taraf uygulamalarının çoğunu destekler.
  *** Mobil Uygulama ** - İPhone ve Android cihazlar için ücretsiz uygulamayı kullanın ve hareket halindeki her şeyi yönetin.
  *** OAuth Authenticatio ** N - GitHub, Google, Slack ve Custom OpenID sağlayıcısı gibi popüler hizmetler için OAuth kimlik doğrulamasını destekler. Bu özelliği kullanın ve güvenliği artırın.
Bu öğreticide aşağıdaki konuları ele alacağız.
  * [Linux'a yükleme][1]
  * [Systemd hizmetini yapılandır][2]
  * [İzleme için Hizmet Oluştur][3]
  * [Sonuç][4]

## Linux üzerine yükleme {#Installing}
Statping kurulumu için aşağıdaki komutu çalıştırın.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Systemd hizmetini yapılandır {#configure}
Bir Systemd hizmeti kurmak, statping sunucunuzun gerektiğinde otomatik olarak yeniden başlatılabilmesini sağlamak için mükemmel bir yoldur. Bir SystemD hizmeti oluşturmak için aşağıdaki adımları izleyin.
  * İlk olarak, yeni dosya oluşturmak için aşağıdaki komutu çalıştırın.
```
sudo nano /etc/systemd/system/statping.service
```
  * Aşağıdaki kodu kopyalayın ve içine yapıştırın.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * Son olarak, SystemD hizmetini etkinleştirmek ve başlatmak için aşağıdaki komutları kullanın.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## İzleme Hizmeti Oluştur {#Create}
  * Tarayıcınızı açın, statping kurulumunuza giriş yapmak için URL girin.
  * Üst navigasyondaki Hizmetler bağlantısını tıklayın. Size bir tane gibi görünen hizmetler sayfasını gösterecektir.

{{< figure align=center src="images/statping-dashboard.png" alt="Web Hizmeti İzleme Listesi">}}

  * İzleme için yeni hizmet eklemek için Oluştur düğmesine tıklayın. Servis Adı, Servis Türü, Kontrol Aralığı, Hizmet Uç Noktası (URL) vb. Gibi gerekli alanları doldurun.

## Sonuç {#Conclusion}
Statping, Linux'a nasıl yükleneceğini ve bu öğreticide bir Systemd hizmeti oluşturmayı öğrendik. Ayrıca, farklı özellikler hakkında sizi izlemek ve tanıtmak için yeni bir hizmet oluşturduk. Bu kılavuzun ** Web Hizmeti İzleme ** ve ** Web Uygulamaları İzleme ** gerçekleştirmek için STATPPE kullanmaya başlamanızda size yardımcı olacağını umuyoruz.
Son olarak, [** Containerize.com **][5], en son açık kaynaklı ürünler hakkında blog yazıları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [** durum sayfası **][6] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  *[** 2020 için Top 5 Açık Kaynak Durum Sayfası Yazılımı **][7]
  *[** Statping **][8]
  *[** Çaket **][9]
  *[** Monitör **][10]
  *[** Staytus **][11]
  *[** Upptime **][12]
  *[** Statusfy **][13]

  
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
