---
title: "오픈 소스 gdevelop을 사용하여 스크래치에서 게임을 만드는 방법" 
seoTitle: "오픈 소스 gdevelop을 사용하여 스크래치에서 게임을 만드는 방법" 
description: "처음부터 게임을 만드는 방법? Gdevelop은 웹, 데스크탑, iOS 및 Android 용 비디오 게임을 구축하기 위해 많은 구성 요소와 동작으로 채워진 논리적 UI를 제공합니다." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "이 게임 개발 자습서는 트럭 경주 게임 구축의 기본 사항을 설명합니다. 그것을 설치하거나 온라인 앱을 사용하여 흥미로운 비디오 게임을 구축 할 수 있습니다." 
url: /ko/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## 이 게임 개발 자습서는 트럭 경주 게임 구축의 기본 사항을 설명합니다. 그것을 설치하거나 온라인 앱을 사용하여 흥미로운 비디오 게임을 구축 할 수 있습니다.

{{< figure align=center src="images/gdevelop-game.png" alt="스크래치에서 게임을 만드는 방법">}}


## **개요 ** 
거의 과거에, 우리는 [2021 년에 상위 5 개의 무료 게임 개발 소프트웨어][1], [SuperPowers를 사용하여 게임 개발을 시작하기][2], [게임과 같은 오픈 소스 무료 게임 개발 소프트웨어에 대한 많은 블로그 게시물을 게시했습니다. 개발 튜토리얼 | Gdevelov에서의 플레이어 움직임][3], [비디오 게임 프로그래머를위한 HTML5 게임 개발 자습서][4], [우대 소스 소프트웨어를 활용하는 글로벌 게임 산업 ]. 인터넷 시대의 최신 발전은 비디오 게임 업계에서 새로운 트렌드를 가져 왔습니다. 오픈 소스 게임 빌딩 플랫폼은 게임을 독립적으로 개발할 수있는 완벽한 생태계를 제공하며 개발자는 필요에 따라 해당 플랫폼을 성숙시킵니다. 이 블로그 게시물에서는 다음 사항을 다루어 [gdevelop][7]을 사용하여 스크래치에서 게임을 만드는 방법을 배웁니다.
  * **[왜 우리가 gdevelop을 사용해야합니까?][8]**
  * **[프로젝트 설정][9]**
  * **[배경과 물체를 준비하는 방법?][10]**
  * **[물체에 beviors 추가][11]**
  * **[게임 실행][12]**
  * **[결론][13]**

## 왜 우리는 Gdevelop을 사용해야합니까?   {#왜}
[Gdevelop][7]는 오픈 소스 게임 소프트웨어입니다. 자체 호스팅 기능과 함께 제공되며 본질적으로 교차 플랫폼입니다. 다운로드하여 설치하거나 온라인 버전을 사용하여 재생할 수 있습니다. 사용자는이 게임 빌더를 사용하기 위해 프로그래밍 지식을 얻을 필요가 없습니다. 무엇보다도 사전 구축 된 게임 동작, 템플릿 및 객체를 제공하는 드래그 앤 드롭 사용자 인터페이스를 제공합니다. 이 무료 게임 개발 소프트웨어는 구성 가능하며 타사 라이브러리와 통합을 제공합니다. 이 무료 도구에 대한 자세한 내용은이 링크를 확인하여 기능 및 설정 프로세스에 대한 자세한 내용을 확인할 수 있습니다.

## 프로젝트 설정   {#setting}
이 섹션에서는 몇 가지 기본 기능을 갖춘 트럭 레이싱 게임을 구축하기위한 프로젝트를 만들 것입니다. 이 [링크][6] 로컬 컴퓨터에서 설정하려면이 [링크][14]로 이동하여 온라인 버전을 사용할 수 있습니다.
따라서 "새 프로젝트 생성"을 클릭 한 다음 "빈 게임"을 클릭하면 다음 화면이 있습니다.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="스크래치에서 게임을 만드는 방법">}}

창의 왼쪽에 메뉴 표시 줄을 볼 수 있습니다. 이제 "장면"을 클릭 한 다음 "장면 추가"버튼을 클릭하십시오. 그런 다음 게임 화면에 착륙하여 게임 객체, 배경 및 동작을 만들 수 있습니다. 앞으로 오른쪽 패널에 배치 된 "새 개체 추가"를 클릭하면 다음 창이 표시됩니다.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Gdevelove Tutorial">}}


## 배경과 물체를 준비하는 방법?   {#준비하다}
검색 창에서 트럭 객체를 찾아 두 번 클릭하고 결과에 나오면 "게임에 추가"를 누릅니다. 두 바퀴와 플랫폼 객체에 대해이 단계를 반복하십시오. 이제 녹색 물체를 마우스 오른쪽 버튼으로 클릭하고 편집하십시오.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="게임 개발 튜토리얼">}}


