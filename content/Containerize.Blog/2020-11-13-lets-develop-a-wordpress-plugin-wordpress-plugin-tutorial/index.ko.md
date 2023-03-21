---
title: "WordPress 플러그인을 개발해 봅시다 WordPress 플러그인 자습서" 
seoTitle: "WordPress 플러그인을 개발해 봅시다 WordPress 플러그인 자습서" 
description: "WordPress 플러그인 개발에 관심이 있습니까? 기본 WordPress 플러그인을 만들기위한 전체 단계를 설명하는이 WordPress 플러그인 자습서를 따르십시오." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "WordPress 플러그인은 웹 사이트에서 활성화하여 일련의 기능이나 요소를 제공합니다. 이 플러그인은 SEO 최적화되어 있으며 자동화를 제공합니다." 
url: /ko/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## WordPress 플러그인은 웹 사이트에서 활성화하여 일련의 기능이나 요소를 제공합니다. 이 플러그인은 SEO 최적화되어 있으며 자동화를 제공합니다.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="WordPress 플러그인 튜토리얼">}}


## 개요
WordPress는 엔터프라이즈 수준의 오픈 소스 블로깅 플랫폼입니다. A**WordPress 플러그인**는 WordPress의 기능을 향상시키고 확장하는 독립형 코드 세트입니다. PHP, HTML, CSS, JavaScript/JQuery의 모든 조합을 사용하여. 플러그인은 웹 사이트의 어느 부분에도 새로운 기능을 추가 할 수 있습니다.
웹 사이트에 추가 할 수있는 기능은 각 특정 플러그인이 작성한 내용에 따라 다릅니다. WordPress 플러그인은 무엇이든 수행하도록 개발할 수 있습니다. 작은 작업에서 다수의 작업을 수행하고 자체 인터페이스를 갖는 전체 플러드 애플리케이션에 이르기까지. 플러그인은 후크, 필터, 단축 코드, 위젯 및 사용자 정의 코드를 사용하여 기능을 수행하기 위해 테마와 다르며 독립적으로 작동합니다.
이 WordPress 플러그인 자습서에서는 첫 번째 WordPress 플러그인을 만드는 방법을 배웁니다. 플러그인을 작성하는 가장 중요한 이유는 WordPress Core 코드에서 자신의 코드를 분리 할 수 ​​있기 때문입니다.
* **[요구 사항][1]**
* **[플러그인 개발의 기본 사항][2]**
* **[WP 플러그인을 만드는 방법?][3]**
* **[결론][4]**

## 요구 사항   {#requirements}
  * WordPress의 최신 버전
  * PHP / MySQL 이해
  * HTML / CSS 및 JavaScript 이해

## 플러그인 개발의 기본   {#Basics}
플러그인 개발의 몇 가지 주요 측면에 대해 잠시 이야기 해 봅시다. 이러한 개념이 어떻게 작동하는지에 대한 확실한 이해는 사용하기 쉬운 기능을 구축하는 데 도움이됩니다.

## # 액션
* * 액션 후크**는**WordPress****플러그인**에서 매우 유용한 도구이며 테마 또는 플러그인의 특정 장소에서 기능 (**액션**)을 수행하는 데 사용됩니다. WordPress는 핵심 기능에 걸쳐 정의 된 수십 가지 행동을 가지고 있으며, 각 동작은 고유 한 이름으로 구성됩니다. 자세한 내용은 [읽기][5].

## # 필터
WordPress 필터는 변수 (또는 일련의 변수)를 받아들이고 수정 된 후 다시 반환하는 후크입니다. 이 필터는 종종 기본 정보를 조작 할 수있는 방법이 있도록 사용됩니다. 자세한 내용은 [읽기][6].

## # 단축 코드
단축 코드는 내용과 동적 상호 작용을 수행하는 데 사용할 수있는 매크로입니다. 즉, 게시물에 첨부 된 이미지에서 갤러리 제작 또는 비디오 렌더링. 결과적으로, 그들은 컨텐츠를 깨끗하고 의미 론적으로 유지하는 동시에 최종 사용자에게 콘텐츠의 프리젠 테이션을 프로그래밍 방식으로 변경할 수있는 능력을 허용하는 귀중한 방법입니다. 자세한 내용은 [읽기][7].

