---
title: "วิธีการตั้งค่าโซลูชัน CMDB Ralph บน localhost" 
seoTitle: "วิธีการตั้งค่าโซลูชัน CMDB Ralph บน localhost" 
description: "บทช่วยสอนนี้เกี่ยวกับการตั้งค่า Ralph บน Localhost Ralph เป็นโซลูชัน CMDB ฟรีที่มีคุณสมบัติในการติดตามสินทรัพย์และการกำหนดค่า" 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "โซลูชันการจัดการสินทรัพย์ด้านไอทีช่วยลดต้นทุนการดำเนินงานและเพิ่มประสิทธิภาพ บทความนี้เกี่ยวกับวิธีการตั้งค่าซอฟต์แวร์ CMDB Ralph บนเครื่องในเครื่องของคุณ" 
url: /th/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## โซลูชันการจัดการสินทรัพย์ช่วยลดต้นทุนการดำเนินงานและเพิ่มประสิทธิภาพ บทความนี้เกี่ยวกับวิธีการตั้งค่าซอฟต์แวร์ CMDB Ralph บนเครื่องในเครื่องของคุณ

{{< figure align=center src="images/ralph.png" alt="โซลูชัน CMDB">}}


## ** ภาพรวม **
ณ จุดปัจจุบันองค์กรต่าง ๆ กำลังเจริญรุ่งเรืองเพื่อตอบสนองความต้องการของเทคโนโลยีโดยใช้โครงสร้างพื้นฐานด้านไอทีขนาดใหญ่ ถัดไปมันไม่น้อยไปกว่าความท้าทายในการจัดการสภาพแวดล้อมขนาดใหญ่เช่นนี้ มันต้องใช้กำลังคนและพลังเทคโนโลยีในการทำงานที่สำคัญเช่นนี้ บางครั้งมันก็กลายเป็นความยุ่งยากในการกำหนดกระบวนการและขั้นตอนในการจัดการเครือข่ายที่ซับซ้อนของระบบซึ่งรวมถึงเครื่องพิมพ์คอมพิวเตอร์เดสก์ท็อปสแกนเนอร์โทรศัพท์และอุปกรณ์เสริมไอทีอื่น ๆ ในทำนองเดียวกันการกำหนดค่าของโหนดเหล่านี้ก็มีความสำคัญเช่นกันเนื่องจากมีโอกาสสูงที่จะหยุดทำงานของเครื่องใด ๆ ในเครือข่าย ดังนั้นควรมีการตรวจสอบที่สอดคล้องกันเกี่ยวกับการกำหนดค่าเหล่านี้
อย่างไรก็ตามมีซอฟต์แวร์โอเพ่นซอร์สและซอฟต์แวร์ฟรีมากมายเพื่อติดตามและบันทึกสินทรัพย์ ซอฟต์แวร์นี้เรียกว่าซอฟต์แวร์ฐานข้อมูลการจัดการการกำหนดค่า (CMDB) เมื่อเร็ว ๆ นี้ [containerize.com] [1] เผยแพร่โซลูชัน CMDB [RALPH] [2] ที่ให้คุณสมบัติมากมายสำหรับสินทรัพย์ที่ดีกว่าและการจัดการการกำหนดค่า ในโพสต์บล็อกนี้เราจะสำรวจราล์ฟโดยครอบคลุมประเด็นต่อไปนี้
  *** [การแนะนำสั้น ๆ ของการจัดการสินทรัพย์ซอฟต์แวร์ CMDB Ralph] [3] **
  *** [คุณสมบัติของ Ralph] [4] **
  *** [วิธีการตั้งค่า Ralph บน localhost?] [5] **
  *** [บทสรุป] [6] **

