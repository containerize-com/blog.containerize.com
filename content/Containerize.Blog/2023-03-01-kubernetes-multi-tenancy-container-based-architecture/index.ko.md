---
title: "Kubernetes 다중 테넌시 및 컨테이너 기반 아키텍처" 
seoTitle: "멀티 테넌시 및 컨테이너 기반 아키텍처" 
description: "이 안내서를 따라 컨테이너 기반 아키텍처에서 다중 테넌시를 얻는 방법을 알아보십시오. Kubernetes 다중 테넌시는 공유 리소스를 나타냅니다" 
date: 2023-03-01T00:00:00+00:00
author: muhammadmustafa
summary: "이 안내서를 따라 컨테이너 기반 아키텍처에서 다중 테넌시를 얻는 방법을 알아보십시오. Kubernetes 다중 테넌시는 공유 리소스를 나타냅니다" 
url: /ko/kubernetes-multi-tenancy-container-based-architecture/
categories: ['Programming']
---

## Kubernetes 클러스터 리소스는 모든 세입자 사이에서 공유됩니다. 다중 테넌트 컨테이너 호스트 접근 방식을 구현하여 최적화 및 리소스 절약 응용 프로그램을 배포합니다.

{{< figure align=center src="images/Kubernetes Multi-Tenancy & Container-Based Architecture.png" alt="Kubernetes 멀티 테넌시 및 컨테이너 기반 아키텍처 "  caption="Kubernetes 멀티 테넌시 및 컨테이너 기반 아키텍처" >}}


## 개요
우리는 일련의 멀티 테넌시에 또 다른 흥미로운 블로그 게시물을 가지고 있습니다. 이전 [Article][1]에서 우리는 멀티 테넌트 앱, 장점 및 단점 및 다중 테넌트 아키텍처의 기본 개념을 다루었습니다. 여러 사용자/임차인에게 서비스를 제공 할 때가 많기 때문에 효율적인 방식으로 리소스를 관리하고 활용합니다. 따라서 다중 테넌시는 다양한 고객/테넌트를 동시에 처리하는 인프라를 구축하는 최고의 접근 방식입니다. 그러나 가장 최근의 [블로그 게시물][2]는 서버리스 아키텍처, 컨테이너화 및 [Kubernetes][3]를 보여 주었다. 따라서이 기사에서는 멀티 테넌시 및 컨테이너 기반 아키텍처를 탐색 할 것입니다. 또한 [컨테이너화 된][4] 앱에서 다중 테넌시를 달성 할 수있는 방법을 볼 수 있습니다.
이 기사에서는 다음 사항이 다루어야합니다.
* **[다중 테넌트 컨테이너 호스트][5]** 
* **[Kubernetes Multi-Tenancy][6]** 

## 다중 테넌트 컨테이너 호스트 {#Multi-Tenant-container-hosts}

멀티 테넌트 응용 프로그램 배포는 호스팅 플랫폼과 관련하여 중요한 작업입니다. 당신은 모두 컨테이너가 가상 머신에 비해 가볍다는 것을 알고 있습니다. 애플리케이션 배포는 배포를 완료하는 데 몇 밀리 초 밖에 걸리지 않지만 가상 머신의 경우 몇 초에서 몇 분 정도가 될 수 있습니다.
그러나 컨테이너 기반 아키텍처에서 다중 테넌시를 달성하는 것은 매우 간단합니다. 모든 임차인은 완전히 격리 및 데이터 개인 정보를 갖춘 별도의 컨테이너로 호스팅됩니다. 즉, 컨테이너 수는 세입자 수에 따라 다릅니다. 또한 다음 도구 가이 접근법을 달성하는 데 사용됩니다.
  * Docker와 Docker Compose
  * nginx
  * 데이터베이스 인스턴스
  * 응용 프로그램 서버
Docker를 사용하여 컨테이너를 만들기위한 템플릿 인 이미지를 작성합니다. 또한 Docker Compose를 사용하여 여러 컨테이너 호스트를 회전시킵니다. 또한 Nginx를 사용하여 들어오는 요청을 적절한 테넌트에게 리디렉션합니다. 따라서 모든 컨테이너 호스트에는 응용 프로그램 및 데이터베이스 인스턴스가 업 및 실행됩니다. 이 **다중 테넌트 컨테이너 호스트** 방법은 리소스 집약적이지 않으며 다양한 임차인을 관리하고 데이터 격리 및 보안을 보장하는 데 견고성을 제공합니다.

