---
title: "วิธีกำหนดค่าแอปพลิเคชันหลายผู้เช่าใน phplist" 
seoTitle: "วิธีกำหนดค่าแอปพลิเคชันหลายผู้เช่าใน phplist" 
description: "PHPLIST เป็นซอฟต์แวร์จดหมายข่าวฟรีและโอเพ่นซอร์ส กำหนดค่าแอปพลิเคชันหลายผู้เช่าและเรียกใช้หลายอินสแตนซ์ของแอปพลิเคชันในสภาพแวดล้อมที่ใช้ร่วมกัน" 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "การสอนเพื่อพัฒนาแอพพลิเคชั่นผู้เช่าหลายคนใน PHPLIST คุณสมบัติผู้เช่าหลายคนใช้การติดตั้งเดียวสำหรับโฮสต์หลายตัวเพื่อลดต้นทุนการโฮสต์" 
url: /th/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## บทช่วยสอนเพื่อพัฒนาแอปพลิเคชันผู้เช่าหลายคนใน PHPLIST คุณสมบัติผู้เช่าหลายคนใช้การติดตั้งเดียวสำหรับโฮสต์หลายตัวเพื่อลดต้นทุนการโฮสต์

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="แอปพลิเคชันหลายผู้เช่า phplist">}}

ในบทความนี้เราจะครอบคลุม **อะไรคือผู้เช่าหลายคน**และวิธีที่เราสามารถกำหนดค่าแอปพลิเคชัน**ผู้เช่าหลายคน** ใน phplist

## phplist คืออะไร?
เมื่อตัดสินใจใช้กลยุทธ์การตลาดการตลาดผ่านอีเมลเป็นส่วนสำคัญของ บริษัท ดิจิตอลออนไลน์ทุกแห่ง PHPLIST ช่วยให้ธุรกิจสามารถเข้าถึงผู้ชมจำนวนมาก PHPLIST ใช้กันอย่างแพร่หลาย **ซอฟต์แวร์จดหมายข่าวโอเพนซอร์ส** สำหรับการจัดการรายการและการส่งจดหมายข่าว ช่วยให้ บริษัท ต่างๆสามารถสร้างกำหนดเวลาส่งและวิเคราะห์แคมเปญจดหมายข่าว PHPLIST สนับสนุนคุณสมบัติต่าง ๆ เช่นการวิเคราะห์การแบ่งส่วนการประมวลผลตีกลับปลั๊กอิน API และอื่น ๆ อีกมากมาย

## ผู้เช่าหลายคนคืออะไร?
การเช่าหลายครั้งเป็นสถาปัตยกรรมที่ลูกค้า/ไซต์จำนวนมากแสดงด้วยอินสแตนซ์เดียวของแอปพลิเคชันซอฟต์แวร์ ในการเช่าหลายครั้งเว็บไซต์ถือเป็นผู้เช่า ผู้เช่าทุกคนมีคุณสมบัติเฉพาะเช่นการกำหนดค่าธีม SMTP
แง่มุมที่สำคัญของคลาวด์คอมพิวติ้งคือการเช่าหลายครั้ง สถาปัตยกรรมผู้เช่า****ช่วยให้ธุรกิจต่างๆได้รับ ROI ที่ดีขึ้นโดยลดค่าใช้จ่ายในการบำรุงรักษาและการอัปเดตผู้เช่าที่รวดเร็ว นอกจากนี้แอพพลิเคชั่นที่ออกแบบมาบนสถาปัตยกรรมของผู้เช่าหลายรายสามารถปรับขนาดได้อย่างง่ายดาย
เราสามารถใช้การเช่าได้หลายครั้งโดยใช้วิธีการต่อไปนี้
  * ฐานข้อมูลที่ใช้ร่วมกันสำหรับผู้เช่าทั้งหมด
  * ฐานข้อมูลแยกต่างหากสำหรับผู้เช่าทุกคน
