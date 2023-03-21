---
title: "設置phplist中的高級反彈管理和反彈規則" 
seoTitle: "設置phplist中的高級反彈管理和反彈規則" 
description: "在phplist中啟用高級彈跳管理，並處理彈跳電子郵件。創建反彈規則並自動化過程，以對返回的消息採取各種操作。" 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "根據MTA返回的彈跳錯誤代碼類型，高級反彈管理允許自動執行不同的操作。" 
url: /zh-hant/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## 根據MTA返回的彈跳錯誤代碼類型，高級彈跳管理允許自動執行不同的操作。

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="設置phplist中的高級反彈管理和反彈規則">}}

在我們的[先前][1]教程中，我們已經解決了 **phplist彈跳處理** 。如果您不熟悉Bounce處理，則可以閱讀它。您可以使用Bounce處理下載未傳遞的電子郵件將其下載到您的phplist項目。您如何處理下載的電子郵件？不知道，讓我們看一下預先反彈管理，使您可以整理**彈跳電子郵件**。每個返回的電子郵件都有MTA（郵件傳輸代理）返回的錯誤代碼。此外，您可以查看返回的消息電子郵件頭，其中包含沿錯誤代碼的所有信息。
  * [啟用高級反彈處理][2]
  * [添加彈跳規則][3]
  * [列表彈跳規則][4]
  * [結論][5]

## 啟用高級彈跳處理 {#enable}
首先，首先，通過在config.php文件中復制下面的代碼來啟用高級**彈跳處理**。
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
之後，導航到**系統>管理彈跳>列表彈跳規則**用於創建彈跳規則。
您可以根據正則表達式創建彈跳規則。您可以找到為什麼**電子郵件彈回**的原因，然後將其用於正則表達式。此外，根據錯誤代碼或正則表達式選擇適當的操作。 Phplist支持以下操作。行動聲明是自我解釋的，因此我們不需要詳細介紹。
  *刪除訂戶
  *未經證實的訂戶
  *黑名單訂戶
  *黑名單電子郵件地址
  *刪除訂戶並彈跳
  *未經確定的訂戶並刪除彈跳
  *將訂閱者添加到do-non-not列表中並刪除彈跳
  *將電子郵件地址添加到do-non-not列表中並刪除彈跳
  *刪除反彈

## 添加彈跳規則 {#add}
讓我們創建我們的第一個反彈規則。
  *首先，輸入正則表達式（如**）（帳戶已被暫停|不可用的帳戶）**
  *之後，選擇適當的動作
  *最後，為規則添加註釋/備忘錄

{{< figure align=center src="images/add-bounce-rule.png" alt="在phplist中創建彈跳規則">}}

您可以出於以下原因添加反彈規則，並選擇適當的操作來處理彈跳。但是，您可以搜索SMTP響應並在列表中添加更多規則。
  *存檔的收件人
  * type = mx：找不到主機
  * 抱歉，沒有那個名字的郵箱
  *禁用郵箱
  * 帳戶已被禁用
  *由於不活動而阻止了此郵箱
  * 用戶未知
  *沒有這樣的收件人
  * 等等 …
**注意：**您必須在括號中包裹彈跳原因，並使用管道符號 **|** 或**或**語句，如果您想在一個彈跳規則中添加多個原因。

## 列表彈跳規則 {#list}
創建數量的規則後，您的**彈跳規則**列表將如下屏幕截圖所示。您可以在此頁面上執行其他操作，例如訂單更改和刪除。

{{< figure align=center src="images/bounce-regular-expressions.png" alt="彈跳規則清單">}}


## 結論 {#conclusion}
在本教程中，我們了解了Advanced  **Bounce Management** ，並製定了必要的彈跳規則。允許使用此功能將是很棒的，以便您可以自動化清除列表中的無效電子郵件地址的過程。它還允許您維護最低返回電子郵件的水平。此外，您的列表將具有合法的訂戶。
此外，[Containerize.com][6]正在以多種語言和框架來增強開源產品的堆棧。有關定期更新，請繼續關注[新聞通訊][7]類別，以獲取更多有趣的文章。

## 探索
您可能會發現以下鏈接相關：
  * [PHPLIST  - 開源通訊和電子郵件營銷軟件][8]
  * [如何使用phplist創建和發送新聞通訊][9]
  * [如何在phplist中設置和處理彈跳][1]
  * [開發Phplist插件的初學者指南][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
