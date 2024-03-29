---
title: "2021年的前5個開源數字法醫工具" 
seoTitle: "2021年的前5個開源數字法醫工具" 
description: "數字法醫工具有助於使數字法醫流程簡單易於法律程序。本文列出了開源數字法醫工具。" 
date: Mon, 30 Aug 2021 03:34:47 +0000
author: yasir saeed
summary: "數字法醫工具有助於調查，保存，提取和記錄法律程序的計算機證據。本文側重於數字法醫工具。" 
url: /zh-hant/top-5-open-source-digital-forensic-tools-in-2021/
categories: ['Digital Forensic Tools']
---

##數字法醫工具有助於調查，保存，提取和記錄法律程序的計算機證據。本文側重於數字法醫工具。

{{< figure align=center src="images/open-source-digital-forensic-tools.png" alt="2021年的前5個開源數字法醫工具">}}


## **概述** 
數字法醫工具有助於調查，識別，提取，保存和數字證據文檔。這些工具涉及刑事案件期間關於在計算機和其他數字設備上發現的數字證據的事實的收集，這些證據可供法院使用。有許多開源數字取證工具可以幫助您簡單簡單地使取證過程變得簡單。這些數字取證軟件（DFS）應用程序生成了可用於法律程序中的犯罪事件的完整報告。隨著網絡犯罪的繁榮和發展，執法組織需要捍衛和調查事件的工具艦隊。
數字證據或電子證據可以在許多不同的平台上存在，並且以許多不同形式的法院案件可能在審判中使用。無論是內部資源案例，對未經授權的服務器訪問還是移動設備進行調查，開源數字法醫工具都將幫助您對系統罩下的內容進行深入分析。法醫調查包括與犯罪相關的身體證據，網絡活動分析，指紋，文件，電子郵件，硬盤驅動器和線索來源，以確定犯罪的發生方式。使用正確的數字取證工具將始終幫助您更快地進行調查，並取得更大的成果。
下面的博客文章概述了2021年用於計算機取證調查的頂級開源數字法醫工具，以及購買或獲取流行的數字取證軟件（DFS）工具時應考慮的安全組織應考慮的。
* 移動驗證工具包（MVT）
  * Wireshark
* 偵探套件和屍檢
* 波動性框架
* 沒有調查法律工具包（SIFT）
* 為什麼需要數字法醫軟件？
  * 最後的想法

## 1.移動驗證工具包（MVT） -  Android和iOS分析
大赦國際發布了一個稱為[移動驗證工具包或MVT][1]的工具包，以幫助您找到法醫痕跡，以了解Pegasus間諜軟件是否針對您的iOS或Andriod手機。
**特徵**：
* 解密加密的iOS備份。
* 來自iOS系統的過程和解析記錄。
* 從Android設備提取已安裝的應用程序。
* 通過ADB協議從Android設備中提取診斷信息。
* 將提取的記錄與Stix2格式的惡意指標列表進行比較。
* 生成提取記錄的JSON日誌。
* 所有檢測到的惡意痕蹟的JSON日誌。
* 生成統一的按時間順序排列的提取記錄，
* 生成一個時間軸所有檢測到的惡意痕跡。
**關聯**：

## 2. Wireshark  - 網絡協議分析 {#ce62}

