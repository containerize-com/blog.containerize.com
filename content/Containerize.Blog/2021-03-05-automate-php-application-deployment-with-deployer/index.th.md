---
title: "ทำให้การปรับใช้แอปพลิเคชัน PHP อัตโนมัติด้วย deployer" 
seoTitle: "ทำให้การปรับใช้แอปพลิเคชัน PHP อัตโนมัติด้วย deployer" 
description: "ปรับใช้แอปพลิเคชัน PHP ด้วยเครื่องมือการปรับใช้โอเพ่นซอร์สและทำให้เวิร์กโฟลว์การปรับใช้อัตโนมัติ ปล่อยคุณสมบัติและย้อนกลับไปยังเวอร์ชันก่อนหน้าได้อย่างง่ายดาย" 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "ทำให้กระบวนการปรับใช้แอปพลิเคชัน PHP อัตโนมัติด้วยเครื่องมือการปรับใช้ PHP เราจะเรียนรู้วิธีการตั้งค่าตัวปรับใช้และใช้เพื่อปรับใช้แอปพลิเคชัน PHP" 
url: /th/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## กระบวนการปรับใช้แอปพลิเคชัน PHP อัตโนมัติด้วยเครื่องมือการปรับใช้ PHP เราจะเรียนรู้วิธีการตั้งค่าตัวปรับใช้และใช้เพื่อปรับใช้แอปพลิเคชัน PHP

{{< figure align=center src="images/deployer-blog-post.png" alt="เครื่องมือปรับใช้ PHP">}}

เป็นงานที่สำคัญมากในการปรับใช้แอปพลิเคชันบนเซิร์ฟเวอร์หลังการพัฒนา คุณสมบัติใหม่และการแก้ไขข้อผิดพลาดมักจะออกโดยทีม ดังนั้นจึงเป็นเรื่องที่ดีกว่าสำหรับทีมที่จะกำจัดงานด้วยตนเองและทำให้กระบวนการปรับใช้ซอฟต์แวร์ ** เป็นไปโดยอัตโนมัติ ** มันจะช่วยให้ทีมซอฟต์แวร์มีสมาธิกับงานที่สำคัญกว่า มีเครื่องมือการปรับใช้โอเพ่นซอร์ส ** หลายตัว ** อยู่ที่นั่น แต่เราจะจดจ่อกับ ** PHP Deployer ** ในบทช่วยสอนนี้ เราจะครอบคลุมส่วนต่อไปนี้ในโพสต์นี้
  *[** deployer คืออะไร **] [1]
  *[** การติดตั้ง deployer **] [2]
  *[** ปรับใช้แอปพลิเคชัน PHP **] [3]
  *[** บทสรุป **] [4]

## deployer คืออะไร {#what}
[** deployer **] [5] เป็นเครื่องมือปรับใช้ฟรีและโอเพ่นซอร์ส ** ** ช่วยให้ทีมซอฟต์แวร์สำหรับการปรับใช้เวิร์กโฟลว์อัตโนมัติสำหรับแอปพลิเคชันที่ใช้ PHP ติดตั้งง่ายและใช้งานง่ายมาก ทุกคนจากประสบการณ์ระดับเริ่มต้นถึงผู้เชี่ยวชาญสามารถใช้งานได้อย่างรวดเร็วสำหรับการปรับใช้แอปพลิเคชัน PHP Deployer มาพร้อมกับสูตร/สคริปต์นอกกรอบสำหรับเฟรมเวิร์ก PHP ยอดนิยม CMS และซอฟต์แวร์ตะกร้าสินค้า นอกจากนี้คุณสามารถทำได้ ** การปรับใช้ laravel ** ด้วยเครื่องมือปรับใช้โอเพนซอร์ส ** นี้ ** นักพัฒนาสามารถใช้สูตรในตัวสำหรับโครงการของพวกเขาและใช้สำหรับการปรับใช้ นอกจากนี้คุณสามารถสร้างสคริปต์ติดตั้ง/ปรับใช้ได้อย่างง่ายดายด้วยตัวช่วยสร้าง ** PHP ** ยิ่งไปกว่านั้นเครื่องมือปรับใช้ฟรี ** นี้มีคุณสมบัติที่ยอดเยี่ยมเช่นการปรับใช้แบบศูนย์-ลง, ย้อนกลับไปยังเวอร์ชันก่อนหน้า, SSH, การดำเนินการแบบขนานและอื่น ๆ อีกมากมาย

## การติดตั้ง deployer {#installing}
  * deployer ขึ้นอยู่กับ PHP คุณควรตรวจสอบให้แน่ใจว่า PHP กำลังทำงานบนเซิร์ฟเวอร์ของคุณ อย่างไรก็ตามคุณสามารถใช้คำสั่งด้านล่างเพื่อติดตั้ง PHP บน Ubuntu
```
sudo apt-get install php
```
  * เรียกใช้คำสั่งด้านล่างทีละคำเพื่อติดตั้ง deployer
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## ปรับใช้แอปพลิเคชัน PHP {#Deploy}
ปฏิบัติตามแนวทางทีละขั้นตอนเพื่อ ** ปรับใช้แอปพลิเคชัน PHP ** ด้วย deployer
  * สร้างไดเรกทอรีสำหรับ deployer และนำทางไปยังไดเรกทอรีที่สร้างขึ้นใหม่
