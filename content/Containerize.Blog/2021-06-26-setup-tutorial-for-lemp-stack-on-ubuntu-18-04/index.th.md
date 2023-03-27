---
title: "การตั้งค่าการสอนสำหรับ LEMP Stack บน Ubuntu 18.04" 
seoTitle: "การตั้งค่าการสอนสำหรับ LEMP Stack บน Ubuntu 18.04" 
description: "LEMP Stack เป็นสแต็คซอฟต์แวร์ที่ใช้ในการพัฒนาและปรับใช้เว็บแอปพลิเคชัน เรียนรู้วิธีการติดตั้ง Nginx, MySQL และ PHP บน Ubuntu 18.04" 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "ติดตั้ง & amp; กำหนดค่า LEMP Stack สำหรับการพัฒนาและปรับใช้เว็บแอปพลิเคชัน คู่มือนี้จะช่วยให้คุณติดตั้ง Nginx, MySQL และ PHP บน Ubuntu 18.04" 
url: /th/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## ติดตั้งและกำหนดค่า LEMP Stack สำหรับการพัฒนาและปรับใช้เว็บแอปพลิเคชัน คู่มือนี้จะช่วยให้คุณติดตั้ง Nginx, MySQL และ PHP บน Ubuntu 18.04

{{< figure align=center src="images/lemp-banner.png" alt="ติดตั้ง lemp stack บน ubuntu">}}


## ภาพรวม {#Prerequisites}

ในคู่มือนี้เราจะติดตั้ง Nginx, MySQL และ PHP (LEMP Stack) สำหรับการพัฒนาและการปรับใช้แอปพลิเคชันเว็บ นอกจากนี้เรายังจะกำหนดค่าเว็บเซิร์ฟเวอร์ไปยังแอปพลิเคชัน PHP เซิร์ฟเวอร์บนเซิร์ฟเวอร์ Ubuntu 18.04 เราจะครอบคลุมส่วนต่อไปนี้ในบทช่วยสอนนี้
* [  **ข้อกำหนดเบื้องต้น**  ][1]
* [  **Lemp Stack คืออะไร**  ][2]
* [  **การติดตั้ง LEMP**  ][3]
* [  **บทสรุป**  ][4]

## สิ่งที่จำเป็นต้องมี {#สิ่งที่จำเป็นต้องมี}

ก่อนที่จะติดตั้งซอฟต์แวร์คุณควรปฏิบัติตามข้อกำหนดดังต่อไปนี้
  * เซิร์ฟเวอร์ด้วยระบบปฏิบัติการ Ubuntu
* ผู้ใช้ที่ไม่ใช่รูทที่มี  **sudo**  สิทธิพิเศษ

## Lemp Stack คืออะไร? {#What}

 **LEMP Stack** เป็นคอลเลกชันของซอฟต์แวร์ที่สามารถใช้ในการเรียกใช้เว็บแอปพลิเคชันที่ใช้ PHP LEMP ย่อมาจาก Linux, Nginx, MySQL และ PHP สแต็ค LEMP เป็นตัวแปรของสแต็คหลอดไฟ ทั้ง LAMP และ LEMP เป็นสแต็คซอฟต์แวร์ยอดนิยมสำหรับการพัฒนาและปรับใช้เว็บแอปพลิเคชัน มีความแตกต่างอย่างหนึ่งระหว่างสองสแต็คซอฟต์แวร์นี้ LAMP ใช้ประโยชน์จากเว็บเซิร์ฟเวอร์ Apache ในขณะที่เซิร์ฟเวอร์ LEMP ใช้ประโยชน์จากเว็บเซิร์ฟเวอร์ Nginx

## การติดตั้ง LEMP {#Installation}

ในส่วนนี้เราจะมุ่งเน้นไปที่วิธีการติดตั้ง Nginx, MySQL และ PHP บน Ubuntu 18.04 ก่อนอื่นเราต้องอัปเดตแพ็คเกจเซิร์ฟเวอร์โดยเรียกใช้คำสั่งด้านล่าง
```
$ sudo apt update
```

### การติดตั้งเว็บเซิร์ฟเวอร์ Nginx
* เรียกใช้คำสั่งด้านล่างเป็น  **ติดตั้ง nginx บน ubuntu**  
```
$ sudo apt install nginx
```
  * เมื่อคุณติดตั้ง Nginx เสร็จแล้วให้เปิดเว็บเบราว์เซอร์ของคุณและพิมพ์ที่อยู่ IP ของเซิร์ฟเวอร์ของคุณ มันจะแสดงหน้าการต้อนรับเริ่มต้นของ Nginx Web Server

