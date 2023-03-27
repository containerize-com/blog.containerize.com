---
title: "วิธีกำหนดค่า Apache เป็นพร็อกซีย้อนกลับสำหรับ Ubuntu/Debian" 
seoTitle: "วิธีกำหนดค่า Apache เป็นพร็อกซีย้อนกลับสำหรับ Ubuntu/Debian" 
description: "Apache Reverse Proxy Configuration ทีละขั้นตอนช่วยให้คุณสามารถเรียกใช้เซิร์ฟเวอร์ Back End หนึ่งเซิร์ฟเวอร์ที่อยู่ด้านหลังพร็อกซีเซิร์ฟเวอร์ด้วย mod_proxy บน Ubuntu/Debian Linux" 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxy ช่วยให้คุณสามารถเรียกใช้เซิร์ฟเวอร์แบ็คเอนด์หนึ่งตัวขึ้นไปหลังพร็อกซีเซิร์ฟเวอร์ นี่คือวิธีกำหนดค่าพร็อกซี apache Reverse บนระบบ Ubuntu/Debian" 
url: /th/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxy ช่วยให้คุณเรียกใช้เซิร์ฟเวอร์แบ็คเอนด์หนึ่งตัวขึ้นไปหลังเซิร์ฟเวอร์พร็อกซี นี่คือวิธีกำหนดค่าพร็อกซี apache Reverse บนระบบ Ubuntu/Debian

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="ติดตั้งและกำหนดค่า Apache Reverse Proxy">}}


##  **ภาพรวม**  
Apache Reverse Proxy อนุญาตให้มีการรับส่งข้อมูลทั้งหมดและส่งต่อให้เรียกใช้เซิร์ฟเวอร์หรือคอนเทนเนอร์แบ็กเอนด์อย่างน้อยหนึ่งเซิร์ฟเวอร์หรือคอนเทนเนอร์ที่อยู่เบื้องหลังพร็อกซีเซิร์ฟเวอร์โดยไม่เปิดเผยต่อสาธารณะ เว็บเซิร์ฟเวอร์แบ็คเอนด์สามารถเป็นเซิร์ฟเวอร์ Apache2 หรือโอเพ่นซอร์ส HTTP อื่นเช่น Nginx Apache2 HTTP Server เป็นหนึ่งในเว็บเซิร์ฟเวอร์โอเพ่นซอร์สยอดนิยมที่ใช้ในปัจจุบัน
มีเหตุผลหลายประการในการติดตั้งและกำหนดค่าพร็อกซีเซิร์ฟเวอร์ ตัวอย่างเช่น Reverse Proxy สามารถช่วยคุณเพิ่มความปลอดภัยสำหรับการปรับสมดุลโหลด จำกัด การเข้าถึงสถานที่บางแห่งเพื่อป้องกันการโจมตีและอื่น ๆ อีกมากมาย บทความนี้อธิบายวิธีการติดตั้งและกำหนดค่า Apache Reverse Proxy การกำหนดค่าทีละขั้นตอนสำหรับเซิร์ฟเวอร์ HTTPS บน Ubuntu/Debian:
  * การติดตั้ง Apache2
  * กำหนดค่า apache2
  * เปิดใช้งานโมดูลพร็อกซี
  * เปิดใช้งาน SSL
  * รีสตาร์ท Apache2
  * บทสรุป

