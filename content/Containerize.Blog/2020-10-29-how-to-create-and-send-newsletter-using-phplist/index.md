---
title: How to create and send newsletter using phpList
seoTitle: How to create and send newsletter using phpList
description: "phpList is the leading open source newsletter software for email marketing. This is the beginner's guide for creating and sending newsletter campaigns."
date: Thu, 29 Oct 2020 18:30:18 +0000
author: Masood Anwer
summary: Create and send newsletter using open source phpList and reach to millions of subscribers. Enhance the engagement of clients with product updates, promotions and new features.
url: /newsletter/how-to-create-and-send-newsletter-using-phplist/
categories: ['Newsletters']

---
## Create and send newsletter using open source phpList and reach to millions of subscribers. Enhance the engagement of clients with product updates, promotions and new features.

[{{< figure align=center src="images/How-to-send-newsletter-in-phpList.png" alt="Create and Send Newsletter using phpList">}}][1] 

Marketing is an important part of any online or offline business. Email marketing is one of the easiest tools for marketing and delivers a message to a large audience. You can send emails to a few hundred subscribers manually but it’s very difficult to send emails to thousands or even millions. So, there are a lot of open source email marketing tools are available to automate it.

phpList is the most popular open source software for managing lists and newsletters. The campaign is a core component of phpList that enables you to deliver messages to one or many lists. You can easily use it for designing and sending campaigns to millions of subscribers. phpList comes up with an impressive feature set such as Campaign & List Managers, Plugins, Rest API, and many more.

In this blog post, we will concentrate on designing and sending email campaign in phpList. We will cover the following topics.

  * [Create Newsletter/Campaign][2]
  * [Scheduling Campaign][3]
  * [Assign Lists to Campaign][4]
  * [Finish Campaign][5]
  * [Process the Queue][6]
  * [Conclusion][7]

## **Create Campaign/Newsletter** {#create}

  * Login to the admin interface of your phpList installation. Click **Start or continue campaign** button on dashboard or Send a Campaign link under Campaign in left side navigation.
  * Click start a new campaign button.
  * Fill fields with the options such as Subject, From Line, Content and Footer as shown in the below image.

{{< figure align=center src="images/create-campaign.png" alt="Design Newsletter in phpList">}}  

## **Scheduling Campaign** {#schedule}

  * Scheduling allows you to select dates when you want to start campaign. Campaign will be not sent before/after the selected dates.
  * You don’t need to change dates, if you want to send campaign immediately.

{{< figure align=center src="images/scheduling.png" alt="Schedule Newsletter in phpList">}}  

## **Assign Lists to Campaign** {#list}

All lists will display under Lists tab, select appropriate list. Campaign will deliver to assign lists only. However, you can make list public or private while creating/updating list.

{{< figure align=center src="images/lists.png" alt="Assign Lists to Newsletter in phpList">}}  

## **Finish Campaign** {#finish}

Finish is the final step in campaign creation process. You can add emails for notifications, add Google Analytics tracking code. Click on the **Send Campaign** button to begin sending messages to subscribers. Now, you have done with Newsletter designing and Campaign process. But, you need to process queue and you can read more about it in next section.

## **Process the Queue** {#queue}

Process Queue is process to start sending of the campaign. You can initiate process manually, with command line script or create cron job. It’s easy to process queue manually for few hundered subscribers. But, it is good to use cron job for process the queue, if you have thousands/millions of subscribers. You can visit phpList official [website][8] for information to create cron job.

## **Conclusion** {#conclusion}

phpList is a perfect tool for businesses that want to use open source newsletter software for email marketing. We have described the process in detail for designing and sending campaigns. You can follow it for your next newsletter and enjoy the true power of phpList.

Finally, with some more fascinating tutorials, [containerize.com][9] is all set to enhance its tutorial base. For regular updates, please stay connected with the [Newsletter][10] category.

 [1]: https://products.containerize.com/newsletter/phplist
 [2]: #create
 [3]: #schedule
 [4]: #list
 [5]: #finish
 [6]: #queue
 [7]: #conclusion
 [8]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
 [9]: https://containerize.com
 [10]: https://blog.containerize.com/category/newsletter/