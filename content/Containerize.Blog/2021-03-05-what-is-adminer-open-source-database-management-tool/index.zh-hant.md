---
title: "什麼是管理員？ |開源數據庫管理工具" 
seoTitle: "什麼是管理員？ |開源數據庫管理工具" 
description: "什麼是管理員？具有開發人員友好界面的基於Web的數據庫管理系統。讓我們討論如何使用開源管理器管理數據庫。" 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Adminer是一個基於開源Web的數據庫管理系統，用於管理數據庫。讓我們學習如何在Localhost上設置管理員並查看其關鍵功能。" 
url: /zh-hant/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Adminer是一個基於開源Web的數據庫管理系統，用於管理數據庫。讓我們學習如何在Localhost上設置管理員並查看其關鍵功能。
{{_LINE_11_}}

## 概述
現在，與數據相關的任務比以往任何時候都更為關鍵。數據庫管理工具已成為任何業務不可或缺的一部分。但是，有許多基於Web的數據庫管理系統，可為此類具有挑戰性的任務提供解決方案。企業每天都在生成大量數據，並難以維護。此外，組織傾向於簡化數據訪問和數據控制。這些免費工具有助於減少數據冗餘，使數據庫有效且可靠。此外，我們發表了有關主題的博客文章，例如[頂級開源DBMS軟件工具][1]等。
因此，開源社區開發了Adminer，它是企業級免費數據庫管理工具。在本管理教程中，我們將介紹以下幾點。
  * [什麼是管理員？][2]
  * [管理員的重要特徵][3]
  * [adminer vs phpmyadmin][4]
  * [使用Adminer管理數據庫][5]
  * [結論][6]

##什麼是管理員？   {#什麼}
當涉及輕巧，用戶友好，高性能的MySQL數據庫管理工具時，Adminer獲得了廣泛的知名度，並且與PhpMyAdmin相比提供了許多改進。最初，此數據庫管理工具是由Jakub Vrana在2007年開發的，可作為PhpMyAdmin的替代方法，因此您要做的就是在應用程序的數據庫上下載並安裝一個輕巧的PHP文件。
作為開源數據庫管理工具，它也可以免費使用並以PHP編寫。設置此基於Web的數據庫管理系統的原因是一種良好的用戶界面設計，可用於無縫的用戶體驗，以及強大的安全功能，以防止數據免受任何攻擊或惡意黑客嘗試的嘗試。該數據庫管理工具易於設置，需要簡單的要求，例如Ubuntu和Lamp。用戶可以找到有關開發和部署的全面文檔。因此，您可以在[Github][7]上找到此基於Web的數據庫管理系統的源文件。

## Adminer   {#important}的重要功能
該數據庫管理工具的一些基本但重要的功能包括：
  *它具有許多數據庫函數
  *支持多個數據庫，包括：MySQL，PostgreSQL，SQLITE，MS SQL，ORACLE和SIMPLEDB數據庫等等
  *它有43種語言，包括英語，阿拉伯語，波斯語，波蘭語，荷蘭語等
  *您可以輕鬆編輯數據庫對象，例如視圖，觸發器，存儲過程，用戶權限等等。
  * Adminer還提供針對SQL注入，會話竊取，跨站點腳本（XSS）軟件攻擊和其他攻擊的安全措施。

## Adminer vs phpMyAdmin   {#adminer}
因此，當我們談論什麼是管理員時，知道管理員與phpmyadmin之間的比較將很有趣。當涉及到Adminer和PhpMyAdmin之間選擇時，Adminer在其提供的靈活功能和輕型文件上載最重要的是。同樣，與PhpMyAdmin相比，它支持包括MySQL，SQLite等許多數據庫。同樣，與phpmyadmin相比，它更直觀，更聰明。

##用adminer   {#manage}管理數據庫
在本管理教程的部分中，我們將仔細研究如何使用Adminer管理數據庫。
**系統要求**
為了使Adminer在系統上運行，重要的是要在服務器上設置以下要求：
  * PHP版本5、7或8
  *數據庫驅動程序，例如mysql，sqlite，postgresql等
**安裝**
如果您檢查了這兩個系統要求，則只需從[][8]下載文件，然後通過將PHP文件上傳到服務器開始。對於XAMPP服務器，將下載的文件重命名為“ adminer.php”，然後將此文件放入HTDOCS文件夾中。
**訪問用戶界面**
經歷了什麼是管理員？現在，從http訪問此應用：您 -  ip-address/adminer.php如圖：
{{_LINE_42_}}
**連接到服務器**
使用服務器的用戶名和密碼登錄此免費數據庫管理工具。現在，如果僅要訪問一個數據庫，請輸入其名稱。您可以將此字段留空以訪問服務器上已經存在的所有數據庫。
**管理數據庫**
登錄後，您將看到所有當前數據庫的列表。單擊任何數據庫進行管理。

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="使用Adminer數據庫管理工具管理數據庫">}}

在下一個屏幕上，您將看到所選數據庫的所有表的列表。從這裡，您可以導出數據庫或其表，添加或編輯表/列，通過SQL查詢更改數據等等，如下所示：

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="數據庫管理工具">}}

**創建新數據庫**
要創建一個新的數據庫，請單擊“創建數據庫”，輸入數據庫名稱，然後單擊“保存”。

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="數據庫管理工具">}}

**插入/更新記錄**
將新記錄添加到表非常簡單。單擊將您將您重定向到插入屏幕的新項目鏈接。在這裡，您將能夠為表中的所有列添加新數據，以及數據類型，因此添加新數據是一個快速的過程。

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="管理員與phpmyadmin">}}


##結論 {#conclusion}
這將我們帶到了本管理教程的結尾。我們已經介紹了一些重要主題，例如Adminer，Adminer vs PhpMyAdmin以及此開源基於Web的數據庫管理系統的其他方面。希望，如果您想安裝開源數據庫管理工具，這篇博客文章肯定會為您提供幫助。它是直觀，智能且易於使用的界面，使其成為一個非常流行的數據庫管理工具。此外，它支持許多數據庫，包括MySQL，Sqlite，MongoDB等，以及保護和防止任何惡意黑客事件的安全措施。總而言之，此數據庫管理工具不僅是開源的，而且可以免費使用。
最後，[Containerize.com][9]不斷地撰寫有關進一步開源產品和主題的博客文章。因此，請與[10]類別保持聯繫，以進行常規更新。此外，您可以在我們的社交媒體帳戶上關注我們[Facebook][11]，[LinkedIn][12]和[Twitter][13]。

## 探索
要了解有關免費基於Web的數據庫管理工具的更多信息，請檢查以下頁面：
  * [管理員|免費的基於Web的數據庫管理系統][14]
  * [頂部開源DBMS軟件工具][1]
  * [2021年的前5名開源數據庫管理工具][15]
  * [使用免費和開源軟件自動化業務運營][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
