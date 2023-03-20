---
title: "การตลาดอัตโนมัติด้วยการรวม Mautic และ Woocommerce" 
seoTitle: "การตลาดอัตโนมัติด้วยการรวม Mautic และ Woocommerce" 
description: "การรวม Mautic และ Woocommerce อนุญาตให้ส่งข้อมูลการติดต่อจากไซต์ WordPress ไปยัง Mautic ที่ช่วยในการตลาดผลิตภัณฑ์ผ่านแอพ Mautic" 
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "ยอดขายที่โอ้อวดโดยใช้ Mautic และ Wordpress Woocommerce ด้วยกัน ทำให้กระบวนการทางการตลาดเป็นไปโดยอัตโนมัติโดยดึงข้อมูลของลูกค้าจาก WordPress ไปยัง Mautic" 
url: /th/marketing-automation-using-mautic-and-wordpress-woocommerce/
categories: ['Blogging', 'Marketing Automation']
---

## ขายดีโดยใช้ Mautic และ WordPress WooCommerce ด้วยกัน ทำให้กระบวนการทางการตลาดเป็นไปโดยอัตโนมัติโดยดึงข้อมูลของลูกค้าจาก WordPress ไปยัง Mautic

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="ระบบอัตโนมัติทางการตลาดโดยใช้การรวม Mautic-Woocommerce">}}


## ภาพรวม:
การรวม Mautic-Woocommerce เป็นวิธีที่ง่ายในการรับรายชื่อผู้ติดต่อทั้งหมดในแอพ Mautic จากนั้นใช้ผู้ติดต่อเหล่านี้คุณสามารถสร้างแคมเปญการตลาดตามความต้องการของคุณ Mautic เป็นเครื่องมือทางการตลาดที่ยอดเยี่ยมซึ่งช่วยให้คุณสามารถควบคุมแคมเปญการตลาดของคุณได้อย่างเต็มที่
Mautic เป็นโซลูชันการตลาดอัตโนมัติแบบโอเพ่นซอร์สและการตลาดฟรี มันถูกใช้เพื่อสร้างแคมเปญการตลาดเซ็กเมนต์แบบฟอร์มรายงานและอื่น ๆ อีกมากมาย
WooCommerce เป็นปลั๊กอินอีคอมเมิร์ซโอเพนซอร์ซสำหรับ WordPress มันเป็นโซลูชันอีคอมเมิร์ซที่ใช้เป็นส่วนใหญ่ทั่วโลก ณ จุดนี้ มีส่วนเสริมหลายร้อยรายการสำหรับ woocommerce ซึ่งสามารถใช้ตามความต้องการของคุณ
มีปลั๊กอินสำหรับ Mautic และ WordPress ที่ให้บริการโซลูชันการตลาดอัตโนมัติ โปรดทำตามขั้นตอนเหล่านี้เพื่อรวม WooCommerce เข้ากับ Mautic โดยใช้ปลั๊กอิน [การรวมเข้ากับ Mautic สำหรับ WooCommerce - Open Source Marketing Automation][1]
บล็อกนี้จะครอบคลุมส่วนต่อไปนี้:
  * [การกำหนดค่าปลั๊กอิน WordPress][2]
  * [การกำหนดค่า mautic][3]
  * [ความคิดสุดท้าย][4]

## การกำหนดค่าปลั๊กอิน WordPress {#wordpress}
  1. ไปที่ปลั๊กอิน
  2. คลิกที่“ เพิ่มใหม่”
  3. ค้นหา“ ** การรวมเข้ากับ Mautic สำหรับ WooCommerce **“
  4. เมื่อคุณพบปลั๊กอินให้คลิกที่“ ติดตั้งทันที”
  5. หลังจากการติดตั้งให้คลิกที่“ เปิดใช้งาน”
  6. จากนั้นไปที่ WooCommerce -> Mautic -> เชื่อมต่อแท็บ
  7. กรอกแบบฟอร์มด้วยข้อมูลต่อไปนี้:
      * URL พื้นฐาน
      * รหัสลูกค้า
      * รหัสลับ
  8. ฟิลด์ทั้งหมดเหล่านั้นจะมาหลังจากการกำหนดค่าบนแอพ Mautic ซึ่งอธิบายไว้ในส่วนถัดไป

