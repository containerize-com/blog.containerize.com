---
title: "如何在Ubuntu上使用Nginx安裝和保護PhpMyAdmin" 
seoTitle: "如何在Ubuntu上使用Nginx安裝和保護PhpMyAdmin" 
description: "PHPMYADMIN是用PHP編寫的開源數據庫管理軟件。我們將學習如何使用nginx安裝phpmyadmin並通過phpmyadmin管理mysql" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PHPMYADMIN是用PHP編寫的開源圖形Web界面數據庫管理工具。在本教程中，我們將學習如何使用nginx安裝phpmyadmin。" 
url: /zh-hant/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PHPMYADMIN是用PHP編寫的開源圖形Web界面數據庫管理工具。在本教程中，我們將學習如何使用nginx安裝phpmyadmin。

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="如何在Ubuntu上使用Nginx安裝和保護PhpMyAdmin">}}


## **概述**
PHPMYADMIN是一種免費的開源數據庫管理工具，可通過直覺界面為用戶提供Web界面來管理MySQL或MariadB服務器。這是大多數受歡迎的託管提供商提供的廣泛支持的軟件之一，以使Web管理員在PhpMyAdmin中創建數據庫並管理數據庫，執行SQL故事，可輕鬆導入和導出數據。您將能夠通過圖形Web界面輕鬆地訪問phpmyadmin中的MySQL或Mariadb數據庫，並與PHP開發環境一起運行。
在本指南中，我們將描述如何在Ubuntu上使用NGINX安裝和保護PhpMyAdmin 20.04。您將需要在Ubuntu Server上安裝和配置PhpMyAdmin，以使其可以輕鬆地與MySQL數據庫和表一起使用。因此，讓我們學習如何在Ubuntu上使用NGINX安裝和保護PhpMyAdmin 20.04 / 20.10：
  *先決條件
  *安裝phpmyadmin
  *配置數據庫
  *創建符號鏈接
  *訪問phpmyadmin
  *創建MySQL超級用戶
  *固定phpmyadmin
  * 結論

##步驟1：先決條件 {#id-prerquisites}
要遵循本指南，您需要在本地計算機或具有先決條件的遠程服務器上運行的Ubuntu 20.04服務器。
  *您應該以具有sudo特權並啟用的UFW防火牆的非root用戶訪問服務器。
  *假定您已經在Ubuntu上安裝了Nginx，MySQL和PHP。
  *由於PhpMyAdmin使用MySQL憑據進行身份驗證，因此您還應該安裝SSL/TLS證書以啟用服務器和客戶端之間的加密流量。
這樣一來，讓我們開始開始安裝並保護PhpMyAdmin，以連接到MySQL Server，以通過Web界面訪問數據庫。

##步驟2：安裝phpmyadmin   {#id-1-install-phpmyadmin}
在Ubuntu 20.04上安裝PhpMyAdmin之前，請確保您已成功安裝了系統上的所有先決條件。首先更新軟件包列表：
```
sudo apt update 
```
現在，運行以下命令以在Ubuntu上的默認Ubuntu存儲庫中安裝PhpMyAdmin包20.04 / 20.10：
```
sudo apt install phpmyadmin

```
當要求繼續時，按 **y ** ，然後**輸入**。如果提示您選擇Web服務器，因為沒有選擇 **nginx ** 的選項，請按 **tab ** 選擇“確定”，然後**輸入**在不選擇Web服務器的情況下繼續**。

{{< figure align=center src="images/mysql-setup.png" alt="在Ubuntu上安裝並確保nginx的phpMyAdmin 20.04">}}


##步驟2：配置數據庫 {#id-1-install-phpmyadmin}
接下來，選擇**是**，然後按**輸入**安裝和設置數據庫，並使用dbconfig-common工具：

{{< figure align=center src="images/phpmyadmin-install2.png" alt="如何與phpmyadmin配置mysql">}}

PhpMyAdmin在內部使用MySQL應用程序密碼與MySQL數據庫進行通信。輸入phpmyadmin dbms的新密碼以註冊為新數據庫，選擇“確定”，然後按Enter繼續進行。

{{< figure align=center src="images/phpmyadmin-install3.png" alt="如何為phpmyadmin配置mysql">}}

將提示您確認密碼，輸入相同的密碼，選擇 **** ，然後按 **Enter ** 。恭喜！ PHPMYADMIN已成功安裝在您的系統上。

##步驟4：創建符號鏈接 {#id-2-create-symbolic-link}
有幾種方法如何配置NGINX來服務PhpMyAdmin文件。如果已經設置了域的服務器塊以服務PHP請求，則必須從phpmyadmin nginx安裝文件/usr/share/phpmyadmin到您的域文檔root目錄創建一個符號鏈接。 ubuntu 20.04/20.10中的nginx文檔root的默認位置應為/var/www/html/，並且根據您的INS設置可能有所不同。您的文檔根可能位於/var/www/example.com/public_html中。
接下來，我們將創建一個符號鏈接，從phpmyadmin目錄/usr/share/phpmyadmin到您的文檔root。在這裡，我們將假設我們的文檔root是/var/www/html/，我們只需將phpmyadmin添加到其中即可。這將使我們能夠在url example.com/phpmyadmin上訪問phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

