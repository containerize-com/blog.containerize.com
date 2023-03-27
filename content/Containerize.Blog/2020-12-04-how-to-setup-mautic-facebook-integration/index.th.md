---
title: "วิธีการตั้งค่า Mautic - การรวม Facebook" 
seoTitle: "วิธีการตั้งค่า Mautic - การรวม Facebook" 
description: "Mautic - การรวม Facebook สามารถช่วยซิงโครไนซ์เพื่อนำไปสู่ระบบ Facebook ของคุณเข้าสู่ระบบ Mautic โดยไม่ต้องใช้ปัญหาใด ๆ จากนั้นใช้ในแคมเปญการตลาด" 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Fetch Facebook นำไปสู่ ​​Mautic เพิ่มผู้ติดต่อลงในเซ็กเมนต์และเรียกใช้แคมเปญอีเมล ใช้ผู้ติดต่อเหล่านี้เพื่อสร้างกลุ่มเป้าหมายที่กำหนดเองสำหรับโฆษณา Facebook" 
url: /th/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Fetch Facebook นำไปสู่ ​​Mautic เพิ่มผู้ติดต่อลงในเซ็กเมนต์และเรียกใช้แคมเปญอีเมล ใช้ผู้ติดต่อเหล่านี้เพื่อสร้างกลุ่มเป้าหมายที่กำหนดเองสำหรับโฆษณา Facebook

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="วิธีการตั้งค่า Mautic - การรวม Facebook">}}

Mautic เป็นซอฟต์แวร์การตลาดอัตโนมัติและให้การควบคุมอีเมลทางการตลาดอย่างสมบูรณ์หน้าเชื่อมโยงไปถึงและเวิร์กโฟลว์สำหรับกิจกรรมการตลาด แคมเปญหยดของ Mautic ช่วยให้ผู้ชมเป้าหมายมีส่วนร่วมและอัปเดตเกี่ยวกับผลิตภัณฑ์ของคุณ Mautic Facebook Integration เป็นวิธีการเพิ่มโอกาสในการขายใหม่ให้กับ Mautic ด้วยการรวม Mautic - Facebook นี้โอกาสในการขายจากแคมเปญ Facebook ของคุณจะถูกเพิ่มลงใน Mautic โดยอัตโนมัติ
เราจะครอบคลุมส่วนต่อไปนี้ในบทช่วยสอนนี้:
  * [กำหนดค่าบัญชีนักพัฒนา Facebook][1]
  * [กำหนดค่าแอปของนักพัฒนา Facebook][2]
  * [การกำหนดค่าปลั๊กอิน Mautic][3]
  * [บทสรุป][4]

## กำหนดค่าบัญชีนักพัฒนา Facebook {#account}

  * ไปที่ [Facebook สำหรับนักพัฒนา][5]
  * ลงทะเบียนบัญชีของคุณหากคุณไม่มี
  * หากต้องการลงทะเบียนบัญชีใหม่ให้ไปที่และคลิกที่“ เริ่มต้น” จากมุมขวาบน
  * หลังจากนั้นเลือกบัญชี Facebook ของคุณและกด“ ดำเนินการต่อ”
  * จากหน้าต่างป๊อปอัพให้คลิกที่ปุ่ม“ นักพัฒนา”

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic - การรวม Facebook - ลงทะเบียนบัญชีนักพัฒนาซอฟต์แวร์">}}


