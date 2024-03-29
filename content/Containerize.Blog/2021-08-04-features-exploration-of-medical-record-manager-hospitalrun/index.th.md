---
title: "คุณสมบัติการสำรวจโรงพยาบาลเวชระเบียนโรงพยาบาล" 
seoTitle: "คุณสมบัติการสำรวจโรงพยาบาลเวชระเบียนโรงพยาบาล" 
description: "ทำตามคำแนะนำนี้เพื่อเริ่มต้นกับ Hospitalrun ผู้จัดการเวชระเบียน มันเป็นโอเพ่นซอร์สหลายภาษาและทำให้กระบวนการสำคัญหลายอย่างโดยอัตโนมัติ" 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "ระบบการจัดการโรงพยาบาลเป็นส่วนสำคัญของสถานประกอบการด้านการดูแลสุขภาพ HospitalRun ให้การควบคุมข้อมูลบทบาทที่อิงกับการเข้าถึงและการจัดการรายได้" 
url: /th/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## ระบบการจัดการโรงพยาบาลเป็นส่วนสำคัญของสถานพยาบาล HospitalRun ให้การควบคุมข้อมูลบทบาทที่อิงกับการเข้าถึงและการจัดการรายได้

{{< figure align=center src="images/blog-banners-template-1.png" alt="ผู้จัดการเวชระเบียน">}}


## ภาพรวม
โอเพ่นซอร์ส [ซอฟต์แวร์สุขภาพ][1] ได้รับความนิยมอย่างมากในอดีตที่ผ่านมา ประการแรกเป็นเพราะความก้าวหน้าทางเทคโนโลยี ประการที่สอง COVID-19 มีอิทธิพลต่ออุตสาหกรรมการแพทย์ในทุกด้านและให้กำเนิดโอกาสใหม่สำหรับชุมชนโอเพนซอร์ส เป็นสิ่งสำคัญอย่างยิ่งที่จะต้องให้บริการด้านการดูแลสุขภาพที่มีคุณภาพแก่ผู้ป่วยเมื่อโลกทั้งโลกผ่านช่วงเวลาสำคัญ โชคดีที่มีโซลูชันการจัดการบันทึกสุขภาพโอเพนซอร์สหลายแห่งที่ให้บริการการรวมศูนย์ข้อมูลความโปร่งใสความปลอดภัยการบูรณาการและคุณสมบัติที่ทรงพลังอื่น ๆ อีกมากมาย บริการด้านการดูแลสุขภาพฟรีเหล่านี้ให้การจัดการเวิร์กโฟลว์ที่ราบรื่นเช่นแพทย์ผู้ป่วยคลินิกและพนักงานคนอื่น ๆ เมื่อเร็ว ๆ นี้ [containerize.com][2] ได้ตีพิมพ์บทความเกี่ยวกับระบบการจัดการข้อมูลโรงพยาบาลโอเพนซอร์สซึ่งรวมถึง [ซอฟต์แวร์บันทึกสุขภาพผู้ป่วยโอเพนซอร์ส 5 อันดับแรก][3], [การสำรวจคุณสมบัติการแก้ปัญหาสุขภาพทางการแพทย์ OpenEmr][4], และ [ซอฟต์แวร์การดูแลสุขภาพออนไลน์ที่ให้อำนาจอุตสาหกรรมการดูแลสุขภาพ][5]
ในอดีตเราเขียนบทความที่อธิบายถึงขั้นตอนการตั้งค่าของ [HospitalSrun][6] ใน LocalHost ในโพสต์บล็อกนี้เราจะสำรวจ [โรงพยาบาล][6] เพิ่มเติมโดยครอบคลุมประเด็นต่อไปนี้
*  **[ทำไมโรงพยาบาล?][7]**  
*  **[ผู้ป่วยและโมดูลกำหนดเวลา][8]**  
*  **[การรวมห้องปฏิบัติการและยา][9]**  
*  **[การถ่ายภาพและเหตุการณ์][10]**  
*  **[บทสรุป][11]**  

## ทำไมโรงพยาบาล? {#why}

