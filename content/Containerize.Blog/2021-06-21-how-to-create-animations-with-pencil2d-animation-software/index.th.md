---
title: "วิธีสร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่นดินสอ 2D" 
seoTitle: "วิธีสร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่นดินสอ 2D" 
description: "Pencil2D เป็นซอฟต์แวร์แอนิเมชั่นโอเพ่นซอร์สที่ให้ผู้ใช้สร้างภาพเคลื่อนไหวและภาพร่าง 2D บทความนี้เกี่ยวกับวิธีการสร้างแอนิเมชั่นด้วย Pencil2D" 
date: Mon, 21 Jun 2021 06:45:42 +0000
author: bilalahmed
summary: "Pencil2D เป็นซอฟต์แวร์แอนิเมชั่นโอเพ่นซอร์สที่ให้ผู้ใช้สร้างภาพเคลื่อนไหวและภาพร่าง 2D บทความนี้เกี่ยวกับวิธีการสร้างแอนิเมชั่นด้วย Pencil2D" 
url: /th/how-to-create-animations-with-pencil2d-animation-software/
categories: ['Animation Software']
---

{{< figure align=center src="images/How-To-Create-Animations-With-Pencil2D-Animation-Software.png" alt="วิธีสร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่นดินสอ 2D">}}


## **Pencil2D เป็นซอฟต์แวร์แอนิเมชั่นโอเพ่นซอร์สที่ให้ผู้ใช้สร้างภาพเคลื่อนไหวและภาพร่าง 2D บทความนี้เกี่ยวกับวิธีการสร้างภาพเคลื่อนไหวด้วย Pencil2d** 
เมื่อพูดถึงการเรียนรู้ซอฟต์แวร์ใหม่เพื่อสร้างภาพเคลื่อนไหวและภาพประกอบเราได้สร้างแบบฝึกหัดและคำแนะนำมากมายที่สามารถช่วยคุณเชี่ยวชาญซอฟต์แวร์ใหม่และเรียนรู้ภาพเคลื่อนไหว ไม่ว่าคุณจะเป็นผู้เริ่มต้นหรือผู้ใช้ขั้นสูง [โพสต์ที่ผ่านมาของเรา][1] สามารถช่วยคุณค้นหาแอปพลิเคชันภาพเคลื่อนไหวที่เหมาะสมสำหรับคุณ ให้ครอบคลุมหัวข้อต่อไปนี้เพื่อเรียนรู้วิธีสร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่น Pencil2D
  * [QENCIL2D คืออะไร][2]
  * [วิธีการติดตั้ง Pencil2d?][3]
  * [ภาพรวมของอินเตอร์เฟสแอปพลิเคชัน][4]
  * [วิธีสร้างภาพเคลื่อนไหวด้วยดินสอ 2][5]
  * [บทสรุป][6]

## Pencil2d คืออะไร? {#what-is-pencil2d}

[Pencil2D][7] เป็นแอปพลิเคชั่นแอปพลิเคชันแบบดั้งเดิมที่ช่วยให้ผู้ใช้สามารถสร้างภาพร่าง 2D ของการ์ตูนและแอนิเมชั่นสำหรับโครงการต่าง ๆ คุณสามารถใช้ Pencil2D ทั้งสำหรับโครงการส่วนบุคคลรวมถึงความพยายามเชิงพาณิชย์เนื่องจากเป็นซอฟต์แวร์อนิเมชั่นโอเพนซอร์ซที่ได้รับอนุญาตภายใต้ใบอนุญาตสาธารณะ GNU ทั่วไป การใช้ดินสอ 2D นั้นค่อนข้างตรงไปตรงมาอย่างที่คุณจะเห็นเพิ่มเติมในโพสต์ มันสามารถใช้งานได้โดยทั้งแอนิเมชั่นเริ่มต้นและผู้ใช้มืออาชีพเช่นกัน
ด้วย [Pencil2D][7] ภาพเคลื่อนไหวของคุณจะถูกเก็บไว้ในบิตแมปหรือภาพวาดเวกเตอร์และใช้เวิร์กโฟลว์แรสเตอร์/เวกเตอร์เพื่อการจัดการภาพเคลื่อนไหวที่มีประสิทธิภาพ รูปแบบไฟล์ที่ยอมรับได้บางรูปแบบในขณะที่ใช้ Pencil2D คือ PNG, JPEG, BMP, TIFF ฯลฯ สำหรับรูปภาพและ AVI, MP4, GIF และอื่น ๆ สำหรับวิดีโอ เข้ากันได้กับ Windows, Mac OS, Linux และ FreeBSD เช่นกัน

