---
title: "什麼是JavaScript數據類型？ |初學者指南" 
seoTitle: "什麼是JavaScript數據類型？ |初學者指南" 
description: "什麼是JavaScript數據類型？請遵循本初學者指南，以學習JavaScript號碼，字符串，布爾值，空，未定義等的7種數據類型。" 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "JavaScript的受歡迎程度由於其適應性而無法阻擋。遵循此JavaScript初學者指南，並開始培養您在JS堆棧中的專業知識。" 
url: /zh-hant/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## JavaScript的受歡迎程度由於其適應性而無法阻擋。遵循此JavaScript初學者指南，並開始培養您在JS堆棧中的專業知識。

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |什麼是JavaScript數據類型？ |初學者指南">}}


## 概述
無論您是平庸的水平還是經驗豐富的開發人員，您都會為開發工作中的問題提供解決方案。 [Containerize.com][1]已經開始在編程類別中編寫教程博客文章，我們從  **JavaScript初學者指南** 開始。由於我們是開始的，因此本文是關於JavaScript數據類型的。讓我們探索  **什麼是JavaScript數據類型**  ，並查看如何有效地在源代碼中使用它們的示例。因此，徹底詳細介紹本初學者指南，以便您可以很好地了解 **JavaScript數據類型**  。
我們正在介紹以下幾點：
  * [什麼是數據類型？][2]
  * [什麼是JavaScript數據類型？][3]

## 解釋的數據類型|什麼是數據類型？ {#What-is-a-data-type}

數據類型就是要告訴編譯器如何解釋或編譯數據。數據類型的使用至關重要，必須明智地使用。簡而言之，它是關於數據的格式，例如數字，字符串，布爾值等。但是，有兩類數據類型原始數據類型和非主要數據類型。我們將在下一節中進行八種原始數據類型。

## 什麼是JavaScript數據類型？ {#What-are-JavaScript-Data-Types}

實際上，JavaScript是一種鬆散的類型語言，這意味著您不必明確定義變量類型。您可以為變量分配任何值，該變量將存儲該值，例如字符串，BigInt，Boolean或更多。

{{< figure align=center src="images/web-development.png" alt="JavaScript初學者指南">}}


####原始數據類型
原始數據類型是不變的，在創建和初始化之後無法更改。但是，您可以重新分配一個新值，但不能突變現有值。
例如：
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
在上面的示例中，字符串是一種原始數據類型，舊值被新值替換，但是現有值的變化並未反映。因此，我們可以看到它仍然是“我的名字已更改”而不是“我的名字已更改”；

####非主要數據類型
非主要數據類型是可變的，簡單的單詞與原始數據類型相反。
例如：
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
另外，按值比較原始數據類型，並始終通過參考比較非促進數據類型。
例如：
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
現在，讓我們一一瀏覽數據類型。有6種原始數據類型和1種非主要數據類型。
 **原始數據類型包括:**  
*  **字符串**  ：此數據類型代表文本數據，該數據由引號包圍的字符序列組成。
*  **數字**  ：它表示十進制/非確定數據，尤其是整數或浮點。
*  **布爾值**  ：邏輯值的表示為或錯誤。
*  **符號**  ：符號用於保持獨特的值。
*  **未定義**  ：一個沒有任何值或非初始化變量的變量。
*  **null**  ：沒有任何值被視為null。
 **非主要數據類型包括:**  
 **對象** ：它用於存儲由鍵值對組成的數據集合。

## 結論
這是該  **JavaScript初學者指南的終結** 。我們已經經歷了  **什麼是JavaScript數據類型**  ？此外，我們還探索了什麼是簡而言之的數據類型。您應該更好地理解JavaScript中的非主要和 **原始數據類型**  。如果您想為求職面試做準備，這篇博客文章確實會為您提供幫助。
最後，[Containerize.com][1]是不斷地撰寫有關進一步開源產品和主題的博客文章。此外，您可以在我們的社交媒體帳戶[Facebook][4]，[LinkedIn][5]和[Twitter][6]上關注我們。

## 問一個問題
您可以在我們的[論壇][7]上讓我們知道您的問題或查詢。

##常見問題解答
 **8種JavaScript數據類型是什麼？** 
請訪問此[鏈接][3]以了解8種JavaScript數據類型。

## 也可以看看
  * [免費和開源流行的JavaScript框架][8]
  * [使用免費和開源軟件自動化業務運營][9]
  * [2022年學習的十大開源技術][10]



 [1]: https://www.containerize.com/
 [2]: #What-is-a-data-type
 [3]: #What-are-JavaScript-Data-Types
 [4]: https://web.facebook.com/containerize
 [5]: https://www.linkedin.com/company/containerize/
 [6]: https://twitter.com/containerize_co
 [7]: https://forum.containerize.com/
 [8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
 [9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
 [10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
