---
title: "如何使用Moodle LMS创建电子学习网站" 
seoTitle: "如何使用Moodle LMS创建电子学习网站" 
description: "Moodle LMS是一种用于创建在线学习平台的免费开源电子学习解决方案。查看指南以熟悉它。" 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "使用开源电子学习平台构建在线学习平台。本文解释了如何使用Moodle LMS创建远程学习网站。" 
url: /zh/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## 使用开源电子学习平台构建在线学习平台。本文解释了如何使用Moodle LMS创建远程学习网站。

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

我们遭受了Covid 19的困扰一年多。世界的每个部分都被锁定。它对世界各地的人们的生活和企业都有负面影响。更重要的是，它对我们的教育系统产生了重大影响。教育机构必须过渡到在线学习，以便学生可以在自己的家中继续接受教育。没有坚实且安全的电子学习平台，在线学习将是不可能的。在本文中，我们将研究** Moodle开源**项目，该项目使教师和学生能够在任何地方进行交流和学习。
我们将在本文中介绍以下各节，以**使用Moodle创建电子学习网站**。
  * [先决条件] [1]
  * [什么是Moodle？] [2]
  * [Moodle的功能] [3]
  * [Moodle安装] [4]
  * [结论] [5]

## 先决条件{#prerequisites}
如果还没有，则必须在服务器上安装和配置LAMP环境。

## 什么是情绪？ {#什么}
[** moodle **] [6]是一种免费的开源电子学习解决方案。 Moodle代表模块化的面向对象的动态学习环境。它的创建是为了使教育者，管理员和学习者一个电子学习平台，以创建和提供个性化的学习环境。此外，Moodle是学校**，大学和公司专业培训课程的合适** LMS。它是创建LMS网站的流行**远程学习**解决方案之一。此外，Moodle为教师和学生提供丰富的工具和协作学习环境。 Moodle拥有一个用于iPhone，Android，Windows手机和平板电脑的移动应用程序。移动应用程序可从世界各地的任何位置使用。这个**自托的LMS **用PHP编写，并将数据存储在MySQL/PostgreSQL数据库中。它带有广泛的用户和开发人员文档。所有源代码均可在[** github **] [7]上获得。此开源的许可证**电子学习解决方案**是GPLV3+。

## Moodle的功能{#features}
Moodle具有许多功能。但是，在本文中，我们将介绍以下一些关键功能。
**协作工具和活动**：论坛，Wiki，词汇表，数​​据库活动和其他工具允许用户一起协作和学习。情绪课程中的一组元素称为一项活动。一项活动通常是学生与其他学生和/或老师互动的学生所做的事情。
**跟踪进度**：教育者和学生可以使用各种跟踪特定活动或材料以及课程级别的工具来跟踪他们的进度和完成。有几种方法可以跟踪学生在Moodle中的进步，例如成绩，能力，活动完成，课程完成，徽章，课程报告和分析。
**插件管理**：插件允许您通过添加新功能来扩展Moodle的基本功能。用户可以为各种任务添加插件，例如其他活动，新的测验问题类型，新报告，系统连接器等。管理接口可用于安装和禁用插件。
**课程管理**：创建和管理满足各种需求的课程。教师主导的课程，自定为课程，混合课程和完全在线课程都是选项。
**同行和自我评估**：研讨会和调查是内置的活动，鼓励学生查看，评分和审查自己和其他同学的工作。

## Moodle安装{#moodle}
请按照以下逐步指南在Ubuntu上安装Moodle LMS 18.04。
  *首先，运行下面的命令以更改DirectLory下载并下载Moodle。
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  *运行以下命令创建数据目录并设置权限。
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  *为Moodle网站创建Nginx配置文件。
```
sudo nano /etc/nginx/sites-available/moodle
```
  *将以下代码添加到其中并保存文件。
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  *创建符号链接以启用新创建的网站。
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  *重新启动NGINX Web服务器。
```
sudo systemctl restart nginx
```
  *接下来，打开浏览器并键入http://example.com。将“ example.com”替换为服务器的实际域名或IP。
  *现在，您可以看到安装向导。选择一种语言，然后单击下一个按钮。

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle-选择一种语言">}}

  *您需要查看并确保网站URL，MOODLE根目录和数据目录路径正确。您还可以更改“数据目录”路径，并且它应该超出Moodle代码目录以进行安全性。单击下一个按钮。

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle-设置数据目录路径">}}

  *在此步骤中选择数据库驱动程序。但是，您可以使用已选择的一个，然后单击下一个按钮。

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle-选择数据库驱动程序">}}

  *提供数据库设置，例如数据库主机，数据库名称，数据库用户，数据库密码和表格前缀。单击下一个按钮。

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle-数据库设置">}}

  *单击确认按钮以同意条款和条件。
  *您可以看到所需的PHP扩展名列表。但是，您将必须安装任何缺少的附加组件。单击继续按钮以移动下一步。
  *此时，您需要填写管理员数据以创建一个帐户。单击“更新配置文件”按钮。
  *提供网站的信息，例如完整的站点名称，网站的简短名称，前页面摘要，默认时区和无需发送电子邮件。单击“保存更改”按钮。
  *通过提供网站名称，语言，区域，电子邮件地址等信息来完成您的网站注册。

## 结论{#conclusion}
我们了解了Moodle及其在本文中的主要特征。我们还逐步介绍了设置** Moodle lms **的分步方法，以**创建电子学习网站**。您可以回顾Moodle的[**官方文档**] [8]，以更加满意各种功能，例如课程，学生注册，跟踪进度等。希望您发现这篇文章在创建LMS网站上很有用。
最后，[** containerize.com **] [9]正处于撰写有关更多最新开源产品的博客文章的一致过程。因此，与此[**学习管理系统**] [10]类别保持联系，以进行最新更新。

## 探索
您可能会发现以下链接相关：
  *[**开源LMS工具**] [11]
  *[** Moodle  - 电子学习系统**] [12]
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
