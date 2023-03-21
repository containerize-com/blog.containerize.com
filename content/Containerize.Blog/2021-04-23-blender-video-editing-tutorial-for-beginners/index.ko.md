---
title: "초보자를위한 블렌더 비디오 편집 자습서 | 작동 방식" 
seoTitle: "초보자를위한 블렌더 비디오 편집 자습서 | 작동 방식" 
description: "이 블렌더 비디오 편집 자습서에 오신 것을 환영합니다. 블렌더는 오픈 소스이며 효과, 애니메이션, 필터, 라이브 미리보기 및 이미지 추가 지원을 제공합니다." 
date: Fri, 23 Apr 2021 14:22:00 +0000
author: muhammadmustafa
summary: "편집 부분은 비디오 제작의 중요한 측면입니다. 비즈니스 비디오 마케팅에 대한 전문적인 결과를 얻으려면 무료 비디오 편집 소프트웨어를 설치하십시오." 
url: /ko/blender-video-editing-tutorial-for-beginners/
categories: ['Video Editing Software']
---

## 편집 부분은 비디오 제작의 중요한 측면입니다. 비즈니스 비디오 마케팅에 대한 전문적인 결과를 얻으려면 무료 비디오 편집 소프트웨어를 설치하십시오.

{{< figure align=center src="images/blender.png" alt="블렌더 비디오 편집 자습서">}}

최근에 우리는 **오픈 소스 비디오 편집 소프트웨어 **에 대한 몇 가지 기사를 게시했습니다. 2] 및 튜토리얼 기사 [OpenShot 비디오 편집기로 비디오 편집을 시작하기위한 튜토리얼][3]. 이  **블렌더 비디오 편집 튜토리얼에서 ** 는 다음과 같은 점을 다루어 ** 블렌더 비디오 편집기** 로 설정하고 시작하는 방법을 배웁니다.
  * [블렌더 소프트웨어 란 무엇입니까][4]?
  * [블렌더로 비디오 편집을 시작하는 방법][5]
  * [피처 탐색][6]
  * [결론][7]
현재 시점에서 모든 브랜드는 더 나은 마케팅을위한 스토리가 필요합니다. 그러나 비디오는 브랜드 마케팅의 가장 빠르고 효과적인 소스로 간주됩니다. 효과적인 비디오 마케팅의 저명한 이유는 비디오가 비주얼, 사운드로 구성되며 다른 이유는 비디오가 길이가 짧아 마케팅 담당자가 쉽게 청중을 추적 할 수 있기 때문입니다. 또한 휴대폰 사용자는 비디오 마케팅에 크게 도움이됩니다. 이제 많은 플랫폼은 비디오가 전환율과 클릭률이 높기 때문에 비디오와 함께 제공되는 비즈니스 프로필을 평가합니다.

## 블렌더 소프트웨어 란 무엇입니까?   {#intro}
[Blender][8]는 **3D 모델링 **에도 사용되는 무료 ** 오픈 소스 비디오 편집 소프트웨어** 입니다. 고품질 애니메이션을 제작하는 비디오 시퀀스 편집기를 기반으로합니다. 사용자가 비디오와 오디오를 동기화 할 수있는 동기화 메커니즘이 있습니다. 이 무료 비디오 편집 플랫폼은 메인 뷰, 시퀀서 및 시퀀서/미리보기의 세 가지보기 유형을 제공합니다. 파형 시각화, 라이브 미리보기, 속도 제어 전환, 3D 파이프 라인 모델링, 합성, 시뮬레이션 등과 같은 많은 강력한 비디오 편집 기능을 제공합니다.
사용자 인터페이스와 관련 하여이 오픈 소스  **블렌더 비디오 편집기** 는 논리적 UI를 제공합니다. UI의 기본 모듈은 시작의 Topbar, Splash 화면, 상태 표시 줄, 탭 및 패널입니다. Blender는 C, C ++, Python으로 작성되었으며 모든 소스 코드는 [Github][9]에서 사용할 수 있습니다. MacOS, Windows 및 Linux와 같은 모든 인기있는 플랫폼에 배포 할 수 있습니다. 개발 및 배포와 관련된 모든 문서가 있습니다.

## 블렌더로 비디오 편집을 시작하는 방법   {#installation}
**블렌더 비디오 편집 자습서** 의이 섹션에서는 오픈 소스 블렌더 비디오 편집기를 설치하는 방법을 배웁니다. 설치 절차는 쉽고 직설적입니다. 먼저 MacBook을 사용하고 있으므로 다음 요구 사항을 설치했는지 확인하십시오. 또한 다른 플랫폼의 요구 사항을 확인할 수 있습니다 [여기][10].
  * git
  * cmake
  * SVN
  * xcode
전제 조건이 설치되면 터미널을 열고 다음 명령을 실행 하여이 비디오 편집 플랫폼의 소스 코드를 복제하십시오.
```
git clone https://git.blender.org/blender.git
```
성공적인 클론에서 다음 명령을 실행하십시오.
CD 블렌더
업데이트하십시오
이제 다음 명령을 실행하여 빌드하십시오.
```
make
```

{{< figure align=center src="images/Screenshot-2021-04-23-at-16.17.37-1024x206.png" alt="블렌더 비디오 편집기">}}

빌드가 완료되면 Blender.App을 찾을 수있는/build_darwin/bin을 찾을 수 있습니다.

## 기능 탐색   {#features}
설치가 완료되면 Blender.App을 두 번 클릭 하여이  **무료 오픈 소스 비디오 편집 소프트웨어** 를 실행할 수 있습니다. 이것은 아래 이미지에 표시된 창입니다.

