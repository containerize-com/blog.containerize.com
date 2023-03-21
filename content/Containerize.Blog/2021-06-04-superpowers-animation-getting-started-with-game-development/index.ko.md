---
title: "초강력을 사용하여 게임 개발을 시작합니다" 
seoTitle: "초강력을 사용하여 게임 개발을 시작합니다" 
description: "SuperWowers는 실시간 협업을 갖춘 오픈 소스 3D 게임 메이커입니다. 이 튜토리얼은 초강력을 사용하여 게임 개발을 시작하는 것입니다." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "게임 객체의 동작과 움직임은 애니메이션에 의해 제어됩니다. 이 게임 개발 자습서에서는 게임 캐릭터를 애니메이션하는 방법을 배웁니다." 
url: /ko/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## 게임 객체의 동작과 움직임은 애니메이션에 의해 제어됩니다. 이 게임 개발 자습서에서는 게임 캐릭터를 애니메이션하는 방법을 배웁니다.

{{< figure align=center src="images/super.png" alt="게임 개발을 시작합니다">}}


## **개요** 
오픈 소스 게임 개발의 튜토리얼 시리즈에서 [게임 개발 자습서 |와 같은 인기있는 주제에 대한 블로그 게시물을 게시했습니다. Gdevelop의 플레이어 움직임][1], [HTML5 비디오 게임 프로그래머를위한 HTML5 게임 개발 자습서][2], [글로벌 게임 산업이 오픈 소스 소프트웨어를 활용하는 방법][3] 및 [게임 개발을 시작하기위한 초보자를위한 Gdevelop 튜토리얼][4 ]. 이 튜토리얼 기사는 다음 사항을 다루어 무료 오픈 소스 [Superpowers][5]를 사용하여 게임 개발을 시작하는 것에 관한 것입니다.
  * **[게임 애니메이션 유형][6]**
  * **[스프라이트를 만드는 방법?][7]**
  * **[장면 작업][8]**
  * **[LocalHost에서 게임 시작][9]**
  * **[결론][10]**
자체 호스팅 기능과 함께 제공되는 초보자를위한 많은 오픈 소스 게임 개발 소프트웨어가 있습니다. 그러나 [SuperPowers][5]는 크로스 플랫폼 2D 및 3D 게임 제작 소프트웨어입니다. 게임 개발자에게 게임 개발을 쉽게 할 수있는 내장 라이브러리 및 게임 예제를 제공합니다. 이 무료 게임 디자인 앱은 TypeScript로 작성되었으며 모든 문서는 개발 및 배포와 관련하여 [GitHub][11]에서 사용할 수 있습니다. 이 블로그 게시물에서는 사용에 관한 초강대국을 탐색 할 것입니다.

## 게임 애니메이션 유형   {#types}
애니메이션은 비디오 게임의 중요한 부분입니다. 게임의 캐릭터는 사용자의 작업에 응답해야하며 애니메이션은 매끄럽고 갑작해야합니다. 여러 프레임을 관리하는 것입니다. 애니메이터는 해당 프레임을 개선하여 이동 효과를 생성합니다. 또한 객체가 3 차원 공간을 통과하는 것처럼 보이는 2D & 3D 애니메이션이 있습니다. 게임 개발자와 그래픽 디자이너는 3D 모델을 만듭니다. 애니메이션은 게임의 특성에 따라 다르며 가장 일반적인 유형은 다음과 같습니다.
**Walk Animation : ** Walk Animation은 캐릭터가 각 단계를 애니메이션하고 걷는 일러스트레이션을 제공하는 걷는 과정을 만드는 것입니다.
**유휴 애니메이션 : ** 사용자가 컨트롤러를 누르지 않기 때문에 캐릭터가 아무것도하지 않는 매우 중요한 유형의 애니메이션입니다.
**실행 애니메이션 ** : 실행 애니메이션은 게임 객체가 실행 사이클을 수행하는 모든 게임의 일부입니다. 이 유형은 가장 일반적인 유형이며 개발자의 관심이 더 필요합니다.
**싸우는 애니메이션 ** : 싸움 게임에서 여러 게임 캐릭터가 서로 싸우고 있습니다.
**점프 애니메이션 ** :이 유형의 애니메이션에는 더 나은 기술과 전문 지식이 필요합니다. 캐릭터는 몸을 압박하고 방출하여 점프 그림을 수행합니다.

## 스프라이트를 만드는 방법?   {#sprites}
이 게임 제작 가이드 섹션을 통해 사용자는 프로젝트를 만들고 게임을위한 스프라이트를 만들 수 있습니다. 스프라이트는 게임에 사용될뿐만 아니라 웹 디자인의 일부가 아닌 비 정적 이미지 또는 그래픽입니다. 이들은 일반적으로 끊임없이 새로 고침되는 배경 위에 그려집니다.
계속 진행하기 전에 컴퓨터에 초강대국을 설정했는지 확인하십시오. 비디오 게임 프로그래머를위한 HTML5 게임 개발 자습서][2]이 무료 게임 제작 플랫폼을 설정할 수 있습니다.
먼저 응용 프로그램을 브라우저로 열고 새로운 빈 프로젝트를 만들어 봅시다. 아래 이미지에 표시된대로.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="게임 개발을 시작합니다">}}

