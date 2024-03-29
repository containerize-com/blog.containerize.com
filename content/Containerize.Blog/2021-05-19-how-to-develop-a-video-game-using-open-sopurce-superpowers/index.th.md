---
title: "วิธีการพัฒนาวิดีโอเกมโดยใช้มหาอำนาจแบบเปิดโล่ง" 
seoTitle: "วิธีการพัฒนาวิดีโอเกมโดยใช้มหาอำนาจแบบเปิดโล่ง" 
description: "วิธีการพัฒนาวิดีโอเกม? Superpowers เป็นการพัฒนาเกม HTML5 โอเพนซอร์ซ เป็นแพลตฟอร์มข้ามและอนุญาตให้ผู้ใช้สร้างเกม 2D & 3D ภาพเคลื่อนไหว" 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "ซอฟต์แวร์ออกแบบวิดีโอเกมฟรีสำหรับการพัฒนาวิดีโอเกมด้วยโหมดออฟไลน์ โฮสต์ตัวเองสร้างภาพเคลื่อนไหว 2D & amp; เกม 3D ที่มีเอฟเฟกต์เสียงและแบบอักษร" 
url: /th/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## ซอฟต์แวร์ออกแบบวิดีโอเกมฟรีสำหรับการพัฒนาวิดีโอเกมด้วยโหมดออฟไลน์ โฮสต์ตัวเองสร้างเกม 2D & 3D ภาพเคลื่อนไหวด้วยเอฟเฟกต์เสียงและแบบอักษร

{{< figure align=center src="images/superpowers.png" alt="วิธีพัฒนาวิดีโอเกม">}}


## ภาพรวม
ในอดีตที่ผ่านมามีการตีพิมพ์บทความบางส่วนในหมวดหมู่ [ซอฟต์แวร์พัฒนาเกม][1] ซึ่งรวมถึงวิธีการที่อุตสาหกรรมเกมทั่วโลกใช้ประโยชน์จากซอฟต์แวร์โอเพ่นซอร์สและการสอน GDevelop สำหรับผู้เริ่มต้นเพื่อเริ่มการพัฒนาเกม การพัฒนาวิดีโอเกมมีการแพร่กระจายไปทั่วโลกมากขึ้นด้วยความต้องการที่เพิ่มขึ้นสำหรับเกมความบันเทิง อย่างไรก็ตามมันเกี่ยวข้องกับความคิดการพัฒนาการออกแบบการทดสอบอย่างต่อเนื่องเผยแพร่และข้อเสนอแนะ กล่าวอีกนัยหนึ่งมันเกี่ยวข้องกับนักออกแบบสถาปนิกซอฟต์แวร์โปรแกรมเมอร์ผู้ทดสอบและทรัพยากรสนับสนุน นอกจากนี้ยังมีเกมหลายประเภทเช่นเกมแอ็คชั่นเกมปริศนาเกมแข่งรถเกมความรู้ความเข้าใจและอีกมากมาย
ดังนั้นคู่มือการพัฒนาเกมที่ดีจึงเป็นสิ่งจำเป็นอย่างยิ่งเพื่อเริ่มต้นเริ่มต้นด้วยตัวสร้างเกม 3 มิติใด ๆ ชุมชนโอเพนซอร์ซได้พัฒนาซอฟต์แวร์พัฒนาเกมมากมายที่นำเสนอคุณสมบัติและยูทิลิตี้ระดับองค์กรเพื่อพัฒนาเกม 3D & 2D การสอนการพัฒนาเกม HTML5 นี้จะสำรวจวิธีการพัฒนาวิดีโอเกมโดยใช้ซอฟต์แวร์พัฒนาวิดีโอเกมฟรี  **Superpowers**  โดยครอบคลุมประเด็นต่อไปนี้
*  **[มหาอำนาจคืออะไร][2]**  
*  **[วิธีการตั้งค่าบน localhost?][3]**  
*  **[Dashboard of Superpowers?][4]**  
*  **[บทสรุป][5]**  

## มหาอำนาจคืออะไร {#intro}

