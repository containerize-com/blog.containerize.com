---
title: "O que é TestNet e como implantá -lo | Ethereum testnet '" 
seoTitle: "O que é TestNet e como implantá -lo | Ethereum testNet" 
description: "O que é testnet? Este guia é sobre como configurar o nó Ethereum no host local. Blockchain é uma rede de nós que mantêm um histórico de todas as transações." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "O Ethereum é uma rede ponto a ponto de blockchain de código aberto de nós conectados. Vamos aprender a implantar e interagir com o nó Ethereum em um servidor local." 
url: /pt/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum é uma rede ponto a ponto de blockchain de código aberto de nós conectados. Vamos aprender a implantar e interagir com o nó Ethereum em um servidor local.

{{< figure align=center src="images/ether.png" alt="O que é TestNet">}}

Em nossas postagens anteriores no blog, escrevemos em vários tópicos que incluem [tecnologia blockchain para negócios][1], [escrevendo um contrato inteligente básico][2] e [plataformas populares de blockchain][3]. Existem outros tópicos que escreveremos em um futuro próximo, à medida que **Tecnologia descentralizada do razão**  está ganhando ritmo com o passar do tempo. Agora, as pessoas estão começando a se interessar pelas plataformas de gerenciamento de ativos digitais devido à segurança e transparência. Além disso, as transações digitais são rastreáveis, imutáveis ​​e esses fatores dão confiança às pessoas em relação à confiabilidade dessa tecnologia. Existem três tipos de público, privado e permissão. No entanto, os usuários podem adotar qualquer tipo, dependendo do seu caso de uso.
O advento dessa tecnologia trouxe uma enorme mudança no setor bancário, pois mudou o caminho das transações financeiras. Nesta postagem do blog, falaremos sobre o Ethereum Blockchain sobre a configuração do nó Ethereum no localhost e veremos como interagir com a rede de testes. Abordaremos os seguintes pontos -chave.
  ***O que é testnet?** 
  ***[Como configurar o Ethereum Blockchain?][4]** 
  ***[Como interagir com o Ethereum Blockchain?][5]** 
  ***[Conclusão][6]** 

## O que é testnet?   {#tetstnet}
Nesta postagem do blog, iremos implantar um nó Ethereum no localhost. O Ethereum possui várias redes, a rede de produção é chamada MainNet e a rede usada para fins de teste é chamada TestNet. A maioria das aplicações descentralizadas é baseada em [Ethereum][7] blockchain. O Smart Contract é um componente integrante desta infraestrutura distribuída. Além disso, o Blockchain é uma rede de computadores chamados "nós". No entanto, cada nó contém uma cópia da blockchain e, portanto, participa da rede. O Ethereum Blockchain também tem sua própria criptomoeda chamada "éter". Todas as transações são protegidas criptograficamente. Além disso, é uma tecnologia completa do Ledger que nunca desliga ou é corrompida. Ele permite escrever contratos inteligentes e aplicativos descentralizados (DAPPs) que são executados nos nós da Blockchain Etherum.
Esta rede de blockchain distribuída de código aberto usa um algoritmo de consenso chamado Prova de Trabalho (POW). Além disso, a arquitetura do Ethereum compreende cinco camadas como a Ethereum Virtual Machine, as APIs do cliente Ethereum, contratos inteligentes, nós do Ethereum e aplicativos de usuário final. A Ethereum Virtual Machine oferece o software e a arquitetura que reconhecem contratos inteligentes. Contratos inteligentes são o software que governa as transações. Há um forte apoio à Ethereum Blockchain e às empresas da Fortune 500 demonstraram grande interesse em fazer o desenvolvimento em uma escala maior usando essa tecnologia. Além disso, o Ethereum está escrito no idioma Go e seu código -fonte está disponível no [Github][8]. Toda a documentação está disponível em relação à implantação e desenvolvimento, pois possui uma comunidade vibrante.

## Como configurar o Ethereum Blockchain?   {#configurar}
Agora, estamos cientes do que é TestNet. Nesta seção, configuraremos o nó Ethereum em nossa máquina local. Antes de ir além, verifique se você instalou os seguintes pré -requisitos.
  * [Homebrew][9] (para macOS)

  * [Go7] (brew install go)
