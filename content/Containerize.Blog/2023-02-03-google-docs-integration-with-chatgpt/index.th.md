---
title: "การรวม Google docs กับ CHATGPT | Openai GPT-3" 
seoTitle: "การรวม Google docs กับ CHATGPT | Openai GPT-3" 
description: "ติดตั้งรุ่น GPT-3 ที่ขับเคลื่อนด้วย AI ใน Google เอกสารของคุณเพื่อทำงานทางธุรกิจที่หลากหลายโดยอัตโนมัติ มาเรียนรู้วิธีการรวม Google Docs เข้ากับ CHATGPT กันเถอะ" 
date: Fri, 03 Feb 2023 21:44:01 +0000
author: muhammadmustafa
summary: "คุณกำลังมองหาการกระทำซ้ำ ๆ ซ้ำ ๆ หรือไม่? นี่คือโมเดล OpenAI GPT-3 NLP ที่ขับเคลื่อนด้วย AI ซึ่งมีคุณสมบัติที่หลากหลายสำหรับ Google Docs Automation" 
url: /th/google-docs-integration-with-chatgpt/
categories: ['Artificial intelligence']
---

## คุณกำลังมองหาการกระทำซ้ำ ๆ ซ้ำ ๆ หรือไม่? นี่คือโมเดล OpenAI GPT-3 NLP ที่ขับเคลื่อนด้วย AI ซึ่งมีคุณสมบัติที่หลากหลายสำหรับ Google Docs Automation

{{< figure align=center src="images/Google-Docs-Integration-with-ChatGPT-OpenAI-GPT-3-1.png" alt="การรวม Google docs กับ chatgpt">}}


## ภาพรวม
เมื่อเร็ว ๆ นี้ [CHATGPT][1] ได้กลายเป็นคำศัพท์ในโลกเทคโนโลยี บางคนชอบและพิจารณาสิ่งนี้ **AI chatbot**เป็นภัยคุกคามต่อผลผลิตและความโปร่งใส ดี [containerize.com][2] กำลังเขียนเกี่ยวกับการใช้งานและการบูรณาการของโมเดล OpenAI GPT-3 นี้ อันที่จริง [Google เอกสาร][3] เป็นเครื่องมือที่ยอดเยี่ยมสำหรับการเขียนและการเป็นตัวแทนข้อมูล อีกมือหนึ่งการถือกำเนิดของ CHATGPT คือเครื่องมือสนทนา [AI][4] ที่ตอบสนองต่อการสืบค้นภาษาธรรมชาติในลักษณะการสนทนา เครื่องมือ AI นี้ขึ้นอยู่กับการเรียนรู้ของเครื่องและพัฒนาโดย [openai][5] อย่างไรก็ตามโพสต์บล็อกนี้เกี่ยวกับ **chatgpt และ Google** ซึ่งเราจะได้เรียนรู้วิธีการรวม **Google Docs Integration กับ Chatgpt** ไม่ต้องสงสัยเลยว่าเราสามารถนำ**Google Docs Automation** โดยการติดตั้ง Add-on ของ Chatgpt ลงใน Google เอกสารของเรา
เราจะผ่านประเด็นต่อไปนี้ในโพสต์บล็อกนี้:
* [ **จะรับคีย์ OpenAI API ได้อย่างไร** ][6]
* **[มารวม Google Docs เข้าด้วยกันกับ CHATGPT][7]** 
* [ **เริ่มใช้ CHATGPT และ Google****เอกสาร**][8]

## จะได้รับคีย์ OpenAI API ได้อย่างไร? {#How-to-obtain-the-OpenAI-API-key}

เพียงเพื่อให้คุณแนะนำเล็กน้อย OpenAI เป็น บริษัท ที่มุ่งเน้นการวิจัยและพัฒนาเครื่องมือปัญญาประดิษฐ์ ChatGPT ยังได้รับการพัฒนาและเปิดตัวโดย OpenAI ในขณะที่ OpenAI ได้พัฒนาชุดของรุ่น GPT
ก่อนอื่นคุณต้องสร้างบัญชีบน [แพลตฟอร์ม] ของ OpenAI [9] จากนั้นเข้าสู่ระบบเมื่อคุณเข้าสู่ระบบคุณจะลงจอดบนหน้าคีย์ API ซึ่งคุณสามารถสร้างคีย์ API ได้โดยคลิกที่ปุ่ม“ สร้างความลับใหม่ คีย์” ดังที่แสดงด้านล่าง

{{< figure align=center src="images/openai-api-key-1.gif" alt="คีย์ Openai API">}}

คัดลอกคีย์ OpenAI API ที่สร้างใหม่และบันทึกเพื่อให้คุณสามารถใช้สำหรับการรวม Google Docs

## มารวม Google Docs เข้ากับ chatgpt กันเถอะ {#Lets-do-Google-Docs-Integration-with-ChatGPT}

ขั้นตอนการติดตั้งของเครื่องมือ AI การสนทนานี้ค่อนข้างง่าย คลิก“ Extensions-Add-Ons-> รับ Add-On” และคุณจะเห็นหน้า Google Workspace Marketplace ตอนนี้เขียน chatgpt ในแถบค้นหาเลือกตัวเลือก“ chatgpt ในแผ่นงานและเอกสาร” คลิกตัวเลือกแรกและติดตั้งตามที่เห็นในภาพด้านล่าง:

