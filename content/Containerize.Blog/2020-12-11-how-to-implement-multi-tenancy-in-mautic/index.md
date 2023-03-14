---
title: How To Implement Multi-tenancy In Mautic
seoTitle: How To Implement Multi-tenancy In Mautic
description: Mautic is an open source marketing automation solution. Implementing multi-tenancy in Mautic reduces costs, improves efficiency and security.
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: Save costs and maximize resource usage by implementing multi-tenancy in Mautic. Multi-tenancy helps in code customizations, app updates, improved productivity and easy maintenance.
url: /how-to-implement-multi-tenancy-in-mautic/

categories: ['Marketing Automation']

---
## Save costs and maximize resource usage by implementing multi-tenancy in Mautic. Multi-tenancy helps in code customizations, app updates, improved productivity and easy maintenance.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="How To Implement Multi-tenancy In Mautic">}}  

Mautic is a free and open source marketing automation solution that gives you complete control over your marketing emails, landing pages, workflows and the measures for your marketing activities. We will cover following sections in this tutorial:

  * [What is Multi-tenancy][1]
  * [What is Mautic][2]
  * [Implement Multi-tenancy in Mautic][3]
  * [Conclusion][4]

## What is Multi-tenancy {#multi-tenancy}

In multi-tenant software architecture, a single instance of a software application serves multiple tenants. Each tenant data is isolated from other tenant sharing the same application instance. These tenants are logically isolated, but physically integrated. This ensures data security and privacy for all tenants. Creating multiple tenants from a single application instance requires much less memory. Tenants share resources and decrease costs for software maintenance, infrastructure, and data center operations. Costs tend to be lower than those of a single-tenant infrastructure.

## What is Mautic {#mautic}

[Mautic][5] is a free and open source marketing software. Automate repetitive marketing tasks such as marketing campaigns, lead generation, contact segmentation, etc. using Mautic. It has startling features including lead generation, campaign building, contact segmentation, email builder, A/B testing, page builder, lead nurturing and more. Mautic also supports integration with all the popular social platforms e.g. Facebook, Twitter, LinkedIn. All these incredible features help you to boost the overall customer experience and improve marketing automation for your business.

## Implement Multi-tenancy in Mautic {#implement}

  * Create a new empty database named as “main_db”.
  * Then create table named “tenant” which will hold details about all tenants.
  * It will have 3 fields including site\_name, url and db\_name as shown in figure

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="How To Implement Multi-tenancy In Mautic">}}  

  * After that open mautic/app/paths.php file and add this code:


```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```


  * This will select corresponding config file on the basis of URL path.
  * Then copy database of current Mautic installation and use it for new tenant.
  * After that, create copy of mautic/app/config/local.php and rename it to [site_name].php.
  * Finally update database name, host, password and user according to the new database.

## Conclusion {#conclusion}

Mautic is a free, rich-featured, and quality-oriented marketing automation solution. It allows you to create marketing campaigns, segments, forms, reports and much more. Implementing multi-tenancy in Mautic reduces costs, improves efficiency, scalability and security. Easily create hundreds of tenants from just one installation.

## Explore

To learn more about Mautic and FaceBook, please visit:

  * [Mautic | Open Source Content Marketing Technology Platform][5]
  * [How to Setup Mautic Campaigns Using Campaign Builder][6]
  * [Drupal Mautic Integration To Automate Lead Nurturing][7]
  * [Marketing Automation with Mautic and WooCommerce Integration][8]
  * [Integrate Mautic & Joomla For Digital Marketing Automation][9]

 [1]: #multi-tenancy
 [2]: #mautic
 [3]: #implement
 [4]: #conclusion
 [5]: https://products.containerize.com/marketing-automation/mautic
 [6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/

 [7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
 [8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/

 [9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
