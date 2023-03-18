---
title: "วิธีการเชื่อมต่อ WordPress | Docker WordPress" 
seoTitle: "วิธีการเชื่อมต่อ WordPress | Docker WordPress" 
description: "Docker & Docker Compose คืออะไร? ในบทความนี้เราจะเรียนรู้วิธีการติดตั้งนักเทียบท่า Docker Compose และวิธีการเชื่อมต่อ WordPress ลงในคอนเทนเนอร์ Docker" 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "ซอฟต์แวร์คอนเทนเนอร์รวมแอปพลิเคชันการพึ่งพาและทำให้แอปทำงานบนสภาพแวดล้อมการคำนวณใด ๆ มาเรียนรู้วิธีการเชื่อมต่อ WordPress" 
url: /th/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## ซอฟต์แวร์คอนเทนเนอร์รวมแอปพลิเคชันการพึ่งพาและทำให้แอปทำงานบนสภาพแวดล้อมการคำนวณใด ๆ มาเรียนรู้วิธีการเชื่อมต่อ WordPress

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


## ภาพรวม
ยินดีต้อนรับสู่โพสต์บล็อกอื่นใน [บล็อก] [1] หมวดหมู่ของซอฟต์แวร์โอเพ่นซอร์ส เราได้ตีพิมพ์บทความเกี่ยวกับหัวข้อต่าง ๆ เช่น [เพิ่มโอกาสในการขายของคุณด้วยการรวม CivICRM WordPress ฟรี] [2], [วิธีการสร้างเว็บไซต์ของคุณด้วย WordPress และ Gatsby] [3] และอีกมากมาย อย่างไรก็ตามบทความนี้จะนำข้อมูลเชิงลึกและรายละเอียดเพิ่มเติมเกี่ยวกับแพลตฟอร์มบล็อกโอเพนซอร์สและ ** ซอฟต์แวร์คอนเทนเนอร์ ** เราจะผ่านคำถามที่ร้อนแรงเช่นสิ่งที่เป็น Docker & ** วิธีการติดตั้ง Docker Compose ** และเราจะได้เรียนรู้วิธีการเชื่อมต่อ WordPress
การจัดคอนเทนเนอร์ได้กลายเป็นแนวโน้มสำคัญในการพัฒนาซอฟต์แวร์เป็นทางเลือกแทนการจำลองเสมือน มันเกี่ยวข้องกับการห่อหุ้มหรือรวมรหัสซอฟต์แวร์และการพึ่งพาทั้งหมดเพื่อให้สามารถทำงานบนโครงสร้างพื้นฐานใด ๆ อย่างสม่ำเสมอ การจัดคอนเทนเนอร์ช่วยให้นักพัฒนาสามารถสร้างและปรับใช้แอปพลิเคชันได้เร็วขึ้นและปลอดภัยยิ่งขึ้น Docker เป็นแอปพลิเคชั่นคอนเทนเนอร์ที่ได้รับความนิยมมากที่สุดที่ใช้ในชุมชนนักพัฒนา ในบทช่วยสอนนี้เราจะได้เรียนรู้วิธีการเชื่อมต่อ WordPress โดยใช้ Docker Compose ดังนั้นมาเริ่มต้นด้วยประเด็นต่อไปนี้
  *[** นักเทียบท่าคืออะไร **] [4]
  *[** ทำไมคุณต้องเทียบกับ WordPress **?] [5]
  *** [วิธีการติดตั้ง Docker Compose] [6] **
  *** [Dockerize WordPress] [7] **
  *** [บทสรุป] [8] **

