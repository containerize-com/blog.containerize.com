---
title: "Phplist에서 다중 테넌트 응용 프로그램을 구성하는 방법" 
seoTitle: "Phplist에서 다중 테넌트 응용 프로그램을 구성하는 방법" 
description: "Phplist는 무료 및 오픈 소스 뉴스 레터 소프트웨어입니다. 멀티 테넌트 응용 프로그램을 구성하고 공유 환경에서 여러 응용 프로그램 인스턴스를 실행하십시오." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Phplist에서 다중 테넌트 응용 프로그램을 개발하기위한 튜토리얼. 멀티 테넌트 기능은 여러 호스트에 대한 단일 설치를 사용하여 호스팅 비용을 줄입니다." 
url: /ko/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## phplist에서 다중 테넌트 응용 프로그램을 개발하기위한 자습서. 멀티 테넌트 기능은 여러 호스트에 대한 단일 설치를 사용하여 호스팅 비용을 줄입니다.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="다중 테넌트 응용 프로그램 Phplist">}}

이 기사에서는 Multi-Tenancy**및 Phplist에서 Multi-Tenant Application**를 구성하는 방법**를 다룰 것입니다.

## phplist는 무엇입니까?
마케팅 전략을 결정할 때 이메일 마케팅은 모든 온라인 디지털 회사의 핵심 부분입니다. Phplist를 통해 기업은 많은 청중에게 도달 할 수 있습니다. PHPLIST는 목록을 관리하고 뉴스 레터를 보내는 데 널리 사용됩니다**오픈 소스 뉴스 레터 소프트웨어**. 기업이 뉴스 레터 캠페인을 만들고, 예약, 전송 및 분석하는 데 도움이됩니다. PHPLIST는 분석, 세분화, 바운스 처리, 플러그인, API 등과 같은 기능을 지원합니다.

## 멀티 테넌시 란 무엇입니까?
다중 테넌시는 많은 고객/사이트가 소프트웨어 응용 프로그램의 단일 인스턴스로 표시되는 아키텍처입니다. 다중 테넌시 에서이 사이트는 세입자로 간주됩니다. 모든 임차인에는 구성, 테마, SMTP와 같은 특정 기능이 있습니다.
클라우드 컴퓨팅의 주요 측면은 다중 테넌시입니다.**멀티 테넌트 아키텍처**는 유지 보수 비용과 빠른 테넌트 업데이트를 줄임으로써 비즈니스가 더 나은 ROI를 달성 할 수 있도록 도와줍니다. 또한 멀티 테넌트 아키텍처에 설계된 응용 프로그램은 쉽게 확장 할 수 있습니다.
다음 접근법을 사용하여 다중 테넌시를 구현할 수 있습니다.
  * 모든 세입자를위한 공유 데이터베이스.
  * 모든 임차인에 대한 별도의 데이터베이스.
우리는 모든 임차인 접근 방식에 대해 별도의 데이터베이스를 사용하여 Phplist에서 다중 테넌시를 구현합니다.
  * [핸들 요청 흐름][1]
  * [테넌트의 데이터베이스 설정][2]
  * [테넌트의 NGINX 구성][3]

## 핸들 요청 흐름   {#request}
  * config.php 파일을 백업하면 config 디렉토리에서 찾을 수 있습니다.
  * 새 config.php 파일을 작성하고 사이트/테넌트를 처리하기 위해 다음 코드를 추가하십시오.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
example.com을 도메인 이름으로 바꾸십시오. 또한 모든 임차인에 대한 구성 파일을 작성해야합니다. config.php의 백업 파일을 복사하고 config.example.com.php와 같은 새 이름으로 저장하십시오.

## 테넌트 용 설정 데이터베이스   {#Database}
  * 기존 PHPLIST 데이터베이스의 백업을 수행하십시오. 이를 사용하여 새 임차인을위한 데이터베이스를 만듭니다.
  * config.example.com.php 파일을 엽니 다. 환경에 따라 데이터베이스 자격 증명 및 기타 설정을 변경합니다.

## 테넌트에 대한 nginx 구성   {#nginx}
* nginx 디렉토리로 이동**CD/etc/nginx/sitees-available**.
  * 기본 config.php 파일을 복사하고 example.com과 같은 사이트 이름으로 저장하십시오.
* sudo nano example.com**과 함께 Open example.com 구성**.
  * 루트 경로, Server_Name 및 기타 설정을 변경하십시오.
* sudo nginx -t**로 구성 테스트 구성 테스트
* 마지막으로**sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/sites-enabled/**를 실행하여 Symlink를 만듭니다.
* Sudo SystemCTL을 실행하여 Nginx 웹 서버를 다시 시작하여 nginx를 다시 시작하면 새로 생성 된 구성 파일을로드 할 수 있습니다.

## 결론
멀티 테넌시 소프트웨어는 유지 보수 비용 절감, 효과적인 리소스 사용 및 설치하기 쉬운 업데이트와 같은 단일 테넌시 응용 프로그램과 비교할 때 몇 가지 장점이 있습니다. SaaS (Software As a Service) 소프트웨어를 구축하려는 경우 멀티 테넌시 아키텍처를 따라 진정한 힘을 누릴 수 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [Phplist - 오픈 소스 뉴스 레터 및 이메일 마케팅 소프트웨어][4]
  * [phplist를 사용하여 뉴스 레터를 만들고 보내는 방법][5]
  * [Phplist에서 바운스를 설정하고 프로세스하는 방법][6]
  * [Phplist 플러그인 개발을위한 초보자 안내서][7]
  * [Phplist의 고급 바운스 관리 및 바운스 규칙 설정][8]

  
[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
