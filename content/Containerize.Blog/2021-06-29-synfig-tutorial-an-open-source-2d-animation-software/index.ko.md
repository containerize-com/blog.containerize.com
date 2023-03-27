---
title: "Synfig Tutorial | 오픈 소스 2D 애니메이션 소프트웨어" 
seoTitle: "Synfig Tutorial | 오픈 소스 2D 애니메이션 소프트웨어" 
description: "Synfig로 2D 애니메이션을 만드는 것은 무료이며 완벽하며 빠른 프로세스입니다. 이 안내서에서는 시작하는 데 필요한 모든 정보를 찾을 수 있습니다." 
date: Tue, 29 Jun 2021 08:08:53 +0000
author: yasir saeed
summary: "Synfig로 2D 애니메이션을 만드는 것은 무료이며 완벽하며 빠른 프로세스입니다. 이 안내서에서는 시작하는 데 필요한 모든 정보를 찾을 수 있습니다." 
url: /ko/synfig-tutorial-an-open-source-2d-animation-software/
categories: ['Animation Software']
---

## Synfig를 사용하여 2D 애니메이션을 만드는 것은 무료이며 완벽하며 빠른 프로세스입니다. 이 안내서에서는 시작하는 데 필요한 모든 정보를 찾을 수 있습니다.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

  * [Synfig 란 무엇입니까?][1]
  * [Synfig를 설치하는 방법?][2]
  * [응용 프로그램 인터페이스 개요][3]
  * [Synfig로 기본 애니메이션을 만드는 방법?][4]
  * [결론][5]

## Synfig 란 무엇입니까? {#what}

Synfig는 솔로 아티스트 나 소규모 팀이 애니메이션 워크 플로우 및 프로젝트를 관리하도록 설계된 최고의 2D 애니메이션 소프트웨어 중 하나입니다. 오픈 소스 애니메이션 소프트웨어 인 Synfig는 애니메이션이 처리하는 데 걸리는 시간을 줄일뿐만 아니라 애니메이터에게 드로잉 프레임을 현명하게 추가 할 수있는 기능을 제공하는 "트윈리스"애니메이션 시스템을 사용합니다.
Synfig를 사용할 때는 실제로 Solo 또는 Small Team에서 작업하는 모든 아티스트의 파이프 라인에 큰 도움이 될 수있는 가볍고 빠른 처리 애니메이션 소프트웨어입니다. 또한 Synfig Community는 소프트웨어 응용 프로그램 사용에 대한 자습서뿐만 아니라로드 블록에 달하는 경우 솔루션을 찾는 데 도움이되는 리소스를 찾을 수있는 적극적인 장소입니다.
Windows, Mac OS 및 Linux를 포함한 여러 운영 체제에서 Synfig를 쉽게 사용할 수 있습니다. Synfig를 사용하는 동안 시스템은 다음과 같습니다.
  * 최소 2GB RAM 이상
  * 2GHz 이상의 듀얼 코어 CPU
Synfig는 Morevna : Demo Project, Morevna의 마감일, Cyan LOS의 극지 형사 프롤로그 및 기타 많은 상업 프로젝트를 포함하여 상당히 인기있는 프로젝트를 애니메이션하는 데 사용되었습니다. 이것은 상업 및 개인 프로젝트에도 사용할 수 있으므로 Synyfig의 범위를 보여줍니다. Animation World를 처음 사용하든 경력에서 발전하든 Synfig는 스킬 세트에 멋진 버전을 만들고 놀라운 2D 애니메이션을 만드는 데 큰 도움이 될 수 있습니다. 다른 애니메이션 소프트웨어 프로그램에 대한 자세한 내용을 찾고 있다면 우리가 만든 다른 안내서와 튜토리얼을 확인할 수 있습니다.

## Synfig를 설치하는 방법? {#how-to-install}

Linux 장치에 Synfig 2D Animation 소프트웨어를 설치하려면 Synfig의 기본 홈페이지에서 설치 프로그램 파일을 직접 다운로드 할 수 있습니다. 32 비트 또는 64 비트 이미지 파일을 다운로드 할 수있는 옵션이 제공됩니다. 시스템에 따라 선택하십시오.
다운로드되면 명령 줄을 열고 다음 명령을 입력하십시오.
```
sudo apt-get update
```
```
sudo apt-get install synfigstudio
```
이제 Synfig Studio에 쉽게 액세스 할 수 있어야합니다.

## 응용 프로그램 인터페이스 개요 {#application-interface}