{{< figure align=center src="images/chatgpt-and-google-1.gif" alt="Chatgpt และ Google">}}

มันจะขออนุญาตให้เข้าถึงบัญชี Google ของคุณเพื่อดำเนินการขั้นตอนนี้เพื่อทำการติดตั้งให้เสร็จสมบูรณ์ ถัดไปคลิก“ ส่วนขยาย-> GPT สำหรับแผ่นงานและ docs-> ตั้งคีย์ API” เพื่อตั้งค่าคีย์ API เพื่อให้คุณสามารถเปิดใช้งานการรวม Google เอกสารด้วย chatgpt ดังแสดงในภาพด้านล่าง:

{{< figure align=center src="images/conversational-ai-tool.gif" alt="เครื่องมือ AI การสนทนา">}}

ในที่สุด OpenAI GPT-3 ได้รับการติดตั้งใน Google เอกสารของคุณและคุณสามารถเริ่มใช้ประโยชน์จาก Google Docs Automation

## เริ่มใช้ CHATGPT และ Google เอกสาร {#Start-using-ChatGPT-and-Google}

ถึงเวลาที่จะเริ่มใช้ระบบอัตโนมัติของ Google Docs นี้ ขนวัตถุนี้จะเปิดแท็บใหม่โดยคลิก“ ส่วนขยาย-> แอพสคริปต์” ตอนนี้คัดลอกและวางรหัสต่อไปนี้ลงในตัวแก้ไขรหัส
{{< gist mustafabutt-dev 997afd9cc9f7285b055e053ad95ff298 >}}
ในแกนด้านบนแทนที่“ xxxxxxxxxxxxxxx” ด้วยคีย์ OpenAI API ของคุณ จากนั้นบันทึกไฟล์แล้วคลิก“ เรียกใช้” ที่อยู่ตรงกลางด้านบนของตัวแก้ไขรหัสและปิดหน้าต่าง
กลับไปที่หน้าต่าง Google เอกสารแล้วคุณจะเห็นรายการเมนูใหม่“ chatgpt” ในแถบเมนู คุณสามารถแก้ไขรหัสตามความต้องการของคุณ แต่ในตัวอย่างนี้คุณมีฟังก์ชันต่าง ๆ เช่นการสร้างภาพสโลแกนและคำพ้องความหมายที่แสดงในภาพด้านล่าง:

{{< figure align=center src="images/Google-Docs-Integration-.gif" alt="การรวม Google docs กับ chatgpt">}}

ในตัวอย่างด้านบนเราเขียนคำและขอให้ CHATGPT สร้างสโลแกนรูปภาพและคำพ้องความหมายและทำงานได้สำเร็จ

## บทสรุป
เพื่อสรุปเราสามารถพูดได้อย่างปลอดภัยว่าคุณได้เรียนรู้วิธีการรวม **Google Docs รวมเข้ากับ CHATGPT**นอกจากนี้เราได้เห็นวิธีการสร้าง**OpenAi API Key** และตั้งค่าเพื่อเปิดใช้งานฟังก์ชั่น OpenAI GPT-3**ระบบอัตโนมัติของ Google เอกสารนี้สามารถเป็นประโยชน์ต่องานธุรกิจของคุณอย่างจริงจัง นอกจากนี้อย่าลืมเยี่ยมชมลิงก์ที่เข้าร่วมในส่วน“ ดูเพิ่มเติม” ด้านล่าง
ในที่สุด [containerize.com][2] กำลังเขียนโพสต์บล็อกอย่างต่อเนื่องในผลิตภัณฑ์และหัวข้อโอเพนซอร์ซเพิ่มเติม ยิ่งกว่านั้นคุณสามารถติดตามเราในบัญชีโซเชียลมีเดียของเรา [Facebook][10], [LinkedIn][11] และ [Twitter][12]

## ถามคำถาม
คุณสามารถแจ้งให้เราทราบเกี่ยวกับคำถามหรือคำถามของคุณเกี่ยวกับ [ฟอรัม] ของเรา [13]

## คำถามที่พบบ่อย
**วิธีใช้ GPT-3 API ใน Google เอกสาร?** 
กรุณาเยี่ยมชม [ลิงก์][7] เพื่อทราบขั้นตอนของการรวม Google เอกสารด้วย ChatGPT

## ดูสิ่งนี้ด้วย
  * [วิธีการรวม CHATGPT กับ Google Sheets][14]
  * [บทนำสู่ปัญญาประดิษฐ์ | AI คืออะไร][4]
  * [วิธีใช้ CHATGPT ใน VSCODE | รหัสส่วนขยาย VSCODE GPT][15]
  * [Openai Chatbot GPT-3 คืออะไร | CHATGPT การปฏิวัติ AI][1]
  * [เฟรมเวิร์ก AI โอเพ่นซอร์ส 5 อันดับแรกคืออะไร][16]



[1]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[2]: https://www.containerize.com/
[3]: https://docs.google.com/document/u/0/
[4]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[5]: https://openai.com/
[6]: #How-to-obtain-the-OpenAI-API-key
[7]: #Lets-do-Google-Docs-Integration-with-ChatGPT
[8]: #Start-using-ChatGPT-and-Google
[9]: https://platform.openai.com/account/api-keys
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
