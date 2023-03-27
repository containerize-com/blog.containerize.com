---
title: "什么是管理员？ |开源数据库管理工具" 
seoTitle: "什么是管理员？ |开源数据库管理工具" 
description: "什么是管理员？具有开发人员友好界面的基于Web的数据库管理系统。让我们讨论如何使用开源管理器管理数据库。" 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Adminer是一个基于开源Web的数据库管理系统，用于管理数据库。让我们学习如何在Localhost上设置管理员并查看其关键功能。" 
url: /zh/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Adminer是一个基于开源Web的数据库管理系统，用于管理数据库。让我们学习如何在Localhost上设置管理员并查看其关键功能。
{{_LINE_11_}}

## 概述
现在，与数据相关的任务比以往任何时候都更为关键。数据库管理工具已成为任何业务不可或缺的一部分。但是，有许多基于Web的数据库管理系统，可为此类具有挑战性的任务提供解决方案。企业每天都在生成大量数据，并难以维护。此外，组织倾向于简化数据访问和数据控制。这些免费工具有助于减少数据冗余，使数据库有效且可靠。此外，我们发表了有关主题的博客文章，例如[顶级开源DBMS软件工具][1]等。
因此，开源社区开发了Adminer，它是企业级免费数据库管理工具。在本管理教程中，我们将介绍以下几点。
  * [什么是管理员？][2]
  * [管理员的重要特征][3]
  * [adminer vs phpmyadmin][4]
  * [使用Adminer管理数据库][5]
  * [结论][6]

## 什么是管理员？ {#what}

当涉及轻巧，用户友好，高性能的MySQL数据库管理工具时，Adminer获得了广泛的知名度，并且与PhpMyAdmin相比提供了许多改进。最初，此数据库管理工具是由Jakub Vrana在2007年开发的，可作为PhpMyAdmin的替代方法，因此您要做的就是在应用程序的数据库上下载并安装一个轻巧的PHP文件。
作为开源数据库管理工具，它也可以免费使用并以PHP编写。设置此基于Web的数据库管理系统的原因是一种良好的用户界面设计，可用于无缝的用户体验，以及强大的安全功能，以防止数据免受任何攻击或恶意黑客尝试的尝试。该数据库管理工具易于设置，需要简单的要求，例如Ubuntu和Lamp。用户可以找到有关开发和部署的全面文档。因此，您可以在[Github][7]上找到此基于Web的数据库管理系统的源文件。

## 管理员的重要特征 {#important}

该数据库管理工具的一些基本但重要的功能包括：
* 它具有许多数据库函数
* 支持多个数据库，包括：MySQL，PostgreSQL，SQLITE，MS SQL，ORACLE和SIMPLEDB数据库等等
* 它有43种语言，包括英语，阿拉伯语，波斯语，波兰语，荷兰语等
* 您可以轻松编辑数据库对象，例如视图，触发器，存储过程，用户权限等等。
  * Adminer还提供针对SQL注入，会话窃取，跨站点脚本（XSS）软件攻击和其他攻击的安全措施。

## 管理员与phpmyadmin {#adminer}

因此，当我们谈论什么是管理员时，知道管理员与phpmyadmin之间的比较将很有趣。当涉及到Adminer和PhpMyAdmin之间选择时，Adminer在其提供的灵活功能和轻型文件上载最重要的是。同样，与PhpMyAdmin相比，它支持包括MySQL，SQLite等许多数据库。同样，与phpmyadmin相比，它更直观，更聪明。

## 使用Adminer管理数据库 {#manage}

在本管理教程的部分中，我们将仔细研究如何使用Adminer管理数据库。
 **系统要求** 
为了使Adminer在系统上运行，重要的是要在服务器上设置以下要求：
  * PHP版本5、7或8
* 数据库驱动程序，例如mysql，sqlite，postgresql等
 **安装** 
如果您检查了这两个系统要求，请只需从[][8]下载文件，然后通过将PHP文件上传到服务器开始。对于XAMPP服务器，将下载的文件重命名为“ adminer.php”，然后将此文件放入HTDOCS文件夹中。
 **访问用户界面** 
经历了什么是管理员？现在，从http访问此应用：您 -  ip-address/adminer.php如图：
{{_LINE_42_}}
 **连接到服务器** 
使用服务器的用户名和密码登录此免费数据库管理工具。现在，如果仅要访问一个数据库，请输入其名称。您可以将此字段留空以访问服务器上已经存在的所有数据库。
 **管理数据库** 
登录后，您将看到所有当前数据库的列表。单击任何数据库进行管理。

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="使用Adminer数据库管理工具管理数据库">}}

在下一个屏幕上，您将看到所选数据库的所有表的列表。从这里，您可以导出数据库或其表，添加或编辑表/列，通过SQL查询更改数据等等，如下所示：

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="数据库管理工具">}}

 **创建新数据库** 
要创建一个新的数据库，请单击“创建数据库”，输入数据库名称，然后单击“保存”。

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="数据库管理工具">}}

 **插入/更新记录** 
将新记录添加到表非常简单。单击将您将您重定向到插入屏幕的新项目链接。在这里，您将能够为表中的所有列添加新数据，以及数据类型，因此添加新数据是一个快速的过程。

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="管理员与phpmyadmin">}}


## 结论 {#conclusion}

这将我们带到了本管理教程的结尾。我们已经介绍了一些重要主题，例如Adminer，Adminer vs PhpMyAdmin以及此开源基于Web的数据库管理系统的其他方面。希望，如果您想安装开源数据库管理工具，这篇博客文章肯定会为您提供帮助。它是直观，智能且易于使用的界面，使其成为一个非常流行的数据库管理工具。此外，它支持许多数据库，包括MySQL，Sqlite，MongoDB等，以及保护和防止任何恶意黑客事件的安全措施。总而言之，此数据库管理工具不仅是开源的，而且可以免费使用。
最后，[Containerize.com][9]不断地撰写有关进一步开源产品和主题的博客文章。因此，请与[10]类别保持联系，以进行常规更新。此外，您可以在我们的社交媒体帐户上关注我们[Facebook][11]，[LinkedIn][12]和[Twitter][13]。

## 探索
要了解有关免费基于Web的数据库管理工具的更多信息，请检查以下页面：
  * [管理员|免费的基于Web的数据库管理系统][14]
  * [顶部开源DBMS软件工具][1]
  * [2021年的前5名开源数据库管理工具][15]
  * [使用免费和开源软件自动化业务运营][16]



 [1]: https://products.containerize.com/database-management
 [2]: #what
 [3]: #important
 [4]: #adminer
 [5]: #manage
 [6]: #conclusion
 [7]: https://github.com/vrana/adminer
 [8]: https://www.adminer.org/
 [9]: https://www.containerize.com/
 [10]: https://products.containerize.com/database-management/
 [11]: https://web.facebook.com/containerize
 [12]: https://www.linkedin.com/company/containerize/
 [13]: https://twitter.com/containerize_co
 [14]: https://products.containerize.com/database-management/adminer
 [15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
 [16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
