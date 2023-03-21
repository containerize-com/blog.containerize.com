---
title: "우분투에서 우편을 사용하여 메일 서버를 설정하는 방법" 
seoTitle: "우분투에서 우편을 사용하여 메일 서버를 설정하는 방법" 
description: "오픈 소스 메일 서버로 웹 앱에서 이메일을 보내십시오. Postal을 사용하면 SMTP & HTTP API를 사용하여 이메일을 보내고 이메일 트래픽도 모니터링 할 수 있습니다." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "오픈 소스 메일 서버로 이메일을 보내고받습니다. 이 기사는 회사의 우편 메일 서버를 설치하고 구성하는 데 도움이됩니다." 
url: /ko/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## 오픈 소스 메일 서버로 이메일을 보내고받습니다. 이 기사는 회사의 우편 메일 서버를 설치하고 구성하는 데 도움이됩니다.

{{< figure align=center src="images/postal-banner.png" alt="오픈 소스 메일 서버">}}

최신 응용 프로그램에는 다양한 유형의 이벤트에 대한 이메일을 보내야합니다. 모든 비즈니스에는 나가는 이메일을 위해서는 안정적인 **메일 서버 **가 필요합니다. 또한 회사는 마케팅 캠페인, 뉴스 레터 및 기타 여러 작업을 위해 대량 이메일을 보내기위한 메일 서버가 필요합니다. 이것에 사용할 수있는 몇 가지  **오픈 소스 메일 서버 ** 가 있습니다. 그러나이 게시물에서 ** 우편 서버** 에 대해 자세히 설명하고 다음 주제를 다룰 것입니다.
  * [우편 서버 란 무엇입니까?][1]
  * [우편의 특징][2]
  * [우편 설치][3]
  * [결론][4]

## 우편 서버 란 무엇입니까?   {#우편 엽서}
[**postal **][5]는 무료 및  **오픈 소스 메일 서버 ** 입니다. 웹 사이트 및 웹 애플리케이션을위한 완전한 기능 메일 서버입니다. 우편 메일 서버는 Sendgrid 및 Mailgun과 같은 기존 인기  **메일 서버 ** 의 대안입니다.  **Postal ** 는 강력하고 안전하며 확장 가능한 오픈 소스 이메일 전송 플랫폼입니다. 모든 소스 코드와 문서는 [ **github ** ][6]에서 사용할 수 있습니다. 다운로드하고 개인 서버에 설치하고 완전히 제어 할 수 있습니다. 비즈니스 요구에 따라 개선하고 향상시킬 수도 있습니다. 또한 ** 우편 메일 서버** 는 여러 조직을 지원합니다.
사용자는 들어오고 나가는 메일의 양을 보여주는 그래프 및 통계를 볼 수 있습니다. 또한, 나가는 메시지 큐에 액세스 할 수 있습니다. 우편 메일 서버는 WebHooks에 대한 기능을 제공합니다. WebHooks를 설정하여 배송 정보에 대한 실시간 정보를 실시간으로받을 수 있습니다. 또한 모든 보내기 및 수신 된 메시지를 저장하고 검사 할 수있는 메시지 보존을 제공합니다. 사용자가 이메일을받을 수 있도록 비즈니스에서 이메일 배송이 매우 중요합니다. 그러나 때로는 이메일이 사용자에게 전달되며 문제를 조사해야합니다. 수신 및 나가는 메일 서버**는 또한 조사를 수행하기위한 완전한 로깅 및 도구를 제공합니다.

