---
title: "วิธีการติดตั้งแพลตฟอร์มการแชร์และซิงค์ไฟล์ pydio บน Ubuntu" 
seoTitle: "วิธีการติดตั้งแพลตฟอร์มการแชร์และซิงค์ไฟล์ pydio บน Ubuntu" 
description: "Pydio เป็นการแชร์ไฟล์โอเพนซอร์สและซอฟต์แวร์การแบ่งปันเอกสารร่วมกันที่โฮสต์ด้วยตนเอง ลองตรวจสอบวิธีการติดตั้งเครื่องมือการแชร์และซิงค์ไฟล์ Pydio" 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio เป็นแพลตฟอร์มการแชร์และซิงค์ไฟล์บนคลาวด์เพื่อเข้าถึงข้อมูลทั้งหมดทุกที่และบนอุปกรณ์ใด ๆ บทช่วยสอนนี้เกี่ยวกับวิธีการติดตั้ง pydio บน Ubuntu" 
url: /th/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio เป็นแพลตฟอร์มการแชร์และซิงค์ไฟล์บนคลาวด์เพื่อเข้าถึงข้อมูลทั้งหมดทุกที่และบนอุปกรณ์ใด ๆ บทช่วยสอนนี้เกี่ยวกับวิธีการติดตั้ง pydio บน Ubuntu

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="วิธีการติดตั้งแพลตฟอร์มการแชร์และซิงค์ไฟล์ pydio บน Ubuntu">}}


## **ภาพรวม** 
Pydio Cells เป็นซอฟต์แวร์การแชร์ไฟล์และการซิงโครไนซ์โอเพนซอร์ส มันให้จุดเดียวในการเข้าถึงการจัดเก็บข้อมูลทั้งหมดของคุณและเป็นทางเลือกสำหรับ OwnCloud และ NextCloud ที่ให้บริการจัดเก็บข้อมูลการแชร์ไฟล์และการซิงค์ PYDIO เป็นแพลตฟอร์มการแชร์ไฟล์โอเพ่นซอร์สขององค์กรคล้ายกับ Dropbox และแพลตฟอร์มที่เก็บข้อมูลอื่น ๆ ช่วยให้คุณเชื่อมต่อไฟล์และอุปกรณ์ทั้งหมดของคุณอย่างปลอดภัยในแพลตฟอร์มเดียว
Pydio Cells เป็นแพลตฟอร์มการซิงค์ไฟล์และการทำงานร่วมกันบนคลาวด์ ซอฟต์แวร์โอเพ่นซอร์สนี้ทำงานบนโครงสร้างพื้นฐานด้านไอทีส่วนตัวของคุณและช่วยให้พนักงานของคุณปกป้องและตรวจสอบข้อมูลธุรกิจของคุณ คุณสามารถซิงโครไนซ์ข้อมูลของคุณและเข้าถึงได้จากทุกที่โดยใช้แอพมือถือซอฟต์แวร์เดสก์ท็อปหรือเว็บเบราว์เซอร์โดยใช้เซลล์ Pydio แอพการแชร์ไฟล์ที่ดีที่สุดของเซลล์ PYDIO นั้นขึ้นอยู่กับสถาปัตยกรรมบริการขนาดเล็กและเขียนขึ้นโดยใช้ภาษาการเขียนโปรแกรม Golang
บทช่วยสอนนี้จะช่วยให้คุณติดตั้งและกำหนดค่าซอฟต์แวร์การแชร์ไฟล์และแพลตฟอร์มซิงค์ของ Pydio Host File บนระบบ Ubuntu LTS
  * เริ่มต้นใช้งาน
  * ติดตั้งเซิร์ฟเวอร์หลอดไฟ
  * ติดตั้ง pydio บน ubuntu
  * สร้างฐานข้อมูล Pydio และผู้ใช้
  * เข้าถึง Pydio บนเบราว์เซอร์ของคุณ
  * บทสรุป

