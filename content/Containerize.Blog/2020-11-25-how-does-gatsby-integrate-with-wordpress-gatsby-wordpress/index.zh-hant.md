---
title: "Gatsby如何與WordPress集成？ |蓋茨比WordPress" 
seoTitle: "Gatsby如何與WordPress集成？ |蓋茨比WordPress" 
description: "一起使用Gatsby WordPress來提高網站的速度，可擴展性和安全性。在本教程中，您將學習如何使用這些開源軟件。" 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "使用WordPress配置開源Gatsby，以帶來更多的用戶體驗和整體性能。讓我們學習如何使用此靜態站點生成器。" 
url: /zh-hant/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## 使用WordPress配置開源Gatsby，以帶來更大的用戶體驗和整體性能。讓我們學習如何使用此靜態站點生成器。

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="蓋茨比WordPress">}}


## 概述
Gatsbyjs是一種基於GraphQl驅動的靜態站點生成器的免費開源反應。它使用功能強大的預配置來構建一個網站，該網站僅使用靜態文件來實現令人難以置信的快速頁面加載。 WordPress是一個很棒的開源博客平台。結果，有很多人知道如何弄清楚網站是否是WordPress網站，以便他們可以黑客入侵並竊取信息。一起使用Gatsby WordPress將為您提供WordPress內容管理和Gatsby速度的相同功能。
在本文中，我們將研究蓋茨比是什麼以及為什麼需要將其與CMS軟件一起使用。然後，我們將詳細介紹如何使用WordPress和Gatsby一起建立出色的網站體驗。開始吧！
* [**什麼是蓋茨比**？][1]
* **[使用WordPress和Gatsby的利弊][2]**
* **[如何將Gatsby與WordPress一起使用][3]**
* **[結論][4]**

## 什麼是gatsby   {#gatsby}
蓋茨比是靜態站點生成器。這意味著Gatsby生成了上傳到網站服務器的靜態HTML文件。當訪問者降落在您的網站上時，這些靜態文件就會將其提供給其瀏覽器，而不是動態內容WordPress通常使用。這是一個基於React的免費開源框架，可幫助開發人員構建熾烈的網站和應用程序。

## 使用WordPress和Gatsby   {#proscons}的優點和缺點
根據蓋茨比（Gatsby）的官方[文件][5]，他們已經編譯了一張桌子，蓋茨比WordPress的組合很棒，而不是。為了輕鬆，我在這裡列出這些。
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress和Gatsby非常適合
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        對WordPress內容編輯體驗感到滿意的內容團隊
{{_LINE_31_}}
{{_LINE_32_}}
        使用流行的開源技術重視的開發團隊
{{_LINE_34_}}
{{_LINE_35_}}
        重新設計了已存儲在WordPress中的內容的網站
{{_LINE_37_}}
{{_LINE_38_}}
        想要擁有他們的數據和技術堆棧的團隊
{{_LINE_40_}}
{{_LINE_41_}}
        複雜的訪問控制工作流或內容建模限制
{{_LINE_43_}}
{{_LINE_44_}}
        安全很重要的項目
{{_LINE_46_}}
{{_LINE_47_}}
        高需求項目至關重要
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress和Gatsby並不適合
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        需要使用WordPress UI主題的團隊
{{_LINE_59_}}
{{_LINE_60_}}
        那些尋找完全管理的雲CMS的人
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
除了這些官方觀點，我還想列出一些一起使用蓋茨比WordPress的利弊
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      優點
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        更快的負載速度 - 靜態網站的加載速度比動態更快。結果，它會影響您的頁面加載速度和SEO排名。
{{_LINE_75_}}
{{_LINE_76_}}
        服務器成本較小 - 由於靜態文件不需要特殊的軟件，因此也可以從便宜的服務器中提供靜態HTML頁面。
{{_LINE_78_}}
{{_LINE_79_}}
        更安全 - 對於靜態站點，沒有零件的移動組件，因此黑客沒有機會利用您的軟件。
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      缺點
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        學習曲線 - 它需要開發人員的其他技能。像Learning ReactJ和GraphQl
{{_LINE_93_}}
{{_LINE_94_}}
        僅靜態內容 - 如果您需要提供任何動態內容。那蓋茨比不適合你。它只能服務器靜態文件。因此，您無法擁有從數據庫中獲取數據的任何評論系統。
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## 如何將gatsby與wordpress   {#howto}使用
在安裝Gatsby之前，您需要在網站環境中安裝[Nodejs][6]和[NPM][7]。

###步驟1  - 安裝蓋茨比
```
npm install -g gatsby-cli
```
此命令自動運行安裝程序。它在安裝Gatsby之前下載並安裝所有依賴關係。完成後，您可以開始創建第一個蓋茨比網站。
```
gatsby new gatsby-site
```
這將下載Gatsby的入門模板，並將其放置在目錄/蓋茨比字眼中。安裝完成後，您可以打開網站的開發版本
```
gatsby develop
```
現在，在您的Web瀏覽器中，輸入_http：// localhost：8000_，您的默認模板應打開。

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Gatsby入門模板">}}


###步驟2  - 將Gatsby連接到WordPress
在Gatsby WordPress指南的這一部分中，我們將使用WordPress連接此靜態站點生成器。您有一個基本的靜態網站，但是您需要將其與WordPress集成。這將您的蓋茨比網站指向WordPress博客的地址，使其在運行開發服務器時可以提取最新數據。連接後，蓋茨比將根據您當前的模板構建靜態網站。
從NPM存儲庫安裝gatsby源WordPress插件。
```
npm install gatsby-source-wordpress
```

###步驟3  - 配置蓋茨比
將以下代碼放在您的_gatsby-config.js_文件中
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
更新此代碼以指向您的WordPress網站。如果您的網站是本地託管的，則可以使用_localhost：8888/wordpress_而不是網站的URL。保存文件後，您需要構建頁面模板。

###步驟4  - 構建頁面模板
構建頁面模板使本網站生成器能夠在WordPress網站上為每個頁面生成帖子。源插件將從WordPress中獲取這些頁面的數據，但是您必須創建設計模板。
在您的_gatsby-node.js_文件中，添加以下代碼
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
調用所有數據後，Gatsby將為每個帖子生成一個頁面。使用開發命令，您可以使用生成的URL導航到每個新頁面。

## 結論 {#conclusion}
在這個蓋茨比WordPress教程中，我們介紹瞭如何從WordPress生成Gatsby網站。我們了解了這兩個開源軟件的優缺點。我們還介紹瞭如何從Gatsby開發環境開始安裝和開始。
最後，[Containerize.com][8]正在撰寫有關進一步開源產品的文章。因此，請與開源[Blogging][9]平台類別保持聯繫，以進行常規新聞和更新。

  
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