우편의 ## 특징  {#features}
우편 서버는 많은 기능을 제공합니다. 그러나이 기사에서 다음 주요 기능에 대해 논의 할 것입니다.
**이메일 보내기** : 우편 메일 서버는 HTTP API 및 SMTP를 포함한 나가는 이메일에 대한 두 가지 기술을 제공합니다. 웹 앱과 통합하기 위해 HTTP API를 쉽게 사용할 수 있습니다. 기존 애플리케이션 및 시스템과 통합하기 위해 SMTP 서버를 사용할 수도 있습니다.
**들어오는 이메일 **:  **들어오는 메일 ** 는 우편 메일 서버를 사용하여 HTTP Endpoint, ** SMTP 서버**  및 기타 이메일 주소로 전달할 수 있습니다.
**스팸 및 바이러스 점검** : Spamassassin 및 Clamav는 우편과 통합하여 우편 서버를 통과 할 때 들어오는 메시지 및 나가는 메시지를 자동으로 스캔 할 수 있습니다. 이 기능은 기본적으로 꺼져 있습니다.
**클릭 및 열기 추적** : 이메일 오프닝 및 클릭은 우편으로 추적 할 수 있습니다. 우편은 나가는 메시지를 스캔하고 우편 웹 서버를 통해 여행하는 새 링크로 링크를 바꿉니다. 사용자가 링크를 클릭하면 우편은 작업을 기록하고 즉시 원래 URL로 리디렉션합니다. 그러나 이것은 기본적으로 활성화되지 않습니다.
**IP 풀** : Postal을 사용하면 다양한 IP 주소에서 메시지를 보낼 수 있습니다. 이를 통해 여러 IP 주소를 다른 메일 서버에 할당하거나 발신자 또는 수신자 주소에 따라 다른 IP로부터 보낼 수 있습니다.

## 우편 설치   {#installation}
Ubuntu 18.04에 우편  **메일 서버 소프트웨어** 를 설치하려면 아래 단계별 안내서를 따라하십시오.
  * 먼저 서버 VIS SSH를 연결해야합니다. 최신 사용 가능한 패키지로 시스템을 업데이트하려면 다음 명령을 실행하십시오.
```
sudo apt-get update
```

### MariaDB 데이터베이스 서버를 설치하십시오
  * 명령을 실행하여 mariadb를 설치하십시오.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * 설치를 마치면. 이제 아래 명령을 실행하여 확보해야합니다.
```
mysql_secure_installation
```
  * 다음으로, 아래와 같이 몇 가지 질문을합니다. 모든 질문에 대답해야합니다.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * 다음 명령으로 mariadb 서버에 연결하십시오.
```
mysql -u root -p
```
  * 우편에 대한 데이터베이스를 만듭니다.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * 다음으로 새 비밀번호로 "postaluser"라는 데이터베이스 사용자를 만듭니다.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * 그 후, 사용자에게 "postaluser"데이터베이스에 대한 전체 액세스 권한을 부여하십시오.
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * 다음으로, 특권을 씻어 내고 다음 명령으로 Mariadb 쉘에서 나가십시오.
```
FLUSH PRIVILEGES;
EXIT;
```

### 루비를 설치하십시오
  * 먼저, Ruby를 설치하려면 타사 PPA를 추가하십시오. 다음 명령을 실행하십시오.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * 우분투 패키지를 업데이트하십시오.
```
sudo apt update
```
  * 아래 명령을 실행하여 루비를 설치하십시오.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### RabbitMQ를 설치하십시오
  * Erlang은 RabbitMQ를 설치해야하므로 설치해야합니다. 아래 명령으로 Ubuntu에 Erlang 저장소 키를 추가하십시오.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * 다음으로 다음 명령으로 Erlang 저장소를 추가하십시오.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Erlang을 설치하려면 다음 명령을 실행하십시오.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Erlang 설치가 완료되면 RabbitMQ를 설치할 수 있습니다. 우분투에 Rabbitmq 저장소를 추가하십시오.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * 다음 명령으로 RabbitMQ GPG 키를 추가하십시오.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * RabbitMQ 패키지를 설치하려면 아래 명령을 실행하십시오.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * RabbitMQ를 활성화하려면 아래 명령 아래로 실행되므로 시스템이 부팅 될 때 항상 시작됩니다.
