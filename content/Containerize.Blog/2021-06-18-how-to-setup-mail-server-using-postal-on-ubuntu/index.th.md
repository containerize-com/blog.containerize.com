---
title: "วิธีการตั้งค่าเซิร์ฟเวอร์เมลโดยใช้ไปรษณีย์บน Ubuntu" 
seoTitle: "วิธีการตั้งค่าเซิร์ฟเวอร์เมลโดยใช้ไปรษณีย์บน Ubuntu" 
description: "ส่งอีเมลจากเว็บแอพของคุณด้วยเซิร์ฟเวอร์โอเพ่นซอร์สเมล Postal ช่วยให้คุณสามารถส่งอีเมลโดยใช้ SMTP & HTTP API และตรวจสอบการรับส่งข้อมูลอีเมลเช่นกัน" 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "ส่งและรับอีเมลด้วยเซิร์ฟเวอร์โอเพ่นซอร์สเมล บทความนี้จะช่วยคุณในการติดตั้งและกำหนดค่าเซิร์ฟเวอร์ไปรษณีย์ไปรษณีย์สำหรับ บริษัท ของคุณ" 
url: /th/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## ส่งและรับอีเมลด้วยเซิร์ฟเวอร์โอเพ่นซอร์สเมล บทความนี้จะช่วยคุณในการติดตั้งและกำหนดค่าเซิร์ฟเวอร์ไปรษณีย์ไปรษณีย์สำหรับ บริษัท ของคุณ

{{< figure align=center src="images/postal-banner.png" alt="เซิร์ฟเวอร์จดหมายโอเพ่นซอร์ส">}}

การส่งอีเมลเกี่ยวกับกิจกรรมประเภทต่าง ๆ เป็นสิ่งจำเป็นสำหรับแอปพลิเคชันที่ทันสมัย ทุกธุรกิจต้องการเซิร์ฟเวอร์เมล ** ที่เชื่อถือได้ ** สำหรับอีเมลขาออก นอกจากนี้ บริษัท ต้องมีเซิร์ฟเวอร์เมลสำหรับการส่งอีเมลจำนวนมากสำหรับแคมเปญการตลาดจดหมายข่าวและงานอื่น ๆ อีกมากมาย มีเซิร์ฟเวอร์จดหมายโอเพ่นซอร์ส ** หลายแห่ง ** พร้อมใช้งานสำหรับสิ่งนี้ อย่างไรก็ตามเราจะหารือเกี่ยวกับเซิร์ฟเวอร์ ** ไปรษณีย์ ** ในรายละเอียดในโพสต์นี้และครอบคลุมหัวข้อต่อไปนี้
  * [เซิร์ฟเวอร์เมลไปรษณีย์คืออะไร] [1]
  * [คุณสมบัติของไปรษณีย์] [2]
  * [การติดตั้งไปรษณีย์] [3]
  * [บทสรุป] [4]

## เซิร์ฟเวอร์เมลไปรษณีย์คืออะไร? {#postal}
[** postal **] [5] เป็นเซิร์ฟเวอร์เมลโอเพ่นซอร์สฟรีและ ** เป็นเซิร์ฟเวอร์เมลที่มีคุณสมบัติเต็มรูปแบบสำหรับเว็บไซต์และเว็บแอปพลิเคชัน Mail Mail Mail เป็นทางเลือกแทนเซิร์ฟเวอร์ Mail ที่ได้รับความนิยมที่มีอยู่ ** เช่น SendGrid และ MailGun ** Postal ** เป็นแพลตฟอร์มการส่งอีเมลโอเพ่นซอร์สที่แข็งแกร่งปลอดภัยและปรับขนาดได้ ซอร์สโค้ดและเอกสารทั้งหมดมีอยู่ที่ [** GitHub **] [6] คุณสามารถดาวน์โหลดติดตั้งบนเซิร์ฟเวอร์ส่วนตัวของคุณและควบคุมได้อย่างเต็มที่ นอกจากนี้คุณยังสามารถปรับปรุงและปรับปรุงตามความต้องการทางธุรกิจ นอกจากนี้ ** Mail Mail Server ** รองรับหลายองค์กร
ผู้ใช้สามารถดูกราฟและสถิติที่แสดงปริมาณของอีเมลขาเข้าและขาออก นอกจากนี้คุณสามารถเข้าถึงคิวข้อความขาออกและขาเข้าเต็มรูปแบบ Mail Mail Mail ให้ฟังก์ชั่นสำหรับ webhooks คุณสามารถตั้งค่า webhooks เพื่อรับข้อมูลสดเกี่ยวกับข้อมูลการจัดส่งแบบเรียลไทม์ นอกจากนี้ยังมีการเก็บรักษาข้อความที่ช่วยให้คุณสามารถจัดเก็บและตรวจสอบการส่งและรับข้อความทั้งหมด การส่งอีเมลเป็นสิ่งสำคัญมากในธุรกิจเพื่อให้แน่ใจว่าผู้ใช้จะได้รับอีเมล อย่างไรก็ตามบางครั้งอีเมลจะส่งมอบให้กับผู้ใช้และคุณต้องตรวจสอบปัญหา เซิร์ฟเวอร์จดหมายที่เข้ามาและขาออก ** ยังมีการบันทึกและเครื่องมือที่สมบูรณ์ในการตรวจสอบ

