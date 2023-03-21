---
title: "คู่มือผู้เริ่มต้นเพื่อพัฒนาปลั๊กอิน phplist" 
seoTitle: "คู่มือผู้เริ่มต้นเพื่อพัฒนาปลั๊กอิน phplist" 
description: "ทำความคุ้นเคยกับสถาปัตยกรรมปลั๊กอิน phplist และเรียนรู้วิธีสร้างปลั๊กอิน phplist พื้นฐาน แนวทางนี้ช่วยให้คุณปรับแต่งและปรับปรุงฟังก์ชั่น phplist" 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "ปลั๊กอิน PHPLIST ช่วยให้นักพัฒนาสามารถปรับแต่งผลิตภัณฑ์และปรับปรุงการทำงาน ในโพสต์นี้เราจะเรียนรู้วิธีสร้างปลั๊กอินพื้นฐานใน phplist" 
url: /th/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## phplist plugins ช่วยให้นักพัฒนาสามารถปรับแต่งผลิตภัณฑ์และปรับปรุงการทำงาน ในโพสต์นี้เราจะเรียนรู้วิธีสร้างปลั๊กอินพื้นฐานใน phplist

{{< figure align=center src="images/phplist-plugin.png" alt="ปลั๊กอิน phplist">}}

การสนับสนุนปลั๊กอินเป็นส่วนสำคัญของซอฟต์แวร์โดยเฉพาะอย่างยิ่งสำหรับระบบโอเพนซอร์ส สิ่งนี้ช่วยให้นักพัฒนาสามารถสร้างปลั๊กอินใหม่เพื่อขยายคุณสมบัติ **phplist**  ส่งเสริมการพัฒนาปลั๊กอินเพื่อให้นักพัฒนาสามารถใช้พวกเขาเพื่อเพิ่มคุณสมบัติใหม่ตามข้อกำหนดทางธุรกิจของพวกเขา ปลั๊กอิน phplist เป็นคอลเลกชันรหัสแบบสแตนด์อโลนที่มีรหัสสำหรับ PHP, HTML, CSS และ JavaScript
แอปพลิเคชันสนับสนุนปลั๊กอินเนื่องจากเหตุผลหลายประการและบางส่วนคือ:
  * อย่าแก้ไขฟังก์ชั่นหลัก
  * อนุญาตให้นักพัฒนาสร้างคุณสมบัติใหม่
  * ลดขนาดของซอฟต์แวร์
เราจะหารือเกี่ยวกับหัวข้อด้านล่างโดยละเอียดในบทช่วยสอนนี้
  *[**ข้อกำหนดเบื้องต้น** ][2]
  *[**พื้นฐานของการพัฒนาปลั๊กอิน phplist** ][3]
  *[**สร้างปลั๊กอิน phplist ของเรา** ][4]
  *[**บทสรุป** ][5]

## สิ่งที่ต้องมีก่อน   {#REQ}
  * เวอร์ชันล่าสุดของ phplist
  * คุ้นเคยกับ phplist และ php
  * ความเข้าใจเกี่ยวกับ HTML / CSS และ JavaScript

## พื้นฐานของการพัฒนาปลั๊กอิน phplist   {#basics}
วิธีการต่อไปนี้จะปรับปรุงการทำงานของปลั๊กอิน phplist
  ***หน้า**  - สร้างหน้าสำหรับกิจกรรมต่าง ๆ เช่นการรายงานสถิติเพื่อแสดงข้อมูลและอื่น ๆ อีกมากมาย
  ***hooks**  - สิ่งนี้ช่วยให้คุณเรียกใช้ฟังก์ชั่นในสถานที่เฉพาะ
มีปลั๊กอินพิเศษสามประเภทสำหรับ phplist ปลั๊กอินหนึ่งประเภทของแต่ละประเภทสามารถเปิดใช้งานได้เท่านั้น
  ***ปลั๊กอินตัวแก้ไข**  - อนุญาตให้ใช้โปรแกรมแก้ไขสำหรับการแก้ไขแคมเปญหรือเทมเพลต
  ***ปลั๊กอินการรับรองความถูกต้อง**  - สิ่งนี้อนุญาตให้เพิ่มกลไกใหม่สำหรับการรับรองความถูกต้องของผู้ดูแลระบบ
  ***ปลั๊กอินผู้ส่งอีเมล** -อนุญาตให้ใช้วิธีการใหม่สำหรับการส่งอีเมลแทนฟังก์ชั่นในตัว

## สร้างปลั๊กอิน phplist ของเรา   {#Create}
ก่อนอื่นคุณต้องขยายคลาส Core phplistplugin ในการสร้างปลั๊กอินคุณต้องสร้างไดเรกทอรีชื่อ“ HelloWorld” ภายใต้ปลั๊กอิน \ rotdir และสร้างไฟล์ชื่อ helloWorld.php ที่รูทของไดเรกทอรีปลั๊กอิน คุณสามารถตรวจสอบไฟล์ config.php เพื่อค้นหาค่าสำหรับตัวแปรปลั๊กอิน \ _RootDir คัดลอกรหัสด้านล่างลงในไฟล์ helloWorld.php
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
คุณต้องตั้งค่า $ coderoot เป็นไดเรกทอรีของปลั๊กอินของคุณ เพื่อให้แน่ใจว่าปลั๊กอินเริ่มต้นอย่างถูกต้องคุณต้องเรียกตัวสร้างหลัก สร้างไฟล์ main.php และวางไว้ในไดเรกทอรีปลั๊กอินของคุณ คัดลอกรหัสต่อไปนี้ลงไป
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
วางไฟล์คลาส helloWorld.php และไดเรกทอรีปลั๊กอินของคุณในปลั๊กอิน Rootdir เพื่อติดตั้งปลั๊กอิน หากต้องการเปิดใช้งานปลั๊กอินให้คลิกที่แท็บ config ในแถบเมนูจากนั้นคลิกที่ปลั๊กอินจัดการ หน้าปลั๊กอินจะแสดงรายการปลั๊กอินที่มีอยู่และคุณสามารถเปิด/ปิดใช้งานแบบฟอร์มปลั๊กอินของคุณที่นั่น
คุณสามารถเข้าถึงปลั๊กอินของคุณได้ด้วย URL ต่อไปนี้เช่น http://example.com/admin/?page=main&pi=helloworld แทนที่ Example.com ด้วยชื่อโดเมนของคุณ

## บทสรุป   {#con}
เราได้เรียนรู้พื้นฐานของ **phplist plugin**  การพัฒนาและสร้างปลั๊กอินตัวอย่าง เป็นจุดเริ่มต้นคุณสามารถทำตามแนวทางนี้และสำรวจการพัฒนาปลั๊กอินเพิ่มเติมเพื่อปรับปรุงการทำงาน
ในที่สุด [**containerize.com **][6] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนโพสต์บล็อกเกี่ยวกับผลิตภัณฑ์โอเพนซอร์สล่าสุดเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [ **จดหมายข่าว**  ][7] หมวดหมู่สำหรับการอัปเดตล่าสุด

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง
  *[**phplist** ][8]
  *[**MailTrain** ][9]
  *[**listmonk** ][10]
  *[**Moonmail** ][11]
  *[**Mailman** ][12]
  *[**ซอฟต์แวร์จดหมายข่าวโอเพนซอร์ส 5 อันดับแรกในปี 2021** ][13]
  *[**วิธีกำหนดค่าแอปพลิเคชันหลายผู้เช่าใน phplist** ][14]
  *[**วิธีการสร้างและส่งจดหมายข่าวโดยใช้ phplist** ][15]

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
