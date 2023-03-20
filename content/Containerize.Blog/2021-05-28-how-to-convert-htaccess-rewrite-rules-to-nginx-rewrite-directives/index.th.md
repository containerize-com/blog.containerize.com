---
title: "วิธีการแปลง Htaccess rewrite กฎเป็นคำสั่ง Nginx rewrite" 
seoTitle: "วิธีการแปลง Htaccess rewrite กฎเป็นคำสั่ง Nginx rewrite" 
description: "Nginx ไม่สนับสนุน. htaccess rewrite กฎดังนั้นนักพัฒนาต้องแปลงกฎเหล่านั้นเป็น Nginx rewrite directives มาเรียนรู้วิธีการแปลงนี้กันเถอะ" 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "NGINX ไม่สนับสนุนกฎการเขียน HTACCESS ใหม่และนักพัฒนาจำเป็นต้องแปลงกฎเหล่านั้นเป็นคำสั่ง NGINX rewrite มาเรียนรู้วิธีการแปลงนี้กันดีกว่า" 
url: /th/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## nginx ไม่สนับสนุนกฎการเขียนใหม่ HTaccess และนักพัฒนาจำเป็นต้องแปลงกฎเหล่านั้นเป็นคำสั่งการเขียนใหม่ของ Nginx มาเรียนรู้วิธีการแปลงนี้กันเถอะ

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="แปลง. htaccess rewrite กฎเป็นคำสั่ง nginx">}}

ในบทช่วยสอนสุดท้ายของเราเราได้เรียนรู้ [วิธีการติดตั้ง PHP หลายรุ่นด้วย Nginx บน Ubuntu][1] Apache เป็นหนึ่งใน webservers ที่ได้รับความนิยมมากที่สุด แต่เมื่อเร็ว ๆ นี้ Nginx ได้จัดตั้งตัวเองเป็นคู่แข่งของ Apache แต่ Nginx ไม่รองรับ Htaccess rewrite กฎ ดังนั้นในบทความนี้เราจะเรียนรู้วิธีการแปลง HTaccess rewrite กฎเป็นคำสั่ง Nginx rewrite มาเริ่มกันเลย!
  *** [กฎการเขียนใหม่ nginx][2] **
  *[**. htaccess rewrite กฎ **][3]
  *[** แปลง. htaccess rewrite กฎเป็น nginx rewrite directives **][4]
  *[** บทสรุป **][5]

