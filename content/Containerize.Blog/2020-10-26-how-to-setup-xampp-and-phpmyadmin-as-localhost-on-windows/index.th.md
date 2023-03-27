---
title: "การตั้งค่า XAMPP และ PHPMyadmin เป็น localhost บน windows" 
seoTitle: "การตั้งค่า XAMPP และ PHPMyadmin เป็น localhost บน windows" 
description: "การตั้งค่า XAMPP และ PHPMYADMIN เป็น LocalHost บน Windows สร้างสภาพแวดล้อมการทดสอบท้องถิ่นฟรีและโอเพนซอร์ซเพื่อทดสอบและสร้างเว็บแอพ" 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "ตั้งค่าสภาพแวดล้อมการพัฒนาด้วยโซลูชันเว็บเซิร์ฟเวอร์ฟรีและโอเพ่นซอร์ส Stack (XAMPP) และซอฟต์แวร์การจัดการฐานข้อมูล (PHPMYADMIN)" 
url: /th/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## การตั้งค่าสภาพแวดล้อมการพัฒนาด้วยโซลูชันเว็บเซิร์ฟเวอร์ฟรีและโอเพ่นซอร์ส Stack (XAMPP) และซอฟต์แวร์การจัดการฐานข้อมูล (PHPMYADMIN)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="xampp และ phpmyadmin เป็น localhost">}}

XAMPP และ PHPMYADMIN เป็น LocalHost ให้บริการเซิร์ฟเวอร์ท้องถิ่นสำหรับนักพัฒนาเพื่อทดสอบและสร้างเว็บแอป XAMPP เป็นเซิร์ฟเวอร์ท้องถิ่นที่ติดตั้งบนคอมพิวเตอร์/แล็ปท็อปส่วนบุคคล มันมีสภาพแวดล้อมในท้องถิ่นเพื่อสร้างรันและทดสอบแอปพลิเคชัน PHP ก่อนที่จะปรับใช้กับเซิร์ฟเวอร์สด
เราจะครอบคลุมส่วนต่อไปนี้ในโพสต์บล็อกนี้:
  * [คำอธิบาย][1]
  * [การติดตั้ง XAMPP][2]
  * [แดชบอร์ด phpmyadmin][3]
  * [ความคิดสุดท้าย][4]

## คำอธิบาย: {#description}

XAMPP เป็นโซลูชันโซลูชันเว็บเซิร์ฟเวอร์โอเพ่นซอร์ส มันมี Apache, MySQL, Mariadb, PHP และ Perl XAMPP พร้อมใช้งานสำหรับระบบปฏิบัติการ Windows มันง่ายมากในการติดตั้งและใช้งาน นั่นเป็นเหตุผลว่าทำไมจึงเป็นสภาพแวดล้อมการพัฒนา PHP ที่ได้รับความนิยมมากที่สุด XAMPP และ PHPMYADMIN เป็น LocalHost ให้สภาพแวดล้อมที่สมบูรณ์สำหรับการพัฒนาและการทดสอบเว็บแอป
ตัวอักษรใน XAMPP ยืนสำหรับ:
* **x** -ข้ามแพลตฟอร์ม (รองรับระบบปฏิบัติการหลายระบบรวมถึง Linux, Windows และ Mac OS)
* **a** - Apache http Server
* **m** - mariadb (ฐานข้อมูล)
* **p** - php
* **p** - perl

## การติดตั้ง XAMPP {#xampp}

  * ดาวน์โหลด xampp จาก [ที่นี่][5]

{{< figure align=center src="images/xampp1.png" alt="xampp เป็น localhost">}}

  * ติดตั้งไฟล์ปฏิบัติการ
  * จากนั้นคลิก“ ถัดไป”
  * เลือกส่วนประกอบที่คุณต้องการติดตั้ง

