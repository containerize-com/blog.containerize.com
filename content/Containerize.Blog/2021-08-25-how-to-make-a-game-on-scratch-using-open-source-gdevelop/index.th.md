---
title: "วิธีสร้างเกมบนรอยขีดข่วนโดยใช้โอเพนซอร์ส GDEvelop" 
seoTitle: "วิธีสร้างเกมบนรอยขีดข่วนโดยใช้โอเพนซอร์ส GDEvelop" 
description: "วิธีสร้างเกมตั้งแต่เริ่มต้น? Gdevelop นำเสนอ UI เชิงตรรกะที่เต็มไปด้วยส่วนประกอบและพฤติกรรมมากมายเพื่อสร้างวิดีโอเกมสำหรับเว็บเดสก์ท็อป iOS และ Android" 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "บทช่วยสอนการพัฒนาเกมนี้อธิบายพื้นฐานของการสร้างเกมแข่งรถบรรทุก คุณสามารถติดตั้งหรือใช้แอพออนไลน์เพื่อสร้างวิดีโอเกมที่น่าตื่นเต้น" 
url: /th/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## บทช่วยสอนการพัฒนาเกมนี้อธิบายพื้นฐานของการสร้างเกมแข่งรถบรรทุก คุณสามารถติดตั้งหรือใช้แอพออนไลน์เพื่อสร้างวิดีโอเกมที่น่าตื่นเต้น

{{< figure align=center src="images/gdevelop-game.png" alt="วิธีสร้างเกมบนรอยขีดข่วน">}}


## **ภาพรวม** 
ในอดีตที่ผ่านมาเราได้เผยแพร่โพสต์บล็อกจำนวนมากบนซอฟต์แวร์พัฒนาเกมโอเพนซอร์สฟรีเช่น [ซอฟต์แวร์พัฒนาเกมฟรี 5 อันดับแรกในปี 2564][1][เริ่มต้นด้วยการพัฒนาเกมโดยใช้มหาอำนาจ][2], [เกม การสอนการพัฒนา การเคลื่อนไหวของผู้เล่นใน GDEVELD. ][3], [HTML5 การสอนการพัฒนาเกมสำหรับโปรแกรมเมอร์วิดีโอเกม][4], [อุตสาหกรรมเกมทั่วโลกใช้ประโยชน์จากซอฟต์แวร์โอเพ่นซอร์สอย่างไร][5] และ [GDEVELD ]. ความก้าวหน้าครั้งล่าสุดในยุคอินเทอร์เน็ตได้นำแนวโน้มใหม่ ๆ ในอุตสาหกรรมวิดีโอเกม แพลตฟอร์มการสร้างเกมโอเพ่นซอร์สให้ระบบนิเวศที่สมบูรณ์เพื่อพัฒนาเกมอย่างอิสระและนักพัฒนาจากนั้นจึงเติบโตขึ้นมาเป็นแพลตฟอร์มนั้นตามความต้องการ ในโพสต์บล็อกนี้เราจะได้เรียนรู้วิธีสร้างเกมด้วยรอยขีดข่วนโดยใช้ [GDEvelop][7] โดยครอบคลุมประเด็นต่อไปนี้
* **[ทำไมเราควรใช้ gdevelop?][8]** 
* **[การตั้งค่าโครงการ][9]** 
* **[วิธีการเตรียมพื้นหลังและวัตถุ?][10]** 
* **[เพิ่ม behviors ลงในวัตถุ][11]** 
* **[เรียกใช้เกม][12]** 
* **[บทสรุป][13]** 

## ทำไมเราควรใช้ GDEvelop? {#why}

[GDEvelop][7] เป็นซอฟต์แวร์เกมโอเพ่นซอร์ส มันมาพร้อมกับความสามารถในการโฮสต์ตนเองและเป็นข้ามแพลตฟอร์มในธรรมชาติ คุณสามารถดาวน์โหลดและติดตั้งได้หรือคุณสามารถใช้เวอร์ชันออนไลน์เพื่อเล่นได้ ผู้ใช้ไม่จำเป็นต้องได้รับความรู้การเขียนโปรแกรมใด ๆ เพื่อใช้ตัวสร้างเกมนี้ เหนือสิ่งอื่นใดมันมีส่วนต่อประสานกับผู้ใช้ Drag & Drop ที่มาพร้อมกับพฤติกรรมเกมที่สร้างไว้ล่วงหน้าเทมเพลตและวัตถุ ซอฟต์แวร์พัฒนาเกมฟรีนี้สามารถกำหนดค่าได้สูงและเสนอการรวมเข้ากับห้องสมุดบุคคลที่สาม สำหรับข้อมูลเพิ่มเติมเกี่ยวกับเครื่องมือฟรีนี้คุณสามารถตรวจสอบลิงค์นี้เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับคุณสมบัติและกระบวนการตั้งค่า

