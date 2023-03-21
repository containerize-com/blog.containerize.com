---
title: "如何在Ubuntu上安裝PYDIO文件共享和同步平台" 
seoTitle: "如何在Ubuntu上安裝PYDIO文件共享和同步平台" 
description: "Pydio是一個開源文件共享和自託管協作文檔共享軟件。讓我們查看如何安裝PYDIO文件共享和同步工具。" 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio是一個基於雲的文件共享和同步平台，可在任何設備和任何設備上訪問所有數據。本教程是關於如何在Ubuntu上安裝Pydio的。" 
url: /zh-hant/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio是一個基於雲的文件共享和同步平台，可在任何設備和任何設備上訪問所有數據。本教程是關於如何在Ubuntu上安裝Pydio的。

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="如何在Ubuntu上安裝PYDIO文件共享和同步平台">}}


##**概述**
Pydio單元格是一種開源文件共享和同步軟件。它提供了對所有數據存儲的單個訪問點，它是OwnCloud和NextCloud的替代方案，可提供存儲服務，文件共享和同步。 Pydio是類似於Dropbox和其他存儲平台的企業開源文件共享平台。它可以幫助您在一個平台上安全地連接所有文件和設備。
Pydio單元格是一個基於雲的文件同步和協作平台。該開源軟件在您的個人IT基礎架構上運行，並幫助您的員工保護和監視您的業務數據。您可以使用移動應用程序，桌面軟件或Web瀏覽器使用PYDIO單元格同步數據並從任何地方訪問它。 PYDIO單元格最佳文件共享應用程序基於微服務架構，並使用Golang編程語言編寫。
本教程將幫助您在Ubuntu LTS系統上安裝和配置PYDIO自託管文件共享軟件和同步平台。
  * 入門
  *安裝燈服務器
  *在Ubuntu上安裝pydio
  *創建PYDIO數據庫和用戶
  *在您的瀏覽器上訪問pydio
  * 結論

##步驟1：入門
在安裝之前，您需要確保系統正在運行最新的軟件包。使用下面的命令更新您的Ubuntu 20.04服務器。
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
更新後，始終建議重新啟動服務器以進行新的更改以生效。
```
sudo reboot
```

##步驟2：安裝燈服務器
要設置Pydio安全企業文件共享服務器以及如何創建開源私有云，我們首先需要設置運行燈服務器。如果您已經安裝並運行燈堆棧，請跳過此步驟，請使用以下命令在Ubuntu系統上設置燈。

###安裝php
您可以通過運行命令在Ubuntu或Debian系統上安裝PHP：
sudo apt-get安裝python-software-properties
sudo附加措施PPA：ondrej/php
sudo apt-get安裝-y php php-GD php-curl php-zip php-dom php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

###安裝apache2
Apache是​​使用最廣泛的開源Web服務器軟件。接下來，通過運行在Ubuntu上安裝Apache Web服務器：
sudo apt-get安裝-y apache2 libapache2-mod-php
{{_LINE_38_}}

###安裝mysql
MySQL開源關係數據庫管理系統是LAMP Web應用程序軟件堆棧等的組成部分。現在通過在下面運行在Ubuntu上安裝mySQL：
sudo apt-get安裝-y mysql-server php-mysql
{{_LINE_42_}}
安裝完成後，打開 **php.ini** 配置文件進行編輯。使用您首選的文件編輯器。
如下所示，對php.ini文件進行更改。打開兩個文件並進行更改，如圖所示
```
sudo vim /etc/php/7.4/apache2/php.ini
```
進行以下更改
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
保存並關閉文件，然後繼續編輯其他php.ini文件
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

##步驟3：在Ubuntu上安裝Pydio
首先，您需要將PYDIO最佳文件共享軟件存儲庫添加到Ubuntu 20.04服務器，因為它尚不可用。另外，為業務公鑰添加PYDIO最佳文件共享系統，然後繼續更新您的系統存儲庫。
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
現在是時候安裝PYDIO EFSS和文檔共享軟件了。如圖所示運行命令
```
sudo apt install -y pydio pydio-all
```
使用下面顯示的命令啟用Apache重寫模塊，然後重新啟動並啟用Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
確認Apache服務使用以下命令運行：
```
sudo systemctl status apache2
```
如果安裝正確完成，則應如圖所示，表明Apache2服務正在運行。

