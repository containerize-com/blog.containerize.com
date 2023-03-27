---
title: "Что такое шаблоны дизайна JavaScript? | Руководство для начинающих" 
seoTitle: "JavaScript Design Patterns" 
description: "Это руководство для начинающих JavaScript объясняет шаблоны дизайна JavaScript. Выведите свою разработку на следующий уровень, приняв лучшие шаблоны кода." 
date: 2023-03-24T00:00:00+00:00
author: muhammadmustafa
summary: "Это руководство для начинающих JavaScript объясняет шаблоны дизайна JavaScript. Выведите свою разработку на следующий уровень, приняв лучшие шаблоны кода." 
url: /ru/what-are-javascript-design-patterns-beginners-guide/
tags: ["JavaScript Design Patterns", "learning JavaScript design patterns", "factory pattern JavaScript", "observer pattern JavaScript", "singleton pattern javascript", "module design pattern"]
categories: ['Programming']
---

Разработчики ## демонстрируют позитивные намерения изучать шаблоны проектирования JavaScript. Образки проектирования JS дают вашему исходному коду дизайну, чтобы сделать его эффективным и обслуживаемым.

{{< figure align=center src="images/what-are-javascript-design-patterns-beginners-guide.png" alt="JavaScript Design Patterns">}}


## Обзор
Большое количество программистов JavaScript неясно о **шаблонах проектирования JavaScript** , и этот разрыв должен быть заполнен. В этой серии [JavaScript Tutorials][1] мы пишем этот пост в блоге, который будет охватывать наиболее широко используемые шаблоны дизайна JavaScript, такие как шаблон проектирования модуля, шаблон наблюдателя и многое другое. Кроме того, мы постараемся продемонстрировать использование примеров кода, чтобы в вашем уме не осталось двусмысленности. Эта тема очень важна, если вы занимаетесь карьерой в JavaScript. Поэтому оставайтесь на связи на протяжении всей этой статьи, и к концу этого поста в блоге вы должны иметь сильное понимание моделей проектирования JS.
Следующие моменты должны быть рассмотрены в этом руководстве для начинающих JavaScript:
* **[Что такое шаблоны дизайна JavaScript?][2]** 
* **[шаблон проектирования модуля][3]** 
* **[Factory Pattern Javascript][4]** 
* **[Singleton Pattern Javascript][5]** 
* **[Образец наблюдателя javascript][6]** 

## Что такое шаблоны дизайна JavaScript? {#What-are-JavaScript-design-patterns}

Паттерны проектирования JavaScript - это решения в форме шаблонов, которые обеспечивают эффективные решения общих проблем, которые возникают неоднократно при написании исходного кода. Более простыми словами, шаблоны дизайна представляют собой предварительно определенные стили/заказы для написания обслуживания и управляемого кода Javasciprt.
В небольших организациях большинство разработчиков не обращают внимания на модели проектирования, но это становится критическим предметом, когда вы создаете крупномасштабное бизнес-программное обеспечение. По сути, есть ряд разработчиков, работающих на программное обеспечение на уровне предприятия, которые имеют свой собственный стиль написания кода. Поэтому вы выбираете шаблон проектирования, чтобы предотвратить повторение проблем, создавать многоразовые кодовые блоки и ускорить разработку приложений.

## Модуль дизайна дизайна {#Module-design-pattern}

Это наиболее распространенный и образец дизайна, который выбирают разработчики. Согласно этой шаблоне проектирования, блоки кода приложения помещаются отдельно друг от друга в форме модулей. Этот шаблон проектирования JavaScript обеспечивает изоляцию и инкапсуляцию. Кроме того, вы можете создавать публичные/частные функции и атрибуты, с которыми вы не можете получить доступ из -за пределов модуля. Прежде всего, модули в модульном рисунке всегда возвращают объект.
Вы можете использовать этот шаблон дизайна, если вы создаете богатое бизнес-приложение на уровне предприятия. Таким образом, вы можете создать отдельный модуль для каждой функции, чтобы принести независимость.
Следующий фрагмент кода демонстрирует модульный шаблон проектирования:
```
const student = (function () {
  // Private
  let name = "mustafa";
  let program = "computer science";
  const getStudentName = () => name;
  const getStudentProgram = () => program;

  // Public
  return {
    name,
    program,
    getName: () => getStudentName(),
    getStudentProgram: () => getStudentProgram(),
  };
})();

student.name;
student.program;
student.getStudentProgram();
```

## Заводской шаблон JavaScript {#Factory-pattern-JavaScript}

