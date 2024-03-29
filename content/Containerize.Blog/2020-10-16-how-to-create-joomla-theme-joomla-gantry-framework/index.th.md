---
title: "วิธีสร้างธีม Joomla | Joomla Gantry Framework" 
seoTitle: "วิธีสร้างธีม Joomla | Joomla Gantry Framework" 
description: "Joomla Gantry Framework เป็นโอเพ่นซอร์สและเสนอคุณสมบัติ GUI ที่มีคุณสมบัติการลากและดร็อปทำให้ผู้ใช้สามารถสร้างเทมเพลต Joomla CMS แบบไดนามิกและตอบสนองได้อย่างรวดเร็ว" 
date: Fri, 16 Oct 2020 10:55:10 +0000
author: Masood Anwer
summary: "ออกแบบธีม Joomla ที่มีประสิทธิภาพแบบอินเทอร์แอคทีฟและใช้งานง่ายด้วยตัวสร้างเทมเพลตโอเพ่นซอร์ส เฟรมเวิร์ก Gantry ช่วยเพิ่มเวลาตอบสนองของหน้าและประสิทธิภาพ" 
url: /th/how-to-create-joomla-theme-joomla-gantry-framework/
categories: ['Content Management']
---

## ออกแบบธีม Joomla ที่มีประสิทธิภาพแบบอินเทอร์แอคทีฟและใช้งานง่ายพร้อมตัวสร้างเทมเพลตโอเพนซอร์ส เฟรมเวิร์ก Gantry ช่วยเพิ่มเวลาตอบสนองของหน้าและประสิทธิภาพ

{{< figure align=center src="images/joomla-gantry-framework.png" alt="Joomla Kantry">}}


## **ภาพรวม** 
เราได้ตีพิมพ์บทความเกี่ยวกับหัวข้อต่าง ๆ เช่น [คู่มือการพัฒนา Joomla Template สำหรับผู้เริ่มต้น][1], [การรวม Drupal Mautic เพื่อทำการเลี้ยงดูโดยอัตโนมัติ][2], [รวม Mautic & Joomla สำหรับระบบการตลาดดิจิทัลอัตโนมัติ][3] และอีกมากมายดังนั้นเราจะมุ่งเน้นไปที่การสร้างธีมด้วย **โครงงานตั้งสิ่งของ** ในคู่มือนี้ Gantry Framework เป็นตัวสร้างเทมเพลตโอเพ่นซอร์สที่ใช้ในการสร้างเค้าโครงที่ตอบสนองและระดับองค์กรสำหรับ [joomla][4] และ [WordPress][5] ชุมชนโอเพ่นซอร์สได้พัฒนาระบบการจัดการเนื้อหาที่หลากหลายซึ่งนำเสนอความสามารถในการสร้างธีมที่มีคุณสมบัติมากมาย โครงร่างของ Gantry สำหรับ Joomla เป็นหนึ่งในเฟรมเวิร์กที่ได้รับความนิยมมากที่สุด การสร้างเว็บไซต์ที่สะดุดตาและมีส่วนร่วมเป็นองค์ประกอบสำคัญของธุรกิจใด ๆ อย่างไรก็ตามเวลาต้องสร้างหรือแก้ไขเว็บไซต์ดังกล่าวเป็นอีกแง่มุมที่สำคัญ
ดังนั้นกรอบงาน Joomla จึงจัดเตรียมบทบัญญัติเพื่อเร่งกระบวนการพัฒนาเลย์เอาต์ เหนือสิ่งอื่นใดนอกจากนี้ยังกำจัดการบังคับให้ติดตั้งการเข้ารหัสหรือทักษะการเขียนโปรแกรม ในทางกลับกันกระบวนการติดตั้งของเฟรมเวิร์กดังกล่าวค่อนข้างง่ายและเรียบง่าย พวกเขามีอยู่ในรูปแบบของปลั๊กอินสำหรับระบบการจัดการเนื้อหาส่วนใหญ่เช่น WordPress และ Joomla ในการสอนกรอบงานนี้เราจะครอบคลุมประเด็นต่อไปนี้:
* [ **เฟรมเวิร์กของ Kantry สำหรับ Joomla คืออะไร** ][6]
* [ **การติดตั้งกรอบงานตั้งชื่อ** ][7]
* [ **การติดตั้งชุดรูปแบบโครงสำหรับตั้งสิ่งของ** ][8]
* [ **สร้างธีมด้วย Kantry** ][9]

## โครงสำหรับตั้งสิ่งของสำหรับ Joomla คืออะไร? {#gantry}

