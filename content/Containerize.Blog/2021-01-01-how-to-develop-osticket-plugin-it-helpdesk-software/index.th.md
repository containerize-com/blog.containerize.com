---
title: "วิธีพัฒนาปลั๊กอิน Osticket ซอฟต์แวร์ช่วยเหลือ" 
seoTitle: "วิธีพัฒนาปลั๊กอิน Osticket ซอฟต์แวร์ช่วยเหลือ" 
description: "ทำตามบทช่วยสอนนี้เพื่อเรียนรู้วิธีพัฒนาปลั๊กอิน Osticket ซอฟต์แวร์ช่วยเหลือด้านไอทีนี้จัดการการสื่อสารของลูกค้าและแก้ไขปัญหาการแก้ปัญหาโดยอัตโนมัติ" 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "สร้างปลั๊กอิน Osticket เพื่อเพิ่มคุณสมบัติในการติดตั้ง Osticket ของคุณ ระบบตั๋วโอเพนซอร์ซนี้ช่วยให้ธุรกิจจัดการลูกค้าได้อย่างมีประสิทธิภาพ" 
url: /th/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## สร้างปลั๊กอิน Osticket เพื่อเพิ่มคุณสมบัติในการติดตั้ง Osticket ของคุณ ระบบตั๋วโอเพนซอร์ซนี้ช่วยให้ธุรกิจจัดการลูกค้าได้อย่างมีประสิทธิภาพ

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="ซอฟต์แวร์ช่วยเหลือ">}}


## ภาพรวม
ยินดีต้อนรับสู่โพสต์บล็อกที่น่าสนใจอื่นในซีรีส์ของ [Helpdesk Ticketing Software] [1] เราได้เผยแพร่โพสต์บล็อกบางส่วนในหัวข้อต่าง ๆ เช่น [ระบบช่วยเหลือที่ได้รับความนิยมจากการจำหน่ายตั๋วฟรีและระบบการดูแลลูกค้า] [2], [ระบบการจองตั๋วอัตโนมัติโดยใช้ WordPress และ Osticket] [3] และอีกมากมาย อย่างไรก็ตาม Osticket เป็นระบบช่วยเหลือที่ใช้ตั๋วโอเพนซอร์สที่ออกแบบมาเพื่อให้ลูกค้ารายงานการสอบถามและการร้องเรียนเพื่อสนับสนุนพนักงาน ระบบสนับสนุนฟรีนี้ให้โมดูลการจัดการที่ใช้งานง่ายซึ่งแปลงการสอบถามที่มาจากโทรศัพท์อีเมลและแบบฟอร์มเป็นตั๋วบนเว็บ มีคุณสมบัติและตัวเลือกที่หลากหลายที่ช่วยให้พนักงานสนับสนุนสามารถมอบประสบการณ์การสนับสนุนลูกค้าที่เหลือเชื่อสำหรับลูกค้า
ระบบจำหน่ายตั๋วโอเพ่นซอร์ส (Osticket) นี้เป็นกรอบการสนับสนุนตั๋วสนับสนุนที่ยืดหยุ่นทั้งหมดซึ่งมีตัวเลือกมากมายเพื่อช่วยปรับแต่งทุกส่วนของประสบการณ์การสนับสนุนลูกค้าเช่นข้อความที่ส่งไปยังลูกค้าหน้าและการแจ้งเตือน ในบทความของเขาเราจะได้เรียนรู้การพัฒนาปลั๊กอิน Osticket เพื่อปรับปรุงการทำงานตามความต้องการของเรา ในการทำเช่นนั้นเราจะครอบคลุมหัวข้อต่อไปนี้:
  * [ทำไมต้องใช้ปลั๊กอิน?] [4]
  * [ข้อกำหนด] [5]
  * [วิธีการพัฒนาปลั๊กอินของ Osticket?] [6]
  * [บทสรุป] [7]

