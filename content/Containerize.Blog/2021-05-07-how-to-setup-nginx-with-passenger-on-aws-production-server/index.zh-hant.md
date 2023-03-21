---
title: "如何在AWS生產服務器上使用乘客設置NGINX" 
seoTitle: "如何在AWS生產服務器上使用乘客設置NGINX" 
description: "這篇博客文章描述了通過APT方法安裝Nginx，並通過Ubuntu 20.04 LTS操作系統安裝NGINX。" 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "這篇博客文章介紹了通過APT方法安裝乘客在Ubuntu 20.04 LTS操作系統中安裝NGINX的步驟。" 
url: /zh-hant/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

##此博客文章介紹了通過APT方法安裝Nginx，並通過Ubuntu 20.04 LTS操作系統安裝NGINX的步驟。

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="帶有AWS生產服務器上乘客的設置NGINX">}}


## **概述**：
您需要在AWS Production **服務器上安裝和配置** nginx在生產服務器上部署應用程序之前。
**開源Phusion乘客**提供了許多自定義和功能選項。乘客一些功能用於改善應用程序的性能特徵。一些自定義影響應用程序或連接處理行為等。需要在Nginx中設置兩個乘客的配置選項，稱為乘客\ _Enabled和乘客\ _Root。此安裝過程將自動設置這兩個選項。
在此博客文章中，我們將介紹在 **apt方法** 的Ubuntu操作系統上安裝Web應用程序服務器的一些基本配置步驟。在閱讀和以下指南之後，您將能夠部署和管理用Node.js，Python和Ruby編寫的Web應用程序。
  ***什麼是nginx和乘客？**
  ***安裝nginx和乘客軟件包**
  ***啟用乘客nginx模塊並重新啟動nginx **
  ***驗證安裝**
  ***系統和乘客更新**
  ***最好的開源網絡服務器**
  * **結論**

## 1.什麼是nginx和乘客？   {#step-4： -  update-regularly}
**[什麼是nginx服務器？和SMTP。它是高度可擴展的，設計為最大的性能和穩定性。 NGINX是高性能異步，非線程和事件驅動的Web服務器，可同時處理多個客戶端請求。它是由Igor Sysoev撰寫的，2004年以2條規定BSD許可的條款發布。 ** nginx的執行速度比Apache快2.5倍，並且根據基準測試而消耗的內存更少。
**[什麼是乘客？][2] **Phusion乘客也稱為mod \ _rails和mod \ _rack，是免費的Web服務器和開源Web Application Server。它被設計為與Apache和Nginx集成的快速，健壯，功能豐富和輕量級。它還提高了應用程序的安全性，可靠性和可擴展性。它允許管理員深入了解Web應用程序操作，服務器性能。乘客應用程序服務器可以輕鬆運行並自動管理您的Web應用程序。它還可以** 服務多個應用程序**同時是多租戶和獨立的。它可以處理HTTP請求，管理流程和資源，並實現管理任務，監視和問題診斷。 Phusion乘客是一家免費的應用程序服務器，支持部署和管理流星，Raby on Rails nginx乘客，JavaScript，Python和Node.js應用程序。

## 2.安裝nginx和乘客軟件包： {#step-1： -  install-passenger-packages}
現在是時候安裝乘客和NGINX了。您將能夠輕鬆地在本指南後輕鬆部署一個流行的Web服務器之一。下面列出的命令將通過Phusion的APT存儲庫安裝乘客和NGINX。如果您已經安裝了NGINX，則這些命令將升級為phusion的版本，並編譯乘客：
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3.啟用乘客nginx模塊並重新啟動nginx： {#step-2： -  enable-the-passenger-nginx module-and-restart-nginx}
edit/etc/nginx/nginx.conf and uncomment incupper/etc/nginx/passenger.conf;。例如，您可能會看到以下內容：
```
# include /etc/nginx/passenger.conf;
```
刪除像這樣的“＃”字符：
```
include /etc/nginx/passenger.conf;
```
如果您看不到include/etc/nginx/passenger.conf的評論版本；在nginx.conf中，您需要自己插入它。將其插入http塊中的/etc/nginx/nginx.conf。
http {
    包括/etc/nginx/passenger.conf;
    ...
}
完成此步驟後，**restart nginx** ：
```
$ sudo service nginx restart
```

## 4.驗證安裝： {#step-3： - 檢查安裝}
安裝後，請通過運行命令`sudo/usr/bin/castenger-config validate-install“：：
```
sudo /usr/bin/passenger-config validate-install
```
所有檢查都應通過。如果任何支票未通過，請按照屏幕上的建議。
最後，檢查NGINX是否啟動了乘客核心進程。運行`sudo/usr/sbin/乘客內存stats。您應該看到NGINX流程以及乘客流程。例如以下：
```
sudo /usr/sbin/passenger-memory-stats
```
如果您看不到任何NGINX進程或乘客進程，則可能會有某種安裝問題或配置問題。請參閱[故障排除指南][3]。

## 5.系統和乘客更新： {#step-4： -  update-regularly}
NGINX更新，乘客更新和系統更新定期通過 **APT軟件包管理器** 提供。您應該定期運行以下命令，以使其保持最新狀態：
sudo apt-get更新
sudo apt-get升級
更新後，您無需重新啟動Web或應用程序，也不需要在更新後修改任何配置文件。這一切都是由APT自動為您照顧的。

## 6. **最好的開源Web服務器**： {#step-4： -  update-regularly}
**什麼是開源Web服務器？**開源Web服務器軟件是一種公共域軟件，旨在通過Internet Worldwood Web提供網頁。基本上，它通過HTTP網絡協議處理請求，以在萬維網上分發信息。
超過80％的Web應用程序和網站由開源Web服務器提供動力。在這裡，我列出了一些**最受歡迎的開源網絡服務器**，您可以輕鬆地自己部署其中一個流行的Web服務器。
  * **Apache HTTP服務器** 
  * **LightTPD Web服務器** 
  * **OpenLitespeed Web服務器** 
  * **Apache Tomcat Web服務器** 
  * **Caddy Web服務器** 

## [][4]結論： {#NextStep}
恭喜，您已經成功安裝和配置了Nginx，並在**AWS Production Server上為Web應用程序提供了乘客。請查看[乘客庫][5]中的各種指南，以完全掌握乘客應用程序服務器。您可能對通過 **Capistrano**  的Ruby應用程序的[自動部署][6]指南特別感興趣，該指南教會您如何在沒有太多手動工作的情況下自動部署未來的應用程序更新。現在，您準備在AWS生產實例上部署Web應用程序。
_您更喜歡 **Web開發或託管** 需求_？您對免費的Web服務器和開源Web應用程序服務器有任何疑問嗎？

## 探索
您可能會找到以下相關博客文章：
  * [如何將Apache配置為Ubuntu/Debian的反向代理][8]
  * [在Ubuntu上使用Nginx安裝並保護PhpMyAdmin][9]
  * [在Ubuntu/debian上配置http/2支持nginx][10]
  * [安全和加密NGINX與Let's Encrypt在Ubuntu 20.04][11]
  * [如何在Ubuntu上使用Apache安裝和配置OllCloud][12]

  
[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
