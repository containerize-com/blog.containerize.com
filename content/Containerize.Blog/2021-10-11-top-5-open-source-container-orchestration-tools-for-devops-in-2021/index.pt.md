---
title: "5 principais ferramentas de orquestração de contêineres de código aberto para o DevOps 2021" 
seoTitle: "5 principais ferramentas de orquestração de contêineres de código aberto para o DevOps 2021" 
description: "As ferramentas de orquestração de contêineres de código aberto ajudam os engenheiros do DevOps a automatizar a implantação, rede, escala e gerenciamento de contêineres." 
date: Mon, 11 Oct 2021 04:01:46 +0000
author: yasir saeed
summary: "As ferramentas de orquestração de contêineres ajudam os usuários a automatizar a implantação, rede, escala e gerenciamento de contêineres. Vamos revisar as melhores ferramentas de orquestração" 
url: /pt/top-5-open-source-container-orchestration-tools-for-devops-in-2021/
categories: ['DevOps', 'Software Development']
---

## Ferramentas de orquestração de contêineres ajudam os usuários a automatizar a implantação, rede, escala e gerenciamento de contêineres. Vamos revisar as melhores ferramentas de orquestração

{{< figure align=center src="images/Open-Source-Container-Orchestration-Tools.png" alt="5 principais ferramentas de orquestração de contêineres de código aberto">}}


## **Visão geral**
As ferramentas de orquestração de contêineres ajudam administradores de TI, desenvolvedores de software e usuários a gerenciar aplicativos de contêiner durante o processo de desenvolvimento, teste, escala e implantação. Esses softwares de orquestração de contêineres também facilitam a programação e implantação de vários contêineres para implementação em um aplicativo, para identificar implementações de contêineres com falha e gerenciar configurações declarativas. **Ferramentas de orquestração de contêineres de código aberto**  Ajude os usuários a automatizar o processo de execução de instâncias, provisionando hosts e vinculando recipientes para aumentar a escalabilidade e a funcionalidade dos aplicativos adicionando contêineres.
As ferramentas de orquestração ajudam a otimizar o processo de orquestração, melhorando a segurança do contêiner, definindo as permissões de acesso aos contêineres e mantendo os componentes do contêiner separados um do outro. Atualmente, existem muitas ferramentas de orquestração de contêineres de código aberto baseadas em nuvem disponíveis no mercado que diferentes organizações usam para ambientes de produção para **gerenciar contêineres e microsserviços** . Vamos revisar algumas das principais ferramentas de orquestração.
**O que são plataformas de orquestração de contêineres?**  Neste artigo, nos familiarizaremos com as estruturas de orquestração de contêineres de código aberto mais populares para o DevOps em 2021.
  * Kubernetes
  * Docker Swarm
  * Red Hat OpenShift
  * Compor
  * Hashicorp Nomad
  * O que são ferramentas de gerenciamento de contêineres de código aberto?
  * Conclusão
1. Kubernetes

{{< figure align=center src="images/Kubernetes-open-source-container-orchestration-system-1.png" alt="Sistema de orquestração de contêiner de código aberto Kubernetes">}}

  ***Número de colaboradores:**  3.141
  ***Contribuidor principal:**  Jordan Liggitt - Engenheiro de Software no Google | [@Liggitt][1]
  ***idioma primário:**  vá
  ***Número de estrelas:**  81.300
  ***Número de garfos:**  2.960