```
sudo mkdir deployer
cd deployer
```
  * เรียกใช้คำสั่งด้านล่างเพื่อสร้างสคริปต์การติดตั้ง
```
dep init
```
  * คุณจะได้รับแจ้งพร้อมกับหน้าจอด้านล่าง นี่คือตัวช่วยสร้าง deployer เพื่อสร้างสคริปต์การติดตั้งพื้นฐาน

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * ก่อนอื่นคุณต้องเลือกประเภทโครงการโดยป้อนตัวเลข คุณสามารถป้อน 0 หากคุณไม่แน่ใจเกี่ยวกับประเภทโครงการหรือเพิ่งทำความคุ้นเคยกับ deployer
  * ประการที่สองคุณต้องจัดเตรียมเส้นทางที่เก็บ Git เป็นขั้นตอนเสริมคุณสามารถข้ามไปและเพิ่มเส้นทางในภายหลัง
  * ในขั้นตอนสุดท้ายคุณสามารถแบ่งปันข้อมูลกับชุมชน Deployer โดยเลือกใช่หรือป้อนไม่ใช่เพื่อข้ามไป
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
คุณต้องเปลี่ยนตัวแปรต่อไปนี้สำหรับการปรับใช้แอปพลิเคชัน PHP ของคุณ
  *** ตั้งค่า (‘แอปพลิเคชัน’, ‘my_project’); ** - ตั้งชื่อแอปพลิเคชัน
  *** set (‘repository’,”); **-ตั้งค่าเส้นทางที่เก็บ Git เช่น ‘git@github.com: masood/first-app-with-deployer.git’ คุณต้องตั้งค่าปุ่มปรับใช้เป็นที่เก็บ GitHub ของคุณ คุณสามารถค้นหาวิธีสร้างคีย์ SSH ที่เซิร์ฟเวอร์หากคุณไม่คุ้นเคย
  *** โฮสต์ (‘Project.com’)
    -> set (‘deploy_path’, ‘~/{{application}}’); ** -ตั้งชื่อโครงการและกำหนดเส้นทางที่คุณต้องการจัดเก็บไฟล์สำหรับแอปพลิเคชันของคุณ มันจะดูเหมือน/var/www/html/deployer
สุดท้ายเรียกใช้คำสั่งด้านล่างเพื่อปรับใช้แอปพลิเคชัน PHP ของคุณ
```
dep deployer
```
หากคุณพบปัญหาใด ๆ กับรุ่นใหม่และต้องการย้อนกลับการเปลี่ยนแปลง คุณสามารถทำได้โดยใช้คำสั่งด้านล่าง
```
dep rollback
```

## บทสรุป {#conclusion}
เราได้พูดคุยเกี่ยวกับ deployer และวิธีการติดตั้งในบทช่วยสอนนี้ นอกจากนี้เราได้สร้างแนวทางที่สมบูรณ์สำหรับการปรับใช้แอปพลิเคชันที่ใช้ PHP จากที่เก็บ GitHub หวังว่าโพสต์บล็อกนี้จะช่วยให้คุณเริ่ม ** ปรับใช้แอปพลิเคชัน PHP ** ด้วย deployer ยิ่งกว่านั้นเราจะเขียนเพิ่มเติมเกี่ยวกับเครื่องมือการปรับใช้ PHP ** นี้ ** ในบทช่วยสอนที่จะมาถึง
ในที่สุด [** containerize.com **] [6] อยู่ในกระบวนการที่สอดคล้องกันในการเขียนโพสต์บล็อกเกี่ยวกับผลิตภัณฑ์โอเพนซอร์สล่าสุดเพิ่มเติม ดังนั้นโปรดติดต่อกับหมวดหมู่ [** การปรับใช้ **] [7] หมวดหมู่สำหรับการอัปเดตล่าสุด

## สำรวจ
คุณอาจพบลิงค์ต่อไปนี้ที่เกี่ยวข้อง:
  *[** deployer **] [8]
  *[** Jenkins **] [9]
  *[** โดรน **] [10]
  *[** Capistrano **] [11]
  *[** Rancher **] [12]
  *[** Concourse **] [13]
  *[** Ansible **] [14]
  *[** gocd **] [15]
  *[** เครื่องมือปรับใช้โอเพนซอร์ส 5 อันดับแรกในปี 2021 **] [16]
  *[** การรวมอย่างต่อเนื่องและการปรับใช้อย่างต่อเนื่องจากเซิร์ฟเวอร์ควบคุมต้นทาง **] [17]
[1]: #What
[2]: #Installing
[3]: #Deploy
[4]: #Conclusion
[5]: https://deployer.org/
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/deployment-tools/
[8]: https://products.containerize.com/deployment-tools/deployer
[9]: https://products.containerize.com/deployment-tools/jenkins/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/capistrano/
[12]: https://products.containerize.com/deployment-tools/rancher/
[13]: https://products.containerize.com/deployment-tools/concourse/
[14]: https://products.containerize.com/deployment-tools/ansible/
[15]: https://products.containerize.com/deployment-tools/gocd/
[16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
