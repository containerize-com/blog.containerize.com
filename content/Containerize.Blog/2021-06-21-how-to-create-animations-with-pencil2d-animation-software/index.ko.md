---
title: "Pencil2D 애니메이션 소프트웨어로 애니메이션을 만드는 방법" 
seoTitle: "Pencil2D 애니메이션 소프트웨어로 애니메이션을 만드는 방법" 
description: "Pencil2D는 사용자가 2D 애니메이션과 스케치를 만들 수있는 오픈 소스 애니메이션 소프트웨어입니다. 이 기사는 Pencil2d로 애니메이션을 만드는 방법에 관한 것입니다." 
date: Mon, 21 Jun 2021 06:45:42 +0000
author: bilalahmed
summary: "Pencil2D는 사용자가 2D 애니메이션과 스케치를 만들 수있는 오픈 소스 애니메이션 소프트웨어입니다. 이 기사는 Pencil2d로 애니메이션을 만드는 방법에 관한 것입니다." 
url: /ko/how-to-create-animations-with-pencil2d-animation-software/
categories: ['Animation Software']
---

{{< figure align=center src="images/How-To-Create-Animations-With-Pencil2D-Animation-Software.png" alt="Pencil2D 애니메이션 소프트웨어로 애니메이션을 만드는 방법">}}


## **Pencil2d는 사용자가 2D 애니메이션과 스케치를 만들 수있는 오픈 소스 애니메이션 소프트웨어입니다. 이 기사는 Pencil2d** 로 애니메이션을 만드는 방법에 관한 것입니다.
애니메이션과 삽화를 만들기 위해 새로운 소프트웨어를 배우는 것과 관련하여, 우리는 새로운 소프트웨어를 마스터하고 애니메이션을 배우는 데 도움이되는 많은 튜토리얼과 가이드를 만들었습니다. 초보자이든 고급 사용자이든, 당사의 [과거 게시물][1]은 귀하에게 적합한 애니메이션 애플리케이션을 찾는 데 도움이 될 수 있습니다. Pencil2D 애니메이션 소프트웨어로 애니메이션을 만드는 방법을 배우려면 다음 주제를 다루겠습니다.
  * [Pencil2d는 무엇입니까?][2]
  * [Pencil2d를 설치하는 방법?][3]
  * [응용 프로그램 인터페이스 개요][4]
  * [Pencil2d로 애니메이션을 만드는 방법?][5]
  * [결론][6]

## Pencil2d는 무엇입니까? {#what-is-pencil2d}

[Pencil2d][7]는 사용자가 다양한 프로젝트를위한 2D 스케치 및 애니메이션을 만들 수있는 전통적인 애니메이션 응용 프로그램입니다. GNU 일반 공개 라이센스에 따라 라이센스가 부여 된 오픈 소스 애니메이션 소프트웨어이므로 개인 프로젝트와 상업적 노력에 Pencil2D를 사용할 수 있습니다. Pencil2D를 사용하는 것은 게시물에서 더 많이 볼 수 있듯이 매우 간단합니다. 초보자 애니메이터와 전문 사용자도 사용할 수 있습니다.
[Pencil2d][7]를 사용하면 애니메이션이 비트 맵 또는 벡터 도면에 저장되며 애니메이션의 효과적인 관리를 위해 래스터/벡터 워크 플로우를 사용합니다. Pencil2D를 사용하는 동안 허용 가능한 파일 형식 중 일부는 이미지의 경우 PNG, JPEG, BMP, TIFF 등과 비디오의 경우 AVI, MP4, GIF 등입니다. Windows, Mac OS, Linux 및 FreeBSD 와도 호환됩니다.

## pencil2d를 설치하는 방법? {#install-pencil2d}

터미널을 열고 다음 명령을 입력하여 로컬 서버의 패키지 색인을 업데이트하십시오.
```
sudo apt-get update -y

```
PENCIL2D를 설치하려면 터미널에서 다음 명령을 실행하십시오.
```
sudo apt-get install -y pencil2d

```

## 응용 프로그램 인터페이스의 개요 {#application-interface}

