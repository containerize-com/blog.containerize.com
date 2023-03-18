---
title: "Давайте интегрируем CHATGPT в приложение JavaScript | Учебное пособие CATGPT" 
seoTitle: "Интегрировать CHATGPT в приложение JavaScript" 
description: "Просто запустите «NPM I Chatgpt» и начните использовать Openai Chatbot в вашем приложении Node.js. Следуйте этому руководству, чтобы узнать, как интегрировать CHATGPT в приложение JavaScript." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "Просто запустите «NPM I Chatgpt» и начните использовать Openai Chatbot в вашем приложении Node.js. Следуйте этому руководству, чтобы узнать, как интегрировать CHATGPT в приложение JavaScript." 
url: /ru/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## Упросьте свое деловое программное обеспечение, интегрируя вирусный чат-бот на основе GPT-3. Этот учебник CHATGPT демонстрирует шаги интеграции и фрагмент кода.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="Интегрировать CHATGPT в приложение JavaScript">}}


## Обзор
Привет, читатели! Большое спасибо за ваш ошеломляющий ответ на сообщения в блоге, которые мы опубликовали на интеграциях [1] [1]. Мы здесь с еще одним полезным**Учебным пособием CATGPT**Следуя вашим интересам. Кроме того, мы будем в курсе, чтобы опубликовать статьи, полезные для ваших ученых и карьеры. Тем не менее, мы начали [серию] [20] учебных пособий JavaScript, так что это лучшее время для написания руководства, которое демонстрирует, как**интегрировать CHATGPT в JavaScript AQPP**программно. Кроме того, мы напишем фрагмент кода, чтобы сделать эту функциональность на основе GPT-3**вирусного чата**. Для этой цели мы будем включать функциональность CHATGPT в приложении Node.js. Таким образом, базовый уровень предварительного знания node.js является плюсом, проходя через это руководство.
Следующие разделы будут рассмотрены в этом учебном пособии CHATGPT:
***.
***[Интеграция Chatgpt с приложением node.js] [3]**

## pre-requisites-chatgpt javascript warper {#pre-requisesites --- Chatgpt-javascript-wrapper-}
Этот раздел демонстрирует требования, необходимые для включения интеграции CHATGPT в приложении на основе Node.js. Требования просты и просты в установке в вашей системе.
Ниже приведены предварительные регистрации, чтобы практиковать эту интеграцию JavaScript Catgpt:

 * [Nodejs4](>= 18)

 * [NPM5](>=9)
Как только вышеупомянутые предпосылки установлены, следующим шагом является получение ключа API OpenAI. Этот ключ используется для программного обеспечения API -запросов на программную программа. Поэтому, пожалуйста, посетите эту [ссылку] [6], чтобы узнать, как получить ключ API OpenAI, если вы не знаете процедуру.
Пожалуйста, держите свой ключ API в безопасном месте, и это все для фазы требований.

## Интеграция CHATGPT с приложением node.js {#Chatgpt-Integration-with-node.js-application}
Теперь мы все настроены на**Интегрирование CHATGPT в приложение JavaScript программно.**Во -первых, откройте терминал и запустите следующую команду:
```
npm i chatgpt
```
После успешного запуска выполните следующие шаги и фрагмент кода, чтобы сделать запрос на модель GPT-3, чтобы взаимодействовать с программным взаимодействием CHATGPT:
 * Импортировать Чатгптпи.
 * Инициализируйте конструктор с вашим ключом API OpenAI.
 * Призвать метод SendMessage, чтобы отправить сообщение в модель GPT-3 и получить ответ.
 * Отображать ответ.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
Скопируйте и вставьте приведенный выше фрагмент кода в свой основной файл сервера и запустите следующую команду в свой терминал:
```
node index.js
```
* * Примечание**: Пожалуйста, добавьте («Тип»: «Модуль»,) в свой файл package.json в случае получения ошибки «не может использовать оператор импорта за пределами модуля».
Вы можете увидеть выход на изображении ниже:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="Учебное пособие CATGPT">}}

Кроме того, эта обертка JavaScript Catgpt позволяет отслеживать разговоры и отправлять последующие сообщения. Единственное, что вам нужно сделать, это пройти «parentmessageId» в органе запроса, как показано в фрагменте кода ниже:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
Точно так же вы можете исследовать многие другие методы, предлагаемые [здесь] [7]. Эта интеграция Openai Chatbot может дать конкурентное преимущество вашему приложению на уровне предприятия.

## Заключение
Этот момент подводит нас к концу этого**учебника CHATGPT**. Мы надеемся, что вы научились**интегрировать CHATGPT в приложение JavaScript**программно. Кроме того, у вас есть фрагмент рабочего кода, который вы можете проверить на своей локальной машине. Это сообщение в блоге является активом, если вы процветаете, чтобы выучить**интеграцию Chatgpt**в вашем приложении Node.js.

## Связаться с нами
Наконец, [cantainerize.com] [8] непрерывно пишет посты в блоге по разным темам. Более того, вы можете подписаться на нас в наших учетных записях в социальных сетях [Facebook] [9], [LinkedIn] [10] и [Twitter] [11].

## Задайте вопрос
Вы можете сообщить нам о ваших вопросах или вопросах на нашем [форуме] [12].

## FAQS
* * Как интегрировать CHATGPT с JavaScript?**
Пожалуйста, следите за этим CHATGPT [Tutorial] [2], чтобы изучить шаги и фрагмент кода, чтобы интегрировать CHATGPT в приложение JavaScript.

## Смотрите также
  * [Введение в искусственный интеллект | Что такое ИИ?] [13]
  * [Как интегрировать CHATGPT с Google Sheets] [14]
  * [Как использовать CHATGPT в VSCODE | Код расширения VSCODE GPT] [15]
  * [Что такое Openai Chatbot GPT-3 | Chatgpt AI Revolution] [16]
  * [Интеграция Google Docs с CHATGPT | OpenAI GPT-3] [17]
  * [Каковы 5 лучших фреймворков AI с открытым исходным кодом] [18]
  * [Что является генеративным AI | Генеративный искусственный интеллект] [19]
[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
