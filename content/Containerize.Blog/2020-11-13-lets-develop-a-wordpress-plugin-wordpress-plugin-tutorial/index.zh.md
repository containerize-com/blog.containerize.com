---
title: "让我们开发一个WordPress插件| WordPress插件教程" 
seoTitle: "让我们开发一个WordPress插件| WordPress插件教程" 
description: "对WordPress插件开发感兴趣吗？遵循此WordPress插件教程，该教程描述了创建基本WordPress插件的完整步骤。" 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "WordPress插件是您在网站上激活的模块，以提供一系列功能或元素。这些插件经过SEO优化并提供自动化。" 
url: /zh/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## WordPress插件是您在网站上激活的模块，以提供一系列功能或元素。这些插件经过SEO优化并提供自动化。

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="WordPress插件教程">}}


## 概述
WordPress是企业级开源博客平台。 A **WordPress插件** 是独立的代码集，可增强和扩展WordPress的功能。通过使用PHP，HTML，CSS，JavaScript/jQuery的任何组合。插件可以为您的网站的任何部分添加新功能。
您可以添加到网站的功能取决于每个特定的插件要执行的操作。可以开发WordPress插件来执行任何操作。从一个小任务到执行许多操作并具有自己的界面的全型应用程序。插件与您的主题不同，并使用挂钩，过滤器，短代码，小部件和自定义代码独立工作来执行其功能。
在此WordPress插件教程中，我们将学习如何创建第一个WordPress插件。创建插件的最重要原因是，它允许您将自己的代码与WordPress核心代码分开。
* **[要求][1]** 
* **[插件开发的基础][2]** 
* **[如何创建WP插件？][3]** 
* **[结论][4]** 

## 要求 {#requirements}

* 最新版本的WordPress
* 了解PHP / MySQL
* 了解HTML / CSS和JavaScript

## 插件开发的基础知识 {#basics}

让我们花点时间谈论插件开发的一些关键方面。对这些概念的工作方式有深入的了解将有助于您构建易于使用和可维护的功能。

### 行动
**操作钩 **是**WordPress****插件中非常有用的工具，它们用于在主题或插件的特定位置执行功能（** 操作**）。 WordPress在整个核心功能中都定义了数十种动作，每个动作由唯一名称组成。有关更多详细信息[阅读][5]。

### 过滤器
WordPress过滤器是一个接受变量（或一系列变量）并在修改后将其返回的钩子。这些过滤器经常使用，因此您可以操纵默认信息。有关更多详细信息[阅读][6]。

### 短代码
快速代码是可用于与内容进行动态相互作用的宏。即，创建一个画廊，从附加到帖子的图像或渲染视频。结果，它们是保持内容清洁和语义的一种宝贵方式，同时允许最终用户进行某种编程性更改其内容呈现的能力。有关更多详细信息[阅读][7]。

### 小部件
小部件很重要，因为它们在提供易于使用的界面时为您提供了执行插件代码的另一种方法。由于大多数主题都会支持一个或多个侧边栏；添加自己的小部件将使您可以快速访问主题中显示信息。

## **如何创建WP插件？** {#create}

在WordPress插件教程的这一部分中，您需要做的就是创建一个文件夹，然后创建一个带有一行内容的单个文件。导航到 **wp-content/插件**文件夹，并创建一个名为 **mytestplugin** 的新文件夹。在此新文件夹中，创建一个名为**mytestplugin.php** 的文件。在文本编辑器中打开文件，并粘贴其中的以下信息：
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
现在，您可以进入后端激活插件。仅此而已，尽管此插件无济于事。但是，它是一个活跃的，功能齐全的插件。开发插件时的最佳实践是将代码整齐地将您的代码分离为适当的文件和文件夹。
为了证明，让我们在测试插件中添加功能，该功能通过存储每个帖子的次数来跟踪文章的普及。

### 存储页面视图
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
到目前为止，在此WordPress插件教程中都很好。但是此功能从未被调用，因此实际上不会使用它。这是钩子进来的地方。您可以进入主题文件并从那里手动调用该功能。但是，如果您更改了主题，那么您将失去该功能，从而击败整个目的。一个名为 **wp_head**的挂钩，该挂钩在大多数主题中都存在之前运行，因此我们可以将功能设置为在**wp_head** 运行时运行，就像这样：
```
add_action("wp_head", "add_page_views");
```

### 显示页面视图
现在，我们将创建另一个函数，该功能返回我们已经存储在上述功能中的页面视图。让我们看一下代码：
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
到目前为止，我们刚刚检索了观点数量。现在，让我们展示。您可能会认为它必须很复杂。但是，这很简单：
```
echo get_page_views() . “view(s)”
```

## 结论 {#conclusion}

这是该WordPress插件教程的结尾。通过遵循本文并仅使用少数功能，我们创建了一个基本插件来跟踪我们最受欢迎的帖子。我们可以进行很多改进，但目的只是使您对基础知识感到满意。此外，通过学习WordPress开发的一些模式（插件，挂钩等），您还可以获得在非媒介环境中为您服务的技能。还有许多与开源博客平台和开源CMS相关的博客文章。您可以在下面的探索部分中找到。如果您希望为您的业务部署开源博客平台，那么这篇博客文章确实可以为您提供帮助。
最后，[Containerize.com][8]正在撰写有关进一步开源产品的文章。因此，请与[Blogging][9]和[商业智能软件][10]类别保持联系，以进行常规新闻和更新

## 探索
  * [如何为WordPress安装MATOMO | WordPress教程][11]
  * [通过免费的civicrm wordpress集成增强潜在客户][12]
  * [如何在WordPress中安装插件|香草论坛][13]
  * [Joomla vs drupal | CMS比较在2021年][14]
  * [在2021年选择开源软件之前需要审查的内容][15]



[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
