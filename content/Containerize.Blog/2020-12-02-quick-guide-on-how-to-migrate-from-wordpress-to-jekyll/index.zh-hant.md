---
title: "如何從WordPress遷移到Jekyll" 
seoTitle: "如何從WordPress遷移到Jekyll" 
description: "在本教程中，我們將以快速簡便的步驟學習如何將您的網站從WordPress遷移到Jekyll。讓我們開始吧！" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "在本教程中，我們將學習如何將您的網站從WordPress遷移到Jekyll並免費使用GitHub託管" 
url: /zh-hant/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## 在本教程中，我們將學習如何將您的網站從WordPress遷移到Jekyll，並免費使用Github託管它

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress到Jekyll">}}

Jeykll是開源靜態站點生成器。它將您的純文本轉換為靜態網站和博客。它採用您喜歡的標記（Markdown，Liquid，HTML / CSS）語言中寫的文本，並使用佈局來創建靜態網站。傑基爾（Jekyll）是博客意識到的，並且永久鏈接，類別，頁面，帖子和自定義佈局都是一流的公民。 Jekyll的最大好處之一是您可以在Github頁面上託管靜態網站，並免費運行您的網站或博客。因此，jekyll遷移的WordPress可以幫助您提高網站的性能和速度。
在此博客文章中，我們將介紹如何將現有網站或博客從WordPress遷移到Jekyll，以提高速度和性能。所以，讓我們開始吧！
* **[為什麼要遷移？][1]**
* **[安裝][2]**
* **[導入WordPress帖子和頁面][3]**
* **[使用github頁面部署][4]**
* **[結論][5]**

## 為什麼要遷移？   {#為什麼}
在Jekyll中，您可以獲得100/100 [燈塔得分][6]，因為沒有數據庫交互。而且，所有內容均已預處理並保存為HTML文件。而且，Jekyll只會提出最少的HTTP請求。因此，它超級快。

## 安裝和設置jekyll   {#install}
Jekyll用Ruby寫。因此，您必須先將其安裝在計算機上。本指南假定您已經在計算機上安裝了Ruby。如果不是，您可以遵循[官方指南][7]。
首先，我們將使用“**gem**”命令“**jekyl**”和“**bundler**”寶石，該命令將在安裝Ruby後可用。打開命令行並運行以下代碼。
```
gem install jekyll bundler
```
然後，運行以下命令創建一個新的站點。這將創建一個**myblog**文件夾。
```
jekyll new myblog
```
安裝後，您可以在本地服務器上構建網站並將其提供。
```
bundle exec jekyll serve
```
網站將在http：// localhost：4000上提供。它還在您的文件夾中生成了一個“**_站點**”文件夾，這就是該站點的最終輸出。

## 導入wordpress頁面和帖子 {#import}
WordPress的非官方插件也可以使用，但我們將遵循本教程中的官方方法。如果您想嘗試WordPess Exporter插件，請嘗試[轉到此處][8]。
要從自託管的WordPress網站導入您的帖子，請在您的終端上運行以下命令。
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
這僅導入帖子和頁面數據和內容。該進口商只會轉換您的帖子並創建YAML前後標誌。它不會導入任何佈局，樣式或外部文件（圖像，CSS等）。

## **使用GitHub頁面部署** {#deploy}
到目前為止，我們在本地創建了Jekyll博客。現在，我們將在Github上部署它。首先，我們必須使用[git][9]來控制我們的網站。在網站的文件夾中運行以下命令。
```
git init
git add .
git commit -m "Initial Commit"
```
安裝jekyll時，它應該在根部中自動創建一個“**。gitignore**”文件，至少具有以下內容。
然後，登錄到github並創建一個新的存儲庫yourname.github.io
接下來，複製存儲庫的HTTPS URL。

{{< figure align=center src="images/github-img.png" alt="github https url">}}

然後，添加遠程存儲庫並推動代碼。
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
完畢！您的網站現在必須在yourname.github.io上可用

## 結論 {#conclusion}
在本文中，我們學會瞭如何使用Jekyll網站構建靜態博客。然後，我們學會瞭如何將您的帖子和頁面從WordPress導出到Jekyll。最後，我們將最終站點部署到了GitHub頁面。

  
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
