---
title: "คู่มือการพัฒนาเทมเพลต Joomla สำหรับผู้เริ่มต้น" 
seoTitle: "คู่มือการพัฒนาเทมเพลต Joomla สำหรับผู้เริ่มต้น" 
description: "เรียนรู้การพัฒนาเทมเพลต Joomla วิธีการตั้งค่าเค้าโครงที่ตอบสนองสำหรับกรณีการใช้งานที่หลากหลาย ชุดไฟล์ที่กำหนดเลเยอร์การออกแบบของเว็บไซต์ธุรกิจ" 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "สร้างเทมเพลต Joomla ที่มีความเป็นมืออาชีพและปรับแต่งได้สูงซึ่งมีคุณสมบัติมากมายเช่นโทนสีหลายภาษา SEO / ผู้ใช้และโทนสีที่หลากหลาย" 
url: /th/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## สร้างเทมเพลต Joomla ที่มีความเป็นมืออาชีพและปรับแต่งได้สูงซึ่งมีคุณสมบัติมากมายเช่นโทนสีหลายภาษา SEO / ผู้ใช้และโทนสีที่หลากหลาย {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="การพัฒนาเทมเพลต Joomla">}}


## ภาพรวม
เว็บไซต์ธุรกิจที่ออกแบบมาอย่างดีมีส่วนสำคัญในการนำและรักษาผู้เข้าชมโดยให้ความสะดวกในการนำทาง ** joomla ที่โดดเด่นเต็มรูปแบบ ** อำนวยความสะดวกให้ผู้ใช้ด้วยเลย์เอาต์ที่ตอบสนองและการพัฒนาเทมเพลต Joomla จำนวนมากที่ควบคุมความสวยงามของเว็บไซต์ธุรกิจ
ในระหว่างขั้นตอนการพัฒนาการจัดวางองค์ประกอบการออกแบบมีความสำคัญอย่างยิ่งที่จะได้รับ:
  * ความสม่ำเสมอ
  * การนำทางง่าย
  * ความเรียบง่าย
  * เข้ากันได้กับมือถือ
  * ความสามารถในการอ่าน
มาที่นี่ ** Joomla แม่แบบ ** ซอฟต์แวร์โอเพ่นซอร์สนี้ให้ข้อกำหนดในการพัฒนาหรือใช้เลย์เอาต์ตอบสนองที่กำหนดไว้ล่วงหน้าสำหรับหน้าเว็บทั้งหมดแทนที่จะเขียนโค้ดสำหรับแต่ละหน้าแยกกัน
ในโพสต์บล็อกนี้เราจะได้เรียนรู้สิ่งต่อไปนี้เกี่ยวกับวิธีการสร้างและตั้งค่าเทมเพลตที่เป็นมิตรกับผู้ใช้ ** ใน Joomla
  *[** เค้าโครง Joomla คืออะไร **][2]
  *[** วิธีสร้างเทมเพลตการตอบสนองแบบง่าย ๆ ใน Joomla? **][3]
  *[** จะติดตั้งเทมเพลต Joomla ได้อย่างไร **][4]
  *[** บทสรุป **][5]

## เค้าโครง Joomla คืออะไร? {#อะไร}
Joomla จัดเตรียมเทมเพลตสำหรับส่วนหน้าและส่วนหลัง มันมาพร้อมกับเทมเพลตที่ทำขึ้นมากมายและมีนักพัฒนาเพื่อสร้างธีม bootstrap ที่ตอบสนองได้ฟรี ** ตามกรณีการใช้งานของพวกเขา มีเทมเพลตสองประเภทใน Joomla
** เทมเพลตส่วนหน้า: ** เกี่ยวข้องกับผู้ใช้ส่วนหนึ่งของเว็บไซต์ธุรกิจ
** เทมเพลตแบ็คเอนด์: ** เทมเพลตเหล่านี้เชื่อมโยงกับตรรกะทางธุรกิจของเว็บไซต์

