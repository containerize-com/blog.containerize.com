---
title: "게임 개발 자습서 | Gdevelop의 플레이어 움직임" 
seoTitle: "게임 개발 자습서 | Gdevelop의 플레이어 움직임" 
description: "이 게임 개발 자습서를 따라 기본 게임 기능에 대해 알아보십시오. Gdevelop은 게임을 구축하고 출판하기위한 무료 게임 제작 소프트웨어입니다." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "화면에서 객체를 움직이는 것은 모든 게임의 중요한 부분입니다. 이 게임 개발 가이드에서는 GDEVENVENT에서 게임 객체를 제어하고 이동하는 방법을 배웁니다." 
url: /ko/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## 화면에서 객체 이동은 모든 게임의 중요한 부분입니다. 이 게임 개발 가이드에서는 GDEVENVENT에서 게임 객체를 제어하고 이동하는 방법을 배웁니다.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="게임 개발 자습서">}}


##  **개요** 
오픈 소스 커뮤니티는 매분의 통과로 떠오르고 있습니다. 크로스 플랫폼 게임, 모바일 게임 및 데스크탑 게임이 있습니다. 다양한 유형의 게임에는 액션 게임, 어드벤처 게임, 롤 플레잉 게임, 스포츠 게임, 퍼즐 게임, 시뮬레이션 게임 등이 있습니다. 따라서 이러한 모든 게임 유형은 모든 연령 그룹의 사용자가 이러한 게임을하는 경향이 있기 때문에 트래픽을 엄청나게 향상 시켰습니다.
또한, 전염병은 전 세계에 사는 사람들의 라이프 스타일에 큰 변화를 가져 왔습니다. 사람들은 이제 더 많은 시간을 보냅니다. 모든 오프라인 활동은 온라인 상태가되었습니다. 따라서 엔터테인먼트의 경우 온라인 소프트웨어를 선택하여 전문적인 업무 및 비디오 게임을 수행하는 경향이 있습니다. 이러한 모든 이유로 인해이 산업은 지속 가능성과 사용자 및 개발자의 지원을 얻었습니다. 최근에 우리는 [비디오 게임 프로그래머를위한 HTML5 게임 개발 자습서][1], [오픈 소스 소프트웨어를 활용하는 방법 글로벌 게임 산업][2] 및 [게임 개발을 시작하기위한 초보자를위한 Gdevelop Tutorial]과 같은 주제에 대해 글을 썼습니다. [삼]. 이 게임 개발 자습서에서는 다음 사항을 다룰 것입니다.
  * **[GDEVENVEN의 탐색 기능][4]**
  * **[게임 작업][5]**
  * **[결론][6]**

## 기능 gdevelop   {#features} 기능
[Gdevelop][7]는 오픈 소스 게임 빌딩 플랫폼입니다. 확장 가능하며 사용자가 쉽게 탐색 할 수있는 논리적 인 인터페이스를 제공합니다. 이 무료 소프트웨어는 C ++, TypeScript 및 JavaScript로 작성됩니다. 또한 개발 및 배포에 관한 포괄적 인 문서가 있습니다. 모든 소스 코드는 Github에서 사용할 수 있습니다. 또한이 게임을 만들어내는 많은 기능이 있습니다. 주요 기능 중 일부를 봅시다.
**Cross-Platform** :이 게임 제작 플랫폼은 Multiplatform이며 MacOS, Linux 및 Windows와 같은 거의 모든 인기있는 운영 체제에 배포 할 수 있습니다.
**옵션 내보내기** : Gdevelop을 통해 사용자는 Android, iOS 및 Web 용으로 한 번의 클릭만으로 개발 된 게임을 내보낼 수 있습니다. 게임 소유자는 게임에 비디오 광고를 표시 할 수 있으며 Admob의 지원으로 가능할 수 있습니다.
**풍부한 게임 객체** :이 오픈 소스 게임 메이커는 애니메이션, 화재 폭발 및 기타 효과가있는 스프라이트와 같은 광범위한 게임 객체를 제공합니다. 포맷 된 텍스트, 내장 비디오 및 그리기 사용자 정의 모양을 사용하여 게임에 시선을 사로 잡는 효과를 가져옵니다.
**다목적 행동** :이 기본 게임 개발 기사에서는 게임 객체에 다른 행동을 추가 할 수있는 방법을 보여 드리겠습니다. 사용할 준비가 된 여러 동작이 있으며 사용자는 요구 사항에 따라 추가로 개발할 수 있습니다. 그것은 몇 번의 마우스 클릭으로 인해 발생합니다.
**고급 인터페이스** :이 게임 디자인 자습서에서는이 3D 게임 엔진의 사용자 인터페이스를 볼 수 있습니다. 사용자는 다양한 게임 요소와 객체를 드래그 앤 드롭 할 수 있습니다.

