---
title: How To Set Up CMDB Solution Ralph On Localhost
seoTitle: How To Set Up CMDB Solution Ralph On Localhost
description: This tutorial is about setting up Ralph on localhost. Ralph is a free CMDB solution that provides features to track assets and configurations.
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: IT asset management solution reduces operational costs and increases efficiency. This article is about how to set up CMDB software Ralph on your local machine.
url: /cmdb-software/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']

---
## IT asset management solution reduces operational costs and increases efficiency. This article is about how to set up CMDB software Ralph on your local machine.

{{< figure align=center src="images/ralph.png" alt="CMDB Solution">}}  

## **Overview**

At the current point of time, organizations are thriving to meet the pace of technology by employing huge IT infrastructure. Next, it is not less than a challenge to manage such huge environments. It requires manpower and tech power to accomplish such critical tasks. At times, it becomes a hassle to formulate processes and procedures to handle complex networks of systems that include printers, desktop computers, scanners, phones, and other IT accessories. Likewise, configurations of these nodes are also important as there are high chances of downtime of any machine in the network. Hence, there should be a consistent check over these configurations. 

However, there are many open source and free software available to keep track and record of assets. This software is known as configuration management database software (CMDB). Recently, [containerize.com][1] published a CMDB solution [Ralph][2] that provides many features for better assets and configuration management. In this blog post, we will explore Ralph by covering the following points.

  * **[Brief Introduction of CMDB Software Asset Management Ralph][3]**
  * **[Features Of Ralph][4]**
  * **[How To Set Up Ralph On Localhost?][5]**
  * **[Conclusion][6]** 

## Brief Introduction of CMDB Software Asset Management Ralph {#intro}

Ralph is a free open source IT asset management solution. It is cross-platform and comes with self-hosting capabilities. There is a complete ecosystem of real time asset tracking. Therefore, users can perform analysis for reporting. It enables users to record details of assets about their life cycle. Moreover, this open source digital asset management software provides space for storing information about data center assets. On the other hand, this CMDB solution also provides support for managing software, license, certificates, and other contracts. Ralph not only supports assets management but also provides provisions to perform actions on those assets. However, the actions are related to deploying a host, generating invoices, domain tracking, or inventory management. 

This IT asset management solution comes up with a RESTful interface. Developers can integrate many third-party applications using the API endpoints exposed by this open-source free tool. In addition, Ralph is written in Python along with the input of HTML, CSS, and JavaScript. Therefore, there is comprehensive documentation available regarding development and deployment. The source code of this stock management solution is available at [Github][7].

## Features Of Ralph {#features}

Ralph offers many features. However, we will mention some of the following key features.

**Extensible**: This open source digital asset management software is highly extensible. Developers can deploy it on premises or on cloud as per their needs.

**Support For Data Centers:** Ralph also offers support for data warehouses, data center rooms, servers, and racks. Users can keep track of all components, their network, and configurations. 

**REST API**: This free CMDB software is highly customizable. In fact, it provides a REST API for third-party integrations. Developers can extend it according to their requirements. 

**Intuitive User Interface:** There is a logical user interface available in this CMDB solution where users can navigate easily. Further, the admin dashboard provides various widgets that show data coming in real-time. 

**Command-Line Interface**: Ralph comes up with a command-line interface that provides a facility to discover MAC addresses for the deployment of hosts. 

**Support For Non-Physical Assets**: This equipment management solution not only provides support for physical assets but also manages non-physical resources such as domains, software, and licenses.

## How To Set Up Ralph On Localhost? {#setup}

In this section, we will go through the installation process of resource management software Ralph on the local machine. It is quite easy to set up and use. 

Before moving to the next section, make sure you have installed the following prerequisites.

  * [Docker-compose][8]
  * [Docker][9] 

Most of the open source software offers docker images for the deployments on various platforms. It gives ease to the developers and speeds up the development and deployment process. 

Once prerequisites are installed, turn on Docker. Now, open the terminal and run the following command to make an empty directory:


```
mkdir ralph<br>cd ralph
```


After that, make a new file named ‘docker-compose.yml’  and populate it with the following data. 


```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```


Now, save the file and run the following command to make the build:


```
docker-compose build

```


Upon a successful build, run the following command for database:


```
docker-compose run –rm web /root/init.sh

```


If all goes well, run the following command to spin up the Docker’s container:


```
docker-compose up -d
```


After running that command, Docker containers will be up and running as shown in the image below:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="CMDB Solution">}}  

Finally, open the browser and access the application at this address http://127.0.0.1.

It will show the login page as shown in the image below:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="CMDB Solution">}}  

## Conclusion {#Conclusion}

After going through this CMDB tutorial blog post, one thing is clear that asset management is near to impossible without a good CMDB Solution. Resource management software has specific roles in managing and tracking assets, configurations, and their relationships. There are provisions to track those changes that are barely made on digital or physical assets. These free tools are easy to set up, use, and come with detailed documentation and guidance. Finally, [**containerize.com**][1] is intended to write articles on further open source products. Therefore, please stay in touch with this [][10]**[CMDB Software][11]** category for the latest updates.

## Explore

  * **[CMDB Software][11]**
  * **[Ralph][2]**
  * [**Automate Business Operations Using Free and Open Source Software**][12]
  * **[Software development trends to look out for in 2021][13]**

 [1]: https://www.containerize.com/
 [2]: https://products.containerize.com/cmdb-software/ralph/
 [3]: #intro
 [4]: #features
 [5]: #setup
 [6]: #Conclusion
 [7]: https://github.com/allegro/ralph
 [8]: http://docs.docker.com/compose/install/
 [9]: https://docs.docker.com/docker-for-mac/install/
 [10]: https://products.containerize.com/healthcare-technologies/
 [11]: https://products.containerize.com/cmdb-software/
 [12]: https://blog.containerize.com/2020/08/27/automate-business-operations-using-open-source-software/
 [13]: https://blog.containerize.com/2021/04/09/software-development-trends-to-look-out-for-in-2021/