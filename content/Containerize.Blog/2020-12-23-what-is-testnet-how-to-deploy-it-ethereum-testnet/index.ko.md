---
title: "TestNet이란 무엇입니까? 그리고 배포하는 방법 | 이더 리움 테스트니 '" 
seoTitle: "TestNet이란 무엇입니까? 그리고 배포하는 방법 | 이더 리움 테스트 넷" 
description: "Testnet이란 무엇입니까? 이 안내서는 LocalHost에서 Ethereum 노드를 설정하는 방법에 관한 것입니다. 블록 체인은 모든 트랜잭션의 기록을 유지하는 노드 네트워크입니다." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "이더 리움은 연결된 노드의 오픈 소스 블록 체인 피어 투 피어 네트워크입니다. 로컬 서버에서 Ethereum 노드를 배포하고 상호 작용하는 방법을 배우겠습니다." 
url: /ko/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum은 연결된 노드의 오픈 소스 블록 체인 피어 투 피어 네트워크입니다. 로컬 서버에서 Ethereum 노드를 배포하고 상호 작용하는 방법을 배우겠습니다.

{{< figure align=center src="images/ether.png" alt="Testnet이란 무엇입니까?">}}

이전 블로그 게시물에서, 우리는 [Blockchain for Business][1], [기본 스마트 계약 작성][2] 및 [인기있는 블록 체인 플랫폼][3]를 포함하는 여러 주제에 대해 썼습니다.  **분산 원장 기술**  가 시간의 흐름에 따라 속도를 높이기 때문에 가까운 시일 내에 우리가 쓸 주제가 있습니다. 사람들은 이제 보안 및 투명성으로 인해 디지털 자산 관리 플랫폼에 관심을 갖기 시작했습니다. 또한, 디지털 거래는 추적 가능하고 불변이며 이러한 요소는이 기술의 신뢰성에 관한 사람들에게 자신감을줍니다. 블록 체인 공개, 개인 및 권한이있는 세 가지 유형이 있습니다. 그러나 사용자는 사용 사례에 따라 모든 유형을 채택 할 수 있습니다.
이 기술의 출현은 금융 거래 방식을 바꾸면서 은행 부문에 큰 변화를 가져 왔습니다. 이 블로그 게시물에서는 LocalHost에서 Ethereum 노드 설정과 관련하여 Ethereum 블록 체인에 대해 이야기하고 테스트 네트워크와 상호 작용하는 방법을 볼 수 있습니다. 우리는 다음 핵심 요점을 다룰 것입니다.
*  **Testnet이란 무엇입니까?**  
*  **[이더 리움 블록 체인을 설정하는 방법?][4]**  
*  **[이더 리움 블록 체인과 상호 작용하는 방법?][5]**  
*  **[결론][6]**  

## Testnet이란 무엇입니까? {#tetstnet}

이 블로그 게시물에서는 LocalHost에 이더 리움 노드를 배포 할 예정입니다. 이더 리움에는 여러 네트워크가 있으며 프로덕션 네트워크를 Mainnet이라고하며 테스트 목적으로 사용되는 네트워크를 TestNet이라고합니다. 분산 된 응용 분야의 대부분은 [Ethereum][7] 블록 체인을 기반으로합니다. 스마트 계약은이 분산 인프라의 필수 구성 요소입니다. 또한 블록 체인은 "노드"라는 컴퓨터 네트워크입니다. 그러나 각 노드에는 블록 체인 사본이 포함되어있어 네트워크에 참여합니다. 이더 리움 블록 체인에는 "에테르"라는 고유 한 암호 화폐도 있습니다. 모든 거래는 암호화 적으로 보안됩니다. 또한, 절대 ​​종료하거나 손상되지 않는 완전한 원장 기술입니다. 이를 통해 Etherum 블록 체인 노드에서 실행되는 스마트 계약 및 분산 응용 프로그램 (DAPP)을 작성할 수 있습니다.
이 오픈 소스 분산 블록 체인 네트워크는 PROW (Proof of Work)라는 합의 알고리즘을 사용합니다. 또한 이더 리움 아키텍처는 이더 리움 가상 머신, 이더 리움 클라이언트 API, 스마트 계약, 이더 리움 노드 및 최종 사용자 애플리케이션과 같은 5 개의 레이어로 구성됩니다. 이더 리움 가상 기계는 스마트 계약을 인식하는 소프트웨어 및 아키텍처를 제공합니다. 스마트 계약은 거래에 적용되는 소프트웨어입니다. 이더 리움 블록 체인에 대한 강력한 지원이 있으며 Fortune 500 대 기업은이 기술을 사용하여 더 큰 규모로 개발에 큰 관심을 보였습니다. 또한 Ethereum은 GO 언어로 작성되었으며 소스 코드는 [GitHub][8]에서 사용할 수 있습니다. 생생한 커뮤니티가 있으므로 배포 및 개발과 관련하여 모든 문서를 사용할 수 있습니다.

## 이더 리움 블록 체인을 설정하는 방법? {#setup}