## 게임 작업   {#Working}
게임 개발 튜토리얼 의이 섹션은 GDEVENVENT를 사용하여 기본 게임 개발을 자세히 설명합니다. 더 나아 가기 전에 컴퓨터에 로컬로 GDEVENCE를 설치했는지 확인하십시오.
이 튜토리얼 [초보자가 게임 개발을 시작하기위한 Gdevelop Tutorial][3]을 방문하여 LocalHost 에서이 게임 편집기를 설정하는 것에 대한 지식을 얻을 수 있습니다.
이제 편집자를 열고 새 프로젝트를 만듭니다. 이 튜토리얼에서는 게임 파일을 저장하기 위해 Google 드라이브에서 폴더를 만듭니다. 이제“새 프로젝트 만들기”를 클릭하면 새 대화 상자가 열리고 새 게임 구축을 시작하려면“빈 게임”옵션을 선택합니다.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="게임 개발 자습서">}}

왼쪽 프로젝트 메뉴 표시 줄에서 "AS Save"를 클릭하여 게임을 저장하십시오.
먼저 장면을 추가하겠습니다. 이를 위해 아래 이미지에 표시된이 튜토리얼에서 "장면"옵션을 클릭하여 아래 이미지에 표시된이 튜토리얼의 이름을 바꿉니다.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" 게임 빌딩 플랫폼">}}

장면을 만들면 장면을 열고 개체를 추가하십시오. 객체를 추가하려면 오른쪽 패널에 나타나는 "새 개체 추가"를 클릭하십시오. 결국, 다른 자산이 포함 된 새로운 대화 상자를 열 것입니다. 그러나 "레드 선박"히트 "게임 추가"를 선택하고 대화 상자를 닫으십시오.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" 게임 개발 가이드">}}

다음으로 왼쪽 패널에 객체가 나타납니다. 메인 화면으로 드래그하고 왼쪽 상단에 나타나는 버튼을 눌러 게임을 시작하십시오. 따라서 아래 이미지와 같이 게임을 새 창으로 엽니 다.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="게임 개발 자습서">}}

지금까지는 동작이 추가되지 않으므로이 객체를 사용하지 않습니다. 이 객체에 동작을 추가해 봅시다. 이를 위해 선박 객체를 클릭하고“개체 편집”을 누르십시오. 새 대화 상자를 열고 동작 탭으로 이동하고 "하향식 이동"을 선택하고 "적용"을 누르십시오. 이제 게임을 미리 보면 키보드 화살표 키를 사용하여 화면의 선박 객체를 이동할 수 있음을 알 수 있습니다. 이제 선박 개체가 화면에서 꺼진다는 것을 알 수 있습니다. 따라서이 문제를 해결하기 위해 객체를 편집하고 동작으로 이동하겠습니다. "객체에 동작 추가"를 클릭하십시오. 이제 "새로운 동작 검색"으로 이동하여 아래 이미지에 표시된 것처럼 검색 창에서 "화면에 유지"동작을 찾으십시오.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Gdevelop">}}

다음으로, 그것을 선택하고 프로젝트에 설치하고 적용을 누르십시오. 한 가지 더 중요한 것은 물체의 중심점을 조정하는 것입니다. 따라서 객체 속성으로 다시 가고 바닥에 "포인트 편집"이 나타납니다. 다음 화면에 착륙합니다.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="게임 디자인 튜토리얼">}}

따라서 왼쪽 상단 모서리에 나타나는 마크를 물체의 중앙으로 드래그 한 다음 닫고 적용하십시오. 이제 게임을 다시 시작하면 변경 사항이 표시됩니다.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="게임 개발 자습서">}}


## 결론   {#conclusion}
이것이이 게임 개발 자습서의 끝입니다. 이 블로그 게시물이 게임 개발자에게 도움이되기를 바랍니다. 이 튜토리얼을 사용하면 게임 객체와 함께 작업하고 동작을 추가 할 수있었습니다. 앞으로 Containerize.com은 추가 오픈 소스 비디오 게임 디자인 소프트웨어에 블로그 게시물과 튜토리얼 기사를 게시합니다. 따라서 정기적으로 업데이트하려면 [Containerize.com][9] 의이 [Game Development Software][8] 카테고리와 연결하십시오.

## 탐구하다
  * [Gdevelop][7]
  * [Godot][10]
  * [SuperPowers][11]
  * [Cocos Creator][12]
  * [panda3d][13]

  
[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/ko/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
