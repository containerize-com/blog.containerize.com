---
title: "TestNet คืออะไรและวิธีการปรับใช้ | Ethereum Testnet '" 
seoTitle: "TestNet คืออะไรและวิธีการปรับใช้ | Ethereum Testnet" 
description: "Testnet คืออะไร? คู่มือนี้เกี่ยวกับวิธีการตั้งค่าโหนด Ethereum บน LocalHost Blockchain เป็นเครือข่ายของโหนดที่รักษาประวัติของการทำธุรกรรมทั้งหมด" 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum เป็นเครือข่าย peer-to-peer โอเพนซอร์ซของโหนดที่เชื่อมต่อ มาเรียนรู้วิธีการปรับใช้และโต้ตอบกับโหนด Ethereum บนเซิร์ฟเวอร์ท้องถิ่น" 
url: /th/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum เป็นเครือข่าย peer-to-peer แบบโอเพนซอร์ซของโหนดที่เชื่อมต่อ มาเรียนรู้วิธีการปรับใช้และโต้ตอบกับโหนด Ethereum บนเซิร์ฟเวอร์ท้องถิ่น

{{< figure align=center src="images/ether.png" alt="Testnet คืออะไร">}}

ในโพสต์บล็อกก่อนหน้าของเราเราเขียนในหลายหัวข้อซึ่งรวมถึง [เทคโนโลยี Blockchain for Business][1], [การเขียนสัญญาพื้นฐานอัจฉริยะ][2] และ [แพลตฟอร์ม Blockchain ยอดนิยม][3] มีหัวข้อเพิ่มเติมที่เราจะเขียนในอนาคตอันใกล้นี้เป็น **เทคโนโลยีบัญชีแยกประเภทกระจายอำนาจ**  กำลังก้าวไปตามกาลเวลา ตอนนี้ผู้คนเริ่มมีความสนใจในแพลตฟอร์มการจัดการสินทรัพย์ดิจิตอลเนื่องจากความปลอดภัยและความโปร่งใส นอกจากนี้การทำธุรกรรมดิจิตอลนั้นสามารถตรวจสอบย้อนกลับได้และปัจจัยดังกล่าวทำให้ผู้คนมั่นใจเกี่ยวกับความน่าเชื่อถือของเทคโนโลยีนี้ มีสามประเภทของ blockchain สาธารณะส่วนตัวและที่ได้รับอนุญาต อย่างไรก็ตามผู้ใช้สามารถนำไปใช้ทุกประเภทขึ้นอยู่กับกรณีการใช้งานของพวกเขา
การถือกำเนิดของเทคโนโลยีนี้ทำให้เกิดการเปลี่ยนแปลงครั้งใหญ่ในภาคธนาคารเนื่องจากมีการเปลี่ยนแปลงวิธีการทำธุรกรรมทางการเงิน ในโพสต์บล็อกนี้เราจะพูดคุยเกี่ยวกับ Ethereum blockchain เกี่ยวกับการตั้งค่าโหนด Ethereum บน LocalHost และเราจะดูวิธีการโต้ตอบกับเครือข่ายทดสอบ เราจะครอบคลุมประเด็นสำคัญต่อไปนี้
  ***testnet คืออะไร** 
  ***[วิธีการตั้งค่า Ethereum blockchain?][4]** 
  ***[วิธีโต้ตอบกับ Ethereum blockchain?][5]** 
  ***[บทสรุป][6]** 

