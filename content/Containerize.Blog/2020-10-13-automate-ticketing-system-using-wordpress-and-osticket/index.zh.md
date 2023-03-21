---
title: "使用WordPress和Osticket自动票务系统" 
seoTitle: "使用WordPress和Osticket自动票务系统" 
description: "Osticket-wordPress集成为客户提供了一种从WordPress网站生成支持门票并从Osticket仪表板进行管理的方法。" 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "使用无缝的WordPress和Osticket集成来自动使用HelpDesk流程。通过基于Web的表格将客户的查询转换为支持门票。" 
url: /zh/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## 使用无缝的WordPress和Osticket集成自动化HelpDesk进程。通过基于Web的表格将客户的查询转换为支持门票。

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Osticket-wordpress集成到自动化票务系统">}}

您的客户可以对您的产品/服务有疑问。他们将通过您的WordPress网站上的不同形式发送查询。 Osticket-WordPress集成有助于将这些查询转换为门票。它通过API将数据发送到Osticket Helpdesk系统。
Osticket是一种开源和免费的HelpDesk票务系统。客户可以在Osticket上创建有关其查询的门票。这个帮助台系统使任何组织都可以轻松管理来自客户的查询。管理员可以创建部门和团队，并根据创建的门票的性质为不同代理商分配门票。这种免费的开源系统将跟踪问题。它允许客户和代理商在门票上发表评论以讨论进度。我们将在此博客文章中介绍以下各节：
  * [集成过程][1]
  * [WordPress插件安装][2]
  * [身份验证过程][3]
  * [结论][4]

## 集成过程： {#integration}
Osticket和WordPress集成需要WordPress网站上的联系表，并具有以下字段
  1.帮助主题
  2.电子邮件
  3.全名
  4.主题
  5.消息
联系表必须发送电子邮件，因为此插件将WP_Mail功能挂钩以获取表单的数据。

## WordPress插件安装： {#WordPress}
  1.转到WordPress网站的管理仪表板。
  2.接下来转到插件部分。
  3.然后安装此[插件][5]。
  4.之后激活插件。
  5.然后转到“设置”  - >“ osticket Connector”。
  6.然后输入osticket网站的URL，即[http：//your.domain/api/tickets.json][6]
  7.输入从Osticket Admin面板创建的API密钥（在下一节中说明）。
  8.最终填写所有字段，将数据从您的联系表格映射到Osticket的门票字段。

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Osticket-wordpress集成到自动化票务系统">}}


## 身份验证过程： {#auth}
API身份验证是通过在Osticket管理面板中配置的API键执行的。生成API键并链接到源IP地址，该源IP地址已根据HTTP API请求的源IP进行了验证。创建API密钥
  1.转到Osticket的管理面板。
  2.单击“管理”。
  3.转到子菜单“ API密钥”。
  4.单击“添加新的API密钥”。
  5.将“状态”设置为活动。
  6.检查复选框“可以创建票证”。
  7.输入WordPress网站的IP地址并点击“添加键”。

{{< figure align=center src="images/osticket-1024x729.png" alt="Osticket-wordpress集成到自动化票务系统">}}


## 结论： {#conclusion}
Osticket-WordPress集成将自动化票务过程。因此，这将使支持团队的生活更轻松。 WordPress网站上的查询将自动转换为Osticket上的支持门票。因此，支持团队可以更轻松有效地管理所有客户的查询。支持代理将通过电子邮件通知通知。因此，代理可以按时解决客户的查询。 Osticket上的评论部分可以帮助客户和支持代理进行有效和及时的沟通。这也使管理人员更容易跟踪每张票的进度。

## 探索：
要了解有关Osticket和WordPress的更多信息，请查看以下页面：
  * [osticket  - 免费的开源服务台票系统][7]
  * [WordPress  - 免费开源，最广泛使用的CMS和博客工具][8]
  * [如何使用Osticket设置在线帮助台软件][9]

  
[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