{{< figure align=center src="images/nginx-home-1.png" alt="หน้าเริ่มต้นของเว็บเซิร์ฟเวอร์ Nginx">}}


### การติดตั้ง mysql
ตอนนี้คุณต้องติดตั้งเซิร์ฟเวอร์ฐานข้อมูล MySQL สำหรับการจัดการข้อมูลแอปพลิเคชันของคุณ
* เรียกใช้คำสั่งด้านล่างเป็น  **ติดตั้ง mysql บน ubuntu**  
```
$ sudo apt install mysql-server
```
  * เพื่อรักษาความปลอดภัยการติดตั้ง MySQL ให้เรียกใช้คำสั่งต่อไปนี้
```
$ sudo mysql_secure_installation
```
* คุณจะถูกถามว่าคุณต้องการเปิดใช้งาน  **ตรวจสอบปลั๊กอินรหัสผ่าน**  หรือไม่ เป็นการดีกว่าที่จะไม่เปิดใช้งานให้พิมพ์ N แล้วกด Enter เพื่อก้าวไปข้างหน้า
  * ถัดไปมันจะถามคำถามสองสามข้อตามที่แสดงด้านล่าง คุณต้องตอบคำถามทั้งหมด
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * ตอนนี้เซิร์ฟเวอร์ MySQL กำลังเปิดใช้งานแล้ว คุณสามารถทดสอบได้ด้วยคำสั่งต่อไปนี้ ป้อนรหัสผ่านบัญชีรูท Ubuntu ของคุณไม่ใช่หนึ่ง MySQL ในกรณีที่ได้รับแจ้งสำหรับรหัสผ่าน
```
$ sudo mysql
```
  * ป้อนคำสั่งด้านล่างเพื่อออกจาก MySQL
```
mysql> exit
```

