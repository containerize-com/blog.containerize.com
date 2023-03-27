---
title: "คู่มือผู้เริ่มต้นในการสร้างโมดูล Prestashop" 
seoTitle: "คู่มือผู้เริ่มต้นในการสร้างโมดูล Prestashop" 
description: "Prestashop เป็นซอฟต์แวร์อีคอมเมิร์ซโอเพนซอร์สที่มีประสิทธิภาพและคุ้มค่าในการตั้งค่าร้านค้าออนไลน์ Prestashop Addons ช่วยเหลือเจ้าของร้านค้าเพื่อขยายฟังก์ชั่น" 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "โมดูล Prestashop เป็นโปรแกรมขนาดเล็กที่ช่วยให้คุณปรับปรุงการทำงานของร้านค้าของคุณ เราจะเรียนรู้วิธีการสร้างโมดูลพื้นฐานในบทช่วยสอนนี้" 
url: /th/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## โมดูล Prestashop เป็นโปรแกรมขนาดเล็กที่ช่วยให้คุณปรับปรุงการทำงานของร้านค้าของคุณ เราจะเรียนรู้วิธีการสร้างโมดูลพื้นฐานในบทช่วยสอนนี้

{{< figure align=center src="images/prestashop-module.png" alt="โมดูล Prestashop">}}

**Prestashop** เป็นซอฟต์แวร์อีคอมเมิร์ซที่ฟรีและโอเพ่นซอร์ส 100% สิ่งนี้ช่วยให้เจ้าของร้านสามารถตั้งค่าสถานะออนไลน์และขยายธุรกิจได้อย่างง่ายดาย Prestashop มาพร้อมกับคุณสมบัติเริ่มต้นและคุณสามารถใช้ฟังก์ชันการทำงานมากขึ้นสำหรับความต้องการทางธุรกิจของคุณเป็นครั้งคราว Marketplace for Prestashop เป็นสถานที่ที่ยอดเยี่ยมในการค้นหาคุณสมบัติเสริมที่สามารถใช้ในการขยายฟังก์ชั่นร้านค้า นอกจากนี้คุณสามารถค้นหาโมดูลฟรีและแบบชำระเงินได้ที่ Marketplace อย่างไรก็ตามคุณสามารถสร้างโมดูลที่กำหนดเองได้ตั้งแต่เริ่มต้นเช่นกัน
เราจะหารือเกี่ยวกับหัวข้อด้านล่างโดยละเอียดถึง **สร้างโมดูล Prestashop** 
  * [ข้อกำหนด][1]
  * [พื้นฐานของการพัฒนาโมดูล][2]
  * [สร้างโมดูล Prestashop ของเรา][3]
  * [บทสรุป][4]

## ความต้องการ {#Req}

  * ติดตั้ง Prestashop 1.6 หรือมากกว่า
  * คุ้นเคยกับ Prestashop
  * ความเข้าใจเกี่ยวกับ PHP

## พื้นฐานของการพัฒนาโมดูล {#Basics}

ก่อนที่คุณจะเริ่มเขียนโค้ดสิ่งสำคัญคือต้องรู้เกี่ยวกับแนวคิดหลักสำหรับการพัฒนาโมดูล **Prestashop** มันจะช่วยให้คุณสามารถสร้างและจัดการโมดูลของคุณได้อย่างรวดเร็ว
**การกำหนดค่า** - การกำหนดค่าช่วยให้คุณสามารถบันทึกข้อมูลในฐานข้อมูลร้านค้าโดยไม่ต้องใช้ตารางเฉพาะโมดูล ตารางการกำหนดค่ามีรายการคุณสมบัติของคีย์ค่าที่สามารถเข้าถึงได้จากทุกที่
**hooks** - hooks เป็นวิธีการเชื่อมต่อกิจกรรม prestashop ใด ๆ กับรหัสของคุณ คุณสามารถใช้ hooks เพื่อวางรหัสของคุณในหน้าและสำหรับการกระทำเฉพาะเช่นการส่งอีเมลในเหตุการณ์บางอย่าง
**วิดเจ็ต** - นักพัฒนาโมดูลใช้วิดเจ็ตเพื่อแสดงเนื้อหาตามที่จำเป็น
**หลักคำสอน** - หลักคำสอนคือ ORM อนุญาตให้คุณจัดการข้อมูลฐานข้อมูลของคุณผ่านวัตถุ สิ่งนี้มีเลเยอร์นามธรรมที่ช่วยให้คุณสามารถทำการแทรก/อัปเดตด้วยการโทรอย่างง่าย

## สร้างโมดูล Prestashop ของเรา {#Create}

* สร้างไดเรกทอรีโมดูลชื่อ **myfirstmodule**ใน**โมดูล** ไดเรกทอรีของการติดตั้ง Prestashop ของคุณ วางไฟล์ทั้งหมดในไดเรกทอรีโมดูลของคุณ
* สร้างไฟล์หลักด้วยชื่อ **myfirstmodule.php** และคัดลอกรหัสต่อไปนี้
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
* สร้าง **ติดตั้ง ()**และ **ถอนการติดตั้ง ()** วิธีการ เพิ่มวิธีการต่อไปนี้ใน**myfirstmodule.php** ไฟล์
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * โทรหาวิธีพิเศษเพื่อเปิดใช้งานตะขอที่ลงทะเบียนของเรา เราจะใช้วิธีการเหล่านี้เพื่อแสดง“ Hello World!” ส่งข้อความไปยังแถบด้านข้าง เพิ่มรหัสต่อไปนี้ใน **myfirstmodule.php** ไฟล์
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
* ในที่สุดส่วนเปิดผู้ดูแลระบบอัปโหลดและ **ติดตั้งโมดูล Prestashop** 

## บทสรุป {#บทสรุป}

เราได้พูดคุยเกี่ยวกับแนวคิดหลักสำหรับการสร้างโมดูล **prestashop** ในบทช่วยสอนนี้ นอกจากนี้เราได้พัฒนาโมดูลพื้นฐานที่สามารถใช้เป็นจุดเริ่มต้นสำหรับโมดูลล่วงหน้ามากขึ้น [containerize.com][5] ทำงานอย่างต่อเนื่องในการโพสต์บล็อกการสอนใหม่ สำหรับการอัปเดตล่าสุดโปรดติดต่อกับหมวดหมู่ [ซอฟต์แวร์ตะกร้าสินค้า][6]

## สำรวจ
คุณสามารถค้นหาลิงค์ต่อไปนี้ที่มีประโยชน์นอกเหนือจากการสอนการสร้างโมดูล **Prestashop** 
  * [Prestashop - ซอฟต์แวร์ตะกร้าสินค้าฟรี][7]
  * [ซอฟต์แวร์ตะกร้าสินค้าโอเพ่นซอร์ส 5 อันดับแรกในปี 2020][8]



[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
