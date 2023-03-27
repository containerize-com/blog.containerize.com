---
title: "如何在Ubuntu上使用郵政設置郵件服務器" 
seoTitle: "如何在Ubuntu上使用郵政設置郵件服務器" 
description: "使用開源郵件服務器從您的Web應用程序發送電子郵件。郵政使您可以使用SMTP和HTTP API發送電子郵件，並還監視電子郵件流量。" 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "使用開源郵件服務器發送和接收電子郵件。本文將幫助您為公司安裝和配置郵政郵件服務器。" 
url: /zh-hant/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

##通過開源郵件服務器發送和接收電子郵件。本文將幫助您為公司安裝和配置郵政郵件服務器。

{{< figure align=center src="images/postal-banner.png" alt="開源郵件服務器">}}

對於現代應用程序，需要發送有關不同類型事件的電子郵件。每個企業都需要一個可靠的  **郵件服務器** ，以進行發出的電子郵件。此外，公司需要郵件服務器來發送批量電子郵件，以進行營銷活動，新聞通訊和許多其他任務。有幾個  **開源郵件服務器**  可用。但是，我們將在本文中詳細討論 **郵政服務器**  ，並介紹以下主題。
  * [什麼是郵政郵件服務器？][1]
  * [郵政的功能][2]
  * [郵政安裝][3]
  * [結論][4]

## 什麼是郵政郵件服務器？ {#Postal}

[  **郵政** ][5]是免費的  **開源郵件服務器**  。它是用於網站和Web應用程序的功能齊全的郵件服務器。郵政郵件服務器是現有流行  **郵件服務器**  的替代方法，例如sendgrid和mailgun。  **郵政**  是一個健壯，安全且可擴展的開源電子郵件傳遞平台。所有源代碼和文檔均可在[  **github**  ][6]上獲得。您可以下載，將其安裝在專用服務器上，並全面控制它。您還可以根據業務需求改進和增強它。此外， **郵政服務器**  支持多個組織。
用戶可以查看顯示傳入和發出郵件的量的圖形和統計數據。此外，您可以訪問完整的外傳和傳入的消息隊列。郵政郵件服務器為Webhooks提供功能。您可以設置Webhooks，以實時接收有關送貨信息的實時信息。它還提供消息保留，使您可以存儲和檢查所有發送和接收的消息。電子郵件交付在業務中非常重要，以確保用戶收到電子郵件。但是，有時電子郵件確實會將其發送給用戶，您必須調查問題。  **傳入和發出的郵件服務器**  還提供了完成調查的完整日誌記錄和工具。

## 郵政的功能 {#Features}

郵政郵件服務器提供許多功能。但是，我們將討論本文中的以下關鍵功能。
 **發送電子郵件** ：郵政郵件服務器提供兩種技術，用於傳出電子郵件，包括HTTP API和SMTP。您可以輕鬆地使用HTTP API與Web應用程序集成。您還可以使用SMTP服務器與現有應用程序和系統集成。
 **傳入的電子郵件** ： **傳入的郵件** 可以使用郵政郵件服務器轉發到HTTP Endpoint， **SMTP服務器** 和其他電子郵件地址。
 **垃圾郵件和病毒檢查** ：可以將Spamassassin和Clamav與郵政集成在一起，以自動掃描傳入並通過郵件服務器傳遞消息。默認情況下也關閉此功能。
 **單擊並打開跟踪** ：可以通過郵政跟踪電子郵件開口和點擊。郵政將掃描您的傳出消息，並用傳遞郵政Web服務器的新鏈接替換所有鏈接。當用戶單擊鏈接時，郵政記錄操作並立即將其重定向到原始URL。但是，默認情況下不會激活這。
 **IP池** ：郵政允許您從各種IP地址發送消息。這使您可以根據發件人或收件人地址將多個IP地址分配給不同的郵件服務器或從不同的IP發送。

## 郵政安裝 {#Installation}

請按照以下分步指南安裝Ubuntu上的郵政  **郵件服務器軟件**  。
* 首先，您需要連接服務器vis ssh。運行以下命令以更新系統，並使用最新的可用軟件包。
```
sudo apt-get update
```

###安裝MariaDB數據庫服務器
* 運行命令安裝MariadB。
```
sudo apt install mariadb-server libmysqlclient-dev
```
* 完成安裝後。現在，您需要通過運行以下命令來保護它。
```
mysql_secure_installation
```
* 接下來，它將問您幾個問題，如下所示。您需要回答所有問題。
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
* 使用以下命令連接到MariadB服務器。
```
mysql -u root -p
```
* 為郵政創建數據庫。
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
* 接下來，使用新密碼創建一個名為“ Postaluser”的數據庫用戶。
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
* 之後，授予用戶完全訪問“ Postaluser”數據庫。
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
* 接下來，用以下命令沖洗特權並退出MariaDB Shell。
```
FLUSH PRIVILEGES;
EXIT;
```

