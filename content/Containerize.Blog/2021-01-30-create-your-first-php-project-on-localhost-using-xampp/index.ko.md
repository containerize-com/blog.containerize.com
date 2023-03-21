---
title: "XAMPP를 사용하여 LocalHost에서 첫 번째 PHP 프로젝트를 만듭니다." 
seoTitle: "XAMPP를 사용하여 LocalHost에서 첫 번째 PHP 프로젝트를 만듭니다" 
description: "무료 및 오픈 소스 웹 서버 XAMPP를 사용한 웹 개발 환경을 설정합니다. 몇 가지 쉬운 단계에 따라 LocalHost에서 PHP 프로젝트를 만들고 테스트하십시오." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "무료 및 오픈 소스 XAMPP 서버를 사용하여 웹 개발 환경을 설정합니다. 몇 가지 쉬운 단계에 따라 LocalHost에서 PHP 프로젝트를 배우고 만들고 테스트하십시오." 
url: /ko/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## 무료 및 오픈 소스 XAMPP 서버를 사용한 웹 개발 환경. 몇 가지 쉬운 단계에 따라 LocalHost에서 PHP 프로젝트를 배우고 만들고 테스트하십시오.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="XAMPP 오픈 소스 웹 서버로 첫 번째 PHP 프로젝트 생성">}}

XAMPP는 라이브 서버에 배포하기 전에 PHP 프로젝트를 생성, 실행 및 테스트 할 수있는 로컬 환경을 제공하는 오픈 소스 웹 서버입니다. 개발자가 웹 앱을 테스트하고 구축 할 수있는 로컬 서버를 제공합니다. 이 블로그 게시물에서 다음 섹션을 다룰 것입니다.
  * [요구 사항][2]
  * [XAMPP 란?][3]
  * [PHP 스크립트 만들기][4]
  * [실행 및 테스트 PHP 스크립트][5]
  * [결론][6]

## 요구 사항   {#requirements}
  * XAMPP 설치
  * 코드 편집기 응용 프로그램
  * 기본 PHP 지식
  * 기본 HTML 및 JavaScript 지식

## XAMPP 란 무엇입니까?   {#xampp}
XAMPP는 오픈 소스 웹 서버 솔루션 스택입니다. Apache, MySQL, MariaDB, PHP 및 Perl이 포함되어 있습니다. 설치 및 사용이 매우 쉽습니다. 그렇기 때문에 가장 인기있는 PHP 개발 환경입니다. XAMPP 서버는 PHP 웹 앱 개발을위한 완벽한 환경을 제공합니다. XAMPP 작업 설치가 아직없는 경우이 안내서를 따라 XAMPP를 설치하십시오.
[Windows의 LocalHost로 XAMPP 및 PhpmyAdmin을 설정][7]

## PHP 스크립트 생성   {#php}
  * 위의 튜토리얼에 따라 XAMPP를 이미 설치했다고 가정하면 이제 간단한 PHP 스크립트를 만들어 XAMPP에서 테스트하겠습니다.
  * 먼저 편집자를 엽니 다. 프로그래밍 편집기가없는 경우 메모장을 열기 만하면됩니다.
  * 다음 코드를 입력하십시오
```
<?php
echo "This is my first PHP project";
?>
```
  * 오른쪽 상단의 "파일"을 클릭하십시오.
  * "Save As"버튼을 누르십시오.
  * ".php"확장자로 이름을 입력하십시오.
  *"유형으로 저장"하려면 "모든 파일 (\*. \*)"옵션을 선택하십시오.
  * 마지막으로 "저장"버튼을 누르십시오.

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="XAMPP 오픈 소스 웹 서버로 첫 번째 PHP 프로젝트 생성">}}


## 실행 및 테스트 PHP 스크립트   {#Test}
  *이 PHP 스크립트를 XAMPP 설치 내에서 HTDOCS 폴더에 복사하십시오. 주로 HTDOCS 폴더가 여기에 있습니다 : C : \ XAMPP \ HTDOCS
  * 브라우저를 엽니 다.
  * localhost/my \ _first \ _php_project.php로 이동

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="XAMPP 오픈 소스 웹 서버로 첫 번째 PHP 프로젝트 생성">}}

축하해요! 방금 첫 번째 PHP 프로젝트를 만들었습니다.

## 결론   {#conclusion}
첫 번째 웹 프로젝트를 만드는 것은 항상 초보자에게 매우 흥미 롭습니다. 첫 번째 동적 스크립트를 디자인하고 실행하고 브라우저에서 작동하는 것을 볼 때 기분이 좋습니다. 이 간단한 가이드가 XAMPP 오픈 소스 웹 서버로 첫 번째 PHP 프로젝트를 만들고 실행하는 데 도움이 되었기를 바랍니다.

## 탐구하다
XAMPP 및 Phpmyadmin에 대한 자세한 내용은 가이드를 확인하십시오.
[Windows의 LocalHost로 XAMPP 및 PhpmyAdmin을 설정][7]
[PHP 및 PERL 개발자를위한 무료 웹 서버 솔루션 스택][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
