---
title: "GDEVENCEATIONORION | 게임 개발을 시작하는 방법" 
seoTitle: "GDEVENCEATIONORION | 게임 개발을 시작하는 방법" 
description: "비디오 게임 개발을 시작하려면이 Gdevelop Tutorial 기사를 따르십시오. Gdevelop은 자체 주최이며 시작하기 위해 프로그래밍 기술이 필요하지 않습니다." 
date: Wed, 05 May 2021 16:51:40 +0000
author: muhammadmustafa
summary: "비디오 게임을 처음부터 구축하고 Android, iOS, 웹, Windows 및 Linux에서 실행하십시오. Gdevelop은 강력한 기능을 갖춘 자체 호스팅 무료 게임 엔진입니다." 
url: /ko/gdevelop-tutorial-how-to-start-game-development/
categories: ['Game Development Software']
---

## 비디오 게임을 처음부터 구축하고 Android, iOS, 웹, Windows 및 Linux에서 실행하십시오. Gdevelop은 강력한 기능을 갖춘 자체 호스팅 무료 게임 엔진입니다.

{{< figure align=center src="images/GDevelop.png" alt="Gdevelove Tutorial">}}


## 개요
비디오 게임 산업은 높은 속도로 번성하고 있습니다. 전 세계에는 수십억 개의 게이머가 항상 흥미롭고 재미있는 비디오 게임을 찾고 있습니다. 반면에 개발자에게 고급 및 매혹적인 게임을 개발하기위한 완벽한 환경 및 게임 개발 도구를 제공하는 여러 비디오 게임 개발 소프트웨어가 있습니다. 과거에는 게임 개발자가 게임 소스 코드를 라인별로 작성하는 데 익숙했습니다. 개발 방법을 취하는 데 시간이 걸렸으며 게이머는 새로운 릴리스를 몇 달 동안 기다려야했습니다. 따라서 오픈 소스 커뮤니티는 게임 개발자를 위해 무료  **쉬운 게임 제작자** 를 개발했습니다.
이 **무료 게임 엔진 **는 빠른 게임 릴리스를 제공하는 데 도움이 될뿐만 아니라 게임의 품질과 견고성을 향상시키는 기능도 제공됩니다. 또한이  **3D 게임 디자이너 ** 는 드래그 앤 드롭 사용자 인터페이스를 제공하고 게임을 구축하기 위해 프로그래밍 지식을 갖추지 않아도됩니다. 그러나 이것은 Gdevelop이 무엇인지, 다음 지점을 다루어 로컬로 설정하는 방법을 배울 수있는 ** gdevelov 튜토리얼** 입니다.
  * **[Gdevelop은 무엇입니까?][1]**
  * **[LocalHost에서 설정하는 방법?][2]**
  * **[결론][3]**

##  **gdevelop은 무엇입니까?** {#intro}
Gdevelop은 무료 오픈 소스 비디오 게임 개발 소프트웨어입니다. 자체 주최이며 2D 게임을 개발할 수있는 풍부한 기능을 제공합니다. 그러나 3D 객체에 대한 지원이 있습니다. 사용자는 여러 플랫폼의 게임을 개발하고 게시하기 위해 어떤 종류의 프로그래밍 기술이 필요하지 않습니다. 이 무료 게임 엔진을 자체 주최하려면 쉬운 요구 사항이 필요하므로 확장 가능하고 설정이 쉽습니다. 드래그 앤 드롭 기능을 갖춘 직관적 인 사용자 인터페이스가 있습니다. 이 무료 도구는 고급 애니메이션, 비디오/오디오 효과, 터치 스크린 및 멀티 터치, 라이브 미리보기 등을 제공합니다. 또한이  **3D 게임 디자이너** 는 개발자가 프로토 타입을 기반으로 훌륭한 제품을 개발할 수 있도록 강력한 프로토 타이핑 기능을 제공합니다.
또한이 오픈 소스  **Easy Game Maker** 는 구성 가능하며 타사 라이브러리와의 통합을 지원합니다. 무엇보다도 인기있는 비디오 게임 콘솔 인 Xbox 및 PlayStation을 지원합니다. Gdevelop은 C ++, JavaScript 및 TypeScript로 작성되었습니다. 배포 및 개발에 관한 자세한 설명서가 있습니다. Gdevelop은 버그 및 쿼리에 적극적으로 응답하는 매우 생생한 개발자 커뮤니티를 보유하고 있습니다. 따라서 모든 소스 코드는 [github][4]에서 사용할 수 있습니다.
[Gdevelop에 대해 자세히 알아보십시오][5]

##  **LocalHost에서 설정하는 방법?** {#setup}
이  **gdevelop 튜토리얼** 의 섹션에서는 지역 시스템에 GDEVENCE를 어떻게 설정할 수 있는지 볼 수 있습니다. 다음 단계로 이동하기 전에 다음 사전 반품을 설치했는지 확인하십시오.
  * git
  * node.js 12.x
  * 원사 / npm
모든 사전 반품이 설치되면 터미널을 열고 다음 명령을 실행하여 소스 코드를 복제하십시오.
```
git clone https://github.com/4ian/GDevelop.git
```
그런 다음 다음 명령을 실행하여 종속성을 설치하십시오.
```
cd GDevelop/newIDE/app
npm install
```
이제 다음 명령을 실행하여 응용 프로그램을 시작할 수 있습니다.
```
npm start
```

