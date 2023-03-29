---
title: "관리자는 무엇입니까? | 오픈 소스 데이터베이스 관리 도구" 
seoTitle: "관리자는 무엇입니까? | 오픈 소스 데이터베이스 관리 도구" 
description: "관리자는 무엇입니까? 개발자 친화적 인 인터페이스가있는 웹 기반 데이터베이스 관리 시스템. 오픈 소스 관리자로 데이터베이스를 관리하는 방법에 대해 논의 해 봅시다." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "관리자는 데이터베이스를 관리하기위한 오픈 소스 웹 기반 데이터베이스 관리 시스템입니다. LocalHost에서 관리자를 설정하고 주요 기능을 검토하는 방법을 배우겠습니다." 
url: /ko/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## 관리자는 데이터베이스를 관리하기위한 오픈 소스 웹 기반 데이터베이스 관리 시스템입니다. LocalHost에서 관리자를 설정하고 주요 기능을 검토하는 방법을 배우겠습니다.
{{_LINE_11_}}

## 개요
데이터 관련 작업은 그 어느 때보 다 훨씬 중요합니다. 데이터베이스 관리 도구는 모든 비즈니스의 필수 요소가되었습니다. 그러나 이러한 어려운 작업에 대한 솔루션을 제공하는 많은 웹 기반 데이터베이스 관리 시스템이 있습니다. 기업은 매일 수많은 데이터를 생성하고 유지하기가 어려워지고 있습니다. 또한 조직은 데이터 액세스 및 데이터 제어를 단순화하는 경향이 있습니다. 이 무료 도구는 데이터 중복성을 줄이고 데이터베이스를 효율적이고 신뢰할 수 있도록 도와줍니다. 또한 [Top Open Source DBMS 소프트웨어 도구][1] 등과 같은 주제에 대한 블로그 게시물을 게시했습니다.
따라서 오픈 소스 커뮤니티는 엔터프라이즈 레벨 무료 데이터베이스 관리 도구 인 관리자를 개발했습니다. 이 관리자 자습서에서는 다음 사항을 다룰 것입니다.
  * [관리자 란 무엇입니까?][2]
  * [관리자의 중요한 특징][3]
  * [관리 대 Phpmyadmin][4]
  * [관리자로 데이터베이스 관리][5]
  * [결론][6]

## 관리자는 무엇입니까? {#what}

가볍고 사용자 친화적이며 고성능 MySQL 데이터베이스 관리 도구와 관련하여 관리자는 Phpmyadmin에 비해 많은 인기를 얻었으며 많은 개선 사항을 제공했습니다. 처음 에이 데이터베이스 관리 도구는 2007 년 Jakub Vrana에 의해 PhpmyAdmin의 대안으로 개발되었으므로 애플리케이션 데이터베이스에 단일 가벼운 PHP 파일을 다운로드하여 설치하기 만하면됩니다.
오픈 소스 데이터베이스 관리 도구로서 무료로 사용할 수 있으며 PHP로 작성됩니다. 이 웹 기반 데이터베이스 관리 시스템을 차별화하는 것은 원활한 사용자 경험을위한 훌륭한 사용자 인터페이스 디자인뿐만 아니라 모든 공격이나 악의적 인 해킹 시도로부터 데이터를 안전하게 유지하기위한 강력한 보안 기능입니다. 이 데이터베이스 관리 도구는 설정하기 쉽고 Ubuntu 및 LAMP와 같은 간단한 요구 사항이 필요합니다. 사용자는 개발 및 배포에 관한 포괄적 인 문서를 찾을 수 있습니다. 따라서 [GitHub][7] 에서이 웹 기반 데이터베이스 관리 시스템의 소스 파일을 찾을 수 있습니다.

## 관리자의 중요한 기능 {#important}

이 데이터베이스 관리 도구의 몇 가지 기본이지만 중요한 기능은 다음과 같습니다.
  * 선택 데이터베이스, 테이블 편집, 테이블의 데이터 삽입/편집 및 여러 열에서 데이터 정렬/검색 등 많은 데이터베이스 기능이 있습니다.
  * MySQL, PostgreSQL, SQLITE, MS SQL, Oracle 및 SimpleDB 데이터베이스 등을 포함한 여러 데이터베이스를 지원합니다.
  * 영어, 아랍어, 페르시아어, 폴란드어, 네덜란드 등을 포함한 43 개 언어로 제공됩니다.
* 보기, 트리거, 저장 프로 시저, 사용자 권한 등과 같은 데이터베이스 개체를 쉽게 편집 할 수 있습니다.
  * 관리자는 SQL 주입, 세션 도둑질, 크로스 사이트 스크립팅 (XSS) 소프트웨어 공격 및 기타 공격에 대한 보안 조치를 제공합니다.

## 관리 대 Phpmyadmin {#adminer}

따라서 관리자에 대해 이야기 할 때 관리자 대 Phpmyadmin의 비교를 아는 것이 흥미로울 것입니다. 관리자와 phpmyadmin 중에서 선택할 때 관리자가 제공하는 유연한 기능 및 라이트 파일 업로드를 위해 관리자가 제공됩니다. 마찬가지로 Phpmyadmin과 비교하여 MySQL, SQLite 및 기타 여러 데이터베이스를 지원합니다. 마찬가지로, 관리자가 자동으로 수행하거나 동시에 모든 인덱스로 조작하는 추가 필드를 추가 할 때 Phpmyadmin보다 직관적이고 똑똑합니다.

