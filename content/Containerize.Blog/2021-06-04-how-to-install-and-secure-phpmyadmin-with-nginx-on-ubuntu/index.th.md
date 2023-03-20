---
title: "วิธีการติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย nginx บน ubuntu" 
seoTitle: "วิธีการติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย nginx บน ubuntu" 
description: "PHPMYADMIN เป็นซอฟต์แวร์การจัดการฐานข้อมูลโอเพ่นซอร์สที่เขียนใน PHP เราจะเรียนรู้วิธีการติดตั้ง phpmyadmin ด้วย nginx และจัดการ mysql ผ่าน phpmyadmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PHPMYADMIN เป็นเครื่องมือจัดการฐานข้อมูลเว็บอินเตอร์เฟสแบบโอเพ่นซอร์สที่เขียนใน PHP ในบทช่วยสอนนี้เราจะเรียนรู้วิธีการติดตั้ง phpmyadmin ด้วย Nginx" 
url: /th/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## phpmyadmin เป็นเครื่องมือจัดการฐานข้อมูลเว็บอินเตอร์เฟสแบบโอเพ่นซอร์สที่เขียนใน PHP ในบทช่วยสอนนี้เราจะเรียนรู้วิธีการติดตั้ง phpmyadmin ด้วย Nginx

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="วิธีการติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย nginx บน ubuntu">}}


## ** ภาพรวม **
PHPMYADMIN เป็นเครื่องมือการจัดการฐานข้อมูลฟรีและโอเพ่นซอร์สที่ให้ผู้ใช้เว็บอินเตอร์เฟสเพื่อจัดการเซิร์ฟเวอร์ MySQL หรือ MariADB ผ่านอินเทอร์เฟซที่ใช้งานง่าย นี่เป็นหนึ่งในซอฟต์แวร์ที่ได้รับการสนับสนุนอย่างกว้างขวางซึ่งนำเสนอโดยผู้ให้บริการโฮสติ้งยอดนิยมส่วนใหญ่เพื่อให้ผู้ดูแลเว็บสำหรับการสร้างฐานข้อมูลใน phpMyAdmin และจัดการฐานข้อมูลดำเนินการ SQL-STATETEMS นำเข้าและส่งออกข้อมูลได้อย่างง่ายดาย คุณจะสามารถเข้าถึงฐานข้อมูล MySQL หรือ MariADB ของคุณใน phpmyadmin ด้วย Nginx ผ่านอินเตอร์เฟสเว็บกราฟิกได้อย่างง่ายดายทำงานควบคู่ไปกับสภาพแวดล้อมการพัฒนา PHP
ในคู่มือนี้เราจะอธิบายขั้นตอนการติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย Nginx บน Ubuntu 20.04 คุณจะต้องติดตั้งและกำหนดค่า phpmyadmin บนเซิร์ฟเวอร์ Ubuntu เพื่อให้มันทำงานกับฐานข้อมูลและตาราง MySQL ได้อย่างง่ายดาย ดังนั้นมาเรียนรู้วิธีการติดตั้งและรักษาความปลอดภัย phpmyadmin ด้วย nginx บน Ubuntu 20.04 / 20.10:
  * ข้อกำหนดเบื้องต้น
  * ติดตั้ง phpmyadmin
  * กำหนดค่าฐานข้อมูล
  * สร้างลิงค์สัญลักษณ์
  * การเข้าถึง phpmyadmin
  * สร้าง mysql superuser
  * รักษาความปลอดภัย phpmyadmin
  * บทสรุป

## ขั้นตอนที่ 1: ข้อกำหนดเบื้องต้น {#ID-PREEQURET
ในการทำตามคำแนะนำนี้คุณจะต้องใช้เซิร์ฟเวอร์ Ubuntu 20.04 ที่ทำงานบนคอมพิวเตอร์ในพื้นที่ของคุณหรือบนเซิร์ฟเวอร์ระยะไกลที่มีข้อกำหนดเบื้องต้น
  * คุณควรเข้าถึงเซิร์ฟเวอร์ในฐานะผู้ใช้ที่ไม่ใช่รูตที่มีสิทธิ์ Sudo และเปิดใช้งานไฟร์วอลล์ UFW
  * สันนิษฐานว่าคุณได้ติดตั้ง Nginx, MySQL และ PHP บน Ubuntu แล้ว
  * เนื่องจาก phpmyadmin ใช้ข้อมูลรับรอง MySQL เพื่อตรวจสอบสิทธิ์ดังนั้นคุณควรติดตั้งใบรับรอง SSL/TLS เพื่อเปิดใช้งานการรับส่งข้อมูลที่เข้ารหัสระหว่างเซิร์ฟเวอร์และไคลเอนต์