[Wireshark][2]是分析網絡數據包的工具。它可用於網絡測試和故障排除。此工具可幫助您檢查通過計算機系統的不同流量。
**特徵**：
* 它提供了豐富的VoIP（通過Internet協議的語音）分析。
* 捕獲用GZIP壓縮的文件可以輕鬆解壓縮。
* 輸出可以導出到XML（可擴展的標記語言），CSV（逗號分隔值）文件或純文本。
* 可以從網絡，藍牙，ATM，USB等中讀取實時數據。
* 對包括IPSEC（Internet協議安全性），SSL（安全套接字層）和WEP（有線等效隱私）的許多協議的解密支持。
* 您可以將直觀分析和著色規則應用於數據包。
* 允許您以任何格式讀取或寫文件。
**鏈接**：[https://www.wireshark.org][2]

## 3.偵探套件和屍檢 - 磁盤分析 {#ce62}

[偵察套件和屍檢][3]是一種基於Windows的實用工具，可使計算機系統的法醫分析更加容易。此工具使您可以檢查硬盤驅動器和智能手機。
**特徵**：
* 您可以有效地使用圖形接口識別活動。
* 該應用程序提供了電子郵件分析。
* 您可以按其類型分組文件以查找所有文檔或圖像。
* 它顯示圖像的縮略圖快速查看圖片。
* 您可以使用任意標籤名稱標記文件。
* 偵探套件使您可以從呼叫日誌，SMS，聯繫人等中提取數據。
* 它可以幫助您根據路徑和名稱來標記文件和文件夾。
**鏈接**：[https://www.sleuthkit.org][3]

## 4.波動性框架 - 內存取證 {#ce62}

[波動率框架][4]是用於內存分析和取證的軟件。它是最好的法醫成像工具之一，可幫助您使用RAM中的數據測試系統的運行時狀態。該應用程序允許您與隊友合作。
**特徵**：
* 它具有API，可讓您快速查找PTE（PAGE TABLE條目）標誌。
* 波動率框架支持KASLR（內核地址空間佈局隨機化）。
* 該工具提供了許多用於檢查MAC文件操作的插件。
* 當服務無法啟動多次時，它會自動運行故障命令。
**鏈接**：[https://www.volatilityfoundation.org][4]

## 5.無需調查法律工具包（SIFT） -  sift工作站Ubuntu {#b49b}

[SANS SIFT][5]是基於Ubuntu的計算機取證分佈。它是提供數字法醫和事件響應檢查設施的最好的計算機法醫工具之一。
**特徵**：
* 它可以在64位操作系統上使用。
* 此工具可幫助用戶更好地利用內存。
* 它會自動更新DFIR（數字取證和事件響應）軟件包。
* 您可以通過SIFT-CLI（命令行界面）安裝程序安裝它。
* 該工具包含許多最新的法醫工具和技術。
**鏈接**：[https：//digital-forensics.sans.org/][6]

##為什麼您需要數字法醫軟件？
您需要數字取證工具，因為它在全面的網絡安全基礎架構中起著重要作用。數字取證和網絡安全共同努力，以保護您的在線形象和私人數據信息。在安全事件的背景下，數字取證軟件（DFS）專門研究IT系統，路由器或服務器。
數字取證對公司以及律師事務所都可以識別網絡威脅。您的業務需要數字法證工具來通過降低身份盜用，欺詐和其他數字犯罪的風險來提高網絡安全。數字取證工具使用複雜的工具收集信息，以使一個人伸張正義，以利用或篡改私人信息。

## 最後的想法： {#4a1a}

與傳統方法相比，我們已經討論了最受歡迎的開源數字法醫工具，這些工具涵蓋了許多實現，其周轉時間更快。數據取證工具在很大程度上以技術驅動為驅動，並具有快速的手動分析替代方案。這些是您可以用於取證的一些頂級免費工具。我們希望您喜歡閱讀清單。在即將發布的博客文章中，我們將討論有關開源數字法醫工具的更多有趣主題。
_您可以加入我們的[Twitter][7]，[LinkedIn][8]和我們的[Facebook][9]頁面。您喜歡哪種開源數字法醫工具？如果您有任何疑問或反饋，請_ [聯繫][10]。

## 探索：
我們還可能喜歡其他幾篇文章。
  * [頂部開源數字法醫工具][11]
  * [移動驗證工具包或NSO組Pegasus以色列間諜軟件的MVT工具][1]



[1]: https://products.containerize.com/digital-forensic-software/mvt/
[2]: https://www.wireshark.org/
[3]: https://www.sleuthkit.org/
[4]: https://www.volatilityfoundation.org/
[5]: https://www.sans.org/tools/sift-workstation/
[6]: https://digital-forensics.sans.org/community/downloads/
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://products.containerize.com/digital-forensic-software/