{{< figure align=center src="images/Screenshot-2021-04-22-at-02.36.30-1024x609.png" alt="비디오 편집 자습서">}}

그런 다음 파일-> New-> 비디오 편집으로 이동하여 비디오 편집기를 엽니 다.

{{< figure align=center src="images/Screenshot-2021-04-23-at-16.32.38-1024x642.png" alt="오픈 소스 비디오 편집 소프트웨어">}}

위의 이미지에서 해상도, 파일 형식 등을 설정할 수있는 오른쪽 상단에서 구성 창을 찾을 수 있습니다. 왼쪽 상단에 비디오를 삭제/가져 와서 하단의 타임 라인을 삭제/가져올 수 있습니다. 비디오/오디오 클립을 정렬 할 수있는 곳.
이 **블렌더 비디오 편집 자습서 **에서 앞으로 나아가면서 비디오 클립을 가져 오면 컷, 작물, 변환, 효과, 텍스트 추가, 색상, 시간, 소스 및 기타 사용자 정의 속성과 같은 다양한 비디오 편집 작업을 수행 할 수 있습니다. 모든 비디오 파일이 상주하는 창의 왼쪽에 파일 탐색기를 볼 수 있습니다. 이  **오픈 소스 비디오 편집 소프트웨어 ** 의 화면 중간에 소스 비디오의 실시간 미리보기가 있습니다. 선호도에 따라 미리보기를 확대하거나 확대하고 확대 할 수 있습니다. 선택에 따라 비디오 방향을 변경할 수 있습니다. 이 비디오 편집 플랫폼의 맨 아래에는 비디오를 전달하거나 리버스 재생하는 옵션이 있습니다. 또한이 ** 블렌더 비디오 편집기** 에서 프레임 속도를 직접 설정할 수 있습니다. 아래 이미지와 같이 오른쪽 하단에서 이러한 모든 옵션을 찾을 수 있습니다.

{{< figure align=center src="images/Screenshot-2021-04-23-at-16.50.47-1024x641.png" alt="블렌더 비디오 편집기">}}

비디오에서 컷 또는 분할 기능을 수행하는 두 가지 방법이 있습니다. 첫 번째는 컷 포인트를 선택하고 키보드에서 "K"키를 눌러 비디오를 자르는 것입니다. 그러나 항상 컷 부분을 검색하는 옵션이 있습니다. 두 번째 옵션은 "Shift+K"를 눌러 비디오를 자르는 것입니다.이 메소드를 준수하면 트림 된 부분을 검색 할 수 없습니다. 편집 작업이 완료되면 오른쪽에는 아래 이미지에 표시된대로 파일 시스템의 모든 형식으로 파일을 저장할 수있는 옵션 "출력"이 있습니다.

{{< figure align=center src="images/Screenshot-2021-04-23-at-17.00.51-1024x640.png" alt="비디오 편집 자습서">}}


## 결론   {#conclusion}
바라건대,이 **블렌더 비디오 편집 자습서 **는 오픈 소스  **블렌더 비디오 편집기 ** 에 대해 안내해 드리겠습니다. 우리는 블렌더 소프트웨어 와이 비디오 편집 플랫폼의 다른 측면을 살펴 보았습니다. 이 ** 오픈 소스 비디오 편집 소프트웨어** 는 기능 및 비디오 편집 서비스 측면에서 다재다능합니다. 비즈니스의 경우 비디오는 제품과 서비스를 이해할 수 있고 트래픽을 늘리는 데 강력한 역할을합니다. 이메일 마케팅, 소셜 미디어 마케팅, SMS 마케팅 및 검색 엔진 마케팅과 같은 다양한 유형의 마케팅이 있습니다. 브랜드 비디오를 포함 시키면 이러한 모든 유형이 더 큰 영향을 미칩니다. 모든 인기있는 검색 엔진은 비디오 컨텐츠를 높이 평가합니다. 따라서 항상 청중에게 마지막으로 갈망하는 영향을 미치는 비즈니스에 대한 설득력 있고 스토리 텔링 및 설득력있는 비디오를 만드십시오. 그렇게함으로써 사람들은 당신의 사업을 신뢰하고 결정을 내리는 데 편안하다고 느낍니다.
마지막으로, [Containerize.com][11]는 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 따라서 정기적 인 업데이트를 위해 [비디오 편집 소프트웨어][12] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [OpenShot][13]
  * [shotcut][14]
  * [FlowBlade][15]
  * [kdenlive][16]
  * [블렌더][8]
  * [2021 년 비디오 마케팅을위한 상위 5 개 무료 비디오 제작 도구][2]
  * [OpenShot 비디오 편집기로 비디오 편집을 시작하기위한 튜토리얼][3]
  * [오픈 소스 비디오 편집기가 비즈니스 비디오 마케팅을 강화하는 방법][1]

  
[1]: https://blog.containerize.com/video-editing-software/how-video-editing-software-improves-business-video-marketing/
[2]: https://blog.containerize.com/video-editing-software/top-5-open-source-video-editor-software-for-video-marketing/
[3]: https://blog.containerize.com/video-editing-software/openshot-video-editor-tutorial-for-beginners-open-source/
[4]: #intro
[5]: #Installation
[6]: #features
[7]: #Conclusion
[8]: https://products.containerize.com/video-editing-software/blender
[9]: https://github.com/blender/blender
[10]: https://wiki.blender.org/wiki/Building_Blender
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/video-editing-software
[13]: https://products.containerize.com/video-editing-software/openshot
[14]: https://products.containerize.com/video-editing-software/shotcut
[15]: https://products.containerize.com/video-editing-software/flowblade
[16]: https://products.containerize.com/video-editing-software/kdenlive