## TestNet คืออะไร?   {#tetstnet}
ในโพสต์บล็อกนี้เราจะปรับใช้โหนด Ethereum บน LocalHost Ethereum มีหลายเครือข่ายเครือข่ายการผลิตเรียกว่า MainNet และเครือข่ายที่ใช้เพื่อการทดสอบเรียกว่า TestNet แอปพลิเคชันกระจายอำนาจส่วนใหญ่ขึ้นอยู่กับ [Ethereum][7] blockchain Smart Contract เป็นองค์ประกอบที่สำคัญของโครงสร้างพื้นฐานแบบกระจายนี้ ยิ่งกว่านั้น Blockchain เป็นเครือข่ายคอมพิวเตอร์ที่เรียกว่า "โหนด" อย่างไรก็ตามแต่ละโหนดมีสำเนาของ blockchain และมีส่วนร่วมในเครือข่าย Ethereum blockchain ยังมี cryptocurrency ของตัวเองที่เรียกว่า "อีเธอร์" ธุรกรรมทั้งหมดมีความปลอดภัยในการเข้ารหัส นอกจากนี้ยังเป็นเทคโนโลยีบัญชีแยกประเภทที่สมบูรณ์ที่ไม่เคยปิดตัวลงหรือเสียหาย ช่วยให้คุณเขียนสัญญาอัจฉริยะและแอปพลิเคชันกระจายอำนาจ (DAPPS) ที่ทำงานบนโหนด Etherum blockchain
เครือข่าย blockchain แบบกระจายโอเพ่นซอร์สนี้ใช้อัลกอริทึมฉันทามติที่เรียกว่าหลักฐานการทำงาน (POW) นอกจากนี้สถาปัตยกรรมของ Ethereum ประกอบด้วยห้าเลเยอร์เช่น Ethereum Virtual Machine, Ethereum Client APIs, สัญญาอัจฉริยะ, Ethereum โหนดและแอปพลิเคชันผู้ใช้ปลายทาง Ethereum Virtual Machine เสนอซอฟต์แวร์และสถาปัตยกรรมที่รับรู้สัญญาอัจฉริยะ สัญญาอัจฉริยะเป็นซอฟต์แวร์ที่ควบคุมการทำธุรกรรม มีการสนับสนุนที่แข็งแกร่งสำหรับ Ethereum blockchain และ บริษัท Fortune 500 ได้แสดงความสนใจอย่างมากในการพัฒนาในระดับที่ใหญ่ขึ้นโดยใช้เทคโนโลยีนี้ ยิ่งไปกว่านั้น Ethereum ยังเขียนด้วยภาษา GO และซอร์สโค้ดของมันมีอยู่ใน [GitHub][8] เอกสารทั้งหมดมีให้เกี่ยวกับการปรับใช้และการพัฒนาเนื่องจากมีชุมชนที่มีชีวิตชีวา

## จะตั้งค่า Ethereum blockchain ได้อย่างไร?   {#ติดตั้ง}
ตอนนี้เราตระหนักถึงสิ่งที่ Testnet ในส่วนนี้เราจะตั้งค่าโหนด Ethereum บนเครื่องท้องถิ่นของเรา ก่อนที่จะไปเพิ่มเติมตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งข้อกำหนดเบื้องต้นดังต่อไปนี้
  * [homebrew][9] (สำหรับ macOS)

  * [Go7] (brew install go)
เมื่อมีข้อกำหนดเบื้องต้นโปรดเรียกใช้คำสั่งต่อไปนี้เพื่อโคลนซอร์สโค้ด:
```
git clone https://github.com/ethereum/go-ethereum
```
เมื่อโคลนที่ประสบความสำเร็จไปที่ไดเรกทอรี:
```
cd go-ethereum
```
ตอนนี้เรียกใช้คำสั่งต่อไปนี้เพื่อสร้างโปรแกรม GETH:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    บันทึก
{{_LINE_34_}}
  ในกรณีที่เกิดข้อผิดพลาดใด ๆ โปรดติดตั้ง XCode โดยเรียกใช้ XCode-Select-Install แล้วลองอีกครั้ง
{{_LINE_36_}}
ดังนั้นคุณได้ตั้งค่าข้อกำหนดเบื้องต้นและซอร์สโค้ดทั้งหมด ดังนั้นเรียกใช้คำสั่งต่อไปนี้เพื่อเริ่มโหนด:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="โหนด Ethereum">}}


## จะโต้ตอบกับ Ethereum blockchain ได้อย่างไร?   {#มีปฏิสัมพันธ์}
ส่วนนี้พูดถึงการมีปฏิสัมพันธ์กับโหนด Ethereum ที่กำลังดำเนินการซึ่งซิงโครไนซ์อย่างสมบูรณ์กับ blockchain เราสามารถใช้ซอฟต์แวร์ GETH เพื่อโต้ตอบและส่งคำสั่งไปยังเครือข่ายทดสอบ
ด้วยเหตุนี้ให้รวมตัวแปร build/bin/geth ในตัวแปรสภาพแวดล้อม $ path โดยเรียกใช้คำสั่งต่อไปนี้:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
หลังจากนั้นหยุดเซิร์ฟเวอร์ที่คุณนำขึ้นมาข้างบนและเรียกใช้เครือข่ายทดสอบด้วยธงต่อไปนี้:
GETH -TESTNET -RPC --RPCAPI = "DB, ETH, NET, Web3, Personal, Web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="Testnet คืออะไร">}}

ถัดไปคุณจะต้องเปิดหน้าต่างเทอร์มินัลใหม่และแนบคำสั่ง geth กับโหนดโดยเรียกใช้คำสั่งต่อไปนี้:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="แพลตฟอร์มการจัดการสินทรัพย์ดิจิทัล">}}

Geth จะเปิดหน้าต่างคอนโซลที่คุณสามารถโต้ตอบกับเครือข่ายทดสอบ คำสั่งต่อไปนี้จะสร้างบัญชีที่ถือสกุลเงินเสมือนจริงและคู่คีย์สาธารณะ/ส่วนตัว:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="เทคโนโลยีบัญชีแยกประเภทกระจายอำนาจ">}}

