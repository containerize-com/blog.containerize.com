---
title: "Nginx를 리버스 프록시로 설정하고 구성하는 방법" 
seoTitle: "Nginx를 리버스 프록시로 설정하고 구성하는 방법" 
description: "이 튜토리얼은 Nginx를 리버스 프록시로 설정하고 구성하는 방법에 관한 것입니다. Nginx는 가장 인기있는 오픈 소스 리버스 프록시 웹 서버 중 하나로 간주됩니다." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx는 리버스 프록시 역할을 할 수있는 오픈 소스 웹 서버입니다. 이 튜토리얼을 사용하면 Nginx를 리버스 프록시로 설정하고 구성하는 방법을 배우는 데 도움이됩니다." 
url: /ko/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## nginx는 리버스 프록시 역할을 할 수있는 오픈 소스 웹 서버입니다. 이 튜토리얼을 사용하면 Nginx를 리버스 프록시로 설정하고 구성하는 방법을 배우는 데 도움이됩니다.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Nginx를 Reverse 프록시 서버로 사용하십시오">}}


## 개요 :
Nginx와 Apache는 가장 인기있는 오픈 소스 웹 서버 **종종 PHP와 함께 사용됩니다. 리버스 프록시 또는 게이트웨이는 클라이언트와 서버 간의 연결 역할을합니다. 클라이언트 및 서버는 서로 정보를 서로 교환하여 지속적이고 효율적으로 작업합니다. 가장 일반적인 리버스 프록시는 ** nginx 및 apache** 이며 여러 웹 사이트를 호스팅 할 때 동일한 가상 시스템에서 구성 할 수 있습니다. 리버스 프록시는 웹 서버를 공격으로부터 보호하고 연결 게이트웨이는 클라이언트에게 특수 리버스 프록시 NGINX 구성이 필요하지 않은 일반 웹 서버처럼 클라이언트에 나타납니다. 클라이언트는 리버스 프록시가 요청 된 정보를 전달할 위치를 결정한 다음 최종 출력 결과를 클라이언트에게 전달하는 동안 요청을 보냅니다.
Redis 튜토리얼에 대한 시리즈에 대한 많은 감사를 얻은 후 Nginx 튜토리얼에서 시리즈를 시작하라는 많은 요청을 받았습니다. 그래서 지난 주에 우리는 응용 프로그램에 [nginx 리버스 프록시로드 밸런서][1]를 사용하는 방법에 대한 자습서로 시작했습니다. 이 간단한 NGINX 리버스 프록시 구성 예제는 많은 안정성 및 NGINX 역 프록시 성능 이점을 제공합니다. Nginx Simple Reverse Proxy는 인터넷에서 가장 활발하게 사용되는 오픈 소스 Nginx 프록시 서버입니다. 이 튜토리얼에서는 Nginx를 리버스 프록시로 사용하는 방법과 단일 서버에서 리버스 프록시로 설정하는 방법을 구성하고 탐색합니다. 그래서 시작합시다!
  * 프록시 서버 란 무엇입니까?
  * 전방 대 리버스 프록시
  * 리버스 프록시를 구성하십시오
  * Nginx 역 프록시의 장점은 무엇입니까?
  * 결론

## 프록시 서버 란 무엇입니까?
**프록시 서버**는 당신과 인터넷 사이의 관문 역할을합니다. 최종 사용자를 찾는 웹 사이트에서 분리하는 중개 서버입니다. 프록시 서버는 사용 사례 또는 회사 정책에 따라 다양한 기능, 보안 및 개인 정보를 제공합니다.
프록시 서버를 사용하면 인터넷 트래픽이 요청한 주소로가는 길에 프록시 서버를 통해 흐릅니다. 그런 다음 요청은 동일한 프록시 서버 (주로)를 통해 돌아온 다음 프록시 서버는 웹 사이트에서 수신 된 데이터를 귀하에게 전달합니다.

## Forward vs Reverse Proxy :

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="리버스 프록시 서버로서 nginx">}}

일반적으로 우리가 프록시에 대해 말할 때, 대부분의 경우 우리는 전진 대리를 의미합니다.  **Forward Proxies** 는 중국의 그레이트 방화벽과 같은 국가 제한을 피하는 데 좋습니다. 클라이언트는 단순히 Forward Proxy를 통해 차단 된 리소스에 연결합니다. 전진 프록시는 IP 주소를 변경하여 사용자의 ID를 숨길 수 있습니다. 따라서 기본적으로 Forward Proxy가 클라이언트와 인터넷 사이에 위치하므로 End Server는 실제 클라이언트를 알지 못합니다.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="리버스 프록시로서 nginx">}}

**리버스 프록시 **는 또한 중개자 역할을하지만 연결의 다른쪽에 앉아 있습니다. 리버스 프록시는 **로드 밸런싱**, 웹 최적화 및 보안에서 우수합니다. 리버스 프록시는 일반적으로 여러 서버 간로드를 배포하거나 다른 웹 사이트에서 콘텐츠를 원활하게 표시하거나 HTTP 이외의 프로토콜을 통해 응용 프로그램 서버로 처리 요청을 전달하는 데 사용됩니다.

