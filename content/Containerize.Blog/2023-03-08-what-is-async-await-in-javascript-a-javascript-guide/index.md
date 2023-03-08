---
title: What is Async Await in JavaScript? | A JavaScript Guide
seoTitle: What is Async Await in JavaScript?
description: 'What is Async Await in JavaScript? Async & Await keywords are used to operate asynchronous operations better than traditional Promises in JavaScript.'
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: 'What is Async Await in JavaScript? Async & Await keywords are used to operate asynchronous operations better than traditional Promises in JavaScript.'
url: /what-is-async-await-in-javascript-a-javascript-guide/

    
categories: ['Programming']

---
## ES2017 introduced JavaScript Async/Await which is a wrapper around Promises. Async/Await is used to consume promise-based APIs in the modern and simplest way.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="What is Async Await in JavaScript?">}}
## Overview

We covered [JavaScript Promises][1] in our previous blog post and you must visit if you want to get a clear understanding of the concept behind JavaScript Promises. In this series of [JavaScript tutorials][2], we are here with another JavaScript guide that will demonstrate the modern features of JavaScript Async/Await. This blog post is for those who have prior knowledge of JavaScript Promises. Further, we will try to cover **What is Async/Await in JavaScript**, and when we need to use Async/Await. In addition, we will also cover handling errors with Async/Await. So, give a thorough read to this JavaScript Async/Await tutorial to mark this concept checked. 

We will go through the following sections in this JavaScript Async Await  tutorial:

  * **[What is Async/Await in JavaScript | Async Await Syntax][3]**
  * **[When to use Async/Await?][4]**
  * **[Error handling with Async/Await][5]**

## What is Async/Await in JavaScript | Async Await Syntax {#What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax}

ECMAScript 2017 released new features of JavaScript and Async/Await is one of the most widely used among these features. Async/await is built on top of Promises and is actually a modern way to handle JavaScript Promises. 

Let's see how to use Async/Await keywords in the JavaScript code:

```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```

Well, the async keyword at the start of the function implies that this function will return a promise. So, await keyword is always used inside the body of the async function to pause the execution of the function until the promise resolves. The important thing to note here is that you cannot use await keyword inside the body of a regular function. However, you can use await only with asynchronous functions declared with the async keyword.

## When to use Async/Await? {#When-to-use-AsyncAwait}

So far, you have the answer to what is Async Await in JavaScript. Since this is only a wrapper around the traditional JavaScript promises so you better use this new way to create and handle promises in a more cleaner and readable way. In addition, you can get rid of multiple promise.then() calls using async/await which eventually makes source code more manageable and maintainable. The await keyword encapsulates the .then() statement into a single line.

## Error handling with Async/Await {#Error-handling-with-AsyncAwait}

Error handling is a critical task when it comes to enterprise-level software development. There are multiple ways to catch errors in Async/Await approach. 

Try Catch Async Await JavaScript: Nothing new with this error handling approach. However, you can use a try/catch block inside an async function as shown in the code snippet below:

```
async function getValues() {
  try{
  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Using the try/catch block, you can catch the exceptions inside the body of an async function. 

Whereas, there is another approach to handling errors in which you can append the .catch() block at the end of the function call. Since async/await returns a promise, so you catch the errors in the .catch() block. 
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## Conclusion

We are ending this JavaScript async await tutorial. Hope you have a better understanding of What is Async Await in JavaScript. In addition, we have gone through JavaScript async await syntax that makes source code less complex. This JavaScript feature is being widely used due to its rich usage and performance. In the coming days, we will write further on JavaScript features and concepts so that you can gain a strong command over JS concepts. Moreover, there are some other interesting articles mentioned in the "See Also" section.

## Connect with us

Lastly, [containerize.com][6] offers ongoing JavaScript tutorials on various exciting topics. You can stay in the loop by following us on our social media platforms, including [Facebook][7], [LinkedIn][8], and [Twitter][9].

## Ask a Question

You can let us know about your questions or queries on our [forum][10].

## FAQs

**What is async await in JavaScript with example?**?

You may visit this [link][3] to understand the concept of async await. 

**What is async await vs promise?**

 * Async/await makes source code more clearer and readable as compared to promises in which promise chaining can make source code a mess. 
 * Error handling is pretty similar in both approaches.
 * Debugging is less difficult in Async Await.
 * Promises maintain the states such as pending, resolved, or rejected. Whereas, async/await is either resolved or rejected.
## See Also

  * [What is Promise in JavaScript? | JavaScript Tutorial][1]
  * [What is Serverless Computing? | Serverless Architecture][11]
  * [What is Multitenancy? | Why a Multi-Tenant Approach?][12]
  * [What is Generative AI | Generative Artificial Intelligence][13]
  * [How to Integrate ChatGPT with Google Sheets ][14] 
  * [How to use ChatGPT in VSCode | The VSCode Extension Code GPT][15]
  * [What is OpenAI Chatbot GPT-3 | ChatGPT an AI Revolution][16]
  * [An Introduction to Artificial Intelligence | What is AI?][17]


 [1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
 [2]: https://blog.containerize.com/categories/programming/
 [3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
 [4]: #When-to-use-AsyncAwait
 [5]: #Error-handling-with-AsyncAwait
 [6]: https://www.containerize.com/
 [7]: https://web.facebook.com/containerize
 [8]: https://www.linkedin.com/company/containerize/
 [9]: https://twitter.com/containerize_co
 [10]: https://forum.containerize.com/
 [11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
 [12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
 [13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