## 관리자로 데이터베이스를 관리합니다 {#manage}

이 관리자 튜토리얼 섹션에서 관리자와 함께 데이터베이스를 관리 할 수있는 방법을 살펴 보겠습니다.
 **시스템 요구 사항** 
관리자가 시스템에서 실행하려면 서버에서 이미 설정 한 다음 요구 사항이 있어야합니다.
  * PHP 버전 5, 7 또는 8
  * MySQL, Sqlite, PostgreSQL 등과 같은 데이터베이스 드라이버
 **설치** 
이 두 가지 시스템 요구 사항이 확인되면 [][8]에서 파일을 다운로드하고 PHP 파일을 서버에 업로드하여 시작하십시오. XAMPP 서버의 경우 다운로드 된 파일의 이름을 "adminer.php"로 바꾸고이 파일을 HTDOCS 폴더에 넣으십시오.
 **액세스 사용자 인터페이스** 
그것을 겪은 후 관리자는 무엇입니까? 이제 http : your-ip-address/adminer.php 에서이 앱에 액세스하십시오.
{{_LINE_42_}}
 **서버에 연결** 
서버의 사용자 이름과 비밀번호를 사용 하여이 무료 데이터베이스 관리 도구에 로그인하십시오. 이제 하나의 데이터베이스 만 액세스하려면 이름을 입력하십시오. 이 필드를 비워두고 서버에 이미 존재하는 모든 데이터베이스에 액세스 할 수 있습니다.
 **데이터베이스 관리** 
로그인 후 모든 데이터베이스 목록이 표시됩니다. 데이터베이스를 클릭하여 관리하십시오.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="관리자 데이터베이스 관리 도구로 데이터베이스를 관리합니다">}}

다음 화면에는 선택한 데이터베이스의 모든 테이블 목록이 표시됩니다. 여기에서 데이터베이스 또는 테이블을 내보내고 테이블/열을 추가 또는 편집하고 SQL 쿼리를 통해 데이터를 변경하는 등 다음과 같이 훨씬 더 많이 할 수 있습니다.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="데이터베이스 관리 도구">}}

 **새 데이터베이스 만들기** 
새 데이터베이스를 만들려면 "데이터베이스 만들기"를 클릭하고 데이터베이스 이름을 입력하고 "저장"을 클릭하십시오.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="데이터베이스 관리 도구">}}

 **레코드 삽입/업데이트** 
테이블에 새 레코드를 추가하는 것은 매우 간단합니다. 삽입 화면으로 리디렉션되는 새 항목 링크를 클릭하십시오. 여기서는 데이터 유형과 함께 테이블의 모든 열에 새 데이터를 추가 할 수 있으므로 새 데이터를 추가하는 것이 빠른 프로세스입니다.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="관리 대 Phpmyadmin">}}


## 결론 {#conclusion}

이 관리자는이 관리자 튜토리얼의 끝으로 우리를 가져옵니다. 우리는 관리자, 관리자 대 PHPMYADMIN 및이 오픈 소스 웹 기반 데이터베이스 관리 시스템의 다른 측면과 같은 몇 가지 중요한 주제를 살펴 보았습니다. 이 블로그 게시물이 오픈 소스 데이터베이스 관리 도구를 설치하려는 경우 반드시 도움이되기를 바랍니다. 직관적이고 똑똑하며 사용하기 쉬운 인터페이스는 매우 인기있는 데이터베이스 관리 도구입니다. 또한 MySQL, SQLite, MongoDB 등을 포함한 많은 데이터베이스와 악의적 인 해킹 이벤트를 보호하고 방지하기위한 보안 조치와 함께 많은 데이터베이스를 지원합니다. 대체로이 데이터베이스 관리 도구는 오픈 소스 일뿐 만 아니라 무료로 사용할 수 있습니다.
마지막으로, [Containerize.com][9]는 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 따라서 정기적 인 업데이트를 위해 [데이터베이스 관리 도구][10] 카테고리와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][11], [LinkedIn][12] 및 [Twitter][13]에서 우리를 따라갈 수 있습니다.

## 탐구하다
무료 웹 기반 데이터베이스 관리 도구에 대한 자세한 내용은 다음 페이지를 확인하십시오.
  * [관리자 | 무료 웹 기반 데이터베이스 관리 시스템][14]
  * [최고 오픈 소스 DBMS 소프트웨어 도구][1]
  * [2021 년 상위 5 개 오픈 소스 데이터베이스 관리 도구][15]
  * [무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화][16]



 [1]: https://products.containerize.com/database-management
 [2]: #what
 [3]: #important
 [4]: #adminer
 [5]: #manage
 [6]: #conclusion
 [7]: https://github.com/vrana/adminer
 [8]: https://www.adminer.org/
 [9]: https://www.containerize.com/
 [10]: https://products.containerize.com/database-management/
 [11]: https://web.facebook.com/containerize
 [12]: https://www.linkedin.com/company/containerize/
 [13]: https://twitter.com/containerize_co
 [14]: https://products.containerize.com/database-management/adminer
 [15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
 [16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
