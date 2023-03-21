---
title: "Tutorial Apache Kafka -Introducción a Kafka para principiantes" 
seoTitle: "Tutorial Apache Kafka -Introducción a Kafka para principiantes" 
description: "Apache Kafka es una plataforma de transmisión de eventos distribuidos de código abierto. Este tutorial es una guía para principiantes para comprender a Apache Kafka." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka es una plataforma de transmisión de eventos distribuidos de código abierto. Este tutorial le brinda una introducción a Kafka desde la perspectiva de un principiante." 
url: /es/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka es una plataforma de transmisión de eventos distribuidos de código abierto. Este tutorial le brinda una introducción a Kafka desde la perspectiva de un principiante.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Tutorial de código abierto Apache Kafka">}}

Recientemente escribimos un artículo sobre "Kafka vs Redis Pub-sub" que explica sobre las diferencias entre Kafka y Redis Pub-sub. En ese artículo explicamos en breve sobre el propio Broker de mensajes de Kafka. Entonces, ahora este artículo le brinda más información sobre la plataforma de transmisión de eventos distribuidos de código abierto Apache Kafka y le brinda todo lo necesario Introducto para comenzar con la cola de mensajes distribuidos de Kafka. Entonces empecemos.
  * [Introducción a Apache Kafka][1]
  * [¿Qué es un sistema de mensajería?][2]
  * [Términos fundamentales][3]
  * [Pasos de instalación][4]
  * [Crear un tema][5]
  * [Escribir mensaje en el tema][6]
  * [Lea los mensajes del tema][7]
  * [Conclusión][8]

## Introducción a Apache Kafka   {#Intro}
El corredor de mensajes de código abierto de Apache Kafka se inició en LinkedIn y luego se convirtió en un proyecto Apache de código abierto. Kafka Message Broker Software se desarrolla en Scala y Java. Apache Kafka Broker es un sistema de mensajería de suscripción de publicación que también permite el intercambio de datos entre aplicaciones, servidores y procesadores. Es rápido, escalable y distribuido por diseño. Es capaz de manejar millones de datos o mensajes por segundo. Funciona como mediador entre el sistema de origen (productor) y el sistema objetivo (consumidor). Organizaciones como Netflix, Uber y miles de esas empresas hacen uso de la transmisión en tiempo real de Apache Kafka. En comparación con otros sistemas de mensajería, el software de cola de mensajes de Kafka tiene un mejor rendimiento, partición incorporada, replicación y tolerancia a fallas inherentes. Esto lo convierte en una buena opción para aplicaciones de procesamiento de mensajes a gran escala.

## ¿Qué es un sistema de mensajería?   {#mensajería}
Un sistema de mensajería es un simple intercambio de mensajes entre dos o más personas, dispositivos, etc. Es responsable de la transferencia de datos de una aplicación a otra, por lo que las aplicaciones pueden centrarse en los datos, pero no preocuparse por cómo compartirlo.
Un tipo de sistema de mensajería es el "sistema de mensajería de puntos a puntos". En este sistema, los mensajes se almacenan en una cola cuando el productor envía. Solo un consumidor puede consumir un mensaje en un momento dado. Y, una vez que se consume el mensaje, se eliminará de la cola. Uno de los ejemplos de este sistema es el sistema de procesamiento de pedidos. Donde solo un proceso puede procesar la orden.
Otro tipo de sistema de mensajería es el sistema de mensajería de pub-sub que permite que un remitente envíe el mensaje y un receptor para leer ese mensaje. En la mensajería Apache Kafka, un remitente es conocido como productor que publica mensajes, y un receptor es conocido como un consumidor que consume ese mensaje al suscribirse a él. Un ejemplo de este sistema es su televisión por cable que publica muchos canales, y cualquiera puede suscribirse a su elección de canales y obtenerlos cuando sus canales suscritos estén disponibles.

