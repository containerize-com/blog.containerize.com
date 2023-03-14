---
title: Setup Advanced Bounce Management And Bounce Rules In phpList
seoTitle: Setup Advanced Bounce Management And Bounce Rules In phpList
description: Enable advanced bounce management in phpList and handle bounce emails. Create bounce rules and automate process to take various actions on returned messages.
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: Depending on the type of bounce error code that is returned by the MTA, advanced bounce management allows the automated execution of different actions.
url: /setup-advanced-bounce-management-and-bounce-rules-in-phplist/

categories: ['Newsletters']

---
## Depending on the type of bounce error code that is returned by the MTA, advanced bounce management allows the automated execution of different actions.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Setup Advanced Bounce Management And Bounce Rules In phpList">}}  

In our [previous][1] tutorial, we had already addressed **phpList bounce processing**. If you’re not familiar with bounce processing, you can read it. You can download undelivered emails to your phpList project using bounce processing. How do you deal with downloaded emails? No idea, let’s take a look on advance bounce management that allows you to sort out **bounce emails**. Every returned email message has error code that is returned by the MTA (Mail Transfer Agent). Further, you can review returned message email header and it contains all the information along error code.

  * [Enable Advanced Bounce Handling][2]
  * [Add Bounce Rule][3]
  * [List Bounce Rules][4]
  * [Conclusion][5]

## Enable Advanced Bounce Handling {#Enable}

First thing first, enable advanced **bounce handling** by copying below code in config.php file.


```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```


After that, navigate to **System > Manage Bounces > List Bounces Rules** for creating bounce rules.

You can create bounce rules based on regular expressions. You can find the reason why **email bounce back** in header and use it for regular expression. In addition, select appropriate actions based on error code or regular expression. phpList supports the following actions. Action statement is self explanatory so we don’t need to go in detail.

  * Delete subscriber
  * Unconfirm subscriber
  * Blacklist subscriber
  * Blacklist email address
  * Delete subscriber and bounce
  * Unconfirm subscriber and delete bounce
  * Add subscriber to the do-not-send list and delete bounce
  * Add email address to the do-not-send list and delete bounce
  * Delete bounce

## Add Bounce Rule {#Add}

Let’s create our first bounce rule. 

  * First, enter regular expression like **(account has been suspended | Account not available)** 
  * After that, select appropriate action
  * Finally, add note/memo for the rule

{{< figure align=center src="images/add-bounce-rule.png" alt="Create bounce rule in phpList">}}  

You can add bounce rules for the following reasons and select appropriate action for handling bounces. However, you may search for SMTP responses and add more rules to the list.

  * Archived recipient
  * type=MX: Host not found
  * sorry, no mailbox here by that name
  * Mailbox disabled
  * account is disabled
  * This mailbox has been blocked due to inactivity
  * User unknown
  * No such recipient
  * and so on …

**Note:** You must wrap bounce reason in parenthesis and use pipe symbol **|** or **OR** statement, if you want to add multiple reasons in one bounce rule.

## List Bounce Rules {#List}

After creating number of rules, your **bounce rules** list will looks like as in below screenshot. You can do other actions such as order changes and deleting on this page.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="List of bounce rules">}}  



## Conclusion {#Conclusion}

In this tutorial, we learned about advanced **bounce management** and developed the necessary bounce rules. It would be great to allow this feature so that you can automate the process of cleaning invalid email addresses from your lists. It would also allow you to maintain the minimum level of returned emails. Moreover, your lists will have legitimate subscribers.

Further, [containerize.com][6] is on the way to enhance the stack of open source products in multiple languages and frameworks. For regular updates, please stay tuned at [Newsletters][7] category for more interesting articles.

## Explore

You may find the following links relevant:

  * [phpList – Open Source Newsletter and Email Marketing Software][8]
  * [How to create and send newsletter using phpList][9]
  * [How to setup and process bounces in phpList][1]
  * [Beginners Guide To Develop phpList Plugin][10]

 [1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/

 [2]: #Enable
 [3]: #Add
 [4]: #List
 [5]: #Conclusion
 [6]: https://containerize.com
 [7]: https://blog.containerize.com/category/newsletter/
 [8]: https://products.containerize.com/newsletter/phplist
 [9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/

 [10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