## ขั้นตอนที่ 1: เริ่มต้นใช้งาน
ก่อนการติดตั้งคุณต้องตรวจสอบให้แน่ใจว่าระบบของคุณกำลังใช้แพ็คเกจล่าสุด ใช้คำสั่งด้านล่างเพื่ออัปเดตเซิร์ฟเวอร์ Ubuntu 20.04 ของคุณ
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
หลังจากอัปเดตขอแนะนำให้รีบูตเซิร์ฟเวอร์ของคุณสำหรับการเปลี่ยนแปลงใหม่เพื่อให้เกิดผล
```
sudo reboot
```

## ขั้นตอนที่ 2: ติดตั้งเซิร์ฟเวอร์หลอดไฟ
ในการตั้งค่าเซิร์ฟเวอร์การแชร์ไฟล์ Pydio Secure Enterprise และวิธีการสร้างคลาวด์ส่วนตัวโอเพ่นซอร์สเราต้องตั้งค่าเซิร์ฟเวอร์ Lamp ที่ทำงานอยู่ก่อน หากคุณได้ติดตั้งและใช้งานสแต็กหลอดไฟให้ข้ามขั้นตอนนี้ใช้คำสั่งต่อไปนี้เพื่อตั้งค่าหลอดไฟบนระบบ Ubuntu ของคุณ

### ติดตั้ง PHP
คุณสามารถติดตั้ง PHP บนระบบ Ubuntu หรือ Debian ของคุณได้โดยเรียกใช้คำสั่ง:
sudo apt-get ติดตั้ง python-software-preperties
Sudo Add-Apt-repository PPA: ondrej/php
sudo apt-get ติดตั้ง -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

### ติดตั้ง apache2
Apache เป็นซอฟต์แวร์เว็บเซิร์ฟเวอร์โอเพนซอร์ซที่ใช้กันอย่างแพร่หลาย ถัดไปติดตั้ง Apache Web Server บน Ubuntu โดยเรียกใช้:
sudo apt-get ติดตั้ง -y apache2 libapache2-mod-php
{{_LINE_38_}}

### ติดตั้ง mysql
ระบบการจัดการฐานข้อมูลเชิงสัมพันธ์ของ MySQL Open-Source เป็นส่วนประกอบของซอฟต์แวร์แอปพลิเคชันเว็บแอปพลิเคชัน LAMP และอื่น ๆ ตอนนี้การติดตั้ง MySQL บน Ubuntu โดยทำงานด้านล่าง:
sudo apt-get ติดตั้ง -y mysql-server php-mysql
{{_LINE_42_}}
เมื่อการติดตั้งเสร็จสมบูรณ์ให้เปิด **php.ini**  ไฟล์กำหนดค่าเพื่อแก้ไข ใช้ตัวแก้ไขไฟล์ที่คุณต้องการ
ทำการเปลี่ยนแปลงไฟล์ php.ini ดังต่อไปนี้ เปิดสองไฟล์และทำการเปลี่ยนแปลงตามที่แสดง
```
sudo vim /etc/php/7.4/apache2/php.ini
```
ทำการเปลี่ยนแปลงต่อไปนี้
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
บันทึกและปิดไฟล์และดำเนินการแก้ไขไฟล์ php.ini อื่น ๆ
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## ขั้นตอนที่ 3: ติดตั้ง pydio บน ubuntu
ก่อนอื่นคุณต้องเพิ่มที่เก็บซอฟต์แวร์การแชร์ไฟล์ฟรีที่ดีที่สุดของ PYDIO ลงในเซิร์ฟเวอร์ Ubuntu 20.04 ของคุณเนื่องจากยังไม่พร้อมใช้งาน นอกจากนี้ยังเพิ่มระบบการแบ่งปันไฟล์ที่ดีที่สุดของ PYDIO สำหรับคีย์สาธารณะทางธุรกิจและดำเนินการต่อเพื่ออัปเดตที่เก็บระบบของคุณ
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
ถึงเวลาแล้วที่จะติดตั้ง Pydio EFSS และซอฟต์แวร์การแชร์เอกสาร เรียกใช้คำสั่งดังที่แสดง
```
sudo apt install -y pydio pydio-all
```
เปิดใช้งานโมดูล Apache rewrite โดยใช้คำสั่งที่แสดงด้านล่างและรีสตาร์ทและเปิดใช้งาน Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
ยืนยันว่าบริการ Apache กำลังทำงานโดยใช้คำสั่งด้านล่าง:
```
sudo systemctl status apache2
```
เอาต์พุตควรเป็นไปตามที่แสดงหากการติดตั้งดำเนินการอย่างถูกต้องแสดงว่าบริการ Apache2 กำลังทำงานอยู่

