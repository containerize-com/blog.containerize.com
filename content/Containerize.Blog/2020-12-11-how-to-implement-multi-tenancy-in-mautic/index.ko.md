---
title: "Mautic에서 다중 테넌시를 구현하는 방법" 
seoTitle: "Mautic에서 다중 테넌시를 구현하는 방법" 
description: "Mautic은 오픈 소스 마케팅 자동화 솔루션입니다. Mautic의 다중 테넌시를 구현하면 비용이 줄어들고 효율성과 보안이 향상됩니다." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Mautic의 다중 테넌시를 구현하여 비용을 절약하고 자원 사용을 극대화합니다. 멀티 테넌시는 코드 사용자 정의, 앱 업데이트, 생산성 향상 및 유지 보수가 쉬운 데 도움이됩니다." 
url: /ko/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Mautic에서 다중 테넌시를 구현하여 비용을 절약하고 자원 사용을 극대화합니다. 멀티 테넌시는 코드 사용자 정의, 앱 업데이트, 생산성 향상 및 유지 보수가 쉬운 데 도움이됩니다.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Mautic에서 다중 테넌시를 구현하는 방법">}}

Mautic은 무료 및 오픈 소스 마케팅 자동화 솔루션으로 마케팅 이메일, 방문 페이지, 워크 플로 및 마케팅 활동 측정을 완벽하게 제어 할 수 있습니다. 이 튜토리얼에서 다음 섹션을 다룰 것입니다.
  * [다중 테넌시 란?][1]
  * [Mautic이란 무엇입니까][2]
  * [Mautic의 다중 테넌시 구현][3]
  * [결론][4]

## 다중 테넌시 란? {#multi-tenancy}

다중 테넌트 소프트웨어 아키텍처에서 소프트웨어 응용 프로그램의 단일 인스턴스는 여러 세입자에게 서비스를 제공합니다. 각 임차인 데이터는 동일한 신청 인스턴스를 공유하는 다른 테넌트와 분리됩니다. 이 세입자는 논리적으로 고립되었지만 물리적으로 통합됩니다. 이를 통해 모든 세입자의 데이터 보안 및 개인 정보를 보장합니다. 단일 애플리케이션 인스턴스에서 여러 임차인을 생성하면 메모리가 훨씬 적습니다. 임차인은 소프트웨어 유지 보수, 인프라 및 데이터 센터 운영에 대한 리소스를 공유하고 비용을 줄입니다. 비용은 단일 테넌트 인프라의 비용보다 낮은 경향이 있습니다.

## Mautic은 무엇입니까? {#mautic}

[Mautic][5]는 무료 및 오픈 소스 마케팅 소프트웨어입니다. 마케팅 캠페인, 리드 생성, 연락처 세분화 등과 같은 반복 마케팅 작업을 자동화합니다. 리드 생성, 캠페인 구축, 연락처 세분화, 이메일 빌더, A/B 테스트, 페이지 빌더, 리드 양육 등을 포함한 놀라운 기능이 있습니다. Mautic은 또한 모든 인기있는 소셜 플랫폼과의 통합을 지원합니다. Facebook, Twitter, LinkedIn. 이 모든 놀라운 기능을 통해 전반적인 고객 경험을 향상시키고 비즈니스의 마케팅 자동화를 향상시키는 데 도움이됩니다.

## Mautic의 다중 테넌시를 구현하십시오 {#implement}

  * "main_db"로 이름이 지정된 새 빈 데이터베이스를 만듭니다.
  * 그런 다음 모든 임차인에 대한 세부 정보를 보유하는 "Tenant"라는 테이블을 만듭니다.
  * 그림과 같이 사이트 \ _name, url 및 db \ _name을 포함한 3 개의 필드가 있습니다.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Mautic에서 다중 테넌시를 구현하는 방법">}}

  * 그 후 Mautic/App/paths.php 파일을 열고이 코드를 추가합니다.
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * URL 경로를 기준으로 해당 구성 파일을 선택합니다.
  * 그런 다음 현재 mautic 설치의 데이터베이스를 복사하여 새 임차인에게 사용하십시오.
  * 그 후 Mautic/App/config/local.php 사본을 만들어 [site_name] .php로 이름을 바꿉니다.
  * 마지막으로 새 데이터베이스에 따라 데이터베이스 이름, 호스트, 비밀번호 및 사용자를 업데이트합니다.

## 결론 {#conclusion}

Mautic은 무료, 풍부하고 품질이 풍부하고 품질 지향적 인 마케팅 자동화 솔루션입니다. 마케팅 캠페인, 세그먼트, 양식, 보고서 등을 만들 수 있습니다. Mautic의 다중 테넌시를 구현하면 비용이 줄어들고 효율성, 확장 성 및 보안이 향상됩니다. 단 한 번의 설치에서 수백 명의 임차인을 쉽게 만들 수 있습니다.

## 탐구하다
Mautic 및 Facebook에 대한 자세한 내용은 다음을 방문하십시오.
  * [mautic | 오픈 소스 콘텐츠 마케팅 기술 플랫폼][5]
  * [캠페인 빌더를 사용하여 Mautic 캠페인을 설정하는 방법][6]
  * [리드 육성을 자동화하기위한 Drupal Mautic 통합][7]
  * [Mautic 및 Woocommerce 통합을 통한 마케팅 자동화][8]
  * [디지털 마케팅 자동화를 위해 Mautic & Joomla 통합][9]



 [1]: #multi-tenancy
 [2]: #mautic
 [3]: #implement
 [4]: #conclusion
 [5]: https://products.containerize.com/marketing-automation/mautic
 [6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
 [7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
 [8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
 [9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
