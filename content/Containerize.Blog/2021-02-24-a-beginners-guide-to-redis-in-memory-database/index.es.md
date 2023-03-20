---
title: "Una guía para principiantes para la base de datos de Redis In Memory" 
seoTitle: "Una guía para principiantes para la base de datos de Redis In Memory" 
description: "La base de datos de Redis In Memory es una tienda de valor de código abierto. También se llama una base de datos NoSQL. Este tutorial de Redis lo guía sobre conceptos centrales de Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Este tutorial lo ayuda a aprender sobre la base de datos de Redis In Memory. Es de código abierto y también se llama una tienda de valor clave, que es un tipo de base de datos no relacional." 
url: /es/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Este tutorial lo ayuda a aprender sobre la base de datos de Redis In Memory. Es de código abierto y también se llama una tienda de valor clave, que es un tipo de base de datos no relacional.

{{< figure align=center src="images/redis-in-memory-database.png" alt="Base de datos en memoria redis">}}

** Redis ** En realidad significa "** Re ** MOTE ** DI ** Cionario ** S ** erver". La base de datos Redis es una tienda de valor de clave avanzada y de código abierto. Admite varios tipos de datos: cadenas, hashes, listas, conjuntos y conjuntos ordenados. Es por eso que a menudo se lo conoce como un servidor de estructura de datos. Redis está escrito en C. Este tutorial de Redis proporciona una buena comprensión de los conceptos de base de datos de Redis In Memory.
  *** [¿Qué es una base de datos Nosql][1] **
  *** [¿Es Redis una base de datos Nosql?][2] **
  *** [¿Cuándo usar Redis?][3] **
  *** [Redis vs otras tiendas de valores clave][4] **
  *** [Instale redis en Ubuntu][5] **
  *** [Conclusión][6] **

## ¿Qué es una base de datos NoSQL {#nosql}
Las bases de datos NoSQL se han vuelto muy populares. Las grandes empresas confían en ellas para almacenar cientos de petabytes de datos y administrar millones de consultas por segundo. Pero, ¿qué es una base de datos NoSQL? ¿Cómo funciona y por qué escala mucho mejor que las bases de datos relacionales tradicionales? Comencemos explicando rápidamente el problema con bases de datos relacionales como MySQL, MariadB, SQL Server.
Las bases de datos relacionales están construidas para almacenar datos relacionales de la manera más eficiente posible. Puede tener una mesa para clientes, pedidos y productos, que se vinculan juntos lógicamente. Esta organización apretada es excelente para administrar sus datos, pero tiene un costo de baja escalabilidad. Tienen que mantener estas relaciones, y ese es un proceso intensivo, que requiere mucha memoria y potencia de cálculo.
Mientras que las bases de datos NoSQL pueden escalar tanto vertical como horizontalmente. Puede comparar esto con un edificio, la escala verticalmente significa agregar más pisos a un edificio existente, mientras que la escala horizontal significa agregar más edificios. La modificación del esquema es uno de los mayores desafíos en bases de datos relacionales. Las bases de datos NoSQL no requieren un esquema fijo que significa escala fácilmente con grandes cantidades de datos y altas cargas de usuario.

## ¿Es Redis una base de datos NoSQL? {#ISNOSQL}
Esta es una de las preguntas más populares que se hacen en toda la comunidad de desarrolladores en Internet. La respuesta simple es sí. Redis es un almacén de estructura de datos en memoria de código abierto.
En realidad, hay 4 tipos diferentes de tipos de bases de datos NoSQL, que incluyen: bases de datos de documentos, tiendas de valores clave, tiendas de columna amplia y tiendas gráficas. Por lo tanto, el servidor redis en la base de datos en memoria, siendo una tienda de valor clave, se encuentra en la categoría de base de datos NoSQL.

## ¿Cuándo usar Redis? {#cuando}
Cada tecnología tiene sus méritos y deméritos. Entonces, con tantas opciones disponibles en bases de datos. Se vuelve importante comprender cuándo y cuándo no usar una tecnología en particular. Siempre elija la herramienta adecuada para el trabajo.
Para datos estables, predecibles y relacionales, elige una base de datos relacional. Para datos temporales y altamente dinámicos, elija una base de datos NoSQL. El esquema para la base de datos es uno de los mayores desafíos en bases de datos relacionales y puede llevar una eternidad en una gran base de datos relacional.
Si tiene datos altamente dinámicos que cambian con frecuencia, y no tiene que hacer consultas complejas, sino que desea almacenar los datos como pares de valor clave, entonces Redis puede ser una opción potencialmente buena. Si necesita una base de datos orientada a documentos más destacada que le permita realizar consultas de rango, búsquedas de expresión regulares, indexación y MapReduce, debe verificar MongoDB, CouchDB o similar.
Algunos casos de uso de ejemplo de la base de datos Redis In Memory son los siguientes:
  *** Acceso Logger **: Cuando necesita registrar muchas actividades a ritmo rápido, Redis es una buena solución.
  *** Mantener contadores **: Puede usar Redis para mantener diferentes recuentos, p. Descargar contadores
  *** Presencia del usuario **: Debido a la velocidad, puede usarla para almacenar el estado de "línea / fuera de línea" del usuario.
  *** colas **: Puede usar Redis para mantener colas temporales para procesar trabajos de fondo.

## Redis vs otras tiendas de valor clave {#OTHER}
La base de datos de Redis In Memory es muy rápida y puede realizar aproximadamente 110000 conjuntos por segundo, aproximadamente 81000 obtienen por segundo. Admite varios tipos de datos: cadenas, hashes, listas, conjuntos y conjuntos ordenados. Redis es un solo hilo, lo que le permite cumplir con el ácido (atomicidad, consistencia, aislamiento y durabilidad). Otras bases de datos NoSQL generalmente no proporcionan cumplimiento ácido, o lo proporcionan parcialmente.

## Instale Redis en Ubuntu {#Install}
Para instalar Redis en Ubuntu, vaya al terminal y escriba los siguientes comandos
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
El siguiente comando iniciará el servidor Redis
```
$ redis-server
```
Para verificar si el servidor Redis se está ejecutando, puede usar el comando ** Redis-Cli ** para conectarse a él.
```
$ redis-cli 
```
Este comando le dará la siguiente salida, lo que significa que el servidor se está ejecutando y ahora está conectado.
```
redis 127.0.0.1:6379>
```
Ahora escriba el siguiente comando ** ping **, y obtendrá una respuesta del servidor como ** pong **.
```
redis 127.0.0.1:6379> ping
PONG
```

## conclusión {#conclusion}
En este tutorial de Redis, aprendimos sobre la base de datos de Redis In Memory. Exploramos la principal diferencia entre bases de datos relacionales y no relacionales (nosql). Además, aprendí cuándo deberíamos usar Redis y cuáles son los mejores casos de uso. Este tutorial es parte de una serie en curso de tutoriales. En los próximos artículos, exploraremos más a fondo los casos de uso específicos de Redis.

  
[1]: #nosql
[2]: #isnosql
[3]: #when
[4]: #other
[5]: #install
[6]: #conclusion