[Kubernetes][2] O sistema de orquestração de código aberto é a adoção generalizada de contêineres entre as organizações, também conhecida como **kube ou k8s**  (8 representa o número de letras entre o "k" e o "s"). Tornou -se o padrão de fato para agendar e automatizar aplicativos de computador para criar, implantar, dimensionar e gerenciar aplicativos de contêiner devido à natureza flexível da arquitetura Kubernetes. K8 Kubernetes é usado para gerenciar contêineres Linux em ambientes de nuvem privados, públicos e híbridos. O Kube é centrado no contêiner e se concentra mais na implantação e gerenciamento de serviços.
O ponto de partida do Kubernetes é o próprio cluster e o quão disposto a se afastar do Docker Way. Começa grande no cluster Kubernetes e usa recipientes quase como um detalhe de implementação. Isso facilita tudo à implantação, carrega e gerencia **seu aplicativo, reduzindo os esforços operacionais, inspirados no sistema de gerenciamento de cluster interno do Google, Borg. A plataforma de orquestração de contêineres da Kubernetes foi originalmente desenvolvida e projetada por engenheiros no Google e no Google de origem aberta do projeto Kubernetes em meados de 2014.  **K3S **  é um projeto de sandbox CNCF que oferece uma distribuição leve de Kubernetes, totalmente compatível.  **K3S **  é um orquestrador de contêiner construído para propósito, enquanto  **K8S**   Orquestração é um contêiner de uso geral K8S Orchestrator Ferramenta de código aberto para a execução do Kubernetes.
**As ferramentas mais populares  ****  que se integram à orquestração Kubernetes**  são leme, fazendeiro, Snyk, Ansible, Docker, Microsoft Azure, Amazon EKS, Google Compute Engine e Vagrant.
**As principais empresas que usam Kubernetes**  Orquestração em suas pilhas de tecnologia para construir, gerenciar e implantar o ambiente de contêineres para aplicativos são Google, Kubermatic, Digitalocean, Shopify, Udemy, Slack, Asana, Walmart e Prometheus.

## 2. Docker Swarm

{{< figure align=center src="images/docker-swarm.png" alt="Orquestração e implantação de contêiner ferramenta de código aberto">}}

  ***Número de colaboradores:**  178
  ***Contribuidor principal:**  Engenheiro de software francês em [@Cruise-Automation][3] | [@Vieux][4]
  ***idioma primário:**  vá
  ***Número de estrelas:**  5.800
  ***Número de garfos:**  1.100
[Docker Swarm][5] é uma ferramenta simples de orquestração de contêineres nativa da plataforma Docker para gerenciar aplicativos de contêiner. Ele permite que os desenvolvedores criem, implantem e gerenciem um cluster de nós do Docker em várias máquinas host. O modo de enxame do Docker permite gerenciar clusters de mecanismo Docker localmente dentro do sistema Docker. É usado para gerenciar, escalar e ** **de implantação de nós distribuídos com eficiência na produção**   com os mesmos arquivos usados ​​pelo Docker compor orquestração localmente. Uma das principais vantagens do enxame é o alto nível de disponibilidade de serviço oferecido para aplicativos.
A orquestração de contêineres do Docker Swarm começa no contêiner e aumenta, fornece uma maneira fácil de se mudar para a orquestração de contêineres em nuvem sem o conhecimento das ferramentas existentes do Docker. O enxame é adequado para experimentos e orquestração e implantações de contêineres em escala menor devido a limitações de liberações precoces de enxames e **menos comprovado que Kubernetes e Mesos**  Orquestração de contêineres. O Docker Swarm Open Source consiste em nós de gerente e trabalhador que executam serviços.
**As ferramentas mais populares que se integram ao Docker Swarm**  são o Azure Container Service, Docker for AWS, CodeFresh, Flocker, Serviço de Entrega Contínua, Docker Datacenter, Traefik e Portainer.
**As principais empresas que usam o Swarm  **Orquestração do Docker**   em suas pilhas de tecnologia são OODA, AppWrite, Net Core, DevTeam, os pacientes sabem melhor e Mainwebsolutions.

## 3. Red Hat OpenShift

{{< figure align=center src="images/openshift-red-hat.jpg" alt="Motor de orquestração de contêineres e Plataforma de contêineres OpenShift">}}

  ***Número de colaboradores:**  447
  ***Contribuidor principal:**  [David Eads][6]
  ***Línguas primárias:**  GO e AngularJS
  ***Número de estrelas:**  8.000
  ***Número de garfos:**  4.600