## กำหนดค่าแอพของนักพัฒนา Facebook {#app}

  * คลิกที่“ สร้างแอพแรก”

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - การรวม Facebook - สร้างแอพแรก">}}

  * คลิกที่“ จัดการการรวมธุรกิจ” และกด“ ดำเนินการต่อ”

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic - การรวม Facebook - เลือกวัตถุประสงค์">}}

  * ในหน้าต่างถัดไปป้อนชื่อแอพและเลือกวัตถุประสงค์ของแอพ คลิกที่ปุ่ม“ สร้างแอพ”

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic - การรวม Facebook - กรอกแบบฟอร์มเพื่อสร้างแอพ">}}

  * ขั้นตอนต่อไปคือการตั้งค่าเข้าสู่ระบบ Facebook จากหน้าผลิตภัณฑ์คลิกที่ปุ่ม“ ตั้งค่า” ภายใต้กล่อง“ เข้าสู่ระบบ Facebook”

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic - การรวม Facebook - การตั้งค่า FB เข้าสู่ระบบ">}}

  * จากเมนูซ้ายคลิกที่“ การตั้งค่า” ภายใต้ผลิตภัณฑ์ -> เข้าสู่ระบบ Facebook

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic - การรวม Facebook - กำหนดค่า FB เข้าสู่ระบบ">}}

  * ป้อน URL เว็บไซต์ Mautic ของคุณ ตั้งค่า“ ลูกค้า OAuth เข้าสู่ระบบ” และ“ Web OAuth เข้าสู่ระบบ” เป็น“ ใช่”
  * ไปที่การตั้งค่า -> การตั้งค่าพื้นฐาน จากด้านล่างของหน้าคลิกปุ่ม“+ เพิ่มแพลตฟอร์ม” หลังจากนั้นหน้าต่างป๊อปอัปจะเปิดขึ้น ป้อน URL เว็บไซต์ของคุณและบันทึกการเปลี่ยนแปลง

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - การรวม Facebook - เพิ่มเว็บไซต์เป็นแพลตฟอร์ม">}}


## การกำหนดค่าปลั๊กอิน mautic {#configuration}

  * ไปที่แผงควบคุม Mautic
  * จากนั้นย้ายไปที่ "การตั้งค่า" จากมุมบนขวา
  * คลิกที่“ ปลั๊กอิน”
  * หลังจากนั้นให้เปิดการตั้งค่าปลั๊กอิน“ Facebook”
  * จากนั้นป้อนรหัสลูกค้าและความลับของลูกค้า รับคีย์เหล่านี้จากแอพนักพัฒนา Facebook ที่คุณเพิ่งสร้างตามขั้นตอนด้านบน

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic - การรวม Facebook - กำหนดค่าปลั๊กอิน FB บน Mautic">}}

  * กดปุ่ม“ Authorize App”
  * หลังจากนั้นหน้าต่างการอนุญาต Facebook ใหม่จะเปิดขึ้น ทำตามพรอมต์เพื่อเสร็จสิ้นการอนุญาตแอป
  * หลังจากการอนุญาตที่ประสบความสำเร็จให้ย้ายไปที่แท็บ“ ติดต่อการแมป” จากปลั๊กอิน Facebook ของ Mautic
  * ที่นี่คุณสามารถแมปฟิลด์ติดต่อของคุณไปยังฟิลด์ Facebook
  * ในที่สุดเผยแพร่การตั้งค่าและคุณก็พร้อมที่จะไป

## บทสรุป {#conclusion}

MAUTIC - การรวม Facebook สามารถช่วยซิงโครไนซ์เพื่อนำไปสู่ระบบ Facebook ของคุณเข้าสู่ระบบ MAUTIC ได้โดยไม่ต้องใช้ปัญหาใด ๆ ในแอพ Mautic คุณสามารถเพิ่มโอกาสในการขายเหล่านี้ทั้งหมดลงในเซ็กเมนต์ คุณสามารถเรียกใช้แคมเปญการตลาดผ่านอีเมลได้ สิ่งนี้สามารถช่วยให้ธุรกิจของคุณเติบโตทำการตลาดและขายผลิตภัณฑ์/บริการให้กับกลุ่มเป้าหมายที่ใหญ่กว่ามาก

## สำรวจ
หากต้องการเรียนรู้เพิ่มเติมเกี่ยวกับ Mautic และ Facebook กรุณาเยี่ยมชม:
  * [Mautic | แพลตฟอร์มเทคโนโลยีการตลาดเนื้อหาโอเพ่นซอร์ส][6]
  * [วิธีการตั้งค่าแคมเปญ Mautic โดยใช้ตัวสร้างแคมเปญ][7]
  * [การรวม Drupal Mautic เพื่อทำการเลี้ยงดูโดยอัตโนมัติ][8]
  * [การตลาดอัตโนมัติด้วยการรวม Mautic และ Woocommerce][9]
  * [รวม Mautic & Joomla สำหรับระบบการตลาดแบบดิจิทัลการตลาดอัตโนมัติ][10]



[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