{{< figure align=center src="images/181941986_370021980999009_49950285486947371_n.png" alt="Gdevelove Tutorial">}}

{{_LINE_34_}}
{{_LINE_35_}}
    마지막으로, 브라우저에서 http : // localhost : 3000의 응용 프로그램에 액세스 할 수 있습니다.
{{_LINE_37_}}
{{_LINE_38_}}
이 게임 제작 소프트웨어에 브라우저에 액세스하면 아래 이미지와 같이 홈페이지가 열립니다.

{{< figure align=center src="images/181755626_430416518403410_850455915030815113_n-1024x612.png" alt="게임 개발 도구">}}

새 프로젝트를 시작하거나 새 프로젝트를 열 수있는 옵션이 있습니다. 또한 좋은 시작을위한 예제 또는 튜토리얼을 볼 수있는 옵션이 있습니다.
"새 프로젝트 만들기"를 클릭하면 아래 이미지와 같이 몇 가지 사전 구축 된 기본 및 사전 게임 템플릿을 볼 수 있습니다.

{{< figure align=center src="images/181970185_1410837245966585_2870884044502649776_n-1024x579.png" alt="Gdevelove Tutorial">}}

이 튜토리얼에서 첫 번째 옵션을 선택한 후 다음 화면을 볼 수 있습니다. 화면 오른쪽에는 플레이어, 플랫폼, Jumpthru 등과 같은 많은 옵션을 볼 수있는 메뉴 표시 줄이 있습니다. 이  **3D 게임 디자이너** 를 사용하면 대시 보드에서 객체의 움직임과 위치를 제어 할 수 있습니다. 개발자가 게임을 위해 선택할 수있는 여러 캐릭터가 있습니다. 또한 왼쪽 상단에 기능을 테스트하기 위해 게임을 시작하는 버튼이 있습니다. 또한 개발자가 게임 캐릭터와 바인딩하여 게임에 상호 작용을 가져올 수있는 이벤트와 행동이 있습니다.

{{< figure align=center src="images/181893666_518087772546969_1710882406977218030_n-1024x578.png" alt="게임 개발 소프트웨어">}}

이렇게하면 더 많은 기능을 탐색하고 시도 할 수 있습니다. 이  **Easy Game Maker** 는 개발자 친화적이며 직관적 인 대시 보드를 제공합니다. 게임을 개발 한 후에는 Android, iOS 및 웹과 같은 다양한 플랫폼으로 게임을 내보낼 수 있습니다.

##  **결론** {#conclusion}
이것은이 GDEVENVENCE 튜토리얼의 끝을 가져옵니다. 이 **무료 게임 엔진 **를 사용하면 시각적 이벤트를 사용하여 게임의 논리를 구현할 수 있습니다. 많은 도움이되는 튜토리얼과 사용자 매뉴얼을 만든 매우지지적인 커뮤니티가 있습니다. 이 블로그 게시물은 게임 개발의 세계가 새롭다면 정말 도움이 될 것입니다. 다른 많은 ** 3D 게임 디자이너** , 게임 개발 도구 및 아래 탐색 섹션에 언급 된 기사가 있습니다. 이 모든 게임 엔진은 무료이며 오픈 소스이며 자체 호스팅 기능을 제공합니다. 따라서 게임 개발 산업은 게이머 수가 증가함에 따라 엄청나게 확장되고 있습니다. 게이머의 관심과 매력을 유발하는 고화질 그래픽과 음향 효과가있는 비디오 게임이 있습니다. 그러나 작업에 품질과 효율성을 제공하는 잘 보석금이 좋은 게임 개발 소프트웨어를 선택하십시오.
마지막으로 Containerize.com은 더 흥미로운 게임 개발 자습서를 통해 튜토리얼 기반을 향상시키기 위해 설정되었습니다. 정기적으로 업데이트하려면이 [Game Development Software][6] 카테고리 [7] 의이 [Game Development Software][6] 카테고리와 연결하십시오.

## 탐구하다
  * [Gdevelop][8]
  * [Godot][9]
  * [Superpowers][10]
  * [Cocos Creator][11]
  * [panda3d][12]
  * [2021 년 오픈 소스 소프트웨어를 선택하기 전에 검토 할 것들][13]
  * [오픈 소스 Gdevelop을 사용하여 스크래치에서 게임을 만드는 방법][14]
  * [2021 년의 상위 5 개 무료 게임 개발 소프트웨어][15]
  * [초강력을 사용하여 게임 개발을 시작하기][16]
  * [게임 개발에있어서 | Gdevelop의 플레이어 운동][17]
  * [비디오 게임 프로그래머를위한 HTML5 게임 개발 자습서][18]
  * [오픈 소스 소프트웨어를 활용하는 비디오 게임 산업][19]

  
[1]: #intro
[2]: #setup
[3]: #Conclusion
[4]: https://github.com/4ian/GDevelop
[5]: https://gdevelop-app.com/
[6]: https://products.containerize.com/game-development-software
[7]: https://www.containerize.com/
[8]: https://products.containerize.com/game-development-software/gdevelop/
[9]: https://products.containerize.com/game-development-software/godot/
[10]: https://products.containerize.com/game-development-software/superpowers/
[11]: https://products.containerize.com/game-development-software/cocos-creator/
[12]: https://products.containerize.com/game-development-software/panda3d/
[13]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[14]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[15]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[16]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[17]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[18]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[19]: https://blog.containerize.com/2021/05/07/how-video-gaming-industry-leveraging-open-source-software/
