---
title: "LocalHost에서 CMDB 솔루션 RALPH를 설정하는 방법" 
seoTitle: "LocalHost에서 CMDB 솔루션 RALPH를 설정하는 방법" 
description: "이 튜토리얼은 LocalHost에서 Ralph를 설정하는 것입니다. Ralph는 자산 및 구성을 추적하는 기능을 제공하는 무료 CMDB 솔루션입니다." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "IT 자산 관리 솔루션은 운영 비용을 줄이고 효율성을 높입니다. 이 기사는 로컬 컴퓨터에서 CMDB 소프트웨어 Ralph를 설정하는 방법에 관한 것입니다." 
url: /ko/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## IT 자산 관리 솔루션은 운영 비용을 줄이고 효율성을 높입니다. 이 기사는 로컬 컴퓨터에서 CMDB 소프트웨어 Ralph를 설정하는 방법에 관한 것입니다.

{{< figure align=center src="images/ralph.png" alt="CMDB 솔루션">}}


##  **개요** 
현재 시점에서 조직은 엄청난 IT 인프라를 사용하여 기술의 속도를 충족시키기 위해 번성하고 있습니다. 다음으로, 그러한 거대한 환경을 관리하는 것은 어려운 일이 아닙니다. 이러한 중요한 작업을 수행하려면 인력과 기술력이 필요합니다. 때때로, 프린터, 데스크탑 컴퓨터, 스캐너, 전화 및 기타 IT 액세서리를 포함한 복잡한 시스템 네트워크를 처리하기위한 프로세스 및 절차를 공식화하는 것은 번거 로움이됩니다. 마찬가지로, 네트워크의 모든 시스템의 다운 타임 가능성이 높기 때문에 이러한 노드의 구성도 중요합니다. 따라서 이러한 구성에 대한 일관된 점검이 있어야합니다.
그러나 자산을 추적하고 기록 할 수있는 많은 오픈 소스 및 무료 소프트웨어가 있습니다. 이 소프트웨어는 구성 관리 데이터베이스 소프트웨어 (CMDB)라고합니다. 최근 [Containerize.com][1]는 더 나은 자산 및 구성 관리를위한 많은 기능을 제공하는 CMDB 솔루션 [RALPH][2]를 발표했습니다. 이 블로그 게시물에서는 다음 사항을 다루어 Ralph를 탐색 할 것입니다.
  * **[CMDB 소프트웨어 자산 관리 Ralph의 간단한 소개][3]**
  * **[Ralph의 특징][4]**
  * **[Localhost에서 Ralph를 설정하는 방법?][5]**
  * **[결론][6]**

## CMDB 소프트웨어 자산 관리 Ralph의 간단한 소개   {#intro}
Ralph는 무료 오픈 소스 IT 자산 관리 솔루션입니다. 크로스 플랫폼이며 자체 호스팅 기능이 제공됩니다. 실시간 자산 추적의 완전한 생태계가 있습니다. 따라서 사용자는보고를 위해 분석을 수행 할 수 있습니다. 이를 통해 사용자는 수명주기에 대한 자산의 세부 정보를 기록 할 수 있습니다. 또한이 오픈 소스 디지털 자산 관리 소프트웨어는 데이터 센터 자산에 대한 정보를 저장할 수있는 공간을 제공합니다. 반면 에이 CMDB 솔루션은 소프트웨어, 라이센스, 인증서 및 기타 계약 관리를 지원합니다. Ralph는 자산 관리를 지원할뿐만 아니라 해당 자산에 대한 조치를 수행 할 수있는 조항도 제공합니다. 그러나 조치는 호스트 배포, 송장 생성, 도메인 추적 또는 인벤토리 관리와 관련이 있습니다.
이 IT 자산 관리 솔루션에는 편안한 인터페이스가 제공됩니다. 개발자는이 오픈 소스 무료 도구에 노출 된 API 엔드 포인트를 사용하여 많은 타사 응용 프로그램을 통합 할 수 있습니다. 또한 Ralph는 HTML, CSS 및 JavaScript의 입력과 함께 Python으로 작성되었습니다. 따라서 개발 및 배포에 관한 포괄적 인 문서가 있습니다. 이 주식 관리 솔루션의 소스 코드는 [Github][7]에서 사용할 수 있습니다.

