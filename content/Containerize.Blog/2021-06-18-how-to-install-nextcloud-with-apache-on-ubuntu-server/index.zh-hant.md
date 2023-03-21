---
title: "如何在Ubuntu Server上使用Apache安裝NextCloud" 
seoTitle: "如何在Ubuntu Server上使用Apache安裝NextCloud" 
description: "NextCloud是用PHP編寫的開源自託管雲存儲解決方案。本文將展示如何在Ubuntu上使用Apache安裝NextCloud。" 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud是自託管的開源文件同步和協作軟件。本教程將顯示如何在Ubuntu上使用Apache安裝NextCloud。" 
url: /zh-hant/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud是自託管的開源文件同步和協作軟件。本教程將顯示如何在Ubuntu上使用Apache安裝NextCloud。

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="如何在Ubuntn上使用Apache安裝NextCloud">}}


## **概述**
**[nextCloud][1]**是一種免費的安全**自託管雲存儲解決方案**用PHP編程語言編寫。它使用Web界面提供數據訪問，並且在功能上與Dropbox相似。專有云存儲解決方案（例如Dropbox和Google Drive）很方便，但可以用於收集個人數據，因為您的文件存儲在其係統上。如果您需要安全，安全和兼容的文件同步和共享解決方案，則可以切換到開源NextCloud服務器。 NextCloud設置可以安裝在您的私人家庭服務器或虛擬專用服務器上。
NextCloud開源提供**端到端加密**，意味著可以在上傳到服務器之前在客戶端設備上加密文件。它也可以與Collobora，BeansOffice NextCloud等在線辦公室套件集成在一起，因此您可以直接從NextCloud Client創建和編輯DOC，PPT，XLS文件。您可以在下載shexCloud客戶端下載後與NextCloud Server在計算機上共享並同步一個或多個文件和文件夾。 NextCloud Desktop下載和移動客戶端提供選項，可以在您控制下的所有設備上進行同步和共享。將數據文件放入您的本地共享目錄中，這些文件立即使用NextCloud桌面同步客戶端，iOS應用程序或Android設備同步到服務器和其他設備。
本教程將幫助您在帶有Apache的Ubuntu 20.04 LTS Linux操作系統上安裝NextCloud。
  ***安裝先決條件（燈泡）**
  ***下載ubuntu上的nextcloud存檔**
  ***創建MySQL數據庫**
  ***運行NextCloud Web安裝程序**
  * **包起來**

## 步驟1：安裝先決條件（燈泡）
在Ubuntu上安裝NextCloud的第一件事是，您必須在Ubuntu LTS系統上運行**燈服務器**。登錄您的系統並訪問終端窗口。如果您已經運行**燈泡**跳過此步驟，則使用以下命令安裝必要的依賴項。

###安裝php
讓我們從Ubuntu服務器上的PHP版本5.6或更高版本開始：
sudo apt-get更新
sudo apt-get安裝-y php php-GD php-curl php-zip php-xml php-mbstring
您可以使用以下命令來驗證PHP版本：
php -v
{{_LINE_29_}}

###安裝apache2
接下來，使用命令安裝Apache：
sudo apt-get安裝-y apache2 libapache2-mod-php
sudo systemctl restart apache2
{{_LINE_34_}}

###安裝mysql
隨著依賴關係的範圍，要處理的下一步是確保MySQL數據庫服務器。通過運行：
sudo apt-get安裝-y mysql-server php-mysql
{{_LINE_38_}}

## 步驟2：在Ubuntu上下載NextCloud存檔
在撰寫本文時，NextCloud最新版本為22.0.0beta5。成功配置了系統上的LAMP服務器後，讓我們從其[官方網站][2]中下載NextCloud。
CD /TMP
WGET https://download.nextcloud.com/server/releases/nextcloud-22.0.0.0beta5.zip
{{_LINE_43_}}
NextCloud Server下載完成後，請在網站文檔root下提取下載的存檔，並在文件和目錄上設置www-data的NextCloud目錄的所有權。
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data：www-data nextcloud
sudo chmod -r 755 NextCloud
{{_LINE_49_}}
現在，刪除下載的存檔文件。
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## 步驟3：創建MySQL數據庫
提取源代碼後，讓我們創建一個用於配置NextCloud的NextCloud MySQL數據庫和用戶帳戶。使用以下命令集登錄到MySQL Server，創建NextCloud數據庫，用戶並從MySQL控制台退出。
mysql -u root -p
輸入密碼：
mysql>創建數據庫NextCloud;
mysql>在NextCloud上授予所有授予。
mysql>沖洗特權；
mysql>退出
{{_LINE_61_}}

## 步驟4：運行NextCloud Web安裝程序
此時，NextCloud已成功安裝Ubuntu 20.04並配置。現在，在下面的Web瀏覽器中打開NextCloud配置目錄，然後輸入URL http://your-domain.com。將本地主機更改為您的服務器IP地址或域名。您將看到以下屏幕：
http：// localhost/nextcloud/或http：// your_domain_name/nextCloud/
{{_LINE_65_}}
輸入新的管理憑據來創建管理員帳戶並提供數據文件夾的位置。
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="如何在Ubuntu Linux服務器上使用Apache安裝NextCloud">}}

{{_LINE_69_}}
現在，向下滑動頁面並輸入數據庫名稱，數據庫用戶名，密碼，然後單擊**完成設置**按鈕。
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="如何使用Apache安裝NextCloud Ubuntu 20.04">}}

{{_LINE_73_}}
安裝完成後，您應該在下面的屏幕上看到NextCloud Admin儀表板。在這裡，您可以創建一個用戶，組，分配權限等。
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="使用Apache在Ubuntu上安裝NextCloud">}}

{{_LINE_77_}}
恭喜，您在Ubuntu LTS系統上有一個可行的NextCloud本地雲解決方案。現在，您可以開始自定義雲服務器，以完美滿足您的需求。

## **總結：**   {#4a1a}
恭喜！您已經成功地**使用Apache **在Ubuntu Server上配置並安裝了NextCloud。您已經學會瞭如何創建私有云。 NextCloud Ubuntu Server是一個了不起的雲存儲協作平台，幾乎可以滿足任何人的私人或混合雲存儲需求。現在，您知道如何在Ubuntu上安裝NextCloud，並且您的數據在自託管雲中安全可靠。在即將到來的教程中，我們將討論與Web服務器解決方案堆棧有關的更多有趣的主題。
_您喜歡什麼基於雲的自託管存儲解決方案？如果您有任何疑問，請[聯繫][3] ._

## 探索：
您可能喜歡遵循與服務器日常管理有關的文章。
  * [如何在Ubuntu上使用Apache安裝和配置OllCloud][4]
  * [如何將Apache配置為Ubuntu或Debian的反向代理][5]
  * [在Ubuntu上使用Nginx安裝並保護PhpMyAdmin][6]
  * [安全和加密nginx與讓我們在Ubuntu上加密20.04][7]
  * [在Ubuntu/debian上配置http/2支持nginx][8]
  * [在AWS生產服務器上設置帶有乘客的設置NGINX][9]

  
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
