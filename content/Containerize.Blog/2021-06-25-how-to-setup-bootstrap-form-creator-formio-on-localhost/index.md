---
title: How To Setup Bootstrap Form Creator Form.io On Localhost
seoTitle: How To Setup Bootstrap Form Creator Form.io On Localhost
description: Go through this article and learn how to set up Formio on localhost. This bootstrap form creator is free, extensible, and offers third-party integrations.
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: Build task-specific and customizable forms using a drag and drop HTML form builder. Formio is self-hosted, API driven, provides forms and data management.
url: /form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
aliases: 
    -  /2021/06/25/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']

---
## Build task-specific and customizable forms using a drag and drop HTML form builder. Formio is self-hosted, API driven, provides forms and data management.

{{< figure align=center src="images/formio-1.png" alt="bootstrap form creator">}}  

## **Overview**

In the fast growing business needs, there are a lot of operations that directly belong to the public dealing and engagement. This engagement could be either physical or virtual. Sometimes it is about providing services and sometimes it is about collecting data or feedback. On the other hand, enterprise organizations tend to collect customer’s data about their products and services. Therefore, the amount of data depends on the reach to the relevant audience. Next, data management is another critical task and it demands immense attention. 

However, corporate sectors use online forms to fulfill needs related to data collection. There are many websites that may contain many forms such as contact form, complaint form, customer feedback form, admission form, and more. Now, it becomes a hassle to build, manage these forms and the submission data. Here comes [Form.io][1]. Form.io is an open source bootstrap form creator that provides form building and data management capabilities. In the recent past, we published an article that covered the [Top 5 Open Source Online Form Builders in the year 2020][2]. In this blog post, we will explore this bootstrap form creator along with its setting up process on localhost by covering the following points. 

  * **[What is Form.io?][3]**
  * **[How to set up Form.io on localhost?][4]**
  * **[How does Form.io work?][5]**
  * **[Conclusion][6]**

## What is Form.io? {#what}

Form.io is a free open source form builder. It is self-hosted, multilingual, and multi-tenant software. This **HTML form creator** offers role-based permissions for users and forms. Form.io provides OAuth authentication and lets users log in using popular identity providers such as Google and Facebook. Further, this HTML form builder is based on serverless architecture, and users can generate and embed forms into the other applications by just placing a single line of code. As far as the user interface is concerned, it offers a logical user interface with drag and drop features. There are various HTML elements on one side that users can drag and drop to build the needed form. Users can inject custom JavaScript for enhanced functionality. Moreover, users can modify the look & feel of the form using CSS. There are provisions to control the submission and access of the forms. However, this free HTML form maker is written in JavaScript and all the source code is available at [Github][7].

Form.io provides wide-range of features. Key features are listed below.

  * Email Form Submission
  * Data management 
  * OAuth providers
  * Embeddable Forms 
  * Layout Friendly 

## How to set up Form.io on localhost? {#localhost}

In this section of the **form builder tutorial**, we will see how to set up Form.io on localhost. It is easy to set up as it provides comprehensive documentation regarding deployment and development. 

Before going further, make sure you have installed the following pre-requisites.

  * Git
  * Nodejs
  * MongoDB

Once the above pre-requisites are installed, open the terminal run the following commands:


```
mkdir formio<br>cd formio
```


Now, run the following command to clone the source code of the this application:


```
git clone https://github.com/formio/formio.git
```


Upon a successful clone, run the following commands to install the dependencies:


```
cd formio <br>npm install
```


After that, run the application with the following command:


```
npm start 
```


This command will show the following output with some user prompts:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="form builder tutorial">}}  

You can access the application in the browser at the following address.


```
http://localhost:3001 
```


It will open the login page. You can login with the credentials that you entered during the installation process. 

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="bootstrap form creator">}}  

## How does Form.io work? {#work}

This segment describes the working mechanism of [Form.io][1]. The whole ecosystem of this form designer is based on components and developer-friendly. It is extensible and provides a RESTful interface for third-party apps. So, let’s see how to create forms in this **form builder**. 

After login, you will land on the following page. 

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="drag and drop html form builder">}}  

Now, click on the “New Form” button and create the first form. The following page will be shown. You can see there is a panel on the left-hand side that contains the HTML element for the forms. It contains the four sections such as “Basic Components”, “Special Components” and more. 

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="html form creator">}}  

You can set the form name along with other attributes. Now, if you pick a form element from the left-hand side and drop it into the middle, you will see the following dialog box.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="bootstrap form creator">}}  

You can see that it lets you modify the form theme, validation, and other modifications. Once you build your form, hit the “Create” button and you will land on the generated form.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="drag and drop html form builder">}}  

The generated form comes with various options where you can edit the form and view the submitted data. In the “Form Actions” tab you can set the pre or post form submission hooks such as Email, Webhook and more. Above all, every generated form comes with an API and users can access it by passing the form ID. 

## Conclusion {#Conclusion}

This is the end of this form builder tutorial. Hope you have learned about this bootstrap form creator regarding its features, deployment, and usage. In addition, there are many open source form builders that provide a wide range of features. However, it is highly important to choose the best product that fulfills your business needs. Therefore, in this blog post, we observed that Form.io provides customizations regarding functionality, layout, and style. It lets you generate multi-purpose forms that you can host on your live websites. In fact, you can gather data in a well-organized way in your own database or in any other storage option. 

Finally, [**containerize.com**][8] is in a consistent process of writing articles on further open source topics and products. Therefore, please stay in touch with this [Form][9] category for regular updates.

## Explore

  * **[Form.IO][1]**
  * **[Orbeon][10]**
  * **[OhMyForm][11]**
  * **[Webiny][12]**
  * **[FormTools][13]**
  * **[FormBuilder][14]**
  * **[Alpaca Forms][15]**
  * [**Automate Business Operations Using Free and Open Source Software**][16]
  * [**Top 5 Open Source Online Form Builders in the year 2020**][2]

 [1]: https://products.containerize.com/form/formio/
 [2]: https://blog.containerize.com/2020/10/08/top-5-open-source-online-form-builders-in-year-2020/
 [3]: #what
 [4]: #localhost
 [5]: #work
 [6]: #Conclusion
 [7]: https://github.com/formio/formio
 [8]: https://www.containerize.com/
 [9]: https://products.containerize.com/form/
 [10]: https://products.containerize.com/form/orbeon/
 [11]: https://products.containerize.com/form/ohmyform/
 [12]: https://products.containerize.com/form/webiny/
 [13]: https://products.containerize.com/form/formtools/
 [14]: https://products.containerize.com/form/formbuilder/
 [15]: https://products.containerize.com/form/alpaca/
 [16]: https://blog.containerize.com/2020/08/27/automate-business-operations-using-open-source-software/