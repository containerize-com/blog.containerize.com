---
title: "스마트 계약 자습서 | 이더 리움 블록 체인 개발" 
seoTitle: "스마트 계약 자습서 | 이더 리움 블록 체인 개발" 
description: "이 스마트 계약 자습서는 이더 리움 스마트 계약을 만들기위한 기본 단계를 자세히 설명합니다. 이더 리움은 오픈 소스, 안전한 분산 블록 체인 네트워크입니다." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "이더 리움은 스마트 계약 및 분산 응용 프로그램 (DAPP)을 만들기위한 성숙한 플랫폼입니다. 다음 단계에 따라 스마트 계약을 작성, 테스트 및 배포하십시오." 
url: /ko/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum은 스마트 계약 및 DAPP (DAPPS)를 생성하는 성숙한 플랫폼입니다. 다음 단계에 따라 스마트 계약을 작성, 테스트 및 배포하십시오.

{{< figure align=center src="images/contract.png" alt="스마트 계약 자습서">}}


## 개요
최근에 우리는 블록 체인 기술의 영향과 중요성을 강조하는 [블로그 게시물][1]를 발표했습니다. 또 다른 흥미로운 블로그 게시물이 있습니다 [NFT는 무엇입니까? | 맹렬한 토큰이 설명되었다][2]. 분산 원장 기술은 스마트 계약, 노드, 마이닝, 합의 알고리즘, 디지털 트랜잭션 및 피어 투 피어 네트워크와 같은 일부 핵심 개념을 기반으로합니다. 따라서 오픈 소스이므로 사용 사례와 관련하여 확장을위한 거대한 창이 있습니다. 실제로, 배포되고 거래를 관리하기 위해 일부 소프트웨어가 필요한 오픈 소스 및 무료 디지털 자산 관리 플랫폼이 많이 있습니다.
이 스마트 계약 자습서에서는 다음 탄환 포인트를 다루어 이더 리움 스마트 계약을 구축하는 방법을 배웁니다.
* [**스마트 계약이란 무엇입니까?**][3]
* [**기본 스마트 계약을 구축하는 방법?**][4]
* [**스마트 계약을 실행하고 배포하는 방법?**][5]
* [**결론**][6]

## 스마트 계약이란 무엇입니까?   {#무엇}
스마트 계약은 블록 체인에서 실행되는 프로그램으로 디지털 거래를 관리합니다. 이 코드에는 트랜잭션의 투명성을 보장하는 정의 된 규칙 및 절차가 포함되어 있습니다. 모든 스마트 계약에는 주소가 포함되어 있으며 해당 주소는 특정 스마트 계약의 기능에 액세스하는 데 사용됩니다. 또한 스마트 계약은 투명성, 신뢰 및 보안을 블록 체인 네트워크에 가져옵니다. 이 코드 조각은 특정 조건이 충족되면 자동으로 실행됩니다.
그러나 모든 개발자는 스마트 계약을 작성하여 네트워크를 통해 배포 할 수 있습니다. 또한, 스마트 계약은 이러한 코드의 실행과 관련된 종속성이 없기 때문에 프로세스를 매우 강력하게 만듭니다. 또한 Smart Contracts는 참가자가 검색하고 확인할 수있는 모든 거래와 관련된 필요한 정보를 저장합니다. 의료, 은행과 같은 많은 산업 들이이 분산 원장 기술을 고도로 채택하고 있습니다. 정부 기관은 또한 선거 시스템에 진정성과 투명성을 가져 오기 위해 분산 된 응용 프로그램 (DAPP)을 배치하기를 원합니다. [Ethereum][8], [Ripple][9], [Corda][10]와 같은 많은 [블록 체인 플랫폼][7]이 있으며,이 안내서에는 첫 번째 스마트 계약을 구축 할 것입니다. 이더 리움에서.

## 기본 스마트 계약을 구축하는 방법은 무엇입니까?   {#짓다}
Smart Contract Tutorial 의이 섹션에서는 첫 번째 스마트 계약 환경을 설정하는 단계를 볼 수 있습니다.
스마트 계약은 여러 언어로 작성 될 수 있지만, 우리는 스마트 계약을 작성하기 위해 고급 언어 인 [Solidity][11]를 사용합니다.
우리는 웹 기반 IDE 인 [Ethereum Studio][12]를 사용할 것입니다. 스마트 계약과 상호 작용하기 위해 분산 된 앱뿐만 아니라 스마트 계약을 작성하는 데 사용됩니다. 즉시 논리를 작성하기 시작할 수있는 사전 구축 된 프로젝트 템플릿을 제공합니다.
따라서 [Ethereum Studio][12] IDE를 브라우저에 열면 다음 인터페이스가 표시됩니다.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="스마트 계약 자습서">}}

