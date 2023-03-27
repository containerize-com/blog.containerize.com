---
title: "Keycloak vs IdentityServer4 | 차이점은 무엇입니까?" 
seoTitle: "Keycloak vs IdentityServer4 | 차이점은 무엇입니까?" 
description: "이 블로그 게시물은 두 가지 주요 오픈 소스 아이덴티티 서버 KeyCloak vs IdentityServer4의 비교에 관한 것입니다. 두 소프트웨어 모두 자체 주최 및 풍부한 기능입니다." 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "KeyCloak 및 IdentityServer4는 리소스에 액세스하기 위해 서비스에 단일 사인을 제공하는 오픈 소스 Identity 제공 업체입니다. 이 두 SSO 소프트웨어를 비교해 봅시다." 
url: /ko/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## KeyCloak 및 IdentityServer4는 리소스에 액세스하기 위해 서비스에 단일 사인을 제공하는 오픈 소스 아이덴티티 제공 업체입니다. 이 두 SSO 소프트웨어를 비교해 봅시다.

{{< figure align=center src="images/open-source-sso.png" alt="Keycloak vs IdentityServer4">}}


## 개요
거의 과거에, 우리는 더 나은 비즈니스 성장을 위해 SSO 시스템을 활용하는 방법과 2021 년의 상위 5 개 오픈 소스 단일 사인온 소프트웨어와 같은 주제에 대한 블로그 게시물을 게시했습니다. 핵심 비즈니스에 미치는 영향. 그러나 사용자 관리는 모든 응용 프로그램에서 가장 중요한 측면입니다. 현대 기술 세계에서 사이버 보안은 인기있는 주제입니다. 사용자가 방문, 로그인 및 로그 아웃하는 수많은 응용 프로그램이 있습니다. 여러 세트의 자격 증명을 가진 사용자는 더 취약하고 사이버 공격의 쉬운 목표입니다.
따라서 단일 자격 증명 세트를 사용하여 리소스에 액세스하는 것이 항상 좋은 생각입니다. 단일 사인온 소프트웨어를 통해 사용자는 단일 사용자 이름과 비밀번호를 사용하여 여러 응용 프로그램에 로그인 할 수 있습니다. 사용자는 한 번만 로그인하고 다시 로그인하지 않고 많은 응용 프로그램에 액세스 할 수 있습니다. 오픈 소스 커뮤니티가 [IdentityServer4][1] 및 [keycloak][2]와 같은 오픈 소스 아이덴티티 제공 업체를 개발함에 따라 매일 인기를 얻고 있습니다. 이 블로그 게시물에서는 제목이 Keycloak vs IdentityServer4를 제안함에 따라 상위 두 개의 오픈 소스 SSO 솔루션을 살펴보고 기능과 범위를 비교할 것입니다. 다음 지점이 다루어집니다.
* **[IdentityServer4의 간단한 소개][3]** 
* **[키 클로크 란 무엇입니까?][4]** 
* **[KeyCloak & IdentityServer4의 비교][5]** 
* **[결론][6]** 

## IdentityServer4의 간단한 소개 {#intro}

[IdentityServer4][1]는 OpenID Connect 및 OAUTH 2.0을 기반으로 한 오픈 소스 SSO 소프트웨어입니다. 이 무료 도구는 .NET 프레임 워크 (4.5.x) 및 .NET Core로 작성되어 여러 응용 프로그램에서 단일 사인온 서비스를 제공합니다. 인증 서버로서 디지털 리소스에 액세스하는 데 사용할 수있는 JWT 토큰을 제공합니다. API에 대한 Access Control, 사용자 인터페이스 사용자 정의, API 인증 및 클레임 기반 공급자와 같은 많은 조항을 제공합니다. 또한 유연하고 확장 가능하며 자체 호스팅 기능이 제공됩니다. 또한 Google, Facebook, Twitter 및 기타 소셜 네트워크와 같은 여러 흐름 및 연합 신원을 지원합니다.
이 무료 단일 사인온 소프트웨어의 모든 소스 코드는 [Github][7]에서 사용할 수 있습니다. 따라서 사용자는 배포 및 개발에 관한 모든 문서를 살펴볼 수 있습니다.

## KeyCloak이란 무엇입니까? {#key}

[keycloak][2]는 널리 사용되는 또 다른 인증 솔루션입니다. OpenID Connect, OAUTH2.0 및 SAML 2.0을 사용하여 신원 및 액세스 관리를 제공합니다. 이 무료 소프트웨어는 사용자 친화적 인 UI를 제공하여 사용자, 역할, 구성 및 세션을 관리합니다. 또한 LDAP 및 Active Directory와 같은 타사 응용 프로그램과 통합을 제공합니다. 사용자는 확장 성과 가용성이 향상되어 중앙 집중식 사용자 관리를 활용할 수 있습니다. 무엇보다도 소셜 로그인, 사용자 연맹, 중앙 집중식 관리, 암호 정책, 클러스터링 및 어댑터와 같은 많은 기능과 함께 통합을위한 클라이언트 라이브러리를 제공합니다. 소프트웨어 의이 무료 단일 부호의 모든 소스 코드는 [Github][8]에서 사용할 수 있습니다. 따라서 사용자는 배포 및 개발에 관한 모든 문서를 살펴볼 수 있습니다.

## KeyCloak 및 IdentityServer4의 비교 {#comp}

