---
title: "ความหลากหลายคืออะไร? | ทำไมต้องมีผู้เช่าหลายคน?" 
seoTitle: "ความหลากหลายคืออะไร? | ทำไมต้องมีผู้เช่าหลายคน?" 
description: "ความหลากหลายคืออะไร? ติดตามโพสต์บล็อกนี้เพื่อเรียนรู้แนวคิดจริงเบื้องหลังการเช่าหลายครั้งและเริ่มสร้างแอปพลิเคชันผู้เช่าที่ปรับขนาดได้" 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "ออกแบบสถาปัตยกรรมแอปพลิเคชันหลายผู้เช่าและตอบสนองความต้องการของผู้ใช้อย่างมีประสิทธิภาพ มาสำรวจว่าการสร้างความหลากหลายให้คุณสร้างซอฟต์แวร์ที่ปรับขนาดได้อย่างไร" 
url: /th/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## ออกแบบสถาปัตยกรรมแอปพลิเคชันหลายผู้เช่าและตอบสนองความต้องการของผู้ใช้อย่างมีประสิทธิภาพ มาสำรวจว่าการสร้างความหลากหลายให้คุณสร้างซอฟต์แวร์ที่ปรับขนาดได้อย่างไร

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## ภาพรวม
ยินดีต้อนรับสู่โพสต์บล็อกอื่นในหมวดหมู่ของ [การเขียนโปรแกรม][1] เราจะหารือเกี่ยวกับสถาปัตยกรรมแอปพลิเคชันผู้เช่าหลายคน ในความเป็นจริง [containerize.com][2] มีแอพที่มีผู้เช่าหลายรายหลากหลายในสแต็กผลิตภัณฑ์โอเพนซอร์ซ แอพพลิเคชั่นผู้เช่าโอเพนซอร์สโอเพนซอร์สรวมถึง [form.io][3], [Botpress][4] และอื่น ๆ นอกจากนี้ยังมี [เอกสาร][5] ที่สมบูรณ์เกี่ยวกับสถาปัตยกรรมการปรับใช้การพัฒนาและการใช้ซอฟต์แวร์โอเพนซอร์ซเหล่านี้ เหตุผลที่อยู่เบื้องหลังการเขียนบทความนี้คือการให้ความเข้าใจเกี่ยวกับแนวคิดที่อยู่เบื้องหลังการเช่าหลายครั้งในการพัฒนาซอฟต์แวร์ ดังนั้นมาดูกันว่า**ความหลากหลายคืออะไร**เราจะผ่านข้อดีและข้อเสียของการพหุภาคีและสถาปัตยกรรมผู้เช่ารายเดียวกับผู้เช่าเดี่ยว
ประเด็นต่อไปนี้จะถูกกล่าวถึงในโพสต์นี้:
  * [ความหลากหลายคืออะไร? ผู้เช่าหลายคนเทียบกับผู้เช่ารายเดียว][6]
  * [ประเภทของสถาปัตยกรรมแอปพลิเคชันหลายผู้เช่า][7]
  * [ผลประโยชน์ทางธุรกิจของแอพหลายคน][8]
  * [ข้อเสียในการเช่าหลายครั้ง][9]

## ความหลากหลายคืออะไร? ผู้เช่าหลายคนเทียบกับผู้เช่าเดี่ยว   {#what-is-multitenancy-multi-tenant-vs-single-tenant}
Multitenancy หมายถึงอินสแตนซ์เซิร์ฟเวอร์เดียวที่ให้บริการผู้เช่าหลายด้านที่รู้จักกันดี เมื่อใดก็ตามที่คุณเจอซอฟต์แวร์หลายผู้เช่าเพียงบอกสมองของคุณว่าซอฟต์แวร์นี้กำลังใช้อินสแตนซ์เดียวของเซิร์ฟเวอร์ที่ใช้ร่วมกันและผู้เช่าหลายราย (ไคลเอนต์) เชื่อมต่อกับอินสแตนซ์นี้ด้วยแบรนด์ที่แตกต่างกัน
ตัวอย่างเช่นซอฟต์แวร์ที่สร้างขึ้นสำหรับมหาวิทยาลัยให้บริการแผนกต่าง ๆ ที่มีแบรนด์ส่วนหน้าและข้อมูลโปรแกรมที่แตกต่างกัน โดยทั่วไปมีอินสแตนซ์เดียวของเซิร์ฟเวอร์ที่ทำงานและให้บริการผู้เช่าทั้งหมด นอกจากนี้ยังมีการแยกข้อมูลและความเป็นส่วนตัวของข้อมูลระหว่างผู้เช่าทั้งหมด ยิ่งไปกว่านั้นผู้เช่าทุกคนมีตรรกะทางธุรกิจและดึงข้อมูลและเก็บข้อมูลในสถานที่เดียว แต่เป็นส่วนตัว/แยก

{{< figure align=center src="images/multi-tenant-1.png" alt="สถาปัตยกรรมผู้เช่าหลายคน">}}

