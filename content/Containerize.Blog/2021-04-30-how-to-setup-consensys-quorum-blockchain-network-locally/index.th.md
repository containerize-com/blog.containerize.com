---
title: "วิธีการตั้งค่าเครือข่าย blockchain quorum quorum ในเครื่อง" 
seoTitle: "วิธีการตั้งค่าเครือข่าย blockchain quorum quorum ในเครื่อง" 
description: "ทำตามคำแนะนำนี้เพื่อเรียนรู้เกี่ยวกับกระบวนการติดตั้งของ consensys quorum blockchain บน localhost Consensys Quorum เป็น blockchain โอเพนซอร์ส Etherum" 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "สร้างเครือข่ายบล็อกเชนสาธารณะ/ส่วนตัวของคุณเองเพื่อจัดการและตรวจสอบการทำธุรกรรมดิจิทัลทางธุรกิจ มาเรียนรู้วิธีการตั้งค่า consensys โควรัมบน Localhost" 
url: /th/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## สร้างเครือข่ายบล็อกเชนสาธารณะ/ส่วนตัวของคุณเองเพื่อจัดการและตรวจสอบการทำธุรกรรมดิจิทัลทางธุรกิจ มาเรียนรู้วิธีการตั้งค่า consensys โควรัมบน Localhost

{{< figure align=center src="images/quorum.png" alt="quorum ensensys">}}


## ภาพรวม
ในอดีตที่ผ่านมาเราได้เผยแพร่โพสต์บล็อกในบางหัวข้อที่เกี่ยวข้องกับ blockchain เช่น [5 อันดับแรกของแพลตฟอร์ม Blockchain Open Source ในปี 2020][1], [คู่มือพื้นฐานเกี่ยวกับวิธีการสร้างสัญญา Smart Ethereum][2][การกระจายอำนาจอย่างไร เทคโนโลยีอัพเกรดกลยุทธ์ทางธุรกิจของคุณ][3] และ [คู่มือผู้เริ่มต้นในการตั้งค่าโหนด Ethereum บน LocalHost][4] ในบทความนี้เราจะเห็นวิธีการตั้งค่าเครือข่าย Blockchain ของ Consensys quorum บน localhost โดยครอบคลุมจุดต่อไปนี้
  *** [การแนะนำสั้น ๆ ของโควรัม Consensys][5] **
  *** [ขั้นตอนการติดตั้ง ** คืออะไร **?][6] **
  *** [จะเริ่มเครือข่ายได้อย่างไร][7] **
  *** [บทสรุป][8] **

## ** การแนะนำสั้น ๆ ของ consensys quorum ** {#introduction}
[Consensys Quorum][9] เป็นแพลตฟอร์มโอเพ่นซอร์สที่ใช้เทคโนโลยีบัญชีแยกประเภทที่กระจายอำนาจ ** ** อย่างไรก็ตามมันให้สภาพแวดล้อมที่เป็นมิตรกับนักพัฒนาอย่างสมบูรณ์ในการสร้างแอปพลิเคชันที่ใช้ blockchain ที่จัดการธุรกรรมที่รวดเร็วและความเร็วสูง มันเป็น ** Ethereum ** ใช้งานได้และมีปลั๊กอินมากมาย ยิ่งไปกว่านั้นระบบกระจายโอเพ่นซอร์สนี้มาพร้อมกับมาตรฐานความปลอดภัยและความเป็นส่วนตัวสูง นอกจากนี้ยังมีคุณสมบัติที่ทรงพลังมากมายเช่นการอนุญาต API และการตรวจสอบ นอกจากนี้แพลตฟอร์ม ** DLT นี้เป็นโฮสต์ตนเองและจัดทำเอกสารรายละเอียดเกี่ยวกับการพัฒนาและการปรับใช้ ซอร์สโค้ดของซอฟต์แวร์ฟรีนี้มีอยู่ที่ [GitHub][10]
Consensys Quorum เสนอคุณสมบัติที่สำคัญต่อไปนี้:
  * สถาปัตยกรรมที่สามารถทำได้
  * Ethereum ตาม
  * ปลอดภัย
  * โฮสต์ตัวเอง
  * เครือข่ายสาธารณะ/เอกชน
[เรียนรู้เพิ่มเติมเกี่ยวกับ Consensys Quorum][11]

## **** ขั้นตอนที่ต้องมีก่อนและขั้นตอนการติดตั้งคืออะไร **** {#Pre-requistites}
ในส่วนนี้เราจะติดตั้งการพึ่งพาที่ต้องการและตั้งค่าสภาพแวดล้อมในท้องถิ่น ก่อนที่จะไปยังขั้นตอนต่อไปตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งสิ่งที่จำเป็นต้องมีก่อนหน้านี้:
  * nodejs v10+
  * นักเทียบท่า
  * นักเทียบท่า
เมื่อมีการติดตั้งข้อกำหนดล่วงหน้าให้เรียกใช้คำสั่งต่อไปนี้เพื่อเริ่มต้นยูทิลิตี้ QuickStart ที่ใช้ CLI
```
npx quorum-dev-quickstart
```
อย่างไรก็ตามตอบคำถามเพื่อทำให้การติดตั้งเสร็จสมบูรณ์ดังที่แสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="quorum ensensys">}}


## **** จะเริ่มเครือข่ายได้อย่างไร **** {#start}
ตอนนี้เรามีซอร์สโค้ดในสถานที่ ดังนั้นขั้นตอนต่อไปคือการทำให้เครือข่ายมีชีวิตอยู่
เรียกใช้คำสั่งต่อไปนี้เพื่อเข้าสู่ไดเรกทอรีรูท
```
cd quorum-test-network
```
หลังจากนั้นเรียกใช้คำสั่งต่อไปนี้เพื่อเริ่มคอนเทนเนอร์ Docker ทั้งหมด:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="quorum ensensys">}}

เมื่อคอนเทนเนอร์ Docker ทั้งหมดทำงานแล้วคุณสามารถเข้าถึงบล็อก Explorer ได้ตามที่อยู่ต่อไปนี้:
```
http://localhost:25000
```
[] ()
นอกจากนี้คุณสามารถโต้ตอบกับ Block Explorer ดังแสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="ระบบกระจายโอเพนซอร์ส">}}

ในทำนองเดียวกันคุณสามารถหยุดเครือข่ายทั้งหมดได้โดยเรียกใช้คำสั่งต่อไปนี้:
```
./stop.sh 
```

## บทสรุป {#conclusion}
นี่คือจุดสิ้นสุดของบทช่วยสอนนี้ เหนือสิ่งอื่นใด quorum Consensys ที่ใช้ Ethereum เป็นเทคโนโลยีทางการเงินดิจิทัล ** ที่พัฒนาขึ้นเป็นพิเศษสำหรับกรณีการใช้งานทางการเงิน มันมีอัลกอริทึมฉันทามติตามการลงคะแนน อย่างไรก็ตามแรงจูงใจหลักของเทคโนโลยีการกระจายอำนาจนี้คือการสร้างโซลูชันที่มีประสิทธิภาพสำหรับองค์กร
ในที่สุด [containerize.com][12] ได้เผยแพร่โพสต์บล็อกและบทเรียนเกี่ยวกับผลิตภัณฑ์โอเพ่นซอร์สยอดนิยมมากมายที่ [blog.containerize.com][13] ดังนั้นให้ยึดติดกับหมวดหมู่ [blockchain][14] สำหรับการอัปเดตปกติ

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [Ethereum][15]
  * [Hyperledger Fabric][16]
  * [OpenChain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [Consensys Quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
