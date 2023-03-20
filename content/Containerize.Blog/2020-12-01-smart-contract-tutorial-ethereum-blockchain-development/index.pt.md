---
title: "Tutorial de contrato inteligente | Desenvolvimento de blockchain Ethereum" 
seoTitle: "Tutorial de contrato inteligente | Desenvolvimento de blockchain Ethereum" 
description: "Este tutorial de contrato inteligente elabora as etapas básicas para criar contratos inteligentes da Ethereum. O Ethereum é uma rede de blockchain de código aberto, seguro e distribuído." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "O Ethereum é uma plataforma madura para criar contratos inteligentes e aplicativos descentralizados (DAPPs). Siga estas etapas para criar, testar e implantar contratos inteligentes." 
url: /pt/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum é uma plataforma madura para criar contratos inteligentes e aplicativos descentralizados (DAPPs). Siga estas etapas para criar, testar e implantar contratos inteligentes.

{{< figure align=center src="images/contract.png" alt="Tutorial de contrato inteligente">}}


## Visão geral
No passado recente, publicamos uma [postagem do blog][1] que destaca o impacto e a importância da tecnologia blockchain. Há outro post interessante do blog [o que é NFT? | Tokens não fungíveis explicados][2]. A tecnologia de contabilidade distribuída é baseada em alguns conceitos principais, como contratos inteligentes, nós, mineração, algoritmos de consenso, transações digitais e redes ponto a ponto. Como é de código aberto, portanto, há uma janela enorme para uma extensão em relação a casos de uso. De fato, existem muitas plataformas de gerenciamento de ativos digitais de código aberto e gratuitas que são distribuídas e exigem algum software para governar as transações.
Neste tutorial de contrato inteligente, aprenderemos a construir um contrato inteligente da Ethereum cobrindo os seguintes pontos de bala.
  *[** O que é um contrato inteligente? **][3]
  *[** Como construir um contrato inteligente básico? **][4]
  *[** Como executar e implantar contrato inteligente? **][5]
  *[** Conclusão **][6]

## O que é um contrato inteligente? {#o que}
Um contrato inteligente é um programa que é executado na blockchain para governar transações digitais. Esta parte do código contém as regras e procedimentos definidos que garantem a transparência de uma transação. Todo contrato inteligente contém um endereço e esse endereço é usado para acessar qualquer função de um contrato inteligente específico. Além disso, os contratos inteligentes trazem transparência, confiança e segurança para a rede blockchain. Essas peças de código são executadas automaticamente assim que determinadas condições forem cumpridas.
No entanto, qualquer desenvolvedor pode escrever um contrato inteligente e implantá -lo na rede. Além disso, os contratos inteligentes tornam os processos bastante robustos, pois não há dependência envolvida na execução dessas partes do código. Além disso, os contratos inteligentes armazenam as informações necessárias relacionadas a todas as transações que os participantes podem recuperar e verificar. Muitas indústrias como saúde, bancos, estão adotando muito essa tecnologia distribuída. As instituições governamentais também desejam implantar aplicativos descentralizados (DAPPs) para trazer autenticidade e transparência ao sistema eleitoral. Existem muitas [plataformas de blockchain][7] como [Ethereum][8], [Ripple][9], [CORDA][10], e alguns mais, no entanto, neste guia, construiremos nosso primeiro contrato inteligente no Ethereum.

## Como construir um contrato inteligente básico? {#construir}
Nesta seção do tutorial de contrato inteligente, veremos as etapas para configurar o ambiente para o nosso primeiro contrato inteligente.
Os contratos inteligentes podem ser escritos em vários idiomas, mas usaremos [Solidity][11] que é um idioma de alto nível para escrever contratos inteligentes.
Usaremos [Ethereum Studio][12] que é um IDE baseado na Web. É usado para escrever contratos inteligentes, bem como aplicativos descentralizados para interagir com contratos inteligentes. Ele fornece alguns modelos de projeto pré-criados, onde você pode começar a escrever sua lógica imediatamente.
Então, abra o [Ethereum Studio][12] IDE no navegador e você verá a seguinte interface.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Tutorial de contrato inteligente">}}

Vamos escolher a opção "Hello World" e criar nosso primeiro projeto. Você pode ver a estrutura do diretório. Além disso, há uma janela de saída no lado direito.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Tutorial de contrato inteligente">}}