## นักเทียบท่าคืออะไร? {#Docker}
กล่าวง่ายๆคือ Docker เป็นซอฟต์แวร์คอนเทนเนอร์แบบโอเพ่นซอร์ส ** ซึ่งทำให้การจำลองเสมือนเร็วขึ้นและเบาลง มันเบามากจนสามารถเปิดคอนเทนเนอร์ Docker ได้ในเวลาเพียงไม่กี่วินาที และคุณสามารถเรียกใช้คอนเทนเนอร์ Docker หลายสิบตัวบนพีซีเครื่องเดียวได้อย่างง่ายดาย นักพัฒนาใช้ Docker เพื่อสร้างปรับใช้และเรียกใช้แอปพลิเคชันโดยใช้คอนเทนเนอร์ คอนเทนเนอร์อนุญาตให้นักพัฒนาสามารถบรรจุแอปพลิเคชันที่มีทุกส่วนที่ต้องการเช่นไลบรารีและการพึ่งพาอื่น ๆ และปรับใช้เป็นแพ็คเกจเดียว โดยการทำเช่นนั้นนักพัฒนาสามารถมั่นใจได้ว่าแอปพลิเคชันจะทำงานบนโครงสร้างพื้นฐานใด ๆ นอกจากนี้ยังมีนักพัฒนาและชุมชนสนับสนุนขนาดใหญ่ที่ยังมีชีวิตอยู่เสมอเพื่อให้ความช่วยเหลืออย่างเต็มที่ในความเกี่ยวข้องใด ๆ Docker ได้กลายเป็นส่วนประกอบที่ต้องมีขององค์กรซอฟต์แวร์ใด ๆ เนื่องจากคุณสมบัติและการใช้งานที่ทรงพลัง

## ทำไมคุณต้องเชื่อมต่อ WordPress? {#ทำไม}
ในส่วนนี้เราจะรู้เกี่ยวกับความต้องการที่อยู่เบื้องหลัง Dockerizing WordPress WordPress เป็นซอฟต์แวร์บล็อกโอเพ่นซอร์สชั้นนำที่นำมาใช้อย่างสูงจากโลกของเทคโนโลยี อย่างไรก็ตามในการเรียกใช้ WordPress ในเครื่องคุณต้องใช้ Apache/Nginx, MySQL Server, PHP และ TONS ของการพึ่งพาอื่น ๆ และการปรับใช้เพื่อการจัดเตรียมหรือสภาพแวดล้อมการผลิตเป็นฝันร้ายเมื่อมันมาถึงการจัดการการพึ่งพาเหล่านั้น บางครั้งมันก็กลายเป็นความยุ่งยากสำหรับนักพัฒนาและวิศวกรสนับสนุนการปรับใช้ซ้ำซ้ำ ๆ ตามที่ต้องการเวลาและกำลังคน
ดังนั้นคอนเทนเนอร์สามารถช่วยคุณได้ สิ่งที่คุณต้องการคือ Docker - การติดตั้งนั้นใช้เวลาไม่กี่วินาทีและไม่จำเป็นต้องมีการกำหนดค่าเพิ่มเติม
ไม่ว่าจะเป็นเครื่องพัฒนาเวทีหรือเซิร์ฟเวอร์สดและระบบปฏิบัติการอะไร Docker ทำงานเหมือนกันทุกที่ ซึ่งหมายความว่าคุณจะไม่ต้องมองหาข้อบกพร่องที่พูดปรากฏในสภาพแวดล้อมหนึ่งและไม่สามารถทำซ้ำได้ในอีกสภาพแวดล้อม

## วิธีติดตั้ง Docker Compose {#install}

### สิ่งที่จำเป็นต้องมี
คุณสามารถใช้ Docker Compose เพื่อเรียกใช้ WordPress ในสภาพแวดล้อมที่แยกได้อย่างง่ายดายซึ่งสร้างขึ้นด้วยคอนเทนเนอร์ Docker คู่มือนี้แสดงให้เห็นถึงวิธีการใช้การเขียนเพื่อตั้งค่าและเรียกใช้ WordPress
Docker Compose อาศัยเครื่องยนต์ Docker ดังนั้นตรวจสอบให้แน่ใจว่าคุณติดตั้งเครื่องยนต์ Docker แล้ว บนระบบเดสก์ท็อปเช่น Docker Desktop สำหรับ Mac และ Windows Compose Docker จะรวมอยู่ในส่วนหนึ่งของการติดตั้งเดสก์ท็อปเหล่านั้น อย่างไรก็ตามบนระบบ Linux ก่อนติดตั้งเครื่องยนต์ Docker โดยทำตาม [คู่มืออย่างเป็นทางการ] [9]

### ติดตั้งเขียนบน Linux
เรียกใช้คำสั่งนี้เพื่อดาวน์โหลดการเปิดตัวที่เสถียรในปัจจุบันของ Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
ใช้สิทธิ์การดำเนินการกับไบนารี:
```
sudo chmod +x /usr/local/bin/docker-compose
```
ทดสอบการติดตั้งโดยเรียกใช้คำสั่งเวอร์ชัน:
```
docker-compose --version
```