## การตั้งค่าโครงการ {#setting}

ในส่วนนี้เราจะสร้างโครงการของเราสำหรับการสร้างเกมแข่งรถบรรทุกที่มีฟังก์ชั่นพื้นฐานบางอย่าง ติดตาม [ลิงก์][6] หากคุณต้องการตั้งค่าบนเครื่องในเครื่องของคุณหรือคุณสามารถใช้เวอร์ชันออนไลน์ได้โดยไปที่ [ลิงก์][14]
ดังนั้นคุณจะพบหน้าจอต่อไปนี้เมื่อคุณคลิกที่“ สร้างโครงการใหม่” จากนั้นคลิก“ เกมที่ว่างเปล่า”

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="วิธีสร้างเกมบนรอยขีดข่วน">}}

คุณสามารถดูแถบเมนูที่ด้านซ้ายมือของหน้าต่าง ตอนนี้คลิกที่ "ฉาก" จากนั้นดับเบิลคลิกที่ปุ่ม "คลิกเพื่อเพิ่มฉาก" หลังจากนั้นคุณจะลงจอดบนหน้าจอเกมที่คุณสามารถสร้างวัตถุเกมพื้นหลังและพฤติกรรม ก้าวไปข้างหน้าคลิกที่“ เพิ่มวัตถุใหม่” ที่วางไว้บนแผงด้านขวามือและคุณจะเห็นหน้าต่างต่อไปนี้

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="บทช่วยสอน Gdevelop">}}


## วิธีการเตรียมพื้นหลังและวัตถุ? {#prepare}

ในแถบค้นหาให้มองหาวัตถุรถบรรทุกและดับเบิลคลิกแล้วกด“ เพิ่มลงในเกม” เมื่อมันมาในผลลัพธ์ ทำซ้ำขั้นตอนนี้สำหรับสองล้อและวัตถุแพลตฟอร์ม ตอนนี้คลิกขวาที่วัตถุ Greenfloor และแก้ไข

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="การสอนการพัฒนาเกม">}}


## การเพิ่ม behviors ลงในวัตถุ {#add}

จากนั้นลากและวาง Greenfloor ไปที่หน้าจอเกมและปรับความสูงและความกว้างตามความต้องการของคุณ ลากวัตถุรถบรรทุกแล้ววางลงบนหน้าจอเกมแล้ววัตถุล้อ ก้าวไปข้างหน้าคลิกขวาที่ตัวรถบรรทุกแล้วกด“ แก้ไขวัตถุ Truckbody” คลิกที่พฤติกรรมคลิก“ เพิ่มพฤติกรรมลงในวัตถุ” และคลิก“ ฟิสิกส์เอ็นจิ้น 2.0” และคุณจะเห็นหน้าต่างต่อไปนี้

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="วิธีสร้างเกมบนรอยขีดข่วน">}}

ในหน้าต่างนี้คุณสามารถปรับเปลี่ยนการกำหนดค่าเช่นความหนาแน่นความกว้างและความสูง ตอนนี้ทำซ้ำกระบวนการเดียวกันสำหรับวัตถุ Greenfloor แต่เก็บประเภท "คงที่" และกดปุ่ม "ใช้" อีกครั้งแก้ไขวัตถุ Truckbody กด“ แก้ไขคะแนน” กด“ Edd Points” จากนั้นใส่ชื่อล้อหน้าของคุณ (เช่น FW ในบทช่วยสอนนี้) จุดจะถูกสร้างขึ้นบนวัตถุเพียงลากจุดนั้นไปยังตำแหน่งล้อ ทำซ้ำขั้นตอนนี้สำหรับล้อหลังด้วยและทำให้ X และ Y เป็น 0 ดังแสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="การสอนการพัฒนาเกม">}}

หลังจากนั้นแก้ไขทั้งวัตถุล้อและปรับคะแนน นอกจากนี้อีกครั้งไปที่ตัวเลือกการแก้ไขของล้อกดแท็บ "พฤติกรรม" เลือก "ฟิสิกส์เอ็นจิ้น 2.0" และตั้งค่าประเภทรัศมีและความหนาแน่นดังแสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="ซอฟต์แวร์ออกแบบเกม">}}

ตอนนี้คลิกที่แท็บ "ฉากใหม่" กด "เพิ่มเหตุการณ์ใหม่" กด "เพิ่มเงื่อนไข" ค้นหา "ที่จุดเริ่มต้นของฉาก" และกด "ตกลง" จากนั้นกด“ Add Action” สำหรับการค้นหา“ ตำแหน่ง Camera Center X” และตั้งค่าการกำหนดค่าต่อไปนี้

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="ซอฟต์แวร์พัฒนาเกมฟรี">}}

