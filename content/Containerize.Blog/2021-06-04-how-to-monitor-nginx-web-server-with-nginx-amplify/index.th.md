---
title: "วิธีการตรวจสอบเว็บเซิร์ฟเวอร์ Nginx ด้วย Nginx Amplify" 
seoTitle: "วิธีการตรวจสอบเว็บเซิร์ฟเวอร์ Nginx ด้วย Nginx Amplify" 
description: "Nginx Amplify เป็นเอเจนต์การตรวจสอบฟรีสำหรับ Nginx Web Server และแอปพลิเคชัน PHP บทความนี้เกี่ยวกับวิธีการตรวจสอบเว็บเซิร์ฟเวอร์ Nginx ด้วย Nginx Amplify" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "ตรวจสอบ Nginx, แอปพลิเคชัน PHP, ระบบปฏิบัติการที่มี Nginx ขยายและปรับปรุงการกำหนดค่า บทความนี้จะแนะนำคุณในการตั้งค่าและกำหนดค่า Nginx Amplify" 
url: /th/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## ตรวจสอบ NGINX, แอปพลิเคชัน PHP, ระบบปฏิบัติการด้วย NGINX ขยายและปรับปรุงการกำหนดค่า บทความนี้จะแนะนำคุณในการตั้งค่าและกำหนดค่า Nginx Amplify

{{< figure align=center src="images/nginx-post.png" alt="ตรวจสอบเว็บเซิร์ฟเวอร์ NGINX ด้วย NGINX AMPLIFY">}}


## ภาพรวม {#install}
** การตรวจสอบเว็บเซิร์ฟเวอร์ ** มีความสำคัญมากสำหรับเว็บไซต์ที่มีการจราจรสูง เอเจนต์การตรวจสอบ ** จะบันทึกตัวชี้วัดที่จำเป็นเกี่ยวกับเว็บเซิร์ฟเวอร์เป็นประจำ ตัวชี้วัดที่สำคัญเหล่านั้นสามารถใช้เพื่อเพิ่มประสิทธิภาพการกำหนดค่า NGINX มันจะช่วยคุณในการปรับปรุงประสิทธิภาพของเว็บเซิร์ฟเวอร์และแอปพลิเคชันของคุณ
ในโพสต์บล็อกนี้เราจะครอบคลุมส่วนต่อไปนี้สำหรับการตรวจสอบ ** nginx ** เครื่องมือโอเพ่นซอร์ส
  * [Nginx Web Server] [1]
  * [Nginx Amplify] [2]
  * [ติดตั้ง Nginx Amplify] [3]
  * [การตรวจสอบตัวชี้วัด] [4]

## nginx เว็บเซิร์ฟเวอร์ {#nginx}
[Nginx] [5] เป็นเว็บเซิร์ฟเวอร์ฟรีและโอเพ่นซอร์ส มันง่ายน้ำหนักเบาและง่ายต่อการกำหนดค่ามากกว่า Apache Nginx Web Server ยังทำงานเป็นพร็อกซีย้อนกลับ, โหลดบาลานซ์, พร็อกซีจดหมายและแคช HTTP มันใช้งานได้สำหรับโปรโตคอล HTTP, HTTPS, SMTP, POP3 และ IMAP Nginx เป็นเว็บเซิร์ฟเวอร์ความเร็วสูงที่เชื่อถือได้และมีประสิทธิภาพในการปรับปรุงประสิทธิภาพของแอปพลิเคชันของคุณ นอกจากนี้ยังได้รับความนิยมเพิ่มขึ้นและตอนนี้ได้รับการยกย่องว่าเป็นเว็บเซิร์ฟเวอร์ที่ได้รับความนิยมมากที่สุด นอกจากนี้ Nginx ยังเหมาะสำหรับเว็บไซต์ทุกประเภทรวมถึงเว็บไซต์และแอปพลิเคชันที่มีการจราจรสูง สามารถติดตั้งและกำหนดค่าในระบบปฏิบัติการเกือบทั้งหมด

### ติดตั้ง nginx
  * เรียกใช้คำสั่งด้านล่างเพื่อติดตั้งเว็บเซิร์ฟเวอร์ Nginx
