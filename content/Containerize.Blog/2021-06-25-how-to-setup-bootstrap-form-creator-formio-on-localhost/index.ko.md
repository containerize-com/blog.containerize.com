---
title: "로컬 호스트에서 부트 스트랩 형태 Creator Form.io를 설정하는 방법" 
seoTitle: "로컬 호스트에서 부트 스트랩 형태 Creator Form.io를 설정하는 방법" 
description: "이 기사를 살펴보고 LocalHost에서 Formio를 설정하는 방법을 알아보십시오. 이 부트 스트랩 형태의 제작자는 무료이며 확장 가능하며 타사 통합을 제공합니다." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "드래그 앤 드롭 HTML 양식 빌더를 사용하여 작업 별 및 사용자 정의 가능한 양식을 작성하십시오. Formio는 자체 주최, API 중심이며 양식 및 데이터 관리를 제공합니다." 
url: /ko/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## 드래그 앤 드롭 HTML 양식 빌더를 사용하여 작업 별 및 사용자 정의 가능한 양식을 작성하십시오. Formio는 자체 주최, API 중심이며 양식 및 데이터 관리를 제공합니다.

{{< figure align=center src="images/formio-1.png" alt="부트 스트랩 형태 제작자">}}


## **개요 ** 
빠르게 성장하는 비즈니스 요구에는 공공 거래 및 참여에 직접적으로 속한 많은 운영이 있습니다. 이 참여는 물리적이거나 가상 일 수 있습니다. 때로는 서비스 제공에 관한 것이며 때로는 데이터 또는 피드백을 수집하는 것입니다. 반면에 엔터프라이즈 조직은 제품 및 서비스에 대한 고객의 데이터를 수집하는 경향이 있습니다. 따라서 데이터 금액은 관련 잠재 고객에게 도달하는 데 달려 있습니다. 다음으로, 데이터 관리는 또 다른 중요한 작업이며 엄청난주의가 필요합니다.
그러나 기업 부문은 온라인 양식을 사용하여 데이터 수집과 관련된 요구를 충족시킵니다. 연락처 양식, 불만 사항 양식, 고객 피드백 양식, 입학 양식 등과 같은 많은 양식을 포함 할 수있는 많은 웹 사이트가 있습니다. 이제 이러한 양식 및 제출 데이터를 구축하고 관리하는 것은 번거 로움이됩니다. 여기 [form.io][1]가 온다. Form.io는 폼 빌딩 및 데이터 관리 기능을 제공하는 오픈 소스 부트 스트랩 양식 제작자입니다. 최근 과거에, 우리는 [2020 년에 상위 5 개의 오픈 소스 온라인 양식 빌더]를 다루는 기사를 발표했습니다. [2]. 이 블로그 게시물에서, 우리는이 부트 스트랩 양식 제작자와 다음 지점을 다루어 LocalHost의 설정 프로세스를 탐색 할 것입니다.
  ***
  * **[LocalHost에서 Form.io를 설정하는 방법?][4]**
  * **[Form.io는 어떻게 작동합니까?][5]**
  * **[결론][6]**

## form.io는 무엇입니까?   {#무엇}
Form.io는 무료 오픈 소스 양식 빌더입니다. 자체 주최, 다국어 및 다중 테넌트 소프트웨어입니다. 이  **HTML Form Creator ** 는 사용자 및 양식에 대한 역할 기반 권한을 제공합니다. Form.io는 OAUTH 인증을 제공하고 사용자가 Google 및 Facebook과 같은 인기있는 ID 제공 업체를 사용하여 로그인 할 수 있습니다. 또한이 HTML 양식 빌더는 서버리스 아키텍처를 기반으로하며 사용자는 단일 줄의 코드를 배치하여 다른 응용 프로그램에 양식을 생성하고 포함시킬 수 있습니다. 사용자 인터페이스에 관한 한, 드래그 앤 드롭 기능이있는 논리적 인 사용자 인터페이스를 제공합니다. 한쪽에는 사용자가 드래그 앤 드롭하여 필요한 양식을 구축 할 수있는 다양한 HTML 요소가 있습니다. 사용자는 향상된 기능을 위해 사용자 정의 JavaScript를 주입 할 수 있습니다. 또한 사용자는 CSS를 사용하여 양식의 모양과 느낌을 수정할 수 있습니다. 양식의 제출 및 액세스를 통제하기위한 조항이 있습니다. 그러나이 무료 HTML 양식 메이커는 JavaScript로 작성되며 모든 소스 코드는 [GitHub][7]에서 사용할 수 있습니다.
Form.io는 광범위한 기능을 제공합니다. 주요 기능은 아래에 나열되어 있습니다.
  * 이메일 양식 제출
  * 데이터 관리
  * Oauth 제공 업체
  * 임베드 가능한 형태
  * 레이아웃 친화적

