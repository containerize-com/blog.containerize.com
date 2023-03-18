---
title: "O que é multitenância? | Por que uma abordagem de vários inquilinos?" 
seoTitle: "O que é multitenância? | Por que uma abordagem de vários inquilinos?" 
description: "O que é multitenância? Siga esta postagem do blog para aprender o conceito real por trás da multi-cinema e comece a criar aplicativos multi-inquilinos escaláveis." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "Projete uma arquitetura de aplicativos com vários inquilinos e atenda aos requisitos do seu usuário com eficiência. Vamos explorar como a multitenância permite criar software escalável." 
url: /pt/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## projete uma arquitetura de aplicativos com vários tenantes e atenda aos requisitos do seu usuário com eficiência. Vamos explorar como a multitenância permite criar um software escalável.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## Visão geral
Bem -vindo a outra postagem no blog na categoria de [programação] [1]. Vamos discutir uma arquitetura de aplicativos com vários inquilinos. De fato, [contendeRize.com] [2] possui uma ampla gama de aplicativos multi-inquilinos em sua pilha de produtos de código aberto. As aplicações multi-inquilinos de código aberto incluem [form.io] [3], [Botpress] [4] e muito mais. Além disso, há [documentação] completa [5] disponível em relação à arquitetura, implantação, desenvolvimento e uso desses softwares de código aberto. A razão por trás da redação deste artigo é dar uma compreensão do conceito por trás da multiestância no desenvolvimento de software. Então, vamos descobrir**O que é multitenância?**Também passaremos pelos prós e contras da multitenância e arquitetura multi-inquilibrada versus um inquilino único.
Os seguintes pontos serão discutidos neste post:
  * [O que é multitenância? Multi-inquilino vs single-intant] [6]
  * [Tipos de arquitetura de aplicativos multi-inquilinos] [7]
  * [Benefícios comerciais do aplicativo multi-inquilino] [8]
  * [Desvantagens na multi-quinância] [9]

## O que é multitenância? Multi-inquilino vs único inquilino {#o que é multitenancy-multi-tenant-vs-single-tenant}
Multitenância refere-se a uma única instância do servidor que atende a vários inquilinos particularmente conhecidos. Sempre que você se depara com um software de vários inquilinos, basta dizer ao seu cérebro que este software está executando uma única instância de um servidor compartilhado e vários inquilinos (clientes) estão conectados a essa instância com diferentes marcas.
Por exemplo, o software criado para uma universidade atende a diferentes departamentos com diferentes marcas de front-end e dados do programa. Basicamente, há uma única instância do servidor em execução e atendendo a todos os inquilinos. Além disso, há separação de dados e privacidade de dados entre todos os inquilinos. Além disso, todo inquilino tem sua própria lógica de negócios e busca e armazena seus dados em um local único, mas privado/isolado.

{{< figure align=center src="images/multi-tenant-1.png" alt="Arquitetura de vários inquilinos">}}

Agora, vamos dar uma rápida olhada na arquitetura de inquilino único. Na arquitetura de inquilino único, há uma instância do servidor por inquilino. Novamente, vamos dar um exemplo de software universitário. A abordagem de inquilino único refere-se a uma instância do servidor por departamento e o número de instâncias depende do número de departamentos (inquilinos).

{{< figure align=center src="images/single-tenant-2.png" alt="Arquitetura de inquilino único">}}


## Tipos de arquitetura de aplicativos multi-tenant {#Type-of-Multi-Tenant-Aplicação-Arquitetura}
Até agora, você tem uma compreensão da multiestância e agora passaremos por seus vários tipos.
* * Um banco de dados-uma instância do aplicativo**: Essa abordagem é bastante popular e tem sido amplamente usada para criar aplicativos com vários inquilinos. De acordo com essa abordagem, existe uma instância de aplicativo em execução com um único banco de dados. Além disso, há um esquema compartilhado e os dados do inquilino são armazenados em um único local contra seu ID exclusivo.
* * Múltiplos bancos de dados-uma instância do aplicativo:**Nesta arquitetura de aplicativos com vários inquilinos, apenas uma instância do aplicativo é executada com vários bancos de dados. Cada inquilino possui seu próprio esquema de banco de dados, onde todas as informações são salvas de acordo com cada inquilino separadamente.
* * Múltiplos bancos de dados - várias instâncias do aplicativo**: A terceira abordagem refere -se à execução de várias instâncias de servidor, juntamente com vários bancos de dados. Não há nada compartilhado e cada inquilino tem isolamento completo e não há dependência entre os inquilinos.

