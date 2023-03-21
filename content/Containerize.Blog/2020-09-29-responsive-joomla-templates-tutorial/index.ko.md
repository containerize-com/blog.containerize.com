---
title: "초보자를위한 Joomla 템플릿 개발 안내서" 
seoTitle: "초보자를위한 Joomla 템플릿 개발 안내서" 
description: "Joomla 템플릿 개발, 다양한 사용 사례에 대한 반응 형 레이아웃을 설정하는 방법을 배우십시오. 비즈니스 웹 사이트의 디자인 계층을 정의하는 파일 세트." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "다국어, SEO / 사용자 친화적 및 풍부한 색 구성표와 같은 다양한 기능을 제공하는 매우 전문적이고 사용자 정의 가능한 Joomla 템플릿을 구축하십시오." 
url: /ko/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## 다국어, SEO / 사용자 친화적 및 풍부한 색 구성표와 같은 다양한 기능을 제공하는 매우 전문적이고 맞춤형 Joomla 템플릿을 구축하십시오. {.Has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Joomla 템플릿 개발">}}


## 개요
잘 설계된 비즈니스 웹 사이트는 방문자를 쉽게 탐색하여 방문자를 가져오고 유지하는 데 중요한 역할을합니다.**Full Feacted Joomla**는 비즈니스 웹 사이트의 미학을 제어하는 ​​여러 반응 형 레이아웃과 Joomla 템플릿 개발을 통해 사용자를 촉진합니다.
개발 단계에서 디자인 요소의 배치는 다음과 같이 매우 중요합니다.
  * 일관성
  * 쉬운 탐색
  * 단순성
  * 모바일 호환성
  * 가독성
여기에**joomla 템플릿**이 온다. 이 오픈 소스 소프트웨어는 각 페이지의 코드를 별도로 작성하지 않고 모든 웹 페이지에 대해 사전 정의 된 응답 레이아웃을 개발하거나 사용할 수있는 프로비저닝을 제공합니다.
이 블로그 게시물에서는 Joomla에서 A**사용자 친화적 템플릿**를 작성하고 설정하는 방법에 대한 다음 사항을 배웁니다.
* [**Joomla 레이아웃이란 무엇입니까?**][2]
* [**Joomla에서 간단한 반응 형 템플릿을 만드는 방법?**][3]
* [**Joomla 템플릿을 설치하는 방법?**][4]
* [**결론**][5]

## Joomla 레이아웃이란 무엇입니까?   {#무엇}
Joomla는 백엔드뿐만 아니라 프론트 엔드 템플릿을 제공합니다. 기성품 템플릿이 많이 제공되며 개발자에게 사용 사례에 따라 무료 응답 형 부트 스트랩 테마**를 구축 할 수 있습니다. Joomla에는 두 가지 유형의 템플릿이 있습니다.
* * 프론트 엔드 템플릿 :**비즈니스 웹 사이트의 일부가 직면 한 사용자와 관련이 있습니다.
* * 백엔드 템플릿 :**이 템플릿은 사이트의 비즈니스 논리에 연결되어 있습니다.

## Joomla에서 간단한 반응 형 템플릿을 만드는 방법은 무엇입니까?   {#어떻게}
이 섹션에서는이 Joomla 템플릿 튜토리얼의 단계를 다룰 것입니다.
이 섹션으로 뛰어 들기 전에 다음을 이해해야합니다.
  * html
  * CSS
  * JavaScript
  * PHP
따라서 Joomla에서 맞춤형 템플릿을 만드는 것은 결코 그렇게 어렵고 복잡한 적이 없습니다. 그러나 첫 번째 Joomla 템플릿을 만들기 시작하겠습니다.

## **디렉토리 구조 설정**
우선, "**mytemplate**"라는 폴더를 "**templates**"폴더 내부에 만듭니다.
"**myTemplate**"폴더 내에서 다음 파일을 만듭니다.
***index.php**: 전체 템플릿 페이지에 대한 HTML 및 PHP 코드가 포함 된 핵심 파일입니다.
***emplatedetails.xml**:이 파일에는 템플릿의 메타 데이터가 포함되어 있으며 Joomla가 주목하는 데 필수적입니다.
이제“**mytemplate**”폴더 내에 다음 이름을 가진 3 개의 폴더를 만듭니다.
***js**:이 폴더는 템플릿에 필요한 모든 JavaScript 파일이 포함됩니다.
***CSS**: 스타일링을위한 모든 CSS 파일 이이 폴더로 나옵니다.
***이미지**: 템플릿에서 사용하는 이미지는이 폴더에 있습니다.
"**css**"폴더 내부에서 "**template.css**"라는 CSS 파일을 만듭니다.
```
* mytemplate/
**css/
*** template.css
**images/
**js/
**index.php
**templateDetails.xml
```
결국 이것은 디렉토리 구조의 모양입니다.

