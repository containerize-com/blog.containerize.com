---
title: "Что же ждет асинхрон в JavaScript? | Руководство JavaScript" 
seoTitle: "Что же ждет асинхрон в JavaScript?" 
description: "Что же ждет асинхрон в JavaScript? Async & Await Ключевые слова используются для управления асинхронными операциями лучше, чем традиционные обещания в JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Что же ждет асинхрон в JavaScript? Async & Await Ключевые слова используются для управления асинхронными операциями лучше, чем традиционные обещания в JavaScript." 
url: /ru/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 представил JavaScript async/watiate, которая является оберткой вокруг обещаний. Async/await используется для использования API на основе перспективных, основанных на обещаниях современным и простым способом.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Что же ждет асинхрон в JavaScript??">}}


## Обзор
Мы рассмотрели [JavaScript обещания][1] В нашем предыдущем сообщении в блоге, и вы должны посетить, если хотите получить четкое представление о концепции, стоящей за обещаниями JavaScript. В этой серии [JavaScript Tutorials][2] мы здесь с другим руководством JavaScript, которое продемонстрирует современные функции JavaScript async/ждать. Этот пост в блоге предназначен для тех, кто предварительно знает обещаний JavaScript. Кроме того, мы постараемся охватить  **, что является асинхронным/ждать в JavaScript** , и когда нам нужно использовать Async/ждать. Кроме того, мы также рассмотрим ошибки обработки с помощью Async/ждать. Итак, тщательно прочитайте этот **JavaScript Async/Await Luctile**  , чтобы отметить эту концепцию проверенной.
Мы рассмотрим следующие разделы в этом учебном пособии с javaScript Async:
*  **[Что такое асинхронное/ждать в JavaScript | Асинхронное синтаксис][3]**  
***.
*  **[Обработка ошибок с асинхронным/ожиданием][5]**  

## Что является асинхронным/ждать в JavaScript | Асинхрон ожидает синтаксис {#What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax}

Ecmascript 2017 выпустил новые функции JavaScript, а Async/wait является одним из наиболее широко используемых среди этих функций. Async/await строится на вершине обещаний и на самом деле является современным способом выполнения обещаний JavaScript.
Давайте посмотрим, как использовать Async/Await Ключевые слова в коде JavaScript:
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
Что ж, ключевое слово Async в начале функции подразумевает, что эта функция вернет обещание. Таким образом, ожидается, что ключевое слово всегда используется внутри тела асинхронной функции, чтобы приостановить выполнение функции до тех пор, пока обещание не решится. Здесь важно отметить, что вы не можете использовать ключевое слово ожидания в теле регулярной функции. Тем не менее, вы можете использовать ожидание только с асинхронными функциями, объявленными с помощью Async Keyword.

## Когда использовать Async/ждать? {#When-to-use-AsyncAwait}

До сих пор у вас есть ответ на  **того, что такое асинхронное, ждет в JavaScript**  . Поскольку это всего лишь обертка вокруг традиционных обещаний JavaScript, так что вы лучше используете этот новый способ создания и обработки обещаний более чистым и читаемым способом. Кроме того, вы можете избавиться от множества обещаний. Then () вызовы с использованием Async/await, что в конечном итоге делает исходный код более управляемым и поддерживаемым. Ключевое слово wwait инкапсулирует оператор .Then () в одну строку.

## Обработка ошибок с асинхронным/ждать {#Error-handling-with-AsyncAwait}

Обработка ошибок является критической задачей, когда дело доходит до разработки программного обеспечения на уровне предприятия. Есть несколько способов улавливать ошибки в подходе Async/Await.

{{< figure align=center src="images/async-await.png" alt="Попробуйте поймать Async ждать javaScript">}}

 **Попробуйте поймать Async Wait JavaScript** : ничего нового с этим подходом обработки ошибок. Тем не менее, вы можете использовать блок Try/Catch внутри асинхронной функции, как показано в фрагменте кода ниже:
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
Используя блок Try/Catch, вы можете поймать исключения внутри тела асинхронной функции.
Принимая во внимание, что существует еще один подход к обработке ошибок, в которых вы можете добавить блок .catch () в конце вызова функции. Поскольку Async/await возвращает обещание, вы поймете ошибки в блоке .catch ().
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

## Заключение
Мы заканчиваем этот  **javascript async wwait way await turniory** . Надеюсь, у вас лучшее понимание **того, что такое асинхронное, ждет в JavaScript**  . Кроме того, мы прошли через JavaScript Async Wawit Syntax, который делает исходный код менее сложным. Эта функция JavaScript широко используется из -за его богатого использования и производительности. В ближайшие дни мы будем писать дальше на функции и концепции JavaScript, чтобы вы могли получить сильную команду по концепциям JS. Более того, есть некоторые другие интересные статьи, упомянутые в разделе «См. Также».

## Связаться с нами
Наконец, [cantainerize.com][6] предлагает текущие учебные пособия JavaScript по различным захватывающим темам. Вы можете оставаться в курсе, следуя нам на наших социальных сетях, включая [Facebook][7], [LinkedIn][8] и [Twitter][9].

## Задайте вопрос
Вы можете сообщить нам о ваших вопросах или вопросах на нашем [форуме][10].

## FAQS
 **Чего оживает асинхрон в JavaScript с примером?** 
Вы можете посетить эту [ссылку][3], чтобы понять концепцию Async Wait.
 **Что такое асинхронное ожидание против обещания?** 
 * Async/wait делает исходный код более ясным и читабельным по сравнению с обещаниями, в которых цепочка обещаний может сделать исходный код беспорядком.
 * Обработка ошибок довольно похожа в обоих подходах.
 * Отладка менее сложна в ожидании асинхронности.
 * Обещания поддерживают такие состояния, как ожидание, разрешение или отвергнутое. Принимая во внимание, что Async/await либо разрешен, либо отвергается.

## Смотрите также
  * [Что такое обещание в JavaScript? | Учебник JavaScript][1]
  * [Что такое не серверные вычисления? | Без сервера архитектура][11]
  * [Что такое многопользовательство? | Почему мультитенантный подход?][12]
  * [Что является генеративным AI | Генеративный искусственный интеллект][13]
  * [Как интегрировать CHATGPT с Google Sheets][14]
  * [Как использовать CHATGPT в VSCODE | Код расширения VSCODE GPT][15]
  * [Что такое Openai Chatbot GPT-3 | Chatgpt AI Revolution][16]
  * [Введение в искусственный интеллект | Что такое ИИ?][17]



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
