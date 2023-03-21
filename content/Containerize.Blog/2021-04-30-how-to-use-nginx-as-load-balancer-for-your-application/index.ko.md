---
title: "응용 프로그램에 Nginx를로드 밸런서로 사용하는 방법" 
seoTitle: "응용 프로그램에 Nginx를로드 밸런서로 사용하는 방법" 
description: "Nginx는 인기있는 오픈 소스 웹 서버입니다. 고성능 및 확장 성으로 잘 알려져 있습니다. 이 튜토리얼에서는 Nginx를로드 밸런서로 사용하는 법을 배울 것입니다." 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx는 고성능 및 확장 성으로 인기가 있습니다. 1 위의 오픈 소스 웹 서버입니다. 이 튜토리얼에서는 Nginx를로드 밸런서로 사용하는 법을 배웁니다." 
url: /ko/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## nginx는 고성능과 확장 성으로 인기가 있습니다. 1 위의 오픈 소스 웹 서버입니다. 이 튜토리얼에서는 Nginx를로드 밸런서로 사용하는 법을 배웁니다.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Nginx를로드 밸런서로 사용하는 방법">}}

현대적인 높은 트래픽 웹 사이트는 수십만에 서비스를 제공하며 경우에 따라 사용자 나 고객의 수백만 개의 동시 요청이 있으며 올바른 텍스트, 이미지, 비디오 또는 응용 프로그램 데이터를 빠르고 신뢰할 수있는 방식으로 반환합니다. 이러한 높은 볼륨의 요구와 컴퓨팅 전력을 충족하려면 더 많은 서버가 필요합니다. 더 많은 서버를 사용하려면 이러한 서버 간의 트래픽을로드하는 방법이 필요합니다. 이 블로그 튜토리얼에서는로드 밸런서가 무엇인지, Nginx를로드 밸런서로 사용하는 방법을 살펴 보겠습니다.
NGINX로드 밸런싱을 전제 조건으로 구성하려면 NGINX와의로드 밸런싱의 장점을 확인하기 위해 웹 서버 소프트웨어를 설치하고 구성하여 두 개의 호스트가 있어야합니다. 이미 실행중인 웹 호스트 설정이있는 경우 사용자 정의 이미지를 만들어 새 웹 서버에 배포하여 복제하십시오. 클라우드 서버에 대한 단계별로 Nginx로드 밸런싱 구성을 설정하는 방법을 배우겠습니다.!
  * **[nginx 웹 서버][1]**
  * **[로드 밸런서][2]**
  * **[로드 밸런서 (라운드 로빈)로 nginx를 설정][3]**
  * **[다른 업스트림 지침에 대해][4]**
  * **[결론][5]**

## nginx 웹 서버   {#webserver}
Nginx는 고성능 오픈 소스 웹 서버입니다. HTTP 서버 기능 외에도 Nginx는 이메일 (IMAP, POP3 및 SMTP)의 프록시 서버 및 리버스 프록시로 기능하고 HTTP, TCP 및 UDP 서버의 균형 NGINX를로드 할 수 있습니다. 응용 프로그램의 성능, 신뢰성 및 보안을 향상시킵니다. 풍부한 기능 세트, 간단한 구성 및 낮은 자원 소비로 인기가 있습니다.
Nginx는 어떻게 작동합니까? NGINX는 일반적으로 여러 개별 서버에서 작동하는 분산 웹 응용 프로그램에 대한 단일 진입 지점으로 NGINX 역 프록시로드 밸런서로 사용됩니다. 비동기식 이벤트 중심 접근 방식을 사용하여 낮은 메모리 사용량과 높은 동시성을 제공합니다. nginx [여기][6]에 대한 자세한 내용을 읽을 수 있습니다.

##로드 밸런서   {#loadbalancer}
로드 밸런싱은 여러 서버에서 네트워크 트래픽을 배포하는 프로세스입니다. 이 배포 프로세스를 수행하는 "소프트웨어"또는 "하드웨어"를로드 밸런서라고합니다. 로드 밸런서는 서버 앞에 서서 모든 서버에서 클라이언트 요청을 라우팅하는 "트래픽 경찰"과 같습니다. 서버 중 하나가 다운 되어도 애플리케이션이 계속 작동합니다.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="로드 밸런서로서 Nginx">}}

로드 밸런서의 주요 기능은 다음과 같습니다.
  * 여러 서버에서 클라이언트 요청 또는 네트워크로드를 효율적으로 배포합니다.
  * 온라인 서버에만 요청을 보내서 고 가용성 및 신뢰성을 보장합니다.
  * 수요 지시에 따라 서버를 추가하거나 빼는 유연성을 제공합니다.

## 부하 밸런서로 nginx를 설정   {#setup}
Nginx 라운드 Robin Load Balancing을 설정하기 전에 서버에 Nginx를 설치해야합니다. apt-get으로 빠르게 설치할 수 있습니다.
```
sudo apt-get install nginx
```
라운드 로빈로드 밸런서를 설정하려면 Nginx 업스트림 모듈을 사용해야합니다. NGINX로드 밸런서 구성을 NGINX 설정으로 업데이트합니다. 웹 사이트의 구성을 열어 보겠습니다. 이 예를 위해 기본 구성 파일을 사용하고 있습니다.
```
sudo vi /etc/nginx/sites-available/default
```
Nginx로로드 밸런서를 구성하려면 파일에로드 밸런싱 구성을 추가해야합니다.
먼저 다음과 같이 보이는 Nginx 업스트림로드 밸런싱 용 업스트림 모듈을 포함해야합니다.
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
서버 블록의 프록시 엔드 포인트 로이 백엔드 업스트림을 사용하십시오.
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
nginx를 다시 시작하십시오
```
sudo service nginx restart
```
모든 서버가있는 한 NGINX 오픈 소스로드 밸런서가 방문자를 서버에 동일하게 배포하기 시작한다는 것을 알게됩니다. 이 동일한 분포를 라운드 로빈 하중 밸런싱이라고합니다.

## 업스트림 지침   {#upstream}
마지막 예에서는 간단한 업스트림 모듈을 사용하여 라운드 로빈로드 밸런싱을 수행하여 서버간에 트래픽을 균등하게 배포했습니다. 그러나 이것이 트래픽을 사용하는 가장 효율적인 방법이 아닐 수도있는 데는 여러 가지 이유가 있습니다. 사이트 방문자를보다 효과적으로 지시하는 데 사용할 수있는 몇 가지 지침이 있습니다.

### 무게
더 정밀하게 사용자를 서버에 할당하는 한 가지 방법은 특정 시스템에 특정 무게를 할당하는 것입니다. Nginx를 사용하면 각 서버에 지시되어야하는 트래픽의 비율을 지정하는 숫자를 할당 할 수 있습니다.
서버 무게가 포함 된로드 밸런스 설정은 다음과 같습니다.
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
기본 무게는 1입니다. 무게는 2의 중량으로, backend2.example은 백엔드 1보다 두 배나 많은 트래픽을 보내고, Backend3은 4 인 중량이 백엔드 2의 트래픽과 백엔드보다 4 배를 처리합니다. 1.

### 해시
IP HASH를 사용하면 서버가 IP 주소에 따라 클라이언트에 응답 할 수 있도록하여 방문 할 때마다 방문자를 동일한 VPS로 다시 보냅니다 (해당 서버가 다운되지 않는 한). 서버가 비활성 상태 인 것으로 알려진 경우 다운로 표시해야합니다. 다운 서버로 라우팅 해야하는 모든 IP는 대체 서버로 향합니다.
아래 구성은 예를 제공합니다.
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### Max가 실패합니다
기본 라운드 로빈 설정에 따르면, Nginx Application Load Balancer는 서버가 응답하지 않더라도 가상 개인 서버로 데이터를 계속 전송합니다. 최대 실패는 정해진 시간 동안 응답하지 않는 서버를 작동하지 않음으로써 자동으로이를 방지 할 수 있습니다.
최대 실패와 관련된 두 가지 요소가 있습니다 : Max \ _fails 및 Fall \ _timeout. Max Fails는 비활성으로 간주되기 전에 발생 해야하는 서버에 연결하려는 최대 실패 시도 수를 나타냅니다. fall_timeout 서버가 작동하지 않는 것으로 간주되는 길이를 지정합니다. 시간이 만료되면 서버에 도달하려는 새로운 시도가 다시 시작됩니다. 기본 시간 초과 값은 10 초입니다.
샘플 구성은 다음과 같습니다.
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## 결론 :   {#conclusion}
이 NGINX로드 밸런싱 자습서에서는 NGNIX,로드 밸런싱 및 NGINX로드 밸런서를 설정하여 트래픽을 여러 서버에 배포하는 방법에 대해 배웠습니다. 또한 Round-Robin, Hash 및 Max Fails와 같은 다양한로드 밸런싱 알고리즘을 탐색했습니다. 대량의 응용 프로그램을 실행 중이며 다른 서버에 부하를 배포 해야하는 경우 Nginx가 가장 좋은 선택 중 하나입니다. 그리고 가장 중요한 것은 100% 무료 및 오픈 소스 웹 서버입니다.
_ 당신은 [Twitter][7], [LinkedIn][8] 및 [Facebook][9] 페이지에서 우리와 함께 할 수 있습니다. 서버 리소스 가용성 및 효율성을 향상시키기위한 다른 강력한로드 밸런서 __ __ __ __ 사용은 무엇입니까? . 질문이나 피드백이 있으면 제발 _ [연락을 취하십시오][10].

## 탐구하다
아래에 더 관련된 기사를 찾을 수 있습니다
  * [우분투에 대한 암호화로 Nginx를 확보하고 암호화하는 방법][11]
  * [Apache vs Nginx - 2021 년의 상세 비교][12]

  
[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