## ทำไมต้องใช้ปลั๊กอิน? {#ทำไม}
ในหัวข้อนี้เราจะได้เรียนรู้วิธีการสร้างปลั๊กอินอย่างง่ายเพื่อขยายฟังก์ชันการทำงานหลักของซอฟต์แวร์ HelpDesk ** (Osticket) ปลั๊กอินเป็นซอฟต์แวร์ชิ้นหนึ่งที่ขยายฟังก์ชันการทำงานหลักของแอพ/ซอฟต์แวร์ใด ๆ นอกจากนี้ยังมีซอฟต์แวร์โอเพ่นซอร์สระดับองค์กรจำนวนมากที่มีปลั๊กอินขนาดใหญ่ที่ขยายฟังก์ชันการทำงาน นอกจากนี้ซอฟต์แวร์โอเพ่นซอร์สยอดนิยมเหล่านี้ ได้แก่ WordPress, Joomla และอีกมากมาย เหนือสิ่งอื่นใดชุมชนที่มีชีวิตชีวาและมีชีวิตสนับสนุนและพัฒนาปลั๊กอินตามความต้องการ อย่างไรก็ตามเฟรมเวิร์กเสนอเอกสารที่ครอบคลุมเกี่ยวกับการพัฒนาปลั๊กอิน ต่อไปนี้เป็นเหตุผลบางประการที่แอพสนับสนุนปลั๊กอิน:
  * ช่วยให้นักพัฒนาบุคคลที่สามสามารถสร้างส่วนประกอบซอฟต์แวร์ที่ขยายการทำงานของแอปพลิเคชัน
  * ปลั๊กอินช่วยให้สามารถรวมคุณสมบัติใหม่ได้อย่างง่ายดาย
  * นอกจากนี้ยังไม่เพิ่มขนาดและความซับซ้อนของแอปพลิเคชัน
  * เช่นเดียวกับนักพัฒนาสามารถเก็บและจัดการรหัสปลั๊กอินแยกต่างหากจากแอปพลิเคชันหลัก

## ข้อกำหนด {#Requirements}
ส่วนนี้ของซอฟต์แวร์ HelpDesk ** นี้อธิบายถึงข้อกำหนดที่จำเป็นในการพัฒนาปลั๊กอิน Osticket
  * PHP เวอร์ชัน 5.6 หรือสูงกว่า
  * การติดตั้ง Osticket
  * ความรู้พื้นฐาน PHP

## จะพัฒนาปลั๊กอินของ Osticket ได้อย่างไร? {#ยังไง}
ในส่วนนี้เราจะผ่านขั้นตอนของการพัฒนาปลั๊กอินของระบบตั๋วโอเพ่นซอร์ส (Osticket)
  * สร้างโฟลเดอร์ของปลั๊กอินในไดเรกทอรี /รวม /ปลั๊กอิน ในบทช่วยสอนนี้เราจะสร้างปลั๊กอินตัวอย่างที่รวมระบบ ** Osticket ** กับ Redmine
  * ควรมีไฟล์ที่จำเป็นต่อไปนี้: plugin.php และ config.php
  * ไฟล์ plugin.php มีคำอธิบายทั่วไปของปลั๊กอิน ใช้รหัสตัวอย่างต่อไปนี้ในไฟล์ plugin.php:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * จากนั้นแทนที่ ID, ชื่อ, ชื่อผู้เขียนและชื่อคลาสปลั๊กอินจากรหัสด้านบน
  * หลังจากนั้นเราต้องแสดงตัวเลือกการกำหนดค่าปลั๊กอินลงในแบ็กเอนด์ของ Osticket เพิ่มรหัสตัวอย่างต่อไปนี้ลงในไฟล์ config.php
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * เป็นผลให้สิ่งนี้จะสร้างฟิลด์ชื่อผู้ใช้และรหัสผ่านในหน้าการกำหนดค่าดังที่แสดงที่นี่:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="คู่มือผู้เริ่มต้นในการพัฒนาปลั๊กอิน Osticket">}}

  * ต่อไปนี้เป็นรายการของฟิลด์คลาสที่มีอยู่พวกเขาจะถูกกำหนดใน `[install_root]/include/class.forms.php`:
      * Textboxfield - กล่องข้อความ
      * textareafield - พื้นที่ข้อความ
      * Threadentryfield - พื้นที่ข้อความที่สมบูรณ์ใช้สำหรับหัวข้อการสนทนา
      * DateTimeField - JQuery DatePicker
      * Phonefield - กล่องข้อความที่เหมาะสำหรับหมายเลขโทรศัพท์
      * Booleanfield - ช่องทำเครื่องหมาย
      * ChoiceField-ฟิลด์เลือกแบบเลื่อนลง
      * Sectionbreakfield - ส่วนแบ่งส่วนแนวนอน
  * หลังจากนั้นเราต้องสร้างไฟล์ที่จะกำหนดฟังก์ชั่นของปลั๊กอิน
  * ชื่อไฟล์ควรเหมือนกับที่กำหนดไว้ในไฟล์ plugin.php i.e redmine.php
  * สิ่งนี้จะต้องถือ dynabicredmineplugin ชั้นเรียน ตรวจสอบรหัสตัวอย่างต่อไปนี้:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * รหัสนี้ดึงค่าการกำหนดค่าและคุณสามารถใช้ค่าเหล่านี้ในฟังก์ชั่นของคุณ ในไฟล์นี้คุณสามารถเพิ่มฟังก์ชั่นของปลั๊กอินของคุณเป็นความต้องการของคุณ

