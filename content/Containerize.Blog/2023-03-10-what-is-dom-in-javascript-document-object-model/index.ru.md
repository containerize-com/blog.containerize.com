---
title: "Что такое DOM в JavaScript? | Документировать объект модели" 
seoTitle: "Что такое DOM в JavaScript?" 
description: "Что такое DOM в JavaScript? Это руководство продемонстрирует модель объекта документа, свойства DOM, уровни DOM и как получить доступ к элементам DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "Что такое DOM в JavaScript? Это руководство продемонстрирует модель объекта документа, свойства DOM, уровни DOM и как получить доступ к элементам DOM." 
url: /ru/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Представление HTML -документа внутри веб -браузера рассматривается как дерево HTML DOM. Это серия объектов и определяет структуру веб -страницы.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="Что такое DOM в JavaScript??">}}


## Обзор
Добро пожаловать в еще один захватывающий пост в блоге в серии [JavaScript Programming][1]. В этой статье мы собираемся затронуть очень основную, но важную концепцию веб -разработки. Да, мы собираемся охватить объект документа в JavaScript. В прошлом мы опубликовали учебные пособия JavaScript, которые обязательны для начала разработки с использованием языка JavaScript. Поэтому мы предлагаем вам подробно прочитать этот пост в блоге, чтобы вы не пропустили ничего, связанное с этой важной концепцией. Давайте начнем это руководство и узнаем**, что такое DOM в JavaScript**, Dom Properties и как вы можете программно взаимодействовать с ним.
Мы рассмотрим следующие темы в этом руководстве JavaScript:
***[Что такое объект документа (DOM)?][2]**
***[DOM -уровни][3]**
***[Что такое свойства DOM и как получить к ним доступ?][4]**

## Что такое объект документа (DOM)? {#What-is-document-object-model}
Дом означает?**Документ объект модели (DOM)**- это представление веб -страницы внутри веб -браузера. Просто иерархическое представление элементов документа HTML в браузере известно как модель объекта документа. Он образуется в форме дерева, которая фактически генерируется веб -браузером. Он состоит из различных узлов, которые связаны друг с другом, образуя форму дерева. Кроме того, элементы DOM имеют атрибуты и события, прикрепленные к ним.
Фактически, DOM - это интерфейс программирования, который формулирует логическую структуру веб -страницы и диктует способ получить доступ к элементам страницы. По сути, JavaScript не распознает теги HTML, такие как заголовок, H1 и т. Д. Поэтому, как только HTML -документ загружается в веб -браузер, создается DOM, который затем позволяет JavaScript понимать элементы документа.

## Dom Resears {#dom-levels}
Этот раздел продемонстрирует различные уровни DOM. Во -первых, в браузере есть окно -объект, который всегда находится на вершине, а затем есть узел документа. Давайте посмотрим на изображение ниже:

{{< figure align=center src="images/DOM.png" alt="DOM -уровни">}}

Ну, вы можете увидеть элементы DOM на картинке выше. Окно и документ являются объектами браузера верхнего уровня, а затем у нас есть элемент HTML в качестве корня. Двигаясь дальше, у нас есть узлы головы и тела, узлом заголовка принадлежит узел головного узела, а узел тела содержит все узлы, которые виден и видны в веб -браузере. Кроме того, элементы тела содержат атрибуты, которые мы можем увидеть на изображении, таких как якорный тег, содержащий атрибут «href». Точно так же другие узлы DOM содержат различные атрибуты, такие как IMG, Meta и другие.

## Что такое свойства DOM и как получить к ним доступ? {#What-dom-properties и how-occess-them}
До сих пор мы придумали ответ на то, что является DOM в JavaScript и уровнях DOM, и мы также прошли через узлы DOM. В этом разделе мы проведем свойства DOM и посмотрим, как мы можем взаимодействовать с ними. Каждый элемент DOM имеет значение, связанное с ним, такое как тег «p», имеет текстовое свойство, IMG Tag имеет изображение и так далее. Методы JavaScript используются для доступа к значениям узлов. Кроме того, вы можете добавить/удалить слушателей событий в элементы DOM.
Вы можете найти следующие**Dom Properties**:
**innerhtml**: это свойство используется для установки или получения HTML -содержания узла DOM.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**InnerText**: Используйте это свойство DOM для доступа или установить текстовое содержание элемента HTML.
```
let textualContent = document.getElementById("customID").innerText;
```
**ParentElement**: Вы можете использовать это свойство для доступа к родительскому узлу элемента.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**Стиль**: Обновите атрибут стиля элемента.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**Название**: Используйте это свойство, чтобы обновить элемент заголовка DOM.
```
document.getElementById("customID").title= "this is a web page";
```
 Ниже приведены некоторые из методов, которые мы можем использовать для взаимодействия с JavaScript Dom:
**addEventListener ()**: этот метод DOM используется для прикрепления обработчика событий к элементу.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute ()**: этот метод DOM используется для прикрепления обработчика событий к элементу.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById ()**: Метод для получения конкретного элемента с данным «ID».
```
let element = document.getElementById("myID");
```
**QuerySelector ()**: Используйте этот метод, чтобы получить первый дочерний элемент, который сочетается с селектором CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**toString ()**: Вы можете использовать этот метод для преобразования элемента в строку.
Точно так же есть много других методов и свойств, которые вы можете исследовать.

## Заключение
Мы заканчиваем это учебник Javasxcript здесь с надеждой, у вас есть хорошее понимание**, что такое DOM в JavaScript**. Мы также прошли через**уровни DOM, DOM, HTML DOM Tree и свойства DOM**. Этот пост в блоге очень важен для новичков, которые стремятся сильного сцепления с концепциями Javascrit. Кроме того, есть и другие соответствующие статьи, которые вы можете найти в разделе «См. Также».

## Связаться с нами
Наконец, [cantainerize.com][5] предлагает текущие учебные пособия JavaScript по различным захватывающим темам. Вы можете остаться в курсе, следуя за нами на наших социальных сетях, включая [Facebook][6], [LinkedIn][7] и [Twitter][8].

## Задайте вопрос
Вы можете сообщить нам о ваших вопросах или запросах на нашем [форуме][9].

## FAQS
**Что используется в JavaScript?**
Вы можете посетить эту [ссылку][2], чтобы получить подробный ответ на этот вопрос.

## Смотрите также
  * [Что такое обещание в JavaScript? | Учебник JavaScript][10]
  * [Что такое не серверные вычисления? | Без сервера архитектура][11]
  * [Что такое многопользовательство? | Почему мультитенантный подход?][12]
  * [Что является генеративным AI | Генеративный искусственный интеллект][13]
  * [Чего Async Wait в JavaScript? | Руководство JavaScript][14]
  * [Как использовать CHATGPT в VSCODE | Код расширения VSCODE GPT][15]
  * [Что такое Openai Chatbot GPT-3 | Chatgpt AI Revolution][16]
  * [Введение в искусственный интеллект | Что такое ИИ?][17]

  
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
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
