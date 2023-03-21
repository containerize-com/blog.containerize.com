---
title: "如何在Ubuntu上使用Apache安裝和配置OllCloud" 
seoTitle: "如何在Ubuntu上使用Apache安裝和配置OllCloud" 
description: "OwnCloud是用於創建文件託管服務的開源客戶端服務器軟件。在本教程中，我們將學習如何在ubuntu上安裝和配置owncloud" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "OwnCloud是用於創建文件託管服務器的客戶端服務器軟件的開源集合。本教程是關於如何在Ubuntu上配置owncloud的。" 
url: /zh-hant/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## OwnCloud是一個開源的客戶端服務器軟件集合，用於創建文件託管服務器。本教程是關於如何在Ubuntu上配置owncloud的。

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **概述**
OwnCloud是免費且流行的開源企業Web應用程序，該應用程序用PHP編寫，用於數據同步和文件共享。它還使您可以輕鬆地管理數據文件，聯繫人，日曆，進行列表等等​​。它是最受歡迎的雲平台的絕佳選擇，例如Google Drive，Dropbox，iCloud和其他雲存儲服務。但是，與其他雲存儲服務不同，OwnCloud自託管可以免費創建自己的主機雲。
OwnCloud是一種開源的私有云軟件，可使用Web界面提供數據訪問來創建私有云。它使您可以創建自己的文件共享服務器，在其中您可以輕鬆查看和同步日曆事件，檔案，圖片，錄音，任務，帶有書籤的地址，類似於Dropbox和Google Drive。它還提供了在您控制下的所有設備上同步和共享數據的選項。安裝和配置OwnCloud支持您的數據同步桌面客戶端以及移動應用程序設備。此外，您可以使用ubuntu上的owncloud輕鬆地實現對每個用戶文件的用戶訪問限制。 OwnCloud開源個人存儲服務器是一個跨平台應用程序，可以安裝在所有流行的操作系統上。
本教程將幫助您在Ubuntu LTS系統上設置OwnCloud和配置OwnCloud。
  *安裝燈服務器
  *下載ownCloud
  *創建MySQL數據庫和用戶
  *安裝ownCloud
  * OwnCloud的最佳選擇是什麼？
  * 結論

## 步驟1：安裝燈服務器
要設置自己的雲服務器以及如何創建私有云，我們首先需要設置運行燈服務器。如果您已經安裝並運行燈堆棧，請跳過此步驟，請使用以下命令在Ubuntu系統上設置燈。

###安裝php
您可以通過運行命令在Ubuntu或Debian系統上安裝PHP 5.6或更高版本：
sudo apt-get安裝python-software-properties
sudo附加措施PPA：ondrej/php
sudo apt-get更新
sudo apt -get升級-y
sudo apt-get安裝-y php php-GD php-curl php-zip php-dom php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

###安裝apache2
Apache是​​使用最廣泛的開源Web服務器軟件。接下來，在Ubuntu上安裝Apache Web服務器，以通過運行來設置自己的雲服務器：
sudo apt-get安裝-y apache2 libapache2-mod-php
{{_LINE_35_}}

###安裝mysql
MySQL開源關係數據庫管理系統是LAMP Web應用程序軟件堆棧等的組成部分。現在通過在下面運行在Ubuntu上安裝mySQL：
sudo apt-get安裝-y mysql-server php-mysql
{{_LINE_39_}}

## 步驟2：在ubuntu上下載owncloud
在Ubuntu系統上成功配置LAMP服務器後，讓我們從其[官方網站][1]下載最新的OllCloud私有云存儲解決方案。
CD /TMP
WGET https://download.owncloud.org/community/owncloud-10.4.0.4.0.tar.bz2
{{_LINE_44_}}
下載OwnCloud Server軟件已完成後，現在通過在Ubuntu上安裝ownCloud來提取網站文檔root下載的存檔，並在文件和目錄上設置適當的權限。
CD/var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data：www-data owncloud
sudo chmod -r 755 owncloud
{{_LINE_50_}}
現在，刪除存檔文件並重新啟動Apache服務器。
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl restart apache2

## 步驟3：創建OwnCloud數據庫和用戶
提取代碼後，現在創建一個MySQL數據庫和用戶帳戶，以配置OwnCloud個人云存儲服務器。使用以下命令集登錄到MySQL Server來創建OwnCloud數據庫和用戶。
mysql -u root -p
輸入密碼：
mysql>創建數據庫owncloud;
mysql>在ownCloud上授予全部。
mysql>沖洗特權；
mysql>退出
{{_LINE_62_}}
接下來，我們需要從Web界面上安裝Ubuntu上的OllCloud來創建一個私有云。

## 步驟4：在ubuntu上安裝owncloud
現在，訪問Web瀏覽器上的最佳個人Cloud Server Web面板目錄。將本地主機更改為您的服務器IP地址或域名。
http：// localhost/owncloud/
{{_LINE_67_}}
您應該查看開源OllCloud登錄頁面。輸入新的管理用戶名和密碼憑據以創建管理帳戶並提供數據文件夾的位置。如果一切正常，那麼您就應該獲得這樣的網頁。
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="在ubuntu上安裝apache">}}

{{_LINE_71_}}
現在向下滑動頁面。在下面的形式中，您需要將用戶名和密碼輸入到管理器最佳個人云服務器ownCloud面板。還提供數據庫以及用戶名和密碼，以將OwnCloud Server與數據庫服務器，數據文件夾的位置連接，然後單擊**完成設置**。
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="在ubuntu上配置owncloud">}}

{{_LINE_75_}}
完成設置後，您將獲得管理儀表板。您可以在哪裡創建用戶，組並分配權限，等等。
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="安裝ownCloud儀表板">}}

{{_LINE_79_}}
是的！我們使用OwnCloud安裝指南來構建個人云存儲。現在，您知道如何在Ubuntu上完全安裝owncloud，以逐步構建類似於Dropbox或Google Drive的私有云。

## **owncloud的最佳替代方案是什麼？** {#4a1a}
以下是自託管的ownCloud替代方案和競爭對手文件託管軟件。
  ***Seafile** 是開源跨平台文件託管軟件系統
  ***NextCloud** 是免費的，開源雲存儲平台
  ***resilio Sync** 是開源對等文件同步應用程序
  * **Pydio單元** 是開源文件共享和同步軟件
  ***同步**是免費的，開源對等文件同步應用程序

## **結論：**   {#Block-DD1258F4-E0C5-4AC9-BE18-7DD2A700F09E}
恭喜！您已經成功安裝和配置了OwnCloud，以使用Ubuntu Machine上的Apache構建自己的私有云。現在，您的數據永遠不會掌握在第三方手中，並且可以在虛擬的私有云Ollcloud Ubuntu Server存儲中私下管理。由於數據隱私的許多問題，許多公司選擇使用許多重要信息來創建自己的雲服務器。在即將到來的教程中，我們將討論Web服務器解決方案堆棧的更多有趣主題。
_您可以在[Twitter][2]，[LinkedIn][3]和我們的[Facebook][4]頁面上加入我們。您在線使用哪種基於雲的存儲解決方案？如果您有任何疑問，請_ [聯繫][5]。

## 探索：
我們還有其他幾篇與您的服務器日常管理有關的文章。
  * [如何將Apache配置為Ubuntu/Debian的反向代理][6]
  * [如何在Ubuntu上使用nginx安裝和保護PhpMyAdmin][7]
  * [安全和加密nginx與讓我們在Ubuntu上加密20.04][8]
  * [在Ubuntu/debian上配置http/2支持nginx][9]
  * [在AWS生產服務器上使用乘客的設置Nginx][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
