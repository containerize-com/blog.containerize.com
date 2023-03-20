---
title: "如何从WordPress迁移到Jekyll" 
seoTitle: "如何从WordPress迁移到Jekyll" 
description: "在本教程中，我们将以快速简便的步骤学习如何将您的网站从WordPress迁移到Jekyll。让我们开始吧！" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "在本教程中，我们将学习如何将您的网站从WordPress迁移到Jekyll并免费使用GitHub托管" 
url: /zh/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## 在本教程中，我们将学习如何将您的网站从WordPress迁移到Jekyll，并免费使用Github托管它

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress到Jekyll">}}

Jeykll是开源静态站点生成器。它将您的纯文本转换为静态网站和博客。它采用您喜欢的标记（Markdown，Liquid，HTML / CSS）语言中写的文本，并使用布局来创建静态网站。杰基尔（Jekyll）是博客意识到的，并且永久链接，类别，页面，帖子和自定义布局都是一流的公民。 Jekyll的最大好处之一是您可以在Github页面上托管静态网站，并免费运行您的网站或博客。因此，jekyll迁移的WordPress可以帮助您提高网站的性能和速度。
在此博客文章中，我们将介绍如何将现有网站或博客从WordPress迁移到Jekyll，以提高速度和性能。所以，让我们开始吧！
  *** [为什么要迁移？][1] **
  *** [安装][2] **
  *** [导入WordPress帖子和页面][3] **
  *** [使用github页面部署][4] **
  *** [结论][5] **

## 为什么要迁移？ {#为什么}
在Jekyll中，您可以获得100/100 [灯塔得分][6]，因为没有数据库交互。而且，所有内容均已预处理并保存为HTML文件。而且，Jekyll只会提出最少的HTTP请求。因此，它超级快。

## 安装和设置jekyll {#install}
Jekyll用Ruby写。因此，您必须先将其安装在计算机上。本指南假定您已经在计算机上安装了Ruby。如果不是，您可以遵循[官方指南][7]。
首先，我们将使用“ ** gem **”命令“ ** jekyl **”和“ ** bundler **”宝石，该命令将在安装Ruby后可用。打开命令行并运行以下代码。
```
gem install jekyll bundler
```
然后，运行以下命令创建一个新的站点。这将创建一个** myblog **文件夹。
```
jekyll new myblog
```
安装后，您可以在本地服务器上构建网站并将其提供。
```
bundle exec jekyll serve
```
网站将在http：// localhost：4000上提供。它还在您的文件夹中生成了一个“ ** _站点**”文件夹，这就是该站点的最终输出。

## 导入WordPress页面和帖子{#import}
WordPress的非官方插件也可以使用，但我们将遵循本教程中的官方方法。如果您想尝试WordPess Exporter插件，请尝试[转到此处][8]。
要从自托管的WordPress网站导入您的帖子，请在您的终端上运行以下命令。
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
这仅导入帖子和页面数据和内容。该进口商只会转换您的帖子并创建YAML前后标志。它不会导入任何布局，样式或外部文件（图像，CSS等）。

## **使用GitHub页面部署** {#deploy}
到目前为止，我们在本地创建了Jekyll博客。现在，我们将在Github上部署它。首先，我们必须使用[git][9]来控制我们的网站。在网站的文件夹中运行以下命令。
```
git init
git add .
git commit -m "Initial Commit"
```
安装jekyll时，它应该在根部中自动创建一个“ **。gitignore **”文件，至少具有以下内容。
然后，登录到github并创建一个新的存储库yourname.github.io
接下来，复制存储库的HTTPS URL。

{{< figure align=center src="images/github-img.png" alt="github https url">}}

然后，添加远程存储库并推动代码。
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
完毕！您的网站现在必须在yourname.github.io上可用

## 结论{#conclusion}
在本文中，我们学会了如何使用Jekyll网站构建静态博客。然后，我们学会了如何将您的帖子和页面从WordPress导出到Jekyll。最后，我们将最终站点部署到了GitHub页面。

  
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