เราจะใช้ฐานข้อมูลแยกต่างหากสำหรับวิธีการของผู้เช่าทุกวิธีในการใช้งานหลายผู้เช่าใน PHPLIST
  * [Handle Request Flow][1]
  * [ฐานข้อมูลการตั้งค่าสำหรับผู้เช่า][2]
  * [กำหนดค่า nginx สำหรับผู้เช่า][3]

## จัดการกระแสการร้องขอ {#request}

  * ใช้การสำรองข้อมูลไฟล์ config.php ของคุณและคุณสามารถค้นหาได้ภายใต้ไดเรกทอรี config
  * สร้างไฟล์ config.php ใหม่และเพิ่มรหัสต่อไปนี้ในไฟล์สำหรับการจัดการไซต์/ผู้เช่า
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
แทนที่ Example.com ด้วยชื่อโดเมนของคุณ คุณต้องสร้างไฟล์กำหนดค่าสำหรับผู้เช่าทุกคน คัดลอกไฟล์สำรองของ config.php และบันทึกด้วยชื่อใหม่เช่น config.example.com.php

## ฐานข้อมูลการตั้งค่าสำหรับผู้เช่า {#database}

  * ใช้การสำรองข้อมูลของฐานข้อมูล phplist ที่มีอยู่ ใช้เพื่อสร้างฐานข้อมูลสำหรับผู้เช่ารายใหม่
  * เปิดไฟล์ config.example.com.php เปลี่ยนข้อมูลรับรองฐานข้อมูลและการตั้งค่าอื่น ๆ ตามสภาพแวดล้อมของคุณ

## กำหนดค่า nginx สำหรับผู้เช่า {#Nginx}

* ไปที่ไดเรกทอรี nginx **cd/etc/nginx/sites- พร้อมใช้งาน** 
  * คัดลอกไฟล์ config.php เริ่มต้นและบันทึกด้วยชื่อไซต์ของคุณเช่น example.com
* เปิดการกำหนดค่า example.com ด้วย **sudo nano example.com** 
  * เปลี่ยนเส้นทางรูทเซิร์ฟเวอร์ _name และการตั้งค่าอื่น ๆ
* ทดสอบการกำหนดค่าด้วย **sudo nginx -t** 
* ในที่สุดให้สร้าง Symlink โดยดำเนินการ **sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/sites-enabled/** 
* รีสตาร์ทเว็บเซิร์ฟเวอร์ Nginx โดยเรียกใช้ **sudo systemctl รีสตาร์ท nginx** ดังนั้นจึงสามารถโหลดไฟล์การกำหนดค่าที่สร้างขึ้นใหม่

## บทสรุป
ซอฟต์แวร์การเช่าหลายครั้งมีข้อได้เปรียบบางประการเมื่อเปรียบเทียบกับแอปพลิเคชันผู้เช่ารายเดียวเช่นลดต้นทุนการบำรุงรักษาการใช้ทรัพยากรที่มีประสิทธิภาพและติดตั้งการอัปเดตได้ง่าย หากคุณกำลังจะสร้างซอฟต์แวร์ SaaS (ซอฟต์แวร์เป็นบริการ) คุณสามารถติดตามสถาปัตยกรรมที่มีผู้เช่าหลายรายและเพลิดเพลินไปกับพลังที่แท้จริง

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [PHPLIST - จดหมายข่าวโอเพ่นซอร์สและซอฟต์แวร์การตลาดผ่านอีเมล][4]
  * [วิธีการสร้างและส่งจดหมายข่าวโดยใช้ phplist][5]
  * [วิธีการตั้งค่าและกระบวนการตีกลับใน phplist][6]
  * [คู่มือเริ่มต้นเพื่อพัฒนาปลั๊กอิน phplist][7]
  * [การตั้งค่าการจัดการตีกลับขั้นสูงและกฎตีกลับใน phplist][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/