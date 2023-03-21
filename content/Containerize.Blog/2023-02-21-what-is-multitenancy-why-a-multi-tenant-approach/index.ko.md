---
title: "다수성이란 무엇입니까? | 왜 멀티 테넌트 접근 방식인가?" 
seoTitle: "다수성이란 무엇입니까? | 왜 멀티 테넌트 접근 방식인가?" 
description: "다수성이란 무엇입니까? 이 블로그 게시물을 따라 멀티 테넌시 뒤의 실제 개념을 배우고 확장 가능한 멀티 테넌트 응용 프로그램을 구축하십시오." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "다중 테넌트 응용 프로그램 아키텍처를 설계하고 사용자의 요구 사항을 효율적으로 충족시킵니다. Multitenancy를 통해 확장 가능한 소프트웨어를 구축 할 수있는 방법을 살펴 보겠습니다." 
url: /ko/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## 다중 테넌트 응용 프로그램 아키텍처를 설계하고 사용자의 요구 사항을 효율적으로 충족시킵니다. Multitenancy를 통해 확장 가능한 소프트웨어를 구축 할 수있는 방법을 살펴 보겠습니다.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## 개요
[프로그래밍][1] 범주의 다른 블로그 게시물에 오신 것을 환영합니다. 우리는 다중 테넌트 응용 프로그램 아키텍처에 대해 논의 할 것입니다. 실제로, [Containerize.com][2]는 오픈 소스 제품 스택에 광범위한 멀티 테넌트 앱을 가지고 있습니다. 오픈 소스 다중 테넌트 응용 프로그램에는 [form.io][3], [Botpress][4] 등이 포함됩니다. 또한 이러한 오픈 소스 소프트웨어의 아키텍처, 배포, 개발 및 사용에 관한 완전한 [문서][5]가 있습니다. 이 기사를 작성한 이유는 소프트웨어 개발의 다중 테넌시의 개념을 이해하기 때문입니다. 그래서,  **멀티 테넌시 란 무엇인지 알아 보겠습니다.**  우리는 또한 멀티 테넌시와 멀티 테넌트 대 단일 테넌트 아키텍처의 장단점을 살펴볼 것입니다.
이 게시물에서 다음 사항에 대해 설명합니다.
  * [다수의 란 무엇입니까? 다중 테넌트 대 단일 테넌트][6]
  * [다중 테넌트 응용 프로그램 아키텍처 유형][7]
  * [다중 테넌트 앱의 비즈니스 이점][8]
  * [다중 테넌시의 단점][9]

## Multitenancy 란 무엇입니까? 멀티 테넌트 대 단일 테넌트   {#what-is-multitenancy-multi-tenant-vs-single-tenant}}
Multitenancy는 여러 프론트 엔드, 특히 알려진 임차인을 제공하는 단일 서버 인스턴스를 나타냅니다. 멀티 테넌트 소프트웨어를 발견 할 때 마다이 소프트웨어가 공유 서버의 단일 인스턴스를 실행하고 있으며 여러 세입자 (클라이언트)가 다른 브랜딩 으로이 인스턴스에 연결되어 있다고 뇌에 알려줍니다.
예를 들어, 대학을 위해 구축 된 소프트웨어는 다른 프론트 엔드 브랜딩 및 프로그램 데이터를 가진 다른 부서에 서비스를 제공합니다. 기본적으로 모든 세입자를 실행하고 서비스하는 서버의 단일 인스턴스가 있습니다. 또한 모든 세입자간에 데이터 분리 및 데이터 개인 정보가 있습니다. 또한 모든 임차인은 자체 비즈니스 로직을 가지고 있으며 단일이지만 개인/고립 된 위치에 데이터를 가져오고 저장합니다.

{{< figure align=center src="images/multi-tenant-1.png" alt="다중 테넌트 아키텍처">}}

이제 단일 테넌트 아키텍처를 간단히 살펴 보겠습니다. 단일 테넌트 아키텍처에는 테넌트 당 하나의 서버 인스턴스가 있습니다. 다시 한 번 대학 소프트웨어의 예를 들어 보겠습니다. 단일 테넌트 접근법은 부서 당 하나의 서버 인스턴스를 말하며 인스턴스 수는 부서 수 (테넌트)에 따라 다릅니다.

{{< figure align=center src="images/single-tenant-2.png" alt="단일 테넌트 아키텍처">}}


## 다중 테넌트 응용 프로그램 아키텍처 유형   {#Multi-tenant-Application-Arachitecture}
지금까지 여러분은 다중 테넌시를 이해하고 있으며 이제는 다양한 유형을 살펴볼 것입니다.
**하나의 데이터베이스-하나의 앱 인스턴스** :이 접근 방식은 매우 인기가 있으며 멀티 테넌트 앱을 구축하는 데 널리 사용되었습니다. 이 접근법에 따라 단일 데이터베이스에서 실행되는 응용 프로그램 인스턴스가 하나 있습니다. 또한 공유 스키마가 있으며 임차인의 데이터는 고유 한 ID에 대해 단일 위치에 저장됩니다.
**다중 데이터베이스-하나의 앱 인스턴스 :**이 다중 테넌트 응용 프로그램 아키텍처에서는 응용 프로그램의 한 인스턴스 만 여러 데이터베이스에서 실행됩니다. 모든 테넌트에는 각 임차인 당 모든 정보가 별도로 저장되는 자체 데이터베이스 스키마가 있습니다.
**다중 데이터베이스 - 다중 앱 인스턴스** : 세 번째 접근 방식은 여러 데이터베이스와 함께 여러 서버 인스턴스를 실행하는 것을 말합니다. 공유 된 것이 없으며 각 임차인은 완전히 격리되어 있으며 임차인간에 의존성이 없습니다.