## จะติดตั้ง Pencil2D ได้อย่างไร? {#install-pencil2d}

เปิดเทอร์มินัลและอัปเดตดัชนีแพ็คเกจเซิร์ฟเวอร์ท้องถิ่นของคุณโดยพิมพ์คำสั่งต่อไปนี้:
```
sudo apt-get update -y

```
เรียกใช้คำสั่งต่อไปนี้ในเทอร์มินัลเพื่อติดตั้งดินสอ 2D:
```
sudo apt-get install -y pencil2d

```

## ภาพรวมของอินเตอร์เฟสแอปพลิเคชัน {#application-interface}

ก่อนที่เราจะเริ่มต้นด้วยบทช่วยสอน LEALCENCIL2D เกี่ยวกับวิธีการสร้างภาพเคลื่อนไหวด้วย QENCIL2D นี่คือภาพรวมเล็กน้อยของส่วนต่อประสานผู้ใช้และเครื่องมือและคุณสมบัติที่ดีที่ควรทราบ:
* **กระดานไวท์บอร์ด:**  เมื่อคุณเปิดตัวดินสอ 2D เป็นครั้งแรกคุณจะเห็นกระดานไวท์บอร์ดหลักตรงกลางล้อมรอบด้วยแผงควบคุมเครื่องมือและคุณสมบัติที่คุณจะสร้างส่วนหลักของภาพเคลื่อนไหว
* **เครื่องมือ:**  ทางด้านซ้ายคุณจะพบคุณลักษณะเครื่องมือที่มีเครื่องมือแปรงดินสอยางลบเครื่องมือถังเพื่อเพิ่มสีและคุณสมบัติทั้งหมดที่จะช่วยให้คุณสามารถร่างการ์ตูนหรือภาพเคลื่อนไหวและกำหนด
* **กล่องตัวเลือก:**  ด้านล่างกล่องเครื่องมือที่คุณมีความสามารถในการรวมหรือลบหน้าต่างตัวเลือกที่คุณได้รับตัวเลือกในการกำหนดคุณลักษณะของเครื่องมือที่คุณใช้ ตัวอย่างเช่นหากคุณใช้แปรงคุณสามารถสลับระหว่างความหนาของแปรงได้ว่าสีหรือสีเข้มจะปรากฏขึ้นและคุณสมบัติที่คล้ายกันอย่างไร
* **กล่องแสดงผล:**  ด้านล่างหน้าต่างตัวเลือกคือกล่องแสดงผลที่คุณสามารถจัดการภาพร่างที่คุณวาดบนกระดานไวท์บอร์ดเช่นการพลิกด้านขวาหรือซ้ายใช้ผิวหนังหัวหอมกับภาพร่างก่อนหน้าและอื่น ๆ
* **จานสี:**  ที่นี่คุณจะพบสีทั้งหมดที่สามารถเพิ่มลงในภาพวาดของคุณได้
* **กล่องสี:**  ด้านล่างจานสีเป็นกล่องสีที่ช่วยให้คุณเลือกเฉดสีเฉพาะจากวงล้อสี
* **พาเนลไทม์ไลน์:**  นี่เป็นหนึ่งในส่วนที่สำคัญที่สุดของดินสอ 2 ซึ่งช่วยให้คุณสามารถใช้เลเยอร์กับภาพเคลื่อนไหวของคุณเริ่มต้นด้วยเลเยอร์บิตแมปเลเยอร์เวกเตอร์และเลเยอร์กล้อง นอกจากนี้คุณยังสามารถเพิ่มเฟรมคีย์เพื่อสร้างภาพเคลื่อนไหววิดีโอลบและทำซ้ำเฟรมและอื่น ๆ
เมื่อคุณเชี่ยวชาญและเข้าใจเครื่องมือเหล่านี้แล้วคุณสามารถเริ่มสร้างภาพเคลื่อนไหวและภาพร่างได้ทันทีหรือลองและเรียนรู้เมื่อคุณไป

