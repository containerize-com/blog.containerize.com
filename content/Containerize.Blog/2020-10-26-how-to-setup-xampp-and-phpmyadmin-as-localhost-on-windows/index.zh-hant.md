---
title: "將XAMPP和PHPMYADMIN設置為Windows上的本地主機" 
seoTitle: "將XAMPP和PHPMYADMIN設置為Windows上的本地主機" 
description: "將XAMPP和PHPMYADMIN設置為Windows上的本地主機。創建自己的免費和開源本地測試環境，以測試和構建Web應用程序。" 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "使用免費和開源Web服務器解決方案堆棧（XAMPP）和數據庫管理軟件（PHPMYADMIN）設置開發環境" 
url: /zh-hant/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

##設置帶有免費和開源Web服務器解決方案堆棧（XAMPP）和數據庫管理軟件（PHPMYADMIN）的開發環境

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="Xampp和phpmyadmin作為Localhost">}}

XAMPP和PHPMYADMIN作為Localhost提供了本地服務器，供開發人員測試和構建Web應用程序。 XAMPP是安裝在個人計算機/筆記本電腦上的本地服務器。它提供了一個本地環境來創建，運行和測試PHP應用程序，然後再將其部署在實時服務器上。
我們將在此博客文章中介紹以下各節：
  * [描述][1]
  * [XAMPP安裝][2]
  * [phpmyadmin儀表板][3]
  * [最終想法][4]

##描述： {#description}
XAMPP是免費的，開源Web服務器解決方案堆棧。它包含Apache，MySQL，Mariadb，PHP和Perl。 XAMPP可用於Windows操作系統。它非常容易安裝和使用。這就是為什麼它是最受歡迎的PHP開發環境。 Xampp和PhpMyAdmin作為Localhost為Web應用程序開發和測試提供了一個完整的環境。
Xampp中的字母代表：
***X** - 跨平台（支持Linux，Windows和Mac OS在內的多個操作系統）
***A** -  Apache HTTP服務器
***m** -  Mariadb（數據庫）
***P** -  PHP
***P** -  Perl

## XAMPP安裝 {#XAMPP}
* 從[此處][5]下載XAMPP。

{{< figure align=center src="images/xampp1.png" alt="Xampp為Localhost">}}

* 安裝可執行文件。
* 然後單擊“下一步”。
* 選擇要安裝的組件。

{{< figure align=center src="images/xampp2.png" alt="XAMPP作為Local主機步驟2">}}

* 對於大多數Web應用程序，您只需要_apache_，_mysql_，_php_和_phpmyadmin_。
* 選擇要安裝XAMPP的安裝目錄。
* 將向您顯示Windows安全警報。您必須檢查以下選項：“ _私有網絡，例如我的家庭或工作網絡” _。
* 最後單擊“完成”以完成安裝。

{{< figure align=center src="images/xampp4.png" alt="XAMPP作為Local主機步驟3">}}

* 成功安裝後，打開XAMPP控制面板。
* 啟動“ Apache”和“ MySQL”服務。

{{< figure align=center src="images/xampp5.png" alt="XAMPP作為Local主機步驟4">}}


## phpmyadmin儀表板： {#phpmyadmin}
要訪問phpmyadmin儀表板，請單擊MySQL服務旁邊的“管理”按鈕。您也可以通過訪問瀏覽器訪問http：// localhost/phpmyadmin來訪問phpmyadmin。在這裡，您可以創建數據庫。請按照以下步驟創建一個新的數據庫。
* 從儀表板中，單擊“數據庫”選項卡。

{{< figure align=center src="images/db1.png" alt="Local主機的PHPMYADMIN步驟1">}}

* 輸入數據庫名稱，然後單擊“創建”按鈕。這將僅創建一個新的空數據庫。

{{< figure align=center src="images/db2.png" alt="Local主機的PHPMYADMIN步驟2">}}

* 接下來，您可以通過選擇新創建的數據庫來創建表。
* 在“創建表”下輸入表名。

{{< figure align=center src="images/db3-1024x234.png" alt="Local主機的PHPMYADMIN步驟3">}}

* 選擇列數。
* 然後單擊“ GO”按鈕。
* 之後，您需要在下一頁上填寫表格才能完成創建表。

{{< figure align=center src="images/db4-1024x564.png" alt="Local主機的PHPMYADMIN步驟4">}}


##最終想法： {#final}
XAMPP安裝簡單明了。設置XAMPP服務器的設置不超過15分鐘。安裝後，即使沒有Internet連接，開發人員也可以構建和測試基於PHP的Web應用程序。與其直接在實時Web服務器上測試項目，不如在本地測試它們是簡單且節省時間的。對於初學者來說，這是一個很好的平台，可以學習，測試和拋光其PHP，PERL和數據庫技能。

## 探索：
[PHP和PERL開發人員的開源Web服務器解決方案堆棧][6]
[最佳開源Web服務器解決方案堆棧選項][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