Existem duas pastas "aplicativo" e "contratos".
A pasta de aplicativos pertence ao aplicativo da web e contém os seguintes arquivos.
  *** App.css **: Para estilo de layout
  *** App.html **: para página inicial
  *** App.js **: contém a lógica de negócios para conectar o front end com o contrato inteligente
Da mesma forma, a pasta contratos contém o arquivo de origem do contrato.
Agora, vamos abrir o arquivo helloworld.sol que pode ser encontrado em arquivos/contratos/helloworld.sol. Basicamente, este é o arquivo principal que contém o código para o contrato inteligente escrito em solidez. Você pode modificar o código, se quiser, deixaremos como estiver.

## Como executar e implantar um contrato inteligente? {#implantar}
Nesta seção do tutorial de contrato inteligente, veremos como executar e implantar um contrato inteligente. O Ethereum Studio compila o código de solidez no código de byte. Portanto, salve o código e vamos implantar nosso primeiro contrato inteligente.
No painel lateral esquerdo, pressione o ícone do foguete.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="O que é um contrato inteligente">}}

Você pode configurar e definir os valores iniciais para o seu contrato inteligente, como mostrado abaixo.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Contrato inteligente Ethereum">}}

Aperte o botão "Salvar" e pressione o botão "Implantar" para implantar o contrato inteligente. Você verá a seguinte saída e uma mensagem na janela do console na parte inferior. A janela do console fornece detalhes como endereço de contrato inteligente, nonce, gasslimit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="O que é um contrato inteligente">}}

Depois disso, há outra opção no painel no lado esquerdo e essa é a opção de interação. Esta opção permite que você interaja com seu contrato inteligente chamando sua função e passando valores.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="O que é um contrato inteligente">}}

Além disso, existe um aplicativo front-end que permite que os usuários interajam com o contrato inteligente do navegador. Este aplicativo baseado na Web é chamado de aplicativo descentralizado. Você pode passar o valor e ver a janela do console.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="O que é um contrato inteligente">}}


## Conclusão {#con}
Isso nos leva ao final deste tutorial de contrato inteligente. Espero que este artigo tenha ajudado você a entender as principais etapas da construção e implantação do contrato inteligente da Ethereum. Como a tecnologia blockchain está evoluindo em um ritmo alto, é hora de ganhar forte prática prática sobre o sistema Echo de blockchain. Essa tecnologia de contabilidade distribuída é altamente configurável e extensível. Esta postagem do blog realmente o ajudará se você estiver disposto a aprender o desenvolvimento de contratos inteligentes. Além disso, existem muitos tutoriais úteis e plataformas de gerenciamento de ativos digitais de código aberto mencionadas na seção "Explorar" abaixo.
No final, [contémize.com][13] é totalmente dedicado a compilar a lista de software de código aberto. Existem muitos tutoriais e postagens de blog sobre software de código aberto e várias postagens de blog estão em andamento. Portanto, mantenha contato com a categoria [Blockchain Platforms][7] para atualizações regulares.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Ethereum][8]
  * [Tecido hyperledger][14]
  * [OpenChain][15]
  * [Ripple][16]
  * [Multicain][17]
  * [Consensys Quorum][18]
  * [O que é NFT? | Tokens não fungíveis explicados][2]
  * [Como configurar a Rede Blockchain Quorum Quorum localmente][19]
  * [5 principais plataformas de blockchain de código aberto em 2020][20]
  * [Um guia básico sobre como criar contrato inteligente Ethereum][21]
  * [Como a tecnologia descentralizada atualiza sua estratégia de negócios][22]
  * [Como configurar a Rede Blockchain Quorum Quorum localmente][19]

  
[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/blockchain-platforms/what-is-nft-non-fungible-tokens-explained/
[3]: #what
[4]: #build
[5]: #deploy
[6]: #con
[7]: https://products.containerize.com/blockchain-platforms/
[8]: https://products.containerize.com/blockchain-platforms/ethereum
[9]: https://ripple.com/
[10]: https://www.corda.net/
[11]: https://docs.soliditylang.org/en/v0.7.4/
[12]: https://studio.ethereum.org/
[13]: https://www.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[15]: https://products.containerize.com/blockchain-platforms/openchain
[16]: https://products.containerize.com/blockchain-platforms/ripple
[17]: https://products.containerize.com/blockchain-platforms/multichain
[18]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[19]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[20]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[21]: https://blog.containerize.com/
[22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
