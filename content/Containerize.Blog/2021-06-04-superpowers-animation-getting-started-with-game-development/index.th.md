---
title: "เริ่มต้นใช้งานการพัฒนาเกมโดยใช้มหาอำนาจ" 
seoTitle: "เริ่มต้นใช้งานการพัฒนาเกมโดยใช้มหาอำนาจ" 
description: "Superpowers เป็นผู้ผลิตเกมโอเพนซอร์ส 3D ที่มีการทำงานร่วมกันแบบเรียลไทม์ บทช่วยสอนนี้เกี่ยวกับการเริ่มต้นกับการพัฒนาเกมโดยใช้มหาอำนาจ" 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "พฤติกรรมและการเคลื่อนไหวของวัตถุเกมถูกควบคุมโดยแอนิเมชั่น ในการสอนการพัฒนาเกมนี้เราจะได้เรียนรู้วิธีการเคลื่อนไหวตัวละครเกม" 
url: /th/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## พฤติกรรมและการเคลื่อนไหวของวัตถุเกมถูกควบคุมโดยแอนิเมชั่น ในการสอนการพัฒนาเกมนี้เราจะได้เรียนรู้วิธีการเคลื่อนไหวตัวละครเกม

{{< figure align=center src="images/super.png" alt="เริ่มต้นด้วยการพัฒนาเกม">}}


## ** ภาพรวม **
ในชุดการสอนการพัฒนาเกมโอเพ่นซอร์สของเราเราได้เผยแพร่โพสต์บล็อกในหัวข้อยอดนิยมบางอย่างเช่น [การสอนการพัฒนาเกม | การเคลื่อนไหวของผู้เล่นใน GDEVELD. ] [1], [HTML5 การสอนการพัฒนาเกมสำหรับโปรแกรมเมอร์วิดีโอเกม] [2], [อุตสาหกรรมการเล่นเกมทั่วโลกใช้ประโยชน์จากซอฟต์แวร์โอเพ่นซอร์สอย่างไร] [3] และ [GDEVELD ]. บทความการสอนนี้เกี่ยวกับการเริ่มต้นใช้งานการพัฒนาเกมโดยใช้โอเพนซอร์สฟรี [Superpowers] [5] โดยครอบคลุมประเด็นต่อไปนี้
  *** [ประเภทของแอนิเมชั่นเกม] [6] **
  *** [วิธีสร้างสไปรต์?] [7] **
  *** [ทำงานกับฉาก] [8] **
  *** [เปิดตัวเกมบน LocalHost] [9] **
  *** [บทสรุป] [10] **
มีซอฟต์แวร์พัฒนาเกมโอเพนซอร์สมากมายสำหรับผู้เริ่มต้นที่มีความสามารถในการโฮสต์ตนเอง อย่างไรก็ตาม [Superpowers] [5] เป็นซอฟต์แวร์การสร้างเกม 2D & 3D แบบข้ามแพลตฟอร์ม มันมีห้องสมุดในตัวและตัวอย่างเกมที่ทำให้การพัฒนาเกมเป็นเรื่องง่ายสำหรับนักพัฒนาเกม แอพออกแบบเกมฟรีนี้เขียนด้วย TypeScript และเอกสารทั้งหมดมีอยู่ที่ [GitHub] [11] เกี่ยวกับการพัฒนาและการปรับใช้ ในโพสต์บล็อกนี้เราจะสำรวจมหาอำนาจเกี่ยวกับการใช้งานของพวกเขา

