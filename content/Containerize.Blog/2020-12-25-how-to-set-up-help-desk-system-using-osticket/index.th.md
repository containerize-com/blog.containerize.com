---
title: "วิธีตั้งค่าซอฟต์แวร์แผนกช่วยเหลือออนไลน์โดยใช้ Osticket" 
seoTitle: "วิธีตั้งค่าซอฟต์แวร์แผนกช่วยเหลือออนไลน์โดยใช้ Osticket" 
description: "จัดการคำขอสนับสนุนทั้งหมดของคุณในที่เดียวโดยใช้แผนกช่วยเหลือ Osticket แปลงคำถามที่สร้างขึ้นผ่านอีเมลโทรศัพท์และแบบฟอร์มเป็นตั๋วบนเว็บ" 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "จัดการคำขอสนับสนุนทั้งหมดของคุณในที่เดียวโดยใช้ Osticket แปลงคำถามที่สร้างขึ้นทางอีเมลโทรศัพท์และแบบฟอร์มเป็นตั๋วบนเว็บอย่างง่าย" 
url: /th/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## จัดการคำขอสนับสนุนทั้งหมดของคุณในที่เดียวโดยใช้ Osticket แปลงคำถามที่สร้างขึ้นทางอีเมลโทรศัพท์และแบบฟอร์มเป็นตั๋วบนเว็บอย่างง่าย

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="วิธีตั้งค่าซอฟต์แวร์แผนกช่วยเหลือออนไลน์โดยใช้ Osticket">}}

Osticket เป็นโซลูชันซอฟต์แวร์ช่วยเหลือโต๊ะทำงานออนไลน์โอเพ่นซอร์ส Osticket Helpdesk เป็นทางเลือกฟรีสำหรับระบบสนับสนุนลูกค้าที่มีต้นทุนสูงและซับซ้อน มันเป็นเรื่องง่ายน้ำหนักเบาเชื่อถือได้บนเว็บและติดตั้งและใช้งานง่าย ส่วนที่ดีที่สุดคือฟรีอย่างสมบูรณ์ เราจะครอบคลุมส่วนต่อไปนี้ในบทช่วยสอนนี้:
  * [Osticket คืออะไร][1]
  * [ข้อดีข้อเสียของ Osticket][2]
  * [วิธีการตั้งค่า Osticket?][3]
  * [บทสรุป][4]

## Osticket คืออะไร? {#osticket}

Osticket จัดเตรียมแผงควบคุมที่เป็นมิตรกับผู้ใช้และส่วนประกอบการรายงานแบบเรียลไทม์ ผู้ใช้สามารถเข้าสู่ระบบและสร้างตั๋วได้ในขั้นตอนง่ายๆ พวกเขาสามารถสร้างตั๋วผ่านเว็บไซต์อีเมลหรือโทรศัพท์ของคุณ ตั๋วที่เข้ามาจะได้รับการบันทึกและมอบหมายให้ตัวแทน ตัวแทนจะได้รับการแจ้งเตือนทางอีเมลและจะตอบคำถามเพื่อช่วยแก้ไขปัญหาของพวกเขา ลูกค้าและตัวแทนสามารถหารือเกี่ยวกับรายละเอียดและความคืบหน้าในส่วนความคิดเห็น ลูกค้าสามารถติดตามคำขอและความคืบหน้าของพวกเขาผ่านพอร์ทัลลูกค้าในตัวที่จัดทำโดยซอฟต์แวร์แผนกช่วยเหลือออนไลน์นี้

## ข้อดีและข้อเสียของ osticket {#pros}


#### ข้อดี
  * Osticket เป็นมิตรกับผู้ใช้ทั้งผู้ใช้และตัวแทนสนับสนุน
  * มาพร้อมกับคุณสมบัติที่หลากหลาย Osticket มีทุกสิ่งที่คุณต้องการโดยไม่ซับซ้อนมากเกินไป
  * Osticket ฟรีและซอฟต์แวร์การจัดการตั๋วโอเพ่นซอร์สอย่างสมบูรณ์
  * มันมีน้ำหนักเบาปลอดภัยเชื่อถือได้และง่ายต่อการติดตั้งซอฟต์แวร์การจัดการแผนกช่วยเหลือ
  * มีความยืดหยุ่นในการทำงานบนเว็บเซิร์ฟเวอร์ยอดนิยมทั้งหมดรวมถึง Apache, Nginx, LightTPD และ IIS ฯลฯ

#### ข้อเสีย
  * Osticket ไม่ได้ให้รายละเอียดการวิเคราะห์ตั๋วและสถิติเช่นระบบแผนกช่วยเหลืออื่น ๆ
  * ส่วนต่อประสานผู้ใช้นั้นง่ายมากและพื้นฐานเมื่อเทียบกับระบบสนับสนุนอื่น ๆ

