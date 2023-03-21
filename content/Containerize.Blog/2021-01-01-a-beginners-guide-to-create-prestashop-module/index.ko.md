---
title: "Prestashop 모듈 생성 초보자 안내서" 
seoTitle: "Prestashop 모듈 생성 초보자 안내서" 
description: "Prestashop은 온라인 스토어를 설정하기위한 효율적이고 비용 효율적인 오픈 소스 전자 상거래 소프트웨어입니다. Prestashop Addons는 소유자가 기능을 확장하도록하는 데 도움이됩니다." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Prestashop 모듈은 상점의 기능을 향상시킬 수있는 작은 프로그램입니다. 이 튜토리얼에서 기본 모듈을 구축하는 방법을 배울 것입니다." 
url: /ko/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Prestashop 모듈은 상점의 기능을 향상시킬 수있는 작은 프로그램입니다. 이 튜토리얼에서 기본 모듈을 구축하는 방법을 배웁니다.

{{< figure align=center src="images/prestashop-module.png" alt="Prestashop 모듈">}}

**Prestashop **는 100% 무료 및 오픈 소스 인 전자 상거래 소프트웨어입니다. 이를 통해 상점 소유자는 온라인 입지를 쉽게 설정하고 광범위하게 비즈니스를 확장 할 수 있습니다. Prestashop에는 기본 기능이 제공되며 때때로 비즈니스 요구 사항에 더 많은 기능이 필요할 수 있습니다. Prestashop의 마켓 플레이스는 매장 기능을 확장하는 데 사용할 수있는 애드온 기능을 찾을 수있는 환상적인 장소입니다. 또한 Marketplace에서 무료 및 유료 모듈을 모두 찾을 수 있습니다. 그러나 처음부터 사용자 정의 모듈을 만들 수 있습니다.
Prestashop 모듈을 작성하기 위해 아래 주제를 자세히 설명합니다. **.
  * [요구 사항][1]
  * [모듈 개발의 기본 사항][2]
  * [Prestashop 모듈 만들기][3]
  * [결론][4]

## 요구 사항   {#req}
  * Prestashop 1.6 이상을 설치하십시오.
  * Prestashop에 익숙합니다.
  * PHP 이해.

## 모듈 개발의 기본   {#Basics}
코딩을 시작하기 전에  **Prestashop 모듈 개발 ** 의 핵심 개념에 대해 아는 것이 정말 중요합니다. 모듈을 신속하게 빌드하고 관리 할 수 ​​있습니다.
**구성 ** - 구성을 사용하면 모듈 특정 테이블없이 상점 데이터베이스에 데이터를 저장할 수 있습니다. 구성 테이블에는 어디서나 액세스 할 수있는 주요 값 속성 목록이 포함되어 있습니다.
**후크 ** - 후크는 특정 Prestashop 이벤트를 코드와 연결하는 방법입니다. 후크를 사용하여 코드를 페이지에 배치 할 수 있으며 특정 이벤트에서 이메일을 보내는 것과 같은 특정 작업을 수행 할 수 있습니다.
**위젯 ** - 모듈 개발자는 위젯을 사용하여 필요한 경우 콘텐츠를 표시합니다.
**교리 ** - 교리는 ORM을 사용하면 객체를 통해 데이터베이스 데이터를 관리 할 수 ​​있습니다. 이것은 간단한 호출로 삽입/업데이트 작업을 수행 할 수있는 추상 레이어를 제공합니다.

## Prestashop 모듈 만들기   {#Create}
  * **modules **  prestashop 설치의 디렉토리에서  **myfirstmodule ** 라는 모듈 디렉토리를 만듭니다. 모든 파일을 모듈 디렉토리에 배치하십시오.
  *이름이있는 기본 파일을 작성  **MyFirstModule.php **  다음 코드를 복사하십시오.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
  * **install () **  및  **uninstall () **  메소드를 작성하십시오.  **myFirstModule.php **  파일에 다음 방법을 추가하십시오.
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * 등록 된 후크를 활성화하려면 특별한 방법을 호출하십시오. 우리는이 방법을 사용하여“Hello World!”를 표시 할 것입니다. 사이드 바에 텍스트.  **myFirstModule.php **  파일에 다음 코드를 추가하십시오.
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
  *마지막으로, 관리자 섹션을 열고  **Prestashop 모듈 ** 를 설치하십시오.

## 결론   {#conclusion}
우리는이 튜토리얼에서  **prestashop 모듈 ** 을 구축하기위한 핵심 개념에 대해 논의했습니다. 또한, 우리는 더 많은 사전 모듈의 시작점으로 사용할 수있는 기본 모듈을 개발했습니다. [Containerize.com][5]는 새로운 튜토리얼 블로그 게시물을 지속적으로 작업하고 있습니다. 최신 업데이트는 [쇼핑 카트 소프트웨어][6] 카테고리와 연락하십시오.

## 탐구하다
**Prestashop Module Creation Tutorial ** 외에도 유용한 다음 링크를 찾을 수 있습니다.
  * [Prestashop - 무료 쇼핑 카트 소프트웨어][7]
  * [2020 년 상위 5 개 오픈 소스 쇼핑 카트 소프트웨어][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
