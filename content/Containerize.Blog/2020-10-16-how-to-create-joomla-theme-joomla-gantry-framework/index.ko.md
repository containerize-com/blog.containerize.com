---
title: "Joomla 테마를 만드는 방법 | Joomla 갠트리 프레임 워크" 
seoTitle: "Joomla 테마를 만드는 방법 | Joomla 갠트리 프레임 워크" 
description: "Joomla Gantry Framework는 오픈 소스이며 Drag & Drop 기능이있는 GUI를 제공하므로 사용자는 동적이고 반응이 좋은 Joomla CMS 템플릿을 빠르게 구축 할 수 있습니다." 
date: Fri, 16 Oct 2020 10:55:10 +0000
author: Masood Anwer
summary: "오픈 소스 템플릿 빌더가있는 강력하고 대화식 및 사용하기 쉬운 Joomla 테마를 디자인하십시오. 갠트리 프레임 워크는 페이지 응답 시간과 성능을 향상시킵니다." 
url: /ko/how-to-create-joomla-theme-joomla-gantry-framework/
categories: ['Content Management']
---

## 오픈 소스 템플릿 빌더가있는 강력하고 대화식 및 사용하기 쉬운 Joomla 테마. 갠트리 프레임 워크는 페이지 응답 시간과 성능을 향상시킵니다.

{{< figure align=center src="images/joomla-gantry-framework.png" alt="Joomla 갠트리">}}


## **개요**
우리는 이미 [초보자를위한 Joomla Template Development Guide][1], [Drupal Mautic 통합], [리드 육성을 자동화하기위한 Drupal Mautic 통합][2], [디지털 마케팅 자동화를위한 Mautic & Joomla 통합][3] 더 이상, 우리는이 안내서에서**갠트리 프레임 워크**로 테마를 만드는 데 집중할 것입니다. 갠트리 프레임 워크는 [Joomla][4] 및 [WordPress][5]에 대한 반응 형 및 엔터프라이즈 수준 레이아웃을 구축하는 데 사용되는 오픈 소스 템플릿 빌더입니다. 오픈 소스 커뮤니티는 풍부한 기능을 갖춘 테마 건설 기능을 제공하는 광범위한 컨텐츠 관리 시스템을 개발했습니다. Joomla의 갠트리 프레임 워크는 가장 인기있는 테마 프레임 워크 중 하나입니다. 시선을 사로 잡고 매력적인 웹 사이트를 구축하는 것은 모든 비즈니스의 중요한 구성 요소입니다. 그러나 이러한 웹 사이트를 구축하거나 수정 해야하는 시간은 또 다른 중요한 측면입니다.
따라서 Joomla Gantry Framework는 레이아웃 개발 프로세스 속도를 높이는 조항을 제공합니다. 무엇보다도 코딩 또는 프로그래밍 기술이 장착되는 강박을 제거합니다. 반면에, 그러한 프레임 워크의 설치 프로세스는 매우 쉽고 간단합니다. WordPress 및 Joomla와 같은 대부분의 콘텐츠 관리 시스템을위한 플러그인 형태로 제공됩니다. 이 갠트리 프레임 워크 튜토리얼에서는 다음과 같은 점을 다룰 것입니다.
* [**Joomla의 갠트리 프레임 워크 란 무엇입니까?**][6]
* [**갠트리 프레임 워크 설치**][7]
* [**갠트리 테마 설치**][8]
* [**갠트리로 테마 생성**][9]

## Joomla의 갠트리 프레임 워크 란 무엇입니까?   {#받침대}
[**gantry**][10]는 Joomla의 무료 및 오픈 소스 테마 프레임 워크입니다.**gantry**는 빠르고 유연한 웹 테마 프레임 워크입니다. 트위터 부트 스트랩을 기반으로하는 12 열, 960 그리드 시스템 레이아웃에 구축되었습니다. 또한 개발자와 최종 사용자 모두에게 사용하기 쉽습니다. GANTRY는 GUI 기능이 코드를 쓰는 대신 사이트를 빠르게 설계하는 데 도움이되므로 사용자가 테마를 빠르게 사용자 정의 할 수있는 드래그 앤 드롭 기능이 있습니다. 텍스트 파일 구성 (YAML)을 기반으로 하므로이 텍스트 파일을 쉽게 편집 할 수 있습니다. 또한이 오픈 소스 테마 빌더는 WordPress 및 Joomla에서 사용할 수 있습니다. Joomla Gantry는 컨텐츠 및 데이터에 대해 사용자에게 완전히 제어 할 수 있습니다. 이 무료 테마 빌더를 구성하고 타사 응용 프로그램과 통합하는 기능이 있습니다. 또한 확장 가능하며 사용자는 요구 사항에 따라 기능을 확장 할 수 있습니다.
테마 빌딩 옵션에 관한 한,이 테마 프레임 워크는 Google 글꼴, 토글, 컬러 쿠저, 이미지 선택, 프리 픽스 레이블, 접미사가있는 슬라이더 텍스트 플러스 등을 포함한 UI 요소의 여러 스타일과 디자인을 제공합니다. 실제로 아랍어, 파르시 등과 같은 오른쪽에서 왼쪽 언어에 대한 지원이 있습니다. 사용자는 블록의 크기를 제어 할 수 있으며 그리드 시스템의 도움으로 레이아웃을 설계 할 수 있습니다. 갠트리는 매우 안전하며 이벤트에 대한 Ajax 구동 비 침입 으르렁 거리 스타일 알림을 제공합니다. 또한, 많은 인쇄 특징, JavaScript 컨트롤, URL, 쿠키, 세션 및 사전 설정을 통해 매개 변수를 설정하는 능력이 있습니다.

