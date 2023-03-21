---
title: "Cachet'te web uygulaması izleme nasıl otomatikleştirilir" 
seoTitle: "Cachet'te web uygulaması izleme nasıl otomatikleştirilir" 
description: "Cachet, tüm hizmetlerinizi izlemeye ve aboneleri anında bilgilendirmenize yardımcı olur. Bu makale, izlemeyi otomatikleştirmek için üçüncü taraf eklentisini entegre etmekle ilgilidir." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "Cachet Durum Sayfası, işletmelerin hizmet kesinti süresi hakkında anında bildirimler almalarını sağlar. Cachet'te web uygulaması izlemesinin nasıl otomatikleştirileceğini öğreneceğiz." 
url: /tr/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## Cachet Durum Sayfası, işletmelerin hizmet kesinti süresi hakkında anında bildirimler almalarını sağlar. Cachet'te web uygulaması izlemesinin nasıl otomatikleştirileceğini öğreneceğiz.

{{< figure align=center src="images/cachet-monitor.png" alt="Web Uygulama İzleme">}}

Uygulamaların ve hizmetlerin izlenmesi, çevrimiçi işin çok önemli bir parçasıdır. Web siteniz 24x7 çalışır ve her an yanlış anlayabilirsiniz. Ziyaret edene kadar her iki sitenin de çalıştığını veya çalıştığını bilemezsiniz. Ayrıca, müşterilerin sorun hakkında hiçbir bilgisi olmayacaktır. Hizmet kesinti süresi için destek ekibinizle iletişime geçebilirler. Ayrıca, bu müşterilerinizin hayal kırıklığına uğramasına yol açabilir. Ancak, durum sayfası sistemini yapılandırarak hizmet kesinti süresini azaltabilirsiniz. Durum Sayfası Sistemi, tüm hizmetlerinizi gün boyunca izleyecek ve ekibinize ve müşterilerinize derhal bildirimler gönderecektir. Bu, sorunu çözmek için hızlı adımlar atmanıza izin verecek ve müşteriler ilerlemeden güncellenecek. Bu blog yazısında, üçüncü taraf kütüphanesini **Cachet  **ile **  İzleme  **için**   ile nasıl entegre edeceğinizi öğreneceksiniz.
  * [Gereksinimler][1]
  * [Kurulum İzleme eklentisi][2]
  * [Linux Hizmeti Oluşturma][3]
  * [Sonuç][4]

## Gereksinimler   {#Requirements}
  * Cachet'in en son sürümünü yükleyin.
  * Linux hizmetlerine aşina.

## Kurulum izleme eklentisi   {#plugin}
Ubuntu'da izleme eklentisini yüklemek ve yapılandırmak için adımlar aşağıdadır.
  * İkili [sürüm sayfası][5] 'den indirin.
  * Dosyayı kaset-monitor olarak yeniden adlandırın.
  * Dosyayı komutla yürütülebilir hale getirin.
```
sudo chmod +x cachet-monitor
```
  * Yürütülebilir dosyayı bir yol dizinine koyun, böylece doğrudan Terminal üzerinden erişebilirsiniz. Yani, **/usr/local/bin ** altında hareket etmenizi öneririm.
  * Aşağıdaki komutu çalıştırarak bir config.json dosyası oluşturun.
```
sudo nano config.json
```
  * Aşağıdaki kodu kopyalayın ve dosyayı kaydedin.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * Şimdi yapılandırmanızı bu komutla test edin.
```
cachet-monitor -c config.json
```
  * Her şey iyi çalışıyorsa, bir sonraki bölüme geçin ve bir Linux hizmeti oluşturun.

## Linux Hizmeti Oluşturma   {#Service}
İzleme işlemini otomatikleştirmek için bir Linux hizmeti oluşturmak ve başlatma adımları aşağıdadır.
  *Bir hizmet oluştur **Cachet-Monitor.service**  Dosya.
```
sudo nano cachet-monitor.service
```
  * Aşağıdaki kodu kopyalayın ve dosyayı kaydedin.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * Komutu çalıştırarak SystemD yapılandırmasını güncelleyin.
```
sudo systemctl daemon-reload
```
  * Sistem başlatma yükleyebilmesi için komutu çalıştırarak kaset-monitör hizmetini etkinleştirin.
```
sudo systemctl enable cachet-monitor.service
```

## Sonuç   {#Conclusion}
Cachet A ücretsizdir ve **Açık Kaynak Durum Sayfası  **Sistem. Ancak, **  web uygulaması izleme**  için kutudan çıkma özelliği sağlamaz. Bunun yerine, olaylar, bileşenler, gruplar ve daha fazlası gibi eylemleri gerçekleştirmek için kullanılabilecek güçlü bir REST API'sına sahiptir. Bu makalede, Cachet'te uygulama izlemeyi otomatikleştirmek için üçüncü taraf eklentisini kullandık. Her şeyden önce, kendi eklentinizi geliştirebilir veya işi yapmak için mevcut eklentileri kullanabilirsiniz.
Ayrıca, [Containerize.com][6], birden fazla dil ve çerçevede açık kaynaklı ürün yığınını geliştirme yolunda. Düzenli güncellemeler için, daha ilginç makaleler için lütfen [Durum Page][7] kategorisine bağlı kalın.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [En İyi Açık Kaynak Durum Sayfası Sistemleri][8]
  * [Cachet - Ücretsiz ve Açık Kaynak Durum Sayfası Yazılımı][9]
  * [2020 için Top 5 Açık Kaynak Durum Sayfası Yazılımı][10]

  
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