## บทนำสั้น ๆ ของการจัดการสินทรัพย์ซอฟต์แวร์ CMDB Ralph {#Intro}
Ralph เป็นโซลูชันการจัดการสินทรัพย์โอเพนซอร์สฟรี มันเป็นข้ามแพลตฟอร์มและมาพร้อมกับความสามารถในการโฮสต์ตนเอง มีระบบนิเวศที่สมบูรณ์ของการติดตามสินทรัพย์แบบเรียลไทม์ ดังนั้นผู้ใช้สามารถทำการวิเคราะห์สำหรับการรายงาน ช่วยให้ผู้ใช้สามารถบันทึกรายละเอียดของสินทรัพย์เกี่ยวกับวงจรชีวิตของพวกเขา นอกจากนี้ซอฟต์แวร์การจัดการสินทรัพย์ดิจิตอลโอเพ่นซอร์สนี้ยังมีพื้นที่สำหรับการจัดเก็บข้อมูลเกี่ยวกับสินทรัพย์ศูนย์ข้อมูล ในทางกลับกันโซลูชัน CMDB นี้ยังให้การสนับสนุนสำหรับการจัดการซอฟต์แวร์ใบอนุญาตใบรับรองและสัญญาอื่น ๆ Ralph ไม่เพียง แต่สนับสนุนการจัดการสินทรัพย์ แต่ยังมีบทบัญญัติในการดำเนินการในสินทรัพย์เหล่านั้น อย่างไรก็ตามการกระทำที่เกี่ยวข้องกับการปรับใช้โฮสต์สร้างใบแจ้งหนี้การติดตามโดเมนหรือการจัดการสินค้าคงคลัง
โซลูชันการจัดการสินทรัพย์ไอทีนี้มาพร้อมกับอินเทอร์เฟซที่พักผ่อน นักพัฒนาสามารถรวมแอพพลิเคชั่นของบุคคลที่สามจำนวนมากโดยใช้จุดสิ้นสุด API ที่เปิดเผยโดยเครื่องมือฟรีโอเพนซอร์ซนี้ นอกจากนี้ Ralph ยังเขียนใน Python พร้อมกับอินพุตของ HTML, CSS และ JavaScript ดังนั้นจึงมีเอกสารที่ครอบคลุมเกี่ยวกับการพัฒนาและการปรับใช้ ซอร์สโค้ดของโซลูชันการจัดการหุ้นนี้มีอยู่ที่ [GitHub] [7]

## คุณสมบัติของ Ralph {#Features}
Ralph มีคุณสมบัติมากมาย อย่างไรก็ตามเราจะพูดถึงคุณสมบัติสำคัญบางอย่างต่อไปนี้
** Extensible **: ซอฟต์แวร์การจัดการสินทรัพย์ดิจิตอลโอเพนซอร์สนี้สามารถขยายได้สูง นักพัฒนาสามารถปรับใช้ในสถานที่หรือบนคลาวด์ตามความต้องการของพวกเขา
** การสนับสนุนศูนย์ข้อมูล: ** Ralph ยังให้การสนับสนุนคลังข้อมูล, ห้องศูนย์ข้อมูล, เซิร์ฟเวอร์และชั้นวาง ผู้ใช้สามารถติดตามส่วนประกอบทั้งหมดเครือข่ายและการกำหนดค่า
** REST API **: ซอฟต์แวร์ CMDB ฟรีนี้สามารถปรับแต่งได้สูง ในความเป็นจริงมันให้ API REST สำหรับการรวมบุคคลที่สาม นักพัฒนาสามารถขยายได้ตามความต้องการของพวกเขา
** อินเทอร์เฟซผู้ใช้ที่ใช้งานง่าย: ** มีส่วนต่อประสานผู้ใช้แบบลอจิคัลที่มีอยู่ในโซลูชัน CMDB นี้ซึ่งผู้ใช้สามารถนำทางได้อย่างง่ายดาย นอกจากนี้แดชบอร์ดผู้ดูแลระบบยังมีวิดเจ็ตต่าง ๆ ที่แสดงข้อมูลที่มาในเวลาจริง
** อินเทอร์เฟซบรรทัดคำสั่ง **: Ralph มาพร้อมกับอินเทอร์เฟซบรรทัดคำสั่งที่ให้สิ่งอำนวยความสะดวกในการค้นหาที่อยู่ MAC สำหรับการปรับใช้โฮสต์
** การสนับสนุนสินทรัพย์ที่ไม่ใช่ทางกายภาพ **: โซลูชันการจัดการอุปกรณ์นี้ไม่เพียง แต่ให้การสนับสนุนสินทรัพย์ทางกายภาพ แต่ยังจัดการทรัพยากรที่ไม่ใช่ทางกายภาพเช่นโดเมนซอฟต์แวร์และใบอนุญาต