## ขั้นตอนที่ 1: ติดตั้ง apache2
การติดตั้ง Apache2 นั้นง่ายมากและใช้งานง่าย หากต้องการทำการติดตั้งให้เรียกใช้คำสั่งด้านล่างง่ายๆ:
การอัปเดต sudo apt-get
sudo apt-get ติดตั้ง apache2
{{_LINE_25_}}
หลังจากติดตั้ง Apache2 ในระบบของคุณให้ใช้คำสั่ง SystemCTL ต่อไปนี้บน Debian Linux หรือ Ubuntu Linux เวอร์ชัน Ubuntu เพื่อหยุดเริ่มเปิดใช้งานและรีสตาร์ท Apache2 เพื่อรีสตาร์ทเสมอเมื่อเซิร์ฟเวอร์บูทขึ้น
sudo systemctl หยุด apache2.service
sudo systemctl เริ่ม apache2.service
sudo systemctl เปิดใช้งาน apache2.service
sudo systemctl รีสตาร์ท apache2.service
{{_LINE_31_}}
คุณสามารถดูสถานะเว็บเซิร์ฟเวอร์โดยใช้คำสั่งต่อไปนี้:
สถานะ sudo systemctl apache2.service
{{_LINE_34_}}
หากต้องการตรวจสอบการตั้งค่า Apache2 ให้เปิดเบราว์เซอร์และเรียกดูชื่อโฮสต์เซิร์ฟเวอร์หรือที่อยู่ IP ของระบบของคุณและคุณควรเห็นหน้าทดสอบเริ่มต้นของ Apache2 ดังที่แสดงด้านล่าง เมื่อคุณเห็นสิ่งนั้น Apache2 จะทำงานตามที่คาดไว้ http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="ติดตั้งและกำหนดค่าพร็อกซีของ Apache Reverse Proxy สำหรับ Ubuntu">}}


## ขั้นตอนที่ 2: กำหนดค่า apache2 เป็น proxy reverse
Apache2 ได้รับการติดตั้งเรียบร้อยแล้วและพร้อมใช้งาน ตอนนี้คุณสามารถกำหนดค่า Apache2 ให้ทำงานเป็น Apache2 Reverse Proxy Ubuntu Apache2 Proxy Module  **proxypass** และ  **proxypassreverse**  ฟังก์ชั่นให้พร็อกซีย้อนกลับ ในการใช้  **proxypass**  และ **proxypassreverse**  คุณต้องรู้ก่อนว่าคุณต้องการส่งการเข้าชมเว็บไซต์โดยตรง
Apache2 Reverse Proxy Server จะรับฟังการรับส่งข้อมูลทั้งหมดในพอร์ต HTTP เริ่มต้นซึ่งเป็นพอร์ต 80 ในการตั้งค่าอย่างง่าย เซิร์ฟเวอร์แบ็คเอนด์ที่โฮสต์เนื้อหาเว็บไซต์จะฟังบนพอร์ตที่กำหนดเองและเป็นไปได้มากที่สุดพอร์ต 8080
ในบทความบล็อกนี้เราจะตั้งค่า Apache2 เพื่อฟังบนพอร์ต 80 จากนั้นส่งทราฟฟิกไปยังเซิร์ฟเวอร์แบ็คเอนด์ซึ่งฟังพอร์ต 8080 รันคำสั่งด้านล่างเพื่อสร้างไฟล์พร็อกซี VirtualHost ที่เรียกว่า Apache2proxy.conf
sudo nano /etc/apache2/sites-available/apache2proxy.conf
จากนั้นเพิ่มบล็อกของรหัสต่อไปนี้ในไฟล์ apache2proxy.conf จากนั้นบันทึกไว้
{{_LINE_43_}}
        servername example.com
        Serveralias www.example.com
        serveradmin webmaster@example.com
        errorlog $ {apache_log_dir} /error.log
        customlog $ {apache_log_dir} /access.log รวมกัน
        Proxyrequests ปิด
{{_LINE_50_}}
          คำสั่งปฏิเสธอนุญาต
          อนุญาตจากทั้งหมด
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        ProxyPassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          อนุญาตสั่งซื้อปฏิเสธ
          อนุญาตจากทั้งหมด
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
ไฟล์ apache2proxy.conf มีชื่อเซิร์ฟเวอร์ของคุณเช่นเดียวกับ proxy_pass ที่การรับส่งข้อมูลจะถูกกำกับเมื่อได้รับจาก HTTP Proxy Server

