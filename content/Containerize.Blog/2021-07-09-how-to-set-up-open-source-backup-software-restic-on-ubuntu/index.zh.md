---
title: "如何在Ubuntu上设置开源备份软件Restic" 
seoTitle: "如何在Ubuntu上设置开源备份软件Restic" 
description: "Restic是一种快速，安全，也是最好的开源备份软件之一。它支持AWS S3，Microsoft Azure，Google Cloud和其他后端选项。" 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "使用开源备份软件进行备份，然后将其存储在本地或外部后端。 Restic是跨平台，并支持多种存储类型。" 
url: /zh/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## 使用开源备份软件进行备份，然后将其存储在本地或外部后端。 Restic是跨平台，并支持多种存储类型。

{{< figure align=center src="images/restic-post-banner.png" alt="开源备份软件">}}

备份系统对企业和个人都非常重要。由于网络攻击，系统故障，意外删除等各种原因，数据可能会丢失。您应该有一个良好的备份策略，以便可以快速恢复数据。本指南将向您展示如何在Ubuntu服务器上安装和使用**开源备份软件** RESTIC。
我们已经介绍了本教程中的以下各节。
  *[**先决条件**] [1]
  *[**什么是restic？**] [2]
  *[** RESTIC安装**] [3]
  *[** restic配置**] [4]
  *[** restic **替代品] [5]
  *** [结论] [6] **

## 先决条件{#prerequisites}
Restic备份软件程序支持三个主要操作系统Linux，MACOS和Windows。在安装** RESTIC备份**之前，您应该满足以下系统要求。
  *带有ubuntu操作系统的机器或台式系统，该操作系统容纳要备份的数据
  *最新的Ubuntu服务器实例
  *在两个客户端和服务器之间配置了SSH密钥身份验证
  *具有sudo特权的非根本用户
掌握这些位，让我们开始工作。

## 什么是restic？ {#restic}
[** Restic **] [7]是一个很棒的**开源备份工具**。快速，安全且高效的免费备份实用程序**。它是跨平台备份程序，因此它将在Linux，BSD，Mac OS X和Windows上运行。 Restic最佳开源备份软件易于运行，并且不需要服务器或复杂的配置。它创建了修改后的数据的备份，并允许用户在必要时对其进行还原。此外，它提供了各种存储选项，包括自托管和互联网存储。此外，Restic开源自托管云存储使用强大的加密技术来保护您的数据。
Restic不是一个简单的文件复制实用程序。它主要基于两个概念：快照和存储库。 ** Restic **开源备份解决方案将信息保存为快照，然后将其保存在存储库中。它用GO编程语言编写。基于RESTIC GO的备份实用程序和开源备份应用程序与许多云和本地后端存储系统平稳地工作。 RESTIC开源文件备份软件的源代码可在[** github **] [8]上获得。但是，您可以找到用于安装和用法的详细[**文档**] [9]。
RESTIC自托管的云备份支持备用后端以备份存储。
  *本地目录
  * SFTP服务器（通过SSH）
  * REST服务器
  * AWS S3
  * Minio服务器
  * 芥末
  *阿里巴巴云
  * OpenStack Swift
  * Backblaze B2
  * Microsoft Azure Blob存储
  * Google云存储
除了上面列出的外观外，您还可以将[** rclone **] [10]用于各种后端。

## Restic安装{#installation}
有多种方法可以在Ubuntu操作系统上安装最佳自托管云存储。我们将使用Ubuntu软件包，Docker和源代码涵盖RESTIC自托管文件存储的安装。

### 使用软件包安装
  *运行下面的命令以在Ubuntu OS上安装Restic开源备份服务器。
```
$ sudo apt-get install restic
```

### 使用Docker安装
  *从Dockerhub获取RESTIC图像。
```
$ docker pull restic/restic
```

### 使用源安装
  *首先，您需要安装GO编程语言以从源设置Restic。您可以访问官方[** Golang网站**] [11]，以便安装的说明。
  *接下来，执行下面的命令以安装RETSIC增量备份。
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  *通过在命令中指定目标操作系统，您可以快速为所有受支持的平台编译Restic。这里有一些例子。
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Restic配置{#Configuration}
正如我们上面已经提到的那样，Restic开源备份系统基于快照和存储库以备备份。让我们看一下如何设置存储库，拿起快照，然后恢复备份。

### 创建存储库
  *运行以下命令以初始化存储库。您还需要为存储库设置密码。
```
$ restic init --repo /tmp/
```

### 备份数据到本地目录
  *在第一步中，我们创建了一个存储库来存储数据。现在，我们将将数据添加到存储库中以进行备份。执行以下命令。
```
$ restic --repo /tmp/backup backup ~/work
```

### 还原备份
  *还原命令还原文件和目录。使用Restic开源云备份时，文件未恢复到其原始位置。您必须选择一个目标位置，以使文件恢复。
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  *但是，您可以在不指定快照ID的情况下还原最新的快照。您需要在下面的命令中添加最新参数。
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### 使用快照
在本节中，我们将查看一些快照的功能。
  *运行以下命令以列出Snaphosts。
```
$ restic snapshots -r /tmp/backup
```
  *您可以将两个快照与以下命令进行比较。
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  *您可能需要删除旧备份以释放存储空间。要删除快照，请在下面运行命令。
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## Restic的替代品
Restic是最受欢迎的开源备份软件应用程序，它保证了重要文件数据的机密性和完整性。以下是RESTIC数据备份工具的最受欢迎的替代方案和顶级竞争者。
  *亚马逊冰川
  *复制
  * runrestic
  * AFI
  *雨天备份
  *博格
  * Veeam备份
  * AWS存储网关
  *粘性

## 结论
在本文中，我们介绍了Restic **免费的开源备份软件**。我们还讨论了几种安装技术，以及如何创建备份以及如何还原备份。还有许多其他形式的数据备份存储，我们刚刚在本文中解决了一个。其余的后端存储类型将在未来的出版物中介绍。我们希望本教程将为您提供使用Restic最佳开源备份工具的起点，以获取和还原备份。
最后，[** containerize.com **] [12]正在始终如一地编写有关更多最新开源产品的博客文章。因此，与此[**备份软件**] [13]类别保持联系，以获取最新更新。
_您最喜欢的免费和开源备份软件是什么？您对开源备份软件有任何疑问吗？

## 探索：
我们还提供了来自OSS Watch的其他几个相关信息：
  * [2021年的前5个开源云存储软件] [15]
  * [如何在Ubuntu Server上使用Apache安装NextCloud] [16]
  * [在Ubuntu上使用Apache安装和配置OwnCloud] [17]
  * [如何在Ubuntu上安装PYDIO文件共享和同步平台] [18]
  * [NSQ VS KAFKA |什么是主要区别？] [19]
  * [NextCloud vs ownCloud |有什么区别？] [20]
  * [最佳开源云存储和文件共享软件] [21]
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
