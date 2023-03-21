---
title: "Cómo configurar la red de blockchain de quórum consensys localmente" 
seoTitle: "Cómo configurar la red de blockchain de quórum consensys localmente" 
description: "Siga esta guía para conocer el proceso de instalación de Consensys Quorum Blockchain en Localhost. Consensys Quorum es de código abierto basada en blockchain basada en Etherum." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Establezca su propia red de blockchain pública/privada para administrar y monitorear las transacciones digitales comerciales. Aprendamos a configurar el quórum consensado en localhost." 
url: /es/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## Establezca su propia red de cadena de bloques pública/privada para administrar y monitorear las transacciones digitales comerciales. Aprendamos cómo configurar el quórum Consensys en localhost.

{{< figure align=center src="images/quorum.png" alt="Quórum consensado">}}


## Descripción general
En el pasado reciente, publicamos publicaciones de blog sobre algunos temas relacionados con la cadena de bloques, como [Top 5 Open Source Blockchain La tecnología actualiza su estrategia comercial][3] y [una guía para principiantes para configurar el nodo Ethereum en localhost][4]. En este artículo, veremos cómo configurar la red de blockchain de quórum Consensys en localhost cubriendo los siguientes puntos.
  ***[Una breve introducción del quórum consensible][5]** 
  ***[¿Cuáles son los pre-requisitos y  **Procedimiento de instalación ** ?][6]** 
  ***[¿Cómo iniciar la red?][7]** 
  ***[Conclusión][8]** 

## **Una breve introducción de consensys quórum**    {#Introduction}
[Consensys Quorum][9] es una plataforma de código abierto basada en **Tecnología del libro mayor descentralizado **. Sin embargo, proporciona un entorno completamente amigable para el desarrollador para construir aplicaciones basadas en blockchain que manejen transacciones rápidas y de alto rendimiento. Es  **Ethereum **  basado, extensible y ofrece muchos complementos. Además, este sistema distribuido de código abierto viene con altos estándares de seguridad y privacidad. Además, hay muchas características potentes, como API de permiso y monitoreo. Además, esta  **Plataforma DLT**   está autohospedada y proporciona documentación detallada con respecto al desarrollo y la implementación. El código fuente de este software gratuito está disponible en [Github][10].
Consensys Quorum ofrece las siguientes características importantes:
  * Arquitectura conectable
  * Basado en Ethereum
  * Seguro
  * Autohostado
  * Red pública/privada
[Obtenga más información sobre el quórum consensible][11]

## ****¿Cuáles son los requisitos previos y el procedimiento de instalación? ****    {#pre-requisitos}
En esta sección, instalaremos las dependencias requeridas y configuraremos el entorno local. Antes de ir al siguiente paso, asegúrese de haber instalado los siguientes requisitos previos:
  * NodeJS V10+
  * Docker
  * Docker-Compose
Una vez que se instalen los requisitos previos, ejecute el siguiente comando para iniciar la utilidad QuickStart basada en CLI.
```
npx quorum-dev-quickstart
```
Sin embargo, responda las preguntas para completar la instalación como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Quórum consensado">}}


## ****¿Cómo iniciar la red? ****    {#start}
Ahora, tenemos el código fuente en su lugar. Entonces, el siguiente paso es hacer que la red viva.
Ejecute el siguiente comando para ingresar al directorio raíz.
```
cd quorum-test-network
```
Después de eso, ejecute el siguiente comando para iniciar todos los contenedores Docker:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Quórum consensado">}}

Una vez que todos los contenedores de Docker están en funcionamiento, puede acceder al explorador de bloques en la siguiente dirección:
```
http://localhost:25000
```
[] ()
Además, puede interactuar con el explorador de bloques como se muestra en la imagen a continuación.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="Sistema distribuido de código abierto">}}

Del mismo modo, puede detener toda la red ejecutando el siguiente comando:
```
./stop.sh 
```

## conclusión   {#conclusion}
Este es el final de este tutorial. Sobre todo, el quórum Consensys basado en Ethereum es una tecnología financiera digital  ****  especialmente desarrollada para casos de uso financiero. Tiene un algoritmo de consenso basado en la votación. Sin embargo, el motivo principal de esta tecnología descentralizada es crear soluciones eficientes para las empresas.
Finalmente, [Contenerize.com][12] ha publicado muchas publicaciones técnicas de blog y tutoriales sobre productos populares de código abierto en [Blog.Containerize.com][13]. Por lo tanto, siga la categoría [plataformas blockchain][14] para actualizaciones regulares.

## Explorar
Puede encontrar los siguientes enlaces relevantes:
  * [Ethereum][15]
  * [Fabric de Hyperledger][16]
  * [OpenChain][17]
  * [Ripple][18]
  * [Multichain][19]
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
