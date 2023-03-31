---
title: "¿Qué es Testnet y cómo implementarlo? Ethereum testnet '" 
seoTitle: "¿Qué es Testnet y cómo implementarlo? Ethereum Testnet" 
description: "¿Qué es TestNet? Esta guía trata sobre cómo configurar el nodo Ethereum en localhost. Blockchain es una red de nodos que mantienen un historial de todas las transacciones." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum es una red de nodos conectados de punto a punto de blockchain de código abierto. Aprendamos cómo implementar e interactuar con el nodo Ethereum en un servidor local." 
url: /es/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum es una red de nodos conectados de punto a punto de fuente abierta de nodos. Aprendamos cómo implementar e interactuar con el nodo Ethereum en un servidor local.

{{< figure align=center src="images/ether.png" alt="¿Qué es TestNet?">}}

En nuestras publicaciones de blog anteriores, escribimos sobre múltiples temas que incluyen [tecnología blockchain para negocios][1], [escribir un contrato inteligente básico][2] y [plataformas populares de blockchain][3]. Hay otros temas sobre los que escribiremos en el futuro cercano, ya que  **Tecnología de contabilidad descentralizada**  está ganando ritmo con el paso del tiempo. Las personas ahora están comenzando a interesarse en las plataformas de gestión de activos digitales debido a la seguridad y la transparencia. Además, las transacciones digitales son rastreables, inmutables y tales factores dan confianza a las personas con respecto a la confiabilidad de esta tecnología. Hay tres tipos de blockchain público, privado y permiso. Sin embargo, los usuarios pueden adoptar cualquier tipo según su caso de uso.
El advenimiento de esta tecnología ha traído un gran cambio en el sector bancario, ya que ha cambiado la forma de las transacciones financieras. En esta publicación de blog, hablaremos sobre Ethereum Blockchain con respecto a la configuración de Ethereum Node en Localhost y veremos cómo interactuar con la red de pruebas. Cubriremos los siguientes puntos clave.
*  **¿Qué es Testnet?**  
*  **[¿Cómo configurar Ethereum blockchain?][4]**  
*  **[¿Cómo interactuar con Ethereum blockchain?][5]**  
*  **[Conclusión][6]**  

## ¿Qué es TestNet? {#tetstnet}

En esta publicación de blog, vamos a implementar un nodo Ethereum en localhost. Ethereum tiene múltiples redes, la red de producción se llama Mainnet y la red que se utiliza para fines de prueba se llama TestNet. La mayoría de las aplicaciones descentralizadas se basan en [Ethereum][7] blockchain. El contrato inteligente es un componente integral de esta infraestructura distribuida. Además, Blockchain es una red de computadoras llamada "nodos". Sin embargo, cada nodo contiene una copia de la cadena de bloques y, por lo tanto, participa en la red. Ethereum blockchain también tiene su propia criptomoneda llamada "éter". Todas las transacciones están criptográficamente aseguradas. Además, es una tecnología de contabilidad completa que nunca se apaga o se corrompe. Le permite escribir contratos inteligentes y aplicaciones descentralizadas (DAPPS) que se ejecutan en nodos de blockchain Etherum.
Esta red blockchain distribuida de código abierto utiliza un algoritmo de consenso llamado Prueba de trabajo (POW). Además, la arquitectura de Ethereum comprende cinco capas, como Ethereum Virtual Machine, Ethereum Client API, Smart Contracts, Ethereum nodos y aplicaciones de usuario final. Ethereum Virtual Machine ofrece el software y la arquitectura que reconocen los contratos inteligentes. Los contratos inteligentes son el software que gobierna las transacciones. Existe un fuerte apoyo para Ethereum Blockchain y las empresas Fortune 500 han mostrado un gran interés en hacer el desarrollo a mayor escala utilizando esta tecnología. Además, Ethereum está escrito en el idioma GO y su código fuente está disponible en [Github][8]. Toda la documentación está disponible con respecto a la implementación y el desarrollo, ya que tiene una comunidad vibrante.

## ¿Cómo configurar Ethereum blockchain? {#setup}

Ahora, somos conscientes de lo que es Testnet. En esta sección, configuraremos el nodo Ethereum en nuestra máquina local. Antes de ir más allá, asegúrese de haber instalado los siguientes requisitos previos.
  * [Homebrew][9] (para macOS)

  * [Go7] (brew install go)
