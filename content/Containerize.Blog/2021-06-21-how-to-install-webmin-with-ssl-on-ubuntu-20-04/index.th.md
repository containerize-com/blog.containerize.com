---
title: "วิธีการติดตั้ง webmin ด้วย SSL บน Ubuntu 20.04" 
seoTitle: "วิธีการติดตั้ง webmin ด้วย SSL บน Ubuntu 20.04" 
description: "Webmin เป็นเครื่องมือการจัดการระบบบนเว็บสำหรับระบบที่มีลักษณะคล้าย UNIX ในบทความนี้เราจะได้เรียนรู้วิธีการติดตั้ง webmin ด้วย SSL บน Ubuntu 20.04" 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin เป็นเครื่องมือการจัดการระบบบนเว็บที่เป็นทางเลือกง่าย ๆ ในการบริหารระบบบรรทัดคำสั่ง บทความนี้แนะนำวิธีการติดตั้ง webmin" 
url: /th/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="วิธีการติดตั้ง webmin">}}


## Webmin เป็นเครื่องมือการจัดการระบบบนเว็บที่เป็นทางเลือกง่าย ๆ ในการบริหารระบบบรรทัดคำสั่ง บทความนี้แนะนำวิธีการติดตั้ง webmin
ด้วยบทความนี้“ วิธีการติดตั้ง webmin ด้วย SSL บน Ubuntu 20.04” เรากำลังเริ่มต้นการสอนชุดใหม่ของเราบนซอฟต์แวร์และเครื่องมือเว็บโฮสติ้ง ด้วย WebMin คุณสามารถตั้งค่าบัญชีผู้ใช้เปิดใช้งานการแชร์ไฟล์กำหนดค่าการตั้งค่า Apache และการตั้งค่า DNS และดำเนินงานอื่น ๆ อีกมากมายที่เกี่ยวข้องกับเว็บโฮสติ้ง ช่วยให้คุณจัดการเซิร์ฟเวอร์เว็บโฮสติ้งทั้งหมด มันกำจัดปัญหาของการแก้ไขไฟล์การกำหนดค่า Linux ด้วยตนเอง ดังนั้นมาเรียนรู้วิธีการติดตั้ง webmin ด้วย SSL
* **[บทนำสู่เว็บมิน][1]** 
* [ **คุณสมบัติที่ไฮไลต์** ][2]
* [ **ระบบปฏิบัติการที่รองรับ** ][3]
* [ **ติดตั้ง webmin บน ubuntu** ][4]
* [ **ติดตั้ง Apache โดยใช้ webmin** ][5]
* [ **บทสรุป** ][6]

## รู้เบื้องต้นเกี่ยวกับเว็บมิน {#intro}

Webmin เป็นอินเทอร์เฟซบนเว็บสำหรับการดูแลระบบสำหรับ Linux ช่วยให้คุณจัดการเซิร์ฟเวอร์โฮสติ้งของคุณเองจากระยะไกลจากเว็บเบราว์เซอร์ที่ทันสมัย ด้วย webmin คุณสามารถกำหนดค่าระบบปฏิบัติการภายในเช่นบัญชีผู้ใช้, Apache, DNS, การแชร์ไฟล์และอื่น ๆ อีกมากมาย Webmin ยังอนุญาตให้ควบคุมเครื่องจักรจำนวนมากผ่านอินเทอร์เฟซเดียวหรือเข้าสู่ระบบอย่างไร้รอยต่อบนโฮสต์เว็บมินอื่น ๆ บนซับเน็ตหรือ LAN เดียวกัน Webmin ซึ่งใช้ Perl ทำงานเป็นกระบวนการของตัวเองและเว็บเซิร์ฟเวอร์ และส่วนที่ดีที่สุดเกี่ยวกับ Webmin คือฟรีและโอเพ่นซอร์ส 100% และมีชุมชนนักพัฒนาที่เจริญรุ่งเรืองมาก

