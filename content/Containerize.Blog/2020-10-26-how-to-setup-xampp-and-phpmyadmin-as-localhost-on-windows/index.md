---
title: Setup XAMPP and phpMyAdmin as localhost on Windows
seoTitle: Setup XAMPP and phpMyAdmin as localhost on Windows
description: Setup XAMPP and phpMyAdmin as localhost on Windows. Create your own free and open-source local testing environment to test and build web apps.
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: Setup a development environment with free and open source web server solution stack (XAMPP) and Database management software (phpMyAdmin)
url: /how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/

categories: ['Database Management Software', 'Web Server Solution Stack']

---
## Setup a development environment with free and open source web server solution stack (XAMPP) and Database management software (phpMyAdmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="XAMPP and phpMyAdmin as localhost">}}  

XAMPP and phpMyAdmin as localhost provides a local server for developers to test and build web apps. XAMPP is a local server that is installed on personal computers/laptops. It provides a local environment to create, run, and test PHP applications before deploying them on live servers. 

We will cover following sections in this blog post:

  * [Description][1]
  * [XAMPP Installation][2]
  * [phpMyAdmin Dashboard][3]
  * [Final Thoughts][4]

## Description: {#description}

XAMPP is free and open source web server solution stack. It contains Apache, MySQL, MariaDB, PHP, and Perl. XAMPP is available for Windows operating systems. It is extremely easy to install and use. That’s why it’s the most popular PHP development environment. XAMPP and phpMyAdmin as localhost provides a complete environment for web app development and testing.

Alphabets in XAMPP stand for:

  * **X** — cross-platform (supports multiple operating systems including Linux, Windows and Mac OS)
  * **A** — Apache HTTP Server
  * **M** — MariaDB (Database)
  * **P** — PHP
  * **P** — PERL

## XAMPP Installation {#xampp}

  * Download XAMPP from [here][5].

{{< figure align=center src="images/xampp1.png" alt="XAMPP as localhost">}}  

  * Install the executable file.
  * Then click “Next”.
  * Choose the components you want to install. 

{{< figure align=center src="images/xampp2.png" alt="XAMPP as localhost step 2">}}  

  * For most web apps you only need _Apache_, _MySQL_, _PHP_, and _phpMyAdmin_.
  * Select the installation directory where you want to install XAMPP.
  * You will be shown a windows security alert. You must check the following option: “_Private networks, such as my home or work network”_.
  * Finally click on “Finish” to complete installation.

{{< figure align=center src="images/xampp4.png" alt="XAMPP as localhost step 3">}}  

  * After successful installation, open XAMPP control panel.
  * Start “Apache” and “MySQL” services.

{{< figure align=center src="images/xampp5.png" alt="XAMPP as localhost step 4">}}  

## phpMyAdmin Dashboard: {#phpmyadmin}

To access phpMyAdmin dashboard, click on “Admin” button next to MySQL service. You can also access phpMyAdmin by visiting http://localhost/phpmyadmin from your browser. Here you can create databases. Follow these steps to create a new database.

  * From dashboard, click on “Databases” tab.

{{< figure align=center src="images/db1.png" alt="phpMyAdmin at localhost step 1">}}  

  * Enter database name and click on “Create” button. This will simply create a new empty database.

{{< figure align=center src="images/db2.png" alt="phpMyAdmin at localhost step 2">}}  

  * Next you can create tables by selecting the newly created database.
  * Enter table name under “Create Table”.

{{< figure align=center src="images/db3-1024x234.png" alt="phpMyAdmin at localhost step 3">}}  

  * Select number of columns.
  * Then click on “Go” button.
  * After that you need to fill the form on next page to finish creating table. 

{{< figure align=center src="images/db4-1024x564.png" alt="phpMyAdmin at localhost step 4">}}  

## Final Thoughts: {#final}

XAMPP installation is simple and straight forward. It takes no more than 15 minutes to the setup XAMPP server. Once it’s installed, developers can build and test their PHP based web apps even without an internet connection. Instead of testing projects directly on a live web server, it’s simple and time-saving to test them locally. It’s a great platform for beginners to learn, test, and polish their PHP, Perl, and database skills.

## Explore:

[Open Source Web Server Solution Stack for PHP & Perl Developers][6]

[Best Open Source Web Server Solution Stack Options][7]

 [1]: #description
 [2]: #xampp
 [3]: #phpmyadmin
 [4]: #final
 [5]: https://www.apachefriends.org/de/download.html
 [6]: https://products.containerize.com/solution-stack/xampp
 [7]: https://products.containerize.com/solution-stack/