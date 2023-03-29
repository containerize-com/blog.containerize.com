---
title: "كيفية تحويل قواعد إعادة كتابة HTACCESS إلى توجيهات إعادة كتابة NGINX" 
seoTitle: "كيفية تحويل قواعد إعادة كتابة HTACCESS إلى توجيهات إعادة كتابة NGINX" 
description: "لا يدعم NGINX قواعد إعادة كتابة .HTACCESS ، لذلك يجب على المطورين تحويل هذه القواعد إلى توجيهات إعادة كتابة NGINX. دعونا نتعلم كيفية إجراء هذا التحويل." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "لا يدعم NGINX قواعد إعادة كتابة HTACCESS ، ويطلب المطورون تحويل هذه القواعد إلى توجيهات إعادة كتابة NGINX. دعونا نتعلم كيفية القيام بهذا التحويل." 
url: /ar/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## لا يدعم NGINX قواعد إعادة كتابة HTACCESS ، ويطلب المطورون تحويل هذه القواعد إلى توجيهات إعادة كتابة NGINX. دعونا نتعلم كيفية القيام بهذا التحويل.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="تحويل .htaccess إعادة كتابة القواعد إلى توجيهات nginx">}}

في تعليمي الأخير ، تعلمنا [كيفية تثبيت إصدارات PHP متعددة مع Nginx على Ubuntu][1]. Apache هي واحدة من أكثر خبراء الويب شعبية ولكن في الآونة الأخيرة ، أنشأت Nginx نفسها كمنافس لأباتشي. لكن Nginx لا يدعم قواعد إعادة كتابة htaccess. لذلك ، في هذه المقالة ، سوف نتعلم كيفية تحويل قواعد إعادة كتابة HTACCESS إلى توجيهات NGINX. هيا بنا نبدأ!
*  **[قواعد إعادة كتابة Nginx][2]**  
* [  **. Htaccess Rewrite Rules**  ][3]
* [  **تحويل .htaccess قواعد إعادة كتابة إلى Nginx Rewrite Directives**  ][4]
* [  **الخلاصة**  ][5]

## قواعد إعادة كتابة Nginx {#nginx}

إعادة كتابة قواعد تغيير الجزء أو كل عنوان URL في طلب العميل ، عادةً لإبلاغ العملاء بأن المورد الذي يطلبونه الآن موجود في موقع مختلف ، أو للتحكم في تدفق المعالجة داخل NGINX. على سبيل المثال ، لإعادة توجيه الطلبات إلى خادم التطبيق عندما يحتاج المحتوى إلى إنشاء ديناميكي. غالبًا ما يتم استخدام توجيه Try_files لهذا الغرض.
التوجيهان لإعادة كتابة NGINX للأغراض العامة هما _RETURN_ و _REWRITE_ ، و _try_files Directive_ هي وسيلة مفيدة للطلبات المباشرة إلى خوادم التطبيق.
توجيه الإرجاع هو أبسط التوجيهين للأغراض العامة. يمكنك إرفاق العودة في خادم أو سياق الموقع.
على سبيل المثال ، إليك مثال بسيط للغاية يعيد توجيه العملاء إلى اسم مجال جديد باستخدام توجيه _RETURN_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
ولكن ماذا لو كنت بحاجة إلى إجراء تمييزات معقدة بين عناوين URL ، أو التقاط عناصر في عنوان URL الأصلي ، أو تغيير أو إضافة عناصر في المسار؟ يمكنك استخدام توجيه _RewRite_ في مثل هذه الحالات.
فيما يلي عينة من قاعدة إعادة كتابة Nginx التي تستخدم توجيه إعادة كتابة. يطابق عناوين URL التي تبدأ بالسلسلة /الأغاني ثم تتضمن /Media /أو /Audio /Directory في مكان ما في وقت لاحق في المسار. يحل محل تلك العناصر باستخدام / mp3 / ويضيف امتداد الملف المناسب ، .mp3 أو .ra. تلتقط متغيرات $ 1 و 2 دولار عناصر المسار التي لا تتغير. على سبيل المثال ،/تنزيل/cdn-west/media/file1 يصبح/download/cdn-west/mp3/file1.mp3. إذا كان هناك امتداد على اسم الملف (مثل .FLV) ، فإن التعبير يرفعه ويحل محله. mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess قواعد إعادة كتابة {#apache}

يتحكم ملف .htaccess في عدد من الطرق التي يمكن بها الوصول إلى موقع الويب وحظره وإعادة توجيهه. يفعل هذا باستخدام سلسلة من قواعد إعادة كتابة واحدة أو أكثر. htaccess. يتم تنفيذ عمليات إعادة الكتابة هذه بواسطة وحدة Apache Mod_Rewrite.
يوفر Mod_Rewrite طريقة لتعديل طلبات URL الواردة ، ديناميكيًا ، بناءً على قواعد التعبير العادية. يتيح لك هذا تعيين أي عناوين URL على بنية عنوان URL الداخلي الخاص بك بأي طريقة تريدها. يستخدم هذا أيضًا لجعل عناوين URL الخارجية نظيفة ثم قم بتخطيطها على عناوين URL الداخلية ذات المظهر القبيح.
على سبيل المثال ، تتبع. إعادة كتابة قاعدة إعادة كتابة عنوان URL غير WWW إلى عنوان URL WWW.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## تحويل. htaccess إعادة كتابة القواعد إلى توجيهات إعادة كتابة nginx {#convert}

كما أظهرنا في مثالنا أعلاه لإعادة توجيه عنوان URL غير WWW إلى عنوان URL WWW ، دعنا نقوم بتحويل قاعدة إعادة كتابة نفس. htaccess إلى توجيه إعادة كتابة nginx.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
لذا ، أنشأنا هنا كتلتين منفصلتين _server_ ، أحدهما لـ _yourdomain.com_ والآخر لـ _www.yourdomain.com_. وفي كتلة _Server_ لـ _yourdomain.com_ نستخدم التوجيه _return_ لإعادة توجيه عنوان URL غير www إلى عنوان URL www.
نفس التوجيه الذي أجريناه مع توجيه الإرجاع ، يمكن أيضًا القيام بتوجيه إعادة كتابة ولكن لا ينصح به.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
من أجل مزيد من الوضوح ، دعنا نقوم بتحويل قواعد Htaccess WordPress إلى توجيه Nginx Try_Files.
[WordPress.org يوزع][6] ملف افتراضي أساسي  **. htaccess**  مع ما يلي. HTACCESS REWRITE قواعد تمكن الرابط الرابطين الجميل:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
إليك توجيه nginx try_files المحول
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## خاتمة {#conclusion}

في هذا البرنامج التعليمي ، قمنا باستكشاف قواعد إعادة كتابة Apache. لقد استكشفنا أيضًا توجيهات NGINX مختلفة يمكن استخدامها لإعادة كتابة عناوين URL. كما قدمنا ​​مثالًا لإعادة كتابة القواعد لكل من Nginx و Apache. آمل أن يكون البرنامج التعليمي مفيدًا لك.

## يستكشف
  * [كيفية تثبيت إصدارات PHP متعددة مع Nginx على Ubuntu][1]
  * [كيفية إعداد وتكوين NGINX كوكيل عكسي][7]



 [1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [2]: #nginx
 [3]: #apache
 [4]: #convert
 [5]: #conclusion
 [6]: https://codex.wordpress.org/htaccess
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
