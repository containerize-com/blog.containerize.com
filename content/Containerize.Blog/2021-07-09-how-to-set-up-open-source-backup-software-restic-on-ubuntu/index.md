---
title: How To Set Up Open Source Backup Software Restic On Ubuntu
seoTitle: How To Set Up Open Source Backup Software Restic On Ubuntu
description: Restic is a fast, secure, and one of the best open-source backup software. It supports AWS S3, Microsoft Azure, Google Cloud, and other backend options.
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: Take backup with open source backup software and store it locally or on external backends. Restic is cross-platform and supports multiple storage types.
url: /backup-software/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
aliases: 
    -  /2021/07/09/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']

---
## Take backup with open source backup software and store it locally or on external backends. Restic is cross-platform and supports multiple storage types.

{{< figure align=center src="images/restic-post-banner.png" alt="Open Source Backup Software">}}  

A backup system is really important for both businesses and individuals. Data can be lost for various reasons such as a cyberattack, system failure, accidental removal, and many more. You should have a good backup strategy in place so that you can restore your data fast. This guide will show you how to install and utilize the **open source backup software** Restic on your Ubuntu server.

We have covered the following sections in this tutorial.

  * [**Prerequisites**][1]
  * [**What is Restic?**][2]
  * [**Restic Installation**][3]
  * [**Restic Configuration**][4]
  * [**Alternatives to restic**][5]
  * **[Conclusion][6]**

## Prerequisites {#Prerequisites}

Restic backup software program supports the three major operating systems Linux, macOS and Windows. Before installing **Restic backup**, you should meet the following system requirements. 

  * Machine Or Desktop system with Ubuntu operating system that houses the data to be backed up
  * A latest Ubuntu Server instance
  * SSH key authentication configured between the two client and server
  * Non-root user with sudo privileges

With these bits in hand, let’s move and get to work.

## What is Restic? {#Restic}

[**Restic**][7] is a fantastic **open source backup tool**. It’s a **free backup utility** that’s fast, secure, and efficient. It’s cross-platform backup program, so it’ll run on Linux, BSD, Mac OS X, and Windows. Restic best open source backup software is easy to run and does not require a server or a complicated configuration. It creates a backup of the modified data and allows users to restore it when necessary. Further, it provides a variety of storage options, including self-hosted and internet storage. Moreover, Restic open source self hosted cloud storage uses robust cryptographic techniques to protect your data. 

Restic is not a simple file copying utility. It is primarily built on two concepts: snapshots and repositories. **Restic** open source backup solution saves the information as a snapshot, which is then saved in a repository. It is written in the Go programming language. Restic Go based backup utility and open source backup application works smoothly with many cloud and local backend storage systems. The source code of restic open source file backup software is available at [**GitHub**][8]. However, you can find detailed [**documentation**][9] for the installation and usage.

Restic self hosted cloud backup supports out-of-the-box following backends for backup storage.

  * Local directory
  * SFTP server (via SSH)
  * REST server
  * AWS S3
  * Minio Server
  * Wasabi
  * Alibaba Cloud
  * OpenStack Swift
  * BackBlaze B2
  * Microsoft Azure Blob Storage
  * Google Cloud Storage

You can use [**rclone**][10] for various backends in addition to the ones listed above.

## Restic Installation {#Installation}

There are various ways to install Restic best self hosted cloud storage on your Ubuntu operating system. We will cover installation of Restic self hosted file storage using Ubuntu package, docker, and source code.

### Installing using Package

  * Run the command below to install Restic open source backup server on Ubuntu OS.


```
$ sudo apt-get install restic
```


### Installing using Docker

  * Get the Restic image from dockerhub.


```
$ docker pull restic/restic
```


### Installing using Source

  * First, you need to install Go programming language to setup Restic from the source. You can visit the official [**Golang website**][11] for the instructions to install Go.
  * Next, execute the commands below to install Restic incremental backup.


```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```


  * By specifying target OS in the command, you may quickly compile Restic for all supported platforms. Here are a few examples.


```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```


## Restic Configuration {#Configuration}

As we have already mentioned above that Restic open source backup system is based on snapshots and repositories for backup. Let’s take a look at how to set up a repository, take a snapshot, and then restore the backup.

### Create Repository

  * Run the following command to initialize the repository. You also need to set a password for the repository.


```
$ restic init --repo /tmp/
```


### Backup data to a local directory

  * In the first step, we have created a repository to store the data. Now, we will add data to the repository for backup. Execute the following command.


```
$ restic --repo /tmp/backup backup ~/work
```


### Restore the Backup

  * The restore command restores files and directories. The files are not restored to their original location while using Restic open source cloud backup. You must choose a target location for the files to be restored by Restic.


```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```


  * However, you can restore the latest snapshot without specifying the snapshot ID. You need to add the latest parameter in the command as below.


```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```


### Working with Snapshots

In this section, we’ll look at some of the Snapshots’ features.

  * Run the following command to list down the snaphosts.


```
$ restic snapshots -r /tmp/backup
```


  * You can compare two snapshots with the following command.


```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```


  * You may need to delete an old backup to free up storage space. To remove a snapshot, run the command below.


```
$ restic -r /srv/restic-repo forget bdbd3439
```


## Alternatives to restic

Restic is the most popular open source backup software application and it guarantees the confidentiality and integrity of your important files data. Following are the most popular alternatives and top competitors to restic data backup tool.

  * Amazon Glacier
  * Replication
  * runrestic
  * Afi
  * RainyDay Backup
  * Borg
  * Veeam Backup
  * AWS Storage Gateway
  * Cohesity

## Conclusion

In this article, we covered the Restic **free open source backup software**. We also discussed several installation techniques, as well as how to create a backup and how to restore backup. There are many other forms of data backup storage, and we’ve just addressed one in this article. The remaining backend storage types will be covered in future publications. We hope that this tutorial will serve as a starting point for you to use Restic best open source backup tool to take and restore backups.

Finally, [**containerize.com**][12] is in a consistent process of writing blog posts on further latest open source products. Therefore, stay in touch with this [**Backup Software**][13] category for the latest updates.

_What are your most favorite Free & Open Source Backup Software?. Do you have any questions about open source backup software?, Please_ [get in touch][14].

## Explore:

We also have several other related information from OSS watch:

  * [Top 5 Open Source Cloud Storage Software in 2021][15]
  * [How to Install Nextcloud with Apache on Ubuntu Server][16]
  * [Install and Configure ownCloud with Apache on Ubuntu][17]
  * [How to Install Pydio File Sharing and Sync Platform on Ubuntu][18]
  * [NSQ vs Kafka | What Are The Key Differences?][19]
  * [Nextcloud vs ownCloud | What are the differences?][20]
  * [Best Open Source Cloud Storage and File Sharing Software][21]

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
 [15]: https://blog.containerize.com/2021/06/25/top-5-open-source-cloud-storage-software-in-2021/
 [16]: https://blog.containerize.com/2021/06/18/how-to-install-nextcloud-with-apache-on-ubuntu-server/
 [17]: https://blog.containerize.com/2021/06/11/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
 [18]: https://blog.containerize.com/2021/07/02/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
 [19]: https://blog.containerize.com/2021/07/17/nsq-vs-kafka-what-are-the-key-differences/
 [20]: https://blog.containerize.com/2021/07/31/nextcloud-vs-owncloud-what-are-the-differences/
 [21]: https://products.containerize.com/backup-and-sync/