## คุณสมบัติของไปรษณีย์ {#Features}
Mail Mail Mail มีคุณสมบัติมากมาย อย่างไรก็ตามเราจะหารือเกี่ยวกับคุณสมบัติที่สำคัญต่อไปนี้ในบทความนี้
** การส่งอีเมล **: Mail Mail Mail มีสองเทคนิคสำหรับอีเมลขาออกรวมถึง HTTP API และ SMTP คุณสามารถใช้ HTTP API เพื่อรวมเข้ากับเว็บแอพได้อย่างง่ายดาย คุณยังสามารถใช้เซิร์ฟเวอร์ SMTP สำหรับการรวมเข้ากับแอปพลิเคชันและระบบที่มีอยู่
** อีเมลที่เข้ามา **: ** อีเมลที่เข้ามา ** สามารถส่งต่อไปยังจุดสิ้นสุด HTTP, ** SMTP Server ** และที่อยู่อีเมลอื่น ๆ โดยใช้เซิร์ฟเวอร์เมลไปรษณีย์
** การตรวจสอบสแปมและไวรัส **: Spamassassin และ Clamav สามารถรวมเข้ากับไปรษณีย์เพื่อสแกนข้อความที่เข้ามาและส่งออกโดยอัตโนมัติเมื่อพวกเขาผ่านเซิร์ฟเวอร์เมล คุณลักษณะนี้จะถูกปิดโดยค่าเริ่มต้น
** คลิกและเปิดการติดตาม **: การเปิดอีเมลและการคลิกสามารถติดตามได้ด้วยการไปรษณีย์ Postal จะสแกนข้อความขาออกของคุณและแทนที่ลิงก์ใด ๆ ด้วยลิงก์ใหม่ที่เดินทางผ่านเว็บเซิร์ฟเวอร์ไปรษณีย์ของคุณ เมื่อผู้ใช้คลิกลิงก์ไปรษณีย์จะบันทึกการกระทำและเปลี่ยนเส้นทางไปยัง URL ดั้งเดิมทันที อย่างไรก็ตามสิ่งนี้ไม่ได้เปิดใช้งานโดยค่าเริ่มต้น
** พูล IP **: ไปรษณีย์อนุญาตให้คุณส่งข้อความจากที่อยู่ IP ที่หลากหลาย สิ่งนี้ช่วยให้คุณกำหนดที่อยู่ IP หลายตัวให้กับเซิร์ฟเวอร์เมลที่แตกต่างกันหรือส่งจาก IP ที่แตกต่างกันขึ้นอยู่กับที่อยู่ผู้ส่งหรือผู้รับ

## การติดตั้งไปรษณีย์ {#installation}
ทำตามคำแนะนำทีละขั้นตอนด้านล่างเพื่อติดตั้งซอฟต์แวร์เซิร์ฟเวอร์อีเมล ** บน Ubuntu 18.04
  * ก่อนอื่นคุณต้องเชื่อมต่อเซิร์ฟเวอร์ VIS SSH ของคุณ เรียกใช้คำสั่งต่อไปนี้เพื่ออัปเดตระบบด้วยแพ็คเกจล่าสุดที่มีอยู่
