---
title: "NSQ vs Kafka | Quais são as principais diferenças?" 
seoTitle: "NSQ vs Kafka | Quais são as principais diferenças?" 
description: "A plataforma da fila de mensagens oferece uma maneira de se comunicar de forma assíncrona. Este artigo é sobre as diferenças do sistema de fila de mensagens NSQ e Kafka." 
date: Sat, 17 Jul 2021 03:54:59 +0000
author: yasir saeed
summary: "A plataforma da fila de mensagens oferece uma maneira de se comunicar de forma assíncrona, melhorando o desempenho e a escalabilidade. Este artigo é sobre comparação de NSQ e Kafka." 
url: /pt/nsq-vs-kafka-what-are-the-key-differences/
categories: ['Backup and Sync Software']
---

A plataforma da fila de mensagens oferece uma maneira de se comunicar de forma assíncrona, melhorando o desempenho e a escalabilidade. Este artigo é sobre comparação de NSQ e Kafka.

{{< figure align=center src="images/nsq-vs-kafka.png" alt="NSQ vs Kafka | Quais são as diferenças?|NSQ vs Kafka | Quais são as diferenças??">}}


## **Visão geral**
Os sistemas de mensagens distribuídos formam o núcleo do fluxo de big data, os aplicativos nativos em nuvem e a arquitetura de microsserviços à medida que o sistema aumenta. Há uma necessidade crescente de plataforma de fila de mensagens incorporada, confiável, escalável e tolerante a falhas, com baixa latência para aplicações em tempo real. A plataforma da fila de mensagens oferece maneira de se comunicar e coordenar de forma assíncrona, melhorando o desempenho, a confiabilidade e a escalabilidade.
Os sistemas de mensagens distribuídos agora são generalizados e estão em constante evolução. Existem vários sistemas modernos de fila de mensagens que surgiram com seus próprios prós e contras. Os melhores sistemas de fila de mensagens de código aberto formam a infraestrutura de middleware para transmissão de big data, micro-serviços e aplicativos baseados em nuvem. Isso se tornou problemático para as empresas de negócios decidirem qual sistema de mensagens é o mais adequado para uma aplicação específica. É necessário um entendimento profundo para decidir quais recursos de um sistema de mensagens atendem às necessidades de um aplicativo específico.
Este artigo do blog descreve a plataforma moderna da fila de mensagens NSQ vs Kafka. O artigo fornece informações sobre os sistemas de mensagens distribuídos NSQ vs Kafka, comparação de recursos para facilitar os usuários para tomar uma decisão informada para aplicação em tempo real e também abrir caminho para pesquisas e desenvolvimento futuros.
  * O que é Kafka?
  * O que é NSQ?
  * Comparação nsq vs kafka
  * Por que Kafka sobre NSQ?
  * Conclusão

## 1. O que é Kafka?
[Kafka] [1] é uma plataforma de streaming de eventos distribuída de código aberto, escrito na linguagem Scala desenvolvida pelo LinkedIn. Ele é publicado no sistema de mensagens de inscrição e tem a capacidade de lidar com um alto volume de mensagens. Kafka é “Sistema de Mensagens de Pub-Sub-Sub-Pub distribuído, durável, tolerante a falhas e de alto rendimento” e você pode fazer processamento em tempo real e em lote com Kafka. É um serviço de mensagens de log distribuído, particionado e replicado entre nós e executa na JVM. A melhor fila de mensagens Kafka é simples de usar e fornece a funcionalidade de um sistema de fila de mensagens, mas com um design exclusivo.
Os servidores Kafka da fila de mensagens distribuídos são conhecidos como corretores e formam um cluster kafka. Um Zookeeper é responsável pela coordenação entre todos os corretores em um cluster. O corretor de mensagens do Apache Kafka é usado por startups de unicórnio, saúde e principais organizações financeiras como LinkedIn, FB, Netflix, Bank of America, Chase Bank, Yahoo, Twitter e outros. O software de fila de mensagens de código aberto arquitetura Kafka consiste em produtores, consumidores, corretores, zoookeeper, tópicos, partições, registros e logs.

## 2. O que é NSQ? {#CE62}
[NSQ] [2] é uma plataforma de mensagens distribuída em tempo real, que é um sucessor da SimpleQueue. O desenvolvedor descreve o NSQ como "uma plataforma de mensagens distribuída em tempo real" construída por bitly. O corretor de mensagens de código aberto Softwarensq é uma plataforma de mensagens incrivelmente simples projetada e opera em uma escala, lidando com bilhões de mensagens por dia. É um sistema de mensagens tamponado tradicional que promove topologias descentralizadas sem pontos únicos de falha. Ele permite tolerância a falhas e alta disponibilidade, juntamente com um sistema de entrega de mensagens confiável.
O NSQ oferece alta topologia de disponibilidade que minimiza o SPOF. Aumenta a disponibilidade, configurando várias instâncias para NSQD e NSQLookUpd. Além disso, garante que a mensagem seja entregue pelo menos uma vez com certa grau de persistência e é fácil de configurar. O melhor corretor de mensagens NSQ é mais flexível e suporta persistência de mensagens. Possui um painel de administração brilhante. O sistema de mensagens da fila NSQ possui 19,9k Github Stars e 2,6k Github Forks.

