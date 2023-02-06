---
title: How To Dockerize WordPress | Docker WordPress
seoTitle: How To Dockerize WordPress | Docker WordPress
description: 'What is Docker & Docker Compose? In this article, we will learn how to install Docker, Docker Compose, and how to Dockerize Wordpress into a Docker Container.'
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: A container software bundles up an application, its dependencies and make the app run on any computing environment. Let’s learn how to Dockerize WordPress.
url: /blogging/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']

---
## A container software bundles up an application, its dependencies and make the app run on any computing environment. Let’s learn how to Dockerize WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}  

## Overview

Welcome to another blog post in the [blogging][1] category of open source software. We have published some articles on topics such as [Boost Your Leads with Free CiviCRM WordPress Integration][2], [How to Build Your Website with WordPress and Gatsby][3], and some more. However, this article will bring further insights and details about open source blogging platforms and **container software**. We will go through some hot questions such as what is Docker & **how to install Docker Compose** and we will learn how to Dockerize WordPress. 

Containerization has become a major trend in software development as an alternative to virtualization. It involves encapsulating or bundling up software code and all its dependencies so that it can run on any infrastructure consistently. Containerization allows developers to create and deploy applications faster and more securely. Docker is the most popular containerization application used across the developer community. In this tutorial, we will learn how to Dockerize WordPress using Docker Compose. So, let’s get started with the following points.

  * [**What is Docker?**][4]
  * [**Why you need to Dockerize WordPress**?][5]
  * **[How to install Docker Compose][6]**
  * **[Dockerize WordPress][7]**
  * **[Conclusion][8]**

## What is Docker? {#docker}

In simple words, Docker is open-source **container software** that does virtualization faster and lighter. It’s so light that a Docker container can be launched in just a few seconds. And, you can easily run dozens of Docker containers on a single PC. Developers use Docker to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. By doing so, the developer can rest assured that the application will run on any infrastructure. In addition, there is a huge developer and support community that is always alive to provide utmost assistance in any relevance. Docker has become a must-have component of any software enterprise due to its powerful features and usages. 

## Why you need to Dockerize WordPress? {#why}

In this section, we will know about the need behind dockerizing WordPress. WordPress is a top leading open source blogging software that is highly adopted by the world of technology. However, to run WordPress locally, you need Apache/Nginx, MySQL server, PHP, and tons of other dependencies. And deployment to staging or production environment is a nightmare when it comes to managing those dependencies. Sometimes, it becomes a hassle for the developers and support engineers to repeat the deployments repeatedly as it demands time and manpower. 

So, containerization can help you with this. All you need is Docker – installation itself takes seconds and no additional configuration is required

No matter if it’s a dev machine, Stage, or Live server and what OS it is, Docker works the same everywhere. This means you won’t have to look for bugs that, say, appear in one environment and cannot be reproduced in another.

## How to install Docker Compose {#install}

### Prerequisites

You can use Docker Compose to easily run WordPress in an isolated environment built with Docker containers. This guide demonstrates how to use Compose to set up and run WordPress. 

Docker Compose relies on Docker Engine, so make sure you have Docker Engine installed. On desktop systems like Docker Desktop for Mac and Windows, Docker Compose is included as part of those desktop installs. However, on Linux systems first, install the Docker Engine by following their [official guide][9].

### Install Compose on Linux

Run this command to download the current stable release of Docker Compose:


```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```


Apply executable permissions to the binary:


```
sudo chmod +x /usr/local/bin/docker-compose
```


Test Installation by running version command:


```
docker-compose --version
```


### Define a Dockerfile for WordPress

The first thing we need to do is to define how our image will look like in a **_Dockerfile_**. It is a text file that is added to the directory with the sources of your application. 


```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```


“**/var/www/html/wordpress**” will contain full contents of WordPress along with themes, plugins, and contents. If your repository only contains the theme or plugin then just add the relevant folder.

Create a docker-compose.yml file that starts your WordPress blog and a separate MySQL instance with a volume mount for data persistence:


```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```


Now, run the command in your project directory


```
docker-compose up -d
```


This runs **_docker-compose up_** in detached mode, pulls the needed Docker images, and starts the WordPress and database containers.

Once the containers have started, you can open the URL in the web-browser and start using your application:


```
http://localhost:8000
```


## Conclusion {#conclusion}

This brings us to the end of this blog post. In this article, we learned about what is Docker, **how to install Docker Compose**. We also learned how to Dockerize WordPress using Docker-Compose. In addition, we introduced you to the concept behind Docker and how you can define simple multi-container applications. However, this open source **container software** is a leading option for all software organizations. Therefore, this article will really help you if you are looking to opt for Docker for your applications. There are many other relevant articles and blogging software listed in the “Explore” section below.

Finally, [containerize.com][10] is writing articles on further open source products. Therefore, please stay in touch with the [Blogging][1] category for regular news and updates. Moreover, you can follow us on our social media accounts [Facebook][11], [LinkedIn][12], and [Twitter][13].

## Explore

You may find the following links relevant:

  * [WordPress][14]
  * [Jekyll][15]
  * [Discourse][16]
  * [Ghost][17]
  * [How to Dockerize WordPress with Docker Compose][18]
  * [Boost Your Leads with Free CiviCRM WordPress Integration][2]
  * [Automate ticketing system using WordPress and osTicket][19]
  * [How to Integrate Discourse Forum with WordPress][20]
  * [Increase Website Search Traffic by Following Top 7 SEO Blogs][21]
  * [How to Build Your Website with WordPress and Gatsby][3]
  * [How to Enable GZIP Compression in WordPress for Better PagSpeed and SEO][22]

 [1]: https://products.containerize.com/blogging/
 [2]: https://blog.containerize.com/2020/10/13/boost-your-leads-with-civicrm-wordpress-integration/
 [3]: https://blog.containerize.com/2020/11/25/how-to-build-your-website-with-wordpress-and-gatsby/
 [4]: #docker
 [5]: #why
 [6]: #install
 [7]: #dockerize
 [8]: #conclusion
 [9]: https://docs.docker.com/engine/install/#server
 [10]: https://www.containerize.com/
 [11]: https://web.facebook.com/containerize
 [12]: https://www.linkedin.com/company/containerize/
 [13]: https://twitter.com/containerize_co
 [14]: https://products.containerize.com/blogging/wordpress/
 [15]: https://products.containerize.com/blogging/jekyll/
 [16]: https://products.containerize.com/discussion-forum/discourse/
 [17]: https://products.containerize.com/blogging/ghost/
 [18]: https://blog.containerize.com/2020/12/18/how-to-dockerize-wordpress-with-docker-compose/
 [19]: https://blog.containerize.com/2020/10/13/automate-ticketing-system-using-wordpress-and-osticket/
 [20]: https://blog.containerize.com/2020/10/14/how-to-integrate-discourse-forum-with-wordpress/
 [21]: https://blog.containerize.com/2021/01/17/increase-website-search-traffic-by-following-top-7-seo-blogs/
 [22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/