## จะตั้งค่า Ralph บน LocalHost ได้อย่างไร? {#ติดตั้ง}
ในส่วนนี้เราจะผ่านกระบวนการติดตั้งซอฟต์แวร์การจัดการทรัพยากร Ralph บนเครื่องท้องถิ่น มันค่อนข้างง่ายที่จะตั้งค่าและใช้งาน
ก่อนที่จะย้ายไปยังส่วนถัดไปตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งข้อกำหนดเบื้องต้นดังต่อไปนี้แล้ว
  * [Docker-compose] [8]
  * [Docker] [9]
ซอฟต์แวร์โอเพ่นซอร์สส่วนใหญ่เสนอภาพ Docker สำหรับการปรับใช้บนแพลตฟอร์มต่างๆ มันช่วยให้นักพัฒนาได้ง่ายขึ้นและเร่งกระบวนการพัฒนาและการปรับใช้
เมื่อมีการติดตั้งข้อกำหนดเบื้องต้นแล้วให้เปิด Docker ตอนนี้เปิดเทอร์มินัลและเรียกใช้คำสั่งต่อไปนี้เพื่อสร้างไดเรกทอรีที่ว่างเปล่า:
```
mkdir ralph<br>cd ralph
```
หลังจากนั้นให้สร้างไฟล์ใหม่ชื่อ 'Docker-compose.yml' และเติมข้อมูลด้วยข้อมูลต่อไปนี้
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
ตอนนี้บันทึกไฟล์และเรียกใช้คำสั่งต่อไปนี้เพื่อสร้างบิลด์:
```
docker-compose build

```
เมื่อสร้างที่ประสบความสำเร็จให้เรียกใช้คำสั่งต่อไปนี้สำหรับฐานข้อมูล:
```
docker-compose run –rm web /root/init.sh

```
หากทุกอย่างเป็นไปด้วยดีให้เรียกใช้คำสั่งต่อไปนี้เพื่อหมุนคอนเทนเนอร์ของ Docker:
```
docker-compose up -d
```
หลังจากเรียกใช้คำสั่งนั้นคอนเทนเนอร์ Docker จะเปิดใช้งานตามที่แสดงในภาพด้านล่าง:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="โซลูชัน CMDB">}}

ในที่สุดเปิดเบราว์เซอร์และเข้าถึงแอปพลิเคชันที่ที่อยู่นี้ http://127.0.0.1
มันจะแสดงหน้าเข้าสู่ระบบตามที่แสดงในภาพด้านล่าง:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="โซลูชัน CMDB">}}


## บทสรุป {#conclusion}
หลังจากผ่านการโพสต์บล็อกการสอน CMDB นี้สิ่งหนึ่งที่ชัดเจนว่าการจัดการสินทรัพย์นั้นใกล้จะเป็นไปไม่ได้หากไม่มีโซลูชัน CMDB ที่ดี ซอฟต์แวร์การจัดการทรัพยากรมีบทบาทเฉพาะในการจัดการและติดตามสินทรัพย์การกำหนดค่าและความสัมพันธ์ของพวกเขา มีบทบัญญัติในการติดตามการเปลี่ยนแปลงเหล่านั้นที่แทบจะไม่เกิดขึ้นกับสินทรัพย์ดิจิตอลหรือทางกายภาพ เครื่องมือฟรีเหล่านี้ง่ายต่อการติดตั้งใช้และมาพร้อมกับเอกสารและคำแนะนำโดยละเอียด ในที่สุด [** containerize.com **] [1] มีวัตถุประสงค์เพื่อเขียนบทความเกี่ยวกับผลิตภัณฑ์โอเพนซอร์สเพิ่มเติม ดังนั้นโปรดติดต่อกับ [] [10] ** [ซอฟต์แวร์ CMDB] [11] ** หมวดหมู่สำหรับการอัปเดตล่าสุด

## สำรวจ
  *** [ซอฟต์แวร์ CMDB] [11] **
  *** [Ralph] [2] **
  *[** ดำเนินธุรกิจโดยอัตโนมัติโดยใช้ซอฟต์แวร์ฟรีและโอเพ่นซอร์ส **] [12]
  *** [แนวโน้มการพัฒนาซอฟต์แวร์ที่ควรระวังในปี 2021] [13] **
[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/