---
title: "วิธีการติดตั้ง PHP หลายรุ่นด้วย nginx บน ubuntu" 
seoTitle: "วิธีการติดตั้ง PHP หลายรุ่นด้วย nginx บน ubuntu" 
description: "บทความอธิบายวิธีการติดตั้ง PHP หลายรุ่นด้วย Nginx บน Ubuntu เราจะทำตามคำแนะนำทีละขั้นตอนเกี่ยวกับวิธีการติดตั้ง PHP ด้วย Nginx" 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "หากคุณกำลังมองหาที่จะใช้ PHP หลายเวอร์ชันกับ Nginx จากนั้นในบทความนี้เราจะแนะนำคุณทีละขั้นตอนเกี่ยวกับวิธีการติดตั้ง PHP ด้วย Nginx บน Ubuntu" 
url: /th/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP กับ Nginx หลายเวอร์ชัน PHP">}}


## หากคุณต้องการใช้ PHP หลายรุ่นกับ Nginx จากนั้นในบทความนี้เราจะแนะนำคุณทีละขั้นตอนเกี่ยวกับวิธีการติดตั้ง PHP ด้วย Nginx บน Ubuntu
บทความนี้อยู่ในความต่อเนื่องของซีรี่ส์ของเราเกี่ยวกับบทเรียนเกี่ยวกับ Nginx จนถึงตอนนี้เราได้กล่าวถึงวิธีการใช้ Nginx เป็นโหลดบาลานซ์วิธีใช้ Nginx เป็นพร็อกซีย้อนกลับ และตอนนี้บทช่วยสอนนี้ครอบคลุมคำถามที่เรียกร้องอีกครั้ง“ วิธีใช้ PHP หลายรุ่นกับ Nginx” ในบทช่วยสอนนี้เราจะแนะนำคุณทีละขั้นตอนเกี่ยวกับวิธีการติดตั้ง PHP บน Ubuntu วิธีกำหนดค่า PHP ด้วย Nginx และในที่สุดคุณจะติดตั้ง PHP หลายรุ่นด้วย Nginx ได้อย่างไร ดังนั้นมาเริ่มกันเถอะ!
  * [ติดตั้ง nginx][1]
  * [ติดตั้ง PHP หลายเวอร์ชัน][2]
  * [สร้างหลายเว็บไซต์ด้วย PHP][3]
  * [กำหนดค่า nginx เพื่อเรียกใช้เวอร์ชันที่แตกต่างกันสำหรับเว็บไซต์][4]
  * [ข้อสรุป][5]

## ติดตั้ง nginx {#nginx}
Nginx (ออกเสียงว่า "ENGINE-X") เป็นเว็บเซิร์ฟเวอร์โอเพ่นซอร์สที่มักใช้เป็นพร็อกซีย้อนกลับหรือแคช HTTP มีให้สำหรับ Linux ฟรี
ในการติดตั้ง nginx ให้ใช้คำสั่งต่อไปนี้:
```
sudo apt update
sudo apt install nginx
```
หลังจากการติดตั้งเสร็จสิ้นคุณสามารถเปิด“ http: // localhost” ในเบราว์เซอร์ของคุณและคุณมีการตั้งค่าทั้งหมด

{{< figure align=center src="images/php-with-nginx-install.png" alt="ติดตั้ง PHP ด้วย nginx">}}