###安裝Ruby
* 首先，添加第三方PPA以安裝Ruby。運行以下命令。
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
* 更新Ubuntu軟件包。
```
sudo apt update
```
* 通過運行以下命令安裝Ruby。
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

###安裝兔子
  * Erlang必須安裝RabbitMQ，因此您也需要安裝它。使用以下命令將Erlang存儲庫密鑰添加到Ubuntu。
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
* 接下來，使用以下命令添加Erlang存儲庫。
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
* 運行以下命令以安裝Erlang。
```
sudo apt-get update
sudo apt-get install erlang
```
* 完成ERLANG安裝後，您可以繼續安裝RabbitMQ。將RabbitMQ存儲庫添加到Ubuntu。
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
* 使用以下命令添加RabbitMQ GPG密鑰。
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
* 運行下面的命令以安裝RabbitMQ軟件包。
```
sudo apt update
sudo apt install rabbitmq-server
```
* 運行以下命令以啟用RabbitMQ，因此當系統引導時始終啟動。
```
sudo systemctl enable rabbitmq-server
```
* 接下來，您將需要為郵政創建RabbitMQ VHOST和用戶。運行以下命令。
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

###安裝nodejs
* 使用以下命令添加nodejs存儲庫。
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
* 接下來，運行下面的命令以安裝nodejs。
```
sudo apt-get install nodejs
```

###安裝郵政郵件服務器
* 首先，您需要為郵政郵件服務器創建用戶。使用以下命令創建它。
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
* 接下來，讓Ruby在Web端口上收聽。
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
* 使用以下命令安裝所有必需的寶石。
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
* 為郵政創建目錄結構。
```
sudo mkdir -p /opt/postal/app
```
* 接下來，下載最新版本的郵政。
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
* 使用以下命令提取下載的文件。
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
* 接下來，更改郵政目錄的所有權。
```
sudo chown -R postal:postal /opt/postal
```
* 通過運行以下命令為郵政二進制創建符號鏈接。
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
* 安裝所有必需的依賴項。
```
sudo postal bundle /opt/postal/vendor/bundle
```
* 運行以下命令以初始化郵政配置。
```
sudo postal initialize-config
```
* 接下來，運行以下命令以打開郵政配置文件。
```
sudo nano /opt/postal/config/postal.yml
```
* 進行大膽指示的更改並保存文件。
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
* 運行命令以初始化數據庫。
```
sudo postal initialize
```
* 為郵政創建管理用戶。
```
sudo postal make-user
```
* 接下來，您需要提供如下所示的用戶帳戶詳細信息。
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   :  ****** ***

User has been created with e-mail address admin@example.com
```
* 最後，運行以下命令以啟動並檢查郵政應用程序的狀態。
```
sudo -u postal postal start
sudo -u postal postal status
```

###安裝nginx
* 運行下面的命令以安裝NGINX Web服務器。
```
sudo apt install nginx
```
* 接下來，複製郵政nginx配置將其用作虛擬主機。
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
* 創建一個自簽名的SSL證書。
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
* 之後，您需要回答問題。
* 打開nginx默認虛擬主機文件。
* 更改server_name的值並保存文件。
* 最後，通過運行以下命令重新啟動NGINX Web服務器。
```
sudo systemctl restart nginx
```
* 最後，打開瀏覽器並鍵入URL https://postal.example.com。您將被重定向到登錄頁面。

## 結論 {#結論}

我們已經深入了解了郵政郵件服務器的介紹和主要功能。我們還提供了用於設置此  **郵件傳輸代理**  的分步說明。此外，我們對設置有了一些洞察力。設置郵政郵件服務器是一個簡單的過程。我希望本文確實有助於為您的業務設置和配置郵政郵件服務器。
最後，[  **containerize.com** ][7]正處於撰寫有關更多最新開源產品的博客文章的一致過程中。因此，與此[ **交易電子郵件**  ][8]類別保持聯繫以獲取最新更新。

## 探索
您可能會發現以下鏈接相關：
* [  **頂級交易電子郵件軟件**  ][9]
* [  **POTAL  - 開源郵件服務器**  ][5]
* [  **5 2020年最佳企業的開源郵件服務器軟件**  ][10]



 [1]: #Postal
 [2]: #Features
 [3]: #Installation
 [4]: #Conclusion
 [5]: https://products.containerize.com/transactional-email/postal/
 [6]: https://github.com/postalhq/postal
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/transactional-email/
 [9]: https://products.containerize.com/transactional-email/
 [10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