## 갠트리 프레임 워크 설치   {#installing}
  * Gantry를 다운로드하십시오
***Extensions-> Extensions Manager-> 설치**로 이동하고 파일 선택 버튼을 선택하십시오. 다운로드 한 zip을 찾아 업로드 및 설치를 클릭하십시오.
  * Extensions Manager에서 갠트리 확장을 볼 수 있습니다. 모든 갠트리 확장이 활성화되어 있는지 확인하십시오.

## 갠트리 테마 설치   {#installTheme}
Gantry Framework 튜토리얼 의이 섹션에서는이 테마 프레임 워크 (Gantry)를 설치합니다.
***Extensions-> Extensions Manager-> 설치**로 이동하십시오. 파일 선택 버튼을 선택하고 다운로드 한 zip을 찾아 업로드 및 설치 버튼을 클릭하십시오. 템플릿 템플릿이 템플릿 관리자에 나타납니다.
***Extensions-> Template Manager**로 이동하여 Gantry Checkbox를 선택하고 사이트의 기본 템플릿을 선택하십시오.

## gantry   {#CreatEtheme}으로 테마 만들기
* * 갠트리 테마**를 구축하는 매우 쉬운 방법. 현재 테마를 가져 와서 새로운 테마를 만들기위한 템플릿으로 사용하십시오.
  * 수소 테마를 다운로드, 압축을 풀고 열 수 있습니다.
  * 파일 및 디렉토리의 이름을 변경합니다.
  * 새 테마 이름이 "신화"라고 가정 해 봅시다. 따라서 수소를 파일과 디렉토리의 신화로 바꾸십시오.
  * 테마 이름에 대한 파일을 검색합니다. 오래된 테마 이름을 "수소로, 신화로, 신화와 신화로 수소로 수소"와 같은 새로운 테마 이름을 찾아 대체하십시오.
  * 지퍼 테마, 설치하십시오.

## 결론
이것이이 갠트리 프레임 워크 튜토리얼의 끝입니다. 이 블로그 게시물에서 우리는 Joomla Gantry 프레임 워크, 기능 및 Joomla Content Management의 설치 단계를 도입했습니다. 이 템플릿 빌더는 오픈 소스이며 무료이며 살아 있고 버그 및 토론에 매우 반응하는 활기찬 지원 커뮤니티가 제공됩니다. 또한이 블로그 게시물은 Joomla 또는 WordPress를 사용하여 웹 사이트를 구축 한 경우 실제로 도움이 될 수 있습니다. 테마는 모든 웹 사이트의 중심 부분이며 아름다운 UI를 가진 방문객을 끌어들입니다. 테마 프레임 워크의 유무에 관계없이**joomla 템플릿 무료**를 만들 수 있지만 갠트리 프레임 워크를 사용하여 대화식 및 반응이 좋은 Joomla 템플릿을 만들 수 있습니다. 개발 비용과 시간을 절약하는 데 도움이됩니다.
Gantry는 최고의 Joomla 템플릿 프레임 워크 중 하나이므로 레이아웃 관리자, 비주얼 메뉴 편집기, SCSS/Less Support, 테마 상속 등과 같은 기능을 소비하여 진정한 힘을 즐길 수 있습니다. 또한 탐색 할 수있는 다른 많은 튜토리얼 및 비교 블로그 게시물 및 오픈 소스 제품이 있습니다. 모든 상장 된 제품은 무료이며 자체 호스팅 기능이 제공됩니다. 마지막으로, [**containerize.com**][11]는 추가 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트를 위해이 [**컨텐츠 관리**][12] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [Joomla - 무료 CMS 소프트웨어][13]
  * [Drupal][14]
  * [파이로][15]
  * [Django CMS][16]
  * [Umbraco CMS][17]
  * [Concrete5][18]
  * [디지털 마케팅 자동화를 위해 Mautic & Joomla 통합][3]
  * [리드 육성을 자동화하기위한 Drupal Mautic 통합][2]
  * [2020 년의 상위 5 개 무료 응답 형 Joomla 부트 스트랩 템플릿][19]
  * [초보자를위한 Joomla 템플릿 개발 가이드][1]
  * [2020 년 최고의 무료 응답 형 Joomla 템플릿][19]
  * [기본 Joomla 템플릿 생성을위한 초보자 안내서][20]
  * [Joomla vs Drupal | 2021 년 CMS 비교][21]
  * [무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화][22]

  
[1]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
[2]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[3]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
[4]: https://products.containerize.com/content-management/joomla/
[5]: https://products.containerize.com/blogging/wordpress/
[6]: #gantry
[7]: #Installing
[8]: #installtheme
[9]: #createtheme
[10]: http://gantry.org/
[11]: https://containerize.com
[12]: https://blog.containerize.com/category/content-management/
[13]: https://products.containerize.com/content-management/joomla
[14]: https://products.containerize.com/content-management/drupal
[15]: https://products.containerize.com/content-management/pyro
[16]: https://products.containerize.com/content-management/django
[17]: https://products.containerize.com/content-management/umbraco
[18]: https://products.containerize.com/content-management/concrete5
[19]: https://blog.containerize.com/content-management/top-5-best-free-responsive-joomla-templates-of-2020/
[20]: https://blog.containerize.com/content-management/beginners-guide-to-create-a-basic-joomla-template/
[21]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[22]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