## ขั้นตอนที่ 3: เปิดใช้งานพร็อกซี Apache2
ขณะนี้เว็บเซิร์ฟเวอร์ Apache2 ได้รับการติดตั้งและตั้งค่าสำเร็จแล้ว Apache มีโมดูลรวมที่มีอยู่มากมายที่รวมอยู่ในนั้น โมดูลเหล่านี้ไม่ได้เปิดใช้งานในการติดตั้ง Apache2 สด ก่อนอื่นเราจะต้องเปิดใช้งานโมดูลที่เราต้องการเพื่อเปิดใช้งานโมดูล Apache Mod_Proxy ที่ต้องการและโมดูล Add-On หลายตัวเพื่อรองรับโปรโตคอลเครือข่ายที่แตกต่างกัน เรียกใช้คำสั่งด้านล่างที่ระบุไว้เพื่อเปิดใช้งานโมดูลพร็อกซี HTTP
sudo a2enmod พร็อกซี
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
ตอนนี้เปิดใช้งานไซต์ VirtualHost และรีสตาร์ท Apache2 เพื่อเปิดใช้งานการโหลดการกำหนดค่าโมดูล Apache2 ใหม่
sudo a2ensite apache2proxy.conf
sudo systemctl รีสตาร์ท apache2.service
เรียกใช้เว็บเบราว์เซอร์ที่คุณเลือกและนำทางไปยังชื่อโฮสต์เซิร์ฟเวอร์ของคุณเช่น example.com ตอนนี้คุณจะได้รับพร็อกซีเซิร์ฟเวอร์ Apache2 ของคุณบนพอร์ตเริ่มต้นเช่น 8080

## ขั้นตอนที่ 4: เปิดใช้งาน SSL {#block-07b86d83-dca0-4924-b991-206719c342eb}

หากคุณต้องการเปิดใช้งานโมดูล Apache Reverse Proxy SSL จากนั้นเรียกใช้คำสั่งด้านล่างเพื่อเปิดใช้งาน Apache Reverse Proxy Https Proxy Pass:
sudo a2enmod ssl
สิ่งนี้จะให้พร็อกซี apache ย้อนกลับที่ปลอดภัย HTTP ไปยัง HTTPS รองรับเซิร์ฟเวอร์แบ็กเอนด์

## ขั้นตอนที่ 5: รีสตาร์ท Apache2 {#block-836bb4ff-17ad-4317-8ecb-153104bd28a7}

เพื่อให้การเปลี่ยนแปลงเหล่านี้มีผลให้รีสตาร์ท Apache โดยเรียกใช้คำสั่งด้านล่าง:
sudo systemctl รีสตาร์ท apache2.service
ยินดีด้วย! คุณได้ติดตั้งและกำหนดค่า Apache2 Reverse Proxy ได้สำเร็จในระบบ Linux ของคุณ

##  **บทสรุป:**   {#4a1a}

ในบทช่วยสอนนี้เราสำรวจและพูดคุยกันว่าพร็อกซีเซิร์ฟเวอร์คืออะไรและ Apache Reverse Proxy ตัวอย่างการกำหนดค่าทีละขั้นตอน นอกจากนี้เรายังได้เรียนรู้วิธีการตั้งค่าและกำหนดค่า Apache2 เป็นพร็อกซีย้อนกลับในระบบ Linux ในบทช่วยสอนที่กำลังจะมาถึงเราจะพูดถึงหัวข้อที่น่าสนใจเพิ่มเติมเกี่ยวกับ Apache และโซลูชันเว็บเซิร์ฟเวอร์อื่น ๆ

## สำรวจ
คุณอาจชอบบทความที่เกี่ยวข้องเพิ่มเติมด้านล่าง:
  * [วิธีการ][1][ติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย nginx บน ubuntu][2]
  * [วิธีการตั้งค่า nginx กับผู้โดยสารบนเซิร์ฟเวอร์การผลิต AWS][3]
  * [กำหนดค่าการสนับสนุน HTTP/2 ใน Nginx บน Ubuntu/Debian][4]
  * [ปลอดภัยและเข้ารหัส nginx ด้วยการเข้ารหัส Let's Encrypt บน Ubuntu 20.04][5]
  * [วิธีการติดตั้งและกำหนดค่า owncloud ด้วย apache บน ubuntu][6]



 [1]: https://blog.containerize.com/web-server-solution-stack/th/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
 [6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
