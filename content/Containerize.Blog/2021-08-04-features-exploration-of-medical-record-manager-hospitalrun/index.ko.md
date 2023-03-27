---
title: "의료 기록 관리자 HospitalRun의 탐색 기능" 
seoTitle: "의료 기록 관리자 HospitalRun의 탐색 기능" 
description: "이 안내서를 따라 의료 기록 관리자 HospitalRun을 시작하십시오. 오픈 소스, 다국어이며 많은 중요한 프로세스를 자동화합니다." 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "병원 관리 시스템은 의료 시설의 필수 부분입니다. HospitalRun은 데이터 제어, 액세스 기반 역할 및 수익 관리를 제공합니다." 
url: /ko/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## 병원 관리 시스템은 의료 시설의 필수 부분입니다. HospitalRun은 데이터 제어, 액세스 기반 역할 및 수익 관리를 제공합니다.

{{< figure align=center src="images/blog-banners-template-1.png" alt="의료 기록 관리자">}}


## 개요
오픈 소스 [Healthcare Software][1]는 최근 과거에 엄청난 인기를 얻었습니다. 첫째, 그것은 기술의 발전 때문입니다. 둘째, Covid-19는 모든 방식으로 의료 산업에 영향을 미쳤으며 오픈 소스 커뮤니티를위한 새로운 기회를 낳았습니다. 전 세계가 결정적인 시간을 통과 할 때 환자에게 최고 품질의 건강 관리 서비스를 제공하는 것이 매우 중요합니다. 운 좋게도 데이터 중앙화, 투명성, 보안, 통합 및 기타 여러 강력한 기능을 제공하는 몇 가지 오픈 소스 건강 기록 관리 솔루션을 사용할 수 있습니다. 이 무료 의료 서비스는 의사, 환자, 클리닉 및 기타 직원과 같은 워크 플로를 원활하게 관리합니다. 최근 [Containerize.com][2]는 오픈 소스 병원 정보 관리 시스템에 대해 [Top 5 오픈 소스 환자 건강 기록 소프트웨어][3], [의료 건강 솔루션의 특징 OpenEMR][4]를 포함하는 몇 가지 기사를 게시했습니다. [온라인 의료 소프트웨어가 의료 산업에 힘을 실어주는 방법][5].
과거에는 LocalHost에서 [HospitalRun][6]의 설정 절차를 설명하는 기사를 썼습니다. 이 블로그 게시물에서는 다음 사항을 다루어 [HospitalRun][6]을 더 탐색 할 것입니다.
*  **[왜 병원 런?][7]**  
*  **[환자 및 일정 모듈][8]**  
*  **[실험실 통합 및 약물][9]**  
*  **[이미징 및 사건][10]**  
*  **[결론][11]**  

## 왜 병원 런? {#why}

이 의료 기록 관리자의 인기 뒤에 많은 이유가 있습니다. HospitalRun은 완전한 전자 건강 기록 및 병원 정보 시스템입니다. 오프라인 및 온라인 버전을 모두 지원합니다. 클리닉을 통합하고 데이터 동기화를 제공 할 수 있습니다. 또한 다국어, 교차 플랫폼이며 자체 호스팅 기능이 제공됩니다. 이 환자 기록 시스템은 환자 기록 관리, 약속 일정, 의약품 및 처방 관리를 제공합니다. 완전한 진단 세부 사항이 포함 된 사용자 정의 보고서를 생성하는 조항도 있습니다. 또한 의료진은 환자 퇴원 모듈의 도움을받을 수 있습니다. 무엇 보다도이 병원 관리 시스템은 우발적 및 비상 사례 관리를 제공합니다. 안전하고 신뢰할 수 있으며 사용자 친화적입니다. 그러나이 의료 기록 관리 시스템은 JavaScript로 완전히 작성되었으며 모든 소스 코드는 [GitHub][12]에서 개발 및 배포에 관한 문서를 사용할 수 있습니다.

## 환자 및 예약 모듈 {#modules}

이 섹션에서는이 병원 정보 관리 시스템의 대시 보드를 살펴 보겠습니다. 로그인하면 아래 이미지와 같이 병원 런의 대시 보드에 착륙합니다.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="의료 기록 관리자">}}

오른쪽 상단에는 두 가지 옵션이 있습니다. 첫째, 사용자가 영어, 이탈리아어, 터키어 등과 같은 언어를 선택할 수있는 설정. 둘째, 새로운 환자 기록, 새로운 약속, 요청 약물, 요청 실험실, 새로운 영상 요청 및 보고서 사고를 만들 수있는 옵션이 있습니다.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="병원 관리 시스템">}}