[Redhat OpenShift][7] é o sistema de orquestração de contêineres baseado em nuvem mais seguro e de nível corporativo com Kubernetes no back-end. Ele pode ser usado como um mecanismo de orquestração de contêineres Red Hat e **plataforma como serviço (PaaS)** . A plataforma de contêineres OpenShift funciona com a distribuição do Kubernetes padrão do setor, focada na experiência do desenvolvedor e na segurança dos aplicativos. Ele foi construído no Redhat Enterprise Linux e Kubernetes Engine e possui várias funcionalidades para gerenciar clusters via interface do usuário e CLI.
**As ferramentas mais populares que se integram ao Red Hat OpenShift**  são novas relíquias, Travis CI, Wercker, MongoLab, Twilio SendGrid, Cloudamqp, Appcelerator e Opendevstack
**As principais empresas que usam Red Hat OpenShift**  em suas pilhas de tecnologia são Ericsson, Accenture, Melio Consulting, Dotgroup e Bilyoner.com

## 4. Compor

{{< figure align=center src="images/docker-compose-1024x568.jpg" alt="Ferramenta de orquestração composta do Docker">}}

  ***Número de colaboradores:**  55
  ***Contribuidor principal:**  Engenheiro de software sênior @ Docker | [@Gtardif][8]
  ***idioma primário:**  vá
  ***Número de estrelas:**  23.800
  ***Número de garfos:**  4.000
[Docker Compose][9] é uma ferramenta de orquestração do docker para executar aplicativos multi-containers no Docker definidos usando o formato de arquivo de composição. Ele usa a API padrão do docker e a rede. **Um arquivo de composição**  é usado para definir como os um ou mais contêineres são configurados que compõem seu aplicativo. Depois de ter um arquivo de composição do Docker, você pode criar e iniciar seu aplicativo com um único comando: Docker Compose Up.
**As ferramentas mais populares que se integram com Compose**  são fazendas, compor em Kubernetes, Doppler, Amplicação e K8Guard.
**As principais empresas que usam o Docker Compose**  em suas pilhas de tecnologia são StackShare, Pratilipi, Circleci, Trustpilot, Alibaba Travels e OneSignal.

## 5. Hashicorp Nomad

{{< figure align=center src="images/Nomad-1024x416.png" alt="Hashicorp Nomad é um orquestrador de carga de trabalho">}}

  ***Número de colaboradores:**  490
  ***Principal Colaborador:**  Alex Dadgar no HCP @Hashicorp | [@adadgar][10]
  ***Linguagem primária:**  Python
  ***Número de estrelas:**  10.000
  ***Número de garfos:**  1.400
[Nomad][11] é um orquestrador de carga de trabalho flexível, **Gerenciador de cluster e agendador**  que implanta facilmente qualquer aplicativo de contêiner ou legado em uma infraestrutura. É orquestrador de carga de trabalho em larga escala de adoção em ciclos de produção para implantar aplicativos em lote, contêineres, microsserviço e não contornados em uma frota de servidores para maximizar a utilização de recursos. A Orquestração de Container Nomad é uma orquestração leve de contêiner, fácil de dimensionar em todos os principais sistemas operacionais e opera em aplicações virtualizadas, contêinerizadas ou independentes. A orquestração de contêineres Hashicorp possui integrações nativas de cônsul e cofre.
**As ferramentas mais populares que se integram com Nomad**  são Docker, Vault, Hashicorp Sentinel, Consul, Portworx, Humio e Gloo Edge.
**As principais empresas que usam o NOMAD**  em suas pilhas de tecnologia são PETAL, Trivago, WealthSimple, Edgelab, Fundamentii, 5G Systems, Aislelabs, Botmétrico, Taboola e MachEte Inc.