```
sudo apt-get update
```

### ติดตั้งเซิร์ฟเวอร์ฐานข้อมูล Mariadb
  * เรียกใช้คำสั่งเพื่อติดตั้ง Mariadb
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * เมื่อคุณทำการติดตั้งเสร็จแล้ว ตอนนี้คุณต้องรักษาความปลอดภัยโดยเรียกใช้คำสั่งด้านล่าง
```
mysql_secure_installation
```
  * ถัดไปมันจะถามคำถามสองสามข้อตามที่แสดงด้านล่าง คุณต้องตอบคำถามทั้งหมด
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * เชื่อมต่อกับเซิร์ฟเวอร์ Mariadb ด้วยคำสั่งต่อไปนี้
```
mysql -u root -p
```
  * สร้างฐานข้อมูลสำหรับไปรษณีย์
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * ถัดไปสร้างผู้ใช้ฐานข้อมูลที่เรียกว่า "postaluser" ด้วยรหัสผ่านใหม่
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * หลังจากนั้นให้ผู้ใช้เข้าถึงฐานข้อมูล "postaluser" เต็มรูปแบบ
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * ถัดไปล้างสิทธิพิเศษและออกจากเชลล์ Mariadb ด้วยคำสั่งต่อไปนี้
```
FLUSH PRIVILEGES;
EXIT;
```

### ติดตั้งทับทิม
  * ก่อนอื่นเพิ่ม PPA ของบุคคลที่สามเพื่อติดตั้งทับทิม เรียกใช้คำสั่งต่อไปนี้
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * อัปเดตแพ็คเกจ Ubuntu
```
sudo apt update
```
  * ติดตั้งทับทิมโดยเรียกใช้คำสั่งด้านล่าง
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### ติดตั้ง rabbitmq
  * ERLANG จำเป็นต้องติดตั้ง RABBITMQ ดังนั้นคุณต้องติดตั้งด้วย เพิ่มคีย์ที่เก็บ Erlang ลงใน Ubuntu ด้วยคำสั่งด้านล่าง
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * ถัดไปเพิ่มที่เก็บ Erlang ด้วยคำสั่งต่อไปนี้
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * เรียกใช้คำสั่งต่อไปนี้เพื่อติดตั้ง Erlang
```
sudo apt-get update
sudo apt-get install erlang
```
  * เมื่อคุณทำการติดตั้ง Erlang เสร็จแล้วคุณสามารถติดตั้ง RabbitMQ ได้ เพิ่มที่เก็บ RabbitMQ ไปยัง Ubuntu
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * เพิ่มคีย์ RabbitMQ GPG ด้วยคำสั่งต่อไปนี้
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * เรียกใช้คำสั่งด้านล่างเพื่อติดตั้งแพ็คเกจ RabbitMQ
```
sudo apt update
sudo apt install rabbitmq-server
```
  * เรียกใช้คำสั่งด้านล่างเพื่อเปิดใช้งาน RabbitMQ ดังนั้นจึงเริ่มต้นเมื่อระบบบูต
```
sudo systemctl enable rabbitmq-server
```
  * ถัดไปคุณจะต้องสร้าง RabbitMq Vhost และผู้ใช้สำหรับการไปรษณีย์ เรียกใช้คำสั่งต่อไปนี้กับมัน
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### ติดตั้ง nodejs
  * เพิ่มที่เก็บ NodeJS ด้วยคำสั่งต่อไปนี้
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * ถัดไปรันคำสั่งด้านล่างเพื่อติดตั้ง nodejs
```
sudo apt-get install nodejs
```

