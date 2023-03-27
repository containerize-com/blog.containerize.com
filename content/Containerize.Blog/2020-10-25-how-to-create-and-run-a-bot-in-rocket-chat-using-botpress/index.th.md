---
title: "วิธีการสร้างและเรียกใช้บอทใน rocket.chat โดยใช้บอทเพรส" 
seoTitle: "วิธีการสร้างและเรียกใช้บอทใน rocket.chat โดยใช้บอทเพรส" 
description: "คู่มือนี้สอนคุณด้วยขั้นตอนที่ง่ายและง่ายดายในการสร้างบอทโดยใช้บอตเพรสและรวมเข้ากับ rocket.chat" 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "ในบทช่วยสอนนี้เราจะแนะนำคุณเกี่ยวกับวิธีการสร้างบอทโดยใช้บอทเพรสและการรวมเข้ากับ rocket.chat" 
url: /th/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## ในบทช่วยสอนนี้เราจะแนะนำคุณเกี่ยวกับวิธีการสร้างบอทโดยใช้บอทเพรสและการรวมเข้ากับ rocket.chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="วิธีการสร้างและเรียกใช้บอทใน rocket.chat โดยใช้บอทเพรส">}}

chatbot เป็นโปรแกรมคอมพิวเตอร์ที่ออกแบบมาเพื่อจำลองการสนทนาของมนุษย์ คุณอาจพบหนึ่งใน Facebook Messenger เว็บไซต์ค้าปลีก ในทางเทคนิคการพูดบอทเป็นโปรแกรมอัตโนมัติที่ออกแบบมาเพื่อทำงานเฉพาะ
rocket.chat สนับสนุนการรวมแชทบ็อตและการส่งข้อความอัตโนมัติ ดังนั้นจึงมีเอกสารที่ครอบคลุมเพื่อแนะนำคุณผ่านกระบวนการทำบอท
ในบทความนี้เราจะแนะนำคุณเกี่ยวกับวิธีการสร้างบอทโดยใช้บอทเพรส และวิธีการกำหนดค่า rocket.chat ด้วย Botpress
  * [rocket.chat][1]
  * [Botpress][2]
  * [สร้างผู้ใช้บอทใน rocket.chat][3]
  * [รหัสบอทของคุณโดยใช้บอตเพรส][4]
  * [ข้อสรุป][5]


### rocket.chat {#rocketchat}

Rocket.Chat เป็นหนึ่งในซอฟต์แวร์แชทสดยอดนิยมส่วนหนึ่งเป็นโครงการแชทสดโอเพนซอร์ส มีเวอร์ชันแชทสดฟรีเป็นรุ่นชุมชน เช่นเดียวกับเวอร์ชันแชทสดที่ได้รับการชำระเงินสำหรับ บริษัท ขนาดใหญ่ที่มีคุณสมบัติการแชทภายในส่วนตัว แอปพลิเคชันแชทสดนี้ทำงานในเบราว์เซอร์ แต่สามารถติดตั้งบนเซิร์ฟเวอร์ของคุณเองได้เช่นกัน [อ่านเพิ่มเติม][6]


### botpress {#botpress}

แชทบอทสนทนาทำให้ธุรกิจนี้เป็นไปได้ที่ธุรกิจจะให้การสนับสนุนสูงที่พวกเขาต้องการ Botpress เป็นหนึ่งในเครื่องมือสร้างบอทโอเพนซอร์สที่ได้รับความนิยมมากที่สุดพร้อมการประมวลผลภาษาธรรมชาติในตัว เทคโนโลยี NLU ของ Botpress ทำให้ก้าวไปข้างหน้าของคู่แข่งในสนามเช่น Botkit, Dialogflow และ Microsoft Bot Framework [อ่านเพิ่มเติม][7]


### สร้างผู้ใช้บอทใน rocket.chat {#createbotuser}

