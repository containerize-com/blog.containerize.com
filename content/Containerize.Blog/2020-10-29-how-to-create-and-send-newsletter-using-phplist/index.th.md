---
title: "วิธีการสร้างและส่งจดหมายข่าวโดยใช้ phplist" 
seoTitle: "วิธีการสร้างและส่งจดหมายข่าวโดยใช้ phplist" 
description: "PHPLIST เป็นซอฟต์แวร์จดหมายข่าวโอเพนซอร์สชั้นนำสำหรับการตลาดผ่านอีเมล นี่คือคู่มือผู้เริ่มต้นสำหรับการสร้างและส่งแคมเปญจดหมายข่าว" 
date: Thu, 29 Oct 2020 18:30:18 +0000
author: Masood Anwer
summary: "สร้างและส่งจดหมายข่าวโดยใช้ PHPLIST โอเพ่นซอร์สและเข้าถึงสมาชิกหลายล้านคน ปรับปรุงการมีส่วนร่วมของลูกค้าด้วยการอัปเดตผลิตภัณฑ์โปรโมชั่นและคุณสมบัติใหม่" 
url: /th/how-to-create-and-send-newsletter-using-phplist/
categories: ['Newsletters']
---

## สร้างและส่งจดหมายข่าวโดยใช้ PHPLIST โอเพนซอร์สและเข้าถึงสมาชิกหลายล้านคน ปรับปรุงการมีส่วนร่วมของลูกค้าด้วยการอัปเดตผลิตภัณฑ์โปรโมชั่นและคุณสมบัติใหม่

{{< figure align=center src="images/How-to-send-newsletter-in-phpList.png" alt="สร้างและส่งจดหมายข่าวโดยใช้ phplist">}}

การตลาดเป็นส่วนสำคัญของธุรกิจออนไลน์หรือออฟไลน์ใด ๆ การตลาดผ่านอีเมลเป็นหนึ่งในเครื่องมือที่ง่ายที่สุดสำหรับการตลาดและส่งข้อความถึงผู้ชมจำนวนมาก คุณสามารถส่งอีเมลไปยังสมาชิกสองสามร้อยคนด้วยตนเอง แต่มันยากมากที่จะส่งอีเมลไปยังหลายพันหรือหลายล้านคน ดังนั้นจึงมีเครื่องมือการตลาดผ่านอีเมลโอเพ่นซอร์สจำนวนมากเพื่อให้เป็นไปโดยอัตโนมัติ
PHPLIST เป็นซอฟต์แวร์โอเพ่นซอร์สที่ได้รับความนิยมมากที่สุดสำหรับการจัดการรายการและจดหมายข่าว แคมเปญนี้เป็นองค์ประกอบหลักของ phplist ที่ช่วยให้คุณสามารถส่งข้อความไปยังรายการหนึ่งหรือหลายรายการ คุณสามารถใช้งานได้อย่างง่ายดายสำหรับการออกแบบและส่งแคมเปญไปยังสมาชิกหลายล้านคน PHPLIST มาพร้อมกับชุดคุณสมบัติที่น่าประทับใจเช่นผู้จัดการแคมเปญและรายการปลั๊กอิน REST API และอื่น ๆ อีกมากมาย
ในโพสต์บล็อกนี้เราจะมุ่งเน้นไปที่การออกแบบและส่งแคมเปญอีเมลใน PHPLIST เราจะครอบคลุมหัวข้อต่อไปนี้
  * [สร้างจดหมายข่าว/แคมเปญ][2]
  * [แคมเปญการตั้งเวลา][3]
  * [กำหนดรายการให้กับแคมเปญ][4]
  * [เสร็จสิ้นแคมเปญ][5]
  * [ประมวลผลคิว][6]
  * [บทสรุป][7]

## **สร้างแคมเปญ/จดหมายข่าว**    {#Create}
  * ล็อกอินไปยังอินเทอร์เฟซผู้ดูแลระบบของการติดตั้ง phplist ของคุณ คลิก **เริ่มต้นหรือดำเนินการต่อแคมเปญ**  ปุ่มบนแดชบอร์ดหรือส่งลิงค์แคมเปญภายใต้แคมเปญในการนำทางด้านซ้าย
  * คลิกเริ่มปุ่มแคมเปญใหม่
  * เติมฟิลด์ด้วยตัวเลือกเช่นหัวเรื่องจากบรรทัดเนื้อหาและส่วนท้ายดังแสดงในภาพด้านล่าง

