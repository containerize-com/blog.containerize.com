---
title: Jhipster Tutorial | Getting Started With RAD Software
seoTitle: Jhipster Tutorial | Getting Started With RAD Software
description: A step-by-step Jhipster tutorial for beginners to getting started. Follow this article to set up the first application with open source Jhipster RAD software.
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: Let’s dive into a source code generator. It offers out-of-the-box features to generate web-based responsive applications with well-documented REST API.
url: /rapid-application-development/jhipster-tutorial-getting-started-with-rad-software/

categories: ['Rapid Application Development']

---
## Let’s dive into a source code generator. It offers out-of-the-box features to generate web-based responsive applications with well-documented REST API.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="jhipster tutorial">}}  

## Overview:

We recently published a [blog post][1] on the importance of [RAD Software][2] in the current times. Technology is evolving at a very high pace. Business requirements and needs are changing day by day. There is a race to develop solutions in a shorter span of time. On the other hand, every business wants to capture the market by launching the product as soon as possible. Therefore, open source community has developed many software that are based on **agile software development**. These free rapid application development software facilitate users with quick prototyping development capabilities. It lets you build and launch the initial release of your product and hence, you can develop further releases with the input of user feedback. In addition, these software are designed to absorb any change at any stage of the project. 

Meanwhile, the software development teams speed up their development processes and make sure earlier deliveries. In fact, it is cost-effective, time-saving, and gives satisfaction to developers and users. Rapid application development is flexible enough that you do not need to have planned and strict deadlines. You build what your end consumers need. In this Jhipster tutorial, we will look at how to set up [Jhipster][3] and create our first application with it by covering the following points:

  * [What is Jhipster and how to install it?][4]
  * [How to generate and run a basic application?][5]
  * [Explore the Admin dashboard of the generated app][6]
  * [Conclusion][7]

## What is Jhipster and how to install it? {#install}

[Jhipster][3] is an open source RAD software that is used to generate enterprise web applications. This open source application builder offers a Java-based Spring Boot framework on the server-side and popular front-end technologies such as Angular, Vue.js, and React.js. This source code generator includes robust microservice architecture with multiple user authentication mechanisms such as OAuth.20, JWTs, and HTTP Session authentication. Moreover, it provides an online version where users can explore all features. This **open source prototyping tool** is written in JavaScript with a little input of TypeScript. Therefore, comprehensive documentation is available regarding development and deployment. Developers can find the source code at the [Github][8] repo. There is complete support to run tests using popular testing frameworks such as Gatling and Protractor. Further, it is robust, secure, cross-platform, and supports third-party integrations.

In this **Jhipster tutorial,** we will explore Jhipster regarding its setup and usage. [Jhipster][3] is free and built on top of the rapid application development model. It provides a developer-friendly ecosystem that is quite promising and comes up with powerful rapid web application development tools.

Let’s see how can we install this open source application builder. First, we will install the following prerequisites.

  * [Java 11 JDK][9]
  * [Node.js 10.20.1+][10]

Once the installation is completed, open the terminal and run the following command.

`npm install -g generator-jhipster`

This command may take a few minutes, and after successful completion, Jhipster will be installed on your machine. 

You may check the following command to check the installation.

`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="Jhipster installation ">}}  

## How to generate and run a basic application? {#run}

In the section of this **Jhipster tutorial**, we will learn how to generate our first application using this open source RAD software. 

Go back to the terminal window, run the following commands:

`mkdir 1stApp<br>cd 1stApp/`

After making directories, run the following command mentioned below:

`jhipster`

This command will initiate the process. Answer all the questions regarding application tech preferences such as front end and back end technologies, database, testing framework, and more as you can see in the image below.

{{< figure align=center src="images/qst-1024x474.png" alt="jhipster tutorial">}}  

After answering all the questions, this source code generator will generate code files into your folder. 

Now, run the generated application with the following command:

`./mvnw`

Note: This command will work if you have chosen Maven as build automation for the backend. 

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="jhipster tutorial">}}  

Access your application into the browser at http://localhost:8080/.

## Explore the Admin dashboard of the generated app {#dashboard}

Once you hit http://localhost:8080/ in your browser, you will see the following screen.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="code generator">}}  

You can use the mentioned credentials to sign in as admin. Jhipster provides two default user roles. After a successful sign in, you will have the following provisions shown in the image. 

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="open source RAD software ">}}  

Jhipster provides complete user management where you can manage your users as you can see in the image below. 

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Jhipster user management ">}}  

The health option gives you information about your disk space and database.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="jhipster tutorial">}}  

There is a complete logging system available in the Jhipster admin dashboard.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="open source RAD software ">}}  

Admin dashboard of this open source application builder also provides REST endpoints of built-in and custom functionalities.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Open source Jhipster ">}}  

## Conclusion {#con}

This is the end of this Jhipster tutorial. There are many open source RAD platforms that provide **instant app development**. There is a very vibrant community that is always alive to respond to the issues and their solutions. RAD methodology is gaining fame due to many factors. Firstly, there is no need of having a complete understanding of the requirements. secondly, the end consumer is involved throughout the software development life cycle. Thirdly, the risk factor is very less as all the stakeholders are on board. However, RAD software are adaptable, developer-friendly, and flexible to the changes. It saves a lot of time as the code generators save an immense time of rewriting the repetitive scripts. This **[Jhipster][3] tutorial** article highlighted some important insights. It is lightweight and easy to set up with a few simple shell commands. 

Feel free to install this open source application builder today if you are seriously looking for an open source rapid application development platform. Finally, [containerize.com][11] is all set to enhance its tutorial base with some more interesting tutorials. Please stay connected with this [Rapid Application Development][2] category for regular updates.

## Explore

You may find the following links relevant:

  * [CUBA Platform][12]
  * [QuickApp][13]
  * [Jhipster][3]
  * [li3][14]
  * [Apache Isis][15]
  * [Top 5 Free Rapid Application Development Software In 2021][16]
  * [Rapid Application Development Software For Business | RAD][17]
  * [Things To Review Before Opting Open Source Software In 2021][18]

 [1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
 [2]: https://products.containerize.com/rad
 [3]: https://products.containerize.com/rad/jhipster
 [4]: #install
 [5]: #run
 [6]: #dashboard
 [7]: #con
 [8]: https://github.com/jhipster/generator-jhipster
 [9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
 [10]: https://nodejs.org/en/
 [11]: https://www.containerize.com/
 [12]: https://products.containerize.com/rad/cuba
 [13]: https://products.containerize.com/rad/quickapp
 [14]: https://products.containerize.com/rad/li3
 [15]: https://products.containerize.com/rad/apache-isis
 [16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/

 [17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/

 [18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
