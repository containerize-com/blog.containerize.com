---
title: "设置并管理Windows的KeepAss密码管理器" 
seoTitle: "设置并管理Windows的KeepAss密码管理器" 
description: "Keepass是一个受欢迎，安全，免费和开源密码管理器。本指南将帮助Windows用户使用keepass设置和管理密码。" 
date: Sat, 13 Mar 2021 07:34:04 +0000
author: bilalahmed
summary: "Keepass是一个受欢迎，安全，免费和开源密码管理器。本指南将帮助Windows用户使用keepass设置和管理密码。" 
url: /zh/password-management/setup-manage-keepass-password-manager-for-windows/
categories: ['Password Management']
---

## keepass是一个受欢迎，安全，免费和开源密码管理器。本指南将帮助Windows用户使用keepass设置和管理密码。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows.png" alt="设置并管理Windows的KeepAss密码管理器">}}


## 概述{#overview}
记住不同网站和应用程序的所有不同密码组合并不是一件容易的事，而在纸上写下它们似乎是一个简单的解决方案。这种方法没有太多的安全性，因为您很容易丢失它，否则它可能落入了错误的人的手中。 ** Windows的KeepAss密码管理器**是解决这些问题的解决方案之一。
另一方面，密码管理器使用户可以轻松地将所有密码存储在一个地方，并在需要时访问它们。 keepass是**最好的开源密码管理器之一**，不仅可以免费下载，而且可以将密码文件存储在USB上或将其上传到您的Dropbox，Google Drive或其他云存储选项。通过端到端加密，只有密码的所有者才能使用主密钥访问密码文件，从而保证安全性。作为开源密码管理器keepass，具有技术知识的用户还可以自己检查源代码，以确保没有丢失的安全功能。
  * [在Windows上设置Keepass] [1]
  * [使用keepass管理密码] [2]
  * [结论] [3]

## 在Windows {#setup}上设置keepass
**下载并安装**
在安装KeepAss软件之前，请确保您使用Windows版本7、8或10，并具有最新版本的KeepAss密码管理器。您可以通过进入Windows安装程序并单击Windows ** keepass 2.47 **。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-1-download-1024x495.png" alt="设置并管理Windows的KeepAss密码管理器">}}

下载完成后，运行安装程序，将提示您启用或禁用自动检查，以获取keepass Manager的最新更新。这并不意味着未经许可将自动下载或安装最新版本。 Keepass服务器开源软件已在GNU GPL下许可。安装后，现在您将看到一个空白窗口如下：

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open.png" alt="设置并管理Windows的KeepAss密码管理器">}}

**创建新数据库**
现在，我们将开始创建一个数据库来存储您的密码，这是步骤。单击**文件**。选择**新**将创建数据库。您将看到以下提示。单击**好的。**

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open-new-db.png" alt="设置并管理Windows的KeepAss密码管理器打开新DB">}}

在这里，您将提示您保存**。kdbx文件**（将包含所有密码）在计算机上。确保将其保存在同一文件夹中，该文件夹位于计算机上的Teamass。

## 使用keepass {#manage}管理密码
**创建主密码**
现在，您将必须创建一个主密钥，该密钥将是您能够访问.KDBX文件的密码。确保密码包含大写，小写字母，特殊字符，数字等的组合。创建一个强，无法访问的主密钥非常重要，因为它将确定密码数据库的安全性。 KeepAss免费密码管理器还将提供有关主密钥的强度或弱的指标。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-master-password.png" alt="设置并管理Windows的KeepAss密码管理器">}}

**保存密码**
创建主密钥后，数据库将打开，您可以在其中开始保存密码。 keepass提供2个密码条目，为默认情况，您可以删除它们并开始添加自己的。

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-save-pw.png" alt="设置并管理Windows的KeepAss密码管理器">}}

要创建一个新的条目，请单击“黄色密钥”图标以生成新的密码条目。将打开一个新屏幕，需要您输入密码，重复该密码，提供将使用此密码，用户名等的URL。输入密码时，它将被点隐藏，可以通过单击右侧的**三个点图标**来揭示。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-new-entry.png" alt="设置并管理Windows的KeepAss密码管理器">}}

**使用keepass登录**
使用保存在数据库上的密码登录：
  *右键单击密码条目，然后选择**复制用户名**现在将此用户名粘贴到网站的用户名中。
  *现在，右键单击keepass密码管理器中的同一条目，然后选择**复印密码**，然后将其粘贴到密码字段所在的网站中。
  *请注意，您必须快速使用复制和粘贴，因为在12秒后通过keepass从剪贴板中删除了密码。可以通过keepass密码安全管理器更改此时间约束。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-copy.png" alt="设置并管理Windows的KeepAss密码管理器">}}

**其他密码管理器选项要考虑：**
市场上还有数十个其他开源密码管理器。您可以通过使用安全，流行，自托管和开源密码管理器来存储独特而复杂的密码来确保帐户凭据安全。以下列出的是一些顶级密码管理器：
  *[** PADLOC **] [4]被设计为家庭和团队的简单，安全的简约密码管理器和数据管理。
  *[** Passbolt **] [5]是一个自托管的自托管，易于访问的密码管理器，专为敏捷和DevOps团队的需求而设计。
  *[**密码安全**] [6]是开源密码管理器程序，具有安全，易于理解的界面。
  *[** bitwarden **] [7]是一个安全的，可以免费下载和开源的集成密码管理解决方案。
  *[** PSONO **] [8]是团队的自托管凭据和密码经理。它提供了多层加密，以实现最大的安全性。

## 结论{#conclusion}
Keepass是一种简单，安全且便携的方式来管理密码。它允许您自定义密码，生成安全组合，并使用用户名为不同的网站保存多个密码条目。使用最佳密码管理器KeepAss也是安全的，因为它使用了端到端的加密机制，并依赖于SH-256哈希功能来获得最大的安全性。
此外，[** containerize.com **] [9]正在以多种语言和框架来增强开源产品的堆栈。有关定期更新，请继续关注** [密码管理] [10] **类别以获取更多有趣的文章。

## 探索
在本文中，我们讨论了如何设置和管理Windows的KeepAss密码管理器。您可能会发现以下链接相关：
  *** [2021年的前5名开源密码管理器] [11] **
  *** [最佳开源密码管理软件] [12] **
  *** [keepass |安全，便携式和开源密码管理器] [13] **
[1]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#setup
[2]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#manage
[3]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#conclusion
[4]: https://padloc.app/
[5]: https://products.containerize.com/password-management/passbolt/
[6]: https://products.containerize.com/password-management/password-safe/
[7]: https://products.containerize.com/password-management/bitwarden/
[8]: https://products.containerize.com/password-management/psono/
[9]: https://www.containerize.com/
[10]: https://blog.containerize.com/category/password-management/
[11]: https://blog.containerize.com/password-management/top-5-open-source-password-managers-in-2021/
[12]: https://products.containerize.com/password-management/
[13]: https://products.containerize.com/password-management/keepass
