---
title: "如何在Ubuntu上使用SSL安装Webmin 20.04" 
seoTitle: "如何在Ubuntu上使用SSL安装Webmin 20.04" 
description: "WebMin是一种基于Web的系统管理工具，用于类似于Unix的系统。在本文中，我们将学习如何在Ubuntu 20.04上使用SSL安装Webmin。" 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin是一种基于Web的系统管理工具，是命令行系统管理的简单替代方法。本文指导如何安装Webmin" 
url: /zh/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="如何安装Webmin">}}


## WebMin是一种基于Web的系统管理工具，是命令行系统管理的简单替代方法。本文指导如何安装Webmin
借助本文“如何在Ubuntu 20.04上使用SSL安装Webmin”，我们将在Web托管软件和工具上启动新的一系列教程。使用WebMin，您可以设置用户帐户，启用文件共享，配置Apache和DNS设置，并执行与Web托管有关的更多任务。它允许您管理整个Web托管服务器。它消除了手动编辑Linux配置文件的麻烦。因此，让我们学习如何使用SSL安装Webmin。
  *** [Webmin简介][1] **
  *[**突出显示功能**][2]
  *[**支持的操作系统**][3]
  *[**在Ubuntu上安装Webmin **][4]
  *[**使用webmin安装apache **][5]
  *[**结论**][6]

## Webmin简介{#intro}
Webmin是用于Linux系统管理的基于Web的接口。它可以帮助您从任何现代的Web浏览器远程管理自己的托管服务器。使用WebMin，您可以配置操作系统内部设备，例如用户帐户，Apache，DNS，文件共享等等。 Webmin还允许通过单个接口来控制许多机器，或在同一子网或LAN上的其他Webmin主机上无缝登录。基于Perl的Webmin作为自己的过程和Web服务器运行。关于Webmin的最好的部分是其100％的免费和开源，并拥有一个非常蓬勃发展的开发人员社区。

## 突出显示功能{#features}
  *允许您创建和编辑域，DNS记录，绑定选项和视图。
  *通过使用IPFW创建和编辑规则来帮助配置防火墙。
  *让您设置脚本以在启动时从/Etc/init.d或/etc/rc.local运行
  *您可以安排从服务器传输到多个服务器的文件传输
  *允许您从一个来源安装多个服务器上安装rpms，debian和solaris软件包
  *它提供了对带宽使用，上传，下载，访问者等报告的访问权限。
  *您可以创建计划的CRON作业，该作业同时在多个服务器上运行
  *让您一次在多个服务器上运行命令
  *允许您设置并编辑本地文件系统的用户或组磁盘配额
  *包括备份和还原文件系统，并恢复命令家族
  *使用类似于Windows的文件管理器，您可以在服务器上的文件和目录上查看，编辑和更改权限
  *您可以配置服务位置协议服务器
  *使用类似Windows的文件管理器查看系统和目录上的文件和目录的权限
  *它有助于将SSL隧道设置为使用INETD的Stunnel运行，以加密POP3和IMAP等服务。