ในการพูดคุยกับ chatbot ของคุณจะต้องมีบัญชีผู้ใช้ที่กำหนดค่าไว้ล่วงหน้าบนเซิร์ฟเวอร์ rocket.chat ที่บอทสามารถเข้าสู่ระบบได้
ในการสร้างบัญชีที่คุณต้องมีสิทธิพิเศษของผู้ดูแลระบบ:
  1. ใน TopBar คลิกสามจุด (ตัวเลือก) จากนั้นคลิก  **การดูแลระบบ**  
  2. เลือก  **ผู้ใช้**  จากแถบด้านข้างซ้าย
  3. คลิกปุ่ม `+` (เพิ่มผู้ใช้) ในแถบด้านข้างขวา
  4. ในหน้าต่างโปรไฟล์ที่ปรากฏขึ้นให้เติม _name_, _username_, _email_ และ _password_ ฟิลด์
  5. เปิดใช้งาน _verified_ สลับใต้ฟิลด์ _email_
  6. ปิดการใช้งาน _require รหัสผ่าน Change_ สลับภายใต้ฟิลด์ _password_
  7. เลือก `bot` จากเมนู` เพิ่มบทบาท 'เมนูแบบเลื่อนลงและคลิกปุ่ม _add role_ ไปทางขวา
  8. ปิดการใช้งาน _join channels _ และ _send ยินดีต้อนรับช่องทำเครื่องหมาย email_
  9. คลิก _save_
เมื่อบันทึกแล้วบอทจะถูกกำหนดค่าด้วยชื่อผู้ใช้และรหัสผ่านที่ตั้งค่าไว้ในขั้นตอนที่ 4 คุณสามารถใช้“ Rocketchat \ _user” และ“ Rocketchat \ _Password” ตัวแปรสภาพแวดล้อมเพื่อเข้าสู่ระบบเซิร์ฟเวอร์ Rocket.Chat พร้อมชื่อผู้ใช้และรหัสผ่านนี้


### รหัสบอทของคุณโดยใช้บอตเพรส {#codebot}

Botpress เป็นแพ็คเกจ Node.js และทำงานร่วมกับ Node และ NPM
วิธีที่เร็วที่สุดในการเริ่มต้นด้วย Botpress คือการใช้ [Botpress-Kick-Starter][8] ที่เก็บข้อมูลที่รวมเข้ากับ Rocket.chat ผ่าน [Botpress-Channel Connector][9]
นำทางไปยังโฟลเดอร์ที่คุณต้องการทำงานกับบอทและทำตามขั้นตอนต่อไปนี้:
 **ติดตั้ง Botpress Package** 
```
npm init -y
npm install botpress@10.40.0
```
 **สร้างบอท** 
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
คำสั่ง“ Botpress Init” เปิดตัวพ่อมดที่จะช่วยให้คุณสร้างการกำหนดค่าเริ่มต้น คุณควรเห็นอะไรดังนี้:
```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```
 **ติดตั้งตัวเชื่อมต่อบอตเพรสและการพึ่งพาบอท** 
```
npm install
npm install botpress-channel-rocketchat
```
กำหนดค่าบอท
เปิดโฟลเดอร์“ config” และสร้างไฟล์“ channel-rocketchat.json” ด้วยเนื้อหาต่อไปนี้:
```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```
 **เรียกใช้บอท** 
```
npm start
```
 **คุยกับบอทของคุณ** 
บนเซิร์ฟเวอร์เข้าสู่ระบบเป็นผู้ใช้ทั่วไป (ไม่ใช่ผู้ใช้บอท) ไปที่ห้องทั่วไปและพูดคุยกับบอทที่สร้างขึ้นใหม่ของคุณ


### บทสรุป {#conclusion}

ในบทความนี้เราได้เรียนรู้วิธีการสร้างบอทในบอทเพรส และวิธีการกำหนดค่าด้วย rocket.chat Botpress ทำให้ผู้ใช้สามารถสร้างเวิร์กโฟลว์อัตโนมัติที่เป็นนวัตกรรมได้ง่าย และการรวมเข้ากับ rocket.chat ช่วยให้คุณสามารถควบคุมพวกเขาในลักษณะการสนทนา



 [1]: #rocketchat
 [2]: #botpress
 [3]: #createbotuser
 [4]: #codebot
 [5]: #conclusion
 [6]: https://products.containerize.com/live-chat/rocketchat
 [7]: https://products.containerize.com/live-chat/botpress
 [8]: https://github.com/RocketChat/botpress-kick-starter
 [9]: https://github.com/RocketChat/botpress-channel-rocketchat