```
sudo apt update
sudo apt install nginx
```
  * เมื่อคุณทำการติดตั้งเสร็จแล้วให้เปิดเบราว์เซอร์ของคุณและพิมพ์“ http: // ip \ _of \ _your_server” คุณจะเห็นหน้าต้อนรับด้านล่าง

{{< figure align=center src="images/nginx-home.png" alt="ยินดีต้อนรับสู่ Nginx!">}}


## nginx ขยาย {#Amplify}
Nginx Amplify เป็นเครื่องมือตรวจสอบฟรีสำหรับ Nginx Open Source, Nginx Plus และ PHP-FPM เป็นเครื่องมือที่ใช้ SaaS สำหรับการตรวจสอบและแอปพลิเคชันเซิร์ฟเวอร์ Nginx ผู้ใช้สามารถติดตามสินทรัพย์โครงสร้างพื้นฐานได้อย่างง่ายดายตรวจสอบประสิทธิภาพและปรับการกำหนดค่า ให้ข้อมูลที่ครอบคลุมซึ่งผู้ใช้อาจใช้เพื่อเพิ่มประสิทธิภาพเว็บเซิร์ฟเวอร์และการกำหนดค่าแอปพลิเคชัน มันทำหน้าที่เป็นตัวแทนบนเซิร์ฟเวอร์ที่โฮสต์แอปพลิเคชัน NGINX และ PHP Nginx Amplify เป็นน้ำหนักเบากดบันทึกและตรวจสอบข้อมูลเพื่อขยายเซิร์ฟเวอร์โดยไม่กระทบต่อประสิทธิภาพ คุณสามารถดูตัวชี้วัดบนแดชบอร์ดขยาย ตัวแทนมีให้สำหรับระบบปฏิบัติการหลักทั้งหมดเช่น Rhel, Centos, Ubuntu, Debian, Fedora และ FreeBSD Nginx Amplify มีองค์ประกอบหลักสามประการเช่น Nginx Amplify Agent, Nginx Amplify Web UI และ NGINX ขยายแบ็กเอนด์
  *** Nginx Amplify Agent ** - ทำงานบนระบบที่กำลังตรวจสอบ การสื่อสารทั้งหมดถูกเข้ารหัสโดยใช้ SSL/TLS
  *** nginx ขยายเว็บ UI ** - เว็บ UI แสดงตัวชี้วัดสำหรับเว็บเซิร์ฟเวอร์แอปพลิเคชันและระบบปฏิบัติการ
  *** nginx ขยายแบ็กเอนด์ ** - เป็นองค์ประกอบสำคัญที่นำมาใช้เป็น SaaS และรับผิดชอบในการรวบรวมตัวชี้วัดการบำรุงรักษาฐานข้อมูลใช้งานเครื่องมือวิเคราะห์และจัดหา API หลัก

## ติดตั้ง nginx amplify {#install}
ทำตามคู่มือทีละขั้นตอนสำหรับการติดตั้ง Nginx Amplify บน Ubuntu
  * ก่อนอื่นคุณต้องสร้างบัญชีที่ Nginx [เว็บไซต์] [6]
  * หลังจากเข้าสู่ระบบคุณจะเห็นหน้าจอด้านล่างที่เว็บไซต์ Nginx Amplify ตอนนี้เชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่าน SSH และใช้คำสั่งที่ให้ไว้ในขั้นตอนด้านล่าง

{{< figure align=center src="images/amplify-1.png" alt="ติดตั้ง Nginx Amplify">}}

  * เรียกใช้คำสั่งด้านล่างเพื่อดาวน์โหลดเอเจนต์
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * เรียกใช้คำสั่งต่อไปนี้เพื่อติดตั้ง Nginx ขยายบนเซิร์ฟเวอร์ แทนที่ XXXXX ด้วยคีย์ API จริง คุณสามารถค้นหาได้ที่ Nginx Amplify Dashboard
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * เมื่อคุณทำการติดตั้งเสร็จแล้วคุณสามารถตรวจสอบสถานะด้วยคำสั่งต่อไปนี้
```
$ sudo service amplify-agent status
```
  * ตอนนี้คุณต้องกำหนดค่าเอเจนต์ Nginx Amplify เพื่อดูตัวชี้วัด

