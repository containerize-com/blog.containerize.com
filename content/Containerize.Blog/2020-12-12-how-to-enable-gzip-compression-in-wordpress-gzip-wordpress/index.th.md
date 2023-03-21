---
title: "วิธีเปิดใช้งานการบีบอัด GZIP ใน WordPress | gzip wordpress" 
seoTitle: "วิธีเปิดใช้งานการบีบอัด GZIP ใน WordPress | gzip wordpress" 
description: "คุณต้องการเปิดใช้งานการบีบอัด GZIP ใน WordPress เพื่อเร่งเว็บไซต์ของคุณหรือไม่? ในโพสต์บล็อกนี้เราจะเรียนรู้วิธีเปิดใช้งานการบีบอัดใน WordPress" 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "ความเร็วหน้าและเวลาโหลดเป็นปัจจัยสำคัญสำหรับการจัดอันดับที่ดีขึ้นในเครื่องมือค้นหา การบีบอัด GZIP สามารถทำให้เกิดขึ้นและให้ความได้เปรียบในการแข่งขัน" 
url: /th/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## ความเร็วหน้าและเวลาโหลดเป็นปัจจัยสำคัญสำหรับการจัดอันดับที่ดีขึ้นในเครื่องมือค้นหา การบีบอัด GZIP สามารถทำให้เกิดขึ้นและให้ความได้เปรียบในการแข่งขัน

{{< figure align=center src="images/Asset-1.png" alt="เปิดใช้งานการบีบอัด GZIP">}}


## ภาพรวม
ในฐานะที่เป็น Google และเครื่องมือค้นหาอื่น ๆ กำลังพิจารณาประสบการณ์การใช้งานของเว็บไซต์ (UX) เป็นปัจจัยสำคัญในอัลกอริทึมการจัดอันดับ การปรับปรุงและเพิ่มประสิทธิภาพเว็บไซต์ของคุณสำหรับการจัดอันดับสูงสุด หนึ่งในปัจจัยที่สำคัญที่สุดที่จะต้องใส่ใจคือความเร็วของหน้าและเวลาในการโหลด และวิธีที่เร็วและง่ายที่สุดในการปรับปรุงความเร็วและประสิทธิภาพของไซต์คือการเปิดใช้งานการบีบอัด GZIP บนเว็บไซต์ของคุณ มีโอกาสที่เว็บโฮสต์ของคุณจะเปิดใช้งานการบีบอัด GZIP ให้คุณโดยอัตโนมัติ ถ้าไม่คุณต้องทำภารกิจสำคัญนี้ด้วยตัวเอง
ในบทความนี้เราจะแสดงวิธีการเปิดใช้งานการบีบอัด GZIP ใน WordPress ได้อย่างง่ายดาย มาเริ่มกันเลย!
  *[**การบีบอัด GZIP คืออะไร** ?][1]
  *[**การบีบอัด GZIP ทำงานอย่างไร** ][2]
  ***[วิธีการตรวจสอบว่าเปิดใช้งานการบีบอัด GZIP หรือไม่][3]** 
  ***[เปิดใช้งานการบีบอัด GZIP ใน WordPress][4]** 
  ***[บทสรุป][5]** 

## การบีบอัด GZIP คืออะไร?   {#อะไร}
GZIP เป็นรูปแบบไฟล์ **และแอปพลิเคชันซอฟต์แวร์**  ใช้สำหรับการบีบอัดไฟล์และการบีบอัด เว็บเซิร์ฟเวอร์หรือซอฟต์แวร์อื่น ๆ ใช้การบีบอัด GZIP เพื่อบีบอัดไฟล์ข้อมูลก่อนที่จะถูกส่งไปยังเบราว์เซอร์ของผู้ใช้ สิ่งนี้จะช่วยลดเวลาดาวน์โหลดไฟล์ซึ่งทำให้เว็บไซต์ของคุณเร็วขึ้น เบราว์เซอร์ที่ทันสมัยทั้งหมดรองรับการบีบอัด GZIP
สิ่งสำคัญคือต้องทราบว่าจะต้องเปิดใช้งานการบีบอัด GZIP บนเว็บเซิร์ฟเวอร์ของคุณก่อนที่คุณจะสามารถเปิดใช้งานการบีบอัดไฟล์และโฟลเดอร์ ในไม่ช้าเราจะเห็นวิธีการตรวจสอบว่าเว็บเซิร์ฟเวอร์ของคุณเปิดใช้งาน GZIP หรือไม่

