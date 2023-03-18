---
title: "วิธีการติดตั้ง NextCloud ด้วย Apache บนเซิร์ฟเวอร์ Ubuntu" 
seoTitle: "วิธีการติดตั้ง NextCloud ด้วย Apache บนเซิร์ฟเวอร์ Ubuntu" 
description: "NextCloud เป็นโซลูชันการจัดเก็บคลาวด์ที่โฮสต์ด้วยตนเองโอเพนซอร์สที่เขียนใน PHP บทความนี้จะแสดงวิธีการติดตั้ง NextCloud ด้วย Apache บน Ubuntu" 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud เป็นซอฟต์แวร์การซิงโครไนซ์โอเพนซอร์สและซอฟต์แวร์การทำงานร่วมกัน บทช่วยสอนนี้จะแสดงวิธีการติดตั้ง NextCloud ด้วย Apache บน Ubuntu" 
url: /th/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud เป็นซอฟต์แวร์การซิงโครไนซ์โอเพนซอร์สและซอฟต์แวร์การทำงานร่วมกัน บทช่วยสอนนี้จะแสดงวิธีการติดตั้ง NextCloud ด้วย Apache บน Ubuntu

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="วิธีการติดตั้ง NextCloud ด้วย apache บน ubuntn">}}


## ** ภาพรวม **
** [NextCloud] [1] ** เป็นโซลูชันการจัดเก็บคลาวด์ที่โฮสต์ด้วยตนเองฟรี ** ** เขียนด้วยภาษาการเขียนโปรแกรม PHP มันให้การเข้าถึงข้อมูลโดยใช้เว็บอินเตอร์เฟสและใช้งานได้คล้ายกับ Dropbox โซลูชันการจัดเก็บคลาวด์ที่เป็นกรรมสิทธิ์เช่น Dropbox และ Google Drive นั้นสะดวก แต่สามารถใช้ในการรวบรวมข้อมูลส่วนบุคคลได้เนื่องจากไฟล์ของคุณถูกเก็บไว้ในระบบของพวกเขา หากคุณต้องการการซิงโครไนซ์ไฟล์และการแชร์ไฟล์ที่ปลอดภัยปลอดภัยและเป็นไปตามมาตรฐานคุณสามารถสลับไปที่เซิร์ฟเวอร์ NextCloud โอเพ่นซอร์ส การตั้งค่า NextCloud สามารถติดตั้งบนเซิร์ฟเวอร์ส่วนตัวของคุณหรือบนเซิร์ฟเวอร์ส่วนตัวเสมือนจริง
NextCloud Open Source ให้ ** การเข้ารหัสแบบ end-to-end ** หมายถึงไฟล์สามารถเข้ารหัสบนอุปกรณ์ไคลเอนต์ก่อนที่จะอัปโหลดไปยังเซิร์ฟเวอร์ นอกจากนี้ยังสามารถรวมเข้ากับชุดสำนักงานออนไลน์เช่น Collobora, OnlyOffice NextCloud เพื่อให้คุณสามารถสร้างและแก้ไขเอกสาร PPT, PPT, XLS โดยตรงจากไคลเอนต์ NextCloud คุณสามารถแชร์และซิงโครไนซ์หนึ่งไฟล์และโฟลเดอร์บนคอมพิวเตอร์ของคุณด้วยเซิร์ฟเวอร์ NextCloud ของคุณหลังจากดาวน์โหลดไคลเอนต์ NextCloud การดาวน์โหลดเดสก์ท็อป NextCloud และไคลเอนต์มือถือมีตัวเลือกในการซิงค์และแบ่งปันในทุกอุปกรณ์ภายใต้การควบคุมของคุณ วางไฟล์ข้อมูลในไดเรกทอรีที่ใช้ร่วมกันในพื้นที่ของคุณและไฟล์เหล่านั้นจะถูกซิงโครไนซ์กับเซิร์ฟเวอร์และอุปกรณ์อื่น ๆ โดยใช้ไคลเอนต์ซิงค์เดสก์ท็อป NextCloud, แอพ iOS หรืออุปกรณ์ Android
บทช่วยสอนนี้จะช่วยให้คุณติดตั้ง NextCloud บน Ubuntu 20.04 LTS LINUX ระบบปฏิบัติการพร้อม Apache
  *** ติดตั้งข้อกำหนดเบื้องต้น (LAMP Stack) **
  *** ดาวน์โหลด NextCloud Archive บน Ubuntu **
  *** สร้างฐานข้อมูล MySQL **
  *** เรียกใช้ NextCloud Web Installer **
  * **ห่อ**

