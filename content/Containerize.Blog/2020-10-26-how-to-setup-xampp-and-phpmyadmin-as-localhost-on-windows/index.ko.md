---
title: "Windows의 LocalHost로 XAMPP 및 PhpmyAdmin을 설정하십시오" 
seoTitle: "Windows의 LocalHost로 XAMPP 및 PhpmyAdmin을 설정하십시오" 
description: "Windows의 LocalHost로 XAMPP 및 PhpmyAdmin을 설정하십시오. 웹 앱을 테스트하고 구축하기 위해 나만의 무료 및 오픈 소스 로컬 테스트 환경을 만듭니다." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "무료 및 오픈 소스 웹 서버 솔루션 스택 (XAMPP) 및 데이터베이스 관리 소프트웨어 (PHPMYADMIN)로 개발 환경을 설정합니다." 
url: /ko/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## 무료 및 오픈 소스 웹 서버 솔루션 스택 (XAMPP) 및 데이터베이스 관리 소프트웨어 (PHPMYADMIN)로 개발 환경 설정

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="로컬 호스트로서 XAMPP 및 PhpmyAdmin">}}

LocalHost 인 XAMPP 및 PhpmyAdmin은 개발자가 웹 앱을 테스트하고 구축 할 수있는 로컬 서버를 제공합니다. XAMPP는 개인용 컴퓨터/노트북에 설치된 로컬 서버입니다. 라이브 서버에 배포하기 전에 PHP 응용 프로그램을 생성, 실행 및 테스트 할 수있는 로컬 환경을 제공합니다.
이 블로그 게시물에서 다음 섹션을 다룰 것입니다.
  * [설명][1]
  * [XAMPP 설치][2]
  * [phpmyadmin 대시 보드][3]
  * [최종 생각][4]

## 설명 :   {#description}
XAMPP는 무료 및 오픈 소스 웹 서버 솔루션 스택입니다. Apache, MySQL, MariaDB, PHP 및 Perl이 포함되어 있습니다. XAMPP는 Windows 운영 체제에 사용할 수 있습니다. 설치 및 사용이 매우 쉽습니다. 그렇기 때문에 가장 인기있는 PHP 개발 환경입니다. LocalHost로서의 XAMPP 및 PhpmyAdmin은 웹 앱 개발 및 테스트를위한 완벽한 환경을 제공합니다.
XAMPP의 알파벳은 다음과 같습니다.
***x**-크로스 플랫폼 (Linux, Windows 및 Mac OS를 포함한 여러 운영 체제 지원)
***A**- Apache HTTP 서버
***m**- mariadb (데이터베이스)
***p**- php
***p**- Perl

## xampp 설치   {#xampp}
  * [여기][5]에서 XAMPP를 다운로드하십시오.

{{< figure align=center src="images/xampp1.png" alt="로컬 호스트로서 xampp">}}

  * 실행 파일을 설치하십시오.
  * 그런 다음 "다음"을 클릭합니다.
  * 설치하려는 구성 요소를 선택하십시오.

{{< figure align=center src="images/xampp2.png" alt="로컬 호스트로서 XAMPP 2 단계">}}

  * 대부분의 웹 앱의 경우 _apache_, _mysql_, _php_ 및 _phpmyadmin_ 만 있으면됩니다.
  * XAMPP를 설치할 설치 디렉토리를 선택하십시오.
  * Windows 보안 경고가 표시됩니다. 다음 옵션을 확인해야합니다.“_ 내 집 또는 직장 네트워크와 같은 네트워크”_.
  * 마지막으로 "마무리"를 클릭하여 설치를 완료하십시오.

{{< figure align=center src="images/xampp4.png" alt="로컬 호스트로서의 XAMPP 3 단계">}}

  * 성공적인 설치 후 XAMPP 제어판을 엽니 다.
  * "Apache"및 "MySQL"서비스를 시작하십시오.

{{< figure align=center src="images/xampp5.png" alt="로컬 호스트로서 XAMPP 단계 4 단계">}}


## phpmyadmin 대시 보드 :   {#phpmyadmin}
phpmyadmin 대시 보드에 액세스하려면 MySQL 서비스 옆에있는 "관리자"버튼을 클릭하십시오. 브라우저에서 http : // localhost/phpmyadmin을 방문하여 phpmyadmin에 액세스 할 수도 있습니다. 여기에서 데이터베이스를 만들 수 있습니다. 다음 단계를 따라 새 데이터베이스를 작성하십시오.
  * 대시 보드에서 "데이터베이스"탭을 클릭하십시오.

{{< figure align=center src="images/db1.png" alt="LocalHost에서 phpmyadmin 1 단계">}}

  * 데이터베이스 이름을 입력하고 "Create"버튼을 클릭하십시오. 이것은 단순히 새로운 빈 데이터베이스를 생성합니다.

{{< figure align=center src="images/db2.png" alt="LocalHost의 Phpmyadmin 2 단계">}}

  * 다음으로 새로 생성 된 데이터베이스를 선택하여 테이블을 만들 수 있습니다.
* “생성 테이블”아래에 테이블 이름을 입력하십시오.

{{< figure align=center src="images/db3-1024x234.png" alt="LocalHost에서 phpmyadmin 3 단계">}}

  * 열 수를 선택하십시오.
  * 그런 다음 "GO"버튼을 클릭하십시오.
  * 그 후 다음 페이지의 양식을 작성하여 테이블 작성을 완료해야합니다.

{{< figure align=center src="images/db4-1024x564.png" alt="Localhost 4 단계에서 phpmyadmin">}}


## 최종 생각 :   {#final}
XAMPP 설치는 간단하고 간단합니다. XAMPP 서버 설정에 15 분 이상 걸리지 않습니다. 설치되면 개발자는 인터넷 연결 없이도 PHP 기반 웹 앱을 구축하고 테스트 할 수 있습니다. 라이브 웹 서버에서 직접 프로젝트를 테스트하는 대신 로컬로 테스트하는 것이 간단하고 시간 절약입니다. 초보자가 PHP, PERL 및 데이터베이스 기술을 배우고, 테스트하고, 연마 할 수있는 훌륭한 플랫폼입니다.

## 탐구하다:
[PHP 및 PERL 개발자를위한 오픈 소스 웹 서버 솔루션 스택][6]
[최고의 오픈 소스 웹 서버 솔루션 스택 옵션][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