มีสาเหตุหลายประการที่อยู่เบื้องหลังความนิยมของผู้จัดการเวชระเบียนนี้ HospitalRun เป็นบันทึกสุขภาพอิเล็กทรอนิกส์ที่สมบูรณ์และระบบข้อมูลโรงพยาบาล รองรับทั้งรุ่นออฟไลน์และออนไลน์ ช่วยให้คุณรวมคลินิกและให้การซิงค์ข้อมูล ยิ่งไปกว่านั้นมันเป็นหลายภาษาข้ามแพลตฟอร์มและมีความสามารถในการโฮสต์ตัวเอง ระบบบันทึกผู้ป่วยนี้มีการจัดการบันทึกผู้ป่วยการกำหนดเวลาการนัดหมายยาและการจัดการใบสั่งยา นอกจากนี้ยังมีข้อกำหนดในการสร้างรายงานที่กำหนดเองที่มีรายละเอียดการวินิจฉัยที่สมบูรณ์ นอกจากนี้สมาชิกเจ้าหน้าที่ทางการแพทย์สามารถรับความช่วยเหลือจากโมดูลผู้ป่วย เหนือสิ่งอื่นใดระบบการจัดการโรงพยาบาลนี้มีการจัดการกรณีอุบัติเหตุและฉุกเฉิน มีความปลอดภัยเชื่อถือได้และใช้งานง่าย อย่างไรก็ตามระบบการจัดการเวชระเบียนนี้เขียนขึ้นอย่างสมบูรณ์ใน JavaScript และซอร์สโค้ดทั้งหมดมีอยู่ใน [GitHub][12] พร้อมเอกสารเกี่ยวกับการพัฒนาและการปรับใช้

## ผู้ป่วยและโมดูลการจัดตาราง {#modules}

ในส่วนนี้เราจะผ่านแดชบอร์ดของระบบการจัดการข้อมูลโรงพยาบาลนี้ เมื่อคุณเข้าสู่ระบบคุณจะลงจอดบนแผงควบคุมของโรงพยาบาลตามที่แสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="ผู้จัดการเวชระเบียน">}}

ด้านบนขวามือมีสองตัวเลือก ประการแรกการตั้งค่าที่ผู้ใช้สามารถเลือกภาษาเช่นภาษาอังกฤษอิตาลีตุรกีและอื่น ๆ ประการที่สองมีตัวเลือกในการสร้างบันทึกผู้ป่วยใหม่การนัดหมายใหม่การร้องขอยาขอห้องปฏิบัติการคำขอการถ่ายภาพใหม่และเหตุการณ์รายงาน

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="ระบบการจัดการโรงพยาบาล">}}

มีหลายทางเลือกเช่นผู้ป่วยการกำหนดเวลายาห้องปฏิบัติการภาพและเหตุการณ์ทางด้านซ้ายมือ ในโมดูลผู้ป่วยคุณสามารถเพิ่มบันทึกผู้ป่วยใหม่และดูรายการของผู้ป่วยที่เพิ่มแล้ว ผู้จัดการเวชระเบียนฟรีนี้ช่วยให้ผู้ใช้บันทึกบันทึกผู้ป่วยที่สมบูรณ์เช่นชื่อที่อยู่การติดต่อประเภทผู้ป่วยและรายละเอียดพื้นฐานอื่น ๆ ในรายชื่อผู้ป่วยมีแถบค้นหาที่ผู้ใช้สามารถค้นหาผู้ป่วยในรายการ นอกจากนี้ในโมดูลการจัดตารางเวลาเจ้าหน้าที่แพทย์สามารถกำหนดเวลานัดหมายได้ อินเทอร์เฟซของโมดูลนี้แสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="ระบบการจัดการข้อมูลโรงพยาบาล">}}

อินเทอร์เฟซแสดงการนัดหมายตามกำหนดเวลา นอกจากนี้ผู้ใช้สามารถใช้ตัวกรองเพื่อดูจำนวนการนัดหมายต่อวันต่อสัปดาห์และต่อเดือน มีตัวเลือกที่มุมบนขวาที่เจ้าหน้าที่ดูแลสุขภาพสามารถจองนัดใหม่ได้ เจ้าหน้าที่ทางการแพทย์สามารถแทรกรายละเอียดการนัดหมายเช่นวันที่เริ่มต้นวันที่สิ้นสุดเหตุผลและอื่น ๆ

## การรวมห้องปฏิบัติการและยา {#lab}

ส่วนนี้อธิบายถึงฟังก์ชันการทำงานของสองโมดูลที่โดดเด่นของซอฟต์แวร์การดูแลสุขภาพฟรีนี้ โมดูลยาช่วยให้ผู้ใช้เพิ่มข้อมูลกับยาที่พวกเขาสามารถตั้งค่าลำดับความสำคัญของยาเช่นกิจวัตรเร่งด่วนหรือโดยเร็ว ในทำนองเดียวกันมีรายการคำขอยาที่เจ้าหน้าที่สามารถค้นหาด้วยตัวกรอง

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="ระบบการจัดการเวชระเบียน">}}