## Kubernetes 다중 테넌시 {#Kubernetes-Multi-Tenancy-}

Kubernetes에는 아키텍처에 노드, 클러스터, 제어 평면 등이 많은 구성 요소가 포함되어 있습니다. 기본적으로 Kubernetes에는 내장 된 멀티 테넌시가 없지만 달성 할 수 있습니다. 따라서 Kubernetes 클러스터 및 제어 평면을 실행하고 공유하는 여러 응용 프로그램/테넌트가 있습니다. 반면, 단일 테넌트 앱에서 응용 프로그램의 단일 인스턴스는 전체 Kubernetes 클러스터를 차지합니다.

{{< figure align=center src="images/kubernetes.svg" alt="Kubernetes 다중 테넌시" >}}

또한 조금 더 깊이 갈 수는 Kubernetes 클러스터에서 테넌트 호스팅에 대해 배우게됩니다. 모든 임차인은 코드를 구성하고 이름 충돌을 방지하는 Kubernetes 네임 스페이스와 관련이 있습니다. Kubernetes에서 다중 테넌시 달성에 대한 세 가지 접근법이 있습니다. 첫 번째는 서비스로서 네임 스페이스이고 두 번째는 서비스로 클러스터이고 세 번째는 서비스로서 제어 평면입니다.
공정하게 말하면, Kubernetes Multi-Tenancy는 여러 사용자 인터페이스를 다루는 조직에 비용 효율적인 솔루션을 제공합니다. 실제로 사용자 관리 및 더 나은 리소스 관리와 같은 몇 가지 과제에 직면 할 수 있습니다. 그럼에도 불구하고, 그것은 사용 사례와 당신이 목표로하는 응용 프로그램의 특성에 전적으로 달려 있습니다.

## 결론
이것은 우리를이 블로그 게시물의 끝으로 가져옵니다. 우리는 Multi-Tenancy를 달성하기 위해 **Kubernetes Multi-Tenancy & Container Based Architecture**를 통과했습니다. 또한 Kubernetes와 함께 멀티 테넌트 앱을 연결하는 데 사용할 수있는 많은 타사 라이브러리가 있습니다. 이 블로그 게시물은**멀티 테넌트 컨테이너 호스트** 의 개념을 이해하는 데 도움이됩니다. "참조"섹션에서 찾을 수있는 다른 흥미로운 블로그 게시물이 있습니다.

## 우리와 접촉
마지막으로, [Containerize.com][7]는 다양한 오픈 소스 제품 및 주제에 대한 진행중인 블로그 게시물을 제공합니다. [Facebook][8], [LinkedIn][9] 및 [Twitter][10]을 포함한 소셜 미디어 플랫폼에서 우리를 따라갈 수 있습니다.

## 질문을하십시오
[포럼][11]에서 귀하의 질문이나 질문에 대해 알려줄 수 있습니다.

## FAQ
**Kubernetes의 다중 테넌시 란 무엇입니까?** ?
Kubernetes Multi-Tenancy를 알기 위해이 [Link][6]를 따르십시오.
**멀티 테넌트 대 단일 테넌트 클러스터는 무엇입니까?** 
멀티 테넌트 클러스터에서 모든 임차인/클라이언트는 Kubernetes 클러스터를 공유하는 반면 단일 테넌트 클러스터에는 각 임차인에 대해 하나의 별도 클러스터가 실행됩니다.

## 또한보십시오
  * [서버리스 컴퓨팅 란 무엇입니까? | 서버리스 아키텍처][12]
  * [다수의 란 무엇입니까? | 왜 멀티 테넌트 접근 방식인가?][13]
  * [생성 ai | 생성 인공 지능][14]
  * [Chatgpt를 Google 시트와 통합하는 방법][15]
  * [vscode에서 chatgpt를 사용하는 방법 | VSCODE 확장 코드 GPT][16]
  * [OpenAi chatbot gpt-3 | chatgpt an ai 혁명][17]
  * [인공 지능 소개 | AI는 무엇입니까?][18]



[1]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[2]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/#Serverless-vs-Containers
[3]: https://products.containerize.com/devops/kubernetes/
[4]: https://www.containerize.com/
[5]: #Multi-Tenant-container-hosts
[6]: #Kubernetes-Multi-Tenancy-
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
