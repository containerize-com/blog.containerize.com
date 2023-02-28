---
title: How To Configure Multi-tenant Application In phpList
seoTitle: How To Configure Multi-tenant Application In phpList
description: phpList is a free and open source newsletter software. Configure Multi-tenant application and run several instances of an application in a shared environment.
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: Tutorial to develop a multi-tenant application in phpList. The multi-tenant feature uses a single installation for multiple hosts to reduce hosting costs.
url: /newsletter/how-to-implement-multi-tenancy-in-phplist/

categories: ['Newsletters']

---
## Tutorial to develop a multi-tenant application in phpList. The multi-tenant feature uses a single installation for multiple hosts to reduce hosting costs.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Multi-tenant Application phpList">}}  

In this article, we will cover **what is Multi-tenancy** and how we can configure **Multi-tenant application** in phpList.

## What is phpList?

When deciding marketing strategy, email marketing is a key part of every online digital company. phpList enables businesses to reach a large audience. phpList is widely used **open source newsletter software** for managing lists and sending newsletters. It helps companies to create, schedule, send and analyze newsletter campaigns. phpList supports features such as analytics, segmentation, bounce processing, plugins, APIs, and many more.

## What is Multi-tenancy?

Multi-tenancy is an architecture in which many customers/sites are represented by a single instance of a software application. In Multi-tenancy, the site is considered a tenant. Every tenant has specific features such as configuration, themes, SMTP. 

A major aspect of cloud computing is multi-tenancy. The **multi-tenant architecture** helps businesses to achieve a better ROI by decreasing maintenance costs and rapid tenant updates. Also, applications that are designed on the architecture of multi-tenants can be scalable easily.

We can implement Multi-tenancy by using the following approaches.

  * Shared database for all tenants.
  * Separate database for every tenant.

We will use a separate database for every tenant approach to implement Multi-tenancy in phpList.

  * [Handle request flow][1]
  * [Setup database for tenant][2]
  * [Configure Nginx for tenant][3]

## Handle request flow {#request}

  * Take a backup of your config.php file and you can find it under the config directory.
  * Create a new config.php file and add the following code in it for handling sites/tenants.


```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```


Replace example.com with your domain name. You also need to create a configuration file for every tenant. Copy the backup file of config.php and save it with a new name like config.example.com.php.

## Setup database for tenant {#database}

  * Take a backup of the existing phpList database. Use it to create a database for the new tenant.
  * Open config.example.com.php file. Change database credentials and any other settings as per your environment.

## Configure Nginx for tenant {#Nginx}

  * Go to Nginx directory **cd /etc/nginx/sites-available**.
  * Copy default config.php file and save it with your site name like example.com.
  * Open example.com configuration with **sudo nano example.com**.
  * Change the root path, server_name, and any other settings.
  * Test configurations with **sudo nginx -t**
  * Finally, create symlink by executing **sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/**
  * Restart Nginx web server by running **sudo systemctl restart nginx**, so it can load the newly created configuration file.

## Conclusion

Multi-tenancy software has some advantages in comparison with single-tenancy application such as reduce maintenance costs, effective resource usage and easy to install updates. If you are going to build SaaS (Software as a service) software, you can follow the Multi-tenancy architecture and enjoy its true power.

## Explore

You may find the following links relevant:

  * [phpList – Open Source Newsletter and Email Marketing Software][4]
  * [How to create and send newsletter using phpList][5]
  * [How to setup and process bounces in phpList][6]
  * [Beginners Guide To Develop phpList Plugin][7]
  * [Setup Advanced Bounce Management And Bounce Rules In phpList][8]

 [1]: #request
 [2]: #database
 [3]: #nginx
 [4]: https://products.containerize.com/newsletter/phplist
 [5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/

 [6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/

 [7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/

 [8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
