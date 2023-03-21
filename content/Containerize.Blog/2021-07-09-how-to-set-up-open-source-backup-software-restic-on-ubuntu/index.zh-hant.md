---
title: "如何在Ubuntu上設置開源備份軟件Restic" 
seoTitle: "如何在Ubuntu上設置開源備份軟件Restic" 
description: "Restic是一種快速，安全，也是最好的開源備份軟件之一。它支持AWS S3，Microsoft Azure，Google Cloud和其他後端選項。" 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "使用開源備份軟件進行備份，然後將其存儲在本地或外部後端。 Restic是跨平台，並支持多種存儲類型。" 
url: /zh-hant/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

##使用開源備份軟件進行備份，然後將其存儲在本地或外部後端。 Restic是跨平台，並支持多種存儲類型。

{{< figure align=center src="images/restic-post-banner.png" alt="開源備份軟件">}}

備份系統對企業和個人都非常重要。由於網絡攻擊，系統故障，意外刪除等各種原因，數據可能會丟失。您應該有一個良好的備份策略，以便可以快速恢復數據。本指南將向您展示如何在Ubuntu服務器上安裝和使用**開源備份軟件** RESTIC。
我們已經介紹了本教程中的以下各節。
  *[**先決條件**][1]
  *[**什麼是restic？**][2]
  *[ **RESTIC安裝** ][3]
  *[ **restic配置** ][4]
  *[ **restic ** 替代品][5]
  * **[結論][6]**

##先決條件 {#prerequisites}
Restic備份軟件程序支持三個主要操作系統Linux，MACOS和Windows。在安裝 **RESTIC備份** 之前，您應該滿足以下系統要求。
  *帶有ubuntu操作系統的機器或台式系統，該操作系統容納要備份的數據
  *最新的Ubuntu服務器實例
  *在兩個客戶端和服務器之間配置了SSH密鑰身份驗證
  *具有sudo特權的非根本用戶
掌握這些位，讓我們開始工作。

##什麼是restic？   {#restic}
[ **Restic ** ][7]是一個很棒的**開源備份工具**。快速，安全且高效的免費備份實用程序**。它是跨平台備份程序，因此它將在Linux，BSD，Mac OS X和Windows上運行。 Restic最佳開源備份軟件易於運行，並且不需要服務器或複雜的配置。它創建了修改後的數據的備份，並允許用戶在必要時對其進行還原。此外，它提供了各種存儲選項，包括自託管和互聯網存儲。此外，Restic開源自託管雲存儲使用強大的加密技術來保護您的數據。
Restic不是一個簡單的文件複製實用程序。它主要基於兩個概念：快照和存儲庫。  **Restic ** 開源備份解決方案將信息保存為快照，然後將其保存在存儲庫中。它用GO編程語言編寫。基於RESTIC GO的備份實用程序和開源備份應用程序與許多雲和本地後端存儲系統平穩地工作。 RESTIC開源文件備份軟件的源代碼可在[ **github ** ][8]上獲得。但是，您可以找到用於安裝和用法的詳細[**文檔**][9]。
RESTIC自託管的雲備份支持備用後端以備份存儲。
  *本地目錄
  * SFTP服務器（通過SSH）
  * REST服務器
  * AWS S3
  * Minio服務器
  * 芥末
  *阿里巴巴雲
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blob存儲
  * Google雲存儲
除了上面列出的外觀外，您還可以將[ **rclone ** ][10]用於各種後端。

## Restic安裝 {#installation}
有多種方法可以在Ubuntu操作系統上安裝最佳自託管雲存儲。我們將使用Ubuntu軟件包，Docker和源代碼涵蓋RESTIC自託管文件存儲的安裝。

###使用軟件包安裝
  *運行下面的命令以在Ubuntu OS上安裝Restic開源備份服務器。
```
$ sudo apt-get install restic
```

###使用Docker安裝
  *從Dockerhub獲取RESTIC圖像。
```
$ docker pull restic/restic
```

###使用源安裝
  *首先，您需要安裝GO編程語言以從源設置Restic。您可以訪問官方[ **Golang網站** ][11]，以便安裝的說明。
  *接下來，執行下面的命令以安裝RETSIC增量備份。
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  *通過在命令中指定目標操作系統，您可以快速為所有受支持的平台編譯Restic。這裡有一些例子。
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Restic配置 {#Configuration}
正如我們上面已經提到的那樣，Restic開源備份系統基於快照和存儲庫以備備份。讓我們看一下如何設置存儲庫，拿起快照，然後恢復備份。

###創建存儲庫
  *運行以下命令以初始化存儲庫。您還需要為存儲庫設置密碼。
```
$ restic init --repo /tmp/
```

###備份數據到本地目錄
  *在第一步中，我們創建了一個存儲庫來存儲數據。現在，我們將將數據添加到存儲庫中以進行備份。執行以下命令。
```
$ restic --repo /tmp/backup backup ~/work
```

###還原備份
  *還原命令還原文件和目錄。使用Restic開源雲備份時，文件未恢復到其原始位置。您必須選擇一個目標位置，以使文件恢復。
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  *但是，您可以在不指定快照ID的情況下還原最新的快照。您需要在下面的命令中添加最新參數。
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

###使用快照
在本節中，我們將查看一些快照的功能。
  *運行以下命令以列出Snaphosts。
```
$ restic snapshots -r /tmp/backup
```
  *您可以將兩個快照與以下命令進行比較。
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  *您可能需要刪除舊備份以釋放存儲空間。要刪除快照，請在下面運行命令。
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## Restic的替代品
Restic是最受歡迎的開源備份軟件應用程序，它保證了重要文件數據的機密性和完整性。以下是RESTIC數據備份工具的最受歡迎的替代方案和頂級競爭者。
  *亞馬遜冰川
  *複製
  * runrestic
  * AFI
  *雨天備份
  *博格
  * Veeam備份
  * AWS存儲網關
  *粘性

## 結論
在本文中，我們介紹了Restic **免費的開源備份軟件**。我們還討論了幾種安裝技術，以及如何創建備份以及如何還原備份。還有許多其他形式的數據備份存儲，我們剛剛在本文中解決了一個。其餘的後端存儲類型將在未來的出版物中介紹。我們希望本教程將為您提供使用Restic最佳開源備份工具的起點，以獲取和還原備份。
最後，[ **containerize.com ** ][12]正在始終如一地編寫有關更多最新開源產品的博客文章。因此，與此[**備份軟件**][13]類別保持聯繫，以獲取最新更新。
_您最喜歡的免費和開源備份軟件是什麼？您對開源備份軟件有任何疑問嗎？

## 探索：
我們還提供了來自OSS Watch的其他幾個相關信息：
  * [2021年的前5個開源雲存儲軟件][15]
  * [如何在Ubuntu Server上使用Apache安裝NextCloud][16]
  * [在Ubuntu上使用Apache安裝和配置OwnCloud][17]
  * [如何在Ubuntu上安裝PYDIO文件共享和同步平台][18]
  * [NSQ VS KAFKA |什麼是主要區別？][19]
  * [NextCloud vs ownCloud |有什麼區別？][20]
  * [最佳開源雲存儲和文件共享軟件][21]

  
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