## 멀티 테넌트 앱의 비즈니스 이점   {#Multi-tenant-App의 비즈니스-베니 플리트}
이 섹션에서는 다수를 선택하는 데있어 두드러진 이점을 살펴 보겠습니다. 그러나 우리는 오랫동안 특전에 대해 논의 할 수 있지만 다음과 같은 점을 보자.
**확장 성** : 멀티 테넌트 아키텍처를 쉽게 확장 할 수 있습니다. 선택한 유형에 관계없이 수평 또는 수직으로 확장 할 수 있습니다.
**비용 효율적인** : 다수성을 선택하면 운영 비용이 절약됩니다. 공유 리소스가 있으므로 자원을 확장하는 것은 항상 비용 효율적입니다.
**효율성 및 유연성** : 다중 테넌트 환경에서 개발 및 배포의 효율성을 달성합니다. 예를 들어 공유 데이터베이스 스키마에서 스크립트를 실행하여 모든 세입자를 업데이트 할 수 있습니다.
**더 나은 자원 관리** : 자원 추가 및 제거는 간단합니다. 또한이 아키텍처는 개선되고 잘 관리되는 인프라를 제공합니다. 또한 모든 임차인은 개인이며 안전하며 공유/비 공유 데이터베이스에 액세스 할 수 있습니다.

다중 테넌시의 ## 단점  {#단점-in-multi-tenancy}
이 블로그 게시물의 목적은  **멀티 테넌트 아키텍처를 공정한 의미를 부여하는 것입니다.**  따라서 다중 테넌시에 첨부 된 단점을 살펴 보겠습니다.
**복잡한 인증 메커니즘** : 다수성에서 리소스 할당의 공유 특성으로 인해 데이터 액세스 포인트에 대한 엄격한 프로토콜이 있습니다.
**서버 분류 :** 멀티 테넌트 응용 프로그램 아키텍처를 선택하는 동안 고려해야 할 주요 사항입니다. 모든 임차인은 어떤 이유로 인해 서버가 다운 될 때마다 비 기능적이됩니다.
**개인 정보 보호 위험** : 다중 테넌트 아키텍처에는 위험이 높은 보안 위반이 있습니다. 실제로, 모든 임차인의 데이터는 공유 데이터베이스에 저장되므로 타사 침략으로 인해 데이터 손상 또는 도난이 발생할 수 있습니다.

## 결론
우리는이 블로그 게시물을 여기서 끝내고 있습니다. 이 기사는 **Multitenancy **와 같은 질문에 대한 답을 가지고 있습니까? 또한, 우리는 또한 ** 멀티 테넌트 대 단일 테넌트**  인프라를 탐색했습니다. 또한이 안내서는 다중 테넌트 응용 프로그램 아키텍처 또는 단일 테넌트를 선택할 때 도움이됩니다. 무엇보다도 SaaS를 구축하는 경우 Multitenancy가 첫 번째 선택입니다. "참조"섹션에는 기술 세계에 대한 최신 통찰력을 제공 할 수있는 다른 흥미로운 블로그 게시물이 있습니다.
마지막으로, [Containerize.com][2]는 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 또한 소셜 미디어 계정 [Facebook][10], [LinkedIn][11] 및 [Twitter][12]에서 우리를 따라갈 수 있습니다.

## 질문을하십시오
[포럼][13]에서 귀하의 질문이나 질문에 대해 알려줄 수 있습니다.

## FAQ
**예시적인 멀티 테넌트는 무엇입니까?**
다수성이 무엇인지 알아 보려면이 [링크][6]를 방문하십시오. 예제와 함께 세부 사항이 있습니다.
**멀티 테넌트 아키텍처의 의미는 무엇입니까?**
**멀티 테넌트 응용 프로그램 아키텍처**는 서버의 단일 인스턴스가 여러 임차인 (클라이언트)에 서비스를 제공한다는 것을 의미합니다. 자세한 내용은이 [링크][7]로 이동하십시오.

## 또한보십시오
  * [생성 ai | 생성 인공 지능][14]
  * [Chatgpt를 Google 시트와 통합하는 방법][15]
  * [vscode에서 chatgpt를 사용하는 방법 | VSCODE 확장 코드 GPT][16]
  * [OpenAi chatbot gpt-3 | chatgpt an ai 혁명][17]
  * [인공 지능 소개 | AI는 무엇입니까?][18]

  
[1]: https://blog.containerize.com/category/programming/
[2]: https://www.containerize.com/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/live-chat/botpress/
[5]: https://products.containerize.com/
[6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
[7]: #Types-of-Multi-Tenant-Application-Architecture
[8]: #Business-Benefits-of-Multi-Tenant-App
[9]: #Drawbacks-in-Multi-Tenancy
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