이제 우리는 TestNet이 무엇인지 알고 있습니다. 이 섹션에서는 로컬 컴퓨터에 이더 리움 노드를 설정합니다. 더 나아 가기 전에 다음 전제 조건을 설치했는지 확인하십시오.
  * [Homebrew][9] (MacOS의 경우)

  * [go7] (brew install go)
전제 조건이 마련되면 다음 명령을 실행하여 소스 코드를 복제하십시오.
```
git clone https://github.com/ethereum/go-ethereum
```
성공적인 클론에서 디렉토리로 이동하십시오.
```
cd go-ethereum
```
이제 Geth 프로그램을 구축하려면 다음 명령을 실행하십시오.
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    메모
{{_LINE_34_}}
  오류가 발생한 경우 Xcode-Select를 실행하여 Xcode를 설치하고 다시 시도하십시오.
{{_LINE_36_}}
따라서 모든 전제 조건 및 소스 코드를 설정했습니다. 따라서 노드를 시작하려면 다음 명령을 실행하십시오.
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="이더 리움 노드">}}


## 이더 리움 블록 체인과 상호 작용하는 방법? {#interact}

이 섹션에서는 블록 체인과 완전히 동기화 된 실행중인 이더 리움 노드와의 상호 작용에 대해 설명합니다. Geth 소프트웨어를 사용하여 테스트 네트워크에 명령을 상호 작용하고 보낼 수 있습니다.
이를 위해 다음 명령을 실행하여 $ 경로 환경 변수에 Build/Bin/Geth를 포함하겠습니다.
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
그런 다음 위에서 제기 한 서버를 중지하고 다음 플래그로 테스트 네트워크를 실행하십시오.
geth --testnet ---rpc ---rpcapi = "db, eth, net, web3, personal, web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="Testnet이란 무엇입니까?">}}

다음으로 새 터미널 창을 열고 다음 명령을 실행하여 Geth 명령을 노드에 첨부해야합니다.
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="디지털 자산 관리 플랫폼">}}

Geth는 테스트 네트워크와 상호 작용할 수있는 콘솔 창을 열 것입니다. 다음 명령은 가상 통화 및 공개/개인 키 쌍을 보유하는 계정을 만듭니다.
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="분산 원장 기술">}}

계정을 확인하려면 다음 명령을 실행할 수 있습니다.
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="Testnet이란 무엇입니까?">}}

마찬가지로, 이더 리움 블록 체인과 상호 작용하는 데 사용할 수있는 많은 명령이 있습니다.

## 결론 {#결론}

여기이 튜토리얼의 끝이 온다. 우리는  **Testnet** 와 로컬 컴퓨터의 이더 리움 노드의 설정 과정을 배웠습니다. 이더 리움 블록 체인은 대부분의 분산 응용 분야를위한 일반화 된 솔루션입니다. 대부분의 비즈니스 및 정부 부서는 견고성, 투명성, 가용성 및 책임을 가져 오기 위해이 기술을 채택하는 경향이 있습니다. 또한,이  **블록 체인 자습서**  는 스마트 계약을 활용할 때 이더 리움 블록 체인의 개발을 시작할 계획이라면 실제로 도움이됩니다. Etheruem 블록 체인은 수천 개의 라이브 노드가 있기 때문에 더 안정적이고 인기가 있습니다. 또한 기업은 추가 시간을 소비하지 않고도 이더 리움 블록 체인 네트워크를 쉽게 개발하고 배포 할 수 있습니다. 이더 리움의 신뢰성의 다른 요인은 다른 **디지털 자산 관리 플랫폼**  가 제공하지 않는 방식으로 스마트 계약 개발을 제공한다는 것입니다.
이더 리움 네트워크의 최신 업데이트로 네트워크를보다 비용 효율적이고 효율적으로 만들었습니다. 실제로 클라우드에는 투자 및 개발 목적과 관련하여 Etheruem의 중요한 측면을 보여주는 더 많은 재료가 있습니다. 개발자에게는 사전 제작 된 유틸리티가있는 개발자 친화적 인 생태계를 제공합니다. 광부의 경우 블록 체인에 새 블록을 채굴 할 때마다 에테르 형태의 현상금이 있습니다. 또한 [Containerize.com][10]는 [Blog.containerize.com][11]에서 인기있는 오픈 소스 제품에 대한 많은 기술 블로그 게시물과 자습서를 게시했습니다. 따라서 정기적 인 업데이트를 위해 [블록 체인 플랫폼][12] 범주와 연결되어 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [Ethereum][7]
  * [What is Ethereum? (ETH)][20]
  * [Hyperledger 직물][13]
  * [Openchain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [Consensys Quorum][17]
  * [Consensys Quorum 블록 체인 네트워크를 현지에서 설정하는 방법][18]
  * [2020 년 상위 5 개 오픈 소스 블록 체인 플랫폼][3]
  * [이더 리움 스마트 계약을 만드는 방법에 대한 기본 안내서][2]
  * [탈 중앙화 된 기술이 비즈니스 전략을 업그레이드하는 방법][19]



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