## บทสรุป {#conclusion}
สิ่งนี้นำเราไปสู่จุดสิ้นสุดของโพสต์บล็อกนี้ Osticket เป็นซอฟต์แวร์การจัดการตั๋วที่มีโครงสร้างปลั๊กอินสำหรับนักพัฒนาเพื่อให้พวกเขาสามารถเพิ่มฟังก์ชั่นใหม่ตามข้อกำหนด ปลั๊กอินเป็นส่วนประกอบที่ขยายฟังก์ชันการทำงานหลักของแอพ/ซอฟต์แวร์ใด ๆ ในบทความของเขาเราได้พูดถึงการพัฒนาปลั๊กอินของระบบสนับสนุนลูกค้า ** นี้ ** (Osticket) ซึ่งช่วยให้นักพัฒนาสามารถเพิ่มคุณสมบัติและการปรับปรุงที่กำหนดเองตามความต้องการของพวกเขา ดังนั้นโพสต์บล็อกนี้จะช่วยคุณได้จริง ๆ หากคุณกำลังมองหาการปรับใช้ซอฟต์แวร์ HelpDesk ** สำหรับธุรกิจของคุณ นอกจากนี้ยังมีซอฟต์แวร์ตั๋วช่วยเหลือ ** อื่น ๆ ** และบทความที่กล่าวถึงในส่วน "สำรวจ" ด้านล่าง
ในที่สุด [containerize.com] [8] กำลังเขียนโพสต์บล็อกอย่างต่อเนื่องในผลิตภัณฑ์และหัวข้อโอเพนซอร์ซเพิ่มเติม ดังนั้นโปรดติดต่อกับ [ซอฟต์แวร์การออกตั๋วช่วยเหลือ] [1] หมวดหมู่สำหรับการอัปเดตปกติ ยิ่งกว่านั้นคุณสามารถติดตามเราในบัญชีโซเชียลมีเดียของเรา [Facebook] [9], [LinkedIn] [10] และ [Twitter] [11]

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [uvdesk] [12]
  * [Zammad] [13]
  * [Freescout] [14]
  * [ช่วยเหลือ] [15]
  * [โอเพ่นซอร์สที่ดีที่สุดและซอฟต์แวร์ช่วยให้ฟรี] [16]
  * [ระบบช่วยเหลือด้านการดูแลลูกค้าและการดูแลลูกค้ายอดนิยมฟรี] [2]
  * [วิธีการตั้งค่าซอฟต์แวร์แผนกช่วยเหลือออนไลน์โดยใช้ Osticket] [17]
  * [วิธีการใช้งานหลายคนใน Osticket] [18]
  * [ระบบจำหน่ายตั๋วอัตโนมัติโดยใช้ WordPress และ Osticket] [3]
  * [ดำเนินธุรกิจโดยอัตโนมัติโดยใช้ซอฟต์แวร์ฟรีและโอเพ่นซอร์ส] [19]
[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