## # 위젯
위젯은 사용하기 쉬운 인터페이스를 제공하면서 플러그인 코드를 실행하는 또 다른 수단을 제공하기 때문에 중요합니다. 대부분의 테마는 하나 이상의 사이드 바를 지원하기 때문에; 자신의 위젯을 추가하면 테마 내부에 정보를 표시 할 수 있습니다.

## **WP 플러그인을 만드는 방법?** {#Create}
WordPress 플러그인 튜토리얼 의이 섹션에서 폴더를 작성한 다음 한 줄의 컨텐츠로 단일 파일을 작성하기 만하면됩니다.**WP-Content/Plugins**폴더로 이동하여**MyTestPlugin**라는 새 폴더를 만듭니다. 이 새 폴더 내에서**mytestplugin.php**라는 파일을 만듭니다. 텍스트 편집기에서 파일을 열고 다음 정보를 붙여 넣습니다.
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
이제 백엔드로 이동하여 플러그인을 활성화 할 수 있습니다. 이 플러그인은 아무것도하지 않지만 그게 전부입니다. 그러나 활성화 된 기능 플러그인입니다. 플러그인을 개발할 때 모범 사례는 코드를 적절한 파일과 폴더로 깔끔하게 분리하는 것입니다.
시연하기 위해 각 게시물이 몇 번이나 보았는지 저장하여 기사의 인기를 추적하는 테스트 플러그인에 기능을 추가하겠습니다.

## # 페이지보기 저장
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
지금 까지이 WordPress 플러그인 튜토리얼에서는 너무 좋습니다. 그러나이 기능은 호출되지 않으므로 실제로 사용되지 않습니다. 이곳은 후크가 들어오는 곳입니다. 테마의 파일로 가서 그 기능을 수동으로 호출 할 수 있습니다. 그러나 테마를 바꾸면 전체 목적을 물리 치면 그 기능을 잃을 것입니다.**wp_head**라는 후크는 대부분의 테마에 태그가 존재하기 직전에 실행되므로**wp_head**실행할 때마다 실행되도록 기능을 설정할 수 있습니다.
```
add_action("wp_head", "add_page_views");
```

## # 페이지보기 표시
이제 위의 함수에 이미 저장된 페이지보기를 반환하는 다른 함수를 만듭니다. 코드를 살펴 보겠습니다.
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
지금까지 우리는 방금보기 수를 검색했습니다. 이제 보여 드리겠습니다. 복잡해야한다고 생각할 수도 있습니다. 그러나 다음과 같이 매우 간단합니다.
```
echo get_page_views() . “view(s)”
```

## 결론   {#conclusion}
이것이이 WordPress 플러그인 튜토리얼의 끝입니다. 이 기사를 따르고 소수의 기능 만 사용하여 가장 인기있는 게시물을 추적하기위한 기본 플러그인을 만들었습니다. 우리는 그것을 많이 향상시킬 수 있지만, 목적은 단지 당신을 기본에 편안하게 만드는 것이 었습니다. 또한 WordPress 개발 (플러그인, 후크 등)의 일부 패턴을 배우면 비 Wordpress 환경에서도 도움이되는 기술을 얻게됩니다. 오픈 소스 블로그 플랫폼 및 오픈 소스 CMS와 관련된 다른 블로그 게시물이 많이 있습니다. 아래 탐색 섹션에서 찾을 수 있습니다. 이 블로그 게시물은 비즈니스를위한 오픈 소스 블로그 플랫폼을 배포하려는 경우 실제로 도움이 될 수 있습니다.
마지막으로, [Containerize.com][8]는 추가 오픈 소스 제품에 대한 기사를 작성하고 있습니다. 따라서 일반 뉴스 및 업데이트를 위해 [Blogging][9] 및 [Business Intelligence Software][10] 카테고리와 연락하십시오.

## 탐구하다
  * [WordPress 용 Matomo를 설치하는 방법 | WordPress 튜토리얼][11]
  * [무료 Civicrm WordPress 통합으로 리드를 향상 시키십시오][12]
  * [WordPress에서 플러그인을 설치하는 방법 | 바닐라 포럼][13]
  * [Joomla vs Drupal | 2021 년 CMS 비교][14]
  * [2021 년 오픈 소스 소프트웨어를 선택하기 전에 검토 할 것들][15]

  
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
