---
title: "HospitalRun을 설치하는 방법 | 병원 관리 시스템" 
seoTitle: "HospitalRun을 설치하는 방법 | 병원 관리 시스템" 
description: "이 기사는 LocalHost에 HospitalRun을 설치하는 데 도움이됩니다. 풍부한 기능을 갖춘 오픈 소스, 무료 병원 관리 시스템을 사용하여 의료 과정을 자동화합니다." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "임상의와 환자를 촉진하기위한 자체 주최 의료 솔루션. 간단한 단계에 따라 LocalHost에 무료 HospitalRun을 배치하는 방법을 배우겠습니다." 
url: /ko/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## 임상의와 환자를 촉진하기위한 자체 주최 의료 솔루션. 간단한 단계에 따라 LocalHost에 무료 HospitalRun을 배포하는 방법을 배우겠습니다.

{{< figure align=center src="images/hospitalrun.png" alt="병원 관리 시스템">}}


## 개요
우리는 최근 온라인 의료 소프트웨어가 의료 산업에 대한 오픈 소스 병원 관리 시스템의 영향을 설명하는 [온라인 의료 소프트웨어가 의료 산업에 힘을 실어주는 방법]에 대한 블로그 게시물을 게시했습니다. 글로벌 의료 소프트웨어 산업은 시간이 지남에 따라 가치를 얻고 있습니다. 사실 기술은 모든 삶의 분야를 변화 시켰다는 것입니다. 환자와 직원의 수는 너무 높아서 그러한 거대한 데이터를 관리하는 데 번거롭게되었습니다. 반면에, 매일 발생하는 많은 시간이 소요되는 작업이 있으며 의료 기관은 이러한 작업을 반복적으로 수행합니다. 따라서 오픈 소스 소스 커뮤니티는 의료 요구를 해결하기 위해 많은 유용한 모듈과 함께 제공되는 오픈 소스 의료 소프트웨어를 개발했습니다.
오픈 소스 의료 소프트웨어는 병력과 병원 관리 조항에 관한 환자 기록을 관리하기 위해 개발되었습니다. 또한 오픈 소스 헬스 케어 소프트웨어는 인공 지능을 활용하여 고급 수준의 서비스를 제공하고 있습니다. 대부분의 질병 치료는 이제 문제를 진단 할뿐만 아니라 치료에 도움을 제공하는 소프트웨어에 의해 처리되고 있습니다. 그러나 병원을위한 많은 신흥 소프트웨어가 있습니다. 이 블로그 게시물에서는 다음 사항을 다룰 것입니다.
  *[**Hospitalrun이란 무엇입니까?** ][2]
  *[**병원의 특징은 무엇입니까** ][3]
  *[**병원의 설치 단계?** ][4]
  *[**결론** ][5]

## HospitalRun이란 무엇입니까?   {#intro}
HospitalRun은 무료 오픈 소스 병원 정보 관리 시스템입니다. 이 무료 의료 솔루션은 인터넷 연결이 없더라도 사용자 가이 무료 소프트웨어를 최대한 활용할 수 있으므로 환경 친화적입니다. 사용자 관리, 환자 등록, 약속, 청구 시스템, 환자 퇴원 시스템 등과 같은 많은 기능을 제공합니다. 이 오픈 소스 eHealth 시스템의 사용자 인터페이스는 사용자가 다른 요소를 쉽게 탐색 할 수있는 논리적입니다. 또한 설정하기 쉽고 Docker 이미지를 사용하여 개발자가 배포 할 수있는 Docker 이미지를 제공합니다.
이 **병원 관리 시스템** 는 실험실을 통합하여 환자의 의료 기록을 중앙 집중화 할 수있는 조항을 제공합니다. 또한 사용자는 환자 방문, 약물 및 평가 기록을 유지할 수 있습니다. 이 eHealth 레코드 시스템은 안전하고 유연하며 타사 응용 프로그램과 통합을 제공합니다. HospitalRun을 지원하는 매우 활기찬 커뮤니티가 있습니다. 또한, 완전한 환자 퇴원 시스템이 있습니다. 이 오픈 소스 의료 소프트웨어는 JavaScript로 완전히 작성되었습니다. 또한 개발 및 배포에 관한 포괄적 인 문서가 있습니다. 실제로이 오픈 소스 의료 소프트웨어는 지원 부서, 임상 부서 및 관리 부서와 같은 다른 부서에 대해 다른 대시 보드를 제공합니다. 이러한 모든 역할에는 다양한 수준의 권한과 액세스가 제공됩니다.

