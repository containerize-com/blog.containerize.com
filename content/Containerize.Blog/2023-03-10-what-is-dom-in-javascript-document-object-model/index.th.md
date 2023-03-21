---
title: "DOM ใน JavaScript คืออะไร? | โมเดลวัตถุเอกสาร" 
seoTitle: "DOM ใน JavaScript คืออะไร?" 
description: "DOM ใน JavaScript คืออะไร? คู่มือนี้จะแสดงให้เห็นถึงโมเดลวัตถุเอกสารคุณสมบัติของ DOM ระดับของ DOM และวิธีการเข้าถึงองค์ประกอบ DOM" 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "DOM ใน JavaScript คืออะไร? คู่มือนี้จะแสดงให้เห็นถึงโมเดลวัตถุเอกสารคุณสมบัติของ DOM ระดับของ DOM และวิธีการเข้าถึงองค์ประกอบ DOM" 
url: /th/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## การเป็นตัวแทนของเอกสาร HTML ภายในเว็บเบราว์เซอร์ถือเป็นแผนผัง HTML DOM มันเป็นชุดของวัตถุและกำหนดโครงสร้างของหน้าเว็บ

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="DOM ใน JavaScript คืออะไร??">}}


## ภาพรวม
ยินดีต้อนรับสู่โพสต์บล็อกที่น่าตื่นเต้นอีกครั้งในซีรีส์ของ [JavaScript Programming][1] ในบทความนี้เราจะสัมผัสแนวคิดพื้นฐาน แต่สำคัญของการพัฒนาเว็บ ใช่เราจะครอบคลุมโมเดลวัตถุเอกสารใน JavaScript ในอดีตเราได้เผยแพร่บทเรียน JavaScript ที่จำเป็นต้องเริ่มพัฒนาโดยใช้ภาษา JavaScript ดังนั้นเราขอแนะนำให้คุณอ่านโพสต์บล็อกนี้อย่างละเอียดเพื่อที่คุณจะได้ไม่พลาดสิ่งที่เกี่ยวข้องกับแนวคิดที่สำคัญนี้ มาเริ่มต้นคู่มือนี้และค้นหา**อะไรคือ DOM ใน JavaScript**คุณสมบัติ DOM และวิธีที่คุณสามารถโต้ตอบกับมันโดยทางโปรแกรม
เราจะครอบคลุมหัวข้อต่อไปนี้ในคู่มือ JavaScript นี้:
* **[โมเดลวัตถุเอกสาร (DOM) คืออะไร][2]**
* **[ระดับ DOM][3]**
* **[คุณสมบัติของ DOM คืออะไรและจะเข้าถึงได้อย่างไร][4]**

## โมเดลวัตถุเอกสาร (DOM) คืออะไร?   {#what-is-document-object-model}
Dom ย่อมาจาก?**โมเดลวัตถุเอกสาร (DOM)**เป็นการแสดงหน้าเว็บภายในเว็บเบราว์เซอร์ เพียงแค่การแสดงลำดับชั้นขององค์ประกอบของเอกสาร HTML ในเบราว์เซอร์เรียกว่าโมเดลวัตถุเอกสาร มันถูกสร้างขึ้นในรูปต้นไม้ที่สร้างขึ้นจริงโดยเว็บเบราว์เซอร์ ประกอบด้วยโหนดต่าง ๆ ซึ่งเชื่อมต่อกันซึ่งเป็นรูปต้นไม้ นอกจากนี้องค์ประกอบ DOM มีคุณลักษณะและเหตุการณ์ที่แนบมากับพวกเขา
ในความเป็นจริง DOM เป็นอินเทอร์เฟซการเขียนโปรแกรมที่กำหนดโครงสร้างเชิงตรรกะของหน้าเว็บและกำหนดวิธีการเข้าถึงองค์ประกอบหน้า โดยพื้นฐานแล้ว JavaScript ไม่รู้จักแท็ก HTML เช่นชื่อเรื่อง H1 และอื่น ๆ ดังนั้นเมื่อเอกสาร HTML ถูกโหลดลงในเว็บเบราว์เซอร์ DOM จะถูกสร้างขึ้นซึ่งทำให้ JavaScript เข้าใจองค์ประกอบเอกสาร

## DOM ระดับ   {#dom-levels}
ส่วนนี้จะแสดงให้เห็นถึงระดับต่าง ๆ ของ DOM ครั้งแรกมีวัตถุหน้าต่างในเบราว์เซอร์ที่อยู่ด้านบนเสมอและจากนั้นก็มีโหนดเอกสาร มาดูภาพด้านล่าง:

{{< figure align=center src="images/DOM.png" alt="ระดับ DOM">}}

คุณสามารถเห็นองค์ประกอบ DOM ในภาพด้านบน หน้าต่างและเอกสารเป็นวัตถุเบราว์เซอร์ระดับบนสุดและจากนั้นเรามีองค์ประกอบ HTML เป็นรูท เรามีโหนดหัวและร่างกายโหนดชื่อเป็นของโหนดหัวและโหนดร่างกายมีโหนดทั้งหมดที่แสดงผลและมองเห็นได้ในเว็บเบราว์เซอร์ ยิ่งไปกว่านั้นองค์ประกอบของร่างกายมีคุณลักษณะที่เราสามารถเห็นได้ในภาพเช่นแท็กสมอที่มีแอตทริบิวต์ "HREF" ในทำนองเดียวกันโหนด DOM อื่น ๆ มีคุณลักษณะต่าง ๆ เช่น IMG, meta และอื่น ๆ

