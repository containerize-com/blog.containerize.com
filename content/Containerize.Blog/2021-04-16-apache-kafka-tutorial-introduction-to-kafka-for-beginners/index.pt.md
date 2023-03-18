---
title: "Apache Kafka Tutorial -Introdução a Kafka para iniciantes" 
seoTitle: "Apache Kafka Tutorial -Introdução a Kafka para iniciantes" 
description: "O Apache Kafka é uma plataforma de streaming de eventos distribuída de código aberto. Este tutorial é um guia para iniciantes para entender o Apache Kafka moído." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "O Apache Kafka é uma plataforma de streaming de eventos distribuída de código aberto. Este tutorial oferece uma introdução a Kafka da perspectiva de um iniciante." 
url: /pt/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka é uma plataforma de streaming de eventos distribuída de código aberto. Este tutorial oferece uma introdução a Kafka da perspectiva de um iniciante.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka Open Source Tutorial">}}

Recentemente, escrevemos um artigo sobre "Kafka vs Redis Pub-Sub", que explica sobre as diferenças entre Kafka e Redis Pub-Sub. Nesse artigo, em breve explicamos sobre o próprio corretor de mensagens Kafka. Portanto, agora este artigo fornece mais informações sobre a plataforma de streaming de eventos de código aberto Apache Kafka e fornece a você todas as informações necessárias para começar com a fila de mensagens distribuídas Kafka. Então vamos começar.
  * [Introdução ao Apache Kafka] [1]
  * [O que é um sistema de mensagens?] [2]
  * [Termos Fundamentais] [3]
  * [Etapas de instalação] [4]
  * [Crie um tópico] [5]
  * [Escreva mensagem no tópico] [6]
  * [Leia mensagens do tópico] [7]
  * [Conclusão] [8]

## Introdução ao apache kafka {#intro}
O corretor de mensagens de código aberto do Apache Kafka foi iniciado no LinkedIn e depois se tornou um projeto Apache de código aberto. O software Kafka Message Broker é desenvolvido em Scala e Java. O Apache Kafka Broker é um sistema de mensagens de inscrição de publicação que permite que a troca de dados entre aplicativos, servidores e processadores também. É rápido, escalável e distribuído pelo design. É capaz de lidar com milhões de dados ou mensagens por segundo. Funciona como mediador entre o sistema de origem (produtor) e o sistema de destino (consumidor). Organizações como Netflix, Uber e milhares de empresas fazem uso do streaming em tempo real do Apache Kafka. Em comparação com outros sistemas de mensagens, o software da fila de mensagens Kafka possui melhor taxa de transferência, particionamento interno, replicação e tolerância à falha inerente. Isso o torna um bom ajuste para aplicativos de processamento de mensagens em larga escala.

## O que é um sistema de mensagens? {#Mensagens}
Um sistema de mensagens é uma troca simples de mensagens entre duas ou mais pessoas, dispositivos, etc. É responsável pela transferência de dados de um aplicativo para outro, para que os aplicativos possam se concentrar nos dados, mas não se preocupem em como compartilhá -lo.
Um tipo de sistema de mensagens é "sistema de mensagens Point a Point". Neste sistema, as mensagens são armazenadas em uma fila quando enviadas pelo produtor. Apenas um consumidor pode consumir uma mensagem a qualquer momento. E, depois que a mensagem for consumida, ela será removida da fila. Um dos exemplo deste sistema é o sistema de processamento de pedidos. Onde apenas um processo pode processar a ordem.
Outro tipo de sistema de mensagens é o sistema de mensagens Pub-Sub que permite que um remetente envie a mensagem e um receptor para ler essa mensagem. Nas mensagens do Apache Kafka, um remetente é conhecido como produtor que publica mensagens e um receptor é conhecido como um consumidor que consome essa mensagem assinando -a. Um exemplo deste sistema é a sua TV a cabo que publica muitos canais, e qualquer pessoa pode se inscrever na escolha de canais e obtê -los sempre que seus canais assinados estiverem disponíveis.