[Superpowers][6] เป็นซอฟต์แวร์โอเพ่นซอร์สสำหรับการพัฒนาวิดีโอเกม มันมีความยืดหยุ่นแข็งแกร่งและขยายได้ อย่างไรก็ตามมันให้การสนับสนุนสำหรับแอนิเมชั่นโมเดล 3 มิติและตัวอย่างเกมที่หลากหลาย นอกจากนี้ยังมาพร้อมกับเวอร์ชันออฟไลน์ที่ผู้ใช้สามารถสร้างเกมได้โดยไม่ต้องเชื่อมต่ออินเทอร์เน็ต การเผยแพร่โครงการใด ๆ เป็นเรื่องง่ายอย่างน่าอัศจรรย์และทั้งหมดที่เกิดขึ้นจากการคลิกเพียงครั้งเดียว มีแผงควบคุมที่ใช้งานง่ายสำหรับผู้ใช้ที่ผู้ใช้สามารถนำทางผ่านองค์ประกอบต่าง ๆ ได้อย่างง่ายดาย เหนือสิ่งอื่นใดมีการรายงานข้อผิดพลาดแบบสดที่แสดงข้อผิดพลาดให้กับนักพัฒนาเพื่อหลีกเลี่ยงความกำกวมหรือข้อผิดพลาดใด ๆ Superpowers นั้นง่ายต่อการตั้งค่าและต้องการความต้องการที่ง่ายในการโฮสต์บนเซิร์ฟเวอร์ต่อไปตัวสร้างเกม 3 มิตินี้เขียนด้วย TypeScript และมาพร้อมกับเอกสารทั้งหมดเกี่ยวกับการพัฒนาและการปรับใช้ ดังนั้นซอร์สโค้ดทั้งหมดจึงมีอยู่ที่ [GitHub][7]
มหาอำนาจนำเสนอประเด็นสำคัญต่อไปนี้:
  * การรายงานข้อผิดพลาดสด
  * หลายภาษา
  * ข้ามแพลตฟอร์ม
  * เอฟเฟกต์ฟอนต์และเสียงที่หลากหลาย
  * โฮสต์ตัวเอง

## วิธีการตั้งค่าบน LocalHost? {#setup}

หากคุณยังคงสงสัยว่าจะพัฒนาวิดีโอเกมได้อย่างไรในส่วนนี้ของบทความนี้เราจะได้เรียนรู้วิธีการตั้งค่ามหาอำนาจบน LocalHost ในส่วนนี้คู่มือการพัฒนาเกม**นี้จะอธิบายรายละเอียดเกี่ยวกับกระบวนการตั้งค่าสภาพแวดล้อมการพัฒนาเกม
ก่อนอื่นตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งสิ่งที่จำเป็นต้องมีก่อนหน้านี้ก่อนที่จะเริ่มการพัฒนาวิดีโอเกม:
  * git
  * NPM
  * node.js
ข้อกำหนดที่กล่าวถึงข้างต้นนั้นง่ายและเป็นที่รู้จักมากดังนั้นจึงไม่ใช่งานที่ยากสำหรับผู้เริ่มต้น เมื่อมีการติดตั้งข้อกำหนดข้างต้นแล้วให้เปิดเทอร์มินัลแล้วเรียกใช้คำสั่งต่อไปนี้เพื่อโคลนซอร์สโค้ด:
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
หลังจากโคลนที่ประสบความสำเร็จไปที่ไดเรกทอรีที่ดาวน์โหลดโดยเรียกใช้คำสั่งต่อไปนี้:
```
cd superpowers/core
```
ตอนนี้เรียกใช้คำสั่งต่อไปนี้เพื่อโคลนระบบเกม Superpowers:
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
หลังจากนั้นเรียกใช้คำสั่งต่อไปนี้เพื่อสร้างบิลด์:
```
npm run build
```
เมื่อสร้างสำเร็จให้เริ่มเซิร์ฟเวอร์โดยเรียกใช้คำสั่งต่อไปนี้:
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="การสอนการพัฒนาเกม HTML5">}}

ตอนนี้เปิดเบราว์เซอร์และเข้าถึงแอปพลิเคชันที่ลิงค์ต่อไปนี้:
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## แดชบอร์ดแห่งมหาอำนาจ? {#features}

เมื่อกด URL ข้างต้นคุณจะเห็นหน้าแรกต่อไปนี้ มีตัวเลือกสำหรับการแก้ไขหรือสร้างโครงการ Platformer ที่ว่างเปล่าหรือ 2D ใหม่

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="การพัฒนาวิดีโอเกม">}}

ก้าวไปข้างหน้ากับคำถามเกี่ยวกับวิธีการพัฒนาวิดีโอเกมคุณจะเห็นหน้าจอต่อไปนี้หลังจากสร้าง platformer 2D คุณสามารถดูตัวเลือกทางด้านซ้ายมือของหน้าต่างเช่นการสร้างฉากการตั้งค่ากระเบื้องแผนที่เกมและผู้เล่น มีตัวเลือกการเข้ารหัสสดที่คุณสามารถกำหนดรหัสพฤติกรรมของผู้ใช้

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="การพัฒนาวิดีโอเกม">}}

นอกจากนี้ยังมีแถบการตั้งค่าทางด้านซ้ายมือซึ่งคุณสามารถตั้งค่าภาพเคลื่อนไหวการแสดงผลอัปโหลดหรือดาวน์โหลดภาพ ทางด้านซ้ายมือมีตัวเลือกในการเพิ่มสินทรัพย์เพิ่มเติมในโครงการของคุณดังแสดงในภาพด้านล่าง มันมีโมเดลลูกบาศก์รุ่น 3 มิติตัวเลือก FINT หากต้องการแก้ไขตัวอักษร นอกจากนี้ผู้ใช้สามารถเพิ่มฉากเพิ่มเติมสคริปต์เงาและสไปรต์ ยิ่งไปกว่านั้นตัวสร้างเกมโอเพนซอร์ส 3D นี้ยังช่วยให้คุณเพิ่มเอฟเฟกต์เสียงต่าง ๆ ลงในเกมเพื่อดึงดูดนักเล่นเกมด้วยเอฟเฟกต์เสียงเกมที่ดีที่สุด สุดท้าย แต่ไม่ท้ายสุดมันยังช่วยให้คุณสามารถเพิ่มแผนที่กระเบื้องและชุดไทล์

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="การออกแบบวิดีโอเกม">}}