## ขั้นตอนที่ 4: สร้างฐานข้อมูล Pydio และผู้ใช้
หลังจากแยกรหัสแล้วให้สร้างฐานข้อมูล MySQL และบัญชีผู้ใช้สำหรับการกำหนดค่า PYDIO ใช้ชุดคำสั่งต่อไปนี้เพื่อเข้าสู่ระบบ MySQL Server เพื่อสร้างฐานข้อมูล AjaxPlorer Sharesync หรือ Pydio และผู้ใช้
mysql -u root -p
ใส่รหัสผ่าน:
mysql> สร้างฐานข้อมูล pydio;
mysql> ให้ทั้งหมดบน pydio.* ถึง 'pydio'@'localhost' ที่ระบุโดย '_password_';
mysql> privileges ล้าง;
mysql> เลิก
{{_LINE_69_}}
ต่อไปเราต้องติดตั้ง Pydio บน Ubuntu จากเว็บอินเตอร์เฟสเพื่อสร้างคลาวด์ส่วนตัว

## ขั้นตอนที่ 5: เข้าถึง Pydio บนเบราว์เซอร์ของคุณ
เปิดเบราว์เซอร์ของคุณและพิมพ์ URL _http: /// pydio_ คุณควรดูหน้าดังที่แสดง
ตอนนี้ซอฟต์แวร์การแชร์ไฟล์คลาวด์ส่วนตัวและซอฟต์แวร์การแชร์ไฟล์ธุรกิจได้รับการติดตั้งและกำหนดค่าแล้วถึงเวลาที่จะเข้าถึงเว็บอินเตอร์เฟสของพวกเขา
เปิดเบราว์เซอร์ของคุณและพิมพ์ URL http: // ของคุณเซิร์ฟเวอร์ -IP / PYDIO คุณจะถูกเปลี่ยนเส้นทางไปยังหน้าต่อไปนี้:

{{< figure align=center src="images/Pydio-Installer.png" alt="ตัวติดตั้ง Pydio">}}

ยืนยันการควบคุมทั้งหมดและคลิกปุ่ม **ต่อไปที่ปุ่มการติดตั้ง Pydio**  คุณควรดูหน้าต่อไปนี้:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="ตัวช่วยสร้างการตั้งค่า Pydio">}}

เลือกภาษาของคุณและคลิก **เริ่มต้นวิซาร์ด**  คุณควรดูหน้าต่อไปนี้:

{{< figure align=center src="images/Starting-the-setting.png" alt="เริ่มการตั้งค่า Pydio">}}

ป้อนชื่อโปรแกรมและข้อความต้อนรับ จากนั้นคลิกปุ่ม **ถัดไป**  คุณควรดูหน้าต่อไปนี้:

{{< figure align=center src="images/Enter-the-application-name.png" alt="ป้อนแอปพลิเคชัน Pydio">}}

จากนั้นป้อนบัญชีผู้ดูแลระบบของคุณและคลิกปุ่ม **ถัดไป**  คุณควรดูหน้าต่อไปนี้:

{{< figure align=center src="images/MySQL-database-settings.png" alt="การตั้งค่าฐานข้อมูล MySQL">}}

