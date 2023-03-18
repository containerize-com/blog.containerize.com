---
title: "Tutorial de contrato inteligente | Desarrollo de blockchain de Ethereum" 
seoTitle: "Tutorial de contrato inteligente | Desarrollo de blockchain de Ethereum" 
description: "Este tutorial de contrato inteligente elabora los pasos básicos para crear contratos inteligentes de Ethereum. Ethereum es una red de blockchain de código abierto, segura y distribuida." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereum es una plataforma madura para crear contratos inteligentes y aplicaciones descentralizadas (DAPPS). Siga estos pasos para crear, probar e implementar contratos inteligentes." 
url: /es/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum es una plataforma madura para crear contratos inteligentes y aplicaciones descentralizadas (DAPPS). Siga estos pasos para crear, probar e implementar contratos inteligentes.

{{< figure align=center src="images/contract.png" alt="Tutorial de contrato inteligente">}}


## Descripción general
En el pasado reciente, publicamos una [publicación de blog] [1] que destaca el impacto y la importancia de la tecnología blockchain. Hay otra publicación de blog interesante [¿Qué es NFT? | Tokens no fungibles explicados] [2]. La tecnología de contabilidad distribuida se basa en algunos conceptos centrales, como contratos inteligentes, nodos, minería, algoritmos de consenso, transacciones digitales y redes entre pares. Como es de código abierto, por lo tanto, hay una gran ventana para una extensión con respecto a los casos de uso. De hecho, hay muchas plataformas de gestión de activos digitales gratuitos y de código abierto que se distribuyen y requieren algún software para gobernar las transacciones.
En este tutorial de contrato inteligente, aprenderemos cómo construir un contrato inteligente de Ethereum cubriendo los siguientes puntos de bala.
  *[** ¿Qué es un contrato inteligente? **] [3]
  *[** ¿Cómo construir un contrato inteligente básico? **] [4]
  *[** ¿Cómo ejecutar e implementar un contrato inteligente? **] [5]
  *[** Conclusión **] [6]

## ¿Qué es un contrato inteligente? {#qué}
Un contrato inteligente es un programa que se ejecuta en la cadena de bloques para gobernar las transacciones digitales. Esta pieza de código contiene las reglas y procedimientos definidos que se aseguran de la transparencia de una transacción. Cada contrato inteligente contiene una dirección y esa dirección se utiliza para acceder a cualquier función de un contrato inteligente en particular. Además, los contratos inteligentes traen transparencia, confianza y seguridad a la red blockchain. Estas piezas de código se ejecutan automáticamente una vez que se cumplen ciertas condiciones.
Sin embargo, cualquier desarrollador puede escribir un contrato inteligente e implementarlo a través de la red. Además, los contratos inteligentes hacen que los procesos sean bastante robustos, ya que no hay dependencia involucrada en la ejecución de estas piezas de código. Además, los contratos inteligentes almacenan la información necesaria relacionada con cada transacción que los participantes pueden recuperar y verificar. Muchas industrias, como la atención médica, la banca, están adoptando esta tecnología de contabilidad distribuida. Las instituciones gubernamentales también están interesadas en implementar aplicaciones descentralizadas (DAPP) para llevar la autenticidad y la transparencia al sistema electoral. Hay muchas [plataformas blockchain] [7] como [Ethereum] [8], [Ripple] [9], [Corda] [10], y algunos más, sin embargo, en esta guía, construiremos nuestro primer contrato inteligente en Ethereum.

## ¿Cómo construir un contrato inteligente básico? {#construir}
En esta sección del tutorial de contrato inteligente, veremos los pasos para configurar el entorno para nuestro primer contrato inteligente.
Los contratos inteligentes se pueden escribir en muchos idiomas, pero usaremos [solidez] [11] Ese es un idioma de alto nivel para escribir contratos inteligentes.
Usaremos [Ethereum Studio] [12] que es un IDE basado en la web. Se utiliza para escribir contratos inteligentes, así como aplicaciones descentralizadas para interactuar con contratos inteligentes. Proporciona algunas plantillas de proyecto previamente construidas donde puede comenzar a escribir su lógica de inmediato.
Entonces, abra el IDE [Ethereum Studio] [12] en el navegador y verá la siguiente interfaz.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Tutorial de contrato inteligente">}}

