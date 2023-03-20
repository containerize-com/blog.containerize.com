---
title: "วิธีการตรวจสอบเว็บแอปพลิเคชันด้วย statping" 
seoTitle: "วิธีการตรวจสอบเว็บแอปพลิเคชันด้วย statping" 
description: "Statping เป็นหนึ่งในเครื่องมือตรวจสอบเว็บไซต์ที่ดีที่สุดที่ช่วยให้คุณสามารถตรวจสอบบริการทั้งหมดได้ แสดงหน้าสถานะที่สวยงามสำหรับบริการแสดงสินค้า" 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "ตรวจสอบเว็บไซต์แอปพลิเคชันเว็บของคุณ API ด้วยเครื่องมือตรวจสอบฟรีและบริการแสดงบริการที่ใช้งานได้พร้อมระบบหน้าสถานะโอเพนซอร์ส" 
url: /th/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## ตรวจสอบเว็บไซต์แอปพลิเคชันเว็บของคุณ API ด้วยเครื่องมือตรวจสอบฟรีและบริการแสดงบริการที่ใช้งานได้พร้อมระบบหน้าสถานะโอเพ่นซอร์ส

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="การตรวจสอบเว็บแอปพลิเคชัน">}}

STATPING เป็นซอฟต์แวร์หน้าสถานะโอเพ่นซอร์ส ** และหนึ่งในเครื่องมือตรวจสอบเว็บไซต์ที่ดีที่สุด ** ** นอกจากนี้ยังใช้สำหรับการตรวจสอบบริการเช่นบริการ HTTP, TCP, UDP, ICMP และ GRPC Statping ดึงข้อมูลบริการตรวจสอบและแสดงสถานะสถานะที่สวยงามโดยอัตโนมัติ มันเป็นข้ามแพลตฟอร์มและคุณสามารถติดตั้งบนระบบปฏิบัติการ Liunx, Mac และ Windows นอกจากนี้ยังอนุญาตให้ใช้ระบบฐานข้อมูล MySQL, Postgres หรือ SQLite สำหรับการจัดเก็บข้อมูล ยิ่งไปกว่านั้นมันมาพร้อมกับแอพพลิเคชั่น Mobile Mobile สำหรับอุปกรณ์ iPhone และ Android
ลองมาดูคุณสมบัติหลักของ statping
  *** การตรวจสอบบริการ ** - STATPING ช่วยให้คุณสามารถติดตามบริการ HTTP, TCP, UDP, GRPC และ ICMP ทั้งหมดได้อย่างง่ายดาย
  *** การแจ้งเตือน **-Statping สนับสนุนแอปพลิเคชันของบุคคลที่สามที่สำคัญส่วนใหญ่สำหรับการรับการแจ้งเตือน
  *** แอพมือถือ ** - ใช้แอพฟรีสำหรับอุปกรณ์ iPhone & Android และจัดการทุกอย่างในระหว่างการเดินทาง
  *** oauth authenticatio ** n - รองรับการรับรองความถูกต้องของ OAuth สำหรับบริการยอดนิยมเช่น GitHub, Google, Slack และผู้ให้บริการ OpenID ที่กำหนดเอง ใช้คุณสมบัตินี้และเพิ่มความปลอดภัย
เราจะครอบคลุมหัวข้อต่อไปนี้ในบทช่วยสอนนี้
  * [การติดตั้งบน Linux][1]
  * [กำหนดค่าบริการ SystemD][2]
  * [สร้างบริการสำหรับการตรวจสอบ][3]
  * [บทสรุป][4]

## การติดตั้งบน linux {#installing}
เรียกใช้คำสั่งด้านล่างสำหรับการติดตั้ง Statping
```
curl -o- -L https://statping.com/install.sh | bash
```

## กำหนดค่าบริการ SystemD {#configure}
การตั้งค่าบริการ SystemD เป็นวิธีที่ยอดเยี่ยมเพื่อให้แน่ใจว่าเซิร์ฟเวอร์ Statping ของคุณสามารถรีบูตได้โดยอัตโนมัติเมื่อจำเป็น หากต้องการสร้างบริการ SystemD ทำตามขั้นตอนด้านล่าง
  * ก่อนอื่นให้เรียกใช้คำสั่งด้านล่างเพื่อสร้างไฟล์ใหม่
```
sudo nano /etc/systemd/system/statping.service
```
  * คัดลอกรหัสด้านล่างและวางไว้ในนั้น
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * สุดท้ายให้ใช้คำสั่งด้านล่างเพื่อเปิดใช้งานและเริ่มบริการ SystemD
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## สร้างบริการสำหรับการตรวจสอบ {#Create}
  * เปิดเบราว์เซอร์ของคุณป้อน URL เพื่อเข้าสู่ระบบเข้าสู่การติดตั้ง Statping ของคุณ
  * คลิกที่ลิงค์บริการในการนำทางด้านบน มันจะแสดงหน้าบริการที่ดูเหมือนด้านล่าง

{{< figure align=center src="images/statping-dashboard.png" alt="รายการการตรวจสอบบริการเว็บ">}}

  * คลิกที่ปุ่มสร้างเพื่อเพิ่มบริการใหม่สำหรับการตรวจสอบ เติมฟิลด์ที่ต้องการเช่นชื่อบริการประเภทบริการตรวจสอบช่วงเวลาการให้บริการ (URL) ฯลฯ

## บทสรุป {#conclusion}
เราเรียนรู้เกี่ยวกับ statping วิธีการติดตั้งบน Linux และวิธีการสร้างบริการ SystemD ในบทช่วยสอนนี้ นอกจากนี้เราได้สร้างบริการใหม่เพื่อตรวจสอบและแนะนำคุณเกี่ยวกับคุณสมบัติที่แตกต่างกัน เราหวังว่าคู่มือนี้จะช่วยคุณในการเริ่มใช้ statping สำหรับการตรวจสอบบริการเว็บ ** ** และ ** เว็บแอปพลิเคชันการตรวจสอบ **
ในที่สุด [** containerize.com **][5] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนโพสต์บล็อกเกี่ยวกับผลิตภัณฑ์โอเพนซอร์สล่าสุดเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่สถานะ [** **][6] หมวดหมู่สำหรับการอัปเดตล่าสุด

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  *[** ซอฟต์แวร์หน้าสถานะโอเพ่นซอร์ส 5 อันดับแรกสำหรับ 2020 **][7]
  *[** statping **][8]
  *[** Cachet **][9]
  *[** Monitoror **][10]
  *[** Staytus **][11]
  *[** upptime **][12]
  *[** Statusfy **][13]

  
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
