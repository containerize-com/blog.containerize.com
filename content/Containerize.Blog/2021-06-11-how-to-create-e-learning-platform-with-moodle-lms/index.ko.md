---
title: "Moodle LMS로 전자 학습 웹 사이트를 만드는 방법" 
seoTitle: "Moodle LMS로 전자 학습 웹 사이트를 만드는 방법" 
description: "Moodle LMS는 온라인 학습 플랫폼을 만들기위한 무료 및 오픈 소스 전자 학습 솔루션입니다. 익숙해 지려면 안내서를 확인하십시오." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "오픈 소스 전자 학습 플랫폼이있는 온라인 학습 플랫폼을 구축하십시오. 이 기사에서는 Moodle LMS를 사용하여 원격 학습 사이트를 만드는 방법에 대해 설명합니다." 
url: /ko/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## 오픈 소스 전자 학습 플랫폼이있는 온라인 학습 플랫폼을 구축하십시오. 이 기사에서는 Moodle LMS를 사용하여 원격 학습 사이트를 만드는 방법에 대해 설명합니다.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

우리는 1 년 넘게 Covid 19에 의해 괴로워했습니다. 세계의 모든 부분은 폐쇄 아래에 배치되었습니다. 전 세계 사람들의 삶과 기업에 부정적인 영향을 미칩니다. 더 중요한 것은 교육 시스템에 큰 영향을 미친다는 것입니다. 교육 기관은 학생들이 자신의 가정에서 편안하게 교육을 계속할 수 있도록 온라인 학습으로 전환해야합니다. 견고하고 안전한 전자 학습 플랫폼이 없으면 온라인 학습은 불가능합니다. 이 기사에서는 교사와 학생들이 어디서나 의사 소통하고 배울 수있는 **Moodle Open Source** 프로젝트를 살펴 보겠습니다.
우리는이 기사의 다음 섹션을 다루려면**Moodle을 사용하여 e- 러닝 웹 사이트를 만듭니다.
  * [전제 조건][1]
  * [기분이란?][2]
  * [Moodle의 특징][3]
  * [Moodle 설치][4]
  * [결론][5]

## 전제 조건 {#전제 조건}

아직하지 않은 경우 서버에 램프 환경을 설치하고 구성해야합니다.

## Moodle은 무엇입니까? {#What}

[ **Moodle**][6]는 무료 및 오픈 소스 전자 학습 솔루션입니다. Moodle은 모듈 식 객체 지향 동적 학습 환경을 나타냅니다. 교육자, 관리자 및 학습자에게 개별 학습 환경을 만들고 제공 할 수있는 전자 학습 플랫폼을 제공하기 위해 만들어졌습니다. 또한 Moodle은 학교, 대학 및 회사의 전문 교육 과정에 적합한 **LMS입니다. LMS 웹 사이트를 만들기위한 인기있는** 원격 학습 **솔루션 중 하나입니다. 또한 Moodle은 교사와 학생들에게 풍부한 도구와 공동 학습 환경을 제공합니다. Moodle에는 iPhone, Android 및 Windows 전화 및 태블릿 용 모바일 앱이 있습니다. 모바일 앱은 전 세계 어느 곳에서나 사용할 수 있습니다. 이** 자체 호스팅 된 LMS **는 PHP로 작성되었으며 MySQL/PostgreSQL 데이터베이스에 데이터를 저장합니다. 광범위한 사용자 및 개발자 문서가 제공됩니다. 모든 소스 코드는 [** github**][7]에서 사용할 수 있습니다. 이 오픈 소스** e- 러닝 솔루션**에 대한 라이센스는 gplv3+입니다.

## Moodle의 특징 {#Features}