## Términos fundamentales   {#terms}
Antes de hablar más sobre la mejor cola de mensajes Apache Kafka, debe comprender algunos de los términos.
  ***Temas** : Un flujo de mensajes pertenecientes a una categoría particular se llama tema.
  ***Partition** : Los temas pueden tener muchas particiones, por lo que pueden manejar una cantidad arbitraria de datos.
  ***Compensación de partición** : Cada mensaje dividido tiene una ID de secuencia única llamada "Offset".
  ***REPLICAS DE PARTICIÓN** : Las réplicas son copias de seguridad de una partición. Se utilizan para prevenir la pérdida de datos.
  ***Brokers** : son responsables de mantener los datos publicados.
  ***Cluster Kafka** : Kafka tiene más de un corredor se llama clúster Kafka.
  ***Productores** : Son los editores de los mensajes a uno o más temas.
  ***Consumidores** : Son el lector de los datos de los corredores. Se suscriben a múltiples temas y consumen cuando hay un mensaje en el tema.
  ***Líder** : El nodo es responsable de todas las lecturas y escritura para cualquier partición dada.
  ***seguidor** : Nodo que sigue las instrucciones del líder se llaman seguidores.

## Pasos de instalación   {#steps}

### Paso 1 - Verificación de la instalación de Java
Esperemos que ya haya instalado Java en su máquina en este momento, por lo que solo lo verifica usando el siguiente comando.
```
$ java -version
```
Si Java se instala correctamente en su máquina, puede ver la versión del Java instalado. Si no es así, primero debe instalar Java.

### Paso 2 - Instalación del marco de Zookeeper
Visite el siguiente enlace y descargue la última versión de Zookeeper.
{{_LINE_46_}}
Una vez que haya terminado con la instalación y la configuración, puede iniciar el comando de Zookeeper con el siguiente comando
```
$ bin/zkServer.sh start
```
Y luego use el siguiente comando para conectarse a ZOOKEEPER desde la CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Una vez conectado, deberías ver algo así
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Paso 3 - Instalación de Apache Kafka
Descargue la última versión de Kafka Best Broker Broker y extraiga de la siguiente URL
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Ejecute los siguientes comandos para iniciar todos los servicios en el orden correcto:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Abra otra sesión de terminal y ejecute:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Crear un tema   {#Create}
Para escribir sus mensajes o eventos en temas, primero debe crear un tema. Para crear un tema, abra su terminal y ejecute el siguiente comando:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Ahora hemos creado un tema con el nombre de "actualizaciones meteorológicas" donde publicaremos información sobre el clima y los consumidores consumirán esos mensajes.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Escriba el mensaje en el tema   {#Write}
Ejecute el cliente del productor de consola para escribir algunos eventos en su tema. Por defecto, cada línea que ingrese dará como resultado un evento separado que se escribe en el tema.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Leer mensajes del tema   {#read}
Abra otra sesión de terminal y ejecute el cliente de consumidor de consola para leer los eventos que acaba de crear:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Siéntase libre de experimentar: por ejemplo, vuelva a su terminal de productor (paso anterior) para escribir eventos adicionales y vea cómo aparecen los eventos inmediatamente en su terminal de consumo.

## conclusión   {#conclusion}
En este tutorial hemos aprendido sobre los conceptos básicos del uso de Apache Kafka. Instalamos el servicio de cola Kafka y luego lo configuramos. También aprendimos a crear temas en Kafka, enviar mensajes a temas y cómo leer mensajes de los temas. Espero que este artículo haya sido útil para ti. Veamos en el próximo artículo.
_ ¿Qué plataforma de transmisión de eventos distribuida de código abierto? ¿Tiene alguna pregunta?, Por favor_ [póngase en contacto][9].

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [El mejor software de cola de mensajes de código abierto y de código abierto (MQ)][10]
  * [Kafka vs Redis Pub-sub, diferencias que debes saber][11]
  * [Introducción a Redis Pub/Sub y ¿cómo funciona?][12]

  
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
