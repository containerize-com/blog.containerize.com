---
title: "如何在Ubuntu上使用SSL安裝Webmin 20.04" 
seoTitle: "如何在Ubuntu上使用SSL安裝Webmin 20.04" 
description: "WebMin是一種基於Web的系統管理工具，用於類似於Unix的系統。在本文中，我們將學習如何在Ubuntu 20.04上使用SSL安裝Webmin。" 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin是一種基於Web的系統管理工具，是命令行系統管理的簡單替代方法。本文指導如何安裝Webmin" 
url: /zh-hant/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="如何安裝Webmin">}}


## WebMin是一種基於Web的系統管理工具，是命令行系統管理的簡單替代方法。本文指導如何安裝Webmin
借助本文“如何在Ubuntu 20.04上使用SSL安裝Webmin”，我們將在Web託管軟件和工具上啟動新的一系列教程。使用WebMin，您可以設置用戶帳戶，啟用文件共享，配置Apache和DNS設置，並執行與Web託管有關的更多任務。它允許您管理整個Web託管服務器。它消除了手動編輯Linux配置文件的麻煩。因此，讓我們學習如何使用SSL安裝Webmin。
  * **[Webmin簡介][1]**
  *[**突出顯示功能**][2]
  *[**支持的操作系統**][3]
  *[**在Ubuntu上安裝Webmin**][4]
  *[**使用webmin安裝apache**][5]
  *[**結論**][6]

## Webmin簡介 {#intro}
Webmin是用於Linux系統管理的基於Web的接口。它可以幫助您從任何現代的Web瀏覽器遠程管理自己的託管服務器。使用WebMin，您可以配置操作系統內部設備，例如用戶帳戶，Apache，DNS，文件共享等等。 Webmin還允許通過單個接口來控制許多機器，或在同一子網或LAN上的其他Webmin主機上無縫登錄。基於Perl的Webmin作為自己的過程和Web服務器運行。關於Webmin的最好的部分是其100％的免費和開源，並擁有一個非常蓬勃發展的開發人員社區。

##突出顯示功能 {#features}
  *允許您創建和編輯域，DNS記錄，綁定選項和視圖。
  *通過使用IPFW創建和編輯規則來幫助配置防火牆。
  *讓您設置腳本以在啟動時從/Etc/init.d或/etc/rc.local運行
  *您可以安排從服務器傳輸到多個服務器的文件傳輸
  *允許您從一個來源安裝多個服務器上安裝rpms，debian和solaris軟件包
  *它提供了對帶寬使用，上傳，下載，訪問者等報告的訪問權限。
  *您可以創建計劃的CRON作業，該作業同時在多個服務器上運行
  *讓您一次在多個服務器上運行命令
  *允許您設置並編輯本地文件系統的用戶或組磁盤配額
  *包括備份和還原文件系統，並恢復命令家族
  *使用類似於Windows的文件管理器，您可以在服務器上的文件和目錄上查看，編輯和更改權限
  *您可以配置服務位置協議服務器
  *使用類似Windows的文件管理器查看系統和目錄上的文件和目錄的權限
  *它有助於將SSL隧道設置為使用INETD的Stunnel運行，以加密POP3和IMAP等服務。

##支持的操作系統 {#support}
由於不同的UNIX式操作系統和Linux發行版在其各種配置文件中使用不同的位置，因此WebMin只能支持已配置的系統。以下操作系統由Webmin的1.979版支持：
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * aplinux
  * Asianux
  * Asianux服務器
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
  *鈷Linux
  *連貫的技術Linux
  * Conectiva Linux
  * Corel Linux
  * corvus latinux
  * cygwin
  *達爾文
  * Debian Linux
  * DEC/COMPAQ OSF/1
  * Devuan Linux
  *蜻蜓BSD
  * Endian防火牆Linux
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
  *大多數
  * MSC Linux
  * Neoshine Linux
  * netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * OpenNA Linux
  * Opensuse Linux滾筒滾草
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
  *科學Linux
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
  * Sun Java桌面系統
  *太陽Solaris
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
  *風河Linux
  * Windows
  * X/OS Linux
  * Xandros Linux
  * XCP-NG Linux
  * Xenserver Linux
  *黃色狗Linux
  * Yoper Linux
目前最支持的系統是Solaris，Linux（尤其是RedHat）和FreeBSD。

##在Ubuntu上安裝WebMin   {#install}
要安裝WebMin，您需要與具有**root **特權的用戶訪問。建議您設置具有**  sudo**訪問權限的非根用戶。
首先使用以下命令進入服務器中的SSH
```
ssh user@server_IP_address
```
要通過_APT-GEG_安裝WebMin，必須首先將WebMin存儲庫添加到_sources.list_文件中。在您的服務器上，在您喜歡的文本編輯器中打開_sources.list_文件。我們將在本教程中使用VIM：
```
sudo vi /etc/apt/sources.list
```
打開文件後，在文件末尾添加以下行。
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
現在，將WebMin GPG密鑰添加到APT中，因此您添加的源存儲庫將被信任。此命令將做到這一點：
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
在安裝WebMin之前，您必須更新APT-GEG的軟件包列表：
```
sudo apt-get update
```
現在，運行此APT-GET命令以安裝Webmin：
```
sudo apt-get install webmin 
```
輸入Y以確認安裝。安裝完成後，Webmin服務將自動啟動。 Web界面將在端口10000上運行。您可以使用以下URL訪問接口。
```
https://server_IP_address:10000
```
您將提示您警告說您的服務器的SSL證書不信任。這是因為WebMin在安裝後會自動生成和安裝SSL證書，並且該證書未由您的計算機信任的證書機構發行。可以繼續進行。指示您的網絡瀏覽器信任證書。
此時，您將看到Webmin登錄屏幕：

{{< figure align=center src="images/webmin-login-screen.png" alt="安裝Webmin">}}

當您首次登錄Webmin時，您將被帶到**系統信息**頁面。它為您提供了系統資源和其他雜項信息的概述。

{{< figure align=center src="images/install-webmin-system-info.png" alt="安裝Webmin系統信息">}}


##使用webmin   {#install-apache}安裝apache}
Webmin配備了各種管理不同軟件包的模塊。使用Webmin安裝Apache
**步驟1 **：在“導航”菜單中，單擊**未使用的模塊**以展開類別，然後單擊 **Apache Weberver** 。
如果您在服務器上沒有安裝Apache，則該模塊將通知您並為您提供安裝Apache的方法。
**步驟2**：使用**單擊此處**鏈接（在最後一句話中）通過apt-get通過webmin安裝apache。
Apache安裝完成後，您的服務器將運行默認的Apache服務器。

##結論 {#conclusion}
本文簡要討論了Webmin可以做的許多事情，Webmin是管理Linux/Unix服務器的最佳工具之一。在本教程中，我們還學習瞭如何在Ubuntu上安裝Webmin，我們還討論瞭如何使用WebMin在服務器上安裝Apache。

## 探索
  * [如何在Ubuntu上使用nginx安裝多個PHP版本][7]
  * [如何設置和配置為反向代理][8]

  
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