## ติดตั้ง PHP หลายเวอร์ชัน {#php}
** php ** (ตัวย่อแบบเรียกซ้ำสำหรับ ** php: hypertext preprocessor **) เป็นภาษาโอเพนซอร์ซที่ได้รับความนิยมสคริปต์อเนกประสงค์ที่ได้รับความนิยมซึ่งใช้กันอย่างแพร่หลายและเหมาะสมที่สุดสำหรับการพัฒนาเว็บไซต์และแอปพลิเคชันบนเว็บ เป็นภาษาสคริปต์ฝั่งเซิร์ฟเวอร์ที่สามารถฝังอยู่ใน HTML
ปัจจุบันมี ** php ** สามเวอร์ชัน **, i.e ** php 5.6 **, ** 7.0, ** และ ** 8.0 ** ความหมาย ** php 5.3 **, ** 5.4, ** และ ** 5.5 ** ทั้งหมดมาถึงจุดจบของชีวิต พวกเขาไม่ได้รับการสนับสนุนด้วยการอัปเดตความปลอดภัยอีกต่อไป ดังนั้นก่อนอื่นให้ติดตั้ง PHP 7.0 และ PHP 7.2 ด้วย PHP-FPM
ที่จริงแล้วก่อนที่เราจะย้ายด้วยการติดตั้งให้ลงใต้ก่อนว่า PHP-FPM คืออะไร ** php-fpm ** (ตัวย่อของ ** FastCGI Process Manager **) เป็นตัวเลือก PHP (โปรเซสเซอร์ไฮเปอร์เท็กซ์) ที่ได้รับความนิยมอย่างมาก PHP-FPM มีคุณสมบัติมากมายที่สามารถพิสูจน์ได้ว่าเป็นประโยชน์สำหรับเว็บไซต์ที่ได้รับปริมาณการใช้งานในปริมาณมากบ่อยครั้ง
ในการติดตั้ง PHP 7.0 และ 7.2 ก่อนคุณจะต้องเพิ่มที่เก็บ PHP ลงในเซิร์ฟเวอร์ของคุณเพื่อติดตั้ง PHP หลายเวอร์ชัน คุณสามารถเพิ่มที่เก็บ ondrej php ด้วยคำสั่งต่อไปนี้:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
เมื่อที่เก็บข้อมูลล่าสุดให้ติดตั้ง PHP 7.0, PHP 7.2 และ PHP-FPM ด้วยคำสั่งต่อไปนี้:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
เมื่อการติดตั้งเสร็จสมบูรณ์ให้ตรวจสอบสถานะของ PHP-FPM ด้วยคำสั่งต่อไปนี้:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## สร้างหลายเว็บไซต์ด้วย php {#web}
หน้าเริ่มต้นถูกวางไว้ใน/var/www/html/ตำแหน่ง คุณสามารถวางหน้าคงที่ของคุณที่นี่หรือใช้โฮสต์เสมือนจริงและวางตำแหน่งอื่น ๆ
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
ถัดไปสร้างไฟล์ตัวอย่าง index.php สำหรับ site1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
ตอนนี้สร้างไฟล์ตัวอย่าง index.php สำหรับ site2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
จากนั้นเปลี่ยนกรรมสิทธิ์ของทั้งสองเว็บไซต์เป็น www-data:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## กำหนดค่า nginx {#configure}
ถัดไปคุณจะต้องสร้างไฟล์โฮสต์เสมือน Nginx สำหรับโดเมน site1.containerize.com ที่ใช้ PHP 7.0 และอีกอันสำหรับ site2.containerize.com ที่ใช้ PHP 7.2
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
เพิ่มบรรทัดต่อไปนี้:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
ตอนนี้สร้างไฟล์ที่สองสำหรับ site2.containerize.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
จากนั้นเปิดใช้งานไฟล์โฮสต์เสมือนจริงทั้งสองด้วยคำสั่งต่อไปนี้:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
ในที่สุดรีสตาร์ทบริการ NGINX และ PHP-FPM เพื่อใช้การเปลี่ยนแปลงการกำหนดค่าทั้งหมด:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## บทสรุป {#conclusion}
ในบทช่วยสอนนี้เราสำรวจวิธีการหลายเวอร์ชัน PHP ใน Ubuntu เราเรียนรู้วิธีการติดตั้ง nginx จากนั้นเราสำรวจวิธีการตั้งค่าสองเว็บไซต์ที่แตกต่างกันใน Nginx และในที่สุดเราก็เรียนรู้วิธีกำหนดค่าเว็บไซต์ที่แตกต่างกันสองแห่งด้วย PHP เวอร์ชันที่แตกต่างกันด้วย Nginx หวังว่าการสอนจะช่วยคุณได้

## สำรวจ
  * [วิธีการตั้งค่าและกำหนดค่า nginx เป็น proxy ย้อนกลับ][6]
  * [วิธีใช้ Nginx เป็น load balancer สำหรับแอปพลิเคชันของคุณ][7]

  
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
