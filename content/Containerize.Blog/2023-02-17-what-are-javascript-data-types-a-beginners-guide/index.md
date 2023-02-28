---
title: What are JavaScript Data Types? | A Beginner’s Guide
seoTitle: What are JavaScript Data Types? | A Beginner’s Guide
description: "What are JavaScript Data Types? Follow this beginner's guide to learn 7 data types used in JavaScript Number, String, Boolean, Null, undefined, and more."
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: The popularity of JavaScript is unstoppable due to its adaptability. Follow this JavaScript beginner’s guide and start nurturing your expertise in JS stack.
url: /programming/what-are-javascript-data-types-a-beginners-guide/

categories: ['Programming']

---
## The popularity of JavaScript is unstoppable due to its adaptability. Follow this JavaScript beginner’s guide and start nurturing your expertise in JS stack.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? | A Beginner's Guide">}}  

## Overview

No matter whether you are a mediocre level or experienced developer, you will get the solutions to your problems coming during the development jobs. [containerize.com][1] has started writing tutorial blog posts in the programming category and we are starting with a **JavaScript beginner’s guide**. Since we are starting off so this article is about JavaScript data types. Let’s explore **what are JavaScript data types** and see examples of how can you use them in the source code efficiently. Therefore, go through this beginner’s guide thoroughly so you can have a good understanding of **JavaScript data types**.

We are covering the following point:

  * [What is a data type?][2]
  * [What are JavaScript Data Types?][3]

## Data Types Explained | What is a data type? {#What-is-a-data-type}

A data type is all about telling the compiler how to interpret or compile the data. The usage of data types is critical and must be used wisely. In simple words, it is about the format of the data such as Number, String, Boolean and more. However, there are two categories of data types Primitive data types and Non-Primitive data types. There are eight Primitive data types that we will go through in the next section. 

## What are JavaScript Data Types? {#What-are-JavaScript-Data-Types}

In fact, JavaScript is a loosely typed language which means you do not have to define the variable type explicitly. You can assign any value to a variable and that variable will store that value such as String, BigInt, Boolean, or more.

{{< figure align=center src="images/web-development.png" alt="JavaScript beginner's guide">}}  

#### Primitive Data Types

Primitive data types are those which are immutable and cannot be changed after the creation and initialization. However, you can re-assign a new value but cannot mutate the existing value. 

For example: 


```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```


In the example above, String is a primitive data type and the old value is being replaced by the new value but the change in the existing value is not being reflected. So, we can see it is still “my name is changed” not “My name is changed”;

#### Non-Primitive Data Types

Non-Primitive data types are mutable, in simple words opposite of primitive data types. 

For example: 


```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```


In addition, primitive data types are compared by value, and non-primitive data types are always compared by reference. 

For example:


```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```


Now, let’s go through the data types one by one. There are 6 primitive data types and 1 non-primitive data type. 

**Primitive Data Types include:**

  * **String**: This data type represents textual data which consists of a sequence of characters surrounded by quotes.
  * **Number**: It represents decimal/non-decimal data, particularly integer or float.
  * **Boolean**: Representation of logical values true or false.
  * **Symbol**: Symbol is used to hold unique values.
  * **Undefined**: A variable without any value or an uninitialized variable.
  * **Null**: The absence of any value is considered Null.

**Non-Primitive Data Type includes:**

**Object**: It is used to store the collection of data consisting of key-value pairs. 

## Conclusion

This is the end of this **JavaScript beginner’s guide**. We have gone through **what are JavaScript Data Types**? In addition, we have explored what is a Data Type in a nutshell. You should have a better understanding of Non-Primitive and **Primitive Data Types** in JavaScript. This blog post will really help you if you are looking to do preparation for a job interview. 

Finally, [containerize.com][1] is continuously writing blog posts on further open-source products and topics. Moreover, you can follow us on our social media accounts [Facebook][4], [LinkedIn][5], and [Twitter][6].

## Ask a Question

You can let us know about your questions or queries on our [forum][7].

## FAQs

**What are the 8 JavaScript data types?**

Please visit this [link][3] to know the 8 JavaScript Data Types.

## See Also

  * [Free & Open Source Popular JavaScript Frameworks][8]
  * [Automate Business Operations Using Free and Open Source Software][9]
  * [Top 10 Open Source Technologies To Learn In 2022][10]

 [1]: https://www.containerize.com/
 [2]: #What-is-a-data-type
 [3]: #What-are-JavaScript-Data-Types
 [4]: https://web.facebook.com/containerize
 [5]: https://www.linkedin.com/company/containerize/
 [6]: https://twitter.com/containerize_co
 [7]: https://forum.containerize.com/
 [8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
 [9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/

 [10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/