## การบีบอัด GZIP ทำงานอย่างไร?   {#งาน}
GZIP ซึ่งเป็นวิธีการบีบอัดที่ได้รับความนิยมมากที่สุดใช้โดยเว็บเซิร์ฟเวอร์และเบราว์เซอร์เพื่อบีบอัดและคลายเนื้อหาตามที่ส่งผ่านทางอินเทอร์เน็ต มันถูกใช้เป็นส่วนใหญ่ในไฟล์รหัสและข้อความ GZIP สามารถลดขนาดของไฟล์ JavaScript, CSS และ HTML ได้มากถึง 90% โดยค่าเริ่มต้นการบีบอัด GZIP ไม่ได้บีบอัดภาพหรือวิดีโอ สำหรับสิ่งนั้นคุณจะต้องเพิ่มประสิทธิภาพรูปภาพสำหรับเว็บบนไซต์ WordPress ของคุณ นี่คือเหตุผลที่เครื่องมือทดสอบความเร็วของเว็บไซต์ส่วนใหญ่เช่น Google Pagespeed Insights ขอแนะนำให้เปิดใช้งานการบีบอัด GZIP
เมื่อเว็บเซิร์ฟเวอร์ได้รับคำขอสำหรับหน้าเว็บเว็บเซิร์ฟเวอร์จะตรวจสอบส่วนหัวของคำขอเพื่อตรวจสอบว่าเบราว์เซอร์รองรับ GZIP หรือไม่ ถ้าเป็นเช่นนั้นเซิร์ฟเวอร์จะสร้างมาร์กอัปสำหรับหน้าก่อนที่จะใช้ GZIP GZIP แปลงมาร์กอัป HTML เป็นข้อมูลที่ถูกบีบอัดซึ่งจะถูกส่งไปยังผู้ใช้ปลายทาง เมื่อผู้ใช้ปลายทางได้รับข้อมูลที่ถูกบีบอัดเบราว์เซอร์จะคลายการบีบอัด

## **วิธีการตรวจสอบว่าเปิดใช้งานการบีบอัด GZIP หรือไม่** {#Verify}
เว็บโฮสต์ของคุณอาจเปิดใช้งานการบีบอัดใน WordPress โดยค่าเริ่มต้น อย่างไรก็ตามนี่ไม่ใช่กรณีเสมอไป คุณสามารถพิจารณาได้ว่าคุณเปิดใช้งานการบีบอัด GZIP โดยใช้ Devtools chrome หรือไม่
เปิดไซต์ของคุณในเบราว์เซอร์ Chrome จากนั้นคลิกขวาที่ใดก็ได้ในหน้าและเลือก **ตรวจสอบ  **เป็น **  เปิดเครื่องมือนักพัฒนา** 
ถัดไปนำทางไปยังแท็บเครือข่าย **และคลิกที่ URL หลักของเว็บไซต์จากส่วน“ ชื่อ” เลือกแท็บ  **ส่วนหัว **  จากนั้นเลื่อนลงเพื่อค้นหาส่วนหัวการตอบกลับ **** :

{{< figure align=center src="images/gzip-determine.gif" alt="ตรวจสอบการเข้ารหัสเนื้อหา">}}

ที่นั่นคุณจะเห็นว่าเปิดใช้งานการบีบอัด GZIP หรือไม่

## เปิดใช้งานการบีบอัด GZIP ใน WordPress   {#enable}
หากคุณได้พิจารณาแล้วว่าการบีบอัด WordPress GZIP ยังไม่ได้เปิดใช้งาน ** มีหลายวิธีที่คุณสามารถใช้เพื่อให้ทำงานได้ วิธีที่ง่ายที่สุดคือการใช้ปลั๊กอิน WordPress บางอย่างเช่น [WP Rocket][6], [WP Super Cache][7] หรือ [W3 Total Cache][8] อย่างไรก็ตามคุณสามารถทำสิ่งนี้ได้ด้วยตนเองที่ระดับเซิร์ฟเวอร์โดยไฟล์. htaccess หรือโดยการอัปเดต Nginx Config ของคุณ

