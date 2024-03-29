---
title: "วิธีการตั้งค่าซอฟต์แวร์สำรองโอเพ่นซอร์ส restic บน Ubuntu" 
seoTitle: "วิธีการตั้งค่าซอฟต์แวร์สำรองโอเพ่นซอร์ส restic บน Ubuntu" 
description: "Restic เป็นซอฟต์แวร์สำรองโอเพนซอร์ซที่รวดเร็วปลอดภัยและเป็นหนึ่งในซอฟต์แวร์สำรองโอเพ่นซอร์ส รองรับ AWS S3, Microsoft Azure, Google Cloud และตัวเลือกแบ็กเอนด์อื่น ๆ" 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "ใช้การสำรองข้อมูลด้วยซอฟต์แวร์สำรองโอเพ่นซอร์สและเก็บไว้ในพื้นที่หรือบนแบ็กเอนด์ภายนอก RETCIC เป็นข้ามแพลตฟอร์มและรองรับการจัดเก็บหลายประเภท" 
url: /th/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## ใช้การสำรองข้อมูลด้วยซอฟต์แวร์สำรองโอเพ่นซอร์สและเก็บไว้ในเครื่องหรือบนแบ็กเอนด์ภายนอก RETCIC เป็นข้ามแพลตฟอร์มและรองรับการจัดเก็บหลายประเภท

{{< figure align=center src="images/restic-post-banner.png" alt="ซอฟต์แวร์สำรองโอเพ่นซอร์ส">}}

ระบบสำรองข้อมูลมีความสำคัญอย่างยิ่งสำหรับทั้งธุรกิจและบุคคล ข้อมูลสามารถสูญหายได้ด้วยเหตุผลต่าง ๆ เช่นการโจมตีทางไซเบอร์ความล้มเหลวของระบบการกำจัดโดยไม่ตั้งใจและอื่น ๆ อีกมากมาย คุณควรมีกลยุทธ์การสำรองข้อมูลที่ดีในสถานที่เพื่อให้คุณสามารถกู้คืนข้อมูลของคุณได้อย่างรวดเร็ว คู่มือนี้จะแสดงวิธีการติดตั้งและใช้ซอฟต์แวร์สำรองโอเพ่นซอร์ส****restic บนเซิร์ฟเวอร์ Ubuntu ของคุณ
เราได้ครอบคลุมส่วนต่อไปนี้ในบทช่วยสอนนี้
* [ **ข้อกำหนดเบื้องต้น** ][1]
* [ **restic คืออะไร** ][2]
* [ **การติดตั้ง restic** ][3]
* [ **การกำหนดค่า restic** ][4]
* [ **ทางเลือกสำหรับ restic** ][5]
* **[บทสรุป][6]** 

## สิ่งที่จำเป็นต้องมี {#สิ่งที่จำเป็นต้องมี}

โปรแกรมซอฟต์แวร์สำรองข้อมูลใหม่รองรับระบบปฏิบัติการหลักสามระบบ Linux, MacOS และ Windows ก่อนที่จะติดตั้ง **การสำรองข้อมูล restic** คุณควรปฏิบัติตามข้อกำหนดของระบบต่อไปนี้
  * ระบบเครื่องหรือเดสก์ท็อปด้วยระบบปฏิบัติการ Ubuntu ที่เป็นที่ตั้งของข้อมูลที่จะสำรองข้อมูล
  * อินสแตนซ์เซิร์ฟเวอร์ Ubuntu ล่าสุด
  * การรับรองความถูกต้องของคีย์ SSH ที่กำหนดค่าระหว่างไคลเอนต์ทั้งสองและเซิร์ฟเวอร์
  * ผู้ใช้ที่ไม่ใช่รูทที่มีสิทธิ์ sudo
ด้วยบิตเหล่านี้ในมือเรามาทำงานกันเถอะ

## RETCIC คืออะไร? {#Restic}

