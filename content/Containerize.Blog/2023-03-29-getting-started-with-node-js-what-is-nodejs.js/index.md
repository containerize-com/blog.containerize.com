---
title: Getting Started With Node.js | What is Node.js
seoTitle: What is Node.js
description: 'This guide will give you an answer to What is Node.js. Follow this getting started guide to get a clear understanding of this JavaScripr run-time environment.'
date: 2023-03-29T00:00:00+00:00
author: muhammadmustafa
summary: 'This guide will give you an answer to What is Node.js. Follow this getting started guide to get a clear understanding of this JavaScripr run-time environment.'
url: /getting-started-with-node-js-what-is-node-js/
tags: ["What is Node.js", "Getting Started With Node.js", "how Node.js works", "what is Event Loop", "what is Libuv", "Node.js architecture"]
    
categories: ['Programming']

---
## An open-source JavaScript runtime environment that is cross-platform and asynchronous. Build scalable and real-time networking applications using Node.js.

{{< figure align=center src="images/getting-started-with-node-js-what-is-node-js.png" alt="What is Node.js">}}
## Overview

[JavaScript][1] has become one of the most popular languages around the globe. There are many reasons behind its popularity but the main point of attraction is its ability to work on the front and back end. A huge number of developers are keen to opt for JavaScript because they can implement business logic on the server side and client side as well. The other reason behind its popularity is its rich stack of libraries and frameworks. However, JavaScript language has a wide range of frameworks for the back-end and front-end. So, developers feel comfortable to chose this stack to pursue their career goals. In addition, there is massive community support available for the JavaScript frameworks. Therefore, in this article, this getting started tutorial is for those who want to know **what is Node.js** and we will cover some other relevant topics.

The following sections are planned for this Node.js tutorial:

  * **[What is Node.js?][2]**
  * **[Node.js Architecture | What is Event Loop?][3]**
  * **[Applications of Node.js][4]**

## What is Node.js? {#What-is-Node.js}

Node.js is an [open-source][5] JavaScript runtime environment that executes JavaScript code on the server side outside of the browser. It is written in C/C++ and runs on the V8 JavaScript engine that converts JavaScript source code into machine code. Therefore, the involvement of the V8 engine makes Node.js work at a very high speed. Further, Node.js is asynchronous in nature and processes jobs in a non-blocking fashion. Hence, it follows event-driven programming and is a go-to software architecture for building I/O-intensive real-time applications.

Another important component of this runtime environment is Libuv. What is Libuv? Libuv is a library written in C that helps Node.js in executing tasks asynchronously. However, we will explore Node.js architecture in the next section where we will learn a little more about Libuv.  

## Node.js Architecture | What is Event Loop? {#Node.js-Architecture-What-is-Event-Loop}

Again, Libuv is an integral part of Node.js architecture as it facilitates this runtime environment to handle operations asynchronously. So, there are the following three core components offered by Libuv:

 * Event Queue
 * Single Threaded Event Loop 
 * Thread Pool 

The following picture demonstrates the complete lifecycle of handling user requests:

{{< figure align=center src="images/event-loop.png" alt="what is event loop?">}}

Let's enlist the steps that are being done to entertain a user request:

 * The client makes a request to the Node.js server.
 * Node.js server places the incoming request into the Event Queue.
 * There is an Event Loop consistently checking the Event Queue whether it has any user’s request or not.
 * If there is any request that does not require I/O operations such as reading file system or Database, Event Loops picks it up, process it, generates a response, and sends it back to the user.
 * In case of a request that requires I/O operation, Event Loop picks up a thread from the worker thread pool and assigns that request to this thread. Now, this thread processes the request, generates a response, and sends it back to Event Loop and Event Loop sends the response to the client.

That is the Node.js architecture and that’s how it handles multiple user requests asynchronously.

## Applications of Node.js {#Applications-of-Nodejs}

So far, we know what is Node.js and we have also seen Node.js architecture. Now, let's see in which scenarios we should opt for this event-driven software infrastructure.

**Building Single Page Applications(SPAs):** Node.js is the top choice when it comes to developing a single page application. Since there are concurrent requests on the initial load of SPA so non-blocking nature plays a vital role to load the site robustly and smoothly.

**Real-time applications:** If you are building chat apps or applications that involved intensive I/O operations, Node.js is the best option to build scalable and extensible software that performs real-time tasks. It includes payment processing apps, data streaming and networking apps, and the internet of things.

**REST APIs:** This JavaScript runtime environment is not only used to develop web servers but also used to develop RESTful APIs. At the current point in time, there is a huge number of APIs that developers have developed using this software infrastructure.

Likewise, there are many other applications that you may explore yourself. 

## Conclusion

This brings us to the end of this JavaScript tutorial. We have explored **what is Node.js** and its working mechanism. In addition, there is a demonstration of Event Loop which is also being covered. This guide will help you if you are keen to learn this open-source JavaScript runtime environment.

## Connect with us

Finally, [containerize.com][6] is in a consistent process of writing JavaScript posts on new topics. You can stay in the loop by following us on our social media platforms, including [Facebook][7], [LinkedIn][8], and [Twitter][9].

## Ask a Question

You can let us know about your questions or queries on our [forum][10].

## FAQs

**What is NodeJS in simple terms?**

Please go through this [link][2] to get a detailed answer.

## See Also

 * [Learn JavaScript Basic Concepts to Help Your Career][11]
 * [What are JavaScript Design Patterns? | Beginners Guide][12]
 * [Free & Open Source Popular JavaScript Frameworks][13]
 * [What is DOM in JavaScript? | Document Object Model][14]


 [1]: https://blog.containerize.com/categories/programming/
 [2]: #What-is-Node.js
 [3]: #Node.js-Architecture-What-is-Event-Loop
 [4]: #Applications-of-Nodejs
 [5]: https://products.containerize.com/
 [6]: https://www.containerize.com/
 [7]: https://web.facebook.com/containerize
 [8]: https://www.linkedin.com/company/containerize/
 [9]: https://twitter.com/containerize_co
 [10]: https://forum.containerize.com/
 [11]: https://blog.containerize.com/learn-javascript-basic-concepts-to-help-your-career/
 [12]: https://blog.containerize.com/what-are-javascript-design-patterns-beginners-guide/
 [13]: https://blog.containerize.com/free-open-source-popular-javascript-frameworks/
 [14]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/