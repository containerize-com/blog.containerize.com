---
title: "如何在Windows上安裝和配置WAMP服務器" 
seoTitle: "如何在Windows上安裝和配置WAMP服務器" 
description: "在Windows上安裝WampServer，并快速開始開發基於PHP的Web應用程序。 WAMP服務器可用於Windows 32和64位。" 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "設置用於使用Apache2，PHP和MySQL創建Web應用程序的Web開發環境。本文可幫助您在Windows上安裝WAMP服務器。" 
url: /zh-hant/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

##設置用於使用Apache2，PHP和MySQL創建Web應用程序的Web開發環境。本文可幫助您在Windows上安裝WAMP服務器。

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="WAMP服務器">}}

每個開發人員在編寫程序之前必須在計算機上安裝所需的軟件。在早期，開發人員必須單獨安裝每個軟件，然後將它們配置為一起工作。  **WampServer** 和其他Web解決方案堆棧軟件現在可用，將所有必要的軟件捆綁到一個軟件包中。您只需要安裝一個軟件包即可啟動開發環境。
在此博客文章中，我們將介紹以下各節。
  *[**什麼是Wampserver？**][1]
  *[ **WAMP安裝** ][2]
  *[ **WAMP配置** ][3]
  *[**訪問phpmyadmin**][4]

##什麼是Wampserver？   {#什麼}
WampServer是一個免費的解決方案堆棧，用於為基於PHP的應用程序設置Web開發環境。 Wamp代表（W  -  Windows，A  -  Apache，M  -  mysql和P  -  PHP）。此外，它還帶有PHPMyAdmin和Adminer，用於管理數據庫。 Wamp是流行的工具之一，您可以快速設置它。此外，您可以從控制面板配置WAMP服務器。它提供了一個完整的Web開發環境，用於創建和測試應用程序。 WampServer由您可以根據需要在安裝過程中選擇的幾個組件組成。 Wampserver帶有多種版本的PHP。您可以根據項目要求輕鬆更改PHP版本。另外，您可以從Wampserver控制面板更改DBMS（數據庫管理系統）。

## Wamp安裝 {#installation}
請按照以下逐步指南在Windows上安裝Wamp服務器。
  ***從官方網站下載Wampserver**

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *根據您的操作系統，選擇一個 **Wampserver 32位** 或 **Wampserver 64位** 安裝程序的版本。
  *找到 **wamp下載** 文件，然後雙擊它以運行安裝過程。
  *選擇語言，然後按確定按鈕。
  *選擇我接受協議複選框，然後單擊下一個按鈕。
  *閱讀有關Wampserver安裝的重要信息，然後單擊下一個按鈕繼續進行。
  *選擇要安裝Wamp服務器的文件夾，然後單擊“下一個”按鈕。
  *您必須選擇要安裝的組件，如下面的屏幕截圖所示。您可以在開發過程中選擇所有PHP版本和切換。另外，您可以同時安裝MySQL和Mariadb。

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  *選擇WampServer的快捷方式，然後單擊“下一個”按鈕。
  *單擊“安裝”按鈕安裝WampServer。
  *現在，選擇WAMP服務器的默認瀏覽器和默認文本編輯器。
  *您的安裝完成。單擊“完成”按鈕以退出WAMP服務器安裝嚮導。
  *打開瀏覽器並鍵入Localhost以訪問它。您將看到下面的頁面。

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Wamp Configuration   {#configuration}
現在，我們將研究一些配置，可以在Web應用程序的開發和測試中為您提供幫助。現在，您可以通過雙擊桌面上的快捷方式Wampserver圖標來啟動Wampserver。
 ***服務**  - 您可以通過在Wampserver圖標上左鍵單擊左鍵單擊所有服務的選項。
 ***更改數據庫**  - 在WAMP圖標上右鍵單擊以打開“工具”對話框。選擇工具，然後單擊“默認DBMS MARIADB MYSQL”。 WAMP服務器將自動重新啟動，您可以通過在瀏覽器中打開Localhost來查看默認數據庫。
 ***更改PHP版本**  - 在Wamp圖標上右鍵單擊以打開“工具”對話框。選擇工具並更改PHP CLI版本，然後單擊所需的PHP版本。
 ***虛擬主機**  - 您可以通過Wampserver的Web接口輕鬆添加虛擬主機。在瀏覽器中打開Localhost，然後單擊“工具”部分下的“添加虛擬主機”。輸入“ dev.example.com之類的虛擬主機的名稱”，然後輸入項目的絕對路徑。單擊“啟動“虛擬Host的創建”按鈕。重新啟動Apache服務器以加載新創建的虛擬主機。
 ***更改Apache端口**  - 默認情況下，Apache Web服務器在端口80上運行。如果要使用其他端口作為Apache，則可以從Wampserver控制面板中進行操作。右鍵單擊WAMP圖標以打開“工具”對話框。選擇工具，然後單擊“使用80以外的端口”。在對話框中輸入新端口號，然後單擊“確定”按鈕。
 ***更改DBMS端口**  - 默認情況下，數據庫服務器在端口3306上運行。如果要為數據庫服務器使用其他端口，則可以從Wampserver控制面板中進行操作。右鍵單擊WAMP圖標以打開“工具”對話框。選擇工具，然後單擊“使用3306以外的端口”。在對話框中輸入新端口號，然後單擊“確定”按鈕。
 ***空日誌**  -  Wamserver提供了從控制面板清除日誌的功能。您可以空白日誌，例如PHP錯誤日誌，Apache錯誤日誌，Apache Access Log，MySQL日誌和MariaDB日誌。即使您也可以一次清除所有日誌。右鍵單擊WAMP圖標以打開“工具”對話框。選擇工具並選擇“空日誌”，您將找到刪除日誌的所有選項。
 ***更改語言**  - 您可以為Wampserver控制面板進行語言。右鍵單擊WAMP圖標以打開“工具”對話框。選擇語言，然後單擊所需的語言。您將在新選擇的語言中看到控制面板。

##訪問phpmyadmin   {#phpmyadmin}
您可以通過在瀏覽器中打開Localhost，然後單擊Wampserver歡迎頁面上的PhpMyAdmin鏈接來訪問 **phpMyAdmin** 來管理數據庫。另外，您可以訪問http：// localhost/phpmyadmin URL訪問它。

## 結論
我們已經討論了Wampserver，並涵蓋了完整的分步指南，以**安裝Wampserver **在Windows上。您可以通過遵循本教程並立即開始編碼來輕鬆安裝和配置 **wampserver** 。您可以訪問Explore部分下的鏈接，以獲取有關解決方案堆棧軟件的更多選項。
最後，[ **containerize.com** ][5]正在始終如一地編寫有關更多最新開源產品的博客文章。因此，與此[ **Web服務器解決方案堆棧** ][6]類別保持聯繫以進行最新更新。

## 探索
您可能會發現以下鏈接相關：
  *[**最佳開源Web服務器解決方案堆棧選項**][7]
  *[**設置XAMPP和PHPMYADMIN作為Windows上的Localhost**][8]

  
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