## Termos fundamentais {#terms}
Antes de falarmos mais sobre a melhor fila de mensagens Apache Kafka, você deve entender alguns dos termos.
  *** Tópicos **: Um fluxo de mensagens pertencentes a uma categoria específico é chamado de tópico.
  *** Partição **: Os tópicos podem ter muitas partições, para que possam lidar com uma quantidade arbitrária de dados.
  *** Offset Partition **: Cada mensagem particionada possui um ID de sequência exclusivo chamado "Offset".
  *** REPLICAS DE PARTIÇÃO **: As réplicas são backups de uma partição. Eles são usados ​​para evitar a perda de dados.
  *** corretores **: são responsáveis ​​por manter os dados publicados.
  *** Kafka Cluster **: Kafka está tendo mais de um corretor é chamado de cluster kafka.
  *** Produtores **: são os editores das mensagens para um ou mais tópicos.
  *** Consumidores **: são o leitor dos dados dos corretores. Eles assinam vários tópicos e consomem sempre que houver uma mensagem no tópico.
  *** Líder **: O nó é responsável por todas as leituras e gravações para qualquer partição.
  *** seguidores **: Nó que segue as instruções do líder são chamadas de seguidores.

## Etapas de instalação {#STEPS}

### Etapa 1 - Verificando a instalação do Java
Espero que você já tenha instalado o Java em sua máquina agora, então você apenas o verifique usando o seguinte comando.
```
$ java -version
```
Se o Java for instalado com sucesso em sua máquina, você poderá ver a versão do Java instalado. Caso contrário, você deve primeiro instalar Java.

### Etapa 2 - Instalação da estrutura do Zookeeper
Visite o link a seguir e faça o download da versão mais recente do Zookeeper.
{{_LINE_46_}}
Depois de terminar com instalação e configuração, você pode iniciar o Zookeeper com o seguinte comando
```
$ bin/zkServer.sh start
```
E depois use o seguinte comando para se conectar ao Zookeeper da CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Uma vez conectado, você deve ver algo assim
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Etapa 3 - Instalação do Apache Kafka
Faça o download do mais recente Kafka Best Message Broker Lanke e extrai -o do seguinte URL
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Execute os seguintes comandos para iniciar todos os serviços na ordem correta:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Abra outra sessão do terminal e execute:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Crie um tópico {#Create}
Para escrever suas mensagens ou eventos em tópicos, você deve primeiro criar um tópico. Para criar um tópico, abra seu terminal e execute o seguinte comando:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Agora, criamos um tópico com o nome "Updates de clima", onde publicaremos informações sobre clima e os consumidores consumirão essas mensagens.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Escreva mensagem no tópico {#Write}
Execute o cliente do produtor de console para escrever alguns eventos em seu tópico. Por padrão, cada linha inserida resultará em um evento separado sendo gravado no tópico.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Leia as mensagens do tópico {#Read}
Abra outra sessão do terminal e execute o cliente do console do consumidor para ler os eventos que você acabou de criar:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Sinta -se à vontade para experimentar: por exemplo, volte para o terminal do seu produtor (etapa anterior) para escrever eventos adicionais e veja como os eventos aparecem imediatamente no seu terminal de consumo.

## Conclusão {#conclusion}
Neste tutorial, aprendemos sobre o básico do uso do Apache Kafka. Instalamos o serviço de fila Kafka e depois o configuramos. Também aprendemos a criar tópicos em Kafka, enviar mensagens para tópicos e como ler mensagens dos tópicos. Espero que este artigo tenha sido útil para você. Vamos nos encontrar no próximo artigo.
_O que a plataforma de streaming de eventos distribuída de código aberto você usa?. Você tem alguma dúvida?, Por favor_ [entre em contato] [9].

## Explore
Você pode encontrar links a seguir relevantes:
  * [Melhor Software de Mensagens de código aberto e de código aberto (MQ)] [10]
  * [Kafka vs Redis Pub-Sub, diferenças que você deve conhecer] [11]
  * [Introdução ao Redis Pub/Sub e como funciona?] [12]
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
