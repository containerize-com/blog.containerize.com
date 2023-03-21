---
title: "Open-Supurce Superpowers를 사용하여 비디오 게임을 개발하는 방법" 
seoTitle: "Open-Supurce Superpowers를 사용하여 비디오 게임을 개발하는 방법" 
description: "비디오 게임을 개발하는 방법? SuperWowers는 오픈 소스 HTML5 게임 개발입니다. 크로스 플랫폼이며 사용자가 애니메이션 2D 및 3D 게임을 구축 할 수 있습니다." 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "오프라인 모드로 비디오 게임 개발을위한 무료 비디오 게임 디자인 소프트웨어. 자체 주최자, 애니메이션 2D & amp를 만듭니다. 음향 효과와 글꼴이있는 3D 게임." 
url: /ko/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## 오프라인 모드로 비디오 게임 개발을위한 무료 비디오 게임 디자인 소프트웨어. 자조적으로, 음향 효과와 글꼴로 애니메이션 2D 및 3D 게임을 만듭니다.

{{< figure align=center src="images/superpowers.png" alt="비디오 게임을 개발하는 방법">}}


## 개요
거의 과거에는 일부 기사가 [게임 개발 소프트웨어][1] 카테고리에 게시되었습니다.이 카테고리는 초보자가 게임 개발을 시작하기위한 오픈 소스 소프트웨어와 GDEVENCE 자습서를 활용하는 글로벌 게임 업계가 어떻게 포함되는지를 포함했습니다. 비디오 게임 개발은 엔터테인먼트 게임에 대한 수요가 증가함에 따라 전 세계에 훨씬 더 확산됩니다. 그러나 아이디어, 설계 개발, 지속적인 테스트, 릴리스 및 피드백이 포함됩니다. 다시 말해, 디자이너, 소프트웨어 건축가, 프로그래머, 테스터 및 지원 리소스가 포함됩니다. 또한 액션 게임, 퍼즐 게임, 레이싱 게임,인지 게임 등과 같은 많은 유형의 게임이 있습니다.
따라서 3D 게임 빌더로 시작하기 위해서는 좋은 게임 개발 가이드가 많이 필요합니다. 오픈 소스 커뮤니티는 엔터프라이즈 수준의 기능과 유틸리티를 제공하여 3D & 2D 게임을 개발하는 많은 게임 개발 소프트웨어를 개발했습니다. 이 HTML5 게임 개발 자습서는 다음 사항을 다루어 무료 비디오 게임 개발 소프트웨어  **SuperPowers** 를 사용하여 비디오 게임을 개발하는 방법을 살펴 봅니다.
  * **[초강대국이란?][2]**
  * **[LocalHost에 설정하는 방법?][3]**
  * **[초강대국의 대시 보드?][4]**
  * **[결론][5]**

## 초강대국이란 무엇입니까   {#intro}
[SuperPowers][6]는 비디오 게임 개발을위한 오픈 소스 소프트웨어입니다. 유연하고 강력하며 확장 가능합니다. 그러나 애니메이션, 3D 모델 및 다양한 게임 예제를 지원합니다. 또한 사용자는 인터넷 연결없이 게임을 구축 할 수있는 오프라인 버전도 제공됩니다. 모든 프로젝트를 게시하는 것은 놀랍게도 쉽고 단일 클릭으로 발생하는 모든 일입니다. 사용자가 다양한 요소를 쉽게 탐색 할 수있는 사용자를위한 직관적 인 대시 보드가 있습니다. 무엇보다도, 모호성이나 버그를 피하기 위해 개발자에게 오류를 표시하는 라이브 오류 보고서가 매우 차가운 것이 있습니다. SuperPowers는 쉽게 설정할 수 있으며 서버에서 쉽게 호스팅 할 수있는 쉬운 요구 사항이 필요합니다.이 3D 게임 빌더는 TypeScript로 작성되며 개발 및 배포에 관한 모든 문서와 함께 제공됩니다. 따라서 모든 소스 코드는 [github][7]에서 사용할 수 있습니다.
SuperWowers는 다음과 같은 핵심 사항을 제공합니다.
  * 라이브 오류보고
  * 다국어
  * 크로스 플랫폼
  * 풍부한 글꼴 및 음향 효과
  * 자조

## LocalHost에서 설정하는 방법은 무엇입니까?   {#설정}
비디오 게임을 개발하는 방법이 여전히 궁금하다면 기사 의이 부분에서 LocalHost에서 초강대국을 설정하는 방법을 배웁니다. 이 섹션 에서이  **게임 개발 가이드** 는 게임 개발 환경을 설정하는 과정에 대해 자세히 설명합니다.
우선, 비디오 게임 개발을 시작하기 전에 다음과 같은 사전 반품을 설치했는지 확인하십시오.
  * git
  * NPM
  * node.js
