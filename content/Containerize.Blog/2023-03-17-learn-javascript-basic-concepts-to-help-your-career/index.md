---
title: Learn JavaScript Basic Concepts to Help Your Career
seoTitle: JavaScript Basic Concepts 
description: 'Follow this JavaScript tutorial to learn JavaScript basic concepts. Scopes, Hoisting, and Closures are very basic but mandatory concepts in JavaScript.'
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: 'Follow this JavaScript tutorial to learn JavaScript basic concepts. Scopes, Hoisting, and Closures are very basic but mandatory concepts in JavaScript.'
url: /learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
    
categories: ['Programming']

---
## Let's learn some core JavaScript fundamentals that a developer must know. This interpreted programming language is widely used to develop enterprise-level apps.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="JavaScript Basic Concepts">}}
## Overview

JavaScript is a scripting language used to develop dynamic web-based applications. We use HTML and CSS to build static websites whereas JavaScript is used to add interactivity. In our previous blog post, we covered [Document Object Model][1] and now we will cover some other important **JavaScript basic concepts**. Web developers tend to opt for this scripting language due to its rich features and frameworks. In addition, you can do development on the front end and back end by learning JavaScript. However, you cannot only develop web apps but also mobile apps. This JavaScript tutorial will help you if you are preparing yourself for an interview session. Nevertheless, this guide is worth reading to add more to your knowledge bucket.

We will cover the following points in this article:

  * **[What is hoisting in JavaScript][2]**
  * **[Scopes in JavaScript][3]**
  * **[JavaScript Closures][4]**

## What is hoisting in JavaScript {#What-is-hoisting-in-JavaScript}

The phenomenon of taking function or variable declaration on top of the current scope is known as hoisting. This is a very critical concept and most JavaScript developers are not aware of it. However, an important thing to note here is that only function/variable declarations are taken to the top, not the function/variable initialization. 

Let's take an example and see the code snippet below;

```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
In the code example above, we made the function call before the function declaration but even though the code executes successfully and that is due to JavaScript hoisting. Basically, during compile time, the JavaScript interpreter scans the code, gathers all functions/variables, and put them into memory called Lexical Environment. The same thing happens with the variables.

```
name = "mustafa";
console.log(name);
var name;

```

Similarly, name variable initialization has been done prior to its declaration, and the code works without any error. Again, during the compile time, the JS interpreter looked into Lexical Environment to find the variable declaration and hence executed the code. 

So, if you declare variables with let and const keywords, JavaScript will hoist them a little differently. 

```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
The error in the code snippet above occurred. The reason is that the initialization was not done while hoisting this variable. Long story short, all declarations are initialized with "undefined" while variables declared with "let" or "const" is not initialized in hoisting. 

## Scopes in JavaScript {#Scopes-in-JavaScript}

The scope is one of the JavaScript basic concepts that a developer must know. However, working with JavaScript scopes is not straightforward and is a little different. Therefore, there are three types of scopes in JavaScript and these are as follows:

**Block-level**: Variables declared with "let" or "const" contains the block-level scope. 
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```

The variable "a" is not accessible outside the curly braces {} because it has block-level scope.

**Function-level**: The variables declared inside the JavaScript function have the local scope.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```

An important thing to note here is that variables declared with "let" "const" and "var" have the function scope inside the function body. 

**Global-level**: Variables declared outside the function becomes global variables. No matter whether you have declared them using "let", "const" or "var" keywords. Further, a variable becomes a global variable if declared without using any keyword as shown in the code snippet below:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```
## JavaScript Closures {#JavaScript-Closures}

This is another important concept that strengthens your JavaScript knowledge about scopes and data encapsulation. In the simplest form, a function inside a function is known as a closure. You may call the inner function a closure. This inner function has three types of scope:

 * It has its own block-level scope.
 * It has access to parent's variables.
 * Variables in the global scope are also accessible inside the closure.

 Let's see how to create a closure:
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```

The variable first_name is accessible inside the function named innerFunc but the parent function cannot have access to the last_name variable. This behavior lets programmers create private variables in the scope chain. 
## Conclusion

We are ending this JavaScript guide here and hope you have a better understanding of **JavaScript basic concepts**. Moreover, we have also gone through **JavaScript closures, Scopes in JavaScript**, and hoisting. There are many other important concepts that are mandatory for beginners. So, this article will help you if you are thriving to improve or refresh your JavaScript concepts. In addition, you may go through the blog posts mentioned in the "See Also" section.

## Connect with us

Finally, [containerize.com][5] offers ongoing JavaScript tutorials on various exciting topics. You can stay in the loop by following us on our social media platforms, including [Facebook][6], [LinkedIn][7], and [Twitter][8].

## Ask a Question

You can let us know about your questions or queries on our [forum][9].

## FAQs

**What are the important concepts to learn in JavaScript?**

Please follow this JavaScript beginner's [guide][2] to know JavaScript basic concepts. 

## See Also

  * [What is DOM in JavaScript? | Document Object Model][1]
  * [What is Promise in JavaScript? | JavaScript Tutorial][10]
  * [What is Serverless Computing? | Serverless Architecture][11]
  * [What is Multitenancy? | Why a Multi-Tenant Approach?][12]
  * [What is Generative AI | Generative Artificial Intelligence][13]
  * [What is Async Await in JavaScript? | A JavaScript Guide][14] 
  * [How to use ChatGPT in VSCode | The VSCode Extension Code GPT][15]
  * [What is OpenAI Chatbot GPT-3 | ChatGPT an AI Revolution][16]
  * [An Introduction to Artificial Intelligence | What is AI?][17]
  * [What is Async Await in JavaScript? | A JavaScript Guide][18]


 [1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
 [2]: #What-is-hoisting-in-JavaScript
 [3]: #Scopes-in-JavaScript
 [4]: #JavaScript-Closures
 [5]: https://www.containerize.com/
 [6]: https://web.facebook.com/containerize
 [7]: https://www.linkedin.com/company/containerize/
 [8]: https://twitter.com/containerize_co
 [9]: https://forum.containerize.com/
 [10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
 [11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
 [12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
 [13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
 [15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/

