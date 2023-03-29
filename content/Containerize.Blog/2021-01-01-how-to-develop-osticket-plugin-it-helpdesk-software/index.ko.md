---
title: "오스티켓 플러그인을 개발하는 방법 | 헬프 데스크 소프트웨어" 
seoTitle: "오스티켓 플러그인을 개발하는 방법 | 헬프 데스크 소프트웨어" 
description: "이 튜토리얼을 따라 오스티켓 플러그인을 개발하는 방법을 알아보십시오. 이는 HelpDesk 소프트웨어가 고객 커뮤니케이션을 관리하고 문제 해결을 자동화합니다." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "오스티켓 설치에 기능을 추가하려면 오스티켓 플러그인을 만듭니다. 이 오픈 소스 티켓팅 시스템은 비즈니스가 고객을 효율적으로 처리 할 수 ​​있도록 도와줍니다." 
url: /ko/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## 오스티켓 설치에 기능을 추가하려면 오스티켓 플러그인을 만듭니다. 이 오픈 소스 티켓팅 시스템은 비즈니스가 고객을 효율적으로 처리 할 수 ​​있도록 도와줍니다.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="헬프 데스크 소프트웨어">}}


## 개요
일련의 [HelpDesk Ticketing Software][1]의 또 다른 흥미로운 블로그 게시물에 오신 것을 환영합니다. 우리는 [인기 무료 티켓팅 기반 헬프 데스크 및 고객 관리 시스템][2], [WordPress 및 Osticket을 사용한 발권 시스템 자동화][3] 등의 블로그 게시물을 게시했습니다. 그러나 Osticket은 고객이 직원을 지원하기 위해 쿼리 및 불만 사항을보고하도록 설계된 오픈 소스 발권 기반 헬프 데스크 시스템입니다. 이 무료 지원 시스템은 전화, 이메일 및 양식에서 나오는 문의를 웹 기반 티켓으로 변환하는 사용하기 쉬운 문의 관리 모듈을 제공합니다. 지원 직원이 고객에게 놀라운 고객 지원 경험을 제공 할 수있는 광범위한 기능과 옵션을 제공합니다.
이 오픈 소스 티켓팅 시스템 (Osticket)은 클라이언트, 페이지 및 알림으로 전송 된 메시지와 같은 클라이언트 지원 경험의 모든 부분을 조정하는 데 도움이되는 다양한 옵션을 제공하는 전적으로 유연한 지원 티켓 프레임 워크입니다. 그의 기사에서 우리는 우리의 요구에 따라 기능을 향상시키기 위해 Osticket 플러그인 개발을 배울 것입니다. 이를 위해 다음 주제를 다룰 것입니다.
  * [플러그인을 사용하는 이유는 무엇입니까?][4]
  * [요구 사항][5]
  * [Osticket의 플러그인을 개발하는 방법?][6]
  * [결론][7]

## 플러그인을 사용하는 이유는 무엇입니까? {#why}

이 주제에서는 간단한 플러그인을 만드는 방법을 배우 면서이  **IT HelpDesk Software**  (Osticket)의 핵심 기능을 확장합니다. 플러그인은 모든 앱/소프트웨어의 핵심 기능을 확장하는 소프트웨어입니다. 또한 기능을 확장하는 막대한 플러그인 스택이있는 엔터프라이즈 레벨 오픈 소스 소프트웨어가 많이 있습니다. 또한이 인기있는 오픈 소스 소프트웨어에는 WordPress, Joomla 등이 포함됩니다. 무엇보다도 활기차고 살아있는 커뮤니티는 필요에 따라 플러그인을 지원하고 개발합니다. 그러나 프레임 워크는 플러그인 개발에 관한 포괄적 인 문서를 제공합니다. 다음은 앱이 플러그인을 지원하는 몇 가지 이유입니다.
  * 타사 개발자는 응용 프로그램의 기능을 확장하는 소프트웨어 구성 요소를 만들 수 있습니다.
  * 플러그인을 사용하면 새로운 기능을 쉽게 통합 할 수 있습니다.
  * 또한 응용 프로그램의 크기와 복잡성을 증가시키지 않습니다.
* 뿐만 아니라 개발자는 핵심 애플리케이션과 플러그인 코드를 별도로 유지하고 관리 할 수 ​​있습니다.