ในโมดูลห้องปฏิบัติการเจ้าหน้าที่การดูแลสุขภาพสามารถขอห้องปฏิบัติการได้โดยการแทรกข้อมูลผู้ป่วยเยี่ยมชมและพิมพ์ นอกจากนั้นพนักงานดูแลสุขภาพสามารถเพิ่มบันทึกเพิ่มเติมได้ ในทำนองเดียวกันมีตัวกรองในตัวเลือกคำขอแล็บที่ผู้ใช้สามารถดำเนินการคุณสมบัติการค้นหา

## การถ่ายภาพและเหตุการณ์ {#imaging}

การถ่ายภาพเป็นเรื่องเกี่ยวกับการสร้างการแสดงภาพของบางสิ่งบางอย่างโดยการสแกนด้วยสนามแม่เหล็กไฟฟ้า HospitalRun เสนอการจัดการบันทึกการถ่ายภาพ ยิ่งกว่านั้นยังช่วยให้ผู้ใช้สร้างคำขอการถ่ายภาพใหม่และโมดูลนี้เชื่อมโยงกับโมดูลของผู้ป่วยเนื่องจากโมดูลอื่น ๆ เชื่อมโยงกัน ในทำนองเดียวกันผู้ใช้สามารถดูรายการคำขอการถ่ายภาพ ถัดไปในโมดูลเหตุการณ์เจ้าหน้าที่สามารถรายงานเหตุการณ์ที่เกิดขึ้นได้โดยการแทรกรายละเอียด ดังนั้นผู้ใช้สามารถเห็นรายการเหตุการณ์ที่รายงานแล้ว มีการแสดงกราฟิกของเหตุการณ์ที่มีอยู่ในช่วงสุดท้ายดังแสดงในภาพด้านล่าง

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="การจัดการบันทึกสุขภาพ">}}


## บทสรุป {#บทสรุป}

นี่คือจุดสิ้นสุดของโพสต์บล็อกนี้ ในความเป็นจริงสถาบันสุขภาพส่วนใหญ่ขึ้นอยู่กับการดำเนินงานด้วยตนเอง อาจมีความเสี่ยงเกี่ยวกับความปลอดภัยของข้อมูลและความสมบูรณ์ อย่างไรก็ตามระบบอัตโนมัติตรวจสอบให้แน่ใจว่าแง่มุมพื้นฐานและสำคัญที่สุดของการดำเนินงานด้านการดูแลสุขภาพตามปกติ ดังนั้นการติดตั้งผู้จัดการเวชระเบียนโอเพ่นซอร์สที่ดีปกป้องทรัพย์สินของคุณจากแหล่งที่ไม่ได้รับอนุญาตและช่วยให้คุณทำงานประจำได้อย่างง่ายดายและมั่นใจ ซอฟต์แวร์โอเพ่นซอร์สเหล่านี้ซิงโครไนซ์หลายหน่วยงานเช่นแพทย์ผู้ป่วยคลินิกห้องปฏิบัติการและทำให้เวิร์กโฟลว์ง่ายขึ้น บรรทัดล่างคือมันเป็นเวลาสูงที่จะนำซอฟต์แวร์โอเพ่นซอร์สมาใช้สำหรับโรงพยาบาลหรือคลินิกของคุณเพื่อทำรัฐประหารด้วยความท้าทายล่าสุด คุณสามารถประหยัดเวลาและความพยายามของคุณและมุ่งเน้นไปที่งานที่สำคัญและสำคัญ
ในที่สุด [containerize.com][2] กำลังเขียนบทความเกี่ยวกับผลิตภัณฑ์โอเพ่นซอร์สเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [HealthCare Technologies][1] สำหรับข่าวทั่วไปและการอัปเดต

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  * [OpenEmr][13]
  * [OpenMRS][14]
  * [โรงพยาบาล][15]
  * [โรงพยาบาลเปิด][16]
  * [silismed][17]
  * [ซอฟต์แวร์บันทึกสุขภาพผู้ป่วยโอเพนซอร์ส 5 อันดับแรก][3]
  * [คุณสมบัติการสำรวจโซลูชั่นสุขภาพทางการแพทย์ OpenEmr][4]
  * [วิธีการตั้งค่าโรงพยาบาลระบบ eHealth บน LocalHost][18]
  * [ซอฟต์แวร์การดูแลสุขภาพออนไลน์ช่วยให้อุตสาหกรรมการดูแลสุขภาพเป็นอย่างไร][5]



[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