## ขั้นตอนที่ 1: ติดตั้งข้อกำหนดเบื้องต้น (LAMP STACK)
สิ่งแรกสำหรับการติดตั้ง NextCloud บน Ubuntu คือคุณต้องเรียกใช้เซิร์ฟเวอร์ LAMP ** ** บนระบบ Ubuntu LTS ของคุณ เข้าสู่ระบบระบบของคุณและเข้าถึงหน้าต่างเทอร์มินัล หากคุณมีการเรียกใช้ ** LAMP Stack ** ข้ามขั้นตอนนี้อื่นใช้คำสั่งต่อไปนี้เพื่อติดตั้งการอ้างอิงที่จำเป็น

### ติดตั้ง PHP
เริ่มต้นด้วยการติดตั้งเวอร์ชัน PHP เวอร์ชัน 5.6 หรือสูงกว่าบนเซิร์ฟเวอร์ Ubuntu ของคุณ:
การอัปเดต sudo apt-get
sudo apt-get ติดตั้ง -y php php-gd php-curl php-zip php-xml php-mbstring
คุณสามารถตรวจสอบเวอร์ชัน PHP โดยใช้คำสั่งต่อไปนี้:
php -v
{{_LINE_29_}}

### ติดตั้ง apache2
ถัดไปติดตั้ง Apache ด้วยคำสั่ง:
sudo apt-get ติดตั้ง -y apache2 libapache2-mod-php
sudo systemctl รีสตาร์ท apache2
{{_LINE_34_}}

### ติดตั้ง mysql
ด้วยการพึ่งพาออกนอกเส้นทางขั้นตอนต่อไปที่จะได้รับการดูแลคือการรักษาความปลอดภัยเซิร์ฟเวอร์ฐานข้อมูล MySQL ติดตั้งเซิร์ฟเวอร์ฐานข้อมูล MySQL โดยเรียกใช้:
sudo apt-get ติดตั้ง -y mysql-server php-mysql
{{_LINE_38_}}

## ขั้นตอนที่ 2: ดาวน์โหลด NextCloud Archive บน Ubuntu
ในขณะที่เขียนบทความนี้เวอร์ชันล่าสุด NextCloud คือ 22.0.0Beta5 หลังจากกำหนดค่าเซิร์ฟเวอร์ LAMP ที่ประสบความสำเร็จในระบบของคุณให้ดาวน์โหลด NextCloud จาก [เว็บไซต์ทางการ] [2]
CD /TMP
wget https://download.nextcloud.com/server/releases/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
เมื่อการดาวน์โหลดเซิร์ฟเวอร์ NextCloud เสร็จสมบูรณ์แล้วให้แยกการดาวน์โหลดที่เก็บถาวรภายใต้รูทเอกสารเว็บไซต์และตั้งค่าความเป็นเจ้าของไดเรกทอรี NextCloud เป็น www-data บนไฟล์และไดเรกทอรี
cd/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data nextcloud
sudo chmod -r 755 nextcloud
{{_LINE_49_}}
ตอนนี้ลบไฟล์เก็บถาวรที่ดาวน์โหลดมา
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## ขั้นตอนที่ 3: สร้างฐานข้อมูล MySQL
หลังจากแยกซอร์สโค้ดให้สร้างฐานข้อมูล NextCloud MySQL และบัญชีผู้ใช้สำหรับการกำหนดค่า NextCloud ใช้ชุดคำสั่งต่อไปนี้เพื่อเข้าสู่ระบบ MySQL Server สร้างฐานข้อมูล NextCloud ผู้ใช้และออกจากคอนโซล MySQL
mysql -u root -p
ใส่รหัสผ่าน:
mysql> สร้างฐานข้อมูล NextCloud;
mysql> ให้ทั้งหมดใน nextcloud.* ถึง 'nextcloud'@'localhost' ที่ระบุโดย 'yasir_pa $$ w0rd_';
mysql> privileges ล้าง;
mysql> เลิก
{{_LINE_61_}}

