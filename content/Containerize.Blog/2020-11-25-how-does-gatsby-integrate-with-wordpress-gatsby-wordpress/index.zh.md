---
title: "Gatsby如何与WordPress集成？ |盖茨比WordPress" 
seoTitle: "Gatsby如何与WordPress集成？ |盖茨比WordPress" 
description: "一起使用Gatsby WordPress来提高网站的速度，可扩展性和安全性。在本教程中，您将学习如何使用这些开源软件。" 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "使用WordPress配置开源Gatsby，以带来更多的用户体验和整体性能。让我们学习如何使用此静态站点生成器。" 
url: /zh/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## 使用WordPress配置开源Gatsby，以带来更大的用户体验和整体性能。让我们学习如何使用此静态站点生成器。

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="盖茨比WordPress">}}


## 概述
Gatsbyjs是一种基于GraphQl驱动的静态站点生成器的免费开源反应。它使用功能强大的预配置来构建一个网站，该网站仅使用静态文件来实现令人难以置信的快速页面加载。 WordPress是一个很棒的开源博客平台。结果，有很多人知道如何弄清楚网站是否是WordPress网站，以便他们可以黑客入侵并窃取信息。一起使用Gatsby WordPress将为您提供WordPress内容管理和Gatsby速度的相同功能。
在本文中，我们将研究盖茨比是什么以及为什么需要将其与CMS软件一起使用。然后，我们将详细介绍如何使用WordPress和Gatsby一起建立出色的网站体验。开始吧！
  *[**什么是盖茨比**？][1]
  ***[使用WordPress和Gatsby的利弊][2]** 
  ***[如何将Gatsby与WordPress一起使用][3]** 
  ***[结论][4]** 

## 什么是gatsby   {#gatsby}
盖茨比是静态站点生成器。这意味着Gatsby生成了上传到网站服务器的静态HTML文件。当访问者降落在您的网站上时，这些静态文件就会将其提供给其浏览器，而不是动态内容WordPress通常使用。这是一个基于React的免费开源框架，可帮助开发人员构建炽烈的网站和应用程序。

## 使用WordPress和Gatsby   {#proscons}的优点和缺点
根据盖茨比（Gatsby）的官方[文件][5]，他们已经编译了一张桌子，盖茨比WordPress的组合很棒，而不是谁。为了轻松，我在这里列出这些。
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress和Gatsby非常适合
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        对WordPress内容编辑体验感到满意的内容团队
{{_LINE_31_}}
{{_LINE_32_}}
        使用流行的开源技术重视的开发团队
{{_LINE_34_}}
{{_LINE_35_}}
        重新设计了已存储在WordPress中的内容的网站
{{_LINE_37_}}
{{_LINE_38_}}
        想要拥有他们的数据和技术堆栈的团队
{{_LINE_40_}}
{{_LINE_41_}}
        复杂的访问控制工作流或内容建模限制
{{_LINE_43_}}
{{_LINE_44_}}
        安全很重要的项目
{{_LINE_46_}}
{{_LINE_47_}}
        高需求项目至关重要
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress和Gatsby并不适合
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        需要使用WordPress UI主题的团队
{{_LINE_59_}}
{{_LINE_60_}}
        那些寻找完全管理的云CMS的人
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
除了这些官方观点，我还想列出一些一起使用盖茨比WordPress的利弊
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      优点
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        更快的负载速度 - 静态网站的加载速度比动态更快。结果，它会影响您的页面加载速度和SEO排名。
{{_LINE_75_}}
{{_LINE_76_}}
        服务器成本较小 - 由于静态文件不需要特殊的软件，因此也可以从便宜的服务器中提供静态HTML页面。
{{_LINE_78_}}
{{_LINE_79_}}
        更安全 - 对于静态站点，没有零件的移动组件，因此黑客没有机会利用您的软件。
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      缺点
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        学习曲线 - 它需要开发人员的其他技能。像Learning ReactJ和GraphQl
{{_LINE_93_}}
{{_LINE_94_}}
        仅静态内容 - 如果您需要提供任何动态内容。那盖茨比不适合你。它只能服务器静态文件。因此，您无法拥有从数据库中获取数据的任何评论系统。
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## 如何将gatsby与wordpress   {#howto}使用
在安装Gatsby之前，您需要在网站环境中安装[Nodejs][6]和[NPM][7]。

### 步骤1  - 安装盖茨比
```
npm install -g gatsby-cli
```
此命令自动运行安装程序。它在安装Gatsby之前下载并安装所有依赖关系。完成后，您可以开始创建第一个盖茨比网站。
```
gatsby new gatsby-site
```
这将下载Gatsby的入门模板，并将其放置在目录/盖茨比字眼中。安装完成后，您可以打开网站的开发版本
```
gatsby develop
```
现在，在您的Web浏览器中，输入_http：// localhost：8000_，您的默认模板应打开。

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Gatsby入门模板">}}


### 步骤2  - 将Gatsby连接到WordPress
在Gatsby WordPress指南的这一部分中，我们将使用WordPress连接此静态站点生成器。您有一个基本的静态网站，但是您需要将其与WordPress集成。这将您的盖茨比网站指向WordPress博客的地址，使其在运行开发服务器时可以提取最新数据。连接后，盖茨比将根据您当前的模板构建静态网站。
从NPM存储库安装gatsby源WordPress插件。
```
npm install gatsby-source-wordpress
```

### 步骤3  - 配置盖茨比
将以下代码放在您的_gatsby-config.js_文件中
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
更新此代码以指向您的WordPress网站。如果您的网站是本地托管的，则可以使用_localhost：8888/wordpress_而不是网站的URL。保存文件后，您需要构建页面模板。

### 步骤4  - 构建页面模板
构建页面模板使本网站生成器能够在WordPress网站上为每个页面生成帖子。源插件将从WordPress中获取这些页面的数据，但是您必须创建设计模板。
在您的_gatsby-node.js_文件中，添加以下代码
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
调用所有数据后，Gatsby将为每个帖子生成一个页面。使用开发命令，您可以使用生成的URL导航到每个新页面。

## 结论 {#conclusion}
在这个盖茨比WordPress教程中，我们介绍了如何从WordPress生成Gatsby网站。我们了解了这两个开源软件的优缺点。我们还介绍了如何从Gatsby开发环境开始安装和开始。
最后，[Containerize.com][8]正在撰写有关进一步开源产品的文章。因此，请与开源[Blogging][9]平台类别保持联系，以进行常规新闻和更新。

  
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
