---
title: "HTML 양식 생성기 시작하기 | Formbuilder" 
seoTitle: "HTML 양식 생성기 시작하기 | Formbuilder" 
description: "FormBuilder는 드래그 앤 드롭 사용자 인터페이스가있는 무료 및 다국어 HTML 양식 생성기입니다. 이 튜토리얼을 따라 LocalHost에서 설정하는 방법을 알아보십시오." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "JavaScript는 여러 구성, 구성 가능한 양식 템플릿 및 사용자 정의 컨트롤을 갖춘 오픈 소스 양식 편집기입니다. FormBuilder를 설정하는 방법을 배우겠습니다." 
url: /ko/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## JavaScript 전원 오픈 소스 양식 편집기, 여러 구성, 구성 가능한 양식 템플릿 및 사용자 정의 컨트롤이 있습니다. FormBuilder를 설정하는 방법을 배우겠습니다.

{{< figure align=center src="images/formbuilder.png" alt="HTML 양식 생성기">}}


## **개요** 
우리는 최근 [LocalHost에서 Bootstrap Form Creator Form.io를 설정하는 방법][1] 및 [2020 년에 상위 5 개 오픈 소스 온라인 양식 빌더]와 같은 주제에 대한 몇 가지 기사를 게시했습니다. [2]. 첫 번째 블로그 게시물은 부트 스트랩 양식 빌더 [form.io][3]의 설정 프로세스 및 기능을 보여주는 튜토리얼 기사입니다. 두 번째 기사는 널리 사용되는 오픈 소스 양식 빌더에 대해 이야기합니다. 현재 시점에서, 양방향 상호 작용은 서비스 제공 업체와 서비스 소비자 사이에서 가장 중요한 것입니다. 조직은 서비스에 대한 일관된 피드백을받는 경향이 있으며 미래의 비즈니스 전략을 공식화합니다. 그러나 양식은 고객으로부터 정보를 수집하고 저장하는 것입니다. 기업은 다양한 진행중인 운영에 대한 데이터를 수집하기 위해 여러 가지 양식을 생산하며 그 중 일부는 단일 페이지이며 그 중 일부는 다중 페이지 형식입니다. 일부 비즈니스는 온라인 포털에 양식을 포함 시키거나 일부는 이메일 또는 다른 종류의 매체를 사용하여 데이터 수집 양식을 노출시킵니다.
따라서 Rich Form Builder 기능으로 사용할 수있는 많은 오픈 소스 양식 및 데이터 관리 소프트웨어가 있습니다. 이 기사에서는 다음 점을 다루어 무료 HTML 양식 생성기  **[Formbuilder][4]** 를 탐색 할 것입니다.
  * **[Formbuilder 란 무엇입니까?][5]**
  *[**설정 방법?** ][6]
  *[**Formbuilder를 사용하여 양식을 만드는 방법?** ][7]
  * **[결론][8]**

## FormBuilder 란 무엇입니까?   {#무엇}
[FormBuilder][4]는 사용자가 대화식 양식을 만들 수있는 오픈 소스 양식 설계자입니다. 안전하고 확장 가능하며 자체 호스팅 기능이 제공됩니다. 이 HTML 양식 생성기는 다국어이며 여러 언어를 지원합니다. 사용자가 양식 요소를 드래그 앤 드롭하여 필요한 양식 템플릿을 공식화 할 수있는 사용자 친화적 인 사용자 인터페이스가 있습니다. 또한 풍부한 컨트롤 및 구성 가능한 양식 템플릿을 제공합니다. 또한 사용자는 사용자 인터페이스에서 여러 탭을 만들어 멀티 페이지 양식을 작성할 수 있습니다. 무엇보다도 사용자는 플러그인을 개발 하여이 무료 양식 빌더를받을 수 있습니다. 개발 및 배포와 관련된 모든 문서가 있습니다. Node.js로 작성되었으며 모든 소스 코드는 [github][9]에서 사용할 수 있습니다.
다음은 Form.io의 주요 하이라이트입니다
  * I18N 통합
  * 다중 페이지 양식
  * 확장 가능
  * 인기있는 JavaScript 프론트 엔드 프레임 워크 지원
  * 드래그 앤 드롭 UI

## 설정 방법?   {#설정}
Form Builder Tutorial 의이 섹션에서는 로컬 컴퓨터에서 FormBuilder를 설정하는 방법을 보여줍니다.
더 나아 가기 전에 다음 사전 반품을 설치했는지 확인하십시오.
  * node.js> = 10.9.0
  * NPM
  * git