##步驟5：訪問phpmyadmin   {#id-3-test-phpmyadmin}
現在，您應該能夠通過訪問您喜歡的Web瀏覽器中的domain.com/phpmyadmin，然後訪問服務器的主機/域名或公共IP地址，訪問PhpMyAdmin Web界面。例如http://example.com/phpmyadmin或http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
在使用MySQL 5.7運行的Ubuntu服務器上，您將無法使用MySQL默認的根帳戶登錄免費的PhpMyAdmin數據庫，並且會遇到一個錯誤，例如_“訪問用戶'root'@local'@localhost’” _ _ _ _ _。取而代之的是，您應該為PhpMyAdmin創建一個新的Superuser帳戶。接下來，我們將創建MySQL root帳戶以登錄phpmyadmin。

##步驟6：創建MySQL超級用戶 {#
在終端中，首次使用您的MySQL root密碼登錄MySQL，您可能第一次安裝PhpMyAdmin MySQL數據庫時可能已經創建了一個root密碼。
```
sudo mysql -u root -p
```
登錄到MySQL後，使用您選擇的用戶名添加一個新的MySQL Superuser。在此示例中，我們稱其為yasiradmin。 [單擊此處生成一個強密碼][2]，然後在下面替換新的\ _Password \ _。
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
現在，將Superuser特權授予我們的新用戶Yasiradmin。
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
現在退出MySQL會話。現在，您應該能夠使用這種新的Superuser憑據訪問PhpMyAdmin。

{{< figure align=center src="images/image.png" alt="如何在Ubuntu上登錄phpmyadmin 20.04">}}

強烈建議您為PhpMyAdmin設置一些額外的安全性，以確保PhpMyAdmin Nginx。您應該能夠更改並訪問phpmyadmin URL到晦澀的URL之類的東西。

##步驟7：安全phpmyadmin   {#id-6-Secure-PhpMyAdmin-Recordend}
接下來，我們要在NGINX中設置身份驗證，以提供額外的安全層。現在，我們將安裝Apache2-Utils，該Utils可以生成可與Nginx和Apache2服務器一起使用的.htpasswd文件。
```
sudo apt install apache2-utils
```
安裝後，我們可以生成.htpasswd文件。更改您選擇的用戶名。 [生成密碼][3]並保持安全。
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
現在將有一個.htpasswd文件，其中包含您的用戶名和加密密碼。您可以使用以下命令進行檢查：
```
cat /etc/nginx/.htpasswd
```
您應該看到諸如用戶名之類的東西：$ apr1sdfsdf4435sdtsklfwmmg1sfdsdgg4
現在，我們需要將2個指令添加到我們的NGINX配置文件中。配置文件的位置可能會根據您的安裝而有所不同，儘管默認文件路徑通常位於/etc/nginx/stite-abailable/default。如果您設置了多個域，則配置文件可能位於/etc/nginx/sites-available/example.com之類的某個地方
在此示例中，我們將假設NGINX配置文件在/etc/nginx/stites-abailable/default。打開文件以編輯它。
```
sudo nano /etc/nginx/sites-available/default
```
向下滾動並查找位置塊，然後在其下面的一個新塊中粘貼，並用遮蓋的phpmyadmin文件夾的名稱，在此示例Aspose_hidden中。
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
保存文件並退出（按CTRL + X，按Y，然後按Enter）。檢查NGINX配置文件是否有效，否則服務器可能會在Running Command上重新啟動時崩潰。
```
sudo nginx -t
```
如果有效，請重新加載nginx config。
```
sudo service nginx reload
```
現在，當訪問example.com/aspose_hidden時，應該為您提供身份驗證窗口。

{{< figure align=center src="images/auth3.png" alt="如何確保phpmyadmin">}}

您已經完成了Ubuntu Server上的phpmyadmin安裝。

##結論： {#id-what-next}
恭喜，您已經成功安裝了phpmyadmin，for Ubuntu 20.04 / 20.10服務器，現在可以通過phpmyadmin管理mysql。現在，您可以開始創建MySQL數據庫，用戶，表，執行MySQL查詢和其他各種操作。
如果您有疑問，請隨時在評論部分告訴我。

## 探索
您可能還喜歡以下更多相關文章：
  * [如何將Apache配置為Ubuntu/Debian的反向代理][4]
  * [如何使用我們加密在Ubuntu 20.04上保護和加密Nginx][5]
  * [如何在Ubuntu/debian上配置nginx中的http/2支持][6]
  * [如何在AWS生產服務器上使用乘客設置NGINX][7]
  * [如何在Ubuntu上使用Apache安裝和配置OllCloud][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
