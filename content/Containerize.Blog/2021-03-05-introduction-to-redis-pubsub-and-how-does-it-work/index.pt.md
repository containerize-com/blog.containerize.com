---
title: "Introdução ao Redis Pub/Sub e como funciona?" 
seoTitle: "Introdução ao Redis Pub/Sub e como funciona?" 
description: "O Redis Pub/Sub é um serviço de mensagens flexível, confiável e em tempo real para aplicativos independentes para publicar e assinar eventos assíncronos." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "O Redis Pub/Sub implementa um sistema de mensagens em tempo real, onde os editores publicam em um canal/tópico e vários clientes podem se inscrever nesse canal/tópico." 
url: /pt/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub/Sub implementa um sistema de mensagens em tempo real, onde os editores publicam em um canal/tópico e vários clientes podem se inscrever nesse canal/tópico.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub Sub">}}

Em nosso último tutorial "**[um guia para iniciantes para o Redis In Memory Database][1]** " Aprendemos sobre o Redis como um banco de dados na memória. E como isso compete com os bancos de dados NoSQL. Também aprendemos onde usar o Redis e onde seu uso não é ideal. Agora, com base nessa base de conhecimento, neste tutorial aprenderemos sobre o Redis Pub/Sub, como funciona e qual é o melhor uso do sistema Redis Publish/Subscreve. Vamos começar.
  ***[O que é padrão de publicação/inscrição?][2]** 
  ***[Como o pub/sub -funciona?][3]** 
  ***[Quando você deve usar o pub/sub?][4]** 
  ***[Como usar o Redis Pub/sub?][5]** 
  ***[Conclusão][6]** 

## O que é padrão de publicação/inscrição?   {#o que}
Publicar/subscrever ou em curto pub/sub é um padrão de mensagens em que o remetente e o destinatário das mensagens não trocam essas mensagens diretamente. Em vez disso, o remetente da mensagem o publica em um canal/tópico. E todos aqueles que desejam receber essas mensagens assinarão o canal/tópico. Então, isso foi mais uma explicação técnica. Em nossa vida diária, usamos esse modelo de publicação de inscrição com bastante frequência enquanto usamos plataformas de mídia social como YouTube, Twitter, Facebook ou Instagram. Onde os produtores de conteúdo produzem o conteúdo e os interessados ​​seguirão / assinarão o conteúdo. Então é isso que exatamente o Pub/Sub Pattern faz na arquitetura de software também.

## Como o pub/sub funciona?   {#como}
Na ênfase do desenvolvimento de software na reutilização, é muito alta. E todos os padrões de design são baseados na construção de componentes ou módulos reutilizáveis. Então, para entender o pub/sub, você primeiro precisa olhar de onde essa idéia veio e como os desenvolvedores a encontraram como um padrão.
À medida que as arquiteturas de software evoluíram e mais baseadas em módulos se tornaram, mais comunicação / mensagens aumentou entre os módulos e componentes. Como, pense em um módulo como uma unidade de processamento que pega alguma entrada e fornece alguma saída. E cada entrada é na verdade uma mensagem na qual a unidade de processamento processa e gera outra mensagem como saída. Que será uma entrada para algum outro módulo. Portanto, esse aumento das mensagens exigia atenção especial, para ter aplicativos escaláveis, havia um requisito de que módulos e componentes possam funcionar de forma independente sem dependências. Portanto, veio o padrão de publicação/assinatura.
Em muitos sistemas pub/subsidiários, os editores postam mensagens para um corretor de mensagens intermediário ou barramento de eventos e assinantes registram assinaturas com esse corretor, deixando o corretor executar a filtragem. O corretor normalmente executa uma função de loja e encaminhamento para rotear mensagens de editores para assinantes. Além disso, o corretor pode priorizar as mensagens em uma fila antes do roteamento.

## **Quando você deve usar o pub/sub?**    {#when}
Os aplicativos de bate -papo são um caso de uso clássico do Pub/Sub Pattern. Em um aplicativo de bate -papo, os participantes podem se inscrever nas salas de bate -papo que possuem um pub/sub tópico designado. Quando um usuário envia uma mensagem para uma sala de bate -papo, a instância do aplicativo de bate -papo publica a mensagem no tópico da sala de bate -papo. Os assinantes do tópico recebem a mensagem.
Aplicativos de serviço de serviço / fila de mensagens ou processamento de mensagens também podem usar o Pub / Sub Pattern. Onde todos aqueles que desejam uma tarefa específica realizados publicarão a mensagem em uma fila e unidades de processamento que se inscreveram nessa fila receberão a mensagem para processar o trabalho.
Vamos discutir algumas das vantagens do Pub/Sub Pattern
  * Acoplamento frouxo entre componentes do sistema
  * Melhor visão do fluxo de trabalho em todo o sistema
  * Ativa a integração melhor e mais rápida
  * Garante uma escalabilidade mais suave
  * Confiabilidade consistente garantida
  * Constrói elasticidade
  * Modularização do software
  * Desenvolvimento de software agnóstico de idioma
  * A clareza na lógica de negócios
  * Melhora a capacidade de resposta

## Como usar o Redis Pub/sub   {#Redis-Pubsub}
Para a instalação do Redis, você pode consultar meu [último tutorial][1]. Este exemplo explica como funciona o conceito de editor e assinante. No exemplo a seguir, um cliente assina um canal chamado 'Redischat'.
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Agora, dois clientes estão publicando as mensagens no mesmo canal chamado 'Redischat' e o cliente de assinatura acima está recebendo mensagens.
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

## Conclusão   {#conclusion}
Neste tutorial, aprendemos sobre o padrão de design de publicação/assinatura. E explorou como o Pub/sub Redis funciona. Também exploramos quais são os casos de melhor uso de Pub/sub Redis, mensagens em tempo real. No meu próximo tutorial, exploraremos ainda mais os redis e explicaremos como podemos usar o Redis Pub/Sub com o Node.js para criar um aplicativo de bate-papo em tempo real.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