## คุณสมบัติ DOM คืออะไรและจะเข้าถึงได้อย่างไร?   {#what-are-dom-properties และ-ac-to-access-them}
จนถึงตอนนี้เราได้รับคำตอบเกี่ยวกับสิ่งที่ DOM ใน JavaScript และ DOM ระดับและเราก็ผ่านโหนด DOM ในส่วนนี้เราจะผ่านคุณสมบัติ DOM และจะเห็นว่าเราจะโต้ตอบกับพวกเขาได้อย่างไร ทุกองค์ประกอบ DOM มีค่าที่เชื่อมโยงกับมันเช่นแท็ก "P" มีคุณสมบัติข้อความแท็ก IMG มีรูปภาพและอื่น ๆ วิธี JavaScript ใช้เพื่อเข้าถึงค่าของโหนด นอกจากนี้คุณสามารถเพิ่ม/ลบผู้ฟังเหตุการณ์ไปยังองค์ประกอบ DOM
คุณสามารถค้นหาคุณสมบัติ**dom ต่อไปนี้**:
**innerhtml**: คุณสมบัตินี้ใช้ในการตั้งค่าหรือดึงเนื้อหา HTML ของโหนด DOM
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**InnerText**: ใช้คุณสมบัติ DOM นี้เพื่อเข้าถึงหรือตั้งค่าเนื้อหาข้อความขององค์ประกอบ HTML
```
let textualContent = document.getElementById("customID").innerText;
```
**parentelement**: คุณสามารถใช้คุณสมบัตินี้เพื่อเข้าถึงโหนดพาเรนต์ขององค์ประกอบ
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**สไตล์**: อัปเดตแอตทริบิวต์สไตล์ขององค์ประกอบ
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**ชื่อเรื่อง**: ใช้คุณสมบัตินี้เพื่ออัปเดตองค์ประกอบชื่อของ DOM
```
document.getElementById("customID").title= "this is a web page";
```
 ต่อไปนี้เป็นวิธีการบางอย่างที่เราสามารถใช้ในการโต้ตอบกับ JavaScript DOM:
**addeventListener ()**: วิธี DOM นี้ใช้เพื่อแนบตัวจัดการเหตุการณ์กับองค์ประกอบ
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute ()**: วิธี DOM นี้ใช้เพื่อแนบตัวจัดการเหตุการณ์กับองค์ประกอบ
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById ()**: วิธีการรับองค์ประกอบเฉพาะด้วย "ID" ที่กำหนด
```
let element = document.getElementById("myID");
```
**querySelector ()**: ใช้วิธีนี้เพื่อรับองค์ประกอบลูกแรกที่ถูกจับคู่กับตัวเลือก CSS
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**ToString ()**: คุณสามารถใช้วิธีนี้เพื่อแปลงองค์ประกอบเป็นสตริง
ในทำนองเดียวกันมีวิธีการและคุณสมบัติอื่น ๆ อีกมากมายที่คุณสามารถสำรวจได้

## บทสรุป
เรากำลังสิ้นสุดการสอน Javasxcript นี้ที่นี่ด้วยความหวังว่าคุณจะมีความเข้าใจที่ดีเกี่ยวกับ**อะไรคือ DOM ใน JavaScript**นอกจากนี้เรายังผ่าน**DOM, DOM ระดับ, HTML DOM Tree และ DOM คุณสมบัติ**โพสต์บล็อกนี้มีความสำคัญอย่างยิ่งสำหรับมือใหม่ที่กำลังมองหาการยึดเกาะที่แข็งแกร่งในแนวคิด Javascrit นอกจากนี้ยังมีบทความอื่น ๆ ที่เกี่ยวข้องที่คุณสามารถหาได้ในส่วน "ดูเพิ่มเติม"

## เชื่อมต่อกับเรา
ในที่สุด [containerize.com][5] ข้อเสนอการสอน JavaScript อย่างต่อเนื่องในหัวข้อที่น่าตื่นเต้นต่างๆ คุณสามารถอยู่ในวงได้โดยติดตามเราบนแพลตฟอร์มโซเชียลมีเดียของเรารวมถึง [Facebook][6], [LinkedIn][7] และ [Twitter][8]

## ถามคำถาม
คุณสามารถแจ้งให้เราทราบเกี่ยวกับคำถามหรือคำถามของคุณเกี่ยวกับ [ฟอรัม] ของเรา [9]

## คำถามที่พบบ่อย
**DOM ใช้อะไรใน JavaScript?**
คุณสามารถเยี่ยมชม [ลิงก์][2] เพื่อรับคำตอบโดยละเอียดสำหรับคำถามนี้

## ดูสิ่งนี้ด้วย
  * [สัญญาใน JavaScript คืออะไร? | การสอน JavaScript][10]
  * [การคำนวณแบบไม่มีเซิร์ฟเวอร์คืออะไร? | สถาปัตยกรรมแบบไม่มีเซิร์ฟเวอร์][11]
  * [ความหลากหลายคืออะไร? | ทำไมต้องมีวิธีการหลายคน?][12]
  * [Generative AI คืออะไร | ปัญญาประดิษฐ์กำเนิดกำเนิด][13]
  * [Async กำลังรออยู่ใน JavaScript คืออะไร? | คู่มือ JavaScript][14]
  * [วิธีใช้ CHATGPT ใน VSCODE | รหัสส่วนขยาย VSCODE GPT][15]
  * [Openai Chatbot GPT-3 คืออะไร | CHATGPT การปฏิวัติ AI][16]
  * [บทนำสู่ปัญญาประดิษฐ์ | AI คืออะไร][17]

  
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