## HospitalRun의 기능은 무엇입니까?   {#특징}
이 섹션에서는이 eHealth 시스템의 다음 주요 기능 중 일부를 살펴 보겠습니다.
  ***자체 호스팅**  : HospitalRun에는 자체 호스팅 기능이 제공되며 서버에 배포하려면 더 적은 노력이 필요합니다.
  ***약속 일정**  :이 건강 시스템을 사용하면 사용자가 약속을 예약 할 수 있습니다. 대시 보드에는 예약을위한 전체 모듈이 있습니다. 또한 사용자는 필터를 사용하여 약속을 검색 할 수 있습니다.
  ***환자 퇴원 시스템**  :이 병원 관리 시스템은 퇴원 한 환자의 기록을 유지합니다.
  ***약물 관리**  :이 eHealth 레코드 시스템을 통해 사용자는 특정 환자의 약물에 대한 완전한 데이터를 기록 할 수 있습니다.
  ***환자 기록 관리**  : 환자 기록 관리를위한 완전한 모듈이 있습니다. 사용자는 새로운 환자의 세부 사항을 기록하고 의학, 보고서 및 방문과 같은 완전한 병력에 대해 환자를 입원 할 수 있습니다.
  ***맞춤형 청구 시스템**  :이 오픈 소스 헬스 케어 소프트웨어에는 다양한 청구 시스템이 있습니다. 실험실 가격, 와드 요금, 이미징 가격 등과 같은 전체 세부 정보로 사용자가 송장을 생성하고 관리 할 수 ​​있습니다.
  ***전자 의료 기록**  :이 오픈 소스 의료 소프트웨어는 의료 및 관리 기록을 유지하는 데 필요한 모든 모듈을 제공합니다.
  ***Flexible**  : HospitalRun은 유연하고 확장 가능하며 개발자는 필요한 기능을 충족시키기 위해 기능을 확장 할 수 있습니다.

## 병원의 설치 단계?   {#Steps}
블로그 게시물 의이 섹션에서는 HospitalRun의 설치 단계에 대해 설명합니다.
시작하기 전에 먼저 다음 사전 반품을 설치하십시오.
  * [Docker][6]
  * [docker-compose][7]
사전 반품이 설치되면이 [링크][8]에서 소스 코드를 다운로드하십시오.
그런 다음 터미널을 열고 다음 명령을 실행하십시오.
CD 제네릭
CD 서버
이제 \`conf/initcouch.sh \`의 8,9 행에서 암호를 변경하고 _config-demo.js_의 7 행에서 암호를 변경하십시오.
그런 다음 다음 명령을 실행하여 응용 프로그램을 빌드하고 실행하십시오.
_docker-compose build && docker-compose up_
그런 다음 아래 이미지와 같이 Docker 컨테이너를 회전시킵니다.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="병원 관리 시스템">}}

마지막으로 http : // localhost/#/login의 브라우저 에서이 의료 솔루션에 액세스 할 수 있습니다. 다음 로그인 화면이 표시됩니다.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="병원 관리 시스템">}}


## 결론   {#conclusion}
이것은이 튜토리얼 기사의 끝입니다. 이 환자 기록 시스템은 실제로 **의료 서비스** 를 자동화하는 데 도움이됩니다. 최신 오픈 소스 병원 관리 시스템에는 의료 종사자가 더 나은 의료 시설에 필요한 조치를 취하는 데 도움이되는 데이터 분석 도구가 제공됩니다. 이 블로그 게시물은 병원/클리닉에 대한 eHealth 시스템을 진지하게 배치하려는 경우 실제로 도움이 될 것입니다. 이 오픈 소스 솔루션은 실험실 및 기타 클리닉과 통합되므로 비용 효율적이며 모든 프로세스를 전산화하여 서류 작업을 최소화합니다. 오픈 소스 의료 솔루션을 통해 사용자는 환자의 약물, 퇴원, 보고서 및 청구 관리와 같은 모든 의료 작전을 시각적으로 가질 수 있습니다. 또한 자원 계획 및 위험 평가와 같은 다른 중요한 작업에 집중할 수 있습니다. 그러나 아래의 "탐색"섹션에 언급 된 병원을위한 다른 기업 수준 소프트웨어가 많이 있습니다.
결국  **** [Containerize.com][9]****는 추가 오픈 소스 제품에 작성하기위한 것입니다. 따라서 최신 업데이트를 위해이 [Healthcare Technologies][10] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [OpenEMR][11]
  * [OpenMRS][12]
  * [병원 런][13]
  * [오픈 병원][14]
  * [독창적 인][15]
  * [2021 년 오픈 소스 소프트웨어를 선택하기 전에 검토 할 것들][16]
  * [의료 기록 관리자 병원 런의 특징][17]
  * [상위 5 개 오픈 소스 환자 건강 기록 소프트웨어][18]
  * [의료 건강 솔루션의 탐색 특징 OpenEmr][19]
  * [LocalHost에서 eHealth System HospitalRun을 설정하는 방법][20]
  * [온라인 의료 소프트웨어가 의료 산업에 권한을 부여하는 방법][1]

  
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/ko/how-to-install-hospitalrun-hospital-management-system/