"Hello World"옵션을 선택하고 첫 번째 프로젝트를 만들어 보겠습니다. 디렉토리 구조를 볼 수 있습니다. 또한 오른쪽에 출력 창이 있습니다.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="스마트 계약 자습서">}}

"앱"과 "계약"이라는 두 개의 폴더가 있습니다.
앱 폴더는 웹 앱에 속하며 다음 파일이 포함되어 있습니다.
***app.css**: 레이아웃 스타일 용
***app.html**: 홈페이지 용
***app.js**: 스마트 계약과 프론트 엔드를 연결하는 비즈니스 로직이 포함되어 있습니다.
마찬가지로 계약 폴더에는 계약의 소스 파일이 포함되어 있습니다.
이제 파일/계약/HelloWorld.sol에서 찾을 수있는 Helloworld.sol 파일을 열어 보겠습니다. 기본적으로 이것은 Solidity로 작성된 스마트 계약에 대한 코드가 포함 된 기본 파일입니다. 원하는 경우 코드를 수정할 수 있습니다.

## 스마트 계약을 실행하고 배치하는 방법은 무엇입니까?   {#deploy}
Smart Contract Tutorial 의이 섹션에서는 스마트 계약을 실행하고 배포하는 방법을 살펴 봅니다. 이더 리움 스튜디오는 견고성 코드를 바이트 코드로 컴파일합니다. 따라서 코드를 저장하고 첫 번째 스마트 계약을 배포하겠습니다.
왼쪽 패널에서 로켓 아이콘을 누릅니다.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="현명한 계약이란 무엇입니까?">}}

아래와 같이 스마트 계약의 초기 값을 구성하고 설정할 수 있습니다.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="이더 리움 스마트 계약">}}

"저장"버튼을 누르고 "배포"버튼을 눌러 스마트 계약을 배포하십시오. 하단의 콘솔 창에 다음 출력과 메시지가 표시됩니다. 콘솔 창은 스마트 계약 주소, Nonce, Gasslimit과 같은 세부 정보를 제공합니다.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="현명한 계약이란 무엇입니까?">}}

그런 다음 왼쪽 패널에 또 다른 옵션이 있으며 이는 상호 작용 옵션입니다. 이 옵션을 사용하면 기능 및 전달 값을 호출하여 스마트 계약과 상호 작용할 수 있습니다.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="현명한 계약이란 무엇입니까?">}}

또한 사용자가 브라우저에서 스마트 계약과 상호 작용할 수있는 프론트 엔드 앱이 있습니다. 이 웹 기반 앱을 분산 앱이라고합니다. 값을 전달하고 콘솔 창을 볼 수 있습니다.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="현명한 계약이란 무엇입니까?">}}


## 결론   {#con}
이것은 우리를이 스마트 계약 자습서의 끝으로 가져옵니다. 이 기사가 이더 리움 스마트 계약을 구축하고 배치하는 주요 단계를 이해하는 데 도움이 되었기를 바랍니다. 블록 체인 기술이 높은 속도로 발전함에 따라 에코 블록 체인 시스템에 대한 강력한 실습 연습을 얻을 때입니다. 이 분산 원장 기술은 구성 가능하고 확장 가능합니다. 이 블로그 게시물은 스마트 계약 개발을 기꺼이 배우려면 실제로 도움이 될 것입니다. 또한 아래의 "탐색"섹션에 언급 된 많은 유용한 자습서와 오픈 소스 디지털 자산 관리 플랫폼이 있습니다.
결국, [Containerize.com][13]는 오픈 소스 소프트웨어 목록을 컴파일하는 데 전념하고 있습니다. 오픈 소스 소프트웨어에 대한 많은 튜토리얼과 블로그 게시물이 있으며 여러 블로그 게시물이 파이프 라인에 있습니다. 따라서 정기적 인 업데이트를 위해 [블록 체인 플랫폼][7] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [Ethereum][8]
  * [Hyperledger 직물][14]
  * [Openchain][15]
  * [Ripple][16]
  * [Multichain][17]
  * [Consensys Quorum][18]
  * [NFT 란 무엇입니까? | 맹세 할 수없는 토큰이 설명된다][2]
  * [Consensys Quorum 블록 체인 네트워크를 현지에서 설정하는 방법][19]
  * [2020 년 상위 5 개 오픈 소스 블록 체인 플랫폼][20]
  * [이더 리움 스마트 계약을 만드는 방법에 대한 기본 안내서][21]
  * [탈 중앙화 된 기술이 비즈니스 전략을 업그레이드하는 방법][22]
  * [Consensys Quorum 블록 체인 네트워크를 현지에서 설정하는 방법][19]

  
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
