---
title: 'Create Your First PHP Project On Localhost Using  XAMPP'
seoTitle: 'Create Your First PHP Project On Localhost Using  XAMPP'
description: Setup web development environment using free and open source web server XAMPP. Create and test your PHP projects on localhost by following a few easy steps.
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: Setup web development environment using free and open source XAMPP server. Learn, create and test your PHP projects on localhost by following a few easy steps.
url: /web-server-solution-stack/create-your-first-php-project-on-localhost-using-xampp/
aliases: 
    -  /2021/01/30/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']

---
## Setup web development environment using free and open source XAMPP server. Learn, create and test your PHP projects on localhost by following a few easy steps.

[{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Create Your First PHP Project With XAMPP Open Source Web Server">}}][1] 

XAMPP is an open source web server which provides a local environment to create, run and test a PHP project before deploying it on live servers. It provides a local server for developers to test and build web apps. We will cover following sections in this blog post:

  * [Requirements][2]
  * [What is XAMPP][3]
  * [Create PHP script][4]
  * [Run and test PHP script][5]
  * [Conclusion][6]

## Requirements {#requirements}

  * XAMPP Installation
  * Code editor application
  * Basic PHP knowledge
  * Basic HTML and JavaScript knowledge

## What is XAMPP? {#xampp}

XAMPP is an open source web server solution stack. It contains Apache, MySQL, MariaDB, PHP, and Perl. It is extremely easy to install and use. That’s why it’s the most popular PHP development environment. XAMPP server provides a complete environment for PHP web app development. If you don’t already have XAMPP working installation, then follow this guide to install XAMPP:

[Setup XAMPP and phpMyAdmin as localhost on Windows][7]

## Create PHP script {#php}

  * Assuming that you have already installed XAMPP by following above tutorial, now let’s create a simple PHP script and test it on XAMPP.
  * First open your editor. If you don’t have a programming editor, simply open up Notepad. 
  * Enter following code


```
<?php
echo "This is my first PHP project";
?>
```


  * Click on “File” on top right corner.
  * Hit “Save as” button.
  * Enter the name with extension “.php”.
  * For “Save as type”, select “All Files (\*.\*)” option.
  * And finally hit “Save” button.

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Create Your First PHP Project With XAMPP Open Source Web Server">}}  

## Run and test PHP script {#test}

  * Copy this PHP script to htdocs folder inside your XAMPP installation. Mostly htdocs folder resides here: C:\xampp\htdocs
  * Open up your browser.
  * Go to localhost/my\_first\_php_project.php 

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Create Your First PHP Project With XAMPP Open Source Web Server">}}  

Congratulations! you have just created your first PHP project.

## Conclusion {#conclusion}

Creating first web project is always very exciting for a beginner. It feels great when you design your first dynamic script, run it and view it working on your browser. I hope this simple guide has helped you with creating and running your first PHP project with XAMPP open source web server. 

## Explore

To learn more about XAMPP and phpMyAdmin, checkout following guides:

[Setup XAMPP and phpMyAdmin as localhost on Windows][7]

[Free Web Server Solution Stack for PHP & Perl Developers][1]

 [1]: https://products.containerize.com/solution-stack/xampp
 [2]: #requirements
 [3]: #xampp
 [4]: #php
 [5]: #test
 [6]: #conclusion
 [7]: https://blog.containerize.com/2020/10/26/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/