Согласно этому шаблону проектирования, вы создаете объекты, используя интерфейс, а не вызываете конструктора с **новым** оператором. На самом деле, мы указываем тип объекта, и завод создает экземпляр и отправляет нас обратно для использования. Кроме того, этот шаблон проектирования JavaScript дает полный контроль над созданием объектов. Кроме того, вы можете выбрать этот шаблон дизайна для обработки простых и сложных объектов, а также целесообразно использовать заводской шаблон для развязки.
Давайте напишем фрагмент кода для дальнейшего изучения.
```
// sandwich.js
const Sandwich = function({name }) {
  this.name = name || "";
};
module.exports = Sandwich;
```
```
// burger.js
const Burger = function({name }) {
    this.name = name || "";
};
module.exports = Burger;
```
```
// gadFoodFactory.js
const Sandwich = require("./sandwich");
const Burger = require("./burger");
const food = { Burger, Sandwich };
module.exports = {
    createFood(type, attributes) {
        const GadFoodType = food[type];
        return new GadFoodType(attributes);
    }
};
```
```
// index.js
const gadFoodFactory = require("./gadFoodFactory");
const mySandwich = gadFoodFactory.createFood("Sandwich", {
    name: "Chicken"
});
const myBurger = gadFoodFactory.createFood("Burger", {
    name: "Grilled",
});
console.log(mySandwich);
console.log(myBurger);
```

## Singleton Pattern JavaScript {#Singleton-pattern-JavaScript}

Этот шаблон дизайна очень популярен, который ограничивает экземпляр класса одним объектом. Сервис в рамках JavaScript Framework Angular следует по этому шаблону, где он создает только один экземпляр службы, и этот объект доступен для всех модулей. Более того, весь клиент, подключенный к одному объекту, имеет одни и те же ресурсы и уровни доступа.
Демонстрация **Одиночного шаблона** выглядит следующим образом:
```
let singletonPattern = new (function () {

  let name = "mustafa";

  this.printName = function() {
      console.log(name);
  }
})();

singletonPattern.printName();

// output: mustafa
```

## Образец наблюдателя JavaScript {#Observer-pattern-JavaScript}

Образец наблюдателя весьма полезен в создании масштабируемых бизнес -приложений. Механизм уведомлений участвует в этой модели кода. Всякий раз, когда происходит изменение, это запускает событие, которое уведомляет другие зависимые подписки. Таким образом, этот шаблон транслирует последнее состояние для других объектов в модулях. На самом деле, все дело в автоматической информировании об изменении подписчиков.
Следующие примеры кода следуют шаблону наблюдателя:
```
function ObserverFunc() {
this.observerArray = [];
}

ObserverFunc.prototype.subscribe = function (ele) {
this.observerArray.push(ele);
}

ObserverFunc.prototype.unsubscribe = function (element) {
const elementIndex = this.observerArray.indexOf(element);
if (elementIndex &gt; -1) {
this.observerArray.splice(elementIndex, 1);
}
}

ObserverFunc.prototype.notifyAll = function (element) {
this.observerArray.forEach(function (observerElement) {
observerElement(element);
});
}
```

## Заключение
Это все для **шаблонов дизайна JavaScript** . Мы надеемся, что вам понравилось это **Учебное пособие JavaScript** и выучил концепции моделей дизайна. Мы рассмотрели наиболее часто используемые шаблоны кода, такие как шаблоны проектирования модулей, синглтон, наблюдатель и заводские дизайны. Эта статья даст вам четкую картину с помощью фрагментов кода. Кроме того, есть и другие очень актуальные сообщения в блоге, которые вы можете узнать в разделе «См. Также» ниже.

## Связаться с нами
Наконец, [cantainerize.com][7] находится в постоянном процессе написания сообщений JavaScript по новым темам. Вы можете остаться в курсе, следуя нам на наших социальных сетях, включая [Facebook][8], [LinkedIn][9] и [Twitter][10].

## Задайте вопрос
Вы можете сообщить нам о ваших вопросах или вопросах на нашем [форуме][11].

## FAQS
**Какие самые популярные модели дизайна в JavaScript?**
Паттерн модуля, наблюдатель, завод и синглтон, широко используются в программировании JavaScript. Пожалуйста, перейдите по этому [ссылке][2], чтобы исследовать дальнейшее.

## Смотрите также
 * [Изучите основные концепции JavaScript, чтобы помочь вашей карьере][12]
 * [Введение в искусственный интеллект | Что такое ИИ?][13]
 * [Как интегрировать CHATGPT с Google Sheets][14]
 * [Как использовать CHATGPT в VSCODE | Код расширения VSCODE GPT][15]
 * [Что такое Openai Chatbot GPT-3 | Chatgpt AI Revolution][16]
 * [Интеграция Google Docs с CHATGPT | OpenAI GPT-3][17]
 * [Каковы 5 лучших фреймворков AI с открытым исходным кодом][18]
 * [Что является генеративным AI | Генеративный искусственный интеллект][19]



[1]: https://blog.containerize.com/categories/programming/
[2]: #What-are-JavaScript-design-patterns
[3]: #Module-design-pattern
[4]: #Factory-pattern-JavaScript
[5]: #Singleton-pattern-JavaScript
[6]: #Observer-pattern-JavaScript
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/learn-javascript-basic-concepts-to-help-your-career/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