## คุณสมบัติที่เน้น {#features}

  * อนุญาตให้คุณสร้างและแก้ไขโดเมนบันทึก DNS ตัวเลือกการผูกและมุมมอง
  * ช่วยในการกำหนดค่าไฟร์วอลล์โดยการสร้างและแก้ไขกฎโดยใช้ IPFW
  * ให้คุณตั้งค่าสคริปต์ที่จะทำงานในเวลาบูตจาก /etc/init.d หรือ /etc/rc.local
  * คุณสามารถกำหนดเวลาการถ่ายโอนไฟล์จากเซิร์ฟเวอร์ไปยังเซิร์ฟเวอร์หลายตัว
  * อนุญาตให้คุณติดตั้ง RPMS, Debian และ Solaris แพ็คเกจผ่านเซิร์ฟเวอร์หลายตัวจากแหล่งเดียว
  * ให้การเข้าถึงรายงานเช่นการใช้แบนด์วิดธ์อัปโหลดการดาวน์โหลดผู้เข้าชม ฯลฯ
  * คุณสามารถสร้างงาน cron ที่กำหนดเวลาที่ทำงานบนเซิร์ฟเวอร์หลายตัวพร้อมกัน
  * ให้คุณเรียกใช้คำสั่งบนเซิร์ฟเวอร์หลายเครื่องพร้อมกัน
  * อนุญาตให้คุณตั้งค่าและแก้ไขโควต้าดิสก์ของผู้ใช้หรือกลุ่มสำหรับระบบไฟล์ท้องถิ่น
  * รวมการสำรองข้อมูลและกู้คืนระบบไฟล์โดยใช้การถ่ายโอนข้อมูลและกู้คืนตระกูลคำสั่ง
  * การใช้ตัวจัดการไฟล์ที่คล้ายกับ Windows คุณสามารถดูแก้ไขและเปลี่ยนสิทธิ์ในไฟล์และไดเรกทอรีบนเซิร์ฟเวอร์ของคุณ
  * คุณสามารถกำหนดค่าเซิร์ฟเวอร์ตำแหน่งบริการตำแหน่ง
  * ดูแก้ไขและเปลี่ยนสิทธิ์ในไฟล์และไดเรกทอรีในระบบของคุณด้วยตัวจัดการไฟล์เหมือน Windows
  * ช่วยในการตั้งค่าอุโมงค์ SSL เพื่อเข้ารหัสบริการเช่น POP3 และ IMAP โดยใช้การเรียกใช้ Stunnel จาก INETD

## ระบบปฏิบัติการที่รองรับ {#support}

เนื่องจากระบบปฏิบัติการที่มีลักษณะคล้าย UNIX ที่แตกต่างกันและการแจกแจง Linux ใช้ตำแหน่งที่แตกต่างกันสำหรับไฟล์กำหนดค่าต่างๆของพวกเขา WebMin สามารถรองรับระบบที่ได้รับการกำหนดค่าเท่านั้น ระบบปฏิบัติการต่อไปนี้ได้รับการสนับสนุนโดยเวอร์ชัน 1.979 ของ Webmin:
  * Almalinux Linux
  * alphacore linux
  * Amazon Linux
  * Aplinux
  * Asianux
  * เซิร์ฟเวอร์ Asianux
  * bigblock
  * BSDI
  * Caixa Magica
  * Caldera OpenLinux
  * Caldera OpenLinux eserver
  * Caos Linux
  * cendio lbs linux
  * centos linux
  * Citrix Hypervisor
  * Cloudlinux
  * CloudRouter Linux
  * โคบอลต์ Linux
  * เทคโนโลยีที่สอดคล้องกัน Linux
  * conectiva linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * ดาร์วิน
  * Debian Linux
  * Dec/Compaq OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Endian Firewall Linux
  * fedora linux
  * freeBSD
  * Linux ทั่วไป
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * hp/ux
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * Linux Mint
  * linuxppc
  * Lycoris Desktop/LX
  * mac os x
  * macos catalina
  * MacOS High Sierra
  * macos mojave
  * macos sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * mepis linux
  * ส่วนใหญ่
  * MSC Linux
  * neoshine linux
  * netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * openna linux
  * opensuse linux tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X
  * Pardus linux
  * Pclinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * เดสก์ท็อป Redhat Linux
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Linux วิทยาศาสตร์
  * SCO OpenServer
  * sco unixware
  * ปลอดภัย linux
  * sgi irix
  * Slackware Linux
  * Slamd64 Linux
  * สมาร์ทส
  * Sol Linux
  * Springdale Linux
  * startcom linux
  * ระบบเดสก์ท็อปของซันจาวา
  * Sun Solaris
  * Suse Linux
  * Suse Openexchange Linux
  * Suse Sles Linux
  * Synology DSM
  * Tao Linux
  * Tawie Server Linux
  * เดสก์ท็อป Thizlinux
  * thizserver
  * Tinysofa Linux
  * Trustix
  * Trustix SE
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * ute linux
  * Virtuozo Linux
  * Linux แคระขาว
  * WhiteBox Linux
  * Wind River Linux
  * Windows
  * x/os linux
  * Xandros Linux
  * xcp-ng linux
  * xenserver linux
  * Linux สุนัขสีเหลือง
  * Yoper Linux
ระบบที่ได้รับการสนับสนุนที่ดีที่สุดในขณะนี้คือ Solaris, Linux (Redhat โดยเฉพาะ) และ FreeBSD

## ติดตั้ง webmin บน ubuntu {#install}