## nginx rewrite กฎ {#nginx}
การเขียนกฎใหม่เปลี่ยนส่วนหรือ URL ทั้งหมดในคำขอลูกค้าโดยปกติจะแจ้งให้ลูกค้าทราบว่าทรัพยากรที่พวกเขาร้องขอตอนนี้อยู่ในสถานที่อื่นหรือเพื่อควบคุมการไหลของการประมวลผลภายใน NGINX ตัวอย่างเช่นการส่งต่อคำขอไปยังแอปพลิเคชันเซิร์ฟเวอร์เมื่อต้องสร้างเนื้อหาแบบไดนามิก คำสั่ง try_files มักใช้เพื่อจุดประสงค์นี้
คำสั่งสองคำสั่งสำหรับการเขียนซ้ำทั่วไป nginx คือ _return_ และ _rewrite_ และ _try_files directive_ เป็นวิธีที่สะดวกในการร้องขอโดยตรงไปยังเซิร์ฟเวอร์แอปพลิเคชัน
คำสั่งผลตอบแทนเป็นคำสั่งที่ง่ายกว่าของสองคำสั่งอเนกประสงค์ คุณใส่ผลตอบแทนในเซิร์ฟเวอร์หรือบริบทที่ตั้ง
ตัวอย่างเช่นนี่เป็นตัวอย่างที่ง่ายมากที่เปลี่ยนเส้นทางไคลเอนต์ไปยังชื่อโดเมนใหม่โดยใช้คำสั่ง _return_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
แต่ถ้าคุณต้องการดำเนินการแยกความแตกต่างที่ซับซ้อนระหว่าง URL ให้จับองค์ประกอบใน URL ดั้งเดิมหรือเปลี่ยนแปลงหรือเพิ่มองค์ประกอบในเส้นทาง คุณสามารถใช้คำสั่ง _rewrite_ ในกรณีดังกล่าว
นี่คือตัวอย่างกฎการเขียนใหม่ Nginx ที่ใช้คำสั่งการเขียนซ้ำ มันตรงกับ URL ที่เริ่มต้นด้วยสตริง /เพลงจากนั้นรวม /สื่อ /หรือ /เสียง /ไดเรกทอรีที่ใดที่หนึ่งในภายหลังในเส้นทาง มันแทนที่องค์ประกอบเหล่านั้นด้วย / mp3 / และเพิ่มส่วนขยายไฟล์ที่เหมาะสม. mp3 หรือ. ra ตัวแปร $ 1 และ $ 2 จับองค์ประกอบเส้นทางที่ไม่เปลี่ยนแปลง ตัวอย่างเช่น/ดาวน์โหลด/cdn-west/media/file1 กลายเป็น/download/cdn-west/mp3/file1.mp3 หากมีส่วนขยายในชื่อไฟล์ (เช่น. FLV) นิพจน์จะปิดและแทนที่ด้วย. mp3
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess เขียนกฎใหม่ {#apache}
ไฟล์. htaccess ควบคุมหลายวิธีที่เว็บไซต์สามารถเข้าถึงบล็อกและเปลี่ยนเส้นทางได้ มันทำสิ่งนี้โดยใช้ชุดของกฎ. htaccess rewrite อย่างน้อยหนึ่งรายการ การเขียนใหม่เหล่านี้ดำเนินการโดยโมดูล mod_rewrite ของ Apache
mod_rewrite ให้วิธีการแก้ไขคำขอ URL ที่เข้ามาโดยใช้แบบไดนามิกตามกฎการแสดงออกปกติ สิ่งนี้ช่วยให้คุณสามารถแมป URL ใด ๆ ลงบนโครงสร้าง URL ภายในของคุณในแบบที่คุณต้องการ สิ่งนี้ยังใช้เพื่อทำให้ URL ภายนอกของคุณสะอาดแล้วแมปไว้บน URL ภายในที่ดูน่าเกลียด
ตัวอย่างเช่นการติดตาม. htaccess refrite กฎ redricts url non www ไปยัง URL www
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## แปลง. htaccess rewrite กฎเป็น nginx rewrite directives {#convert}
ดังที่เราได้แสดงไว้ในตัวอย่างข้างต้นสำหรับการเปลี่ยนเส้นทาง URL ที่ไม่ใช่ WWW ไปยัง URL WWW ให้แปลงกฎการเขียน. htaccess rewrite เหมือนกันเป็น Nginx Rewrite Directive
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
ดังนั้นที่นี่เราสร้างบล็อก _server_ สองรายการหนึ่งรายการสำหรับ _yourdomain.com_ และอีกอันสำหรับ _www.yourdomain.com_ และในบล็อก _server_ สำหรับ _yourdomain.com_ เราใช้คำสั่ง _return_ เพื่อเปลี่ยนเส้นทาง URL ที่ไม่ใช่ WWW ไปยัง WWW URL
การเปลี่ยนเส้นทางแบบเดียวกับที่เราดำเนินการด้วยคำสั่ง Return สามารถทำได้ด้วยคำสั่งการเขียนซ้ำ แต่ไม่แนะนำ
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
เพื่อประโยชน์ของความชัดเจนมากขึ้นให้แปลงกฎ WordPress HTaccess เป็นคำสั่ง nginx try_files
[WordPress.org Distributes][6] ค่าเริ่มต้นพื้นฐาน **. htaccess ** ไฟล์ที่มีต่อไปนี้ Htaccess เขียนกฎใหม่ที่เปิดใช้งาน Pretty Permalinks:
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
นี่คือคำสั่ง nginx try_files ที่แปลงแล้ว
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## บทสรุป {#conclusion}
ในบทช่วยสอนนี้เราสำรวจกฎ. htaccess rewrite ของ Apache และวิธีที่เราสามารถแปลงกฎ. htaccess rewrite เหล่านั้นเป็นคำสั่ง Nginx rewrite เราสำรวจคำสั่ง NGINX ที่แตกต่างกันซึ่งสามารถใช้ในการเขียน URL ใหม่ นอกจากนี้เรายังให้ตัวอย่างกฎการเขียนใหม่สำหรับทั้ง Nginx และ Apache หวังว่าการสอนจะเป็นประโยชน์สำหรับคุณ

## สำรวจ
  * [วิธีการติดตั้ง PHP หลายเวอร์ชันด้วย nginx บน Ubuntu][1]
  * [วิธีการตั้งค่าและกำหนดค่า nginx เป็น proxy ย้อนกลับ][7]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