ด้วยวิธีนี้ให้เริ่มการติดตั้งและรักษาความปลอดภัย phpmyadmin เพื่อเชื่อมต่อกับ MySQL Server เพื่อเข้าถึงฐานข้อมูลผ่านเว็บอินเตอร์เฟส

## ขั้นตอนที่ 2: ติดตั้ง phpmyadmin {#id-1-install-phpmyadmin}
ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งข้อกำหนดเบื้องต้นทั้งหมดในระบบของคุณสำเร็จก่อนที่จะติดตั้ง phpmyadmin บน Ubuntu 20.04 เริ่มต้นด้วยการอัปเดตรายการแพ็คเกจ:
```
sudo apt update 
```
ตอนนี้รันคำสั่งต่อไปนี้สำหรับการติดตั้งแพ็คเกจ phpmyadmin จากที่เก็บ Ubuntu เริ่มต้นบน Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
กด ** y ** และ ** ป้อน ** เมื่อถูกขอให้ดำเนินการต่อ หากคุณได้รับแจ้งให้เลือกเว็บเซิร์ฟเวอร์เนื่องจากไม่มีตัวเลือกสำหรับ ** nginx ** เช่นเดียวกับด้านล่างกดแท็บ ** ** เพื่อเลือกตกลงจากนั้น ** ป้อน ** เพื่อดำเนินการต่อโดยไม่ต้องเลือกเว็บเซิร์ฟเวอร์

{{< figure align=center src="images/mysql-setup.png" alt="ติดตั้งและรักษาความปลอดภัย phpmyadmin สำหรับ nginx บน ubuntu 20.04">}}


## ขั้นตอนที่ 2: กำหนดค่าฐานข้อมูล {#id-1-install-phpmyadmin}
ถัดไปเลือก ** ใช่ ** และกด ** ป้อน ** เพื่อติดตั้งและตั้งค่าฐานข้อมูลโดยใช้เครื่องมือ dbconfig-common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="วิธีกำหนดค่า mysql ด้วย phpmyadmin">}}

รหัสผ่านแอปพลิเคชัน MySQL ใช้ภายในโดย phpMyAdmin เพื่อสื่อสารกับฐานข้อมูล MySQL ป้อนรหัสผ่านใหม่สำหรับ PHPMYADMIN DBMS เพื่อลงทะเบียนเป็นฐานข้อมูลใหม่เลือกตกลงแล้วกด ENTER เพื่อดำเนินการต่อ

{{< figure align=center src="images/phpmyadmin-install3.png" alt="วิธีกำหนดค่า mysql สำหรับ phpmyadmin">}}

คุณจะได้รับแจ้งให้ยืนยันรหัสผ่านป้อนรหัสผ่านเดียวกันเลือก ** ตกลง ** และกด ** ป้อน ** ยินดีด้วย! PHPMYADMIN ได้รับการติดตั้งเรียบร้อยแล้วในระบบของคุณ

