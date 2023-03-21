---
title: "Gitlab การปรับใช้อย่างต่อเนื่อง | มันทำงานอย่างไร?" 
seoTitle: "Gitlab การปรับใช้อย่างต่อเนื่อง | มันทำงานอย่างไร?" 
description: "ในบทช่วยสอนนี้เราจะสร้างไปป์ไลน์การปรับใช้อย่างต่อเนื่องกับ Gitlab Gitlab การปรับใช้อย่างต่อเนื่องช่วยให้ DevOps สามารถดำเนินการปรับใช้อัตโนมัติ" 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "การปรับใช้อัตโนมัติทำให้เวิร์กโฟลว์ของคุณเพิ่มความคล่องตัว & amp; กระบวนการ การสอน Gitlab นี้ช่วยให้คุณเรียนรู้ที่จะตั้งค่าไปป์ไลน์การปรับใช้อย่างต่อเนื่องโดยใช้ Gitlab CI/CD" 
url: /th/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## การปรับใช้อัตโนมัติทำให้กระบวนการทำงานและกระบวนการของคุณปรับปรุงกระบวนการทำงานและกระบวนการของคุณ การสอน Gitlab นี้ช่วยให้คุณเรียนรู้ที่จะตั้งค่าไปป์ไลน์การปรับใช้อย่างต่อเนื่องโดยใช้ Gitlab CI/CD

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="การปรับใช้อย่างต่อเนื่องของ Gitlab">}}


