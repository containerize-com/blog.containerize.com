---
title: "Kubernetes vs Docker | Quais são as diferenças?" 
seoTitle: "Kubernetes vs Docker | Quais são as diferenças?" 
description: "A Kubernetes é uma tecnologia de orquestração de contêineres, enquanto o Docker é uma tecnologia para criar e executar contêineres. Vamos revisar Kubernetes vs Docker." 
date: Mon, 01 Nov 2021 01:16:43 +0000
author: yasir saeed
summary: "O Kubernetes é uma tecnologia de orquestração de contêineres, enquanto o Docker permite que os desenvolvedores criem e executem contêineres. Vamos revisar as duas tecnologias de contêineres." 
url: /pt/kubernetes-vs-docker-what-are-the-differences/
categories: ['DevOps', 'Software Development']
---

## Kubernetes é uma tecnologia de orquestração de contêineres, enquanto o Docker permite que os desenvolvedores criem e executem contêineres. Vamos revisar as duas tecnologias de contêineres.

{{< figure align=center src="images/KubernetesVsDocker.png" alt="Kubernetes vs Docker">}}


## **Visão geral**
Quando se trata de tecnologias de contêineres, os dois nomes Kubernetes e Docker emergem como líderes de código aberto. Muitas pessoas querem saber qual opção de tecnologia de contêineres é melhor no setor de computação em nuvem. O que é ** Kubernetes vs Docker ** ** Tutorial ** O debate é comum no mundo da contêinerização. Embora a maioria das pessoas goste de comparar Kubernetes e Docker para gerenciar a aplicação de contêiner com mais eficiência. Essas duas poderosas tecnologias de contêinerização não são trocáveis ​​e você não pode escolher uma em detrimento da outra. ** Docker vs Kubernetes ** são tecnologias de contêineres essencialmente discretas que podem se complementar perfeitamente ao automatizar, criar, fornecer, gerenciar e dimensionar aplicativos de contêiner. De fato, o melhor tópico de comparação seria ** Kubernetes vs Docker Swarm **.
Este artigo explica a diferença dos fundamentos entre as tecnologias Docker e Kubernetes e esclarece as diferenças de Docker e Kubernetes, para que você possa se confiar em navegar na plataforma de contêineres em rápida expansão. Vamos nos familiarizar com o Awesome e as tecnologias de contêineres mais populares de código aberto Kubernetes vs Docker. Para fazer isso, é importante começar com a tecnologia fundamental que os une: contêineres.
  * O que é contêiner?
  * O que é Docker?
  * O que é Kubernetes?
  * Docker vs. Kubernetes: Qual você deve adotar?
  * Conclusão

## 1. ** O que é contêiner? **
Um contêiner é uma unidade padrão de software que empacota o código do aplicativo com suas dependências, permitindo que ele seja executado em qualquer infraestrutura de TI. Um contêiner fica sozinho, o que o torna portátil em ambientes de TI como ** virtualização do sistema operacional **. Uma melhor maneira de entender a crescente popularidade de um contêiner é compará -lo com uma máquina virtual (VM). ** Contêineres e máquinas virtuais ** Ambas são baseadas em tecnologias de virtualização. Um contêiner virtualiza um sistema operacional e uma VM utiliza uma camada de software leve entre a VM e o hardware de um computador, para virtualizar o hardware físico.
Um contêiner consiste em um ambiente inteiro de tempo de execução de um aplicativo com todas as suas bibliotecas e dependências. Enquanto uma VM consiste em uma cópia completa de um sistema operacional host, uma cópia virtual do hardware necessária para executar o sistema operacional, bem como um aplicativo e suas bibliotecas e dependências associadas. A ausência de um sistema operacional convidado reduz o tamanho de um recipiente, tornando -o leve, rápido e portátil. Os contêineres ajudam você a resolver a questão da portabilidade, permitindo separar o código da infraestrutura subjacente para melhorar a segurança. Os desenvolvedores podem empacotar seus aplicativos, incluindo todas as dependências e bibliotecas em uma pequena imagem ** de contêiner ** na plataforma de contêiner de produção **.
** DevOps ** Use contêineres para desenvolver rapidamente aplicativos que são executados de forma consistente em ambientes de plataforma cruzada e distribuída. Contêineres mais portáteis e com eficiência de recursos resolvem muitos dos conflitos provenientes de diferenças de ferramentas e software entre equipes funcionais. Esses ** contêineres leves ** são ideais para arquiteturas de microsserviços, onde as aplicações são compostas de serviços pouco acoplados e menores.

