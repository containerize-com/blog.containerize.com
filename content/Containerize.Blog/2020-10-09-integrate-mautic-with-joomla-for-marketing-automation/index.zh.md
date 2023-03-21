---
title: "将Mautic＆Joomla整合为数字营销自动化'" 
seoTitle: "将Mautic＆Joomla集成以进行数字营销自动化" 
description: "Mautic和Joomla集成可以帮助您的业务进行数字营销自动化。它有助于通过恶劣的运动推销产品。" 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Mautic和Joomla集成可以帮助您的业务进行数字营销自动化。它有助于通过在线卑鄙的活动来推销产品。" 
url: /zh/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## Mautic和Joomla Integration可以通过数字营销自动化帮助您的业务。它有助于通过在线卑鄙的活动来推销产品。

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Mautic和Joomla整合">}}


## 这种集成如何帮助您的业务：
Mautic和Joomla集成将使您以非常简单但高效的方式推销产品/服务。 Mautic一种免费的开源营销解决方案使您可以很好地控制营销活动，并且根据情况继续进行滴水活动非常简单。例如：它为您提供信息，即如果客户已阅读了电子邮件或访问了您的产品页面。使用该信息，您可以设置广告系列，以决定是否继续向该客户发送下一封电子邮件。这种集成将有助于数字营销自动化。这篇博客文章将指导您以下各节：
  * [概述][1]
  * [JOOMLA插件安装][2]
  * [Mautic配置][3]
  * [结论][4]

## 概述： {#overview}
Mautic是一种开源营销自动化系统。这是一个免费的营销软件。您可以使用它来创建无限的广告系列，以向目标客户发送营销电子邮件。
Joomla还是用于开发网站的免费开源内容管理系统。在Joomla上设置您的业务网站非常容易。它具有数千个扩展名，可根据您的要求使用。

## Joomla插件安装： {#plugin}
  *下载[插件][5]。
  *然后转到扩展名 - >管理 - >安装。
  *输入Mautic URL。
  *它将插入从您的Mautic实例中加载的1个PX GIF图像。
  *使用以下代码段中的joomla内容嵌入表单：{mautic type =“ form” id}
  *然后，您可以在Mautic应用中创建表单并从URL获取ID。
  *也可以使用以下代码snippt添加动态内容：{mautic type =“ content” slot =“ slot_name”}默认内容。{/mautic}
  * slot_name是您在广告系列中添加“请求动态内容”决定时指定的插槽的标识符。
安装后，您需要在Joomla网站上创建和嵌入表单。这些表格将把联系人信息发送到Mautic。在Joomla上配置插件后，下一步将是在Mautic上进行配置。

## Mautic配置： {#mautic}
  *访问您的网站，转到设置。
  *单击配置。
  *从API设置，启用API。
  *要将Mautic与Joomla连接起来，您必须在网站上拥有SSL证书。
  *接下来，您需要转到API凭据。
  *如果您的网站没有SSL（因此您转到**http **：//yourjoomlasite.com），请选择OAuth1。如果您在网站上确实有一个SSL（因此，请转到 **https**  ：//yourjoomlasite.com），请选择OAuth2。
  *单击新的，提供一个名称（可以是您想要的任何东西）和Joomla的完整URL！站点（[https://yourjoomlasite.com][6]）
  *单击保存并关闭。
  *在这里，您可以获取公共和私钥。
  *转到您的Joomla网站，找到您之前安装的Mautic插件。
  *输入您从Mautic网站创建的公共和秘密密钥。
  *选择oauth1或oauth2（与您在Mautic中选择的相同），然后将注册用户发送给是。
  *保存并发布插件。
  *之后，您将能够授权您的Joomla网站。
  * Joomla将重新指导到Mautic实例授予授权。
  *单击“授权”，仅此而已。
  *您将开始接触到您的Mautic网站。

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Mautic和Joomla整合">}}


## 结论： {#conclusion}
在本文中，我们讨论了Mautic和Joomla如何共同帮助数字营销自动化。这种开源的免费营销解决方案将使您可以将来自Joomla网站的所有联系人分组，并使用它们进行营销活动。 Mautic允许您创建细分市场，因此您可以根据需要在不同的细分市场上运行不同的广告系列。请检查[Joomla][7]和[Mautic][8]博客以获取详细概述。

## 探索：
您可能会发现以下链接相关：
  * [JOOMLA][7]
  * [Mautic][8]
  * [如何设置Mautic  -  Facebook集成][9]
  * [Drupal Mautic整合以自动化铅培养][10]
  * [使用Mautic和WordPress WooCommerce的营销自动化][11]
  * [如何在Mautic中设置营销活动][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