Una vez que estén en su lugar, ejecute el siguiente comando para clonar el código fuente:
```
git clone https://github.com/ethereum/go-ethereum
```
Tras un clon exitoso, vaya al directorio:
```
cd go-ethereum
```
Ahora, ejecute el siguiente comando para construir el programa GETH:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Nota
{{_LINE_34_}}
  En el caso de cualquier error, instale Xcode ejecutando Xcode-Select-Instale e intente nuevamente
{{_LINE_36_}}
Entonces, ha configurado todos los requisitos previos y código fuente. Por lo tanto, ejecute el siguiente comando para iniciar el nodo:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Nodo ethereum">}}


## ¿Cómo interactuar con Ethereum blockchain? {#interact}

Esta sección habla sobre la interacción con un nodo Ethereum en ejecución que está completamente sincronizado con la cadena de bloques. Podemos usar el software Geth para interactuar y enviar comandos a la red de prueba.
Para eso, incluamos la variable Build/Bin/Geth en $ Path Entorno ejecutando los siguientes comandos:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Después de eso, detenga el servidor que mencionó anteriormente y ejecute la red de prueba con los siguientes indicadores:
Geth - -testnet --RPC --RPCAPI = "DB, ETH, NET, WEB3, Personal, Web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="¿Qué es TestNet?">}}

A continuación, debe abrir una nueva ventana de terminal y adjuntar el comando geth al nodo ejecutando el siguiente comando:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="plataforma de gestión de activos digitales">}}

Geth abrirá una ventana de consola donde puede interactuar con la red de prueba. El siguiente comando creará una cuenta que contiene la moneda virtual y el par de claves públicas/privadas:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Tecnología de contabilidad descentralizada">}}

Para verificar su cuenta, puede ejecutar el siguiente comando:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="¿Qué es TestNet?">}}

Del mismo modo, hay muchos comandos que puede usar para interactuar con Ethereum blockchain.

## Conclusión {#Conclusión}

Aquí viene el final de este tutorial. Aprendimos  **qué es TestNet** y el proceso de configuración del nodo Ethereum en la máquina local. Ethereum Blockchain es una solución generalizada para la mayoría de las aplicaciones descentralizadas. La mayoría de las empresas y departamentos gubernamentales tienden a adoptar esta tecnología para brindar solidez, transparencia, disponibilidad y responsabilidad. Además, este **tutorial de blockchain**  realmente lo ayudará si planea comenzar el desarrollo en Ethereum blockchain, ya que aprovecha los contratos inteligentes. Etheruem Blockchain es más estable y popular, ya que tiene miles de nodos vivos. Además, las empresas pueden desarrollar e implementar fácilmente redes de blockchain de Ethereum sin pasar ningún tiempo extra. El otro factor detrás de la fiabilidad de Ethereum es que ofrece el desarrollo de contratos inteligentes de una manera que otras plataformas de gestión de activos digitales****no ofrecen.
Las últimas actualizaciones en la red Ethereum han hecho que la red sea más rentable y eficiente. De hecho, hay mucho más material disponible en la nube que demuestra los aspectos importantes de Etheruem con respecto a los propósitos de inversión y desarrollo. Para los desarrolladores, proporciona un ecosistema amigable para los desarrolladores con utilidades prefabricadas. Para los mineros, hay una recompensa en forma de éter cada vez que extraen un nuevo bloque en la cadena de bloques. Además, [Contenerize.com][10] ha publicado muchas publicaciones técnicas de blog y tutoriales sobre productos populares de código abierto en [Blog.Containerize.com][11]. Por lo tanto, manténgase conectado con la categoría [plataformas blockchain][12] para actualizaciones regulares.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Ethereum][7]
  * [What is Ethereum? (ETH)][20]
  * [Fabila Hyperledger][13]
  * [OpenChain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [Consensys quórum][17]
  * [Cómo configurar la red de blockchain de quórum consensys localmente][18]
  * [Top 5 plataformas de blockchain de código abierto en 2020][3]
  * [Una guía básica sobre cómo crear un contrato inteligente de Ethereum][2]
  * [Cómo la tecnología descentralizada actualiza su estrategia comercial][19]



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
 [20]: https://docs.koinize.com/cryptocurrencies/ethereum-eth/