Ralph의 ## 기능  {#features}
Ralph는 많은 기능을 제공합니다. 그러나 다음 주요 기능 중 일부를 언급 할 것입니다.
**Extensible** :이 오픈 소스 디지털 자산 관리 소프트웨어는 확장 가능합니다. 개발자는 필요에 따라 구내 또는 클라우드에 배치 할 수 있습니다.
**데이터 센터 지원 :** Ralph는 또한 데이터웨어 하우스, 데이터 센터 룸, 서버 및 랙을 지원합니다. 사용자는 모든 구성 요소, 네트워크 및 구성을 추적 할 수 있습니다.
**REST API** :이 무료 CMDB 소프트웨어는 사용자 정의 가능합니다. 실제로, 그것은 타사 통합을위한 REST API를 제공합니다. 개발자는 요구 사항에 따라 확장 할 수 있습니다.
**직관적 인 사용자 인터페이스 :**이 CMDB 솔루션에는 사용자가 쉽게 탐색 할 수있는 논리적 인 사용자 인터페이스가 있습니다. 또한 관리 대시 보드는 데이터가 실시간으로 나오는 다양한 위젯을 제공합니다.
**명령 줄 인터페이스** : Ralph는 호스트 배포를위한 MAC 주소를 발견 할 수있는 시설을 제공하는 명령 줄 인터페이스를 제공합니다.
**비 물리 자산 지원** :이 장비 관리 솔루션은 물리적 자산에 대한 지원을 제공 할뿐만 아니라 도메인, 소프트웨어 및 라이센스와 같은 비 물리적 자원을 관리합니다.

## LocalHost에서 Ralph를 설정하는 방법은 무엇입니까?   {#설정}
이 섹션에서는 로컬 컴퓨터의 리소스 관리 소프트웨어 Ralph의 설치 프로세스를 살펴 보겠습니다. 설정하고 사용하기가 매우 쉽습니다.
다음 섹션으로 이동하기 전에 다음 전제 조건을 설치했는지 확인하십시오.
  * [docker-compose][8]
  * [Docker][9]
대부분의 오픈 소스 소프트웨어는 다양한 플랫폼의 배포를위한 Docker 이미지를 제공합니다. 개발자에게 쉽게 편안하게 제공하고 개발 및 배포 프로세스 속도를 높입니다.
전제 조건이 설치되면 Docker를 켜십시오. 이제 터미널을 열고 다음 명령을 실행하여 빈 디렉토리를 만듭니다.
```
mkdir ralph<br>cd ralph
```
그 후‘docker-compose.yml’이라는 새 파일을 만들어 다음 데이터로 채우십시오.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
이제 파일을 저장하고 다음 명령을 실행하여 빌드를 만듭니다.
```
docker-compose build

```
성공적인 빌드시 데이터베이스에 대한 다음 명령을 실행하십시오.
```
docker-compose run –rm web /root/init.sh

```
모든 것이 잘되면 다음 명령을 실행하여 Docker의 컨테이너를 회전시킵니다.
```
docker-compose up -d
```
이 명령을 실행 한 후 Docker 컨테이너는 아래 이미지와 같이 가동되고 실행됩니다.

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="CMDB 솔루션">}}

마지막 으로이 주소 http://127.0.0.1에서 브라우저를 열고 응용 프로그램에 액세스하십시오.
아래 이미지에 표시된대로 로그인 페이지를 표시합니다.

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="CMDB 솔루션">}}


## 결론   {#conclusion}
이 CMDB 튜토리얼 블로그 게시물을 살펴본 후에는 좋은 CMDB 솔루션이 없으면 자산 관리가 거의 불가능하다는 것이 분명합니다. 자원 관리 소프트웨어는 자산, 구성 및 관계를 관리 및 추적하는 데 특정 역할을합니다. 디지털 또는 물리적 자산에 대해 거의 변경되지 않은 변경 사항을 추적하는 조항이 있습니다. 이 무료 도구는 세부적인 문서와 지침을 설정, 사용 및 제공하기 쉽습니다. 마지막으로, [**containerize.com **][1]은 추가 오픈 소스 제품에 대한 기사를 작성하기위한 것입니다. 따라서 최신 업데이트에 대한이 [][10]**  [CMDB 소프트웨어][11]** 카테고리와 연락하십시오.

## 탐구하다
  * **[CMDB 소프트웨어][11]**
  * **[Ralph][2]**
  *[ **무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화** ][12]
  * **[2021 년에 찾을 소프트웨어 개발 동향][13]**

  
[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
