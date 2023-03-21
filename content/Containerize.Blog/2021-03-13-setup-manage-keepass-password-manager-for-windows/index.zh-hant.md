---
title: "設置並管理Windows的KeepAss密碼管理器" 
seoTitle: "設置並管理Windows的KeepAss密碼管理器" 
description: "Keepass是一個受歡迎，安全，免費和開源密碼管理器。本指南將幫助Windows用戶使用keepass設置和管理密碼。" 
date: Sat, 13 Mar 2021 07:34:04 +0000
author: bilalahmed
summary: "Keepass是一個受歡迎，安全，免費和開源密碼管理器。本指南將幫助Windows用戶使用keepass設置和管理密碼。" 
url: /zh-hant/password-management/setup-manage-keepass-password-manager-for-windows/
categories: ['Password Management']
---

## keepass是一個受歡迎，安全，免費和開源密碼管理器。本指南將幫助Windows用戶使用keepass設置和管理密碼。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows.png" alt="設置並管理Windows的KeepAss密碼管理器">}}


## 概述 {#overview}
記住不同網站和應用程序的所有不同密碼組合併不是一件容易的事，而在紙上寫下它們似乎是一個簡單的解決方案。這種方法沒有太多的安全性，因為您很容易丟失它，否則它可能落入了錯誤的人的手中。 **Windows的KeepAss密碼管理器** 是解決這些問題的解決方案之一。
另一方面，密碼管理器使用戶可以輕鬆地將所有密碼存儲在一個地方，並在需要時訪問它們。 keepass是**最好的開源密碼管理器之一**，不僅可以免費下載，而且可以將密碼文件存儲在USB上或將其上傳到您的Dropbox，Google Drive或其他雲存儲選項。通過端到端加密，只有密碼的所有者才能使用主密鑰訪問密碼文件，從而保證安全性。作為開源密碼管理器keepass，具有技術知識的用戶還可以自己檢查源代碼，以確保沒有丟失的安全功能。
  * [在Windows上設置Keepass][1]
  * [使用keepass管理密碼][2]
  * [結論][3]

## 在Windows   {#setup}上設置keepass
**下載並安裝**
在安裝KeepAss軟件之前，請確保您使用Windows版本7、8或10，並具有最新版本的KeepAss密碼管理器。您可以通過進入Windows安裝程序並單擊Windows  **keepass 2.47** 。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-1-download-1024x495.png" alt="設置並管理Windows的KeepAss密碼管理器">}}

下載完成後，運行安裝程序，將提示您啟用或禁用自動檢查，以獲取keepass Manager的最新更新。這並不意味著未經許可將自動下載或安裝最新版本。 Keepass服務器開源軟件已在GNU GPL下許可。安裝後，現在您將看到一個空白窗口如下：

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open.png" alt="設置並管理Windows的KeepAss密碼管理器">}}

**創建新數據庫**
現在，我們將開始創建一個數據庫來存儲您的密碼，這是步驟。單擊**文件**。選擇**新**將創建數據庫。您將看到以下提示。單擊**好的。**

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open-new-db.png" alt="設置並管理Windows的KeepAss密碼管理器打開新DB">}}

在這裡，您將提示您保存**。kdbx文件**（將包含所有密碼）在計算機上。確保將其保存在同一文件夾中，該文件夾位於計算機上的Teamass。

## 使用keepass   {#manage}管理密碼
**創建主密碼**
現在，您將必須創建一個主密鑰，該密鑰將是您能夠訪問.KDBX文件的密碼。確保密碼包含大寫，小寫字母，特殊字符，數字等的組合。創建一個強，無法訪問的主密鑰非常重要，因為它將確定密碼數據庫的安全性。 KeepAss免費密碼管理器還將提供有關主密鑰的強度或弱的指標。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-master-password.png" alt="設置並管理Windows的KeepAss密碼管理器">}}

**保存密碼**
創建主密鑰後，數據庫將打開，您可以在其中開始保存密碼。 keepass提供2個密碼條目，為默認情況，您可以刪除它們並開始添加自己的。

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-save-pw.png" alt="設置並管理Windows的KeepAss密碼管理器">}}

要創建一個新的條目，請單擊“黃色密鑰”圖標以生成新的密碼條目。將打開一個新屏幕，需要您輸入密碼，重複該密碼，提供將使用此密碼，用戶名等的URL。輸入密碼時，它將被點隱藏，可以通過單擊右側的**三個點圖標**來揭示。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-new-entry.png" alt="設置並管理Windows的KeepAss密碼管理器">}}

**使用keepass登錄**
使用保存在數據庫上的密碼登錄：
  *右鍵單擊密碼條目，然後選擇**複製用戶名**現在將此用戶名粘貼到網站的用戶名中。
  *現在，右鍵單擊keepass密碼管理器中的同一條目，然後選擇**複印密碼**，然後將其粘貼到密碼字段所在的網站中。
  *請注意，您必須快速使用複制和粘貼，因為在12秒後通過keepass從剪貼板中刪除了密碼。可以通過keepass密碼安全管理器更改此時間約束。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-copy.png" alt="設置並管理Windows的KeepAss密碼管理器">}}

**其他密碼管理器選項要考慮：**
市場上還有數十個其他開源密碼管理器。您可以通過使用安全，流行，自託管和開源密碼管理器來存儲獨特而復雜的密碼來確保帳戶憑據安全。以下列出的是一些頂級密碼管理器：
  *[ **PADLOC** ][4]被設計為家庭和團隊的簡單，安全的簡約密碼管理器和數據管理。
  *[ **Passbolt** ][5]是一個自託管的自託管，易於訪問的密碼管理器，專為敏捷和DevOps團隊的需求而設計。
  *[**密碼安全**][6]是開源密碼管理器程序，具有安全，易於理解的界面。
  *[ **bitwarden** ][7]是一個安全的，可以免費下載和開源的集成密碼管理解決方案。
  *[ **PSONO** ][8]是團隊的自託管憑據和密碼經理。它提供了多層加密，以實現最大的安全性。

## 結論 {#conclusion}
Keepass是一種簡單，安全且便攜的方式來管理密碼。它允許您自定義密碼，生成安全組合，並使用用戶名為不同的網站保存多個密碼條目。使用最佳密碼管理器KeepAss也是安全的，因為它使用了端到端的加密機制，並依賴於SH-256哈希功能來獲得最大的安全性。
此外，[**containerize.com **][9]正在以多種語言和框架來增強開源產品的堆棧。有關定期更新，請繼續關注**  [密碼管理][10]**類別以獲取更多有趣的文章。

## 探索
在本文中，我們討論瞭如何設置和管理Windows的KeepAss密碼管理器。您可能會發現以下鏈接相關：
  * **[2021年的前5名開源密碼管理器][11]**
  * **[最佳開源密碼管理軟件][12]**
  * **[keepass |安全，便攜式和開源密碼管理器][13]**

  
[1]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#setup
[2]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#manage
[3]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#conclusion
[4]: https://padloc.app/
[5]: https://products.containerize.com/password-management/passbolt/
[6]: https://products.containerize.com/password-management/password-safe/
[7]: https://products.containerize.com/password-management/bitwarden/
[8]: https://products.containerize.com/password-management/psono/
[9]: https://www.containerize.com/
[10]: https://blog.containerize.com/category/password-management/
[11]: https://blog.containerize.com/password-management/top-5-open-source-password-managers-in-2021/
[12]: https://products.containerize.com/password-management/
[13]: https://products.containerize.com/password-management/keepass