[ **Gantry**][10] เป็นกรอบการจัดสรรแบบฟรีและโอเพ่นซอร์สสำหรับ Joomla**Gantry** เป็นกรอบธีมเว็บที่รวดเร็วและยืดหยุ่น มันถูกสร้างขึ้นบนเค้าโครงระบบกริด 12 คอลัมน์ 960 ซึ่งใช้ Bootstrap Twitter นอกจากนี้ยังใช้งานง่ายสำหรับทั้งนักพัฒนาและผู้ใช้ปลายทาง Gantry มีคุณสมบัติ Drag & Drop ที่ช่วยให้ผู้ใช้สามารถปรับแต่งธีมได้อย่างรวดเร็วเนื่องจากฟังก์ชั่น GUI ช่วยให้คุณออกแบบเว็บไซต์ได้อย่างรวดเร็วแทนที่จะเขียนโค้ด มันขึ้นอยู่กับการกำหนดค่าไฟล์ข้อความ (YAML) ดังนั้นจึงง่ายต่อการแก้ไขไฟล์ข้อความเหล่านี้ ยิ่งไปกว่านั้นตัวสร้างธีมโอเพ่นซอร์สนี้มีให้สำหรับ WordPress และ Joomla Joomla Gantry ให้การควบคุมที่สมบูรณ์แก่ผู้ใช้เกี่ยวกับเนื้อหาและข้อมูล มีคุณสมบัติในการกำหนดค่าตัวสร้างธีมฟรีนี้และรวมเข้ากับแอปพลิเคชันของบุคคลที่สาม นอกจากนี้ยังสามารถขยายได้สูงและผู้ใช้สามารถขยายการทำงานตามความต้องการของพวกเขา
เท่าที่ตัวเลือกการสร้างธีมมีความกังวลเฟรมเวิร์กชุดรูปแบบนี้มีหลายสไตล์และการออกแบบในองค์ประกอบ UI ซึ่งรวมถึง Google Fonts, สลับ, ตัวเลือกสี, ตัวเลือกภาพ, ฉลากคำนำหน้า, Sliders TextPlus พร้อมคำต่อท้าย ในความเป็นจริงมีการสนับสนุนภาษาขวาไปซ้ายเช่นภาษาอาหรับฟาร์ซีและอีกมากมาย ผู้ใช้สามารถควบคุมขนาดของบล็อกและสามารถออกแบบเลย์เอาต์ใด ๆ ด้วยความช่วยเหลือของระบบกริด Gantry มีความปลอดภัยสูงและช่วยให้การแจ้งเตือนสไตล์คำรามแบบไม่รบกวนการทำงานของ AJAX สำหรับกิจกรรม นอกจากนี้ยังมีคุณสมบัติการพิมพ์จำนวนมากการควบคุม JavaScript ความสามารถในการตั้งค่าพารามิเตอร์ผ่าน URL, คุกกี้, เซสชันและค่าที่ตั้งไว้ล่วงหน้า

## การติดตั้งโครงสำหรับตั้งสิ่งของ {#Installing}

  * ดาวน์โหลด Gantry จาก
* นำทางไปยัง **ส่วนขยาย -> Extensions Manager -> ติดตั้ง** และเลือกปุ่มเลือกไฟล์ ค้นหา ZIP ที่ดาวน์โหลดมาแล้วคลิกอัปโหลดและติดตั้ง
  * คุณสามารถเห็นส่วนขยายของ Kantry ภายใต้ตัวจัดการส่วนขยาย ตรวจสอบให้แน่ใจว่ามีการเปิดใช้งานส่วนขยายของโครงสำหรับตั้งสิ่งของทั้งหมด

## การติดตั้งชุดรูปแบบตั้งสิ่งของ {#installtheme}

ในส่วนนี้ของการสอนเฟรมเวิร์กโครงร่างเราจะติดตั้งกรอบชุดรูปแบบนี้ (โครงสำหรับตั้งสิ่งของ)
* ไปที่ **ส่วนขยาย -> Extensions Manager -> ติดตั้ง** เลือกปุ่มเลือกไฟล์ค้นหาปุ่ม ZIP ที่ดาวน์โหลดและคลิกปุ่มอัปโหลดและติดตั้ง เทมเพลต Gantry จะปรากฏในตัวจัดการแม่แบบ
* ไปที่ **ส่วนขยาย -> Template Manager** เลือกช่องทำเครื่องหมายสำหรับตั้งสิ่งของและทำให้เทมเพลตเริ่มต้นสำหรับเว็บไซต์ของคุณ

## สร้างธีมด้วยโครงสำหรับตั้งสิ่งของ {#createtheme}

วิธีที่ง่ายมากในการสร้างชุดรูปแบบ****ใช้ธีมปัจจุบันและใช้เป็นเทมเพลตสำหรับการสร้างธีมใหม่ของคุณ
  * ดาวน์โหลด unzip และเปิดธีมไฮโดรเจน
  * เปลี่ยนชื่อของไฟล์และไดเรกทอรี
  * สมมติว่าชื่อธีมใหม่ของคุณคือ“ MyTheme” ดังนั้นแทนที่ไฮโดรเจนด้วยตำนานในไฟล์และไดเรกทอรี
  * ค้นหาไฟล์สำหรับชื่อธีม ค้นหาและแทนที่ชื่อธีมเก่าด้วยชื่อใหม่เช่น“ ไฮโดรเจนสู่ตำนานไฮโดรเจนเป็นตำนานและไฮโดรเจนเป็นตำนาน”
  * ธีมซิปติดตั้งและนั่น