## ประเภทของแอนิเมชั่นเกม {#types}
ภาพเคลื่อนไหวเป็นส่วนสำคัญของวิดีโอเกม ตัวละครในเกมจะต้องตอบสนองต่อการกระทำของผู้ใช้ภาพเคลื่อนไหวควรจะราบรื่นและฉับพลัน มันเกี่ยวกับการจัดการหลายเฟรมและแอนิเมชั่นปรับแต่งเฟรมเหล่านั้นเพื่อสร้างเอฟเฟกต์การเคลื่อนไหว นอกจากนี้ยังมีภาพเคลื่อนไหว 2D & 3D ที่วัตถุดูเหมือนจะเคลื่อนที่ผ่านพื้นที่สามมิติ นักพัฒนาเกมและนักออกแบบกราฟิกสร้างรุ่น 3 มิติ ภาพเคลื่อนไหวขึ้นอยู่กับลักษณะของเกมและประเภทที่พบบ่อยที่สุดมีดังนี้
** แอนิเมชั่นเดิน: ** แอนิเมชั่นเดินเป็นเรื่องเกี่ยวกับการสร้างกระบวนการเดินที่ตัวละครเคลื่อนไหวในแต่ละขั้นตอนและให้ภาพประกอบการเดิน
** แอนิเมชันที่ไม่ได้ใช้งาน: ** นี่เป็นภาพเคลื่อนไหวที่สำคัญมากซึ่งตัวละครไม่ได้ทำอะไรเพราะผู้ใช้ไม่ได้กดคอนโทรลเลอร์ใด ๆ
** รันแอนิเมชั่น **: Run Animation เป็นส่วนหนึ่งของทุกเกมที่วัตถุเกมดำเนินการรันวัฏจักร ประเภทนี้เป็นประเภทที่พบมากที่สุดและต้องการความสนใจมากขึ้นจากนักพัฒนา
** การต่อสู้แอนิเมชั่น **: ในเกมต่อสู้ตัวละครเกมหลายตัวต่อสู้กัน
** กระโดดแอนิเมชั่น **: แอนิเมชั่นประเภทนี้ต้องการทักษะและความเชี่ยวชาญที่ดีกว่า ตัวละครบีบอัดและปลดปล่อยร่างกายเพื่อดำเนินการกระโดดข้าม

## จะสร้างสไปรต์ได้อย่างไร? {#sprites}
คู่มือการสร้างเกมส่วนนี้ช่วยให้ผู้ใช้สร้างโครงการและเริ่มสร้างสไปรต์สำหรับเกม สไปรต์เป็นภาพที่ไม่คงที่หรือกราฟิกที่ไม่เพียง แต่ใช้ในเกม แต่ยังเป็นส่วนหนึ่งของการออกแบบเว็บ โดยปกติแล้วสิ่งเหล่านี้จะถูกวาดบนพื้นหลังที่สดชื่นอย่างต่อเนื่อง
ก่อนที่จะเดินหน้าต่อไปตรวจสอบให้แน่ใจว่าคุณได้ตั้งค่ามหาอำนาจบนเครื่องของคุณ คุณสามารถติดตามลิงค์นี้ [HTML5 Game Development Tutorial สำหรับโปรแกรมเมอร์วิดีโอเกม] [2] เพื่อตั้งค่าแพลตฟอร์มการสร้างเกมฟรีนี้
ก่อนอื่นให้เปิดแอปพลิเคชันลงในเบราว์เซอร์และสร้างโครงการว่างเปล่าใหม่ ดังที่แสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="เริ่มต้นด้วยการพัฒนาเกม">}}

คุณจะลงจอดในพื้นที่โครงการหลังจากสร้างโครงการว่างเปล่าใหม่ มีตัวเลือกเมนูที่แผงด้านซ้ายมือ ดังนั้นคลิกที่ปุ่ม“+” เพื่อเปิดกล่องโต้ตอบสินทรัพย์ เลือกตัวเลือก Sprite และกดสร้าง

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="คู่มือการทำเกม">}}

ตอนนี้อัปโหลดภาพที่เราจะเพิ่มพฤติกรรม คุณสามารถทำได้โดยคลิกที่ปุ่มวางที่มุมบนขวา แผงนี้เกี่ยวกับการกำหนดค่าของวัตถุ
ถัดไปคุณสามารถตั้งค่าขนาดกริดตามทางเลือกของคุณ มีสองส่วนของผืนผ้าใบ ส่วนบนแสดงแผ่นเต็มที่ส่วนล่างแสดงส่วนที่เลือกซึ่งเราตั้งใจจะใช้แอนิเมชั่น คุณสามารถทำได้โดยกดปุ่ม“ ตั้งค่า” ที่แผงด้านขวามือดังแสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="การสอนการพัฒนาเกม">}}

หลังจากนั้นมาสร้างภาพเคลื่อนไหว เราสามารถทำได้โดยคลิกปุ่ม“ ใหม่” ในแท็บแอนิเมชั่น คุณสามารถดูภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="ซอฟต์แวร์พัฒนาเกมสำหรับผู้เริ่มต้น">}}