## Benefícios comerciais do aplicativo multi-tenont {#Business-Benefits-of-Multi-Tenant-App}
Nesta seção, passaremos por alguns benefícios proeminentes de optar por multitenância. Embora possamos discutir há muito tempo as vantagens, mas vamos ver os seguintes pontos:
* * Escalabilidade**: É fácil escalar uma arquitetura de vários inquilinos. Você pode escalar horizontal ou verticalmente, independentemente do tipo que você escolheu.
* * Custo-efetivo**: Optar pela multitenância economiza seus custos operacionais. Existem recursos compartilhados, por isso é sempre econômico ampliar os recursos.
* * Eficiência e flexibilidade**: Em um ambiente multitenant, você alcança eficiência em desenvolvimento e implantação. Por exemplo, você pode executar um script em um esquema de banco de dados compartilhado para atualizar todos os inquilinos.
* * Melhor gerenciamento de recursos**: Adicionar e remover recursos é direto. Além disso, essa arquitetura oferece infraestrutura aprimorada e bem gerenciada. Além disso, todo inquilino é privado e seguro e tem acesso a um banco de dados compartilhado/não compartilhado.

## desvantagens na multi-tenancidade {#Dawrabacks-in-Multi-Tenancy}
O objetivo desta postagem do blog é dar uma boa sensação de**arquitetura de vários inquilinos.
* * Mecanismo de autenticação complexo**: Devido à natureza compartilhada da alocação de recursos na multitenância, existem protocolos rigorosos para pontos de acesso a dados.
* * Avaria do servidor:**É um ponto importante a ser considerado ao selecionar a arquitetura de aplicativos com vários inquilinos. Todos os inquilinos se tornam não funcionais sempre que o servidor está baixo devido a qualquer motivo.
* * Risco de privacidade**: Em uma arquitetura de vários inquilinos, há um alto risco de violação de segurança. De fato, os dados de todos os inquilinos são armazenados em um banco de dados compartilhado, para que qualquer invasão de terceiros possa resultar em corrupção ou roubo de dados.

## Conclusão
Estamos encerrando esta postagem do blog aqui. Este artigo tem a resposta para suas perguntas, como**O que é multitenância**? Além disso, também exploramos**infraestrutura**multi-inquilino versus single-in-tenant**. Além disso, este guia o ajudará a optar por arquitetura de aplicativos com vários inquilinos ou um único inquilino. Acima de tudo, a multitenância é a primeira opção se você estiver construindo um SaaS. Existem outras postagens interessantes do blog que você pode encontrar na seção "Veja também", que fornecerá as últimas informações sobre o mundo da tecnologia.
Finalmente, [contenderize.com] [2] está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook] [10], [LinkedIn] [11] e [Twitter] [12].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum] [13].

## Perguntas frequentes
* * O que é multi-inquilino com exemplo?**
Por favor, visite este [link] [6] para saber o que é multitenância. Existem detalhes junto com exemplos.
* * Qual é o significado da arquitetura de vários inquilinos?**
A**Arquitetura de aplicativos com vários inquilinos**significa uma única instância de um servidor serve vários inquilinos (clientes). Navegue até este [link] [7] para obter mais detalhes.

## Veja também
  * [O que é AI generativo | Inteligência artificial generativa] [14]
  * [Como integrar ChatGPT com o Google Sheets] [15]
  * [Como usar o ChatGPT no vscode | O Código de Extensão do Vscode GPT] [16]
  * [O que é o Openai Chatbot GPT-3 | Chatgpt Uma revolução da IA] [17]
  * [Uma introdução à inteligência artificial | O que é ai?] [18]
[1]: https://blog.containerize.com/category/programming/
[2]: https://www.containerize.com/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/live-chat/botpress/
[5]: https://products.containerize.com/
[6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
[7]: #Types-of-Multi-Tenant-Application-Architecture
[8]: #Business-Benefits-of-Multi-Tenant-App
[9]: #Drawbacks-in-Multi-Tenancy
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