### การติดตั้ง PHP
เราจะครอบคลุมการติดตั้ง PHP-FPM สำหรับการประมวลผลของ PHP PHP-FPM ย่อมาจาก FastCGI Process Manager Nginx Web Server ไม่มีฟังก์ชั่นในตัวสำหรับการประมวลผลของ PHP ดังนั้นเราจะใช้ PHP-FPM สำหรับมัน นอกจากนี้เราจะติดตั้ง PHP-MYSQL สำหรับการสื่อสาร PHP ด้วย MySQL สำหรับการจัดการข้อมูล
* เรียกใช้คำสั่งด้านล่างเป็น  **ติดตั้ง PHP บน Ubuntu**  
```
$ sudo apt install php-fpm php-mysql
```
  * ตอนนี้คุณทำกับการติดตั้ง PHP และซอฟต์แวร์ที่จำเป็นทั้งหมดของ LEMP Stack เพื่อเรียกใช้เว็บแอปพลิเคชัน
  * ในขั้นตอนนี้เราจะสร้างไฟล์กำหนดค่า Nginx เพื่อบอกให้ Nginx ใช้โปรเซสเซอร์ PHP สำหรับเนื้อหาแบบไดนามิก เรียกใช้คำสั่งด้านล่างเพื่อสร้างไฟล์กำหนดค่า NGINX
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * คัดลอกรหัสลงในไฟล์กำหนดค่า NGINX และบันทึก
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * มาดูคำสั่งและบล็อกตำแหน่งเหล่านี้สั้น ๆ เพื่อให้คุณสามารถมีข้อมูลพื้นฐาน
*  **ฟัง**  : คุณสามารถกำหนดพอร์ตสำหรับ nginx ใช้พอร์ต 80 สำหรับ HTTP และ 443 สำหรับโปรโตคอล HTTPS
*  **รูท**  : กำหนดไดเรกทอรีรูทสำหรับโครงการของคุณ Nginx จะใช้เพื่อให้บริการเว็บไซต์หรือเว็บแอปพลิเคชัน
*  **ดัชนี**  : กำหนดลำดับที่ควรให้บริการไฟล์ เมื่อเรียกไฟล์ดัชนี Nginx จะส่งไฟล์ index.php
*  **server_name**  : กำหนดชื่อโดเมนหรือ IP สาธารณะของเซิร์ฟเวอร์ของคุณ
*  **ตำแหน่ง /** : บล็อกตำแหน่งนี้มี **try_block**  คำสั่งและตรงกับ URI ที่ร้องขอ Nginx ส่งคืนข้อผิดพลาด 404 หากไม่พบไฟล์ที่ร้องขอ
*  **ตำแหน่ง ~ .php $**  : บล็อกตำแหน่งนี้จัดการการประมวลผล PHP
*  **ตำแหน่ง ~ /.ht*: nginx ไม่ได้ดำเนินการ** . htaccess **ไฟล์และบล็อกตำแหน่งนี้จัดการกับมัน nginx ไม่ได้ให้บริการไฟล์. htaccess โดยการกำหนด**  ปฏิเสธคำสั่ง**ทั้งหมด
  * สร้าง Symlink สำหรับไฟล์กำหนดค่า Nginx ที่สร้างขึ้นใหม่เพื่อเปิดใช้งาน
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * เรียกใช้คำสั่งต่อไปนี้เพื่อทดสอบไฟล์กำหนดค่า Nginx สำหรับข้อผิดพลาดทางไวยากรณ์
```
$ sudo nginx -t
```
  * รีสตาร์ทเว็บเซิร์ฟเวอร์ Nginx
```
$ sudo systemctl restart nginx
```

### ทดสอบ php
  * เพื่อให้แน่ใจว่า NGINX ให้บริการหน้า PHP อย่างถูกต้องเราจะสร้างไฟล์ PHP สำหรับการทดสอบการกำหนดค่า
  * สร้างไฟล์ info.php ในไดเรกทอรีรูทของเว็บเซิร์ฟเวอร์ Nginx โดยเรียกใช้คำสั่งด้านล่าง
```
$ sudo nano /var/www/html/info.php
```
  * เพิ่มรหัสด้านล่างลงในนั้นและบันทึกไฟล์
```
<?php
phpinfo();
```
  * เปิดเว็บเบราว์เซอร์และพิมพ์ชื่อโดเมนหรือเซิร์ฟเวอร์ IP สาธารณะตามด้วยชื่อไฟล์ php เช่น http: // เซิร์ฟเวอร์ \ _ip \ _or_domain/info.php คุณจะเห็นหน้าด้านล่าง

{{< figure align=center src="images/info-php.png" alt="หน้าข้อมูล PHP">}}


## บทสรุป {#บทสรุป}

ในบทช่วยสอนนี้เราได้พูดคุยเกี่ยวกับวิธีการติดตั้งและกำหนดค่า  **lemp stack**  อย่างที่คุณเห็นการกำหนดค่าส่วนประกอบสแต็คซอฟต์แวร์นั้นง่ายมาก นอกจากนี้คุณสามารถเริ่มสร้างและให้บริการเว็บแอพในไม่กี่นาที
ในที่สุด [  **containerize.com** ][5] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนโพสต์บล็อกเกี่ยวกับผลิตภัณฑ์โอเพนซอร์สล่าสุดเพิ่มเติม ดังนั้นโปรดติดต่อกับ [ **เว็บเซิร์ฟเวอร์โซลูชันสแต็ก**  ][6] หมวดหมู่สำหรับการอัปเดตล่าสุด

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
* [  **โซลูชันเว็บเซิร์ฟเวอร์โอเพ่นซอร์สที่ดีที่สุด stack**  ][7]
*  **[เครื่องมือทางนิติวิทยาศาสตร์โอเพนซอร์สที่ได้รับความนิยมมากที่สุด][8]**  
*  **[5 อันดับ 5 Top Open Message Queue (MQ) ซอฟต์แวร์ในปี 2021][9]**  
*  **[ซอฟต์แวร์จัดเก็บคลาวด์โอเพ่นซอร์สที่ดีที่สุดและซอฟต์แวร์การแชร์ไฟล์][10]**  
* [  **วิธีการติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย nginx บน ubuntu**  ][11]
* [  **วิธีการติดตั้ง PHP หลายรุ่นด้วย nginx บน ubuntu**  ][12]
* [  **Top 5 Top 5 ใบอนุญาตโอเพนซอร์สที่ได้รับการอนุมัติจาก OSI ที่ได้รับความนิยมมากที่สุดในปี 2021**  ][13]



 [1]: #Prerequisites
 [2]: #What
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
 [9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
 [10]: https://products.containerize.com/backup-and-sync/
 [11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
 [13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