## 3. Comparação nsq vs kafka {#ce62}
NSQ e Kafka ambos a fila de mensagens têm uma maneira única de definir sua arquitetura e como o corretor funciona, mas em vários pontos, isso pode ser uma consideração em qual plataforma você gostaria de preferir:
  * Disponibilidade
Se o servidor NSQD travar sem graça, poderá haver uma possível perda de dados. A Kafka suporta a replicação e a partição incorporadas, o que a torna uma maior disponibilidade e mais confiabilidade. Devido ao fator de replicação n, Kafka pode tolerar falhas no servidor N-1 sem perder registros de dados.
  * Persistência
O NSQ excluirá a mensagem se o consumidor já tiver enviado o sinal de acabamento para a mensagem.
Kafka oferece persistência que parece extremamente rara na fila de mensagens distribuída. As mensagens persistem após um certo tempo ou tamanho especificado a partir do momento em que são entregues.
  * Mensagens de repetição
O NSQ fornece arquivamento simples de mensagens mortas, mas não suporta nenhuma capacidade de reprodução nativa.
Por outro lado, a Kafka possui o sistema de armazenamento de persistência dos registros e fornece a capacidade de reproduzir a mensagem eficaz repetidamente, desde que ela seja armazenada no sistema.
  * Ordem da mensagem
Como várias instâncias de NSQD não se comunicam e há sempre a possibilidade de uma mensagem não ordenada. Enquanto Kafka mantém cada uma de suas partições com uma sequência estruturada de registros. Kafka sempre fornecerá uma ordem exata das mensagens em uma partição.

## 4. Por que Kafka sobre NSQ? {#CE62}
O alto rendimento é a principal razão pela qual os desenvolvedores consideram Kafka sobre os concorrentes, enquanto que em Golang foi declarado como o fator-chave na escolha da fila de mensagens NSQ MQ. NSQ e KAFKA são serviços de fila de mensagens. Mas a diferença primária é que Kafka é estruturado como um log ordenado, mas o NSQ não é. A Kafka é conhecida por suas garantias estritas e confiabilidade em relação à perda de dados, enquanto o NSQ é uma fila de mensagens mais simples e fácil de implantar.
NSQ com 20k Github Stars e 2,6k garfos no Github parecem ser mais populares do que Kafka com 19,4k Github Stars e 10,3k Github Forks. De acordo com a comunidade Stackshare, Kafka tem uma aprovação mais ampla, sendo mencionada em 509 pilhas de empresas e 470 desenvolvedores; Comparado ao NSQ, listado em 21 pilhas de empresas e 8 pilhas de desenvolvedores.

## Conclusão: {#4a1a}
Este artigo forneceu uma breve comparação sobre o trabalho de estruturas de mensagens populares - NSQ e Kafka. Comparações de recursos do artigo girou em torno da taxa de transferência da fila de mensagens, persistência, confiabilidade, latência, escalabilidade e disponibilidade. Esses parâmetros são importantes para decidir a adequação de uma estrutura para um aplicativo em tempo real. Portanto, é um bom artigo para um entendimento completo escolher a estrutura certa. O software da fila de mensagens é a espinha dorsal da futura tecnologia no mercado que pode lidar com alto processamento. Em nossos próximos tutoriais, discutiremos sobre tópicos mais interessantes relacionados às plataformas de mensagens de código aberto.
Você pode se juntar a nós no [Twitter] [3], [LinkedIn] [4] e nossa página [Facebook] [5]. Qual plataforma de fila de mensagens você usa online?. Se você tiver alguma dúvida, por favor [entre em contato] [6].

## Explore:
Também temos vários outros artigos relacionados ao gerenciamento diário do seu servidor.
  * [Sistema de filas apoiado por Redis para processamento de fundo] [7]
  * [Sistema de processamento de empregos mais rápido de fundo] [8]
  * [Como configurar o Apache como um proxy reverso para o Ubuntu/Debian] [9]
  * [Como instalar e proteger o phpmyadmin com nginx no Ubuntu] [10]
  * [Seguro e criptografar Nginx com Let's Encrypt no Ubuntu 20.04] [11]
[1]: https://kafka.apache.org/
[2]: https://nsq.io/
[3]: https://twitter.com/containerize_co
[4]: https://www.linkedin.com/company/containerize/
[5]: http://facebook.com/containerize
[6]: mailto:yasir.saeed@aspose.com
[7]: https://products.containerize.com/message-queue-software/resque/
[8]: https://products.containerize.com/message-queue-software/sidekiq/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
