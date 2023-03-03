---
title: What is Promise in JavaScript? | JavaScript Tutorial
seoTitle: What is Promise in JavaScript?
description: 'What is Promise in JavaScript? A promise is a block of code that gives the end result of an asynchronous operation such as pending, completed or rejected.'
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: 'What is Promise in JavaScript? A promise is a block of code that gives the end result of an asynchronous operation such as completed or rejected.'
url: /what-is-promise-in-javascript-javascript-tutorial/

    
categories: ['Programming']

---
## Are you struggling to learn the concept of JavaScript promises? This article will explain how to create a promise, why we use promise in JavaScript and more.  

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}
## Overview

We hope you have a better understanding of [JavaScript Data Types][1]. Now, this is another blog post in the [programming][2] category. In this JavaScript tutorial, we will go through **What is Promise in JavaScript**, and along with that, we will also see what are asynchronous operations, the usage of promises, and how to create promises in JavaScript. First, an asynchronous process/operation is one that executes independently with respect to other processes and does not create any blockage. Therefore, you need to handle asynchronous operations otherwise it may create abnormalities in your JavaScript code. So, we will explore how can we handle asynchronous operations using promises. 

We will cover the following points in this JavaScript tutorial:

  * **[What is promise in JavaScript? Promises Explained][3]**
  * **[Why we use promise in JavaScript?][4]**
  * **[How promise works in JavaScript?][5]**
  * **[How to create a promise?][6]**

## What is promise in JavaScript? Promises Explained {#What-is-promise-in-JavaScript-Promises-Explained}

A promise is an object that represents a value of an async operation weather it is resolved, rejected or is in pending state. In more simple words, promises are used to return a value that is yet to be produced by an asynchronous block of code. In fact, there are three **states of promise** and it can be in any of the following states:

**Pending**: Promise is in a pending state which means it’s in starting phase and is currently in execution.

**Fulfilled**: Promise is resolved and value has been returned.

**Rejected**: This is the state that is caused by any error which means the promise has been rejected.

An important thing to consider here is that the value/state returned by the promise is immutable and cannot be changed which means promises make sure that there is no unusual behavior.

## Why we use promise in JavaScript? {#Why-we-use-promise-in-JavaScript}

If you are not aware of **callback hell** then let me share what it is. First, a callback is a function inside another function. Basically, a callback function is passed as a second argument in a function that executes upon receiving results. So, in many scenarios, you need to nest a callback function and as nesting increases, it becomes near to impossible to handle. Hence, we call this long nesting of callback functions **callback hell**.

So, a promise is a way to avoid a callback hell situation. The usage of promises gives better readability and improved error handling. Further, you can better handle asynchronous operations by retrieving the returned value and passing that value to the next function in the chain.

## How promise works in JavaScript? {#How-promise-works-in-JavaScript}

Now, let’s understand the working mechanism behind promises. Please have a look at the diagram mentioned below.

{{< figure align=center src="images/what-is-a-promise.png" alt="How promise works in JavaScript?" >}}

As per the workflow mentioned above, the implementation details are quite clear. Promise starts execution upon its creation and is in the pending state waiting for the response. There are two options either there will be data or there will be an error upon the end of processing. Upon receiving data, it goes into .then() block and it goes into the .catch() block in case of an error.

## How to create a promise? {#How-to-create-a-promise}

So far, we have covered the basic concept of promise. Now, we are going to explore how can we create a promise in JavaScript. Let's use the following Promise constructor to create a promise.

```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise constructor takes a function as an argument that again takes two arguments first, resolves and the other reject. It invokes the resolve() method in case of success and it goes into the reject() block in case of error or rejection.

Let's go a little deep and explore the promise creation a little further.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
In the code snippet above, you can further make API calls in the resolve() block. 

Now, let's see the execution pattern of a JavaScript promise. 

```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
Following is the output of the above code snippet:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
So, the code inside the Promise body works synchronously so the "synchronous execution" is printed. Next, .then() block works asynchronously and waits until the result has been generated but the program execution does not stop that's why "Hello Word" is printed and promise execution has been deferred. After that, .then() block executes and returns the values that it promised. That is the story of JavaScript promises.
## Conclusion

This is the end of this **JavaScript tutorial**. Hope you have a good idea of JavaScript promises. We have covered **what is promise in JavaScript**, why we use promise in JavaScript, **how promise work in JavaScript**, and how to create a promise. Further, we will cover this topic more regarding its advanced usage and provisions. Therefore, go through this article in case you are preparing yourself for an interview session. 

## Connect with us

Finally, [containerize.com][7] offers ongoing JavaScript tutorials on various exciting topics. You can stay in the loop by following us on our social media platforms, including [Facebook][8], [LinkedIn][9], and [Twitter][10].

## Ask a Question

You can let us know about your questions or queries on our [forum][11].

## FAQs

**What are promises in JavaScript with example?**

Please follow this [link][3] to know what are promises in JavaScript. 

## See Also

  * [What are JavaScript Data Types? | A Beginner’s Guide][1]
  * [Kubernetes Multi-Tenancy & Container-Based Architecture][12]
  * [What is Serverless Computing? | Serverless Architecture][13]
  * [What is Multitenancy? | Why a Multi-Tenant Approach?][14]
  * [What are JavaScript Data Types? | A Beginner’s Guide][15]


 [1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
 [2]: https://blog.containerize.com/categories/programming/
 [3]: #What-is-promise-in-JavaScript-Promises-Explained
 [4]: #Why-we-use-promise-in-JavaScript
 [5]: #How-promise-works-in-JavaScript
 [6]: #How-to-create-a-promise
 [7]: https://www.containerize.com/
 [8]: https://web.facebook.com/containerize
 [9]: https://www.linkedin.com/company/containerize/
 [10]: https://twitter.com/containerize_co
 [11]: https://forum.containerize.com/
 [12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
 [13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
 [14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
 [15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/