จากนั้นป้อนรายละเอียดฐานข้อมูลของคุณเช่นชื่อฐานข้อมูลชื่อผู้ใช้และรหัสผ่าน จากนั้นคลิกปุ่มการเชื่อมต่อ DB ทดสอบ  ****  คุณควรดูหน้าต่อไปนี้:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="ตัวเลือกขั้นสูงของ Pydio">}}

จากนั้นคลิกปุ่ม **ติดตั้งปุ่ม Pydio**  เมื่อการติดตั้งเสร็จสมบูรณ์แล้ว คุณจะถูกเปลี่ยนเส้นทางไปยังหน้าต่อไปนี้:

{{< figure align=center src="images/Pydio-Login.png" alt="ล็อกอิน Pydio">}}

จากนั้นป้อนชื่อผู้ใช้และรหัสผ่านของคุณสำหรับผู้ดูแลระบบ จากนั้นคลิกปุ่ม [Enter] คุณควรดูหน้าต่อไปนี้:

ใช่! มันจบแล้ว. ตอนนี้คุณรู้วิธีการติดตั้งไฟล์ซิงค์ไฟล์โฮสต์ Pydio อย่างสมบูรณ์และซอฟต์แวร์การแชร์ไฟล์โอเพ่นซอร์สบน Ubuntu สำหรับการสร้างคลาวด์ส่วนตัวทีละขั้นตอนคล้ายกับ Dropbox หรือ Google Drive

## **บทสรุป:**    {#4a1a}
ในบทช่วยสอนนี้คุณได้ติดตั้ง PYDIO Cells Open Open Secure File ที่แชร์การแชร์ไฟล์ที่ปลอดภัยในระบบ Ubuntu ของคุณได้สำเร็จ คุณสามารถใช้บทความนี้เพื่อสร้างโครงสร้างพื้นฐานคลาวด์สำหรับการจัดเก็บการรักษาความปลอดภัยและการแชร์ไฟล์ของคุณในคลาวด์ที่โฮสต์ตนเอง ใช้การแบ่งปันเอกสารการทำงานร่วมกันของ PYDIO และแอพแชร์ไฟล์ฟรีที่ดีที่สุดเพื่อควบคุมข้อมูลของคุณมากขึ้นและสร้างความมั่นใจในการทำงานร่วมกันที่มีประสิทธิภาพในองค์กรธุรกิจของคุณ ในบทช่วยสอนที่กำลังจะมาถึงเราจะหารือเกี่ยวกับหัวข้อที่น่าสนใจมากขึ้นของโซลูชันการจัดเก็บคลาวด์โอเพ่นซอร์สและเครื่องมือการทำงานร่วมกันในการแชร์ไฟล์
_your สามารถเข้าร่วมกับเราได้ที่ [Twitter][1], [LinkedIn][2] และหน้า [Facebook][3] ของเรา คุณใช้แพลตฟอร์มการแชร์บนคลาวด์แบบใดที่คุณใช้ออนไลน์? หากคุณมีคำถามใด ๆ โปรด _ [ติดต่อกลับ][4]

## สำรวจ:
นอกจากนี้เรายังมีบทความอื่น ๆ อีกมากมายที่เกี่ยวข้องกับการจัดการเซิร์ฟเวอร์ประจำวันของคุณ
  * [วิธีกำหนดค่า Apache เป็นพร็อกซีย้อนกลับสำหรับ Ubuntu/Debian][5]
  * [วิธีการติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย nginx บน ubuntu][6]
  * [ปลอดภัยและเข้ารหัส nginx ด้วยการเข้ารหัส Let's Encrypt บน Ubuntu 20.04][7]
  * [กำหนดค่าการสนับสนุน HTTP/2 ใน Nginx บน Ubuntu/Debian][8]
  * [การตั้งค่า nginx กับผู้โดยสารบนเซิร์ฟเวอร์การผลิต AWS][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