[ **RESTIC**][7] เป็นเครื่องมือสำรองแบบโอเพ่นซอร์สที่ยอดเยี่ยม**เป็นยูทิลิตี้สำรองข้อมูล****ที่รวดเร็วปลอดภัยและมีประสิทธิภาพ เป็นโปรแกรมสำรองแบบข้ามแพลตฟอร์มดังนั้นจะทำงานบน Linux, BSD, Mac OS X และ Windows ซอฟต์แวร์การสำรองข้อมูลโอเพนซอร์สที่ดีที่สุดนั้นใช้งานง่ายและไม่จำเป็นต้องใช้เซิร์ฟเวอร์หรือการกำหนดค่าที่ซับซ้อน มันสร้างการสำรองข้อมูลของข้อมูลที่แก้ไขและอนุญาตให้ผู้ใช้กู้คืนได้เมื่อจำเป็น นอกจากนี้ยังมีตัวเลือกการจัดเก็บที่หลากหลายรวมถึงการจัดเก็บเองและที่เก็บข้อมูลอินเทอร์เน็ต ยิ่งไปกว่านั้นพื้นที่เก็บข้อมูลบนคลาวด์ที่โฮสต์ของโอเพ่นซอร์สเปิดใช้งานใช้เทคนิคการเข้ารหัสลับที่แข็งแกร่งเพื่อปกป้องข้อมูลของคุณ
restic ไม่ใช่ยูทิลิตี้การคัดลอกไฟล์อย่างง่าย มันถูกสร้างขึ้นเป็นหลักในสองแนวคิด: ภาพรวมและที่เก็บ **restic**โซลูชันการสำรองข้อมูลโอเพ่นซอร์สจะบันทึกข้อมูลเป็นภาพรวมซึ่งจะถูกบันทึกไว้ในที่เก็บ มันเขียนในภาษาการเขียนโปรแกรม GO ยูทิลิตี้สำรองข้อมูล RESTIC GO และแอพพลิเคชั่นสำรองโอเพ่นซอร์สทำงานได้อย่างราบรื่นกับระบบจัดเก็บข้อมูลบนคลาวด์และระบบแบ็คเอนด์ท้องถิ่นจำนวนมาก ซอร์สโค้ดซอฟต์แวร์สำรองไฟล์โอเพ่นซอร์สแบบ restic มีอยู่ที่ [ **gitHub** ][8] อย่างไรก็ตามคุณสามารถค้นหารายละเอียด [**เอกสาร** ][9] สำหรับการติดตั้งและการใช้งาน
การสำรองข้อมูลคลาวด์โฮสต์ที่โฮสต์ด้วยตนเองรองรับการออกนอกกรอบหลังจากแบ็กเอนด์สำหรับที่เก็บข้อมูลสำรอง
  * ไดเรกทอรีท้องถิ่น
  * เซิร์ฟเวอร์ SFTP (ผ่าน SSH)
  * เซิร์ฟเวอร์ REST
  * aws s3
  * Minio Server
  * วาซาบิ
  * Alibaba Cloud
  * OpenStack Swift
  * backblaze b2
  * ที่เก็บข้อมูล Microsoft Azure Blob
  * Google Cloud Storage
คุณสามารถใช้ [ **rclone** ][10] สำหรับแบ็กเอนด์ต่างๆนอกเหนือจากที่ระบุไว้ข้างต้น

## การติดตั้ง {#Installation}

มีหลายวิธีในการติดตั้งที่เก็บข้อมูลบนคลาวด์ที่โฮสต์ตัวเองที่ดีที่สุดในระบบปฏิบัติการ Ubuntu ของคุณ เราจะครอบคลุมการติดตั้งที่จัดเก็บไฟล์โฮสต์ตัวเอง restic โดยใช้แพ็คเกจ Ubuntu, Docker และซอร์สโค้ด

### การติดตั้งโดยใช้แพ็คเกจ
  * เรียกใช้คำสั่งด้านล่างเพื่อติดตั้งเซิร์ฟเวอร์สำรอง RESTIC Open Source บน Ubuntu OS
```
$ sudo apt-get install restic
```

### การติดตั้งโดยใช้ Docker
  * รับภาพตินิยมจาก Dockerhub
```
$ docker pull restic/restic
```

### การติดตั้งโดยใช้แหล่งที่มา
  * ก่อนอื่นคุณต้องติดตั้งภาษาโปรแกรม GO เพื่อตั้งค่า restic จากแหล่งที่มา คุณสามารถเยี่ยมชมเว็บไซต์อย่างเป็นทางการ [ **Golang** ][11] สำหรับคำแนะนำในการติดตั้งไป
  * ถัดไปดำเนินการคำสั่งด้านล่างเพื่อติดตั้งการสำรองข้อมูลที่เพิ่มขึ้น
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * โดยการระบุระบบปฏิบัติการเป้าหมายในคำสั่งคุณอาจรวบรวม restic ได้อย่างรวดเร็วสำหรับแพลตฟอร์มที่รองรับทั้งหมด นี่คือตัวอย่างบางส่วน
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## การกำหนดค่า restic {#Configuration}

ดังที่เราได้กล่าวไปแล้วข้างต้นว่าระบบสำรองข้อมูลโอเพ่นซอร์สแบบ restic นั้นขึ้นอยู่กับสแน็ปช็อตและที่เก็บสำหรับการสำรองข้อมูล ลองมาดูวิธีการตั้งค่าที่เก็บถ่ายภาพสแนปชอตแล้วกู้คืนการสำรองข้อมูล

### สร้างที่เก็บข้อมูล
  * เรียกใช้คำสั่งต่อไปนี้เพื่อเริ่มต้นที่เก็บข้อมูล คุณต้องตั้งรหัสผ่านสำหรับที่เก็บ
```
$ restic init --repo /tmp/
```

### ข้อมูลสำรองข้อมูลไปยังไดเรกทอรีท้องถิ่น
  * ในขั้นตอนแรกเราได้สร้างที่เก็บเพื่อจัดเก็บข้อมูล ตอนนี้เราจะเพิ่มข้อมูลลงในที่เก็บข้อมูลสำหรับการสำรองข้อมูล ดำเนินการคำสั่งต่อไปนี้