위에서 언급했듯이 Synfig Studio는 사용자가 원활하고 빠른 처리, 트윈리스 2D 애니메이션을 만들 수있는 오픈 소스 애니메이션 소프트웨어입니다. 도구와 기능을 이해하려면 처음 사용하기 시작할 때 Synfig Studio의 빠른 개요가 있습니다.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-1-1024x649.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

* **캔버스 :** 캔버스는 애니메이션을 스케치하고 효과, 레이어, 프레임 및 편집을 적용 할 수있는 중간의 회색 체크 무늬 패턴입니다. 여기에서는**키 프레임** 키 프레임을 잠그기/잠금 해제하고**애니메이션 모드로 전환 할 수있는 오른쪽의 버튼으로 둘러싸인 캔버스가 있습니다. 타임 라인 0이 아닌 애니메이션을 정의한 경우.
* **도구 :**  도구 상자는 객체를 조작하는 데 필요한 모든 도구를 찾을 수있는 Synfig의 주요 구성 요소 중 하나입니다. 브러시 크기, 색상, 그라디언트 적용, 애니메이션 지우기, 텍스트 적용 등에서 애니메이션을 만들고 왼쪽 상단의 도구 상자 패널에서 편집하는 데 필요한 모든 것을 찾을 수 있습니다.
* **시간 트랙 패널 :**  애니메이션을 만들 때 타이밍이 중요하며 시간 트랙 패널을 사용하면 키 프레임과 모든 웨인 포인트 (Time Track 패널에 나타나는 그래픽 기호를 조정을 표시 할 수 있습니다. 관련된 모든 매개 변수).
* **매개 변수 패널 :**  여기에서는 색상, 너비, 불투명도 등과 같은 애니메이션의 활성 요소에 대한 모든 자세한 옵션과 설정을 찾을 수 있습니다. Synfig의 핵심 구성 요소 중 하나입니다.
이제 Synfig Studios와 함께 애니메이션을 만들 수 있습니다.

## Synfig로 기본 애니메이션을 만드는 방법은 무엇입니까? {#create-animation}

이 게시물 의이 부분에서는 Synfig Studio를 사용하여 기본 애니메이션을 만드는 방법에 대한 단계별 자습서를 제공합니다. 의 시작하자.
{{_LINE_40_}}
{{_LINE_41_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-02.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

{{_LINE_43_}}
{{_LINE_44_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-03.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

{{_LINE_46_}}
{{_LINE_47_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-04.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

{{_LINE_49_}}
{{_LINE_50_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-05.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

{{_LINE_52_}}
{{_LINE_53_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-06.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

{{_LINE_55_}}
{{_LINE_56_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-07.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

{{_LINE_58_}}
{{_LINE_59_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-08.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

{{_LINE_61_}}
{{_LINE_62_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-09.png" alt="Synfig Tutorial 오픈 소스 2D 애니메이션 소프트웨어">}}

{{_LINE_64_}}
{{_LINE_65_}}
그리고 Synfig Studio에서 애니메이션을 만드는 방법에 대한 기본 자습서가 있습니다.

## 결론 {#conclusion}

Synfig 2d Animation 소프트웨어를 사용하는 것은 이미 작업에 애니메이션 소프트웨어를 사용하는 경우 매우 간단하고 쉽습니다. 애니메이션 산업에 익숙하지 않더라도 인터페이스를 이해하는 것은 쉬운 일입니다. 이 튜토리얼이 도움이되었고 다른 학업, 상업 또는 개인 프로젝트를위한 2D 애니메이션을 만들어 포트폴리오를 만들 수 있기를 바랍니다.
_ 가장 좋아하는 오픈 소스 애니메이션 소프트웨어는 무엇입니까?. 애니메이션 소프트웨어에 대해 궁금한 점이 있습니까?

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [최고의 오픈 소스 애니메이션 소프트웨어][7]
  * [Synfig | 무료 및 오픈 소스 벡터 기반 2D 애니메이션 스위트][8]
  * [Pencil2D 애니메이션 소프트웨어로 애니메이션을 만드는 방법][9]
  * [Digikam을 사용하여 무료 이미지 편집을 시작하기위한 초보자 안내서][10]



[1]: #what
[2]: #how-to-install
[3]: #application-interfae
[4]: #create-animation
[5]: #conclusion
[6]: mailto:yasir.saeed@aspose.com
[7]: https://products.containerize.com/animation-software/
[8]: https://products.containerize.com/animation-software/synfig/
[9]: https://blog.containerize.com/animation-software/how-to-create-animations-with-pencil2d-animation-software/
[10]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