## 코드를 넣습니다
이 코드를**templatedetails.xml**파일에 넣으십시오.
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
앞에서 언급 했듯이이 파일에는 마크 업 태그 사이에 정의 된 응답 레이아웃에 대한 메타 데이터가 포함되어 있습니다. 그러나 이름, 저자 및 설명과 같은 일반 정보를 변경할 수 있습니다.
이 파일에는 템플릿에서 사용하는 다른 파일 및 폴더에 대한 정보도 포함되어 있습니다.
이제**index.php**파일을 열고 다음 코드를 시작하십시오.
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
이 파일은이 줄로 시작하여 다른 사람들이 PHP 코드를 읽지 못하게합니다.
```
<!DOCTYPE html>
```
이것은 문서 유형에 대해 브라우저에 알리는 것입니다.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
HTML 문서는이 줄로 시작하고**xmlns**속성은 문서의 XML 네임 스페이스를 알려줍니다.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
태그의 첫 번째 줄은 Joomla에게 메타 데이터 정보 및 페이지 제목과 같은 헤더 정보를 넣도록 지시합니다.
두 번째 줄에는 외부 스타일 시트에 대한 링크가 있으며 세 번째 줄은 외부 JavaScript 파일을 연결합니다.
나머지 파일은 부트 스트랩을 템플릿으로 활성화합니다.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
본문 섹션은 헤드 섹션에 사용자가보고 탐색 할 수 있도록 템플릿에 반영되는 모든 데이터가 포함 된 후 시작됩니다.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
이 진술은 JDOC 문이라고 불리며 Joomla에게 "position-7"이라는 모듈을 추가하도록 지시하는 데 사용됩니다.**joomla 템플릿 개발**에서 자주 사용되는 몇 가지 JDOC 문이 있습니다.
기본 Joomla 템플릿에 필요한 모든 코드가 포함 된 최종 완료**index.php**파일입니다.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
매우 기본적인 템플릿을 위해 모든 것이 제자리에 있습니다. 이제 Joomla 서버에 설치하고 어떻게 진행되는지 확인해야합니다.

## Joomla 템플릿을 설치하는 방법은 무엇입니까?   {#설치하다}
Joomla 템플릿 설치 프로세스는 매우 직설적이고 쉽습니다. 설치해야 할 단계는 다음과 같습니다.
“Extensions-> 관리 -> 설치로 이동

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Joomla 설치 설정 이미지">}}

여기에서는 아래 이미지에 표시된 것처럼 새로 개발 된 Joomla 템플릿을 목록에서 볼 수 있습니다.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Joomla 템플릿 목록">}}

이제 템플릿을 선택하고 "설치"를 누르면 성공적인 설치에 대한 성공 메시지가 나타납니다.
템플릿이 설치된 후 Joomla의 제어판 내에서 템플릿 파일에 액세스하고 수정하고 "템플릿 미리보기"옵션에서 변경 사항을 미리 볼 수 있습니다.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="주를라">}}

이제 첫 번째 Joomla 템플릿을 브라우저로 볼 수 있습니다!

## 결론   {#conclusion}
훌륭하고 반응이 좋은 템플릿은 전체 사이트 모델링의 기초입니다.**반응 형 레이아웃**Joomla의 다기능은 다양한 프로젝트에 사용할 수 있습니다. 코드 작성부터 Joomla 템플릿 개발에 이르기까지 직관적 인 관리 대시 보드의 도움으로 매우 간단 해집니다. Joomla는 사용자의 욕구를 충족시키기 위해 템플릿 개발을 완전히 제어 할 수 있습니다.
* * CMS 소프트웨어**카테고리가 일관되게 개선되고 있으며 다른 컨텐츠 관리 시스템에 대한 더 많은 자습서가 목록에 추가 될 예정입니다. 정기적 인 업데이트를 위해 [Content Management System][6] 섹션과 연락하십시오.

## 관련 제품 페이지
다음 링크를 찾을 수 있습니다.
  * [Joomla][1]
  * [Drupal][7]
  * [파이로][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [콘크리트 5][11]
  * [Grav][12]
  * [크래프트][13]
  * [Contao][14]
  * [포크][15]
  * [정유소 CMS][16]
  * [locomotivecms][17]

  
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
