---
title: "Учебник Apache Kafka -Введение в Кафку для начинающих" 
seoTitle: "Учебник Apache Kafka -Введение в Кафку для начинающих" 
description: "Apache Kafka-это распределенная платформа для распределенного события с открытым исходным кодом. Этот учебник - руководство для начинающих, чтобы понять, как Apache Kafka." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka-это распределенная платформа для распределенного события с открытым исходным кодом. Этот учебник дает вам введение в Кафку с точки зрения новичка." 
url: /ru/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka-это распределенная платформа для распределенных событий с открытым исходным кодом. Этот учебник дает вам представление о Кафке с точки зрения начинающего.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka с открытым исходным кодом">}}

Недавно мы написали статью о «Kafka vs Redis Pub-Sub», в которой объясняются различия между Kafka и Redis Pub-Sub. В этой статье мы вскоре объяснили о самом брокере сообщения Кафки. Таким образом, теперь эта статья дает вам большее понимание платформы потоковой передачи распределенного события Apache Kafka с открытым исходным кодом и дает вам все необходимое представление для начала с очередью распределенных сообщений Kafka. Итак, давайте начнем.
  * [Введение в Apache Kafka][1]
  * [Что такое система обмена сообщениями?][2]
  * [Фундаментальные термины][3]
  * [Шаги установки][4]
  * [Создать тему][5]
  * [Записать сообщение в тему][6]
  * [Читать сообщения из темы][7]
  * [Заключение][8]

## Введение в Apache Kafka {#intro}

Apache Kafka Open Source Broker был запущен в LinkedIn, а затем стал проектом Apache с открытым исходным кодом. Scala и Java разработано в Scala и Java. Apache Kafka Broker-это система обмена сообщениями, подписывающая публикацию, которая также позволяет обменять данные между приложениями, серверами и процессорами. Он быстрый, масштабируемый и распространяется по дизайну. Он способен обрабатывать миллионы данных или сообщений в секунду. Он работает в качестве посредника между системой источника (производителя) и системой Target (потребителя). Такие организации, как Netflix, Uber и тысячи таких фирм, используют потоковую передачу Apache Kafka в реальном времени. По сравнению с другими системами обмена сообщениями, программное обеспечение для очередей сообщений Kafka имеет лучшую пропускную способность, встроенную перегородку, репликацию и неотъемлемая терпимость разлома. Это делает его полезным для крупномасштабных приложений обработки сообщений.

## Что такое система обмена сообщениями? {#messaging}

Система обмена сообщениями - это простой обмен сообщениями между двумя или более человека, устройствами и т. Д. Она отвечает за передачу данных из одного приложения в другое, поэтому приложения могут сосредоточиться на данных, но не беспокоиться о том, как их поделиться.
Одним из типов системы обмена сообщениями является «Система обмена сообщениями точки на точки». В этой системе сообщения хранятся в очереди при отправке производителем. Только один потребитель может потреблять сообщение в любой момент времени. И как только сообщение будет использовано, оно будет удалено из очереди. Одним из примеров этой системы является система обработки заказов. Где только один процесс может занять заказ.
Другим типом системы обмена сообщениями является система обмена сообщениями в пабе, которая позволяет отправителю отправлять сообщение и получатель для прочтения этого сообщения. В обмене сообщениями Apache Kafka отправитель известен как продюсер, который публикует сообщения, а получатель известен как потребитель, который потребляет это сообщение, подписываясь на него. Примером этой системы является ваше кабельное телевидение, которое публикует много каналов, и любой может подписаться на выбор каналов и получить их всякий раз, когда их подписанные каналы.

## Фундаментальные условия {#terms}

Прежде чем мы больше поговорим о лучшей очереди сообщения Apache Kafka, вы должны понять некоторые термины.
* **Темы** : Поток сообщений, принадлежащих конкретной категории, называется темой.
* **Раздел** : темы могут иметь много разделов, поэтому они могут обрабатывать произвольное количество данных.
* **Смещение раздела** : каждое разделенное сообщение имеет уникальный идентификатор последовательности, называемый «смещение».
* **Реплики раздела** : реплики являются резервными копиями раздела. Они используются для предотвращения потери данных.
* **Брокеры** : несут ответственность за поддержание опубликованных данных.
* **Кафка кластер** : Кафка имеет более одного брокера, называется кафка.
* **Производители** : Издатели сообщений на одну или несколько тем.
* **Потребители** : Читатель данных от брокеров. Они подписываются на несколько тем и потребляют всякий раз, когда есть сообщение в теме.
* **Лидер** : Узел, ответственный за все чтения и пишет для любого данного разделения.
* **Последователь** : Узел, который следует за инструкциями лидера, называются подписчиками.

## Шаги установки {#steps}


### Шаг 1 - Проверка установки Java
Надеюсь, вы уже установили Java на своем компьютере прямо сейчас, так что вы просто проверяете ее, используя следующую команду.
```
$ java -version
```
Если Java успешно установлен на вашей машине, вы можете увидеть версию установленной Java. Если нет, то вы должны сначала установить Java.

### Шаг 2 - Установка Zookeeper Framework
Посетите следующую ссылку и загрузите последнюю версию Zookeeper.
{{_LINE_46_}}
Как только вы закончите с установкой и конфигурацией, вы можете запустить Zookeeper с следующей командой
```
$ bin/zkServer.sh start
```
А затем используйте следующую команду для подключения к Zookeeper из CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
После подключения вы должны увидеть что -то вроде этого
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Шаг 3 - Установка Apache Kafka
Загрузите последний выпуск Best Message Broker Kafka и извлечь его из следующего URL
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Запустите следующие команды, чтобы запустить все службы в правильном порядке:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Откройте еще один сеанс терминала и запустите:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Создать тему {#create}

Чтобы написать свои сообщения или события в темы, вы должны сначала создать тему. Чтобы создать тему откройте ваш терминал и запустите следующую команду:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Теперь мы создали тему с названием «Погодные обмотки», где мы опубликуем информацию о погоде, и потребители будут потреблять эти сообщения.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Написать сообщение в тему {#write}

Запустите клиент -консоли, чтобы написать несколько событий в вашу тему. По умолчанию каждая строка, которую вы вводят, приведет к отдельному событию, записанному на тему.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Читать сообщения из темы {#read}

Откройте еще один сеанс терминала и запустите клиента Console Consumer, чтобы прочитать только что созданные события:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Не стесняйтесь экспериментировать: например, переключитесь на свой терминал производителя (предыдущий шаг), чтобы написать дополнительные события, и посмотрите, как события немедленно отображаются в вашем потребительском терминале.

## Заключение {#conclusion}

В этом уроке мы узнали об основах использования Apache Kafka. Мы установили службу очередей Кафки, а затем настроили ее. Мы также научились создавать темы в Кафке, отправлять сообщения на темы и как читать сообщения по темам. Я надеюсь, что эта статья была полезна для вас. Давайте встретимся в следующей статье.
_ Какую платформу потоковой передачи распределенного события с открытым исходным кодом вы используете?. У вас есть вопросы?

## Исследовать
Вы можете найти следующие ссылки актуальными:
  * [Лучшее бесплатное и программное обеспечение с открытым исходным кодом (MQ)][10]
  * [Kafka vs Redis Pub-Sub, различия, которые вы должны знать][11]
  * [Введение в Redis pub/sub и как это работает?][12]



[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
