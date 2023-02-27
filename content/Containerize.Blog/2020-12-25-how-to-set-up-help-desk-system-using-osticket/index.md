---
title: How To Set Up Online Help Desk Software Using osTicket
seoTitle: How To Set Up Online Help Desk Software Using osTicket
description: Manage all your support requests in one place using osTicket Help Desk. Convert inquiries created via email, phone and forms into web-based tickets.
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: Manage all your support requests in one place using osTicket. Convert inquiries created via email, phone and forms into simple web-based tickets.
url: /helpdesk/how-to-set-up-help-desk-system-using-osticket/
aliases: 
    -  /2020/12/25/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']

---
## Manage all your support requests in one place using osTicket. Convert inquiries created via email, phone and forms into simple web-based tickets.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="How To Set Up Online Help Desk Software Using osTicket">}}  

osTicket is an open source online help desk software solution. osTicket helpdesk is a free alternative to high cost and complex customer support systems. It is simple, lightweight, reliable, web-based and easy to setup and use. The best part is, it’s completely free. We will cover following sections in this tutorial:

  * [What is osTicket?][1]
  * [Pros and Cons of osTicket][2]
  * [How to Setup osTicket?][3]
  * [Conclusion][4]

## What is osTicket? {#osticket}

osTicket provides an user friendly control panel and a real-time reporting component. Users can just log in and create the tickets in a few easy steps. They can create tickets via your website, email, or phone. Incoming tickets then will be saved and assigned to agents. Agents will get email notifications and will respond to the queries to help resolve their issues. Customers and agents can discuss details and progress in comment section. Customers can keep track of their requests and progress via built-in customer portal provided by this online help desk software. 

## Pros and Cons of osTicket {#pros}

#### Pros

  * osTicket is extremely user friendly for both end users and support agents.
  * Bundled with rich features, osTicket has everything you need without being overly complicated.
  * osTicket is completely free and open source ticket management software.
  * It is lightweight, secure, reliable and easy to install help desk management software.
  * It is flexible to run on all popular web servers including Apache, Nginx , Lighttpd and IIS, etc.

#### Cons

  * osTicket doesn’t provide details ticket analytics and statistics like other paid help desk systems.
  * It’s user interface is very simple and basic when compared to other support systems.

## How to Install osTicket? {#how}

Follow these steps to install osTicket with Nginx on Ubuntu 18.04 LTS.

  * Create a new directory for osTicket.


```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```


  * Download latest osTicket setup using using following commands.


```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```


  * After that, create config file from sample file using these commands.


```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```


  * Then change the ownership of the osTicket web directory to the ‘www-data’ user and group.


```
sudo chown -R www-data:www-data /var/www/osticket/

```


  * After that, create new virtual host configuration file.


```
sudo vim /etc/nginx/sites-available/osticket.conf

```


  * Then paste the configuration code into it.


```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```


  * Change server name as per your domain name. Save the file and exit.
  * Now link this virtual host file to sites-enabled folder using following command


```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```


  * Test for any configuration errors using following command


```
nginx -t
```


  * Now restart nginx service using following command


```
sudo systemctl restart nginx

```


  * Now enter your domain name in any web browser to start installation wizard as shown in following figure

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="How To Set Up Online Help Desk Software Using osTicket">}}  

  * Enable required extensions from php.ini and click “Continue”.
  * Fill all required information and click “**Install Now” **button.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="How To Set Up Online Help Desk Software Using osTicket">}}  

  * In the database settings, enter dbname, username, and password.
  * Finally click on “Install Now” button
  * After installation completes, it will show page with success message.
  * Next, change the permission of ost-config.php to remove write access by running the following command:


```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```


## Conclusion {#conclusion}

osTicket is best suited for companies with low budget or the ones who want a simple help desk system and not a complex one. It is simple, lightweight, reliable, open source, and totally free online help desk software. Which makes osTicket a great alternative to higher-cost customer support systems. To learn more about osTicket features and installation guide, please check out following tutorial.

## Explore

[Best Open Source and Free IT Help Desk Software][5]

[Popular Free Ticketing Based Helpdesk and Customer Care System][6]

[A Beginner’s Guide To Develop osTicket’s Plugin][7]

[How to Implement Multi-tenancy in osTicket][8]

[Automate ticketing system using WordPress and osTicket][9]

 [1]: #osticket
 [2]: #pros
 [3]: #how
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/
 [6]: https://products.containerize.com/helpdesk/osticket
 [7]: https://blog.containerize.com/2021/01/01/a-beginner%e2%80%99s-guide-to-develop-osticket%e2%80%99s-plugin/
 [8]: https://blog.containerize.com/2020/11/02/how-to-implement-multi-tenancy-in-osticket/
 [9]: https://blog.containerize.com/2020/10/13/automate-ticketing-system-using-wordpress-and-osticket/