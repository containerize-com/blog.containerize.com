---
title: "lighttpd | 오픈 소스 웹 서버 설정 및 구성 방법 " 
seoTitle: "lighttpd | 오픈 소스 웹 서버를 설정 및 구성하는 방법" 
description: "이 기사를 따라 Open-Source 웹 서버를 설정하고 구성하는 방법을 알아보십시오. LightTPD는 강력한 CPU로드 컨트롤과 함께 제공되는 호환 웹 서버입니다." 
date: Wed, 16 Dec 2020 12:53:41 +0000
author: bilalahmed
summary: "안전하고 경량 및 오픈 소스 웹 서버를 구성하십시오. LightTPD는 엔터프라이즈 레벨 무료 웹 서버이며 고도로 성능이 높은 웹 사이트에 가장 적합합니다." 
url: /ko/lighttpd-how-to-setup-configure-open-source-web-server/
categories: ['Web Server Solution Stack']
---

## 안전하고 경량 및 오픈 소스 웹 서버를 구성하십시오. LightTPD는 엔터프라이즈 레벨 무료 웹 서버이며 고도로 성능이 높은 웹 사이트에 가장 적합합니다.

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Websites.png" alt="오픈 소스 웹 서버">}}

[웹 서버 솔루션 스택][1] 카테고리의 다른 블로그 게시물에 오신 것을 환영합니다. 우리는 [[[Windows on Windows의 LocalHost As as Xampp 및 Phpmyadmin as as windows][2]][3], [2021 년의 상위 5 개 오픈 소스 웹 서버 솔루션 스택 등과 같은 많은 기사를 게시했습니다. [4]. 이 기사는 다양한 오픈 소스 웹 서버의 세부 가이드 기사와 함께 설정 프로세스 설정을 보여주었습니다. 실제로, 웹 서버는 90 년대에 소개되었으며 그 이후로 디지털 세계에서 최대한 인기를 얻었습니다. 인터넷이나 인트라넷을 통해 콘텐츠를 제공하는 데 첨부 된 많은 요소가 있습니다. 그러나 디지털 산업의 큰 부분은 웹 서버 솔루션을 유지하는 회사 나 커뮤니티에 연결되어 있습니다. 따라서 견고성, 보안, 신뢰성, 스토리지, 데이터 최적화 및 기타 요인과 같은 요소는 엔터프라이즈 수준 디지털 시스템의 주요 기둥입니다.
또한 오픈 소스 커뮤니티는 많은 오픈 소스 웹 서버 및 웹 프록시 서버를 개발하여 기업 부문이 자체 웹 서버를 구축하여 비즈니스 웹 사이트 및 소프트웨어를 호스팅 할 수 있도록했습니다. LightTPD 웹은 특히 Linux 시스템 용으로 설계된 무료 및 오픈 소스 웹 서버 솔루션 스택입니다. 이 블로그 게시물에서는 다음 지점을 다루어 LightTPD를 통과합니다.
  * [lighttpd 란 무엇입니까?][5]
  * [lighttpd의 이점][6]
  * [lighttpd를 구성하는 방법?][7]
  * [결론][8]

## lighttpd 란 무엇입니까?   {#무엇}
Apache 및 Nginx와 같은 다른 웹 서버와 비교하여 LightTPD 웹 서버에는 작은 메모리 풋 프린트가 있으므로 CPU로드의 효과적인 관리를 제공합니다. 이 가벼운 웹 서버는 FastCGI, SCGI, Auth, 출력 압축 및 URL 에어리터 등을 포함한 고급 기능 세트를 제공합니다.이를 통해 모든 프로그래밍 언어로 작성된 웹 애플리케이션이 서버와 함께 사용할 수 있습니다. LightTPD의 FASTCGI는 PHP를 지원하도록 구성 할 수 있습니다. PHP 외에도 Python, Perl, Ruby 등을 포함한 다른 프로그래밍 언어도 지원합니다.
많은 오픈 소스 웹 서버와 웹 프록시 서버가 있지만 LightTPD는 널리 사용되는 목록 위에 있습니다. 이 웹 서버 솔루션은 설정이 매우 쉽고 Ubuntu 18.04와 같은 간단한 요구 사항이 필요합니다. 또한이 오픈 소스 솔루션을 배포하려는 사람들은이 [링크][9]에서 최신 릴리스를 다운로드 할 수 있습니다. 무엇보다도 Python, Ruby, Perl 등과 같은 PHP 이외의 많은 언어를 지원합니다. 또한 개발 및 배포와 관련된 모든 문서를 사용할 수 있습니다. 따라서 개발자는 [GitHub][10]에서 소스 코드를 찾을 수 있습니다.

## lightpd의 이점   {#benefits}
이 섹션에서는이 오픈 소스 웹 서버가 제공하는 혜택과 조항을 살펴 보겠습니다. 따라서 빠르고 효율적이며 안전한 웹 서버를 찾고 있다면 LightTPD 웹 서버가 최선의 선택입니다. 많은 메모리와 CPU 사용이 필요하지 않습니다. 이는 속도와 고성능이 필요한 모든 프로젝트에 가장 적합합니다. LightTPD는 단일 서버에서 최대 10000 개의 연결을 병렬로 처리 할 수 ​​있습니다. LightTPD는 속도 또는 성능 문제를 겪고있는 모든 서버에 완벽한 솔루션입니다. 이 무료 솔루션은 비용 효율적이고 자원 효율적입니다.
또한이 웹 서버 솔루션은 Windows, Linux, Solaris 및 MacOS와 같은 거의 모든 인기있는 플랫폼을 지원합니다. 마찬가지로 LightTPD는 임베디드 시스템에 큰 도움이되며 자원이 제한되어 있어도 여러 사용자에게 정적 및 동적 컨텐츠를 제공 할 수 있습니다. 보안, 속도, 규정 준수 및 유연성으로 알려진 LightTPD는 웹 서버의 효율성을 빠르게 재정의하고 있습니다.
LightTPD는 다음과 같은 두드러진 이점을 제공합니다.
  * HTTP/2 지원
  * FASTCGI, SCGI, CGI 인터페이스 지원
  * TLS OCSP 스테이플 링
  * mod_proxy는 http/1.1 요청을 백엔드에 요청합니다 (http/1.0에서 변경)
  * chroot 및 mod_rewrite 사용에 대한 지원

## lighttpd를 구성하는 방법은 무엇입니까?   {#configure}
이 블로그 게시물 의이 섹션에서는 LightTPD를 구성하는 단계를 살펴 봅니다. 우분투에 LightTPD를 설치하는 것은 매우 간단하고 간단합니다. 다음 명령 만 사용하면 가기에 좋습니다.
```
$ sudo apt install lighttpd
```
소스에서 직접 lighttpd를 설치할 수도 있습니다. GIT에서 설치하려면이 명령을 사용하십시오
```
git clone https://git.lighttpd.net/lighttpd/lighttpd1.4.git
cd lighttpd1.4
./autogen.sh
```
SVN에서 설치하려면이 명령을 사용하십시오
```
svn checkout https://github.com/lighttpd/lighttpd1.4/trunk lighttpd1.4
```
이 명령을 사용하여 업데이트를 가져 오십시오
```
svn update
```
종속성을 설치하려면이 명령을 실행하십시오
```
apt-get build-dep lighttpd
```
그런 다음 다음과 같이 구성 명령을 사용하십시오
```
./configure --help
```
MAKE 명령을 사용하여 빌드하십시오
```
make
```
성공적인 빌드 후 이제 패키지를 설치하십시오
```
su make install
```
URL [http : // your-server-ip][11]를 방문하여 Lighttpd가 제대로 구성되고 설치되어 있는지 확인하십시오. 다음 페이지가 표시됩니다

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Web-1024x506.png" alt="고성능 웹 사이트의 Lighttpd를 설정하고 구성하는 방법">}}


## 결론   {#conclusion}
이것은 우리를이 블로그 게시물의 끝으로 가져옵니다. 우리는 LightTPD가 무엇인지 겪었습니까? lighttpd를 구성하는 방법? 절차 설정. LightTPD는 속도가 높은 환경을 위해 설계된 무료, 고성능 및 오픈 소스 웹 서버입니다. 낮은 메모리 발자국, 작은 CPU 부하 및 속도 최적화로 인해 부하 문제가있는 서버에 적합합니다. 다른 웹 서버에 비해 가볍고 안전하며 빠르며, 이는 고성능 및 속도가 높은 웹 사이트를위한 최고의 선택 중 하나입니다. LightTPD에는 문제와 쿼리를 지원하는 매우 살아 있고 활기찬 커뮤니티가 있습니다. 아래의 "탐색"섹션에 언급 될 수있는 많은 운영 오픈 소스 제품 및 관련 블로그 게시물이 있습니다. 따라서이 기사는 비즈니스를위한 오픈 소스 웹 서버를 선택하려는 경우 실제로 도움이 될 수 있습니다.
마지막으로,**[Containerize.com][12]**는 추가 오픈 소스 제품에 대해 글을 쓰고 있습니다. 정기적 인 업데이트를 위해이 [Web Server Solution Stack][1] S 카테고리와 연락하십시오. 또한 소셜 미디어 계정 [Facebook][13], [LinkedIn][14] 및 [Twitter][15]에서 우리를 따라갈 수 있습니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [XAMPP][16]
  * [nginx][17]
  * [캐디][18]
  * [lighttpd | 오픈 소스 및 가벼운 웹 서버 솔루션][19]
  * [최고의 오픈 소스 웹 서버 솔루션 스택 옵션][1]
  * [2021 년 상위 5 개 오픈 소스 웹 서버 솔루션 스택][4]
  * [Windows에서 로컬 호스트로 XAMPP 및 PhpmyAdmin을 설정][2]

  
[1]: https://products.containerize.com/solution-stack/
[2]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[3]: https://blog.containerize.com/2020/12/16/setup-and-configure-lighttpd-web-server-for-high-performance-websites/
[4]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[5]: #what
[6]: #benefits
[7]: #configure
[8]: #conclusion
[9]: http://www.lighttpd.net/download/
[10]: https://github.com/lighttpd/lighttpd1.4
[11]: http://your-server-ip/
[12]: https://www.containerize.com/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/solution-stack/xampp/
[17]: https://products.containerize.com/solution-stack/nginx/
[18]: https://products.containerize.com/solution-stack/caddy/
[19]: https://products.containerize.com/solution-stack/lighttpd