ในการติดตั้ง webmin คุณจะต้องเข้าถึงผู้ใช้ที่มีสิทธิ์ **รูท**ขอแนะนำให้คุณตั้งค่าผู้ใช้ที่ไม่ใช่รูตด้วยการเข้าถึง**sudo** 
SSH แรกลงในเซิร์ฟเวอร์ของคุณโดยใช้คำสั่งต่อไปนี้
```
ssh user@server_IP_address
```
ในการติดตั้ง webmin ผ่าน _apt-get_ คุณต้องเพิ่มที่เก็บ webmin ลงในไฟล์ _sources.list_ ของคุณ บนเซิร์ฟเวอร์ของคุณเปิดไฟล์ _sources.list_ ในตัวแก้ไขข้อความที่คุณชื่นชอบ เราจะใช้ VIM ในบทช่วยสอนนี้:
```
sudo vi /etc/apt/sources.list
```
เมื่อเปิดไฟล์ให้เพิ่มบรรทัดต่อไปนี้ในตอนท้ายของไฟล์
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
ตอนนี้เพิ่มคีย์ Webmin GPG ลงใน APT ดังนั้นแหล่งเก็บข้อมูลที่คุณเพิ่มจะเชื่อถือได้ คำสั่งนี้จะทำเช่นนั้น:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
ก่อนที่จะติดตั้ง webmin คุณต้องอัปเดตรายการแพ็คเกจของ Apt-Get:
```
sudo apt-get update
```
ตอนนี้เรียกใช้คำสั่ง apt-get นี้เพื่อติดตั้ง webmin:
```
sudo apt-get install webmin 
```
ป้อน y เพื่อยืนยันการติดตั้ง หลังจากการติดตั้งเสร็จสมบูรณ์บริการ webmin จะเริ่มโดยอัตโนมัติ และเว็บอินเตอร์เฟสจะทำงานบนพอร์ต 10,000 คุณสามารถเข้าถึงอินเทอร์เฟซโดยใช้ URL ต่อไปนี้
```
https://server_IP_address:10000
```
คุณจะได้รับแจ้งด้วยคำเตือนที่ระบุว่าใบรับรอง SSL ของเซิร์ฟเวอร์ของคุณไม่น่าเชื่อถือ นี่เป็นเพราะ Webmin จะสร้างและติดตั้งใบรับรอง SSL โดยอัตโนมัติหลังจากการติดตั้งและใบรับรองไม่ได้ออกโดยหน่วยงานใบรับรองที่คอมพิวเตอร์ของคุณเชื่อถือได้ เป็นเรื่องปกติที่จะดำเนินการต่อ สั่งให้เว็บเบราว์เซอร์ของคุณเชื่อถือใบรับรอง
ณ จุดนี้คุณจะเห็นหน้าจอเข้าสู่ระบบ webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="ติดตั้ง webmin">}}

เมื่อคุณลงชื่อเข้าใช้ webmin ครั้งแรกคุณจะถูกนำไปยังหน้าข้อมูล* ***หน้า** มันให้ภาพรวมของทรัพยากรระบบของคุณและข้อมูลเบ็ดเตล็ดอื่น ๆ

{{< figure align=center src="images/install-webmin-system-info.png" alt="ติดตั้งข้อมูลระบบ webmin">}}


## ติดตั้ง apache โดยใช้ webmin {#install-apache}

Webmin มาพร้อมกับโมดูลที่หลากหลายที่จัดการแพ็คเกจซอฟต์แวร์ที่แตกต่างกัน ในการติดตั้ง apache โดยใช้ webmin ทำตามคำแนะนำด้านล่าง
**ขั้นตอนที่ 1 **: ในเมนูการนำทางคลิก** โมดูลที่ไม่ได้ใช้งาน**เพื่อขยายหมวดหมู่แล้วคลิก** Apache Webserver**
หากคุณไม่ได้ติดตั้ง Apache บนเซิร์ฟเวอร์ของคุณโมดูลจะแจ้งให้คุณทราบและให้วิธีการติดตั้ง Apache
**ขั้นตอนที่ 2**: ใช้** คลิกที่นี่**ลิงค์ (ในประโยคสุดท้าย) เพื่อติดตั้ง Apache ผ่าน APT-GET ผ่าน Webmin
หลังจากการติดตั้ง Apache เสร็จสมบูรณ์เซิร์ฟเวอร์ของคุณจะเรียกใช้เซิร์ฟเวอร์ Apache เริ่มต้น

## บทสรุป {#conclusion}

บทความนี้กล่าวถึงหลายสิ่งหลายอย่างที่เว็บมินสามารถทำได้ Webmin เป็นหนึ่งในเครื่องมือที่ดีที่สุดสำหรับการจัดการเซิร์ฟเวอร์ Linux/UNIX ของคุณ ในบทช่วยสอนนี้เรายังได้เรียนรู้วิธีการติดตั้ง webmin บน Ubuntu เช่นกันเราได้พูดคุยเกี่ยวกับวิธีการติดตั้ง Apache บนเซิร์ฟเวอร์ของคุณโดยใช้ webmin

## สำรวจ
  * [วิธีการติดตั้ง PHP หลายรุ่นด้วย Nginx บน Ubuntu][7]
  * [วิธีการตั้งค่าและกำหนดค่า nginx เป็น proxy ย้อนกลับ][8]



[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
