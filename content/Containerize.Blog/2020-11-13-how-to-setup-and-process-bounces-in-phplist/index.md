---
title: How to setup and process bounces in phpList
seoTitle: How to setup and process bounces in phpList
description: phpList is powerful self-hosted mailing list and newsletter manager. It helps businesses to send newsletter campaigns and process bounces easily.
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: Send campaign with open source newsletter and email marketing software. Setup bounce management in phpList and automate bounce processing for healthy mailing lists.
url: /newsletter/how-to-setup-and-process-bounces-in-phplist/
aliases: 
    -  /2020/11/13/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']

---
## Send campaign with open source newsletter and email marketing software. Setup bounce management in phpList and automate bounce processing for healthy mailing lists.

{{< figure align=center src="images/phplist-2.png" alt="process bounces phplist">}}  

We have written articles for implementing [Multi-tenancy][1] and [sending newsletter campaign][2] in phpList. In this article, we will cover these points in detail about process bounces in phpList.

  * [What is phpList?][3]
  * [What is bounce?][4]
  * [Setup bounce management][5]
  * [How to process bounces?][6]
  * [Conclusion][7]

## What is phpList? {#phplist}

phpList is most popular free and open source newsletter sending software. phpList enables businesses for sending marketing emails, product updates and announcements to subscribers. It helps businesses for managing listing, design beautiful newsletter, schedule campaign, and bounce management. [Read More][8]

## What is bounce? {#bounce}

A bounce is an email message that can not be delivered due to number of reasons and return to the sender. We may have reasons such as mailbox is full, email address no longer to be valid or incorrect email address. Because of this, you must process bounces so you don’t send emails to invalid email addresses.

## Setup bounce management {#setup}

In order to setup bounce management, you need configure the following settings in config.php file.

[{{< figure align=center src="images/bounce-handling-phplist.png" alt="phpList - bounce processing management">}}][8] 

We will explain in below steps more about these configurations.

  * First, you need to add email address where you want to receive bounce messages. You can find **message_envelope** variable and add your email address.
  * phpList can fetch emails from the bounce mailbox via two protocols, **mbox and pop3**. So, find **bounce_protocol** variable and change it as per your environment.
  * If you have set **mbox** prototcol, you need to define the file format for it. So, find **bounce_mailbox** and set path like ‘/var/spool/mail/listbounces’.
  * In case you have used **pop3** protocol, you need to configure **host, username, and password** for mail box. You can see these setting in above sreenshot.
  * In addition to the above settings for **pop3** protocol, you may need to add port and encryption. 

## How to process bounces? {#process}

phpList supports two methods for process bounces: Manual and Automated. You will have to create cron job to automate bounce processing. You can also manually process bounces by visiting **System > Process Bounces** page. Therefore, first you need to change **MANUALLY\_PROCESS\_BOUNCES** settings according to your requirements. You can visit [phpList docs][9] to setup cron job for process bounces.

## Conclusion {#conclusion}

In this post, we have learnt how to configure bounce email address and process bounces. You can easily process bounces with manual method, if you have less amount of subscribers. However, you must use automate bounce handling process for large lists. It will save your time and help you to create clean and valid subscriber lists.

 [1]: https://blog.containerize.com/2020/10/24/how-to-implement-multi-tenancy-in-phplist/
 [2]: https://blog.containerize.com/2020/10/29/how-to-create-and-send-newsletter-using-phplist/
 [3]: #phplist
 [4]: #bounce
 [5]: #setup
 [6]: #process
 [7]: #conclusion
 [8]: https://products.containerize.com/newsletter/phplist
 [9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron