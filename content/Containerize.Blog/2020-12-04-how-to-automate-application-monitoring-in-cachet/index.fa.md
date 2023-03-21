---
title: "نحوه خودکار سازی نظارت بر برنامه وب در Cachet" 
seoTitle: "نحوه خودکار سازی نظارت بر برنامه وب در Cachet" 
description: "Cachet به نظارت بر تمام خدمات شما و فوراً به مشترکین کمک می کند. این مقاله در مورد ادغام افزونه شخص ثالث برای خودکارسازی نظارت است." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "صفحه وضعیت Cachet مشاغل را قادر می سازد تا اعلان های فوری در مورد خرابی سرویس را دریافت کنند. ما یاد خواهیم گرفت که چگونه نظارت بر برنامه های وب را در Cachet خودکار کنیم." 
url: /fa/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## صفحه وضعیت CACHET مشاغل را قادر می سازد تا اعلان های فوری در مورد خرابی سرویس را دریافت کنند. ما یاد خواهیم گرفت که چگونه نظارت بر برنامه های وب را در Cachet خودکار کنیم.

{{< figure align=center src="images/cachet-monitor.png" alt="نظارت بر برنامه وب">}}

نظارت بر برنامه ها و خدمات بخش مهمی از تجارت آنلاین است. وب سایت شما 24x7 کار می کند و هر لحظه می توانید اشتباه کنید. تا زمانی که از آن بازدید نکنید ، نمی توانید بدانید که هر دو سایت در حال کار است یا نه. علاوه بر این ، مشتریان هیچ اطلاعاتی در مورد این مسئله نخواهند داشت. آنها ممکن است برای خرابی خدمات با تیم پشتیبانی شما تماس بگیرند. علاوه بر این ، این می تواند باعث ناامیدی مشتریان شما شود. با این حال ، می توانید با پیکربندی سیستم صفحه وضعیت ، خرابی سرویس را کاهش دهید. سیستم صفحه وضعیت همه خدمات شما را به طور شبانه روزی کنترل می کند و بلافاصله اعلان ها را به تیم و مشتریان ارسال می کند. این به شما امکان می دهد تا اقدامات سریع برای رفع مشکل انجام دهید و مشتریان در مورد پیشرفت به روز می شوند. در این پست وبلاگ ، یاد می گیرید که چگونه کتابخانه شخص ثالث را با**cachet**برای**نظارت خودکار****ادغام کنید.
  * [الزامات][1]
  * [افزونه نظارت بر تنظیمات][2]
  * [ایجاد سرویس لینوکس][3]
  * [نتیجه گیری][4]

## الزامات   {#Requirements
  * آخرین نسخه از Cachet را نصب کنید.
  * آشنا با خدمات لینوکس.

## افزونه مانیتورینگ تنظیم   {#plugin}
در زیر مراحل نصب و پیکربندی افزونه برای نظارت بر اوبونتو وجود دارد.
  * بارگیری دودویی از [صفحه انتشار][5].
  * پرونده را به Cachet-Monitor تغییر نام دهید.
  * پرونده را با دستور اجرا کنید.
```
sudo chmod +x cachet-monitor
```
  * اجرایی را در یک فهرست مسیر قرار دهید ، بنابراین می توانید مستقیماً از طریق ترمینال به آن دسترسی پیدا کنید. بنابراین ، من پیشنهاد می کنم که زیر**/usr/local/bin**حرکت کنید.
  * با اجرای دستور زیر یک پرونده Config.json ایجاد کنید.
```
sudo nano config.json
```
  * کد زیر را در آن کپی کرده و پرونده را ذخیره کنید.
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
          "message": "{{ .Monitor.Name }} check**failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
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
  * اکنون ، پیکربندی خود را با این دستور آزمایش کنید.
```
cachet-monitor -c config.json
```
  * اگر همه چیز خوب کار می کند ، به بخش بعدی بروید و یک سرویس لینوکس ایجاد کنید.

## ایجاد سرویس لینوکس   {#Service
در زیر مراحل ایجاد و راه اندازی یک سرویس لینوکس برای خودکارسازی فرایند نظارت است.
* ایجاد یک سرویس**cachet-monitor.service**پرونده.
```
sudo nano cachet-monitor.service
```
  * کد زیر را در آن کپی کرده و پرونده را ذخیره کنید.
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
  * پیکربندی SystemD را با اجرای دستور به روز کنید.
```
sudo systemctl daemon-reload
```
  * با اجرای دستور ، سرویس Cachet-Monitor را فعال کنید تا بتواند در راه اندازی سیستم بارگیری شود.
```
sudo systemctl enable cachet-monitor.service
```

## نتیجه گیری   {#conclusion}
Cachet A رایگان است و**صفحه وضعیت منبع باز**سیستم. با این حال ، این ویژگی از ویژگی جعبه**نظارت بر برنامه وب**را فراهم نمی کند. در عوض ، این یک API REST قدرتمند دارد که می تواند برای انجام اقداماتی مانند حوادث ، مؤلفه ها ، گروه ها و موارد دیگر استفاده شود. در این مقاله ، ما از افزونه شخص ثالث برای خودکار سازی نظارت برنامه در Cachet استفاده کرده ایم. مهمتر از همه ، شما می توانید افزونه خود را توسعه دهید یا از سایر افزونه های موجود برای انجام کار استفاده کنید.
علاوه بر این ، [Containerize.com][6] در راه تقویت پشته محصولات منبع باز به زبان های مختلف و چارچوب ها است. برای به روزرسانی های منظم ، لطفاً برای مقالات جالب تر با [صفحه وضعیت][7] در ارتباط باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [بهترین سیستم های صفحه وضعیت منبع باز][8]
  * [CACHET - نرم افزار صفحه وضعیت آزاد و منبع باز][9]
  * [5 نرم افزار صفحه برتر منبع باز برای سال 2020][10]

  
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
