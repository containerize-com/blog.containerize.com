---
title: "Como configurar a Rede Blockchain do Consensys Quorum localmente" 
seoTitle: "Como configurar a Rede Blockchain do Consensys Quorum localmente" 
description: "Siga este guia para saber sobre o processo de instalação do Consensys Quorum Blockchain no localhost. Consensys quorum é blockchain de código aberto baseado em Etherum." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Estabeleça sua própria rede de blockchain público/privado para gerenciar e monitorar transações digitais de negócios. Vamos aprender a configurar o Consensys Quorum no host local." 
url: /pt/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## Estabeleça sua própria rede pública/privada de blockchain para gerenciar e monitorar transações digitais de negócios. Vamos aprender a configurar o Consensys Quorum no host local.

{{< figure align=center src="images/quorum.png" alt="Consensys quorum">}}


## Visão geral
No passado recente, publicamos postagens no blog sobre alguns tópicos relacionados a blockchain, como [as 5 principais plataformas de blockchain de código aberto em 2020][1], [um guia básico sobre como criar contrato inteligente Ethereum][2], [como descentralizada A tecnologia atualiza sua estratégia de negócios][3] e [um guia para iniciantes para configurar o nó Ethereum no localHost][4]. Neste artigo, veremos como configurar a rede Blockchain Consensys Quorum no localhost cobrindo os seguintes pontos.
  *** [Uma breve introdução de Consensys quorum][5] **
  *** [Quais são os pré-requisitos e ** procedimento de instalação **?][6] **
  *** [Como iniciar a rede?][7] **
  *** [Conclusão][8] **

## ** Uma breve introdução de Consensys Quorum ** {#Introduction}
[Consensys quorum][9] é uma plataforma de código aberto baseado na tecnologia de ledger ** descentralizada **. No entanto, ele fornece um ambiente completamente amigável para desenvolvedor para criar aplicativos baseados em blockchain que lidam com transações rápidas e de alto rendimento. É ** Ethereum **, extensível e oferece muitos plug -ins. Além disso, esse sistema distribuído de código aberto vem com altos padrões de segurança e privacidade. Além disso, existem muitos recursos poderosos, como APIs de permissão e monitoramento. Além disso, esta plataforma ** DLT ** é auto-hospedada e fornece documentação detalhada sobre o desenvolvimento e a implantação. O código -fonte deste software livre está disponível no [Github][10].
Consensys Quorum oferece os seguintes recursos importantes:
  * Arquitetura fiscal
  * Baseado em Ethereum
  * Seguro
  * Auto-hospedado
  * Rede Pública/Privada
[Saiba mais sobre Consensys Quorum][11]

## **** Quais são os pré-requisitos e procedimento de instalação? **** {#pré-requisitos}
Nesta seção, instalaremos as dependências necessárias e configuraremos o ambiente local. Antes de ir para a próxima etapa, certifique-se de instalar os seguintes pré-requisitos:
  * Nodejs V10+
  * Docker
  * Docker-Compose
Depois que os pré-requisitos forem instalados, execute o comando a seguir para iniciar o utilitário Quickstart baseado em CLI.
```
npx quorum-dev-quickstart
```
No entanto, responda às perguntas para concluir a instalação, conforme mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Consensys quorum">}}


## **** Como iniciar a rede? **** {#Start}
Agora, temos o código -fonte em vigor. Então, o próximo passo é tornar a rede ao vivo.
Execute o seguinte comando para entrar no diretório raiz.
```
cd quorum-test-network
```
Depois disso, execute o seguinte comando para iniciar todos os contêineres do Docker:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Consensys quorum">}}

Depois que todos os contêineres do Docker estiverem em funcionamento, você pode acessar o Block Explorer no seguinte endereço:
```
http://localhost:25000
```
[] ()
Além disso, você pode interagir com o Block Explorer, conforme mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="sistema distribuído de código aberto">}}

Da mesma forma, você pode interromper toda a rede executando o seguinte comando:
```
./stop.sh 
```

## Conclusão {#conclusion}
Este é o fim deste tutorial. Acima de tudo, o Ethereum baseado em Consensys Quorum é uma ** Tecnologia Financeira Digital ** desenvolvida especialmente para casos de uso financeiro. Possui um algoritmo de consenso baseado em votação. No entanto, o principal motivo dessa tecnologia descentralizada é criar soluções eficientes para empresas.
Finalmente, [contenderize.com][12] publicou muitas postagens técnicas e tutoriais sobre produtos populares de código aberto em [blog.containerize.com][13]. Portanto, siga a categoria [Blockchain Platforms][14] para atualizações regulares.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Ethereum][15]
  * [Tecido hyperledger][16]
  * [OpenChain][17]
  * [Ripple][18]
  * [Multicain][19]
  * [Consensys Quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