## ขั้นตอนที่ 4: สร้างลิงค์สัญลักษณ์ {#id-2-create-symbolic-link}
มีหลายวิธีในการกำหนดค่า Nginx เพื่อให้บริการไฟล์ phpmyadmin หากบล็อกเซิร์ฟเวอร์ของโดเมนของคุณได้รับการตั้งค่าเพื่อให้บริการคำขอ PHP คุณต้องสร้างลิงก์สัญลักษณ์จากไฟล์การติดตั้ง PHPMyAdmin Nginx/USR/Share/PHPMyadmin ไปยังไดเรกทอรีเอกสารโดเมนของคุณ ตำแหน่งเริ่มต้นของรูทเอกสาร Nginx ใน Ubuntu 20.04/20.10 ควรเป็น/var/www/html/และอาจแตกต่างกันไปขึ้นอยู่กับการตั้งค่า INS ของคุณ รูทเอกสารของคุณอาจอยู่ในสถานที่เช่นใน /var/www/example.com/public_html
ต่อไปเราจะสร้างลิงค์สัญลักษณ์จากไดเรกทอรี phpmyadmin/usr/share/phpmyadmin ไปยังรูทเอกสารของคุณ ที่นี่เราจะสมมติว่ารูทเอกสารของเราคือ/var/www/html/และเราจะเพิ่ม phpmyadmin ในตอนท้ายของสิ่งนี้ สิ่งนี้จะช่วยให้เราสามารถเข้าถึง phpmyadmin ได้ที่ url example.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## ขั้นตอนที่ 5: การเข้าถึง phpmyadmin {#id-3-test-phpmyadmin}
ตอนนี้คุณควรจะสามารถเข้าถึงเว็บอินเตอร์เฟส phpmyadmin โดยไปที่ชื่อโฮสต์/โดเมนของเซิร์ฟเวอร์หรือที่อยู่ IP สาธารณะตามด้วย domain.com/phpmyadmin ในเว็บเบราว์เซอร์ที่คุณชื่นชอบ ตัวอย่างเช่น http://example.com/phpmyadmin หรือ http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
ในเซิร์ฟเวอร์ Ubuntu ที่ทำงานด้วย MySQL 5.7 และในภายหลังคุณจะไม่สามารถเข้าสู่ฐานข้อมูล phpmyadmin ฟรีโดยใช้บัญชีรูทเริ่มต้น MySQL และจะได้รับข้อผิดพลาดเช่น _“ การเข้าถึงที่ถูกปฏิเสธสำหรับผู้ใช้ แต่คุณควรสร้างบัญชี Superuser ใหม่สำหรับ phpmyadmin ต่อไปเราจะสร้างบัญชีรูท MySQL เพื่อเข้าสู่ phpmyadmin

## ขั้นตอนที่ 6: สร้าง mysql superuser {#id-4-create-mysql-superuser}
ในเทอร์มินัลเริ่มต้นด้วยการเข้าสู่ MySQL โดยใช้รหัสผ่านรูท MySQL ของคุณซึ่งคุณอาจสร้างรหัสผ่านรูทเมื่อคุณติดตั้งฐานข้อมูล phpmyadmin MySQL เป็นครั้งแรก
```
sudo mysql -u root -p
```
หลังจากเข้าสู่ระบบ MySQL ให้เพิ่ม MySQL Superuser ใหม่ด้วยชื่อผู้ใช้ที่คุณเลือก ในตัวอย่างนี้เราเรียกมันว่ายาซีราดมิน [คลิกที่นี่เพื่อสร้างรหัสผ่านที่แข็งแกร่ง][2] และแทนที่ \ _Password ใหม่ \ _ ที่นี่ด้านล่างด้วย
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
ตอนนี้ให้สิทธิ์พิเศษแก่ผู้ใช้ Yasiradmin ผู้ใช้ใหม่ของเรา
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
ตอนนี้ออกจากเซสชัน MySQL ตอนนี้คุณควรจะสามารถเข้าถึง phpmyadmin โดยใช้ข้อมูลรับรอง Superuser ใหม่นี้

{{< figure align=center src="images/image.png" alt="วิธีเข้าสู่ระบบ phpmyadmin บน Ubuntu 20.04">}}

ขอแนะนำอย่างยิ่งให้คุณตั้งค่าความปลอดภัยเพิ่มเติมสำหรับ phpmyadmin เพื่อรักษาความปลอดภัย phpmyadmin nginx คุณควรจะสามารถเปลี่ยนแปลงและเข้าถึง URL phpmyadmin เป็นสิ่งที่เช่น URL ที่คลุมเครือ

