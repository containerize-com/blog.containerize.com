---
title: "Windows에서 WAMP 서버를 설치하고 구성하는 방법" 
seoTitle: "Windows에서 WAMP 서버를 설치하고 구성하는 방법" 
description: "Windows에 Wampserver를 설치하고 PHP 기반 웹 응용 프로그램을 신속하게 개발하십시오. WAMP 서버는 Windows 32 및 64 비트 모두에서 사용할 수 있습니다." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Apache2, PHP 및 MySQL을 사용하여 웹 응용 프로그램을 만들기위한 웹 개발 환경을 설정하십시오. 이 기사는 Windows에 WAMP 서버를 설치하는 데 도움이됩니다." 
url: /ko/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Apache2, PHP 및 MySQL을 사용하여 웹 응용 프로그램을 작성하기위한 웹 개발 환경을 설정하십시오. 이 기사는 Windows에 WAMP 서버를 설치하는 데 도움이됩니다.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="WAMP 서버">}}

모든 개발자는 프로그램을 작성하기 전에 컴퓨터에 필요한 소프트웨어를 설치해야합니다. 초기에는 개발자가 모든 소프트웨어를 별도로 설치 한 다음 함께 작동하도록 구성해야했습니다.  **WAMPSERVER**  및 기타 웹 솔루션 스택 소프트웨어를 사용할 수 있으므로 필요한 모든 소프트웨어를 하나의 패키지로 번들로 제공합니다. 개발 환경을 시작하고 실행하기 위해 하나의 패키지 만 설치하면됩니다.
이 블로그 게시물에서는 다음 섹션을 다룰 것입니다.
* [  **Wampserver는 무엇입니까?**  ][1]
* [  **WAMP 설치**  ][2]
* [  **WAMP 구성**  ][3]
* [  **액세스 phpmyadmin**  ][4]

## Wampserver는 무엇입니까? {#What}

Wampserver는 PHP 기반 애플리케이션을위한 웹 개발 환경을 설정하기위한 무료 솔루션 스택입니다. WAMP는 (w - windows, a - apache, m - mysql 및 p - php)를 나타냅니다. 또한 데이터베이스 관리를 위해 Phpmyadmin 및 관리자도 함께 제공됩니다. WAMP는 인기있는 도구 중 하나이며 빠르게 설정할 수 있습니다. 또한 제어판에서 WAMP 서버를 구성 할 수 있습니다. 응용 프로그램을 작성하고 테스트하기위한 완벽한 웹 개발 환경을 제공합니다. Wampserver는 필요에 따라 설치 중에 선택할 수있는 여러 구성 요소로 구성됩니다. Wampserver에는 여러 버전의 PHP가 제공됩니다. 프로젝트 요구 사항에 따라 PHP 버전을 쉽게 변경할 수 있습니다. 또한 WAMPSERVER 제어판에서 DBMS (데이터베이스 관리 시스템)를 변경할 수 있습니다.

## WAMP 설치 {#Installation}

아래 단계별 안내서를 따라 WAMP 서버를 Windows에 설치하십시오.
*  **공식 웹 사이트에서 Wampserver**  를 다운로드하십시오

{{< figure align=center src="images/wamp-download.png" alt="">}}

* 운영 체제에 따라 설치 프로그램의  **wampserver 32 비트** 또는 **wampserver 64 비트**  를 선택하십시오.
*  **WAMP 다운로드**  파일을 찾아서 두 번 클릭하여 설치 프로세스를 실행하십시오.
  * 언어를 선택한 다음 OK 버튼을 누릅니다.
  * 계약 확인란을 수락 한 다음 다음 버튼을 클릭하십시오.
  * Wampserver 설치에 대한 중요한 정보를 읽고 다음 버튼을 클릭하여 진행하십시오.
  * WAMP 서버를 설치할 폴더를 선택하고 다음 버튼을 클릭하십시오.
  * 아래 스크린 샷과 같이 설치할 구성 요소를 선택해야합니다. 개발 중에 모든 PHP 버전을 선택하고 전환 할 수 있습니다. 또한 MySQL과 MariaDB를 모두 설치할 수 있습니다.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Wampserver의 바로 가기를 선택하고 다음 버튼을 클릭하십시오.
  * 설치 버튼을 클릭하여 Wampserver를 설치하십시오.
  * 이제 WAMP 서버의 기본 브라우저 및 기본 텍스트 편집기를 선택하십시오.
  * 설치가 완료되었습니다. 완료 버튼을 클릭하여 WAMP 서버 설치 마법사를 종료하십시오.
  * 브라우저를 열고 액세스 할 수 있도록 로컬 호스트를 입력하십시오. 아래 페이지가 표시됩니다.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## wamp 구성 {#Configuration}