## 支持的操作系统{#support}
由于不同的Unix式操作系统和Linux发行版在其各种配置文件中使用不同的位置，因此WebMin只能支持已配置的系统。以下操作系统由Webmin的1.979版支持：
  * Almalinux Linux
  * alphacore linux
  * Amazon Linux
  * aplinux
  * Asianux
  * Asianux服务器
  * BigBlock
  * BSDI
  * Caixa Magica
  * Caldera Openlinux
  * Caldera Openlinux Eserver
  * CAOS Linux
  * Cendio LBS Linux
  * Centos Linux
  * Citrix管理程序
  * Cloudlinux
  * Cloudrouter Linux
  *钴Linux
  *连贯的技术Linux
  * Conectiva Linux
  * Corel Linux
  * corvus latinux
  * cygwin
  *达尔文
  * Debian Linux
  * DEC/COMPAQ OSF/1
  * Devuan Linux
  *蜻蜓BSD
  * Endian防火墙Linux
  * Fedora Linux
  * freebsd
  *通用Linux
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * Linux薄荷
  * linuxppc
  * Lycoris桌面/LX
  * Mac OS X
  * Macos Catalina
  * MacOS High Sierra
  * Macos Mojave
  * Macos Sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * MEPIS Linux
  *大多数
  * MSC Linux
  * Neoshine Linux
  * netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * OpenNA Linux
  * Opensuse Linux滚筒滚草
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X
  * pardus linux
  * pclinuxos linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * RedHat Linux
  * RedHat Linux桌面
  *岩石Linux
  * Sangoma Linux
  * SCI Linux
  *科学Linux
  * SCO OPENSERVER
  * SCO Unixware
  *安全Linux
  * sgi irix
  * Slackware Linux
  * slamd64 linux
  * Smartos
  * SOL Linux
  * Springdale Linux
  * Startcom Linux
  * Sun Java桌面系统
  *太阳Solaris
  * Suse Linux
  * suse openExchange linux
  * SUSE SLES Linux
  * Synology DSM
  * TAO Linux
  * Tawie Server Linux
  * Thizlinux桌面
  * Thizserver
  * Tinysofa Linux
  * Trustix
  * Trustix SE
  * turbolinux
  * Ubuntu Linux
  * United Linux
  * ute linux
  * Virtuozzo Linux
  *白矮人Linux
  * WhiteBox Linux
  *风河Linux
  * Windows
  * X/OS Linux
  * Xandros Linux
  * XCP-NG Linux
  * Xenserver Linux
  *黄色狗Linux
  * Yoper Linux
目前最支持的系统是Solaris，Linux（尤其是RedHat）和FreeBSD。

## 在Ubuntu上安装WebMin {#install}
要安装WebMin，您需要与具有** root **特权的用户访问。建议您设置具有** sudo **访问权限的非根用户。
首先使用以下命令进入服务器中的SSH
```
ssh user@server_IP_address
```
要通过_APT-GEG_安装WebMin，必须首先将WebMin存储库添加到_sources.list_文件中。在您的服务器上，在您喜欢的文本编辑器中打开_sources.list_文件。我们将在本教程中使用VIM：
```
sudo vi /etc/apt/sources.list
```
打开文件后，在文件末尾添加以下行。
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
现在，将WebMin GPG密钥添加到APT中，因此您添加的源存储库将被信任。此命令将做到这一点：
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
在安装WebMin之前，您必须更新APT-GEG的软件包列表：
```
sudo apt-get update
```
现在，运行此APT-GET命令以安装Webmin：
```
sudo apt-get install webmin 
```
输入Y以确认安装。安装完成后，Webmin服务将自动启动。 Web界面将在端口10000上运行。您可以使用以下URL访问接口。
```
https://server_IP_address:10000
```
您将提示您警告说您的服务器的SSL证书不信任。这是因为WebMin在安装后会自动生成和安装SSL证书，并且该证书未由您的计算机信任的证书机构发行。可以继续进行。指示您的网络浏览器信任证书。
此时，您将看到Webmin登录屏幕：

{{< figure align=center src="images/webmin-login-screen.png" alt="安装Webmin">}}

当您首次登录Webmin时，您将被带到**系统信息**页面。它为您提供了系统资源和其他杂项信息的概述。

{{< figure align=center src="images/install-webmin-system-info.png" alt="安装Webmin系统信息">}}


## 使用webmin {#install-apache}安装apache}
Webmin配备了各种管理不同软件包的模块。使用Webmin安装Apache
**步骤1 **：在“导航”菜单中，单击**未使用的模块**以展开类别，然后单击** Apache Weberver **。
如果您在服务器上没有安装Apache，则该模块将通知您并为您提供安装Apache的方法。
**步骤2 **：使用**单击此处**链接（在最后一句话中）通过apt-get通过webmin安装apache。
Apache安装完成后，您的服务器将运行默认的Apache服务器。

## 结论{#conclusion}
本文简要讨论了Webmin可以做的许多事情，Webmin是管理Linux/Unix服务器的最佳工具之一。在本教程中，我们还学习了如何在Ubuntu上安装Webmin，我们还讨论了如何使用WebMin在服务器上安装Apache。

## 探索
  * [如何在Ubuntu上使用nginx安装多个PHP版本][7]
  * [如何设置和配置为反向代理][8]

  
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
