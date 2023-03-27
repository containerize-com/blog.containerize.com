---
title: "Phplist 플러그인 개발 초보자 안내서" 
seoTitle: "Phplist 플러그인 개발 초보자 안내서" 
description: "Phplist 플러그인 아키텍처에 익숙해지고 기본 Phplist 플러그인을 만드는 방법을 배우십시오. 이 가이드 라인을 사용하면 Phplist 기능을 사용자 정의하고 향상시키는 데 도움이됩니다." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Phplist 플러그인을 통해 개발자는 제품을 사용자 정의하고 기능을 향상시킬 수 있습니다. 이 게시물에서는 Phplist에서 기본 플러그인을 만드는 방법을 배웁니다." 
url: /ko/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## phplist 플러그인을 사용하면 개발자가 제품을 사용자 정의하고 기능을 향상시킬 수 있습니다. 이 게시물에서는 Phplist에서 기본 플러그인을 만드는 방법을 배웁니다.

{{< figure align=center src="images/phplist-plugin.png" alt="Phplist 플러그인">}}

플러그인 지원은 소프트웨어, 특히 오픈 소스 시스템의 필수 부분입니다. 이를 통해 개발자는 기능을 확장하기 위해 새 플러그인을 구축 할 수 있습니다. **Phplist** 는 플러그인 개발을 권장하여 개발자가 비즈니스 요구 사항에 따라 새로운 기능을 추가 할 수 있도록 플러그인의 개발을 권장합니다. Phplist 플러그인은 PHP, HTML, CSS 및 JavaScript 용 코드가 포함 된 독립형 코드 컬렉션입니다.
응용 프로그램은 여러 가지 이유로 플러그인을 지원하며 일부는 다음과 같습니다.
  * 핵심 기능을 수정하지 마십시오.
  * 개발자가 새로운 기능을 만들 수 있습니다.
  * 소프트웨어의 크기를 줄입니다.
이 튜토리얼에서 아래 주제에 대해 자세히 설명하겠습니다.
* [ **전제 조건** ][2]
* [ **Phplist 플러그인 개발의 기본 사항** ][3]
* [ **Phplist 플러그인 만들기** ][4]
* [ **결론** ][5]

## 전제 조건 {#Req}

  * PHPLIST의 최신 버전.
  * PHPLIST 및 PHP에 익숙합니다.
  * HTML / CSS 및 JavaScript 이해.

## Phplist 플러그인 개발의 기본 사항 {#Basics}

다음 방법은 Phplist 플러그인의 기능을 향상시킵니다.
* **페이지** -보고, 통계, 정보 표시 등과 같은 활동에 대한 페이지를 만듭니다.
* **후크** - 특정 장소에서 기능을 호출 할 수 있습니다.
PHPLIST를위한 특수 플러그인에는 세 가지 유형이 있습니다. 각 유형의 하나의 플러그인 만 활성화 할 수 있습니다.
* **편집기 플러그인** - 편집 캠페인 또는 템플릿을위한 편집기를 구현할 수 있습니다.
* **인증 플러그인** - 관리자 인증을위한 새로운 메커니즘을 추가 할 수 있습니다.
* **전자 메일 발신자 플러그인** -내장 기능 대신 새 이메일 전송 방법을 구현할 수 있습니다.

## Phplist 플러그인을 만듭니다 {#Create}

우선, PhplistPlugin Core 클래스를 확장해야합니다. 플러그인을 만들려면 플러그인 \ _rootdir에서 "helloorld"라는 디렉토리를 만들고 플러그인 디렉토리의 루트에서 helloworld.php라는 파일을 만들어야합니다. config.php 파일을 확인하여 플러그인 \ _RootDir 변수의 값을 찾을 수 있습니다. 아래 코드를 helloworld.php 파일로 복사하십시오.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
플러그인 디렉토리로 $ coderoot를 설정해야합니다. 플러그인이 올바르게 초기화되었는지 확인하려면 부모 생성자를 호출해야합니다. 파일 main.php를 만들고 플러그인 디렉토리에 배치하십시오. 다음 코드를 복사하십시오.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
플러그인을 설치하려면 helloorld.php 클래스 파일과 플러그인 루트 디르에 플러그인 디렉토리를 배치하십시오. 플러그인을 활성화하려면 메뉴 표시 줄에서 구성 탭을 클릭 한 다음 플러그인 관리를 클릭하십시오. 플러그인 페이지에는 사용 가능한 플러그인 목록이 표시되며 플러그인 양식을 활성화/비활성화 할 수 있습니다.
http://example.com/admin/?page=main&pi=helloworld와 같은 다음 URL로 플러그인에 액세스 할 수 있습니다. example.com을 도메인 이름으로 바꾸십시오.

## 결론 {#Con}

우리는 **phplist 플러그인** 개발의 기본 사항을 배우고 샘플 플러그인을 만들었습니다. 출발점 으로이 가이드 라인을 따르고 플러그인 개발을 추가로 탐색하여 기능을 향상시킬 수 있습니다.
마지막으로, [ **containerize.com**][6]는 추가 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트를 위해이 [**뉴스 레터** ][7] 카테고리와 연락하십시오.

## 탐구하다
다음 링크가 관련이있을 수 있습니다.
* [ **phplist** ][8]
* [ **MailTrain** ][9]
* [ **listmonk** ][10]
* [ **Moonmail** ][11]
* [ **Mailman** ][12]
* [ **2021 년 상위 5 개 오픈 소스 뉴스 레터 소프트웨어** ][13]
* [ **Phplist에서 멀티 테넌트 응용 프로그램을 구성하는 방법** ][14]
* [ **phplist를 사용하여 뉴스 레터를 만들고 보내는 방법** ][15]



[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