## การทำงานกับฉาก {#scenes}
ในส่วนนี้เราจะเพิ่มฉากในเกมของเรา สำหรับสิ่งนั้นอีกครั้งเปิดกล่องโต้ตอบสินทรัพย์อีกครั้งและเลือก“ ฉาก” แล้วกดปุ่มสร้าง ตอนนี้สร้างนักแสดงโดยคลิกที่ปุ่มดาวที่มุมบนขวาตามที่แสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="วิธีสร้างเกมบนรอยขีดข่วนสำหรับผู้เริ่มต้น">}}

หลังจากนั้นให้สร้างส่วนประกอบใหม่โดยคลิกปุ่ม“ องค์ประกอบใหม่” ที่วางไว้บนแผงด้านขวามือ เลือก“ Sprite Renderer” และกดสร้าง จากนั้นลากสไปรต์ที่สร้างขึ้นจากแผงด้านซ้ายมือแล้ววางลงใต้ส่วน Renderer Sprite ยิ่งกว่านั้นสร้างนักแสดงคนอื่นชื่อ“ กล้อง” และในทำนองเดียวกันสร้างส่วนประกอบใหม่ชื่อกล้อง
คุณสามารถเปลี่ยนโหมดกล้องเพื่อเปลี่ยนเป็นโหมด“ orthographic” ดังแสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="เริ่มต้นด้วยการพัฒนาเกม">}}

ที่มุมล่างซ้ายนำทางไปยังตัวเลือกการตั้งค่าและเปิด ภายใต้ส่วน "สไปรต์" และ "แผนที่กระเบื้อง" แทรก 16 กับ "พิกเซลต่อหน่วย" จากนั้นใน“ โหมดกล้องเริ่มต้น” เลือก 2D ภายใต้ส่วน“ ฉาก” นอกจากนี้ภายใต้ส่วน“ แผนที่กระเบื้อง” ความกว้างเริ่มต้น 36 ความสูงเริ่มต้น 28 และขนาดกริดชุดไทล์ 16 ไม่จำเป็นต้องบันทึก แต่ทุกอย่างอยู่ในระบบอัตโนมัติ

## เปิดตัวเกมบน localhost {#local}
ดังนั้นเราจึงใกล้จะเปิดตัวแอนิเมชั่น Superpowers ของเกมแรกของเรา อย่างไรก็ตามไปที่แท็บการตั้งค่าอีกครั้งและลากฉากจากแผงด้านซ้ายมือแล้ววางกับ "ฉากเริ่มต้น" ดังแสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="วิธีสร้างเกมบนรอยขีดข่วนสำหรับผู้เริ่มต้น">}}

ตอนนี้คลิก“ ผู้เล่น” และภายใต้องค์ประกอบ“ Sprite Renderer” เลือกแอนิเมชั่นกับแอตทริบิวต์“ Animation” สุดท้ายเปิดแอปพลิเคชันโดยคลิกที่ปุ่มที่วางไว้ที่มุมซ้ายบน แท็บใหม่จะแสดงวัตถุที่เคลื่อนที่บนหน้าจอ

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="เริ่มต้นด้วยการพัฒนาเกม">}}


## บทสรุป {#conclusion}
นี่คือจุดสิ้นสุดของการสอนที่เราเรียนรู้วิธีสร้างเกมบนรอยขีดข่วนสำหรับผู้เริ่มต้น ดังนั้นการเริ่มต้นใช้งานการพัฒนาเกมจึงเป็นเรื่องง่ายเมื่อมีเอกสารรายละเอียดของซอฟต์แวร์พัฒนาเกม ในที่สุด [** containerize.com **] [12] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนบทความในหัวข้อและผลิตภัณฑ์โอเพ่นซอร์สเพิ่มเติม ดังนั้นโปรดติดต่อกับ [ซอฟต์แวร์พัฒนาเกม] [13] หมวดหมู่สำหรับการอัปเดตปกติ

## สำรวจ
  * [Gdevelop] [14]
  * [Godot] [15]
  * [Superpowers] [5]
  * [Cocos Creator] [16]
  * [panda3d] [17]
  * [playcanvas] [18]
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/