## localhost에서 form.io를 설정하는 방법은 무엇입니까?   {#LocalHost}
**Form Builder Tutorial ** 의이 섹션에서는 LocalHost에서 Form.io를 설정하는 방법을 볼 수 있습니다. 배포 및 개발에 관한 포괄적 인 문서를 제공하므로 설정하기 쉽습니다.
더 나아 가기 전에 다음 사전 반품을 설치했는지 확인하십시오.
  * git
  * nodejs
  * mongodb
위의 사전 반품이 설치되면 터미널 실행을 열면 다음 명령이 있습니다.
```
mkdir formio<br>cd formio
```
이제이 응용 프로그램의 소스 코드를 복제하려면 다음 명령을 실행하십시오.
```
git clone https://github.com/formio/formio.git
```
성공적인 클론에서 다음 명령을 실행하여 종속성을 설치하십시오.
```
cd formio <br>npm install
```
그런 다음 다음 명령으로 응용 프로그램을 실행하십시오.
```
npm start 
```
이 명령은 일부 사용자 프롬프트와 함께 다음 출력을 보여줍니다.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="건축업자 튜토리얼을 양식하십시오">}}

다음 주소로 브라우저의 응용 프로그램에 액세스 할 수 있습니다.
```
http://localhost:3001 
```
로그인 페이지가 열립니다. 설치 프로세스 중에 입력 한 자격 증명으로 로그인 할 수 있습니다.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="부트 스트랩 형태 제작자">}}


## form.io는 어떻게 작동합니까?   {#일하다}
이 세그먼트는 [form.io][1]의 작동 메커니즘을 설명합니다. 이 양식 디자이너의 전체 생태계는 구성 요소와 개발자 친화적 인 것을 기반으로합니다. 확장 가능하며 타사 앱에 대한 편안한 인터페이스를 제공합니다. 이  **양식 빌더 ** 에서 양식을 만드는 방법을 살펴 보겠습니다.
로그인 후 다음 페이지에 착륙합니다.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="HTML Form Builder를 드래그 앤 드롭합니다">}}

이제 "새 양식"버튼을 클릭하고 첫 번째 양식을 만듭니다. 다음 페이지가 표시됩니다. 왼쪽에 양식의 HTML 요소가 포함 된 패널이 있음을 알 수 있습니다. 여기에는 "기본 구성 요소", "특수 구성 요소"등과 같은 네 가지 섹션이 포함되어 있습니다.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="HTML Form Creator">}}

다른 속성과 함께 양식 이름을 설정할 수 있습니다. 이제 왼쪽에서 폼 요소를 선택하여 중간에 떨어 뜨리면 다음 대화 상자가 표시됩니다.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="부트 스트랩 형태 제작자">}}

양식 테마, 검증 및 기타 수정을 수정할 수 있음을 알 수 있습니다. 양식을 작성하면 "Create"버튼을 누르면 생성 된 양식에 착륙합니다.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="HTML Form Builder를 드래그 앤 드롭합니다">}}

생성 된 양식에는 양식을 편집하고 제출 된 데이터를 볼 수있는 다양한 옵션이 제공됩니다. "양식 조치"탭에서 이메일, Webhook 등과 같은 사전 또는 포스트 양식 제출 후크를 설정할 수 있습니다. 무엇보다도 생성 된 모든 양식에는 API가 제공되며 사용자는 양식 ID를 전달하여 액세스 할 수 있습니다.

## 결론   {#conclusion}
이것은이 양식 빌더 튜토리얼의 끝입니다. 이 부트 스트랩 형태의 제작자가 기능, 배포 및 사용법에 대해 배웠기를 바랍니다. 또한 다양한 기능을 제공하는 오픈 소스 양식 빌더가 많이 있습니다. 그러나 비즈니스 요구를 충족시키는 최고의 제품을 선택하는 것이 매우 중요합니다. 따라서이 블로그 게시물에서 Form.io가 기능, 레이아웃 및 스타일에 관한 사용자 정의를 제공하는 것을 관찰했습니다. 라이브 웹 사이트에서 호스팅 할 수있는 다목적 양식을 생성 할 수 있습니다. 실제로, 자신의 데이터베이스 또는 기타 스토리지 옵션에서 잘 조직 된 방식으로 데이터를 수집 할 수 있습니다.
마지막으로, [ **containerize.com ** ][8]는 추가 오픈 소스 주제 및 제품에 대한 기사를 작성하는 일관된 프로세스에 있습니다. 따라서 정기적 인 업데이트를 위해이 [양식][9] 카테고리와 연락하십시오.

## 탐구하다
  * **[form.io][1]**
  * **[Orbeon][10]**
  * **[OhmyForm][11]**
  * **[Webiny][12]**
  * **[formtools][13]**
  * **[Formbuilder][14]**
  * **[알파카 양식][15]**
  *[ **무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화 ** ][16]
  *[ **2020 년의 상위 5 개 오픈 소스 온라인 양식 빌더 ** ][2]

  
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
