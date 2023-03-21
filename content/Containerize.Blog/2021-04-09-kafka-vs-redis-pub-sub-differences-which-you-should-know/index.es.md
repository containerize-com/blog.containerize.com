---
title: "Kafka vs Redis Pub-sub, diferencias que debes saber" 
seoTitle: "Kafka vs Redis Pub-sub, diferencias que debes saber" 
description: "Si está buscando herramientas para administrar una gran cantidad de datos y confundir entre Kafka y Redis. Este artículo Kafka vs Redis Pub-sub lo ayudará." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis y Kafka son dos herramientas diferentes que están haciendo trabajos similares a su manera. La comparación de Kafka vs Redis le brinda información que debe saber." 
url: /es/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs Redis Pub Sub">}}


## Redis y Kafka son dos herramientas diferentes que están haciendo trabajos similares a su manera. La comparación de Kafka vs Redis le brinda información que debe saber.
En nuestra serie de artículos sobre "Redis" aprendimos sobre los [conceptos básicos de Redis][1], luego exploramos [cómo funciona Redis Pub/Sub][2] y cómo esto compite con las bases de datos NoSQL. Avanzando en nuestra serie de hoy compararemos Redis con Kafka, que es uno de sus competidores en varias tareas. En este artículo Kafka vs Redis Pub-sub, exploraremos qué es Kafka cómo es diferente de Redis y cuáles son las similitudes en ellos. Entonces empecemos.
  * ¿Qué es Kafka?
  * ¿Qué es Redis?
  * ¿Cuáles son las principales diferencias?
  * ¿Cuándo usar cuál?
  * Conclusión

## ¿Qué es Kafka?
Apache Kafka es una plataforma de transmisión de eventos distribuida de código abierto. Se utiliza para tuberías de datos de alto rendimiento y análisis de transmisión. Kafka actúa como un [sistema de mensajería de publicación de suscripción][3]. Con esto, puede procesar nuevos datos, ya que se genera a altas velocidades y, además, también puede guardarlos en alguna base de datos.
Kafka es un sistema distribuido que consta de **servidores  **y **  clientes** . Se puede implementar en hardware de metal desnudo, máquinas virtuales y contenedores en entornos locales y en la nube.

## ¿Qué es Redis?
Redis es una tienda de valores de clave de código abierto y avanzada. Admite varios tipos de datos: cadenas, hashes, listas, conjuntos y conjuntos ordenados. Es por eso que a menudo se lo conoce como un servidor de estructura de datos.
Redis también se considera como una base de datos NoSQL. Para una discusión detallada sobre He Redis y cómo funciona, puede consultar nuestro artículo "[Una guía para principiantes para redis en la base de datos en memoria][1]".

## ¿Cuáles son las principales diferencias?
**Redis**  Pub-Sub es principalmente como un sistema de incendio y olvido donde todos los mensajes que produjo se entregarán a todos los consumidores a la vez y los datos no se almacenan en ningún lado. Tiene limitaciones en la memoria con respecto a Redis. Además, el número de productores y consumidores puede afectar el rendimiento de Redis.
Por otro lado, **Kafka**  es un registro distribuido de alto rendimiento que puede usarse como una cola. También proporciona persistencia para los mensajes enviados a través de la cola.
**Redis  **Admite **  Push Based**  Entrega de mensajes. Esto significa que cada mensaje presionado a Redis se entregará automáticamente a todos los suscriptores.
**Kafka **, sin embargo, admite  **entrega de mensajes**   basado en extracción. Significa que los mensajes publicados a Kafka no se distribuyen a los suscriptores automáticamente. En cambio, los consumidores solicitan los mensajes cuando están listos para consumir esos mensajes.
**Redis  **No almacena mensajes en su lugar, los mensajes se entregan de inmediato a todos los consumidores y luego se eliminan. Sin embargo, **  Kafka  **Al ser un registro, siempre tienes mensajes. Puede monitorear esto estableciendo una política de retención, digamos 7 días ** , retención** .

## ¿Cuándo usar cuál?

### Redis
  * Si desea un tipo de sistema de fuego y olvido, donde todos los mensajes que produce se entregan instantáneamente a los consumidores.
  *Si  **Speed ​​**  está más preocupado.
  *Si **Storage**  no es importante, y no desea que su sistema contenga el mensaje que se ha enviado
  * La cantidad de datos que se tratarán no es enorme.

### kafka
  *Si quieres **confiabilidad** .
  * Si desea que su sistema tenga una copia de los mensajes que se han enviado incluso después del consumo.
  *Si  **Speed ​​**  no es una gran preocupación.
  * Y el tamaño de sus datos es enorme.

## Conclusión
En este tutorial Kafka vs Redis Pub-sub, exploramos Kafka y Redis. ¿Cuáles son sus diferencias y similitudes? También aprendimos cuándo debes redis y cuándo es bueno usar kafka. En nuestros próximos tutoriales, exploraremos más sobre Kafka y el análisis en profundidad.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#qué