ในทำนองเดียวกันหลังจากผ่านบทความเกมนี้คุณสามารถสำรวจเพิ่มเติมและใช้ประโยชน์จากคุณสมบัติทั้งหมด นอกจากนี้คุณจะสามารถเข้าใจวิธีดำเนินการต่อไปโดยใช้ผู้สร้างวิดีโอเกม Superpowers มีการสนับสนุนออนไลน์สำหรับซอฟต์แวร์พัฒนาเกมนี้

##  **บทสรุป**  {#Conclusion}

สิ่งนี้นำมาซึ่งคู่มือการพัฒนาเกม HTML5 นี้ หวังว่าโพสต์บล็อกนี้จะช่วยคุณหากคุณกระตือรือร้นที่จะเริ่มพัฒนาวิดีโอเกม เราได้สำรวจสิ่งที่เป็นมหาอำนาจวิธีพัฒนาวิดีโอเกมซึ่งเป็นผู้สร้างเกมโอเพนซอร์ส 3D และเรายังได้ผ่านขั้นตอนการติดตั้งใน LocalHost มีแอพการออกแบบวิดีโอเกมโอเพนซอร์สมากมาย**ที่ให้ผู้ใช้สร้างเกมตั้งแต่เริ่มต้น โปรแกรมเมอร์วิดีโอเกมใช้หลักการออกแบบเกมที่จำเป็นเพื่อสร้างเกมคุณภาพสูง คุณจะได้เรียนรู้เพิ่มเติมเกี่ยวกับการสร้างเกม 2D & 3D ในบทความที่กำลังจะมาถึงของเราที่ [blog.containerize.com][8] มีผู้สร้างเกม 3 มิติที่โฮสต์ตัวเองและบทความที่เกี่ยวข้องที่กล่าวถึงในส่วน“ สำรวจ” ด้านล่าง
ในที่สุด containerize.com กำลังเขียนโพสต์บล็อกอย่างต่อเนื่องในผลิตภัณฑ์และหัวข้อโอเพนซอร์ซเพิ่มเติม ดังนั้นโปรดติดต่อกับ [การพัฒนาวิดีโอเกม][9][][10] หมวดหมู่สำหรับการอัปเดตปกติ ยิ่งกว่านั้นคุณสามารถติดตามเราในบัญชีโซเชียลมีเดียของเรา [Facebook][11], [LinkedIn][12] และ [Twitter][13]

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [][14][Gdevelop][14]
  * [][14][Godot][15]
  * [][14][Superpowers][6]
  * [][14][Cocos Creator][16]
  * [][14][Panda3d][17]
*  **[เริ่มต้นใช้งานการพัฒนาเกมโดยใช้มหาอำนาจ][18]**  
*  **[การสอนการพัฒนาเกม | การเคลื่อนไหวของผู้เล่นใน GDEvelop][19]**  
* [  **วิธีสร้างเกมบนรอยขีดข่วนโดยใช้โอเพนซอร์ส Gdevelop**  ][20]
*  **[อุตสาหกรรมเกมทั่วโลกใช้ประโยชน์จากซอฟต์แวร์โอเพ่นซอร์สอย่างไร][21]**  
*  **[Gdevelop Tutorial สำหรับผู้เริ่มต้นเพื่อเริ่มการพัฒนาเกม][22]**  
* [  **ซอฟต์แวร์พัฒนาเกมฟรี 5 อันดับแรกในปี 2021**  ][23]



 [1]: https://blog.containerize.com/category/game-development-software/
 [2]: #intro
 [3]: #setup
 [4]: #features
 [5]: #Conclusion
 [6]: https://products.containerize.com/game-development-software/superpowers/
 [7]: https://github.com/superpowers/superpowers-core
 [8]: https://blog.containerize.com/
 [9]: https://products.containerize.com/game-development-software/
 [10]: https://products.containerize.com/business-intelligence/
 [11]: https://web.facebook.com/containerize
 [12]: https://www.linkedin.com/company/containerize/
 [13]: https://twitter.com/containerize_co
 [14]: https://products.containerize.com/game-development-software/gdevelop/
 [15]: https://products.containerize.com/game-development-software/godot/
 [16]: https://products.containerize.com/game-development-software/cocos-creator/
 [17]: https://products.containerize.com/game-development-software/panda3d/
 [18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
 [19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
 [20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
 [21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
 [22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
 [23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