ในการตรวจสอบบัญชีของคุณคุณสามารถเรียกใช้คำสั่งต่อไปนี้:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="Testnet คืออะไร">}}

ในทำนองเดียวกันมีคำสั่งมากมายที่คุณสามารถใช้ในการโต้ตอบกับ Ethereum blockchain

## บทสรุป   {#conclusion}
ที่นี่จบลงด้วยการสอนนี้ เราเรียนรู้ **อะไรคือ testnet  **และกระบวนการตั้งค่าของโหนด Ethereum บนเครื่องท้องถิ่น Ethereum blockchain เป็นทางออกทั่วไปสำหรับแอปพลิเคชันกระจายอำนาจส่วนใหญ่ ธุรกิจและหน่วยงานภาครัฐส่วนใหญ่มีแนวโน้มที่จะนำเทคโนโลยีนี้มาใช้เพื่อนำความแข็งแกร่งความโปร่งใสความพร้อมใช้งานและความรับผิดชอบ นอกจากนี้การสอน **  blockchain นี้  **จะช่วยคุณได้จริง ๆ หากคุณวางแผนที่จะเริ่มพัฒนา Ethereum blockchain เนื่องจากใช้ประโยชน์จากสัญญาอัจฉริยะ Etheruem blockchain มีเสถียรภาพและเป็นที่นิยมมากขึ้นเนื่องจากมีโหนดสดหลายพันโหนด ยิ่งกว่านั้นองค์กรสามารถพัฒนาและปรับใช้เครือข่าย Ethereum blockchain ได้อย่างง่ายดายโดยไม่ต้องใช้เวลาพิเศษใด ๆ ปัจจัยอื่น ๆ ที่อยู่เบื้องหลังความน่าเชื่อถือของ Ethereum คือมันเสนอการพัฒนาสัญญาอัจฉริยะในแบบที่แพลตฟอร์มการจัดการสินทรัพย์ดิจิตอลอื่น ๆ**   ไม่เสนอ
การอัปเดตล่าสุดในเครือข่าย Ethereum ทำให้เครือข่ายประหยัดค่าใช้จ่ายและมีประสิทธิภาพมากขึ้น ในความเป็นจริงมีเนื้อหาเพิ่มเติมมากมายบนคลาวด์ที่แสดงให้เห็นถึงแง่มุมที่สำคัญของ Etheruem เกี่ยวกับการลงทุนและการพัฒนา สำหรับนักพัฒนานั้นจะให้ระบบนิเวศที่เป็นมิตรกับนักพัฒนาพร้อมระบบสาธารณูปโภคที่ทำไว้ล่วงหน้า สำหรับคนงานเหมืองมีความโปรดปรานในรูปแบบของอีเธอร์เมื่อใดก็ตามที่พวกเขาขุดบล็อกใหม่ลงในบล็อกเชน นอกจากนี้ [containerize.com][10] ได้เผยแพร่โพสต์บล็อกทางเทคนิคจำนวนมากและแบบฝึกหัดเกี่ยวกับผลิตภัณฑ์โอเพ่นซอร์สยอดนิยมที่ [blog.containerize.com][11] ดังนั้นจึงเชื่อมต่อกับหมวดหมู่ [blockchain platforms][12] สำหรับการอัปเดตปกติ

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [Ethereum][7]
  * [Hyperledger Fabric][13]
  * [OpenChain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [Consensys Quorum][17]
  * [วิธีการตั้งค่าเครือข่าย blockchain quorum quorum ในพื้นที่][18]
  * [5 อันดับแรกของแพลตฟอร์ม Blockchain Open Open ในปี 2020][3]
  * [คู่มือพื้นฐานเกี่ยวกับวิธีการสร้างสัญญาสมาร์ท Ethereum][2]
  * [เทคโนโลยีกระจายอำนาจอัพเกรดกลยุทธ์ทางธุรกิจของคุณได้อย่างไร][19]

  
[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[4]: #setup
[5]: #interact
[6]: #Conclusion
[7]: https://products.containerize.com/blockchain-platforms/ethereum
[8]: https://github.com/ethereum/go-ethereum
[9]: https://brew.sh/
[10]: https://www.containerize.com/
[11]: https://blog.containerize.com/
[12]: https://products.containerize.com/blockchain-platforms/
[13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[14]: https://products.containerize.com/blockchain-platforms/openchain
[15]: https://products.containerize.com/blockchain-platforms/ripple
[16]: https://products.containerize.com/blockchain-platforms/multichain
[17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