Pencil2d로 애니메이션을 만드는 방법에 대한 실제 Pencil2d 자습서로 시작하기 전에 여기에는 사용자 인터페이스에 대한 약간의 개요와 도구와 기능을 알아야 할 몇 가지가 좋습니다.
* **화이트 보드 :**  처음으로 Pencil2D를 출시 할 때 애니메이션의 기본 부분을 만들 수있는 컨트롤 패널, 도구 및 기능으로 둘러싸인 중간에 메인 화이트 보드가 표시됩니다.
* **도구 :**  왼쪽에는 브러시 도구, 연필, 지우개, 색상을 추가 할 수있는 버킷 도구 및 만화 또는 애니메이션을 스케치하고 정의 할 수있는 모든 기능이 포함 된 도구 기능이 있습니다.
* **옵션 상자 :**  도구 상자 아래에서 사용중인 도구의 속성을 정의하는 옵션을 얻을 수있는 옵션 창을 포함하거나 제거 할 수 있습니다. 예를 들어, 브러시를 사용하는 경우 브러시 두께, 색상이 밝거나 어두워 지거나 비슷한 기능 사이를 전환 할 수 있습니다.
* **디스플레이 박스 :**  옵션 창 아래에는 흰색 보드에서 그린 스케치를 조작 할 수있는 디스플레이 박스가 있습니다. 예를 들어 오른쪽 또는 왼쪽을 뒤집고 양파 스킨을 이전 스케치 등에 적용합니다.
* **컬러 팔레트 :**  여기에는 도면에 추가 할 수있는 모든 색상이 있습니다.
* **컬러 박스 :**  컬러 팔레트 바로 아래에는 컬러 휠에서 특정 색조를 선택할 수있는 컬러 박스입니다.
* **타임 라인 패널 :**  이것은 비트 맵 레이어, 벡터 레이어 및 카메라 레이어로 시작하여 애니메이션에 레이어를 적용 할 수있는 Pencil2D의 가장 중요한 부분 중 하나입니다. 또한 키 프레임을 추가하여 비디오 애니메이션을 만들고 삭제 및 중복 프레임 등을 만들 수도 있습니다.
이 도구를 마스터하고 이해 한 후에는 즉시 애니메이션과 스케치를 만들거나 갈 때 배울 수 있습니다.

## Pencil2d로 애니메이션을 만드는 방법은 무엇입니까? {#create-animations}

이제 Pencil2D로 기본 애니메이션을 만들 수 있습니다.
{{_LINE_38_}}
{{_LINE_39_}}

{{< figure align=center src="images/IMG-20210617-WA0049.jpg" alt="Pencil2D 애니메이션 소프트웨어로 애니메이션을 만듭니다">}}

{{_LINE_41_}}
{{_LINE_42_}}

{{< figure align=center src="images/IMG-20210617-WA0050.jpg" alt="Pencil2D 애니메이션 소프트웨어로 애니메이션을 만듭니다">}}

{{_LINE_44_}}
{{_LINE_45_}}

{{< figure align=center src="images/IMG-20210617-WA0051.jpg" alt="Pencil2D 애니메이션 소프트웨어로 애니메이션을 만듭니다">}}

{{_LINE_47_}}
{{_LINE_48_}}

{{< figure align=center src="images/IMG-20210617-WA0053.jpg" alt="Pencil2D 애니메이션 소프트웨어로 애니메이션을 만듭니다">}}

{{_LINE_50_}}
{{_LINE_51_}}

{{< figure align=center src="images/IMG-20210617-WA0048.jpg" alt="Pencil2D 애니메이션 소프트웨어로 애니메이션을 만듭니다">}}

{{_LINE_53_}}
{{_LINE_54_}}
이제 웹 사이트에 애니메이션을 포함하여 브라우저 나 데스크탑 등을 재생할 수 있습니다.

## 결론 {#conclusion}

위의 튜토리얼에서 볼 수 있듯이 Pencil2D로 애니메이션을 만드는 것은 이해하고 실행하기 쉽습니다. 애니메이션 소프트웨어는 초보자 친화적 인 방식으로 제작되었으며 전문가들도 빠르게 채택했습니다. Pencil2D에는 2D 스케치 또는 애니메이션을 만들 때 사용할 수있는 많은 옵션이 있으며, 모든 Illustrator는 응용 프로그램과 함께 강력한 포트폴리오를 만들 수 있습니다.
[Pencil2d][7]는 앞에서 언급 한 것처럼 많은 운영 체제와 호환되므로 선택한 환경에서 애니메이션 소프트웨어를 단순히 플러그 앤 플레이 할 수 있습니다. Pencil2d에 관한 더 많은 튜토리얼을 찾고 있다면 단순히 웹 사이트를 확인할 수 있습니다. 또한 웹 사이트에서 찾을 수있는 다른 애니메이션 소프트웨어 프로그램을 사용할 수있는 많은 튜토리얼과 가이드를 만들었으므로 더 명확하게 확인하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [pencil2d | 크로스 플랫폼 및 오픈 소스 무료 2D 애니메이션 소프트웨어][7]
  * [Digikam을 사용하여 무료 이미지 편집을 시작하기위한 초보자 안내서][8]
  * [최고의 오픈 소스 애니메이션 소프트웨어][9]



[1]: https://blog.containerize.com/
[2]: #what-is-pencil2d
[3]: #install-pencil2d
[4]: #application-interface
[5]: #create-animations
[6]: #conclusion
[7]: https://products.containerize.com/animation-software/pencil2d/
[8]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
[9]: https://products.containerize.com/animation-software/
