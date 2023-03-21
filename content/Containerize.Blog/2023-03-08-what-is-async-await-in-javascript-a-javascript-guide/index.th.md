---
title: "Async กำลังรออยู่ใน JavaScript คืออะไร? | คู่มือจาวาสคริปต์" 
seoTitle: "Async กำลังรออยู่ใน JavaScript คืออะไร?" 
description: "Async กำลังรออยู่ใน JavaScript คืออะไร? คำหลัก Async & Await ใช้เพื่อใช้งานการดำเนินงานแบบอะซิงโครนัสได้ดีกว่าสัญญาดั้งเดิมใน JavaScript" 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Async กำลังรออยู่ใน JavaScript คืออะไร? คำหลัก Async & Await ใช้เพื่อใช้งานการดำเนินงานแบบอะซิงโครนัสได้ดีกว่าสัญญาดั้งเดิมใน JavaScript" 
url: /th/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 แนะนำ JavaScript Async/Await ซึ่งเป็นเสื้อคลุมรอบสัญญา Async/Await ใช้เพื่อใช้ APIs ตามสัญญาในวิธีที่ทันสมัยและง่ายที่สุด

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Async กำลังรออยู่ใน JavaScript คืออะไร??">}}


## ภาพรวม
เราครอบคลุม [JavaScript Promises][1] ในโพสต์บล็อกก่อนหน้าของเราและคุณต้องเยี่ยมชมหากคุณต้องการทำความเข้าใจอย่างชัดเจนเกี่ยวกับแนวคิดที่อยู่เบื้องหลังคำสัญญา JavaScript ในชุดของ [JavaScript Tutorials][2] เราอยู่ที่นี่พร้อมกับคู่มือ JavaScript อื่นที่จะแสดงให้เห็นถึงคุณสมบัติที่ทันสมัยของ JavaScript Async/Await โพสต์บล็อกนี้มีไว้สำหรับผู้ที่มีความรู้ก่อนหน้านี้เกี่ยวกับสัญญา JavaScript นอกจากนี้เราจะพยายามครอบคลุม**async/รออยู่ใน JavaScript**คืออะไรและเมื่อเราจำเป็นต้องใช้ Async/รอคอย นอกจากนี้เราจะครอบคลุมข้อผิดพลาดในการจัดการกับ Async/รอ ดังนั้นให้อ่านอย่างละเอียดถึง**JavaScript Async/รอการสอน**เพื่อทำเครื่องหมายแนวคิดนี้ตรวจสอบ
เราจะผ่านส่วนต่อไปนี้ใน JavaScript Async รอการสอน:
* **[Async/รออยู่ใน JavaScript คืออะไร | async รอไวยากรณ์][3]**
* **[เมื่อใดที่จะใช้ async/รอ?][4]**
* **[การจัดการข้อผิดพลาดด้วย async/รอ][5]**

## async/รออยู่ใน JavaScript คืออะไร | async รอไวยากรณ์   {#what-is-asyncawait-in-javascript-async-Await-Syntax}
ECMASCRIPT 2017 เปิดตัวคุณสมบัติใหม่ของ JavaScript และ Async/Await เป็นหนึ่งในคุณสมบัติที่ใช้กันอย่างแพร่หลายมากที่สุดในคุณสมบัติเหล่านี้ Async/Await สร้างขึ้นตามสัญญาและเป็นวิธีที่ทันสมัยในการจัดการกับคำสัญญา JavaScript
มาดูวิธีใช้คำหลัก async/รออยู่ในรหัส JavaScript:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
คำหลัก Async ที่จุดเริ่มต้นของฟังก์ชั่นหมายความว่าฟังก์ชั่นนี้จะส่งคืนสัญญา ดังนั้นคำหลักที่รอคอยจะถูกนำมาใช้ในร่างกายของฟังก์ชั่น Async เพื่อหยุดการดำเนินการของฟังก์ชั่นชั่วคราวจนกว่าสัญญาจะแก้ไข สิ่งสำคัญที่ควรทราบที่นี่คือคุณไม่สามารถใช้คำหลักรออยู่ภายในร่างกายของฟังก์ชั่นปกติ อย่างไรก็ตามคุณสามารถใช้รอเพียงฟังก์ชั่นแบบอะซิงโครนัสที่ประกาศด้วยคำหลัก Async

## เมื่อใดควรใช้ async/รอ?   {#เมื่อต้องใช้ Asyncawait}
จนถึงตอนนี้คุณมีคำตอบสำหรับ**async กำลังรออยู่ใน JavaScript**เนื่องจากนี่เป็นเพียงเสื้อคลุมรอบ JavaScript แบบดั้งเดิมที่สัญญาไว้เพื่อให้คุณใช้วิธีใหม่นี้ในการสร้างและจัดการกับสัญญาในวิธีที่สะอาดและอ่านง่ายขึ้น นอกจากนี้คุณสามารถกำจัดคำสัญญาหลายรายการจากนั้น () การโทรโดยใช้ Async/Await ซึ่งในที่สุดก็ทำให้ซอร์สโค้ดสามารถจัดการและบำรุงรักษาได้มากขึ้น คำหลักรอห่อหุ้มคำสั่ง. จากนั้น () ลงในบรรทัดเดียว