ตอนนี้คัดลอกการกระทำ แต่ตรวจสอบให้แน่ใจว่าการกระทำที่คัดลอกถูกตั้งค่าเป็น“ y” เพิ่มแอ็คชั่นอื่นที่ชื่อว่า“ เปลี่ยนการซูมกล้อง” ตั้งค่าเป็น 0.4 และลากแอ็คชั่นนี้ไปด้านบน เพิ่มการกระทำอื่นค้นหา“ เพิ่มข้อต่อล้อ” และตั้งค่าการกำหนดค่าสำหรับทั้งสองล้อดังที่แสดงด้านล่าง

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="คู่มือการพัฒนาเกม">}}

หลังจากนั้นเพิ่มเงื่อนไขใหม่ค้นหา“ คีย์กด” และตั้งค่าเป็นซ้าย ตอนนี้เพิ่มการกระทำเลือกล้อแรกค้นหาความเร็วเชิงเส้น X”, เครื่องหมายการปรับเปลี่ยนเป็น“ ลบ” และตั้งค่า 50 ทำซ้ำขั้นตอนนี้สำหรับคีย์ที่ถูกต้อง แต่ตรวจสอบให้แน่ใจว่าการปรับเปลี่ยนการลงชื่อเข้าใช้เพิ่มตามที่แสดงด้านล่าง

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="การสอนการพัฒนาเกม">}}


## เรียกใช้เกม {#run}

เมื่อทุกขั้นตอนเสร็จสิ้น ถึงเวลาที่จะเรียกใช้เกมโดยกดปุ่มที่วางไว้ที่มุมซ้ายบน มันจะเปิดเกมเข้าสู่หน้าต่างใหม่

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="วิธีสร้างเกมบนรอยขีดข่วน">}}


## บทสรุป {#บทสรุป}

นี่คือจุดสิ้นสุดของโพสต์บล็อกนี้และคุณได้รู้อย่างแน่นอนว่าจะทำเกมได้อย่างไร อย่างไรก็ตามมีซอฟต์แวร์การออกแบบเกม **ฟรีมากมาย** ในตลาดเนื่องจากอุตสาหกรรมนี้ได้รับความนิยมและความต้องการ มีสาเหตุหลายประการที่อยู่เบื้องหลังเช่นซอฟต์แวร์โอเพนซอร์สสามารถปรับขนาดได้กำหนดค่าได้คุ้มค่าและง่ายต่อการบำรุงรักษา นอกจากนี้ความต้องการสำหรับผู้สร้างเกมข้ามแพลตฟอร์มกำลังเพิ่มขึ้นเนื่องจากนักพัฒนาพบว่ามันสะดวกสบายที่จะสร้างเกมที่ทำงานบนแพลตฟอร์มยอดนิยมทั้งหมดเช่น Android, iOS, Web และ Desktop ในทางกลับกันการถือกำเนิดของการระบาดใหญ่ได้เปลี่ยนชีวิตของผู้คนและตอนนี้พวกเขาชอบที่จะอยู่ในบ้าน ดังนั้นผู้คนมักจะเล่นวิดีโอเกมในเวลาว่าง
ในที่สุด [containerize.com][15] พร้อมที่จะปรับปรุงฐานการสอนด้วยบทแนะนำการพัฒนาเกมที่น่าสนใจ****โปรดติดต่อกับ [ซอฟต์แวร์พัฒนาเกม][16] หมวดหมู่สำหรับการอัปเดตปกติ

## สำรวจ
* **[gdevelop][7]** 
* **[Godot][17]** 
* **[Superpowers][18]** 
* **[Cocos Creator][19]** 
* **[panda3d][20]** 
* **[playcanvas][21]** 
* **[เริ่มต้นใช้งานการพัฒนาเกมโดยใช้มหาอำนาจ][2]** 
* **[การสอนการพัฒนาเกม | การเคลื่อนไหวของผู้เล่นใน Gdevelop][3]** 
* **[การสอนการพัฒนาเกม HTML5 สำหรับโปรแกรมเมอร์วิดีโอเกม][4]** 
* **[อุตสาหกรรมเกมทั่วโลกใช้ประโยชน์จากซอฟต์แวร์โอเพ่นซอร์สอย่างไร][5]** 
* **[Gdevelop Tutorial สำหรับผู้เริ่มต้นเพื่อเริ่มการพัฒนาเกม][6]** 
* [ **ซอฟต์แวร์พัฒนาเกมฟรี 5 อันดับแรกในปี 2021** ][1]



[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/