## จะสร้างภาพเคลื่อนไหวด้วยดินสอ 2D ได้อย่างไร? {#create-animations}

ตอนนี้เราสามารถก้าวไปสู่การสร้างภาพเคลื่อนไหวพื้นฐานด้วย Pencil2D
{{_LINE_38_}}
{{_LINE_39_}}

{{< figure align=center src="images/IMG-20210617-WA0049.jpg" alt="สร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่น Pencil2D">}}

{{_LINE_41_}}
{{_LINE_42_}}

{{< figure align=center src="images/IMG-20210617-WA0050.jpg" alt="สร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่น Pencil2D">}}

{{_LINE_44_}}
{{_LINE_45_}}

{{< figure align=center src="images/IMG-20210617-WA0051.jpg" alt="สร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่น Pencil2D">}}

{{_LINE_47_}}
{{_LINE_48_}}

{{< figure align=center src="images/IMG-20210617-WA0053.jpg" alt="สร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่น Pencil2D">}}

{{_LINE_50_}}
{{_LINE_51_}}

{{< figure align=center src="images/IMG-20210617-WA0048.jpg" alt="สร้างภาพเคลื่อนไหวด้วยซอฟต์แวร์แอนิเมชั่น Pencil2D">}}

{{_LINE_53_}}
{{_LINE_54_}}
ตอนนี้คุณสามารถฝังภาพเคลื่อนไหวในเว็บไซต์เล่นในเบราว์เซอร์หรือเดสก์ท็อปของคุณและอีกมากมาย

## บทสรุป {#conclusion}

อย่างที่คุณเห็นจากบทช่วยสอนด้านบนการสร้างภาพเคลื่อนไหวด้วย Qencil2D นั้นค่อนข้างเข้าใจและดำเนินการได้ง่าย ซอฟต์แวร์แอนิเมชั่นได้ถูกสร้างขึ้นในวิธีที่จะเป็นมิตรกับผู้เริ่มต้นรวมถึงผู้เชี่ยวชาญอย่างรวดเร็วเช่นกัน มีตัวเลือกมากมายใน Pencil2D เมื่อพูดถึงการสร้างภาพร่างหรือภาพเคลื่อนไหว 2D และนักวาดภาพประกอบใด ๆ สามารถสร้างพอร์ตโฟลิโอที่แข็งแกร่งด้วยแอปพลิเคชันได้อย่างแท้จริง
[Pencil2D][7] เข้ากันได้กับระบบปฏิบัติการหลายระบบตามที่เราได้กล่าวถึงก่อนหน้านี้ดังนั้นคุณสามารถเสียบและเล่นกับซอฟต์แวร์แอนิเมชั่นในสภาพแวดล้อมที่คุณเลือก หากคุณกำลังมองหาบทเรียนเพิ่มเติมเกี่ยวกับดินสอ 2D คุณสามารถไปดูเว็บไซต์ของพวกเขาได้ นอกจากนี้เรายังได้สร้างแบบฝึกหัดและคำแนะนำมากมายเพื่อใช้โปรแกรมซอฟต์แวร์แอนิเมชั่นอื่น ๆ ที่คุณสามารถค้นหาได้ในเว็บไซต์ของเราดังนั้นตรวจสอบพวกเขาเพื่อความชัดเจนมากขึ้น

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [ดินสอ 2D | ซอฟต์แวร์แอนิเมชั่น 2D แบบข้ามแพลตฟอร์มและโอเพ่นซอร์สฟรี][7]
  * [คู่มือผู้เริ่มต้นเพื่อเริ่มการแก้ไขภาพฟรีโดยใช้ digikam][8]
  * [ซอฟต์แวร์แอนิเมชั่นโอเพนซอร์สที่ดีที่สุด][9]



[1]: https://blog.containerize.com/
[2]: #what-is-pencil2d
[3]: #install-pencil2d
[4]: #application-interface
[5]: #create-animations
[6]: #conclusion
[7]: https://products.containerize.com/animation-software/pencil2d/
[8]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
[9]: https://products.containerize.com/animation-software/