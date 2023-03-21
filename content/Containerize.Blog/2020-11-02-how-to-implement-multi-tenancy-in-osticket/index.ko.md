---
title: "오스티켓 사용자 정의-오스티켓에서 다중 테넌시를 구현합니다" 
seoTitle: "오스티켓 사용자 정의-오스티켓에서 다중 테넌시를 구현합니다" 
description: "Osticket에서 다중 테넌시를 구현하면 비용과 자원 활용이 절약 될 수 있습니다. 이 기사에서는 다중 테넌시를 달성하기 위해 오스티켓 사용자 정의를 할 것입니다." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "멀티 테넌트 Osticket HelpDesk를 사용하면 단일 설치에서 여러 임차인을 만들 수 있습니다. 이는 웹 서버 리소스를 최적으로 사용합니다." 
url: /ko/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## 다중 테넌트 Osticket HelpDesk를 사용하면 단일 설치에서 여러 세입자를 만들 수 있습니다. 이는 웹 서버 리소스를 최적으로 사용합니다.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="오스티켓 사용자 정의 - 오스티켓의 다중 테넌시 구현">}}

이 기사에서는 오스티켓 사용자 정의를하여 다중 테넌시를 구현하는 방법에 대해 논의 할 것입니다. 이 게시물은 다음 주제를 다룹니다.
  * [구식 개요][1]
  * [다중 테넌시 개요][2]
  * [다중 테넌시의 이점][3]
  * [구현][3]
  * [결론][4]

## 오스티켓 개요 :   {#osticket}
[Osticket][5]는 오픈 소스 온라인 고객 지원 웹 기반 헬프 데스크 소프트웨어입니다. 직관적 인 제어판과 실시간보고 구성 요소를 제공합니다. 사용하기 쉬운 관리 관리 모듈이 있습니다. 이를 통해 휴대 전화, 이메일 및 웹 기반 양식에서 문의를 만들 수 있습니다. 이를 통해 클라이언트 지원 경험의 모든 부분이 주석 및 이메일 알림과 같은 모든 부분을 조정하는 데 도움이되는 다양한 옵션을 제공합니다.

## 다중 테넌시 개요 :   {#multitenancy}
다중 테넌시는 앱의 여러 독립적 인 인스턴스가 공유 환경에서 작동하는 구현을 나타냅니다. 인스턴스 (임차인)는 논리적으로 분리되어 있지만 물리적으로 통합됩니다. 조직에는 여러 부서가있을 수 있습니다. 따라서 동일한 앱의 여러 임차인/인스턴스를 만들 수 있습니다. 예를 들어, 우리의 경우, 헬프 데스크 시스템은 동일한 조직의 다른 도메인에 대해 구성 할 수 있습니다. 수백 명의 임차인이있을 수 있지만 모두 동일한 파일을 사용하여 동일한 스토리지를 사용합니다. 이렇게하면 스토리지 비용이 줄어들고 업그레이드가 더 쉬워집니다. 개발자는 각 사이트를 별도로 변경하는 대신 한 장소에서 파일을 업데이트하면됩니다.

## 다중 테넌시의 이점은 무엇입니까?   {#이익}
다중 테넌시의 몇 가지 중요한 이점은 다음과 같습니다
***리소스 최적화 :**하나의 임차인을 위해 예약 된 하나의 기계는 효율적이지 않습니다. 한 임차인이 모든 기계의 컴퓨팅 파워를 사용하지 않을 가능성이 없기 때문입니다. 공유 기계는 리소스 가용성을 최대화합니다.
***저렴한 비용 :**여러 임차인이 동일한 자원을 공유하면 각 임차인이 자체 전용 인프라를 요구하는 경우보다 훨씬 저렴합니다.
***효율적인 호스팅 :**멀티 테넌트 오스티켓은 공유 환경에서 호스팅 비용을 최소로 줄입니다.
***보안 :**외부 세계와의 상호 작용이 줄어들면 악성 소프트웨어에 대한 노출이 줄어 듭니다.
***쉬운 업그레이드**: 파일을 별도로 업데이트하는 대신 한 곳에서만 업그레이드합니다. 이것은 많은 시간과 노력을 절약 할 것입니다.

## 다중 테넌트 오스켓의 구현 :   {#implementation}
  * 새 빈 데이터베이스 이름을 "main_db"로 만듭니다.
  * 그런 다음 모든 임차인에 대한 세부 정보를 보유하는 "Tenant"라는 테이블을 만듭니다.
  * 다음 분야가 있습니다.
  1. site_name
  2. URL
  3. db_name

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="오스티켓 사용자 정의 - 오스티켓의 다중 테넌시 구현">}}

  * 사이트 \ _name 필드는 테넌트의 이름을 보유합니다. URL 필드는 임차인의 완전한 URL을 보유합니다. DB \ _name 필드는 새 임차인을 위해 생성 될 데이터베이스 이름을 보유합니다.
  * 이후에 /include/ost-config.php 파일을 열고 다음 코드를 추가하십시오.
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
* 이 코드는 기본 데이터베이스 연결을 업데이트합니다. 먼저 현재 임차인의 URL을 얻습니다. 그러면 해당 URL에 따라 데이터베이스 이름이 표시됩니다. 이것이 앱이 어떤 데이터베이스에 연결 해야하는지 알 수있는 방법입니다. 모든 임차인은 별도의 데이터베이스를 갖습니다. 데이터베이스는 테넌트 URL을 기준으로 선택됩니다.
  * 새 임차인을 만들려면 Nginx 서버에서 새 임차인 도메인을 설정하십시오. 그 후 현재 오스티켓 데이터베이스를 복사하여 이름을 바꾸십시오. 마지막으로 "Main_DB"데이터베이스의 "테넌트"테이블에 항목을 추가하십시오.

## 결론 :   {#conclusion}
오스티켓은 무료 및 오픈 소스 IT 헬프 데스크 관리 소프트웨어입니다. 우리는 오스티켓 사용자 정의를 만들기 위해 오스티켓에서 멀티 테넌시를 구현하여 비용을 절약하고 앱을 최적화하며 리소스 요구 사항을 낮추는 방법을 배웠습니다. 개발자가 몇 가지 간단한 단계로 새로운 세입자를 만들 수있게 해줄 것입니다. 따라서 동일한 설치에서 여러 개의 오스티켓 테넌트를 만듭니다.

## 탐구하다:
Osticket에 대한 자세한 내용은 다음 페이지를 확인하십시오.
  * [오스티켓 - 무료 오픈 소스 헬프 데스크 소프트웨어][5]
  * [오스티켓 플러그인 개발을위한 초보자 안내서][6]
  * [Osticket을 사용하여 온라인 헬프 데스크 소프트웨어를 설정하는 방법][7]
  * [WordPress 및 Osticket을 사용하여 발권 시스템 자동화][8]

  
[1]: #osticket
[2]: #multitenancy
[3]: #benefits
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/osticket
[6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