## **O que são ferramentas de gerenciamento de contêineres de código aberto?** {#4A1A}
Existem muitos benefícios das soluções de orquestração de contêineres em máquinas virtuais (VMs). Os contêineres compartilham um único kernel do sistema operacional, inicia em alguns segundos, em vez de minutos necessários para iniciar uma máquina virtual (VM). Escalar e duplicar os contêineres é muito fácil, têm um pequeno tamanho de disco e são simples de compartilhar. **Uma plataforma de gerenciamento de contêineres**  é um aplicativo em nuvem que gerencia vários contêineres. A seguir, estão os melhores software de gerenciamento de contêineres e orquestradores de contêineres mais amplamente utilizados para otimizar aspectos específicos do gerenciamento de contêineres.
  ***[Rancher][12]**  é uma plataforma de melhor gerenciamento de contêineres de código aberto para gerenciar Kubernetes em escala.
  ***[Apache Mesos][13]**  é um gerenciador de cluster de código aberto de próxima geração e serviço de orquestração de contêineres Apache.
  ***[Portainer CE][14]**  é uma poderosa ferramenta de gerenciamento de docker de código aberto e Kubernetes.
  ***[Azure Kubernetes Service (AKS)][15]**  é um serviço Kubernetes de orquestração de contêineres de código aberto.
  ***[Serviço de contêiner elásticos da Amazon (Amazon ECS)][16]**  É o serviço de gerenciamento de orquestração e contêiner da AWS ECS que suporta contêineres do Docker para executar aplicativos no cluster de instâncias do Amazon EC2.
  ***[Amazon Elastic Kubernetes Service (Amazon EKS)][17]**  é um serviço AWS de orquestração de contêineres para executar a infraestrutura de aplicativos e gerenciamento da Kubernetes.

## **Conclusão:** {#4A1A}
**Como funciona a tecnologia de orquestração de contêineres para seus aplicativos de negócios e software? Se você precisar se lembrar de apenas uma informação importante para ajudá -lo a escolher  **kubernetes vs swarm do Docker **  vs redhat  **openshift vs compuse**   vs hashicorp nomad, deve ser que cada solução tenha algumas vantagens e desvantagens. Existem outras opções de plataforma de orquestração que oferecem diferentes recursos na orquestração de serviços. Por fim, qual opção você tira depende da escala que você deseja alcançar e em qual ecossistema você prefere mais confortável. Para um mergulho mais profundo na orquestração de contêineres, continue visitando [Blog de contêiner][18].
_O que você é as melhores ferramentas de orquestração de contêineres mais favoritas?. Você tem alguma dúvida sobre a lista de orquestradores de contêineres mencionados acima?, Por favor [entre em contato][19].

## Explore:
Também temos várias outras ferramentas de informação relacionadas assistir:
  * [Melhor software de armazenamento em nuvem e compartilhamento de arquivos de código aberto][20]
  * [Software Top 5 de Mensagem de Código Aberto (MQ) em 2021][21]
  * [Ferramentas forenses digitais mais populares de código aberto][22]
  * [Licenças de código aberto mais populares da OSI-aprovada][23]

  
[1]: https://twitter.com/liggitt?lang=en
[2]: https://kubernetes.io/
[3]: https://github.com/cruise-automation
[4]: https://twitter.com/vieux?lang=en
[5]: https://github.com/docker-archive/classicswarm
[6]: https://github.com/deads2k
[7]: https://github.com/openshift/origin
[8]: https://twitter.com/gtardif?lang=en
[9]: https://github.com/docker/compose
[10]: https://twitter.com/adadgar?lang=en
[11]: https://github.com/hashicorp/nomad
[12]: https://github.com/rancher/rancher
[13]: https://github.com/apache/mesos
[14]: https://github.com/portainer/portainer
[15]: https://github.com/Azure/AKS
[16]: https://github.com/aws/amazon-ecs-agent
[17]: https://github.com/aws/eks-distro
[18]: https://blog.containerize.com/
[19]: mailto:yasir.saeed@aspose.com
[20]: https://products.containerize.com/backup-and-sync/
[21]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[22]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[23]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