### ติดตั้งเซิร์ฟเวอร์เมลไปรษณีย์
  * ก่อนอื่นคุณต้องสร้างผู้ใช้สำหรับเซิร์ฟเวอร์เมลไปรษณีย์ สร้างด้วยคำสั่งต่อไปนี้
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * ถัดไปอนุญาตให้ทับทิมฟังบนเว็บพอร์ต
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * ติดตั้งอัญมณีที่ต้องการทั้งหมดด้วยคำสั่งต่อไปนี้
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * สร้างโครงสร้างไดเรกทอรีสำหรับไปรษณีย์
```
sudo mkdir -p /opt/postal/app
```
  * ถัดไปดาวน์โหลด Postal เวอร์ชันล่าสุด
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * แยกไฟล์ที่ดาวน์โหลดด้วยคำสั่งต่อไปนี้
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * ถัดไปเปลี่ยนความเป็นเจ้าของของไดเรกทอรีไปรษณีย์
```
sudo chown -R postal:postal /opt/postal
```
  * สร้าง symlink สำหรับไบนารีไปรษณีย์โดยเรียกใช้คำสั่งด้านล่าง
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * ติดตั้งการพึ่งพาที่ต้องการทั้งหมด
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * เรียกใช้คำสั่งด้านล่างเพื่อเริ่มต้นการกำหนดค่าทางไปรษณีย์
```
sudo postal initialize-config
```
  * ถัดไปรันคำสั่งต่อไปนี้เพื่อเปิดไฟล์การกำหนดค่าไปรษณีย์
```
sudo nano /opt/postal/config/postal.yml
```
  * ทำการเปลี่ยนแปลงที่ระบุเป็นตัวหนาและบันทึกไฟล์
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * เรียกใช้คำสั่งเพื่อเริ่มต้นฐานข้อมูล
```
sudo postal initialize
```
  * สร้างผู้ใช้งานผู้ดูแลระบบสำหรับไปรษณีย์
```
sudo postal make-user
```
  * ถัดไปคุณจะต้องให้รายละเอียดบัญชีผู้ใช้ตามที่แสดงด้านล่าง
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```
  * สุดท้ายให้เรียกใช้คำสั่งต่อไปนี้เพื่อเริ่มต้นและตรวจสอบสถานะของแอปพลิเคชันไปรษณีย์
```
sudo -u postal postal start
sudo -u postal postal status
```

### ติดตั้ง nginx
  * เรียกใช้คำสั่งด้านล่างเพื่อติดตั้งเว็บเซิร์ฟเวอร์ Nginx
```
sudo apt install nginx
```
  * ถัดไปคัดลอก postal nginx config เพื่อใช้เป็นเสมือนโฮสต์
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * สร้างใบรับรอง SSL ที่ลงนามด้วยตนเอง
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * หลังจากนั้นคุณจะต้องตอบคำถาม
  * เปิดไฟล์โฮสต์เสมือนจริงเริ่มต้นของ Nginx
  * เปลี่ยนค่าของ server_name และบันทึกไฟล์
  * ในที่สุดรีสตาร์ทเว็บเซิร์ฟเวอร์ Nginx โดยเรียกใช้คำสั่งด้านล่าง
```
sudo systemctl restart nginx
```
  * ในที่สุดเปิดเบราว์เซอร์ของคุณและพิมพ์ URL https://postal.example.com คุณจะถูกเปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ

## บทสรุป {#conclusion}
เราผ่านการแนะนำและคุณสมบัติหลักของเซิร์ฟเวอร์ไปรษณีย์ไปรษณีย์ในเชิงลึกที่ยอดเยี่ยม นอกจากนี้เรายังได้รวมคำแนะนำทีละขั้นตอนสำหรับการตั้งค่าเอเจนต์การโอนจดหมาย ** นี้ ** นอกจากนี้เรายังได้ให้ข้อมูลเชิงลึกเกี่ยวกับการตั้งค่า การตั้งค่าเซิร์ฟเวอร์เมลไปรษณีย์เป็นกระบวนการที่ง่าย ฉันหวังว่าบทความนี้จะมีประโยชน์ในการตั้งค่าและกำหนดค่าเซิร์ฟเวอร์ไปรษณีย์ไปรษณีย์สำหรับธุรกิจของคุณ
ในที่สุด [** containerize.com **] [7] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนโพสต์บล็อกเกี่ยวกับผลิตภัณฑ์โอเพนซอร์สล่าสุดเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [** transactional email **] [8] สำหรับการอัปเดตล่าสุด

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  *[** ซอฟต์แวร์อีเมลธุรกรรมด้านบน **] [9]
  *[** POTAL - เซิร์ฟเวอร์จดหมายโอเพ่นซอร์ส **] [5]
  *[** 5 ซอฟต์แวร์เซิร์ฟเวอร์โอเพ่นซอร์สเมลที่ดีที่สุดสำหรับธุรกิจในปี 2020 **] [10]
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