ทีนี้ลองมาดูสถาปัตยกรรมผู้เช่าเดี่ยวอย่างรวดเร็ว ในสถาปัตยกรรมผู้เช่าเดี่ยวมีหนึ่งอินสแตนซ์เซิร์ฟเวอร์ต่อผู้เช่า อีกครั้งลองเป็นตัวอย่างของซอฟต์แวร์มหาวิทยาลัย วิธีการเช่ารายเดียวหมายถึงอินสแตนซ์เซิร์ฟเวอร์หนึ่งอินสแตนซ์ต่อแผนกและจำนวนอินสแตนซ์ขึ้นอยู่กับจำนวนแผนก (ผู้เช่า)

{{< figure align=center src="images/single-tenant-2.png" alt="สถาปัตยกรรมผู้เช่าเดี่ยว">}}


## ประเภทของสถาปัตยกรรมแอปพลิเคชันผู้เช่าหลายคน   {#ประเภทของผู้เช่า-ผู้เช่า-แอปพลิเคชัน-สถาปัตยกรรม}
จนถึงตอนนี้คุณมีความเข้าใจเกี่ยวกับการเช่าหลายครั้งและตอนนี้เราจะผ่านประเภทต่าง ๆ ของมัน
**ฐานข้อมูลหนึ่ง-หนึ่งอินสแตนซ์แอพ**: วิธีการนี้ค่อนข้างเป็นที่นิยมและถูกนำมาใช้อย่างกว้างขวางในการสร้างแอพผู้เช่าหลายคน ตามวิธีการนี้มีหนึ่งอินสแตนซ์แอปพลิเคชันที่ทำงานกับฐานข้อมูลเดียว นอกจากนี้ยังมีสคีมาที่ใช้ร่วมกันและข้อมูลของผู้เช่าจะถูกเก็บไว้ในตำแหน่งเดียวกับ ID ที่ไม่ซ้ำกัน
**หลายฐานข้อมูล-หนึ่งอินสแตนซ์แอพ:**ในสถาปัตยกรรมแอปพลิเคชันหลายผู้เช่านี้มีเพียงอินสแตนซ์เดียวของแอปพลิเคชันที่ทำงานด้วยฐานข้อมูลหลายฐานข้อมูล ผู้เช่าทุกคนมีสคีมาฐานข้อมูลของตัวเองที่บันทึกข้อมูลทั้งหมดต่อผู้เช่าแต่ละรายแยกกัน
**หลายฐานข้อมูล - อินสแตนซ์แอพหลายตัว**: วิธีที่สามหมายถึงการเรียกใช้อินสแตนซ์เซิร์ฟเวอร์หลายตัวพร้อมกับหลายฐานข้อมูล ไม่มีอะไรร่วมกันและผู้เช่าแต่ละรายมีความโดดเดี่ยวอย่างสมบูรณ์และไม่มีการพึ่งพาระหว่างผู้เช่า

## ผลประโยชน์ทางธุรกิจของแอปหลายผู้เช่า   {#ธุรกิจ-ผลประโยชน์ของผู้เช่า-ผู้เช่า-แอป}
ในส่วนนี้เราจะได้รับประโยชน์ที่โดดเด่นของการเลือกใช้ความหลากหลาย แม้ว่าเราสามารถพูดคุยเกี่ยวกับข้อดีได้นาน แต่มาดูประเด็นต่อไปนี้:
**ความสามารถในการปรับขนาด**: เป็นเรื่องง่ายที่จะปรับขนาดสถาปัตยกรรมผู้เช่าหลายคน คุณสามารถปรับขนาดในแนวนอนหรือแนวตั้งโดยไม่คำนึงถึงประเภทที่คุณเลือก
**คุ้มค่า**: การเลือกใช้ความหลากหลายช่วยประหยัดค่าใช้จ่ายในการดำเนินงานของคุณ มีทรัพยากรที่ใช้ร่วมกันดังนั้นจึงมีประสิทธิภาพในการขยายทรัพยากร
**ประสิทธิภาพและความยืดหยุ่น**: ในสภาพแวดล้อมที่หลากหลายคุณได้รับประสิทธิภาพในการพัฒนาและการปรับใช้ ตัวอย่างเช่นคุณสามารถเรียกใช้สคริปต์บนสคีมาฐานข้อมูลที่ใช้ร่วมกันเพื่ออัปเดตผู้เช่าทั้งหมด
**การจัดการทรัพยากรที่ดีขึ้น**: การเพิ่มและการลบทรัพยากรนั้นตรงไปตรงมา นอกจากนี้สถาปัตยกรรมนี้ยังนำเสนอโครงสร้างพื้นฐานที่ดีขึ้นและมีการจัดการที่ดี ยิ่งกว่านั้นผู้เช่าทุกคนเป็นส่วนตัวและปลอดภัยและสามารถเข้าถึงฐานข้อมูลที่ใช้ร่วมกัน/ไม่แชร์ได้