사전 반품을 설치 한 후 다음 명령을 실행 하여이 응용 프로그램의 소스 코드를 복제하십시오.
```
git clone https://github.com/kevinchappell/formBuilder
```
다음으로 다음 명령을 실행하여 종속성을 설치하십시오.
```
cd form-builder<br>npm install 
```
그런 다음 다음 명령을 실행하여 응용 프로그램을 시작할 수 있습니다.
```
npm start
```
마지막으로 위의 명령은 다음 주소로 응용 프로그램을 브라우저로 열 것입니다.
```
http://localhost:8080/
```

## FormBuilder를 사용하여 양식을 만드는 방법은 무엇입니까?   {#어떻게}
이 섹션에서는이 HTML 양식 생성기의 기능을 살펴보고 양식을 만드는 방법을 배울 것입니다.
서버를 시작하면 다음 사용자 인터페이스가 나타납니다.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="HTML 양식 생성기">}}

앞으로 오른쪽의 메뉴 표시 줄을 볼 수 있습니다. 버튼, 확인란, 텍스트 필드, 데이터 필드, 헤더, 단락 등과 같은 양식 요소가 포함되어 있습니다. 그러나 이러한 요소를 드래그하고 화면의 중간 영역 (드롭 가능)에서 떨어질 수 있습니다. 왼쪽 상단에 앱의 부트 스트랩 버전을 활성화하는 옵션이 있습니다. 왼쪽 상단 모서리에는 사용자가 사용 가능한 모든 언어를 선택할 수있는 드롭 다운이 있습니다.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="양식 편집기">}}

다음으로, 우리는 모든 형태의 요소를 드롭 페이블 영역으로 끌어 낼 수 있습니다. 또한 위의 이미지에 표시된대로 요소의 구성을 편집 할 수 있습니다. 기존 요소의 사본을 만들 수있는 옵션이 있습니다. 요소의 배치를 서로 변경할 수 있습니다.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="HTML 양식 생성기">}}

양식 빌딩을 마치면 상단 중간에 놓인 "렌더링"버튼을 눌러 양식을 렌더링 할 수 있습니다. 또한 사용자가 양식 뒤에 HTML을 생성 할 수있는 다양한 양식 옵션이 있습니다. 로드 사용자 양식, 사용자 데이터 표시, 사용자 양식 렌더링 및 명확한 사용자 양식과 같은 다른 옵션도 있습니다. 이러한 기능과 함께, "getfieldTypes"와 같은 많은 양식 조치가 있으며, 이는 등록 된 필드 유형을 양식에 반환합니다. 마찬가지로 Show Data, Get Get XML, 데이터 설정, 전환 편집 등과 같은 다른 많은 작업이 있습니다. 그러나 스스로 확인할 수있는 다른 많은 것들이 있습니다. 오픈 소스이므로 요구 사항에 따라 수정할 수 있습니다.

## 결론   {#conclusion}
이것이 블로그 게시물의 끝입니다. 오픈 소스 HTML 양식 생성기를 배포하려는 경우이 자습서가 실제로 도움이되기를 바랍니다. 이 기사는 FormBuilder의 여러 측면을 다루었으므로 비즈니스 요구를 고려할 수 있습니다. 이 무료 오픈 소스 양식 빌더는 비용 효율적이고 시간 절약입니다. 이 무료 도구는 양식 구축 기능을 제공 할뿐만 아니라 양식 및 데이터 관리도 제공합니다. 타사 웹 응용 프로그램으로 양식을 구성 할 수 있습니다. 또한, 비즈니스 소유자가 이러한 오픈 소스 양식 빌더를 사용하여 어떤 종류의 양식을 만들 수있는 다른 비즈니스 응용 프로그램에 대해 다른 형태를 만드는 번거 로움을 제거합니다. 또한 개발자가 요구 사항에 따라 수정할 수있는 이러한 양식 편집기에 사용할 수있는 플러그인이 있습니다. 따라서, 좋은 무료 HTML 양식 생성기를 사용하여 이러한 반복적 인 작업을 자동화 할 시간이 높습니다.
마지막으로, [Containerize.com][10]는 추가 오픈 소스 제품에 대한 기사를 작성하고 있습니다. 따라서 일반 뉴스 및 업데이트를 위해 [Forms][11] 범주와 연락하십시오.

## 탐구하다
  * **[form.io][3]**
  * **[Orbeon][12]**
  * **[Ohmyform][13]**
  * **[Webiny][14]**
  * **[formtools][15]**
  * **[Formbuilder][4]**
  * **[알파카 양식][16]**
  *[ **Bootstrap Form Creator Form.io를 LocalHost에서 설정하는 방법 ** ][1]
  *[ **무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화 ** ][17]
  *[ **2020 년의 상위 5 개 오픈 소스 온라인 양식 빌더 ** ][2]

  
[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