```
sudo systemctl enable rabbitmq-server
```
  * 다음으로, 당신은 우편을 위해 Rabbitmq vhost와 사용자를 만들어야합니다. 다음 명령을 실행하십시오.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### nodejs를 설치하십시오
  * 다음 명령으로 nodejs 저장소를 추가하십시오.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * 다음으로 아래 명령을 실행하여 nodejs를 설치하십시오.
```
sudo apt-get install nodejs
```

### 우편 서버를 설치하십시오
  * 먼저 우편 메일 서버 용 사용자를 만들어야합니다. 다음 명령으로 작성하십시오.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * 다음으로 Ruby가 웹 포트에서들을 수 있도록하십시오.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * 다음 명령으로 필요한 모든 보석을 설치하십시오.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * 우편에 대한 디렉토리 구조를 만듭니다.
```
sudo mkdir -p /opt/postal/app
```
  * 다음으로, 최신 버전의 우편을 다운로드하십시오.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * 다음 명령으로 다운로드 된 파일을 추출하십시오.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * 다음으로 우편 디렉토리의 소유권을 변경하십시오.
```
sudo chown -R postal:postal /opt/postal
```
  * 아래 명령을 실행하여 우편 바이너리에 대한 Symlink를 만듭니다.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * 필요한 모든 종속성을 설치하십시오.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * 우편 구성을 초기화하려면 아래 명령을 실행하십시오.
```
sudo postal initialize-config
```
  * 다음으로 다음 명령을 실행하여 우편 구성 파일을여십시오.
```
sudo nano /opt/postal/config/postal.yml
```
  * 변경 사항을 굵게 표시하고 파일을 저장하십시오.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * 데이터베이스를 초기화하려면 명령을 실행하십시오.
```
sudo postal initialize
```
  * 우편에 대한 관리자 사용자를 만듭니다.
```
sudo postal make-user
```
  * 다음으로 아래 표시된대로 사용자 계정 세부 사항을 제공해야합니다.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   :*********

User has been created with e-mail address admin@example.com
```
  * 마지막으로 다음 명령을 실행하여 우편 응용 프로그램의 상태를 시작하고 확인하십시오.
```
sudo -u postal postal start
sudo -u postal postal status
```

### nginx를 설치하십시오
  * Nginx 웹 서버를 설치하려면 아래 명령을 실행하십시오.
```
sudo apt install nginx
```
  * 다음으로 우편 NGINX 구성을 복사하여이를 가상 호스트로 사용하십시오.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * 자체 서명 된 SSL 인증서를 만듭니다.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * 그 후에는 질문에 답해야합니다.
  * nginx 기본 가상 호스트 파일을 엽니 다.
  * server_name의 값을 변경하고 파일을 저장합니다.
  * 마지막으로 아래 명령을 실행하여 Nginx 웹 서버를 다시 시작하십시오.
```
sudo systemctl restart nginx
```
  * 마지막으로 브라우저를 열고 URL https://postal.example.com을 입력하십시오. 로그인 페이지로 리디렉션됩니다.

## 결론   {#conclusion}
우리는 우편 메일 서버의 소개 및 기본 기능을 깊이로 살펴 보았습니다. 또한이  **메일 송금 에이전트** 를 설정하기위한 단계별 지침도 포함 시켰습니다. 또한, 우리는 설정에 대한 통찰력을 제공했습니다. 우편 메일 서버를 설정하는 것은 간단한 프로세스입니다. 이 기사가 실제로 비즈니스의 우편 메일 서버를 설정하고 구성하는 데 도움이되기를 바랍니다.
마지막으로, [**containerize.com **][7]는 최신 오픈 소스 제품에 대한 블로그 게시물을 작성하는 일관된 프로세스에 있습니다. 따라서 최신 업데이트에 대해이 [**  거래 이메일**][8] 카테고리와 연락하십시오.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  *[ **최고 거래 이메일 소프트웨어** ][9]
  *[ **potal - 오픈 소스 메일 서버** ][5]
  *[ **5 최고의 오픈 소스 메일 서버 소프트웨어 2020 년 비즈니스** ][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