## ภาพรวม
ในบทความสองสามข้อสุดท้ายเราได้เรียนรู้เกี่ยวกับ [พื้นฐานของการควบคุมเวอร์ชัน][1] และจากนั้นเราได้ปรับปรุงความรู้ของเราโดยการเรียนรู้เกี่ยวกับ [รูปแบบการแยกสาขา][2] และเวิร์กโฟลว์ ระบบควบคุมเวอร์ชันได้นำประสิทธิภาพมาใช้ในโลกของการพัฒนาการปรับใช้และการรวมเข้าด้วยกัน นักพัฒนาพบว่ามันง่ายมากที่จะสร้างซอร์สโค้ดโดยไม่ต้องกังวลเกี่ยวกับการสร้างและการทดสอบ อุตสาหกรรมซอฟต์แวร์ได้รับความมั่นใจและความได้เปรียบในการแข่งขันเนื่องจากวิธีการนี้ได้ทำการปรับใช้
**การปรับใช้อย่างต่อเนื่องของ Gitlab**  และการรวมเข้าด้วยกันช่วยในการค้นหาปัญหาได้อย่างง่ายดาย นอกจากนี้นักพัฒนาสามารถติดตามข้อบกพร่องและการจัดการพลาดอื่น ๆ ในช่วงเวลาที่สั้นลง กระบวนการอัตโนมัติทั้งหมดนี้ให้อิสระจากงานที่เกิดขึ้นบ่อยครั้งและลดกำลังคนและโอกาสของข้อผิดพลาด วันนี้ในโพสต์บล็อกนี้เราจะสำรวจเกี่ยวกับไปป์ไลน์การปรับใช้อย่างต่อเนื่องด้วย Gitlab CI/CD ดังนั้นมาเริ่มกันด้วยการครอบคลุมประเด็นต่อไปนี้!
  ***[CI & CD คืออะไร [3]** 
  ***[นักวิ่ง Gitlab คืออะไร][4]** 
  ***[. ไฟล์ gitlab-ci.yml][5]** 
  ***[สร้างแอพตัวอย่างพื้นฐาน][6]** 
  ***[บทสรุป][7]** 

## CI & CD คืออะไร   {#CICD}
Integration Integration (CI) เป็นหนึ่งในแนวทางปฏิบัติที่ดีที่สุดของ DevOps โดยอัตโนมัติในการรวมการเปลี่ยนแปลงรหัสจากผู้มีส่วนร่วมหลายคนในโครงการซอฟต์แวร์เดียว สิ่งนี้จะช่วยให้นักพัฒนาสามารถรวมการเปลี่ยนแปลงรหัสบ่อยครั้งในที่เก็บข้อมูลส่วนกลางที่มีการสร้างและทดสอบแล้ว การปรับใช้อย่างต่อเนื่อง (CD) จะเลื่อนขั้นตอนต่อไปโดยการปรับใช้รหัสโดยอัตโนมัติไปยังสภาพแวดล้อมเป้าหมาย (การผลิตหรือการจัดเตรียม) โดยอัตโนมัติหลังจากแต่ละรหัสดำเนินการและสร้าง
ก่อนที่คุณจะเริ่มตรวจสอบให้แน่ใจว่าคุณมีโครงการใน Gitlab ที่คุณต้องการใช้ CI/CD สำหรับ และคุณควรมีผู้ดูแลหรือเข้าถึงระดับเจ้าของโครงการ

## Gitlab Runner คืออะไร   {#Runner}
หลังจากทำความเข้าใจ **การปรับใช้อย่างต่อเนื่องของ Gitlab** , Gitlab Runner เป็นโปรแกรมน้ำหนักเบาขนาดเล็กที่เขียนขึ้นใน GO ที่ทำงานอย่างต่อเนื่อง (CI) งานที่เกี่ยวข้องกับเครื่องในเครื่องของคุณและส่งผลลัพธ์ไปยัง Gitlab เพื่อพิจารณาการเปลี่ยนแปลง มันเป็นไบนารีปฏิบัติการเดียวที่สามารถติดตั้งบนระบบปฏิบัติการที่สำคัญใด ๆ
ก่อนที่เราจะก้าวไปข้างหน้าด้วย Gitlab CI / CD คุณต้องตรวจสอบให้แน่ใจว่าคุณมีนักวิ่งให้ทำงานของคุณ คุณสามารถทำตามคำแนะนำอย่างเป็นทางการเพื่อ [ติดตั้ง][8] และ [ลงทะเบียน][9] นักวิ่ง Gitlab

## .gitlab-ci.yml ไฟล์   {#yml}
**. gitlab-ci.yml ** เป็นไฟล์ที่คุณกำหนดค่าคำแนะนำเฉพาะสำหรับ gitlab ci/cd มันถูกวางไว้ในรูทของที่เก็บของของคุณและมีคำจำกัดความว่าโครงการของคุณควรสร้างอย่างไร ทุกครั้งที่เราผลักดันการกระทำให้กับอินสแตนซ์ Gitlab ของเรา Gitlab จะเรียกใช้นักวิ่งเพื่อสร้างและทดสอบโครงการตามคำแนะนำภายในไฟล์นี้

## สร้างแอพตัวอย่าง   {#Sample}
ในส่วนของการสอน **Gitlab นี้**  เราจะสร้างแอพตัวอย่าง สมมติว่าคุณได้สร้างที่เก็บ Gitlab แล้วให้สร้างแอปพลิเคชันตัวอย่างและเราจะตั้งค่ากระบวนการ CI / CD สำหรับแอปพลิเคชัน
ก่อนอื่นให้สร้างไฟล์ package.json ที่รูทของโครงการของคุณ
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
ตอนนี้สร้าง app.js ที่รูทของโครงการของคุณ
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
ในขั้นตอนสุดท้ายของการปรับใช้อย่างต่อเนื่อง **Gitlab  **สร้าง **  DockerFile**  และเพิ่มเนื้อหาต่อไปนี้ลงไป:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
DockerFile มีกระบวนการสร้างสำหรับแอพนี้ มันเกี่ยวข้องกับการสร้างคอนเทนเนอร์โหนดและการติดตั้งการพึ่งพา
ตอนนี้เราต้องสร้างไฟล์ **. gitlab-ci.yml ** ไฟล์นี้จะมีคำแนะนำในการสร้างโครงการของเรา ทุกครั้งที่เราผลักดันการกระทำไปยังที่เก็บ Gitlab ของเรา Gitlab จะเรียกใช้นักวิ่งเพื่อสร้างโครงการ
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
เรามีเพียงการสร้างเวทีเพียงครั้งเดียวและมีเพียง **npm ติดตั้ง**  เป็นสคริปต์ นี่คือคำสั่งที่คุณจะต้องทำงานด้วยตนเองทุกครั้งที่มีการเปลี่ยนแปลงมาถึงโครงการของคุณ และนั่นคือสิ่งที่นักวิ่ง Gitlab เข้ามาและจะทำสิ่งนี้เพื่อคุณโดยอัตโนมัติทุกครั้งที่คุณทำ
ตอนนี้สมมติว่าคุณได้ติดตั้ง Gitlab Runner แล้วและได้ลงทะเบียนกับอินสแตนซ์ Gitlab ของคุณแล้วเราสามารถทดสอบ Gitlab CI / CD ในการดำเนินการโดยดำเนินการอย่างง่าย ๆ กับแอปพลิเคชันและผลักดันให้ Gitlab
จากนั้นคุณสามารถเปิดโครงการของคุณใน Gitlab ไปที่ Project → Pipeline ของฉันและคุณจะเห็นแท็กที่พูดว่า "ผ่าน" ถัดจากการกระทำที่คุณทำ การกระทำที่ตามมาจะมีแท็ก

## บทสรุป   {#conclusion}
สิ่งนี้นำเราไปสู่จุดสิ้นสุดของการสอน **Gitlab  **ในบทความนี้เราได้เรียนรู้เกี่ยวกับพื้นฐานของการบูรณาการอย่างต่อเนื่องของ Gitlab **  CI & CD คืออะไร  **นักวิ่ง Gitlab คืออะไรและการปรับใช้อย่างต่อเนื่อง นอกจากนี้เรายังศึกษาว่าการใช้นักวิ่งในเวิร์กโฟลว์ CI / CD โดยรวมคืออะไร นอกจากนี้เรายังสร้างโครงการตัวอย่างซึ่งอธิบายวิธีการตั้งค่าการปรับใช้อย่างต่อเนื่องโดยใช้ Gitlab การสอน Gitlab นี้จะช่วยคุณได้จริง ๆ หากคุณกำลังมองหา **  Gitlab การปรับใช้อย่างต่อเนื่อง  **อย่างไรก็ตามมีทรัพยากรอื่น ๆ อีกมากมายที่กล่าวถึงในส่วน“ สำรวจ” ด้านล่างที่คุณสามารถตรวจสอบได้ นอกจากนี้บทความเกี่ยวกับระบบควบคุมเวอร์ชัน ** **  ที่เป็นโอเพ่นซอร์สโฮสต์ตัวเองและขยายได้
ในที่สุด [containerize.com][10] กำลังเขียนโพสต์บล็อกอย่างต่อเนื่องในผลิตภัณฑ์และหัวข้อโอเพนซอร์ซเพิ่มเติม ดังนั้นโปรดติดต่อกับ [][11][ซอฟต์แวร์ควบคุมเวอร์ชัน][12] หมวดหมู่สำหรับการอัปเดตปกติ ยิ่งกว่านั้นคุณสามารถติดตามเราในบัญชีโซเชียลมีเดียของเรา [Facebook][13], [LinkedIn][14] และ [Twitter][15]

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [การพัฒนาซอฟต์แวร์โดยอัตโนมัติด้วยการกระทำของ GitHub][16]
  * [เข้าใจและเรียนรู้สาขาและดึงคำขอใน Git][2]
  * [ซอฟต์แวร์การจัดการซอร์สโค้ด | Git คืออะไร][17]
  * [ระบบควบคุมเวอร์ชันโอเพ่นซอร์ส 5 อันดับแรกในปี 2021][18]
  * [ดำเนินธุรกิจโดยอัตโนมัติโดยใช้ซอฟต์แวร์ฟรีและโอเพ่นซอร์ส][19]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/