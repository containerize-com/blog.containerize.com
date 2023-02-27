---
title: Osticket Customization – Implement Multi-tenancy in osTicket
seoTitle: Osticket Customization – Implement Multi-tenancy in osTicket
description: "Implementing multi-tenancy in osTicket can save costs and resource utilization. In this article, we'll do osTicket customization to achieve multi-tenancy."
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: Multi-tenant osTicket helpdesk allows you to create multiple tenants from a single installation. That makes optimum use of web server resources.
url: /helpdesk/how-to-implement-multi-tenancy-in-osticket/
aliases: 
    -  /2020/11/02/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']

---
## Multi-tenant osTicket helpdesk allows you to create multiple tenants from a single installation. That makes optimum use of web server resources.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Osticket Customization - Implement Multi-tenancy in osTicket">}}  

In this article we will discuss how to make osTicket customization to implement multi-tenancy. This post will cover following topics:

  * [OsTicket Overview][1]
  * [Multi-tenancy Overview][2]
  * [Benefits of multi-tenancy][3]
  * [Implementation][3]
  * [Conclusion][4]

## OsTicket Overview: {#osticket}

[OsTicket][5] is an open source online customer support web based help desk software. It provides an intuitive control panel and a real-time reporting component. It has easy to use inquires management module. This allows you to create inquiries from your phone, email, and web-based forms. Which offers numerous options to help tailor all parts of the client support experience like comments and email notifications. 

## Multi-tenancy Overview: {#multitenancy}

Multi-tenancy refers to the implementation, where multiple independent instances of an app operate in a shared environment. The instances (tenants) are logically isolated, but physically integrated. An organization can possibly have multiple departments. So they can create multiple tenants/instances of the same app. For example, in our case, a helpdesk system can be configured for different domains of the same organization. There could be hundreds of tenants but they will all be using the same files and hence the same storage. This will reduce storage costs as well as it will make upgrades easier. Developers only need to update the files from one place instead of making changes for each site separately.

## What are the benefits of multi-tenancy? {#benefits}

Here are some crucial benefits of multi-tenancy

  * **Resources Optimization:** One machine reserved for one tenant isn’t efficient. Because one tenant is not likely to use all of the machine’s computing power. Sharing machines will maximize resource availability.
  * **Lower costs:** With multiple tenants sharing the same resources will cost much lower than if each tenant required their own dedicated infrastructure.
  * **Efficient Hosting:** Also Multi-tenant OsTicket will reduce hosting costs to a minimum in a shared environment.
  * **Security:** With less interaction with the outside world, exposure to malicious software is reduced.
  * **Easy Upgrade**: Upgrade files only in one place instead of updating them separately. This will save a lot of time and effort.

## Implemention of Multi-tenant OsTicket: {#implementation}

  * Create a new empty database names as “main_db”.
  * Then create table named “tenant” which will hold details about all tenants.
  * It will have following fields:

  1. site_name
  2. url
  3. db_name

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Osticket Customization - Implement Multi-tenancy in osTicket">}}  

  * site\_name field will hold the name of tenant. url field will hold the complete URL of the tenant. db\_name field will hold the name of database which will be created for the new tenant.
  * After that open /include/ost-config.php file and add following code


```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```


  * This code will update the default database connectivity. It will first get the URL of current tenant. Then it will get name of database according to that URL. That’s how the app will know which database to connect to. Every tenant will have a separate database. Database will be selected on the basis of tenant URL.
  * For creating a new tenant, simply setup new tenant domain on Nginx server. After that just copy the current osTicket database and rename it. Finally add the entry into “tenant” table of “main_db” database. 

## Conclusion: {#conclusion}

osTicket is a free and open source IT help desk management software. We have learnt how make osTicket customizations to implement multi-tenancy in OsTicket to can save costs, optimize the app, and lower resource requirements. It will make life easier for developers to create new tenants in a few simple steps. Hence create multiple osTicket tenants from the same installation.

## Explore:

Please checkout following page to learn more about osTicket: 

  * [OsTicket – A free open source Helpdesk software][5]
  * [A Beginner’s Guide To Develop osTicket Plugin][6]
  * [How To Set Up Online Help Desk Software Using osTicket][7]
  * [Automate ticketing system using WordPress and osTicket][8]

 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/2021/01/01/a-beginner%e2%80%99s-guide-to-develop-osticket%e2%80%99s-plugin/
 [7]: https://blog.containerize.com/2020/12/25/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/2020/10/13/automate-ticketing-system-using-wordpress-and-osticket/