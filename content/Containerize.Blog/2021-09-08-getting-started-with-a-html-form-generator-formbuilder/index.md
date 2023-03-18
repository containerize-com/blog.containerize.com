---
title: Getting Started With A HTML Form Generator | FormBuilder
seoTitle: Getting Started With A HTML Form Generator | FormBuilder
description: 'FormBuilder is a free and multilingual HTML form generator with drag & drop user interface. Follow this tutorial to learn how to set it up on localhost.'
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "JavaScript powered open source form editor with multiple configurations, configurable form templates and custom controls. Let's learn how to set up FormBuilder."
url: /getting-started-with-a-html-form-generator-formbuilder/

categories: ['Form']

---
## JavaScript powered open source form editor with multiple configurations, configurable form templates and custom controls. Let’s learn how to set up FormBuilder.

{{< figure align=center src="images/formbuilder.png" alt="html form generator">}}  

## **Overview**

We recently published some articles on topics such as [How To Setup Bootstrap Form Creator Form.io On Localhost][1] and [Top 5 Open Source Online Form Builders in the year 2020][2]. The first blog post is a tutorial article that demonstrates the setting up process and features of a bootstrap form builder [Form.IO][3]. The second article talks about the widely used open source form builders. At the current point of time, two-way interaction is the most important thing between service providers and service consumers. Organizations tend to receive consistent feedback on their services and then they formulate future business strategies. However, forms are the to collect and store information from the customers. Businesses produce a number of forms to collect data about various ongoing operations and there are many types of forms some of them are single pages and some of them are multi-page forms. Some businesses have embedded forms on their online portal or some of them use emails or other sorts of medium to expose their forms for data collection. 

Therefore, there are many open source forms and data management software available with rich form builder capabilities. In this article, we will explore the free HTML form generator **[FormBuilder][4]** by covering the following points.

  * **[What is FormBuilder?][5]**
  * [**How to set up?**][6]
  * [**How to create forms using FormBuilder?**][7]
  * **[Conclusion][8]**

## What is FormBuilder? {#what}

[FormBuilder][4] is an open source form designer that lets users create interactive forms. It is secure, extensible, and comes with self-hosting capabilities. This HTML form generator is multilingual and offers support for multiple languages. There is a user-friendly user interface where users can drag and drop form elements to formulate the required form template. Further, it provides rich controls and configurable form templates. In addition, users can create multiple tabs on the user interface to build multi page forms. Above all, users can tend to this free form builder by developing its plugins. It has all the documentation available regarding development and deployment. It is written in Node.js and all the source code is available on [Github][9]. 

Here are the top highlights of the Form.IO

  * i18n Integrated
  * Multi-Pages Forms
  * Extensible
  * Support For Popular JavaScript Front End Frameworks
  * Drag and Drop UI

## How to set up? {#setup}

This section of the form builder tutorial will show you how to set up FormBuilder on the local machine. 

Before going further, make sure you have installed the following pre-requisites.

  * Node.js >= 10.9.0
  * npm
  * Git

After installing the pre-requisites, run the following command to clone the source code of this application:


```
git clone https://github.com/kevinchappell/formBuilder
```


Next, run the following commands to install the dependencies:


```
cd form-builder<br>npm install 
```


After that, you can start the application by running the following command:


```
npm start
```


Finally, the above command will open the application into the browser at the following address:


```
http://localhost:8080/
```


## How to create forms using FormBuilder? {#how}

In this section, we will explore the features of this HTML form generator and we will learn how can we create forms.

The following user interface will appear once you start the server.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="html form generator">}}  

Moving forward, you can see the menu bar on the right-hand side. It contains the form elements such as Buttons, Checkboxes, text fields, data fields, header, paragraph, and more. However, you can drag these elements and drop in the middle area(droppable) of the screen. On the top left corner, there is an option to enable the Bootstrap version of the app. On the top left corner, there is a dropdown where users can select any available language. 

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="form editor">}}  

Next, we can drag and drop any form element into the droppable area. Moreover, we can edit the configurations of any element as shown in the above image. There is an option to create a copy of the existing element. We can change the placement of the elements with one another. 

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="html form generator">}}  

Once you are done with the form building, you can render the form by pressing the “Render” button placed on the top middle. Further, there are various form options where users can get the HTML generated behind the forms. There are other options too such as Load User Form, Show User Data, Render User Form, and Clear User Form. Along with these features, there are many form actions available such as “getFieldTypes” which returns the registered field types for the form. Similarly, there are many other actions such as show data, get XML, set data, toggle edit, and some more. However, there are many other things that you can check yourself. As it is open source, you can modify it as per your requirements. 

## Conclusion {#Conclusion}

This is the end of the blog post. We hope this tutorial will really help you if you are looking to deploy an open source HTML form generator. This article has covered many aspects of FormBuilder so you can easily make a choice considering your business needs. These free open source form builders are cost-effective and time-saving. These free tools not only provide form-building capabilities but also provide forms and data management. You can configure the forms with third-party web applications. In addition, it removes the hassle of creating different forms for different business applications rather business owners can make any kind of form using these open source form builders. Moreover, there are plugins available for these form editors that developers can modify as per requirements. Therefore, it is high time to automate such repetitive tasks by employing a good free HTML form generator.

Finally, [containerize.com][10] is writing articles on further open source products. Therefore, please stay in touch with the [Forms][11] category for regular news and updates.

## Explore

  * **[Form.IO][3]**
  * **[Orbeon][12]**
  * **[OhMyForm][13]**
  * **[Webiny][14]**
  * **[FormTools][15]**
  * **[FormBuilder][4]**
  * **[Alpaca Forms][16]**
  * [**How To Setup Bootstrap Form Creator Form.io On Localhost**][1]
  * [**Automate Business Operations Using Free and Open Source Software**][17]
  * [**Top 5 Open Source Online Form Builders in the year 2020**][2]

 [1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/

 [2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/

 [3]: https://products.containerize.com/form/formio/
 [4]: https://products.containerize.com/form/formbuilder/
 [5]: #what
 [6]: #setup
 [7]: #how
 [8]: #Conclusion
 [9]: https://github.com/kevinchappell/formBuilder
 [10]: https://www.containerize.com/
 [11]: https://products.containerize.com/healthcare-technologies/
 [12]: https://products.containerize.com/form/orbeon/
 [13]: https://products.containerize.com/form/ohmyform/
 [14]: https://products.containerize.com/form/webiny/
 [15]: https://products.containerize.com/form/formtools/
 [16]: https://products.containerize.com/form/alpaca/
 [17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
