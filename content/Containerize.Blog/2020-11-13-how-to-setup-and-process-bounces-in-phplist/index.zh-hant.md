---
title: "如何在phplist中設置和處理彈跳" 
seoTitle: "如何在phplist中設置和處理彈跳" 
description: "Phplist是強大的自託管郵件列表和新聞通訊經理。它可以幫助企業輕鬆發送新聞通訊活動並輕鬆彈跳。" 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "使用開源通訊和電子郵件營銷軟件發送廣告系列。 phplist中的設置彈跳管理和自動化彈跳處理以獲取健康郵件列表。" 
url: /zh-hant/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## 發送帶有開源新聞和電子郵件營銷軟件的廣告系列。 phplist中的設置彈跳管理和自動化彈跳處理以獲取健康郵件列表。

{{< figure align=center src="images/phplist-2.png" alt="過程彈跳phplist">}}

我們撰寫了用於實施[多租戶][1]和[發送新聞通訊活動][2]的文章。在本文中，我們將詳細介紹有關PHPLIST中的過程彈跳的要點。
  * [什麼是phplist？][3]
  * [什麼是彈跳？][4]
  * [設置反彈管理][5]
  * [如何處理彈跳？][6]
  * [結論][7]

## 什麼是phplist？   {#phplist}
Phplist是最受歡迎的免費和開源新聞通訊發送軟件。 Phplist使企業能夠向訂戶發送營銷電子郵件，產品更新和公告。它可以幫助企業管理上市，設計精美的新聞通訊，計劃活動和彈跳管理。 [閱讀更多][8]

## 什麼是彈跳？   {#彈跳}
彈跳是一條電子郵件，由於許多原因而無法傳遞並返回發件人。我們可能有郵箱已滿的原因，電子郵件地址不再有效或不正確的電子郵件地址。因此，您必須處理彈跳，以免將電子郵件發送到無效的電子郵件地址。

## 設置彈跳管理 {#setup}
為了設置彈跳管理，您需要在config.php文件中配置以下設置。

{{< figure align=center src="images/bounce-handling-phplist.png" alt="phplist-彈跳處理管理">}}

我們將在以下步驟中解釋有關這些配置的更多信息。
* 首先，您需要添加要接收彈跳消息的電子郵件地址。您可以找到**Message_envelope**變量並添加您的電子郵件地址。
* phplist可以通過兩個協議（**Mbox和pop3**）從彈跳郵箱中獲取電子郵件。因此，找到**bounce_protocol**變量並根據您的環境更改它。
* 如果您設置了**mbox**prototcol，則需要為其定義文件格式。因此，查找**bounce_mailbox**並設置路徑，例如“/var/spool/mail/listBounces”。
* 如果您已經使用了**POP3**協議，則需要配置**主機，用戶名和密碼**郵箱。您可以在上面的Sreenshot中看到這些設置。
* 除了上述**POP3**協議的設置外，您可能需要添加端口和加密。

## 如何處理彈跳？   {#過程}
phplist支持兩種用於過程彈跳的方法：手動和自動化。您將不得不創建CRON作業以自動化反彈處理。您也可以通過訪問**系統>流程彈跳**頁面手動處理彈跳。因此，首先，您需要根據您的要求手動更改**手動\ _Process \ _bounces**設置。您可以訪問[phplist文檔][9]來設置cron作業以進行彈跳。

## 結論 {#conclusion}
在這篇文章中，我們學會瞭如何配置彈跳電子郵件地址和過程彈跳。如果您的訂戶量較少，則可以輕鬆地使用手動方法處理彈跳。但是，您必須將自動彈跳處理過程用於大列表。它將節省您的時間，並幫助您創建乾淨有效的訂戶列表。

  
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
