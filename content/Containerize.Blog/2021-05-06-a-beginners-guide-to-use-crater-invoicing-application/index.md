---
title: A Beginners Guide To Use Crater Invoicing Application
seoTitle: A Beginners Guide To Use Crater Invoicing Application
description: A tutorial for getting started with an open source invoice system. This guideline of Crater helps you to get familiar with the core concepts and features.
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: This tutorial will help you to learn about Crater invoicing applications. It is a free and open source invoice system for the small businesses.
url: /invoicing/a-beginners-guide-to-use-crater-invoicing-application/
aliases: 
    -  /2021/05/06/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']

---
## This tutorial will help you to learn about Crater invoicing applications. It is a free and open source invoice system for the small businesses.

{{< figure align=center src="images/blog-crater.png" alt="Open Source Invoice System">}}  

Every business needs some sort of system for the management of invoices, expenses, payments, and many more. Invoicing software helps you to manage it so you can easily perform billing tasks and keep the focus on other important stuff. In this post, we will learn how to set up Crater and use it for handling accounting operations for the business.

  * [Introduction About Crater][1]
  * [Installation Procedure Of Crater][2]
  * [Feature Exploration][3]
  * [Conclusion][4]

## Introduction About Crater {#Introduction}

[Crater][5] is a free and open source billing application. It is absolutely free, and you can easily update it to the most recent versions. It is a free accounting system for small businesses and freelancers. It’s also a complete invoicing solution, allowing you to keep track of expenses and payments, calculate taxes, and produce estimates and invoices. Moreover, it comes with the out-of-the-box mobile applications for iPhone and Android devices. It will allow you to manage it from any place. Since Crater is a web-based billing software, the web application is designed with Laravel and VueJS, and the mobile apps are built with React Native. All documentation related to development and deployment is available. The complete source code can be found at [GitHub][6].

## Installation Procedure Of Crater {#Installation}

We will discuss how to install Crater with the manual method and using docker in this section.

### Manual Installation

  * Download the latest version from <http://craterapp.com/downloads>.
  * Upload the downloaded zip file to your server and extract it.
  * Point your domain to the public directory inside crater folder.
  * Navigate to the root of your project and execute “sudo chmod -R 775 ./” command to assign appropriate privileges.
  * Open your site in the browser and follow installation wizard.

### Docker Installation

  * Install Docker on your server: <https://docs.docker.com/install/>.
  * Install docker compose by following this guide: <https://docs.docker.com/compose/install/>.
  * Clone crater repository by using this command.


```
git clone https://github.com/bytefury/crater
```


  * Run below commands one by one to install Crater.


```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```


  * Open the Crater site in your browser and follow the installation wizard.

## Feature Exploration {#Feature}

In this section, we will explore the core features of this open source billing application. Once you are done with the installation, open your site http://example.com and login into the application.

  * **Dashboard** – After logging in, you’ll be taken to the dashboard, which displays the app’s entire view.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}  

  * **Settings** – Now navigate to the Settings page and add various web application settings such as Account Settings, Company Information, Preferences, Customizations, Notifications, Payment Modules, and so on.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}  

  * **Items** – The items tab is accessible from the sidebar menu. From this tab, you can manage your items. You can use items while creating Estimates and Invoices.
  * **Estimates** – Create a comprehensive quote that includes rates, discounts, inventory, and more. One of the three builtin templates may be used to create an estimate. Additional taxes can be added to the estimate, and they can also be added as a compound tax.
  * **Invoices** – Make professional invoices and send them to your clients. You can use available templates to generate invoice. You can add additional taxes to the invoice, as well as a compound tax. Further, you can provide a percentage or fixed-value discount to your customers. Moreover, you can apply discounts to individual items as well as the overall invoice amount.
  * **Payments** – This module helps you to keep tracking of the payments that you’ve got from your clients.
  * **Expenses** – The Expenses module helps you to keep track of how much you spend on different services.
  * **Taxes** – Using this feature, you can easily manage your taxes. You can add multiple taxes on the total invoice amount or on individual item.
  * **Reports** – Get comprehensive information on all of your invoices, whether they’re for one or several customers. Crater supports comes with four types of reports such as Sales Report, Profit & Loss Report, Expenses Report, and Taxes Report.

## Conclusion {#Conclusion}

We learned about Crater and how to set it up manually and with Docker. We’ve also looked at some of the features that every accounting billing software should provide. Hopefully, this guide can assist you in quickly implementing an open source invoice system for your business.

Finally, [containerize.com][7] is continuously writing blog posts on further open source products and topics. Therefore, please stay in touch with the [Invoicing][8] category for regular updates.

## Explore

You may find the following links relevant:

  * [Crater – Free Accounting System For Small Business][5]
  * [Top 5 Open Source Accounting Software In the Year 2021][9]

 [1]: #Introduction
 [2]: #Installation
 [3]: #Feature
 [4]: #Conclusion
 [5]: https://products.containerize.com/invoicing/crater/
 [6]: https://github.com/bytefury/crater
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/invoicing/
 [9]: https://blog.containerize.com/2021/02/08/top-5-open-source-accounting-software-in-the-year-2021/