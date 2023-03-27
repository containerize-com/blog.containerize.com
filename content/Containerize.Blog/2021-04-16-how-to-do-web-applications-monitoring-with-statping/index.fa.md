---
title: "نحوه انجام نظارت بر برنامه های وب با آمار" 
seoTitle: "نحوه انجام نظارت بر برنامه های وب با آمار" 
description: "Stating یکی از بهترین ابزارهای نظارت بر وب سایت است که شما را قادر می سازد تا همه خدمات را کنترل کنید. صفحه وضعیت زیبا را برای خدمات ویترین به روزرسانی ارائه دهید." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "به طور خودکار وب سایت ها ، برنامه های وب ، API های خود را با ابزارهای نظارت رایگان و سرویس های ویترین به موقع با یک سیستم صفحه وضعیت منبع باز نظارت کنید." 
url: /fa/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## به طور خودکار وب سایت ها ، برنامه های وب ، API های خود را با ابزارهای نظارت رایگان و سرویس های ویترین به موقع با یک سیستم صفحه وضعیت منبع باز نظارت کنید.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="نظارت بر برنامه های وب">}}

Stating یک نرم افزار صفحه وضعیت منبع باز* ***و یکی از بهترین ابزار نظارت بر وب سایت** است. همچنین برای نظارت بر خدماتی مانند خدمات HTTP ، TCP ، UDP ، ICMP و GRPC استفاده می شود. Stating به طور خودکار خدمات را واگذار می کند ، آنها را رصد می کند و صفحه وضعیت زیبایی را ارائه می دهد. این سیستم متقابل است و می توانید آن را بر روی سیستم عامل های Liunx ، Mac و Windows نصب کنید. علاوه بر این ، این امکان را برای شما فراهم می کند که برای ذخیره اطلاعات از سیستم پایگاه داده MySQL ، Postgres یا SQLite استفاده کنید. علاوه بر این ، این برنامه از برنامه های تلفن همراه برای دستگاه های آیفون و اندرویدی خارج می شود.
بیایید نگاهی به ویژگی های اصلی آمار نگاهی بیندازیم.
****نظارت بر خدمات**  - آمار به شما امکان می دهد به راحتی تمام خدمات HTTP ، TCP ، UDP ، GRPC و ICMP خود را ردیابی کنید.
* **اعلان ها** -Stating از بیشتر برنامه های اصلی شخص ثالث برای دریافت اعلان ها پشتیبانی می کند.
* **برنامه تلفن همراه** - از برنامه رایگان برای دستگاه های iPhone و Android استفاده کنید و همه چیز را در حال انجام مدیریت کنید.
* **Auth Authenticatio** n - از تأیید اعتبار OAuth برای خدمات محبوب مانند GitHub ، Google ، Slack و ارائه دهنده سفارشی OpenID پشتیبانی می کند. از این ویژگی استفاده کنید و امنیت را افزایش دهید.
مباحث زیر را در این آموزش پوشش خواهیم داد.
  * [نصب در لینوکس][1]
  * [پیکربندی سرویس SystemD][2]
  * [ایجاد سرویس برای نظارت][3]
  * [نتیجه گیری][4]

## نصب در لینوکس {#Installing}

برای نصب و راه اندازی در زیر فرمان را اجرا کنید.
```
curl -o- -L https://statping.com/install.sh | bash
```

## سرویس SystemD را پیکربندی کنید {#Configure}

راه اندازی یک سرویس SystemD یک روش عالی برای اطمینان از اینکه سرور آمار شما می تواند در صورت لزوم بتواند به صورت خودکار راه اندازی مجدد شود. برای ایجاد یک سرویس SystemD ، مراحل زیر را دنبال کنید.
  * ابتدا برای ایجاد پرونده جدید ، زیر دستور را اجرا کنید.
```
sudo nano /etc/systemd/system/statping.service
```
  * در زیر کد کپی کرده و در آن قرار دهید.
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
  * در آخر ، برای فعال کردن و شروع سرویس SystemD از دستورات زیر استفاده کنید.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## برای نظارت سرویس ایجاد کنید {#Create}

  * مرورگر خود را باز کنید ، URL را برای ورود به سیستم نصب خود وارد کنید.
  * بر روی پیوند خدمات در ناوبری بالا کلیک کنید. این صفحه خدمات را به شما نشان می دهد که زیر آن است.

{{< figure align=center src="images/statping-dashboard.png" alt="لیست نظارت بر سرویس وب">}}

  * برای افزودن سرویس جدید برای نظارت بر روی دکمه ایجاد کلیک کنید. زمینه های مورد نیاز مانند نام سرویس ، نوع سرویس ، فاصله بررسی ، نقطه پایانی سرویس (URL) و غیره را پر کنید.

## نتیجه {#نتیجه}

ما در مورد آمار ، نحوه نصب آن در لینوکس و نحوه ایجاد یک سرویس SystemD در این آموزش آموختیم. علاوه بر این ، ما یک سرویس جدید برای نظارت و معرفی شما در مورد ویژگی های مختلف ایجاد کرده ایم. ما امیدواریم که این راهنما در ابتدا به شما کمک کند تا از Stating برای انجام نظارت **سرویس وب**و**برنامه های وب نظارت** استفاده کنید.
سرانجام ، [ **Containerize.com**][5] در یک فرآیند مداوم نوشتن پست های وبلاگ در آخرین محصولات منبع باز است. بنابراین ، برای آخرین به روزرسانی ها با این [**صفحه وضعیت** ][6] در تماس باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
* [ **5 نرم افزار صفحه برتر منبع باز برای سال 2020** ][7]
* [ **آمار** ][8]
* [ **cachet** ][9]
* [ **مانیتور** ][10]
* [ **Staytus** ][11]
* [ **upptime** ][12]
* [ **وضعیت** ][13]



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