{{< figure align=center src="images/woocommerce-1024x665.png" alt="การรวม Mautic และ WordPress">}}


## mautic การกำหนดค่า: {#mautic}
  1. จากเว็บไซต์ Mautic ของคุณไปที่การตั้งค่า
  2. ไปที่การกำหนดค่า
  3. เปิดใช้งาน API จากการตั้งค่า API
  4. ไปที่ข้อมูลรับรอง API
  5. คลิก“ ใหม่” ป้อนชื่อใด ๆ ที่คุณชอบและ URL เต็มของไซต์ WordPress ของคุณเช่น [http://yourwordpresssite.com/wp-admin/admin.php เหมือนกัน
  6. กดปุ่มบันทึกและปิด
  7. มันจะสร้างกุญแจสาธารณะและส่วนตัว
  8. ไปที่ไซต์ WordPress ของคุณและค้นหาปลั๊กอิน Mautic ที่คุณติดตั้งไว้ก่อนหน้านี้
  9. ป้อนกุญแจสาธารณะและความลับที่คุณสร้างขึ้นจากเว็บไซต์ Mautic ของคุณ
 10. เลือก OAUTH1 หรือ OAUTH2 (เช่นเดียวกับที่คุณเลือกใน MAUTIC) และตั้งค่าส่งผู้ใช้ที่ลงทะเบียนเป็นใช่
 11. บันทึกและเผยแพร่ปลั๊กอิน
 12. หลังจากนั้นคุณจะสามารถอนุญาตเว็บไซต์ WordPress ของคุณได้
 13. WordPress จะมุ่งเน้นไปที่อินสแตนซ์ของ Mautic เพื่อการอนุญาต
 14. คลิก“ อนุญาต” และนั่นก็เป็นเช่นนั้น
 15. คุณจะเริ่มรับรายชื่อติดต่อเข้ามาในเว็บไซต์ Mautic ของคุณ

{{< figure align=center src="images/mautic-1024x622.png" alt="ขั้นตอนการรวม Mautic และ WordPress">}}


## ความคิดสุดท้าย: {#Final}
Mautic-Woocommerce Integration เข้าด้วยกันสามารถช่วยให้คุณบรรลุเป้าหมายการตลาดของคุณ การรวมนี้เป็นหนึ่งในโซลูชันที่ดีที่สุดสำหรับระบบการตลาดแบบอีคอมเมิร์ซ ด้วย WordPress คุณสามารถรับลูกค้าจำนวนมากได้อย่างง่ายดายจากนั้นด้วย Mautic คุณสามารถสร้างแคมเปญไม่ จำกัด เพื่อกำหนดเป้าหมายลูกค้าเหล่านั้นและอัปเดตเกี่ยวกับผลิตภัณฑ์/บริการของคุณซึ่งจะมียอดขายอย่างแน่นอน

## สำรวจ:
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [Wodpress][6]
  * [Mautic][7]
  * [วิธีการตั้งค่า Mautic - การรวม Facebook][8]
  * [การรวม Drupal Mautic เพื่อทำการเลี้ยงดูโดยอัตโนมัติ][9]
  * [การตลาดอัตโนมัติโดยใช้ Mautic และ WordPress WooCommerce][10]
  * [วิธีการตั้งค่าแคมเปญการตลาดใน Mautic][11]

  
[1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
[2]: #wordpress
[3]: #mautic
[4]: #final
[5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
[6]: https://products.containerize.com/blogging/wordpress
[7]: https://products.containerize.com/marketing-automation/mautic
[8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[10]: https://blog.containerize.com/blogging/th/marketing-automation-using-mautic-and-wordpress-woocommerce/
[11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