## จะสร้างเทมเพลตที่ตอบสนองได้ง่าย ๆ ใน Joomla ได้อย่างไร? {#ยังไง}
ในส่วนนี้เราจะครอบคลุมขั้นตอนของการสอนเทมเพลต Joomla นี้
ก่อนที่จะกระโดดเข้าไปในส่วนนี้ตรวจสอบให้แน่ใจว่าคุณมีความเข้าใจต่อไปนี้:
  * html
  * CSS
  * JavaScript
  * PHP
ดังนั้นการสร้างเทมเพลตที่กำหนดเองใน Joomla ไม่เคยยากและซับซ้อน อย่างไรก็ตามให้เริ่มสร้างเทมเพลต Joomla แรกของเรา

## ** โครงสร้างไดเรกทอรีการตั้งค่า **
ก่อนอื่นให้สร้างโฟลเดอร์ชื่อ“ ** MyTemplate **” ภายในโฟลเดอร์“ ** แม่แบบ **”
สร้างไฟล์ต่อไปนี้ภายในโฟลเดอร์“ ** mytemplate **”:
  *** index.php **: นี่คือไฟล์หลักที่มีรหัส HTML และ PHP สำหรับหน้าเทมเพลตทั้งหมด
  *** templatedetails.xml **: ไฟล์นี้มีข้อมูลเมตาของเทมเพลตและเป็นภาคบังคับสำหรับการสังเกตโดย Joomla
ตอนนี้สร้างโฟลเดอร์สามโฟลเดอร์ภายในโฟลเดอร์“ ** MyTemplate **” ด้วยชื่อต่อไปนี้:
  *** js **: โฟลเดอร์นี้จะมีไฟล์ JavaScript ทั้งหมดที่จำเป็นสำหรับเทมเพลต
  *** CSS **: ไฟล์ CSS ทั้งหมดสำหรับสไตล์จะเข้ามาในโฟลเดอร์นี้
  *** รูปภาพ **: รูปภาพที่ใช้โดยเทมเพลตจะอยู่ในโฟลเดอร์นี้
สร้างไฟล์ CSS ชื่อ“ ** template.css **” ภายในโฟลเดอร์“ ** CSS **”
```
* mytemplate/
** css/
*** template.css
** images/
** js/
** index.php
** templateDetails.xml
```
ในที่สุดนี่คือวิธีที่โครงสร้างไดเรกทอรีจะเป็นอย่างไร

## ให้ใส่รหัส
ใส่รหัสนี้ในไฟล์ ** templatedetails.xml **
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
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
ดังที่ได้กล่าวไว้ก่อนหน้านี้ไฟล์นี้มีข้อมูลเมตาเกี่ยวกับเลย์เอาต์ที่ตอบสนองซึ่งกำหนดไว้ระหว่างแท็กมาร์กอัป อย่างไรก็ตามคุณสามารถเปลี่ยนข้อมูลทั่วไปเช่นชื่อผู้แต่งและคำอธิบาย
ไฟล์นี้ยังมีข้อมูลเกี่ยวกับไฟล์และโฟลเดอร์อื่น ๆ ที่ใช้โดยเทมเพลต
ตอนนี้เปิดไฟล์ ** index.php ** และเริ่มวางรหัสต่อไปนี้:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
ไฟล์นี้จะเริ่มต้นด้วยบรรทัดนี้ซึ่งป้องกันไม่ให้ผู้อื่นอ่านรหัส PHP ของคุณ
```
<!DOCTYPE html>
```
นี่คือการแจ้งให้เบราว์เซอร์ทราบเกี่ยวกับประเภทเอกสาร
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
เอกสาร HTML เริ่มต้นด้วยบรรทัดนี้และแอตทริบิวต์ ** xmlns ** บอกเนมสเปซ XML สำหรับเอกสาร
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
บรรทัดแรกหลังจากแท็กบอก Joomla ให้ใส่ข้อมูลส่วนหัวเช่นข้อมูลข้อมูลเมตาและชื่อเรื่องหน้า
มีลิงก์ไปยังแผ่นสไตล์ภายนอกในบรรทัดที่สองและบรรทัดที่สามเชื่อมโยงไฟล์ JavaScript ภายนอก
ส่วนที่เหลือของไฟล์เปิดใช้งาน bootstrap ลงในเทมเพลต
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
ส่วนของร่างกายเริ่มต้นหลังจากส่วนหัวมีข้อมูลทั้งหมดซึ่งจะสะท้อนที่เทมเพลตเพื่อให้ผู้ใช้ดูและนำทาง
```
<jdoc:include type="modules" name="position-7" style="well" />
```
คำสั่งนี้เรียกว่าคำสั่ง JDOC ซึ่งใช้เพื่อสั่งให้ Joomla เพิ่มโมดูลชื่อ“ Position-7” มีคำสั่ง JDOC หลายฉบับที่ใช้บ่อยในการพัฒนาเทมเพลต Joomla **
นี่คือไฟล์สุดท้าย ** index.php ** พร้อมรหัสทั้งหมดที่จำเป็นสำหรับเทมเพลต Joomla พื้นฐาน
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
ทุกอย่างอยู่ในสถานที่สำหรับเทมเพลตพื้นฐานมาก ตอนนี้ถึงเวลาที่จะติดตั้งบนเซิร์ฟเวอร์ Joomla และดูว่ามันเป็นอย่างไร

