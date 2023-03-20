---
title: "Kubernetes Multi-Tenância e Arquitetura baseada em contêineres" 
seoTitle: "Arquitetura baseada em múltiplas liternâncias e contêineres" 
description: "Siga este guia para aprender a obter multi-ingestão em uma arquitetura baseada em contêineres. Kubernetes Multi-Tenância refere-se a recursos compartilhados" 
date: 2023-03-01T00:00:00+00:00
author: muhammadmustafa
summary: "Siga este guia para aprender a obter multi-ingestão em uma arquitetura baseada em contêineres. Kubernetes Multi-Tenância refere-se a recursos compartilhados" 
url: /pt/kubernetes-multi-tenancy-container-based-architecture/
categories: ['Programming']
---

Os recursos do cluster de Kubernetes Kubernetes são compartilhados entre todos os inquilinos. Implemente a abordagem de hosts de contêineres com vários inquilinos para implantar aplicativos otimizados e de economia de recursos.

{{< figure align=center src="images/Kubernetes Multi-Tenancy & Container-Based Architecture.png" alt="Kubernetes Multi-Tenância e Arquitetura baseada em contêineres " caption="Kubernetes Multi-Tenancy & Container-Based Architecture" >}}


## Visão geral
Estamos aqui com outra postagem emocionante do blog na série de multi-cinemas. Em nosso [Artigo] anterior [1], abordamos o conceito básico por trás dos aplicativos multi-inquilinos, os prós e contras e os tipos de arquitetura de vários inquilinos. Como é hora de atender a vários usuários/inquilinos, gerenciar e utilizar recursos de maneira eficiente. Portanto, a multiestância é a abordagem principal para construir uma infraestrutura que lida com vários clientes/inquilinos simultaneamente. No entanto, nossa mais recente [post do blog][2] demonstrou arquitetura sem servidor, contêinerização e [Kubernetes][3]. Portanto, neste artigo, exploraremos a arquitetura baseada em multi-redes e contêineres. Além disso, veremos como você pode obter multi-ingestão em seus aplicativos [contêineres][4].
Os seguintes pontos devem ser abordados neste artigo:
***[hosts de contêineres multi-inquilinos][5]**
***[Kubernetes Multi-Tenância][6]**

## hosts de contêineres multi-tenant {#multi-tenant-container-hosts}
A implantação de aplicativos com vários inquilinos é uma tarefa crítica quando se trata de plataformas de hospedagem. Todos vocês sabem que os contêineres são leves em comparação com as máquinas virtuais. A implantação de aplicativos leva apenas alguns milissegundos para concluir a implantação, enquanto que poderia ser uma questão de segundos a minutos no caso de máquinas virtuais.
No entanto, a obtenção de multiestância em uma arquitetura baseada em contêineres é bastante direta. Cada inquilino é hospedado por um contêiner separado com isolamento completo e privacidade de dados. Isso significa que o número de contêineres depende do número de inquilinos. Além disso, as seguintes ferramentas serão usadas para alcançar esta abordagem:
  * Docker e Docker compostos
  * Nginx
  * Instância do banco de dados
  * Servidor de aplicação
Você usará o Docker para criar a imagem que é um modelo para construir o contêiner. Além disso, você usará o Docker Compose para aumentar vários hosts de contêineres. Além disso, você usará o Nginx para redirecionar as solicitações recebidas para o inquilino adequado. Portanto, todo host de contêiner contém as instâncias de aplicativo e banco de dados em execução. Este**hosts de contêineres**multi-inquilinos**não é intensivo de recursos e oferece robustez no gerenciamento de vários inquilinos e em garantir que o isolamento e a segurança dos dados.

## kubernetes multi-tenancy {#kubernetes-multi-tenancy-}
A Kubernetes contém muitos componentes em sua arquitetura, como nós, cluster, plano de controle e muito mais. Basicamente, não há multi-ingestão embutida em Kubernetes, mas você pode alcançá-la. Portanto, existem vários aplicativos/inquilinos em execução e compartilhando o cluster Kubernetes e o plano de controle. Por outro lado, em aplicativos de inauguração, uma única instância do aplicativo ocupa todo o cluster Kubernetes.

{{< figure align=center src="images/kubernetes.svg" alt="Kubernetes Multi-Tenância" >}}

Além disso, ir um pouco mais profundo nos fará aprender sobre a hospedagem de inquilinos no cluster de Kubernetes. Cada inquilino está associado a um espaço para nome de Kubernetes que organiza o código e evita colisões de nomes. Existem três abordagens para alcançar a multi-cinema em Kubernetes. O primeiro é o namespace como um serviço, o segundo é o cluster como um serviço, e o terceiro é o controle de planos de controle como um serviço.
FAIXO FALANDO, a Kubernetes Multi-Tenância oferece uma solução econômica para a organização que lida com várias interfaces de usuário. De fato, você pode enfrentar alguns desafios, como gerenciamento de usuários e melhor gerenciamento de recursos. No entanto, depende totalmente do caso de uso e da natureza do aplicativo que você está buscando.

## Conclusão
Isso nos leva ao final deste post do blog. Passamos por**Kubernetes de multi-redação e arquitetura baseada em contêineres**para alcançar multi-literidade. Além disso, existem muitas bibliotecas de terceiros disponíveis para preencher os aplicativos de vários inquilinos com o Kubernetes. Esta postagem do blog ajudará você a entender o conceito de**hosts de contêineres de vários inquilinos**. Existem outras postagens interessantes do blog que você pode encontrar na seção "Veja também".

## Conecte-se conosco
Por fim, [contémize.com][7] oferece posts em andamento em vários produtos e tópicos de código aberto. Você pode permanecer no loop, seguindo -nos em nossas plataformas de mídia social, incluindo [Facebook][8], [LinkedIn][9] e [Twitter][10].

## Faça uma pergunta
Você pode nos informar sobre suas perguntas ou consultas em nosso [fórum][11].

## Perguntas frequentes
**O que é multi-ingestão em Kubernetes?**?
Siga este [link][6] para conhecer o Kubernetes Multi-Tenância.
**O que é um cluster multi-inquilino vs single-intant?**
Em um cluster multi-inquilino, todos os inquilinos/clientes compartilham o cluster Kubernetes, enquanto, em um cluster de inquilino único, há um cluster separado em execução para cada inquilino.

## Veja também
  * [O que é computação sem servidor? | Arquitetura sem servidor][12]
  * [O que é multitenância? | Por que uma abordagem de vários inquilinos?][13]
  * [O que é AI generativo | Inteligência artificial generativa][14]
  * [Como integrar ChatGPT com o Google Sheets][15]
  * [Como usar o ChatGPT no vscode | O Código de Extensão do Vscode GPT][16]
  * [O que é o Openai Chatbot GPT-3 | Chatgpt Uma revolução da IA][17]
  * [Uma introdução à inteligência artificial | O que é ai?][18]

  
[1]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[2]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/#Serverless-vs-Containers
[3]: https://products.containerize.com/devops/kubernetes/
[4]: https://www.containerize.com/
[5]: #Multi-Tenant-container-hosts
[6]: #Kubernetes-Multi-Tenancy-
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
