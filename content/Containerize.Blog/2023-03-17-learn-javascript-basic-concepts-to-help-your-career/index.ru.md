---
title: "Изучите основные концепции JavaScript, чтобы помочь вашей карьере" 
seoTitle: "JavaScript Основные понятия" 
description: "Следуйте этому учебному пособию JavaScript, чтобы выучить основные концепции JavaScript. Прицелы, подъем и закрытие являются очень простыми, но обязательными концепциями в JavaScript." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "Следуйте этому учебному пособию JavaScript, чтобы выучить основные концепции JavaScript. Прицелы, подъем и закрытие являются очень простыми, но обязательными концепциями в JavaScript." 
url: /ru/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## Давайте узнаем некоторые основные основы JavaScript, которые должен знать разработчик. Этот интерпретированный язык программирования широко используется для разработки приложений на уровне предприятия.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="JavaScript Основные понятия">}}


## Обзор
JavaScript-это язык сценариев, используемый для разработки динамических веб-приложений. Мы используем HTML и CSS для создания статических веб -сайтов, тогда как JavaScript используется для добавления интерактивности. В нашем предыдущем сообщении в блоге мы рассмотрели [Объектную модель документа] [1], и теперь мы рассмотрим некоторые другие важные**базовые концепции JavaScript**. Веб -разработчики, как правило, выбирают этот язык сценариев из -за его богатых функций и структур. Кроме того, вы можете сделать разработку на переднем и заднем конце, изучая JavaScript. Тем не менее, вы не можете разработать только веб -приложения, но и мобильные приложения. Этот учебник JavaScript поможет вам, если вы готовитесь к сессии интервью. Тем не менее, это руководство стоит прочитать, чтобы добавить больше в ведро знаний.
Мы рассмотрим следующие моменты в этой статье:
***[Что поднимается в JavaScript] [2]**
***[Области в JavaScript] [3]**
***[Закрытие JavaScript] [4]**

## Что поднимается в javaScript {#what-is in-in-in-javascript}
Феномен принятия функциональной или переменной объявления поверх текущего масштаба известен как подъем. Это очень важная концепция, и большинство разработчиков JavaScript не знают об этом. Тем не менее, важная вещь, которую следует отметить, заключается в том, что только объявления функции/переменных доступают до вершины, а не инициализацию функции/переменной.
Давайте возьмем пример и посмотрим фрагмент кода ниже;
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
В приведенном выше примере кода мы сделали вызов функции перед объявлением функции, но хотя код успешно выполняется, и это связано с поднятием JavaScript. По сути, во время компиляции интерпретатор JavaScript сканирует код, собирает все функции/переменные и помещает их в память, называемую лексическую среду. То же самое происходит с переменными.
```
name = "mustafa";
console.log(name);
var name;

```
Аналогичным образом, инициализация переменной имени была сделана до объявления, и код работает без какой -либо ошибки. Опять же, во время компиляции интерпретатор JS изучил лексическую среду, чтобы найти объявление переменной и, следовательно, выполнило код.
Таким образом, если вы объявите переменные с помощью ключевых слов Let и Const, JavaScript будет поднять их немного по -другому.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
Произошла ошибка в фрагменте кода выше. Причина в том, что инициализация не была сделана при подъеме этой переменной. Короче говоря, все объявления инициализируются с «неопределенным», в то время как переменные, объявленные с «пусть» или «const», не инициализируются при подъеме.

## Scopes в Javascript {#Scopes-In-Javascript}
Объем - одна из основных концепций JavaScript, которые должен знать разработчик. Тем не менее, работа с JavaScript Scopes не простая и немного отличается. Следовательно, в JavaScript существует три типа областей, и они следующие:
* * Уровень блока**: переменные, объявленные с помощью «Let» или «const», содержит область на уровне блока.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
Переменная "A" недоступна вне кудрявых скобок {}, потому что у нее есть область на уровне блока.
* * Уровень функции**: переменные, объявленные внутри функции JavaScript, имеют локальную область.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
Здесь важная вещь, которую следует отметить, это то, что переменные, объявленные с помощью «Let», «const» и «var», имеют область функции внутри корпуса функции.
* * Глобальный уровень**: переменные, объявленные вне функции, становятся глобальными переменными. Независимо от того, объявили ли вы их ключевые слова «пусть», «const» или «var». Кроме того, переменная становится глобальной переменной, если она объявлена ​​без использования какого -либо ключевого слова, как показано в фрагменте кода ниже:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## javascript urlures {#javascript-closures}
Это еще одна важная концепция, которая укрепляет ваши знания JavaScript о областях и инкапсуляции данных. В простейшей форме функция внутри функции известна как закрытие. Вы можете назвать внутреннюю функцию закрытием. Эта внутренняя функция имеет три типа охвата:
 * У него есть своя область на уровне блока.
 * Он имеет доступ к переменным родителя.
 * Переменные в глобальном объеме также доступны внутри закрытия.
 Посмотрим, как создать закрытие:
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
Переменная First_name доступна внутри функции с именем innerfunc, но родительская функция не может иметь доступ к переменной последней_name. Такое поведение позволяет программистам создавать частные переменные в цепочке областей.

## Заключение
Мы заканчиваем это руководство JavaScript здесь и надеемся, что у вас есть лучшее понимание**базовых концепций JavaScript**. Более того, мы также прошли через**закрытия JavaScript, прицелы в JavaScript**и подъем. Есть много других важных концепций, которые являются обязательными для начинающих. Таким образом, эта статья поможет вам, если вы процветаете, чтобы улучшить или обновить концепции JavaScript. Кроме того, вы можете пройти посты в блоге, упомянутые в разделе «См. Также».

## Связаться с нами
Наконец, [cantainerize.com] [5] предлагает текущие учебные пособия JavaScript по различным захватывающим темам. Вы можете остаться в курсе, следуя за нами на наших социальных сетях, включая [Facebook] [6], [LinkedIn] [7] и [Twitter] [8].

## Задайте вопрос
Вы можете сообщить нам о ваших вопросах или запросах на нашем [форуме] [9].

## FAQS
* * Какие важные концепции нужно учиться в JavaScript?**
Пожалуйста, следуйте этому JavaScript Beginner [Guide] [2], чтобы узнать основные концепции JavaScript.

## Смотрите также
  * [Что такое DOM в JavaScript? | Документальная модель объекта] [1]
  * [Что такое обещание в JavaScript? | Учебник JavaScript] [10]
  * [Что такое не серверные вычисления? | Без сервера архитектура] [11]
  * [Что такое многопользовательство? | Почему мультитенантный подход?] [12]
  * [Что является генеративным AI | Генеративный искусственный интеллект] [13]
  * [Чего Async Wait в JavaScript? | Руководство JavaScript] [14]
  * [Как использовать CHATGPT в VSCODE | Код расширения VSCODE GPT] [15]
  * [Что такое Openai Chatbot GPT-3 | Chatgpt AI Revolution] [16]
  * [Введение в искусственный интеллект | Что такое ИИ?] [17]
  * [Чего Async Wait в JavaScript? | Руководство JavaScript] [18]
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
[18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
