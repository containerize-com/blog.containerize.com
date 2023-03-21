---
title: "نحوه اجرای حافظه پنهان مرورگر با پیکربندی nginx" 
seoTitle: "نحوه اجرای حافظه پنهان مرورگر با پیکربندی nginx" 
description: "هرچه یک وب سایت سریعتر بارهای خود را ببخشد ، احتمال اقامت یک بازدید کننده بیشتر است. در این آموزش ، ذخیره سازی مرورگر را با پیکربندی NGINX پیاده سازی خواهیم کرد." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "هرچه یک وب سایت سریعتر بارهای خود را ببخشد ، احتمال اقامت یک بازدید کننده بیشتر است. این مقاله شما را در مورد نحوه اجرای حافظه پنهان مرورگر با تنظیمات NGINX راهنمایی می کند." 
url: /fa/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## هرچه یک وب سایت سریعتر بارهای خود را ببخشد ، احتمال اقامت یک بازدید کننده بیشتر است. این مقاله شما را در مورد نحوه اجرای حافظه پنهان مرورگر با تنظیمات NGINX راهنمایی می کند.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="نحوه اجرای حافظه پنهان Browsr با پیکربندی nginx">}}

در سری آموزش Nginx ما ، ما [نحوه استفاده از NGINX را به عنوان Balancer Load][1] ، [پیکربندی nginx را به عنوان پروکسی معکوس][2] ، [از چندین نسخه PHP با NGINX][3] استفاده کنید ، و [تبدیل بازنویسی HTACCESS استفاده کنید. قوانین مربوط به بازنویسی NGINX][4]. در مقاله امروز ، ما یک موضوع بسیار مهم را پوشش می دهیم که به مشاغل کمک می کند تا با استفاده از حافظه پنهان مرورگر ، تجربه کاربر خود را بهبود بخشند. در این آموزش ، ما شما را در مورد نحوه اجرای حافظه پنهان مرورگر با پیکربندی NGINX با استفاده از ماژول هدر Nginx راهنمایی خواهیم کرد. بیا شروع کنیم!
  * **[ذخیره سازی مرورگر اهرم][5]**
  *[**ماژول هدر Nginx** ][6]
  *[**e-te-te و if-none-match** ][7]
  *[**ذخیره سازی مرورگر اهرم با پیکربندی nginx** ][8]
  *[**نتیجه گیری** ][9]

## LEVER OVERER CACHING   {#مرورگر Caching}
هرچه یک وب سایت سریعتر بارهای خود را ببخشد ، احتمالاً یک بازدید کننده در وب سایت بماند. وب سایت هایی که دارای تصاویر زیادی هستند و محتوای تعاملی در پس زمینه بارگیری می شوند ، وب سایت باعث می شود یک کار پیچیده باشد. این شامل درخواست بسیاری از پرونده های مختلف از سرور یک به یک است. به حداقل رساندن مقدار این درخواست ها یکی از راه های سرعت بخشیدن به وب سایت شما است.
یک روش برای بهبود عملکرد وب سایت _Levering مرورگر Caching_ است. حافظه پنهان مرورگر نقش مهمی در مکانیسم حافظه نهان برای افزایش سرعت صفحه دارد. پرونده های استاتیک مانند CSS ، JS ، JPEG ، PNG و غیره که برای وب سایت استفاده می شود می توانند برای دسترسی به آینده در رایانه بازدید کننده ذخیره شوند. هر زمان که بازدید کننده با صفحه جدیدی در وب سایت شما روبرو شود ، به جای سرور ارائه شده شما ، به پرونده های فوق می توان از رایانه بازدید کننده دسترسی پیدا کرد ، که به طرز چشمگیری سرعت بار صفحه را افزایش می دهد.