위에서 언급 한 요구 사항은 쉽고 매우 알려져 있으므로 초보자에게는 어려운 작업이 아닙니다. 위의 요구 사항이 설치되면 터미널을 열고 다음 명령을 실행하여 소스 코드를 복제하십시오.
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
성공적인 복제 후 다음 명령을 실행하여 다운로드 된 디렉토리로 이동하십시오.
```
cd superpowers/core
```
이제 SuperPowers 게임 시스템을 복제하려면 다음 명령을 실행하십시오.
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
그런 다음 다음 명령을 실행하여 빌드를 만듭니다.
```
npm run build
```
성공적인 빌드시 다음 명령을 실행하여 서버를 시작하십시오.
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="HTML5 게임 개발 자습서">}}

이제 브라우저를 열고 다음 링크에서 응용 프로그램에 액세스하십시오.
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## 초강대국의 대시 보드?   {#특징}
위의 URL을 누르면 다음 홈페이지가 표시됩니다. 새로운 빈 또는 2D 플랫 포머 프로젝트를 수정하거나 생성하는 옵션이 있습니다.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="비디오 게임 개발">}}

비디오 게임을 개발하는 방법에 대한 질문을 앞으로 나아가면 2D 플랫 포머를 만든 후 다음 화면이 표시됩니다. 장면 생성, 타일 설정, 게임 맵 및 플레이어와 같은 창의 왼쪽 옵션을 볼 수 있습니다. 사용자의 동작을 코딩 할 수있는 라이브 코딩 옵션이 있습니다.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="비디오 게임 개발">}}

또한 왼쪽에는 애니메이션, 렌더링, 업로드 또는 이미지 다운로드를 설정할 수있는 설정 막대가 있습니다. 왼쪽에는 아래 이미지와 같이 프로젝트에 더 많은 자산을 추가 할 수있는 옵션이 있습니다. 글꼴을 수정하려면 3D 모델 입방 모델, Fint 옵션이 포함됩니다. 또한 사용자는 추가 장면, 스크립트, 셰이더 및 스프라이트를 추가 할 수 있습니다. 또한이 오픈 소스 3D 게임 빌더를 사용하면 게임에 다양한 음향 효과를 추가하여 가능한 최고의 게임 음향 효과로 게이머를 유치 할 수 있습니다. 마지막으로 타일 맵과 타일 세트를 추가 할 수 있습니다.

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="비디오 게임 디자인">}}

마찬가지로,이 게임 기사를 살펴본 후에는 더 자세히 살펴보고 모든 기능을 사용할 수 있습니다. 또한 SuperPowers Video Game Builder를 사용하여 진행하는 방법을 이해할 수 있습니다. 이 게임 개발 소프트웨어에 대한 온라인 지원이 있습니다.

##  **결론**    {#conclusion}
이것은이 HTML5 게임 개발 가이드를 끝내게됩니다. 이 블로그 게시물이 비디오 게임 개발을 시작하려면 도움이되기를 바랍니다. 우리는 초강대국이 무엇인지, 오픈 소스 3D 게임 빌더 인 비디오 게임을 개발하는 방법을 탐색했으며 LocalHost에서 설치 절차를 거쳤습니다. 오픈 소스  **비디오 게임 디자인 앱** 가 사용자가 처음부터 게임을 구축 할 수 있도록합니다. 비디오 게임 프로그래머는 필수 게임 디자인 원칙을 사용하여 고품질 게임을 구축합니다. [blog.containerize.com][8]의 다가오는 기사에서 2D & 3D 게임을 구축하는 것에 대한 자세한 내용. 아래의 "탐색"섹션에 언급 된 다른 오픈 소스, 자조 3D 게임 빌더와 관련 기사가 있습니다.
마지막으로 Containerize.com은 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 따라서 정기적 인 업데이트를 위해 [비디오 게임 개발][9][][10] 범주와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][11], [LinkedIn][12] 및 [Twitter][13]에서 우리를 따라갈 수 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [][14][Gdevelovent][14]
  * [][14][Godot][15]
  * [][14][SuperPowers][6]
  * [][14][Cocos Creator][16]
  * [][14][Panda3d][17]
  * **[초강력을 사용하여 게임 개발을 시작하기][18]**
  * **[게임 개발 자습서 | Gdevelop의 플레이어 운동][19]**
  *[ **오픈 소스 Gdevelop을 사용하여 스크래치에서 게임을 만드는 방법** ][20]
  * **[오픈 소스 소프트웨어를 활용하는 글로벌 게임 산업][21]**
  * **[게임 개발을 시작하기위한 초보자를위한 gdevelov 튜토리얼][22]**
  *[ **2021 년의 상위 5 개 무료 게임 개발 소프트웨어** ][23]

  
[1]: https://blog.containerize.com/category/game-development-software/
[2]: #intro
[3]: #setup
[4]: #features
[5]: #Conclusion
[6]: https://products.containerize.com/game-development-software/superpowers/
[7]: https://github.com/superpowers/superpowers-core
[8]: https://blog.containerize.com/
[9]: https://products.containerize.com/game-development-software/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