Moodle에는 많은 기능이 제공됩니다. 그러나이 기사에서는 다음 주요 기능 중 일부를 살펴 보겠습니다.
**협업 도구 및 활동** : 포럼, 위키, 용어집, 데이터베이스 활동 및 기타 도구를 통해 사용자가 협력하고 함께 배울 수 있습니다. Moodle 코스의 요소 그룹을 활동이라고합니다. 활동은 일반적으로 학생이 다른 학생 및/또는 교사와 상호 작용하는 일입니다.
**추적 진행** : 교육자와 학생들은 특정 활동이나 자료를 추적하기위한 다양한 도구를 사용하여 진행 상황과 완료를 추적 할 수 있으며 코스 수준에서도 진행할 수 있습니다. 학년, 역량, 활동 완료, 코스 완료, 배지, 코스 보고서 및 분석과 같은 Moodle에서 학생의 진보를 추적하는 몇 가지 방법이 있습니다.
**플러그인 관리** : 플러그인을 사용하면 새로운 기능을 추가하여 Moodle의 기본 기능을 확장 할 수 있습니다. 사용자는 추가 활동, 새로운 퀴즈 질문 유형, 새로운 보고서, 시스템 커넥터 등과 같은 다양한 작업에 플러그인을 추가 할 수 있습니다. 관리자 인터페이스를 사용하여 플러그인을 설치하고 비활성화 할 수 있습니다.
**코스 관리** : 다양한 요구를 충족시키는 과정을 만들고 관리합니다. 강사 주도 수업, 자체 수업, 혼합 수업 및 완전히 온라인 수업은 모두 옵션입니다.
**동료 및 자체 평가** : 워크샵 및 설문 조사는 학생들이 자신의 및 기타 급우들의 작품을 그룹으로보고, 등급 및 검토하고 검토하도록 장려하는 내장 활동입니다.

## 무들 설치 {#Moodle}

아래 단계별 안내서를 따라 Ubuntu 18.04에 Moodle LMS를 설치하십시오.
  * 먼저 아래 명령을 실행하여 DirectLory 다운로드를 변경하고 Moodle을 다운로드하십시오.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * 다음 명령을 실행하여 데이터 디렉토리를 작성하고 권한을 설정합니다.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Moodle 사이트 용 Nginx 구성 파일을 만듭니다.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * 아래 코드를 추가하고 파일을 저장하십시오.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * 새로 생성 된 사이트를 활성화하려면 Symlink를 작성하십시오.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * nginx 웹 서버를 다시 시작합니다.
```
sudo systemctl restart nginx
```
  * 다음으로 브라우저를 열고 http://example.com을 입력하십시오. "example.com"을 서버의 실제 도메인 이름 또는 IP로 바꾸십시오.
  * 이제 설치 마법사를 볼 수 있습니다. 언어를 선택하고 다음 버튼을 클릭하십시오.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle- 언어를 선택하십시오">}}

  * 사이트 URL, Moodle Root 디렉토리 및 데이터 디렉토리 경로가 올바른지 검토하고 검토해야합니다. 또한 "데이터 디렉토리"경로를 변경할 수 있으며 보안을위한 Moodle Code 디렉토리 외부에 있어야합니다. 다음 버튼을 클릭하십시오.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle- 데이터 디렉토리 경로를 설정하십시오">}}

* 이 단계에서 데이터베이스 드라이버를 선택하십시오. 그러나 이미 선택한 것을 사용하고 다음 버튼을 클릭 할 수 있습니다.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle- 데이터베이스 드라이버를 선택하십시오">}}

  * 데이터베이스 호스트, 데이터베이스 이름, 데이터베이스 사용자, 데이터베이스 암호 및 테이블 접두사와 같은 데이터베이스 설정을 제공합니다. 다음 버튼을 클릭하십시오.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle- 데이터베이스 설정">}}

  * 확인 버튼을 클릭하여 이용 약관에 동의합니다.
  * 필요한 PHP 확장 목록을 볼 수 있습니다. 그러나 누락 된 애드온을 설치해야합니다. 다음 단계를 이동하려면 계속 버튼을 클릭하십시오.
* 이 시점에서 계정을 작성하려면 관리자 데이터를 작성해야합니다. "프로필 업데이트"버튼을 클릭하십시오.
  * 전체 사이트 이름, 사이트의 짧은 이름, 프론트 페이지 요약, 기본 시간대 및 반복 전자 메일과 같은 사이트에 대한 정보를 제공합니다. "변경 사항 저장"버튼을 클릭하십시오.
  * 사이트 이름, 언어, 지역, 이메일 주소 등과 같은 정보를 제공하여 사이트 등록을 완료하십시오.

## 결론 {#결론}

우리는이 기사에서 Moodle과 그 주요 기능에 대해 배웠습니다. 우리는 또한 **moodle lms**를 설정하기위한 단계별 접근 방식을 살펴 보았습니다. Moodle 's [**공식 문서** ][8]를 검토하여 코스, 학생 등록, 추적 진행 상황 등과 같은 다양한 기능에 더 편할 수 있습니다. 이 게시물이 LMS 웹 사이트를 만드는 데 유용하다는 것을 알게 되었기를 바랍니다.
마지막으로, [ **containerize.com**][9]는 추가 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트를 위해이 [**학습 관리 시스템** ][10] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
* [ **오픈 소스 LMS 도구** ][11]
* [ **Moodle-e- 러닝 시스템** ][12]



[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