## 요구 사항 {#requirements}

 **IT HelpDesk Software** 가이드 의이 섹션은 오스티켓 플러그인을 개발하는 데 필요한 요구 사항에 대해 설명합니다.
  * PHP 버전 5.6 이상
  * 오스티켓 설치
  * 기본 PHP 지식

## Osticket의 플러그인을 개발하는 방법은 무엇입니까? {#how}

이 섹션에서는이 오픈 소스 티켓팅 시스템 (Osticket)의 플러그인 개발 단계를 살펴 보겠습니다.
  * /includer /플러그인 디렉토리에서 플러그인 폴더를 만듭니다. 이 튜토리얼에서는  **오스티켓 시스템**  을 Redmine과 통합하는 데모 플러그인을 만듭니다.
  * 필요한 파일이 있어야합니다 : plugin.php 및 config.php.
  * Plugin.php 파일에는 플러그인에 대한 일반적인 설명이 포함되어 있습니다. plugin.php 파일에서 다음 샘플 코드를 사용하십시오.
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * 그런 다음 위의 코드에서 id, 이름, 저자 이름 및 플러그인 클래스 이름을 대체하십시오.
  * 그 후 플러그인 구성 옵션을 Osticket의 백엔드에 표시해야합니다. config.php 파일에 다음 샘플 코드를 추가하십시오.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * 결과적으로 여기에 표시된대로 구성 페이지에서 사용자 이름 및 비밀번호 필드가 생성됩니다.

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="오스티켓 플러그인 개발을위한 초보자 안내서">}}

  * 다음은 사용할 수있는 클래스 필드 목록이며`[install_root]/include/class.forms.php`에 정의되어 있습니다.
      * TextBoxField - 텍스트 상자
      * TextAreafield - 텍스트 영역
      * Threadentryfield - 리치 텍스트 영역, 토론 스레드에 사용
      * DateTimefield - JQuery DatePicker
      * Phonefield - 전화 번호에 최적화 된 텍스트 상자
      * 부울 필드 - 확인란
      * 선택 필드-드롭 다운 선택 필드
      * 섹션 브레이크 필드 - 수평 섹션 브레이크
  * 그 후 플러그인의 기능이 정의 될 파일을 만들어야합니다.
  * 파일 이름은 plugin.php 파일에 정의 된 것과 동일해야합니다. 즉, redmine.php.
  * 이것은 DynabicredMineplugin 클래스를 유지해야합니다. 다음 샘플 코드를 확인하십시오.
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
* 이 코드는 구성 값을 가져 왔으며 기능에서 이러한 값을 사용할 수 있습니다. 이 파일에서는 플러그인 기능을 요구 사항으로 추가 할 수 있습니다.

## 결론 {#conclusion}

이것은 우리를이 블로그 게시물의 끝으로 가져옵니다. Osticket은 개발자에게 플러그인 구조를 제공하여 요구 사항에 따라 새로운 기능을 추가 할 수있는 발권 관리 소프트웨어입니다. 플러그인은 모든 앱/소프트웨어의 핵심 기능을 확장하는 구성 요소입니다. 그의 기사에서, 우리는이  **고객 지원 시스템** (Osticket)의 플러그인 개발에 대해 논의했으며, 이는 개발자가 요구 사항에 따라 사용자 정의 기능과 향상을 추가 할 수 있도록 도와줍니다. 따라서이 블로그 게시물은 귀하의 비즈니스에  **IT HelpDesk Software**  를 배포하려는 경우 실제로 도움이됩니다. 또한 아래의 "탐색"섹션에 언급 된 다른 **HelpDesk Ticketing Software**  가 있습니다.
마지막으로, [Containerize.com][8]는 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 따라서 정기적 인 업데이트를 위해 [HelpDesk Ticketing Software][1] 카테고리와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][9], [LinkedIn][10] 및 [Twitter][11]에서 우리를 따라갈 수 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [uvdesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [helpy][15]
  * [최고의 오픈 소스 및 무료 IT 헬프 데스크 소프트웨어][16]
  * [인기있는 무료 티켓팅 기반 헬프 데스크 및 고객 관리 시스템][2]
  * [Osticket을 사용하여 온라인 헬프 데스크 소프트웨어를 설정하는 방법][17]
  * [오스티켓에서 다중 테넌시를 구현하는 방법][18]
  * [WordPress 및 Osticket을 사용하여 발권 시스템 자동화][3]
  * [무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화][19]



[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
