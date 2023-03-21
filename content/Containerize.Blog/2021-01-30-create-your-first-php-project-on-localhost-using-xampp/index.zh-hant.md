---
title: "使用XAMPP'在Localhost上創建您的第一個PHP項目" 
seoTitle: "使用XAMPP在Localhost上創建您的第一個PHP項目" 
description: "使用免費和開源Web Server XAMPP設置Web開發環境。通過遵循一些簡單的步驟來創建和測試Localhost上的PHP項目。" 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "使用免費和開源XAMPP服務器設置Web開發環境。通過遵循一些簡單的步驟，在Localhost上學習，創建和測試您的PHP項目。" 
url: /zh-hant/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

##使用免費和開源XAMPP服務器設置Web開發環境。通過遵循一些簡單的步驟，在Localhost上學習，創建和測試您的PHP項目。

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="使用XAMPP開源Web服務器創建您的第一個PHP項目">}}

XAMPP是一家開源Web服務器，在將其部署在實時服務器上之前，它提供了一個本地環境來創建，運行和測試PHP項目。它為開發人員提供了一臺本地服務器來測試和構建Web應用程序。我們將在此博客文章中介紹以下各節：
  * [要求][2]
  * [什麼是xampp][3]
  * [創建PHP腳本][4]
  * [運行和測試PHP腳本][5]
  * [結論][6]

##要求 {#requirements}
  * XAMPP安裝
  *代碼編輯器應用程序
  *基本的PHP知識
  *基本的HTML和JavaScript知識

##什麼是Xampp？   {#XAMPP}
XAMPP是開源Web服務器解決方案堆棧。它包含Apache，MySQL，Mariadb，PHP和Perl。它非常容易安裝和使用。這就是為什麼它是最受歡迎的PHP開發環境。 XAMPP服務器為PHP Web應用程序開發提供了一個完整的環境。如果您還沒有XAMPP工作安裝，請按照本指南安裝XAMPP：
[設置XAMPP和PHPMYADMIN作為Windows上的Localhost][7]

##創建PHP腳本 {#php}
  *假設您已經按照上述教程安裝了XAMPP，現在讓我們創建一個簡單的PHP腳本並在XAMPP上進行測試。
  *首先打開您的編輯器。如果您沒有編程編輯器，只需打開記事本即可。
  *輸入以下代碼
```
<?php
echo "This is my first PHP project";
?>
```
  *單擊右上角的“文件”。
  *點擊“保存為”按鈕。
  *輸入具有擴展名的“ .php”的名稱。
  *對於“另存為類型”，請選擇“所有文件（\*。\*）”選項。
  *最後點擊“保存”按鈕。

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="使用XAMPP開源Web服務器創建您的第一個PHP項目">}}


##運行並測試PHP腳本 {#test}
  *將此PHP腳本複製到XAMPP安裝內的HTDOCS文件夾。大多數HTDOCS文件夾位於這裡：C：\ XAMPP \ htdocs
  *打開瀏覽器。
  *轉到localhost/my \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="使用XAMPP開源Web服務器創建您的第一個PHP項目">}}

恭喜！您剛剛創建了第一個PHP項目。

##結論 {#conclusion}
對於初學者來說，創建第一個Web項目總是非常令人興奮。當您設計第一個動態腳本，運行並查看在瀏覽器上工作時，感覺很棒。我希望本簡單的指南能夠通過XAMPP開源Web服務器來幫助您創建和運行第一個PHP項目。

## 探索
要了解有關XAMPP和PHPMYADMIN的更多信息，請結帳以下指南：
[設置XAMPP和PHPMYADMIN作為Windows上的Localhost][7]
[PHP和PERL開發人員的免費Web服務器解決方案堆棧][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