## ขั้นตอนที่ 7: Secure phpmyadmin {#ID-6-secure-phpmyadmin-recommended}
ต่อไปเราต้องการตั้งค่าการรับรองความถูกต้องใน NGINX เพื่อให้เลเยอร์ความปลอดภัยเพิ่มเติม ตอนนี้เราจะติดตั้ง apache2-utils ซึ่งสามารถสร้างไฟล์. htpasswd ที่ทำงานกับทั้งเซิร์ฟเวอร์ Nginx และ Apache2
```
sudo apt install apache2-utils
```
เมื่อติดตั้งแล้วเราสามารถสร้างไฟล์. htpasswd เปลี่ยนชื่อผู้ใช้ที่คุณเลือก [สร้างรหัสผ่าน][3] และทำให้ปลอดภัย
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
ตอนนี้จะมีไฟล์. htpasswd ที่มีชื่อผู้ใช้และรหัสผ่านที่เข้ารหัส คุณสามารถตรวจสอบสิ่งนี้ด้วยคำสั่งด้านล่าง:
```
cat /etc/nginx/.htpasswd
```
คุณควรเห็นบางอย่างเช่นชื่อผู้ใช้: $ APR1SDFSDF4435SDTSKLFWMMG1SFDSDGG4
ตอนนี้เราจำเป็นต้องเพิ่ม 2 คำสั่งลงในไฟล์กำหนดค่า Nginx ของเรา ตำแหน่งของไฟล์ config อาจแตกต่างกันไปขึ้นอยู่กับการติดตั้งของคุณแม้ว่าเส้นทางไฟล์เริ่มต้นมักจะเป็น AT/etc/nginx/sites- พร้อมใช้งาน/เริ่มต้น หากคุณตั้งค่าหลายโดเมนไฟล์กำหนดค่าของคุณอาจอยู่ในที่อื่น ๆ เช่น /etc/nginx/sites-available/example.com
ในตัวอย่างนี้เราจะถือว่าไฟล์กำหนดค่า Nginx เป็น AT/etc/nginx/sites-available/default เปิดไฟล์เพื่อแก้ไข
```
sudo nano /etc/nginx/sites-available/default
```
เลื่อนลงและมองหาบล็อกตำแหน่งและวางในบล็อกใหม่ที่อยู่ใต้พวกเขาด้วยชื่อโฟลเดอร์ phpmyadmin ที่ถูกบดบังของคุณในตัวอย่างนี้ aspose_hidden
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
บันทึกไฟล์และออก (กด Ctrl + X กด Y จากนั้นกด Enter) ตรวจสอบว่าไฟล์กำหนดค่า Nginx นั้นถูกต้องมิฉะนั้นเซิร์ฟเวอร์อาจขัดข้องเมื่อรีสตาร์ทโดยเรียกใช้คำสั่ง
```
sudo nginx -t
```
หากถูกต้องให้โหลด nginx config
```
sudo service nginx reload
```
ตอนนี้เมื่อไปที่ตัวอย่าง com/aspose_hidden คุณควรนำเสนอด้วยหน้าต่างการรับรองความถูกต้อง

{{< figure align=center src="images/auth3.png" alt="วิธีรักษาความปลอดภัย phpmyadmin">}}

คุณทำเสร็จแล้วด้วยการติดตั้ง phpmyadmin บนเซิร์ฟเวอร์ Ubuntu

## บทสรุป: {#id-what-next}
ขอแสดงความยินดีคุณได้ติดตั้ง phpmyadmin สำเร็จด้วย Nginx สำหรับเซิร์ฟเวอร์ Ubuntu 20.04 / 20.10 และตอนนี้สามารถจัดการ MySQL ผ่าน PHPMyadmin ตอนนี้คุณสามารถเริ่มสร้างฐานข้อมูล MySQL ผู้ใช้ตารางดำเนินการค้นหา MYSQL และการดำเนินการอื่น ๆ อีกมากมาย
หากคุณมีคำถามอย่าลังเลที่จะบอกฉันด้านล่างในส่วนความคิดเห็น

## สำรวจ
คุณอาจชอบบทความที่เกี่ยวข้องเพิ่มเติมด้านล่าง:
  * [วิธีกำหนดค่า Apache เป็นพร็อกซีย้อนกลับสำหรับ Ubuntu/Debian][4]
  * [วิธีการรักษาความปลอดภัยและเข้ารหัส nginx ด้วยการเข้ารหัสของ Let's en ubuntu 20.04][5]
  * [วิธีกำหนดค่าการสนับสนุน HTTP/2 ใน Nginx บน Ubuntu/Debian][6]
  * [วิธีการตั้งค่า nginx กับผู้โดยสารบนเซิร์ฟเวอร์การผลิต AWS][7]
  * [วิธีการติดตั้งและกำหนดค่า owncloud ด้วย apache บน ubuntu][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