##步驟4：創建PYDIO數據庫和用戶
提取代碼後，現在創建一個MySQL數據庫和用戶帳戶，以配置Pydio。使用以下命令集登錄到MySQL Server來創建Ajaxplorer Shareync或Pydio數據庫和用戶。
mysql -u root -p
輸入密碼：
mysql>創建數據庫pydio;
mysql>在pydio上授予全部。
mysql>沖洗特權；
mysql>退出
{{_LINE_69_}}
接下來，我們需要從Web界面上安裝Ubuntu上的Pydio來創建一個私有云。

##步驟5：瀏覽器上的pydio訪問
打開瀏覽器並鍵入url _http：/// pydio_。您應該看到一個頁面，如圖所示
PYDIO私有云文件共享和業務文件共享軟件現已安裝和配置，現在該訪問其Web界面了。
打開瀏覽器並鍵入url http：// your -server -ip / pydio。您將被重定向到以下頁面：

{{< figure align=center src="images/Pydio-Installer.png" alt="Pydio安裝程序">}}

確認所有控件，然後單擊**繼續安裝pydio**按鈕。您應該看到以下頁面：

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Pydio設置嚮導">}}

選擇您的語言，然後單擊**開始嚮導**。您應該看到以下頁面：

{{< figure align=center src="images/Starting-the-setting.png" alt="啟動PYDIO設置">}}

輸入程序名稱並歡迎消息。然後單擊按鈕**下一個**。您應該看到以下頁面：

{{< figure align=center src="images/Enter-the-application-name.png" alt="輸入PYDIO應用程序">}}

接下來，輸入您的管理員帳戶，然後單擊**下一個**按鈕。您應該看到以下頁面：

{{< figure align=center src="images/MySQL-database-settings.png" alt="MySQL數據庫設置">}}

然後輸入您的數據庫詳細信息，例如數據庫名稱，用戶名和密碼。然後單擊**測試DB連接**按鈕。您應該看到以下頁面：

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="PYDIO高級選項">}}

接下來，單擊**安裝pydio**按鈕。一旦安裝成功完成。您將被重定向到以下頁面：

{{< figure align=center src="images/Pydio-Login.png" alt="Pydio登錄">}}

然後輸入管理員的用戶名和密碼。然後單擊[Enter]按鈕。您應該看到以下頁面：

是的！完成。現在，您知道如何在Ubuntu上完全安裝PYDIO自託管文件同步和開源文件共享軟件，以逐步構建類似於Dropbox或Google Drive的私有云。

##**結論：**   {#4a1a}
在本教程中，您已成功地在Ubuntu系統上成功安裝了Pydio單元格開源文件共享。您可以使用本文來創建用於存儲，保護和共享文件中的雲基礎架構中的雲基礎架構。使用PYDIO協作文檔共享和最佳免費文件共享應用程序，以獲得更多的數據控制，並確保在業務組織中有效協作。在即將到來的教程中，我們將討論開源雲存儲解決方案和文件共享協作工具的更多有趣主題。
_您可以加入我們的[Twitter][1]，[LinkedIn][2]和我們的[Facebook][3]頁面。您在線使用哪種基於雲的_開源_File共享平台？如果您有任何疑問，請_ [聯繫][4]。

## 探索：
我們還有其他幾篇與您的服務器日常管理有關的文章。
  * [如何將Apache配置為Ubuntu/Debian的反向代理][5]
  * [如何在Ubuntu上使用nginx安裝和保護PhpMyAdmin][6]
  * [安全和加密nginx與讓我們在Ubuntu上加密20.04][7]
  * [在Ubuntu/debian上配置http/2支持nginx][8]
  * [在AWS生產服務器上設置帶有乘客的設置NGINX][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
