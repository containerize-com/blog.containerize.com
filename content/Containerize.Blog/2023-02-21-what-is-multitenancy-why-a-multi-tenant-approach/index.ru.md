---
title: "Что такое многопользовательство? | Почему мультитенантный подход?" 
seoTitle: "Что такое многопользовательство? | Почему мультитенантный подход?" 
description: "Что такое многопользовательство? Следуйте этому сообщению в блоге, чтобы узнать фактическую концепцию, лежащую в основе многопользовательской, и начните создавать масштабируемые мультитенантные приложения." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "Разработайте архитектуру мультитенантной приложения и эффективно выполните требования вашего пользователя. Давайте рассмотрим, как многопользование позволяет создавать масштабируемое программное обеспечение." 
url: /ru/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## Разработайте мультитенантную архитектуру приложений и эффективно выполните требования вашего пользователя. Давайте рассмотрим, как многопользование позволяет вам создавать масштабируемое программное обеспечение.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## Обзор
Добро пожаловать в другой пост в блоге в категории [программирования][1]. Мы собираемся обсудить архитектуру мультитентной приложения. Фактически, [cantainerize.com][2] имеет широкий спектр мультитенантных приложений в своем стеке продуктов с открытым исходным кодом. Мультитенантные приложения с открытым исходным кодом включают [form.io][3], [botpress][4] и многое другое. Кроме того, существует полная [документация][5], доступная относительно архитектуры, развертывания, разработки и использования этих программных программ с открытым исходным кодом. Причина написания этой статьи заключается в том, чтобы дать представление о концепции, лежащей в основе разработки программного обеспечения. Итак, давайте узнаем**что такое многопользовательство?
В этом посте будут обсуждаться следующие моменты:
  * [Что такое многопользовательство? Мультитенант против одиночного члена][6]
  * [Типы мультитенантной архитектуры приложений][7]
  * [Бизнес-преимущества мультитенантного приложения][8]
  * [Недостатки в мультиценнении][9]

## Что такое многопользовательство? Многопользовательский против однородового {#What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant}

Многопользовательство относится к одному экземпляру сервера, обслуживающему несколько фронтальных, особенно известных арендаторов. Всякий раз, когда вы сталкиваетесь с мультитенантным программным обеспечением, просто говорите вашему мозгу, что в этом программном обеспечении используется один экземпляр общего сервера, а несколько арендаторов (клиенты) подключены к этому экземпляру с различными брендами.
Например, программное обеспечение, созданное для университета, обслуживает разные отделы, имеющие различные фронтальные брендинги и данные программы. По сути, существует один экземпляр, который работает и обслуживает всех арендаторов. Кроме того, существует разделение данных и конфиденциальность данных среди всех арендаторов. Более того, каждый арендатор имеет свою собственную бизнес -логику и получает свои данные и хранит свои данные в одном, но частном/изолированном месте.

{{< figure align=center src="images/multi-tenant-1.png" alt="Многосторонняя архитектура">}}

Теперь давайте кратко рассмотрим архитектуру односменных. В архитектуре с одной страной есть один экземпляр сервера на арендатора. Опять же, давайте возьмем пример университетского программного обеспечения. Подход с однородами относится к одному экземпляру сервера на отдел, а количество экземпляров зависит от количества отделов (арендаторов).

{{< figure align=center src="images/single-tenant-2.png" alt="Одно-арендационная архитектура">}}


## Типы архитектуры мультитенантной приложений {#Types-of-Multi-Tenant-Application-Architecture}

До сих пор у вас есть понимание многопользователя, и теперь мы пройдем через его различные типы.
 **Одна база данных-один экземпляр приложения** : Этот подход довольно популярен и широко используется для создания мультитенантных приложений. Согласно этому подходу, есть один экземпляр приложения, работающий с одной базой данных. Кроме того, существует общая схема, и данные арендатора хранятся в одном месте против их уникального идентификатора.
 **Несколько баз данных-один экземпляр приложения:**  В этой мультитенантной архитектуре приложения только один экземпляр приложения работает с несколькими базами данных. У каждого арендатора есть своя схема базы данных, где вся информация сохраняется на каждого арендатора отдельно.
 **Несколько базовых данных - несколько экземпляров приложений** : Третий подход относится к запуску нескольких экземпляров сервера вместе с несколькими базами данных. Нет ничего общего, и каждый арендатор имеет полную изоляцию, и среди арендаторов нет зависимости.