## 2. ** O que é Docker? **
[Docker][1] é a plataforma de contêineres mais popular que facilita o desenvolvimento, implantação e execução de aplicativos como contêineres portáteis independentes. ** Containerização ** é uma forma inovadora de virtualização do sistema operacional que permite empacotar código e dependências como unidades auto -suficientes. Ele garante que o aplicativo seja executado de forma consistente em diferentes ambientes isolados. Várias tecnologias de contêinerização estavam disponíveis antes do lançamento do Docker. Docker cresceu para ser a plataforma de contêinerização de fato nos últimos anos. Ele simplificou a execução de aplicativos de contêineres e tornou -se a plataforma de contêineration Defacto nos últimos anos.
** Docker, Inc. lançou o Docker em 20 de março de 2013 ** e é distribuído como edição proprietária de software e como edição da comunidade de software de código aberto. O Docker Open Sound Software Community Edition apareceu no mercado na hora certa, o que provavelmente levou à sua atual dominação do mercado. Atualmente, 30% das empresas usam o Docker para seus ambientes de produção da AWS.
Quando a maioria das pessoas fala sobre o Docker, elas realmente falam sobre ** Docker Engine **, o tempo de execução que permite criar, gerenciar e contêiner seus aplicativos. Mas antes que você possa executar um contêiner do Docker, eles devem ser construídos usando o arquivo Docker. O arquivo do docker define e contém todos os comandos necessários para executar a imagem, incluindo as especificações da rede do OS e os locais dos arquivos. Agora que você tem um arquivo ** do docker **, pode criar uma imagem do Docker, que é o componente estático portátil com um conjunto de instruções para criar um contêiner que é executado no mecanismo do docker. O Docker também possui um serviço chamado ** Docker Hub **, onde você pode armazenar e compartilhar imagens de contêineres com sua equipe, clientes ou a comunidade Docker. ** Docker Compose ** é usado para definir e executar aplicativos multi-containers em um arquivo YAML.
Muitos problemas surgem quando vários contêineres são implantados em vários ambientes de servidor. Torna -se muito difícil escalar inúmeras instâncias de contêiner, interação, coordenar e agendar contêineres em aplicativos de contêiner. É aqui que o Kubernetes entra para abordar a maioria dessas complexidades. Open Plataforma de contêiner de contêiner de origem ** Repositório de código -fonte do Docker ** está disponível no [Github][2].

## 3. ** O que é Kubernetes? **
[Kubernetes][3] Também conhecido como ** K8S **, é uma plataforma de código aberto para ** contêineres orquestradores ** e foi lançado no Google em 2014. É um sistema abrangente que automatiza a implantação, escala, programação e gerenciamento de aplicações de contêiner. Ele suporta muitas ferramentas de contêiner, como o Docker. O Kubernetes agora é doado para a Fundação de Computação Nativa de Cloud (** CNCF **). Ele cresceu para ser o líder de mercado para orquestrar recipientes e implantar aplicativos distribuídos.
O Kubernetes pode lidar com algumas das dificuldades operacionais ao implantar, dimensionar e gerenciar ** aplicativos multicontainers ** em várias máquinas de servidor. Ele distribui e agenda aplicativos de contêiner em um cluster de máquinas físicas ou virtuais, em vez de executá -las no host único. Dessa forma, os aplicativos em execução em Kubernetes funcionam como uma única entidade, embora possam realmente incluir uma variedade de contêineres vagamente acoplados. ** Clustering ** é um conceito vital de contêinerização que permite que os administradores construam um grupo coesivo e cooperativo de sistemas que oferecem redundância.
A Kubernetes pode ser executada em um serviço de nuvem pública para clientes com aplicativos baseados no Docker e possui uma comunidade vibrante. Muitas empresas estão investindo e muitos provedores de nuvem oferecem Kubernetes como um serviço. Você pode dimensionar automaticamente os aplicativos de contêineres em tempo real, com base nos recursos disponíveis, executar escala horizontal e balanceamento de carga com a ajuda de Kubernetes. Open Ferramenta de orquestração de contêineres de origem ** Kubernetes O repositório de código -fonte ** está disponível no [github][4].