## ข้อเสียในการเช่าหลายครั้ง   {#ข้อบกพร่องในการเช่าซื้อ}
จุดประสงค์ของการโพสต์บล็อกนี้คือการให้ความรู้สึกเป็นธรรมกับสถาปัตยกรรมผู้เช่าหลายคน**ดังนั้นให้สำรวจข้อเสียบางอย่างที่แนบมากับผู้เช่าหลายคน
**กลไกการตรวจสอบความถูกต้องที่ซับซ้อน**: เนื่องจากลักษณะที่ใช้ร่วมกันของการจัดสรรทรัพยากรในการพหุคูณจึงมีโปรโตคอลที่เข้มงวดสำหรับจุดเชื่อมต่อข้อมูล
**การแยกเซิร์ฟเวอร์:**เป็นจุดสำคัญที่ต้องพิจารณาในขณะที่เลือกสถาปัตยกรรมแอปพลิเคชันผู้เช่าหลายคน ผู้เช่าทั้งหมดไม่สามารถใช้งานได้เมื่อใดก็ตามที่เซิร์ฟเวอร์ลดลงเนื่องจากเหตุผลใดก็ตาม
**ความเสี่ยงด้านความเป็นส่วนตัว**: ในสถาปัตยกรรมผู้เช่าหลายคนมีการละเมิดความปลอดภัยสูง ในความเป็นจริงข้อมูลของผู้เช่าทั้งหมดจะถูกเก็บไว้ในฐานข้อมูลที่ใช้ร่วมกันดังนั้นการบุกรุกของบุคคลที่สามอาจส่งผลให้เกิดการทุจริตข้อมูลหรือการโจรกรรม

## บทสรุป
เรากำลังสิ้นสุดโพสต์บล็อกนี้ที่นี่ บทความนี้มีคำตอบสำหรับคำถามของคุณเช่น**ความหลากหลายทาง**คืออะไร? นอกจากนี้เรายังได้สำรวจ**ผู้เช่าหลายคนเทียบกับโครงสร้างพื้นฐาน**นอกจากนี้คู่มือนี้จะช่วยคุณเมื่อเลือกสถาปัตยกรรมแอปพลิเคชันหลายผู้เช่าหรือผู้เช่ารายเดียว เหนือสิ่งอื่นใดความหลากหลายเป็นตัวเลือกแรกหากคุณกำลังสร้าง SaaS มีโพสต์บล็อกที่น่าสนใจอื่น ๆ ที่คุณอาจพบในส่วน "ดูเพิ่มเติม" ซึ่งจะให้ข้อมูลเชิงลึกล่าสุดเกี่ยวกับโลกเทคโนโลยี
ในที่สุด [containerize.com][2] กำลังเขียนโพสต์บล็อกอย่างต่อเนื่องในผลิตภัณฑ์และหัวข้อโอเพนซอร์ซเพิ่มเติม ยิ่งกว่านั้นคุณสามารถติดตามเราในบัญชีโซเชียลมีเดียของเรา [Facebook][10], [LinkedIn][11] และ [Twitter][12]

## ถามคำถาม
คุณสามารถแจ้งให้เราทราบเกี่ยวกับคำถามหรือคำถามของคุณเกี่ยวกับ [ฟอรัม] ของเรา [13]

## คำถามที่พบบ่อย
**ตัวอย่างหลายคนคืออะไร**
กรุณาเยี่ยมชม [ลิงก์][6] เพื่อรู้ว่าอะไรคือความหลากหลาย มีรายละเอียดพร้อมตัวอย่าง
**ความหมายของสถาปัตยกรรมผู้เช่าหลายคนคืออะไร**
สถาปัตยกรรมแอปพลิเคชันหลายคน**หมายถึงอินสแตนซ์เดียวของเซิร์ฟเวอร์ให้บริการผู้เช่าหลายราย (ไคลเอนต์) โปรดนำทางไปยัง [ลิงก์][7] สำหรับรายละเอียดเพิ่มเติม

## ดูสิ่งนี้ด้วย
  * [Generative AI คืออะไร | ปัญญาประดิษฐ์กำเนิดกำเนิด][14]
  * [วิธีการรวม CHATGPT กับ Google Sheets][15]
  * [วิธีใช้ CHATGPT ใน VSCODE | รหัสส่วนขยาย VSCODE GPT][16]
  * [Openai Chatbot GPT-3 คืออะไร | CHATGPT การปฏิวัติ AI][17]
  * [บทนำสู่ปัญญาประดิษฐ์ | AI คืออะไร][18]

  
[1]: https://blog.containerize.com/category/programming/
[2]: https://www.containerize.com/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/live-chat/botpress/
[5]: https://products.containerize.com/
[6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
[7]: #Types-of-Multi-Tenant-Application-Architecture
[8]: #Business-Benefits-of-Multi-Tenant-App
[9]: #Drawbacks-in-Multi-Tenancy
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/