이 KeyCloak vs IdentityServer4 기사의 섹션에서, 우리는 다음 지점을 다루어 기능과 기타 특성을 조사 하여이 두 개의 오픈 소스 아이덴티티 제공 업체를 비교할 것입니다.
**커뮤니티 스탠딩** :이 모두 무료 SSO 소프트웨어는 커뮤니티에서 잘 보관되어 있습니다. 그러나 KeyCloak은 IdentityServer4와 비교하여 GitHub에 더 나은 통계를 가지고 있습니다. KeyCloak은 9K 플러스 스타와 IdentityServer가 GitHub에서 3K 플러스 스타를 갖춘 스탠드를 확보했습니다. 문서에 관한 한, 무료 인증 솔루션은 배포 및 문서에 관한 포괄적 인 문서와 함께 제공됩니다.
**기능** : 첫째, KeyCloak 및 IdentityServer4는 OpenID Connect 및 OAUTH2.0을 기반으로합니다. 그러나 KeyCloak은 다른 표준 프로토콜 SAML2.0을 사용합니다. KeyCloak에는 사용자 정의 할 수있는 사용자 인터페이스가 있으며 LDAP 및 Active Directory와의 통합을 제공합니다. [IdentityServer4][1]은 OIDC를 사용하여 SSO를 달성하기 위해 OAUTH2 위에있는 인증 계층입니다. 무료 SSO 소프트웨어는 Docker 이미지와 함께 제공되며 개발자는 Docker를 사용하여 설정할 수 있습니다. 또한, IdentityServer4는 KeyCloak에 비해 가벼운 가볍습니다.
**Tech Stack** : 기술에 관한 한 KeyCloak은 주로 Java로 작성됩니다. 둘째, IdentityServer4는 주로 HTML 및 SCSS와 같은 다른 언어의 입력으로 C#으로 작성됩니다.
**Extensibility** : 오픈 소스 소프트웨어의 주요 특성 중 하나이며 SSO 소프트웨어 개발자가 친숙합니다. 이 소프트웨어는 타사 라이브러리와 통합을 제공합니다. 또한 KeyCloak은 Java 및 JavaScript로 작성된 클라이언트 어댑터를 제공합니다.
**보안 :**  KeyCloak 및 IdentityServer4는 보안 메커니즘을 구현했습니다. 또한 IdentityServer4는 허가 목적으로 Bearer 토큰을 사용합니다.

## 결론 {#결론}

이것은이 KeyCloak 대 IdentityServer4 블로그 게시물의 끝입니다. 우리는 무료 SSO 시스템의 몇 가지 두드러진 측면을 살펴보고 몇 가지 주요 기능에 대해 자세히 설명했습니다. 따라서 어떤 무료 단일 사인온 소프트웨어가 더 나은지 직접 결론을 내릴 수 있습니다. 이 기사는 반드시 비즈니스에 적합한 제품에 올바른 선택을하는 데 도움이 될 것입니다. 또한 사용 사례를 잘 알고 있다면 의사 결정이 쉬운 작업이됩니다. 또한 항상 요구 사항에 적합한 소프트웨어를 선택합니다.
이 SSO 소프트웨어는 모두 자원에 쉽게 액세스 할 수있는 조직에 쉽게 제공합니다. 조직은 우수한 단일 사인온 소프트웨어를 설치하여 리소스 가용성을 확인합니다. Usres는 여러 세트의 자격 증명을 전달할 필요가 없습니다. 오히려 그들은 하나의 자격 증명 세트를 사용하여 한 번만 로그인 한 후 다시 로그인하지 않고 여러 웹 사이트에 액세스 할 수 있습니다. 전체 시스템에 대한 자신감, 보안 및 투명성을 제공합니다.
마지막으로, **[Containerize.com][9]**는 추가 오픈 소스 제품에 대해 글을 쓰고 있습니다. 정기적 인 업데이트를 위해이 [****][10]**[11]**카테고리와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][12], [LinkedIn][13] 및 [Twitter][14]에서 우리를 따라갈 수 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
* **[IdentityServer][15]** 
* **[keycloak][16]** 
* **[cas][17]** 
* **[Authelia][18]** 
* **[WSO2][19]** 
* **[OpenIdentityPlatform][20]** 
* **[freeipa][21]** 
* **[2021 년의 상위 5 개 오픈 소스 싱글 사인 온 소프트웨어][22]** 
* **[더 나은 비즈니스 성장을 위해 SSO 시스템을 활용하는 방법][23]** 
* **[무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화][24]** 



[1]: https://products.containerize.com/single-sign-on/identity-server/
[2]: https://products.containerize.com/single-sign-on/keycloak/
[3]: #intro
[4]: #key
[5]: #comp
[6]: #Conclusion
[7]: https://github.com/IdentityServer
[8]: https://github.com/keycloak/keycloak
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/video-conferencing/
[11]: https://products.containerize.com/single-sign-on/
[12]: https://web.facebook.com/containerize
[13]: https://www.linkedin.com/company/containerize/
[14]: https://twitter.com/containerize_co
[15]: https://products.containerize.com/single-sign-on/identity-server
[16]: https://products.containerize.com/single-sign-on/keycloak
[17]: https://products.containerize.com/single-sign-on/cas
[18]: https://products.containerize.com/single-sign-on/authelia
[19]: https://products.containerize.com/single-sign-on/wso2
[20]: https://products.containerize.com/single-sign-on/openidentityplatform
[21]: https://products.containerize.com/single-sign-on/freeipa
[22]: https://blog.containerize.com/single-sign-on/top-5-open-source-single-sign-on-software-in-the-year-2021/
[23]: https://blog.containerize.com/single-sign-on/how-to-leverage-sso-solution-for-better-business-growth/
[24]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