새로운 빈 프로젝트를 만든 후 프로젝트 공간에 착륙 할 것입니다. 왼쪽 패널에는 메뉴 옵션이 있습니다. 따라서 "+"버튼을 클릭하여 자산 대화 상자를 엽니 다. 스프라이트 옵션을 선택하고 생성을 누르십시오.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="게임 제작 가이드">}}

이제 동작을 추가 할 이미지를 업로드하십시오. 오른쪽 상단에있는 버튼을 클릭하여 수행 할 수 있습니다. 이 패널은 객체의 구성에 관한 것입니다.
다음으로, 선택에 따라 그리드 크기를 설정할 수 있습니다. 캔버스에는 두 부분이 있습니다. 상단 부분은 아래 부분이 애니메이션을 적용하기 위해 선택한 부분을 보여주는 전체 시트를 보여줍니다. 아래 이미지와 같이 오른쪽 패널에서 "설정"버튼을 눌러 수행 할 수 있습니다.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="게임 개발 튜토리얼">}}

그런 다음 애니메이션을 만들어 봅시다. 애니메이션 탭에서 "새"버튼을 클릭하여 그렇게 할 수 있습니다. 아래 이미지를 볼 수 있습니다.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="초보자를위한 게임 개발 소프트웨어">}}


## 장면 작업   {#scenes}
이 섹션에서는 게임에 장면을 추가 할 것입니다. 이를 위해 다시 자산 대화 상자를 열고 "장면"을 선택하고 작성 버튼을 누릅니다. 이제 아래 이미지와 같이 오른쪽 상단 코너에서 사용 가능한 스타 버튼을 클릭하여 액터를 만듭니다.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="초보자를위한 스크래치에서 게임을 만드는 방법">}}

그런 다음 오른쪽 패널에 배치 된 "새 구성 요소"버튼을 클릭하여 새 구성 요소를 만듭니다. "스프라이트 렌더러"를 선택하고 생성을 누르십시오. 그런 다음 생성 된 스프라이트를 왼쪽 패널에서 드래그하고 스프라이트 렌더러 섹션 아래로 떨어 뜨립니다. 또한 "카메라"라는 다른 액터를 만들고 마찬가지로 카메라라는 새 구성 요소를 만듭니다.
카메라 모드를 변경하여 아래 이미지와 같이 "직교"모드로 변경하십시오.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="게임 개발을 시작하기,">}}

왼쪽 하단 모서리에서 설정 옵션으로 이동하여 엽니 다. "스프라이트"및 "타일 맵"섹션에서 "단위당 픽셀"에 대해 16을 삽입하십시오. 그런 다음 "기본 카메라 모드"에서 "장면"섹션에서 2D를 선택하십시오. 또한, "타일 맵"섹션에서 기본 너비 36, 기본 높이 28 및 타일 세트 그리드 크기 16에서 저장할 필요가없고 오히려 모든 것이 자동 저장에 있습니다.

## localhost   {#local}에서 게임 시작
그래서 우리는 첫 번째 게임의 초강대국 애니메이션을 시작하는 데 가깝습니다. 그러나 다시 설정 탭으로 이동하여 왼쪽 패널에서 장면을 드래그하여 아래 이미지와 같이 "시작 장면"으로 떨어 뜨립니다.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="초보자를위한 스크래치에서 게임을 만드는 방법">}}

이제 "플레이어"를 클릭하고 "스프라이트 렌더러"구성 요소 아래에서 "애니메이션"속성에 대한 애니메이션을 선택하십시오. 마지막으로 왼쪽 상단에 배치 된 버튼을 클릭하여 응용 프로그램을 시작하십시오. 새 탭은 화면의 움직이는 객체를 표시합니다.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="게임 개발을 시작합니다">}}


## 결론   {#conclusion}
이것은 우리가 초보자를위한 스크래치에서 게임을 만드는 방법을 배운 튜토리얼의 끝입니다. 따라서 게임 개발 소프트웨어에 대한 자세한 문서가 있으면 게임 개발을 시작하는 것이 쉬워집니다. 마지막으로, [**containerize.com** ][12]는 추가 오픈 소스 주제 및 제품에 대한 기사를 작성하는 일관된 프로세스에 있습니다. 따라서 정기적 인 업데이트를 위해이 [게임 개발 소프트웨어][13] 카테고리와 연락하십시오.

## 탐구하다
  * [Gdevelop][14]
  * [Godot][15]
  * [SuperPowers][5]
  * [Cocos Creator][16]
  * [panda3d][17]
  * [PlayCanvas][18]

  
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
