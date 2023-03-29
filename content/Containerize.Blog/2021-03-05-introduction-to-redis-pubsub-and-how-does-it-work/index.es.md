---
title: "Introducción a Redis Pub/Sub y ¿cómo funciona?" 
seoTitle: "Introducción a Redis Pub/Sub y ¿cómo funciona?" 
description: "Redis Pub/Sub es un servicio de mensajería flexible, confiable y en tiempo real para aplicaciones independientes para publicar y suscribirse a eventos asíncronos." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis pub/sub implementa un sistema de mensajería en tiempo real, donde los editores, publican en un canal/tema y varios clientes pueden suscribirse a ese canal/tema." 
url: /es/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub/Sub implementa un sistema de mensajería en tiempo real, donde los editores, publican en un canal/tema y varios clientes pueden suscribirse a ese canal/tema.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis pub sub">}}

En nuestro último tutorial " **[Una guía para principiantes para Redis In Memory Database][1]** " Aprendimos sobre Redis como una base de datos en memoria. Y, cómo esto compite con las bases de datos NoSQL. También aprendimos dónde usar Redis y dónde su uso no es óptimo. Ahora, construyendo sobre esa base de conocimiento, en este tutorial aprenderemos sobre Redis Pub/Sub, cómo funciona y de cuál es el mejor uso del sistema Redis Publish/suscripción. Empecemos.
* **[¿Qué es el patrón de publicación/suscripción?][2]** 
* **[¿Cómo funciona el pub/sub?][3]** 
* **[¿Cuándo deberías usar pub/sub?][4]** 
* **[¿Cómo usar Redis Pub/Sub?][5]** 
* **[Conclusión][6]** 

## ¿Qué es el patrón de publicación/suscripción? {#what}

Publicar/suscribirse o en breves pub/sub es un patrón de mensajería donde el remitente y el receptor de los mensajes no intercambian esos mensajes directamente. Más bien, el remitente del mensaje lo publica en un canal/tema. Y, todos aquellos que quieran recibir esos mensajes se suscribirán al canal/tema. Entonces, eso fue más una explicación técnica. En nuestra vida diaria, usamos este modelo de publicación de suscripción con bastante frecuencia mientras usa plataformas de redes sociales como YouTube, Twitter, Facebook o Instagram. Donde los productores de contenido producen el contenido y los interesados ​​seguirán / suscribirán al contenido. Así que esto es exactamente lo que hace el patrón de pub/sub en la arquitectura de software también.

## ¿Cómo funciona el pub/subs? {#how}

En el desarrollo de software, el énfasis en la reutilización es muy alto. Y todos los patrones de diseño se basan en componentes o módulos reutilizables de construcción. Entonces, para comprender el pub/sub, primero debe ver de dónde proviene esta idea y cómo los desarrolladores la encontraron como un patrón.
A medida que las arquitecturas de software evolucionaron y se volvieron más basadas en módulos, más comunicación / mensajería aumentó entre los módulos y los componentes. Como, piense en un módulo como una unidad de procesamiento que toma alguna entrada y proporciona alguna salida. Y cada entrada es en realidad un mensaje en el que la unidad de procesamiento procesa y genera otro mensaje como salida. Que será una entrada para algún otro módulo. Por lo tanto, este aumento de la mensajería requirió atención especial, para tener aplicaciones escalables, había un requisito de que los módulos y los componentes puedan funcionar de forma independiente sin dependencias. Por lo tanto, llegó el patrón de publicación/suscripción.
En muchos sistemas de pub/subs, los editores publican mensajes a un corredor de mensajes intermedios o bus de eventos, y los suscriptores registran suscripciones con ese corredor, permitiendo que el corredor realice el filtrado. El corredor normalmente realiza una función de tienda y reenvío para enrutar mensajes de editores a suscriptores. Además, el corredor puede priorizar los mensajes en una cola antes de enrutar.

## **¿Cuándo debería usar PUB/SUB?** {#when}

Las aplicaciones de chat son un caso de uso clásico del patrón pub/sub. En una solicitud de chat, los participantes pueden suscribirse a salas de chat que tienen un tema de pub/submarino designado. Cuando un usuario envía un mensaje a una sala de chat, su instancia de la aplicación de chat publica el mensaje sobre el tema de esa sala de chat. Los suscriptores del tema reciben el mensaje.
Servicio de cola de mensajes / colas de mensajes o aplicaciones de procesamiento por lotes también pueden usar el patrón pub / sub. Donde todos los que deseen una tarea en particular publicarán el mensaje en una cola y unidades de procesamiento que se hayan suscrito a esa cola recibirán el mensaje para procesar el trabajo.
Discutamos algunas de las ventajas del patrón de pub/sub
  * Acoplamiento suelto entre los componentes del sistema
  * Mejor vista del flujo de trabajo de todo el sistema
  * Habilita una mejor y más rápida integración
  * Asegura la escalabilidad más suave
  * Confiabilidad consistente garantizada
  * Construye elasticidad
  * Modularización del software
  * Desarrollo de software agnóstico del lenguaje
  * La claridad en la lógica de negocios
  * Mejora la capacidad de respuesta

## Cómo usar Redis Pub/Sub {#redis-pubsub}

Para la instalación de Redis, puede consultar mi [último tutorial][1]. Este ejemplo explica cómo funciona el concepto de editor y suscriptor. En el siguiente ejemplo, un cliente se suscribe a un canal llamado "Redischat".
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Ahora, dos clientes están publicando los mensajes en el mismo canal llamado "Redischat" y el cliente suscrito anterior está recibiendo mensajes.
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

## Conclusión {#conclusion}

En este tutorial, aprendimos sobre el patrón de diseño de publicación/suscripción. Y exploró cómo funciona el Pub/Sub Redis. También exploramos cuáles son los mejores casos de uso de Redis Pub/Sub, mensajes en tiempo real. En mi próximo tutorial, exploraremos aún más el Redis y explicaremos cómo podemos usar Redis Pub/Sub con Node.js para crear una aplicación de chat en tiempo real.



[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