이제 웹 응용 프로그램의 개발 및 테스트 중에 도움이되는 몇 가지 구성을 살펴 보겠습니다. 이제 데스크탑의 바로 가기 Wampserver 아이콘을 두 번 클릭하여 Wampserver를 시작할 수 있습니다.
*  **서비스**  -WAMPSERVER 아이콘을 왼쪽 클릭하여 모든 서비스를 시작, 중지 및 다시 시작할 옵션을 볼 수 있습니다.
*  **데이터베이스 변경**  -WAMP 아이콘을 마우스 오른쪽 버튼으로 클릭하여 도구 대화 상자를 엽니 다. 도구를 선택하고 "기본 DBMS MARIADB MYSQL을 뒤집습니다"를 클릭하십시오. WAMP 서버가 자동으로 다시 시작되며 브라우저에서 LocalHost를 열어 기본 데이터베이스를 볼 수 있습니다.
*  **PHP 버전 변경**  -WAMP 아이콘을 마우스 오른쪽 버튼으로 클릭하여 도구 대화 상자를 엽니 다. 도구를 선택하고 PHP CLI 버전을 변경하고 원하는 PHP 버전을 클릭하십시오.
*  **가상 호스트**  - Wampserver의 웹 인터페이스를 통해 가상 호스트를 쉽게 추가 할 수 있습니다. 브라우저에서 LocalHost를 열고 도구 섹션에서 "가상 호스트 추가"를 클릭하십시오. “Dev.example.com과 같은 가상 호스트의 이름”을 입력하고 프로젝트의 절대 경로를 입력하십시오. "VirtualHost 만들기 시작"버튼을 클릭하십시오. 새로 생성 된 가상 호스트를로드하려면 Apache 서버를 다시 시작하십시오.
*  **Apache Port 변경**  - 기본적으로 Apache 웹 서버는 포트 80에서 실행됩니다. Apache에 다른 포트를 사용하려면 WampServer 제어판에서 수행 할 수 있습니다. WAMP 아이콘을 마우스 오른쪽 버튼으로 클릭하여 도구 대화 상자를 엽니 다. 도구를 선택하고 "80 이외의 포트 사용"을 클릭하십시오. 대화 상자에 새 포트 번호를 입력하고 확인 버튼을 클릭하십시오.
*  **DBMS 포트 변경**  - 기본적으로 데이터베이스 서버는 포트 3306에서 실행됩니다. 데이터베이스 서버에 다른 포트를 사용하려면 WAMPSERVER 제어판에서 수행 할 수 있습니다. WAMP 아이콘을 마우스 오른쪽 버튼으로 클릭하여 도구 대화 상자를 엽니 다. 도구를 선택하고 "3306 이외의 포트 사용"을 클릭하십시오. 대화 상자에 새 포트 번호를 입력하고 확인 버튼을 클릭하십시오.
*  **빈 로그**  - wamserver는 제어판에서 로그를 지우는 기능을 제공합니다. PHP 오류 로그, Apache Error Log, Apache Access Log, MySQL Log 및 MariaDB 로그와 같은 로그를 비울 수 있습니다. 심지어 모든 로그를 한 번에 지울 수 있습니다. WAMP 아이콘을 마우스 오른쪽 버튼으로 클릭하여 도구 대화 상자를 엽니 다. 도구를 선택하고 빈 로그를 선택하면 로그를 제거하기위한 모든 옵션이 있습니다.
*  **언어 변경**  - Wampserver 제어판을위한 언어를 사용할 수 있습니다. WAMP 아이콘을 마우스 오른쪽 버튼으로 클릭하여 도구 대화 상자를 엽니 다. 언어를 선택하고 필요한 언어를 클릭하십시오. 새로 선택한 언어로 제어판이 표시됩니다.

## phpmyadmin에 액세스하십시오 {#phpMyAdmin}

브라우저에서 LocalHost를 열어 데이터베이스 관리를 위해  **phpmyadmin**  에 액세스 한 다음 Wampserver Welcome 페이지에서 Phpmyadmin 링크를 클릭하십시오. 또한 http : // localhost/phpmyadmin url을 방문하여 액세스 할 수 있습니다.

## 결론
Wampserver에 대해 논의하고 WAMPSERVER  **를 Windows에 설치하기위한 전체 단계별 안내서를 다루었습니다. 이 자습서를 따르고 즉시 코딩을 시작하여**  wampserver**를 쉽게 설치하고 구성 할 수 있습니다. Solution Stack 소프트웨어의 더 많은 옵션을 보려면 Explore Section의 링크를 방문 할 수 있습니다.
마지막으로, [  **containerize.com** ][5]는 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트를 위해이 [ **웹 서버 솔루션 스택**  ][6] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
* [  **최고의 오픈 소스 웹 서버 솔루션 스택 옵션**  ][7]
* [  **Windows의 LocalHost로 XAMPP 및 PhpmyAdmin을 설정합니다**  ][8]



 [1]: #What
 [2]: #Installation
 [3]: #Configuration
 [4]: #phpMyAdmin
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