## # โดยการแก้ไขไฟล์. htaccess
หนึ่งในวิธีที่พบบ่อยที่สุดในการเปิดใช้งานการบีบอัด WordPress GZIP คือการแก้ไขไฟล์ _.htaccess_ ของคุณ ** อย่างไรก็ตามสิ่งนี้เกี่ยวข้องกับความเสี่ยงที่จะทำลายบางสิ่งบางอย่าง นี่คือไฟล์เซิร์ฟเวอร์ที่ละเอียดอ่อนและการย้ายผิดครั้งเดียวอาจทำให้เกิดปัญหามากมาย
เพื่อลดความเสี่ยงให้แน่ใจว่าได้บันทึกสำเนาไฟล์ต้นฉบับ **ก่อนทำการเปลี่ยนแปลงใด ๆ ไฟล์ _.htaccess_ ควรอยู่ในโฟลเดอร์รูท  **ของเว็บไซต์ของคุณ**   หลังจากที่คุณเปิด _.htaccess_ ให้เพิ่มรหัสต่อไปนี้ด้านล่างส่วนที่ทำเครื่องหมายด้วยแท็ก `# เริ่ม WordPress` และ`# end wordpress '
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
**บันทึกไฟล์**  และอัปโหลดไปยังเซิร์ฟเวอร์ของเว็บไซต์ของคุณ เมื่อเสร็จแล้วให้ตรวจสอบว่า GZIP เปิดใช้งานโดยใช้ devtools ของ Chrome ตามที่อธิบายไว้ข้างต้นหรือไม่

## เปิดใช้งานการบีบอัด GZIP ใน nginx
ถึง **เปิดใช้งานการบีบอัด  **รวมถึงคำสั่ง **  gzip  **ด้วยพารามิเตอร์ ON **  gzip  **on; โดยค่าเริ่มต้น **  nginx**  บีบอัดการตอบสนองเฉพาะกับข้อความประเภท MIME/HTML ในการบีบอัดการตอบสนองกับประเภท MIME อื่น ๆ ให้รวมคำสั่ง GZIP_TYPES และแสดงรายการประเภทเพิ่มเติม
คุณสามารถเปิดใช้งานการบีบอัด GZIP ใน WordPress โดย **เปิดไฟล์ _nginx.conf_ ของคุณ**  และเพิ่มรหัสต่อไปนี้:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## บทสรุป   {#conclusion}
นี่คือจุดสิ้นสุดของการสอน GZIP WordPress นี้ มีหลายวิธีในการเพิ่มประสิทธิภาพเว็บไซต์ของคุณด้วยความเร็วและประสิทธิภาพ ในบทช่วยสอน GZIP WordPress นี้เราได้ผ่านการบีบอัด GZIP ความสำคัญของการบีบอัด GZIP และขั้นตอนการติดตั้ง นอกจากนี้ยังมีลิงก์ที่เกี่ยวข้องมากมายที่กล่าวถึงในส่วน "สำรวจ" ด้านล่าง
ในที่สุด [containerize.com][9] กำลังเขียนบทความเกี่ยวกับผลิตภัณฑ์โอเพ่นซอร์สเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [บล็อก][10] สำหรับข่าวปกติและการอัปเดต

## สำรวจ
  * [Matomo][11]
  * [น่าเชื่อถือ][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [ทำอย่างไรจึงจะเทียบกับ WordPress ด้วย Docker Compose][15]
  * [เครื่องมือวิเคราะห์ธุรกิจฟรีช่วยธุรกิจของคุณได้อย่างไร][16]
  * [Top 5 Top Open Source Business Intelligence Tools ของ 2021][17]
  * [วิธีการติดตั้งปลั๊กอินใน WordPress | ฟอรัมวานิลลา][18]
  * [เพิ่มโอกาสในการขายของคุณด้วยการรวม CivICRM WordPress ฟรี][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
