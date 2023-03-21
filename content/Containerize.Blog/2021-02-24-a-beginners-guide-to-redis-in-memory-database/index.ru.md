---
title: "Руководство для начинающих по базе данных Redis в памяти" 
seoTitle: "Руководство для начинающих по базе данных Redis в памяти" 
description: "Redis In-Memory Database-это магазин с открытым исходным кодом. Это также называется базой данных NOSQL. Это Redis Tutorial направляет вас о основных концепциях Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Этот учебник помогает вам узнать о базе данных Redis в памяти. Он является открытым исходным кодом, а также называется магазином ключей, который является типом базы данных, нереляционной." 
url: /ru/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Этот учебник помогает вам узнать о базе данных Redis в памяти. Он является открытым исходным кодом, а также называется магазином ключей, который является типом базы данных, нереляционной.

{{< figure align=center src="images/redis-in-memory-database.png" alt="База данных в памяти Redis">}}

**redis  **фактически означает «**  re  **mote **  di  **ctionary **  s**  erver». База данных Redis-это расширенный магазин с открытым исходным кодом. Он поддерживает несколько типов данных: строки, хэши, списки, наборы и отсортированные наборы. Вот почему его часто называют сервером структуры данных. Redis написан в C. Этот учебник Redis дает хорошее понимание концепций базы данных Redis в памяти.
  ***[Что такое база данных NOSQL][1]** 
  ***[Redis A NOSQL DATABASE?][2]** 
  ***[Когда использовать Redis?][3]** 
  ***[Redis против других магазинов ключевых значений][4]** 
  ***[Установить Redis на Ubuntu][5]** 
  ***[Заключение][6]** 

## Что такое база данных NOSQL   {#NoSQL}
Базы данных NOSQL стали очень популярными. Крупные компании полагаются на них, чтобы хранить сотни петабайт данных и запускать миллионы запросов в секунду. Но что такое база данных NOSQL? Как это работает и почему он масштабируется намного лучше, чем традиционные реляционные базы данных? Давайте начнем с быстрого объяснения проблемы с реляционными базами данных, такими как MySQL, MariaDB, SQL Server.
Реляционные базы данных созданы для хранения реляционных данных как можно более эффективно. Вы можете иметь таблицу для клиентов, заказов и продуктов, логически соединяясь. Эта жесткая организация отлично подходит для управления вашими данными, но она составляет стоимость низкой масштабируемости. Они должны поддерживать эти отношения, и это интенсивный процесс, требующий большой памяти и вычислительной мощности.
Принимая во внимание, что базы данных NOSQL могут масштабироваться как вертикально, так и по горизонтали. Вы можете сравнить это с зданием, вертикально масштабирование означает добавление большего количества этажей в существующее здание, в то время как горизонтальное масштабирование означает добавление большего количества зданий. Модификация схемы является одной из самых больших проблем в реляционных базах данных. Базы данных NOSQL не требуют фиксированной схемы, что означает легко масштабировать большие объемы данных и высокие нагрузки пользователей.

## Redis база данных NOSQL?   {#ISNOSQL}
Это один из самых популярных вопросов, заданных в сообществе разработчиков в Интернете. Простой ответ - да. Redis-это хранилище структуры данных с открытым исходным кодом.
На самом деле существует 4 различных вида типов баз данных NOSQL, которые включают в себя: базы данных документов, хранилища клавиш, магазины с широкими колоннами и хранилища графиков. Итак, в базе данных Server Redis в памяти, являясь хранилищем ключей, подпадает под категорию базы данных NOSQL.

## Когда использовать Redis?   {#когда}
Каждая технология имеет свои достоинства и недостатки. Итак, с таким количеством вариантов, доступных в базах данных. Становится важно понимать, когда и когда не использовать конкретную технологию. Всегда выбирайте правильный инструмент для работы.
Для стабильных, предсказуемых и реляционных данных выбирают реляционную базу данных. Для временного, высоко динамического данных выбирают базу данных NOSQL. Схема для базы данных является одной из самых больших проблем в реляционных базах данных и может навсегда занять в реляционных базах данных.
Если у вас есть очень динамические данные, которые часто меняются, и вам не нужно задавать сложные запросы, скорее хотите сохранить данные в виде пар клавишных значений, то REDIS может быть потенциально хорошим выбором. Если вам нужна более изготовленная база данных, ориентированную на документ, которая позволяет вам выполнять запросы диапазона, поиск регулярных выражений, индексация и MapReduce, вы должны проверить MongoDB, CouchDB или аналогичный.
Некоторые примеры использования вариантов использования базы данных Redis в памяти следующие:
  ***Access Logger** : Когда вам нужно регистрировать много мероприятий в быстром темпе, Redis - хорошее решение.
  ***Поддержание счетчиков** : Вы можете использовать Redis для поддержания различных пунктов, например, Скачать счетчики
  ***Присутствие пользователя** : Из -за скорости вы можете использовать его для хранения статуса «онлайн / офлайн» пользователя.
  ***Очерки** : Вы можете использовать Redis для поддержания временных очередей для обработки фоновых заданий.

## redis vs другие хранилища ключей value   {#other}
Redis в базе данных в памяти очень быстрая и может выполнять около 110000 комплектов в секунду, около 81000 получают в секунду. Он поддерживает несколько типов данных: строки, хэши, списки, наборы и отсортированные наборы. Redis является однопользованным, что позволяет ему быть совместимым с кислотой (атомность, консистенция, изоляция и долговечность). Другие базы данных NOSQL обычно не обеспечивают соблюдение кислоты, или они предоставляют его частично.

## Установить Redis на Ubuntu   {#install}
Чтобы установить Redis на Ubuntu, перейдите на терминал и введите следующие команды
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
Следующая команда запустит сервер Redis
```
$ redis-server
```
Чтобы проверить, работает ли сервер Redis, вы можете использовать команду **Redis-Cli**  для подключения к нему.
```
$ redis-cli 
```
Эта команда даст вам следующий выход, что означает, что сервер работает, и теперь вы подключены.
```
redis 127.0.0.1:6379>
```
Теперь введите следующую команду **Ping **, и вы получите ответ от сервера как  **pong**  .
```
redis 127.0.0.1:6379> ping
PONG
```

## Заключение   {#conclusion}
В этом уроке Redis мы узнали о базе данных Redis в памяти. Мы исследовали основное различие между реляционными и нереляционными (NOSQL) базами данных. Кроме того, узнал, когда мы должны использовать Redis и какие варианты использования. Этот учебник является частью продолжающейся серии учебных пособий. В предстоящих статьях мы дополнительно рассмотрим конкретные варианты использования Redis.

  
[1]: #nosql
[2]: #isnosql
[3]: #when
[4]: #other
[5]: #install
[6]: #conclusion