Depois que os pré -requisitos estiverem em vigor, execute o seguinte comando para clonar o código -fonte:
```
git clone https://github.com/ethereum/go-ethereum
```
Após um clone de sucesso, entre no diretório:
```
cd go-ethereum
```
Agora, execute o seguinte comando para construir o programa GETH:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Observação
{{_LINE_34_}}
  Em caso de qualquer erro, instale o Xcode executando o Xcode-Select--Instalação e tente novamente
{{_LINE_36_}}
Então, você configurou todos os pré -requisitos e código -fonte. Portanto, execute o seguinte comando para iniciar o nó:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Nó Ethereum">}}


## Como interagir com o Ethereum Blockchain?   {#interagir}
Esta seção fala sobre a interação com um nó Ethereum em execução que é totalmente sincronizado com a blockchain. Podemos usar o software Geth para interagir e enviar comandos para a rede de teste.
Para isso, vamos incluir Build/Bin/Geth na variável de ambiente de $ Path, executando os seguintes comandos:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Depois disso, pare o servidor que você criou acima e execute a rede de testes com os seguintes sinalizadores:
Geth - -Testnet - -RPC - -RPCAPI = "DB, ETH, NET, Web3, Pessoal, Web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="O que é TestNet">}}

Em seguida, você precisa abrir uma nova janela do terminal e conectar o comando Geth ao nó executando o seguinte comando:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="plataforma de gerenciamento de ativos digitais">}}

Geth abrirá uma janela de console onde você pode interagir com a rede de teste. O comando a seguir criará uma conta que detém a moeda virtual e o par de chaves públicas/privadas:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Tecnologia descentralizada do razão">}}

Para verificar sua conta, você pode executar o seguinte comando:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="O que é TestNet">}}

Da mesma forma, existem muitos comandos que você pode usar para interagir com o Ethereum Blockchain.

## Conclusão   {#conclusion}
Aí vem o final deste tutorial. Aprendemos **o que é testnet  **e o processo de configuração do nó Ethereum na máquina local. O Ethereum Blockchain é uma solução generalizada para a maioria das aplicações descentralizadas. A maioria das empresas e departamentos governamentais tende a adotar essa tecnologia para trazer robustez, transparência, disponibilidade e responsabilidade. Além disso, este tutorial **  Blockchain  **realmente o ajudará se você planeja começar o desenvolvimento no Ethereum Blockchain, pois aproveita os contratos inteligentes. O Blockchain Etheruem é mais estável e popular, pois possui milhares de nós ao vivo. Além disso, as empresas podem facilmente desenvolver e implantar redes Ethereum Blockchain sem gastar tempo extra. O outro fator por trás da confiabilidade do Ethereum é que ele oferece o desenvolvimento de contratos inteligentes de uma maneira que outras plataformas de gerenciamento de ativos digitais**   não ofereçam.
As atualizações mais recentes na rede Ethereum tornaram a rede mais econômica e eficiente. De fato, há muito mais material disponível na nuvem que demonstra os aspectos importantes do Etheruem em relação aos fins de investimento e desenvolvimento. Para os desenvolvedores, fornece um ecossistema de um desenvolvedor com serviços pré-fabricados. Para os mineiros, há uma recompensa na forma de um éter sempre que eles minerem um novo bloco na blockchain. Além disso, [contenderize.com][10] publicou muitas postagens técnicas e tutoriais sobre produtos populares de código aberto em [blog.containerize.com][11]. Portanto, mantenha -se conectado à categoria [Blockchain Platforms][12] para atualizações regulares.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Ethereum][7]
  * [Tecido hyperledger][13]
  * [OpenChain][14]
  * [Ripple][15]
  * [Multicain][16]
  * [Consensys Quorum][17]
  * [Como configurar a Rede Blockchain Quorum Quorum localmente][18]
  * [5 principais plataformas de blockchain de código aberto em 2020][3]
  * [Um guia básico sobre como criar contrato inteligente Ethereum][2]
  * [Como a tecnologia descentralizada atualiza sua estratégia de negócios][19]

  
[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[4]: #setup
[5]: #interact
[6]: #Conclusion
[7]: https://products.containerize.com/blockchain-platforms/ethereum
[8]: https://github.com/ethereum/go-ethereum
[9]: https://brew.sh/
[10]: https://www.containerize.com/
[11]: https://blog.containerize.com/
[12]: https://products.containerize.com/blockchain-platforms/
[13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[14]: https://products.containerize.com/blockchain-platforms/openchain
[15]: https://products.containerize.com/blockchain-platforms/ripple
[16]: https://products.containerize.com/blockchain-platforms/multichain
[17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