## จะติดตั้งเทมเพลต Joomla ได้อย่างไร? {#ติดตั้ง}
กระบวนการติดตั้งเทมเพลต Joomla ค่อนข้างตรงและง่าย มีขั้นตอนต่อไปนี้ในการติดตั้ง:
ไปที่“ ส่วนขยาย -> จัดการ -> ติดตั้ง

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla ติดตั้งภาพการตั้งค่า">}}

ที่นี่คุณสามารถดูเทมเพลต Joomla ที่พัฒนาขึ้นใหม่ของคุณในรายการดังที่แสดงในภาพด้านล่าง

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="รายการเทมเพลต Joomla">}}

ตอนนี้เลือกเทมเพลตกด“ ติดตั้ง” และข้อความความสำเร็จจะปรากฏขึ้นเกี่ยวกับการติดตั้งที่ประสบความสำเร็จ
หลังจากติดตั้งเทมเพลตแล้วคุณสามารถเข้าถึงและแก้ไขไฟล์เทมเพลตภายในแผงควบคุมของ Joomla และดูตัวอย่างการเปลี่ยนแปลงจากตัวเลือก“ Template Preview”

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

ตอนนี้คุณสามารถดูเทมเพลต Joomla แรกของคุณในเบราว์เซอร์!

## บทสรุป {#conclusion}
เทมเพลตที่ดีและตอบสนองได้เป็นรากฐานสำหรับการสร้างแบบจำลองไซต์โดยรวม ** เค้าโครงตอบสนอง ** ที่ Joomla มีมัลติฟังก์ชั่นและสามารถใช้สำหรับโครงการต่าง ๆ จากการเขียนโค้ดไปจนถึงการพัฒนาเทมเพลต Joomla นั้นง่ายมากด้วยความช่วยเหลือของแดชบอร์ดผู้ดูแลระบบที่ใช้งานง่าย Joomla ให้การควบคุมการพัฒนาเทมเพลตที่สมบูรณ์เพื่อตอบสนองความต้องการของผู้ใช้
ในฐานะ ** ซอฟต์แวร์ CMS ** หมวดหมู่อยู่ภายใต้การปรับปรุงที่สอดคล้องกันและบทช่วยสอนเพิ่มเติมเกี่ยวกับระบบการจัดการเนื้อหาอื่น ๆ จะถูกเพิ่มเข้าไปในรายการโปรดติดต่อกับ [ระบบการจัดการเนื้อหา][6] สำหรับการอัปเดตปกติ

## หน้าผลิตภัณฑ์ที่เกี่ยวข้อง
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [คอนกรีต 5][11]
  * [grav][12]
  * [งานฝีมือ][13]
  * [contao][14]
  * [Fork][15]
  * [โรงกลั่น CMS][16]
  * [locomotivecms][17]

  
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
