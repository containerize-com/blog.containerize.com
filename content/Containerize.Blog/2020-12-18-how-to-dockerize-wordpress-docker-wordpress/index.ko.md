---
title: "WordPress를 dockerize하는 방법 | 도커 워드 프레스" 
seoTitle: "WordPress를 dockerize하는 방법 | 도커 워드 프레스" 
description: "Docker & Docker Compose는 무엇입니까? 이 기사에서는 Docker, Docker Compose를 설치하는 방법 및 WordPress를 Docker 컨테이너로 설치하는 방법을 배웁니다." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "컨테이너 소프트웨어는 애플리케이션을 묶고 종속성을 사용하고 앱을 모든 컴퓨팅 환경에서 실행하게합니다. WordPress를 조정하는 방법을 배우겠습니다." 
url: /ko/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## 컨테이너 소프트웨어는 애플리케이션을 묶고 종속성을 사용하고 앱을 컴퓨팅 환경에서 실행하게합니다. WordPress를 조정하는 방법을 배우겠습니다.

{{< figure align=center src="images/dockerwordpress.png" alt="WordPress를 dockerize하십시오">}}


## 개요
[블로깅][1] 오픈 소스 소프트웨어 카테고리의 다른 블로그 게시물에 오신 것을 환영합니다. 우리는 [무료 Civicrm WordPress 통합으로 리드를 향상][2], [WordPress 및 Gatsby를 사용하여 웹 사이트를 구축하는 방법][3] 등의 주제에 대한 몇 가지 기사를 게시했습니다. 그러나이 기사는 오픈 소스 블로깅 플랫폼 및**컨테이너 소프트웨어**에 대한 추가 통찰력과 세부 사항을 제공합니다. 우리는 Docker is is is docker compose**를 설치하는 방법과 같은 몇 가지 뜨거운 질문을 살펴볼 것이며 WordPress를 dockerize하는 방법을 배울 것입니다.
컨테이너화는 가상화의 대안으로 소프트웨어 개발의 주요 추세가되었습니다. 여기에는 소프트웨어 코드 및 모든 종속성을 캡슐화하거나 번들로 묶어 모든 인프라에서 일관되게 실행할 수 있습니다. 컨테이너화를 통해 개발자는 애플리케이션을 더 빠르고 더 안전하게 제작하고 배포 할 수 있습니다. Docker는 개발자 커뮤니티에서 사용되는 가장 인기있는 컨테이너화 응용 프로그램입니다. 이 튜토리얼에서는 Docker Compose를 사용하여 WordPress를 동조하는 방법을 배웁니다. 다음과 같은 점을 시작하겠습니다.
* [**Docker는 무엇입니까?**][4]
* [**왜 WordPress를 dockerize 해야하는지**?][5]
* **[Docker Compose를 설치하는 방법][6]**
* **[WordPress를 dockerize][7]**
* **[결론][8]**

## Docker는 무엇입니까?   {#docker}
간단히 말해서 Docker는 오픈 소스**컨테이너 소프트웨어**가 가상화를 더 빠르고 가벼워집니다. 너무 가벼워서 Docker 컨테이너를 몇 초만에 발사 할 수 있습니다. 또한 단일 PC에서 수십 개의 Docker 컨테이너를 쉽게 실행할 수 있습니다. 개발자는 Docker를 사용하여 컨테이너를 사용하여 응용 프로그램을 작성, 배포 및 실행합니다. 컨테이너를 사용하면 개발자가 라이브러리 및 기타 종속성과 같은 모든 부품을 사용하여 응용 프로그램을 포장하고 하나의 패키지로 배포 할 수 있습니다. 그렇게함으로써 개발자는 응용 프로그램이 모든 인프라에서 실행될 것이라고 확신 할 수 있습니다. 또한, 모든 관련성에 대한 최대한의 도움을 제공하기 위해 항상 살아있는 거대한 개발자 및 지원 커뮤니티가 있습니다. Docker는 강력한 기능과 사용으로 인해 모든 소프트웨어 기업의 필수 구성 요소가되었습니다.

## 왜 WordPress를 dockerize해야합니까?   {#왜}
이 섹션에서는 WordPress를 Dockerizing의 필요에 대해 알게 될 것입니다. WordPress는 Technology의 세계에서 고도로 채택 된 최고의 오픈 소스 블로깅 소프트웨어입니다. 그러나 WordPress를 로컬로 실행하려면 Apache/Nginx, MySQL Server, PHP 및 기타 많은 종속성이 필요합니다. 그리고 스테이징 또는 생산 환경에 배치하는 것은 해당 의존성을 관리 할 때 악몽입니다. 때로는 개발자와 지원 엔지니어가 시간과 인력을 요구할 때 배포를 반복적으로 반복하는 것이 번거롭게됩니다.
따라서 컨테이너화가 도움이 될 수 있습니다. Docker 만 있으면됩니다 - 설치 자체는 몇 초가 걸리며 추가 구성이 필요하지 않습니다.
Dev Machine, Stage 또는 Live Server와 OS가 있든 Docker는 어디에서나 동일하게 작동합니다. 즉, 한 환경에 나타나고 다른 환경에서 재현 할 수없는 버그를 찾을 필요가 없습니다.

## Docker Compose를 설치하는 방법   {#install}

## # 전제 조건
Docker Compose를 사용하여 Docker 컨테이너로 제작 된 고립 된 환경에서 WordPress를 쉽게 실행할 수 있습니다. 이 안내서는 Compose를 사용하여 WordPress를 설정하는 방법을 보여줍니다.
Docker Compose는 Docker Engine에 의존하므로 Docker Engine이 설치되어 있는지 확인하십시오. Mac 및 Windows 용 Docker Desktop과 같은 데스크탑 시스템에서 Docker Compose는 이러한 데스크탑 설치의 일부로 포함됩니다. 그러나 먼저 Linux Systems에서는 [공식 가이드][9]를 따라 Docker 엔진을 설치하십시오.

## # Linux에서 Compose 설치
Docker Compose의 현재 안정적인 릴리스를 다운로드하려면이 명령을 실행하십시오.
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
이진에 실행 가능한 권한을 적용하십시오.
```
sudo chmod +x /usr/local/bin/docker-compose
```
실행 버전 명령으로 테스트 설치 :
```
docker-compose --version
```

## # WordPress의 dockerfile을 정의하십시오
우리가해야 할 첫 번째 일은 우리의 이미지가**_ dockerfile _**에서 어떻게 보이는지 정의하는 것입니다. 응용 프로그램 소스와 함께 디렉토리에 추가되는 텍스트 파일입니다.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
“**/var/www/html/wordpress**”에는 테마, 플러그인 및 내용과 함께 WordPress의 전체 내용이 포함됩니다. 저장소에 테마 나 플러그인 만 포함 된 경우 관련 폴더를 추가하십시오.
WordPress 블로그를 시작하는 Docker-Compose.yml 파일을 작성하고 데이터 지속성을위한 볼륨 마운트가있는 별도의 MySQL 인스턴스를 시작하십시오.
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
이제 프로젝트 디렉토리에서 명령을 실행하십시오
```
docker-compose up -d
```
이것은**_ docker-compose _**분리 모드에서 실행되고 필요한 docker 이미지를 당기고 WordPress 및 데이터베이스 컨테이너를 시작합니다.
컨테이너가 시작되면 웹 브라우저에서 URL을 열고 애플리케이션 사용을 시작할 수 있습니다.
```
http://localhost:8000
```

## 결론   {#conclusion}
이것은 우리를이 블로그 게시물의 끝으로 가져옵니다. 이 기사에서는 Docker가 무엇인지 배웠습니다.**Docker Compose**를 설치하는 방법**. 또한 Docker-Compose를 사용하여 WordPress를 도커 화하는 방법을 배웠습니다. 또한 Docker의 개념과 간단한 멀티 컨테이너 응용 프로그램을 정의하는 방법을 소개했습니다. 그러나이 오픈 소스**컨테이너 소프트웨어**는 모든 소프트웨어 조직의 주요 옵션입니다. 따라서이 기사는 응용 프로그램을 위해 Docker를 선택하려는 경우 실제로 도움이됩니다. 아래의 "탐색"섹션에 나열된 다른 관련 기사 및 블로깅 소프트웨어가 많이 있습니다.
마지막으로, [Containerize.com][10]는 추가 오픈 소스 제품에 대한 기사를 작성하고 있습니다. 따라서 일반 뉴스 및 업데이트를 위해 [블로깅][1] 카테고리와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][11], [LinkedIn][12] 및 [Twitter][13]에서 우리를 따라갈 수 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [WordPress][14]
  * [Jekyll][15]
  * [담론][16]
  * [유령][17]
  * [Docker Compose로 WordPress를 dockerize하는 방법][18]
  * [무료 Civicrm WordPress 통합으로 리드를 향상 시키십시오][2]
  * [WordPress 및 Osticket을 사용하여 발권 시스템 자동화][19]
  * [WordPress와 담론 포럼을 통합하는 방법][20]
  * [상위 7 개 SEO 블로그를 따라 웹 사이트 검색 트래픽 증가][21]
  * [WordPress 및 Gatsby로 웹 사이트를 구축하는 방법][3]
  * [더 나은 PagSpeed ​​및 SEO를 위해 WordPress에서 GZIP 압축을 활성화하는 방법][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/ko/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
