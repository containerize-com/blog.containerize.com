---
title: "使用XAMPP'在Localhost上创建您的第一个PHP项目" 
seoTitle: "使用XAMPP在Localhost上创建您的第一个PHP项目" 
description: "使用免费和开源Web Server XAMPP设置Web开发环境。通过遵循一些简单的步骤来创建和测试Localhost上的PHP项目。" 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "使用免费和开源XAMPP服务器设置Web开发环境。通过遵循一些简单的步骤，在Localhost上学习，创建和测试您的PHP项目。" 
url: /zh/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## 使用免费和开源XAMPP服务器设置Web开发环境。通过遵循一些简单的步骤，在Localhost上学习，创建和测试您的PHP项目。

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="使用XAMPP开源Web服务器创建您的第一个PHP项目">}}

XAMPP是一家开源Web服务器，在将其部署在实时服务器上之前，它提供了一个本地环境来创建，运行和测试PHP项目。它为开发人员提供了一台本地服务器来测试和构建Web应用程序。我们将在此博客文章中介绍以下各节：
  * [要求][2]
  * [什么是xampp][3]
  * [创建PHP脚本][4]
  * [运行和测试PHP脚本][5]
  * [结论][6]

## 要求 {#requirements}

  * XAMPP安装
* 代码编辑器应用程序
* 基本的PHP知识
* 基本的HTML和JavaScript知识

## 什么是Xampp？ {#xampp}

XAMPP是开源Web服务器解决方案堆栈。它包含Apache，MySQL，Mariadb，PHP和Perl。它非常容易安装和使用。这就是为什么它是最受欢迎的PHP开发环境。 XAMPP服务器为PHP Web应用程序开发提供了一个完整的环境。如果您还没有XAMPP工作安装，请按照本指南安装XAMPP：
[设置XAMPP和PHPMYADMIN作为Windows上的Localhost][7]

## 创建PHP脚本 {#php}

* 假设您已经按照上述教程安装了XAMPP，现在让我们创建一个简单的PHP脚本并在XAMPP上进行测试。
* 首先打开您的编辑器。如果您没有编程编辑器，只需打开记事本即可。
* 输入以下代码
```
<?php
echo "This is my first PHP project";
?>
```
* 单击右上角的“文件”。
* 点击“保存为”按钮。
* 输入具有扩展名的“ .php”的名称。
* 对于“另存为类型”，请选择“所有文件（\*。\*）”选项。
* 最后点击“保存”按钮。

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="使用XAMPP开源Web服务器创建您的第一个PHP项目">}}


## 运行和测试PHP脚本 {#test}

* 将此PHP脚本复制到XAMPP安装内的HTDOCS文件夹。大多数HTDOCS文件夹位于这里：C：\ XAMPP \ htdocs
* 打开浏览器。
* 转到localhost/my \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="使用XAMPP开源Web服务器创建您的第一个PHP项目">}}

恭喜！您刚刚创建了第一个PHP项目。

## 结论 {#conclusion}

对于初学者来说，创建第一个Web项目总是非常令人兴奋。当您设计第一个动态脚本，运行并查看在浏览器上工作时，感觉很棒。我希望本简单的指南能够通过XAMPP开源Web服务器来帮助您创建和运行第一个PHP项目。

## 探索
要了解有关XAMPP和PHPMYADMIN的更多信息，请结帐以下指南：
[设置XAMPP和PHPMYADMIN作为Windows上的Localhost][7]
[PHP和PERL开发人员的免费Web服务器解决方案堆栈][1]



[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
