---
title: "如何在Windows上安装和配置WAMP服务器" 
seoTitle: "如何在Windows上安装和配置WAMP服务器" 
description: "在Windows上安装WampServer，并快速开始开发基于PHP的Web应用程序。 WAMP服务器可用于Windows 32和64位。" 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "设置用于使用Apache2，PHP和MySQL创建Web应用程序的Web开发环境。本文可帮助您在Windows上安装WAMP服务器。" 
url: /zh/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## 设置用于使用Apache2，PHP和MySQL创建Web应用程序的Web开发环境。本文可帮助您在Windows上安装WAMP服务器。

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="WAMP服务器">}}

每个开发人员在编写程序之前必须在计算机上安装所需的软件。在早期，开发人员必须单独安装每个软件，然后将它们配置为一起工作。 ** WampServer **和其他Web解决方案堆栈软件现在可用，将所有必要的软件捆绑到一个软件包中。您只需要安装一个软件包即可启动开发环境。
在此博客文章中，我们将介绍以下各节。
  *[**什么是Wampserver？**] [1]
  *[** WAMP安装**] [2]
  *[** WAMP配置**] [3]
  *[**访问phpmyadmin **] [4]

## 什么是Wampserver？ {#什么}
WampServer是一个免费的解决方案堆栈，用于为基于PHP的应用程序设置Web开发环境。 Wamp代表（W  -  Windows，A  -  Apache，M  -  mysql和P  -  PHP）。此外，它还带有PHPMyAdmin和Adminer，用于管理数据库。 Wamp是流行的工具之一，您可以快速设置它。此外，您可以从控制面板配置WAMP服务器。它提供了一个完整的Web开发环境，用于创建和测试应用程序。 WampServer由您可以根据需要在安装过程中选择的几个组件组成。 Wampserver带有多种版本的PHP。您可以根据项目要求轻松更改PHP版本。另外，您可以从Wampserver控制面板更改DBMS（数据库管理系统）。

## Wamp安装{#installation}
请按照以下分步指南在Windows上安装Wamp服务器。
  ***从官方网站下载Wampserver **

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *根据您的操作系统，选择一个** Wampserver 32位**或** Wampserver 64位**安装程序的版本。
  *找到** wamp下载**文件，然后双击它以运行安装过程。
  *选择语言，然后按确定按钮。
  *选择我接受协议复选框，然后单击下一个按钮。
  *阅读有关Wampserver安装的重要信息，然后单击下一个按钮继续进行。
  *选择要安装Wamp服务器的文件夹，然后单击“下一个”按钮。
  *您必须选择要安装的组件，如下面的屏幕截图所示。您可以在开发过程中选择所有PHP版本和切换。另外，您可以同时安装MySQL和Mariadb。

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  *选择WampServer的快捷方式，然后单击“下一个”按钮。
  *单击“安装”按钮安装WampServer。
  *现在，选择WAMP服务器的默认浏览器和默认文本编辑器。
  *您的安装完成。单击“完成”按钮以退出WAMP服务器安装向导。
  *打开浏览器并键入Localhost以访问它。您将看到下面的页面。

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Wamp Configuration {#configuration}
现在，我们将研究一些配置，可以在Web应用程序的开发和测试中为您提供帮助。现在，您可以通过双击桌面上的快捷方式Wampserver图标来启动Wampserver。
  ***服务**  - 您可以通过在Wampserver图标上左键单击左键单击启动，停止和重新启动所有服务的选项。
  ***更改数据库**  - 在WAMP图标上右键单击以打开“工具”对话框。选择工具，然后单击“默认DBMS MARIADB MYSQL”。 WAMP服务器将自动重新启动，您可以通过在浏览器中打开Localhost来查看默认数据库。
  ***更改PHP版本**  - 在Wamp图标上右键单击以打开“工具”对话框。选择工具并更改PHP CLI版本，然后单击所需的PHP版本。
  ***虚拟主机**  - 您可以通过Wampserver的Web接口轻松添加虚拟主机。在浏览器中打开Localhost，然后单击“工具”部分下的“添加虚拟主机”。输入“ dev.example.com之类的虚拟主机的名称”，然后输入项目的绝对路径。单击“启动“虚拟Host的创建”按钮。重新启动Apache服务器以加载新创建的虚拟主机。
  ***更改Apache端口**  - 默认情况下，Apache Web服务器在端口80上运行。如果要使用其他端口作为Apache，则可以从Wampserver控制面板中进行操作。右键单击WAMP图标以打开“工具”对话框。选择工具，然后单击“使用80以外的端口”。在对话框中输入新端口号，然后单击“确定”按钮。
  ***更改DBMS端口**  - 默认情况下，数据库服务器在端口3306上运行。如果要为数据库服务器使用其他端口，则可以从Wampserver控制面板中进行操作。右键单击WAMP图标以打开“工具”对话框。选择工具，然后单击“使用3306以外的端口”。在对话框中输入新端口号，然后单击“确定”按钮。
  ***空日志**  -  Wamserver提供了从控制面板清除日志的功能。您可以空白日志，例如PHP错误日志，Apache错误日志，Apache Access Log，MySQL日志和MariaDB日志。即使您也可以一次清除所有日志。右键单击WAMP图标以打开“工具”对话框。选择工具并选择“空日志”，您将找到删除日志的所有选项。
  ***更改语言**  - 您可以为Wampserver控制面板进行语言。右键单击WAMP图标以打开“工具”对话框。选择语言，然后单击所需的语言。您将在新选择的语言中看到控制面板。

## 访问phpmyadmin {#phpmyadmin}
您可以通过在浏览器中打开Localhost，然后单击Wampserver欢迎页面上的PhpMyAdmin链接来访问** phpMyAdmin **来管理数据库。另外，您可以访问http：// localhost/phpmyadmin URL访问它。

## 结论
我们已经讨论了Wampserver，并涵盖了完整的分步指南，以**安装Wampserver **在Windows上。您可以通过遵循本教程并立即开始编码来轻松安装和配置** wampserver **。您可以访问Explore部分下的链接，以获取有关解决方案堆栈软件的更多选项。
最后，[** containerize.com **] [5]正在始终如一地编写有关更多最新开源产品的博客文章。因此，与此[** Web服务器解决方案堆栈**] [6]类别保持联系以进行最新更新。

## 探索
您可能会发现以下链接相关：
  *[**最佳开源Web服务器解决方案堆栈选项**] [7]
  *[**设置XAMPP和PHPMYADMIN作为Windows上的Localhost **] [8]
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
