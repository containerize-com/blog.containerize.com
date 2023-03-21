---
title: "Consensys Quorum 블록 체인 네트워크를 로컬로 설정하는 방법" 
seoTitle: "Consensys Quorum 블록 체인 네트워크를 로컬로 설정하는 방법" 
description: "이 안내서를 따라 LocalHost에 Consensys Quorum 블록 체인의 설치 과정에 대해 알아보십시오. Consensys Quorum은 오픈 소스 Etherum 기반 블록 체인입니다." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "비즈니스 디지털 거래를 관리하고 모니터링하기 위해 자체 공개/개인 블록 체인 네트워크를 설정하십시오. LocalHost에서 Consensys Quorum을 설정하는 방법을 배우겠습니다." 
url: /ko/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## 비즈니스 디지털 거래를 관리하고 모니터링하기 위해 자체 공개/개인 블록 체인 네트워크를 설정하십시오. LocalHost에서 Consensys Quorum을 설정하는 방법을 배우겠습니다.

{{< figure align=center src="images/quorum.png" alt="Consensys Quorum">}}


## 개요
최근에, 우리는 [2020 년의 상위 5 개 오픈 소스 블록 체인 플랫폼][1], [이더 리움 스마트 계약을 만드는 방법에 대한 기본 안내서][2], [2], [어떻게 분산 된 방법 기술은 비즈니스 전략을 업그레이드합니다. [3] 및 [LocalHost에서 이더 리움 노드 설정을위한 초보자 안내서][4]. 이 기사에서는 다음 사항을 다루어 LocalHost에서 Consensys Quorum 블록 체인 네트워크를 설정하는 방법을 살펴 보겠습니다.
  * **[Consensys Quorum의 간단한 소개][5]**
  * **[사전 반품 및 **설치 절차는 무엇입니까 **?][6]** 
  * **[네트워크를 시작하는 방법?][7]**
  * **[결론][8]**

##  **Consensys Quorum의 간단한 소개**    {#introduction}
[Consensys Quorum][9]는 **분산 원장 기술 **를 기반으로 한 오픈 소스 플랫폼입니다. 그러나 빠르고 처리량이 많은 트랜잭션을 처리하는 블록 체인 기반 애플리케이션을 구축 할 수있는 완전히 개발자 친화적 인 환경을 제공합니다.  **이더 리움 **  기반이며 확장 가능하며 많은 플러그인을 제공합니다. 또한이 오픈 소스 분산 시스템에는 높은 보안 및 개인 정보 보호 표준이 제공됩니다. 또한 API 권한 및 모니터링과 같은 많은 강력한 기능이 있습니다. 또한,이 ** DLT 플랫폼** 는 자체 주최되며 개발 및 배포에 관한 자세한 문서를 제공합니다. 이 무료 소프트웨어의 소스 코드는 [Github][10]에서 사용할 수 있습니다.
Consensys Quorum은 다음과 같은 중요한 기능을 제공합니다.
  * 플러그 가능한 아키텍처
  * 이더 리움 기반
  * 안전한
  * 자조
  * 공개/개인 네트워크
[Consensys Quorum에 대해 자세히 알아보십시오][11]

## ** **사전 반품 및 설치 절차는 무엇입니까?** **   {##pre-refiesites}
이 섹션에서는 필요한 종속성을 설치하고 지역 환경을 설정합니다. 다음 단계로 가기 전에 다음과 같은 사전 반품을 설치했는지 확인하십시오.
  * nodejs v10+
  * 도커
  * Docker-Compose
사전 반품이 설치되면 다음 명령을 실행하여 CLI 기반 QuickStart 유틸리티를 시작하십시오.
```
npx quorum-dev-quickstart
```
그러나 아래 이미지와 같이 설치를 완료하려면 질문에 답하십시오.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Consensys Quorum">}}


## ** **네트워크를 시작하는 방법?** **   {#Start}
이제 소스 코드가 있습니다. 따라서 다음 단계는 네트워크를 실시간으로 만드는 것입니다.
루트 디렉토리로 들어가려면 다음 명령을 실행하십시오.
```
cd quorum-test-network
```
그런 다음 다음 명령을 실행하여 모든 Docker 컨테이너를 시작하십시오.
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Consensys Quorum">}}

모든 Docker 컨테이너가 가동되고 실행되면 다음 주소에서 블록 탐색기에 액세스 할 수 있습니다.
```
http://localhost:25000
```
[] ()
또한 아래 이미지와 같이 블록 탐색기와 상호 작용할 수 있습니다.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="오픈 소스 분산 시스템">}}

마찬가지로 다음 명령을 실행하여 전체 네트워크를 중지 할 수 있습니다.
```
./stop.sh 
```

## 결론   {#conclusion}
이것이이 튜토리얼의 끝입니다. 무엇보다도, 이더 리움에 본사를 둔 Consensys Quorum은 금융 사용 사례를 위해 특별히 개발 된 디지털 금융 기술**입니다. 투표 기반 합의 알고리즘이 있습니다. 그러나이 분산 기술의 주요 동기는 기업을위한 효율적인 솔루션을 구축하는 것입니다.
마지막으로, [Containerize.com][12]는 [blog.containerize.com][13]에서 인기있는 오픈 소스 제품에 대한 많은 기술 블로그 게시물과 자습서를 게시했습니다. 따라서 정기적 인 업데이트를 위해 [블록 체인 플랫폼][14] 범주를 고수하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [Ethereum][15]
  * [Hyperledger 직물][16]
  * [Openchain][17]
  * [리플][18]
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