## 4. Docker vs. Kubernetes: Qual você deve adotar?
Os contêineres são incríveis. Embora ** Docker e K8s Kubernetes ** sejam tecnologias distintas, eles realmente se complementam e podem trabalhar juntos. A instalação do Docker é fácil e rápida enquanto a configuração do Kubernetes é complicada e demorada. O Docker é otimizado para um cluster ** grande ** e Kubernetes pode funcionar com ** vários clusters menores **. O Docker está no centro da tecnologia de contêinerização e permite que você construa, compartilhe, execute e implante os contêineres de aplicativos. Se o seu aplicativo for pequeno e simples, o contêiner do Docker possui a infraestrutura essencial para gerenciar seu ciclo de vida.
** Quando usar Kubernetes vs Docker? **. Se o seu aplicativo de contêiner se tornar maior e mais complexo, possivelmente precisando de vários clusters menores e gerenciamento mais sofisticado, o Kubernetes se tornará uma ferramenta útil. O Kubernetes fornece uma ** plataforma de orquestração ** para os seus contêineres do Docker. Ele não apenas cria contêineres, mas também requer uma ferramenta de contêiner para ser executada, da qual o contêiner do docker é a opção mais popular. O uso do Kubernetes com o Docker aprimora a robustez da sua infraestrutura. Seus aplicativos estão mais altamente disponíveis e também melhora a escalabilidade de seus aplicativos.

## ** Conclusão: ** {#4A1A}
** Qual é a melhor escolha Kubernetes ou Docker **, então? A resposta é óbvia: ambos. Os Kubernetes e Docker acima mencionados são os softwares de código aberto mais populares e melhores para desenvolvedores. Eles permitem pensar em serviços e sistemas de uma maneira completamente nova e digital que a infraestrutura mais precisa. O ponto principal é que Kubernetes e Docker fornecem uma plataforma ** bem integrada ** para automatizar com mais eficácia gerenciamento de contêineres, escala, destruição e implantação de contêineres de sistemas. Projetar software mais recente para uma plataforma ** centrada em contêineres ** não apenas torna seus aplicativos mais escaláveis, mas também mais à prova de futuro.
_O que o contêiner de código aberto tecnolog_Y você prefere_?. Você tem alguma dúvida sobre a diferença entre Kubernetes e Docker_?, Por favor [entre em contato][5].

## Explore:
Temos vários outros artigos relacionados para lidar com o gerenciamento de tarefas diárias dos administradores de TI:
  *** [Top 5 Ferramentas de orquestração de contêineres de código aberto para o DevOps 2021][6] **
  *** [Melhor software de armazenamento e compartilhamento de arquivos de código aberto][7] **
  *** [Software Top 5 de Mensagem de Código Aberto (MQ) em 2021][8] **
  *** [Ferramentas forenses digitais de código aberto mais populares][9] **
  *** [Licenças de código aberto mais populares aprovadas pela OSI-aprovada][10] **

  
[1]: https://www.docker.com/
[2]: https://github.com/docker
[3]: https://kubernetes.io/
[4]: https://github.com/kubernetes/kubernetes
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/devops/top-5-open-source-container-orchestration-tools-for-devops-in-2021/
[7]: https://products.containerize.com/backup-and-sync/
[8]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[9]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[10]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
