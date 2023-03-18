---
title: "คู่มือผู้เริ่มต้นในการสร้างเทมเพลต Joomla พื้นฐาน" 
seoTitle: "คู่มือผู้เริ่มต้นในการสร้างเทมเพลต Joomla พื้นฐาน" 
description: "Joomla เป็นระบบการจัดการเนื้อหาโอเพนซอร์ซยอดนิยม ในบทช่วยสอนนี้เราจะอธิบายทีละขั้นตอนวิธีสร้างเทมเพลต Joomla" 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla เป็นหนึ่งในระบบการจัดการเนื้อหาโอเพนซอร์ซที่ได้รับความนิยมมากที่สุด บทช่วยสอนนี้จะนำคุณผ่านขั้นตอนที่จำเป็นในการสร้างเทมเพลต Joomla ตั้งแต่เริ่มต้น" 
url: /th/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla เป็นหนึ่งในระบบการจัดการเนื้อหาโอเพนซอร์ซที่ได้รับความนิยมมากที่สุด บทช่วยสอนนี้จะนำคุณผ่านขั้นตอนที่จำเป็นในการสร้างเทมเพลต Joomla ตั้งแต่เริ่มต้น

{{< figure align=center src="images/joomla-templates-2.png" alt="เทมเพลต Joomla พื้นฐาน">}}

ในยุคดิจิตอลนี้ระบบการจัดการเนื้อหาเป็นสิ่งจำเป็นพื้นฐานของธุรกิจใด ๆ สำหรับทุกความต้องการในการสร้างเนื้อหา และมีซอฟต์แวร์โอเพ่นซอร์สจำนวนมากรวมถึงซอฟต์แวร์ CMS แบบชำระเงินที่มีอยู่ในตลาด นอกจากนี้เรายังมี [รายการ] [1] ซอฟต์แวร์การจัดการเนื้อหาโอเพนซอร์ซชั้นนำสำหรับธุรกิจ Joomla เป็นหนึ่งในซอฟต์แวร์ CMS โอเพนซอร์ซที่ได้รับความนิยมมากที่สุดและในบทช่วยสอนนี้เราจะพาคุณไปทีละขั้นตอนและอธิบายวิธีการสร้างเทมเพลต Joomla ตั้งแต่เริ่มต้น มาเริ่มกันเถอะ!
** หมายเหตุ: เราคิดว่าคุณติดตั้ง Joomla 2.5 เวอร์ชัน ** **
  *** [โครงสร้างไดเรกทอรีการตั้งค่า] [2] **
  *** [สร้างไฟล์ templatedetails.xml พื้นฐาน] [3] **
  *** [สร้างไฟล์ index.php พื้นฐาน] [4] **
  *** [ค้นพบและติดตั้งเทมเพลต] [5] **
  *** [แพ็คเกจเทมเพลต] [6] **
  *** [บทสรุป] [7] **

## โครงสร้างไดเรกทอรีการตั้งค่า {#SetUp}
ในการสร้างเทมเพลต Joomla ขั้นพื้นฐานก่อนสร้างโฟลเดอร์ใหม่ในโฟลเดอร์เทมเพลต ตั้งชื่อโฟลเดอร์สิ่งที่คุณต้องการเรียกเทมเพลตของคุณเช่น“ ** myNewTemplate **“
การใช้ตัวแก้ไขข้อความที่คุณชื่นชอบสร้างไฟล์ ** index.php ** และ ** templatedetails.xml ** ในการจัดการรูปภาพและแผ่นสไตล์ของคุณให้สร้างโฟลเดอร์ใหม่ 2 อันที่เรียกว่า ** รูปภาพ ** และ ** CSS ** ภายในโฟลเดอร์ ** CSS ** สร้างไฟล์ที่เรียกว่า ** template.css **
โครงสร้างไดเรกทอรีของคุณจะมีลักษณะเช่นนี้

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="โครงสร้างไดเรกทอรีเทมเพลต Joomla">}}


## สร้างไฟล์ templatedetails.xml พื้นฐาน {#xml}
ไฟล์ ** templatedetails.xml ** เก็บข้อมูลข้อมูลเมตาทั้งหมดเกี่ยวกับเทมเพลตของคุณ และไฟล์นี้มีความสำคัญหากไม่มีเทมเพลตของคุณจะไม่เห็นโดย Joomla!
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
เนื้อหาของ templateetails.xml อธิบายตนเอง คุณสามารถคัดลอกเนื้อหาที่แก้ไขบิตที่จำเป็น
ออกจากตำแหน่งตามที่พวกเขา - นี่เป็นชุดทั่วไปดังนั้นคุณจะสามารถเปลี่ยนจากเทมเพลตมาตรฐานได้อย่างง่ายดาย

## สร้างไฟล์ index.php พื้นฐาน {#php}
index.php กลายเป็นไฟล์ bootstrap หลักของทุกหน้าที่ Joomla! ส่ง. หน้านี้จะแสดงรหัสกระดูกเปลือยพร้อมให้คุณตัดและวางลงในการออกแบบของคุณเอง
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## ค้นพบและติดตั้งเทมเพลต {#install}
ก่อนอื่นคุณต้องบอก Joomla! ที่คุณได้สร้างเทมเพลตใหม่ คุณสมบัตินี้เรียกว่า Discover Extensions และสามารถเข้าถึงได้ผ่าน
```
Extensions -> Extension Manager -> Discover
```
คลิกปุ่มค้นหาเพื่อค้นหาเทมเพลตของคุณจากนั้นเลือกและคลิกติดตั้งเพื่อติดตั้ง ตอนนี้เทมเพลตของคุณควรแสดงใน Template Manager (สไตล์) สามารถเข้าถึงได้ผ่าน
```
Extensions -> Template Manager
```

## จัดทำเทมเพลต {#Packge}
ไดเรกทอรีที่ไม่มีซิปที่มีหลายไฟล์ไม่ใช่วิธีการแจกจ่ายที่ดี ดังนั้นเพื่อประโยชน์ในการแจกจ่ายเราควรสร้างแพ็คเกจของแม่แบบของเรา แพ็คเกจสามารถอยู่ในรูปแบบ zip (พร้อมส่วนขยาย. zip)
หากเทมเพลตของคุณอยู่ในไดเรกทอรี myTemplate/ จากนั้นเพื่อสร้างแพ็คเกจคุณสามารถเชื่อมต่อกับไดเรกทอรีนั้นและใช้คำสั่งเช่น:
```
zip -r ..\mytemplate.zip .
```

## บทสรุป {#conclusion}
ในบทความนี้เราได้เรียนรู้เกี่ยวกับเทมเพลต Joomla เราผ่านไปทีละขั้นตอนเกี่ยวกับวิธีการสร้างเทมเพลต Joomla นี่เป็นเพียงการสอนพื้นฐานที่จะเริ่มต้นด้วยการสร้างเทมเพลต แน่นอนคุณสามารถสร้างเทมเพลตที่ปรับแต่งและปรับปรุงได้ตามโครงสร้างกระดูกเปลือยนี้

## หน้าผลิตภัณฑ์ที่เกี่ยวข้อง
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [คู่มือการพัฒนาเทมเพลต Joomla สำหรับผู้เริ่มต้น] [8]
[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
