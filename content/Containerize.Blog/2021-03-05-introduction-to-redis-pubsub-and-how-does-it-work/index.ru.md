---
title: "Введение в Redis Pub/sub и как это работает?" 
seoTitle: "Введение в Redis Pub/sub и как это работает?" 
description: "Redis Pub/sub-это гибкая, надежная служба обмена сообщениями в реальном времени для независимых приложений для публикации и подписки на асинхронные события." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/Sub реализует систему обмена сообщениями в реальном времени, где издатели публикуют на канал/тему, и несколько клиентов могут подписаться на этот канал/тему." 
url: /ru/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub/Sub реализует систему обмена сообщениями в реальном времени, где издатели публикуют на канал/тему, и несколько клиентов могут подписаться на этот канал/тему.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

В нашем последнем учебном пособии «**[Руководство для начинающих по базе данных Redis In-Memory][1]** » мы узнали о Redis в качестве базы данных в памяти. И как это конкурирует с базами данных NOSQL. Мы также узнали, где использовать Redis и где его использование не является оптимальным. Теперь, построившись на вершине этой базы знаний, в этом уроке мы узнаем о Redis Pub/Sub, как это работает, и о том, что лучше всего использовать систему Redis Publish/Pricebibe. Давайте начнем.
  ***[Что такое шаблон публикации/подписки?][2]** 
  ***[Как работает паб/суб?][3]** 
  ***[Когда вы должны использовать Pub/sub?][4]** 
  ***[Как использовать Redis pub/sub?][5]** 
  ***[Заключение][6]** 

## Что такое шаблон публикации/подписки?   {#что}
Опубликовать/подписаться или в короткие пабы/sub - это шаблон обмена сообщениями, где отправитель и приемник сообщений не обмениваются этими сообщениями напрямую. Скорее, отправитель сообщения публикует его на канал/тему. И все те, кто хочет получить эти сообщения, подписываются на канал/тему. Итак, это было скорее техническим объяснением. В нашей повседневной жизни мы довольно часто используем эту модель Publish-Subscribe, используя такие платформы социальных сетей, как YouTube, Twitter, Facebook или Instagram. Где производители контента производят контент, и те, кто заинтересован, будут следовать / подписаться на контент. Так что это то, что именно паб/субматер также делает в архитектуре программного обеспечения.

## Как работает паб/суббот?   {#как}
В разработке программного обеспечения акцент на повторное использование очень высокое. И все шаблоны проектирования основаны на создании многоразовых компонентов или модулей. Поэтому, чтобы понять, какой паб/подставка вам сначала нужно посмотреть, откуда появилась эта идея и как разработчики нашли его как шаблон.
По мере развития программных архитектур и более модуль они стали, больше коммуникаций / обмена сообщениями увеличивалось между модулями и компонентами. Например, подумайте о модуле как о обработчивом блоке, который делает некоторый вход и обеспечивает некоторый выход. И каждый вход на самом деле является сообщением, на котором обрабатывает единицу обработки, и генерирует другое сообщение в качестве вывода. Который станет входом в какой -то другой модуль. Таким образом, это увеличение обмена сообщениями требовало особого внимания, чтобы иметь масштабируемые приложения, было необходимо, чтобы модули и компоненты могли работать независимо без зависимостей. Следовательно, появился шаблон публикации/подписки.
Во многих пабах/суб -системах издатели публикуют сообщения для посреднического посредника или шины событий, а подписчики регистрируют подписки с этим брокером, позволяя брокеру выполнять фильтрацию. Брокер обычно выполняет функцию магазина и вперед для маршрутизации сообщений от издателей на подписчиков. Кроме того, брокер может расставить приоритеты в очереди перед маршрутизацией.

## **Когда вы должны использовать Pub/sub?**    {#When}
Приложения чата - это классический случай использования паба/суббота. В приложении в чате участники могут подписаться на чаты, которые имеют назначенный паб/суб -тема. Когда пользователь отправляет сообщение в чат, ее экземпляр приложения чата публикует сообщение по теме чата. Подписчики темы получают сообщение.
Служба очереди сообщений / очередь сообщений или приложения для обработки пакетной обработки также могут использовать паб / суб -шаблон. Где все те, кто хочет выполнить определенную задачу, опубликуют сообщение в очереди и обработки, которые подписались на эту очередь, получит сообщение для обработки работы.
Давайте обсудим некоторые преимущества Pub/Sub Pattern
  * Свободная связь между компонентами системы
  * Лучший вид рабочего процесса общесистрии
  * Обеспечивает лучшую и более быструю интеграцию
  * Обеспечивает более плавную масштабируемость
  * Гарантированная последовательная надежность
  * Устает эластичность
  * Программная модуляризация
  * Разработка программного обеспечения для агностического языка языка
  * Ясность в бизнес -логике
  * Улучшает отзывчивость

## Как использовать Redis pub/sub   {#redis-pubsub}
Для установки Redis вы можете обратиться к моему [последнему уроку][1]. В этом примере объясняется, как работает концепция издателя и подписчика. В следующем примере один клиент подписывается на канал с именем «Redischat».
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Теперь два клиента публикуют сообщения на том же канале с именем «Redischat», а вышеупомянутый клиент получает сообщения.
```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great" 
1) "message" 
2) "redisChat" 
3) "Learn redis" 

```

## Заключение   {#conclusion}
В этом уроке мы узнали о шаблоне дизайна Publish/Pricebibe. И исследовал, как работает паб Redis/Sub. Мы также исследовали, какие случаи лучшего использования паб Redis/Sub, обмен сообщениями в реальном времени. В моем предстоящем учебном пособии мы рассмотрим REDIS дальше и объясним, как мы можем использовать Redis Pub/sub с node.js для создания приложения чата в реальном времени.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion