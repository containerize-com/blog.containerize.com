---
title: "WordPress에서 Jekyll로 마이그레이션하는 방법" 
seoTitle: "WordPress에서 Jekyll로 마이그레이션하는 방법" 
description: "이 튜토리얼에서는 빠르고 쉬운 단계로 사이트를 WordPress에서 Jekyll로 마이그레이션하는 방법을 배웁니다. 시작하자!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "이 튜토리얼에서는 웹 사이트를 WordPress에서 Jekyll로 마이그레이션하는 방법을 배우고 Github로 비용이 들지 않습니다." 
url: /ko/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

##이 튜토리얼에서는 웹 사이트를 WordPress에서 Jekyll로 마이그레이션하고 Github로 무료로 호스팅하는 방법을 배우게됩니다.

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress에게 Jekyll">}}

Jeykll은 오픈 소스 정적 사이트 생성기입니다. 일반 텍스트를 정적 웹 사이트 및 블로그로 변환합니다. 좋아하는 마크 업 (Markdown, Liquid, HTML / CSS) 언어로 작성된 텍스트를 사용하고 레이아웃을 사용하여 정적 웹 사이트를 만듭니다. Jekyll은 블로그 인식 및 퍼머 링크, 카테고리, 페이지, 게시물 및 사용자 정의 레이아웃은 모두 일류 시민입니다. Jekyll의 가장 큰 장점 중 하나는 GitHub 페이지에서 정적 웹 사이트를 호스팅하고 웹 사이트 나 블로그를 무료로 운영 할 수 있다는 것입니다. 따라서 WordPress to Jekyll Migration은 웹 사이트의 성능과 속도를 향상시키는 데 도움이 될 수 있습니다.
이 블로그 게시물에서는 기존 웹 사이트 나 블로그를 WordPress에서 Jekyll로 마이그레이션하여 더 나은 속도와 성능을 제공하는 방법을 살펴 보겠습니다. 그래서 시작합시다!
*  **[왜 이주 하는가?][1]**  
*  **[설치][2]**  
*  **[WordPress 게시물과 페이지 가져 오기][3]**  
*  **[GitHub 페이지로 배포][4]**  
*  **[결론][5]**  

## 왜 마이그레이션해야합니까? {#why}

Jekyll에서는 데이터베이스 상호 작용이 없기 때문에 100/100 [Lighthouse Score][6]를 얻을 수 있습니다. 그리고 모든 컨텐츠는 전처리되어 HTML 파일로 저장됩니다. 그리고 Jekyll은 최소한의 HTTP 요청 만 할 것입니다. 따라서 매우 빠릅니다.

## Jekyll 설치 및 설정 {#install}

Jekyll은 Ruby로 작성되었습니다. 따라서 컴퓨터에 먼저 설치해야합니다. 이 안내서는 이미 컴퓨터에 Ruby를 설치했다고 가정합니다. 그렇지 않다면 [공식 가이드][7]를 따를 수 있습니다.
먼저, 우리는“  **jekyl** ”및“  **bundler**  ”보석을“ **gem**  ”명령을 사용하여 Ruby를 설치 한 후 사용할 수 있습니다. 명령 줄을 열고 다음 코드를 실행하십시오.
```
gem install jekyll bundler
```
그런 다음 다음 명령을 실행하여 새로운 사이트를 만듭니다.  **MyBlog**  폴더가 생성됩니다.
```
jekyll new myblog
```
일단 설치되면 사이트를 구축하여 로컬 서버에서 사용할 수있게 할 수 있습니다.
```
bundle exec jekyll serve
```
사이트는 http : // localhost : 4000에서 제공됩니다. 또한 폴더에서 "  **_ site**  "폴더를 생성합니다. 이것이 사이트의 최종 출력이 무엇인지를 생성합니다.

## WordPress 페이지 및 게시물을 가져옵니다 {#import}

WordPress의 비공식 플러그인도 사용할 수 있지만이 튜토리얼의 공식 방법을 따라갈 것입니다. WordPess Expler Plugin을 사용하려면 [여기로 이동][8].
자체 호스팅 된 WordPress 웹 사이트에서 게시물을 가져 오려면 터미널에서 다음 명령을 실행하십시오.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
이것은 게시물 및 페이지 데이터 및 컨텐츠 만 가져옵니다. 이 수입업자는 귀하의 게시물 만 변환하고 Yaml 프론트 미터를 만듭니다. 레이아웃, 스타일링 또는 외부 파일 (이미지, CSS 등)을 가져 오지 않습니다.

##  **GitHub 페이지로 배포**  {#deploy}

지금까지 우리는 Jekyll 블로그를 로컬로 만들었습니다. 이제 우리는 그것을 Github에 배포 할 것입니다. 우선, 우리는 [git][9]를 사용하여 사이트를 제어해야합니다. 사이트 폴더에서 다음 명령을 실행하십시오.
```
git init
git add .
git commit -m "Initial Commit"
```
Jekyll을 설치할 때는 적어도 다음 내용이있는 루트에 "  **. gitignore**  "파일을 자동으로 생성해야합니다.
그런 다음 github에 로그인하고 새 저장소를 작성하십시오. yourname.github.io
다음으로 저장소의 HTTPS URL을 복사하십시오.

{{< figure align=center src="images/github-img.png" alt="github https url">}}

그런 다음 원격 저장소를 추가하고 코드를 푸시하십시오.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
완료! 이제 귀하의 사이트는 YourName.github.io에서 사용할 수 있어야합니다

## 결론 {#conclusion}

이 기사에서는 Jekyll 사이트로 정적 블로그를 작성하는 방법을 배웠습니다. 그런 다음 WordPress에서 Jekyll로 게시물과 페이지를 내보내는 방법을 배웠습니다. 마지막으로 최종 사이트를 GitHub 페이지에 배치했습니다.



 [1]: #why
 [2]: #install
 [3]: #import
 [4]: #deploy
 [5]: #conclusion
 [6]: https://web.dev/performance-scoring/
 [7]: https://www.ruby-lang.org/en/documentation/installation/
 [8]: https://wordpress.org/plugins/jekyll-exporter/
 [9]: https://git-scm.com/