{{< figure align=center src="images/amplify-2-1.png" alt="การกำหนดค่าการตรวจสอบ Nginx">}}

  * สร้างไฟล์ใหม่ด้วยการกำหนดค่า Stub_status
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * คัดลอกรหัสด้านล่างลงไปและบันทึกไฟล์
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * รีสตาร์ทเว็บเซิร์ฟเวอร์ Nginx เพื่อเปิดใช้งานโมดูล Stub_status
```
$ sudo service nginx restart
```
  * ตอนนี้เปิดไฟล์กำหนดค่า Nginx ด้วยคำสั่งต่อไปนี้
```
$ sudo nano /etc/nginx/nginx.conf
```
  * เพิ่มรหัสด้านล่างลงในนั้นและบันทึก
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * รีสตาร์ทบริการ Nginx เพื่อใช้การเปลี่ยนแปลงทั้งหมด
```
$ sudo service nginx restart
```
  * ถัดไปนำทางเพื่อขยายแดชบอร์ดและคลิกที่ปุ่ม 'เสร็จสิ้น' คุณควรดูหน้าต่อไปนี้

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="การตรวจสอบเว็บเซิร์ฟเวอร์">}}

  *คุณสามารถดูสถิติในรูปแบบที่ง่ายและอ่านได้มากขึ้นโดยคลิกที่แท็บภาพรวม ** ** มันจะดูเหมือนดังที่แสดงด้านล่าง

{{< figure align=center src="images/amplify-overview.png" alt="สถิติการตรวจสอบ Nginx">}}


## การตรวจสอบตัวชี้วัด {#Monitoring}
Nginx Amplify Agent รวบรวมข้อมูลประเภทต่อไปนี้:
  *** Nginx Metrics **-มันรวบรวมตัวชี้วัดที่เกี่ยวข้องกับ Nginx ต่าง ๆ จาก stub_status, บันทึกไฟล์และจากสถานะกระบวนการ
  *** ตัวชี้วัดระบบ ** - Nginx ขยายตรวจสอบตัวชี้วัดของระบบที่หลากหลายเช่นการใช้ CPU การใช้หน่วยความจำการรับส่งข้อมูลเครือข่ายและอื่น ๆ อีกมากมาย
  *** ตัวชี้วัด PHP-FPM **-หากระบุกระบวนการหลักของ PHP-FPM ที่ใช้งานได้จะได้รับการวัดจากสถานะกลุ่ม PHP-FPM
  *** MySQL Metrics ** - ชุดสถานะ Global MySQL สามารถใช้งานได้โดยตัวแทนเพื่อรวบรวมตัวชี้วัด
  *** Nginx Metadata ** - ตัวแทนรวบรวมข้อมูลเกี่ยวกับอินสแตนซ์ Nginx เช่นข้อมูลแพ็คเกจ, ข้อมูลการสร้าง, เส้นทางไบนารี, สร้างการตั้งค่าการกำหนดค่าและอื่น ๆ อีกมากมาย
  *** ข้อมูลเมตาของระบบ ** - ตัวแทนรวบรวมข้อมูลในระบบปฏิบัติการรวมถึงชื่อโฮสต์, เวลาทำงาน, OS และรายละเอียดอื่น ๆ

## บทสรุป
เราผ่าน Nginx Web Server และ Nginx ขยายเอเจนต์การตรวจสอบขั้นสูงในรายละเอียดที่ดี Nginx Amplify ค่อนข้างง่ายในการตั้งค่าและกำหนดค่า นอกจากนี้เรายังได้ผ่านการวัดที่สำคัญ Nginx ที่สามารถติดตามไปยัง ** ตรวจสอบ Nginx ** ตัวชี้วัดที่สำคัญเหล่านี้สามารถใช้เพื่อปรับปรุงการกำหนดค่าของเว็บเซิร์ฟเวอร์และแอพ Nginx ของคุณ
ในที่สุด [containerize.com] [7] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนโพสต์บล็อกเกี่ยวกับผลิตภัณฑ์โอเพ่นซอร์สล่าสุดเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [เว็บเซิร์ฟเวอร์โซลูชันสแต็ก] [8] สำหรับการอัปเดตล่าสุด

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [วิธีใช้ Nginx เป็น load balancer สำหรับแอปพลิเคชันของคุณ] [9]
  * [วิธีการตั้งค่าและกำหนดค่า nginx เป็น proxy ย้อนกลับ] [10]
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