### กำหนด dockerfile สำหรับ wordpress
สิ่งแรกที่เราต้องทำคือการกำหนดว่าภาพของเราจะมีลักษณะอย่างไรใน ** _ Dockerfile _ ** เป็นไฟล์ข้อความที่เพิ่มลงในไดเรกทอรีด้วยแหล่งที่มาของแอปพลิเคชันของคุณ
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
“ **/var/www/html/wordpress **” จะมีเนื้อหาเต็มรูปแบบของ WordPress พร้อมกับธีมปลั๊กอินและเนื้อหา หากที่เก็บของคุณมีธีมหรือปลั๊กอินเท่านั้นให้เพิ่มโฟลเดอร์ที่เกี่ยวข้อง
สร้างไฟล์ Docker-compose.yml ที่เริ่มต้นบล็อก WordPress ของคุณและอินสแตนซ์ MySQL แยกต่างหากด้วยการติดตั้งระดับเสียงสำหรับการคงอยู่ของข้อมูล:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
ตอนนี้เรียกใช้คำสั่งในไดเรกทอรีโครงการของคุณ
```
docker-compose up -d
```
สิ่งนี้ทำงาน ** _ Docker-compose up _ ** ในโหมดเดี่ยวดึงภาพนักเทียบท่าที่จำเป็นและเริ่มต้นคอนเทนเนอร์ WordPress และฐานข้อมูล
เมื่อคอนเทนเนอร์เริ่มต้นแล้วคุณสามารถเปิด URL ในเว็บเบราว์เซอร์และเริ่มใช้แอปพลิเคชันของคุณ:
```
http://localhost:8000
```

## บทสรุป {#conclusion}
สิ่งนี้นำเราไปสู่จุดสิ้นสุดของโพสต์บล็อกนี้ ในบทความนี้เราได้เรียนรู้เกี่ยวกับสิ่งที่เป็นนักเทียบท่า ** วิธีการติดตั้ง Docker Compose ** นอกจากนี้เรายังได้เรียนรู้วิธีการเชื่อมต่อ WordPress โดยใช้นักเทียบท่า นอกจากนี้เราแนะนำให้คุณรู้จักกับแนวคิดที่อยู่เบื้องหลัง Docker และวิธีที่คุณสามารถกำหนดแอปพลิเคชันหลายตัวต่อแบบง่าย ๆ อย่างไรก็ตามซอฟต์แวร์โอเพนซอร์ส ** นี้ ** เป็นตัวเลือกชั้นนำสำหรับองค์กรซอฟต์แวร์ทั้งหมด ดังนั้นบทความนี้จะช่วยคุณได้จริง ๆ หากคุณกำลังมองหาที่จะเลือกใช้ Docker สำหรับแอปพลิเคชันของคุณ มีบทความที่เกี่ยวข้องและซอฟต์แวร์บล็อกอื่น ๆ อีกมากมายที่ระบุไว้ในส่วน "สำรวจ" ด้านล่าง
ในที่สุด [containerize.com] [10] กำลังเขียนบทความเกี่ยวกับผลิตภัณฑ์โอเพ่นซอร์สเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [บล็อก] [1] สำหรับข่าวปกติและการอัปเดต ยิ่งกว่านั้นคุณสามารถติดตามเราในบัญชีโซเชียลมีเดียของเรา [Facebook] [11], [LinkedIn] [12] และ [Twitter] [13]

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [WordPress] [14]
  * [Jekyll] [15]
  * [วาทกรรม] [16]
  * [ผี] [17]
  * [ทำอย่างไรจึงจะเทียบกับ WordPress ด้วย Docker Compose] [18]
  * [เพิ่มโอกาสในการขายของคุณด้วยการรวม CivICRM WordPress ฟรี] [2]
  * [ระบบจำหน่ายตั๋วอัตโนมัติโดยใช้ WordPress และ Osticket] [19]
  * [วิธีรวมฟอรัมวาทกรรมกับ WordPress] [20]
  * [เพิ่มปริมาณการค้นหาเว็บไซต์โดยติดตามบล็อก SEO 7 อันดับแรก] [21]
  * [วิธีสร้างเว็บไซต์ของคุณด้วย WordPress และ Gatsby] [3]
  * [วิธีเปิดใช้งานการบีบอัด GZIP ใน WordPress เพื่อให้ดีขึ้น pagspeed และ SEO] [22]
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/th/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
