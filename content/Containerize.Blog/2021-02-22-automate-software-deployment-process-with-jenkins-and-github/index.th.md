---
title: "การรวมอย่างต่อเนื่องและการปรับใช้อย่างต่อเนื่องจากเซิร์ฟเวอร์ควบคุมต้นทาง" 
seoTitle: "การรวมอย่างต่อเนื่องและการปรับใช้อย่างต่อเนื่องจากเซิร์ฟเวอร์ควบคุมต้นทาง" 
description: "เครื่องมือการปรับใช้ฟรีช่วยให้ทีมพัฒนาสามารถส่งมอบเวิร์กโฟลว์การจัดส่งซอฟต์แวร์โดยอัตโนมัติ สร้างทดสอบได้อย่างรวดเร็วปรับใช้ซอฟต์แวร์กับที่เก็บเจนกินส์และ GitHub" 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "ทำให้เวิร์กโฟลว์การพัฒนาอัตโนมัติโดยใช้เครื่องมือการปรับใช้ฟรี เราจะเรียนรู้วิธีการตั้งค่า CI/CD ด้วยเซิร์ฟเวอร์อัตโนมัติของเจนกินส์และ GitHub สำหรับการปรับใช้ซอฟต์แวร์" 
url: /th/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## เวิร์กโฟลว์การพัฒนาอัตโนมัติโดยใช้เครื่องมือการปรับใช้ฟรี เราจะเรียนรู้วิธีการตั้งค่า CI/CD ด้วยเซิร์ฟเวอร์อัตโนมัติของเจนกินส์และ GitHub สำหรับการปรับใช้ซอฟต์แวร์

{{< figure align=center src="images/ci-cd-post.png" alt="การบูรณาการอย่างต่อเนื่องและการปรับใช้อย่างต่อเนื่อง">}}

ทีมพัฒนาใช้วิธีการที่แตกต่างกันสำหรับการปรับใช้ซอฟต์แวร์เช่น FTP การดึงรหัสจากที่เก็บและอื่น ๆ อีกมากมาย วิธีการทั้งหมดเหล่านี้ดำเนินการด้วยตนเองและต้องใช้ความพยายามอย่างมาก เราจะเห็นว่าทีมอื่น ๆ ติดตามวิธีการ Agile สำหรับการพัฒนาซอฟต์แวร์ ดังนั้นพวกเขาจึงปล่อยคุณสมบัติใหม่และการแก้ไขข้อผิดพลาดบ่อยครั้ง ดังนั้นเวิร์กโฟลว์การจัดส่งซอฟต์แวร์อัตโนมัติจะช่วยให้ทีมงานเปิดตัวเวอร์ชันใหม่ได้อย่างรวดเร็วและไม่มีข้อผิดพลาด เราจะได้เรียนรู้วิธีการใช้ **CI/CD กับ Jenkins** และ GitHub สำหรับกระบวนการจัดส่งซอฟต์แวร์โดยอัตโนมัติ เราจะครอบคลุมส่วนต่อไปนี้ในบทความนี้
* [ **เจนกินส์คืออะไร** ][1]
* [ **การรวมอย่างต่อเนื่อง** ][2]
* [ **การปรับใช้อย่างต่อเนื่อง** ][3]
* [ **กำหนดค่าเจนกินส์** ][4]
* [ **สร้างงานเจนกินส์** ][5]

## เจนกินส์คืออะไร? {#Jenkins}

**Jenkins **เป็นเครื่องมือการปรับใช้ฟรีที่ทรงพลัง** สำหรับกระบวนการจัดส่งซอฟต์แวร์โดยอัตโนมัติ มันเป็นเซิร์ฟเวอร์อัตโนมัติโอเพนซอร์สสำหรับการสร้างการทดสอบและการปรับใช้ เจนกินส์ใช้สถาปัตยกรรมสแลฟหลัก สิ่งนี้ช่วยให้ทีมซอฟต์แวร์สามารถเรียกใช้งานสร้างและทดสอบซอฟต์แวร์ได้หลายแบบพร้อมกัน นอกจากนี้ยังมีปลั๊กอินมากมายและทีมสามารถใช้งานได้ตามต้องการ คุณสามารถเยี่ยมชมหน้า [ **Jenkins** ][6] สำหรับข้อมูลเพิ่มเติมและการติดตั้ง นอกจากนี้คุณสามารถค้นหาซอร์สโค้ดได้ที่ Jenkins [**GitHub** ][7] ที่เก็บ

## การบูรณาการอย่างต่อเนื่อง {#CI}

**การบูรณาการอย่างต่อเนื่อง** เป็นแนวทางการพัฒนาที่ต้องการให้นักพัฒนาสามารถรวมรหัสเข้ากับที่เก็บที่ใช้ร่วมกันได้บ่อยครั้ง ทุกการรวม/พุชของรหัสลงในที่เก็บสามารถตรวจสอบได้โดยการสร้างและการทดสอบอัตโนมัติ นอกจากนี้ยังช่วยให้นักพัฒนาสามารถระบุปัญหาในรหัสได้อย่างง่ายดาย

## การปรับใช้อย่างต่อเนื่อง {#CD}