왼쪽에는 환자, 일정, 약물, 실험실, 이미징 및 사건과 같은 여러 가지 옵션이 있습니다. 환자 모듈에서는 새로운 환자 기록을 추가하고 이미 추가 된 환자 목록을 볼 수 있습니다. 이 무료 의료 기록 관리자를 사용하면 사용자가 이름, 주소, 연락처, 환자 유형 및 기타 기본 세부 사항과 같은 완전한 환자 기록을 기록 할 수 있습니다. 환자 목록에는 사용자가 목록에서 환자를 검색 할 수있는 검색 창도 있습니다. 또한 예약 모듈에서 의료진은 약속을 예약 할 수 있습니다. 이 모듈의 인터페이스는 아래 이미지에 나와 있습니다.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="병원 정보 관리 시스템">}}

인터페이스는 예정된 약속을 보여줍니다. 또한 사용자는 필터를 적용하여 하루, 주당 및 한 달에 약속 수를 볼 수 있습니다. 오른쪽 상단에 의료 당국이 새로운 약속을 예약 할 수있는 옵션이 있습니다. 의료 관계자는 시작 날짜, 종료 날짜, 이유 등과 같은 약속 세부 정보를 삽입 할 수 있습니다.

## 실험실 통합 및 약물 {#lab}

이 섹션에서는이 무료 의료 소프트웨어의 두 가지 눈에 띄는 모듈의 기능에 대해 설명합니다. 약물 모듈을 통해 사용자는 약물에 대한 데이터를 추가하여 일상, 긴급 또는 최대한 빨리 약물 우선 순위를 설정할 수 있습니다. 마찬가지로 공무원이 필터로 검색 할 수있는 약물 요청 목록이 있습니다.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="의료 기록 관리 시스템">}}

실험실 모듈에서 의료 담당자는 환자 정보를 삽입하고 방문 및 유형을 통해 실험실을 요청할 수 있습니다. 이와 함께 의료 종사자는 추가 메모를 추가 할 수 있습니다. 마찬가지로, 사용자가 검색 기능을 수행 할 수있는 실험실 요청 옵션에 필터가 있습니다.

## 이미징 및 사고 {#imaging}

이미징은 전자기장으로 스캔하여 무언가를 시각적으로 표현하는 것입니다. HospitalRun은 이미징 레코드 관리를 제공합니다. 또한 사용자는 새로운 이미징 요청을 만들 수 있으며이 모듈은 다른 모듈이 서로 연결되어 있으므로 환자 모듈과 연결되어 있습니다. 마찬가지로 사용자는 이미징 요청 목록을 볼 수 있습니다. 다음으로, 사건 모듈에서 공무원은 세부 사항을 삽입하여 사건을보고 할 수 있습니다. 따라서 사용자는 이미보고 된 사고 목록을 볼 수 있습니다. 아래 이미지와 같이 마지막으로 발생하는 사고의 그래픽 표현이 있습니다.

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="건강 기록 관리">}}


## 결론 {#결론}

이것이이 블로그 게시물의 끝입니다. 실제로, 대부분의 보건 기관은 수동 운영에 의존합니다. 데이터 보안 및 무결성과 관련하여 취약 할 수 있습니다. 그러나 자동화 된 시스템은 일상적인 건강 관리 운영의 기본적이고 가장 중요한 측면을 보장합니다. 따라서 우수한 오픈 소스 의료 기록 관리자를 설치하면 자산을 승인되지 않은 출처로부터 보호하고 일상적인 작업을 쉽고 자신있게 수행하는 데 도움이됩니다. 이 오픈 소스 소프트웨어는 의사, 환자, 클리닉, 실험실과 같은 여러 개체를 동기화하고 워크 플로를보다 쉽게 ​​만듭니다. 결론적으로, 병원이나 클리닉이 최신 과제로 쿠데타 할 오픈 소스 소프트웨어를 채택해야 할 때입니다. 시간과 노력을 절약하고 중요한 중요한 작업에 집중할 수 있습니다.
마지막으로, [Containerize.com][2]는 추가 오픈 소스 제품에 대한 기사를 작성하고 있습니다. 따라서 일반 뉴스 및 업데이트를 위해 [Healthcare Technologies][1] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [OpenEMR][13]
  * [OpenMRS][14]
  * [병원 런][15]
  * [오픈 병원][16]
  * [독창적 인][17]
  * [상위 5 개 오픈 소스 환자 건강 기록 소프트웨어][3]
  * [의료 건강 솔루션의 탐색 특징 OpenEMR][4]
  * [LocalHost에서 eHealth System HospitalRun을 설정하는 방법][18]
  * [온라인 의료 소프트웨어가 의료 산업에 권한을 부여하는 방법][5]



[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