{{< figure align=center src="images/xampp2.png" alt="xampp เป็น localhost ขั้นตอนที่ 2">}}

  * สำหรับเว็บแอพส่วนใหญ่คุณต้องการ _apache_, _mysql_, _php_ และ _phpmyadmin_
  * เลือกไดเรกทอรีการติดตั้งที่คุณต้องการติดตั้ง XAMPP
  * คุณจะแสดงการแจ้งเตือนความปลอดภัยของ Windows คุณต้องตรวจสอบตัวเลือกต่อไปนี้:“ _private เครือข่ายเช่นบ้านหรือเครือข่ายที่ทำงานของฉัน” _
  * ในที่สุดคลิกที่“ เสร็จสิ้น” เพื่อทำการติดตั้งให้เสร็จสมบูรณ์

{{< figure align=center src="images/xampp4.png" alt="xampp เป็น localhost ขั้นตอนที่ 3">}}

  * หลังจากการติดตั้งสำเร็จให้เปิดแผงควบคุม XAMPP
  * เริ่มบริการ“ Apache” และ“ MySQL”

{{< figure align=center src="images/xampp5.png" alt="xampp เป็น localhost ขั้นตอนที่ 4">}}


## แผงหน้าปัด phpmyadmin: {#phpmyadmin}

ในการเข้าถึงแดชบอร์ด phpmyadmin ให้คลิกที่ปุ่ม“ ผู้ดูแลระบบ” ถัดจากบริการ MySQL คุณยังสามารถเข้าถึง phpmyadmin ได้โดยไปที่ http: // localhost/phpmyadmin จากเบราว์เซอร์ของคุณ ที่นี่คุณสามารถสร้างฐานข้อมูล ทำตามขั้นตอนเหล่านี้เพื่อสร้างฐานข้อมูลใหม่
  * จากแดชบอร์ดคลิกที่แท็บ“ ฐานข้อมูล”

{{< figure align=center src="images/db1.png" alt="phpmyadmin ที่ localhost ขั้นตอนที่ 1">}}

  * ป้อนชื่อฐานข้อมูลและคลิกที่ปุ่ม“ สร้าง” สิ่งนี้จะสร้างฐานข้อมูลว่างเปล่าใหม่

{{< figure align=center src="images/db2.png" alt="phpmyadmin ที่ localhost ขั้นตอนที่ 2">}}

  * ถัดไปคุณสามารถสร้างตารางโดยเลือกฐานข้อมูลที่สร้างขึ้นใหม่
  * ป้อนชื่อตารางภายใต้“ สร้างตาราง”

{{< figure align=center src="images/db3-1024x234.png" alt="phpmyadmin ที่ localhost ขั้นตอนที่ 3">}}

  * เลือกจำนวนคอลัมน์
  * จากนั้นคลิกที่ปุ่ม“ ไป”
  * หลังจากนั้นคุณต้องกรอกแบบฟอร์มในหน้าถัดไปเพื่อสร้างตารางให้เสร็จ

{{< figure align=center src="images/db4-1024x564.png" alt="phpmyadmin ที่ localhost ขั้นตอนที่ 4">}}


## ความคิดสุดท้าย: {#final}

การติดตั้ง XAMPP นั้นง่ายและตรงไปตรงมา ใช้เวลาไม่เกิน 15 นาทีในการตั้งค่าเซิร์ฟเวอร์ XAMPP เมื่อติดตั้งแล้วนักพัฒนาสามารถสร้างและทดสอบเว็บแอปที่ใช้ PHP ได้แม้จะไม่มีการเชื่อมต่ออินเทอร์เน็ต แทนที่จะทดสอบโครงการโดยตรงบนเว็บเซิร์ฟเวอร์สดมันง่ายและประหยัดเวลาในการทดสอบในเครื่อง เป็นแพลตฟอร์มที่ยอดเยี่ยมสำหรับผู้เริ่มต้นในการเรียนรู้ทดสอบและขัดทักษะ PHP, Perl และฐานข้อมูลของพวกเขา

## สำรวจ:
[โซลูชันเว็บโอเพ่นซอร์สเซิร์ฟเวอร์สแต็กสำหรับนักพัฒนา PHP & Perl][6]
[ตัวเลือกสแต็กเว็บเซิร์ฟเวอร์โอเพ่นซอร์สที่ดีที่สุด][7]



[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