## nginx를 리버스 프록시로 구성하십시오.
Nginx가 요청을 프록시하면 요청을 지정된 프록시 서버로 보내고 응답을 가져와 클라이언트로 다시 보냅니다. 지정된 프로토콜을 사용하여 HTTP 서버 또는 비 HTTP 서버에 요청을 프록시 할 수 있습니다. 지원되는 프로토콜에는  **FastCGI, UWSGI, SCGI 및 MemCached** 가 포함됩니다.
HTTP 프록시 서버에 요청을 전달하려면 **proxy_pass  **지시문은**   위치** 내에 지정됩니다. 예를 들어:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
이 nginx 리버스 프록시 예제 구성은이 위치에서 처리 된 모든 요청을 지정된 주소의 프록시 서버로 전달합니다. 이 주소는 도메인 이름 또는 IP 주소로 지정할 수 있습니다. 주소에는 포트가 포함될 수도 있습니다.
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
예제에서 아래의 proxy **proxy \ _set \ _header ** 호스트의 nginx**  proxied server로 수정 된 또는 사용자 정의 헤더를 전달할 수도 있습니다.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx는 또한 버퍼링을 지원하여 성능을 향상시킵니다. 버퍼링 활성화를 사용하면 nginx는 클라이언트가 다운로드 해야하는 한 프록시 서버에서받는 응답을 저장합니다.
모든 요청을 단일 서버로 프록시하는 대신  **여러 백엔드 서버** 를 설정하고 해당 프록시 서버간에 Nginx 균형을로드 할 수도 있습니다. 우리는 이미 [nginx로드 밸런싱][1]에 대한 튜토리얼에서 이것을 다루었습니다.

## nginx 리버스 프록시의 장점은 무엇입니까?
다음은 nginx 리버스 프록시 서버를 설정하는 이점입니다.
  *NGINX는 가장 인기있는 오픈 소스 웹 서버 중 하나입니다.** 가장 인기있는 프록시 도구이기도합니다. NGINX 리버스 프록시 구성은 사용자에게 DDOS 및 DOS 웹 서버 공격에 대한 고급 보안을 제공하므로 구현하기가 매우 간단합니다.
  * **Dropbox, Netflix 및 Zynga** 와 같은 높은 트래픽 웹 사이트 및 백엔드 서버간에 균형 잡힌로드를 만드는 데 도움이됩니다.
  * 느린 백엔드 서버 및 높은 트래픽 사이트에 캐싱 메커니즘을 제공하여 Nginx 리버스 프록시 가상 호스트를 설정합니다. 클라이언트 측에서 각 웹 요청에 대한 새 프로세스를 설정할 필요는 없습니다.
  * 또한 HTTP, HTTPS, TCP, UDP, SMTP, IMAP 및 POP3 등과 같은 여러 프로토콜에 대한 리버스 프록시 서버 역할을합니다.
  *Nginx는 메모리 풋 프린트가 낮은 10000 개 이상의 연결을 처리 할 수 ​​있으며 단일 IP 주소에서 여러 웹 서버를 작동 할 수 있습니다.
  * 컨텐츠를 캐시하고 SSL 암호화를 수행하여 웹 호스트 서버에서로드를 낮추는 데 도움이됩니다. NGINX는 정적 콘텐츠를 압축하고로드 시간을 늘려서 정적 콘텐츠의 성능을 향상시키는 최고의 웹 서버 중 하나입니다.
  * 여러 서버 환경을위한 훌륭한 도구이며 단일 서버를 익명으로 유지하는 것과 같은 다른 작업에도 유용 할 수도 있습니다.

## 결론:
이 **nginx 리버스 프록시 튜토리얼 **에서는 nginx 프록시 서버가 무엇인지 탐색하고 Nginx 리버스 프록시를 설정했습니다. Forward와 Reverse Proxy Server Nginx의 차이. 또한 Nginx를 리버스 프록시로 설정하는 방법에 따라 배웠습니다. 이제**  nginx 리버스 프록시 구성을 단계별로 설치하는 방법을 완전히 이해합니다. 위의 자습서는 리버스 프록시 설정을 시작하는 데 도움이됩니다. 다가오는 튜토리얼에서는 Nginx에 대한 더 흥미로운 주제에 대해 논의 할 것입니다.
_ 쉽고 동적이며 완전한 기능을 갖춘 가장 좋아하는 _Reverse Proxy_ 서버는 무엇입니까?. Leading_ _open 소스에 대한 질문이 있습니까?

## 탐구하다
아래에 더 관련된 기사를 찾을 수 있습니다
  * [Apache를 Ubuntu/Debian의 역 프록시로 구성하는 방법][3]
  * [우분투에 대한 암호화로 Nginx를 안전하게 보안 20.04][4]
  * [응용 프로그램의로드 밸런서로 nginx를 사용하는 방법][1]
  * [우분투에 nginx를 사용하여 phpmyadmin을 설치하고 고정하는 방법][5]
  * [우분투/데비안의 NGINX에서 HTTP/2 지원을 구성][6]
  * [우분투에 Nginx를 사용하여 여러 PHP 버전을 설치][7]
  * [AWS 프로덕션 서버에서 승객으로 Nginx 설정][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