```
$ restic --repo /tmp/backup backup ~/work
```

### กู้คืนการสำรองข้อมูล
  * คำสั่ง RESTORE กู้คืนไฟล์และไดเรกทอรี ไฟล์จะไม่ถูกกู้คืนไปยังตำแหน่งเดิมในขณะที่ใช้การสำรองข้อมูลคลาวด์แบบเปิด คุณต้องเลือกตำแหน่งเป้าหมายสำหรับไฟล์ที่จะกู้คืนโดย restic
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * อย่างไรก็ตามคุณสามารถกู้คืนสแน็ปช็อตล่าสุดโดยไม่ต้องระบุรหัสสแน็ปช็อต คุณต้องเพิ่มพารามิเตอร์ล่าสุดในคำสั่งดังต่อไปนี้
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### การทำงานกับสแน็ปช็อต
ในส่วนนี้เราจะดูคุณสมบัติของสแน็ปช็อตบางอย่าง
  * เรียกใช้คำสั่งต่อไปนี้เพื่อแสดงรายการ Snaphosts
```
$ restic snapshots -r /tmp/backup
```
  * คุณสามารถเปรียบเทียบสองสแน็ปช็อตกับคำสั่งต่อไปนี้
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * คุณอาจต้องลบการสำรองข้อมูลเก่าเพื่อเพิ่มพื้นที่เก็บข้อมูล หากต้องการลบสแน็ปช็อตให้เรียกใช้คำสั่งด้านล่าง
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## ทางเลือกในการเปลี่ยน
Restic เป็นแอปพลิเคชันซอฟต์แวร์สำรองโอเพ่นซอร์สที่ได้รับความนิยมมากที่สุดและรับประกันความลับและความสมบูรณ์ของข้อมูลไฟล์สำคัญของคุณ ต่อไปนี้เป็นทางเลือกที่ได้รับความนิยมมากที่สุดและเป็นคู่แข่งชั้นนำในการปรับข้อมูลข้อมูลสำรองข้อมูล
  * Amazon Glacier
  * การจำลองแบบ
  * Runrestic
  * AFI
  * สำรอง Rainyday
  * Borg
  * สำรอง veeam
  * เกตเวย์จัดเก็บ AWS
  * การทำงานร่วมกัน

## บทสรุป
ในบทความนี้เราครอบคลุมซอฟต์แวร์สำรองโอเพ่นซอร์สฟรี**นอกจากนี้เรายังพูดถึงเทคนิคการติดตั้งหลายอย่างรวมถึงวิธีการสร้างการสำรองข้อมูลและวิธีการกู้คืนการสำรองข้อมูล มีที่เก็บข้อมูลสำรองข้อมูลรูปแบบอื่น ๆ อีกมากมายและเราเพิ่งแก้ไขในบทความนี้ ประเภทการจัดเก็บแบ็กเอนด์ที่เหลือจะครอบคลุมในสิ่งพิมพ์ในอนาคต เราหวังว่าบทช่วยสอนนี้จะทำหน้าที่เป็นจุดเริ่มต้นสำหรับคุณในการใช้เครื่องมือสำรองโอเพ่นซอร์สที่ดีที่สุดที่ดีที่สุดในการใช้และกู้คืนการสำรองข้อมูล
ในที่สุด [ **containerize.com**][12] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนโพสต์บล็อกเกี่ยวกับผลิตภัณฑ์โอเพนซอร์สล่าสุดเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [**สำรองข้อมูล** ][13] หมวดหมู่สำหรับการอัปเดตล่าสุด
_ ซอฟต์แวร์สำรองข้อมูลฟรีและโอเพ่นซอร์สที่คุณชื่นชอบที่สุดคืออะไร?. คุณมีคำถามเกี่ยวกับซอฟต์แวร์สำรองโอเพ่นซอร์สหรือไม่โปรด _ [ติดต่อกลับ][14]

## สำรวจ:
นอกจากนี้เรายังมีข้อมูลที่เกี่ยวข้องอื่น ๆ อีกมากมายจาก OSS Watch:
  * [ซอฟต์แวร์จัดเก็บข้อมูลคลาวด์โอเพ่นซอร์ส 5 อันดับแรกในปี 2021][15]
  * [วิธีการติดตั้ง NextCloud ด้วย Apache บนเซิร์ฟเวอร์ Ubuntu][16]
  * [ติดตั้งและกำหนดค่า owncloud ด้วย apache บน ubuntu][17]
  * [วิธีการติดตั้งแพลตฟอร์มการแชร์และซิงค์ไฟล์ Pydio บน Ubuntu][18]
  * [NSQ กับ Kafka | ความแตกต่างที่สำคัญคืออะไร][19]
  * [NextCloud vs OwnCloud | ความแตกต่างคืออะไร][20]
  * [ซอฟต์แวร์การจัดเก็บคลาวด์โอเพ่นซอร์สที่ดีที่สุดและซอฟต์แวร์การแชร์ไฟล์][21]



[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