Elegamos la opción "Hello World" y creemos nuestro primer proyecto. Puedes ver la estructura del directorio. Además, hay una ventana de salida en el lado derecho.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Tutorial de contrato inteligente">}}

Hay dos carpetas "aplicación" y "contratos".
La carpeta de aplicaciones pertenece a la aplicación web y contiene los siguientes archivos.
  *** app.css **: para el estilo de diseño
  *** App.html **: para la página de inicio
  *** App.js **: contiene la lógica comercial para conectar front -end con el contrato inteligente
Del mismo modo, la carpeta de contratos contiene el archivo fuente del contrato.
Ahora, abramos el archivo helloworld.sol que se puede encontrar en archivos/contratos/helloworld.sol. Básicamente, este es el archivo principal que contiene el código para el contrato inteligente escrito en solidez. Puede modificar el código si lo desea, lo dejaremos como está.

## ¿Cómo ejecutar e implementar un contrato inteligente? {#desplegar}
En esta sección del tutorial de contrato inteligente, veremos cómo ejecutar e implementar un contrato inteligente. Ethereum Studio compila el código de solidez en el código de byte. Por lo tanto, guarde el código e implementemos nuestro primer contrato inteligente.
En el panel lateral izquierdo, presione el ícono del cohete.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="¿Qué es un contrato inteligente?">}}

Puede configurar y establecer los valores iniciales para su contrato inteligente como se muestra a continuación.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Contrato inteligente de Ethereum">}}

Presione el botón "Guardar" y presione el botón "Implementar" para implementar el contrato inteligente. Verá la siguiente salida y un mensaje en la ventana de la consola en la parte inferior. La ventana de la consola proporciona detalles como la dirección de contrato inteligente, Nonce, Gasslimit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="¿Qué es un contrato inteligente?">}}

Después de eso, hay otra opción en el panel en el lado izquierdo y esa es la opción Interact. Esta opción le permite interactuar con su contrato inteligente llamando a su función y valores de aprobación.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="¿Qué es un contrato inteligente?">}}

Además, hay una aplicación frontal que permite a los usuarios interactuar con el contrato inteligente del navegador. Esta aplicación basada en la web se llama aplicación descentralizada. Puede pasar el valor y ver la ventana de la consola.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="¿Qué es un contrato inteligente?">}}


## conclusión {#con}
Esto nos lleva al final de este tutorial de contrato inteligente. Espero que este artículo lo haya ayudado a comprender los pasos clave de construir e implementar el contrato inteligente de Ethereum. A medida que la tecnología blockchain está evolucionando a un ritmo alto, es hora de obtener una práctica práctica sólida sobre el sistema de eco de blockchain. Esta tecnología de contabilidad distribuida es altamente configurable y extensible. Esta publicación de blog realmente lo ayudará si está dispuesto a aprender el desarrollo inteligente de contratos. Además, hay muchos tutoriales útiles y plataformas de gestión de activos digitales de código abierto mencionadas en la sección "Explorar" a continuación.
Al final, [Contenerize.com] [13] está completamente dedicado a compilar la lista de software de código abierto. Hay muchos tutoriales y publicaciones de blog sobre software de código abierto y varias publicaciones de blog están en proceso. Por lo tanto, manténgase en contacto con la categoría [plataformas blockchain] [7] para actualizaciones regulares.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Ethereum] [8]
  * [Fabric de Hyperledger] [14]
  * [OpenChain] [15]
  * [Ripple] [16]
  * [Multichain] [17]
  * [Consensys Quorum] [18]
  * [¿Qué es NFT? | Tokens no fungibles explicados] [2]
  * [Cómo configurar la red de blockchain de quórum consensys localmente] [19]
  * [Top 5 plataformas de blockchain de código abierto en 2020] [20]
  * [Una guía básica sobre cómo crear un contrato inteligente de Ethereum] [21]
  * [Cómo la tecnología descentralizada actualiza su estrategia comercial] [22]
  * [Cómo configurar la red de blockchain de quórum consensys localmente] [19]
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