## การจัดการข้อผิดพลาดด้วย async/รอ   {#ข้อผิดพลาด handling-with-asyncawait}
การจัดการข้อผิดพลาดเป็นงานที่สำคัญเมื่อพูดถึงการพัฒนาซอฟต์แวร์ระดับองค์กร มีหลายวิธีในการจับข้อผิดพลาดในวิธีการ Async/รอ

{{< figure align=center src="images/async-await.png" alt="ลองจับ async รอ JavaScript">}}

**ลองจับ async รอ JavaScript**: ไม่มีอะไรใหม่กับวิธีการจัดการข้อผิดพลาดนี้ อย่างไรก็ตามคุณสามารถใช้บล็อกลอง/จับภายในฟังก์ชั่น async ดังที่แสดงในตัวอย่างโค้ดด้านล่าง:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
การใช้บล็อกลอง/catch คุณสามารถจับข้อยกเว้นภายในร่างกายของฟังก์ชั่น async
ในขณะที่มีวิธีการอื่นในการจัดการข้อผิดพลาดที่คุณสามารถต่อท้าย. catch () บล็อกที่ส่วนท้ายของการเรียกใช้ฟังก์ชัน เนื่องจาก Async/Await ส่งคืนสัญญาดังนั้นคุณจึงตรวจสอบข้อผิดพลาดในบล็อก. catch ()
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## บทสรุป
เรากำลังจะจบลงด้วยการสอน JavaScript Async นี้**หวังว่าคุณจะมีความเข้าใจที่ดีขึ้นเกี่ยวกับ**async กำลังรออยู่ใน JavaScript**นอกจากนี้เราได้ผ่าน JavaScript Async รอไวยากรณ์ที่ทำให้ซอร์สโค้ดมีความซับซ้อนน้อยลง คุณสมบัติ JavaScript นี้ถูกใช้อย่างกว้างขวางเนื่องจากการใช้งานและประสิทธิภาพที่หลากหลาย ในไม่กี่วันข้างหน้าเราจะเขียนเพิ่มเติมเกี่ยวกับคุณสมบัติและแนวคิดของ JavaScript เพื่อให้คุณได้รับคำสั่งที่แข็งแกร่งเหนือแนวคิด JS นอกจากนี้ยังมีบทความที่น่าสนใจอื่น ๆ ที่กล่าวถึงในส่วน "ดูเพิ่มเติม"

## เชื่อมต่อกับเรา
สุดท้าย [containerize.com][6] เสนอบทเรียน JavaScript อย่างต่อเนื่องในหัวข้อที่น่าตื่นเต้นต่างๆ คุณสามารถอัปเดตต่อไปได้โดยติดตามเราบนแพลตฟอร์มโซเชียลมีเดียของเรารวมถึง [Facebook][7], [LinkedIn][8] และ [Twitter][9]

## ถามคำถาม
คุณสามารถแจ้งให้เราทราบเกี่ยวกับคำถามหรือคำถามของคุณเกี่ยวกับ [ฟอรัม] ของเรา [10]

## คำถามที่พบบ่อย
**async กำลังรออยู่ใน JavaScript กับตัวอย่างคืออะไร**
คุณสามารถเยี่ยมชม [ลิงก์][3] เพื่อทำความเข้าใจแนวคิดของ Async รออยู่
**async รออะไรกับสัญญาคืออะไร**
 * Async/Await ทำให้ซอร์สโค้ดชัดเจนขึ้นและอ่านได้มากขึ้นเมื่อเทียบกับสัญญาที่สัญญาว่าการผูกมัดสามารถทำให้ซอร์สโค้ดเป็นระเบียบได้
 * การจัดการข้อผิดพลาดค่อนข้างคล้ายกันในทั้งสองวิธี
 * การดีบักนั้นยากน้อยกว่าในการรอคอย
 * สัญญารักษารัฐเช่นรอดำเนินการแก้ไขหรือปฏิเสธ ในขณะที่ Async/Await ได้รับการแก้ไขหรือถูกปฏิเสธ

## ดูสิ่งนี้ด้วย
  * [สัญญาใน JavaScript คืออะไร? | การสอน JavaScript][1]
  * [การคำนวณแบบไม่มีเซิร์ฟเวอร์คืออะไร? | สถาปัตยกรรมแบบไม่มีเซิร์ฟเวอร์][11]
  * [ความหลากหลายคืออะไร? | ทำไมต้องมีวิธีการหลายคน?][12]
  * [Generative AI คืออะไร | ปัญญาประดิษฐ์กำเนิดกำเนิด][13]
  * [วิธีการรวม CHATGPT กับ Google Sheets][14]
  * [วิธีใช้ CHATGPT ใน VSCODE | รหัสส่วนขยาย VSCODE GPT][15]
  * [Openai Chatbot GPT-3 คืออะไร | CHATGPT การปฏิวัติ AI][16]
  * [บทนำสู่ปัญญาประดิษฐ์ | AI คืออะไร][17]

  
[1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
[4]: #When-to-use-AsyncAwait
[5]: #Error-handling-with-AsyncAwait
[6]: https://www.containerize.com/
[7]: https://web.facebook.com/containerize
[8]: https://www.linkedin.com/company/containerize/
[9]: https://twitter.com/containerize_co
[10]: https://forum.containerize.com/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