## วิธีการติดตั้ง Osticket? {#how}

ทำตามขั้นตอนเหล่านี้เพื่อติดตั้ง Osticket ด้วย Nginx บน Ubuntu 18.04 Lts
  * สร้างไดเรกทอรีใหม่สำหรับ Osticket
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * ดาวน์โหลดการตั้งค่า Osticket ล่าสุดโดยใช้คำสั่งต่อไปนี้
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * หลังจากนั้นให้สร้างไฟล์กำหนดค่าจากไฟล์ตัวอย่างโดยใช้คำสั่งเหล่านี้
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * จากนั้นเปลี่ยนความเป็นเจ้าของของ Osticket Web Directory เป็นผู้ใช้และกลุ่ม www-data ’
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * หลังจากนั้นให้สร้างไฟล์การกำหนดค่าโฮสต์เสมือนจริงใหม่
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * จากนั้นวางรหัสการกำหนดค่าลงไป
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * เปลี่ยนชื่อเซิร์ฟเวอร์ตามชื่อโดเมนของคุณ บันทึกไฟล์และออก
  * ตอนนี้เชื่อมโยงไฟล์โฮสต์เสมือนนี้ไปยังโฟลเดอร์ที่เปิดใช้งานไซต์โดยใช้คำสั่งต่อไปนี้
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * ทดสอบข้อผิดพลาดการกำหนดค่าใด ๆ โดยใช้คำสั่งต่อไปนี้
```
nginx -t
```
  * ตอนนี้รีสตาร์ทบริการ nginx โดยใช้คำสั่งต่อไปนี้
```
sudo systemctl restart nginx

```
  * ตอนนี้ป้อนชื่อโดเมนของคุณในเว็บเบราว์เซอร์ใด ๆ เพื่อเริ่มตัวช่วยสร้างการติดตั้งดังแสดงในรูปต่อไปนี้

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="วิธีตั้งค่าซอฟต์แวร์แผนกช่วยเหลือออนไลน์โดยใช้ Osticket">}}

  * เปิดใช้งานส่วนขยายที่ต้องการจาก php.ini และคลิก“ ดำเนินการต่อ”
* กรอกข้อมูลที่จำเป็นทั้งหมดและคลิก“ ติดตั้งทันที”**ปุ่ม

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="วิธีตั้งค่าซอฟต์แวร์แผนกช่วยเหลือออนไลน์โดยใช้ Osticket">}}

  * ในการตั้งค่าฐานข้อมูลป้อน DBNAME ชื่อผู้ใช้และรหัสผ่าน
  * ในที่สุดคลิกที่ปุ่ม“ ติดตั้งทันที”
  * หลังจากการติดตั้งเสร็จสมบูรณ์จะแสดงหน้าด้วยข้อความที่ประสบความสำเร็จ
  * ถัดไปเปลี่ยนการอนุญาตของ ost-config.php เพื่อลบการเข้าถึงการเขียนโดยเรียกใช้คำสั่งต่อไปนี้:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## บทสรุป {#conclusion}

Osticket เหมาะที่สุดสำหรับ บริษัท ที่มีงบประมาณต่ำหรือคนที่ต้องการระบบโต๊ะช่วยเหลืออย่างง่ายและไม่ใช่ระบบที่ซับซ้อน มันเป็นเรื่องง่ายน้ำหนักเบาเชื่อถือได้โอเพ่นซอร์สและซอฟต์แวร์แผนกช่วยเหลือออนไลน์ฟรีทั้งหมด ซึ่งทำให้ Osticket เป็นทางเลือกที่ยอดเยี่ยมสำหรับระบบสนับสนุนลูกค้าที่มีต้นทุนสูงกว่า หากต้องการเรียนรู้เพิ่มเติมเกี่ยวกับคุณสมบัติ Osticket และคู่มือการติดตั้งโปรดตรวจสอบการสอนต่อไปนี้

## สำรวจ
[โอเพ่นซอร์สที่ดีที่สุดและซอฟต์แวร์ช่วยแผนกช่วยเหลือฟรี][5]
[ระบบช่วยเหลือลูกค้าและระบบการดูแลลูกค้ายอดนิยมฟรี][6]
[คู่มือผู้เริ่มต้นในการพัฒนาปลั๊กอินของ Osticket][7]
[วิธีการใช้งานหลายคนใน Osticket][8]
[ระบบจำหน่ายตั๋วอัตโนมัติโดยใช้ WordPress และ Osticket][9]



 [1]: #osticket
 [2]: #pros
 [3]: #how
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/
 [6]: https://products.containerize.com/helpdesk/osticket
 [7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
 [9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