## บทสรุป
นี่คือจุดสิ้นสุดของการสอนกรอบโครงสำหรับตั้งสิ่งของนี้ ในโพสต์บล็อกนี้เราได้ผ่านการแนะนำของ Joomla Gantry Framework คุณสมบัติและขั้นตอนการติดตั้งสำหรับการจัดการเนื้อหา Joomla ตัวสร้างเทมเพลตนี้เป็นโอเพ่นซอร์สฟรีและมาพร้อมกับชุมชนสนับสนุนที่มีชีวิตชีวาซึ่งยังมีชีวิตอยู่และตอบสนองต่อข้อบกพร่องและการอภิปราย นอกจากนี้โพสต์บล็อกนี้สามารถช่วยคุณได้หากคุณมีเว็บไซต์ที่สร้างขึ้นโดยใช้ Joomla หรือ WordPress ธีมเป็นส่วนสำคัญของทุกเว็บไซต์และดึงดูดผู้เข้าชมด้วย UI ที่สวยงาม คุณสามารถสร้างเทมเพลต joomla ได้ฟรี**โดยมีหรือไม่มีกรอบรูปแบบใด ๆ แต่คุณสามารถสร้างเทมเพลต Joomla ที่มีการโต้ตอบและตอบสนองได้อย่างดีพร้อมกรอบ Gantry มันจะช่วยให้คุณประหยัดค่าใช้จ่ายและเวลาในการพัฒนา
Gantry เป็นหนึ่งในกรอบเทมเพลต Joomla ที่ดีที่สุดดังนั้นคุณสามารถเพลิดเพลินไปกับพลังที่แท้จริงของมันโดยการใช้คุณสมบัติเช่น Layout Manager, Editor Menu Menu, SCSS/การสนับสนุนน้อยลง, การสืบทอดธีมและอื่น ๆ อีกมากมาย นอกจากนี้ยังมีการสอนและการเปรียบเทียบบล็อกโพสต์และผลิตภัณฑ์โอเพนซอร์สที่คุณสามารถสำรวจได้อีกมากมาย ผลิตภัณฑ์ที่จดทะเบียนทั้งหมดนั้นฟรีและมาพร้อมกับความสามารถในการโฮสต์ตนเอง ในที่สุด [ **containerize.com**][11] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนโพสต์บล็อกเกี่ยวกับผลิตภัณฑ์โอเพนซอร์สล่าสุดเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [**การจัดการเนื้อหา** ][12] สำหรับการอัปเดตล่าสุด

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [Joomla - ซอฟต์แวร์ CMS ฟรี][13]
  * [Drupal][14]
  * [Pyro][15]
  * [Django CMS][16]
  * [Umbraco CMS][17]
  * [คอนกรีต 5][18]
  * [รวม Mautic & Joomla สำหรับระบบการตลาดแบบดิจิทัลการตลาดอัตโนมัติ][3]
  * [การรวม Drupal Mautic เพื่อทำการเลี้ยงดูโดยอัตโนมัติ][2]
  * [Top 5 Top Free Responsive Joomla Bootstrap เทมเพลตของปี 2020][19]
  * [คู่มือการพัฒนาเทมเพลต Joomla สำหรับผู้เริ่มต้น][1]
  * [เทมเพลต Joomla ที่ตอบสนองได้ดีที่สุด 5 อันดับแรกของปี 2020][19]
  * [คู่มือผู้เริ่มต้นในการสร้างเทมเพลต Joomla พื้นฐาน][20]
  * [Joomla vs Drupal | การเปรียบเทียบ CMS ในปี 2021][21]
  * [ดำเนินธุรกิจโดยอัตโนมัติโดยใช้ซอฟต์แวร์ฟรีและโอเพ่นซอร์ส][22]



[1]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
[2]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[3]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
[4]: https://products.containerize.com/content-management/joomla/
[5]: https://products.containerize.com/blogging/wordpress/
[6]: #gantry
[7]: #Installing
[8]: #installtheme
[9]: #createtheme
[10]: http://gantry.org/
[11]: https://containerize.com
[12]: https://blog.containerize.com/category/content-management/
[13]: https://products.containerize.com/content-management/joomla
[14]: https://products.containerize.com/content-management/drupal
[15]: https://products.containerize.com/content-management/pyro
[16]: https://products.containerize.com/content-management/django
[17]: https://products.containerize.com/content-management/umbraco
[18]: https://products.containerize.com/content-management/concrete5
[19]: https://blog.containerize.com/content-management/top-5-best-free-responsive-joomla-templates-of-2020/
[20]: https://blog.containerize.com/content-management/beginners-guide-to-create-a-basic-joomla-template/
[21]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[22]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