## 객체에 behviors 추가   {#add}
다음으로 녹색 플로어를 게임 화면으로 끌고 떨어 뜨리고 소원에 따라 높이와 너비를 조정하십시오. 트럭 객체를 끌고 게임 화면에 떨어 뜨린 다음 휠 객체를 떨어 뜨립니다. 앞으로 나아가 트럭 본체를 마우스 오른쪽 단추로 클릭하고 "물체 트럭 바디 편집"을 누르고 동작을 클릭하고 "물체에 동작 추가"를 클릭하고 "Physics Engine 2.0"을 클릭하면 다음 창이 표시됩니다.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="스크래치에서 게임을 만드는 방법">}}

이 창에서는 밀도, 너비 및 높이와 같은 구성을 수정할 수 있습니다. 이제 Greenfloor 객체에 대해 동일한 프로세스를 반복하지만 "STATIC"유형을 유지하고 "적용"버튼을 누르십시오. 다시, 트럭 바디 객체를 편집하고, "편집 지점"을 누르고, "EDD 포인트"를 누른 다음, 앞 휠의 이름을 삽입하십시오 (예 :이 튜토리얼의 FW). 객체에 포인트가 생성되며, 그 지점을 휠 위치로 드래그하십시오. 뒷바퀴 의이 프로세스도 반복하고 아래 이미지와 같이 x와 y를 0으로 만듭니다.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="게임 개발 튜토리얼">}}

그 후, 휠 객체를 편집하고 포인트를 조정하십시오. 또한 바퀴 편집 옵션으로 이동하여 "동작"탭을 누르고 "Physics Engine 2.0"을 선택하고 아래 이미지와 같이 유형, 반경 및 밀도 값을 설정하십시오.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="게임 디자인 소프트웨어">}}

이제 "새 장면"탭을 클릭하고 "새 이벤트 추가"를 누르고 "조건 추가"를 누르고 "장면의 시작 부분에서"를 검색하고 "OK"를 누르십시오. 그런 다음 "Camera Center X 위치"에 대한 "ADCT"검색을 누르고 다음 구성을 설정하십시오.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="무료 게임 개발 소프트웨어">}}

이제 조치를 복사하지만 복사 된 작업이 "Y"로 설정되어 있는지 확인하십시오. "카메라 Zoom Change"라는 다른 동작을 추가하고 0.4로 설정 하고이 동작을 상단으로 드래그하십시오. 다른 동작을 추가하고 "휠 조인트 추가"를 검색하고 아래 그림과 같이 두 바퀴의 구성을 설정하십시오.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="게임 개발 가이드">}}

그런 다음 새 조건을 추가하고 "키 프레스"를 검색하여 왼쪽으로 설정하십시오. 이제 동작을 추가하고 첫 번째 휠을 선택하고 선형 속도 X를 검색하고 "빼기"로 수정 한 후 값 50을 설정하십시오. 올바른 키에 대해이 단계를 반복하지만 아래와 같이 수정 부호가 추가되어 있는지 확인하십시오.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="게임 개발 튜토리얼">}}


## 게임 실행   {#run}
모든 단계가 완료되면. 왼쪽 상단에있는 버튼을 눌러 게임을 실행할 때입니다. 게임을 새 창으로 시작합니다.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="스크래치에서 게임을 만드는 방법">}}


## 결론   {#conclusion}
이것은이 블로그 게시물의 끝이며 스크래치에서 게임을 만드는 방법을 분명히 알게되었습니다. 그러나이 산업이 인기와 수요를 얻고 있기 때문에 시장에는 많은 무료  **게임 디자인 소프트웨어 ** 가 있습니다. 오픈 소스 소프트웨어와 같은 몇 가지 이유는 확장 가능하고 구성 가능하며 비용 효율적이며 유지 관리가 쉬운 이유가 있습니다. 또한 개발자가 Android, iOS, 웹 및 데스크탑과 같은 모든 인기있는 플랫폼에서 실행되는 게임을 구축하는 것이 편안하다는 사실에 따라 크로스 플랫폼 게임 빌더에 대한 수요가 증가하고 있습니다. 반면에, 전염병의 출현은 사람들의 삶을 변화 시켰으며 이제는 실내에 머무르는 것을 선호합니다. 따라서 사람들은 여가 시간에 비디오 게임을하는 경향이 있습니다.
마지막으로, [Containerize.com][15]는 모두 더 흥미로운  **게임 개발 자습서 ** 로 튜토리얼 기반을 향상시키기 위해 설정되었습니다. 정기적 인 업데이트를 위해이 [게임 개발 소프트웨어][16] 카테고리와 연결하십시오.

## 탐구하다
  * **[GDEVENVENCE][7]**
  * **[Godot][17]**
  * **[SuperPowers][18]**
  * **[Cocos Creator][19]**
  * **[panda3d][20]**
  * **[PlayCanvas][21]**
  * **[초강력을 사용하여 게임 개발을 시작하기][2]**
  * **[게임 개발 자습서 | GDEVENVENT의 플레이어 운동][3]**
  * **[비디오 게임 프로그래머를위한 HTML5 게임 개발 자습서][4]**
  * **[오픈 소스 소프트웨어를 활용하는 글로벌 게임 산업][5]**
  * **[게임 개발을 시작하기위한 초보자를위한 gdevelov 튜토리얼][6]**
  *[ **2021 년의 상위 5 개 무료 게임 개발 소프트웨어 ** ][1]

  
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