**การปรับใช้อย่างต่อเนื่อง** เป็นขั้นตอนต่อไปหลังจากการรวมอย่างต่อเนื่อง มันจะอนุญาตให้ทีมปรับใช้รหัสอย่างต่อเนื่องบนเซิร์ฟเวอร์ นอกจากนี้ยังช่วยให้นักพัฒนาสามารถลดงานซ้ำ ๆ และเพิ่มความคล่องตัว

## กำหนดค่าเจนกินส์ {#Configure}

ปฏิบัติตามแนวทางทีละขั้นตอนด้านล่างสำหรับการกำหนดค่าในเจนกินส์
  * เปิดไซต์ Jenkins และเข้าสู่ระบบของคุณ
  * ติดตั้งปลั๊กอิน“ เผยแพร่ผ่าน SSH” คุณสามารถค้นหาได้โดยการนำทางไปยัง“ จัดการเจนกินส์→จัดการปลั๊กอิน→พร้อมใช้งาน”
  * สร้างคีย์ SSH บน Build Server เป็นผู้ใช้“ Jenkins” ดังที่แสดงด้านล่าง
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * เชื่อมต่อกับเซิร์ฟเวอร์เป้าหมาย/การปรับใช้โดยใช้ SSH เรียกใช้คำสั่งด้านล่างและวางเนื้อหาไฟล์ผับลงบนเซิร์ฟเวอร์เป้าหมาย
```
$ cd .ssh
$ nano authorized_keys
```
  * นำทางเพื่อจัดการ“ เจนกินส์→กำหนดค่าระบบ→เผยแพร่ผ่าน SSH”
  * เพิ่มคีย์ SSH โดยการค้นหาเส้นทางไฟล์หรือวางเนื้อหาเดียวกับที่ทำสำหรับเซิร์ฟเวอร์การปรับใช้
  * เพิ่มเซิร์ฟเวอร์ SSH โดยคลิกที่ปุ่ม“ เพิ่ม” ถัดจาก“ เซิร์ฟเวอร์ SSH”
  * ป้อนชื่อชื่อโฮสต์ชื่อผู้ใช้และไดเรกทอรีระยะไกลสำหรับเซิร์ฟเวอร์การปรับใช้/เป้าหมาย
  * คลิกที่ปุ่มทดสอบการกำหนดค่าเพื่อให้แน่ใจว่าเจนกินส์สามารถเชื่อมต่อกับเซิร์ฟเวอร์การปรับใช้
  * สุดท้ายคลิกปุ่มบันทึกเพื่อจัดเก็บข้อมูล

## สร้างงานเจนกินส์ {#Create}

คุณสามารถใช้ขั้นตอนเหล่านี้สำหรับการสร้างงานเจนกินส์
  * เปิดแดชบอร์ด Jenkins และคลิกที่ปุ่ม“ รายการใหม่”
  * ป้อนชื่อโครงการและเลือก“ งานฟรีสไตล์”
  * ป้อน URL ที่เก็บ GitHub ภายใต้“ หน้าต่างการกำหนดค่า”
  * ในส่วน“ Build Environment” ให้ตรวจสอบตัวเลือกเหล่านี้“ ลบพื้นที่ทำงานก่อนการสร้างเริ่มต้น” และ“ ส่งไฟล์หรือเรียกใช้คำสั่งผ่าน SSH หลังจากการสร้างการทำงาน”
  * ป้อนชื่อไฟล์ต้นฉบับและไดเรกทอรีระยะไกลภายใต้สภาพแวดล้อมการสร้าง
  * บันทึกงานและสร้างมัน
  * เชื่อมต่อกับเซิร์ฟเวอร์การปรับใช้และตรวจสอบให้แน่ใจว่ามีรหัสอยู่ที่นั่น

## บทสรุป
เราได้พูดคุยเกี่ยวกับเซิร์ฟเวอร์ **Jenkins**, **การรวมอย่างต่อเนื่อง** และ**การปรับใช้อย่างต่อเนื่อง** ในบทความนี้ นอกจากนี้เรายังได้เรียนรู้วิธีกำหนดค่าเครื่องมือการปรับใช้ฟรี**และสร้างงานเจนกินส์สำหรับการปรับใช้โดยใช้ GitHub เครื่องมือ CI/CD ฟรีช่วยให้ทีมพัฒนาสามารถส่งมอบเวิร์กโฟลว์การจัดส่งซอฟต์แวร์โดยอัตโนมัติและให้ความสำคัญกับงานที่สำคัญ เราจะครอบคลุมเครื่องมือการปรับใช้อื่น ๆ ในโพสต์ที่กำลังจะมาถึง
ในที่สุด [ **containerize.com**][8] จะเผยแพร่บทความเกี่ยวกับเครื่องมือการปรับใช้โอเพนซอร์สเพิ่มเติม ดังนั้นโปรดติดต่อกับ [**เครื่องมือการปรับใช้** ][9] หมวดหมู่สำหรับการอัปเดตปกติ

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
* **[เจนกินส์][6]** 
* [ **โดรน** ][10]
* [ **deployer** ][11]
* [ **Capistrano** ][12]
* [ **Rancher** ][13]
* [ **Concourse** ][14]
* [ **Ansible** ][15]
* [ **gocd** ][16]
* [ **เครื่องมือปรับใช้โอเพนซอร์ส 5 อันดับแรกในปี 2021** ][17]
* [ **การปรับใช้แอปพลิเคชัน PHP อัตโนมัติด้วย deployer** ][18]



[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
