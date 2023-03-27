---
title: "Guia para iniciantes para o banco de dados Redis In Memory" 
seoTitle: "Guia para iniciantes para o banco de dados Redis In Memory" 
description: "O banco de dados Redis In Memory é uma loja de valor-chave de código aberto. Também é chamado de banco de dados NoSQL. Este tutorial de Redis o orienta sobre os principais conceitos de Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Este tutorial ajuda você a aprender sobre o Redis In Memory Database. É de código aberto e também chamado de loja de valor-chave, que é um tipo de banco de dados não relacional." 
url: /pt/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Este tutorial ajuda você a aprender sobre o banco de dados Redis In Memory. É de código aberto e também chamado de loja de valor-chave, que é um tipo de banco de dados não relacional.

{{< figure align=center src="images/redis-in-memory-database.png" alt="Banco de dados em memória Redis">}}

 **Redis** Na verdade, significa “ **re** mote **di** ccionaly** s**erver”. O banco de dados Redis é uma loja de valor-chave avançado e de código aberto. Ele suporta vários tipos de dados: strings, hashes, listas, conjuntos e conjuntos classificados. É por isso que geralmente é chamado de servidor de estrutura de dados. Redis está escrito em C. Este tutorial de Redis fornece um bom entendimento dos conceitos de banco de dados Redis In Memory.
*  **[O que é um banco de dados NoSQL][1]**  
*  **[Redis é um banco de dados NoSQL?][2]**  
*  **[Quando usar Redis?][3]**  
*  **[Redis vs outras lojas de valor-chave][4]**  
*  **[Instale Redis no Ubuntu][5]**  
*  **[Conclusão][6]**  

## O que é um banco de dados NoSQL {#nosql}

Os bancos de dados NoSQL se tornaram muito populares. As grandes empresas confiam nelas para armazenar centenas de petabytes de dados e executar milhões de consultas por segundo. Mas o que é um banco de dados NoSQL? Como funciona e por que é muito melhor do que os bancos de dados relacionais tradicionais? Vamos começar explicando rapidamente o problema com bancos de dados relacionais como MySQL, MariaDB, SQL Server.
Os bancos de dados relacionais são criados para armazenar dados relacionais da maneira mais eficiente possível. Você pode ter uma tabela para clientes, pedidos e produtos, vinculando -se logicamente. Essa organização apertada é ótima para gerenciar seus dados, mas tem um custo de baixa escalabilidade. Eles precisam manter esses relacionamentos, e esse é um processo intensivo, exigindo muita memória e poder de computação.
Enquanto os bancos de dados NOSQL podem escalar vertical e horizontalmente. Você pode comparar isso com um edifício, a escala verticalmente significa adicionar mais pisos a um edifício existente, enquanto a escala horizontal significa adicionar mais edifícios. A modificação do esquema é um dos maiores desafios nos bancos de dados relacionais. Os bancos de dados NoSQL não exigem um esquema fixo, o que significa escalar facilmente com grandes quantidades de dados e cargas altas do usuário.

## Redis é um banco de dados NoSQL? {#isnosql}

Esta é uma das perguntas mais populares feitas em toda a comunidade de desenvolvedores na Internet. A resposta simples é sim. Redis é um armazenamento de estrutura de dados de memória de código aberto.
Na verdade, existem 4 tipos diferentes de tipos de banco de dados NoSQL, que incluem: bancos de dados de documentos, lojas de valor-chave, lojas de coluna ampla e lojas de gráficos. Portanto, o servidor Redis In Memory Database, sendo uma loja de valores-chave na categoria NOSQL Banco de Dados.

## Quando usar o Redis?  {#when}

Toda tecnologia tem seus méritos e deméritos. Portanto, com tantas opções disponíveis nos bancos de dados. Torna -se importante entender quando e quando não usar uma tecnologia específica. Sempre escolha a ferramenta certa para o trabalho.
Para dados estáveis, previsíveis e relacionais, escolha um banco de dados relacional. Para dados temporários e altamente dinâmicos, escolha um banco de dados NoSQL. O esquema para o banco de dados é um dos maiores desafios nos bancos de dados relacionais e pode levar uma eternidade em um grande banco de dados relacional.
Se você possui dados altamente dinâmicos que mudam com frequência e não precisará fazer consultas complexas, que deseja armazenar os dados como pares de valor-chave, o Redis pode ser uma escolha potencialmente boa. Se você precisar de um banco de dados orientado a documentos mais destacado que permita executar consultas de alcance, pesquisas regulares de expressão, indexação e MapReduce, você deve verificar o MongoDB, o CouchDB ou o similar.
Alguns exemplos de casos de uso do banco de dados Redis In Memory são os seguintes:
*  **Access Logger**  : Quando você precisa registrar muitas atividades em ritmo acelerado, o Redis é uma boa solução.
*  **Manter contadores**  : Você pode usar o Redis para manter diferentes contagens, por exemplo Baixar contadores
*  **Presença do usuário**  : Devido à velocidade, você pode usá -lo para armazenar o status "online / offline" do usuário.
*  **Filas**  : Você pode usar o Redis para manter filas temporárias para processar trabalhos de segundo plano.

## Redis vs outras lojas de valor-chave {#other}

O banco de dados Redis In Memory é muito rápido e pode executar cerca de 110000 conjuntos por segundo, cerca de 81000 recebe por segundo. Ele suporta vários tipos de dados: strings, hashes, listas, conjuntos e conjuntos classificados. Redis é um thread único, o que permite que ele seja compatível com ácido (atomicidade, consistência, isolamento e durabilidade). Outros bancos de dados NoSQL geralmente não fornecem conformidade com ácido ou fornecem parcialmente.

## Instale Redis no Ubuntu {#install}

Para instalar o Redis no Ubuntu, vá para o terminal e digite os seguintes comandos
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
O comando a seguir iniciará o servidor Redis
```
$ redis-server
```
Para verificar se o servidor Redis está em execução, você pode usar o comando  **Redis-cli**  para se conectar a ele.
```
$ redis-cli 
```
Este comando fornecerá a seguinte saída, o que significa que o servidor está em execução e agora você está conectado.
```
redis 127.0.0.1:6379>
```
Agora digite o seguinte comando  **ping** e você receberá uma resposta do servidor como **pong**  .
```
redis 127.0.0.1:6379> ping
PONG
```

## Conclusão {#conclusion}

Neste tutorial de Redis, aprendemos sobre o Redis In Memory Database. Exploramos a principal diferença entre os bancos de dados relacionais e não relacionais (NOSQL). Além disso, aprendi quando devemos usar o Redis e quais são os casos de melhor uso. Este tutorial faz parte de uma série de tutoriais em andamento. Nos próximos artigos, exploraremos ainda mais os casos de uso específicos da Redis.



 [1]: #nosql
 [2]: #isnosql
 [3]: #when
 [4]: #other
 [5]: #install
 [6]: #conclusion