## ขั้นตอนที่ 4: เรียกใช้ NextCloud Web Installer
ณ จุดนี้ NextCloud ติดตั้ง Ubuntu 20.04 สำเร็จและกำหนดค่า ตอนนี้เปิดไดเรกทอรีการกำหนดค่า NextCloud ในเว็บเบราว์เซอร์ด้านล่างและพิมพ์ URL http://your-domain.com เปลี่ยน localhost เป็นที่อยู่ IP เซิร์ฟเวอร์ของคุณหรือชื่อโดเมน คุณจะเห็นหน้าจอต่อไปนี้:
http: // localhost/nextcloud/หรือ http: // your_domain_name/nextcloud/
{{_LINE_65_}}
ป้อนข้อมูลรับรองผู้ดูแลระบบใหม่เพื่อสร้างบัญชีผู้ดูแลระบบและระบุตำแหน่งของโฟลเดอร์ข้อมูล
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="วิธีการติดตั้ง NextCloud ด้วย Apache บนเซิร์ฟเวอร์ Ubuntu Linux">}}

{{_LINE_69_}}
ตอนนี้เลื่อนหน้าของคุณลงและป้อนชื่อฐานข้อมูลชื่อผู้ใช้ฐานข้อมูลรหัสผ่านและคลิกที่ปุ่มการตั้งค่า ** เสร็จสิ้น **
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="วิธีการติดตั้ง NextCloud Ubuntu 20.04 พร้อม Apache">}}

{{_LINE_73_}}
เมื่อการติดตั้งเสร็จสิ้นคุณควรเห็นแผงควบคุมผู้ดูแลระบบ NextCloud ในหน้าจอต่อไปนี้ ที่นี่คุณสามารถสร้างผู้ใช้กลุ่มกำหนดสิทธิ์ ฯลฯ
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="การติดตั้ง NextCloud บน Ubuntu ด้วย apache">}}

{{_LINE_77_}}
ขอแสดงความยินดีคุณมีโซลูชันคลาวด์ในสถานที่ NextCloud ในระบบ Ubuntu LTS ของคุณ ตอนนี้คุณสามารถเริ่มปรับแต่งเซิร์ฟเวอร์คลาวด์ของคุณเพื่อตอบสนองความต้องการของคุณอย่างสมบูรณ์แบบ

## ** ห่อ: ** {#4a1a}
ยินดีด้วย! คุณได้รับการกำหนดค่าและติดตั้ง NextCloud บนเซิร์ฟเวอร์ Ubuntu ด้วย Apache ** แล้วสำเร็จแล้ว คุณได้เรียนรู้วิธีสร้างคลาวด์ส่วนตัว NextCloud Ubuntu Server เป็นแพลตฟอร์มการทำงานร่วมกันที่จัดเก็บข้อมูลคลาวด์ที่น่าทึ่งซึ่งสามารถให้บริการเกี่ยวกับความต้องการที่เก็บข้อมูลคลาวด์ส่วนตัวหรือไฮบริดคลาวด์ของทุกคน ตอนนี้คุณรู้วิธีการติดตั้ง NextCloud บน Ubuntu และข้อมูลของคุณปลอดภัยและปลอดภัยในคลาวด์ที่โฮสต์ตัวเอง ในบทช่วยสอนที่กำลังจะมาถึงเราจะหารือเกี่ยวกับหัวข้อที่น่าสนใจมากขึ้นที่เกี่ยวข้องกับสแต็คโซลูชันเว็บเซิร์ฟเวอร์
_ คุณชอบโซลูชันการจัดเก็บข้อมูลที่โฮสต์ด้วยคลาวด์แบบไหน?. หากคุณมีคำถามใด ๆ โปรด [ติดต่อกลับ] [3] ._

## สำรวจ:
คุณอาจชอบบทความที่เกี่ยวข้องกับการจัดการเซิร์ฟเวอร์ประจำวัน
  * [วิธีการติดตั้งและกำหนดค่า owncloud ด้วย apache บน ubuntu] [4]
  * [วิธีกำหนดค่า Apache เป็นพร็อกซีย้อนกลับสำหรับ Ubuntu หรือ Debian] [5]
  * [ติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย nginx บน ubuntu] [6]
  * [ปลอดภัยและเข้ารหัส nginx ด้วยการเข้ารหัส Let's Encrypt บน Ubuntu 20.04] [7]
  * [กำหนดค่าการสนับสนุน HTTP/2 ใน Nginx บน Ubuntu/Debian] [8]
  * [การตั้งค่า nginx กับผู้โดยสารบนเซิร์ฟเวอร์การผลิต AWS] [9]
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