## Бизнес-преимущества мультитенантного приложения {#Business-Benefits-of-Multi-Tenant-App}

В этом разделе мы получим некоторые выдающиеся преимущества от выбора многопользования. Хотя мы можем долго обсуждать льготы, но давайте посмотрим на следующие моменты:
 **Масштабируемость** : легко масштабировать мультитенантную архитектуру. Вы можете масштабировать горизонтально или вертикально независимо от выбранного вами типа.
 **рентабельный** : Выбор многопользовательства экономит ваши эксплуатационные расходы. Существуют общие ресурсы, поэтому всегда экономически эффективно масштабировать ресурсы.
 **Эффективность и гибкость** : В многопользовательской среде вы достигаете эффективности в разработке и развертывании. Например, вы можете запустить сценарий на общей схеме базы данных, чтобы обновить всех арендаторов.
 **Лучшее управление ресурсами** : добавление и удаление ресурсов просты. Кроме того, эта архитектура предлагает улучшенную и хорошо управляемую инфраструктуру. Более того, каждый арендатор является частным и безопасным и имеет доступ к общей/не общепринятой базе данных.

## Недостатки в многоцелевом {#Drawbacks-in-Multi-Tenancy}

Цель этого поста в блоге-дать справедливый смысл**мультитенантной архитектуры.
 **Сложный механизм аутентификации** : Из -за общего характера распределения ресурсов в многопользовательстве существуют строгие протоколы для точек доступа к данным.
 **Разбитие сервера:**  Это основной момент, который следует учитывать при выборе архитектуры мультитенантной приложения. Все арендаторы становятся нефункциональными, когда сервер не работает по любой причине.
 **Риск конфиденциальности** : В мультитенантной архитектуре существует высокий риск нарушения безопасности. Фактически, данные всех арендаторов хранятся в общей базе данных, поэтому любое стороннее вторжение может привести к повреждению данных или краже.

## Заключение
Мы заканчиваем этот пост здесь. Есть ли в этой статье ответ на ваши вопросы, такие как  **Что такое множество** ? Кроме того, мы также изучили **мультитенант против однородового**  инфраструктуры. Кроме того, это руководство поможет вам при выборе архитектуры мультитенантной приложений или одного арендатора. Прежде всего, многопользовательство является первым выбором, если вы строите SaaS. Есть и другие интересные сообщения в блоге, которые вы можете найти в разделе «См. Также», которые дадут вам последнюю информацию о мире технологий.
Наконец, [cantainerize.com][2] постоянно пишет посты в блоге на дополнительные продукты и темы с открытым исходным кодом. Более того, вы можете подписаться на нас в наших учетных записях в социальных сетях [Facebook][10], [LinkedIn][11] и [Twitter][12].

## Задайте вопрос
Вы можете сообщить нам о ваших вопросах или вопросах на нашем [форуме][13].

## FAQS
 **Что с примером мультитенант?** 
Пожалуйста, посетите эту [ссылку][6], чтобы узнать, что такое многопользовательство. Есть подробности вместе с примерами.
 **Что означает мультитенантная архитектура?** 
Архитектура мультитенантной приложения**означает один экземпляр сервера обслуживает несколько арендаторов (клиентов). Пожалуйста, перейдите к этой [ссылке][7] для получения более подробной информации.

## Смотрите также
  * [Что является генеративным AI | Генеративный искусственный интеллект][14]
  * [Как интегрировать CHATGPT с Google Sheets][15]
  * [Как использовать CHATGPT в VSCODE | Код расширения VSCODE GPT][16]
  * [Что такое Openai Chatbot GPT-3 | Catgpt AI Revolution][17]
  * [Введение в искусственный интеллект | Что такое ИИ?][18]



 [1]: https://blog.containerize.com/category/programming/
 [2]: https://www.containerize.com/
 [3]: https://products.containerize.com/form/formio/
 [4]: https://products.containerize.com/live-chat/botpress/
 [5]: https://products.containerize.com/
 [6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
 [7]: #Types-of-Multi-Tenant-Application-Architecture
 [8]: #Business-Benefits-of-Multi-Tenant-App
 [9]: #Drawbacks-in-Multi-Tenancy
 [10]: https://web.facebook.com/containerize
 [11]: https://www.linkedin.com/company/containerize/
 [12]: https://twitter.com/containerize_co
 [13]: https://forum.containerize.com/
 [14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