## ماژول هدر Nginx   {#هدر ماژول}
ماژول _ngx \ _http \ _headers_module_ ماژول اجازه می دهد تا زمینه های هدر "_expires_" و "_cache-control_" و زمینه های خود را به یک عنوان پاسخ اضافه کنید. ما می توانیم از ماژول هدر برای تنظیم این هدر HTTP استفاده کنیم. ماژول هدر یک ماژول هسته Nginx است ، به این معنی که نیازی به نصب جداگانه برای استفاده نیست.
پیکربندی مثال به این شکل است:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## e-tag و if-none-match   {#etage}
بیایید فرض کنیم ما برخی از پرونده های آزمایشی با پسوندهای مختلف به عنوان مثال Test.html ، test.jpg ، test.css و test.js. داریم. به طور پیش فرض ، همه پرونده ها یک رفتار ذخیره سازی پیش فرض یکسان خواهند داشت. برای بررسی عنوان های پاسخ یک پرونده با استفاده از دستور زیر برای درخواست پرونده ای از سرور محلی NGINX ما و عنوان های پاسخ را نشان می دهد:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
در خط دوم تا آخر ، هدر _etag_ را پیدا خواهید کرد که حاوی یک شناسه منحصر به فرد برای این تجدید نظر خاص از پرونده درخواست شده است. اگر آخرین دستور _curl_ را به طور مکرر اجرا کنید ، دقیقاً همان مقدار ETAG را پیدا خواهید کرد.
هنگام استفاده از مرورگر وب ، مقدار _etag_ با عنوان _if-none-match_ درخواست وقتی کاربر صفحه را تازه می کند یا همان پرونده را به هر دلیلی نیاز دارد ، به سرور ارسال می شود و به سرور ارسال می شود.
ما می توانیم این کار را در خط فرمان با دستور زیر شبیه سازی کنیم.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
به شناسه منحصر به فرد توجه داشته باشید ، باید با مقدار پاسخ ما از تماس قبلی _curl_ ما مطابقت داشته باشد. پاسخ این بار متفاوت خواهد بود:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
این بار ، nginx با **304 اصلاح نشده پاسخ خواهد داد** . دوباره پرونده را از طریق شبکه ارسال نمی کند. در عوض ، به مرورگر می گوید که می تواند از پرونده ای که قبلاً به صورت محلی بارگیری کرده است استفاده مجدد کند. این مفید است زیرا باعث کاهش ترافیک شبکه می شود. اما مرورگر برای دریافت پاسخی از سرور هنوز باید یک تماس HTTP برقرار کند که هنوز مدتی طول می کشد.

## اهرم ذخیره سازی مرورگر با پیکربندی nginx   {#nginx-configuration}
در مثال قبلی ما توضیح دادیم که چگونه E-Tag و IF-None-Match به شما در کاهش ترافیک شبکه کمک می کند. اما مشکل با `etag` این است که مرورگر همیشه درخواستی را به سرور ارسال می کند و می پرسد آیا می تواند از پرونده ذخیره شده خود استفاده مجدد کند. و این هنوز زمان لازم است تا درخواست و پاسخ را دریافت کنید.
اکنون با کمک ماژول هدر NGINX ، ما را به مرورگر تبدیل می کنیم تا برخی از پرونده ها را به صورت محلی ذخیره کند بدون اینکه صریحاً از سرور سؤال کند.
3 خط زیر را در پرونده پیکربندی nginx خود به محتوای استاتیک در NGINX اضافه کنید
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
خط اول به NGINX دستور می دهد تا به مدت 30 روز (30d) در مرورگر مشتری ذخیره شود. پس از این دوره ، هر درخواست جدیدی از کاربر منجر به اعتبار مجدد حافظه پنهان و به روزرسانی از مرورگر مشتری می شود.
می توانید خطوط فوق را در بلوک های _location_ ، _server_ یا _http_ قرار دهید.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
هنگامی که آنها را در بلوک موقعیت مکانی قرار می دهید ، فقط محتوای ارائه شده توسط آن مکان ذخیره می شود. در مورد فوق ، فقط درخواست های / استاتیک / ذخیره می شود.
اگر می خواهید انواع فایل خاص را ذخیره کنید ، می توانید این کار را با استفاده از بلوک موقعیت مکانی انجام دهید.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
در مثال بالا ، ما در حال ذخیره انواع مختلف پرونده مانند JS ، JPG ، CSS و غیره هستیم.
به طور مشابه ، می توانید پیکربندی حافظه پنهان را در بلوک _server_ قبل از هر بلوک موقعیت مکانی قرار دهید. در این حالت ، تمام پاسخ های این سرور ذخیره می شود. یا ممکن است آن را در بلوک _http_ قرار دهید ، در این حالت ، تمام درخواست های سرور پشتیبانی شده توسط پرونده پیکربندی NGINX ذخیره می شوند.

## نتیجه گیری   {#conclusion}
ماژول هدر Nginx می تواند برای اضافه کردن هر هدست دلخواه به پاسخ استفاده شود ، اما تنظیم صحیح هدرهای کنترل حافظه نهان یکی از کاربردهای مفید آن است. این به شما کمک می کند تا عملکرد وب سایت را بهبود بخشید ، به خصوص برای کاربران در شبکه هایی با تأخیر بالاتر مانند شبکه های حامل تلفن همراه. در این آموزش ، ما یاد گرفتیم که چگونه می توان از حافظه پنهان مرورگر با پیکربندی NGINX استفاده کرد. امیدوارم این به شما در بهبود تجربه کاربر در وب سایت خود کمک کند.

## کاوش کنید
  * [نحوه نصب چندین نسخه PHP با nginx در اوبونتو][3]
  * [نحوه تنظیم و پیکربندی nginx به عنوان پروکسی معکوس][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion