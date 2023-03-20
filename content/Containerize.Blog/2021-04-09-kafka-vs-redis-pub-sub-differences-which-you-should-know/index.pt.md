---
title: "Kafka vs redis pub-sub, diferenças que você deve conhecer" 
seoTitle: "Kafka vs redis pub-sub, diferenças que você deve conhecer" 
description: "Se você está procurando ferramentas para gerenciar uma grande quantidade de dados e confundir entre Kafka e Redis. Este artigo Kafka vs Redis Pub-Sub o ajudará." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis e Kafka são duas ferramentas diferentes que estão fazendo trabalhos semelhantes à sua maneira. A comparação Kafka vs Redis fornece informações que você deve saber." 
url: /pt/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs redis pub sub">}}


## Redis e Kafka são duas ferramentas diferentes que estão fazendo trabalhos semelhantes à sua maneira. A comparação Kafka vs Redis fornece informações que você deve saber.
Em nossa série de artigos sobre “Redis”, aprendemos sobre o [básico de Redis][1], então exploramos [como o Redis Pub/Sub Works][2] e como isso compete com os bancos de dados NOSQL. Avançando em nossa série de hoje, compararemos Redis com a Kafka, que é um de seus concorrentes em várias tarefas. Neste artigo, Kafka vs Redis Pub-Sub, exploraremos o que Kafka é como é diferente de Redis e quais são as semelhanças nelas. Então vamos começar.
  * O que é Kafka?
  * O que é Redis?
  * Quais são as principais diferenças?
  * Quando usar qual?
  * Conclusão

## O que é Kafka?
O Apache Kafka é uma plataforma de fluxo de eventos distribuída de código aberto. É usado para pipelines de dados de alto desempenho e análise de streaming. Kafka atua como um [Sistema de Mensagens de Subscrição de Publish][3]. Com isso, você pode processar novos dados, conforme gerado em alta velocidade e, além disso, também podem salvá -los em algum banco de dados.
Kafka é um sistema distribuído que consiste em servidores ** ** e ** clientes **. Ele pode ser implantado em hardware de metal nu, máquinas virtuais e contêineres em ambientes no local, bem como em ambientes em nuvem.

## O que é Redis?
A Redis é uma loja de valores-chave avançada e de código aberto. Ele suporta vários tipos de dados: strings, hashes, listas, conjuntos e conjuntos classificados. É por isso que geralmente é chamado de servidor de estrutura de dados.
Redis também é considerado como um banco de dados NoSQL. Para uma discussão detalhada sobre ele Redis e como ele funciona, você pode se referir ao nosso artigo "[Um guia para iniciantes para Redis In Memory Database][1]".

## Quais são as principais diferenças?
** Redis ** O Pub-Sub é principalmente como um sistema de incêndio e esquecimento, onde todas as mensagens que você produziu serão entregues a todos os consumidores de uma só vez e os dados não serão armazenados em nenhum lugar. Você tem limitações na memória em relação a Redis. Além disso, o número de produtores e consumidores pode afetar o desempenho do Redis.
Por outro lado, ** Kafka ** é um torneio distribuído de alta taxa de transferência que pode ser usado como uma fila. Ele também fornece persistência para as mensagens enviadas através da fila.
** Redis ** suporta ** Push Basey ** Entrega de mensagens. Isso significa que toda mensagem enviada para o Redis será entregue automaticamente a todos os assinantes.
** Kafka **, no entanto, suporta ** entrega ** de mensagens baseadas em puxar. As mensagens de significado publicadas para Kafka não são distribuídas aos assinantes automaticamente. Em vez disso, os consumidores pedem as mensagens quando estão prontos para consumir essas mensagens.
** Redis ** Não armazena mensagens, as mensagens são entregues de uma vez a todos os consumidores e depois removidas. No entanto, ** Kafka ** sendo um log, você sempre tem mensagens. Você pode monitorar isso definindo uma política de retenção, digamos 7 dias ** retenção **.

## Quando usar qual?

### Redis
  * Se você deseja um tipo de sistema de incêndio e esquecimento, onde todas as mensagens que você produz são entregues instantaneamente aos consumidores.
  *Se ** Speed ​​** estiver mais preocupado.
  *Se ** armazenamento ** não for importante e você não deseja que seu sistema mantenha a mensagem que foi enviada
  * A quantidade de dados que serão tratados não é enorme.

### kafka
  *Se você quiser ** confiabilidade **.
  * Se você deseja que seu sistema tenha uma cópia de mensagens que foram enviadas mesmo após o consumo.
  *Se ** Speed ​​** não é uma grande preocupação.
  * E o tamanho dos seus dados é enorme.

## Conclusão
Neste tutorial Kafka vs Redis Pub-Sub, exploramos Kafka e Redis. Quais são suas diferenças e semelhanças? Também aprendemos quando você deve Redis e quando é bom usar o Kafka. Em nossos próximos tutoriais, exploraremos mais sobre Kafka e análise aprofundada.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#o que
