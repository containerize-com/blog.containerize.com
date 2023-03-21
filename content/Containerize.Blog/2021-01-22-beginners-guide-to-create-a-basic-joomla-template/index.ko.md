---
title: "기본 Joomla 템플릿을 만들기위한 초보자 안내서" 
seoTitle: "기본 Joomla 템플릿을 만들기위한 초보자 안내서" 
description: "Joomla는 인기있는 오픈 소스 컨텐츠 관리 시스템입니다. 이 튜토리얼에서는 Joomla 템플릿을 만드는 방법을 단계별로 설명합니다." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla는 가장 인기있는 오픈 소스 컨텐츠 관리 시스템 중 하나입니다. 이 튜토리얼은 Joomla 템플릿을 처음부터 작성하는 데 필요한 단계를 안내합니다." 
url: /ko/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla는 가장 인기있는 오픈 소스 컨텐츠 관리 시스템 중 하나입니다. 이 튜토리얼은 Joomla 템플릿을 처음부터 작성하는 데 필요한 단계를 안내합니다.

{{< figure align=center src="images/joomla-templates-2.png" alt="기본 Joomla 템플릿">}}

이 디지털 시대에 컨텐츠 관리 시스템은 모든 컨텐츠 작성 요구에 대한 비즈니스의 기본 필수성입니다. 또한 시장에서 사용할 수있는 많은 오픈 소스 및 유료 CMS 소프트웨어가 있습니다. 또한 비즈니스를위한 최고의 오픈 소스 컨텐츠 관리 소프트웨어 중 일부가 있습니다. Joomla는 가장 인기있는 오픈 소스 CMS 소프트웨어 중 하나 이며이 자습서에서는 단계별로 안내하고 Woomla 템플릿을 처음부터 작성하는 방법을 설명합니다. 그래서 시작합시다!
**참고 : Joomla 2.5 버전이 설치되어 있다고 가정합니다**
  * **[디렉토리 구조 설정][2]**
  * **[기본 templeatedEtails.xml 파일 생성][3]**
  * **[기본 index.php 파일 생성][4]**
  * **[템플릿 발견 및 설치][5]**
  * **[템플릿 패키지][6]**
  * **[결론][7]**

## 설정 디렉토리 구조   {#setup}
매우 기본적인 Joomla 템플릿을 먼저 만들려면 템플릿 폴더에서 새 폴더를 만듭니다. 템플릿을 호출하려는 모든 것을 폴더의 이름을 지정하십시오.
좋아하는 텍스트 편집기를 사용하면 파일 **index.php  **및 **  emplatedetails.xml **을 만듭니다. 이미지와 스타일 시트를 관리하려면  **이미지 **  및  **CSS ** 라는 2 개의 새로운 폴더를 만듭니다.  **CSS **  폴더 내부에서 ** template.css** 라는 파일을 만듭니다.
디렉토리 구조는 다음과 같이 보입니다

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Joomla 템플릿 디렉토리 구조">}}


## 기본 templeatedetails.xml 파일 생성   {#xml}
**emplatedetails.xml** 파일은 템플릿에 대한 모든 메타 데이터를 보유합니다. 그리고이 파일은 그것 없이는 필수적이며 템플릿은 Joomla!
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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
TemplateEtails.xml의 내용은 자명합니다. 내용을 복사하여 필요한 비트를 수정할 수 있습니다.
위치를 그대로 두십시오 - 일반적인 세트이므로 표준 템플릿에서 쉽게 전환 할 수 있습니다.

## 기본 색인 생성 .php 파일   {#php}
index.php는 Joomla의 모든 페이지의 기본 부트 스트랩 파일이됩니다! 제공합니다. 이 페이지에서는 베어 본 코드가 자신의 디자인으로 자르고 붙여 넣을 준비가되어 있습니다.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## 템플릿 발견 및 설치   {#install}
먼저 Joomla에게 말해야합니다! 새 템플릿을 만들었습니다. 이 기능은 Discover Extensions라고하며
```
Extensions -> Extension Manager -> Discover
```
발견 버튼을 클릭하여 템플릿을 발견 한 다음 템플릿을 선택하고 설치를 클릭하여 설치하십시오. 이제 템플릿이 템플릿 관리자 (스타일)에 표시되어
```
Extensions -> Template Manager
```

## 패키지 템플릿   {#packge}
여러 파일이있는 압축되지 않은 디렉토리는 배포하기에 좋은 방법이 아닙니다. 따라서 배포를 위해 템플릿 패키지를 만들어야합니다. 패키지는 zip 형식 (.zip 확장자) 일 수 있습니다.
템플릿이 디렉토리 MyTemplate/이면 패키지를 만들려면 해당 디렉토리에 연결하고 다음과 같은 명령을 사용할 수 있습니다.
```
zip -r ..\mytemplate.zip .
```

## 결론   {#conclusion}
이 기사에서는 Joomla 템플릿에 대해 배웠습니다. 우리는 Joomla 템플릿을 만드는 방법을 단계별로 진행했습니다. 이것은 템플릿 생성을 시작하기위한 매우 기본적인 튜토리얼입니다. 물론,이 베어 본 구조를 기반으로 매우 사용자 정의되고 향상된 템플릿을 구축 할 수 있습니다.

## 관련 제품 페이지
다음 링크를 찾을 수 있습니다.
  * [초보자를위한 Joomla 템플릿 개발 가이드][8]

  
[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