{{< figure align=center src="images/create-campaign.png" alt="การออกแบบจดหมายข่าวใน phplist">}}


## **แคมเปญการตั้งเวลา**    {#ScheDule}
  * การกำหนดเวลาอนุญาตให้คุณเลือกวันที่เมื่อคุณต้องการเริ่มแคมเปญ แคมเปญจะไม่ถูกส่งก่อน/หลังวันที่ที่เลือก
  * คุณไม่จำเป็นต้องเปลี่ยนวันที่หากคุณต้องการส่งแคมเปญทันที

{{< figure align=center src="images/scheduling.png" alt="กำหนดเวลาจดหมายข่าวใน phplist">}}


## **กำหนดรายการไปยังแคมเปญ**    {#list}
รายการทั้งหมดจะแสดงภายใต้แท็บรายการเลือกรายการที่เหมาะสม แคมเปญจะจัดส่งเพื่อกำหนดรายการเท่านั้น อย่างไรก็ตามคุณสามารถทำให้รายการสาธารณะหรือส่วนตัวในขณะที่สร้าง/อัปเดตรายการ

{{< figure align=center src="images/lists.png" alt="กำหนดรายการให้กับจดหมายข่าวใน phplist">}}


## **เสร็จสิ้นแคมเปญ**    {#finish}
เสร็จสิ้นเป็นขั้นตอนสุดท้ายในกระบวนการสร้างแคมเปญ คุณสามารถเพิ่มอีเมลสำหรับการแจ้งเตือนเพิ่มรหัสติดตาม Google Analytics คลิกที่ปุ่ม **ส่งแคมเปญ**  เพื่อเริ่มส่งข้อความไปยังสมาชิก ตอนนี้คุณได้ทำการออกแบบจดหมายข่าวและกระบวนการรณรงค์ แต่คุณต้องประมวลผลคิวและคุณสามารถอ่านเพิ่มเติมเกี่ยวกับเรื่องนี้ในส่วนถัดไป

## **ประมวลผลคิว**    {#Queue}
คิวกระบวนการเป็นกระบวนการที่จะเริ่มส่งแคมเปญ คุณสามารถเริ่มต้นกระบวนการด้วยตนเองด้วยสคริปต์บรรทัดคำสั่งหรือสร้างงาน cron เป็นเรื่องง่ายที่จะประมวลผลคิวด้วยตนเองสำหรับสมาชิกที่มีความสุขไม่กี่คน แต่เป็นการดีที่จะใช้งาน cron เพื่อดำเนินการคิวหากคุณมีสมาชิกหลายพันคน/ล้านคน คุณสามารถเยี่ยมชมอย่างเป็นทางการของ PHPLIST [เว็บไซต์][8] สำหรับข้อมูลเพื่อสร้างงาน cron

## **บทสรุป**    {#conclusion}
PHPLIST เป็นเครื่องมือที่สมบูรณ์แบบสำหรับธุรกิจที่ต้องการใช้ซอฟต์แวร์จดหมายข่าวโอเพนซอร์สสำหรับการตลาดผ่านอีเมล เราได้อธิบายกระบวนการโดยละเอียดสำหรับการออกแบบและส่งแคมเปญ คุณสามารถติดตามได้สำหรับจดหมายข่าวถัดไปของคุณและเพลิดเพลินไปกับพลังที่แท้จริงของ phplist
ในที่สุดด้วยบทช่วยสอนที่น่าสนใจยิ่งขึ้น [containerize.com][9] พร้อมที่จะปรับปรุงฐานการสอน สำหรับการอัปเดตปกติโปรดติดต่อกับหมวดหมู่ [จดหมายข่าว][10]

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #create
[3]: #schedule
[4]: #list
[5]: #finish
[6]: #queue
[7]: #conclusion
[8]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/newsletter/